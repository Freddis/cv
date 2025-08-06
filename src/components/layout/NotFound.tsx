import {ReactNode} from 'react';

export function NotFound({children}: { children?: ReactNode }) {
  return (
    <div className="">
      <div className="">
        {children || <p>The page you are looking for does not exist.</p>}
      </div>
    </div>
  );
}
