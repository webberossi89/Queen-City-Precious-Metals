import "./midnight.css";

function QueenCrownLogoMidnight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Queen City Precious Metals"
    >
      {/* Crown */}
      <g id="crown-icon-m" transform="translate(0, 6)">
        {/* Crown base */}
        <rect id="crown-base-m2" x="4" y="42" width="52" height="9" rx="0" fill="#D4AF37" />
        {/* Three sharp upward spikes */}
        <polygon id="spike-l" points="4,42 4,20 16,42" fill="#D4AF37" />
        <polygon id="spike-c" points="22,42 37,6 52,42" fill="#D4AF37" />
        <polygon id="spike-r" points="56,42 44,20 56,20" fill="#D4AF37" />
        {/* Platinum gem accents */}
        <circle id="gem-l-m" cx="10" cy="22" r="3" fill="#E8E8E8" />
        <circle id="gem-c-m" cx="37" cy="8" r="4.5" fill="#E8E8E8" />
        <circle id="gem-r-m" cx="50" cy="22" r="3" fill="#E8E8E8" />
        {/* Skyline in platinum */}
        <g id="skyline-m" fill="#B8B8B8" opacity="0.25" transform="translate(2, 52)">
          <rect x="0" y="14" width="5" height="8" />
          <rect x="6" y="10" width="4" height="12" />
          <rect x="11" y="5" width="6" height="17" />
          <rect x="18" y="1" width="5" height="21" />
          <rect x="24" y="7" width="4" height="15" />
          <rect x="29" y="3" width="7" height="19" />
          <rect x="37" y="9" width="5" height="13" />
          <rect x="43" y="14" width="5" height="8" />
          <rect x="24" y="-3" width="2" height="5" />
        </g>
      </g>
      {/* Wordmark */}
      <g id="wordmark-m2" transform="translate(70, 0)">
        <text
          id="wm-qc-m"
          x="0"
          y="36"
          fontFamily="'Montserrat', 'Arial', sans-serif"
          fontSize="24"
          fontWeight="800"
          fill="#FFFFFF"
          letterSpacing="5"
        >
          QUEEN CITY
        </text>
        <text
          id="wm-pm-m"
          x="1"
          y="57"
          fontFamily="'Montserrat', 'Arial', sans-serif"
          fontSize="11"
          fontWeight="300"
          fill="#D4AF37"
          letterSpacing="6"
        >
          PRECIOUS METALS
        </text>
        {/* Gold underline */}
        <rect id="gold-rule" x="0" y="40" width="36" height="1.5" fill="#D4AF37" />
      </g>
    </svg>
  );
}

function NavbarMidnight() {
  const links = ["Home", "What We Buy", "How It Works", "Contact"];
  return (
    <nav id="navbar-m2" className="midnight-navbar">
      <div className="midnight-navbar-inner">
        <QueenCrownLogoMidnight className="midnight-logo" />
        <div id="nav-links-m2" className="midnight-nav-links">
          {links.map((l) => (
            <a key={l} href="#" className="midnight-nav-link">{l}</a>
          ))}
        </div>
        <a href="#" id="nav-cta-m2" className="midnight-nav-cta">
          &#9742; (704) 555-0100
        </a>
      </div>
    </nav>
  );
}

function HeroMidnight() {
  const badges = ["Immediate Payment", "Free Evaluations", "Expert Appraisers", "No Obligation"];
  return (
    <section id="hero-m2" className="midnight-hero">
      <div id="hero-grad-m" className="midnight-hero-gradient" />
      <div id="hero-content-m2" className="midnight-hero-content">
        <div id="eyebrow-m2" className="midnight-eyebrow">
          <span className="midnight-eyebrow-rule" />
          <span>EST. IN CHARLOTTE, NC</span>
          <span className="midnight-eyebrow-rule" />
        </div>
        <h1 id="headline-m2" className="midnight-headline">
          QUEEN
          <br />
          <span className="midnight-headline-city">CITY</span>
          <br />
          <span className="midnight-headline-pm">PRECIOUS METALS</span>
        </h1>
        <p id="sub-m2" className="midnight-sub">
          We pay <span className="midnight-gold">CASH ON THE SPOT.</span> Gold, silver,
          <br />
          coins, jewelry — no waiting, no checks.
        </p>
        <div id="badges-m2" className="midnight-badges">
          {badges.map((b) => (
            <span key={b} className="midnight-badge">
              <span className="midnight-badge-dot" /> {b}
            </span>
          ))}
        </div>
        <div id="ctas-m2" className="midnight-ctas">
          <a href="#" id="cta-p-m" className="midnight-btn-primary">
            Get Your Free Appraisal
          </a>
          <a href="#" id="cta-s-m" className="midnight-btn-secondary">
            &#9742; Call: (704) 555-0100
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyChooseMidnight() {
  const others = ["Pay with checks", "Wait days for payment", "Consignment deals", "Uncertainty & delays", "Low-ball offers"];
  const qcpm = ["Pay with CASH", "INSTANT payment", "Paid IN FULL on the spot", "SAME DAY — walk out with money", "Fair, honest appraisals"];
  return (
    <section id="why-m2" className="midnight-why">
      <div id="why-inner-m2" className="midnight-why-inner">
        <div id="why-label-m" className="midnight-section-label">
          <span className="midnight-label-rule" />
          <span>WHY CHOOSE US</span>
          <span className="midnight-label-rule" />
        </div>
        <h2 id="why-h-m2" className="midnight-why-headline">
          WE PAY CASH.{" "}
          <span className="midnight-gold">INSTANTLY.</span>
        </h2>
        <p id="why-body-m2" className="midnight-why-body">
          Accept our offer and walk out with <span className="midnight-gold">cash in hand</span> — same day, every time. No checks. No consignment. No delays.
        </p>
        <div id="compare-m2" className="midnight-compare">
          <div id="others-m2" className="midnight-col-others">
            <div className="midnight-col-header">OTHERS</div>
            <ul className="midnight-list">
              {others.map((item) => (
                <li key={item} className="midnight-list-item midnight-bad">
                  <span className="midnight-x">&#10007;</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div id="qcpm-m2" className="midnight-col-qcpm">
            <div className="midnight-col-header midnight-gold-header">QUEEN CITY</div>
            <ul className="midnight-list">
              {qcpm.map((item) => (
                <li key={item} className="midnight-list-item midnight-good">
                  <span className="midnight-check">&#10003;</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Stats row */}
        <div id="stats-m2" className="midnight-stats">
          <div className="midnight-stat">
            <div className="midnight-stat-n">15+</div>
            <div className="midnight-stat-l">Years in Charlotte</div>
          </div>
          <div className="midnight-stat-sep" />
          <div className="midnight-stat">
            <div className="midnight-stat-n">$5M+</div>
            <div className="midnight-stat-l">Cash Paid Out</div>
          </div>
          <div className="midnight-stat-sep" />
          <div className="midnight-stat">
            <div className="midnight-stat-n">10K+</div>
            <div className="midnight-stat-l">Happy Sellers</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MidnightPrestige() {
  return (
    <div id="midnight-prestige-root" className="midnight-root">
      <NavbarMidnight />
      <HeroMidnight />
      <WhyChooseMidnight />
    </div>
  );
}
