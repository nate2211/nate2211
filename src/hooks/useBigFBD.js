import React, {useContext, useState} from "react";
import {fbContext} from "../Firebase";

import Posts from "../logic/posts"
export default function  useBigFBD() {
    const posts = new Posts();
    const [loading, setLoading] = useState(true)
    const fb = useContext(fbContext)
    fb.fb.database().ref('/').orderByChild('likes').once('value', (snapshot) => {
        posts.itr(snapshot.val())
    }).then(() => setLoading(false)).catch((error) => {throw new Error(error.message)})

    return posts
}
