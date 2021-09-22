import "./App.css";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";

function App () {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer name="usuario de prueba" /> 
      
    </div>
  );
};

export default App;

//import ItemCount from "./components/ItemCount/ItemCount";
//<ItemCount stock="9" initial={1} />