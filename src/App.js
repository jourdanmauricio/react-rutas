// import ConceptosBasicos from "./components/ConceptosBasicos";
// import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <a
        href="https://v5.reactrouter.com/web/guides/quick-start"
        target="_blank"
        rel="noreferrer"
      >
        Documentación
      </a>
      <a
        href="https://reactrouter.com/docs/en/v6/getting-started/overview"
        target="_blank"
        rel="noreferrer"
      >
        V6
      </a>
      <hr />
      <SongSearch />
      <hr />
      {/* <CrudApi /> */}
      <hr />
      {/* <ConceptosBasicos /> */}
    </div>
  );
}

export default App;
