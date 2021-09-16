import "./App.css";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App () {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer name="usuario de prueba" /> 
      
    </div>
  );
};

export default App;


//<ItemCount stock="9" initial={1} />