import {TagGroup} from '../types/TagGroup';

export const groupMap: Record<TagGroup, { color: string }> = {
  [TagGroup.Languages]: {
    color: 'bg-blue-500',
  },
  [TagGroup.Databases]: {
    color: 'bg-green-500',
  },
  [TagGroup.Frontend]: {
    color: 'bg-orange-500',
  },
  [TagGroup.Backend]: {
    color: 'bg-red-500',
  },
  [TagGroup.Mobile]: {
    color: 'bg-indigo-500',
  },
  [TagGroup.CDCI]: {
    color: 'bg-cyan-500',
  },
  [TagGroup.Observability]: {
    color: 'bg-yellow-500',
  },
  [TagGroup.Management]: {
    color: 'bg-indigo-500',
  },
  [TagGroup.Techniques]: {
    color: 'bg-pink-500',
  },
  [TagGroup.Other]: {
    color: 'bg-slate-500',
  },
};
