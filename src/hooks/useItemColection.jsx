import { useEffect } from "react";
import { useState } from "react";

import {doc, getDoc, getFirestore} from "firebase/firestore"

export const useItemCollection = (collectionName, itemId) =>{
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();

        const productItem = doc(db, collectionName, itemId);
        getDoc(productItem).then((snapshot)=>{
            setData({id: snapshot.id, ...snapshot.data() });
        })  
        .catch ((error) =>console.log(error))
        .then(() => setLoading(false))
    }, [itemId]);

    return {data, loading}
}