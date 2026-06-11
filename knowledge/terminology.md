# Process Instrumentation Terminology — Accuracy Reference

> Purpose: stop the simulator from inventing capabilities or misusing industry terms.
> This is the single most load-bearing file. When writing any scenario, persona, or
> AI prompt, the language MUST conform to this. Verified against NAMUR, NIST, ISA,
> and Endress+Hauser technical sources (June 2026).

---

## THE TWO GOLDEN RULES

1. **A missing or late *document* almost never stops production by itself.**
   What stops or jeopardizes production is a *physical* problem (a trip, an off-spec
   product, a safety function unavailable) or a *quality/compliance decision* (a hold,
   a deviation, a permit exceedance) triggered by evidence that measurement may have
   been wrong. **Documents are evidence; they are not the hazard.**

2. **Instruments ship pre-calibrated with a traceable calibration certificate from the
   manufacturer.** Customers do **not** "certify" their instruments. Customers
   *recalibrate* them on an interval, *verify* them between calibrations, and (in
   regulated plants) *qualify/validate* the system the instrument sits in.

---

## Calibration lifecycle vocabulary

| Term | Correct meaning | Common MISUSE to avoid |
|---|---|---|
| **Calibration** | A documented comparison of a device's reading to a **traceable reference standard** across its range. It **determines and records error; it does not, by itself, change the device.** Produces a calibration certificate. | "Calibration makes the device more accurate." It only *quantifies* error; the **adjustment** changes the reading. Don't call a quick field check a "calibration." |
| **As-found / As-left** | *As-found* = performance measured **before** any adjustment (shows drift since last cal). *As-left* = performance **after** adjustment. Both recorded. | — |
| **Adjustment / Trim** | The act of correcting the device (zero/offset, span) so it reads correctly. Separate step, only if as-found is out of tolerance. | Conflating "adjustment" with "calibration." |
| **Recalibration** | Repeating calibration at the next scheduled interval or after a repair/event. | — |
| **Calibration interval** | The defined period between calibrations. Risk-based and drift-history-based. **NIST does not mandate a fixed interval.** | — |
| **Calibration due date** | The date the **next** calibration is scheduled. | ❌ "The calibration **expires**." Calibration has a **due date**; it does not expire. The instrument still works when due — it is *due*, and its data may need review. |
| **Calibration certificate** | Document (from manufacturer or accredited cal lab) stating measured errors and **traceability**. Instruments **ship pre-calibrated with one.** | ❌ "The **customer certifies** the instrument." ❌ "The certificate expires." |
| **Out of tolerance (OOT)** | An as-found result outside the acceptance limit at calibration. **Triggers a backward-looking review** of everything measured since the last good calibration. | Treating OOT as an instant line-stop. It triggers investigation/hold, not an automatic shutdown. |
| **Verification** | Confirming the device **still meets specified requirements**, often **in-situ and without a full traceable calibration** (e.g. Heartbeat Verification using internal redundant references). Provides documented evidence; can support **extending** calibration intervals. | ❌ Using "verify" and "calibrate" as synonyms. Verification ≠ calibration; it doesn't adjust and (in general) isn't a full traceable calibration. |
| **Validation** | Confirming a **whole system/process** consistently produces the intended result for its **intended use** (e.g. validating a pasteurizer or a cleaning process). | Applying "validation" to a single instrument. Validation is a system/process concept. |
| **Qualification (IQ/OQ/PQ)** | GMP life-cycle proof that equipment was **Installed** (IQ), **Operates** (OQ), and **Performs** (PQ) correctly. Customer activity, distinct from manufacturer calibration. (Sometimes DQ = Design Qualification first.) | Confusing qualification with calibration. |
| **Traceability** | An **unbroken, documented chain of comparisons** back to a national/international standard (NIST, PTB), each with stated uncertainty. | Treating "NIST traceable" as a quality grade rather than a documented chain. |

### Wrong → Right quick table

| ❌ Wrong | ✅ Right |
|---|---|
| "The certificate expires." | "The calibration **due date** is…" / "calibration is **due** on…" |
| "The device needs **certification** by the customer." | "The device needs **recalibration**; the certificate is issued by the cal lab/manufacturer." |
| "Heartbeat creates a **health record / health certificate**." | "Heartbeat Verification produces a **verification report**." |
| "Calibration **fixes/adjusts** the device." | "Calibration found drift; an **adjustment/trim** brought it back into spec." |
| "Green NE 107 status = **calibrated and accurate**." | "No diagnostic fault reported; accuracy is confirmed by **verification/calibration**." |
| "Verification **replaces** calibration." | "Verification lets you **extend calibration intervals** with maintained confidence." |
| "**NE 107 certified** device." | "**NE 107 compliant** device" (NE 107 is a recommendation, not a certification). |
| "**NIST/TÜV certified** device." | "Traceable to national standards; the **method** is TÜV-attested." |

---

## NAMUR NE 107 — device status signals

NE 107 ("Self-Monitoring and Diagnostics of Field Devices") is a **NAMUR recommendation**, not a legal standard or certification. It maps a device's many internal diagnostics into **four standardized status categories** so an operator doesn't need device-specific expertise.

| Signal | Letter | Color | Meaning | Priority |
|---|---|---|---|---|
| **Failure** | F | Red | Output invalid due to a device malfunction. Act immediately. | 1 (highest) |
| **Function check** | C | Orange | Device temporarily worked on (simulation/config); output temporarily invalid/held. | 2 |
| **Out of specification** | S | Yellow | Device operating outside permitted conditions; measurement uncertainty likely increased. | 4 |
| **Maintenance required** | M | Blue | Output still valid, but a reserve is nearly exhausted — maintenance needed soon. | 3 |
| (Healthy) | — | Green | Normal operation. | — |

**Surfaced via:** local display / handheld, Plant Asset Management software (FieldCare), the DCS (if it supports the mapping), and IIoT platforms (Netilion Health, SAH70).

**What NE 107 does NOT tell you:**
- It's a **status classification, not a root-cause diagnosis** — one "M" can mean many things.
- "Green/OK" is **not** a calibration result and does **not** prove the device is in tolerance.
- Whether it reaches the operator depends on the host system supporting NE 107.

---

## Heartbeat Technology — three pillars

Device-firmware capability on supported instruments (many Proline flow, Cerabar/Deltabar pressure, level, analytical).

- **Heartbeat Diagnostics** — continuous self-monitoring; produces the NE 107 status. High *diagnostic coverage* (e.g. >95%) = share of failure modes detectable. (Coverage ≠ accuracy.)
- **Heartbeat Verification** — on-demand, **in-situ** functional test. Runs **without removing the device, without process shutdown, without a wet calibration.** Compares live internal references against factory baselines. Produces a **pass/fail, tamper-proof, audit-ready PDF verification report**. **TÜV-attested method**, traceable per DIN EN ISO 9001. High test coverage.
- **Heartbeat Monitoring** — outputs additional process/instrument-health variables to trend in the DCS/Netilion for predictive maintenance.

**What Heartbeat Verification does NOT do (critical):**
- It does **not replace a wet/physical re-calibration in all contexts.** Correct framing: it lets users **safely extend calibration intervals / reduce calibration frequency** within an optimized program. In regulated (GMP) environments, periodic traceable wet calibration is **still required** on a defined schedule; Heartbeat is used *between* calibrations.
- It does **not adjust or trim** the device — it verifies only.
- It is **not** a fresh determination of error against an external reference standard (that's calibration).
- Never say "you never have to calibrate again."

---

## Asset health monitoring / Plant Asset Management (PAM)

What SAH70, Netilion Health, FieldCare condition monitoring DO: aggregate device diagnostics and **NE 107 status across the installed base**, trend it, timestamp events and recommendations, prioritize by severity → shift from reactive to predictive maintenance, prevent unplanned downtime.

**What PAM/health systems are NOT:**
- **Not calibration-certificate managers** — they track health/diagnostic status, not traceable calibration certificates or as-found/as-left records.
- **Not document management systems** — they don't store P&IDs, manuals, controlled docs (that's Netilion Library).
- **Not quality management systems** — they don't manage SOPs, CAPAs, audits, batch records.
- **Not a measurement-accuracy authority** — a green dashboard means "no diagnostic fault reported," NOT "every device is calibrated and in tolerance."

---

## The three configuration/management tools — keep distinct

| Tool | What it is | What it is FOR |
|---|---|---|
| **FieldCare (SFE500)** | PC/desktop, **FDT/DTM-based** Plant Asset Management & configuration. | Deep, plant-wide **device parameterization/configuration**, diagnostics, documentation, condition-monitoring setup from an engineering workstation. Multi-vendor via DTMs. |
| **Field Xpert (SMT50B/70B/77)** | **Mobile, Ex-rated configuration tablet** with thousands of pre-installed drivers; links to Netilion. | **In-the-field** commissioning, configuration, diagnostics at the device. The portable counterpart to FieldCare. |
| **Netilion** | **Cloud, multi-brand IIoT ecosystem** (Health, Analytics, Library, Value, …). | **Ongoing lifecycle/asset management at scale**: installed-base tracking, documentation, health/performance monitoring & trending. NOT primarily a parameterization tool. |

Don't describe Netilion as a "configuration tool" or FieldCare as "cloud."
