import {FC} from 'react';
import {Project} from '../../../../types/Projects';
import {PrimaryButton} from '../../../elements/PrimaryButton';
import {SecondaryButton} from '../../../elements/SecondaryButton';
import {TagList} from '../../../elements/TagList';

export const ProjectBlock: FC<{project: Project}> = ({project}) => {

  return (
  <div className={`lg:min-h-100 ${project.color} w-full rounded-xl overflow-hidden relative`}>
    <div className="grid grid-cols-1 lg:grid-cols-8 h-full">
      <div className="md:col-span-3 flex items-center justify-center min-h-50 h-full w-full">

          {!!project.logo && project.logo}
          {!project.logo && <span className="text-2xl font-light text-center w-full block">{project.name}</span>}

      </div>
      <div className={'md:col-span-5 flex flex-col h-full grow bg-black/60 p-5'}>
        <div className="mb-2 text-left text-on-main-2 text-base/relaxed">{project.description}</div>
        <div className="mb-2">
          <TagList tags={project.tags}/>
        </div>
        <div className="grow items-end flex gap-5 justify-center">
            {!!project.code && (
            <a href={project.code} target="_blank">
              <PrimaryButton>Code</PrimaryButton>
            </a>
            )}
          {!!project.demo && (
          <a href={project.demo} target="_blank">
            <SecondaryButton>Demo</SecondaryButton>
          </a>
          )}
          {!!project.url && (
          <a href={project.url} target="_blank">
            <PrimaryButton>Website</PrimaryButton>
          </a>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};
