<<<<<<< HEAD
﻿# ApexFlow - Weekly Dev Summary

## n8n + Claude API Workflow

### Setup Instructions (5 Steps)

#### 1. Prerequisites
- n8n instance (self-hosted or cloud)
- GitHub Personal Access Token
- Claude API Key
- Discord/Slack Webhook URL

#### 2. Import Workflow
1. Go to your n8n instance
2. Click "Import from File"
3. Select `workflow.json`

#### 3. Configure Variables
Update these variables in the "Set Variables" node:
- `github_repo`: Your GitHub repository (e.g., Scottcjn/Rustchain)
- `github_token`: Your GitHub Personal Access Token
- `claude_key`: Your Claude API Key
- `webhook_url`: Your Discord/Slack webhook URL
- `language`: EN or FR

#### 4. Activate Workflow
1. Click "Activate" in n8n
2. Workflow runs every Friday at 5pm

#### 5. Test
1. Click "Execute Workflow"
2. Check your Discord/Slack channel for the summary

### Output Example
📊 **Weekly Dev Summary for Scottcjn/Rustchain**

This week saw 15 commits, 8 issues closed, and 5 PRs merged.

Key contributions:
- Added fingerprint replay defense (#475)
- Fixed Windows miner path (#8031)
- Updated WHITEPAPER.md (#7892)

📈 **Stats:**
- Commits: 15
- Issues Closed: 8
- PRs Merged: 5
=======
# Claude Builders Bounty 🤖

> A community bounty board for Claude Code builders.

Building with Claude Code? Have tasks to delegate?
Want to get paid for contributing to AI projects?
You're in the right place.

---

## How it works

**To post a bounty**
1. Open a GitHub issue with a clear description and acceptance criteria
2. Comment `/opire create $XXX` in the issue to set the reward
3. Share the link — contributors will find it

**To claim a bounty**
1. Browse the open issues below
2. Comment `/opire try` in the issue you want to work on
3. Submit a PR — payment is automatic on merge ✅

---

## Active Bounties

| # | Task | Amount | Status |
|---|------|--------|--------|
| [#1](../../issues/1) | SKILL: Generate a CHANGELOG from git history | $50 | 🟢 Open |
| [#2](../../issues/2) | TEMPLATE: CLAUDE.md for a Next.js + SQLite project | $75 | 🟢 Open |
| [#3](../../issues/3) | HOOK: Block destructive bash commands in Claude Code | $100 | 🟢 Open |
| [#4](../../issues/4) | AGENT: PR reviewer with structured Markdown output | $150 | 🟢 Open |
| [#5](../../issues/5) | WORKFLOW: n8n + Claude API — automated weekly dev summary | $200 | 🟢 Open |

---

## Rules

- Tasks must be related to Claude Code or AI tooling
- Every issue must have clear acceptance criteria before a bounty is activated
- Payment is handled by [Opire](https://opire.dev) (Stripe)
- Quality over speed — a solid PR beats a fast one

---

## Community

- 🐦 X: [@ClaudeBounty](https://x.com/ClaudeBounty)
- 📧 Contact: claudebounty@gmail.com

---

*Started by the Claude builder community · March 2026 · MIT License*
>>>>>>> upstream/main
