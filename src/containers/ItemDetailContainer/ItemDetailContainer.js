import * as React from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    const[item, setItem] = React.useState({});
    const [cargando, setCargando] = React.useState(false);
    const [error, setError] =  React.useState(null);

    React.useEffect(() => {

        setCargando(true);
        fetch(`http://localhost:3001/productos/1`)
            .then((response) => response.json())
            .then((data) => setItem(data))
            .catch((error) => setError(error))
            .finally(() => setCargando(false));
    }, []);

    return (
        <div className="itemDetailContainer">
            <ItemDetail product={item} loader={cargando} error={error} />
        </div>
    );
}

export default ItemDetailContainer;