import {ReactElement} from 'react';
import {Tag} from './Tag';
import {Domain} from './Domain';
export interface Project {
  title: string,
  color: string,
  case?: string,
  code?: string,
  demo?: string,
  url?: string,
  brief: ReactElement;
  description: ReactElement,
  logo?: ReactElement,
  tags: Partial<Record<Domain, Tag[]>>,
}
