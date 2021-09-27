import * as React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../containers/ItemDetailContainer/ItemDetailContainer"
import ItemDetail from "../ItemDetail/ItemDetail";


const ProductoDetail = () => {
    const[item, setItem] = React.useState({});
    const [cargando, setCargando] = React.useState(false);
    const [error, setError] =  React.useState(null);
    const {id} = useParams();

    React.useEffect(() => {

        setCargando(true);
        fetch(`http://localhost:3001/productos/${id}`)
            .then((response) => response.json())
            .then((data) => setItem(data))
            .catch((error) => setError(error))
            .finally(() => setCargando(false));
    }, [id]);
    return (
        <div>
            <ItemDetail product={item} loader={cargando} error={error}/>

        </div>
    )
}

export default ProductoDetail

//<ItemDetailContainer product={item} loader={cargando} error={error}/>
