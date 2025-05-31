import { createFileRoute } from '@tanstack/react-router';
import { Decking } from '../pages/projects/DeckingProject';

export const Route = createFileRoute('/decking')({
  component: Decking,
});
