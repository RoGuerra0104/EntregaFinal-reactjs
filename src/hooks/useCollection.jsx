
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";



export const useCollection =(collectionName)=>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();

        const dataColllection = collection(db, collectionName);
        getDocs(dataColllection).then((snapshot) => {
            setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })
            .catch((error) => console.log(error))
            .then(() => setLoading(false))
    }, []);

    return { data, loading}
};