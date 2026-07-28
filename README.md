# ApexFlow - Weekly Dev Summary

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
