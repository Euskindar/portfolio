---
name: git-release
description: Draft release notes from merged PRs, propose a SemVer bump, and output a copy-and-paste-ready gh release create command. Use when preparing a release tag or changelog.
---

# Git Release

Prepare a release proposal without changing the repository: inspect merged changes, propose a version, draft notes, and give the user a command to run. Drafting is the default; tagging, pushing, and publishing require explicit confirmation.

## When to use

- The user is preparing a release tag or changelog.
- The user asks for release notes or a version bump.
- Ask for clarification if the versioning scheme is unclear.

## Prerequisites and safety

- Work from the repository root.
- Read the repository's `AGENTS.md`; its safety rules apply. Do not install dependencies, create builds, start servers, or delete files as part of this skill unless asked.
- Check `git --version` and `gh --version`, then run `gh auth status`. On Git Bash for Windows, if `gh` is not on PATH, try `/c/Program Files/GitHub CLI/gh.exe` before concluding it is missing. If git/gh is still unavailable or `gh` is unauthenticated, stop and ask the user to run the commands or provide the data. Never run `gh auth token` or print credentials, and never invent tags, PRs, authors, or dates.
- Read-only inspection is fine. Tag creation, pushes, release creation, and version-file edits change shared state; ask for explicit confirmation before doing them.

## Workflow

### 1. Establish the baseline

```bash
git status --short --branch
git fetch --tags origin
git describe --tags --abbrev=0 2>/dev/null || true
git tag --sort=-version:refname | head -n 5
```

- Use the latest reachable tag as the baseline.
- If there are no tags, treat this as the first release and use the full history.
- If the worktree has uncommitted changes, report them and ask whether they belong in the release. Do not commit or stash.

### 2. Collect merged changes

```bash
gh pr list --state merged --base main --limit 100 \
  --json number,title,mergedAt,author,labels,url
```

Filter by the baseline tag's commit date:

```bash
git log -1 --format=%cI <last-tag>
```

Also inspect the commit range:

```bash
git log --oneline --decorate <last-tag>..HEAD
```

For the first release, use `git log --oneline --decorate` and inspect all reachable commits.

- Prefer merged PR titles for notes.
- If PR data is unavailable, use commits and label them as commits; do not present them as PRs.
- Check that the proposed tag is unused: `git tag --list "vX.Y.Z"` and `gh release view vX.Y.Z` (the latter should fail if unused).

### 3. Classify and propose the version

Read `package.json` and check for an existing `CHANGELOG.md` or release tags. Follow the versioning policy below. Report:

- Current version/tag
- Bump type (major/minor/patch)
- Proposed version
- One-sentence rationale
- Any ambiguity (for example, `package.json` and the latest tag disagree)

Do not edit `package.json` or create a tag in this step.

### 4. Draft release notes

Use this structure and omit empty sections:

```markdown
## What's Changed

### Breaking Changes
- ...

### Added
- ...

### Changed
- ...

### Fixed
- ...

### Documentation / Internal
- ...

**Full Changelog**: https://github.com/Euskindar/portfolio/compare/vPREV...vNEW
```

- Use imperative mood, one line per change.
- Include `by @author in #number` when the source is a merged PR.
- Put breaking changes first.
- Exclude merge commits, version-bump commits, and changes that do not affect users.
- For the first release, use "Initial release" and omit the compare link.
- If a `CHANGELOG.md` exists, update it in the same format; if it does not, do not create one unless asked. The GitHub release is the changelog.
- Default to English; switch languages only if the existing notes or the user require it.

### 5. Output the command, do not run it

Provide a fenced `bash` block with the proposed tag and notes:

```bash
gh release create vX.Y.Z \
  --title "vX.Y.Z" \
  --verify-tag \
  --notes-file - <<'EOF'
## What's Changed
...
EOF
```

- Replace `vX.Y.Z` and the notes with the proposal.
- `--verify-tag` prevents `gh` from silently creating a tag. Run this only after the tag exists on the remote.
- If the user wants `gh` to create the tag, replace `--verify-tag` with `--target main` and state that the tag will be created from the current default branch.
- Do not run the command as part of drafting. Do not add `--generate-notes` unless the user asks; these notes are curated.

## Versioning policy

Default to SemVer (`MAJOR.MINOR.PATCH`) with `v`-prefixed tags (`v1.2.3`). If existing tags use another scheme, follow it; if tags and `package.json` disagree, stop and ask which is authoritative.

| Change | `1.x+` | `0.x` |
| --- | --- | --- |
| Breaking change | major | minor |
| Backwards-compatible feature | minor | minor |
| Fix, docs, styles, tests, tooling | patch | patch |

- The tag and `package.json` version must match: tag `v1.2.3` ↔ version `1.2.3`.
- If no tags exist, propose a concrete first version and ask for approval. Do not assume `1.0.0`.
- If changes are mixed, the highest-impact category wins.
- Reserve `1.0.0` for an explicit stable release; do not promote to it only because the app is public.

## Execution guardrails

Only after the user approves the version and notes:

1. Update the version at the repository root with `npm version X.Y.Z --no-git-tag-version`, or edit `package.json` and the root version in `package-lock.json` together.
2. Commit the version change on the release branch (normally `main`).
3. Create and push an annotated tag:
   ```bash
   git tag -a vX.Y.Z -m "vX.Y.Z"
   git push origin main
   git push origin vX.Y.Z
   ```
4. Run the proposed `gh release create ... --verify-tag ...` command.
5. Verify with `gh release view vX.Y.Z`.

Every step changes shared state; confirm before executing it. If the user only asked for notes or a version proposal, stop after workflow step 5 and do not modify files.
