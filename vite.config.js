import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Note: the old /api proxy to a standalone Express server on :5000 has
  // been removed. The contact-form API now lives in /api/contact.js as a
  // Vercel serverless function. To test it locally, run `vercel dev`
  // instead of `vite dev` — Vercel's CLI serves both the Vite app and the
  // /api functions together on one origin.
});
