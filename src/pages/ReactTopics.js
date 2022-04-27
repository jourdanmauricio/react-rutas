import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

// const Topic = () => {
//   let { topic } = useParams();
//   return (
//     <div>
//       <h4>{topic}</h4>
//       <p>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
//         asperiores culpa aliquam velit, ab accusantium dolorem tenetur nobis
//         excepturi qui esse quod eius error nesciunt distinctio saepe omnis nemo
//         eum!
//       </p>
//     </div>
//   );
// };
const Jsx = () => {
  return (
    <div>
      <h4>JSX</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
        asperiores culpa aliquam velit, ab accusantium dolorem tenetur nobis
        excepturi qui esse quod eius error nesciunt distinctio saepe omnis nemo
        eum!
      </p>
    </div>
  );
};
const Props = () => {
  return (
    <div>
      <h4>Props</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
        asperiores culpa aliquam velit, ab accusantium dolorem tenetur nobis
        excepturi qui esse quod eius error nesciunt distinctio saepe omnis nemo
        eum!
      </p>
    </div>
  );
};
const Estado = () => {
  return (
    <div>
      <h4>Estado</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
        asperiores culpa aliquam velit, ab accusantium dolorem tenetur nobis
        excepturi qui esse quod eius error nesciunt distinctio saepe omnis nemo
        eum!
      </p>
    </div>
  );
};
const Componentes = () => {
  return (
    <div>
      <h4>Componentes</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
        asperiores culpa aliquam velit, ab accusantium dolorem tenetur nobis
        excepturi qui esse quod eius error nesciunt distinctio saepe omnis nemo
        eum!
      </p>
    </div>
  );
};

const ReactTopics = () => {
  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          {/* <Link to="/react/jsx">JSX</Link> */}
          <Link to="jsx">JSX</Link>
        </li>
        <li>
          <Link to="props">Props</Link>
        </li>
        <li>
          <Link to="estado">Estado</Link>
        </li>
        <li>
          <Link to="componentes">Componentes</Link>
        </li>
      </ul>
      <Routes>
        {/* <Route path=":topic" element={<Topic />} /> */}
        <Route path="jsx" element={<Jsx />} />
        <Route path="props" element={<Props />} />
        <Route path="estado" element={<Estado />} />
        <Route path="componentes" element={<Componentes />} />
      </Routes>
    </div>
  );
};

// También se puede hace más sencillo de la siguiente forma:
// En el Routes principal ->
//     <Route path="/react" element={<ReactTopics />}>
//         <Route path=":topic" element={<Topic />} />
//     </Route>

// En ReactTopics ->
//      <Link to="jsx">JSX</Link>
// Y en lugar de hacer otro Rautes, simplemente se usa ->
//      <Outlet />

// Básicamente lo que hace es que en lugar de crear un nuevo Routes en el archivo de ReactTopics, usamos el principal y le decimos que en la ruta /react habrá una ruta anidada y especificamos el nombre de ese nivel de anidamiento (en este caso la sacamos por parámetro) y el componente que debe renderizar para esa ruta.
// Con esto, el componente <ReactTopics /> sabe que tiene que renderizar algo cuando entremos en sus rutas anidada, pero no sabe dónde. Le decimos el lugar con el componente <Outlet /> (que lo debemos importar de "react-router-dom"), y donde esté el <Outlet /> se  pondrá el componente que corresponde con la ruta anidada.

// Es algo similar al uso de  <slot> en el Shadow DOM de los Web Components.

export default ReactTopics;
