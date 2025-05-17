import { createFileRoute } from '@tanstack/react-router';
import { CosyBench } from '../pages/projects/CosyBenchProject';

export const Route = createFileRoute('/cosy-bench')({
  component: CosyBench,
});
