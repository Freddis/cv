import {Job} from '../types/Job';

export const paive: Job = {
  from: new Date('2011-09-01'),
  to: new Date('2012-02-01'),
  title: 'Junior Developer',
  company: {
    webiste: 'https://promo.orbios.com',
    name: 'PAIVE Media Group LLC',
  },
  description: (
    <div>
      <p className="mb-2">
        My duties consisted of writing new modules for the CMS used in the company, fixing bugs, and
        development of small projects. Aside from that there were some routine tasks like converting
        data from one format to another and bulk data upload for e-commerce shops.
      </p>
      <p className="mb-2">
        The most noticeable project is the system to the Diageo bartender competition, which had been
        running as an Ipad application (It worked as a wrapper for the web page) and controlled via
        AJAX requests in real time in the control panel.
      </p>
    </div>
  ),
};
