# E+H Digital Solutions — Product Capability Cards

> Verified against the MVA Brain wiki (June 2026). Each card states what a product
> IS, DOES, and — critically — does **NOT** do, plus its target buyer.
> Rule: if the wiki does not say a product does X, the simulator must not claim it does.
> See [terminology.md](terminology.md) for the diagnostics-vs-calibration distinction
> and [matrix.md](matrix.md) for persona/industry pairing.

---

## SAH70 — Asset Health Monitoring (on-premise)

- **IS:** On-premise, multi-user software for continuous 24/7 device **health/diagnostics** monitoring. Successor to SRP700.
- **DOES:** Acts on real-time device diagnostics; instant device connection for troubleshooting; current + historical diagnostic data with time-stamped recommendations; trend analysis; secure multi-user on-prem; consumes **Heartbeat** diagnostic signals (NE 107 status).
- **Does NOT:** No cloud (on-prem only). **Does NOT manage calibration certificates or compliance documentation.** Does NOT perform device verification itself (that's Heartbeat). Not an inventory tool. Not a QMS or DMS.
- **Buyer:** Maintenance / reliability engineers, plant operations / reliability managers. On-prem appeals to customers who will not use cloud.
- **Sold via:** MVP Integration Projects (tag MVP in SFDC). PO: Marco Nicklas; success stories: Patrick Brand.
- **Real deals:** BASF lead (Emanuel Trunzer); Cargill US ~10 licenses ~100K (closing after 3 yrs).
- **Pairs with:** Heartbeat (data source), FieldCare/Field Xpert (field tools), Netilion Health (cloud counterpart).

---

## Netilion (cloud IIoT umbrella)

- **IS:** Cloud platform for connected asset diagnostics, analytics, documentation, inventory. Per-user subscription. Order code XD40NET.
- **Services & codes:** Analytics XD40NAN · Library XD40NLI · Health XD40NHE · Value XD50NVA · Inventory SD40NIN · Connect XD40NCO · Fermentation XD40NFE · Process XD40NPR.
- **DOES:** Register assets, stream measurement/diagnostic data to cloud; real-time + historical diagnostics on web/mobile; analytics & trending; **document hosting (Library)**; health monitoring via Heartbeat; inventory state/forecast (Inventory); IT integration via Connect (API).
- **Does NOT:** Not a device-configuration tool (that's FieldCare/Field Xpert). Cloud-only (no on-prem). Needs a gateway (FieldEdge) or pre-connected sensor for many protocols. Not a calibration-certificate or quality-record manager.
- **Buyer:** Plant operations/asset managers, reliability engineers, IT/automation (Connect), quality/compliance (documentation retrieval).
- **Commercial:** Pricing not public; per-user; SCs get **20% NSP discount**. Register at netilion.endress.com.

---

## Netilion Health

- **IS:** The Netilion service for **device condition/health monitoring** in the cloud.
- **DOES:** Aggregates NE 107 / Heartbeat status across the connected installed base; dashboards, alerts, trends.
- **Does NOT:** Same boundaries as SAH70 — not a calibration/cert manager, not a QMS. Cloud (vs SAH70 = on-prem; this is the key choice axis).
- **Buyer:** Maintenance / reliability, in customers comfortable with cloud.

---

## Netilion Library

- **IS:** The Netilion service for **device documentation** (manuals, certificates, as-built docs) tied to the installed base.
- **DOES:** Stores and retrieves device-specific documentation; the closest thing in the portfolio to "find the papers for the device I own."
- **Does NOT:** Not a controlled QMS/eDMS; not a calibration scheduler.
- **Buyer:** Anyone who needs to locate device documentation fast — maintenance, quality, audits.

---

## Netilion Inventory (SD40NIN)

- **IS:** Cloud service for real-time tank-level/inventory monitoring via connected sensors.
- **DOES:** Real-time level via FWR30 or gateway; linearization (level→volume); forecasting; inventory locking; global WWAN monitoring.
- **Does NOT:** Not a maintenance/cal scheduler. Needs a connected sensor. Cloud-only.
- **Buyer:** Inventory/supply-chain, operations, procurement.

---

## Netilion Water (SSK 138)

- **IS:** Water/wastewater-specific Netilion-powered solution (abstraction, distribution, effluent discharge).
- **DOES:** Consolidate measurement data; parameter monitoring with alert thresholds; reduce manual reporting effort; audit-ready structured data.
- **Does NOT:** Not field configuration; does not control treatment chemistry (monitors, doesn't automate). Needs gateways/sensors.
- **Buyer:** Water utility operations, WWTP engineers, compliance officers. PO: Gary Dreyer. OI target 2026 ~100k (SSK138).

---

## Field Xpert (SMT50B / SMT70B / SMT77)

- **IS:** Ruggedized industrial tablet running FieldCare SFE300 for field device config, commissioning, diagnostics. Ex variants for hazardous areas (SMT70B = Zone 2, SMT77 = Zone 1).
- **DOES:** 4000+ device drivers (auto-updated); configure via HART/PROFIBUS/PROFINET/Modbus TCP/WirelessHART/Bluetooth; display Heartbeat NE 107 status; trigger Heartbeat verification workflows in the field; sync to Netilion; on-site verification reports.
- **Does NOT:** Not a cloud host (it's a client). Not standalone long-term monitoring (needs Netilion/SAH70 backend). ROI story: device config ~35 min → ~5 min.
- **Buyer:** Field technicians, commissioning/service engineers, maintenance planners. PO: Tobias Klook.
- **Commercial:** 2026 NS target 1.125 MCHF; every tablet → 12-month free Netilion Plus coupon; trade-in 20% discount.

---

## FieldCare SFE500

- **IS:** Desktop **Plant Asset Management** software (FDT/DTM) for config, commissioning, diagnostics of E+H + 3rd-party devices.
- **DOES:** Full device configuration (DTM); Heartbeat diagnostics + verification at the desktop; stores configs/history (SQL Server); multi-user.
- **Does NOT:** Primarily on-prem (cloud only via FieldCare 3.0 Netilion-hybrid, incoming). Not a monitoring system alone. Windows-only. Not inventory.
- **Buyer:** Plant/commissioning engineers, instrumentation specialists, configuration teams. PO: Tobias Klook. FieldCare 3.0 → Netilion-hybrid subscription, tag-based pricing.

---

## FieldEdge SGC500 (+ SGC200)

- **IS:** Wired edge **gateway** connecting HART/PROFIBUS/PROFINET/Modbus TCP/WirelessHART instruments to Netilion Cloud. SGC200 = wireless variant (15 BT devices, built-in mobile network).
- **DOES:** Multi-protocol → cloud conversion; real-time streaming to Netilion services; Netilion Connect integration; remote visibility without on-site tools.
- **Does NOT:** Not a local config tool (gateway only). Not standalone (needs Netilion). Doesn't replace FieldCare/Field Xpert for commissioning.
- **Buyer:** Operations (remote monitoring), plant engineers (Netilion architects). PO: Frederik Schillert. One-time hardware sale (decoupled from subscription).

---

## Heartbeat Technology (HBT)

- **IS:** Cross-portfolio **diagnostic + verification + monitoring** framework built into device firmware. Not a standalone order code — a device option (e.g. "EB" suffix on Promass 300 / Promag 500).
- **DOES:** Reports NE 107 status to Field Xpert/FieldCare/Netilion/DCS/SmartBlue; **in-situ verification without process interruption** (TÜV-attested, traceable, audit-ready PDF report); detects systematic faults (helps SIL proof-test strategy); device-specific monitoring (HBSI wear, RAI radar accuracy, TrustSens drift).
- **Does NOT:** Not configuration. **Does NOT replace required wet calibration in all contexts** — it *extends intervals*. Does NOT adjust/trim. Needs a display interface to surface signals.
- **Buyer:** Reliability engineers, functional-safety teams (SIL), maintenance planners, process engineers. Contact: Daniel Persson. SIL rule: always offer "Verification + Monitoring" when spec calls for SIL.

---

## WirelessHART Solutions

- **IS:** Package of wireless adapters (FieldPort SWA50/SWA70), gateways (FieldGate SWG50/SWG70), and project integration → WirelessHART networks feeding PAM and Netilion.
- **DOES:** Convert HART → Bluetooth/WirelessHART; manage network security/routing; bridge to SCADA; remote troubleshooting via SmartBlue/Field Xpert; stream to Netilion.
- **Does NOT:** Not cloud hosting (needs Netilion). Doesn't replace local commissioning tools. Coverage needs a site survey (brownfield retrofits).
- **Buyer:** Operations (brownfield retrofits without new wiring), commissioning engineers, maintenance. PO: Ivan Kovtun.
- **⚠ Quality note:** SWA50/SWA70 units produced **Dec 2025 – ~Jun 2026** have a duplicate MAC/HART address issue; +35 days lead time on new orders until ~Jun 2026.

---

## Mobile / Web apps

- **SmartBlue** — Bluetooth field-device config + diagnostics (NE 107) in hazardous/hard-to-reach areas. Free. Displays only — does not commit configs the way Field Xpert does. 1,200+ daily users, 180+ countries.
- **Operations App** — scan data-matrix/serial → W@M documents (manuals, spare parts, successors).
- **Netilion Scanner** — register physical assets into Netilion Analytics (photo/serial/RFID).
- **Device Viewer (web)** — generic documentation lookup by serial number.
- **Does NOT:** SmartBlue is Bluetooth-only (wired protocols → FieldCare/Field Xpert).

---

## Micropilot FWR30

- **IS:** First fully-connected E+H sensor — IIoT radar level sensor for **plastic tanks** with built-in cellular (Global SIM) streaming to Netilion Inventory.
- **DOES:** Non-contact radar level; direct WWAN/LTE streaming; plug-and-play; linearization; global monitoring.
- **Does NOT:** Not for metal tanks; needs cellular coverage; cloud-dependent.
- **Buyer:** Supply-chain/inventory, logistics, operations. Hardware PO: Volker Schulz (E+H L+P).

---

## ProtectBlue (+ Cyber Resilience Act)

- **IS:** Portfolio-wide **security** framework (IEC 62443-4-2/4-1) for CRA compliance. Tiers: Essential (SL1) and Extended (SL2+).
- **DOES:** Built-in password protection + security menus; automatic security updates; central user admin (BlueConnect); device authentication (COA).
- **Does NOT:** Doesn't replace plant-level network security; doesn't auto-deploy patches without customer action.
- **CRA deadlines:** reporting obligations Sep 11 2026; full application Dec 11 2027. First Essential devices 2026: CM42B, FMA90, Proline 100, DTT33.

---

## DIBA — Dynamic Installed Base Analysis

- **IS:** Managed analytics service giving a curated view of the customer's installed E+H base via Netilion bundles. One-off XD81IBA; recurring XD81DIB.
- **DOES:** Analyze installed device population; surface spare-parts + shop links; support lifecycle/maintenance planning. **Often the *opening move*** — populate Netilion via DCS/FieldCare export without disrupting the customer.
- **Does NOT:** Not config/commissioning; E+H installed base only; needs a Netilion account.
- **Buyer:** Procurement, maintenance managers, asset management, C&I engineers. "Try before you buy" in DACH 2026.

---

## Smart Support Connect (SSC)

- **IS:** Connected remote-support service for **High End Analyzers (CA80)** — SGC400 gateway + Netilion.
- **DOES:** Stream analyzer data/diagnostics to cloud; remote troubleshooting; predictive support; SFDC/Netilion ticketing.
- **Does NOT:** Not analyzer configuration; needs Netilion availability in-country.
- **Buyer:** Operations, maintenance, service coordinators (liquid analysis / water / biotech).

---

## Distinctions to keep straight (cheat-sheet)

- **Device diagnostics (Heartbeat, SAH70, Netilion Health)** ≠ **compliance documentation** (Netilion Library, calibration certs).
- **Configuration tools (FieldCare, Field Xpert)** ≠ **monitoring systems (SAH70, Netilion Health)**.
- **On-prem (SAH70, FieldCare)** ≠ **cloud (Netilion)**.
- **Mobile (SmartBlue, Field Xpert)** ≠ **desktop (FieldCare)**.
- **Wireless adapters (SWA50/70)** ≠ **edge gateways (SWG50/70, SGC500)**.
