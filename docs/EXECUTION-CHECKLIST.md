# Execution Checklist

Use this checklist before starting and finishing each PRD.

## Before Coding

- Confirm PRD scope and non-goals are clear.
- Confirm acceptance criteria are testable.
- Confirm file ownership boundaries:
  - `src/scenes/` for scene logic
  - `src/entities/` for entity classes
  - `src/ui/` for UI components
  - `src/lib/` for storage/helpers
- Confirm no backend dependencies (frontend + localStorage only for MVP).
- Confirm asset plan and naming conventions in advance.

## During Coding

- Keep each scene focused (flag for refactor if scene grows past ~200 lines).
- Implement only PRD scope; defer extras to later PRDs.
- Keep constants centralized (especially asset paths).
- Do not introduce competitive/monetized mechanics.

## Before Merge

- Verify all PRD acceptance criteria pass.
- Run `npm run build` successfully.
- Update docs if implementation changed behavior or assumptions.
- Add short notes in PR description: what changed, what is deferred, known gaps.
