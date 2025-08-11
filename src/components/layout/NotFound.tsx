import {ReactNode} from 'react';
import {PageContainer} from '../elements/PageContainer';
import {PageHeader} from '../elements/PageHeader';

export function NotFound({children}: { children?: ReactNode }) {
  return (
    <PageContainer>
      <div className="">
        <PageHeader>404</PageHeader>
        <p>Page does not exist.</p>
      </div>
    </PageContainer>
  );
}
