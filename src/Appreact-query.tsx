// import { useQuery } from 'react-query';

// function App() {
//   const { isLoading, error, data } = useQuery('photos', () =>
//     fetch('https://jsonplaceholder.typicode.com/photos').then((response) => response.json())
//   );

//   const imageURL = data?.[0].url; // Accedemos al url de la primera imagen

//   if (error) return <div>Error fetching data</div>;
//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <>
//       <h1>An image</h1>
//       <img src={imageURL} alt={"placeholder text"} />
//     </>
//   );
// }

// export default App;
