import * as React from "react";
import ItemListContainer from "../../containers/ItemListContainer/ItemListContainer";
import { useParams } from "react-router";

const Category = () => {
    const {id} = useParams();

    return (
        <div>
            <ItemListContainer category={id}/>
            {console.log(id)}
        </div>
    )
}

export default Category
