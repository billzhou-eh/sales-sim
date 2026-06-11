# Process Industries — Reality Reference

> For each industry E+H serves: key processes, the real regulatory framework, the
> roles, and — most important — the **realistic consequences** of instrument problems.
> Verified against standards bodies, ISA/NAMUR, and the internal SIG Chemical strategic
> document (June 2026). Read alongside [terminology.md](terminology.md).

> **Repeat of the golden rule:** a missing *document* never physically stops a process.
> What stops or jeopardizes production is a physical fault (trip, off-spec,
> under-processing, unavailable safety function) or a quality/compliance *decision*
> (hold, deviation, permit exceedance) triggered by evidence measurement may be wrong.

---

## 1. Chemical (incl. petrochemical & specialty chemicals)

**Processes & measurements.** Reactors, distillation columns, heat exchangers, blending/dosing skids, tank farms. Flow (Coriolis for mass/dosing/ratio, mag for conductive liquids, vortex for steam), level (GWR, radar, DP), pressure/DP, temperature (RTD/TC), analytical (pH, conductivity, dissolved gases). Internal/custody transfer of feedstocks common.

**Regulation/standards.** Functional safety **IEC 61508** (devices) / **IEC 61511** (process SIS), each Safety Instrumented Function rated **SIL 1–4**. Explosive atmospheres **ATEX** (EU) / **IECEx**. Process safety: OSHA PSM (US), Seveso III (EU). NAMUR recommendations (NE 107) widely adopted.

**Roles.** Process/production engineer (yield, throughput, on-spec), maintenance & reliability engineer (uptime, MTBF), I&C / E&I technician, functional safety engineer / "SIS owner", HSE manager, plant manager, procurement/category buyer.

**Realistic consequences.**
- A **SIF sensor drifting/failing** degrades the achieved SIL. A **failed proof test** means the function isn't proven safe → repair promptly, apply **compensating measures** (manual watch, operating restrictions, partial-stroke testing) for a limited time, or **bring the process to a safe state (trip)**. A **spurious trip** from a faulty transmitter is itself costly — unplanned reactor/column shutdown = lost production, off-spec intermediate, hours-to-days restart.
- A **control (non-safety) measurement drifting** → off-spec product, yield loss, higher energy/reagent use, quality reject — not a safety event. E.g. a drifting Coriolis on reactant feed shifts stoichiometry → off-ratio batches reworked or downgraded.
- A **documentation gap** (missing proof-test record) is an *audit finding* that may force re-proving the function — but it's the physical unavailability, not the paperwork, that creates risk.

> Chemical strategic context is consolidated with the other six industries in the
> **"## Industry strategic context (SIG v12.0 decks)"** section near the end of this file,
> using the authoritative figures from the official v12.0 deck.

---

## 2. Food & Beverage

**Processes & measurements.** Mixing/blending, pasteurization (HTST/LTLT), UHT, fermentation, filling, and especially **Clean-in-Place (CIP)/Sterilize-in-Place (SIP)**. Temperature (critical for pasteurization), flow (Coriolis, mag), level, pressure, analytical (conductivity to track CIP phase boundaries). Hygienic design mandatory.

**Regulation/standards.** **HACCP** with **Critical Control Points (CCPs)** (e.g. pasteurizer hold time/temp); **FSMA** Preventive Controls (PCHF, US); hygienic design **EHEDG** (EU) / **3-A** (US); FDA-conformant wetted materials; instruments must survive CIP/SIP.

**Roles.** QA / food-safety manager (owns HACCP plan, CCP compliance), production/process engineer, maintenance technician, hygiene/sanitation lead, plant/operations manager, procurement.

**Realistic consequences.**
- A **pasteurizer temperature sensor reading low/drifting at a CCP** is the serious case: product processed below validated time/temperature is potentially **under-pasteurized** (food-safety hazard). Plant **diverts or holds** affected product (flow-diversion valves exist for exactly this) and runs a disposition. Driven by the *physical* under-processing.
- A **drifting CIP conductivity sensor** → cleaning cycle ends early or carries over chemical → contamination risk or wasted re-clean.
- A **calibration found out-of-tolerance** at the next check → review of product since last good calibration → affected lots held/dispositioned. Not halted because a sticker expired — because a CCP may not have been met.

---

## 3. Life Sciences / Pharmaceutical (GMP) — handle with precision

**This is where prior simulator versions made the worst errors.**

**Processes & measurements.** Bioreactors/fermentation, chromatography, filtration/TFF, formulation, fill-finish, Water-for-Injection (WFI) and clean utilities, autoclaves/lyophilizers. Temperature, pressure/DP (cleanroom cascades), flow, level, conductivity (WFI), pH, dissolved oxygen, TOC.

**Regulation/standards.** **FDA 21 CFR Part 11** (e-records/signatures), **EU GMP Annex 11** (computerised systems), **GAMP 5** (CSV lifecycle). Data integrity **ALCOA+**. Qualification **IQ/OQ/PQ**.

**Roles.** QA (releases batches, owns deviations), Qualified Person (QP, EU — legally releases product), validation engineer (IQ/OQ/PQ), metrology/calibration group, manufacturing/process engineer, C&Q lead, regulatory affairs. **QA holds the authority that stops or releases product.**

**Realistic consequences — stated correctly.**
- An instrument found **out-of-tolerance (OOT) at its next scheduled calibration** is the canonical event. It triggers a **deviation** and an investigation: *was this instrument used in production since the last good calibration, and could the drift have affected product or critical data?* Potentially affected **batches go on quality hold (quarantine)** pending impact assessment; may be released, reworked, **rejected, or recalled**. A **CAPA** is opened.
- **Production is NOT stopped merely because a calibration document is missing or a sticker "expired."** A missing record is a data-integrity/GMP finding; the risk is *uncertainty about whether measurement was valid*, resolved by investigation — not an automatic line stop.
- Instruments arrive **pre-calibrated with a traceable certificate.** The customer **qualifies** the system (IQ/OQ/PQ) and **recalibrates** on a risk-based interval. Customers don't "certify."
- **Heartbeat Verification** provides a traceable, TÜV-assessed **in-situ verification** (not a wet calibration) that can support **extended calibration intervals** and reduce process interruption — but it verifies, it does not replace the legal definition of calibration in every context.

---

## 4. Oil & Gas (upstream / midstream / downstream / refining)

**Processes & measurements.** Upstream: wellhead, separators, test separators. Midstream: pipelines, **LACT units** (Lease Automatic Custody Transfer), gas metering, storage. Downstream: crude/vacuum distillation, FCC, reformers, blending. Flow (Coriolis, ultrasonic, orifice/DP, PD), level (radar, GWR, DP), pressure, temperature; analytical for **BS&W**, density, gas composition.

**Regulation/standards.** Custody/fiscal: **API MPMS** (Ch. 4 proving, Ch. 5 metering), **AGA** reports (AGA-3 orifice, AGA-9 ultrasonic), **ISO 5167**, **OIML R117**, national metrology (NIST, PTB). Custody targets very low uncertainty (liquid hydrocarbons ~±0.25% or better). Safety: IEC 61511 SIS, ATEX/IECEx, API RP 14C.

**Roles.** Measurement/metering technician / "measurement analyst" (custody accuracy, owns proving), production engineer, pipeline controller, reliability/maintenance, HSE, hydrocarbon-accounting analyst, procurement.

**Realistic consequences.**
- A **custody-transfer meter out of tolerance** = **measurement uncertainty in fiscal accounting** → financial, contractual, legal exposure (mis-measured volume, disputed invoices, back-allocation). **Not** primarily a safety stop. Meters are **proved** against a prover/master meter and a **meter factor** applied; a failed proving → re-proving, investigation, possible volumetric correction since the last good prove.
- A **separator level transmitter failing** → liquid carryover into gas or gas blow-by into liquid — a process/safety problem.
- A **SIF/ESD sensor failure** → degraded safety function → repair, compensating measures, or trip (as in chemical).

---

## 5. Water & Wastewater

**Processes & measurements.** Intake, coagulation/flocculation, sedimentation, filtration, **disinfection** (chlorine/chloramine/UV/ozone), distribution; wastewater: screening, aeration (DO control), clarification, nutrient removal, effluent discharge. Flow (mag dominant), level, pressure, heavy **analytical**: pH, turbidity (NTU), free/total chlorine residual, DO, conductivity, ammonia/nitrate.

**Regulation/standards.** US: Safe Drinking Water Act (**40 CFR 141**), Clean Water Act **NPDES** discharge permits; turbidity limits (≤0.3 NTU combined filter effluent), disinfection **CT** compliance, MRDLs. EU: Drinking Water Directive, Urban Wastewater Treatment Directive.

**Roles.** Licensed/certified plant operator (legally responsible for compliance), process/water-quality specialist, maintenance/instrument tech, compliance officer, utility/operations manager, municipal procurement.

**Realistic consequences.**
- A **turbidity or chlorine analyzer drifting** → real or apparent **regulatory exceedance**. If filtered-water turbidity or disinfection CT actually falls out of limits → **treatment-technique violation**, mandatory **public notification**, corrective action — possibly a **boil-water advisory**. Driver = the water-quality breach (or inability to prove control).
- A **drifting effluent analyzer/flow meter** on an NPDES discharge → **permit exceedance** → fines, public disclosure.
- A **DO sensor fault** in aeration → wasted energy (over-aeration) or upset/odor (under-aeration) — cost/operational, not instant compliance failure.

---

## 6. Power & Energy

**Processes & measurements.** Boilers/HRSGs, steam/gas turbines, feedwater/condensate, flue-gas/emissions. Classic safety-critical loop: **boiler steam-drum level** (three-element control: drum level + steam flow + feedwater flow), measured redundantly (DP + GWR). Steam/feedwater flow, pressure, high-temperature, and **CEMS**.

**Regulation/standards.** Grid reliability **NERC** (North America); boiler/combustion safety **NFPA 85**, ASME codes; emissions EPA CEMS (US), EU IED/MCP.

**Roles.** Control-room operator, plant/unit engineer, I&C technician, maintenance/reliability, performance engineer (heat rate/efficiency), environmental compliance, plant manager.

**Realistic consequences.**
- A **drum-level transmitter failing** is the headline: **low level** risks tube overheating/rupture; **high level** risks water carryover into the turbine (severe damage). Protection **trips the boiler/unit** on validated low/high. A *faulty* signal can mask a dangerous condition or — more commonly — cause a **spurious unit trip** = lost generation, lost revenue, grid impact. Hence redundant measurement with voting.
- A **unit trip** ripples to the grid; in stressed conditions can contribute to frequency excursion and, in extremis, cascading outages (NERC's concern).
- A **CEMS analyzer drift** → reportable emissions excursions or invalidated data → compliance/reporting exposure.

---

## 7. Primaries / Metals, Mining & Minerals

**Processes & measurements.** Crushing/grinding (comminution), **flotation**, leaching, thickening/tailings, smelting/refining. Abrasive, high-solids, corrosive conditions: **slurry flow (mag meters with wear-resistant liners)**, **density** (nucleonic/ultrasonic), level (radar in bins/cyclones/tanks), pressure, pH/reagent concentration in flotation, on-stream elemental analysis.

**Regulation/standards.** Less product-quality-regulated than pharma/F&B; dominant drivers are **environmental** (tailings, effluent, dust, emissions), **safety** (MSHA US; ATEX/IECEx where flammable dust/gas), and **tailings-dam integrity** (GISTM post-Brumadinho). Concentrate-shipment weighing brings metrology in.

**Roles.** Metallurgist / process (met) engineer (recovery & grade), plant/mill operator, I&E tech, reliability/maintenance superintendent, environmental & tailings engineer, procurement.

**Realistic consequences.**
- A **density or flow meter drifting** in flotation/grinding → shifted pulp density, reagent dosing, froth conditions → **lower recovery or grade = direct revenue loss** (often the biggest economic lever). Small errors quietly cost money rather than tripping the plant.
- A **level failure** on a thickener, cyclone feed, or tailings line → overflow, spillage, pump damage, or **environmental release** — the high-consequence case.
- **Abrasion and coating** are the dominant failure mode (worn liners, coated electrodes), so **verification between calibrations** (Heartbeat) is valued to catch drift before it costs recovery.

---

## Industry strategic context (SIG v12.0 decks)

> Source: the official Strategic Industry Group (SIG) v12.0 strategic documents (2027 horizon),
> one per industry. Full wiki pages live in the MVA Brain wiki ("SIG <Industry>.md").
> These give the commercial backdrop — market position, top customers, buying drivers,
> value proposition, competitors — so a persona can reference real accounts and real drivers.
> Figures are net sales (NS) unless noted; TRI*M = customer-relationship index (higher = stronger).

### Chemical — strategic context
- **Position:** 8.3% total market share (10.6% instrumentation), €580M NS (2024); 2025 fell to €541M. 2027 target €641M @ 9.8% share (CAGR 6.0%, stretch €734M). TRI*M 90, NPS 48, Trust 4.4.
- **Top 5 customers (2025 NS):** BASF €33.2M (6.1%), Wanhua €18.9M (3.5%), Evonik €9.8M, Roehm €7.4M, Covestro €7.0M. Top 15 = €112M (20.7%). Heavy BASF/Wanhua dependence.
- **Buying drivers:** reliability, product quality, trusted partnership, lifecycle support. Gaps: price/performance, contracts, proactiveness, perceived industry expertise.
- **Value proposition:** *"Boost sustainable operations and plant performance"* — high performance at lower OPEX (emissions reduction, IEC 61508 + Heartbeat safety, installed-base IIoT/Netilion, Smart Support, optical analysis TDLAS/Raman), helping ESG/circular-economy goals.
- **Trends:** productivity/digitalization & optical analytics, circular economy/recycling, decarbonization/carbon capture, new chemical markets (composites, 3D print), China's influence.
- **Threats:** **Vega** (closest — level specialist expanding to pressure), Emerson & Yokogawa (EPC/automation), Asian brands, IoT-sensor cost pressure.

### Food & Beverage — strategic context
- **Position:** €604M NS at 12.6% share (instrumentation 17.7%); total share **declining** — the key worry. 2027 target €667M @ 16% (stretch €747M). Growth from volume, not price.
- **Top 5 customers (2025 NS):** Tetra Pak €30.8M (OEM), Nestlé €17.8M, GEA €13.6M (OEM), Krones €10.6M (OEM), Cargill €10.6M. **High OEM dependency** (Tetra Pak, GEA, Krones, Alfa Laval, Sidel, KHS) — strength and flagged risk.
- **Segments:** strong in Dairy, Raw materials, Convenience, Food additives; high-growth bet = **plant-based/alternative proteins** (+30.9% NS, but 1.2% share). Weak in Beer, Beverages, Wine/Liquor.
- **Buying drivers:** reliable partner, service quality. Improve: process-improvement partnership, customer-centricity, proactivity.
- **Value proposition:** *"We partner with our customers ensuring quality while reducing operational costs"* — food-safety (**ISO 22000, HACCP**, hygienic design), OEE/process capability, sustainability via saving **WAGES** (water, air, gas, electricity, steam) + CIP optimization + Heartbeat, predictive maintenance, cybersecurity.
- **Trends:** consumer-driven production, cultured/plant-based "New Food", sustainable & resilient production, food safety, new business models.
- **Threats:** **IFM (No.1 named competitor**, aggressive OEM discounting), Siemens, VEGA, Emerson, Krohne, ABB, Yokogawa, Chinese newcomers (Supmea, Chuanyi). E+H weaker on price/performance.
- **Strategic push:** grow OEM/plant-builder business; move service NS under contract 35% → **70% by 2027**.

### Life Sciences / Pharma — strategic context
- **Position:** ~9.4% total share on €2.98bn served market (instrumentation 12.6% / €1,416M NS; services 3.7%; solutions strong at 20.4%). TRI*M 92 vs 73; NPS 52, Trust 4.5. 2027 target **€356M** (CAGR 9.0%, ~1.9× market). Growth largely price-driven.
- **Top 5 customers (2025 NS):** Novo Nordisk €6.94M, Novartis €6.48M, Cytiva/Danaher €6.38M, Sanofi €6.22M, Roche €5.12M. Top 15 = €72.8M (22.6%). EU end-users well covered; few US Big Pharma, one APAC account.
- **Segments:** API & additives (13.1% share), bodycare/soap/detergent (12.0%), medical devices (8.6%), **biologics/bioprocessing** (6.8%, weak but high-growth), secondary/DP (2.8%, fastest +15% NS).
- **Buying drivers:** reliable partner, service quality, innovativeness, complete portfolio. Improve: customer-centricity, proactiveness, process-improvement partnership.
- **Value proposition:** *"The pulse of life sciences"* — accelerate time to market, ensure consistent quality, raise productivity, reduce risk; GMP-compliant single-use + multi-use portfolio, Ethernet/APL integration, early engineering support, **risk-based calibration**, IIoT/Heartbeat condition-based maintenance, digital twins for lab-to-manufacturing scale-up.
- **Trends:** Pharma 4.0 / digitalization (PAT/Raman, model-predictive control), supply-chain redesign to US/CN, CDMOs & ecosystems, single-use standardization, cell & gene therapy / ATMP.
- **Threats:** Mettler Toledo (single-use), Emerson & Yokogawa (digital models; Yokogawa disconnecting E+H Raman), Siemens (price in projects), low-end VEGA/IFM/Krohne.
- **GMP language to get right:** cGMP, **qualification IQ/OQ/PQ**, validation, **risk-based calibration**, **data integrity ALCOA+**, audit-readiness, aseptic processing. E+H differentiator: **ISO 17025 + ISO 17043** accreditation ("closed loop of quality assurance"), Digital Calibration Certificate, EU GMP **Annex 22 (AI)**.

### Oil & Gas — strategic context
- **Position:** ~5.0% total share, €350M NS (instrumentation 5.5% / €271M, solutions 4.6% / €86M, services 1.6%). TRI*M 88 vs 67 — strong perception, weak share. 2027 target €403M (CAGR 6%). Growth mainly from price (a vulnerability).
- **Top 5 customers (2025 NS):** TANKLOGIX €13.5M, North Huajin United (China) €10.5M, Shell €9.9M, SNAM €8.1M, Bharat Petroleum €6.4M. (Aramco, ADNOC, Indian Oil, Exxon also feature.) Top 15 = €89.8M (20.8%).
- **Segments:** hottest growth **LNG** (TAM CAGR 10.4%, NS +35%), **CCUS** (11.7%), Gas E&P (+27.7%); Oil E&P contracting (−13%). E+H "too little present in Gas", weak on US tank gauging/metering.
- **Buying drivers:** reliable partner, service quality, sustainability, product quality. Gaps: proactiveness, customer-centricity, price/quote/delivery.
- **Value proposition:** *"Fueling energy transition to net zero"* — measurement + industry expertise for plant availability, safety, efficiency AND decarbonization.
- **Trends:** digital oil fields, decarbonization, focus on Gas & LNG, enhanced oil recovery, CCUS, hydrogen/bio-methane.
- **Threats:** Emerson & Yokogawa (MAC / mega-project), ABB/Honeywell/Siemens (DCS), VEGA (level leader going direct), Krohne/Magnetrol, government-backed Chinese low-price players.
- **Terminology:** custody transfer / fiscal metering, **LACT** units, **proving** + meter factor, **BS&W**, allocation measurement, tank gauging/overfill (API 2350), bunkering, H2S/CO2/moisture analysis.

### Power & Energy — strategic context
- **Position:** €185M NS (2024), ~5.0% total share (instrumentation 5.4%). Exceptional growth CAGR 14.1% (2020–25); 2027 target €189M. ~⅓ of sales from Flow. TRI*M 84 vs 89; NPS 47 (below avg). E+H positions as **MIV** (instrumentation one-stop) vs competitors moving to MAV/MAC; no control system, no valves, gaps in gas analysis/CEMS.
- **Top 5 customers (2025 NS):** Envirotrol €10.3M, AB Impianti €3.9M, Eskom €3.3M, Prodeval €3.3M, Turbine Air Systems €2.9M — mostly boiler OEMs, CHP, waste-to-energy, data-center cooling. Major utilities/turbine OEMs in Asia largely missing.
- **Segments:** CHP/cooling strongest (12.5% share); conventional thermal (1.6%), gas CCGT (0.6%), nuclear (1.8%, declining — E+H deliberately avoids radiating environments, sells outside the hot zone), renewables/storage (2.9%), **Power-to-X / Hydrogen** (3.3% but ~80% TAM CAGR).
- **Buying drivers:** reliable partner, sustainability, service quality. Improve: process-improvement partnership, proactivity.
- **Value proposition:** *"Empower the future"* — enable the energy/heat transition, increase plant safety & efficiency, ease of business; proof points: multivariable devices, **SWAS** (steam & water analysis), Heartbeat, Netilion, SIL/cybersecurity, KKS traceability.
- **Trends:** H2 generation/storage/trade, CCUS, ammonia as fuel, CHP, Power-to-Heat (net-zero-by-2050). Gas analysis is the hydrogen door-opener.
- **Threats:** Siemens/Emerson then ABB; agile Asian IIoT makers; national-preference for local suppliers; EPC vendor-listing lockout on greenfield.
- **Terminology:** **drum level** & **three-element control**, **SWAS**, **CEMS** (a known E+H gap), **heat rate**, **unit trip**, DeSOx/DeNOx, CCGT, **KKS** plant coding, **NERC** grid reliability.

### Water & Wastewater — strategic context
- **Position:** recognized "preferred partner" — TRI*M 87 vs 59 (28-pt lead), NPS 48. €426M NS at 9.2% share (instruments 10.8% / €376M). 2025 +13% NS but instrument share slipped 11.7%→10.8%. 2027 target **€484M** @ 9.5% (CAGR 7.5%).
- **Top 5 customers (2025 NS):** Veolia €18.9M (#1 globally), Yixing Environmental €9.6M, Prime Controls €6.4M, Suez €5.8M, Xylem/Evoqua €4.7M. Top 15 = €76.7M (+16% YoY).
- **Segments:** municipal vs industrial, drinking vs waste; strong in waste management (11.9%), municipal WWTP (6.8%, drinking-water share rose to 9%). Strong tech: flow (16.5%), pressure/level (~11%), liquid analysis (8.1%), panel solutions (SSK141/142).
- **Buying drivers:** reliable partner, product & service quality, rising **sustainability/ESG**. Weak: customer-centricity, process-improvement partnership, proactiveness; price drags preference.
- **Value proposition:** *"Protect · Enhance · Conserve"* (UN SDGs) — compliant/accurate instrumentation at critical points, cybersecurity, online monitoring & early warning, aeration & dosing optimization, leakage reduction, Heartbeat/Netilion/SmartBlue/Memosens, single-source simplicity.
- **Trends:** digital transformation, cybersecurity, **PFAS**/micropollutant elimination, water-as-a-service, ESG.
- **Threats:** **Krohne** (now #1 flow brand, tender pricing), Hach/Veralto (Claros, PFAS patent), Siemens, VEGA & IFM (low-end), Supmea (copied E+H concept), PureControl (AI subscription, guaranteed savings). Municipalities resist foreign data hosting.
- **Terminology:** turbidity **NTU**, chlorine residual & **CT** compliance, **NPDES** permits, **DO** control for aeration energy, **mag flow** (workhorse), pH/conductivity/disinfection panels, nutrient (N/P) removal, PFAS, desalination RO/membrane.

### Metals, Mining & Minerals — strategic context
- **Position:** ~€299M NS (2024), ~10% share (instrumentation 11% / €271M). TRI*M 87 vs 69, NPS 49. 2027 target €379M @ 13% (CAGR 6.5%). Precluded from ~80% of products in Chinese-financed projects.
- **Top 5 customers (2025 NS):** Glencore €6.4M, Umicore €5.3M, Antofagasta €4.8M, BHP €4.8M, SQM €4.6M. Top 15 = €64.8M (21%).
- **Segments:** Mining (21% share), **Battery & recycling** (17%, energy-transition engine), non-ferrous (12%), ferrous (10%), glass/ceramic (7%), construction materials (3%, fastest, CEMS opportunity). 2025/26 cyclical down-year; copper strong.
- **Buying drivers:** product quality, reliability/robustness, service & support, safety/functional-safety credibility. Weak: delivery/supply, competitor awareness.
- **Value proposition:** *"Extracting a sustainable future"* (lower ore grades, skill gaps) via better environmental performance (CEMS, water stewardship, circularity), safety (SIL/IEC 61508, TÜV-certified Heartbeat), efficiency (battery-purity capability), streamlined journey.
- **Trends:** decarbonization/ESG & social license, water stewardship/mass balance, **New Energy Minerals** (#NEM batteries), conflict-minerals traceability, AI + Ethernet-APL/IO-Link, asset management, cyber.
- **Threats:** Chinese players (Chongqing, Supcon, Hollysys, ENFI), IFM in Flow, Emerson/ABB/Yokogawa (EPC turnkey), Vega; EPCs (Wood, Bechtel, Fluor, Hatch, Worley) and OEMs (Metso Outotec, FLSmidth, SMS, SINOMA) own many projects.
- **Terminology:** recovery & ore **grade**, **comminution** (crushing/grinding), **flotation** & **CIL** (carbon-in-leach), **thickeners**, **slurry**/abrasion wear, **tailings** dams (condition/leak monitoring), pyrometallurgy/smelting, CEMS, precision explosives blending, dust/explosion hazard.

---

## Cross-industry dialogue guardrails (drop into persona prompts)

1. A missing document never *physically* stops a process — it triggers an investigation, hold, audit finding, or re-proving.
2. Out-of-tolerance found at calibration → look **backward** at everything made since the last good calibration.
3. Instruments arrive pre-calibrated and traceable — customers recalibrate, verify, and (in GMP) qualify; they don't "certify."
4. Distinguish **safety** (SIF → trip/compensating measures) from **quality** (control drift → off-spec/yield/cost) from **custody** (meter drift → financial/contractual) from **regulatory** (analyzer drift → permit exceedance + notification).
5. **Spurious trips are a real cost**, not just genuine hazards — customers fear false trips as much as missed ones.
6. Use industry-correct names: drum level, BS&W, CT value, NTU, pulp density, CCP hold time, meter factor, deviation, CAPA, quality hold.
