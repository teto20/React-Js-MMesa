import * as React from "react";
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
    const[items, setItems] = React.useState([]);
    const [cargando, setCargando] = React.useState(false);



    React.useEffect(() => {
        setCargando(true);
        getProducts()
        .then((result) => setItems(result))
        .finally(() => setCargando(false));
    }, []);

    const getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });
    };

    return (
        <div className="itemListContainer">
            <ItemList productList={items} loader={cargando} />
        </div>
    );
} 

export default ItemListContainer;


const productos = [
    {
        id: 0,
        title: "Prensa Francesa", 
        description:"Apreciado por conocedores del café de todo el mundo, el icónico sistema de preparación por cafetera de émbolo de Bodum ofrece simplicidad de preparación y pureza de sabor. La cafetera francesa JAVA tiene un diseño icónico y de estilo retro con todas las cualidades modernas necesarias para producir un café rico y lleno de sabor.", 
        image:"https://m.media-amazon.com/images/I/61b6-G1uUeL._AC_SY879_.jpg", 
        price:1250
    },
    {
        id: 1, 
        title: "Jarra Hario Server", 
        description:"Esta jarra server 02 V60 es un servidor de café adaptable a cualquiera de los dripper de la misma medida 02 Hario (también disponibles en la página). Incorpora líneas de medición que facilitan la preparación de la cantidad justa. Apto para microondas con o sin tapa.", 
        image:"https://m.media-amazon.com/images/I/91q-XwGir2L._AC_SX679_.jpg", 
        price:1090
    },
    {
        id: 2, 
        title: "Cafetera de filtrado Bodum Pour Over", 
        description:"La Cafetera manual de filtro Pour Over Bodum es la clave para hacer un café más intenso y potente desde la comodidad de tu hogar. Su estética basada en el diseño es un complemento atractivo para cualquier cocina. Fabricada con vidrio de borosilicato de calidad superior que no absorbe el sabor o el aroma, la jarra de bello modelado está equipada con un filtro permanente de acero inoxidable para una preparación realmente sostenible. Sin desperdiciar filtros de papel que atrapan los aceites esenciales y el sabor; solo café puro con toda su intensidad.", 
        image:"https://m.media-amazon.com/images/I/61GR+XZqvOL._AC_SX679_.jpg", 
        price:2190
    },
    {
        id: 3, 
        title: "Cafetera Aeropress", 
        description:"La cafetera AeroPress es un dispositivo para preparar café inventado en 2005 por el estadounidense Alan Adler. Su estructura está formada por dos cilindros de plástico que juntos funcionan como una jeringuilla que introduce aire a presión sobre la mezcla de agua y café molido para filtrar el café a través de un filtro de papel o de metal cilíndrico.", 
        image:"https://m.media-amazon.com/images/I/516+xZjY0UL._AC_SX679_.jpg", 
        price:2790
},
    {
        id: 4, 
        title: "Cafetera Sifón + Mechero", 
        description:"Hacer café con esta cafetera al vacío es una experiencia espectacular y emocionante. El antiguo proceso de elaboración de café con sifón lleva el espectáculo cafetero a su máxima expresión. En él, el arte y la ciencia se mezclan con un toque de magia para desafiar la gravedad. Pero no todo es espectáculo: la cafetera extrae los aceites esenciales del café, ya molido, para crear una bebida limpia, equilibrada y llena de sabor con un aroma robusto.", 
        image:"https://m.media-amazon.com/images/I/61L3qoTLnVL._AC_SX679_.jpg", 
        price:12500
},
    {
        id: 5, 
        title: "Cafetera de espresso Flair Classic", 
        description:"La cafetera de espresso Flair es un artículo revolucionario para todo amante del espresso ¿Por qué? Porque nos permite disfrutar de un espresso de calidad donde sea que estemos, en casa, de vacaciones o en mitad del bosque. Lo único que necesitaremos será un molinillo (o el café ya molido) y agua caliente, la magia la hace sola!", 
        image:"https://m.media-amazon.com/images/I/710uKye7lIL._AC_SX679_.jpg", 
        price:12600
},
];