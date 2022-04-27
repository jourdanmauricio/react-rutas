import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Productos() {
  //  http://localhost:3000/productos?inicio=1&fin=20
  // let location = useLocation();
  // console.log(location);

  const LIMIT = 20;
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  //  console.log(query);
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;
  // console.log(start, end);

  let navigate = useNavigate();
  // console.log(navigate);

  const handlePrev = (e) => {
    navigate({ search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}` });
    if (start > 0) {
    }
  };
  const handleNext = (e) => {
    navigate({ search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}` });
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostarndo productos del <b>{start}</b> al <b>{end}</b>.
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Atrás</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  );
}

export default Productos;
