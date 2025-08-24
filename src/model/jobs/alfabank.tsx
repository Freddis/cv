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
        Developed secure systems including a <b>fat client password management</b> application
        with <b>PHP</b> backend. Ensured encryption of sensitive data with
        private keys never stored on the server. Implemented automated
        testing with <b>PHPUnit</b> and frontend verification using <b>Selenium</b>,
        leveraging <b>JavaScript</b> for client-side interactions.
      </p>
    ),
    Management: (
      <p>
        Managed projects in the <b>foreign exchange department</b> of <b>Alfa Bank</b>,
        overseeing both small projects coded personally and larger initiatives
        executed by contractors or in-house teams. Applied structured <b>Waterfall</b> methodologies
        in a high-load <b>fintech</b> environment.
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
