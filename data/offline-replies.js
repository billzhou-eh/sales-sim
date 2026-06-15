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
          'You are moving too fast. I have not agreed there is a problem here.']
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
      a: ['Put in euros, the lost hours could approach the price difference. That is the kind of figure my finance director understands.',
          'In money terms, the lost time is not trivial. That is a calculation I could actually present.'],
      b: ['Perhaps. But "most of it" is not a number I can take to my finance director.',
          'It might. I would need the figure, not a general claim.'],
      c: ['Examples from similar chemical plants are not my budget case. I need my own numbers.',
          'Case studies will not convince my finance director. They want our figures.']
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
          'Good. A quote and a short cost case for my finance director, ready for Q1. Send it.'],
      b: ['A written proposal is fine. Make sure the numbers are clear for my finance director.',
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
      a: ['Yes. It was there. The NE 107 status had been showing Maintenance Required for three weeks. I saw it myself once. Then the alerts went quiet and nobody looked again.',
          'The data was in the system. I went back and checked after the failure. We just were not watching.'],
      b: ['Probably, yes. The readings were not normal. We should have been watching.',
          'That is the right question. Looking back — yes, the signal was there.'],
      c: ['You are making a sales point out of a failure I am still angry about. That is not right.',
          'I just told you about a €40,000 breakdown and you turned it into a feature list.']
    },
    reframe: {
      a: ['It means we could trust what the dashboard shows. Right now we do not. That is the real problem.',
          'That changes a lot, honestly. If the alerts meant something, the team would check. That is what I need.'],
      b: ['That may be true. But a statement is not the same as having it work.',
          'Alright. That is reassuring, in a careful way.'],
      c: ['You are moving too fast. I have not agreed to anything yet.',
          'Do not push the renewal before I have finished thinking.']
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
  },

  // ── NEW OFFLINE REPLIES: archetypes re-homed in new industries ────────────────

  'water-netilion': {
    open: {
      a: ['A fair approach. Our remote stations are on weekly rounds for the main ones, and less often for the smaller discharge points. What would you like to understand about them?',
          'That is a reasonable starting point. The main works is covered by SCADA, but the outlying pump and discharge stations are on manual rounds. What would you like to know?'],
      b: ['Eight remote stations in total. The critical permit parameters are ammonia at discharge and chlorine residual in distribution. The main plant is well covered — the remote stations less so.',
          'Eight stations, yes. Permit compliance is primarily around ammonia and turbidity at the effluent discharge points, and chlorine residual in distribution. The main plant is well instrumented; the remote stations are more limited.'],
      c: ['I appreciate the interest, but we already have a system in place. What specifically would this add for a utility our size?',
          'We have managed our monitoring programme for many years. I am not sure a new platform is what we need right now. What problem are you solving for us specifically?']
    },
    probe: {
      a: ['That is a precise question. At the remote discharge points, honestly, we would know in a few days if someone noticed something on the manual round. We do not have real-time visibility on those analysers.',
          'Between rounds, we would not know. The weekly round is the check. If a discharge analyser drifted on day two and the round was not until day five or six, we would not see it until then.'],
      b: ['Three of the remote stations are connected to the old SCADA — they report flow and level, but not the analytical parameters. The remaining five discharge stations are manual only.',
          'The SCADA covers the main works and the three largest pumping stations. The smaller discharge stations are manual. The analytical instruments at those points are not wired in.'],
      c: ['Our rounds schedule is designed around the risk level of each station. We review it regularly. Is this about the frequency of rounds, or something else?',
          'We have a structured maintenance programme. What are you suggesting is missing from our current approach?']
    },
    develop: {
      a: ['Yes — if a discharge analyser has drifted, we have to review the data from the period it may have been affected. Depending on how long it had been drifting, there is a window where the compliance picture is uncertain.',
          'That is correct. If we find drift and cannot confirm when it started, we have to treat the data from that period with caution. That means a compliance decision we would prefer to avoid.'],
      b: ['It happens two or three times a year across the network. Usually found on the round and corrected. I would call it manageable — though not ideal.',
          'Probably one or two drift events per year at the remote stations. Usually routine. Small corrections on the round, no major incidents — at least that is how we have handled it.'],
      c: ['We have managed this programme for a long time. I would not describe it as a significant problem. Is that the type of situation you are referring to?',
          'Remote instrument drift is a normal part of operating a distribution network. We have procedures for dealing with it. What specifically concerns you about our current approach?']
    },
    quantify: {
      a: ['The corrective action was straightforward. The public notification was more difficult. It had to go to the municipality and was published. The follow-up inspection came two months later. That took significant time from my team.',
          'We filed the report, notified the municipality, prepared a corrective action plan, and accepted an inspection from the regional authority. The public notification was uncomfortable for the utility.'],
      b: ['Yes, the report goes to the municipality and it is a matter of public record. It affects how the regulator views us — and how the municipal council views our operations.',
          'Any mandatory report to the environmental authority is visible to the municipality. We are a public utility. That kind of report is discussed at a level above my team.'],
      c: ['I appreciate your interest in our compliance picture, but those details are not something I discuss in initial meetings. Is there a specific technical point about your system you would like to cover?',
          'Our regulatory history is not something I share at this stage. Can we keep the discussion to what your solution can actually do?']
    },
    needpayoff: {
      a: ['It would change a great deal. If we had an alert before the level reached the permit limit, we could correct the instrument and redirect flow before any exceedance occurred. We would not be filing a report or under an inspection plan.',
          'An early warning would mean we act on the instrument, not on the consequence. We could prevent the exceedance rather than respond to it. That is a fundamentally different position to be in with the regulator.'],
      b: ['Corrective action plans, inspections, and public notifications are all manageable — but each one costs time and attention from a team that is already stretched. Fewer of them would be better.',
          'The inspection put us on a heightened compliance schedule for six months. The corrective action plan took significant effort. It is a record we would prefer not to have repeated.'],
      c: ['The benefit is clear in principle. My concern is whether a new monitoring layer would actually function reliably in a remote outdoor environment with limited connectivity.',
          'The concept is straightforward. My question is whether the system would work in practice for small discharge stations with limited infrastructure.']
    },
    close: {
      a: ['That is a reasonable starting point. The two or three discharge stations with the most permit exposure are the right places to begin. I would want to understand the connectivity requirements before we go further.',
          'A limited pilot on the highest-exposure stations makes sense. I would need to understand what the system needs from our infrastructure, and what the data handling requirements are for a public utility.'],
      b: ['A pilot on a few remote stations, with parameters aligned to our permit conditions, would be a reasonable first step. I would like to involve our compliance officer before we agree to anything.',
          'That kind of targeted start is the right approach for us. Let us be clear about data residency and access controls before we proceed — those are requirements, not preferences, for a public utility.'],
      c: ['Eight stations is a significant scope. I am not in a position to evaluate a proposal of that kind without a formal procurement process.',
          'A site-wide rollout is not a decision I could make at this stage. I would need much more information before any broader proposal reaches my management.']
    }
  },

  'fb-heartbeat': {
    open: {
      a: ['That is the right question to ask. Currently we have no systematic way to confirm a CCP instrument is still reading correctly between its monthly check. We rely on the schedule and on the HTST automated safety monitoring — but not on drift.',
          'Honestly, we cannot confirm it between checks. If a temperature transmitter at the hold section has drifted by 0.3 or 0.4 degrees, the HTST will not alarm on that. We will not find it until the next monthly check.'],
      b: ['We have four CCPs across the two lines — three temperature points at the hold sections and one flow meter for the hold time. They are on monthly calibration checks. Why do you ask?',
          'Two lines, four CCPs in total. Monthly calibration schedule, done by our internal metrology team. What is the relevance of the calibration frequency to what you are offering?'],
      c: ['What I need to understand first is whether this generates additional records my team has to manage. Every element we add to a HACCP programme must be justified. What records does this produce?',
          'Before I engage with a feature description, I need to understand what this requires from our food safety plan. Can you explain the basis for using this output as supporting evidence in a HACCP corrective action?']
    },
    probe: {
      a: ['Between checks, the only indication would be if the HTST automated divert valve triggered on a temperature drop below the critical limit. But that is a large deviation. A slow drift of half a degree would not trigger it. We would not see it.',
          'A slow drift between monthly checks would be invisible. The automated system protects against the critical limit breach in real time, but it is not designed to catch gradual drift over weeks.'],
      b: ['The monthly checks are done by our internal metrology team — we have an accredited calibration programme. They use a reference thermometer and a documented procedure.',
          'We use an external accredited calibration laboratory for the annual formal calibration and our internal metrology team for the monthly spot-checks. Both produce records that go into the HACCP file.'],
      c: ['We have a monthly schedule because that is the interval we validated in our HACCP plan. It has been accepted by our third-party auditors. Are you suggesting it is inadequate?',
          'The monthly programme meets our food safety plan requirements. What specifically do you believe is insufficient about it?']
    },
    develop: {
      a: ['Correct. If the calibration check finds the transmitter out of tolerance, we must review all product manufactured since the last good result. That is the HACCP corrective action — lot traceability review, assess whether the critical limit was met, and make a disposition decision.',
          'If an out-of-tolerance result is found, we treat all production since the last verified good result as potentially affected. We review the temperature records for each lot and decide: release, hold for further testing, or dispose.'],
      b: ['It has happened. A transmitter was found reading low at the monthly check. We reviewed five days of production. Two lots were held for disposition — one was tested and released, one was downgraded and sold at a lower price.',
          'Yes, it has happened. The lot review covers everything since the last confirmed good calibration. Depending on when the drift started, that can be a large scope.'],
      c: ['That is the procedure for any out-of-tolerance finding — it is standard HACCP corrective action. I am not sure what specifically about that process you are asking about.',
          'We handle out-of-tolerance results according to our HACCP corrective action procedure. What is your question?']
    },
    quantify: {
      a: ['Five days of production on one line. Two lots held for disposition — one released after additional testing, one downgraded. The commercial cost on the downgraded lot was real. The QA review and the testing were also resource-intensive.',
          'Two lots held, one downgraded. The commercial cost was significant. The QA team time was also considerable — the lot review, the testing, and the corrective action documentation all took time we could not spare.'],
      b: ['If the drift started early in the month, the review covers almost the whole month. That is the exposure — the earlier the drift, the larger the lot review scope.',
          'The earlier in the calibration interval the drift occurs, the larger the scope. If a transmitter drifts in week one of four, you are reviewing the entire month\'s production.'],
      c: ['Those details are internal. What I can say is that the consequence of an out-of-tolerance finding at a CCP is always significant — the scope of the lot review is the main variable.',
          'I have told you how the corrective action works. I am not going to share specific production or commercial details in this meeting. Can we move to what your system actually does?']
    },
    needpayoff: {
      a: ['It would have changed the disposition decision on the downgraded lot. If I had a dated pass result from day ten, I could have limited the review to the remaining twenty days — not the full month. The lot that was downgraded would likely have been released.',
          'A dated pass result mid-month limits the review window. The lot disposition is based on the worst-case interval since the last confirmed good result. Shorten that interval and you shrink the exposure significantly.'],
      b: ['The disposition cost and the QA team time were both real. Reducing the review scope — even by half — changes the commercial outcome and the resource requirement considerably.',
          'The two costs are the product disposition and the QA team time. If the review scope is reduced, both of those are lower. That is a straightforward calculation.'],
      c: ['In principle, a dated intermediate check would help narrow the review scope. My concern is whether this verification output would carry weight with a food safety auditor as supporting evidence in a HACCP corrective action file. Has it been tested in that context?',
          'The logic is clear. But the food safety plan must justify any evidence source we use. What is the validation status of this method under HACCP audit standards?']
    },
    close: {
      a: ['That is the right approach. A live demonstration on one of my CCP transmitters, process running, so I can see exactly what the report looks like and whether it would carry weight in a HACCP corrective action file. I am willing to see that.',
          'A demonstration on a live CCP instrument is what I need before I form any view. I want to see the report format, the traceability reference, and the pass criteria. If it meets the standard, I will tell you.'],
      b: ['One CCP transmitter, live, is a reasonable starting point. I would want to review the output format before agreeing to anything further. If it does not add to the HACCP evidence base, it adds no value for us.',
          'One transmitter, one CCP, with full transparency about what the result means. That is the level of proof I need before I recommend this to my plant manager or include it in the food safety plan.'],
      c: ['A full programme proposal is premature. I need to understand the technical basis first. Let us not get ahead of a conversation that has not properly started.',
          'I agreed to an initial meeting. A full proposal for both lines would require my management to be involved and a formal evaluation process. That is not where we are.']
    }
  },

  'power-heartbeat': {
    open: {
      a: ['That is a precise question. Between maintenance windows, we have no systematic view across all three transmitters. The median-select logic compensates for a single degrading leg — but we do not see which transmitter is degrading until the maintenance team checks it on shutdown.',
          'Exactly the right question. We monitor the drum level signal going to the controller, but not the health of each individual transmitter in the loop. If one is drifting, the logic hides it until the divergence becomes large enough to be visible.'],
      b: ['In-situ verification without removing the device is the concept I have been looking at. Tell me what the internal references are and how the method has been assessed. TÜV attestation is a start — I want to understand the diagnostic coverage specifically.',
          'Heartbeat Verification running in-situ is the part that caught my attention. But what I need to know is the diagnostic coverage — what percentage of failure modes does the method actually detect? That is the number that matters for a protection application.'],
      c: ['A certification and a reference count are not the same as a technical explanation. What is the diagnostic coverage for a DP-based drum level transmitter specifically? That is the number that matters.',
          '"Proven in thousands of plants" is a marketing claim, not a technical answer. I want to understand the failure modes the method covers and the ones it does not. That is a completely different question.']
    },
    probe: {
      a: ['In a three-transmitter median-select, one degrading transmitter pulls the median slightly but does not trip the logic immediately. The divergence has to reach a visible threshold in the DCS trend before anyone investigates the individual transmitter — and if they are not watching, it can stay hidden for a long time.',
          'The short answer is that the median-select would not show it — not until the divergence became significant. A transmitter degrading slowly can pull the median for weeks before the DCS trend makes it visible, if someone is looking at the right screen.'],
      b: ['During the maintenance window, we do a full calibration check against a reference standard and test the transmitter under simulated conditions. It is a complete check — but it is not continuous, and the interval can be six months or longer.',
          'The maintenance window check is a combination — calibration on the DP cells, electronics test, inspection of the condensate lines. Thorough, but only at planned outage frequency.'],
      c: ['That is exactly the diagnostic boundary I would focus on. What failure modes in a DP-based transmitter does Heartbeat actually cover? The coverage is the number I need before I can assess whether this is relevant for a protection loop.',
          'Continuous monitoring is interesting in principle. But I need to know what it monitors specifically — not the signal it reports, but the physical failure modes it can detect in a high-pressure, high-temperature drum level application.']
    },
    develop: {
      a: ['In our loop, a divergence beyond the voting threshold causes the protection logic to escalate. If the degraded transmitter\'s reading moves far enough from the median, the protection system interprets it as a genuine process condition and acts. In the worst case — a spurious trip.',
          'The protection logic is designed to act on what it sees. If a degraded transmitter gives a signal that diverges enough, the median-select will eventually be overridden by the protection setpoints. That can produce a spurious trip. It is a known failure mode in any redundant level protection loop.'],
      b: ['The closer a degraded transmitter gets to the trip setpoint before the maintenance window, the more likely the logic will see it as a genuine condition. A slow drift within that window, toward the protection setpoints during a production period, is the dangerous scenario.',
          'If a transmitter degrades close to the protection setpoints and nobody sees it between windows, the only indication is when the loop trips or when a shift engineer notices a trend anomaly. The second depends on someone watching the right screen.'],
      c: ['The failure mode analysis for this type of protection loop is well established. I would describe it as an accepted design trade-off, not a gap. The question is whether continuous diagnostics change that trade-off meaningfully.',
          'Protection system redundancy is designed to tolerate exactly this kind of single-transmitter degradation. I am not dismissing the concern — I am asking whether the Heartbeat diagnostic coverage actually adds something to what the median-select logic already handles.']
    },
    quantify: {
      a: ['A mid-size coal unit offline for 18 hours — at our output and grid contract, the lost generation cost is above €100k including restart. It goes straight into the fleet availability report and is reviewed at group level.',
          'The financial cost of that length of outage at our unit output is significant — I would not state the exact figure externally, but above €100k including restart costs. The availability impact is a separate matter — it affects our maintenance performance review at fleet level.'],
      b: ['Spurious trips at the fleet level are tracked carefully. Each one has to be analysed and the root cause documented. If it traces back to a transmitter health gap, that raises a question about whether the maintenance programme is adequate.',
          'Fleet availability is a headline KPI. A spurious trip that traces to an instrument health gap would raise a question about the maintenance programme — and that is not a conversation any I&C engineer wants to have with plant management.'],
      c: ['I am not going to quantify specific events in this meeting. The cost of a spurious trip from a protection loop fault is well understood in this industry. What I am evaluating is whether Heartbeat changes the probability of that event occurring.',
          'Protocol details on specific incidents are not for external discussion. What I can say is that a spurious trip on a unit this size has a significant direct cost and a fleet-level reporting consequence.']
    },
    needpayoff: {
      a: ['If the method is technically sound, the business case is straightforward. One avoided trip pays for a monitoring solution across the drum level loop several times over. The question is whether the diagnostic coverage is sufficient to actually prevent the degradation mode I have described.',
          'The financial case for avoiding one trip is clear. The harder question for my management is the technical case — specifically, what Heartbeat diagnostic coverage provides for DP-based transmitters in a drum level protection application. That is the foundation the business case needs.'],
      b: ['One avoided spurious trip justifies the investment. But "avoided" requires that the diagnostic method would have flagged the specific degradation mode before it reached the trip threshold. I need to verify that claim before I can make the case internally.',
          'The gap is real. The question I need to answer for my management is: does Heartbeat provide a signal that would have been visible before the loop divergence reached the trip setpoint? That is a specific technical claim I need to test.'],
      c: ['The concept is compelling in principle. But I will not build a business case on a claimed capability I have not tested. How do we verify that the Heartbeat output would have been useful in the specific degradation scenario I have described?',
          'The ROI logic is sound if the diagnostic capability is real. I do not take that on trust in a protection system context. What is the right way to test that claim on my actual transmitters?']
    },
    close: {
      a: ['That is an acceptable approach. One transmitter, I define the acceptance criteria, you explain exactly what the pass/fail result means and what it does not mean. If the output is technically defensible for a protection loop, I will build the case. If not, we stop there.',
          'I accept that. One transmitter, transparent explanation of the diagnostic coverage and the limitations, and I judge the result against my own criteria. That is the right starting point.'],
      b: ['A verification run on one transmitter with a full explanation of the output is a reasonable first step. I would want the result reviewed against the SIL documentation for this loop before I form a wider view.',
          'One transmitter, full transparency on the method and its limits. I will assess the output and decide whether it is technically defensible in a protection system context. That is all I can agree to at this stage.'],
      c: ['A rollout proposal for both units is premature. I have not evaluated the method yet. I would not take a proposal of that scope to my management without a tested technical basis.',
          'A site-wide proposal is not something I can respond to without a technical evaluation first. We have not established the diagnostic basis for this application. Let us not jump to a procurement decision.']
    }
  },

  'metals-netilion': {
    open: {
      a: ['Reactive. The shift team finds out from the assay or the grade trend. By then the drift has been running for days. The instrument is found, replaced, and we move on — but the recovery is already gone.',
          'The team finds out when the downstream numbers soften. We trace it back to the instrument, correct it, and carry on. The gap between the drift starting and the shift team connecting it to an instrument is the problem.'],
      b: ['Most of the critical instruments in the circuit are E+H. I know what NE 107 means. What I do not have is a central view of health across the circuit. Each instrument is checked individually on the maintenance schedule.',
          'We have Heartbeat-enabled devices on most of the critical flow and density points. NE 107 health status is visible locally, but nobody has a systematic view of it across the circuit.'],
      c: ['I appreciate the direct answer. The peer mention is the reason we are talking. What specifically does it do that is different from what my maintenance team already does on rounds?',
          'A cloud platform is not what I am looking for if it needs a specialist to maintain it. Tell me how this works in practice in a flotation environment — not the software architecture.']
    },
    probe: {
      a: ['Days. A slow drift does not trip any alarm — it moves the feed density reading gradually. The dosing system responds to what the instrument says. By the time the grade has moved enough to investigate, the drift has typically been running for five to ten days.',
          'The shift team notices when the grade softens in the assay — usually at the end of a shift or the following shift report. At that point, the drift could have been running for a week. Sometimes longer if it is gradual.'],
      b: ['Density meters take the most punishment from the slurry. Abrasion is worst at the highest solids concentration. Flow meters are second — liner wear mainly. Both fail faster than the maintenance interval suggests.',
          'Density first, then flow. The slurry in the flotation feed at this operation is aggressive. We replace density instruments reactively — the mean time before a drift event is much shorter than the official maintenance interval.'],
      c: ['Reactive maintenance is the model for most of the circuit. What would predictive monitoring require from my maintenance team in terms of daily workload? I do not want to add administrative burden for a marginal gain.',
          'Tell me more specifically — what does "catch drift early" mean in practice? Is this a daily alert that needs someone to respond, or is it something that flags only when there is a real problem?']
    },
    develop: {
      a: ['At the feed density range we operate, a drift of a few percent means the dosing system is delivering the wrong reagent mass. If the density reads high, the frother is overdosed and you lose selectivity. If it reads low, the collector is under-dosed. Either way, grade or recovery softens.',
          'The dosing control is set against the density reading. If that reading is off, the dose is off. At circuit scale, a small dosing error sustained over days adds up to a measurable recovery loss. The grade move is often subtle enough that the shift team attributes it to ore variability first.'],
      b: ['By the time we trace a grade softening to an instrument, the dosing correction window is gone. You cannot recover the reagent efficiency retrospectively. It is a revenue loss that has already happened.',
          'The consequence is irreversible once the shift is done. We correct the instrument and recalibrate the dosing model, but the ore that went through at the wrong dosing is already in the tailings or concentrated at the wrong grade.'],
      c: ['That is the operational reality. A drift event and a recovery correction are part of operating this kind of circuit. The question for me is how much this system reduces the frequency and duration of those events — and at what OPEX cost.',
          'The link between density drift and reagent dosing is well understood here. What I need to know is: how much earlier does this system flag a drift than my current rounds-based check? Give me a number I can compare.']
    },
    quantify: {
      a: ['At our PGM price and throughput, a 0.5% recovery drop for a full month is a number with several zeros. It is not the kind of loss you want to explain twice to the same general manager. I have explained it twice.',
          'The revenue impact of a half-point recovery drop at this scale is significant. The commercial case for preventing it is obvious once you put a number on it. What I need to know is whether this system reliably prevents it — or just reports after the fact.'],
      b: ['Yes, I have had to report it. The GM understands reagent chemistry is not exact science — but two events in 18 months where the root cause traced to an instrument that should have been flagged earlier is a different conversation.',
          'The monthly report is where it shows up. A recovery shortfall that traces to instrumentation looks like a maintenance programme failure. That is the conversation I need to avoid a third time.'],
      c: ['The commercial impact is real and I am aware of it. What I want to understand is the probability this system would actually flag a drift before it affects the grade — not the theoretical capability, but the practical detection time in a slurry abrasion environment.',
          'Give me a realistic number for detection time. In a circuit like this, with slurry abrasion as the primary failure mode, how many days earlier would this system flag a drift compared to my current rounds-based check?']
    },
    needpayoff: {
      a: ['Most of them. If I catch the drift two days in rather than ten days in, the dosing correction is minor and the recovery impact is small. The conversation with the GM does not happen. That is a clear improvement.',
          'If the early warning is reliable, those conversations stop. The recovery shortfall is small, the correction is routine, and the grade holds. That is what I am paying a maintenance programme to deliver — and it is not delivering it right now.'],
      b: ['Two avoidable recovery shortfalls per year, at the revenue impact I described — if this system prevents even one of them, the OPEX cost is justified. That is the calculation I would take to my management.',
          'The GM conversation is the visible cost. But the recovery loss is the real cost. Preventing two events a year at that revenue impact pays for a monitoring system several times over.'],
      c: ['The principle is clear. The risk I am evaluating is whether "only platform" means I am locked into a high-maintenance solution that creates a new dependency in the circuit. What is the ongoing support requirement?',
          'The commercial case is sound if the detection is reliable. My concern is operational continuity — if the platform goes down, does my maintenance team lose visibility entirely, or does the circuit continue to operate normally?']
    },
    close: {
      a: ['Three or four instruments in the feed, 30 days, I judge whether the early warning is real based on what I see in the health data versus what my team finds on rounds. If it catches something my team did not — we continue. If not, we stop.',
          'That is the right scope. Three or four critical instruments in the flotation feed, live health data, 30 days. I will compare it to my maintenance team\'s round data. If it adds genuine early warning, the OPEX case is straightforward.'],
      b: ['Density and flow in the feed stream, 30 days, I define success. If the early warning capability is real, the business case is simple. If not, we stop and I do not take it further.',
          'A trial on the critical feed instruments is the right starting point. I will set the success criteria: the system must flag a drift event before my team finds it on a round. That is the only result that justifies continuing.'],
      c: ['A site-wide proposal is not useful to me right now. I need to see it work on a small number of instruments first. A full proposal before a successful trial is not how I make decisions.',
          'ROI modelling from a supplier is not something I rely on for purchasing decisions. I would rather run the trial and measure the actual result against my own recovery data. That is the only model I trust.']
    }
  }
};
