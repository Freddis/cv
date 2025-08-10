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
  
  const education: Job = {
    from: new Date('2008-09-01'),
    to: new Date('2012-06-31'),
    title: "Bachelor Degree in Development of CAD Systems",
    description: <div></div>,
    company: {
      name: "Moscow State University of Design and Technology",
      webiste: "http://вфыв"
    }
  }
  return (
    <div>
      <BlockHeader>Experience</BlockHeader>
      {jobs.map(x => <JobBlock key={x.title} job={x} />)}
      <BlockHeader>Education</BlockHeader>
      <JobBlock job={education} />
    </div>
  )
}