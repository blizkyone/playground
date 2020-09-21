import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'

export const LargeDivScroll = () => {
    const [ data, setData ] = useState([])

    const scrollRef = useRef()

    useEffect(() => {
        const init = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(res.data)
        setData(res.data)
        }

        init()
    }, [])

    const scroll100 = () => {
        scrollRef.current.scrollTop = 100
    }
    const scroll500 = () => {
        scrollRef.current.scrollTop = 500
    }
    const scroll1000 = () => {
        scrollRef.current.scrollTop = 1000
    }

    return (
        <div>
        <div style={{height: '400px', overflow: 'scroll', background: 'lightblue'}} ref={scrollRef}>
            {data.map((post, i) => <p key={i}>{post.title}</p>)}
        </div>
        <button onClick={scroll100}>Scroll 100</button>
        <button onClick={scroll500}>Scroll 500</button>
        <button onClick={scroll1000}>Scroll 1000</button>
        </div>
    );
}

export default LargeDivScroll
