import {Job} from "../types/Job"

export const webrex: Job = {
  from: new Date('2012-02-01'),
  to: new Date('2012-08-01'),
  title: "PHP Programmer",
  company: {
    webiste: 'https://promo.orbios.com',
    name: 'Webrex LLC',
  },
  description: (
    <div>
      <p className="mb-2">
        Development of a coupon website. It was a 6 month contract. My duties were to find proper
        tools and solutions for the development (version control system, frameworks, libraries),
        designing the project, and development.
      </p>
      <p className="mb-2">
        One of my achievements on that job is automatization of the coupon creation process.
      </p>
    </div>
  ),
}
