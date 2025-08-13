import {Project} from '../../types/Projects';
import {Tag} from '../../types/Tag';

export const strapOnOpenApi: Project = {
  name: 'Snap-On OpenApi',
  color: 'bg-green-950',
  code: 'https://github.com/Freddis/strap-on-openapi',
  description: (
    <div>
     <p className="mb-2">
      Why not combine Zod and OpenAPI and make our API absolutely type-checked both on the frontend and backend? That would be a blast!
     </p>
     <p className="mb-2">
      Snap-On OpenAPI is a lightweight, non-opinionated framework that allows you to do exactly that.
       It's highly customizable and easy to use, while providing fully type-checked context.
       You can forget about those "any" types that pop up here and there in your APIs.
     </p>
    </div>
  ),
  tags: [
    Tag.typescript,
    Tag.javascript,
    Tag.openApi,
    Tag.Zod,
    Tag.Vitest,
    Tag.CodeGen,
  ],
};
