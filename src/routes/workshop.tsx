import { createFileRoute } from '@tanstack/react-router';
import { Workshop } from '../pages/projects/WorkshopProject';

export const Route = createFileRoute('/workshop')({
  component: Workshop,
});
