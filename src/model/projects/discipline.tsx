import {DisciplineLogo} from '../../components/elements/DisciplineLogo';
import {Project} from '../../types/Projects';
import {Tag} from '../../types/Tag';

export const discipline: Project = {
  name: 'Discipline',
  color: 'bg-[#171717]',
  code: 'https://github.com/Freddis/gym-tracker-web',
  demo: 'http://discipline.alex-sarychev.com',
  logo: <DisciplineLogo />,
  description: (
    <div>
    <p className="mb-2 pl-2">
      Discipline is a gym tracking platform inspired by apps like Heavy and Strong,
      with the flexibility to log workouts, nutrition, measurements, and more. The backend uses a modular,
      service-based architecture with strict type safety and Postgres for storage, making it reliable and easy to extend.
    </p>
    <p className="mb-2 pl-2">
      Built with TanStack Start on the frontend and a framework-agnostic OpenAPI backend, the project is fully dockerized,
      tested, and ready for quick deployment. Its clean structure and clear
      separation of concerns make ongoing development straightforward and maintainable.
    </p>
    </div>
  ),
  tags: [
    Tag.typescript,
    Tag.javascript,
    Tag.tanstackStart,
    Tag.tanstackQuery,
    Tag.postgreSQL,
    Tag.awsCDK,
    Tag.docker,
    Tag.Vitest,
    Tag.react,
    Tag.expo,
    Tag.reactNative,
    Tag.Tailwind,
  ],
};
