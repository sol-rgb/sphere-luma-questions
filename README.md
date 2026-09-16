# Ground Truth · Table Talk

Conversation cards for [Ground Truth](https://groundtruth.getsphere.com), a Sphere conference (Sep 17, Dogpatch SF).
Guests scan a QR code on the table and get one randomized question submitted with the Luma RSVPs. Tap to draw another.

## Pages

- `index.html` — the card. This is what the QR code points at.
- `qr.html` — a print-ready QR page for the table tents. It always encodes the site's own deployed address, so it never needs updating.

## Updating the questions

Everything lives in [`questions.js`](questions.js):

1. Paste the questions from the Luma export, one quoted string per line, into `QUESTIONS`.
2. Set `PLACEHOLDER` to `false` (this removes the visible "sample deck" notice).
3. Push. Vercel redeploys automatically.

No build step, no dependencies. Static HTML/CSS/JS.

## Brand

Tokens, fonts (Cambon, CoFo Gothic) and logo are inherited from the Ground Truth site and the
[Sphere brand guidelines](https://brands.together.agency/sphere/). See `DESIGN.md` for the locked brief.
