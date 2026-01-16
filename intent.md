# Design Intent: Narrative Image Carousel

## Purpose
To group a sequence of related images (4 or more) into a single narrative block that preserves the reading flow of the article, avoiding the "scroll fatigue" of vertical stacks.

## Visual Appearance (Collapsed State)
- **Overall Shape**: A single rectangular block that occupies the same width and visual weight as a standard blog post image.
- **Borders**: The outer perimeter of the block has rounded corners.
- **Internal Layout**:
  - Divided into two main sections.
  - **Left Side**: A single large image taking up the majority of the width (approx 3/4).
  - **Right Side**: A vertical stack of 3 smaller, equal-sized images taking up the remaining width.
- **Separation**: Images are separated by hairline thin gaps (barely visible).
- **Internal Corners**: Images inside the block have sharp corners where they meet the gaps; they do not have individual rounded corners. The block acts as a single cohesive unit.
- **The "More" Indicator**: The bottom-right image in the stack has a darkened overlay with a large text (e.g., "+3") indicating the remaining count.

## Interaction & Behavior (Expanded State)
- **Opening**: Clicking any image in the block triggers a smooth expansion (transition) into a focused viewer.
- **The Viewer (Lightbox)**:
  - **Background**: The page content dims behind the viewer (overlay). It does *not* turn completely black.
  - **Image**: The focused image floats in the center, occupying about 80-90% of the screen space.
- **Navigation**:
  - Users can move previous/next through the sequence.
  - Supported input methods:
    - On-screen arrow buttons.
    - Keyboard Arrow keys.
    - "Gamer" keys (WASD).
    - "Vim" keys (HJKL).
- **Closing**:
    - Clicking the "Close" button.
    - Clicking anywhere in the dimmed background area.
    - Pressing the Escape key.
    - Pressing the Browser Back button (returns to the closed state).
