import {Link, LinkComponentProps, useLocation} from '@tanstack/react-router';
import {FC} from 'react';
import {cn} from '../../utils/cn/cn';

export const MainMenuLink: FC<LinkComponentProps> = (props) => {
  const location = useLocation();
  const isActive = location.pathname === props.to;
  const activeClass = isActive ? 'text-accent scale-103' : '';
  return (
    <Link
    {...props}
    className={cn('text-xl tracking-wider font-semibold text-on-main hover:text-accent duration-500 transition-all ', activeClass)}
    >{props.children}</Link>
  );
};
