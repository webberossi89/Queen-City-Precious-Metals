import "./royal.css";

function QueenCrownLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Queen City Precious Metals"
    >
      {/* Crown icon group */}
      <g id="crown-icon" transform="translate(0, 6)">
        {/* Crown base band */}
        <rect id="crown-base" x="4" y="42" width="52" height="8" rx="2" fill="#C9A44A" />
        {/* Crown left point */}
        <polygon id="crown-point-left" points="4,42 13,20 22,36" fill="#C9A44A" />
        {/* Crown center point */}
        <polygon id="crown-point-center" points="30,42 30,14 44,14 44,42" fill="#C9A44A" />
        <polygon id="crown-peak-center" points="37,4 30,14 44,14" fill="#C9A44A" />
        {/* Crown right point */}
        <polygon id="crown-point-right" points="56,42 47,20 38,36" fill="#C9A44A" />
        {/* Crown gems */}
        <circle id="gem-left" cx="14" cy="22" r="3.5" fill="#fff" opacity="0.9" />
        <circle id="gem-center" cx="37" cy="6" r="4" fill="#fff" opacity="0.95" />
        <circle id="gem-right" cx="46" cy="22" r="3.5" fill="#fff" opacity="0.9" />
        {/* Charlotte skyline silhouette */}
        <g id="charlotte-skyline" fill="#C9A44A" opacity="0.55" transform="translate(2, 50)">
          <rect x="0" y="14" width="6" height="8" />
          <rect x="7" y="10" width="5" height="12" />
          <rect x="13" y="6" width="7" height="16" />
          <rect x="21" y="2" width="6" height="20" />
          <rect x="28" y="8" width="5" height="14" />
          <rect x="34" y="4" width="8" height="18" />
          <rect x="43" y="10" width="6" height="12" />
          <rect x="50" y="14" width="5" height="8" />
        </g>
      </g>
      {/* Wordmark */}
      <g id="wordmark" transform="translate(70, 0)">
        <text
          id="wordmark-queen-city"
          x="0"
          y="34"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="22"
          fontWeight="700"
          fill="#FFFFFF"
          letterSpacing="1.5"
        >
          QUEEN CITY
        </text>
        <text
          id="wordmark-precious-metals"
          x="0"
          y="56"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="13"
          fontWeight="400"
          fill="#C9A44A"
          letterSpacing="3.5"
        >
          PRECIOUS METALS
        </text>
        {/* Decorative divider */}
        <line id="divider" x1="0" y1="39" x2="248" y2="39" stroke="#C9A44A" strokeWidth="0.75" opacity="0.5" />
      </g>
    </svg>
  );
}

function Navbar() {
  const navLinks = ["Home", "What We Buy", "How It Works", "Contact"];
  return (
    <nav id="navbar" className="royal-navbar">
      <div className="royal-navbar-inner">
        <QueenCrownLogo className="royal-logo" />
        <div id="nav-links" className="royal-nav-links">
          {navLinks.map((link) => (
            <a key={link} href="#" className="royal-nav-link">
              {link}
            </a>
          ))}
        </div>
        <a href="#" id="nav-cta" className="royal-nav-cta">
          <span>&#9742;</span> (704) 555-0100
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  const trustBadges = [
    "Immediate Payment",
    "Free Evaluations",
    "Expert Appraisers",
    "No Obligation",
  ];
  return (
    <section id="hero-section" className="royal-hero">
      <div id="hero-overlay" className="royal-hero-overlay" />
      <div id="hero-content" className="royal-hero-content">
        <p id="hero-eyebrow" className="royal-hero-eyebrow">
          Charlotte&apos;s Premier Precious Metals Buyer
        </p>
        <h1 id="hero-headline" className="royal-hero-headline">
          QUEEN CITY
          <br />
          <span className="royal-hero-headline-gold">PRECIOUS METALS</span>
        </h1>
        <p id="hero-subheadline" className="royal-hero-subheadline">
          We pay <strong className="royal-hero-subheadline-strong">CASH ON THE SPOT</strong> for your gold, silver, coins &amp; jewelry.
          <br />
          No waiting. No checks. Walk out with money in hand.
        </p>
        <div id="hero-badges" className="royal-hero-badges">
          {trustBadges.map((badge) => (
            <span key={badge} className="royal-hero-badge">
              <span className="royal-badge-check">&#10003;</span> {badge}
            </span>
          ))}
        </div>
        <div id="hero-ctas" className="royal-hero-ctas">
          <a href="#" id="cta-primary" className="royal-btn-primary">
            Get Your Free Appraisal
          </a>
          <a href="#" id="cta-secondary" className="royal-btn-secondary">
            <span>&#9742;</span> Call Now: (704) 555-0100
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const othersItems = [
    "Pay with checks",
    "Wait days for payment",
    "Consignment deals",
    "Uncertainty &amp; delays",
    "Low-ball offers",
  ];
  const qcpmItems = [
    "Pay with CASH",
    "INSTANT payment",
    "Paid IN FULL on the spot",
    "SAME DAY — walk out with money",
    "Fair, honest appraisals",
  ];
  return (
    <section id="why-choose-section" className="royal-why">
      <div id="why-content" className="royal-why-inner">
        <p id="why-eyebrow" className="royal-why-eyebrow">&#10022; &#10022; &#10022;</p>
        <h2 id="why-headline" className="royal-why-headline">
          Why Choose Queen City Precious Metals?
        </h2>
        <p id="why-sub" className="royal-why-subheadline">
          WE PAY CASH. <span className="royal-gold-text">INSTANTLY.</span>
        </p>
        <p id="why-body" className="royal-why-body">
          Other buyers make you wait for checks or tie you up in consignment deals.
          At Queen City Precious Metals, when you accept our offer, you leave with{" "}
          <span className="royal-gold-text">CASH IN HAND.</span>
        </p>
        <div id="why-comparison" className="royal-why-comparison">
          <div id="others-card" className="royal-comparison-card royal-comparison-others">
            <h3 className="royal-comparison-title">Others</h3>
            <ul className="royal-comparison-list">
              {othersItems.map((item) => (
                <li key={item} className="royal-comparison-item royal-item-bad">
                  <span className="royal-icon-bad">&#10007;</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>
          <div id="qcpm-card" className="royal-comparison-card royal-comparison-qcpm">
            <h3 className="royal-comparison-title">Queen City Precious Metals</h3>
            <ul className="royal-comparison-list">
              {qcpmItems.map((item) => (
                <li key={item} className="royal-comparison-item royal-item-good">
                  <span className="royal-icon-good">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RoyalHeritage() {
  return (
    <div id="royal-heritage-root" className="royal-root">
      <Navbar />
      <HeroSection />
      <WhyChooseSection />
    </div>
  );
}
