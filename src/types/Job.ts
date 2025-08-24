import {ReactElement} from 'react';
import {Company} from './Company';
import {Tag} from './Tag';
import {Domain} from './Domain';

export interface Job<TDomain extends Domain = Domain> {
  primaryDescription: TDomain;
  from: Date,
  to: Date,
  title: string,
  company: Company,
  tags: Partial<Record<Domain, Tag[]>>,
  description: Partial<Record<Domain, ReactElement>> & Record<TDomain, ReactElement>
  skills?: {
    management?: number,
    backend?: number,
    mobile?: number,
  }
}


