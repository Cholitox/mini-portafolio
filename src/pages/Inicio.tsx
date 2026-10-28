
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <section className="home-page">
      <header className="home-hero">
        <p className="eyebrow">Mi portafolio</p>
        <h1>Hola, soy Alonso Godoy</h1>
        <h2>Estudiante de Informática</h2>
        <p>
          Aquí podrás conocer más sobre mí, mis habilidades y los proyectos
          que desarrollaré durante mi formación
        </p>
        <Link className="button-link" to="/sobre-mi">Conoce más sobre mí</Link>
      </header>

      <section className="home-links">
        <h2>Explora mi portafolio</h2>
        <div className="home-cards">
          <article className="home-card">
            <h3>Sobre mí</h3>
            <p>Conoce mis intereses y mis objetivos</p>
            <Link to="/sobre-mi">Conocer más <span aria-hidden="true">→</span></Link>
          </article>

          <article className="home-card">
            <h3>Mis habilidades</h3>
            <p>Descubre las habilidades y herramientas que estoy aprendiendo</p>
            <Link to="/habilidades">Ver habilidades <span aria-hidden="true">→</span></Link>
          </article>

          <article className="home-card">
            <h3>Mis proyectos</h3>
            <p>Revisa los trabajos que he realizado</p>
            <Link to="/proyectos">Ver proyectos <span aria-hidden="true">→</span></Link>
          </article>
        </div>
      </section>
    </section>
  );
}

export default Inicio;
