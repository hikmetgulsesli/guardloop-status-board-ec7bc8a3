import { fixtureStatusItems } from '../../__fixtures__/guardloop-status-board.fixture';
import type { StatusItem } from './guardloop-status-board.types';

const STORAGE_KEY = 'guardloop-status-board:v1';

export function loadStatusItems(): StatusItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw) as StatusItem[];
    }
  } catch {
    // Corrupted persisted data: fall back to fixtures so the UI stays recoverable.
  }
  return fixtureStatusItems;
}

export function saveStatusItems(items: StatusItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage may be disabled/full; surface is still usable.
  }
}
