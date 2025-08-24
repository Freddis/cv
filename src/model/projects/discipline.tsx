import {DisciplineLogo} from '../../components/elements/DisciplineLogo';
import {Project} from '../../types/Projects';
import {Tag} from '../../types/Tag';

export const discipline: Project = {
  title: 'Discipline',
  color: 'bg-[#171717]',
  code: 'https://github.com/Freddis/gym-tracker-web',
  demo: 'http://discipline.alex-sarychev.com',
  logo: <DisciplineLogo />,
  brief: (
    <p>A gym tracking app with a modular, service-based backend and a <b>TanStack Start</b> frontend.</p>
  ),
  description: (
    <div>
      <p className="mb-2">
        Discipline is a gym tracking platform inspired by apps like Heavy and Strong,
        with the flexibility to log workouts, nutrition, measurements, and more. The backend uses a modular,
        service-based architecture with strict type safety and Postgres for storage, making it reliable and easy to extend.
      </p>
      <p className="mb-2">
        Built with TanStack Start on the frontend and a framework-agnostic OpenAPI backend, the project is fully dockerized,
        tested, and ready for quick deployment. Its clean structure and clear
        separation of concerns make ongoing development straightforward and maintainable.
      </p>
    </div>
  ),
  tags: {
    Backend: [
      Tag.Backend,
      Tag.typescript,
      Tag.javascript,
      Tag.awsCDK,
      Tag.postgreSQL,
      Tag.Vitest,
      Tag.docker,
      Tag.drizzle,
    ],
    Frontend: [
      Tag.Frontend,
      Tag.typescript,
      Tag.javascript,
      Tag.tanstackStart,
      Tag.tanstackQuery,
      Tag.playwright,
      Tag.react,
      Tag.Tailwind,
      Tag.designSystem,
    ],
    Mobile: [
      Tag.Mobile,
      Tag.reactNative,
      Tag.expo,
    ],
  },
};
