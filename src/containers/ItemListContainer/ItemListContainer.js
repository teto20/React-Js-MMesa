import * as React from "react";
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";
import { getFirestore } from "../../firebase";

const ItemListContainer = ({ category }) => {
  const [items, setItems] = React.useState([]);
  const [cargando, setCargando] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const db = getFirestore();  

    if (category) {
      const productWithCategoryCollection = db
        .collection("products")
        .where("category", "==", Number(category));
      setCargando(true);

      productWithCategoryCollection
        .get()
        .then(querySnapshot => {
          console.log(querySnapshot);
          if (querySnapshot.empty) {
            console.log("No tenemos datos");
          } else {
            setItems(
              querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            );
          }
        })
        .catch(error => setError(error))
        .finally(() => setCargando(false));
    } else {
      setCargando(true);
      const productCollection = db.collection("products")
        productCollection
        .get()
        .then(querySnapshot => {
          if (querySnapshot.empty) {
            console.log("No tenemos datos");
          } else {
            setItems(
              querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            );
          }
        })
        .catch(error => setError(error))
        .finally(() => setCargando(false));
    }
  }, [category]);

  console.log(items)
  return (
    <div className="itemListContainer">
      <ItemList productList={items} loader={cargando} error={error} />
    </div>
  );
};

export default ItemListContainer;
