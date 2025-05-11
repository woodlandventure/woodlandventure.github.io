import { createFileRoute } from '@tanstack/react-router';
import { SanctuaryProject } from '../pages/SanctuaryProject';

export const Route = createFileRoute('/projects/sanctuary')({
  component: SanctuaryProject,
});
