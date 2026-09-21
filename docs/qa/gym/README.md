# Gym scenario — 2026-09-21

Provenance: the user supplied a Wispr Flow transcript of a Facebook ad. No original video URL or named gym was supplied. We adapt the pricing idea, not its unverified claims of success. The $50/month, $500/90 days and 20/60 buyers come from that transcript; all operating costs, cash, interest and capacity in the playable pack are authored scenario inputs.

Local browser QA at 390×844: featured case opens; coaching research costs 2h; demand research costs 2h; the booking-payment event appears and changes the pilot option. A blank-note replacement decision completes at 25/100. Money comparison shows $15k/$10k/$30k sales and costs over the same 90 days. Practice distinguishes extra sales from profit. Screenshots and DOM receipt are in this folder.

144 automated tests pass, including cost arithmetic, hidden research, event changes and existing historical cases. Typecheck and production build pass. Physical phone and cellular connectivity are not independently tested.

Production first pass on 4d09e29 confirmed featured case, blank-note 85/100 pilot choice and the 90-day comparison. It caught a model error: the alternative-choice answer omitted base costs when discussing replacement. The gym now serves an authored answer for that suggested question, explicitly retaining the $9,500 shortfall. A regression test exercises that exact coach path. Freeform coaching also instructs the model to reconcile full-period base and added costs.
