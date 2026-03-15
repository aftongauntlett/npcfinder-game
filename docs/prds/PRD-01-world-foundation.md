# PRD-01: World Foundation

## Objective

Create the first playable environment slice: a calm outdoor world with visible land/water/trees, camera follow, and basic collision boundaries.

## Scope

- Create a single world scene in `src/scenes/`.
- Render a simple top-down environment representing:
  - walkable land
  - non-walkable water
  - non-walkable tree obstacles
- Add camera follow behavior and world bounds.
- Use placeholder/free prototype assets from `public/assets/`.

## Non-Goals

- No home decoration interactions yet.
- No friend visit logic.
- No backend calls.
- No polished HUD/menu.

## Technical Notes

- Keep tile/grid sizing explicit in centralized constants.
- Keep collision layer/object definitions clear for future expansion.
- Scene file should stay focused; split helpers if it approaches 200 lines.

## Acceptance Criteria

- Running `npm run dev` shows a visible world (not blank).
- Player has a clear walkable area (land).
- Water and trees block movement consistently.
- Camera follows player and does not leave world bounds.
- `npm run build` passes.

## Definition of Done

- PR merged with no out-of-scope systems.
- Any new mechanic assumptions documented in `docs/GAME-VISION.md` if needed.
