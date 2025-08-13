import {TagGroup} from '../types/TagGroup';

export const groupMap: Record<TagGroup, { color: string }> = {
  [TagGroup.Languages]: {
    color: 'bg-blue-700',
  },
  [TagGroup.Databases]: {
    color: 'bg-green-700',
  },
  [TagGroup.Backend]: {
    color: 'bg-yellow-700',
  },
  [TagGroup.Frontend]: {
    color: 'bg-orange-700',
  },
  [TagGroup.Mobile]: {
    color: 'bg-neutral-700',
  },
  [TagGroup.CDCI]: {
    color: 'bg-cyan-700',
  },
  [TagGroup.Observability]: {
    color: 'bg-red-800',
  },
  [TagGroup.Management]: {
    color: 'bg-indigo-700',
  },
  [TagGroup.Techniques]: {
    color: 'bg-pink-700',
  },
  [TagGroup.Other]: {
    color: 'bg-slate-700',
  },
};
