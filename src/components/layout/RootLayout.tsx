import {HeadContent, Link, Outlet, Scripts} from '@tanstack/react-router';
import {FC, ReactNode, StrictMode} from 'react';
import {cvRoute, homeRoute, projectsRoute} from '../../routes/routes';
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa6';
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools';
import {cn} from '../../utils/cn/cn';
import {MainMenuLink} from '../elements/MainMenuLink';

export const RootLayout: FC = () => {
  

  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body className='font-[Poppins] bg-main'>
        <StrictMode>
          <div className="flex flex-row min-h-screen">
            <div className='md:flex flex-col gap-5 0 p-5 text-center bg-surface text-on-surface w-80 shrink-0 '></div>
            <div className="hidden md:flex flex-col gap-5 0 p-5 text-center bg-surface text-on-surface w-80 shrink-0 fixed min-h-screen">
              <div className='mt-10'>
                <h2 className='text-3xl font-semibold mb-2'>Alex Sarychev</h2>
                <h3 className='font-light'>Web Designer</h3>
                <div className='flex justify-center gap-3 text-lg mt-8'>
                  <FaLinkedin />
                  <FaGithub />
                  <FaFacebook />                
                </div>
              </div>
              <div className='flex flex-col grow gap-8 text-xl  justify-center'>
                <MainMenuLink to={homeRoute.id} className={cn('')}>Home</MainMenuLink>
                <MainMenuLink to={cvRoute.id}>Resume</MainMenuLink>
                <MainMenuLink to={projectsRoute.id}>Projects</MainMenuLink>
                {/* <MainMenuLink to={projectsRoute.id}>About</MainMenuLink> */}
              </div>
              <div className='flex flex-col-reverse text-xs'>
                2025 Alex S.
              </div>
            </div>
            <div className="grow flex flex-row justify-center">
              <div className='max-w-7xl w-full'>
              <Outlet />
              </div>
            </div>
          </div>
          <Scripts />
        </StrictMode>
        <TanStackRouterDevtools position="bottom-right" />
      </body>
    </html>
  );
};
