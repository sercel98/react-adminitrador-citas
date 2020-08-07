import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ crearCita }) => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  //Manejar cambios en los input
  const handleChange = (e) => {
    actualizarCita({ ...cita, [e.target.name]: e.target.value });
  };

  //evento Submit form
  const submitCita = (e) => {
    e.preventDefault();

    //validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    actualizarError(false);
    //asignar id
    cita.id = uuidv4();

    //Crear cita
    crearCita(cita);
    //restart form
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  //get values
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  return (
    <Fragment>
      <h2>Crear cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios amigo</p>
      ) : null}
      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={mascota}
        />

        <label>Nombre Propietario</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre propietario"
          onChange={handleChange}
          value={propietario}
        />

        <label>Fecha cita</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora cita</label>
        <input
          type="time"
          name="hora"
          onChange={handleChange}
          className="u-full-width"
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          onChange={handleChange}
          className="u-full-width"
          value={sintomas}
        />

        <button
          type="submit"
          onChange={handleChange}
          className="u-full-width button-primary"
        >
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
