import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { fixtureStatusItems } from '../../__fixtures__/guardloop-status-board.fixture';
import { loadStatusItems, saveStatusItems } from './guardloop-status-board.repo';
import type { ActivePanel, GuardloopStatusBoardState, StatusItem, StorageStatus } from './guardloop-status-board.types';

interface GuardloopStatusBoardActions {
  refreshStatus: () => void;
  selectItem: (id: string | null) => void;
  setActivePanel: (panel: ActivePanel) => void;
}

interface GuardloopStatusBoardContextValue extends GuardloopStatusBoardState {
  actions: GuardloopStatusBoardActions;
}

const GuardloopStatusBoardContext = createContext<GuardloopStatusBoardContextValue | null>(null);

export function GuardloopStatusBoardProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<StatusItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [activePanel, setActivePanel] = useState<ActivePanel>('overview');
  const [storageStatus, setStorageStatus] = useState<StorageStatus>('idle');
  const [lastError, setLastError] = useState<string | null>(null);

  const refreshStatus = () => {
    setStorageStatus('loading');
    setLastError(null);
    try {
      const loaded = loadStatusItems();
      setItems(loaded);
      setStorageStatus('ready');
    } catch (err) {
      setItems(fixtureStatusItems);
      setStorageStatus('error');
      setLastError(err instanceof Error ? err.message : 'Failed to load status items');
    }
  };

  useEffect(() => {
    refreshStatus();
  }, []);

  useEffect(() => {
    if (storageStatus === 'ready') {
      try {
        saveStatusItems(items);
      } catch (err) {
        setLastError(err instanceof Error ? err.message : 'Failed to save status items');
      }
    }
  }, [items, storageStatus]);

  const value = useMemo<GuardloopStatusBoardContextValue>(
    () => ({
      items,
      selectedItemId,
      activePanel,
      storageStatus,
      lastError,
      itemCount: items.length,
      actions: {
        refreshStatus,
        selectItem: setSelectedItemId,
        setActivePanel,
      },
    }),
    [items, selectedItemId, activePanel, storageStatus, lastError],
  );

  return <GuardloopStatusBoardContext.Provider value={value}>{children}</GuardloopStatusBoardContext.Provider>;
}

export function useGuardloopStatusBoard(): GuardloopStatusBoardContextValue {
  const ctx = useContext(GuardloopStatusBoardContext);
  if (!ctx) {
    throw new Error('useGuardloopStatusBoard must be used within a GuardloopStatusBoardProvider');
  }
  return ctx;
}
