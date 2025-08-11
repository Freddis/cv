import {ReactNode} from 'react';
import {PageContainer} from '../elements/PageContainer';
import {PageHeader} from '../elements/PageHeader';
import {PrimaryButton} from '../elements/PrimaryButton';
import {Link} from '@tanstack/react-router';

export function NotFound({children}: { children?: ReactNode }) {
  return (
    <PageContainer>
      <div className="">
        <PageHeader>404</PageHeader>
        <p>Page does not exist.</p>
        <div className='mt-10'>
          <Link to='/'>
            <PrimaryButton>Home</PrimaryButton>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
