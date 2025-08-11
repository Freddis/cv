import {FC, MouseEventHandler} from 'react';
import {cn} from '../../utils/cn/cn';
import {FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa6';
import {homeRoute, cvRoute, projectsRoute} from '../../routes/routes';
import {MainMenuLink} from './MainMenuLink';

export const MainMenu: FC<{className?: string, onClick?: MouseEventHandler<HTMLAnchorElement> }> = ({className, onClick}) => {

  return (
    <div className={cn('z-1000 hidden fixed  md:flex flex-col gap-5 0 p-5 text-center bg-surface text-on-surface w-80 shrink-0  min-h-screen', className)}>
      <div className="mt-10">
        <h2 className="text-3xl font-semibold mb-2">Alex Sarychev</h2>
        <h3 className="font-light text-base">Full-Stack Web Developer</h3>
        <div className="flex justify-center gap-3 text-3xl mt-10">
          <a href='https://www.linkedin.com/in/alex-sarychev-a75a0374/' className='cursor-pointer hover:text-accent duration-800 transition-all' target='_blank'>
            <FaLinkedin />
          </a>
          <a href='https://github.com/Freddis' className='cursor-pointer hover:text-accent duration-800 transition-all' target='_blank'>
            <FaGithub />
          </a>
        
        </div>
        <div className='mt-3 text-sm/relaxed'>
          <a href='mailto:alex@alex-sarychev.com' className='cursor-pointer hover:text-accent duration-800 transition-all'>
            alex@alex-sarychev.com
            </a>
        </div>
      </div>
      <div className="flex flex-col grow gap-8 text-xl  justify-center">
        <MainMenuLink to={homeRoute.id} onClick={onClick}>Home</MainMenuLink>
        <MainMenuLink to={cvRoute.id} onClick={onClick}>Resume</MainMenuLink>
        <MainMenuLink to={projectsRoute.id} onClick={onClick}>Projects</MainMenuLink>
      </div>
      <div className="flex flex-col-reverse text-xs">
        2025 Alex S.
      </div>
    </div>
  );
};
