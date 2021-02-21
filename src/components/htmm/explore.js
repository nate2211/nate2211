import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import {FixedSizeList} from 'react-window';
import {useFBD} from "../../hooks/useFBD";
import {fbContext} from "../../Firebase";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Posts from "../../logic/posts";
import useBigFBD from "../../hooks/useBigFBD";
export default function Explore({user}) {
    const fb = useContext(fbContext)
    let [posts] = useBigFBD()
    let test = ['1', '2']
    console.log(test[0])
    console.log(posts[0])
    const renderRow = ({index, style}) => (
        <div style={{...style, ...{display: "flex"}}}>
            <p>{posts[index].Title}</p>
            <h1>hey</h1>
        </div>

    )



    return(
        <Container>
            <FixedSizeList
                height={window.innerHeight}
                width={window.innerWidth -20}
                itemCount={posts.length}
                itemSize={50}>
            {renderRow}
            </FixedSizeList>
        </Container>
    )

}


