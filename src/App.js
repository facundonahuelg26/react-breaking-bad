import { useEffect, useState } from "react";



function App() {
  const [quote, setQuote] = useState([]);
  //const [loading, setLoading] = useState(false);

  const updateQuote = async () => {
    //setLoading(true)
    const numberRandom = Math.ceil(Math.random() * 10)
    const urlApi = `https://www.breakingbadapi.com/api/characters/${numberRandom}`
    const res = await fetch(urlApi);
    //console.log(res);
    const data = await res.json();
    setQuote(data)
    // console.log(data);
    //   data.map((el) => {
    //     console.log(el.key);
    //   })
       
  }

  useEffect(() => {
     updateQuote();
  }, []);
  

  const handleClick = () => {
    updateQuote()
  }
  return (
    <div className="App">
      {
        quote.map(el => (
          <div key={el.char_id}>
            <img src={el.img} alt={el.name} />
            <h2>{el.name}</h2>
            <button onClick={handleClick}>Change</button>
          </div>
        ))
      }
      
      
    </div>
    
  );
}

export default App;
