import { createFileRoute } from '@tanstack/react-router';
import { GardenIdeas } from '../pages/projects/GardenIdeasProject';

export const Route = createFileRoute('/garden-ideas')({
  component: GardenIdeas,
});
