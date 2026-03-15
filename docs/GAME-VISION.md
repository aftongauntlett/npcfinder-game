# Game Vision

## What This Is

A small, relaxing 2D social game embedded in npcfinder.com. Think Stardew Valley meets Neopets/Gaia Online — cozy, decorative, social, and low-pressure.

## What This Is Not

- Not competitive. No scores, no rankings, no timers that create stress.
- Not monetized. No currency, no ads, no paywalls.
- Not gamified in the traditional sense. No XP bars, no daily login rewards, no FOMO mechanics.

## Core Loop (MVP)

When a user joins, they are given a home. That home is theirs to decorate and personalize. They can visit the homes of other users. If two users are friends on npcfinder, the home is accessible. If not, it is locked.

The experience should feel like dropping into a neighbor's Animal Crossing island — calm, personal, expressive.

## MVP Scope

- Player home scene: a decoratable space the user owns
- Decoration system: place, move, and remove items in your home
- Visit system: navigate to a friend's home (read-only if not owner)
- Friend gate: non-friends see a locked state
- Character: a simple sprite the player can customize
- No backend in MVP — use localStorage to prototype state before Supabase integration

## Planned Mechanics (Post-MVP, order TBD)

- Farming / garden plot outside the home
- Cooking or crafting system
- Hobby systems (to be defined — fishing, foraging, etc.)
- Item gifting between friends
- Seasonal events or ambient world changes

## Aesthetic Direction

Stardew Valley-adjacent. Top-down 2D tile-based. Warm, cozy palette. Character and home customization are central — this should feel personal and expressive. Free asset packs during prototyping, commissioned original art later.

## Tech Stack

- Phaser 3
- Vite + TypeScript
- Supabase (future — auth, home state, friend graph)
- Deployed separately from npcfinder, embedded via iframe or subdomain

## Implementation Notes (Current)

- PRD-01 starts with a single outdoor world scene using placeholder assets in `public/assets/`.
- Initial interaction assumptions for prototyping: keyboard movement (`WASD` + arrow keys), camera follow, and collision blockers for water/trees.
- This is a foundation slice only; decoration, visit flow, and friend-gated access are handled in later PRDs.
