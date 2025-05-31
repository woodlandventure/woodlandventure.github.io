import { createFileRoute } from '@tanstack/react-router';
import { FireCircle } from '../pages/projects/FireCircleProject';

export const Route = createFileRoute('/fire-circle')({
  component: FireCircle,
});
