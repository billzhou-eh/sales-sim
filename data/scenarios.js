// Discovery-skills sales scenarios for E+H DS.
// Built on SPIN selling + the Sandler pain funnel: the customer has HIDDEN pain
// that must be uncovered by asking good questions (Problem -> Implication -> Need-Payoff),
// NOT by pitching early. Each choice is tagged with a question `type` for teaching.
//
// type: 'rapport' | 'situation' | 'problem' | 'implication' | 'needpayoff' | 'solution'
// quality: 'excellent' (+10) | 'good' (+5) | 'poor' (+0)
//
// WRITING RULES:
//  - Plain, simple, international English for non-native speakers. No idioms or slang.
//  - The three choices in a stage are similar in length.
//  - Question-form is spread across all qualities (poor options are often weak questions).
//  - Choices never state facts/numbers the customer has not given (anti-hallucination).

const SCENARIOS = [
  {
    id: 'fx-discovery',
    title: 'Discovery Call',
    subtitle: 'Find the real cost of a problem they accept',
    product: 'Field Xpert',
    productLine: 'fieldxpert',
    difficulty: 'SC',
    difficultyLabel: 'Sales Coordinator',
    estimatedMinutes: 12,
    personaId: 'peter-hoffmann',
    description: 'Peter filled in a web form, but he expects a sales pitch. He will not tell you the real problem — you have to ask the right questions.',
    context: 'First discovery call. You know almost nothing about Peter — only that he is a C&I engineer at a chemical plant and asked about "field device tools." He has little time and does not like product pitches.',
    industryContext: 'INDUSTRY REALITY (Chemical, Ex / hazardous areas): This is a continuous-process plant — reactors, distillation columns, dosing skids — with HART, PROFIBUS and older Fieldbus instruments (Coriolis flow, radar and guided-wave level, pressure/DP, temperature) in ATEX-classified zones. Commissioning and parameter checks are done device-by-device with a laptop or handheld. When a device check stalls, the real risk is a process unit waiting or a spurious trip — not a discrete "production line". Peter respects technical depth and clever engineering and tunes out price-only or brochure talk. He speaks like an engineer: NE 107 status, Ex zone, DTM, commissioning, proof test, root cause. E+H is premium-priced; Vega and Emerson are the competitors he might mention.',
    yourRole: 'E+H Sales Coordinator — first discovery call',
    knownGoingIn: [
      'Control & Instrumentation Engineer at a mid-size chemical plant',
      'Asked on the website about "better field device management tools"',
      'Nothing more — you must find out his real situation during the call'
    ],
    objectives: [
      'Find a real problem before you pitch anything',
      'Use questions to show the cost of that problem',
      'Agree a clear next step that works for him'
    ],
    customerOpening: 'Thanks for calling. I will be honest — I filled in that form in about thirty seconds. I get a lot of vendor calls and they usually start with twenty minutes of product slides before anyone asks what the real problem is. So — what do you want to know?',
    stages: [
      {
        id: 'open',
        title: 'Opening Move',
        instruction: 'Peter expects a product pitch. How do you start?',
        choices: [
          { id: 'a', type: 'rapport', quality: 'excellent', points: 10,
            text: 'That is fair — I will not pitch. Can I first ask how your team works each day?',
            rationale: 'You answered his worry and asked permission to learn about him. A cautious buyer needs this before anything else.' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'Sure — how many field instruments do you run, and across how many lines and protocols?',
            rationale: 'A fair start, but only fact-collecting that he has answered many times. It maps his site but does not find a problem.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Shall I quickly show why Field Xpert is better than your tools — 4,000 drivers, very rugged?',
            rationale: 'A pitch is still a pitch, even as a question. He warned you about this, and features mean nothing before he feels a problem.' }
        ]
      },
      {
        id: 'probe',
        title: 'First Question',
        instruction: 'He says his team uses HART, PROFIBUS and some older Fieldbus devices from several makers. What do you ask?',
        choices: [
          { id: 'a', type: 'problem', quality: 'excellent', points: 10,
            text: 'When a technician goes to set up a device, what is that like — where does it slow down?',
            rationale: 'An open question about the daily work. It invites a story and is made to find a real problem, not just facts.' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'Are those protocols spread across all the lines, or only in a few areas?',
            rationale: 'Useful background, but still a fact question — about his site, not the problems inside it.' },
          { id: 'c', type: 'situation', quality: 'poor', points: 0,
            text: 'Missing drivers are the usual problem with that mix — is that your main problem too?',
            rationale: 'This puts words in his mouth. A cautious engineer pushes back, and the problem is not real to him until he says it himself.' }
        ]
      },
      {
        id: 'develop',
        title: 'Build the Problem',
        instruction: 'Peter plays the problem down as a minor annoyance his team just manages. How do you reply?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'While a technician waits for that call, does anything else stop — is a process unit ever left waiting?',
            rationale: 'A question about the wider effect. It moves him from "a little annoying" toward the real cost to the plant.' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'And how often does that happen in a normal month?',
            rationale: 'A fair question to measure it, but it only gives a number. Adding the effect would make it land much harder.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Our drivers come pre-loaded, so that would stop happening — want me to show you?',
            rationale: 'He gave a small hint of a problem and you jumped to the fix. He has not felt the cost yet, so the feature does not land.' }
        ]
      },
      {
        id: 'quantify',
        title: 'Put a Cost on It',
        instruction: 'He admits downtime is expensive, but has not put a number on it. Where do you go next?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'Expensive how — about what does one hour of a stopped unit cost you when this happens?',
            rationale: 'You move the question to real numbers. When he says the cost out loud, the problem becomes urgent in his own mind.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'Does it ever push the rest of the week\'s maintenance plan out of order too?',
            rationale: 'A good question about the wider effect — a little weaker than putting a money figure on it, which moves a budget owner.' },
          { id: 'c', type: 'situation', quality: 'poor', points: 0,
            text: 'I see. And how do you keep device history today — in spreadsheets, or a system?',
            rationale: 'You changed the subject just as the problem was growing. Leaving a topic half-finished kills the progress you made.' }
        ]
      },
      {
        id: 'needpayoff',
        title: 'Make It Matter',
        instruction: 'Peter agrees the downtime cost is real and adds up over a year. Now what?',
        choices: [
          { id: 'a', type: 'needpayoff', quality: 'excellent', points: 10,
            text: 'If your technicians never had to stop to find a driver, what would that be worth to you?',
            rationale: 'A value question. He explains the benefit himself, which is far stronger than you claiming it, and it shows what matters to him.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'So that is real money each quarter, on top of the daily stress — a heavy load to carry.',
            rationale: 'A fair summary that shows you listened. But a question that makes him say the benefit would pull him forward more.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'So you clearly need Field Xpert — shall I prepare a price quote for you?',
            rationale: 'Too pushy and too early. You built the problem well; do not rush to close before he has asked to see anything.' }
        ]
      },
      {
        id: 'close',
        title: 'Agree the Next Step',
        instruction: 'He is interested, but wants to see it work on his own devices before going further. End the call well.',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Then let us do that — I bring a unit set up for your devices, and your technician tries it. Next week?',
            rationale: 'You matched exactly what he asked for and offered a clear, low-risk step with a date. This is how a strong call moves forward.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'I can run a demo at our application centre, or leave a test unit with your team — your choice.',
            rationale: 'Clear options. The demo at our centre is weaker than testing in his own plant, but a test unit is a strong offer.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'I will send a short summary and a few customer examples, and we can decide from there.',
            rationale: 'He asked to see it work, not to read about it. A document and a vague next step let all your progress fade away.' }
        ]
      }
    ]
  },

  {
    id: 'fx-objection',
    title: 'The Price Objection',
    subtitle: 'Look past "too expensive" to the hidden cost',
    product: 'Field Xpert',
    productLine: 'fieldxpert',
    difficulty: 'BDM',
    difficultyLabel: 'Business Dev. Manager',
    estimatedMinutes: 14,
    personaId: 'toshiaki-yamamoto',
    description: 'Toshiaki starts with a price challenge. The real opportunity is the hidden cost of his current setup — but he will not give it to you easily.',
    context: 'Toshiaki\'s local sales coordinator passed this to you. He brought a cost comparison, and he answers to his finance director. His stated problem is price — move past it to what his current setup really costs before you talk numbers.',
    industryContext: 'INDUSTRY REALITY (Specialty Chemicals, commercial buyer): Toshiaki is the commercial owner, not the technical user — he reviews specifications himself and signs purchases under close finance-director scrutiny. His real concern is total cost of ownership: the post-purchase costs (calibration, maintenance contracts, software upgrades) that appear after the sticker price and make budgets hard to predict. E+H is genuinely premium-priced — in the SIG data, price/performance is a known weakness — so do not deny the price; justify it with lifecycle value. He values transparent pricing and fair dealing and dislikes hidden costs and market-power pressure. He speaks in total cost of ownership, master price, trade-in, calibration services, engineer time.',
    yourRole: 'E+H BDM — customer with a tight budget and finance pressure',
    knownGoingIn: [
      'Purchase Manager at a specialty chemicals plant in Japan',
      'His current setup (older tablets + a shared FieldCare licence) costs about €8,000',
      'He answers to his finance director, and has asked you to justify any extra spend'
    ],
    objectives: [
      'Move the talk from price to the cost of staying the same',
      'Put a number on the hidden cost, using his own figures',
      'Match the case to his budget timing'
    ],
    customerOpening: 'Your colleague tells me you are the Field Xpert expert. I will be direct: our current setup costs about €8,000 and it does the job. I have to justify every purchase to my finance director. So tell me — better in what way, and worth how much more?',
    stages: [
      {
        id: 'open',
        title: 'The Price Challenge',
        instruction: 'He started with a direct cost question. How do you respond?',
        choices: [
          { id: 'a', type: 'rapport', quality: 'excellent', points: 10,
            text: 'That is the right question to ask me. Before price — what does that setup cost your engineers in time today?',
            rationale: 'You respected his duty to justify every purchase and moved from sticker price to total cost. Now the comparison is about value, not a fight you would lose.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'Fair. Could I show you where the features differ, and then we put numbers to it?',
            rationale: 'You heard the concern, but leading with features becomes a product tour before you understand his real problem. Learn first.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'It is about €3,500 per unit — a small step up. Shall I show you the feature comparison?',
            rationale: 'You opened with price and called it "small" before giving him any reason to value it. A feature sheet will not fix that gap.' }
        ]
      },
      {
        id: 'probe',
        title: 'Test "Good Enough"',
        instruction: 'He insists the current setup does the job. How do you test that?',
        choices: [
          { id: 'a', type: 'problem', quality: 'excellent', points: 10,
            text: 'When a technician reaches a device whose driver is not on the tablet, what happens next?',
            rationale: 'A precise question aimed at the most likely friction point — one exact moment, not a vague request for him to name problems.' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'What would you say slows your engineers down most when they are configuring devices on site?',
            rationale: 'A reasonable problem question — a little wide. A targeted question about a specific moment gets there faster.' },
          { id: 'c', type: 'situation', quality: 'poor', points: 0,
            text: 'Specialty chemicals plants often run many different device protocols — compatibility is usually the problem, right?',
            rationale: 'You assumed his problem instead of finding it. He will feel you are following a script, not listening to him specifically.' }
        ]
      },
      {
        id: 'develop',
        title: 'Build the Problem',
        instruction: 'He concedes it happens occasionally, but calls it manageable. How do you respond?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'When it happens, how long does it take to sort out — and what does not get done while that engineer is waiting?',
            rationale: 'A question that opens two things at once: time lost and the work that stops. It moves him past "manageable".' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'About how many times a year, across the whole team, would you say this kind of problem comes up?',
            rationale: 'You start to measure it, which is good. But a frequency number alone does not move a purchase decision — the cost does.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Our 4,000 pre-loaded drivers mean this simply never happens — shall I show you?',
            rationale: 'He gave a small hint of a problem and you jumped to the fix. He has not measured the cost yet, so the feature has nothing to connect to.' }
        ]
      },
      {
        id: 'quantify',
        title: 'Work Out the Numbers',
        instruction: 'He agrees it costs real engineer time, but has not put money to it. Where do you go next?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'Let us put a number on it — at a senior engineer\'s full hourly cost, how does that add up across the year?',
            rationale: 'You lead the calculation without inventing numbers. When he says the cost out loud, it answers the finance director question himself.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'That is clearly real cost each year — Field Xpert would recover most of that time.',
            rationale: 'Right direction, but you stated the benefit instead of building the number with him. His own calculation would convince far more.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Driver problems are common — shall I send examples from similar specialty chemicals sites?',
            rationale: 'You had the chance to build a cost case with him and reached for examples instead. They support a case; they cannot replace one.' }
        ]
      },
      {
        id: 'needpayoff',
        title: 'Offer the Lever',
        instruction: 'He accepts the logic, but the upfront cost against the current setup is still the sticking point. How do you continue?',
        choices: [
          { id: 'a', type: 'needpayoff', quality: 'excellent', points: 10,
            text: 'If that engineer time went back to real project work, what would that be worth to your director? And do you still have the old tablets?',
            rationale: 'A value question in terms his finance director understands — plus a concrete commercial lever. The trade-in question plants the seed; confirming eligibility becomes the first concrete next step.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'We have a trade-in — 20% off if you return the old tablets. Let me check if yours qualify.',
            rationale: 'A relevant lever, well timed. Slightly passive — asking him to locate the units now would turn interest into a concrete next step.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Let me check with my manager whether there is any special pricing available for your account.',
            rationale: 'You have a real trade-in programme and reached for a vague "let me ask" instead. It signals you do not know your own tools.' }
        ]
      },
      {
        id: 'close',
        title: 'Match His Timing',
        instruction: 'He likes the case, but says his budget cycle does not open until next quarter. How do you close?',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Next quarter gives us time. Let us confirm the trade-in now, and I will prepare a quote with the cost case ready for your director.',
            rationale: 'You accepted his timing, made the wait useful, and gave him exactly what a precise purchase manager needs — with a reason to act now.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'No problem — I will prepare a full proposal with the trade-in and cost case for your budget submission.',
            rationale: 'Solid and helpful — you make his submission easier. A specific follow-up date would make it even stronger.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Understood — I will reach out again once the budget cycle opens.',
            rationale: 'You built a strong case and then walked away with no action in between. A precise buyer without a document and a date will move on.' }
        ]
      }
    ]
  },

  {
    id: 'netilion-intro',
    title: 'The Platform Evaluation',
    subtitle: 'Do not get pulled into a feature comparison',
    product: 'Netilion',
    productLine: 'netilion',
    difficulty: 'SC',
    difficultyLabel: 'Sales Coordinator',
    estimatedMinutes: 14,
    personaId: 'lynn-carter',
    description: 'Lynn treats this as a platform comparison. Your job is to move her away from features and onto the business problem she has not yet connected.',
    context: 'Lynn is in the middle of an evaluation and has already seen Azure IoT Hub and MindSphere. If you answer "what is different?" with features, you lose. The skill is to move her to the business problem she has not fully measured.',
    industryContext: 'INDUSTRY REALITY (Pharma / GMP): A regulated batch-manufacturing site — bioreactors, Water-for-Injection, formulation. The real risk is not connectivity (that is solved) but a measurement drift caught late: an instrument found out-of-tolerance at its next calibration triggers a deviation and an investigation of all product made since the last good calibration; affected batches go on quality hold and may be reworked, rejected or recalled. Lynn fears IIoT platforms that then need months of CSV (computerised-system validation). She speaks in deviation, batch record, data integrity (ALCOA+), CSV, qualification (IQ/OQ/PQ), audit. Never say a missing document "stops the line" — it is the investigation and the hold that create cost. Instruments arrive pre-calibrated; customers recalibrate and qualify, they do not "certify".',
    yourRole: 'E+H Sales Coordinator — competing in a formal evaluation',
    knownGoingIn: [
      'Process Engineer at a pharma manufacturing site, evaluating IIoT platforms',
      'Already spoke with Microsoft (Azure IoT) and Siemens (MindSphere)',
      'Has instruments from several makers; safety-conscious, well prepared, GMP-aware'
    ],
    objectives: [
      'Move from a feature comparison to the business problem',
      'Build the cost of finding an instrument failure too late (a GMP risk)',
      'Agree a proof of concept based on her own success criteria'
    ],
    customerOpening: 'I have already seen Azure IoT Hub and MindSphere, and I read your whitepaper. So please skip the overview. Tell me one thing Netilion can do that those two really cannot.',
    stages: [
      {
        id: 'open',
        title: 'The Opening Challenge',
        instruction: 'She wants a difference, right now. How do you respond?',
        choices: [
          { id: 'a', type: 'rapport', quality: 'excellent', points: 10,
            text: 'Instead of a general answer — what result are you personally responsible for delivering with this platform?',
            rationale: 'You refused the feature fight and moved to what she is measured on. A difference only matters when it is linked to her goals.' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'Honestly, it is instrument-level depth, not just connection. What is driving your evaluation?',
            rationale: 'A reasonable hint plus a question, but you led with a claim she will file as "another vendor difference".' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Shall I show why Netilion\'s depth — built on 200 years of measurement — beats both of them?',
            rationale: 'Company history as a question is still the empty answer he warned about. A buyer who researched two rivals will stop listening.' }
        ]
      },
      {
        id: 'reframe',
        title: 'Change the Question',
        instruction: 'She argues connection is already a solved problem, and asks what else you offer.',
        choices: [
          { id: 'a', type: 'problem', quality: 'excellent', points: 10,
            text: 'Agreed, connection is the basic part. Today, how do you find out an instrument has drifted before it affects a batch?',
            rationale: 'You agreed with her (no argument) and moved to the real gap. This is the question that uncovers the hidden problem behind the features.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'The difference is Heartbeat — health signals from inside the instrument, not just the process value.',
            rationale: 'True and relevant, but a feature answer to a feature question — still a comparison. He has not felt why depth matters yet.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'We connect more than 10,000 E+H instruments, with health depth no general platform can match — see the difference?',
            rationale: 'A number claim, question or not, and it points to the multi-vendor problem you are not ready for. It will work against you.' }
        ]
      },
      {
        id: 'develop',
        title: 'Build the Consequence',
        instruction: 'She admits they usually catch problems late, after the fact, then trace them back.',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'In a regulated batch, what does that late catch cost you — scrapped product, a deviation report, an audit risk?',
            rationale: 'The key question. It links a vague "we trace it back" to GMP costs a pharma lead worries about. The problem is now clear and expensive.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'And how long does that trace-back usually take your team?',
            rationale: 'A fair question, but it stops at time. In pharma the bigger point is the regulatory and scrap cost — go there.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Netilion Library gives a full time-stamped record of every device change — that solves it completely, right?',
            rationale: 'You jumped to the feature before he felt the cost, and "solves it completely" claims too much. Let him measure the problem first.' }
        ]
      },
      {
        id: 'multivendor',
        title: 'The Multi-Vendor Test',
        instruction: 'She warns that an E+H-only tool is not acceptable, since they run other makers too.',
        choices: [
          { id: 'a', type: 'problem', quality: 'excellent', points: 10,
            text: 'Honest answer — gateways connect them, but the deep health data is richer on E+H. What is your actual mix?',
            rationale: 'Honesty plus a question. Admitting the limit builds trust with a sharp buyer, and the mix tells you how much it matters.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'Other makers connect through our FieldEdge gateway — it is strongest on E+H, but it handles the others too.',
            rationale: 'True, but you skipped the depth limit she will test. She will find it later and wonder what else you left out.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Netilion works with almost any field device — many makers is a strong fit for us.',
            rationale: '"Almost any device" claims too much and hides the limit. With this buyer, the moment she tests it, you lose trust.' }
        ]
      },
      {
        id: 'needpayoff',
        title: 'Make It Matter',
        instruction: 'She is more interested now. How do you make the value clear?',
        choices: [
          { id: 'a', type: 'needpayoff', quality: 'excellent', points: 10,
            text: 'Seeing an instrument fail weeks before it reached a batch — what is that worth to your business case?',
            rationale: 'A value question that links the ability to her own goal — she states the value and the stakes herself, which lasts longest.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'So the real risk is not connection — it is being asked to trust a measurement you cannot check.',
            rationale: 'A strong way to frame it, but a question that makes him say the value would pull him further than a statement he can just accept.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Let me get you pricing — it is per user, and it competes well with MindSphere at scale.',
            rationale: 'You stopped the discovery to talk price and made a claim you cannot prove. Both are risks with a buyer this sharp. Not yet.' }
        ]
      },
      {
        id: 'close',
        title: 'Design the Proof of Concept',
        instruction: 'She is open to a proof of concept and asks what you would suggest.',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: '20 of your most critical instruments over 60 days — include 5 Yokogawa or ABB. You set the goals; we review first.',
            rationale: 'A proof built on HER goals, with other makers included. Offering to test your weak point shows confidence and keeps her trust.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'A normal 60 to 90 day test across 10 to 20 devices, where you set the goals and we measure against them.',
            rationale: 'The shape is right and the goals are his — good. But "normal" feels like a template next to a plan built for his exact worries.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'I will set up a free 30-day trial account — connect ten E+H devices and have a look.',
            rationale: 'A self-service trial is far too small for a formal, high-budget evaluation. It shows you did not understand how serious this is.' }
        ]
      }
    ]
  },

  {
    id: 'netilion-pricing',
    title: 'Save the Renewal',
    subtitle: 'Find the real reason before you defend the price',
    product: 'Netilion',
    productLine: 'netilion',
    difficulty: 'BDM',
    difficultyLabel: 'Business Dev. Manager',
    estimatedMinutes: 14,
    personaId: 'jose-garcia',
    description: 'José is questioning the Netilion renewal. But the easy complaint about low usage may not be the real reason he is hesitating.',
    context: 'A renewal at risk. José starts with a usage problem and a question about whether to continue. If you defend the price or the platform too quickly, you lose; your job is to find out what is really behind the hesitation before you answer.',
    industryContext: 'INDUSTRY REALITY (Chemical / refinery maintenance): José runs maintenance on roughly 600 field instruments across a refinery — separators, distillation, internal transfer. His core fear is unplanned downtime: a flow meter failure that causes a process interruption and lost production. He is precise and task-focused, dislikes buzzwords and being pushed on cloud or wireless for critical devices, and values real technical experts and complete documentation. He uses NE 107, alarm management, MTBF, turnaround, device health. He championed the Netilion investment internally, so cancelling at renewal would mean admitting his own decision was wrong — that pressure is real but he will not say it openly.',
    yourRole: 'E+H BDM — keeping a subscription that may be lost',
    knownGoingIn: [
      'Head of Maintenance at a chemical refinery; 18 months into a Netilion Health subscription',
      'Platform is running, but most technicians do not use it regularly',
      'Renewal is due in 6 weeks — he is questioning whether it is worth it'
    ],
    objectives: [
      'Find out why people stopped using it, before you defend anything',
      'Connect the real cause to a clear fix',
      'Take personal ownership of the fix and tie it to a concrete outcome'
    ],
    customerOpening: 'Good to talk — I appreciate the call. I have to be straight with you: the platform is running, but most of my team does not check it. I am not sure this renewal is easy to justify. Help me understand why I should continue.',
    stages: [
      {
        id: 'open',
        title: 'The Renewal Question',
        instruction: 'José has politely raised his doubts about renewing. How do you respond?',
        choices: [
          { id: 'a', type: 'rapport', quality: 'excellent', points: 10,
            text: 'Thank you for being direct. Before I say anything about the renewal — why did the team stop checking the platform?',
            rationale: 'You did not defend the price or the product — you looked for the cause first. A maintenance manager who values precision will respect that.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'I understand. What if we simplify how the team uses it — fewer alerts, fewer screens to check?',
            rationale: 'Reasonable instinct, but you jumped to a solution before knowing why the team stopped. The cause matters more than the fix right now.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'The subscription is core to what E+H offers — let me see if we can adjust the price to make it easier to justify.',
            rationale: 'You accepted that it is a pricing problem and reached for a discount. José is precise and fair-minded — a discount without a reason looks like covering for failure.' }
        ]
      },
      {
        id: 'diagnose',
        title: 'Find the Real Cause',
        instruction: 'He says alert overload made the team switch off notifications — and after that, nobody checked the dashboard any more. How do you respond?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'So alerts stopped meaning anything — and once the team stopped checking, was there a moment when something slipped through?',
            rationale: 'A precise question that links the alert failure to a real consequence. You are not defending the tool — you are following the problem to its end.' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'Alert overload is a known issue. How was the alert configuration set up when the platform first went live?',
            rationale: 'Right topic — alert setup is the real problem. Asking whether something slipped through would connect the failure to a real cost.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Alert overload is fixable — Alarm Management does routing and filtering. Shall I show you how it works?',
            rationale: 'He has just described a breakdown in trust, and you moved straight to a feature demo. He needs to feel understood before he will look at solutions.' }
        ]
      },
      {
        id: 'connect',
        title: 'The Missed Warning',
        instruction: 'He pauses, then mentions the flow meter failure six weeks ago. He does not say more. How do you respond?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'That failure — what did Netilion show in the weeks before it happened? Was the health data there?',
            rationale: 'A precise, respectful question that connects the tool to the failure he is thinking about. If the data was there and nobody saw it, that is the real story.' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'Was that failure something the platform should have caught?',
            rationale: 'A direct question that moves toward the key issue — a little blunt, but José is direct. A question about the data specifically would go deeper.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'That is exactly the kind of event Netilion Health is built to prevent — it shows device health declining before a failure.',
            rationale: 'You took a painful moment he just shared and made it a product pitch. For a precise, controlled person like José, that closes the conversation.' }
        ]
      },
      {
        id: 'reframe',
        title: 'Acknowledge the Gap',
        instruction: 'He confirms the health data had been declining for three weeks. He says quietly: "The platform was there. We just stopped looking." How do you respond?',
        choices: [
          { id: 'a', type: 'needpayoff', quality: 'excellent', points: 10,
            text: 'That is honest — and it means the tool works. The gap was the alert setup, not the platform. If we fix that together, what changes?',
            rationale: 'You acknowledged what he said without blame, separated the setup failure from the platform capability, and asked a value question — turning regret into reason to continue.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'That means the data was right — Alarm Management would have surfaced it before anyone had to check manually.',
            rationale: 'Accurate and relevant — you separate the configuration gap from the tool. A value question would pull him further than a statement.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'That shows the platform worked — so really the renewal makes a lot of sense now, does it not?',
            rationale: 'He just shared something difficult, and you used it to push the renewal. That is too fast, and with José — who dislikes pressure — it will close him down.' }
        ]
      },
      {
        id: 'commercial',
        title: 'Make the Price Fair',
        instruction: 'He is willing to continue, but says the renewal still needs to be easy to defend upward. What can you do?',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Your contract runs through an NSP partner, so you already qualify for 20% off the renewal — let me confirm it is applied.',
            rationale: 'A discount he already qualifies for — not invented, not a concession. For a precise buyer this distinction matters: you are confirming, not bargaining.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'There is a 20% NSP discount on your subscription — I will make sure it is on the renewal quote.',
            rationale: 'Correct and relevant — slightly weaker because it sounds like a gift rather than a programme he already belongs to.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'I can offer a 15% loyalty discount — it is the most I can approve without going to my manager.',
            rationale: 'A made-up discount that does not match the real NSP programme. José values accurate, fact-based communication — an invented number will lose his trust.' }
        ]
      },
      {
        id: 'close',
        title: 'Take Ownership',
        instruction: 'He is willing to renew, but says he does not have the time or interest to manage the configuration himself. Close it.',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'I will handle it personally — a session this week with your lead technicians to fix the alert setup. If it is not right in 30 days, we revisit.',
            rationale: 'You took full, personal ownership, made it specific and fast, and gave him a clear safety net — the right answer for a precise manager who does not want more work.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'I will get our technical team to set up Alarm Management properly this week and send you a clear 30-day plan.',
            rationale: 'The right approach, and a plan is what José will want — handing it to a "technical team" adds a layer he cannot control, which may feel imprecise.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'I will flag you as a priority and have customer success contact you this week to take it from here.',
            rationale: 'You passed the problem to a team he has not met, with no specifics and no safety net. After all the progress you made, it feels like you gave up at the finish.' }
        ]
      }
    ]
  },

  {
    id: 'netilion-crosssell',
    title: 'The Cross-Sell',
    subtitle: 'Connect a past problem to a new solution — gently',
    product: 'Netilion + Field Xpert',
    productLine: 'both',
    difficulty: 'BDM',
    difficultyLabel: 'Business Dev. Manager',
    estimatedMinutes: 12,
    personaId: 'michael-reynolds',
    description: 'Michael is a satisfied Field Xpert customer in a reasonable mood — he is not looking to buy anything new. A sales pitch will make him close down; only sharp business questions open the door.',
    context: 'A routine check-in. Michael is happy with his Field Xpert tablets and not expecting anything else. Your only way in is genuine curiosity about plant performance — never a pitch.',
    industryContext: 'INDUSTRY REALITY (Specialty Chemicals, plant manager): Michael owns plant P&L and reports OEE and uptime to group leadership every quarter. His pain is rotating-equipment failure — a compressor failure last quarter caused unplanned downtime and lost production, and the early sensor-health signals had been declining for weeks but nobody watched them systematically. He wants peer-level data and a data-driven predictive-maintenance story he can show leadership, especially after a regional peer recently presented one. He dislikes doom-and-gloom messaging and standard sales visits. Talk in outcomes, KPIs and dollars, not features. Terms: OEE, uptime, unplanned downtime, instrument health, predictive maintenance.',
    yourRole: 'E+H BDM — cross-selling to an existing, results-focused customer',
    knownGoingIn: [
      'Plant Manager at a specialty chemicals site; has been using Field Xpert for 18 months',
      'Has not used Netilion; data-driven, focused on KPIs and uptime',
      'In a reasonable, open mood on a routine relationship call'
    ],
    objectives: [
      'Find the data gap with curiosity, not a pitch',
      'Connect a past production problem to predictive instrument health',
      'Offer a no-risk start (Netilion Plus), with no pressure'
    ],
    customerOpening: 'Good timing — the tablets are working well and the team has settled in. Field Xpert was a good investment. So, what brings you today?',
    stages: [
      {
        id: 'open',
        title: 'Start Without Pitching',
        instruction: 'He is in a good mood and focused on the relationship. How do you start?',
        choices: [
          { id: 'a', type: 'situation', quality: 'excellent', points: 10,
            text: 'Glad to hear it! I am curious — when your technicians collect device data on Field Xpert, where does it go?',
            rationale: 'A short, warm reply, then an honest question that opens the data topic naturally. It feels like a check-in, not a setup.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'Great. With more Field Xpert units now, this is a good time to look at Netilion — it connects to them.',
            rationale: 'You moved to the product within 30 seconds — a results-driven buyer in a good mood quietly becomes more guarded.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Wonderful! We have been rolling out Netilion lately — shall I give you a quick overview now?',
            rationale: '"Shall I give you an overview" clearly shows you came with a plan to sell. He will feel sold to in the first minute.' }
        ]
      },
      {
        id: 'gap',
        title: 'The Data Gap',
        instruction: 'He says device data mostly stays on the tablet or in local files — no central view, no history. Your move?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'When a problem comes up suddenly, what is it like trying to rebuild that device\'s history?',
            rationale: 'A gentle question that points toward a real event — letting him tell the story, not you stating that the gap matters.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'What if all of that synced automatically to one central view, instead of exporting by hand?',
            rationale: 'A "what if" moves toward selling before he has felt the cost — he has not said the manual work actually hurts yet.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'That is exactly what Netilion fixes — it syncs Field Xpert data to a central history. Want to see it?',
            rationale: 'Straight to the pitch before he has any reason to care about central history — you skipped the part where he sees he needs it.' }
        ]
      },
      {
        id: 'incident',
        title: 'The Opening',
        instruction: 'He mentions a compressor failure last quarter that caused significant downtime and still bothers him.',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'That sounds very costly. Looking back, were there any strange signs in the readings before?',
            rationale: 'You respected the story, then asked a question that makes him think about missed early signs — the way in to predictive health, in his words.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'That is exactly what Netilion with Heartbeat prevents — it warns you before that kind of failure.',
            rationale: 'Right capability, but you jumped to the solution the moment he shared a painful memory — it feels like a sales move.' },
          { id: 'c', type: 'situation', quality: 'poor', points: 0,
            text: 'That is unfortunate. Did you run a full root-cause review of the failure afterwards?',
            rationale: 'A review question is a side-track — he gave you a real problem; explore whether monitoring would have caught it, do not ask for a report.' }
        ]
      },
      {
        id: 'realise',
        title: 'Let Him See It',
        instruction: 'He admits sensor health had been declining for weeks before the failure, but nobody was watching it systematically.',
        choices: [
          { id: 'a', type: 'needpayoff', quality: 'excellent', points: 10,
            text: 'If something had shown that as instrument health weeks earlier, would it have changed how this ended?',
            rationale: 'A value question — he says the worth of an early warning himself, tied to the exact problem that hurt him. Now Netilion answers his own need.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'That is the difference Heartbeat sees — instrument health, separate from process readings. You would have seen it early.',
            rationale: 'Accurate and well aimed, but getting him to say the value himself, with a question, would land more deeply.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'A common situation — shall I send examples from similar plants where Heartbeat caught it?',
            rationale: 'Examples are support material, not a reply to a personal story — it breaks the moment he just opened up to you.' }
        ]
      },
      {
        id: 'entry',
        title: 'The No-Risk Start',
        instruction: 'He is interested, but says the budget is tight after the Field Xpert investment. Your move?',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Those Field Xpert tablets may qualify for Netilion Plus — a free year included. Do you have the order numbers?',
            rationale: 'A no-cost path that removes the budget worry, tied to a purchase he already made, with a clear next action. Good timing.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'Your tablet order may include a Netilion Plus coupon — a 12-month free subscription. Worth checking.',
            rationale: 'The right lever, but "may include" is uncertain — confirming it now would turn his interest into action.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'There is a free 30-day trial — you could sign up online and test it on a few devices.',
            rationale: 'A general trial is not the Netilion Plus benefit he probably already has from the tablet order — it shows you did not check his account.' }
        ]
      },
      {
        id: 'close',
        title: 'Close Without Pressure',
        instruction: 'He is open to it, as long as there is no new cost and it stays small. Close it.',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Nothing big — let us connect it to your Field Xpert on a couple of key assets, with you in control. Shall we?',
            rationale: 'You matched exactly what he asked for — small, low-risk, in his control. A results-focused buyer agrees to a small first step, not a big one.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'Of course — let me set up a short follow-up to activate Netilion Plus and walk you through it.',
            rationale: 'A reasonable, low-pressure next step — just less strong than offering a small, clear test on his key assets right now.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Great — I will prepare a proposal for a full Netilion rollout across your entire site, for you and your team to review.',
            rationale: 'He said nothing big — and you offered a full site rollout. Going too far confirms his sense that this was a sales call, not a check-in.' }
        ]
      }
    ]
  },

  {
    id: 'fieldcare-subscription',
    title: 'The Subscription Pushback',
    subtitle: 'Turn "why rent what I own?" into a real talk',
    product: 'FieldCare 3.0',
    productLine: 'fieldxpert',
    difficulty: 'BDM',
    difficultyLabel: 'Business Dev. Manager',
    estimatedMinutes: 13,
    personaId: 'toshiaki-yamamoto',
    systemPromptHint: 'An E+H BDM has called to discuss moving your FieldCare software to a subscription model. You own a permanent licence and you are not happy about being asked to pay annually for something you already paid for. You are polite but direct — you want a clear reason to change, and "this is how it works now" will not satisfy you. You will not volunteer the real cost of your current desktop-only setup; the rep has to find it.',
    description: 'Toshiaki dislikes being moved off a permanent FieldCare licence. The objection is the pricing model — but that may not be the real issue.',
    context: 'E+H is moving FieldCare to a subscription model (3.0, with Netilion and tag-based pricing). Toshiaki starts with a direct objection about "renting software he already owns." If you defend the model, you lose — understand how his team works before pricing comes up.',
    industryContext: 'INDUSTRY REALITY (Specialty Chemicals, commercial buyer): Toshiaki owns an older permanent FieldCare SFE500 desktop licence and resents being asked to pay annually for software he already bought once. His real, unspoken cost is device management trapped on one engineering PC — colleagues blocked when he is away or when that PC is busy during a commissioning or audit, plus the manual upkeep of the DTM library and device versions as the installed base grows. He thinks in total cost of ownership and finance-director justification, values pricing transparency, and dislikes "this is how the industry works now" pressure. Terms: permanent licence, DTM library, multi-user access, engineering seat, total cost of ownership.',
    yourRole: 'E+H BDM — handling a change in the pricing model',
    knownGoingIn: [
      'Purchase Manager at a specialty chemicals plant in Japan',
      'Owns an older permanent FieldCare SFE500 desktop licence',
      'Started the call with a direct question about the subscription model'
    ],
    objectives: [
      'Do not defend the pricing model — find out how the desktop setup works today',
      'Build the cost of device management stuck on one PC',
      'Re-frame subscription as removing that cost, sized to his installed base'
    ],
    customerOpening: 'Let us be honest about why we are talking. You want me to move to a subscription for FieldCare — software I already bought once. Why would I agree to start renting it?',
    stages: [
      {
        id: 'open',
        title: 'The Subscription Objection',
        instruction: 'He started with a direct complaint about subscriptions. How do you respond?',
        choices: [
          { id: 'a', type: 'rapport', quality: 'excellent', points: 10,
            text: 'A very fair reaction. Before anything about licensing — can I understand how your team uses FieldCare each day?',
            rationale: 'You refused to defend the price and moved to learning. Understanding his work first lets the model answer a real need later.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'I understand. It includes Netilion and automatic library updates — real value. Can I walk you through it?',
            rationale: 'You heard him but went straight to defending the model with features — he has felt no problem it solves, so it sounds like marketing.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'It is where the whole industry is going — permanent licences are being phased out everywhere.',
            rationale: '"Everyone is doing it" is pressure, not value — to an owner-minded engineer it confirms he is being pushed.' }
        ]
      },
      {
        id: 'probe',
        title: 'How It Works Today',
        instruction: 'He says FieldCare runs on his engineering PC and has always done the job. What do you ask?',
        choices: [
          { id: 'a', type: 'problem', quality: 'excellent', points: 10,
            text: 'When someone other than you needs a device\'s current settings or history, how do they get them?',
            rationale: 'A question aimed at the single-PC limit — it brings out the access problem without you claiming it exists.' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'How many engineering seats, and about how many devices do you manage with it?',
            rationale: 'Reasonable sizing, but a fact question — it measures his setup without showing the problem in how he works.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'FieldCare 3.0 gives multi-user access from any browser — that removes the single-PC limit, right?',
            rationale: 'You named the limit and the fix together, before he agreed it is a problem — he will hear a pitch and defend his licence.' }
        ]
      },
      {
        id: 'develop',
        title: 'Build the Problem',
        instruction: 'He admits people sometimes have to come to his PC, but calls it manageable. How do you respond?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'When you are away, or that PC is busy during a commissioning or audit, what happens to whoever is waiting?',
            rationale: 'A question that turns "manageable" into a real block — the moments when one-PC access actually stops work.' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'How do you keep the DTM library and device versions up to date across that setup?',
            rationale: 'A fair question about update work — a real problem area. Solid, but it opens a second topic before you finished the first.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'That is why the new model helps — your library updates automatically in the cloud, you see?',
            rationale: 'He gave a small hint of a problem and you jumped to the feature — "manageable" has not become "costly" yet.' }
        ]
      },
      {
        id: 'quantify',
        title: 'Make the Cost Real',
        instruction: 'He admits version control and manual updates take time as the number of devices grows. Where do you go next?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'As you add devices, does that admin work grow too — and pull your engineers off more valuable work?',
            rationale: 'You link the problem to a growing cost and to lost engineer time — he measures the cost himself, instead of you inventing a number.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'So the bigger the plant gets, the more of this manual work you quietly carry.',
            rationale: 'A fair summary that widens the problem — a question that makes him weigh it against his engineers\' time would pull him further.' },
          { id: 'c', type: 'situation', quality: 'poor', points: 0,
            text: 'I understand — and which Windows version do those engineering PCs actually run on site these days?',
            rationale: 'You moved to a small IT detail just as the cost was growing — it stops the topic and looks like you are following a checklist.' }
        ]
      },
      {
        id: 'needpayoff',
        title: 'Make It Matter',
        instruction: 'He agrees the extra work is real and growing. How do you make it clear?',
        choices: [
          { id: 'a', type: 'needpayoff', quality: 'excellent', points: 10,
            text: 'If any engineer could open any device\'s settings from anywhere, library always current — what would that save you?',
            rationale: 'A value question that lets him describe the benefit — now the subscription is not "renting", it is the way to get what he wants.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'So the real cost is not the licence — it is the engineer time the current setup quietly uses up.',
            rationale: 'A strong way to move the talk off licence price — a question that makes him state the gain would convince even more.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'So FieldCare 3.0 is clearly the answer — shall I send over the subscription pricing?',
            rationale: 'Too early, and it pulls him back into the price argument he started with — do not give back the progress you made.' }
        ]
      },
      {
        id: 'close',
        title: 'Re-frame and Close',
        instruction: 'He has warmed up, but will not sign an open-ended deal. Close it.',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'The price scales to your device count, not a flat fee. Let us map your devices — your settings move across.',
            rationale: 'You answered his fear directly (price tied to his devices), kept his control (settings move), and offered a clear, low-risk step.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'Let me set up a trial of FieldCare 3.0 so your team can feel the multi-user access before deciding.',
            rationale: 'A low-risk trial lets the value prove itself — a little weaker than also answering his cost worry with the device-based pricing.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Great — I will send over the standard subscription quote and all the migration terms for you today.',
            rationale: 'He just said no open-ended deal, and you sent a standard quote without tying cost to his devices — this reopens the fear you removed.' }
        ]
      }
    ]
  },

  {
    id: 'sah70-assethealth',
    title: 'The Careful Buyer',
    subtitle: 'Earn a pilot from a Quality Manager who has seen every platform pitch',
    product: 'SAH70 Asset Health',
    productLine: 'netilion',
    difficulty: 'BDM',
    difficultyLabel: 'Business Dev. Manager',
    estimatedMinutes: 15,
    personaId: 'monica-ferrari',
    description: 'Monica wants proof, not promises. She will not easily admit that an instrument health alarm went unnoticed — you have to surface the real cost before SAH70 can land.',
    context: 'An early call about asset health monitoring (SAH70, on-premise). Monica is a Quality Manager at a pharma manufacturing site. NE 107 health status is visible per device, but no one watches it systematically across the plant. She agreed to the meeting because her VP asked her to evaluate options — not because she is convinced.',
    industryContext: 'INDUSTRY REALITY (Pharma / GMP quality): Monica is the quality gatekeeper who can place a batch on quality hold. Instrument NE 107 health status (Failure, Function check, Out of specification, Maintenance required) is visible per device but nobody watches it plant-wide. Her fear: a degraded instrument sits unnoticed during a production campaign, the measurement drifts, batch record review later finds a deviation, a CAPA follows, and the affected batch goes on quality hold. Nothing can leave the validated network, so only an on-premise system is acceptable. She speaks in deviation, CAPA, batch record review, audit finding, quality hold, out-of-tolerance — and NEVER says a "certificate expired", that devices "need certification", or "health record". Calibration is due on a schedule; it does not expire. Instruments ship pre-calibrated; the customer recalibrates and qualifies (IQ/OQ/PQ).',
    yourRole: 'E+H BDM — pharma instrument health and compliance opportunity',
    knownGoingIn: [
      'Quality Manager at a pharmaceutical manufacturing site in Milan',
      'Responsible for instrument health and documentation across ~400 measurement devices',
      'Precise and sceptical — has been disappointed by monitoring platforms before'
    ],
    objectives: [
      'Connect to her quality goal before you mention features or products',
      'Draw out the real cost of unmonitored instrument health status across a production campaign',
      'Propose a small, provable pilot she can defend to her VP — not a site-wide rollout'
    ],
    customerOpening: 'I will be direct — I get presented with monitoring platforms regularly, and they all promise to make my life easier. What I need is a system that works, that I can prove to an auditor, and that does not create more work than it saves. What are we actually talking about here?',
    stages: [
      {
        id: 'open',
        title: 'The Careful Opening',
        instruction: 'She is tired of tool vendors who overpromise. How do you start?',
        choices: [
          { id: 'a', type: 'rapport', quality: 'excellent', points: 10,
            text: 'Fair — I will not add to that pile. The quality standard you are responsible for: what is hardest to keep under control across a production campaign?',
            rationale: 'You stepped past the vendor scepticism and anchored to the standard she is accountable for. Everything that follows connects to a goal she owns.' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'Understood — where in your instrument management process would you say the biggest gaps are right now?',
            rationale: 'A reasonable question, but wide — you are asking her to locate her own gaps. Linking it to a specific quality goal would be sharper.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'SAH70 is an on-premise asset health platform that gives you NE 107 health signals across your whole site — shall I show you?',
            rationale: 'You became the dashboard pitch she warned about — features before context confirm her doubts in the first thirty seconds.' }
        ]
      },
      {
        id: 'probe',
        title: 'How Instrument Health Gets Monitored',
        instruction: 'She says instrument health status is visible in the DCS but someone has to look — and in practice they do not always. What do you ask?',
        choices: [
          { id: 'a', type: 'problem', quality: 'excellent', points: 10,
            text: 'When an instrument changes to Maintenance Required or Out of Specification status during a production run — how does your team find out in time to act?',
            rationale: 'You named a specific NE 107 status and a specific moment — this is the gap she is living with, and now she has to describe exactly how it works (or does not).' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'How many instruments are feeding health status into the system, and who is responsible for reviewing it?',
            rationale: 'A fair situational question that sizes the estate — following up on what happens when no one looks would sharpen it.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'SAH70 aggregates NE 107 signals from all your instruments into one dashboard — that is exactly the visibility you need.',
            rationale: 'She has not described a problem yet. Jumping to the dashboard confirms the pattern she warned you about in the opening.' }
        ]
      },
      {
        id: 'develop',
        title: 'Build the Cost',
        instruction: 'She mentions that last year an instrument was in a degraded health state for several weeks during a campaign and nobody noticed until an internal audit flagged it. She moves past it quickly. How do you respond?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'When it was found in the audit — what did that actually cost you? The batch investigation, the CAPA, the deviation report?',
            rationale: 'You stayed on the incident and opened up its full cost — this is where an unmonitored health alarm becomes a number she can feel and quantify.' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'How many instruments across the plant could be in a similar state right now, without anyone flagging it?',
            rationale: 'A fair question to size the risk — pairing it with the cost of the one incident that already happened would make it land harder.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'That is exactly what SAH70 prevents — a plant-wide health view would have surfaced that alarm weeks earlier.',
            rationale: 'She gave you a real incident and you jumped to the product. She has not measured the cost yet, so the feature has nothing to connect to.' }
        ]
      },
      {
        id: 'quantify',
        title: 'Link It to Her Standard',
        instruction: 'She agrees the batch investigation was costly and the CAPA was difficult to explain to her VP. Where do you go next?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'If a degraded instrument can stay undetected for weeks during a campaign, what does that mean for the next audit — or for your VP Quality?',
            rationale: 'You link the incident directly to the standard she is judged on — she does the risk calculation herself, against what her VP sees.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'So a health alarm that goes unaddressed during production can reach audit level — and your team is the one explaining it.',
            rationale: 'A fair summary tied to accountability — a question that makes her name the risk herself would pull her in further.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Let me send you examples from other pharma sites that use SAH70 to monitor instrument health.',
            rationale: 'You had the chance to build her own risk case and reached for other companies\' stories — they cannot replace hers for a proof-driven buyer.' }
        ]
      },
      {
        id: 'needpayoff',
        title: 'The Data-Location Question',
        instruction: 'She warms, then asks where the data lives — nothing can leave their validated network.',
        choices: [
          { id: 'a', type: 'needpayoff', quality: 'excellent', points: 10,
            text: 'Good — SAH70 runs on-premise, so the data stays inside your network. Would that clear the path for your validation team?',
            rationale: 'You turned a possible objection into a strength and asked a value question that gets her to confirm the way forward herself.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'No concern — SAH70 is an on-premise system, so the data never leaves your infrastructure.',
            rationale: 'Accurate and reassuring, and it removes the objection — a follow-up tied to her validation team\'s approval would turn relief into momentum.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'It syncs to the Netilion cloud, but it is encrypted and certified — there is nothing to worry about.',
            rationale: 'You contradicted SAH70\'s on-premise design and dismissed a real GMP concern — "nothing to worry about" makes a careful Quality Manager more worried.' }
        ]
      },
      {
        id: 'close',
        title: 'Size the Decision',
        instruction: 'She is interested, but will not approve a full rollout without proof. Close it.',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Then let us start small — one production line, your highest-risk instruments, results you can show your VP. Prove it, then expand.',
            rationale: 'You matched her risk level exactly — one line, measured against her compliance goals, in her control, growing only on proof. This is how a careful decision starts.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'I would suggest a pilot on one line first, measured against your compliance goals, before any wider step.',
            rationale: 'The right idea — pilot before rollout, tied to her goals. Naming her highest-risk instruments and her VP Quality goals would make it even stronger.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'I will prepare a full site rollout proposal with all the pricing worked out, ready for senior management.',
            rationale: 'She just said no full rollout without proof — and you offered exactly that. The easiest possible "no" from someone who never agrees quickly.' }
        ]
      }
    ]
  },

  {
    id: 'wirelesshart-retrofit',
    title: 'The Hidden Gaps',
    subtitle: 'Find the monitoring he gave up on',
    product: 'WirelessHART',
    productLine: 'both',
    difficulty: 'BDM',
    difficultyLabel: 'Business Dev. Manager',
    estimatedMinutes: 14,
    personaId: 'peter-hoffmann',
    systemPromptHint: 'An E+H BDM is meeting with you about WirelessHART for your older chemical plant. You are sceptical — wireless feels unreliable and insecure for the monitoring points that really matter. You are willing to listen, but you will not be convinced by specs alone. You need to feel the rep understands your plant and your concerns before you open up about what you are actually trying to monitor.',
    description: 'Peter believes wireless is unreliable for points that matter, and that the gaps he cannot cable are simply impossible to monitor. What he really needs is hidden under that belief.',
    context: 'A meeting about WirelessHART for an older chemical plant. Peter openly doubts that wireless is reliable or secure enough for the points that matter. Your way in is to move past the doubt and find what he really needs — before defending the technology.',
    industryContext: 'INDUSTRY REALITY (Chemical, Ex / hazardous areas): An older chemical plant where many measurement points are still checked by manual rounds because cabling into ATEX-classified areas is slow, permit-heavy and costly. The real risk is the blind window between rounds — a point drifting unseen in a hazardous area before the next check. Peter is a curious engineer who must be shown, not told: he tests every claim and genuinely doubts wireless reliability and security for points that matter. He uses Ex zone, classified area, HART, self-healing mesh, AES-128, manual rounds, root cause. Frame WirelessHART as the engineered answer to gaps that cabling cannot justify — backed by evidence, never over-claimed.',
    yourRole: 'E+H BDM — wireless retrofit for an older plant, with FX/Netilion cross-sell',
    knownGoingIn: [
      'Control & Instrumentation Engineer at an older chemical plant',
      'Monitors many points by manual rounds; adding cables is slow and costly',
      'Started the meeting doubting that wireless is reliable or secure enough'
    ],
    objectives: [
      'Find what he would monitor if cable cost were not a problem',
      'Build the risk hidden between manual checks',
      'Answer the reliability and security concern honestly, then offer a small pilot'
    ],
    customerOpening: 'I agreed to this meeting because I want to understand how wireless monitoring actually works in practice. But I will be honest — this is a chemical plant with hazardous areas. I am not yet convinced wireless is reliable or secure enough for the points that really matter. Show me I am wrong.',
    stages: [
      {
        id: 'open',
        title: 'The Curious Sceptic',
        instruction: 'Peter is open-minded but wants to be shown, not told. How do you start?',
        choices: [
          { id: 'a', type: 'rapport', quality: 'excellent', points: 10,
            text: 'A fair test. Before we get to specs — if cabling and permits were free, which points would you monitor that you currently cannot?',
            rationale: 'You accepted the challenge and asked the question that brings out what he actually needs. Reliability specs land better once he wants the result.' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'Fair. WirelessHART has a 10-year track record in process plants — how many points do you check by hand today?',
            rationale: 'The reassurance is fine and the question is reasonable, but it is a fact question — the "if cabling were free" angle opens the real need faster.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Let me reassure you — the SWA50 uses AES-128 encryption and a self-healing mesh, so reliability is solid.',
            rationale: 'You started with specs before knowing what he needs them for. An engineer who wants to be shown will test every claim — and you have given him nothing to test yet.' }
        ]
      },
      {
        id: 'probe',
        title: 'The Manual Rounds',
        instruction: 'He mentions points the team checks by hand because cabling them was never worth it. What do you ask?',
        choices: [
          { id: 'a', type: 'problem', quality: 'excellent', points: 10,
            text: 'Which of those points would you most want to watch all the time — and why do they matter?',
            rationale: 'A question that gets him to name the important gaps himself — moving from "manual rounds" to specific points he cares about.' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'How often do the rounds happen, and how many points are on a typical round?',
            rationale: 'Useful background on timing and size, but a fact question — it measures the routine without showing which gaps worry him.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'WirelessHART could watch all of those all the time — the adapters fit onto your existing devices.',
            rationale: 'You pitched the fix before he said which points matter or why — "watch all of those" is just noise to him for now.' }
        ]
      },
      {
        id: 'develop',
        title: 'The Hidden Gap',
        instruction: 'He names a few points but says they are fine, since they check them on rounds. How do you respond?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'Between one round and the next, though — if one of those started to drift, when would you actually know?',
            rationale: 'A question that shows the gap manual rounds leave — it turns "we check them" into "we are blind between checks", which is the real risk.' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'Have any of those points ever caused a problem that a round happened to miss?',
            rationale: 'A good question looking for a past event — a little weaker than making him picture the live gap, which works even with no specific memory.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'That is the gap continuous monitoring closes — you would see drift in real time, not once a shift.',
            rationale: 'You answered your own question with the product — let him feel the gap first, or the fix just sounds like a pitch he can ignore.' }
        ]
      },
      {
        id: 'quantify',
        title: 'The Safety Weight',
        instruction: 'He goes quiet, then admits a missed signal between rounds is what worries him most in a hazardous area. Where do you go?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'In a classified area, if one of those drifts unseen before the next round — what is the worst case? And what does cabling them cost?',
            rationale: 'You build both the safety consequence and the cost of the traditional fix — the contrast makes wireless the practical, engineered answer rather than a risk.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'So the points you most need to watch are exactly the ones where adding cable is hardest to justify.',
            rationale: 'A sharp summary of the situation he lives with — a question about the consequence in a hazardous area would deepen the weight of it.' },
          { id: 'c', type: 'situation', quality: 'poor', points: 0,
            text: 'I understand — and which HART version do those field devices actually run on this site?',
            rationale: 'You moved to a technical detail just as he opened up about what worries him most — it breaks the moment and looks like you stopped listening.' }
        ]
      },
      {
        id: 'objection',
        title: 'Earn the Trust',
        instruction: 'He raises it directly now: he needs evidence, not promises, that wireless will not drop out or be compromised in a classified chemical area.',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Right to ask — AES-128 encryption, self-healing mesh, 10-year sensor life. Which one point should we prove it on?',
            rationale: 'You answered with facts he can check, then moved to a low-risk proof on his terms — reassurance plus a clear next step beats reassurance alone.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'Fair concerns — it uses AES-128 encryption and a self-healing mesh, with a strong record in chemical and process plants.',
            rationale: 'Accurate reassurance that answers both worries — it just stops short of turning the relief into action with a pilot offer.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Honestly, it is completely safe — we have never had a single reliability or security problem anywhere.',
            rationale: '"Completely safe" and "never a single problem" claim too much, and an experienced engineer will not believe it. Over-claiming costs you trust.' }
        ]
      },
      {
        id: 'close',
        title: 'Offer the Pilot',
        instruction: 'He is genuinely interested, and will take it seriously if you can prove it on one point that worries him. Close it.',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Let us do that — fit an adapter to that point, send it to Netilion so you see it live. Plan it?',
            rationale: 'You matched his offer exactly — one point, low risk, judged in his plant — and opened the Netilion cross-sell naturally. Proof on his terms wins a doubter.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'Let us arrange a site visit to find the best candidate points and design a small wireless pilot together.',
            rationale: 'A solid, clear next step — a little slower than fitting the one point he just named, but a site visit is a calm way in.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Great — I will prepare a proposal to fit wireless to every unmonitored point across the whole unit.',
            rationale: 'He offered a small first step on one point and you offered a plant-wide rollout — going too far with a doubter loses the trust you earned.' }
        ]
      }
    ]
  },

  // ── NEW SCENARIOS: archetypes re-homed in new industries ─────────────────────

  {
    id: 'water-netilion',
    title: 'Remote Stations Gone Dark',
    subtitle: 'Find the cost of a monitoring gap before the regulator does',
    product: 'Netilion Water',
    productLine: 'netilion',
    difficulty: 'SC',
    difficultyLabel: 'Sales Coordinator',
    estimatedMinutes: 12,
    personaId: 'rafael-santos',
    description: 'Rafael manages a public water utility with outlying pump stations that have no continuous remote visibility. He is cautious and public-sector-minded — a wrong step is a headline.',
    context: 'First meeting, introduced through the regional water association Netilion Water pilot programme mention. Rafael agreed to meet out of curiosity, not because he is looking to buy. He will not volunteer the permit exceedance incident.',
    industryContext: 'INDUSTRY REALITY (Water & Wastewater, public utility): Rafael manages a municipal distribution network — main treatment works plus eight remote pump and discharge stations under an NPDES-equivalent permit. Analytical instruments (ammonia, chlorine residual, turbidity, pH) are critical at effluent discharge and distribution points. Remote station instruments are checked on manual rounds (weekly for main stations, less often for smaller discharge points) and via partial SCADA coverage. The biggest regulatory exposure is a permit exceedance on effluent discharge — triggering mandatory public notification and a corrective action plan. Rafael responds to permit compliance language, public trust, and regulatory readiness — not IT or digital-transformation framing. He is cautious about cloud hosting of public utility data.',
    yourRole: 'E+H Sales Coordinator — introducing Netilion Water monitoring to a municipal utility',
    knownGoingIn: [
      'Asset & Operations Manager at a public water utility serving the Porto area',
      'Network has main treatment works plus 8 remote pump and discharge stations',
      'Met him through the regional water association after a Netilion Water pilot programme mention'
    ],
    objectives: [
      'Find the monitoring gap at the remote stations without leading with features',
      'Build the cost of a permit exceedance — regulatory, operational, and reputational',
      'Propose a small pilot on 2–3 remote stations as a concrete first step'
    ],
    customerOpening: 'Thank you for coming. I saw the programme mentioned at the regional association meeting. I will be honest — I am interested, but I am also cautious. We are a public utility and anything we do with monitoring data gets scrutinised. So tell me what you are actually offering, and what it requires from us.',
    systemPromptHint: 'An E+H Sales Coordinator is meeting you to introduce Netilion Water remote monitoring. You manage 8 remote pump and discharge stations. Last year an ammonia analyser at a remote discharge point drifted for several weeks before it was found on a manual round. The discharge had exceeded NPDES permit limits — you had to file a mandatory report and notify the municipality. You have not told the rep this. You are cautious and will only share details if the conversation earns it.',
    stages: [
      {
        id: 'open',
        title: 'Opening Move',
        instruction: 'Rafael expects an overview of a product. He is cautious and public-sector minded. How do you start?',
        choices: [
          { id: 'a', type: 'rapport', quality: 'excellent', points: 10,
            text: 'I appreciate that — before anything about our system, can I understand how you currently keep track of what is happening at your remote stations?',
            rationale: 'You stepped past the overview and anchored to his work. A careful public-sector manager will respect that you asked before explaining.' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'Of course. How many remote monitoring points do you have, and which parameters are most critical for your permit compliance?',
            rationale: 'A reasonable situational question that sizes his network — still fact-collecting rather than finding a problem he already feels.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Netilion Water centralises all your station data into one dashboard with configurable alerts — shall I show you what it looks like?',
            rationale: 'A feature overview before you know his problem confirms his caution about vendor pitches. He told you he is careful — lead with curiosity.' }
        ]
      },
      {
        id: 'probe',
        title: 'First Question',
        instruction: 'He says his team checks remote stations on rounds — weekly for the main ones, less often for the smaller discharge points. What do you ask?',
        choices: [
          { id: 'a', type: 'problem', quality: 'excellent', points: 10,
            text: 'Between those rounds, if an analyser at a remote discharge point started drifting — how long before your team would know?',
            rationale: 'A precise question about the blind window between checks. It does not name the problem — it asks him to picture it, which is how it becomes real.' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'Are those remote stations connected to your SCADA, or are the rounds the main way you collect data from them?',
            rationale: 'A fair connectivity question — it finds out whether SCADA covers the gap. Following up on what happens when it does not would go further.' },
          { id: 'c', type: 'situation', quality: 'poor', points: 0,
            text: 'Remote analyser drift is the usual problem in distributed networks — is that something your team has had to deal with?',
            rationale: 'You named the problem before he did. A public-sector manager will feel managed rather than heard if a rep seems to have a script about his issues.' }
        ]
      },
      {
        id: 'develop',
        title: 'Build the Problem',
        instruction: 'He says drift happens occasionally and they deal with it when found. He does not offer detail. How do you respond?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'When you do find it — is there usually a period where the discharge data is uncertain, and you have to decide what to do with that data for compliance purposes?',
            rationale: 'A question about the compliance consequence of an undetected drift window — it moves from "we deal with it" toward the real regulatory exposure.' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'About how often does a remote point drift enough to need correction?',
            rationale: 'A frequency question — useful to size the problem. Adding what happens during the drift window would make it more impactful.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Continuous remote alerts would give you the drift signal in real time, before it becomes a compliance issue.',
            rationale: 'He has not described the consequence yet, so a product reference sounds like a pitch rather than a response to his situation.' }
        ]
      },
      {
        id: 'quantify',
        title: 'Put a Cost on It',
        instruction: 'He acknowledges that uncertain data after a drift event means a compliance decision, and that one report to the regulator last year was difficult. He says no more. How do you go next?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'A mandatory report to the regulator — what followed from that? The corrective action, the public notification, the follow-up inspection?',
            rationale: 'You stayed with the event he opened and asked about its full reach — not the technical problem, but the regulatory and public consequence he is accountable for.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'That kind of report — does it also go to the municipality, and does it affect how the utility is viewed publicly?',
            rationale: 'A good question about the reputational dimension — a public utility manager cares about this. The full regulatory chain (inspection, corrective action) would go deeper.' },
          { id: 'c', type: 'situation', quality: 'poor', points: 0,
            text: 'I see. And how many users across your team would need access to a monitoring dashboard?',
            rationale: 'You moved to a procurement detail the moment he opened up about the regulator. That signals you stopped listening — and he will close back down.' }
        ]
      },
      {
        id: 'needpayoff',
        title: 'Make It Matter',
        instruction: 'He confirms the report led to a corrective action plan and an inspection. He is more open now. What next?',
        choices: [
          { id: 'a', type: 'needpayoff', quality: 'excellent', points: 10,
            text: 'If you could see a drift developing at a remote discharge station before it reached permit limits — what would that change for you?',
            rationale: 'A value question that makes him describe the benefit in his own terms — regulatory confidence, inspection readiness, public trust.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'So the real cost of that gap is not just a correction — it is the inspection, the corrective action plan, and the confidence the regulator has in your operation.',
            rationale: 'A strong summary that broadens the cost — a question that makes him state the value of early warning would pull him further.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'That is exactly the kind of event Netilion Water prevents — shall I walk you through the alert thresholds and reporting features?',
            rationale: 'He just opened up about a difficult regulatory event and you moved to a feature walkthrough. Too fast, and it resets his caution.' }
        ]
      },
      {
        id: 'close',
        title: 'Agree a Next Step',
        instruction: 'He is genuinely interested but wants to start small and see it work before any wider discussion. Close it.',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Then let us start with two or three of your remote discharge stations — the ones with the most permit exposure. No wide rollout, just proof on the points that matter most.',
            rationale: 'You matched his pace exactly — a small, risk-managed pilot on the stations with the highest compliance stakes. This is how a careful public-utility manager starts.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'A pilot on a few remote stations first makes sense — I can help align the alert thresholds to your specific permit parameters.',
            rationale: 'A solid, low-pressure next step — naming the permit-specific parameters makes it feel tailored rather than generic.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'I will send over a proposal for a full network rollout covering all eight stations, for you to review with your team.',
            rationale: 'He asked to start small and you offered a full rollout. A cautious public-sector manager who opened with "careful" will not agree to this.' }
        ]
      }
    ]
  },

  {
    id: 'fb-heartbeat',
    title: 'The Silent CCP Risk',
    subtitle: 'Surface the drift gap between calibration checks before it reaches a product hold',
    product: 'Heartbeat Verification',
    productLine: 'netilion',
    difficulty: 'SC',
    difficultyLabel: 'Sales Coordinator',
    estimatedMinutes: 12,
    personaId: 'claire-martin',
    description: 'Claire manages food safety at a dairy plant. Her CCP instruments are on monthly spot-checks with no visibility between. She only engages if you ask precise HACCP questions.',
    context: 'Claire agreed to a short meeting after seeing a reference in a food-safety newsletter. She is not looking to buy — she wants to understand if this addresses a real HACCP gap. Her guard comes down only with technical precision.',
    industryContext: 'INDUSTRY REALITY (Food & Beverage, dairy): A HTST (high-temperature short-time) pasteurisation plant with continuous dairy lines. Temperature transmitters at the pasteuriser hold section are Critical Control Points (CCPs) under the HACCP plan — they must record accurate time-temperature data to prove the critical limit was met. CCP instruments are on a monthly calibration spot-check schedule; between checks, there is no systematic way to confirm a transmitter has not drifted. If a CCP transmitter is found out of tolerance at the next monthly check, the plant must review all product produced since the last good calibration result — affected lots may be held for disposition (test and release, downgrade, or destroy). No pharma language here: no "deviation", "CAPA", "batch record", or "GMP". The correct F&B terms are: CCP, critical limit, HACCP plan, product hold, lot disposition, corrective action, food safety plan.',
    yourRole: 'E+H Sales Coordinator — presenting Heartbeat Verification as a HACCP support tool at a dairy manufacturer',
    knownGoingIn: [
      'QA & Food Safety Manager at a large dairy manufacturer in western France',
      'Responsible for the HACCP plan and CCP management across pasteurisation lines',
      'Agreed to a short meeting — evaluating, not buying'
    ],
    objectives: [
      'Earn her engagement by asking precise HACCP questions, not broad quality questions',
      'Build the cost of a CCP drift found late — the lot review, the hold, the disposition decision',
      'Propose a live Heartbeat Verification run on one pasteuriser transmitter as a concrete first step'
    ],
    customerOpening: 'I read the article about in-situ instrument verification in the food-safety context. I am always looking for ways to strengthen our CCP monitoring. But I have to say — every tool we add to a HACCP programme must be justified. It cannot create more work, and it cannot give us a false sense of security. What exactly are you offering, and how does it relate to a CCP?',
    systemPromptHint: 'An E+H Sales Coordinator is presenting Heartbeat Verification for your HACCP CCP management. Your pasteuriser hold-section temperature transmitters are CCPs on monthly spot-checks. Three months ago one was found out of tolerance — it had been reading 0.6°C low. You reviewed five days of production and held two lots for disposition; one was downgraded. You have not told the rep this. You are precise and guarded — you open up only if questions are technically accurate and HACCP-specific.',
    stages: [
      {
        id: 'open',
        title: 'Opening Move',
        instruction: 'Claire opened with a direct question about the CCP connection. She wants precision, not an overview. How do you respond?',
        choices: [
          { id: 'a', type: 'rapport', quality: 'excellent', points: 10,
            text: 'That is exactly the right question. Before I explain — can I ask how you currently know a CCP temperature sensor is still reading correctly between its scheduled calibration checks?',
            rationale: 'You answered her seriousness with a precise HACCP question about the specific gap. It signals you understand the CCP framework and creates the opening she asked for.' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'Of course — how many CCPs are on your pasteurisation lines, and how often are they currently calibrated?',
            rationale: 'A reasonable setup question — it sizes the programme. Following it with the between-check visibility question would take it further.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Heartbeat Verification runs in-situ on the installed transmitter and gives you a pass or fail result you can attach to your HACCP record.',
            rationale: 'You answered her question with a feature description before understanding her setup. She asked how it relates to a CCP — not for a walkthrough.' }
        ]
      },
      {
        id: 'probe',
        title: 'First Question',
        instruction: 'She confirms CCP instruments are on monthly spot-checks. Between those checks, there is no systematic verification. What do you ask?',
        choices: [
          { id: 'a', type: 'problem', quality: 'excellent', points: 10,
            text: 'If a temperature sensor at the hold section drifted in the second week of the month — when would your HACCP plan first register that?',
            rationale: 'A technically precise question that names the hold section, the drift scenario, and the HACCP plan visibility gap. It is the right question for this conversation.' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'Is the monthly check done by an external calibration laboratory, or internally by your team?',
            rationale: 'A useful setup question about the calibration resource — it does not yet surface the gap between checks that creates the real risk.' },
          { id: 'c', type: 'situation', quality: 'poor', points: 0,
            text: 'Monthly checks leave a long window for drift — does that concern you from a food-safety standpoint?',
            rationale: 'You named the risk for her rather than asking the question that makes her see it. A precise QA manager will answer "we manage it" and move on.' }
        ]
      },
      {
        id: 'develop',
        title: 'Build the Problem',
        instruction: 'She says the monthly check is the programme standard and they have managed it so far. She does not offer more. How do you respond?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'When the monthly check finds a transmitter out of tolerance — what does your HACCP plan require you to do about the product made since the last good result?',
            rationale: 'A question that goes directly to the lot review and hold consequence required by the HACCP plan. She must answer — it does not assume a past event.' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'Has a CCP check ever found a temperature sensor out of tolerance, and if so, how far back did you have to review?',
            rationale: 'A direct question about a past event — a fair probe, though asking about the HACCP plan consequence first might be safer with a guarded QA manager.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Heartbeat Verification would run between those monthly checks and tell you whether the transmitter is still within its performance specification.',
            rationale: 'She has not described a consequence yet. Jumping to the feature before she feels the problem means the feature has nothing to anchor to.' }
        ]
      },
      {
        id: 'quantify',
        title: 'Put a Cost on It',
        instruction: 'She confirms an out-of-tolerance result requires reviewing product since the last good calibration and potentially holding lots. She has not yet mentioned it has happened. How do you go next?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'Depending on when in the month it drifted, that lot review could cover days of production. Has that kind of review affected any product lots for you?',
            rationale: 'You sized the lot review consequence, then gently asked if it has happened — giving her the chance to open up without pressure.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'If the drift happened early in the month, the lot review could be significant — how many days of production does one pasteuriser line cover in a month?',
            rationale: 'A good question to size the review scope — a little weaker than also asking whether it has already happened, which opens the conversation further.' },
          { id: 'c', type: 'situation', quality: 'poor', points: 0,
            text: 'And how many temperature transmitters across your lines are currently on monthly checks?',
            rationale: 'You moved to a count question when the conversation was building toward a real consequence. It resets to fact-gathering just as the problem was becoming visible.' }
        ]
      },
      {
        id: 'needpayoff',
        title: 'Make It Matter',
        instruction: 'She confirms it has happened — five days of lots reviewed, two held for disposition. She is more open now. What next?',
        choices: [
          { id: 'a', type: 'needpayoff', quality: 'excellent', points: 10,
            text: 'If you had evidence that the transmitter was still within tolerance on day ten of that month — what would that have changed for those lots?',
            rationale: 'A precise value question that lets her describe the benefit in HACCP terms — fewer lots held, faster disposition decision, less uncertainty. She states the value herself.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'So a drift that started mid-month means you review everything back to the last check — and the lot disposition carries real product and commercial cost.',
            rationale: 'A fair summary that names the scope and the cost — a question that makes her state what earlier evidence would have been worth would go further.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Heartbeat Verification would have given you a dated, traceable pass result mid-month — that limits the lot review window.',
            rationale: 'You described the benefit before she stated the need — technically correct, but the benefit lands harder when she says it herself.' }
        ]
      },
      {
        id: 'close',
        title: 'Agree a Next Step',
        instruction: 'She is genuinely interested but will not recommend anything without seeing it work on her own equipment. Close it.',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Then let us run a live Heartbeat Verification on one pasteuriser hold-section transmitter — you watch the report generate in real time, process running. If the result means nothing to you, we stop there.',
            rationale: 'You matched her condition exactly — live, on her own equipment, no risk, no commitment. For a QA manager who needs proof, this is the right answer.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'I can arrange a demonstration on one of your CCP transmitters so you can see the output and judge whether it adds anything to your HACCP evidence base.',
            rationale: 'A solid, low-pressure next step — adding that it runs with the process live, and she defines success, would make it feel even more tailored to her standard.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Let me prepare a proposal for a full CCP monitoring programme across both lines, with pricing and implementation timelines.',
            rationale: 'She said she needs to see it work first — a full programme proposal jumps past the proof step she asked for and adds exactly the work she said she cannot justify.' }
        ]
      }
    ]
  },

  {
    id: 'power-heartbeat',
    title: 'The Protection Loop Gap',
    subtitle: 'Build the case for continuous transmitter health in a critical safety loop',
    product: 'Heartbeat Technology',
    productLine: 'netilion',
    difficulty: 'BDM',
    difficultyLabel: 'Business Dev. Manager',
    estimatedMinutes: 14,
    personaId: 'hendrik-vogel',
    description: 'Hendrik agreed to explore Heartbeat for his drum level protection loop. He is curious but technically demanding — he will probe every claim before building a business case.',
    context: 'A technical meeting arranged after a colleague mentioned Heartbeat at an I&C conference. Hendrik is genuinely curious about in-situ verification but will test every technical claim hard. His drum level loop is his highest-concern measurement.',
    industryContext: 'INDUSTRY REALITY (Power & Energy, coal-fired plant): A coal-fired generating unit runs a critical steam drum level protection loop — three redundant DP-based transmitters using median-select voting logic. Drum level is the most safety-sensitive measurement in a conventional boiler: high level risks water carryover into the turbine, low level risks tube overheating. A spurious unit trip from a faulty transmitter costs over €100k in lost generation plus restart, and goes directly into the fleet availability report. Transmitter health checks happen only in planned maintenance windows every 6–12 months. Hendrik speaks IEC 61511, SIL, median-select voting, unit availability, and MTBF. He will not be convinced by marketing claims. Heartbeat Verification checks a device in-situ without process interruption — it verifies, it does not replace required maintenance calibration or constitute a SIL proof test by itself.',
    yourRole: 'E+H BDM — technical meeting on Heartbeat for critical protection loop transmitters',
    knownGoingIn: [
      'I&C Engineer at RWE Power AG, responsible for protection systems and instrument health on two coal units',
      'Triple-redundant drum level loop; no systematic health monitoring between maintenance windows',
      'Curious about in-situ verification but will probe hard — he will build a business case only if the evidence is solid'
    ],
    objectives: [
      'Earn his technical confidence before any commercial step',
      'Surface the cost of a spurious trip traced to a degraded transmitter in the protection loop',
      'Propose a live Heartbeat Verification run on one drum level transmitter as a provable first step'
    ],
    customerOpening: 'I heard about Heartbeat at the I&C conference last month. The concept is interesting — in-situ verification without pulling the device. But I need to understand the limits before I consider building a business case. A protection system is not a place for technology that has not been properly understood. So — tell me exactly what it does and what it does not do.',
    systemPromptHint: 'An E+H BDM is presenting Heartbeat Technology for your drum level protection loop transmitters. Transmitter health is checked only in planned maintenance windows. Eight months ago, one of the three transmitters developed a slow drift — the median-select compensated for a while, then a divergent reading triggered a spurious unit trip. The unit was offline for 18 hours; the cause was traced to the degraded transmitter. You have not told the rep this yet. You will probe every claim about diagnostic coverage and what "in-situ verification" actually proves.',
    stages: [
      {
        id: 'open',
        title: 'Opening Move',
        instruction: 'Hendrik asked a direct technical question about what Heartbeat does and does not do. How do you respond?',
        choices: [
          { id: 'a', type: 'rapport', quality: 'excellent', points: 10,
            text: 'Right — I will answer that exactly. But first: your drum level loop is triple-redundant with median-select. Between maintenance windows, how do you know whether all three transmitters are healthy?',
            rationale: 'You acknowledged his demand for honesty and asked a precise protection-logic question — the right response for an I&C engineer who will only engage with someone who knows the system.' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'Heartbeat Verification runs in-situ without removing the device. It compares live internal references to factory baselines and produces a pass/fail report — no process interruption.',
            rationale: 'An accurate technical description that answers his question. But asking about his specific loop first would have earned more technical dialogue.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Heartbeat is a TÜV-attested in-situ verification method — it is proven technology used across thousands of power and process plants.',
            rationale: 'You led with certification and a volume claim. An I&C engineer who asked for technical limits will push back on "thousands of plants" as a non-answer.' }
        ]
      },
      {
        id: 'probe',
        title: 'First Question',
        instruction: 'He confirms transmitter health in the protection loop is checked in maintenance windows only — every 6 to 12 months. Between windows, there is no systematic health view. What do you ask?',
        choices: [
          { id: 'a', type: 'problem', quality: 'excellent', points: 10,
            text: 'Between those windows — if one of the three transmitters started to degrade slowly, at what point would the median-select logic actually show you something was wrong?',
            rationale: 'A technically precise question about the specific failure mode in his protection logic — it asks him to think through the gap the way an I&C engineer would.' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'When the maintenance window does happen — is the health check a full calibration against a reference standard, or a functional check?',
            rationale: 'A fair question about what the window check covers — a question about the blind period between windows would go further toward the real risk.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'That kind of health gap in a protection loop is exactly where Heartbeat adds value — continuous diagnostics surface degradation before it matters.',
            rationale: 'You gave away the conclusion before he worked through the problem. He asked for technical precision — give him the question, not the answer.' }
        ]
      },
      {
        id: 'develop',
        title: 'Build the Problem',
        instruction: 'He acknowledges the median-select logic would mask a slow drift on one transmitter — and then, at some threshold, trigger a divergent reading. He pauses. How do you respond?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'That divergent reading — in your loop, does it cause a spurious trip, or does the logic hold it?',
            rationale: 'A precise technical question about the specific consequence in his protection loop — it gives him the opportunity to describe what a spurious trip means for his unit.' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'How close to that divergence threshold would a degrading transmitter get before a maintenance window catch would find it?',
            rationale: 'A reasonable question about how close the gap takes him to a problem — asking about the trip consequence directly would pull more from him.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'That is the failure mode Heartbeat Diagnostics monitors for — continuous NE 107 health status on each transmitter in the loop.',
            rationale: 'He was working through a technical scenario and you cut to the product. He will probe the claim rather than finish the story — and the story is more valuable.' }
        ]
      },
      {
        id: 'quantify',
        title: 'Put a Cost on It',
        instruction: 'He confirms a bad divergent reading on that loop trips the unit. He mentions a spurious trip last year — 18 hours offline — without giving details. How do you respond?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'Eighteen hours of lost generation — what does that cost on your unit, and how does it show up in the fleet availability report?',
            rationale: 'You stayed with the incident and asked about both the financial and the fleet-level consequence — the two measures that anchor a business case for Hendrik.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'A spurious trip from a protection loop fault is a direct hit on unit availability — how often does your fleet see that kind of event?',
            rationale: 'A fair question about fleet frequency that widens the picture — asking the cost of the specific 18-hour event first would anchor the number more sharply.' },
          { id: 'c', type: 'situation', quality: 'poor', points: 0,
            text: 'That is difficult to deal with — and which HART version do those drum level transmitters actually run on your units?',
            rationale: 'A technical detail question just as he opened up about a significant event. It looks like you stopped listening at the wrong moment.' }
        ]
      },
      {
        id: 'needpayoff',
        title: 'Make It Matter',
        instruction: 'He confirms the trip cost over €100k in lost generation and went into the fleet availability report. He pauses again. What next?',
        choices: [
          { id: 'a', type: 'needpayoff', quality: 'excellent', points: 10,
            text: 'If Heartbeat had flagged that transmitter was degrading weeks before the trip — what would a business case for the maintenance team look like for you?',
            rationale: 'A value question that links the capability directly to his business case — he describes the ROI himself, in the terms his maintenance and finance review will need.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'So one undetected degradation event cost over €100k and moved the fleet availability number — and the protection loop runs the same way today.',
            rationale: 'A strong summary that puts the consequence and the continuing risk in one sentence — a question that makes him articulate the case himself would pull him further.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'With Heartbeat monitoring all three transmitters continuously, that kind of trip becomes preventable — shall I show you the diagnostic architecture?',
            rationale: 'He has not asked to see the architecture. Moving to a product walkthrough before he has built the case himself interrupts the work that makes the pilot meaningful.' }
        ]
      },
      {
        id: 'close',
        title: 'Agree a Next Step',
        instruction: 'He agrees the case is worth building, and is open to a first step — but needs to understand the limits of the verification method before taking it to his management.',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Then let us run a Heartbeat Verification on one drum level transmitter — you define the acceptance criteria, I explain exactly what the result does and does not prove. If it meets your standard, we build from there.',
            rationale: 'You met his technical standard: he sets the criteria, you are transparent about the limits, and the next step is proof, not a commitment. Right offer for a careful engineer.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'A Heartbeat Verification run on one transmitter would show you the actual output — the coverage, the report, and what it proves — before you commit to anything.',
            rationale: 'A solid, low-risk first step — adding that he sets the acceptance criteria and that you will explain the limits would match his stated condition more closely.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'I will prepare a full Heartbeat rollout proposal for the drum level loop on both units, with SIL compliance notes attached.',
            rationale: 'He asked to understand the limits before committing — a full rollout proposal with SIL compliance notes implies decisions he has not yet made.' }
        ]
      }
    ]
  },

  {
    id: 'metals-netilion',
    title: 'The Grade Is Slipping',
    subtitle: 'Connect instrument drift in the flotation circuit to the recovery number',
    product: 'Netilion Health',
    productLine: 'netilion',
    difficulty: 'BDM',
    difficultyLabel: 'Business Dev. Manager',
    estimatedMinutes: 12,
    personaId: 'james-okafor',
    description: 'James cares about the recovery KPI. He will give you ten minutes to make a commercial case — if the connection to recovery or grade is not clear in the first few exchanges, he moves on.',
    context: 'James agreed to this meeting because a peer at another mine mentioned the solution had reduced reactive instrument maintenance. He is results-driven and impatient with technology talk that does not connect to commercial outcomes.',
    industryContext: 'INDUSTRY REALITY (Metals, Mining & Minerals — platinum concentrator): The flotation circuit at Mogalakwena runs 24/7 on platinum group metal ore. Density and flow instruments in the flotation feed and tailing streams are critical to reagent dosing (frother, collector, depressant). Slurry abrasion is the dominant failure mode — instruments drift or fail reactively. An undetected drift in feed density or flow causes incorrect reagent dosing: if the dose is off, concentrate grade and recovery fall. A 0.5% drop in platinum recovery is a direct and significant revenue loss per month — often only traceable to the instrument when the shift report or assay confirms the drop. James speaks in recovery %, reagent dosing, ore grade, OPEX, reactive vs predictive maintenance, and peer-site benchmarks. He will lose interest quickly if the conversation stays on platform features or digital transformation language.',
    yourRole: 'E+H BDM — connecting instrument health monitoring to flotation recovery at a platinum concentrator',
    knownGoingIn: [
      'Operations Manager at Anglo American Mogalakwena, responsible for flotation throughput, recovery, and OPEX',
      'Density and flow instruments in the circuit fail reactively; drift is found when downstream KPIs move',
      'A peer at a copper mine mentioned Netilion Health had reduced reactive maintenance costs'
    ],
    objectives: [
      'Reach the recovery KPI in the first few exchanges — do not stay on product or technology',
      'Build the cost of an undetected drift — reagent dosing error, recovery loss, revenue impact',
      'Propose a 30-day pilot on 3–5 key flotation instruments as a concrete first step'
    ],
    customerOpening: 'My peer at Kansanshi mentioned you. He said it helped them track instrument health before failures turned into maintenance call-outs. I have ten minutes. Tell me why this is useful for a flotation circuit.',
    systemPromptHint: 'An E+H BDM is presenting Netilion Health to monitor instrument condition in your flotation circuit. Density and flow instruments drift and fail reactively due to slurry abrasion. Three months ago a density instrument in the flotation feed drifted for about ten days before the shift team noticed grade had softened. Root cause was instrument drift causing incorrect reagent dosing; recovery loss was approximately 0.4%. You have reported a recovery shortfall to your general manager twice in 18 months. You will engage quickly if the rep connects the tool to the recovery number. You will lose interest if they talk platforms or digital transformation without connecting to grade and recovery.',
    stages: [
      {
        id: 'open',
        title: 'Opening Move',
        instruction: 'James gave you ten minutes and wants a direct commercial answer. How do you start?',
        choices: [
          { id: 'a', type: 'situation', quality: 'excellent', points: 10,
            text: 'Simple: it gives you an early warning before an instrument drift touches your recovery number. In your flotation feed — how do you currently find out an instrument has started to drift?',
            rationale: 'One sentence connecting the tool to his KPI, then a direct question about his current detection gap. Right pace and commercial register for James.' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'It monitors instrument health continuously — density, flow, any Heartbeat-enabled device in the circuit. What does your current failure detection look like?',
            rationale: 'A reasonable answer with a good follow-up question — slightly weaker because you led with the feature list before the commercial connection.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'It is a cloud platform that aggregates NE 107 health status from all your connected instruments in real time — I can show you the dashboard.',
            rationale: '"Cloud platform" and "dashboard" are exactly the technology-first language James does not respond to. He will give you three minutes, not ten.' }
        ]
      },
      {
        id: 'probe',
        title: 'First Question',
        instruction: 'He says the team usually finds out an instrument has failed when a downstream KPI — recovery or grade — has already moved. What do you ask?',
        choices: [
          { id: 'a', type: 'problem', quality: 'excellent', points: 10,
            text: 'When you trace it back — how long has the drift typically been running before the KPI moves enough for the shift team to notice?',
            rationale: 'A direct question about the drift window — it builds toward the lost recovery days, which is the commercial number he cares about.' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'Which instruments in the circuit fail most often — density meters, flow meters, or both?',
            rationale: 'A fair setup question that identifies the worst instruments — it does not yet open the cost of the detection gap, which is the more important direction.' },
          { id: 'c', type: 'problem', quality: 'poor', points: 0,
            text: 'Reactive maintenance is common in flotation circuits — do you have a maintenance backlog because of it?',
            rationale: 'A general maintenance question misses the point. James is focused on recovery, not maintenance scheduling — a backlog question will not engage him.' }
        ]
      },
      {
        id: 'develop',
        title: 'Build the Problem',
        instruction: 'He says drift can run for days before anyone connects a softening grade to an instrument. He moves past it quickly. How do you respond?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'Days of drift in the feed density — at the reagent dosing error that creates, what does that do to your recovery percentage over that period?',
            rationale: 'A direct causal question linking drift duration to reagent dosing error to recovery loss — the exact chain that James owns and has to explain to his GM.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'And when you trace it back to the instrument, that period of incorrect dosing is already gone — it is a recovery loss you cannot reverse.',
            rationale: 'A strong statement of the irreversible cost — a question that makes him quantify the recovery impact would give him the number for his own case.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Netilion Health would have caught the drift early — it monitors NE 107 health status continuously on each instrument.',
            rationale: 'He just described a real operational problem and you jumped to the product. For James, the feature means nothing until the cost is on the table.' }
        ]
      },
      {
        id: 'quantify',
        title: 'Put a Cost on It',
        instruction: 'He acknowledges that a drift event means days of sub-optimal dosing and a grade softening he has to report. He has not named a number yet. What do you do?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'At your throughput and current platinum price — what does a half-percentage-point drop in recovery cost you in a month?',
            rationale: 'A direct, commercial, specific question that asks him to state the number himself. When he says it, the case for prevention is already made.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'A sustained dosing error across a few shifts, at your circuit scale, is a meaningful revenue impact — is that something you have had to account for in the month-end report?',
            rationale: 'A fair link to the monthly reporting — asking him to name the number directly would be stronger for a commercially direct decision-maker.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'I can show you case studies from copper and gold operations where Netilion Health cut reactive maintenance costs significantly.',
            rationale: 'Case studies are support material, not a replacement for his own number. He asked for a commercial case — get his number first.' }
        ]
      },
      {
        id: 'needpayoff',
        title: 'Make It Matter',
        instruction: 'He confirms a half-point recovery drop costs significant revenue per month and he has had to report it to his GM twice in 18 months. He is engaged. What next?',
        choices: [
          { id: 'a', type: 'needpayoff', quality: 'excellent', points: 10,
            text: 'If an instrument alert came 48 hours before the drift reached dosing error — how many of those GM conversations would that prevent?',
            rationale: 'A value question that makes him state the benefit in his own operational and political terms. He knows the answer — saying it makes the case his.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'So the GM conversation is the signal — and preventing it means catching the drift before it moves the recovery number.',
            rationale: 'A strong, concise link from the problem to the benefit — a question that makes him own the value of early warning would be slightly stronger.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Then Netilion Health is the right solution — it is the only platform that gives you Heartbeat diagnostics on your E+H instruments at circuit scale.',
            rationale: 'He just told you what is at stake, and you gave him a product claim with "only platform" language. He will test that claim and it will stall the conversation.' }
        ]
      },
      {
        id: 'close',
        title: 'Agree a Next Step',
        instruction: 'He is willing to look at it, but wants to see it on his own instruments — not a software demo. Close it.',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Then 30 days on three or four of your highest-value feed instruments — no dashboard tour, just live health data from your circuit. You judge whether the early warning is real.',
            rationale: 'You matched his condition exactly — his instruments, his circuit, his judgment. A results-driven operations manager agrees to a test on his terms.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'I can connect a few key density and flow instruments in the flotation feed for a 30-day trial — you set the success criteria.',
            rationale: 'A solid next step on his terms — adding that the outcome is live health data from his circuit, not a demo, would make it feel less like a vendor trial.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'I will prepare a full proposal for a site-wide Netilion Health rollout across the flotation circuit, with an ROI model based on your throughput data.',
            rationale: 'He said he wants to see it on his own instruments — not a site-wide proposal. An ROI model from your data, not his, will not convince him.' }
        ]
      }
    ]
  }
];
