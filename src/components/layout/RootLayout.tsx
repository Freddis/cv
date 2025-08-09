import {HeadContent, Scripts, useLocation} from '@tanstack/react-router';
import {FC, StrictMode, useEffect, useState} from 'react';
import {cvRoute, homeRoute, projectsRoute} from '../../routes/routes';
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa6';
import {cn} from '../../utils/cn/cn';
import {MainMenuLink} from '../elements/MainMenuLink';
import {CvPage} from '../pages/Cv/CvPage';
import {Home} from '../pages/Home/Home';
import {Projects} from '../pages/Projects/Projects';

export const RootLayout: FC = () => {
  const location = useLocation();
  const [prevLocation,setPrevLocation] = useState('')
  const [firstRender, setFirstRender] = useState(true) 
  const [inClasses, setInClasses] = useState('visible relative');
  const [outClasses, setOutClasses] = useState('visible');

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
  // ['animated-section-moveFromRight', 'animated-section-moveToLeft'],
  // ['animated-section-moveFromLeft', 'animated-section-moveToRight'],
  // ['animated-section-moveFromBottom', 'animated-section-moveToTop'],
  // ['animated-section-moveFromTop', 'animated-section-moveToBottom'],
  // ['animated-section-moveFromRight animated-section-ontop', 'animated-section-fade'],
  // ['animated-section-moveFromLeft animated-section-ontop', 'animated-section-fade'],
  // ['animated-section-moveFromBottom animated-section-ontop', 'animated-section-fade'],
  // ['animated-section-moveFromTop animated-section-ontop', 'animated-section-fade'],
  // ['animated-section-moveFromRightFade', 'animated-section-moveToLeftFade'],
  // ['animated-section-moveFromLeftFade', 'animated-section-moveToRightFade'],
  // ['animated-section-moveFromBottomFade', 'animated-section-moveToTopFade'],
  // ['animated-section-moveFromTopFade', 'animated-section-moveToBottomFade'],
  // ['animated-section-moveFromRight', 'animated-section-moveToLeftEasing animated-section-ontop'],
  // ['animated-section-moveFromLeft', 'animated-section-moveToRightEasing animated-section-ontop'],
  // ['animated-section-moveFromBottom', 'animated-section-moveToTopEasing animated-section-ontop'],
  // ['animated-section-moveFromTop', 'animated-section-moveToBottomEasing animated-section-ontop'],
  // ['animated-section-moveFromRight animated-section-ontop', 'animated-section-scaleDown'],
  // ['animated-section-moveFromLeft animated-section-ontop', 'animated-section-scaleDown'],
  // ['animated-section-moveFromBottom animated-section-ontop', 'animated-section-scaleDown'],
  // ['animated-section-moveFromTop animated-section-ontop', 'animated-section-scaleDown'],
  // ['animated-section-scaleUpDown animated-section-delay300', 'animated-section-scaleDown'],
  // ['animated-section-scaleUp animated-section-delay300', 'animated-section-scaleDownUp'],
  // ['animated-section-scaleUp', 'animated-section-moveToLeft animated-section-ontop'],
  // ['animated-section-scaleUp', 'animated-section-moveToRight animated-section-ontop'],
  // ['animated-section-scaleUp', 'animated-section-moveToTop animated-section-ontop'],
  // ['animated-section-scaleUp', 'animated-section-moveToBottom animated-section-ontop'],
  // ['animated-section-scaleUpCenter animated-section-delay400', 'animated-section-scaleDownCenter'],
  // ['animated-section-moveFromRight animated-section-delay200 animated-section-ontop', 'animated-section-rotateRightSideFirst'],
  // ['animated-section-moveFromLeft animated-section-delay200 animated-section-ontop', 'animated-section-rotateLeftSideFirst'],
  // ['animated-section-moveFromTop animated-section-delay200 animated-section-ontop', 'animated-section-rotateTopSideFirst'],
  // ['animated-section-moveFromBottom animated-section-delay200 animated-section-ontop', 'animated-section-rotateBottomSideFirst'],
  // ['animated-section-flipInLeft animated-section-delay500', 'animated-section-flipOutRight'],
  // ['animated-section-flipInRight animated-section-delay500', 'animated-section-flipOutLeft'],
  // ['animated-section-flipInBottom animated-section-delay500', 'animated-section-flipOutTop'],
  // ['animated-section-flipInTop animated-section-delay500', 'animated-section-flipOutBottom'],
  // ['animated-section-scaleUp', 'animated-section-rotateFall animated-section-ontop'],
  // ['animated-section-rotateInNewspaper animated-section-delay500', 'animated-section-rotateOutNewspaper'],
  // ['animated-section-moveFromRight', 'animated-section-rotatePushLeft'],
  // ['animated-section-moveFromLeft', 'animated-section-rotatePushRight'],
  // ['animated-section-moveFromBottom', 'animated-section-rotatePushTop'],
  // ['animated-section-moveFromTop', 'animated-section-rotatePushBottom'],
  // ['animated-section-rotatePullRight animated-section-delay180', 'animated-section-rotatePushLeft'],
  // ['animated-section-rotatePullLeft animated-section-delay180', 'animated-section-rotatePushRight'],
  // ['animated-section-rotatePullBottom animated-section-delay180', 'animated-section-rotatePushTop'],
  // ['animated-section-rotatePullTop animated-section-delay180', 'animated-section-rotatePushBottom'],
  // ['animated-section-moveFromRightFade', 'animated-section-rotateFoldLeft'],
  // ['animated-section-moveFromLeftFade', 'animated-section-rotateFoldRight'],
  // ['animated-section-moveFromBottomFade', 'animated-section-rotateFoldTop'],
  // ['animated-section-moveFromTopFade', 'animated-section-rotateFoldBottom'],
  // ['animated-section-rotateUnfoldLeft', 'animated-section-moveToRightFade'],
  // ['animated-section-rotateUnfoldRight', 'animated-section-moveToLeftFade'],
  // ['animated-section-rotateUnfoldTop', 'animated-section-moveToBottomFade'],
  // ['animated-section-rotateUnfoldBottom', 'animated-section-moveToTopFade'],

  ['animated-section-rotateRoomLeftIn', 'animated-section-rotateRoomLeftOut animated-section-ontop'],
  ['animated-section-rotateRoomRightIn', 'animated-section-rotateRoomRightOut animated-section-ontop'],
  ['animated-section-rotateRoomTopIn', 'animated-section-rotateRoomTopOut animated-section-ontop'],
  ['animated-section-rotateRoomBottomIn', 'animated-section-rotateRoomBottomOut animated-section-ontop'],

  // ['animated-section-rotateCubeLeftIn', 'animated-section-rotateCubeLeftOut animated-section-ontop'],
  // ['animated-section-rotateCubeRightIn', 'animated-section-rotateCubeRightOut animated-section-ontop'],
  // ['animated-section-rotateCubeTopIn', 'animated-section-rotateCubeTopOut animated-section-ontop'],
  // ['animated-section-rotateCubeBottomIn', 'animated-section-rotateCubeBottomOut animated-section-ontop'],

  // ['animated-section-rotateCarouselLeftIn', 'animated-section-rotateCarouselLeftOut animated-section-ontop'],
  // ['animated-section-rotateCarouselRightIn', 'animated-section-rotateCarouselRightOut animated-section-ontop'],
  // ['animated-section-rotateCarouselTopIn', 'animated-section-rotateCarouselTopOut animated-section-ontop'],
  // ['animated-section-rotateCarouselBottomIn', 'animated-section-rotateCarouselBottomOut animated-section-ontop'],
  // ['animated-section-rotateSidesIn animated-section-delay200', 'animated-section-rotateSidesOut'],
  // ['animated-section-rotateSlideIn', 'animated-section-rotateSlideOut']
];

  function savePrevLocation(): void {
    setPrevLocation(window.location.pathname)
  }

  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body className='font-[Poppins] bg-main'>
        <StrictMode>
          <div className="flex flex-row min-h-screen">
            <div className='hidden md:flex flex-col gap-5 0 p-5 text-center bg-surface text-on-surface w-80 shrink-0 '></div>
            <div className="hidden md:flex flex-col gap-5 0 p-5 text-center bg-surface text-on-surface w-80 shrink-0 fixed min-h-screen">
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
            </div>
          </div>
          <Scripts />
        </StrictMode>
      </body>
    </html>
  );
};
