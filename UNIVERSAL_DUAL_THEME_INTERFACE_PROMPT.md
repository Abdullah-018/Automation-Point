# Universal Automation Point Light/Dark Theme Implementation Prompt

Copy everything inside the prompt block below and add it to any web, desktop, or application-development request. The implementation must adapt to the project's existing technology and component architecture.

---

## MASTER PROMPT

Act as a senior product designer and frontend/UI engineer. Implement a complete, production-ready dual-theme system for this application without changing, removing, or breaking its existing features, content, information architecture, routes, workflows, responsiveness, or business logic.

The interface must have two visually related modes:

1. **Light mode — Automation Point website palette:** bright, clean, precise, premium, and suitable for corporate prepress automation.
2. **Dark mode — Automation Point software palette:** deep navy/midnight surfaces with electric cyan and controlled royal-blue accents, suitable for a professional production dashboard.

Both modes must feel like two expressions of one brand. Do not merely invert colors. Recalculate surfaces, text, borders, shadows, gradients, icons, illustrations, controls, and every interaction state for the active mode.

### 1. Design principles

- Preserve the existing layout and functionality unless a small structural adjustment is essential for theme support.
- Use a clean, modern, technical, premium visual language with excellent legibility.
- Keep hue relationships consistent: navy provides authority, teal/cyan communicates automation and progress, pale aqua provides breathing space, and royal blue is reserved for selected or active states.
- Avoid random accent colors and visually unrelated combinations.
- Avoid purple-heavy gradients, beige, brown, muddy colors, flat black, harsh pure-white-on-black combinations, and decorative effects that reduce clarity.
- Use gradients sparingly, normally two or at most three harmonious stops from the same navy–blue–teal–cyan family.
- Keep typography, spacing, corner radii, and visual hierarchy consistent between modes.
- Do not invert photographs or brand logos with CSS filters. If a logo lacks sufficient contrast, place it on a subtle theme-aware protective surface or use an approved alternate asset.

### 2. Semantic theme architecture

First inspect the existing stack and use its native best practice. Prefer CSS custom properties at the root for web applications, or an equivalent centralized token/theme provider for other platforms. Components must consume semantic tokens; do not scatter hard-coded theme colors throughout individual components.

At minimum, define and use these semantic tokens in both modes:

```text
color-bg-canvas
color-bg-subtle
color-surface-1
color-surface-2
color-surface-elevated
color-surface-inverse
color-text-primary
color-text-secondary
color-text-muted
color-text-inverse
color-heading
color-accent
color-accent-hover
color-accent-active
color-accent-soft
color-border
color-border-strong
color-focus-ring
color-success
color-warning
color-danger
color-info
shadow-sm
shadow-md
shadow-lg
gradient-brand
gradient-hero
gradient-accent
```

Also centralize typography, spacing, radii, motion duration, and easing values where the project supports design tokens.

### 3. Light-mode color system

Use the current Automation Point website tone as the light-mode source:

```text
Canvas / primary background:       #FFFFFF
Subtle page background:            #F2F9FB
Soft aqua surface:                 #E7F4F6
Elevated surface:                  #FFFFFF
Primary navy / heading:            #082A4A
Primary body text:                 #15324B
Secondary / muted text:            #65798B
Primary teal accent:               #109B9D
Teal hover / pressed:              #087A7D
Soft border:                       #D9E7EA
Dark inverse surface:              #061F37 or #082F4D
Bright inverse accent:             #58D0D1
```

Recommended light gradients:

```text
Brand/hero soft: linear-gradient(145deg, #DFF2F4 0%, #F4FAFB 100%)
Premium inverse: linear-gradient(135deg, #061F37 0%, #082F4D 62%, #07545C 100%)
Accent button: linear-gradient(135deg, #109B9D 0%, #087A7D 100%)
```

Use navy headings, readable blue-grey copy, restrained teal interaction cues, pale aqua supporting sections, and soft blue-grey borders. Shadows should be cool and low-opacity, derived from navy rather than neutral black.

### 4. Dark-mode color system

Use this Automation Point dark software palette:

```text
Canvas / primary background:       #061423
Alternate canvas:                  #071827
Primary panel:                     #0B2238
Secondary panel:                   #0D263D
Input / recessed surface:          #071B2D
Elevated surface:                  #102C46
Primary text / heading:            #FFFFFF
Secondary soft-cyan text:          #BFEFFF
Muted blue-cyan text:              #7FB6C8
Primary electric cyan:             #25D4EA
Cyan alternate:                    #28D8EE
Active / selected royal blue:      #2F7CFF
Success:                           #18B878
Danger:                            #F04444
```

Derive dark borders from cyan/blue at controlled opacity. Use bright cyan only where attention or interaction is required. Use royal blue for active/selected states, not as a competing primary accent. Shadows should be deep navy with a subtle cyan ambient edge on focused or elevated elements; never use a heavy neon glow across the entire interface.

Recommended dark gradients:

```text
Canvas: linear-gradient(145deg, #061423 0%, #071827 55%, #082A3E 100%)
Panel emphasis: linear-gradient(145deg, #0B2238 0%, #0D263D 100%)
Accent button: linear-gradient(135deg, #25D4EA 0%, #159FB8 100%)
Selected state: linear-gradient(135deg, #2F7CFF 0%, #25D4EA 100%)
```

### 5. Theme-aware components

Apply the active tokens to every visible and interactive element, including:

- page canvas, headers, navigation, sidebars, footer, panels, cards, sections, dividers, and overlays;
- headings, body copy, metadata, links, labels, placeholders, captions, and disabled text;
- primary, secondary, ghost, destructive, success, icon-only, and disabled buttons;
- inputs, text areas, selects, checkboxes, radio buttons, switches, file pickers, validation messages, and focus states;
- tables, lists, pagination, tabs, accordions, tooltips, popovers, dropdowns, dialogs, toasts, and loading states;
- charts, diagrams, workflow arrows, legends, grids, badges, code blocks, scrollbars, empty states, and skeleton loaders;
- hover, pressed, active, selected, visited, invalid, success, warning, disabled, and keyboard-focus states.

Primary actions may use teal/cyan. Save/export/success actions may use green; delete/exit/destructive actions may use red. Use those colors only for their semantic purpose. Button labels must have sufficient contrast and must never clip.

### 6. Exact theme switch design

Create one compact pill-shaped switch matching the supplied visual reference:

- Overall control: approximately **86 × 44 px** on desktop, scalable for the interface, with a fully rounded `999px` pill radius and a minimum 44px touch target.
- Track: warm-neutral white to very light grey in light mode; deep navy panel tone in dark mode. Give it a fine theme-aware border, a soft outer shadow, and a very subtle inset shadow so it looks gently raised—not glassy or bulky.
- Divide the control visually into two equal icon zones without a visible center divider.
- Left icon: sun. Right icon: crescent moon.
- Active indicator: approximately **34 × 34 px**, perfectly circular, centered vertically, and translated between the two positions.
- In light mode, the active circle sits on the **left** and uses a refined amber gradient such as `#FFB43A → #E99A16`; the sun glyph is white. Amber is allowed only inside this switch as a universally understood light-mode status color.
- In dark mode, the active circle sits on the **right** and uses the brand dark-mode blue/cyan gradient such as `#2F7CFF → #25D4EA`; the moon glyph is white or very pale cyan.
- The inactive icon is muted grey-blue and remains clearly visible.
- Animate only the thumb position, icon emphasis, shadow, and track colors using **220–280ms** with a smooth `cubic-bezier(0.4, 0, 0.2, 1)` transition. No bounce, overshoot, rotation, or distracting effects.
- Implement it as an accessible button with `role="switch"`, an accurate `aria-checked` state, and an accessible name such as “Switch to dark mode” / “Switch to light mode”. Support mouse, touch, Enter, and Space.
- Add a visible `:focus-visible` ring with at least 3:1 UI contrast. Do not rely on color alone to communicate the current mode.
- Respect `prefers-reduced-motion`; when enabled, remove or greatly reduce the sliding animation.

### 7. Theme selection and persistence

- Apply the theme at the document/root level, preferably as `data-theme="light"` or `data-theme="dark"`.
- On first visit, use this priority: previously saved user choice → operating-system `prefers-color-scheme` → light mode fallback.
- Save the explicit selection in persistent local storage using a stable, namespaced key.
- Update the browser/platform `color-scheme` value and, where relevant, the theme-color metadata.
- Initialize the theme before the first visual paint to prevent a white or dark flash during page load and hydration.
- If the application runs in multiple open tabs, synchronize theme changes through the storage event where practical.
- If no explicit user choice exists, continue responding to operating-system theme changes.

### 8. Typography, geometry, and motion

- Use the project's existing font; otherwise prefer Inter, Segoe UI, or another clean sans-serif family.
- Maintain a readable hierarchy. Suggested section headings are 18–24px for application panels and responsive `clamp()` values for marketing pages.
- Do not use negative letter spacing for normal UI text. The Automation Point tagline may use controlled positive spacing.
- Use consistent panel radii of roughly 8–14px unless the product already has a defined radius scale.
- Preserve generous but efficient spacing. Text and controls must never overlap, clip, or escape their parent at any supported viewport.
- Use motion only to clarify state change. Keep most theme color transitions between 180 and 280ms and disable nonessential motion under `prefers-reduced-motion`.

### 9. Contrast and quality requirements

- Meet WCAG 2.2 AA: at least 4.5:1 contrast for normal text, 3:1 for large text and essential UI graphics, and a clearly visible keyboard focus indicator.
- Do not use muted text that becomes unreadable in either mode.
- Test both modes on mobile, tablet, and desktop, including long text, empty content, error states, loading states, and disabled controls.
- Check all gradients at their lightest and darkest points for readable foreground contrast.
- Avoid excessive borders. Use spacing, surface contrast, and restrained shadows to create hierarchy.
- Verify that charts and status colors remain distinguishable and do not depend on hue alone.

### 10. Required implementation output

After inspecting the project, implement and return:

1. the centralized light and dark semantic tokens;
2. a theme provider/controller appropriate to the existing stack;
3. the exact pill-style sun/moon switch described above;
4. pre-paint initialization and persistent preference handling;
5. all required component styling updates so no section remains in the wrong theme;
6. responsive and accessibility adjustments;
7. a concise list of files changed and a verification checklist.

Do not stop after creating the switch. The result is complete only when every relevant surface, component, content state, and interaction state follows the selected theme with a balanced Automation Point color tone.

## END MASTER PROMPT

---

## Optional project variables

When using the prompt, these can be added above it if a project needs tighter control:

```text
PROJECT NAME: [name]
TECH STACK: [auto-detect or specify]
THEME STORAGE KEY: [project-name]-theme
DEFAULT MODE: light
BRAND LOGO ASSET: [path]
DO NOT MODIFY: [business rules, APIs, routes, or named components]
```
