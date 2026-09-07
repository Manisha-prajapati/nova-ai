function TrustedBy() {
  const companies = [
    "ORBIT",
    "LUMEN",
    "VERTEX",
    "NEXORA",
    "QUANTIX",
  ];

  return (
    <section className="trusted-section">
      <div className="trusted-container">

        <p className="trusted-title">
          TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
        </p>

        <div className="company-logos">
          {companies.map((company) => (
            <div className="company-logo" key={company}>
              <span className="company-symbol">✦</span>
              {company}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrustedBy;