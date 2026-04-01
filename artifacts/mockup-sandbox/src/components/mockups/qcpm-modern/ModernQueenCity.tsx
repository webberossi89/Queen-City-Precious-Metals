import "./modern.css";

function QueenCrownLogoModern({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Queen City Precious Metals"
    >
      {/* Crown icon group */}
      <g id="crown-icon-modern" transform="translate(0, 4)">
        {/* Crown base band */}
        <rect id="crown-base-m" x="4" y="42" width="52" height="9" rx="1" fill="#F0C040" />
        {/* Crown left spike */}
        <polygon id="crown-spike-left" points="4,42 16,18 26,38" fill="#F0C040" />
        {/* Crown center spike */}
        <polygon id="crown-spike-center" points="30,42 37,8 44,42" fill="#F0C040" />
        {/* Crown right spike */}
        <polygon id="crown-spike-right" points="56,42 44,18 34,38" fill="#F0C040" />
        {/* Copper accent gems */}
        <circle id="gem-left-m" cx="16" cy="20" r="4" fill="#B87333" />
        <circle id="gem-center-m" cx="37" cy="10" r="5" fill="#B87333" />
        <circle id="gem-right-m" cx="44" cy="20" r="4" fill="#B87333" />
        {/* Charlotte skyline silhouette – more detailed for modern look */}
        <g id="skyline-modern" fill="#F0C040" opacity="0.35" transform="translate(0, 52)">
          <rect x="2" y="18" width="4" height="6" />
          <rect x="7" y="14" width="4" height="10" />
          <rect x="12" y="8" width="5" height="16" />
          <rect x="18" y="2" width="4" height="22" />
          <rect x="23" y="0" width="6" height="24" />
          <rect x="30" y="6" width="5" height="18" />
          <rect x="36" y="3" width="7" height="21" />
          <rect x="44" y="10" width="5" height="14" />
          <rect x="50" y="16" width="4" height="8" />
          {/* Antenna on tallest */}
          <rect x="25" y="-4" width="2" height="6" />
        </g>
      </g>
      {/* Wordmark – bold, condensed */}
      <g id="wordmark-modern" transform="translate(70, 0)">
        <text
          id="wm-queen-city-m"
          x="0"
          y="38"
          fontFamily="'Oswald', 'Impact', 'Arial Narrow', sans-serif"
          fontSize="28"
          fontWeight="700"
          fill="#F0C040"
          letterSpacing="4"
        >
          QUEEN CITY
        </text>
        <text
          id="wm-precious-metals-m"
          x="2"
          y="58"
          fontFamily="'Inter', 'Arial', sans-serif"
          fontSize="12"
          fontWeight="400"
          fill="#CCCCCC"
          letterSpacing="5"
        >
          PRECIOUS METALS
        </text>
        {/* Gold accent bar */}
        <rect id="accent-bar" x="0" y="42" width="60" height="2" fill="#F0C040" />
      </g>
    </svg>
  );
}

function NavbarModern() {
  const navLinks = ["Home", "What We Buy", "How It Works", "Contact"];
  return (
    <nav id="navbar-modern" className="modern-navbar">
      <div className="modern-navbar-inner">
        <QueenCrownLogoModern className="modern-logo" />
        <div id="nav-links-m" className="modern-nav-links">
          {navLinks.map((link) => (
            <a key={link} href="#" className="modern-nav-link">
              {link}
            </a>
          ))}
        </div>
        <a href="#" id="nav-cta-m" className="modern-nav-cta">
          &#9742; (704) 555-0100
        </a>
      </div>
    </nav>
  );
}

function HeroSectionModern() {
  const trustBadges = [
    "Immediate Payment",
    "Free Evaluations",
    "Expert Appraisers",
    "No Obligation",
  ];
  return (
    <section id="hero-section-modern" className="modern-hero">
      {/* Skyline silhouette overlay */}
      <div id="skyline-overlay" className="modern-skyline-overlay">
        <svg viewBox="0 0 1280 300" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" className="modern-skyline-svg">
          <g id="skyline-fill" fill="#F0C040" opacity="0.08">
            {/* Charlotte-inspired skyline shapes */}
            <rect x="50" y="180" width="40" height="120" />
            <rect x="100" y="150" width="30" height="150" />
            <rect x="140" y="120" width="50" height="180" />
            <rect x="200" y="80" width="35" height="220" />
            <rect x="240" y="50" width="60" height="250" />
            <rect x="240" y="30" width="10" height="30" /> {/* antenna */}
            <rect x="310" y="90" width="40" height="210" />
            <rect x="360" y="60" width="55" height="240" />
            <rect x="425" y="100" width="35" height="200" />
            <rect x="470" y="130" width="45" height="170" />
            <rect x="525" y="160" width="30" height="140" />
            <rect x="600" y="140" width="40" height="160" />
            <rect x="650" y="110" width="50" height="190" />
            <rect x="710" y="70" width="35" height="230" />
            <rect x="755" y="90" width="55" height="210" />
            <rect x="820" y="130" width="40" height="170" />
            <rect x="870" y="160" width="30" height="140" />
            <rect x="910" y="180" width="25" height="120" />
            <rect x="950" y="200" width="20" height="100" />
            <rect x="980" y="210" width="30" height="90" />
            <rect x="1050" y="190" width="40" height="110" />
            <rect x="1100" y="170" width="35" height="130" />
            <rect x="1150" y="200" width="50" height="100" />
            <rect x="1210" y="220" width="30" height="80" />
          </g>
        </svg>
      </div>
      <div id="hero-bg-overlay-m" className="modern-hero-overlay" />
      <div id="hero-content-m" className="modern-hero-content">
        <div id="hero-eyebrow-m" className="modern-hero-eyebrow">
          <span className="modern-eyebrow-line" />
          <span>CHARLOTTE&apos;S GOLD &amp; SILVER BUYER</span>
          <span className="modern-eyebrow-line" />
        </div>
        <h1 id="hero-headline-m" className="modern-hero-headline">
          <span className="modern-headline-qc">QUEEN CITY</span>
          <br />
          <span className="modern-headline-pm">PRECIOUS METALS</span>
        </h1>
        <p id="hero-sub-m" className="modern-hero-subheadline">
          We pay <span className="modern-gold-text">CASH ON THE SPOT</span> for gold, silver, coins &amp; jewelry.
          <br />
          No waiting. No checks. Real money — right now.
        </p>
        <div id="hero-badges-m" className="modern-hero-badges">
          {trustBadges.map((badge) => (
            <span key={badge} className="modern-hero-badge">
              <span className="modern-badge-check">&#10003;</span> {badge}
            </span>
          ))}
        </div>
        <div id="hero-ctas-m" className="modern-hero-ctas">
          <a href="#" id="cta-primary-m" className="modern-btn-primary">
            Get Your Free Appraisal
          </a>
          <a href="#" id="cta-secondary-m" className="modern-btn-secondary">
            &#9742; Call: (704) 555-0100
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSectionModern() {
  const othersItems = [
    "Pay with checks",
    "Wait days for payment",
    "Consignment deals",
    "Uncertainty & delays",
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
    <section id="why-choose-modern" className="modern-why">
      <div id="why-inner-m" className="modern-why-inner">
        <h2 id="why-headline-m" className="modern-why-headline">
          Why Choose{" "}
          <span className="modern-gold-text">Queen City?</span>
        </h2>
        <p id="why-sub-m" className="modern-why-sub">
          WE PAY CASH. <span className="modern-gold-text">INSTANTLY.</span>
        </p>
        <p id="why-body-m" className="modern-why-body">
          Other buyers make you wait. We don&apos;t. Accept our offer and walk out the door with{" "}
          <span className="modern-gold-text">cash in hand</span> — same day, every time.
        </p>
        <div id="comparison-m" className="modern-comparison">
          <div id="others-m" className="modern-comparison-others">
            <h3 className="modern-col-title">Others</h3>
            <ul className="modern-compare-list">
              {othersItems.map((item) => (
                <li key={item} className="modern-compare-item modern-bad">
                  <span className="modern-icon-bad">&#10007;</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div id="qcpm-m" className="modern-comparison-qcpm">
            <div className="modern-qcpm-badge">QUEEN CITY</div>
            <ul className="modern-compare-list">
              {qcpmItems.map((item) => (
                <li key={item} className="modern-compare-item modern-good">
                  <span className="modern-icon-good">&#10003;</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Stats bar */}
        <div id="stats-bar-m" className="modern-stats-bar">
          <div className="modern-stat">
            <div className="modern-stat-number">15+</div>
            <div className="modern-stat-label">Years in Charlotte</div>
          </div>
          <div className="modern-stat-divider" />
          <div className="modern-stat">
            <div className="modern-stat-number">$5M+</div>
            <div className="modern-stat-label">Cash Paid Out</div>
          </div>
          <div className="modern-stat-divider" />
          <div className="modern-stat">
            <div className="modern-stat-number">10K+</div>
            <div className="modern-stat-label">Happy Sellers</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ModernQueenCity() {
  return (
    <div id="modern-queen-city-root" className="modern-root">
      <NavbarModern />
      <HeroSectionModern />
      <WhyChooseSectionModern />
    </div>
  );
}
