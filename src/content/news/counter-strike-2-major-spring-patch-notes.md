---
title: "Counter-Strike 2 Spring Overhaul: Sub-Tick Buff, Mirage Rework & Anti-Cheat 3.0"
description: "Valve unleashes a massive 8.4 GB competitive update targeting sub-tick registration latency, smoke clipping glitches, and premier rating calculations."
pubDate: 2026-10-07T22:30:00.000Z
category: "Patch Notes"
thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
author: "Elena 'Rook' Rostova"
tags: ["CS2", "Valve", "Patch Notes", "Esports", "FPS"]
featured: false
readTime: "4 min read"
---

Valve has officially deployed the eagerly awaited **Spring Competitive Overhaul Update** for Counter-Strike 2. Weighing in at 8.4 GB, this patch delivers decisive fixes for community complaints regarding sub-tick packet timing, weapon spray predictability, and map collision exploits on de_mirage and de_inferno.

## Full Patch Notes: Release 1.40.2.8

### [ SUB-TICK & NETWORKING ]
* **Sub-Tick Input Synchronizer:** Reduced client-to-server command buffer latency by an average of 14ms across all regions.
* Improved interpolation smoothness during high-velocity peeks and rapid counter-strafing.
* Fixed an issue where first-bullet tracer animations did not align exactly with server-side hit registration under packet jitter conditions.
* Added network jitter mitigation option in the advanced video settings menu.

### [ WEAPONS & ECONOMY ]
* **M4A4:** Price reduced from $3,100 to $2,950 to create a genuine tactical trade-off with the M4A1-S ($2,900).
* **FAMAS:** Reduced horizontal recoil spread variance on the first 4 bullets by 12%.
* **HE Grenades:** Detonation shockwave now clears smoke clouds for 2.2 seconds (up from 1.8 seconds) to improve retake counter-play.
* **Incendiary & Molotov:** Visual flame heights standardized to eliminate one-way pixel visibility angles around bomb sites.

```
WEAPON BALANCE MATRIX:
- M4A4: $2,950 (Previously $3,100)
- M4A1-S: $2,900 (Unchanged)
- FAMAS: Recoil tight-grouping +12%
- Deagle: Reset accuracy recovery cooldown decreased by 0.08s
```

### [ MAPS: DE_MIRAGE & DE_INFERNO ]
* **Mirage:**
  * Replaced Palace balcony wooden railings with penetrable thin ply to standardize wallbang damage.
  * Sealed cosmetic ceiling gap above Connector stairs that allowed pixel surveillance into Underpass.
  * Adjusted lighting contrast across T-Ramps and Apartments to elevate model silhouette readability against dark backgrounds.
* **Inferno:**
  * Widened Banana choke point by 18 units to alleviate grenade clustering stalemates.
  * Smoothed out rooftop geometry near A-Site Pit to prevent dropped utility from sliding out of bounds.

### [ VAC LIVE ANTI-CHEAT ENGINE ]
* Integrated machine learning heuristics to identify non-human aim micro-adjustments and rapid rotational acceleration anomalies.
* Matches terminated due to VAC Live cancellations now award zero MMR penalty to unaffected players and instantly refund Premier rating deductions.

Competitive servers have transitioned to the new protocol version. Jump into Premier queue and experience the improved responsiveness firsthand!
