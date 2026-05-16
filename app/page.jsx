export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Projet 2033</p>

        <h1>Le corps ne suffit pas</h1>

        <p className="subtitle">
          Une expérience interactive pour tester une idée simple :
          la biologie suffit-elle vraiment à expliquer votre conscience ?
        </p>

        <div className="actions">
          <a href="#test" className="button primary">
            Commencer le test
          </a>
          <a href="#idee" className="button secondary">
            Comprendre l’idée
          </a>
        </div>
      </section>

      <section id="idee" className="card">
        <h2>L’idée de départ</h2>
        <p>
          Dans votre réalité vécue, un seul corps est directement lié à votre douleur,
          votre peur, votre plaisir et votre conscience.
        </p>
        <p>
          Pourquoi celui-là ? Pourquoi ce corps précis, et pas un autre corps
          biologiquement comparable ?
        </p>
      </section>

      <section id="test" className="card">
        <h2>Le test arrive bientôt</h2>
        <p>
          Cette première version sert à vérifier que le site fonctionne correctement.
          Le parcours interactif sera ajouté ensuite.
        </p>
      </section>
    </main>
  );
}
