import { useParams } from "react-router-dom"
import { useCollection } from "../hooks/useCollection"
import LoadingComponent from "../components/LoadingComponent/LoadingComponent";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useState } from "react";
import { useEffect } from "react";



const Category = () => {

    const [productsFiltered, setProductsFiltered] = useState([])

    const { categoryName } = useParams();
    const { data, loading } = useCollection("products");

    useEffect(() => {
        const productsFiltered = data.filter((product) => {
            return product.category === categoryName;
        });
        setProductsFiltered(productsFiltered);
    }, [data, categoryName])


    return loading ? <LoadingComponent /> : <ItemListContainer productsData={productsFiltered} />
}

export default Category