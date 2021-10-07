import * as React from "react";
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";
import { getFirestore } from "../../firebase"

const ItemListContainer = (category) => {
    const[items, setItems] = React.useState([]);
    const [cargando, setCargando] = React.useState(false);
    const [error, setError] =  React.useState(null);

    React.useEffect(() => {
        const db = getFirestore();
        const productCollection = db.collection("products");
        console.log(category); 
        if(Array.isArray(category) && !category.length){
            const productWithCategoryCollection = productCollection.where("category","==", category)
        setCargando(true);
        productWithCategoryCollection
        .get()
        .then((querySnapshot) => {
            if(querySnapshot.empty) {
                console.log("No tenemos datos")
            } else {
                setItems(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            }
        } )
        .catch((error) => setError(error))
        .finally(() => setCargando(false))
        } else {

            setCargando(true);
            productCollection
            .get()
            .then((querySnapshot) => {
                if(querySnapshot.empty) {
                    console.log("No tenemos datos")
                } else {
                    setItems(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                }
            } )
            .catch((error) => setError(error))
            .finally(() => setCargando(false))
        }      
    }, [category]);

    return (
        <div className="itemListContainer">
            <ItemList productList={items} loader={cargando} error={error} />
        </div>
    );
} 

export default ItemListContainer;

//const url='http://localhost:3001/productos';

// React.useEffect(() => {
//     const url = prop.category ? `http://localhost:3001/productos?category=${prop.category}` : `http://localhost:3001/productos`;

//     
//     fetch(url)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw response;
//             }
//         })
//         .then((items) => setItems(items))
//         .catch((error) => setError(error))
//         .finally(() => setCargando(false));
// }, [prop.category]);