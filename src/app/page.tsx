import Image from "next/image";
import KickerCardContainer from "./components/KickerCardContainer";

export default function Home() {
  return (
    <div className="wrapper home">
      <header className="cluster">  
        <Image src="./images/logo.svg" alt="Jimmy Bearcrawl Yin Yang Kettlebell Logo" width={300} height={300}/>
        <h1 className="h1">Jimmy Bearcrawl</h1>
      </header>
      <main>
        <KickerCardContainer />
      </main>
    </div>
    
  );
}
