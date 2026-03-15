# PRD-03: Home Scene Skeleton

## Objective

Establish scene-based navigation with a basic world-to-home flow and return path.

## Scope

- Add a dedicated home scene in `src/scenes/`.
- Implement simple transition trigger from world to home.
- Implement return trigger from home back to world.
- Add owner/read-only scene mode flag structure for future use.

## Non-Goals

- No decoration interactions yet.
- No friend gate logic yet.
- No polished transition effects required.

## Technical Notes

- Keep scene data contracts explicit (e.g., scene params for `ownerId`, `isOwner`).
- Keep navigation logic centralized to avoid hardcoded scene switching scattered around.

## Acceptance Criteria

- User can enter home scene from world.
- User can return to world scene.
- Scene mode flag is wired for future read-only behavior.
- No regressions in movement/collision from earlier PRDs.
- `npm run build` passes.
