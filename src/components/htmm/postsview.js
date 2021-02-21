import React, {useState, useReducer, useEffect} from 'react';
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

export default function PostsView({posts, user, fb}){
    if(posts == null){
        return <span>none</span>
    }
    const onLike = (e, post) => {
        e.preventDefault();
        fb.fb.database().ref(`${posts[post].UID}/posts/${posts[post].Title}`).update({Likes: [posts[post].Likes, user.uid]})
    }

    return(<Container>
         <h2>Posts</h2>
        {posts.posts.map((post, i) => (
            <PostCard key={i} post={i} posts={posts.posts} user={user} fb={fb}/>
        ))}

    </Container>)
}
const PostCard = ({post, posts, user, fb}) => {
    const [liked, toggle] = useReducer(liked => !liked, false);
    if(posts[post].Likes.includes(user.uid)){

    }
    useEffect(() => {
        const ref = fb.fb.database().ref(`${posts[post].UID}/posts/${posts[post].Title}/Likes`)
        if(liked === true){ref.update( [user.uid])}
        else{
            ref.once('value').then((snapshot) => {return snapshot})
            .then((data) => data.val().filter(uid => uid !== user.uid))
            .then((data) => ref.set([data])).catch((err) => console.log('null'))


        }
    }, [liked])
    return(
    <Card>
        <Card.Body>
            <Card.Title>{posts[post].Title}</Card.Title>
            <Card.Text>
                {posts[post].Content}
            </Card.Text>
        </Card.Body>
        {liked ? <Button onClick={toggle} >Unlike</Button>: <Button onClick={toggle}>Like</Button>}
    </Card>)
}


