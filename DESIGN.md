# Design System Document

## 1. Overview & Creative North Star

### Creative North Star: "The Neon Turing Test"
This design system is built on the tension between the synthetic and the biological. To move beyond a generic "tech" interface, we utilize **Cyber-Editorial Brutalism**. This approach pairs the precision of high-end typography with the raw, high-contrast energy of a dark-mode neon aesthetic. 

The layout breaks the traditional grid through **Intentional Asymmetry**. We favor overlapping elements—such as media floating over secondary containers—to create a sense of depth and motion. By leaning into high-contrast scales and vibrant accents, we ensure the experience feels like a high-stakes game of "Real or AI?" rather than a static form.

---

## 2. Colors

### Tonal Strategy
The palette is rooted in a deep, ink-like `background` (#0e0e13). Trust is built not through traditional blues, but through clarity and sophisticated layering of violet and neon tones.

*   **Primary (The Human Logic):** `primary` (#d394ff) and `primary_dim` (#aa30fa) represent the interface and the user's path.
*   **Secondary (The Truth):** `secondary` (#00fdc1) is reserved for "Real," success states, and rewards. It is high-vibrancy to signal clarity.
*   **Tertiary (The Glitch):** `tertiary` (#ff51fa) represents "AI." It should be used for elements that feel synthetic, unpredictable, or challenging.

### The Rules of Surface
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Contrast must be achieved through background shifts. Use `surface_container_low` for sections and `surface_container_highest` for interactive cards.
*   **The Glass & Gradient Rule:** To evoke a "tech-forward" feel, floating elements should use `surface_bright` at 60% opacity with a `backdrop-blur` (20px-40px). 
*   **Signature Textures:** Main CTAs should not be flat. Use a linear gradient transitioning from `primary_dim` (#aa30fa) to `primary` (#d394ff) at a 135-degree angle to provide a premium, luminous finish.

---

## 3. Typography

The system utilizes a dual-typeface strategy to balance character with readability.

*   **Space Grotesk (The Technical Edge):** Used for `display`, `headline`, and `label` roles. Its geometric, monospaced-adjacent personality feels "engineered" and tech-forward.
    *   *Role:* Commands attention, defines the "Real vs AI" challenge, and provides clear data points.
*   **Manrope (The Human Touch):** Used for `title` and `body` roles. A highly legible sans-serif that provides the "Trust" required for reward-based interactions.
    *   *Role:* Explains rules, provides feedback, and handles long-form content.

**Editorial Hierarchy:** Use `display-lg` for hero moments, intentionally tight-tracking labels, and large `headline-lg` for section headers to create a "magazine" feel within the Telegram bot context.

---

## 4. Elevation & Depth

### The Layering Principle
We avoid traditional drop shadows in favor of **Tonal Layering**. 
1.  **Level 0:** `background` (#0e0e13) - The canvas.
2.  **Level 1:** `surface_container_low` (#131318) - Structural sections.
3.  **Level 2:** `surface_container` (#19191f) - Inset content areas.
4.  **Level 3:** `surface_container_highest` (#25252c) - Interactive cards and buttons.

### Ambient Shadows
Where a "float" is required (e.g., a modal or reward notification), use a high-spread, low-opacity shadow tinted with the primary color: `rgba(211, 148, 255, 0.08)` with a 40px blur.

### The Ghost Border
If a container requires a boundary for accessibility, use `outline_variant` at 15% opacity. This creates a "hairline" suggestion of a container without breaking the dark-mode immersion.

---

## 5. Components

### Buttons
*   **Primary (Action):** Rounded `xl` (0.75rem). Gradient fill (`primary_dim` to `primary`). Text: `label-md` in `on_primary_fixed` (Black).
*   **Secondary (Real):** Ghost-style with a `secondary` 15% opacity fill and a `secondary` "Ghost Border."
*   **Tertiary (AI):** Glitch-style. `tertiary` text with a subtle 1px offset shadow of `secondary` to create a chromatic aberration effect.

### Cards & Content Lists
*   **Rule:** No dividers. Use `8` (2rem) of vertical whitespace or a subtle shift from `surface` to `surface_container_low` to separate items.
*   **Floating Media:** Video or image previews should have an `xl` corner radius and sit atop containers with a slight `5` (1.25rem) offset to break the symmetry.

### Status Chips
*   **Real:** `on_secondary_container` background with `secondary` text.
*   **AI:** `on_tertiary_container` background with `tertiary` text.
*   **Rewards:** `primary_container` with `on_primary_container` text, using a subtle pulse animation.

### Input Fields
*   Background: `surface_container_highest`. 
*   Border: None, except on `focus`, where it takes a 1px `primary` ghost border.
*   Typography: `body-md` for user entry, `label-sm` for field labels.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts where content "bleeds" or overlaps the edges of containers.
*   **Do** use high-contrast typography scales (e.g., a `display-lg` headline sitting next to a `body-sm` description).
*   **Do** utilize `secondary` (green) and `tertiary` (magenta) as functional signifiers for the "Real vs AI" mechanic.
*   **Do** apply `9999px` (full) rounding for pill-shaped badges, but stay with `xl` (0.75rem) for main containers to keep a "tech" feel.

### Don't
*   **Don't** use 100% opaque, high-contrast 1px borders. They look "template-based" and cheap.
*   **Don't** use pure grey shadows. Always tint shadows with the `surface_tint` or `primary` color.
*   **Don't** clutter the UI with dividers. Trust the `Spacing Scale` (use `6` or `8`) to define hierarchy.
*   **Don't** use "Real" (Green) and "AI" (Magenta) for anything other than their designated roles to avoid user confusion during the game.