"use client";

import { useEffect, useMemo, useState } from "react";

type Petal = { left: number; delay: number; duration: number; size: number; rotate: number };

const memories = [
  { number: "01", title: "Your smile", copy: "The kind of smile that makes an ordinary day feel like a celebration." },
  { number: "02", title: "Your little things", copy: "The tiny details that make you wonderfully, unmistakably you." },
  { number: "03", title: "The way you feel", copy: "A little more warmth, a little more magic, and a lot more reasons to smile." }
];

export default function LoveExperience() {
  const [opened, setOpened] = useState(false);
  const [answer, setAnswer] = useState<"yes" | "time" | null>(null);
  const [musicOn, setMusicOn] = useState(false);
  const [petals, setPetals] = useState<Petal[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setPetals(Array.from({ length: 22 }, (_, i) => ({
      left: (i * 37 + 8) % 100,
      delay: (i % 9) * -1.7,
      duration: 10 + (i % 7) * 1.8,
      size: 9 + (i % 5) * 4,
      rotate: i * 43
    })));
  }, []);

  const shareText = "Suruti, someone made a little corner of the universe just to remind you how special you are. ♡";

  async function shareSurprise() {
    try {
      if (navigator.share) {
        await navigator.share({ title: "A little something for Suruti ♡", text: shareText, url: window.location.href });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2200);
      }
    } catch {
      // Sharing can be dismissed; the page remains usable.
    }
  }

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="star-field" aria-hidden="true">
        {Array.from({ length: 34 }, (_, i) => <i key={i} style={{ left: `${(i * 29 + 7) % 100}%`, top: `${(i * 47 + 3) % 100}%`, animationDelay: `${(i % 8) * -.7}s` }} />)}
      </div>
      <div className="petal-layer" aria-hidden="true">
        {petals.map((p, i) => <span key={i} className="petal" style={{ left: `${p.left}%`, animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s`, width: p.size, height: p.size * 1.45, transform: `rotate(${p.rotate}deg)` }} />)}
      </div>

      <nav className="topbar">
        <a className="wordmark" href="#home"><span className="wordmark-heart">♥</span> a little love note</a>
        <button className={`music-toggle ${musicOn ? "is-on" : ""}`} onClick={() => setMusicOn(v => !v)} aria-pressed={musicOn}>
          <span className="sound-bars"><i /><i /><i /><i /></span>
          {musicOn ? "Music on" : "A little melody"}
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="eyebrow"><span /> MADE WITH A FULL HEART <span /></div>
        <p className="tiny-intro">For one very special person</p>
        <h1>Dear <em>Suruti</em><span className="title-heart">♡</span></h1>
        <p className="hero-copy">Some people make the world feel softer, brighter, and a little more magical.<br className="desktop-break" /> You are one of those people.</p>

        <div className="heart-stage" aria-label="A glowing three-dimensional heart">
          <div className="heart-orbit orbit-one" />
          <div className="heart-orbit orbit-two" />
          <div className="heart-3d"><span>♥</span></div>
          <span className="orbit-spark spark-a">✦</span><span className="orbit-spark spark-b">✧</span><span className="orbit-spark spark-c">✦</span>
          <span className="float-emoji emoji-a">♡</span><span className="float-emoji emoji-b">✧</span><span className="float-emoji emoji-c">♥</span>
        </div>

        <div className="hero-cta">
          <button className="primary-button" onClick={() => { setOpened(true); document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" }); }}>
            Open your little surprise <span>↗</span>
          </button>
          <span className="scroll-hint">A tiny note, just for you <b>↓</b></span>
        </div>
        <div className="hero-bottom-note"><span>✳</span> A reminder that you are appreciated <span>✳</span></div>
      </section>

      <section className="reasons section-pad">
        <div className="section-kicker">THE LITTLE THINGS</div>
        <h2>There are a <em>thousand</em><br />reasons to adore you.</h2>
        <p className="section-lead">Here are just three little reminders.</p>
        <div className="reason-grid">
          {memories.map((item, i) => (
            <article className={`reason-card card-${i + 1}`} key={item.number}>
              <div className="card-top"><span>{item.number}</span><span className="card-flower">{i === 0 ? "✿" : i === 1 ? "✧" : "♡"}</span></div>
              <h3>{item.title}</h3><p>{item.copy}</p>
              <div className="card-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="letter-section section-pad" id="letter">
        <div className="letter-glow" />
        <div className="letter-card">
          <div className="letter-top"><span>✦ A NOTE FOR YOU ✦</span><span className="letter-stamp">♡</span></div>
          <div className="letter-content">
            <p className="letter-dear">My dear Suruti,</p>
            <h2>{opened ? "A few words from my heart…" : "You deserve to feel special."}</h2>
            <p>I may not always find the perfect words, but I hope you never doubt this: you matter. Your presence can turn a simple moment into something worth remembering, and your happiness genuinely matters to me.</p>
            <p>I don't want to promise a perfect fairytale. I would rather show up with honesty, patience, laughter, silly little surprises, and care that you can feel in the everyday moments.</p>
            <p>So here's a small reminder, wrapped in a little digital sparkle: you are wonderful, you are appreciated, and I'm really glad our paths crossed.</p>
            <p className="letter-sign">With all my warmth, <span>Someone who thinks you're lovely ♡</span></p>
          </div>
          <div className="letter-footer"><span>SEALED WITH A SMILE</span><span>♥</span><span>JUST FOR SURUTI</span></div>
        </div>
      </section>

      <section className="question-section section-pad">
        <div className="question-flower">❀</div>
        <div className="section-kicker">ONE LITTLE QUESTION</div>
        <h2>Can I make you<br /><em>smile a little more?</em></h2>
        <p>No pressure, no expectations. Just a heartfelt question.</p>
        <div className="answer-actions">
          <button className="yes-button" onClick={() => setAnswer("yes")}>Yes, let's make memories <span>♡</span></button>
          <button className="time-button" onClick={() => setAnswer("time")}>I'd like to take my time</button>
        </div>
        {answer && (
          <div className="answer-note" role="status">
            {answer === "yes"
              ? <><span className="answer-heart">💗</span><strong>You just made this moment sweeter.</strong><span>Here's to little adventures, genuine smiles, and getting to know each other even more.</span></>
              : <><span className="answer-heart">🌷</span><strong>Of course. Take all the time you need.</strong><span>Your comfort and your choice matter. This little note will always just be a reminder that you're appreciated.</span></>}
          </div>
        )}
      </section>

      <footer className="footer">
        <div className="footer-heart">♥</div>
        <p>Made with a little courage and a lot of affection.</p>
        <div className="footer-name">For Suruti Sharma <span>♡</span></div>
        <button className="share-button" onClick={shareSurprise}>{copied ? "Link copied ✓" : "Share this little surprise ↗"}</button>
        <span className="copyright">A SMALL WEBSITE. A VERY BIG FEELING.</span>
      </footer>
    </main>
  );
}
