import { collection,onSnapshot,orderBy,query } from 'firebase/firestore';

import  { useEffect,useState} from 'react'
import {db} from "../firebase"
import Post from "./Post"

export default function Posts() {
    const [posts,setPosts]=useState([]);
  // const data = posts.map(post => ({key: 'post.id', id: 'post.id', username: 'post.username',userImg:'post.userImg',img:'post.img',caption:'post.caption'})) 
  useEffect(
    ()=>
    onSnapshot(
      query(collection(db,"posts"),orderBy("timestamp","desc")),
      (snapshot)=>{
        setPosts(snapshot.docs);
      }
    ),
     [db]
  );
  // console.log(posts);
  return (
    <div>
     
    {posts.map((post)=>(
     <Post 
      
     key={post.id}
      
     id={post.id}
      username={post.data().username}
      userImg={post.data().profileImg}
      img={post.data().image}
      caption={post.data().caption}
 
     
     />
    
   ))}    
    
   
  </div>
  )
}