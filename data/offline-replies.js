// Pre-written customer replies for OFFLINE mode (no API needed).
// Structure: OFFLINE_REPLIES[scenarioId][stageId][choiceId] = [reply variations]
// choiceId 'a' = excellent, 'b' = good, 'c' = poor (the app picks one at random for variety).
// Replies are in each persona's voice and reflect what the choice earns:
//   excellent -> the customer opens up / engages; poor -> stays guarded or pushes back.
// Plain, simple English for non-native speakers.

const OFFLINE_REPLIES = {
  'fx-discovery': {
    open: {
      a: ['Good. That is a better start than most. Ask away — we run maintenance across three production lines.',
          'Alright, that is fair. Go ahead — I would rather answer questions than hear a pitch.'],
      b: ['About five hundred instruments, three lines. HART, PROFIBUS, and some older Fieldbus. Why?',
          'Several hundred devices across three lines, mixed protocols. But you can read that on our website.'],
      c: ['That is exactly what I asked you not to do. I still do not know if we even need it.',
          'Please. I have heard the feature list before. What problem are you solving for me?']
    },
    probe: {
      a: ['When a device is not in the system, the technician stops and calls the office to find the driver. It breaks the flow.',
          'Honestly, setup is fine until they hit a device the tablet does not know. Then it slows right down.'],
      b: ['The protocols are mixed across all three lines. It is not tidy.',
          'A bit of everything, everywhere. The older Fieldbus devices are mostly on line two.'],
      c: ['Maybe. I would rather tell you our problems than have you guess them.',
          'You are guessing. Some days it is drivers, some days something else. Do not assume.']
    },
    develop: {
      a: ['Sometimes, yes. If the line is waiting on that device, it sits idle while they sort it out.',
          'It can. If it is a device the line depends on, people stand around until the driver is found.'],
      b: ['A few times a month, more in a bad week. I have not counted exactly.',
          'Often enough to be annoying. Two or three times a month at least.'],
      c: ['You are jumping ahead. I have not said this is big enough to buy anything.',
          'Maybe. But I am not ready to talk about your product yet.']
    },
    quantify: {
      a: ['An hour of a stopped line runs into the thousands. I do not have the exact figure here, but it hurts.',
          'A lot. We had two bad stoppages last quarter and the cost was significant. Downtime worries me most.'],
      b: ['It can, yes. A delay on one line pushes the planned work later in the week.',
          'Sometimes. The knock-on effect is real, but I had not connected it before.'],
      c: ['Spreadsheets, mostly. But we were talking about downtime — why change the subject?',
          'In files, here and there. You lost the thread, though.']
    },
    needpayoff: {
      a: ['If they never stopped for that? It would save real time and mean fewer surprises on the lines. That matters to me.',
          'Honestly, it would mean less rushing and fewer stoppages. That is worth quite a lot, actually.'],
      b: ['Yes, it adds up. I had not put it that way, but you are right.',
          'It is a load, I will admit that. Quietly it costs us more than I say.'],
      c: ['Slow down. I have not agreed to anything. Do not push me to a quote yet.',
          'We are not there yet. I dislike being closed before I am ready.']
    },
    close: {
      a: ['That I would agree to. Bring it, set up for our devices, and we will try it. Next week could work.',
          'Alright — if your technician sees it work on our actual devices, I am interested. Let us find a time.'],
      b: ['A trial unit could work. Set it up for our devices first and we will test it.',
          'The demo centre is far. A test unit on site would be better — send me details.'],
      c: ['I said I need to see it work, not read about it. A summary will just sit in my inbox.',
          'Documents do not convince me. I wanted to see it running.']
    }
  },

  'fx-objection': {
    open: {
      a: ['That is reasonable. Today the setup costs us time when drivers are missing — though I have not measured it properly.',
          'A fair approach. I will tell you what it costs us, though honestly I have not added it all up.'],
      b: ['Features are fine, but I decide on cost and evidence. Show me the value, then the price.',
          'I will listen to the features, but only if they connect to a number I can defend.'],
      c: ['You started with the price increase before giving me any reason. That is not convincing.',
          'A higher price and a feature sheet. The council will not approve on that.']
    },
    probe: {
      a: ['Then the technician calls the office or waits. It delays the round, sometimes by an hour or two.',
          'When the driver is missing, they lose time finding it. It happens on the maintenance rounds.'],
      b: ['Many things, I suppose. Cabling, access, the usual. You would need to be more specific.',
          'That is a broad question. They manage, mostly. What exactly are you looking for?'],
      c: ['You are assuming. We do have older devices, but do not tell me my own problems.',
          'Perhaps. I prefer you ask rather than guess about my site.']
    },
    develop: {
      a: ['It can take an hour or more. And while they are on it, the rest of the round waits.',
          'Long enough to matter. The work queued behind it does not get done on time.'],
      b: ['A few dozen times a year, I would estimate. I have not kept an exact count.',
          'It comes up regularly. I could not give you an exact number without checking.'],
      c: ['You are selling before I have agreed there is a real problem. Slow down.',
          'Features again. I have not said this justifies the spend.']
    },
    quantify: {
      a: ['Put in euros, the lost hours could approach the price difference. That is the kind of figure the council understands.',
          'In money terms, the lost time is not trivial. That is a calculation I could actually present.'],
      b: ['Perhaps. But "most of it" is not a number I can take to the council.',
          'It might. I would need the figure, not a general claim.'],
      c: ['Examples from other utilities are not my budget case. I need my own numbers.',
          'Case studies will not convince the council. They want our figures.']
    },
    needpayoff: {
      a: ['If that time went to planned maintenance, that would genuinely help us. And yes, we still have the old tablets.',
          'It would mean fewer rushed jobs. That has value. The old tablets are still in the cupboard, by the way.'],
      b: ['A trade-in could change the math. Check whether ours qualify.',
          'Twenty percent is meaningful. I would want it confirmed for our models.'],
      c: ['Asking your manager means delay. I expected you to know your own options.',
          'If you must escalate for every question, this will take forever.']
    },
    close: {
      a: ['That works for our timing. Prepare the quote and the one-page case, and confirm the trade-in. I can use that.',
          'Good. A quote and a short cost case for the council, ready for Q1. Send it.'],
      b: ['A written proposal is fine. Make sure the numbers are clear for the council.',
          'Send the full proposal. I will review it before the budget opens.'],
      c: ['January with nothing in between? The case will go cold. I expected more.',
          'If you simply call back later, this will lose momentum. Disappointing.']
    }
  },

  'netilion-intro': {
    open: {
      a: ['Fair question. I am responsible for proving this cuts unplanned downtime within eighteen months. That is the goal.',
          'Honestly? I have to show leadership a real reliability gain. That is what I am measured on.'],
      b: ['Instrument-level depth — at least that is specific. The evaluation is about replacing reactive maintenance.',
          'Depth, fine. What is driving it is a board mandate to modernise reliability.'],
      c: ['Two hundred years of history is exactly the answer I asked you to skip.',
          'Company heritage is not a feature. I have heard this from every vendor.']
    },
    reframe: {
      a: ['Today? We usually find out after the fact — a process symptom, a failed sample. Then we trace it back.',
          'Late, mostly. We notice downstream, not at the instrument. That is the honest answer.'],
      b: ['Heartbeat — I have read about it. But that is still a feature. Why does it matter operationally?',
          'Health from inside the instrument, yes. Convince me that changes an outcome.'],
      c: ['Instrument count is not the point, and you know I run other makers. This is going the wrong way.',
          'A number on a slide. I have Yokogawa and ABB too — so where does that leave me?']
    },
    develop: {
      a: ['A late catch in a regulated batch is expensive — scrapped product, a deviation report, audit exposure. That is the risk.',
          'In GMP, finding it late can mean a lost batch and a deviation. That is what keeps the quality team awake.'],
      b: ['The trace-back takes a day, sometimes more. It pulls people off other work.',
          'Hours, often a full shift. It is a drain, though not the worst part.'],
      c: ['"Solves it completely" — I do not believe absolute claims. And you have not let me feel the cost yet.',
          'A record is useful, but you went straight to the product. Too fast.']
    },
    multivendor: {
      a: ['That is an honest answer, which I appreciate. Roughly sixty percent E+H, the rest Yokogawa and ABB.',
          'Good — most vendors hide that. Our mix is mostly E+H, with a real share of others.'],
      b: ['It handles others, you say. But you skipped how much shallower it is. I will come back to that.',
          'Through a gateway, fine. I will want detail on the depth gap later.'],
      c: ['"Almost any device" is the kind of claim I will test and you will regret.',
          'That is overselling. The moment I check it, we both know what happens.']
    },
    needpayoff: {
      a: ['Seeing it weeks early would directly support the business case I owe leadership. That is worth a great deal.',
          'If I could show a failure caught weeks ahead, that is exactly the evidence my board wants.'],
      b: ['Trusting the measurement — yes, that is the real issue. You have framed it well.',
          'That is the right way to put it. The risk is trust, not connection.'],
      c: ['Pricing now, with an unprovable comparison? That lowers my confidence, not raises it.',
          'You broke the thread to talk price. And I cannot verify that MindSphere claim.']
    },
    close: {
      a: ['That is a serious proposal. Including the other makers shows confidence. Let us define the KPIs and start.',
          'Good — twenty instruments, my goals, other vendors included. That I can take to my team.'],
      b: ['A standard test is acceptable, though I would expect it tailored to my concerns.',
          'Sixty days, my criteria — fine. It feels a little generic, but workable.'],
      c: ['A self-service trial badly underestimates this. We have a real budget and a real process.',
          'Ten devices and a login? That is not serious for a decision this size.']
    }
  },

  'netilion-pricing': {
    open: {
      a: ['Thank you for asking that instead of defending. Honestly, the alerts overwhelmed them early on, and they switched off.',
          'I appreciate that. The truth is the team stopped because it became noise, not because of the price.'],
      b: ['Reducing seats is honest, I respect that. But I am not sure fewer seats fixes why they stopped.',
          'That is reasonable. Although, cutting seats treats the symptom, maybe not the cause.'],
      c: ['I did not really call about a discount. A lower price on something we do not use does not help me.',
          'A discount is kind, but it is not the issue. We are simply not getting value.']
    },
    diagnose: {
      a: ['It was the noise, mostly. The dashboard stopped feeling true once people muted everything.',
          'Both, but mainly the noise. Once they ignored alerts, nothing on the screen felt reliable.'],
      b: ['The setup was rushed, honestly. Nobody tuned it for our site.',
          'It was a quick install. Maybe that is part of it, yes.'],
      c: ['A guide is not what I need. My team will not read a document to save this.',
          'Please — not another PDF. I need this fixed, not homework.']
    },
    connect: {
      a: ['If you can genuinely cut that noise, then yes — fifteen seats starts to look reasonable again.',
          'Now that is interesting. Fix the noise and the value question changes for me.'],
      b: ['Alarm Management — alright. If you help set it up, I am willing to look again.',
          'That sounds like the right tool. I would want help, but it is promising.'],
      c: ['Device by device, by hand? My team does not have weeks for that.',
          'That is a lot of manual work. It would not survive my schedule.']
    },
    reframe: {
      a: ['That is a fair point — after an incident, knowing who acknowledged what matters here. Yes, auditability concerns us.',
          'In our work, accountability after a safety event is real. I had not thought of it that way.'],
      b: ['Accountability, alright. I understand the idea, even if it still feels abstract.',
          'Knowing who acted — yes, I see the logic, in principle.'],
      c: ['You repeated the model and offered a discount. I asked whether the model fits us.',
          'A discount does not answer my question, my friend. I asked about the principle.']
    },
    commercial: {
      a: ['I did not know we already qualified for that. Please confirm it — that helps the fairness a lot.',
          'If that discount is already ours, then yes, check it. That changes how this feels.'],
      b: ['Twenty percent helps. Make sure it is on the renewal.',
          'Good, apply it. That makes the number easier to accept.'],
      c: ['Fifteen percent... I am not sure that is the real programme. It feels improvised.',
          'That number does not match what I expected. Are you sure about it?']
    },
    close: {
      a: ['I like that you will do it yourself, and the thirty-day check is fair. Alright — let us try.',
          'That is the kind of partnership I value. A session with my leads, and a real review. Yes.'],
      b: ['An onboarding team, alright. Just make sure it does not get lost in a queue.',
          'A plan is good. I only worry about the handover slowing things down.'],
      c: ['"Please do not cancel" is not reassuring. And I have not met this team.',
          'Passing me to someone I do not know does not build my confidence, honestly.']
    }
  },

  'netilion-crosssell': {
    open: {
      a: ['Mostly it stays on the tablet, to be honest. Someone exports it by hand if we need the history.',
          'Good question. It lives on the device, really. We are not very organised about it.'],
      b: ['Netilion — I have heard the name. I am not really looking for new systems right now, though.',
          'Oh, you have something to sell. I was just enjoying the tablets, honestly.'],
      c: ['A quick overview... I would rather just catch up, if that is alright.',
          'It feels like you came with a plan. I am not really in buying mode.']
    },
    gap: {
      a: ['Rebuilding a device\'s history is slow. We dig through files. When something goes wrong suddenly, it is painful.',
          'Honestly, it is a scramble. We piece it together by hand, usually under pressure.'],
      b: ['A central view would be tidier, I suppose. Though we manage as we are.',
          'Automatic syncing sounds nice in theory. We have not really felt a need for it.'],
      c: ['You jumped to the product quickly. I have not said the manual way is a real problem.',
          'That is a sales answer. I was only describing how we work.']
    },
    incident: {
      a: ['Looking back, yes — the readings were unstable for weeks. We thought it was the process, not the meter.',
          'Now that you ask, there were strange signs. We just did not read them as a meter problem.'],
      b: ['Heartbeat, yes, I have seen the name. It was a hard two days, that failure.',
          'That is the sales answer again, but yes — it was very costly. It still bothers me.'],
      c: ['A post-mortem? We were too busy recovering to write a report. That is not really the point.',
          'We did not do a formal review. I was sharing what happened, not asking for paperwork.']
    },
    realise: {
      a: ['If something had flagged it as the meter, weeks earlier, that would have changed everything. We could have planned it.',
          'Honestly, an early warning like that would have saved us two days of downtime. That is a real thought.'],
      b: ['So it would have separated the meter from the process. I see. That would have helped.',
          'A flag weeks before — yes, I understand. That is a fair point.'],
      c: ['Case studies again. I just told you something that still bothers me, and you offer brochures.',
          'Examples from other plants do not really speak to what we went through.']
    },
    entry: {
      a: ['A free year with the tablets we already bought? That removes the budget worry. Let me find the order numbers.',
          'Oh — included with our order? That is much easier to justify. I have the numbers somewhere.'],
      b: ['A coupon, possibly. I would want that confirmed before I got excited.',
          'If it really comes free with the tablets, that is worth checking.'],
      c: ['A general trial... I rather thought we might already have something through the tablet purchase.',
          'A 30-day trial feels like you have not looked at our account.']
    },
    close: {
      a: ['A couple of key meters, with us in control? That I could agree to. Nothing big — set it up.',
          'If it is small and I stay in control, yes. Let us try it on a meter or two.'],
      b: ['A short follow-up is fine. Keep it light, please.',
          'Let us set a time. As long as it stays simple, I am open.'],
      c: ['A full site rollout? No — I said nothing heavy. That is too much.',
          'That is exactly the big project I wanted to avoid. Let us not.']
    }
  },

  'fieldcare-subscription': {
    open: {
      a: ['A sensible start. Fine — day to day, my team uses FieldCare on the engineering PC to configure and check devices.',
          'Good, you did not argue. Alright. We use it daily on one machine, mostly for device setup.'],
      b: ['Bundled value, perhaps. But I have not felt a problem that needs solving. So it sounds like marketing.',
          'Features again. Tell me what is broken first, then talk to me about value.'],
      c: ['"The industry is moving" is pressure, not a reason. I bought this software once already.',
          'Everyone is doing it is not an argument I accept. Convince me properly.']
    },
    probe: {
      a: ['They come to my machine, frankly. If I am not there, they wait. It is not ideal, I admit.',
          'Honestly, the data lives on my PC. Others have to come to me for it.'],
      b: ['Two engineering seats, a few hundred devices. It is growing.',
          'We manage a few hundred devices from two PCs. Why does that matter?'],
      c: ['You named the limit and the fix in one breath. I have not agreed it is a limit.',
          'There it is, the pitch. I was describing my setup, not asking for the product.']
    },
    develop: {
      a: ['When that PC is busy during a commissioning, yes, people wait on me. During an audit it is worse.',
          'If I am away, the work stops at my desk. I had not framed it as a real cost, but it is.'],
      b: ['Updates are manual, and honestly they lag. The library is not always current.',
          'Keeping versions current takes effort. It is a chore, I will say that.'],
      c: ['Again the feature. "Manageable" has not become "costly" for me yet.',
          'You are pushing the cloud before I have agreed there is a problem.']
    },
    quantify: {
      a: ['As we add devices, yes, the admin grows. And it does pull my engineers off better work. That is fair.',
          'It scales badly, you are right. The manual side quietly eats engineer time.'],
      b: ['The bigger we get, the more of this I carry. Quietly true, yes.',
          'It grows with the plant. I had not said it aloud, but it is a burden.'],
      c: ['Windows versions? We were discussing the cost of the manual work. Stay on topic.',
          'That is an odd detail to ask now. You lost the thread.']
    },
    needpayoff: {
      a: ['If any engineer could reach any device from anywhere, with a current library, that would free real time. I admit that is appealing.',
          'That would remove the bottleneck at my desk. Put that way, it is genuinely useful.'],
      b: ['So the cost is the engineer time, not the licence. Yes — that reframes it for me.',
          'You are right that the real cost is hidden in our hours, not the price.'],
      c: ['And there is the pricing question again. You pulled me straight back to the fight.',
          'Too soon. You undid the progress by jumping to a quote.']
    },
    close: {
      a: ['Pricing tied to my actual devices, and my settings move across? That answers my real fear. Let us map them.',
          'If it scales to what I have and I keep my configuration, I can consider it. Map my devices.'],
      b: ['A trial would let me judge it fairly. That is acceptable.',
          'Let my team feel it first. A trial is reasonable.'],
      c: ['A standard quote, after I said no open-ended deal? You reopened exactly what worried me.',
          'That is the open-ended commitment I refused. You were not listening.']
    }
  },

  'sah70-assethealth': {
    open: {
      a: ['That is a better question. What is hardest to keep under control is the instrument health status — it is visible per device, but nobody watches it consistently across a campaign.',
          'Fair. The thing I cannot keep under control is whether someone is actually looking at device health during a run. The status is there; the attention is not.'],
      b: ['Gaps? Probably how we follow up on device status. But that is a wide question to throw at me cold.',
          'We have gaps, yes. I would rather you be specific than ask me to audit my own process.'],
      c: ['And there it is — the platform pitch. This is exactly what I said I am tired of.',
          'NE 107 across my whole site. I have heard this exact slide from three vendors.']
    },
    probe: {
      a: ['Honestly? Often we find out at batch record review, not during the run. The status was there — nobody was watching it.',
          'Too often after the fact. The device sat in Maintenance Required and we caught it later, not in time to act.'],
      b: ['Around four hundred measurement devices feeding status. In theory the shift reviews it. In practice, not reliably.',
          'Several hundred instruments report health. Who reviews it? That is exactly the weak point.'],
      c: ['One dashboard for everything — that is the over-promise I do not believe.',
          'You promised the result before I described the problem. That is a red flag for me.']
    },
    develop: {
      a: ['When the audit found it? A deviation, an investigation, a CAPA, and the affected batch on quality hold while we assessed impact. Explaining that to my VP was the worst part.',
          'It cost us a deviation and a long investigation. The batch went on hold pending impact assessment. The paperwork and the questions from above were brutal.'],
      b: ['It has happened more than once. Enough that I cannot call it a one-off anymore.',
          'A handful of times. Each one is a deviation I have to defend.'],
      c: ['You jumped to the product. I have not put a cost on it yet, so that lands flat.',
          'Plant-wide visibility, sure. But you skipped the part where I feel the pain.']
    },
    quantify: {
      a: ['If a degraded instrument can sit unnoticed for weeks, the next audit is the real exposure — and that lands on my desk, in front of my VP.',
          'You are right to ask. One undetected case became a deviation and a CAPA. The next one is an audit finding I would have to own.'],
      b: ['A status that goes unwatched can reach audit level, yes — and my team is the one explaining it.',
          'It does reach compliance, true. I had not said it out loud quite like that.'],
      c: ['Other sites\' numbers are not mine. My VP wants our case, not a brochure.',
          'Case studies will not pass our review. I need evidence from our own line.']
    },
    needpayoff: {
      a: ['On-premise matters to us — nothing can leave the validated network. If the data stays inside, yes, that clears the path for my validation team.',
          'That it stays on our infrastructure is a real plus. It removes my biggest objection before validation even starts.'],
      b: ['On-premise, good. That settles the data-location question for now.',
          'Inside our own network. That is reassuring — the cloud question is what usually kills these for me.'],
      c: ['Cloud sync, but "nothing to worry about"? On a validated network that phrase worries me more, not less.',
          'You waved away a real GMP concern. That is not how you win a careful buyer.']
    },
    close: {
      a: ['One line, my highest-risk instruments, results I can show my VP, and grow only if it proves out. That is how I can defend it. Let us do it.',
          'A single-line proof I control, scaling on evidence? Yes. That I can take upstairs.'],
      b: ['A pilot first, tied to my compliance goals. That is the right shape.',
          'One line, measured properly, before anything wider. Agreed in principle.'],
      c: ['A full site rollout is exactly what I said I will not approve without proof. That is an easy no.',
          'You proposed the whole site. That is the fastest way to get a no from me.']
    }
  },

  'wirelesshart-retrofit': {
    open: {
      a: ['If cost were no object? I would monitor the hard-to-reach temperature and pressure points, and some corrosion sensors.',
          'Fair, we test later. Honestly — there are points I would love to watch that we simply cannot cable.'],
      b: ['Ten-year record, fine. We check maybe forty points by hand on the rounds.',
          'A track record is nice. We have a lot of points on manual rounds — too many, really.'],
      c: ['You are defending the technology before I have told you what I would use it for. That is backwards.',
          'Specs already? I asked you to convince me, not read me the datasheet.']
    },
    probe: {
      a: ['The corrosion points, mainly. And a couple of pressure points in spots that are hard to reach. Those matter.',
          'There are a few I would really want eyes on — the ones in awkward, hazardous spots.'],
      b: ['The rounds are every shift. Maybe forty points on a typical one.',
          'Once a shift, dozens of points. It is a long walk.'],
      c: ['You are telling me what it can do before I have said which points matter. Slow down.',
          'Clip it on, monitor everything — that is just noise to me right now.']
    },
    develop: {
      a: ['Between rounds? Honestly, if one started to drift, we would not know until the next check. That is the gap.',
          'Good question. If it drifts after a round, we are blind until someone walks past it again.'],
      b: ['Has one caught us out? Once or twice, yes. A round missed it and we paid for it.',
          'There was a case a round missed. It was not pleasant.'],
      c: ['You answered your own question with the product. Let me feel the problem first.',
          'That is the pitch. I have not agreed the gap is worth closing yet.']
    },
    quantify: {
      a: ['Worst case in a hazardous area is a safety or environmental incident. And cabling those points was quoted at a fortune.',
          'Honestly, the worst case worries me — a leak or worse. And cabling them costs a fortune, plus shutdown time.'],
      b: ['Yes — the points I want most are the ones impossible to justify cabling. That is the trap.',
          'Exactly the catch. The important points are the expensive ones to wire.'],
      c: ['HART version? I just told you what worries me and you ask about a spec. Listen.',
          'That is not the point. You changed the subject at the wrong moment.']
    },
    objection: {
      a: ['Encrypted, self-healing, ten-year battery — alright, those are real answers. One point? The corrosion sensor that worries me most.',
          'Good, concrete facts I can check. If you want one point to prove it — that hard-to-reach pressure point.'],
      b: ['Encryption and a mesh, fine. That answers the reliability worry, at least.',
          'Alright, that addresses the security and dropout concerns reasonably.'],
      c: ['"Completely safe, never a single problem" — nobody believes that. You just lost some trust.',
          'Bulletproof? No engineer believes that word. Do not oversell me.']
    },
    close: {
      a: ['One point, into Netilion so I see it live, and I judge it myself? Yes. Let us plan that.',
          'Fit it to that one point, let me watch it live, and I decide. That is fair. Plan it.'],
      b: ['A site visit to pick the points works. Let us arrange it.',
          'Come and look, find the best candidates. That is a reasonable start.'],
      c: ['The whole unit? I offered you one point. That is too much, too fast.',
          'You jumped to a plant-wide rollout. No — one point first, like I said.']
    }
  }
};
