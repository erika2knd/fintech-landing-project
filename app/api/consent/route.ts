import { NextResponse } from "next/server";

type Body = { analytics?: boolean; marketing?: boolean };

export async function POST(req: Request) {
  const { analytics = false, marketing = false } = (await req.json()) as Body;

  const consent = { necessary: true, analytics, marketing, ts: Date.now() };

  const res = NextResponse.json({ ok: true, consent });

 res.cookies.set("consent", JSON.stringify(consent), {
  path: "/",
  sameSite: "lax",  
  secure: true,
  httpOnly: false,
  maxAge: 60 * 60 * 24 * 180,
});

res.cookies.set("consent_test", analytics ? "on" : "off", {
  path: "/",
  sameSite: "lax",   
  secure: true,
  maxAge: 60 * 60 * 24 * 30,
});


  return res;
}
