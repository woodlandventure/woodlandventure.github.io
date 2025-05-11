import { createFileRoute } from '@tanstack/react-router';
import { Workshop } from '../pages/projects/Workshop';

export const Route = createFileRoute('/workshop')({
  component: Workshop,
});
