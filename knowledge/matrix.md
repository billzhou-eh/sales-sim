# Persona × Product × Industry Pairing Matrix

> The guide for designing realistic scenarios. A scenario is credible only when the
> **buyer role**, the **product**, the **industry**, and the **pain** all fit together.
> Built from [products.md](products.md), [industries.md](industries.md), and
> [terminology.md](terminology.md). Use this BEFORE writing or editing any scenario.

---

## Part A — Which persona buys which product

The six E+H personas (2021 report) map to products by what they are accountable for.
**A product only belongs in a scenario if its buyer role plausibly owns the decision.**

| Persona | Role | Owns / cares about | Natural-fit products | Poor fit (avoid) |
|---|---|---|---|---|
| **Peter Hoffmann** | C&I Engineer (Chemical) | Instrumentation, commissioning, clever technical solutions | **Field Xpert**, FieldCare, Heartbeat, WirelessHART retrofit, FieldEdge | Custody metering economics, pure pricing deals |
| **José García** | Head of Maintenance (Chemical/refinery) | Uptime, maintenance budget, spares, downtime | **Netilion Health**, SAH70, Heartbeat, DIBA, Field Xpert | GMP qualification, lab analytics |
| **Michael Reynolds** | Plant Manager (Specialty Chem) | OEE, P&L, plant-wide KPIs, predictive maintenance story | **SAH70 / Netilion Health (plant-wide asset health)**, Energy Monitoring SSK151, cross-sell from Field Xpert | Hands-on device config, single-instrument detail |
| **Toshiaki Yamamoto** | Purchase Manager (Specialty Chem) | Price transparency, TCO, fair deals, no hidden costs | **FieldCare subscription**, Field Xpert order, any renewal/commercial conversation | Deep process/quality pain (he's commercial, not technical-owner) |
| **Lynn Carter** | Process Engineer (Pharma) | Reliability, accuracy, GMP compliance, yield, batch records | **Netilion (data integration)**, Heartbeat Verification (interval extension), Liquid Analysis SSK141 | Hard-sell platforms needing months of CSV |
| **Monica Ferrari** | Quality Manager (Pharma) | Instrument health visibility, deviations, audit-readiness, "100% safe" | **SAH70 / Netilion Health (plant-wide NE 107 visibility)**, Heartbeat Verification | Inventory, custody metering, pure pricing |

---

## Part B — Which product fits which industry

| Product | Strong industry fit | Why | Weak/avoid |
|---|---|---|---|
| **Field Xpert** | All | Universal field config; ROI on commissioning time | — |
| **FieldCare** | All (esp. Chemical, O&G) | Desktop PAM for large installed bases | — |
| **SAH70** (on-prem health) | Chemical, O&G, Power | Customers who won't use cloud; large installed base needing plant-wide diagnostics | Small sites with few devices |
| **Netilion Health** (cloud health) | Chemical, F&B, Water, Power | Cloud-comfortable customers wanting installed-base health view | Air-gapped/validated networks resistant to cloud |
| **Netilion Inventory / FWR30** | Chemical, F&B, Water (bulk liquids) | Tank-level visibility, forecasting | Metal tanks (FWR30 = plastic only) |
| **Netilion Water (SSK138)** | Water/Wastewater | Purpose-built for abstraction/distribution/effluent | Non-water |
| **Heartbeat Verification** | Pharma, F&B, Chemical, O&G, Mining | Interval extension; verify-without-removal; abrasion/drift detection | — |
| **WirelessHART** | O&G, Chemical, Water | Brownfield retrofit without new wiring | New greenfield (wire it) |
| **Liquid Analysis (SSK141)** | Water, Chemical, F&B, Pharma | pH/conductivity/turbidity/Raman | — |
| **SBC600 Bunker Metering** | O&G / Marine | Custody-transfer bunkering | Anything non-marine-fuel |
| **Overfill Prevention (OPS)** | O&G, Chemical tank farms | API 2350 safety | — |
| **Energy Monitoring (SSK151)** | F&B, Power, Water | Steam/compressed-air/refrigeration efficiency | — |

---

## Part C — Realistic pain by industry (what the customer actually fears)

Use the **right consequence** for the industry. (Full detail in [industries.md](industries.md).)

| Industry | The real fear | NOT the fear |
|---|---|---|
| **Chemical** | Spurious trip of a reactor/column; SIF proof-test failure; off-spec batch from drift | "A missing document stopped the plant" |
| **F&B** | Under-pasteurization at a CCP → product divert/hold; CIP carryover | A calibration sticker expiring |
| **Pharma (GMP)** | OOT at calibration → **deviation → batch quality hold → CAPA → possible rejection/recall** | Production halting because a record is missing |
| **Oil & Gas** | Custody meter out of tolerance → **financial/contractual exposure**; separator carryover | A safety stop from a custody discrepancy |
| **Water/WW** | Turbidity/chlorine drift → **permit exceedance, public notification, boil-water advisory** | A documentation gap stopping treatment |
| **Power** | Drum-level fault → **spurious unit trip** (lost generation) or tube/turbine damage | Paperwork halting the unit |
| **Mining/Metals** | Density/flow drift → **lost recovery/grade = revenue**; tailings overflow/release | A compliance document issue |

---

## Part D — The current six scenarios, audited against this matrix

| Scenario | Persona | Product | Industry | Verdict |
|---|---|---|---|---|
| Discovery Call | Peter | Field Xpert | Chemical | ✅ C&I engineer + field config + chemical = correct |
| The Price Objection | Toshiaki | Field Xpert | Specialty Chem | ✅ Purchase manager + commercial = correct |
| The Platform Evaluation | Lynn | Netilion | Pharma | ✅ Process engineer + cloud caution + GMP = correct (ensure CSV-validation fear is voiced) |
| Save the Renewal | José | Netilion Health | Chemical/refinery | ✅ Maintenance + health subscription = correct |
| The Cross-Sell | Michael | Netilion + Field Xpert | Specialty Chem | ✅ Plant manager + plant-wide health from device data = correct |
| The Subscription Pushback | Toshiaki | FieldCare 3.0 | Specialty Chem | ✅ Purchase manager + subscription pricing = correct |
| **The Careful Buyer** | **Monica** | **SAH70** | **Pharma** | ⚠ **FIXED** — reframed from "calibration certificate management" (wrong) to **plant-wide instrument health visibility / unmonitored NE 107 alarm → batch deviation** (correct). See note below. |
| The Hidden Gaps | Peter | WirelessHART | Chemical | ✅ C&I engineer + brownfield retrofit = correct |

### Note on Monica / SAH70 (the corrected scenario)
- **Wrong (old):** SAH70 manages calibration certificates; a certificate "expired" and "stopped a batch."
- **Right (new):** SAH70 gives plant-wide NE 107 instrument-health visibility. Monica's real pain: health status is visible per-device but nobody watches it systematically. An instrument sat in **"Maintenance Required"** for weeks during a campaign; nobody noticed; the measurement drifted; **batch record review flagged a deviation; a CAPA followed; affected batch went on quality hold.** SAH70's value = the plant-wide view that would have surfaced the alarm in time.
- **Do NOT** have Monica say instruments "need certification," that a certificate "expired," or that production "stopped because a document was missing." She is a Quality Manager — she would say *deviation, CAPA, quality hold, batch record review, out-of-tolerance, audit finding.*

---

## Part E — Scenario design checklist

Before finalizing any scenario, confirm:
1. **Role owns the decision** — would this persona actually sign for this product? (Part A)
2. **Product fits the industry** — and you're not claiming a capability it lacks. (Part B + products.md)
3. **Pain is industry-real** — the consequence matches how that industry actually fails. (Part C)
4. **Terminology is correct** — calibration "due" not "expires"; verification ≠ calibration; health ≠ certification. (terminology.md)
5. **No invented functionality** — every claimed capability traces to products.md.
6. **Disclosure is realistic** — a senior buyer doesn't hand over specific pain to a generic question.
