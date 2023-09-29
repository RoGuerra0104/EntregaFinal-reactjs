import { useParams } from 'react-router-dom'


import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import LoadingComponent from '../components/LoadingComponent/LoadingComponent'
import { useItemCollection } from '../hooks/useItemColection'


const ItemDetails = () => {
    
    const { itemId } = useParams()

    const {data, loading} = useItemCollection ("products", itemId)

    

    return ((loading ? (<LoadingComponent />) : <ItemDetailContainer productData={data}/>)
    )
}

export default ItemDetails