import {ReactElement} from 'react';
import {Company} from './Company';
import {Tag} from './Tag';

export interface Job {
  from: Date,
  to: Date,
  title: string,
  description: ReactElement
  company: Company,
  tags?: Tag[],
  skills?: {
    management?: number,
    backend?: number
  }
}


