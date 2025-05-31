import { createFileRoute } from '@tanstack/react-router';
import { Chalkboard } from '../pages/projects/ChalkboardProject';

export const Route = createFileRoute('/chalkboard')({
  component: Chalkboard,
});
