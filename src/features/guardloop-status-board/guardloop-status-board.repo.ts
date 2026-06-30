import { fixtureStatusItems } from '../../__fixtures__/guardloop-status-board.fixture';
import type { StatusItem } from './guardloop-status-board.types';

const STORAGE_KEY = 'guardloop-status-board:v1';

export function loadStatusItems(): StatusItem[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    return JSON.parse(raw) as StatusItem[];
  }
  return fixtureStatusItems;
}

export function saveStatusItems(items: StatusItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}
