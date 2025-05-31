import { createFileRoute } from '@tanstack/react-router';
import { WorkTop } from '../pages/projects/WorkTopProject';

export const Route = createFileRoute('/work-top')({
  component: WorkTop,
});
