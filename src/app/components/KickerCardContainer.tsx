import Image from "next/image"
import KickerCard from "./KickerCard"

export default function KickerCardContainer() {
    return (
        <>
        <div className="flex-center">
            <h2 className="h2">Kicker Deck</h2>
            <Image src='./images/arrow.svg' alt="South facing Arrow" width={35} height={35}/>
        </div>
        <div className="grid">
            <KickerCard/>
            <KickerCard/>
            <KickerCard/>
            <KickerCard/>
        </div>

        <div className="flex-center">
            <h2 className="h2">Completed Cards</h2>
            <Image src='./images/arrow.svg' alt="South facing Arrow" width={35} height={35}/>
        </div>
        <div className="grid">
            <KickerCard/>
            <KickerCard/>
            <KickerCard/>
            <KickerCard/>
        </div>
        </>
    )
}