import {HeadContent, Link, Scripts, useLocation, useNavigate} from '@tanstack/react-router';
import {FC, MouseEventHandler, StrictMode, useEffect, useState} from 'react';
import {cvRoute, homeRoute, projectsRoute} from '../../routes/routes';
import {FaBurger, FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa6';
import {cn} from '../../utils/cn/cn';
import {MainMenuLink} from '../elements/MainMenuLink';
import {CvPage} from '../pages/Cv/CvPage';
import {Home} from '../pages/Home/Home';
import {Projects} from '../pages/Projects/Projects';
import {RxHamburgerMenu} from 'react-icons/rx';
import {PrimaryButton} from '../elements/PrimaryButton';
import {NotFound} from './NotFound';

export const RootLayout: FC = () => {
  const location = useLocation();
  const [prevLocation,setPrevLocation] = useState('')
  const [firstRender, setFirstRender] = useState(true) 
  const [inClasses, setInClasses] = useState('visible relative');
  const [outClasses, setOutClasses] = useState('visible');
  const [showMenu, setShowMenu] = useState(false);

  const routes = [
    homeRoute,
    cvRoute,
    projectsRoute,
  ]
  const possibleLocations = routes.map(x => x.id)
  const hiddenOrNot = showMenu ? '': 'hidden';
  useEffect(() => {
      if(firstRender){
          setFirstRender(false);
          return
      }
      const index = Math.floor(Math.random() * animations.length);
      const classes = animations[index];
      if(!classes){
        throw new Error("Animation not found")
      }
      setInClasses(`${classes[0]} visible relative`)
      setOutClasses(`${classes[1]} visible`)
  },[location.pathname])

 const animations: [string, string][] = [
  ['animated-section-rotateRoomLeftIn', 'animated-section-rotateRoomLeftOut animated-section-ontop'],
  ['animated-section-rotateRoomRightIn', 'animated-section-rotateRoomRightOut animated-section-ontop'],
  ['animated-section-rotateRoomTopIn', 'animated-section-rotateRoomTopOut animated-section-ontop'],
  ['animated-section-rotateRoomBottomIn', 'animated-section-rotateRoomBottomOut animated-section-ontop'],
];
  const savePrevLocation: MouseEventHandler<HTMLAnchorElement> = (e) => {
    setPrevLocation(window.location.pathname)
    window.scrollTo(0,0)
    setShowMenu(false)
  }

  return (
    <html className='bg-main'>
      <head>
        <HeadContent />
      </head>
      <body className='font-[Poppins] bg-main' >
        <StrictMode>
          <div className="flex flex-row min-h-screen">
            <div className={cn('z-1000 fixed md:static md:flex flex flex-col gap-5 0 p-5 text-center bg-surface text-on-surface w-80 shrink-0',hiddenOrNot)}></div>
            <div className={cn("z-1000 fixed flex md:flex flex-col gap-5 0 p-5 text-center bg-surface text-on-surface w-80 shrink-0  min-h-screen",hiddenOrNot)}>
              <div className='mt-10'>
                <h2 className='text-3xl font-semibold mb-2'>Alex Sarychev</h2>
                <h3 className='font-light text-sm'>Full-Stack Web Developer</h3>
                <div className='flex justify-center gap-3 text-lg mt-8'>
                  <FaLinkedin />
                  <FaGithub />
                  <FaFacebook />                
                </div>
              </div>
              <div className='flex flex-col grow gap-8 text-xl  justify-center'>
                <MainMenuLink to={homeRoute.id} onClick={savePrevLocation} className={cn('')}>Home</MainMenuLink>
                <MainMenuLink to={cvRoute.id}  onClick={savePrevLocation}>Resume</MainMenuLink>
                <MainMenuLink to={projectsRoute.id}  onClick={savePrevLocation}>Projects</MainMenuLink>
              </div>
              <div className='flex flex-col-reverse text-xs'>
                2025 Alex S.
              </div>
            </div>
            <div className="grow flex flex-col items-center relative overflow-hidden">
              <div className='block md:hidden text-3xl text-accent absolute right-5 top-5 z-100 cursor-pointer'>
                <RxHamburgerMenu onClick={() => setShowMenu(!showMenu)} />
              </div>
              <div className={cn(
                'max-w-7xl w-full min-h-screen invisible absolute',
                homeRoute.id == location.pathname  ? inClasses : '',
                homeRoute.id == prevLocation ? outClasses : ''
                )}>
                <Home />
              </div>
             <div className={cn(
                'max-w-7xl w-full min-h-screen invisible absolute',
                cvRoute.id == location.pathname  ? inClasses : '',
                cvRoute.id == prevLocation ? outClasses : ''
                )}>
                <CvPage />
              </div>
               <div className={cn(
                'max-w-7xl w-full min-h-screen invisible absolute',
                projectsRoute.id == location.pathname  ? inClasses : '',
                projectsRoute.id == prevLocation  ? outClasses : ''
                )}>
                <Projects />
              </div>
              {!possibleLocations.find(x => x === location.pathname) && (
                <div className={cn(
                'max-w-7xl w-full min-h-screen',
                projectsRoute.id == location.pathname  ? inClasses : '',
                projectsRoute.id == prevLocation  ? outClasses : ''
                )}>
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
