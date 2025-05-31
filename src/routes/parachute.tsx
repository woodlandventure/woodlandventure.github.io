import { createFileRoute } from '@tanstack/react-router';
import { Parachute } from '../pages/projects/ParachuteProject';

export const Route = createFileRoute('/parachute')({
  component: Parachute,
});
