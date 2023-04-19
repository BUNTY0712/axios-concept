import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
	const url = 'https://jsonplaceholder.typicode.com/comments';
	const [data, setData] = useState([]);

	// By Fetching Method
	//  useEffect(() => {
	//   const url = "https://jsonplaceholder.typicode.com/comments"
	//   fetch(url)
	//   .then(response => response.json())
	//   .then(json => {
	//    console.log("jsonnn", json)
	//    setData(json)
	//   }).catch (e => {
	//       console.log("e", e)
	//   })
	// }, [])

	useEffect(() => {
		axios.get(url).then((response) => {
			setData(response.data);
		});
	}, []);
	return (
		<>
			{/* By Fetching Method  */}
			{/* <div className='App'>
        <h2>Welcome</h2>
        {
           data.map(itme => {
            return(
              <div>
                {itme.email}
                </div>
            )
           }) 
        }
       </div> */}
			<h2>Welcome</h2>
			{data.map((item) => {
				return <div>{item.email}</div>;
			})}
		</>
	);
};

export default App;
