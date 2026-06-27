// Updated for Vercel
// @polsia:user-owned — starter home served at /. Replace it in place, or delete
// this route group before adding another page that resolves to /.

import type { Metadata } from 'next';
import { siteDescription, siteName } from '@/lib/site';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: { absolute: siteName },
  description: siteDescription,
  alternates: { canonical: '/' },
};

const SERVICES = [
  {
    title: 'Free AI Website Diagnostic',
    description:
      'Sign up and our AI system analyses your website, delivering actionable recommendations straight to your inbox — no cost, no commitment.',
    icon: (
      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
      </svg>
    ),
  },
  {
    title: 'Face-to-Face Consultations',
    description:
      'We come to your business, or meet over phone or Zoom. Real conversations about real AI tools for your specific operations.',
    icon: (
      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 6.1H3" />
        <path d="M21 12.1H3" />
        <path d="M15.1 18H3" />
      </svg>
    ),
  },
  {
    title: 'AI Tool Recommendations',
    description:
      'We assess your needs and recommend the right AI tools and strategies — no vendor bias, just honest advice grounded in 20+ years of IT expertise.',
    icon: (
      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5Z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Free Diagnostic',
    description:
      'Submit your website URL and receive a personalised AI recommendations report — no strings attached.',
  },
  {
    number: '02',
    title: 'Consultation',
    description:
      'Meet us face-to-face, over the phone, or via Zoom to discuss where AI can meaningfully impact your business.',
  },
  {
    number: '03',
    title: 'AI Roadmap',
    description:
      'We deliver a phased plan — starting locally in Auckland with a clear path to expand globally through remote capabilities.',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-section-lg px-gutter">
        {/* Background texture */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,var(--background)_0%,var(--accent)_100%)] opacity-60" />
        {/* Decorative geometric */}
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-15 md:opacity-20">
          <svg width="480" height="480" viewBox="0 0 480 480" fill="none">
            <circle cx="240" cy="240" r="200" stroke="var(--brand-400)" strokeWidth="1.5" strokeDasharray="8 6" />
            <circle cx="240" cy="240" r="140" stroke="var(--brand-500)" strokeWidth="1" />
            <circle cx="240" cy="240" r="80" stroke="var(--brand-600)" strokeWidth="0.75" />
            <circle cx="240" cy="240" r="20" fill="var(--brand-400)" opacity="0.3" />
            <line x1="40" y1="240" x2="440" y2="240" stroke="var(--brand-300)" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="240" y1="40" x2="240" y2="440" stroke="var(--brand-300)" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="container-page">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
            {/* Left: text */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  Auckland, New Zealand
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  20+ Years IT Expertise
                </Badge>
              </div>
              <h1 className="font-display text-[2.6rem]/[1.05] tracking-tight md:text-display">
                Smart AI advice for{' '}
                <span className="text-primary">SMEs</span>
              </h1>
              <p className="text-body-lg text-muted-foreground max-w-[44ch]">
                From Auckland to anywhere — we help small and medium businesses
                navigate the real world of AI without the hype. Free website
                diagnostic. No fluff.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg" className="gap-2">
                  <a href="/#diagnostic">
                    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />
                    </svg>
                    Book 15-Min Call + Report
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href="/#process">See How It Works</a>
                </Button>
              </div>
            </div>

            {/* Right: visual anchor */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                {/* Central card */}
                <Card className="w-64 shadow-xl">
                  <CardHeader className="pb-3">
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <svg className="size-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5Z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <CardTitle className="text-base">AI Adoption</CardTitle>
                    <CardDescription className="text-xs">
                      Made practical for everyday business
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {['No technical jargon', 'Honest recommendations', 'Phased approach'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <svg className="size-3.5 shrink-0 text-primary" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </CardContent>
                </Card>
                {/* Floating accent cards */}
                <div className="absolute -left-8 -top-4 w-36 rounded-lg border bg-card p-3 shadow-md">
                  <p className="text-[11px] font-semibold text-primary">Powered by Remote Checkout NZ</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">20+ years of IT delivery</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 rounded-lg border bg-card p-3 shadow-md">
                  <p className="text-[11px] font-semibold">Local → Global</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">Auckland first, world next</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE PROPOSITION ─────────────────────────────── */}
      <section className="border-y border-border bg-muted/30 py-section px-gutter">
        <div className="container-page">
          <div className="grid gap-8 md:grid-cols-3 md:items-start">
            <div className="md:col-span-1">
              <p className="text-eyebrow">Why AI advisory?</p>
              <h2 className="mt-3 font-display text-h2 tracking-tight">
                The gap between AI buzzwords and your business reality
              </h2>
              <p className="mt-4 text-body text-muted-foreground">
                Every week a new AI tool promises to revolutionise how you work.
                Meanwhile, your team is already stretched. We cut through the
                noise — giving you honest, practical guidance on what actually
                moves the needle for your operations.
              </p>
            </div>
            <div className="space-y-4 md:col-span-2">
              {[
                { label: 'No vendor bias', detail: 'We recommend tools because they fit, not because we get a kickback.' },
                { label: '20+ years IT track record', detail: 'Backed by Remote Checkout NZ — a proven technology partner since 2003.' },
                { label: 'Designed for SMEs', detail: 'From a one-person shop to a 50-person team — we size the solution to your real constraints.' },
              ].map(({ label, detail }) => (
                <div key={label} className="flex gap-4 rounded-lg border bg-card p-4">
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center">
                    <svg className="size-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{label}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section id="services" className="py-section px-gutter">
        <div className="container-page">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-eyebrow">What we do</p>
              <h2 className="mt-2 font-display text-h2 tracking-tight">
                From quick scan to deep dive
              </h2>
            </div>
            <p className="text-body text-muted-foreground max-w-[36ch]">
              Three entry points — start anywhere, go as deep as you need.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {SERVICES.map(({ title, description, icon }) => (
              <Card key={title} className="lift flex flex-col gap-4 p-6">
                <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {icon}
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <section id="process" className="border-y border-border bg-muted/30 py-section px-gutter">
        <div className="container-page">
          <div className="mb-10">
            <p className="text-eyebrow">How it works</p>
            <h2 className="mt-2 font-display text-h2 tracking-tight">
              Start small, think big
            </h2>
          </div>
          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-5 top-0 hidden h-full w-px bg-border md:block" style={{ left: '1.25rem' }} />
            <div className="space-y-6 md:space-y-8">
              {PROCESS_STEPS.map(({ number, title, description }) => (
                <div key={number} className="flex gap-5">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background font-display text-sm font-bold text-primary shadow-sm">
                      {number}
                    </div>
                  </div>
                  <div className="pb-8 md:pb-0">
                    <h3 className="font-display text-h4 tracking-tight">{title}</h3>
                    <p className="mt-1.5 text-body text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA: FREE DIAGNOSTIC ─────────────────────────── */}
      <section id="diagnostic" className="py-section px-gutter">
        <div className="container-page">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left: copy */}
              <div className="bg-primary p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
                  Free — No commitment
                </p>
                <h3 className="mt-3 font-display text-h2 tracking-tight text-primary-foreground">
                  Book a quick 15-minute call — get your personalised AI diagnostic report
                </h3>
                <p className="mt-4 text-body text-primary-foreground/80 leading-relaxed">
                  Meet with Simone for a short discovery call. Receive tailored AI recommendations for your business.
                </p>
                <ul className="mt-6 space-y-2">
                  {['Takes 15 minutes', 'Personalised report delivered', 'Honest, actionable steps'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                      <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right: CTA form */}
              <div className="flex flex-col justify-center gap-5 bg-card p-8 md:p-10">
                <div>
                  <h4 className="font-display text-h4">Start with a 15-minute call</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Send us your website URL and a brief description of your business.
                    We&apos;ll reply within one business day to schedule.
                  </p>
                </div>
                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Your website URL"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <textarea
                    placeholder="Brief description of your business (optional)"
                    rows={3}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  />
                  <Button type="submit" size="lg" className="gap-2">
                    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13" />
                      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                    Book 15-Minute Call & Get Report
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  Or email us directly at{' '}
                  <a href="mailto:remotecheckoutnz@gmail.com" className="underline hover:text-foreground">
                    remotecheckoutnz@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────── */}
      <section className="border-t border-border py-8 px-gutter">
        <div className="container-page flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-display text-h4 tracking-tight">Remote Checkout NZ</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Sister company · 20+ years IT expertise · Auckland, New Zealand
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:remotecheckoutnz@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              remotecheckoutnz@gmail.com
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
