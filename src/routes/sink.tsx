import { createFileRoute } from '@tanstack/react-router';
import { Sink } from '../pages/projects/SinkProject';

export const Route = createFileRoute('/sink')({
  component: Sink,
});
