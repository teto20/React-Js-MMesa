import "./App.css";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App () {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer name="usuario de prueba" /> 
      <ItemCount stock="9" initial={1} />


    </div>
  );
};

export default App;