import React, { useState } from 'react';
import { useEffect } from 'react';

const Searchbox = () => {
    const[search,setSearch] = useState("")
    const [data, setData] = useState ([]);

    console.log(search)


    const getData = async () =>{
        const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setData(data)


    }

    useEffect(() =>{
        getData()

    },[])
    
    const eventHandler = (e) => {
        setSearch(e.target.value)

    }




    return (
        <div className='container'>
            <input onChange={eventHandler} placeholder='search..'></input>
            {
                data.filter(item => {
                    return search.toLowerCase() === "" ? item :item.email.toLowerCase().includes(search)
                }).map(item => <div className='listC'>
                <ul>
                    <li>{item.email}</li>
                </ul>
                </div>)
            }
           
            
        </div>
    );
};

export default Searchbox;