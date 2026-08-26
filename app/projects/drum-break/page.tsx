import Image from "next/image";
import Link from "next/link";
import Waveform from "../../components/Waveform";

export default function DrumBreak() {
  return (
    <main className="min-h-screen bg-ink text-bone">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Link
          href="/"
          className="font-mono text-xs text-muted hover:text-signal transition-colors"
        >
          ← back
        </Link>

        <p className="font-mono text-xs tracking-[0.2em] text-wave uppercase mt-10 mb-4">
          Generative audio · VAE / VQ-VAE
        </p>
        <h1 className="font-display text-5xl leading-tight mb-8">
          Drum Break Sound Gen
        </h1>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="https://github.com/kyu30/sound_gen"
            className="font-mono text-sm px-4 py-2 rounded border border-surface-border hover:border-wave/50 transition-colors"
          >
            Repo ↗
          </a>
        </div>

        <Waveform className="h-16 w-full mb-14" color="var(--wave)" bars={72} />

        <section className="space-y-6 text-bone-dim text-lg leading-relaxed">
          <h2 className="font-display text-2xl text-bone">The problem</h2>
          <p>
            A drum break is short, percussive, and mostly transient: a kick,
            a snare, some room noise, gone in two seconds. That&rsquo;s an
            awkward shape for a generative model. Treat the sample as a raw
            waveform and you&rsquo;re fighting an extremely high sample rate;
            treat it as a spectrogram image and you&rsquo;re asking a model
            built for smooth natural images to reproduce sharp transient
            edges, which convolutional models tend to blur into mush.
          </p>

          <h2 className="font-display text-2xl text-bone pt-4">
            What I built
          </h2>
          <p>
            I trained a convolutional VAE, and separately a VQ-VAE, on
            spectrograms of two-second drum break samples, then wrote
            scripts to invert model output back into audio and to render
            spectrograms for comparison. The two architectures made
            different mistakes worth comparing: the plain VAE tended toward
            smoother, softer reconstructions that lost transient detail,
            while the VQ-VAE&rsquo;s discrete codebook held onto sharper
            attack sounds but was more prone to audible artifacts between
            codebook entries.
          </p>
          <p>
            Across more than 1,000 reconstructions and novel generated
            samples, the earliest outputs were structured but noisy. They were
            recognizably drum-shaped in the spectrogram, but with a layer of
            static-like grain the ear picks up immediately. Two changes mattered most:
            normalizing the spectrogram inputs more carefully, and KL
            annealing during training so the latent space wasn&rsquo;t
            forced toward the prior before it had learned useful structure.
            Both noticeably cleaned up the reconstructions.
          </p>

          {/*
            AUDIO SLOTS - replace with real output.
            <audio controls src="/samples/reconstruction-1.wav" className="w-full" />
          */}
          <div className="grid sm:grid-cols-2 gap-4 not-prose">
            <figure className="m-0">
              <Image
                src="/spectrogram-original.png"
                alt="Spectrogram of a real drum break sample"
                width={428}
                height={217}
                className="w-full h-auto rounded-lg border border-surface-border bg-surface"
              />
              <figcaption className="font-mono text-xs text-muted text-center mt-2">
                real sample
              </figcaption>
            </figure>
            <figure className="m-0">
              <Image
                src="/spectrogram-generated.png"
                alt="Spectrogram of a generated drum break sample"
                width={415}
                height={210}
                className="w-full h-auto rounded-lg border border-surface-border bg-surface"
              />
              <figcaption className="font-mono text-xs text-muted text-center mt-2">
                generated sample
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </main>
  );
}
