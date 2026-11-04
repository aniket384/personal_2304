# A Little Something for Suruti ♡

A responsive romantic surprise website built with Next.js 15, React 19 and Tailwind CSS 4. It includes a floating-petal atmosphere, animated 3D-style heart, romantic letter, gentle motion, and a no-pressure response section.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Create a new GitHub repository.
2. Extract this folder and push its contents to the repository root.
3. In Vercel, choose **Add New → Project**, import the repository, and keep the detected Next.js settings.
4. Click **Deploy**. No environment variables are required.

You can also deploy from the project folder with the Vercel CLI:

```bash
npx vercel
```

## Personalize before sharing

Edit `src/components/LoveExperience.tsx` to change the letter, wording, and question. The current copy is intentionally affectionate and respectful: Suruti can say yes or take her time, with both choices treated warmly.

## Notes

- The visual effects are CSS animations, so there are no fragile third-party GIF dependencies.
- The “A little melody” control is a visual toggle only; it does not play audio. Add a licensed audio track and wire it to that control if you want background music.
- Google Fonts are loaded remotely. System fallbacks are included.
