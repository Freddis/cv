import {Project} from '../../types/Projects';
import {Tag} from '../../types/Tag';

export const streamGridKit: Project = {
  title: 'Steam Grid Kit',
  color: 'bg-blue-950',
  code: 'https://github.com/Freddis/Steam-Grid-Kit',
  description: (
    <div>
      <p className="mb-2">
        Steam Grid Kit is an app that helps you to manage your Steam shortcuts.
        Shortcut is a game that wasn't purchased in Steam.
      </p>
      <p className="mb-2">
        Automatically adds the games from your game folders to Steam, finds
        steam IDs and loads images for them. Manages problematic games and
        programs not listed in Steam Store at all.
      </p>
      <p className="mb-2">
        Great for people who have huge physical game libraries.
      </p>
    </div>
  ),
  tags: [Tag.java, Tag.JavaFx, Tag.jUnit, Tag.Binary],
  skills: {
    frontend: true,
  },
};
