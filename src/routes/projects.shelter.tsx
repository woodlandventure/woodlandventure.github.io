import { createFileRoute } from '@tanstack/react-router';
import { ShelterProject } from '../pages/ShelterProject';

export const Route = createFileRoute('/projects/shelter')({
  component: ShelterProject,
});
