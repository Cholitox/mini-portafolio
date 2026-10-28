
function SobreMi() {
  return (
    <section className="about-page">
      <header className="about-heading">
        <p className="eyebrow">Un poco sobre mí</p>
        <h1>Hola, soy Alonso Godoy</h1>
        <p className="about-intro">
          Soy alumno de Bachiller en Ciencias y Humanidades. Me interesa la
          ingeniería civil informática y estoy aprendiendo a desarrollar
          aplicaciones y páginas web
        </p>
      </header>

      <div className="about-cards">
        <article className="about-card">
          <h2>Mis intereses</h2>
          <ul>
            <li>Desarrollo de páginas web</li>
            <li>Programación y creación de aplicaciones</li>
            <li>Bases de datos</li>
          </ul>
        </article>

        <article className="about-card">
          <h2>Mis objetivos</h2>
          <p>
            Quiero mejorar mis conocimientos de programación, desarrollar
            proyectos propios y prepararme para trabajar en el área de la
            informática
          </p>
        </article>
      </div>
    </section>
  );
}

export default SobreMi;












