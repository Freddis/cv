import {AnyRoute, HeadContent, Scripts, useLocation} from '@tanstack/react-router';
import {FC, MouseEventHandler, ReactElement, StrictMode, useEffect, useMemo, useState} from 'react';
import {cvRoute, homeRoute, projectsRoute} from '../../routes/routes';
import {cn} from '../../utils/cn';
import {CvPage} from '../pages/Cv/CvPage';
import {Home} from '../pages/Home/Home';
import {Projects} from '../pages/Projects/Projects';
import {RxHamburgerMenu} from 'react-icons/rx';
import {NotFound} from './NotFound';
import {MobileMenuDrawer} from '../elements/MobileMenuDrawer';
import {MainMenu} from '../elements/MainMenu';

export const RootLayout: FC = () => {
  const routes = useMemo(() => [
    [homeRoute, <Home />],
    [cvRoute, <CvPage />],
    [projectsRoute, <Projects/>],
  ]as const satisfies [AnyRoute, ReactElement][], []);

  const possibleLocations = routes.map((x) => x[0].id);
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState('');
  const [firstRender, setFirstRender] = useState(true);
  const [inClasses, setInClasses] = useState('visible relative');
  const [outClasses, setOutClasses] = useState('visible');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (firstRender) {
      // preventing animations on the first render
      setFirstRender(false);
      return;
    }
    const animations: [string, string][] = [
      ['animated-section-rotateRoomLeftIn', 'animated-section-rotateRoomLeftOut animated-section-ontop'],
      ['animated-section-rotateRoomRightIn', 'animated-section-rotateRoomRightOut animated-section-ontop'],
      // ['animated-section-rotateRoomTopIn', 'animated-section-rotateRoomTopOut animated-section-ontop'],
      // ['animated-section-rotateRoomBottomIn', 'animated-section-rotateRoomBottomOut animated-section-ontop'],
    ];
    const prevLocationIndex = possibleLocations.findIndex((x) => x === prevLocation);
    const locationIndex = possibleLocations.findIndex((x) => x === location.pathname);
    const index = prevLocationIndex < locationIndex ? 0 : 1;
    // const index = Math.floor(Math.random() * animations.length); // random pick
    const classes = animations[index];
    if (!classes) {
      throw new Error('Animation not found');
    }
    setInClasses(`${classes[0]} visible relative`);
    setOutClasses(`${classes[1]} visible`);
  }, [location.pathname]);

  const savePrevLocation: MouseEventHandler<HTMLAnchorElement> = () => {
    setPrevLocation(window.location.pathname);
    window.scrollTo({top: 0, behavior: 'smooth'});
    setShowMenu(false);
  };

  return (
    <html className="bg-main">
      <head>
        <HeadContent />
      </head>
      <body className="font-[Poppins] bg-main" >
        <StrictMode>
          <div className="flex flex-row min-h-screen">
            <div className="md:hidden">
              {showMenu && <MobileMenuDrawer onClose={() => setShowMenu(false)}/>}
            </div>
            <div className="hidden md:flex md:min-w-80">
              <MainMenu onClick={savePrevLocation}/>
            </div>
            <div className="grow flex flex-col items-center relative overflow-hidden">
              <div className="block md:hidden text-3xl text-accent absolute right-5 top-5 z-100 cursor-pointer">
                <RxHamburgerMenu onClick={() => setShowMenu(!showMenu)} />
              </div>
              {routes.map((row) => (
                <div key={row[0].id} className={cn(
                  'max-w-7xl w-full min-h-screen invisible absolute',
                  row[0].id === location.pathname ? inClasses : '',
                  row[0].id === prevLocation ? outClasses : ''
                )}>
                {row[1]}
              </div>
              ))}
              {!possibleLocations.find((x) => x === location.pathname) && (
                <div className={cn('max-w-7xl w-full min-h-screen')}>
                  <NotFound/>
                </div>
              )}

            </div>
          </div>
          <Scripts />
        </StrictMode>
      </body>
    </html>
  );
};
