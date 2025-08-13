import {FC} from 'react';
import {PageHeader} from '../../elements/PageHeader';
import {PageContainer} from '../../elements/PageContainer';
import {tauroMarkets} from '../../../model/projects/tauroMarkets';
import {strapOnOpenApi} from '../../../model/projects/strapOnOpenApi';
import {discipline} from '../../../model/projects/discipline';
import {ProjectBlock} from './components/ProjectBlock';
import {streamGridKit} from '../../../model/projects/streamGridKit';
import {ScrollToTopButton} from '../../elements/ScrollToTopButton';

export const Projects: FC = () => {
  const projects = [tauroMarkets, discipline, strapOnOpenApi, streamGridKit];
  return (
    <PageContainer>
      <PageHeader>Projects</PageHeader>
      <div className="w-full">
        <div className="grid grid-cols-1 gap-5">
          {projects.map((project) => <ProjectBlock key={project.name} project={project}/>)}
        </div>
      </div>
    <ScrollToTopButton/>
    </PageContainer>
  );
};

