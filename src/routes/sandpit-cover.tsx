import { createFileRoute } from '@tanstack/react-router';
import { SandpitCover } from '../pages/projects/SandpitCoverProject';

export const Route = createFileRoute('/sandpit-cover')({
  component: SandpitCover,
});
