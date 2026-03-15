# PRD-04: Decoration MVP

## Objective

Enable basic home personalization through placing, moving, and removing a small set of decor items.

## Scope

- Support at least 2 decor item types.
- Implement place/move/remove interactions in owner mode.
- Persist decor layout with `localStorage`.
- Load and restore layout on refresh.

## Non-Goals

- No backend or sync.
- No economy/currency.
- No large catalog UI.

## Technical Notes

- Keep data schema versioned in `src/lib/` for future migration to Supabase.
- Separate decoration state logic from scene rendering logic.

## Acceptance Criteria

- Owner can place, move, and remove decor items.
- Layout persists after page reload.
- Invalid placements are prevented (e.g., blocked areas/out of bounds).
- Read-only mode prevents editing actions.
- `npm run build` passes.
