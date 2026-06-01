# E+H DS Sales Simulator

A browser-based training tool that helps Endress+Hauser Digital Solutions
salespeople (Sales Coordinators and Business Development Managers) practice
**realistic customer conversations** — and, above all, learn to **ask better
questions**.

**Live app:** https://billzhou-eh.github.io/sales-sim/

---

## About this application

Most sales training teaches people *what to say about the product*. This tool
trains the opposite, and more valuable, skill: **how to ask questions that
uncover what the customer actually needs — before proposing anything.**

In real B2B sales, customers rarely hand you their real problem. They have
**latent pain** — difficulties they have learned to live with and do not
volunteer. The job of a good salesperson is not to pitch features; it is to ask
the right questions, in the right order, so the customer discovers and voices
the cost of that pain themselves. Only then does a solution land.

### The intention: develop questioning skills

Every scenario is built around one core lesson:

> **Develop the problem with questions before you offer a solution.
> Pitch too early, and the customer goes cold.**

The simulator is grounded in two well-established sales methodologies:

- **SPIN Selling** (Neil Rackham) — progress from *Situation* → *Problem* →
  *Implication* → *Need-Payoff* questions. The highest-value, hardest skill is
  the **Implication question** (exploring what a problem costs or affects). The
  most common mistake is jumping straight from a hint of a problem to a pitch.
- **The Sandler Pain Funnel** — drill from the **surface** symptom, to the
  **business impact** the customer hasn't quantified, to the **personal stake**
  they rarely say out loud.

### How a scenario works

1. You meet a realistic customer persona (grounded in real E+H DS products,
   pain points and deals) who is **guarded and will not volunteer their problem**.
2. At each step you choose how to respond. Choices are written as real sales
   *moves* — a question, a reframe, or a pitch — and each is tagged by type
   (Problem / Implication / Need-Payoff / etc.).
3. The customer reacts in character: a strong question makes them open up; a
   premature pitch makes them cool off. **No score is shown during play** — you
   judge from their reaction, just like a real call.
4. At the end you get a grade, a breakdown of every decision, and short
   coaching: your **strongest move**, your **biggest miss**, and one thing to
   **try next**.

The design deliberately removes "tells" so you can't game it: choice order is
shuffled, the three options are similar in length, and questions appear across
all quality levels — so you have to judge the *quality* of a move, not its shape.

### Two ways to run it

- **Offline mode (default)** — works immediately with **no API key and no
  internet to an AI service**. The customer uses realistic pre-written replies.
  Designed so it runs behind a corporate firewall.
- **Live AI mode** — the customer's replies are generated live by an AI model
  (via Groq), so the conversation adapts to your exact wording and varies each
  time. Requires an API key and network access to the AI service. If a live
  call fails (e.g. blocked by a firewall), the app falls back to scripted
  replies so the session never breaks.

### Who it's for

E+H DS Sales Coordinators and Business Development Managers. Scenarios are
labelled **SC** or **BDM** by difficulty, and cover Field Xpert, Netilion,
FieldCare 3.0, on-premise Asset Health (SAH70) and WirelessHART.

---

## Running it

It is a single static site — no build step, no Node.js required.

- **Use the hosted version:** open the live app link above.
- **Run locally:** open `index.html` in a browser, or serve the folder
  (a PowerShell static server, `server.ps1`, is included for local preview).

**Project layout**

```
index.html              Full app (React via CDN, all UI components)
data/personas.js        Customer personas + their hidden ("latent") pain
data/scenarios.js       The 8 scenarios: stages, choices, scoring, coaching notes
data/offline-replies.js Pre-written customer replies for Offline mode
lib/scoring.js          Grades, colours, question-type labels
lib/prompts.js          AI system prompt + coaching prompt builders
server.ps1              Optional local static file server
```

---

## Versioning

This project uses **semantic versioning** — `MAJOR.MINOR.PATCH`:

- **MAJOR** — large changes to how the simulator works or is delivered.
- **MINOR** — new scenarios or notable features.
- **PATCH** — content fixes, wording, and small improvements.

### Current version: **1.0.0** (2026-06-01)

First complete release.

- 8 scenarios across Field Xpert, Netilion, FieldCare 3.0, SAH70 and WirelessHART.
- Discovery-skills model (SPIN + Sandler): personas withhold latent pain;
  scored on question quality; end-of-scenario coaching.
- Hybrid **Offline / Live AI** mode (runs behind corporate firewalls; Offline
  needs no API key), with graceful fallback if a live AI call fails.
- Plain, international English suited to non-native English speakers.
- Culturally-grounded personas (communication style matched to each persona's
  country).

### Version history

| Version | Highlights |
|--------|------------|
| **1.0.0** | First full release: hybrid Offline/Live-AI mode (firewall-friendly), public deployment on GitHub Pages, and Live-AI conversation-continuity fixes. |
| 0.4 | Added three scenarios — FieldCare 3.0, SAH70 Asset Health, WirelessHART retrofit (5 → 8 scenarios). |
| 0.3 | Discovery-skills redesign: latent-pain personas, question-type scoring, hidden in-play scoring, 3-line coaching, anti-guessing measures, plain-English rewrite, and culturally-grounded personas. |
| 0.2 | Switched the AI provider to Groq; UX, layout and colour fixes. |
| 0.1 | Initial prototype: 5 scenarios, AI-powered customer, scoring and coaching. |

---

*Built for the E+H DS MVA sales-enablement initiative. Scenario content is
grounded in the MVA knowledge base (personas, pain points, products and real
deals).*
