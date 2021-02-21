import React, {useEffect, useContext} from "react";
import Container from "react-bootstrap/Container";

import {fbContext} from "../../Firebase";
export default function HomePage({location, history}){
    const fb = useContext(fbContext)
    useEffect(() => {


    })
    if(location.pathname === '/sign-in'){
        fb.auth
            .signInWithRedirect(fb.provider).then(history.push('/'))
    }
    if(location.pathname === '/sign-out'){
        fb.fb.auth().signOut().then(history.push('/' )
  )
    }
    return(<Container>
        <h1>Home</h1>



    </Container>)
}
