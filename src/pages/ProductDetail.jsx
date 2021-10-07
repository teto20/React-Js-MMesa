import * as React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../containers/ItemDetailContainer/ItemDetailContainer"
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { getFirestore } from "../firebase"


const ProductoDetail = () => {
    const[item, setItem] = React.useState({});
    const [cargando, setCargando] = React.useState(false);
    const [error, setError] =  React.useState(null);
    const {id} = useParams();

    React.useEffect(() => {
        const db = getFirestore();
        const productCollection = db.collection("products");
        const product = productCollection.doc(id);

        product.get()
        .then((doc) => {
            if(doc.empty) {
                console.log("No tenemos datos del detalle")
            } else {
                setItem({ id: doc.id, ...doc.data() });
            }
        } )
        .catch((error) => setError(error))
        .finally(() => setCargando(false))
    }, [id]);

    return (
        <div>
            <ItemDetail product={item} loader={cargando} error={error}/>

        </div>
    )
}

export default ProductoDetail

//<ItemDetailContainer product={item} loader={cargando} error={error}/>
