import "./carolina.css";

function QueenCrownLogoCarolina({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 80"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Queen City Precious Metals"
    >
      {/* Crown icon */}
      <g id="crown-icon-c" transform="translate(0, 6)">
        <rect id="crown-base-c" x="4" y="42" width="52" height="8" rx="2" fill="#C8722A" />
        <polygon id="crown-left-c" points="4,42 14,20 23,38" fill="#C8722A" />
        <polygon id="crown-center-c" points="28,42 37,10 46,42" fill="#C8722A" />
        <polygon id="crown-right-c" points="56,42 47,20 37,38" fill="#C8722A" />
        <circle id="gem-l-c" cx="14" cy="21" r="3.5" fill="#1E3A2F" opacity="0.7" />
        <circle id="gem-c-c" cx="37" cy="12" r="4.5" fill="#1E3A2F" opacity="0.8" />
        <circle id="gem-r-c" cx="46" cy="21" r="3.5" fill="#1E3A2F" opacity="0.7" />
        {/* Skyline */}
        <g id="skyline-c" fill="#1E3A2F" opacity="0.3" transform="translate(2, 52)">
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
      {/* Wordmark – dark on light */}
      <g id="wordmark-c" transform="translate(70, 0)">
        <text
          id="wm-qc-c"
          x="0"
          y="34"
          fontFamily="'Merriweather', 'Georgia', serif"
          fontSize="21"
          fontWeight="700"
          fill="#1E3A2F"
          letterSpacing="2"
        >
          QUEEN CITY
        </text>
        <text
          id="wm-pm-c"
          x="0"
          y="56"
          fontFamily="'Merriweather', 'Georgia', serif"
          fontSize="12"
          fontWeight="400"
          fill="#C8722A"
          letterSpacing="4"
        >
          PRECIOUS METALS
        </text>
        <line id="div-c" x1="0" y1="40" x2="240" y2="40" stroke="#C8722A" strokeWidth="0.75" opacity="0.4" />
      </g>
    </svg>
  );
}

function NavbarCarolina() {
  const links = ["Home", "What We Buy", "How It Works", "Contact"];
  return (
    <nav id="navbar-c" className="carolina-navbar">
      <div className="carolina-navbar-inner">
        <QueenCrownLogoCarolina className="carolina-logo" />
        <div id="nav-links-c" className="carolina-nav-links">
          {links.map((l) => (
            <a key={l} href="#" className="carolina-nav-link">{l}</a>
          ))}
        </div>
        <a href="#" id="nav-cta-c" className="carolina-nav-cta">
          &#9742; (704) 555-0100
        </a>
      </div>
    </nav>
  );
}

function HeroCarolina() {
  const badges = ["Immediate Payment", "Free Evaluations", "Expert Appraisers", "No Obligation"];
  return (
    <section id="hero-c" className="carolina-hero">
      <div id="hero-overlay-c" className="carolina-hero-overlay" />
      <div id="hero-content-c" className="carolina-hero-content">
        <p id="hero-eyebrow-c" className="carolina-hero-eyebrow">
          Charlotte&apos;s Trusted Precious Metals Buyer
        </p>
        <h1 id="hero-headline-c" className="carolina-hero-headline">
          QUEEN CITY
          <br />
          <span className="carolina-headline-copper">PRECIOUS METALS</span>
        </h1>
        <p id="hero-sub-c" className="carolina-hero-sub">
          We pay <strong className="carolina-strong">CASH ON THE SPOT</strong> for your gold, silver, coins & jewelry.
          <br />
          No waiting. No checks. Walk out with money in hand.
        </p>
        <div id="badges-c" className="carolina-badges">
          {badges.map((b) => (
            <span key={b} className="carolina-badge">
              <span className="carolina-check">&#10003;</span> {b}
            </span>
          ))}
        </div>
        <div id="ctas-c" className="carolina-ctas">
          <a href="#" id="cta-p-c" className="carolina-btn-primary">Get Your Free Appraisal</a>
          <a href="#" id="cta-s-c" className="carolina-btn-secondary">
            &#9742; Call: (704) 555-0100
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyChooseCarolina() {
  const others = ["Pay with checks", "Wait days for payment", "Consignment deals", "Uncertainty & delays", "Low-ball offers"];
  const qcpm = ["Pay with CASH", "INSTANT payment", "Paid IN FULL on the spot", "SAME DAY — walk out with money", "Fair, honest appraisals"];
  return (
    <section id="why-c" className="carolina-why">
      <div id="why-inner-c" className="carolina-why-inner">
        <div id="why-ornament-c" className="carolina-ornament">&#9670; &#9670; &#9670;</div>
        <h2 id="why-h-c" className="carolina-why-headline">
          Why Choose Queen City<br />
          <span className="carolina-copper-text">Precious Metals?</span>
        </h2>
        <p id="why-body-c" className="carolina-why-body">
          When you accept our offer, you walk out the door with{" "}
          <span className="carolina-copper-text">cash in hand</span> — no checks, no waiting, no runaround.
        </p>
        <div id="compare-c" className="carolina-compare">
          <div id="others-c" className="carolina-compare-others">
            <h3 className="carolina-col-label">Others</h3>
            <ul className="carolina-list">
              {others.map((item) => (
                <li key={item} className="carolina-list-item carolina-bad">
                  <span className="carolina-icon-bad">&#10007;</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div id="qcpm-c" className="carolina-compare-qcpm">
            <h3 className="carolina-col-label carolina-qcpm-label">Queen City Precious Metals</h3>
            <ul className="carolina-list">
              {qcpm.map((item) => (
                <li key={item} className="carolina-list-item carolina-good">
                  <span className="carolina-icon-good">&#10003;</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Trust strip */}
        <div id="trust-strip-c" className="carolina-trust-strip">
          <div className="carolina-trust-item">
            <div className="carolina-trust-num">15+</div>
            <div className="carolina-trust-label">Years Serving Charlotte</div>
          </div>
          <div className="carolina-trust-divider" />
          <div className="carolina-trust-item">
            <div className="carolina-trust-num">$5M+</div>
            <div className="carolina-trust-label">Cash Paid to Sellers</div>
          </div>
          <div className="carolina-trust-divider" />
          <div className="carolina-trust-item">
            <div className="carolina-trust-num">5★</div>
            <div className="carolina-trust-label">Rated by Our Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CarolinaGold() {
  return (
    <div id="carolina-gold-root" className="carolina-root">
      <NavbarCarolina />
      <HeroCarolina />
      <WhyChooseCarolina />
    </div>
  );
}
