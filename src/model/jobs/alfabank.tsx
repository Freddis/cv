import {Domain} from '../../types/Domain';
import {Job} from '../../types/Job';
import {Tag} from '../../types/Tag';

export const alfabank: Job<Domain.Management> = {
  from: new Date('2013-08-01'),
  to: new Date('2014-02-01'),
  title: 'Project Manager',
  company: {
    websites: ['https://alfabank.com'],
    name: 'Alfa Bank JSC',
  },
  skills: {
    management: 85,
    backend: 50,
  },
  primaryDescription: Domain.Management,
  description: {
    Backend: (
      <p>
        Developed secure systems including a fat client password management application
        with <span x-data-tag={Tag.php}>PHP</span> backend. Ensured encryption of sensitive data with
        private keys never stored on the server. Implemented automated
        testing with <span x-data-tag={Tag.pHPUnit}>PHPUnit</span> and frontend
        verification using <span x-data-tag={Tag.selenium}>Selenium</span>,
        leveraging <span x-data-tag={Tag.javascript}>JavaScript</span> for client-side interactions.
      </p>
    ),
    Management: (
      <p>
        Managed projects in the <span x-data-tag={Tag.fintech}>Forex</span> department of Alfa Bank,
        overseeing both small projects coded personally and larger initiatives
        executed by contractors or in-house teams. Applied structured <span x-data-tag={Tag.Waterfall}>Waterfall</span> methodologies
        in a high-load <span x-data-tag={Tag.fintech}>fintech</span> environment.
      </p>
    ),
  },
  tags: {
    Backend: [
      Tag.Backend,
      Tag.php,
      Tag.pHPUnit,
      Tag.selenium,
    ],
    Frontend: [
      Tag.javascript,
    ],
    Management: [
      Tag.Management,
      Tag.Waterfall,
      Tag.Management,
      Tag.fintech,
    ],
  },
};
