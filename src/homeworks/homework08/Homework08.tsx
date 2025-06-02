import { useEffect, useState } from "react";
import MyButton from "../../components/myButton/MyButton";
import Loader from "../../components/loader/Loader";

export default function Homework08() {
  const [fox, setFox] = useState<string>("#");

  const [isLoading, setIsLoading] = useState(true);


  const handleIncrease = () => {
    setIsLoading(true)
    fetch(`https://randomfox.ca/floof/`)
      .then((res) => res.json())
      .then((data) =>{
        setFox(data.image)
        setIsLoading(false)
      } );
  };

  useEffect(() => {
    handleIncrease()
  }, []);

  return (
    <div>
      <h1>Homework: 8 Fox</h1>
      <div>
        <MyButton func={handleIncrease} type="button" text="new fox" />
      </div>
      
      {isLoading ? <Loader/>:<img src={fox} alt="" width={200} />}
    </div>

  );
}
