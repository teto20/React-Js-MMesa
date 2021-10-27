import * as React from "react";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HomeCategory from "../../components/HomeCategory/HomeCategory";
import "./HomePageContainer.css";
import { getFirestore } from "../../firebase"

const HomePageContainer = () => {

    const[caregories, setCaregories] = React.useState([]);
    const [cargando, setCargando] = React.useState(false);
    const [error, setError] =  React.useState(null);

    React.useEffect(() => {
        const db = getFirestore();
        const caregoriesCollection = db.collection("categorias");

        setCargando(true);
        caregoriesCollection
        .get()
        .then((querySnapshot) => {
            if(querySnapshot.empty) {
                console.log("No tenemos datos")
            } else {
                setCaregories(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            }
        } )
        .catch((error) => setError(error))
        .finally(() => setCargando(false))
    }, []);

    return (
        <div className="homePageContainer">
            <HomeCarousel />
            <HomeCategory categoryList={caregories} loader={cargando} error={error} />
        </div>
    );
}

export default HomePageContainer;