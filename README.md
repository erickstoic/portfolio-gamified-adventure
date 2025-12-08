# Erick Stoic - Gamified Adventure Portfolio

This is a Vibe Coded personal website designed for Erick Stoic, built with React, Tailwind CSS, and Framer Motion.

## 🗺️ How to Update the Adventure Map

The website currently uses a placeholder abstract map image. To use your custom "Adventure Map" image:

1.  **Host your image:** Upload your map image to a reliable image host (like Imgur, AWS S3, or within your GitHub Pages `public` folder if available).
2.  **Update code:**
    *   Open `components/AdventureMap.tsx`.
    *   Locate the variable `const mapImageUrl`.
    *   Replace the URL string with your new image URL.

Example:
```typescript
const mapImageUrl = "./assets/my-adventure-map.jpg"; // If local
// OR
const mapImageUrl = "https://example.com/my-map.png"; // If remote
```

## 📍 Adjusting Map Hotspots

To make the markers align perfectly with your custom map image:

1.  Open `constants.tsx`.
2.  Find the `HOTSPOTS` array.
3.  Adjust the `x` (left percentage) and `y` (top percentage) values for each location until they align with your image's geography.

## 🚀 Deployment

This project is ready for GitHub Pages.
1.  Run `npm run build`.
2.  Deploy the `dist` or `build` folder.