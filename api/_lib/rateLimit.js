// Lightweight in-memory rate limit, keyed by IP.
//
// NOTE: Vercel serverless functions don't guarantee a single persistent
// process — this Map only protects a single warm instance, not the endpoint
// globally across every cold start/region. It's a reasonable speed bump
// against casual spam, but for strict abuse protection at scale use a
// shared store like Vercel KV or Upstash Redis instead.
const hits = new Map();

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 10;

export function isRateLimited(ip) {
  const now = Date.now();
  const record = hits.get(ip);

  if (!record || now - record.start > WINDOW_MS) {
    hits.set(ip, { start: now, count: 1 });
    return false;
  }

  record.count += 1;
  return record.count > MAX_REQUESTS;
}
