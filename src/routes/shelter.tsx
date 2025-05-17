import { createFileRoute } from '@tanstack/react-router';
import { ShelterProject } from '../pages/projects/ShelterProject';

export const Route = createFileRoute('/shelter')({
  component: ShelterProject,
});
