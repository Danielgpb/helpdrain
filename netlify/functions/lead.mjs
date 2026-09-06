/* Relais serveur vers l'edge function Suivi Leads (formulaire-site).
   Le secret et les identifiants restent en variables d'environnement Netlify
   (LEADAPP_URL, LEADAPP_SITE, LEADAPP_TYPE, LEADAPP_SECRET) — jamais dans le
   HTML public. Le script injecté par build.js poste ici en JSON. */
export default async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }
  const { LEADAPP_URL, LEADAPP_SITE, LEADAPP_TYPE, LEADAPP_SECRET } = process.env;
  if (!LEADAPP_URL || !LEADAPP_SITE || !LEADAPP_TYPE || !LEADAPP_SECRET) {
    return new Response('Lead app non configuree', { status: 503 });
  }
  const target = LEADAPP_URL +
    '?site=' + encodeURIComponent(LEADAPP_SITE) +
    '&type=' + encodeURIComponent(LEADAPP_TYPE) +
    '&secret=' + encodeURIComponent(LEADAPP_SECRET);
  try {
    const res = await fetch(target, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: await req.text(),
    });
    return new Response(null, { status: res.ok ? 204 : 502 });
  } catch {
    return new Response(null, { status: 502 });
  }
};
