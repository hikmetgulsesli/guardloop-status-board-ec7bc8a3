import type { StatusItem } from '../features/guardloop-status-board/guardloop-status-board.types';

export const fixtureStatusItems: StatusItem[] = [
  { id: 'gl-1', label: 'System', status: 'ok', value: 'Operational' },
  { id: 'gl-2', label: 'Network', status: 'warning', value: 'Degraded' },
  { id: 'gl-3', label: 'Database', status: 'error', value: 'Down' },
];
