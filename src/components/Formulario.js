import React, { Fragment, useState } from "react";

const Formulario = () => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const handleChange = (e) => {
    actualizarCita({ ...cita, [e.target.name]: e.target.value });
  };

  //get values
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  return (
    <Fragment>
      <h2>Crear cita</h2>
      <form>
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
