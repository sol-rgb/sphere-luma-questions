# DESIGN.md — Ground Truth Table Talk

Project        QR-scannable conversation-cards microsite for Sphere's Ground Truth event (Sep 17, Dogpatch SF).
               One page. Scan the table QR, get one randomized question submitted by guests via Luma, tap to draw another.
Audience       Senior engineers in AI x regulated industries, at a table, on their phones, ambient light. Mobile-first.

Inheritance    "Match exactly." This page is a companion surface to groundtruth.getsphere.com and inherits its
               token system verbatim (extracted from the live site's :root custom properties on 2026-09-16).

Type           Display: Cambon Light 300 (self-hosted woff2, same file the event site serves), tracking -0.018em,
               line-height 1.08–1.2. Body/UI: CoFo Gothic 400/500, 13–18px. Labels: CoFo Gothic 500, 13px,
               sentence case, +0.02em tracking. NO all caps anywhere: the brand never sets labels in uppercase
               ("A Sphere Event Series", "Vol. 1 · Invite only" are sentence case on the event site).
               Question text: Cambon Light, stepped by length (44 → 36 → 28 → 22px) inside a fixed-height card
               that scrolls internally when text overflows.
Color          Background: Stone 20 #f9f8f3. Surface (card): #ffffff. Text primary: Night #0d0e0d.
               Text secondary: Midnight 60 #414441. Muted: Midnight 40 #5e625e. Border: Stone 60 #dfddcf.
               Accent: Volt #99ff4b, used ONLY as the brand gradient
               linear-gradient(180deg,#6ae654,#99ff4b 44%,#ddfbd3 77%,#48b45f) on the card's top bar,
               never as text. Button: Night bg, Stone 20 text.
Space          Base 8px (site's --space-* scale). Content max-width 640px, side gutter 20px. Generous air above card.
Layout         Single centered column: slim header (Sphere logo night SVG + "Vol. 1" tag), one card, one action,
               one footer line. No sections, no grid, no nav.
Components     Page head: series line + "Table Talk" in Cambon display + one-line sub, echoing the event hero.
               Card: white, radius 16px (--radius-md), 1px Stone 60 border, volt gradient top bar; hairline-ruled
               label row (Question · counter) and a closing "Ground truth / settled at this table" row, adapted
               from the event site's "Ground truth: verified" card device. Button: pill (999px), Night,
               full-width on mobile. Footnoted-wit signature device in footer (brand's own device, used once).
Motion         One transition: question swap, 320ms cubic-bezier(0.16,1,0.3,1) fade + 12px rise. Ceiling, not target.
               prefers-reduced-motion: instant swap.
Imagery        None. Type and the gradient device carry it, matching the event site's hero.
Voice          House style: US spelling, NO em dashes (commas/colons/full stops), wit in labels only, clarity in body.
               Full stops only on parallel two-part lines.
Constraints    No fabricated content presented as real: until the Luma export lands in questions.js,
               PLACEHOLDER=true renders a visible "sample questions" notice on the page.
               No frameworks, no build step: static HTML/CSS/JS so it deploys and edits in seconds.
References     https://groundtruth.getsphere.com (token source, gradient hero, card device "SW054000 · Software"),
               https://brands.together.agency/sphere (palette, type, voice, footnoted wit, logo rules).

Ratified defaults (chosen, not defaulted): cream/Stone background, pill buttons, uppercase mono-style eyebrow
labels, single accent gradient. All are the client's own system.
