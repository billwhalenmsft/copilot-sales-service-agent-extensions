# Sales Extension Suite for Copilot

Reusable account briefs, meeting follow-up, deal coaching and team handoffs inside Microsoft 365 Copilot Cowork, alongside Microsoft's standard Sales plugin.

## Start here

- [Overview and fictional examples](index.html)
- [Download and install V2.1.3](install.html)
- [Release to your team](enablement.html)
- [All 137 included agents](catalog.html)
- [Test plan](test.html)
- [What this adds](compare.html)
- [Technical readiness](technical-reference.html)

Start with Seller Workflows and Account & Deals. V-Team Service and Admin Support are optional and still require host qualification. Owner testing was reported passed before final-name cleanup; final import and recipient access are separate checks. Copilot Studio is deferred. No production, Marketplace, universal CRM or ROI claim is made.

## Repository and deployment

This repository is the static website deployment source. Reviewed HTML, demo.js, assets and downloads are versioned here. GitHub Pages serves the root of main; changes go through a feature branch and pull request. No build-time service, credentials, analytics or private customer data are required. site-manifest.json inventories the release files; downloads/package-checksums.csv identifies the four ZIPs. A prepared manifest is not deployment evidence; use the merged commit, Pages build and live byte verification for publication status.

Keep existing approved legal pages/assets. Roll back by reviewing a revert of the release PR, not rewriting history. Do not put tokens, internal records or private feedback in this public repository.
