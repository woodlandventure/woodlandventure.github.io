import { createFileRoute } from '@tanstack/react-router'
import { Schools } from '../pages/Schools'

export const Route = createFileRoute('/schools')({
  component: Schools,
}) 