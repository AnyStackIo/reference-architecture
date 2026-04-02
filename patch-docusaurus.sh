#!/usr/bin/env bash
set -euo pipefail

CFG="docusaurus.config.js"

if [[ ! -f "$CFG" ]]; then
  echo "ERROR: $CFG not found. Run this from the repo root (reference-architecture/)."
  exit 1
fi

echo "==> Backing up $CFG -> ${CFG}.bak"
cp -f "$CFG" "${CFG}.bak"

echo "==> Patching config using python3"
python3 - <<'PY'
import re
from pathlib import Path

cfg_path = Path("docusaurus.config.js")
s = cfg_path.read_text(encoding="utf-8")

navbar_re = re.compile(
    r'navbar:\s*\{\s*title:\s*["\']AnyStack["\']\s*,\s*items:\s*\[[\s\S]*?\]\s*,?\s*\}',
    re.MULTILINE,
)

replacement_navbar = (
    'navbar: {\n'
    '      title: "AnyStack",\n'
    '      items: [\n'
    '        { type: "doc", docId: "resources/architecture-diagrams", label: "Diagrams", position: "left" },\n'
    '        { type: "doc", docId: "intro", label: "Docs", position: "left" },\n'
    '        { href: "https://github.com/AnyStackIo/reference-architecture", label: "Repo", position: "right" },\n'
    '      ],\n'
    '    }'
)

if navbar_re.search(s):
    s = navbar_re.sub(replacement_navbar, s, count=1)
else:
    print("WARNING: Could not match navbar block; leaving it unchanged.")

# Remove deprecated top-level onBrokenMarkdownLinks if present
s = re.sub(r'^\s*onBrokenMarkdownLinks:\s*["\']\w+["\']\s*,\s*\n', '', s, flags=re.MULTILINE)

# Ensure markdown hooks exist
md_block_re = re.compile(r'markdown:\s*\{([\s\S]*?)\}\s*,', re.MULTILINE)
m = md_block_re.search(s)
if m:
    inner = m.group(1)
    if "hooks" not in inner:
        if re.search(r'mermaid:\s*true\s*,?', inner):
            inner2 = re.sub(
                r'(mermaid:\s*true\s*,?)',
                r'\1\n    hooks: {\n      onBrokenMarkdownLinks: "warn",\n    },',
                inner,
                count=1,
            )
        else:
            inner2 = '    mermaid: true,\n    hooks: {\n      onBrokenMarkdownLinks: "warn",\n    },\n' + inner
        s = s[:m.start()] + f"markdown: {{{inner2}}}," + s[m.end():]
    else:
        if "onBrokenMarkdownLinks" not in inner:
            inner2 = re.sub(
                r'hooks:\s*\{',
                'hooks: {\n      onBrokenMarkdownLinks: "warn",',
                inner,
                count=1,
            )
            s = s[:m.start()] + f"markdown: {{{inner2}}}," + s[m.end():]
else:
    # No markdown block; insert one after i18n if possible
    insert_re = re.compile(r'i18n:\s*\{[\s\S]*?\}\s*,', re.MULTILINE)
    ins = insert_re.search(s)
    md_insert = (
        '\n\n  markdown: {\n'
        '    mermaid: true,\n'
        '    hooks: {\n'
        '      onBrokenMarkdownLinks: "warn",\n'
        '    },\n'
        '  },\n'
    )
    if ins:
        s = s[:ins.end()] + md_insert + s[ins.end():]
    else:
        s = md_insert + s

cfg_path.write_text(s, encoding="utf-8")
print("Updated", cfg_path)
PY

echo "==> Ensuring Mermaid theme dependency is installed"
npm install --save @docusaurus/theme-mermaid

echo "==> Done. Backup saved at ${CFG}.bak"
echo "Next: npm run build"
