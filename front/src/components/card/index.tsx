import React from 'react';
import { CardProps } from './types';
import Image from "next/image";

export const Card: React.FC<CardProps> = ({ name, description, price, image }) => {
    return (
        <div className="card">
            <div className="card-image">
                {/* <Image src={image} alt={name} width={300} height={300} /> */}
                <img src={image} alt={name} width={200} />
            </div>
            <div className="card-content">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
}