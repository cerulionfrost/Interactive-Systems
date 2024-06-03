import React, {useState, useEffect} from "react";
import axios from 'axios'


function App() {

  const[coins, setCoins] = useState ([]) //bu default this is going to just be an empty array because we will return an array of coins

  useEffect(() => { //UseEffect is just replacing the componenet did mount, componenet will mount (etc)
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
  }).catch((error) => {
    console.log(error)
    })
  }, [])  

  return (
    <>
      

    </>
  );
}

export default App;
