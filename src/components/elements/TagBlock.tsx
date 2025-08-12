import {FC} from "react";
import {Tag} from "../../types/Tag";
import {groupMap} from "../../model/groupMap";
import {tagMap} from "../../model/tagMap";


export const TagBlock: FC<{skill: Tag}> = ({skill}) => {

  const props = tagMap[skill]
  const group = props.categories[0]
  const color = groupMap[group].color
  

  return <span className={`${color} px-2 py-1 rounded-sm text-sm`}>{skill}</span>
}