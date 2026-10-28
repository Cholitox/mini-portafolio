
import { useState, type FormEvent } from 'react';

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });
  const [errores, setErrores] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });
  const [enviado, setEnviado] = useState(false);

  function enviarFormulario(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nuevosErrores = {
      nombre: formulario.nombre.trim() ? '' : 'Escribe tu nombre',
      correo: '',
      mensaje: formulario.mensaje.trim() ? '' : 'Escribe un mensaje',
    };

    if (!formulario.correo.trim()) {
      nuevosErrores.correo = 'Escribe tu correo electrónico';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo.trim())) {
      nuevosErrores.correo = 'Escribe un correo electrónico válido';
    }

    setErrores(nuevosErrores);
    setEnviado(false);

    if (Object.values(nuevosErrores).some(Boolean)) {
      return;
    }

    setEnviado(true);
  }

  return (
    <section className="page-placeholder contact-page">
      <p className="eyebrow">Contacto</p>
      <h1>Contacto</h1>
      <p className="contact-intro">
        Completa tus datos y escribe tu mensaje
      </p>

      <form className="contact-form" onSubmit={enviarFormulario} noValidate>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Tu nombre"
          value={formulario.nombre}
          aria-invalid={Boolean(errores.nombre)}
          aria-describedby={errores.nombre ? 'error-nombre' : undefined}
          onChange={(event) => {
            setFormulario({ ...formulario, nombre: event.target.value });
            setEnviado(false);
          }}
        />
        {errores.nombre && <small id="error-nombre" className="form-error">{errores.nombre}</small>}

        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          name="correo"
          type="email"
          placeholder="tu-correo@ejemplo.com"
          value={formulario.correo}
          aria-invalid={Boolean(errores.correo)}
          aria-describedby={errores.correo ? 'error-correo' : undefined}
          onChange={(event) => {
            setFormulario({ ...formulario, correo: event.target.value });
            setEnviado(false);
          }}
        />
        {errores.correo && <small id="error-correo" className="form-error">{errores.correo}</small>}

        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Escribe tu mensaje aquí"
          rows={5}
          value={formulario.mensaje}
          aria-invalid={Boolean(errores.mensaje)}
          aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
          onChange={(event) => {
            setFormulario({ ...formulario, mensaje: event.target.value });
            setEnviado(false);
          }}
        />
        {errores.mensaje && <small id="error-mensaje" className="form-error">{errores.mensaje}</small>}

        <button type="submit">Enviar</button>
      </form>
      {enviado && (
        <p className="form-success" role="status">
          ¡Gracias, {formulario.nombre}! El formulario se completó correctamente
        </p>
      )}
    </section>
  );
}

export default Contacto;
