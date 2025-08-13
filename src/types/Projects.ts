import {ReactElement} from 'react';
import {Tag} from './Tag';

export interface Project {
  name: string,
  color: string,
  case?: string,
  code?: string,
  demo?: string,
  url?: string,
  description: ReactElement,
  logo?: ReactElement,
  tags: [Tag, ...Tag[]]
}
