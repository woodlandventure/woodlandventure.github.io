import { createFileRoute } from '@tanstack/react-router';
import { Kitchen } from '../pages/projects/KitchenProject';

export const Route = createFileRoute('/kitchen')({
  component: Kitchen,
});
