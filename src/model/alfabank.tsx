import {Job} from '../types/Job';
import {Tag} from '../types/Tag';

export const alfabank: Job = {
  from: new Date('2013-08-01'),
  to: new Date('2014-02-01'),
  title: 'Project Manager',
  company: {
    webiste: 'https://alfabank.com',
    name: 'Alpha Bank JSC',
  },
  skills: {
    management: 85,
  },
  tags: [
    Tag.php, Tag.pHPUnit,Tag.selenium, Tag.javascript
  ],
  description: (
    <div>
      <p className="mb-2">
        My primary duty was to manage projects in the foreign exchange department of Alfa Bank.
        Small projects had been coded by me alone while more complex projects had been outsourced
        to various contractors or developed in-house.
      </p>
      <p className="mb-2">
        One of the projects that is worth mentioning is the fat client password management system
        which we used to share passwords in the department. The data was encrypted and available
        only for the end users of the system, while the private key is never held on the server therefore
        it’s not possible to decrypt the data even if the intruder has the database access.
      </p>
    </div>
  ),
};
