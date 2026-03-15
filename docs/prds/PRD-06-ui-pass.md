# PRD-06: UI Pass

## Objective

Add a minimal, cohesive UI layer after core world/home/decor/visit loops are stable.

## Scope

- Add minimal HUD labels for context (current location, owner/read-only state).
- Add small interaction hints for movement/decor actions.
- Add simple text treatment for locked state and transitions.
- Ensure UI does not obstruct core play area.

## Non-Goals

- No complex menu systems.
- No monetization, rewards, or pressure loops.
- No visual polish pass beyond functional clarity.

## Technical Notes

- Keep game UI components in `src/ui/`.
- Ensure UI state derives from scene/game state rather than duplicate sources.

## Acceptance Criteria

- Player can always tell where they are and whether they can edit.
- Core interactions are discoverable without guesswork.
- UI remains minimal and readable.
- No regressions to core systems from PRD-01 to PRD-05.
- `npm run build` passes.
