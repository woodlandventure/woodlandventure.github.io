import { createFileRoute } from '@tanstack/react-router';
import { SanctuaryProject } from '../pages/projects/SanctuaryProject';

export const Route = createFileRoute('/sanctuary')({
  component: SanctuaryProject,
});
