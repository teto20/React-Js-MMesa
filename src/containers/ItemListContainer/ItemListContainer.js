import * as React from "react";
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
    const[items, setItems] = React.useState([]);
    const [cargando, setCargando] = React.useState(false);
    const [error, setError] =  React.useState(null);

    React.useEffect(() => {
        const url="http://localhost:3001/productos";

        setCargando(true);
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then((items) => setItems(items))
            .catch((error) => setError(error))
            .finally(() => setCargando(false));
    }, []);

    return (
        <div className="itemListContainer">
            <ItemList productList={items} loader={cargando} error={error} />
        </div>
    );
} 

export default ItemListContainer;