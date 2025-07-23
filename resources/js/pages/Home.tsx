import '../css/site.css';

export default function Home() {
  return (
    <div>
      <div className="header">
        <h1>Invisible Window Cleaning</h1>
        <p>Bristol’s trusted window, guttering & signage cleaning experts</p>
        {/* Logo placeholder */}
      </div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact Us</a>
      </nav>
      <main style={{padding: '2rem 1rem'}}>
        <h2>Get a Quote</h2>
        <a className="cta" href="/contact">Contact Us</a>
        <section style={{marginTop: '2rem'}}>
          <h3>Areas We Cover</h3>
          <ul>
            <li>South Bristol</li>
            <li>East Bristol</li>
            <li>Central Bristol</li>
          </ul>
        </section>
        <section style={{marginTop: '2rem'}}>
          <h3>Our Stats</h3>
          <ul>
            <li>Domestic cleans: 15,400+</li>
            <li>Commercial contracts: 37</li>
            <li>New customers last year: 6,004</li>
            <li>Cups of coffee: Too many!</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
