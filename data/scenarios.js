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
    personaId: 'marcus-weber',
    description: 'Marcus filled in a web form, but he expects a sales pitch. He will not tell you the real problem — you have to ask the right questions.',
    context: 'First discovery call. You know almost nothing about Marcus — only that he runs maintenance at a chemical plant and asked about "field device tools." He has little time and does not like product pitches.',
    yourRole: 'E+H Sales Coordinator — first discovery call',
    knownGoingIn: [
      'Plant Maintenance Manager at a mid-size chemical plant',
      'Asked on the website about "better field device management tools"',
      'Nothing more — you must find out his real situation during the call'
    ],
    objectives: [
      'Find a real problem before you pitch anything',
      'Use questions to show the cost of that problem',
      'Agree a clear next step that works for him'
    ],
    customerOpening: 'Thanks for calling. To be honest, I filled in that form quickly. I have been in many vendor calls, and I usually get twenty minutes of product talk before anyone asks what is wrong. So — what do you want to know?',
    stages: [
      {
        id: 'open',
        title: 'Opening Move',
        instruction: 'Marcus expects a product pitch. How do you start?',
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
          { id: 'c', type: 'problem', quality: 'poor', points: 0,
            text: 'Missing drivers are the usual problem with that mix — is that your main problem too?',
            rationale: 'This puts words in his mouth. A cautious engineer pushes back, and the problem is not real to him until he says it himself.' }
        ]
      },
      {
        id: 'develop',
        title: 'Build the Problem',
        instruction: 'Marcus is relaxed: "Sometimes a driver is missing, so they call the office. A little annoying, but we manage." How do you reply?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'While a technician waits for that call, does anything else stop — is a line ever standing idle?',
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
        instruction: 'He admits: "A line has waited a few times. Downtime is expensive here." Where do you go next?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'Expensive how — about what does one hour of a stopped line cost you when this happens?',
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
        instruction: 'Marcus agrees the downtime cost is real and adds up over a year. Now what?',
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
        instruction: 'He is interested now: "This was more useful than I expected. But I would need to see it work on our devices." End the call well.',
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
    personaId: 'claire-fontaine',
    description: 'Claire starts with a price challenge. The real opportunity is the hidden cost of her current setup — but she will not give it to you easily.',
    context: 'Claire\'s local sales coordinator passed this to you. She brought a cost comparison, and she answers to a city council. Her stated problem is price — move past it to what her current setup really costs her before you talk numbers.',
    yourRole: 'E+H BDM — customer with a tight public budget',
    knownGoingIn: [
      'Instrumentation Supervisor at a Paris water authority',
      'Her current setup (older tablets + a shared FieldCare licence) costs about €8,000',
      'She answers to a city council, and asked you to justify any extra spend'
    ],
    objectives: [
      'Move the talk from price to the cost of staying the same',
      'Put a number on the hidden cost, using her own figures',
      'Match the case to her budget timing'
    ],
    customerOpening: 'Your colleague says you are the Field Xpert expert. I will be direct: my current setup costs about €8,000 and it works. I answer to a city council for every euro. So tell me — better in what way, and worth how much more?',
    stages: [
      {
        id: 'open',
        title: 'The Price Challenge',
        instruction: 'She started with cost. How do you respond?',
        choices: [
          { id: 'a', type: 'rapport', quality: 'excellent', points: 10,
            text: 'That is the right question to ask me. Before price — what does that setup cost you in time today?',
            rationale: 'You respected her duty and moved from sticker price to total cost. Now the comparison is about value, not a price fight you would lose.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'Fair. Could I show you where the features differ, and then we put numbers to it?',
            rationale: 'You heard the concern, but leading with features becomes a product tour before you understand her real problem. Learn first.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'It is about €3,500 per unit — a small step up. Shall I show you the feature comparison?',
            rationale: 'You opened with price and called it "small" before giving her any reason to value it. A feature sheet will not fix that gap.' }
        ]
      },
      {
        id: 'probe',
        title: 'Test "Good Enough"',
        instruction: 'She says her setup "works fine." How do you test that?',
        choices: [
          { id: 'a', type: 'problem', quality: 'excellent', points: 10,
            text: 'When a technician reaches a device whose driver is not on the tablet, what happens then?',
            rationale: 'A precise question aimed at the most likely problem — one exact moment, not a vague request for her to name problems.' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'What would you say frustrates your technicians most out in the field?',
            rationale: 'A problem question, but too wide — you ask her to do your work. A targeted question gets there faster.' },
          { id: 'c', type: 'situation', quality: 'poor', points: 0,
            text: 'Water utilities often run many old HART devices — that is a problem for you too, right?',
            rationale: 'You guessed at her problem instead of finding it, and it may not even be true for her site. She will feel unheard.' }
        ]
      },
      {
        id: 'develop',
        title: 'Build the Problem',
        instruction: 'She admits: "It happens sometimes. They deal with it." How do you respond?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'When it happens, how long does dealing with it take — and what does not get done meanwhile?',
            rationale: 'A question that opens two things at once: time lost and the work that stops. It moves her past "sometimes".' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'About how many times a year, across the whole team, would you say this kind of problem comes up?',
            rationale: 'You start to measure it, good. But a number alone is not enough; the effect is what a budget owner feels.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Our 4,000 pre-loaded drivers mean this simply never happens — shall I show you?',
            rationale: 'You pitched into a half-open problem. She has not measured the cost yet, so the feature has nothing to connect to.' }
        ]
      },
      {
        id: 'quantify',
        title: 'Work Out the Numbers',
        instruction: 'She agrees it costs real time, but she has not put money to it. Where do you go next?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'Let us put a euro figure on it — at a technician\'s full hourly cost, would that number help your council?',
            rationale: 'You lead the calculation and link it to her decision — without inventing numbers. Turning lost time into euros answers a price worry.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'That is clearly costing you real productivity each year — Field Xpert would recover most of that time.',
            rationale: 'Right direction, but you stated the benefit instead of building the number with her. Euros against her budget would convince more.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Driver problems are well known in the industry — shall I send examples from similar utilities?',
            rationale: 'You had the chance to build a euro case with her and chose general examples instead. Examples support a case; they cannot replace one.' }
        ]
      },
      {
        id: 'needpayoff',
        title: 'Offer the Lever',
        instruction: 'She accepts the logic, but the upfront cost is still the problem. How do you continue?',
        choices: [
          { id: 'a', type: 'needpayoff', quality: 'excellent', points: 10,
            text: 'If that time went into planned maintenance instead, what is it worth? And do you still have the old tablets?',
            rationale: 'A value question — she names the benefit herself — plus a real lever she must act on. You lower real cost, not value.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'We have a trade-in — 20% off if you trade the old tablets. I would need to check they qualify.',
            rationale: 'A relevant lever, well timed. A little passive ("I would need to check") versus asking her to find the units now, but the offer is right.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Let me ask my manager whether there is any pricing flexibility for the public sector.',
            rationale: 'You have a real trade-in and reached for "let me ask my manager" instead. It causes delay and shows you do not know your own tools.' }
        ]
      },
      {
        id: 'close',
        title: 'Match Her Timing',
        instruction: 'She likes the case, but says her budget is frozen until Q1. How do you close?',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Q1 gives us time. Let us confirm the trade-in now, and I will prepare a quote and a one-page cost case.',
            rationale: 'You accepted the timing, made the wait useful, and gave her exactly what her process needs — with a reason to act now.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'No problem — I will prepare a full proposal with the cost case and trade-in for your Q1 submission.',
            rationale: 'Solid and helpful — you make her submission easier. A specific follow-up date would make it even stronger.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Understood — I will call you again sometime in January, once your budget is open again.',
            rationale: 'You built a strong case and then walked away for two months with no action in between. This is how live deals quietly die.' }
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
    personaId: 'liam-chen',
    description: 'Liam treats this as a platform comparison. Your job is to move him away from features and onto the business problem he has not yet connected.',
    context: 'Liam is in the middle of an evaluation and has already seen Azure IoT Hub and MindSphere. If you answer "what is different?" with features, you lose. The skill is to move him to the business problem he has not measured.',
    yourRole: 'E+H Sales Coordinator — competing in a formal evaluation',
    knownGoingIn: [
      'Digital Transformation Lead at a pharma/food maker, evaluating IIoT platforms',
      'Already spoke with Microsoft (Azure IoT) and Siemens (MindSphere)',
      'Has instruments from several makers; sharp, technical, well prepared'
    ],
    objectives: [
      'Move from a feature comparison to the business problem',
      'Build the cost of finding an instrument failure too late (a GMP risk)',
      'Agree a proof of concept based on his own success criteria'
    ],
    customerOpening: 'I have already seen Azure IoT Hub and MindSphere, and I read your whitepaper. So please skip the overview. Tell me one thing Netilion can do that those two really cannot.',
    stages: [
      {
        id: 'open',
        title: 'The Opening Challenge',
        instruction: 'He wants a difference, right now. How do you respond?',
        choices: [
          { id: 'a', type: 'rapport', quality: 'excellent', points: 10,
            text: 'Instead of a general answer — what result are you personally responsible for delivering with this platform?',
            rationale: 'You refused the feature fight and moved to what he is measured on. A difference only matters when it is linked to his goals.' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'Honestly, it is instrument-level depth, not just connection. What is driving your evaluation?',
            rationale: 'A reasonable hint plus a question, but you led with a claim he will file as "another vendor difference".' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Shall I show why Netilion\'s depth — built on 200 years of measurement — beats both of them?',
            rationale: 'Company history as a question is still the empty answer he warned about. A buyer who researched two rivals will stop listening.' }
        ]
      },
      {
        id: 'reframe',
        title: 'Change the Question',
        instruction: 'He says: "Azure takes in any device over OPC UA. Connection is solved. What else do you have?"',
        choices: [
          { id: 'a', type: 'problem', quality: 'excellent', points: 10,
            text: 'Agreed, connection is the basic part. Today, how do you find out an instrument has drifted before it affects a batch?',
            rationale: 'You agreed with him (no argument) and moved to the real gap. This is the question that uncovers the hidden problem behind the features.' },
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
        instruction: 'He admits: "Usually we catch it later — a process symptom, a failed sample. Then we trace it back."',
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
        instruction: 'He pushes: "But if this only works with E+H devices, it is not acceptable. We also run Yokogawa and ABB."',
        choices: [
          { id: 'a', type: 'problem', quality: 'excellent', points: 10,
            text: 'Honest answer — gateways connect them, but the deep health data is richer on E+H. What is your actual mix?',
            rationale: 'Honesty plus a question. Admitting the limit builds trust with a sharp buyer, and the mix tells you how much it matters.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'Other makers connect through our FieldEdge gateway — it is strongest on E+H, but it handles the others too.',
            rationale: 'True, but you skipped the depth limit he will test. He will find it later and wonder what else you left out.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Netilion works with almost any field device — many makers is a strong fit for us.',
            rationale: '"Almost any device" claims too much and hides the limit. With this buyer, the moment he tests it, you lose trust.' }
        ]
      },
      {
        id: 'needpayoff',
        title: 'Make It Matter',
        instruction: 'He is more interested now. How do you make the value clear?',
        choices: [
          { id: 'a', type: 'needpayoff', quality: 'excellent', points: 10,
            text: 'Seeing an instrument fail weeks before it reached a batch — what is that worth to your business case?',
            rationale: 'A value question that links the ability to his own goal — he states the value and the stakes himself, which lasts longest.' },
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
        instruction: 'He agrees: "Alright, I am open to a proof of concept. What would you suggest?"',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: '20 of your most critical instruments over 60 days — include 5 Yokogawa or ABB. You set the goals; we review first.',
            rationale: 'A proof built on HIS goals, with other makers included. Offering to test your weak point shows confidence and keeps his trust.' },
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
    personaId: 'rodrigo-mendez',
    description: 'Rodrigo blames the per-user price and wants to cancel. But the easy complaint may not be the real reason he wants to leave.',
    context: 'A renewal at risk. Rodrigo starts with a price complaint and a threat to cancel. If you defend the price, you lose; your job is to find out what is really behind the cancellation before you answer.',
    yourRole: 'E+H BDM — keeping a subscription that may be lost',
    knownGoingIn: [
      'Site Manager in upstream oil & gas; 6 months into a Netilion subscription',
      'Paying for 15 users; says only 3 actually log in',
      'Started the call ready to cancel, blaming the per-user price model'
    ],
    objectives: [
      'Find out why people stopped using it, before you defend anything',
      'Connect the real cause to a clear fix',
      'Explain the per-user value and take personal ownership of the fix'
    ],
    customerOpening: 'Thank you for the time — I always enjoy working with your team. But I have to be honest: we pay for 15 users and only three really log in. It is becoming hard for me to justify the renewal. Help me understand why I should.',
    stages: [
      {
        id: 'open',
        title: 'The Cancel Threat',
        instruction: 'He has gently raised cancelling. How do you respond?',
        choices: [
          { id: 'a', type: 'problem', quality: 'excellent', points: 10,
            text: 'Thank you for being open. Before I give reasons to stay — what happened with the twelve who stopped?',
            rationale: 'You did not defend the price — you looked for the cause, like a partner studying a failure. The real cause matters most here.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'I understand. Should we reduce to the seats you use, and raise the value on those?',
            rationale: 'Reasonable, and cutting seats is honest — but you jumped to solutions before knowing WHY people stopped using it.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Per-user is our standard model — let me see what pricing flexibility I can find for you.',
            rationale: 'You accepted his story that it is about price and reached for a discount. The real problem is not price, and "let me see" looks weak.' }
        ]
      },
      {
        id: 'diagnose',
        title: 'Look Deeper',
        instruction: 'He explains, frustrated: "There were too many alerts early on. The team switched them off. Then the dashboard did not match reality, so why log in?"',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'So two things broke. When it stopped matching reality — was that devices not reporting, or just too much noise?',
            rationale: 'You separated two different failures with a precise question — they need different fixes, and finding the real one saves the account.' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'Too many alerts is a common problem. How was the alert setup done when it first went live?',
            rationale: 'Right topic, and asking about the setup is relevant — but it slightly suggests the setup was done wrong, which is leading.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Too many alerts is common — shall I send you our guide on how to set up alerts well for your team?',
            rationale: 'Sending a guide to someone ready to cancel avoids the problem he raised. He needs you to fix it, not to read a document.' }
        ]
      },
      {
        id: 'connect',
        title: 'Connect to the Fix',
        instruction: 'He confirms: "It was the noise. Hundreds of alerts a day, nobody knew which ones mattered. That is when people stopped." Your move?',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'That is the real cause — Alarm Management does routing and filtering. Cut the noise a lot, and do 15 seats look different?',
            rationale: 'With the cause named, you link it to a real fix and re-frame the seat question around it — this turns "cancel" into "show me".' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'That is fixable — Alarm Management does smart routing and filtering, and I can personally help you set it all up.',
            rationale: 'Correct fix, well introduced, and offering help is right — it just does not re-frame the renewal as clearly.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'You can mute the low-priority signals device by device in settings — some work, but the noise drops.',
            rationale: 'For hundreds of instruments, doing it by hand is weeks of work — not a reason to stay. You missed the feature built for this.' }
        ]
      },
      {
        id: 'reframe',
        title: 'Explain Per-User',
        instruction: 'He pushes back: "Even if it is fixed — why per user? The devices do not change based on who watches. I should pay per asset."',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'In oil & gas, after a safety event, someone asks who accepted that alarm and when. Per-user gives that record. A concern for you?',
            rationale: 'A real, non-defensive reason tied to his world — then a question to check it lands. Much stronger than a general "teamwork" answer.' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'Per-user gives you accountability — knowing exactly who acted on the data, not just that it was watched.',
            rationale: 'The right idea, accountability, but said at a high level. Linking it to a real safety moment would make it feel real to him.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'It is our standard model everywhere — not obvious, I know, so I can offer a discount to make up for it.',
            rationale: 'You repeated that the model exists and offered a discount — but he is asking if the model fits, which a discount does not answer.' }
        ]
      },
      {
        id: 'commercial',
        title: 'The Commercial Lever',
        instruction: 'He softens: "Alright — if the noise is fixed, maybe it is worth continuing. But the cost must feel fair. What can you do?"',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Your deal runs through an NSP channel, so you already qualify for 20% off — let me confirm it is on your renewal.',
            rationale: 'You found a discount he is already owed (confirm, not give away) and tied cost to fixing usage — defending value while making price fair.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'There is a 20% NSP discount on your subscription — I will make sure it is applied to the renewal.',
            rationale: 'Correct and relevant — a little weaker because it sounds like a gift rather than a discount he already qualifies for.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'I can give a 15% loyalty discount for renewing — the most I can approve without asking my manager.',
            rationale: 'You invented a discount that does not match the real NSP programme — it is inaccurate and looks like closing for its own sake.' }
        ]
      },
      {
        id: 'close',
        title: 'Take Ownership',
        instruction: 'He is willing: "I will try — but I do not have time to manage this. Someone has to actually do it." Close it.',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'I will handle it myself — a session this week with your leads. If it is not working in 30 days, we review the seats.',
            rationale: 'You took personal ownership, offered a clear session with his people, and gave a real safety net — exactly what a near-cancel needs.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'I will ask our onboarding team to set up Alarm Management this week, plus a clear 30-day plan to bring the users back.',
            rationale: 'You took ownership and made a plan — but handing it to an "onboarding team" adds a step that can cause delay when he is close to leaving.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'I will mark you as a priority account so customer success calls this week — please do not cancel before then.',
            rationale: '"Please do not cancel" sounds desperate, and you passed him to a team he has not met. After all that work, it feels like you gave up.' }
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
    personaId: 'annika-sorensen',
    description: 'Annika is a loyal, careful customer in a friendly mood — she is not looking to buy anything. A sales pitch will make her step back; only real curiosity opens the door.',
    context: 'A relationship check-in. Annika likes her new Field Xpert tablets and is not looking for anything else. Your only way in is honest curiosity about how her team works — never a pitch.',
    yourRole: 'E+H BDM — cross-selling to a long-term, careful customer',
    knownGoingIn: [
      'Maintenance Lead, 10+ year E+H customer; just received 2 new Field Xpert tablets',
      'Has not used Netilion; careful, and does not like being sold to',
      'In a warm, friendly mood on a routine check-in'
    ],
    objectives: [
      'Find the data gap with curiosity, not a pitch',
      'Connect a past problem to predictive instrument health',
      'Offer a no-risk start (Netilion Plus), with no pressure'
    ],
    customerOpening: 'Good timing — the two new SMT70Bs arrived last week and the team loves them. Field Xpert has been one of our best purchases in years, honestly. So, how are things on your side?',
    stages: [
      {
        id: 'open',
        title: 'Start Without Pitching',
        instruction: 'She is warm and focused on the relationship. How do you start?',
        choices: [
          { id: 'a', type: 'problem', quality: 'excellent', points: 10,
            text: 'Glad to hear it! I am curious — when your technicians collect device data on Field Xpert, where does it go?',
            rationale: 'A short, warm reply, then an honest question that opens the data topic naturally. It feels like a check-in, not a setup.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'Great. With more Field Xpert units now, this is a good time to look at Netilion — it connects to them.',
            rationale: 'You moved to the product within 30 seconds — a careful buyer in a friendly mood quietly becomes more guarded.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Wonderful! We have been rolling out Netilion lately — shall I give you a quick overview now?',
            rationale: '"Shall I give you an overview" clearly shows you came with a plan to sell. She will feel sold to in the first minute.' }
        ]
      },
      {
        id: 'gap',
        title: 'The Data Gap',
        instruction: 'She says: "Mostly on the device. Someone exports it by hand if we need history. Not very organised." Your move?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'When a problem comes up suddenly, what is it like trying to rebuild that device\'s history?',
            rationale: 'A gentle question that points toward a real event — letting her tell the story, not you stating that the gap matters.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'What if all of that synced automatically to one central view, instead of exporting by hand?',
            rationale: 'A "what if" moves toward selling before she has felt the cost — she has not said the manual work actually hurts yet.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'That is exactly what Netilion fixes — it syncs Field Xpert data to a central history. Want to see it?',
            rationale: 'Straight to the pitch before she has any reason to care about central history — you skipped the part where she sees she needs it.' }
        ]
      },
      {
        id: 'incident',
        title: 'The Opening',
        instruction: 'She mentions: "Last year a Coriolis meter failed with no warning. Two days of downtime. That one still bothers me."',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'Two days in pulp production is very hard. Looking back, were there any strange signs in the readings before?',
            rationale: 'You respected the story, then asked a question that makes her think about missed early signs — the way in to predictive health, in her words.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'That is exactly what Netilion with Heartbeat prevents — it warns you before that kind of failure.',
            rationale: 'Right capability, but you jumped to the solution the moment she shared a painful memory — it feels like a sales move.' },
          { id: 'c', type: 'situation', quality: 'poor', points: 0,
            text: 'That is unfortunate. Did you run a full root-cause review of the failure afterwards?',
            rationale: 'A review question is a side-track — she gave you a real problem; explore whether monitoring would have caught it, do not ask for a report.' }
        ]
      },
      {
        id: 'realise',
        title: 'Let Her See It',
        instruction: 'She pauses: "Actually... the readings were unstable for weeks. We thought it was the process, not the meter. We saw it too late."',
        choices: [
          { id: 'a', type: 'needpayoff', quality: 'excellent', points: 10,
            text: 'If something had shown that as instrument health weeks earlier, would it have changed how this ended?',
            rationale: 'A value question — she says the worth of an early warning herself, tied to the exact problem that hurt her. Now Netilion answers her own need.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'That is the difference Heartbeat sees — instrument health, separate from process readings. You would have seen it early.',
            rationale: 'Accurate and well aimed, but getting her to say the value herself, with a question, would land more deeply.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'A common situation — shall I send examples from similar plants where Heartbeat caught it?',
            rationale: 'Examples are support material, not a reply to a personal story — it breaks the moment she just opened up to you.' }
        ]
      },
      {
        id: 'entry',
        title: 'The No-Risk Start',
        instruction: 'She is interested: "That is interesting. But the budget is tight — we just spent on the tablets." Your move?',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Those new SMT70Bs may qualify for Netilion Plus — a free year included. Do you have the order numbers?',
            rationale: 'A no-cost path that removes the budget worry, tied to a purchase she already made, with a clear next action. Good timing.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'Your tablet order may include a Netilion Plus coupon — a 12-month free subscription. Worth checking.',
            rationale: 'The right lever, but "may include" is uncertain — confirming it now would turn her interest into action.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'There is a free 30-day trial — you could sign up online and test it on a few devices.',
            rationale: 'A general trial is not the Netilion Plus benefit she probably already has from her tablet order — it shows you did not check her account.' }
        ]
      },
      {
        id: 'close',
        title: 'Close Without Pressure',
        instruction: 'She is open: "Alright, if there is no new cost, I would look at it. But nothing big — I do not have time for a large project." Close it.',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Nothing big — let us connect it to your Field Xpert on a couple of key meters, with you in control. Shall we?',
            rationale: 'You matched exactly what she asked for — small, low-risk, in her control. A careful buyer agrees to a small first step, not a big one.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'Of course — let me set up a short follow-up to activate Netilion Plus and walk you through it.',
            rationale: 'A reasonable, low-pressure next step — just less strong than offering a small, clear test on her key meters right now.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Great — I will prepare a proposal for a full Netilion rollout across your entire site, for you and your team to review.',
            rationale: 'She said nothing big — and you offered a full site rollout. Going too far breaks the trust and confirms her fear of being sold to.' }
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
    personaId: 'thomas-bauer',
    description: 'Thomas dislikes being moved off a permanent FieldCare licence. The objection is the pricing model — but that may not be the real issue.',
    context: 'E+H is moving FieldCare to a subscription model (3.0, with Netilion and tag-based pricing). Thomas starts annoyed about "renting software he already owns." If you defend the model, you lose — understand how he works before pricing comes up.',
    yourRole: 'E+H BDM — handling a change in the pricing model',
    knownGoingIn: [
      'Controls & Automation Manager at a specialty chemicals site',
      'Owns an older permanent FieldCare SFE500 desktop licence',
      'Started the call annoyed about being pushed toward a subscription'
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
        instruction: 'He says FieldCare runs on his engineering PC and "has always done the job." What do you ask?',
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
        instruction: 'He admits people sometimes have to come to his PC, "but it is manageable." How do you respond?',
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
        instruction: 'He has warmed up: "Alright — put that way, the model makes more sense. But I will not sign an open-ended deal." Close it.',
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
    title: 'The Multi-Site Case',
    subtitle: 'Earn a multi-year decision from a careful buyer',
    product: 'SAH70 Asset Health',
    productLine: 'netilion',
    difficulty: 'BDM',
    difficultyLabel: 'Business Dev. Manager',
    estimatedMinutes: 15,
    personaId: 'patricia-nowak',
    description: 'Patricia wants proof, not promises. She will not easily admit the cost of her reactive maintenance — you have to build it before a multi-site case can work.',
    context: 'An early call about Asset Health Monitoring (SAH70, on-premise, multi-user). Patricia is a reliability manager who reports uptime to the VP and has been let down by tools before. This is a multi-site, multi-year decision she will defend with data.',
    yourRole: 'E+H BDM — multi-site, multi-year asset health opportunity',
    knownGoingIn: [
      'Reliability Manager across several food & beverage plants',
      'Mostly reactive/scheduled maintenance, with some older condition tools',
      'Data-driven, careful with money, tired of "another monitoring dashboard"'
    ],
    objectives: [
      'Link to her uptime goal before you talk about features',
      'Build the real cost of reactive maintenance and a recent failure',
      'Offer one pilot site that can grow — not a big rollout at once'
    ],
    customerOpening: 'I will be honest, I get pitched a monitoring platform every few months and they all promise the world. I report uptime to my VP, so I care about results, not dashboards. What are we really talking about here?',
    stages: [
      {
        id: 'open',
        title: 'The Careful Opening',
        instruction: 'She is tired of "another dashboard." How do you start?',
        choices: [
          { id: 'a', type: 'rapport', quality: 'excellent', points: 10,
            text: 'Fair — I will not add to that. The uptime number you report to your VP: what is pushing it down today?',
            rationale: 'You stepped around the dashboard tiredness and linked to the number she is responsible for. Everything next connects to a goal she owns.' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'Understood — and where, across all your sites, would you say your reliability programme has its biggest gaps now?',
            rationale: 'A reasonable problem question, but wide — you ask her to find her own gaps. Linking it to her uptime number would be sharper.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'SAH70 is an on-premise asset-health platform with NE 107 signals across your site — shall I show you?',
            rationale: 'You became the dashboard pitch she warned about — features before context confirm her doubts in the first thirty seconds.' }
        ]
      },
      {
        id: 'probe',
        title: 'How She Finds Out',
        instruction: 'She says uptime is "mostly fine, but we get surprises." What do you ask?',
        choices: [
          { id: 'a', type: 'problem', quality: 'excellent', points: 10,
            text: 'Those surprises — how do you usually find out an asset is in trouble: before it fails, or after?',
            rationale: 'A question aimed at the reactive-versus-early gap, and it invites the failure story without you assuming there is one.' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'How many sites, and about how many critical assets are we talking about across the group?',
            rationale: 'Useful for sizing a multi-site deal, but a fact question — it maps the estate without showing what the surprises cost her.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'SAH70 gives early warnings, so those surprises mostly go away — worth a look?',
            rationale: 'You promised the result before she described the problem — "surprises go away" is exactly the over-promise she is tired of.' }
        ]
      },
      {
        id: 'develop',
        title: 'Build the Cost',
        instruction: 'She mentions a recent failure that "was not fun" but moves on quickly. How do you respond?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'When it failed, what did it actually cost you — the stoppage, the scrapped product, the rush to fix it?',
            rationale: 'You stayed on the painful event and opened up its full cost — this is where a reactive failure becomes a number she feels.' },
          { id: 'b', type: 'problem', quality: 'good', points: 5,
            text: 'How often would you say an unplanned failure like that one happens across all of your sites these days?',
            rationale: 'A good question to size how often it happens — adding the cost of one event would make it land harder than frequency alone.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'That is the classic case for condition monitoring — SAH70 catches that decline weeks earlier.',
            rationale: 'She gave you a real failure and you jumped to the product — she has not measured the cost, so the feature has nothing to connect to.' }
        ]
      },
      {
        id: 'quantify',
        title: 'Link It to the Goal',
        instruction: 'She agrees the failure was expensive and avoidable in hindsight. Where do you go next?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'If events like that are pulling down the uptime you report, what would catching half of them early do to it?',
            rationale: 'You link the failure cost straight to the goal she is judged on — she does the value math herself, against the number her VP sees.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'So a few of those a year is doing real damage to both uptime and budget.',
            rationale: 'A fair summary tied to two measures — a question that makes her weigh the goal impact herself would pull her further.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Let me send you some cost examples from other food and beverage makers who already use SAH70 successfully today.',
            rationale: 'You had the chance to build her own goal case and reached for other companies\' numbers — they cannot replace hers for a proof-driven buyer.' }
        ]
      },
      {
        id: 'needpayoff',
        title: 'The Data-Location Question',
        instruction: 'She warms, then asks: "And where does all this data live? We are careful about anything leaving our network."',
        choices: [
          { id: 'a', type: 'needpayoff', quality: 'excellent', points: 10,
            text: 'Good — SAH70 runs on-premise, so the data stays in your network. Would that clear the path inside your company?',
            rationale: 'You turned a possible objection into a strength and asked a value question that gets her to confirm the way forward herself.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'No concern there — SAH70 is an on-premise system, so the data stays on your own infrastructure.',
            rationale: 'Accurate and reassuring, and it removes the objection — a follow-up tied to her internal approval would turn relief into momentum.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'It syncs to the Netilion cloud, but it is encrypted and certified — there is nothing to worry about.',
            rationale: 'You contradicted SAH70\'s on-premise design and waved away a real data concern — "nothing to worry about" makes a careful buyer more worried.' }
        ]
      },
      {
        id: 'close',
        title: 'Size the Decision',
        instruction: 'She is interested but says: "A full group rollout is a big risk, and I have to justify every dollar." Close it.',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Then let us not risk the group — one site, your worst assets, goals you can defend to your VP. Prove it, then grow.',
            rationale: 'You matched her risk level exactly — one site, measured against her goals, in her control, growing only on proof. This is how careful decisions start.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'I would suggest a pilot at one site first, measured against your reliability goals, before any wider step.',
            rationale: 'The right idea — pilot before rollout, tied to her goals. Naming her hardest assets and her VP goals would make it even stronger.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'I will prepare a full multi-site rollout proposal, with all of the group-wide pricing worked out, ready for senior management.',
            rationale: 'She just called a group rollout a big risk she must defend dollar by dollar — and you offered exactly that. The easiest possible "no".' }
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
    personaId: 'jan-visser',
    description: 'Jan believes wireless is unreliable, and that the points he cannot cable are simply impossible to monitor. What he really needs is hidden under that belief.',
    context: 'A meeting about WirelessHART for an older refinery. Jan openly doubts that wireless is reliable or secure enough for the points that matter. Your way in is to move past the doubt and find what he really needs — before defending the technology.',
    yourRole: 'E+H BDM — wireless retrofit for an older plant, with FX/Netilion cross-sell',
    knownGoingIn: [
      'Maintenance & Reliability Engineer at an older refinery',
      'Monitors many points by manual rounds; adding cables is slow and costly',
      'Started the meeting doubting that wireless is reliable or secure enough'
    ],
    objectives: [
      'Find what he would monitor if cable cost were not a problem',
      'Build the risk hidden between manual checks',
      'Answer the reliability and security concern honestly, then offer a small pilot'
    ],
    customerOpening: 'I will listen, but let me say up front — this is a refinery. I am not convinced wireless is reliable or secure enough for the points that really matter to us. Convince me I am wrong.',
    stages: [
      {
        id: 'open',
        title: 'The Wireless Doubter',
        instruction: 'He doubts that wireless belongs in a refinery. How do you start?',
        choices: [
          { id: 'a', type: 'rapport', quality: 'excellent', points: 10,
            text: 'Healthy doubt — we will test it later. First: if cable cost and permits were free, what would you monitor?',
            rationale: 'You set the objection aside and asked the question that brings out the monitoring he gave up on. Handle reliability after he wants the result.' },
          { id: 'b', type: 'situation', quality: 'good', points: 5,
            text: 'Fair. WirelessHART has a 10-year track record in plants like yours — how many points do you check by hand?',
            rationale: 'The reassurance is fine and the question is reasonable, but it is a fact question — the "if cost were free" angle opens the real need faster.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Let me reassure you — the SWA50 uses AES-128 encryption and self-healing mesh, so reliability is fine.',
            rationale: 'You defended the technology before knowing what he would use it for — now you are arguing specs with a doubter, not finding a need.' }
        ]
      },
      {
        id: 'probe',
        title: 'The Manual Rounds',
        instruction: 'He mentions points the team checks by hand because cabling them "was never worth it." What do you ask?',
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
        instruction: 'He names a few points and says they are "fine, we check them on rounds." How do you respond?',
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
        instruction: 'He goes quiet, then admits a missed signal between rounds is "the thing that worries me most." Where do you go?',
        choices: [
          { id: 'a', type: 'implication', quality: 'excellent', points: 10,
            text: 'In a hazardous area, worst case if one drifts unseen — and what is cabling them quoted at?',
            rationale: 'You build both the safety risk and the cost of the usual fix — the contrast makes wireless look like the practical way out.' },
          { id: 'b', type: 'implication', quality: 'good', points: 5,
            text: 'So the points you most want to cover are exactly the ones hardest to justify cabling for.',
            rationale: 'A sharp summary of the difficult situation he lives with — a question about the safety risk or the cable quote would deepen it more.' },
          { id: 'c', type: 'situation', quality: 'poor', points: 0,
            text: 'I understand — and which HART version do those field devices actually run on this site?',
            rationale: 'You moved to a technical detail just as he opened up about what worries him most — it breaks the moment and looks like you stopped listening.' }
        ]
      },
      {
        id: 'objection',
        title: 'Earn the Trust',
        instruction: 'Now he raises it directly: "Alright — but I still need to know wireless will not drop out or get hacked in a live plant."',
        choices: [
          { id: 'a', type: 'solution', quality: 'excellent', points: 10,
            text: 'Right to ask — AES-128 encryption, self-healing mesh, 10-year sensor life. Which one point should we prove it on?',
            rationale: 'You answered with facts he can check, then moved to a low-risk proof on his terms — reassurance plus a clear next step beats reassurance alone.' },
          { id: 'b', type: 'solution', quality: 'good', points: 5,
            text: 'Fair concerns — it uses AES-128 encryption and a self-healing mesh, with a strong record in refineries.',
            rationale: 'Accurate reassurance that answers both worries — it just stops short of turning the relief into action with a pilot offer.' },
          { id: 'c', type: 'solution', quality: 'poor', points: 0,
            text: 'Honestly, it is completely safe — we have never had a single reliability or security problem anywhere.',
            rationale: '"Completely safe" and "never a single problem" claim too much, and an experienced engineer will not believe it. Over-claiming costs you trust.' }
        ]
      },
      {
        id: 'close',
        title: 'Offer the Pilot',
        instruction: 'He is genuinely interested now: "Alright. If you can prove this on one point that worries me, I will take it seriously." Close it.',
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
  }
];
