import {ReactElement} from "react"
import {Company} from "./Company"

export interface Job {

  from: Date,
  to: Date,
  title: string,
  description: ReactElement
  company: Company
}


