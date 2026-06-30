export type StatusItemStatus = 'ok' | 'warning' | 'error';

export interface StatusItem {
  id: string;
  label: string;
  status: StatusItemStatus;
  value: string;
}

export type ActivePanel = 'overview' | 'details';

export type StorageStatus = 'idle' | 'loading' | 'ready' | 'error';

export interface GuardloopStatusBoardState {
  items: StatusItem[];
  selectedItemId: string | null;
  activePanel: ActivePanel;
  storageStatus: StorageStatus;
  lastError: string | null;
  itemCount: number;
}
