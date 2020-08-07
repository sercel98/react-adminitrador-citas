import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
function App() {
  //state de todas las citas
  const [citas, guardarCitas] = useState([]);

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  const tituloSeccionAdmin =
    citas.length === 0 ? "No hay citas programadas" : "Administra tus citas";

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            {" "}
            <h2>{tituloSeccionAdmin}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
