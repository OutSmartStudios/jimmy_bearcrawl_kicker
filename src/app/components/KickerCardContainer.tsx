"use client";

import { useState } from "react";
import Image from "next/image";
import KickerCard from "./KickerCard";
import initialKickers from "../data/Kickers"; 

export default function KickerCardContainer() {
    const [kickers, setKickers] = useState(initialKickers);

    const handleKickerClick = (id: number) => {
    setKickers((prevKickers) =>
        prevKickers.map((kicker) =>
        kicker.id === id ? { ...kicker, complete: !kicker.complete } : kicker
    )
    );
};

return (
    <>
    <div className="flex-center">
        <h2 className="h2">Kicker Deck</h2>
        <Image src="/images/arrow2.svg" alt="South facing Arrow" width={35} height={35} />
    </div>
    <div className="grid">
        {kickers
            .filter((kicker) => !kicker.complete)
            .map((kicker) => (
            <KickerCard
                key={kicker.id}
                name={kicker.name}
                image={kicker.image}
                onClick={() => handleKickerClick(kicker.id)}
            />
        ))}
    </div>

    <div className="flex-center">
        <h2 className="h2">Completed Cards</h2>
        <Image src="/images/arrow2.svg" alt="South facing Arrow" width={35} height={35} />
    </div>
    <div className="grid">
        {kickers
            .filter((kicker) => kicker.complete)
            .map((kicker) => (
            <KickerCard
                key={kicker.id}
                name={kicker.name}
                image={kicker.image}
                onClick={() => handleKickerClick(kicker.id)}
            />
        ))}
    </div>
    </>
    );
}