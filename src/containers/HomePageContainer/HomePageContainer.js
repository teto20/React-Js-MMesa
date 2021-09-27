import * as React from "react";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import HomeCategory from "../../components/HomeCategory/HomeCategory";
import "./HomePageContainer.css";

const HomePageContainer = () => {

    const[caregories, setCaregories] = React.useState([]);
    const [cargando, setCargando] = React.useState(false);
    const [error, setError] =  React.useState(null);

    React.useEffect(() => {
        const url="http://localhost:3001/categorias";

        setCargando(true);
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then((caregories) => setCaregories(caregories))
            .catch((error) => setError(error))
            .finally(() => setCargando(false));
    }, []);

    return (
        <div className="homePageContainer">
            <HomeCarousel />
            <HomeCategory categoryList={caregories} loader={cargando} error={error} />
        </div>
    );
}

export default HomePageContainer;