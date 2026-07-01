"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { Modal } from "@/components/admin/modal";
import { Button } from "@/components/ui/button";
import type { FundingSource } from "@/lib/mock/overview";

type Flow = "add" | "link" | null;

interface FundingActions {
  /** Open the "add funds" flow (top up the program balance from the funding source). */
  addFunds: () => void;
  /** Open the "link bank account" flow. */
  linkAccount: () => void;
}

const FundingContext = createContext<FundingActions | null>(null);

/** Returns the funding actions, or null when rendered outside a FundingProvider. */
export function useFunding(): FundingActions | null {
  return useContext(FundingContext);
}

const dialogButton = "h-10 rounded-full text-[13.5px]";

export function FundingProvider({
  source,
  children,
}: {
  source: FundingSource | null;
  children: ReactNode;
}) {
  const [flow, setFlow] = useState<Flow>(null);
  const close = useCallback(() => setFlow(null), []);
  const actions = useMemo<FundingActions>(
    () => ({ addFunds: () => setFlow("add"), linkAccount: () => setFlow("link") }),
    [],
  );

  const accountLabel = source ? `${source.institutionName} ••${source.mask}` : null;

  return (
    <FundingContext.Provider value={actions}>
      {children}

      {/* Add funds — top up the program balance from the linked bank via ACH. */}
      <Modal open={flow === "add"} onClose={close} title="Add funds">
        <h2 className="font-display text-[18px] font-semibold tracking-[-0.01em] text-fg">Add funds</h2>
        {source ? (
          <>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-muted">
              Top up your program balance from your chapter&rsquo;s {accountLabel} account. Funds
              move by ACH, typically in 1–3 business days.
            </p>
            <div className="mt-4">
              <label htmlFor="add-funds-amount" className="text-[12.5px] font-medium text-fg-muted">
                Amount
              </label>
              <input
                id="add-funds-amount"
                inputMode="decimal"
                placeholder="$0.00"
                className="mt-1.5 h-11 w-full rounded-xl border border-line bg-surface px-3.5 text-[14px] text-fg outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              />
            </div>
            <div className="mt-5 flex items-center justify-end gap-2.5">
              <Button variant="ghost" onClick={close} className={`${dialogButton} px-4`}>
                Cancel
              </Button>
              <Button variant="solid" onClick={close} className={`${dialogButton} px-5 font-semibold`}>
                Add funds
              </Button>
            </div>
            <p className="mt-3 text-[11.5px] text-fg-muted">
              Demo only — no money moves and no transfer is initiated.
            </p>
          </>
        ) : (
          <>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-muted">
              Link your chapter&rsquo;s bank account first, then fund your cards from it.
            </p>
            <div className="mt-5 flex items-center justify-end gap-2.5">
              <Button variant="ghost" onClick={close} className={`${dialogButton} px-4`}>
                Cancel
              </Button>
              <Button
                variant="solid"
                onClick={() => setFlow("link")}
                className={`${dialogButton} px-5 font-semibold`}
              >
                Link account
              </Button>
            </div>
          </>
        )}
      </Modal>

      {/* Link bank account — connect the chapter's existing bank. */}
      <Modal open={flow === "link"} onClose={close} title="Link bank account">
        <h2 className="font-display text-[18px] font-semibold tracking-[-0.01em] text-fg">
          Link bank account
        </h2>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-muted">
          Keep your bank — fund your cards from it. Connect your chapter&rsquo;s account through our
          bank aggregator to top up your program balance.
        </p>
        <div className="mt-5 flex items-center justify-end gap-2.5">
          <Button variant="ghost" onClick={close} className={`${dialogButton} px-4`}>
            Cancel
          </Button>
          <Button variant="solid" onClick={close} className={`${dialogButton} px-5 font-semibold`}>
            Link account
          </Button>
        </div>
        <p className="mt-3 text-[11.5px] text-fg-muted">Demo only — no bank is actually connected.</p>
      </Modal>
    </FundingContext.Provider>
  );
}
