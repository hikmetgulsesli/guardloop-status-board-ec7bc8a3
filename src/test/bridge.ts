import { useEffect } from 'react';
import { useGuardloopStatusBoard } from '../features/guardloop-status-board/guardloop-status-board.store';

export interface AppTestBridgeState {
  activeScreen: string;
  selectedRecord: string | null;
  counts: { itemCount: number };
  storageStatus: string;
  lastError: string | null;
  activePanel: string;
}

declare global {
  interface Window {
    app?: AppTestBridgeState;
  }
}

export function AppTestBridge() {
  const state = useGuardloopStatusBoard();

  useEffect(() => {
    window.app = {
      activeScreen: 'StatusUtilityGuardloopStatusBoard',
      selectedRecord: state.selectedItemId,
      counts: { itemCount: state.itemCount },
      storageStatus: state.storageStatus,
      lastError: state.lastError,
      activePanel: state.activePanel,
    };
  }, [state]);

  return null;
}
