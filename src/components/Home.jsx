import React, { useEffect, useState } from 'react';
import "../styles/home.css";
import axios from 'axios';
import Card from './Card';
const Home = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            axios.get('https://fakestoreapi.com/products')
                .then((response) => {
                    console.log(response.data);
                    setData((prev) => [...prev, ...response.data]);
                })
            setLoading(false);
        }
        fetchData();
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                fetchData();
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return (
        <div>
            <div className='home__container'>
                <img className='home__image' src='https://m.media-amazon.com/images/I/61JXteI8hTL._SX1500_.jpg' />
            </div>
            <div className='w-full h-auto flex flex-wrap justify-evenly gap-3'>
                {
                    data.map((item, index) => {
                        return <Card key={index} data={item} />
                    })
                }
            </div>
        </div>
    )
}
export default Home