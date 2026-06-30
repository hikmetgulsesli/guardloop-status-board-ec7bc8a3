// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Utility - GuardLoop Status Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { RefreshCw, Shield } from "lucide-react";


export type StatusUtilityGuardloopStatusBoardActionId = "refresh-1";

export interface StatusUtilityGuardloopStatusBoardProps {
  actions?: Partial<Record<StatusUtilityGuardloopStatusBoardActionId, () => void>>;

}

export function StatusUtilityGuardloopStatusBoard({ actions }: StatusUtilityGuardloopStatusBoardProps) {
  return (
    <>
      {/* Main Dashboard Container */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg w-full max-w-4xl shadow-sm overflow-hidden flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center w-full px-margin py-md border-b border-outline-variant bg-surface-container-lowest">
      <div className="flex items-center gap-sm">
      <Shield className="text-primary font-bold text-[24px]" aria-hidden={true} focusable="false" />
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface">GuardLoop Status Board</h1>
      </div>
      <div className="flex items-center gap-md">
      <div className="text-right flex flex-col items-end">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Last Updated</span>
      <span className="font-data-mono text-data-mono text-on-surface">Just now</span>
      </div>
      <button className="bg-primary text-on-primary font-body-sm text-body-sm px-md py-[6px] rounded flex items-center gap-xs hover:bg-surface-tint transition-colors active:scale-95 duration-100" type="button" data-action-id="refresh-1" onClick={actions?.["refresh-1"]}>
      <RefreshCw className="text-[16px]" aria-hidden={true} focusable="false" />
                          Refresh
                      </button>
      </div>
      </header>
      {/* Control Bar */}
      <div className="px-margin py-md flex items-center justify-between border-b border-outline-variant bg-surface-bright">
      <div className="flex items-center gap-sm">
      <span className="font-body-md text-body-md text-on-surface font-semibold">System Status</span>
      </div>
      <div className="flex items-center gap-sm">
      <span className="font-body-sm text-body-sm text-on-surface-variant" id="status-label">Ready</span>
      {/* Toggle Switch */}
      </div></div></div>
    </>
  );
}
