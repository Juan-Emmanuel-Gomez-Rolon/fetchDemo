// import axios from 'axios';

// function App() {
//   const [imageURL, setImageURL] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/photos')
//       .then((response) => setImageURL(response.data[0].url))
//       .catch((error) => setError(error));
//   }, []);

//   if (error) return <div>Error fetching data</div>;
//   if (!imageURL) return <div>Loading...</div>;

//   return (
//     <>
//       <h1>An image</h1>
//       <img src={imageURL} alt={"placeholder text"} />
//     </>
//   );
// }

// export default App;

