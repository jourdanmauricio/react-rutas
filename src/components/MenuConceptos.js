import React from "react";
import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Enlaces HTML (no recomendado) </span>
          <a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <span>Componente Link </span>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/no-existe">404</Link>
        </li>
        <li>
          <span>Componente Navlink </span>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/acerca" activeclassname="active">
            Acerca
          </NavLink>
          <NavLink to="/contacto" activeclassname="active">
            Contacto
          </NavLink>
          <NavLink to="/no-existe" activeclassname="active">
            404
          </NavLink>
        </li>
        <li>
          <span>Parámetros </span>
          <Link to="/usuario/maujourdan">Mau</Link>
          <Link to="/usuario/isapenia">Isa</Link>
        </li>
        <li>
          <span>Parámetros de consulta </span>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <span>Redirecciones </span>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <span>Rutas anidadas </span>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>Rutas privadas </span>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
