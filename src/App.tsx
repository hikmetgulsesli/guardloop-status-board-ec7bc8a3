import { useMemo } from 'react';
import { StatusUtilityGuardloopStatusBoard } from './screens';
import { GuardloopStatusBoardProvider, useGuardloopStatusBoard } from './features/guardloop-status-board/guardloop-status-board.store';
import { AppTestBridge } from './test/bridge';

function AppContent() {
  const { actions } = useGuardloopStatusBoard();

  const screenActions = useMemo(
    () =>
      ({
        'refresh-1': actions.refreshStatus,
      } as const),
    [actions],
  );

  return (
    <div data-setfarm-root="baseline" data-testid="setfarm-app-root" className="min-h-screen bg-slate-50 text-slate-950">
      <AppTestBridge />
      <main className="min-h-screen flex items-center justify-center p-4">
        <StatusUtilityGuardloopStatusBoard actions={screenActions} />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <GuardloopStatusBoardProvider>
      <AppContent />
    </GuardloopStatusBoardProvider>
  );
}
