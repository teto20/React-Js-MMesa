import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./components/pages/Home";
import Tienda from "./components/pages/Tienda";
import Nosotros from "./components/pages/Nosotros";
import Category from "./components/pages/Category";
import NotFound from "./components/pages/NotFound";
import ProductoDetail from "./components/pages/ProductDetail";

function App () {
  return (
    <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tienda" component={Tienda} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/product/:id" component={ProductoDetail} />
          <Route exact path="/category/:id" component={Category} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
    </BrowserRouter>
  );
};

export default App;

//import ItemCount from "./components/ItemCount/ItemCount";
//<ItemListContainer name="usuario de prueba" /> 