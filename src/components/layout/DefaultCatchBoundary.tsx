import {ErrorComponent, ErrorComponentProps} from '@tanstack/react-router';
import {PageContainer} from '../elements/PageContainer';
import {PageHeader} from '../elements/PageHeader';

export function DefaultCatchBoundary({error}: ErrorComponentProps) {

  console.error('DefaultCatchBoundary Error:', error);

  return (
    <PageContainer>
      <PageHeader>Unexpected Error</PageHeader>
      <p>Terrible, just terrible error has happened. And we don't know why!</p>
    </PageContainer>
  );
}
