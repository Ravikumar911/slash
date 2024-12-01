#!/bin/bash
components=(
  "https://magicui.design/r/marquee"
  "https://magicui.design/r/hero-video-dialog"
  "https://magicui.design/r/bento-grid"
  "https://magicui.design/r/animated-list"
  "https://magicui.design/r/dock"
  "https://magicui.design/r/globe"
  "https://magicui.design/r/tweet-card"
  "https://magicui.design/r/orbiting-circles"
  "https://magicui.design/r/avatar-circles"
  "https://magicui.design/r/interactive-icon-cloud"
  "https://magicui.design/r/animated-circular-progress-bar"
  "https://magicui.design/r/file-tree"
  "https://magicui.design/r/code-comparison"
  "https://magicui.design/r/safari"
  "https://magicui.design/r/iphone-15-pro"
  "https://magicui.design/r/animated-beam"
  "https://magicui.design/r/border-beam"
  "https://magicui.design/r/shine-border"
  "https://magicui.design/r/magic-card"
  "https://magicui.design/r/meteors"
  "https://magicui.design/r/neon-gradient-card"
  "https://magicui.design/r/confetti"
)

for component in "${components[@]}"; do
  npx shadcn@latest add "$component"
done
