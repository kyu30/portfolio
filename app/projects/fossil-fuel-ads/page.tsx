import Image from "next/image";
import Link from "next/link";

export default function FossilFuelAds() {
  return (
    <main className="min-h-screen bg-ink text-bone">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Link
          href="/"
          className="font-mono text-xs text-muted hover:text-signal transition-colors"
        >
          ← back
        </Link>

        <p className="font-mono text-xs tracking-[0.2em] text-signal uppercase mt-10 mb-4">
          NLP · Misinformation research
        </p>
        <h1 className="font-display text-5xl leading-tight mb-8">
          Fossil Fuel Native Ads
        </h1>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="https://huggingface.co/spaces/spark-ds549/Claims2"
            className="font-mono text-sm px-4 py-2 rounded border border-surface-border hover:border-signal/50 transition-colors"
          >
            Live dashboard ↗
          </a>
        </div>

        <Image
          src="/claims.png"
          alt="Dashboard mapping sentences to subclaim clusters"
          width={1200}
          height={720}
          className="w-full h-auto rounded-lg border border-surface-border mb-14"
        />

        <section className="space-y-6 text-bone-dim text-lg leading-relaxed">
          <h2 className="font-display text-2xl text-bone">The problem</h2>
          <p>
            Native advertising is designed to read like editorial content, not
            a pitch. When an energy company sponsors an article about
            &ldquo;the future of clean fuel,&rdquo; every individual sentence
            can be technically defensible while the piece as a whole still
            steers a reader toward a conclusion the evidence doesn&rsquo;t
            support. That gap between sentence-level accuracy and
            article-level rhetoric is hard to study, because it&rsquo;s not
            really a fact-checking problem - it&rsquo;s a structure problem.
          </p>

          <h2 className="font-display text-2xl text-bone pt-4">
            What I built
          </h2>
          <p>
            Working with BU Spark! and the Climate Accountability Lab at UMiami, 
            I built the interface for a claims-based analysis pipeline that
            maps each sentence or paragraph of a sponsored article to a
            subclaim, and groups subclaims under the broader superclaim they
            support. A subclaim might be something like &ldquo;natural gas
            plants can be built faster than solar farms&rdquo; sitting under
            a superclaim like &ldquo;natural gas is the pragmatic bridge
            fuel.&rdquo; Each mapping carries a confidence score, so a
            reader or researcher can see not just what claim is being
            made, but how directly the text actually supports it.
          </p>
          <p>
            To make sense of claims across hundreds of articles, we applied
            BERTopic to cluster related claims together, which helped refine
            a hierarchical claim typology for the project&rsquo;s CLAIMS 2.0
            model. Clustering mattered because a flat list of thousands of
            claims is unreadable. Grouped by topic, patterns in rhetorical
            strategy (which arguments get reused, softened,
            and/or buried in supporting detail) become visible.
          </p>
        </section>
      </div>
    </main>
  );
}
