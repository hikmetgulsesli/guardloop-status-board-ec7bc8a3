---
name: GuardLoop High-Density Utility
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2a1700'
  on-tertiary-container: '#b87500'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  gutter: 12px
  margin: 20px
---

## Brand & Style
The design system is engineered for operational efficiency and rapid data synthesis. It targets technical operators and system administrators who require a high-density, "at-a-glance" overview of system health. 

The aesthetic is **Corporate / Modern** with a lean toward **Functional Minimalism**. It prioritizes utility over decoration, utilizing a monochromatic foundation to allow status indicators to emerge with maximum visual prominence. The emotional response is one of reliability, precision, and calm control. All interface elements are designed to be compact to minimize vertical scrolling and maximize information density without sacrificing legibility.

## Colors
The palette is dominated by a range of neutral grays to establish a professional, low-fatigue environment. 

- **Primary**: A deep navy-slate (#0F172A) used for high-contrast text and primary actions.
- **Success (Ready)**: A vibrant Emerald Green (#10B981) specifically reserved for active, healthy, or "Ready" states.
- **Warning (Paused)**: A soft Amber (#F59E0B) for paused or intermediate states. 
- **Neutral/Disabled**: A mid-range slate (#64748B) for secondary information and inactive states.
- **Backgrounds**: Use a very light gray (#F8FAFC) for the application surface and pure white (#FFFFFF) for cards and containers to create subtle depth.
- **Borders**: A consistent, low-contrast stroke (#E2E8F0) is used to define boundaries without adding visual noise.

## Typography
The system uses **Inter** for all UI elements to ensure maximum legibility at small sizes. For technical data, IDs, and timestamps, **JetBrains Mono** is introduced to provide clear character differentiation (e.g., distinguishing '0' from 'O').

- **Headlines**: Kept compact (max 24px) to preserve vertical space.
- **Data Clarity**: Use `data-mono` for system metrics, IP addresses, and logs.
- **Hierarchy**: Use font weight (SemiBold 600) rather than size to denote importance, maintaining a tight baseline grid.
- **Labels**: Small, uppercase labels with slight letter spacing are used for table headers and category descriptors.

## Layout & Spacing
The layout follows a **Fluid Grid** model optimized for high-density dashboards. It utilizes a 12-column system that allows for flexible widget placement.

- **Density**: A tight 4px base unit is used. Standard padding for interactive elements is 8px (sm) to ensure they remain touch-friendly while staying compact.
- **Margins/Gutters**: Horizontal gutters are kept at 12px to maximize data columns across the screen.
- **Responsive Behavior**: 
  - **Desktop**: Full 12-column visibility.
  - **Tablet**: Transition to a 2-column stacked widget layout; sidebar collapses to icons.
  - **Mobile**: Single column flow. Typography scales down slightly, and horizontal scrolling is permitted for data tables to maintain data integrity.

## Elevation & Depth
This design system avoids heavy shadows to prevent visual clutter in data-dense views.

- **Low-Contrast Outlines**: Depth is primarily communicated through 1px borders (#E2E8F0).
- **Tonal Layers**: The main background is #F8FAFC. Active work surfaces (cards, table rows) are pure white. 
- **Subtle Hover States**: Interactive rows or cards should use a subtle background shift to #F1F5F9 on hover rather than an elevation increase.
- **Active Selection**: Use a 2px left-accent border in the primary color (#0F172A) to denote the currently selected item in a list or navigation menu.

## Shapes
The shape language is disciplined and geometric. 

- **Radius**: A standard 8px (0.5rem) radius is used for cards and primary containers. Smaller elements like buttons and input fields use a 4px (0.25rem) radius to maintain a precise, technical feel.
- **Status Indicators**: Status "dots" are perfect circles to differentiate them from interactive "chips" which use the standard small radius.

## Components
Consistent application of these components ensures the interface remains predictable.

- **Buttons**: Compact sizing. Primary buttons use a solid #0F172A fill. Secondary buttons use a 1px border with no fill. Vertical padding is constrained to 6px.
- **Status Chips**: Small, pill-shaped indicators. "Ready" uses a light green background (#DCFCE7) with dark green text (#166534). "Paused" uses a light amber background (#FEF3C7) with dark amber text (#92400E).
- **Data Tables**: Zero-border horizontal rows with 1px dividers. Use alternating row stripes (Zebra striping) in #F8FAFC for tables exceeding 10 rows to assist eye-tracking.
- **Input Fields**: Minimalist style with a 1px border. Focus state is indicated by a primary color border and a subtle 2px outer glow (0% blur).
- **Cards**: Used for grouping metrics. Should include a "Header" section with a bottom divider and a "Body" section for content. 
- **Micro-Indicators**: Use "Sparklines" (miniature, simplified line charts) within list items to show 24-hour trends without requiring full-page navigation.