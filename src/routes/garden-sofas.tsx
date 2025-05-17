import { createFileRoute } from '@tanstack/react-router';
import { GardenSofas } from '../pages/projects/GardenSofasProject';

export const Route = createFileRoute('/garden-sofas')({
  component: GardenSofas,
});
