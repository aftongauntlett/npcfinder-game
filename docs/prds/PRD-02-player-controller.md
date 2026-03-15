# PRD-02: Player Controller

## Objective

Add a controllable player character that can move smoothly in the world with clear idle/walk feedback.

## Scope

- Add player entity class in `src/entities/`.
- Implement 8-direction keyboard movement.
- Add idle and walk visual states (placeholder animations or frame swaps are fine).
- Integrate collision response with PRD-01 blockers.

## Non-Goals

- No character customization UI.
- No multiplayer/presence.
- No inventory systems.

## Technical Notes

- Keep movement constants centralized (speed, acceleration).
- Keep input handling isolated from scene setup where possible.

## Acceptance Criteria

- Player moves in all expected directions.
- Movement feels responsive and stops cleanly.
- Idle/walk state changes are visible.
- Player cannot pass through blocked tiles/objects.
- `npm run build` passes.
