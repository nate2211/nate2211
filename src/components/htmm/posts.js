import React, {useRef, useState, useContext} from 'react';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import {fbContext} from "../../Firebase";
import {useFBD} from "../../hooks/useFBD";
import PostsView from "./postsview";
import Posts from "../../logic/posts"
export default function PostsUI({user}) {
    const fb = useContext(fbContext)
    const title= useRef();
    const content = useRef();
    const {data, loading, error} = useFBD(user.uid);
    console.log(loading)
    console.log(data)
    const test = new Posts()
    test.add(data)
    const onSubmit = (e) => {
        e.preventDefault();
        fb.fb.database().ref(`${user.uid}/posts/${title.current.value}`).set({
            Content: content.current.value,
            UID: user.uid,
            Title: title.current.value,
            Likes: user.uid
        }).then(() => alert(`Successfully Posted ${title.current.value}`)).catch((error) => {throw new Error(error.message)})
    }
    return(<Container>
        {loading ? <span>loading</span>: <PostsView posts={test} user={user} fb={fb}/>}
        <Form onSubmit={(e) => onSubmit(e)}>
            <h1>Create Post</h1>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' ref={title} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control type='text' as='textarea' rows={10} ref={content} controls required/>
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>

    </Container>)
}
