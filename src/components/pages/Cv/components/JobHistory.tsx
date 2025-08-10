import {FC} from "react"
import {BlockHeader} from "../../../elements/BlockHeader"
import {skyground} from "../../../../model/skyground"
import {upwork} from "../../../../model/upwork"
import {unleashedCapital} from "../../../../model/unleashedCapital"
import {Job} from "../../../../types/Job"
import {JobBlock} from "./JobBlock"
import {homeStudio} from "../../../../model/homeStudio"
import {analit} from "../../../../model/analit"
import {sitronics} from "../../../../model/sitronics"
import {alfabank} from "../../../../model/alfabank"
import {xsoft} from "../../../../model/xsoft"
import {paive} from "../../../../model/paive"
import {webrex} from "../../../../model/webrex"
import {EducationBlock} from "./EducationBlock"

export const JobHistory: FC = () => {
  const jobs: Job[] = [
    skyground,
    unleashedCapital, 
    upwork,
    homeStudio,
    analit,
    sitronics,
    alfabank,
    xsoft,
    webrex,
    paive
  ]


  return (
    <div>
      <BlockHeader>Experience</BlockHeader>
      {jobs.map(x => <JobBlock key={x.title} job={x} />)}
      <BlockHeader>Education</BlockHeader>
      <EducationBlock />
    </div>
  )
}