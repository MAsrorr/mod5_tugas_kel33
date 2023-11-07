import React from 'react';
import { useLocation } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import './Detailed.css';

function Detailed() {
    const { state } = useLocation();
    const Data = state && state.Data;

    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    if (!Data) {
        return <div className="container">No movie data available.</div>;
    }

    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < Data.rate) {
            stars.push(<AiFillStar key={i} color={STAR_COLOR} size={STAR_SIZE} />);
        } else {
            stars.push(<AiFillStar key={i} color="#ccc" size={STAR_SIZE} />);
        }
    }

    return (
        <div className="container">
            <div className='Title'>
                <img src={Data.img} alt={Data.title} className="detail-img" />
                <h1>{Data.title}</h1>
            </div>
            <p className="detail-stars">{stars}</p>
            <p className="detail-detail">Genre: {Data.genre}</p>
            <p className="detail-detail">Description: {Data.description}</p>
        </div>
    );
}

export default Detailed;
