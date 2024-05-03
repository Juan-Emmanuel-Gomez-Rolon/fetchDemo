import { useState, useEffect } from 'react' 
import './App.css'

function App() {
  const [imageURL, setImageURL] = useState (null) ;

useEffect (() => {
  fetch ("https:///sonplaceholder.typicode.com/photos", { mode: "cors" })
    .then((response) => response. json())
    .then((response) => setImageURL(response [0].url))
    .catch((error) => console.error (error));
}, []);


return (
  imageURL && (
    <>
      <h1>An image</h1>
      <img src={imageURL} alt={"placeholder text"} />
    </>
  )
)
}

export default App