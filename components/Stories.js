import faker from "faker";
import { useSession } from "next-auth/react";
import React, { useEffect,useState } from 'react'
import Story from "./Story"

export default function Stories() {
    const [suggestions, setSuggestions]=useState([]);
    const {data:session}=useSession();
    useEffect(()=>{
        //  it using for rendering when page is load first time
            const suggestions=[...Array(20)].map((_,i) =>({
                ...faker.helpers.contextualCard(),
                id:i,
            }));

           
        setSuggestions(suggestions);
    },[]);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sn overflow-x-scroll 
      scrollbar-thin scrollbar-thumb-black ">
        {session && (
          <Story img={session.user.image} username={session.user.username}/>
        )}
      {/* Learning Grid */}
      {suggestions.map((profile)=>(
           <Story key={profile.id}
           imga={profile.avatar } 
           username={profile.username}/>
      ))}
    </div>
  );
}