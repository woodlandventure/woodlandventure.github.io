import { createFileRoute } from '@tanstack/react-router';
import { CompostingToilet } from '../pages/projects/CompostingToiletProject';

export const Route = createFileRoute('/composting-toilet')({
  component: CompostingToilet,
});
