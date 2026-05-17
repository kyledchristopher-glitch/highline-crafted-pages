import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MountainMark, Wordmark } from "@/components/Mark";

const BATCH_NO = "26-01";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Highline Provisions | Field Crafted Heat" },
      {
        name: "description",
        content:
          "Premium small-batch hot sauces crafted with smoke, fire-roasted peppers, real ingredients, and Americana field-provision style.",
      },
      { name: "author", content: "Highline Provisions" },
      { property: "og:title", content: "Highline Provisions | Field Crafted Heat" },
      {
        property: "og:description",
        content:
          "Premium small-batch hot sauces crafted with smoke, fire-roasted peppers, real ingredients, and Americana field-provision style.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/highline-homepage-reference.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Highline Provisions | Field Crafted Heat" },
      {
        name: "twitter:description",
        content:
          "Premium small-batch hot sauces crafted with smoke, fire-roasted peppers, real ingredients, and Americana field-provision style.",
      },
      { name: "twitter:image", content: "/highline-homepage-reference.png" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "/#organization",
              name: "Highline Provisions",
              url: "/",
              slogan: "Field Crafted Heat",
              foundingDate: "2026",
              description:
                "Premium small-batch hot sauces crafted with smoke, fire-roasted peppers, real ingredients, and Americana field-provision style.",
              logo: "/highline-homepage-reference.png",
            },
            {
              "@type": "Product",
              "@id": "/#ember",
              name: "Highline Provisions EMBER",
              brand: { "@id": "/#organization" },
              category: "Hot sauce",
              description:
                "Mild. Smoked Peach Habanero. Warm stone fruit, soft smoke, balanced heat. Built for eggs, grilled chicken, pork, and cast iron breakfasts.",
              image: "/highline-homepage-reference.png",
            },
            {
              "@type": "Product",
              "@id": "/#ridge",
              name: "Highline Provisions RIDGE",
              brand: { "@id": "/#organization" },
              category: "Hot sauce",
              description:
                "Medium. Fire-Roasted Jalapeño Serrano. Bright green heat, roasted pepper depth, lime, garlic, and open-flame character. Built for tacos, grilled fish, burgers, and everyday use.",
              image: "/highline-homepage-reference.png",
            },
            {
              "@type": "Product",
              "@id": "/#blackline",
              name: "Highline Provisions BLACKLINE",
              brand: { "@id": "/#organization" },
              category: "Hot sauce",
              description:
                "Hot. Black Garlic Chipotle Ghost. Dark smoke, black garlic depth, chipotle, and slow-building ghost pepper heat. Built for steak, chili, wings, and late-night firepit food.",
              image: "/highline-homepage-reference.png",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const PRODUCTS = [
  {
    id: "ember",
    name: "EMBER",
    heat: "Mild",
    flavor: "Smoked Peach Habanero",
    copy: "Warm stone fruit, soft smoke, balanced heat. Built for eggs, grilled chicken, pork, and cast iron breakfasts.",
  },
  {
    id: "ridge",
    name: "RIDGE",
    heat: "Medium",
    flavor: "Fire-Roasted Jalapeño Serrano",
    copy: "Bright green heat, roasted pepper depth, lime, garlic, and open-flame character. Built for tacos, grilled fish, burgers, and everyday use.",
  },
  {
    id: "blackline",
    name: "BLACKLINE",
    heat: "Hot",
    flavor: "Black Garlic Chipotle Ghost",
    copy: "Dark smoke, black garlic depth, chipotle, and slow-building ghost pepper heat. Built for steak, chili, wings, and late-night firepit food.",
  },
] as const;

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Hero />
      <LineupGrid />
      <Story />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section id="top" className="relative bg-background">
      <HeroFrame />
      <nav className="sr-only" aria-label="Primary">
        <a href="#lineup">Lineup</a>
        <a href="#story">Story</a>
        <a href="#heat">Heat</a>
        <a href="#markets">Farmers Markets</a>
        <a href="#contact">Contact</a>
        <a href="#release">Join the First Release</a>
      </nav>
    </section>
  );
}

function HeroFrame() {
  return (
    <div className="reference-hero-frame">
      <img
        src="/highline-homepage-reference.png"
        alt="Highline Provisions homepage concept with dark woodgrain hero, firelight, Field Crafted Heat headline, realistic bottle trio, and benefit strip"
        width={1536}
        height={1024}
        className="block w-full select-none"
        fetchPriority="high"
      />
    </div>
  );
}

function LineupGrid() {
  const [email, setEmail] = useState("");

  return (
    <section className="paper-bg px-6 py-12 lg:px-10">
      <div className="mx-auto grid max-w-[88rem] gap-4 lg:grid-cols-[1.1fr_1fr_1fr_1fr_1.5fr_1.25fr]">
        <article id="lineup" className="bg-paper/45 p-8 text-ink">
          <h1 className="text-xl font-bold uppercase tracking-widest-xl">The Lineup</h1>
          <p className="mt-8 max-w-60 text-sm leading-relaxed text-ink/70">
            Three sauces. Three heats. Built for the table.
          </p>
          <a
            href="#ember"
            className="mt-16 inline-flex text-[0.64rem] font-bold uppercase tracking-widest-xl text-ink"
          >
            Explore the Sauces →
          </a>
        </article>

        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        <ReleasePanel email={email} setEmail={setEmail} />
        <MarketsPanel />
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: (typeof PRODUCTS)[number] }) {
  return (
    <article
      id={product.id}
      className="flex flex-col justify-between bg-paper/45 p-8 text-center text-ink"
    >
      <ProductBody product={product} />
      <div className="mt-8 border-t border-ink/15 pt-5">
        <p className="text-[0.62rem] font-bold uppercase tracking-widest text-ink/55">
          Single Bottle: $14
        </p>
        <button
          type="button"
          className="mt-4 border border-ink/30 px-5 py-3 text-[0.58rem] font-bold uppercase tracking-widest text-ink/65"
          aria-describedby="checkout-note"
        >
          Coming Soon
        </button>
      </div>
    </article>
  );
}

function ProductBody({ product }: { product: (typeof PRODUCTS)[number] }) {
  return (
    <div>
      <MountainMark className="mx-auto h-7 w-16 text-ink/60" />
      <h2 className="mt-8 font-display text-4xl uppercase tracking-wide">{product.name}</h2>
      <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-widest text-ink/70">
        {product.heat}
      </p>
      <p className="mt-2 text-sm text-ink/70">{product.flavor}</p>
      <p className="mt-6 text-sm leading-relaxed text-ink/65">{product.copy}</p>
    </div>
  );
}

function ReleasePanel({
  email,
  setEmail,
}: {
  email: string;
  setEmail: (value: string) => void;
}) {
  return (
    <section id="release" className="bg-background p-8 text-center text-paper">
      <h2 className="text-lg font-bold uppercase tracking-widest-xl">Join the First Release</h2>
      <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-paper/76">
        Early subscribers get first access to Batch No. {BATCH_NO}, tasting notes, launch pricing,
        and release updates.
      </p>
      <form
        className="mx-auto mt-8 flex max-w-md flex-col gap-3"
        data-email-provider-ready="resend convertkit klaviyo shopify mailchimp"
        aria-describedby="release-form-note checkout-note"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="release-email" className="sr-only">
          Email address
        </label>
        <input
          id="release-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-paper/25 bg-paper/8 px-4 py-4 text-sm text-paper placeholder:text-paper/55 focus:border-paper focus:outline-none"
        />
        <button
          type="button"
          className="bg-paper px-6 py-4 text-[0.62rem] font-bold uppercase tracking-widest-xl text-ink transition-colors hover:bg-ember"
        >
          Join Release List
        </button>
      </form>
      <p id="release-form-note" className="mt-4 text-[0.6rem] uppercase tracking-widest text-paper/55">
        Preview only. Connect an email provider before launch.
      </p>
      <div
        id="checkout-note"
        className="mt-6 border-t border-paper/15 pt-5 text-xs leading-relaxed text-paper/65"
      >
        First Release Trio: <span className="text-paper">$39 launch pricing</span>. Local pickup /
        market release only for now. Stripe checkout placeholders are not live.
      </div>
    </section>
  );
}

function MarketsPanel() {
  return (
    <section id="markets" className="bg-paper/45 p-8 text-ink">
      <h2 className="text-lg font-bold uppercase tracking-widest-xl">Upcoming Markets</h2>
      <p className="mt-6 text-sm leading-relaxed text-ink/72">
        Come say hi, try the lineup, and get first access.
      </p>
      <div className="mt-8 border-y border-ink/15 py-6">
        <p className="font-display text-xl">Markets to be announced.</p>
        <p className="mt-2 text-xs leading-relaxed text-ink/62">
          Local pickup and market release details will be shared with the release list.
        </p>
      </div>
      <a
        href="#release"
        className="mt-8 inline-flex text-[0.64rem] font-bold uppercase tracking-widest-xl text-ink"
      >
        Join for Market Updates →
      </a>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="relative bg-background px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p id="heat" className="text-[0.65rem] uppercase tracking-widest-xl text-[#b58b5c]">
            Heat
          </p>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-6xl">
            Built for food that earns its place.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-paper/70">
          <p>
            Highline Provisions is a first small-batch sauce release built around smoke, fruit,
            fire-roasted peppers, black garlic, and steady heat. The line is being developed for field
            cooking, farmers market tables, and everyday meals that need flavor before heat.
          </p>
          <p>
            Launch pricing is placeholder only: Single Bottle at $14 and First Release Trio at $39.
            Checkout will stay marked Coming Soon until Stripe and release availability are configured.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-background px-6 py-14 lg:px-10">
      <FooterInner />
    </footer>
  );
}

function FooterInner() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col items-center text-center">
        <Wordmark className="text-paper" />
        <p className="mt-6 text-[0.65rem] uppercase tracking-widest-xl text-muted-foreground">
          Field Crafted Heat
        </p>
      </div>
      <p className="mx-auto mt-12 max-w-4xl text-center text-xs leading-relaxed text-muted-foreground">
        Highline Provisions is currently in small-batch development. Final ingredients, nutrition
        facts, labels, pricing, and availability may change before release.
      </p>
    </div>
  );
}
