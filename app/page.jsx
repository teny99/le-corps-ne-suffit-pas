export default function HomePage() {
  return (
    <main className="home-page">
      <header className="site-header">
        <a href="/" className="header-link">
          Accueil
        </a>

         <div className="header-banner">
          <img
            src="/images/bandeau.jpg"
            alt="Bandeau du site Le corps ne suffit pas"
            className="banner-image"
          />
         </div>

         <a href="/parcours" className="header-link">
            Parcours
         </a>
      </header>



      <section className="intro-section">
        <div className="intro-title">
          <h1>Le corps ne suffit pas.</h1>
        </div>

        <div className="intro-text">
          <p>
            Une expérience interactive pour comprendre pourquoi la biologie ne
            suffit pas à expliquer l'existence de votre conscience. Et pourquoi
            cette vérité est la plus importante qui soit.
          </p>
        </div>
      </section>

      <section className="media-section">
        <a href="/parcours" className="image-link">
          <img
            src="/image-parcours.jpg"
            alt="Accéder au parcours"
            className="clickable-image"
          />
        </a>

        <div className="youtube-short">
          <iframe
            src="https://www.youtube.com/embed/DK5vhwt6qC0"
            title="Présentation du projet."
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <a href="/page-3" className="image-link">
          <img
            src="/image-page-3.jpg"
            alt="Accéder à la page 3"
            className="clickable-image"
          />
        </a>
      </section>

      <section className="relativity-link-section">
        <a href="/relativite" className="relativity-link">
          Le jeu de la relativité.
        </a>
      </section>
    </main>
  );
}
