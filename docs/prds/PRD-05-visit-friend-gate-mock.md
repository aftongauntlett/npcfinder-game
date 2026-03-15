# PRD-05: Visit + Friend Gate Mock

## Objective

Prototype the social visit flow using mocked friend relationships before backend integration.

## Scope

- Add mock friend graph data source in `src/lib/`.
- Implement visit target selection (minimal prototype control is fine).
- If visitor is a friend, allow entering target home in read-only mode.
- If not a friend, show locked state scene/panel.

## Non-Goals

- No real auth or backend friend graph.
- No messaging/chat.
- No complex profile UI.

## Technical Notes

- Keep access decision logic centralized and easily replaceable with Supabase later.
- Keep lock-state UI minimal and clear.

## Acceptance Criteria

- Mock friend case grants access to target home.
- Mock non-friend case shows locked state.
- Visited homes are read-only (no decor edits).
- Owner home remains editable.
- `npm run build` passes.
