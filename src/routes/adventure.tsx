import { createFileRoute } from '@tanstack/react-router';
import { AdventureProject } from '../pages/AdventureProject';

export const Route = createFileRoute('/adventure')({
  component: AdventureProject,
});
