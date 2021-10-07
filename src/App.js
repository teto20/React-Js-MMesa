import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./pages/Home";
import Tienda from "./pages/Tienda";
import Nosotros from "./pages/Nosotros";
import Category from "./pages/Category";
import Carrito from "./pages/Carrito";
import NotFound from "./pages/NotFound";
import ProductoDetail from "./pages/ProductDetail";
import { CartProvider } from "../src/components/Context/CartContext";
import React from "react";

function App () {

  return (
    <CartProvider>
      <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tienda" component={Tienda} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/product/:id" component={ProductoDetail} />
            <Route exact path="/category/:id" component={Category} />
            <Route exact path="/cart" component={Carrito} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;

//import ItemCount from "./components/ItemCount/ItemCount";
//<ItemListContainer name="usuario de prueba" /> 