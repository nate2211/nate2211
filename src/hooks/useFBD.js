import React, {useContext, useState, useEffect} from 'react'
import {fbContext} from "../Firebase"
import {useMountedRef} from "./useMountedRef";
export function useFBD(uid){
    const mounted = useMountedRef()
    const fb = useContext(fbContext)
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    useEffect(() => {
        if(!uid)return;
        if(!mounted.current)return;
        fb.fb.database().ref(`${uid}/posts`).once('value').then(snapshot => {if(!mounted.current) throw new Error("Component Not Mounted"); return snapshot;})
            .then(data => data.val())
            .then(setData)
            .then(() => setLoading(false))
            .catch((error) => {if(!mounted.current) return; setError(error)})

    }, [uid])

    return {data, loading, error}

}
