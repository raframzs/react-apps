import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <>
      <div className="container">
        <h1 className='display-1 text-primary'>REACT</h1>
        <div className="row">
          <SongSearch />
        </div>
        <div className="row">
          <CrudApi />
        </div>
        <div className="row">
          <CrudApp />
        </div>
      </div>
    </>
  );
}

export default App;
