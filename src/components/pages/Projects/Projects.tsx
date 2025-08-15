import {FC} from 'react';
import {PageHeader} from '../../elements/PageHeader';
import {PageContainer} from '../../elements/PageContainer';
import {ProjectBlock} from './components/ProjectBlock';
import {ScrollToTopButton} from '../../elements/ScrollToTopButton';
import {model} from '../../../model/model';

export const Projects: FC = () => {
  const projects = model.projects;
  return (
    <PageContainer>
      <PageHeader>Projects</PageHeader>
      <div className="w-full">
        <div className="grid grid-cols-1 gap-5">
          {projects.map((project) => <ProjectBlock key={project.title} project={project}/>)}
        </div>
      </div>
    <ScrollToTopButton/>
    </PageContainer>
  );
};

