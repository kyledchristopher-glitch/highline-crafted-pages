import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-bottles.jpg";
import emberImg from "@/assets/ember.jpg";
import ridgeImg from "@/assets/ridge.jpg";
import blacklineImg from "@/assets/blackline.jpg";
import mountainsImg from "@/assets/mountains.jpg";
import fireImg from "@/assets/fire.jpg";
import { MountainMark, Wordmark } from "@/components/Mark";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Highline Provisions — Field Crafted Heat" },
      { name: "description", content: "Small batch hot sauce built from fire and the open road. Ember, Ridge, and Blackline — three sauces, one craft. Join the first release." },
      { property: "og:title", content: "Highline Provisions — Field Crafted Heat" },
      { property: "og:description", content: "Small batch hot sauce inspired by campfire cooking and American craft. Ember, Ridge, Blackline." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Brand",
        name: "Highline Provisions",
        slogan: "Field Crafted Heat",
        description: "Small batch hot sauce. Slow built flavor. Real ingredients.",
      }),
    }],
  }),
  component: Index,
});

const PRODUCTS = [
  {
    name: "EMBER",
    heat: "Mild",
    flavor: "Smoked Peach Habanero",
    copy: "Stone-fruit sweetness rolled through habanero smoke. Built for cast iron mornings and slow Sunday breakfasts.",
    img: emberImg,
    accent: "var(--ember)",
    no: "01",
  },
  {
    name: "RIDGE",
    heat: "Medium",
    flavor: "Fire-Roasted Jalapeño Serrano",
    copy: "Green heat finished over open flame. Charred, herbaceous, and built to ride shotgun with anything off the grill.",
    img: ridgeImg,
    accent: "var(--ridge)",
    no: "02",
  },
  {
    name: "BLACKLINE",
    heat: "Hot",
    flavor: "Black Garlic Chipotle Ghost",
    copy: "Slow-fermented black garlic into ghost pepper depth. A long, smoldering finish. Treat with respect.",
    img: blacklineImg,
    accent: "var(--blackline)",
    no: "03",
  },
];

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Story />
      <Lineup />
      <HeatScale />
      <HighlineWay />
      <Signup />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-paper">
          <MountainMark className="h-4 w-10 text-paper" />
          <span className="font-display text-lg tracking-tight">Highline</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-[0.7rem] tracking-widest-xl uppercase text-muted-foreground">
          <a href="#lineup" className="hover:text-paper transition-colors">Lineup</a>
          <a href="#story" className="hover:text-paper transition-colors">Story</a>
          <a href="#heat" className="hover:text-paper transition-colors">Heat</a>
          <a href="#release" className="hover:text-paper transition-colors">Release</a>
        </nav>
        <a href="#release" className="text-[0.7rem] tracking-widest-xl uppercase border border-paper/30 px-4 py-2 hover:bg-paper hover:text-ink transition-colors">
          Join Release
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-end pt-24 pb-16 grain">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Highline Provisions Ember, Ridge, and Blackline bottles by campfire" width={1920} height={1280} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
        <div className="absolute inset-0 vignette" />
      </div>

      <div className="relative z-10 text-center px-6 fade-up">
        <div className="flex items-center justify-center gap-3 text-[0.65rem] tracking-widest-xl uppercase text-paper/70 mb-6">
          <span>ESTD</span>
          <MountainMark className="h-3 w-12 text-paper/70" />
          <span>2024</span>
        </div>
        <h1 className="font-display text-[18vw] sm:text-[14vw] md:text-[10rem] leading-[0.85] tracking-tight text-paper">
          HIGHLINE
        </h1>
        <div className="mt-2 mb-8 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-paper/40" />
          <span className="text-[0.7rem] sm:text-xs tracking-widest-xl uppercase text-paper/80">Provisions</span>
          <span className="h-px w-10 bg-paper/40" />
        </div>
        <p className="text-ember text-sm sm:text-base tracking-widest-xl uppercase ember-flicker">
          Field Crafted Heat
        </p>
      </div>

      <div className="relative z-10 mt-16 flex flex-col sm:flex-row items-center gap-6">
        <a href="#lineup" className="bg-paper text-ink px-8 py-4 text-xs tracking-widest-xl uppercase hover:bg-ember transition-colors">
          Meet the Lineup
        </a>
        <a href="#release" className="text-paper/80 hover:text-paper text-xs tracking-widest-xl uppercase border-b border-paper/30 pb-1">
          Join the First Release →
        </a>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.6rem] tracking-widest-xl uppercase text-paper/40">
        Small Batch · No. 24—01
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Small Batch", "Real Ingredients", "Slow Crafted", "Open Fire", "American Made", "Field Provisioned"];
  return (
    <div className="border-y border-border/60 py-5 overflow-hidden bg-background">
      <div className="flex gap-16 whitespace-nowrap animate-[scroll_40s_linear_infinite]" style={{ animation: "scroll 40s linear infinite" }}>
        {[...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-16 text-[0.7rem] tracking-widest-xl uppercase text-muted-foreground">
            <span>{t}</span>
            <MountainMark className="h-3 w-8 text-ember/70" />
          </div>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

function Story() {
  return (
    <section id="story" className="relative py-32 px-6 lg:px-10 grain-soft">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 lg:col-start-1">
          <div className="text-[0.65rem] tracking-widest-xl uppercase text-ember mb-6 rule">
            <span>Chapter 01</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mb-8">
            Built from fire <br/>and the open road.
          </h2>
          <div className="space-y-5 text-muted-foreground text-base leading-relaxed max-w-md">
            <p>
              Highline started in a cast iron skillet, somewhere between a high desert ridge and a sleepless campfire. The sauce came before the brand. The brand came after the meal.
            </p>
            <p>
              Today we craft small batch hot sauces inspired by the places we roam, the food we cook, and the company we keep. Real peppers. Real smoke. No shortcuts.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-4 text-[0.7rem] tracking-widest-xl uppercase text-muted-foreground">
            <span className="text-paper">— J. Daniels</span>
            <span className="h-px w-8 bg-border" />
            <span>Founder</span>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={mountainsImg} alt="High desert mountain ridge at dusk" width={1920} height={1080} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-[0.6rem] tracking-widest-xl uppercase text-paper/80">
              <span>Lat 44.4° N</span>
              <span>Field No. 07</span>
              <span>Lon 113.6° W</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Lineup() {
  return (
    <section id="lineup" className="relative py-32 px-6 lg:px-10 bg-ink">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-[0.65rem] tracking-widest-xl uppercase text-ember mb-4 rule justify-center inline-flex">
            <span>The Lineup</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Three sauces. <br/><span className="italic text-muted-foreground">One craft.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="group bg-background relative overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={p.img} alt={`${p.name} ${p.flavor} hot sauce bottle`} width={800} height={1024} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
                <div className="absolute top-4 left-4 text-[0.6rem] tracking-widest-xl uppercase text-paper/70">
                  No. {p.no} / 03
                </div>
                <div className="absolute top-4 right-4 text-[0.6rem] tracking-widest-xl uppercase px-2 py-1 border border-paper/40 text-paper/80">
                  {p.heat}
                </div>
              </div>
              <div className="p-8 border-t border-border">
                <div className="h-1 w-10 mb-5" style={{ background: p.accent }} />
                <h3 className="font-display text-4xl mb-2">{p.name}</h3>
                <p className="text-[0.7rem] tracking-widest-xl uppercase text-muted-foreground mb-5">{p.flavor}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.copy}</p>
                <div className="mt-8 flex items-center justify-between text-[0.65rem] tracking-widest-xl uppercase">
                  <span className="text-muted-foreground">5 FL OZ · 148 ML</span>
                  <span className="text-paper border-b border-ember pb-0.5">Notify Me</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeatScale() {
  const levels = [
    { name: "Mild", sub: "Ember", val: 1, color: "var(--ember)" },
    { name: "Medium", sub: "Ridge", val: 2, color: "var(--ridge)" },
    { name: "Hot", sub: "Blackline", val: 3, color: "var(--blackline)" },
  ];
  return (
    <section id="heat" className="relative py-32 px-6 lg:px-10 paper-bg grain">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="text-[0.65rem] tracking-widest-xl uppercase text-ember mb-4 rule justify-center inline-flex">
            <span>The Heat Scale</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-ink">
            From kindling <br/><span className="italic">to blackline.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {levels.map((l) => (
            <div key={l.name} className="text-center">
              <div className="flex justify-center gap-1.5 mb-6">
                {[1,2,3].map((i) => (
                  <span key={i} className="h-12 w-3" style={{ background: i <= l.val ? l.color : "oklch(0.85 0.01 80)" }} />
                ))}
              </div>
              <div className="font-display text-3xl text-ink mb-1">{l.name}</div>
              <div className="text-[0.65rem] tracking-widest-xl uppercase text-ink/60">{l.sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center text-xs tracking-widest-xl uppercase text-ink/50">
          Measured by craft. Tuned by hand. Never by gimmick.
        </div>
      </div>
    </section>
  );
}

function HighlineWay() {
  const pillars = [
    { t: "Slow Built", d: "Long ferments. Open flame. We let flavor take its time." },
    { t: "Real Ingredients", d: "Whole peppers, raw garlic, cold-pressed vinegar. Nothing you can't pronounce." },
    { t: "Small Batch", d: "Numbered runs of 500. When they're gone, we wait for the next harvest." },
  ];
  return (
    <section className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={fireImg} alt="" width={1920} height={1080} loading="lazy" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <div className="text-[0.65rem] tracking-widest-xl uppercase text-ember mb-6 rule">
            <span>Chapter 02</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl">
            The Highline Way.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Three principles we don't compromise on. They keep the sauce honest and the table worth sitting at.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-20">
          {pillars.map((p, i) => (
            <div key={p.t} className="border-t border-border pt-8">
              <div className="text-[0.6rem] tracking-widest-xl uppercase text-ember mb-4">No. 0{i+1}</div>
              <h3 className="font-display text-3xl mb-4">{p.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Signup() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="release" className="relative py-32 px-6 lg:px-10 ember-grad grain overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <div className="text-[0.65rem] tracking-widest-xl uppercase text-paper/80 mb-6 rule justify-center inline-flex">
          <span>Batch No. 24—01</span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-paper">
          Join the first <br/><span className="italic">small-batch release.</span>
        </h2>
        <p className="mt-8 text-paper/90 text-lg max-w-xl mx-auto">
          Five hundred bottles. One harvest. Be first on the list when the kitchen opens.
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
          className="mt-12 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-ink/40 border border-paper/30 text-paper placeholder:text-paper/50 px-5 py-4 text-sm tracking-wide focus:outline-none focus:border-paper transition-colors"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="bg-ink text-paper px-8 py-4 text-xs tracking-widest-xl uppercase hover:bg-paper hover:text-ink transition-colors"
          >
            {sent ? "On the list ✓" : "Reserve"}
          </button>
        </form>
        <p className="mt-6 text-[0.65rem] tracking-widest-xl uppercase text-paper/60">
          No spam. One letter per release.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <Wordmark className="text-paper" />
          <p className="mt-6 text-[0.65rem] tracking-widest-xl uppercase text-muted-foreground">
            Field Crafted Heat
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-[0.7rem] tracking-widest-xl uppercase text-muted-foreground">
          <div className="flex sm:justify-start justify-center gap-6">
            <a href="#" className="hover:text-paper transition-colors">Instagram</a>
            <a href="#" className="hover:text-paper transition-colors">Journal</a>
            <a href="#" className="hover:text-paper transition-colors">Contact</a>
          </div>
          <div className="text-center text-muted-foreground/70">
            © 2026 Highline Provisions Co.
          </div>
          <div className="flex sm:justify-end justify-center gap-6">
            <a href="#" className="hover:text-paper transition-colors">Terms</a>
            <a href="#" className="hover:text-paper transition-colors">Privacy</a>
            <a href="#" className="hover:text-paper transition-colors">Wholesale</a>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-[0.55rem] tracking-widest-xl uppercase text-muted-foreground/60">
          <span>Bottled in small batches</span>
          <MountainMark className="h-2 w-6 text-ember/60" />
          <span>American Made · No. 24—01</span>
        </div>
      </div>
    </footer>
  );
}
