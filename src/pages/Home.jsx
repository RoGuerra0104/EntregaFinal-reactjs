

import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoadingComponent from "../components/LoadingComponent/LoadingComponent";

import { useCollection } from "../hooks/useCollection";





const Home = () => {

    const {data, loading} = useCollection("products")

    return (loading ? (<LoadingComponent />) : (<ItemListContainer productsData={data} />));


};

export default Home