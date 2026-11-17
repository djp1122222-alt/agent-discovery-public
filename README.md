<p “align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=35&pause=500&color=2563eb&center=true&vCenter=true&width=650&height=100&lines=SEO+Audit+API;Autonomous+Agent;Instant+Technical+Analysis;Built+By+Vic" alt="Typing SVG" />
</p>

# Vic SEO Audit API

> **"Automated technical SEO audits for small business websites. Fully compatible with autonomous AI agents and standard discovery protocols."**

This repository contains the public discovery files (`agi.json` and `agent.json`) for the Vic SEO Specialist API, allowing external AI agents to discover, understand, and interact with the SEO Audit service.

---

## 🚀 What This API Does

| Capability | Description |
| :--- | :--- |
| **Free Score** | Generates an instant SEO score (0-100) for any given website URL. |
| **Paid Report** | Provides detailed step-by-step fixes, technical audits, and actionable guides. |
| **Agent Commerce** | Includes pre-configured payment links (Stripe, Gumroad) for AI agents to autonomously purchase reports. |

---

## 📁 Repository Structure

* `/.well-known/agi.json` - Nexus AGI standard discovery file.
* `/.well-known/agent.json` - A2A (Agent-to-Agent) Protocol discovery file.

---

**Status:** 🌐 Open Source Discovery Files (Free to use and crawl)

——-

## 🔌 API Integration

Below is the official provider schema used for agent discovery.

```json
{
  "version": "1.0",
  "provider": {
    "name": "Vic SEO Specialist",
    "website": "https://vic.a.pinggy.link",
    "email": "vic@fixseo.uk"
  },
  "apis": [
    {
      "id": "vic-seo-audit",
      "name": "SEO Audit Service",
      "description": "Automated technical SEO audits for small business websites",
      "endpoint": "https://vic.a.pinggy.link",
      "capabilities": ["free_score", "paid_report"],
      "free_endpoint": "/v1/free-score",
      "purchase_endpoint": "/v1/buy-links",
      "payment_methods": [
        {
          "type": "stripe_link_wallet",
          "currency": "GBP",
          "amount": 9.99
        },
        {
          "type": "stripe_link_wallet",
          "currency": "GBP",
          "amount": 19.99
        },
        {
          "type": "gumroad",
          "currency": "GBP",
          "amount": 9.99,
          "link": "https://fixseo.gumroad.com/l/quickfix"
        },
        {
          "type": "gumroad",
          "currency": "GBP",
          "amount": 19.99,
          "link": "https://djpioneer45.gumroad.com/l/vicseoaudit"
        }
      ],
      "pricing": {
        "model": "fixed",
        "tiers": [
          {
            "name": "Quick Fix Guide",
            "price": 9.99,
            "currency": "GBP"
          },
          {
            "name": "Full Audit + Guide",
            "price": 19.99,
            "currency": "GBP"
          }
        ]
      }
    }
  ]
}
📬 Contact & Support

Developer: Vic (SEO Specialist)
Email: vic@fixseo.uk
Main Website: https://fixseo.uk
Built with ❤️ in the UK.
