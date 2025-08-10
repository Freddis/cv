import {Job} from "../types/Job"

export const homeStudio: Job = {
  from: new Date('2015-11-01'),
  to: new Date('2019-02-01'),
  title: "Chief Technology Officer",
  company: {
    webiste: 'https://skyground.group',
    name: 'Home-Studio LLC',
  },
  description: (
    <div>
      <p className="mb-2">
       In November 2015 I started my own digital agency. 
       There were 7 employees under my leadership: 2 programmers, project manager, HTML developer, designer and 2 salesmen. 
       My responsibilities were to support and develop internal tools for the company, 
       defining the course of the company, finding partners and the development of the projects (usually I helped with the tricky tasks and architecture).
      </p>
    </div>
  ),
  
}