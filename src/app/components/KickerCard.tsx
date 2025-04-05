"use client";

import { MouseEventHandler } from "react";

type KickerCardProps = {
    name: string;
    image: string;
    onClick: MouseEventHandler<HTMLElement>;
}

export default function KickerCard({name, image, onClick}: KickerCardProps) {
    return (
            <article className="kicker-card" onClick={onClick}>
                <h3 className="h3"> {name}</h3>
                <div className="box border-rad"> {image} </div>
            </article>
    )
}