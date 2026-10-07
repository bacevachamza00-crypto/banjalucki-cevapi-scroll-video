# Banjalucki Cevapi - Scroll Landing Page Concept

This project is a cinematic, scroll-driven landing page concept inspired by a storefront photo.

## What it does
- Creates a realistic storefront composition with a warm color palette
- Adds a subtle 3D perspective using CSS transforms and parallax motion
- Guides the user down the page through a cinematic scroll narrative
- Pulls attention toward the large storefront doors at the end of the experience

## How to run locally
1. Open a terminal in the project folder.
2. Start a local static web server:

```bash
python3 -m http.server 8000
```

3. Open `http://localhost:8000` in the browser.

## How to turn it into a downloadable video
The most practical approach is to use browser capture:

### Option 1: Chrome DevTools
- Open the page in Chrome
- Use the built-in screen capture / recording tool
- Scroll slowly through the page
- Export the captured screen as MP4

### Option 2: Playwright / Puppeteer
Use a browser automation script to scroll the page and save a recording as a video.

## Notes
- The current code is built to match the structure of the provided storefront reference and is intentionally cinematic rather than a raw static image.
- For a near-photo-real final result, replace the CSS-generated example storefront with the actual reference image and refine the lighting and parallax layers.

## Suggested improvement
If you want the most realistic version, add the actual storefront photo as a base layer and animate only the parallax overlays and camera motion around the entrance.
