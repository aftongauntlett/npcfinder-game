This is a browser-based 2D social game built with Phaser 3 and Vite. It will be added to npcfinder.com as a standalone feature for existing users.

Rules for all agents working in this repo:

- This is a frontend-only game repo. Do not add backend code. Supabase integration comes later and will be scoped separately.
- Do not add scoring systems, leaderboards, currency, ads, or any gamification mechanic that creates pressure or competition.
- Do not add monetization of any kind.
- All game logic lives in src/scenes/, all entity classes in src/entities/, all UI in src/ui/, all Supabase/API helpers in src/lib/.
- Phaser scenes are the unit of navigation. New screens = new scenes.
- Do not modify vite.config.ts or tsconfig.json without being explicitly asked.
- Do not create files outside the established folder structure without proposing it first.
- Assets go in public/assets/. Do not hardcode asset paths outside of a central constants file.
- Keep scenes focused. If a scene file exceeds ~200 lines, flag it for refactoring before continuing.
- When adding a new mechanic or system, update docs/GAME-VISION.md to reflect it before implementing.
