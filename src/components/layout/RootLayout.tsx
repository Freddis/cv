import {HeadContent, Scripts, useLocation} from '@tanstack/react-router';
import {FC, MouseEventHandler, StrictMode, useEffect, useState} from 'react';
import {cvRoute, homeRoute, projectsRoute} from '../../routes/routes';
import {cn} from '../../utils/cn/cn';
import {CvPage} from '../pages/Cv/CvPage';
import {Home} from '../pages/Home/Home';
import {Projects} from '../pages/Projects/Projects';
import {RxHamburgerMenu} from 'react-icons/rx';
import {NotFound} from './NotFound';
import {MobileMenuDrawer} from '../elements/MobileMenuDrawer';
import {MainMenu} from '../elements/MainMenu';

export const RootLayout: FC = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState('');
  const [firstRender, setFirstRender] = useState(true);
  const [inClasses, setInClasses] = useState('visible relative');
  const [outClasses, setOutClasses] = useState('visible');
  const [showMenu, setShowMenu] = useState(false);

  const routes = [
    homeRoute,
    cvRoute,
    projectsRoute,
  ];
  const possibleLocations = routes.map((x) => x.id);
  const hiddenOrNot = showMenu ? '' : 'hidden';
  useEffect(() => {
    if (firstRender) {
          // preventing animations on the first render
      setFirstRender(false);
      return;
    }
    const index = Math.floor(Math.random() * animations.length);
    const classes = animations[index];
    if (!classes) {
      throw new Error('Animation not found');
    }
    setInClasses(`${classes[0]} visible relative`);
    setOutClasses(`${classes[1]} visible`);
  }, [location.pathname]);

  const animations: [string, string][] = [
  ['animated-section-rotateRoomLeftIn', 'animated-section-rotateRoomLeftOut animated-section-ontop'],
  ['animated-section-rotateRoomRightIn', 'animated-section-rotateRoomRightOut animated-section-ontop'],
  // ['animated-section-rotateRoomTopIn', 'animated-section-rotateRoomTopOut animated-section-ontop'],
  // ['animated-section-rotateRoomBottomIn', 'animated-section-rotateRoomBottomOut animated-section-ontop'],
  ];
  const savePrevLocation: MouseEventHandler<HTMLAnchorElement> = (e) => {
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
              <div className={cn(
                'max-w-7xl w-full min-h-screen invisible absolute',
                homeRoute.id === location.pathname ? inClasses : '',
                homeRoute.id === prevLocation ? outClasses : ''
                )}>
                <Home />
              </div>
             <div className={cn(
                'max-w-7xl w-full min-h-screen invisible absolute',
                cvRoute.id === location.pathname ? inClasses : '',
                cvRoute.id === prevLocation ? outClasses : ''
                )}>
                <CvPage />
              </div>
               <div className={cn(
                'max-w-7xl w-full min-h-screen invisible absolute',
                projectsRoute.id === location.pathname ? inClasses : '',
                projectsRoute.id === prevLocation ? outClasses : ''
                )}>
                <Projects />
              </div>
              {/* {!possibleLocations.find((x) => x === location.pathname) && (
                <div className={cn(
                'max-w-7xl w-full min-h-screen',
                projectsRoute.id === location.pathname ? inClasses : '',
                projectsRoute.id === prevLocation ? outClasses : ''
                )}>
                <NotFound/>
              </div>
              )} */}

            </div>
          </div>
          <Scripts />
        </StrictMode>
      </body>
    </html>
  );
};
