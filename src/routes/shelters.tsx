import { createFileRoute } from '@tanstack/react-router';
import { Shelters } from '../pages/projects/SheltersProject';

export const Route = createFileRoute('/shelters')({
  component: Shelters,
});
