---
title: "Week 5: Interface Redesign and Appearance Customization"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.5. </b> "
---

### Week 5 Objectives:

* Redesign layouts and establish consistent presentation across Frontend screens.
* Add appearance controls and preserve and restore user preferences.
* Improve navigation, keyboard operation, and the experience on small screens.
* Check the interface, update design documentation, and complete handover.

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 4 | - Review the existing interface and update the design system using reference images.<br>&emsp; + Align colors, typography, glass surfaces, and shared appearance settings.<br>- Reorganize the event listing and navigation layout.<br>&emsp; + Introduce a horizontal header, retain role-based menus, and use card grids for administration lists and personal tickets.<br>- Redesign login and signup with separate introduction and form sections for desktop and mobile.<br>- Create layered SVG branding, icons, and artwork; add background petals, decorative motion, and Liquid Glass surfaces. | 28/10/2026 | 28/10/2026 | [MDN: SVG graphics](https://developer.mozilla.org/en-US/docs/Web/SVG); [MDN: glass effects](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter) |
| 6 | - Complete controls for light/dark mode, transparency, neon, elevation, hue, and roundness.<br>&emsp; + Add a compact mobile settings panel, defaults, preference storage, and color reset.<br>- Improve page transitions, scrolling to the event list, and category selection combined with filters.<br>- Adjust dark-mode dropdowns, text contrast, keyboard operation, focus, and reduced-motion behavior.<br>- Check layouts, controls, and preference persistence after reload in both themes.<br>&emsp; + Review build/lint and browser checks using response fixtures; update design and usage documentation and hand over the Frontend changes. | 30/10/2026 | 30/10/2026 | [MDN: browser preference storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage); [MDN: reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion); [MDN: scrolling to content](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) |

### Week 5 Achievements:

* **Layout and navigation:** The event page includes an introduction, categories, filters, and event cards; the application uses a horizontal header with role-based menus. Administration lists and personal tickets use card grids. Login and signup have separate introduction and glass form sections, arranged for desktop and mobile.
* **Design system and artwork:** Liquid Glass surfaces, colors, and typography are applied consistently. Layered SVG elements give the flower logo, fan artwork, petals, and icons simulated depth; decoration stays behind content and does not block interaction.
* **Appearance customization:** Light/dark mode and five appearance properties are adjustable, saved per browser, and restored before the page is displayed. The new defaults are light mode, 90% transparency, 45% neon, 35% elevation, 24° hue, and 0% roundness; saved preferences are preserved. Color reset changes only the hue.
* **Interaction and accessibility:** Page transitions and scrolling to results are smoother, and category selection stays synchronized with filters. Dropdowns are readable in both themes; the mobile settings panel, menu, and controls support keyboard operation, Escape, and focus restoration. Reduced-motion mode disables decorative animation, page transitions, and smooth scrolling.
* **Interface checks:** Existing reports record successful builds and lint with no errors and two pre-existing Fast Refresh warnings. Layout, customization, persistence, keyboard, and reduced-motion checks used response fixtures in a separate browser profile without database writes; they do not replace real Backend integration tests. Contrast checks cover only the tested color pairs and do not establish comprehensive conformance.
* **Documentation and handover:** Design and configuration documentation and checking evidence were updated, and the Frontend changes were merged and pushed to the shared branch. Existing login, booking, and administration journeys were preserved; AWS deployment was not performed.
