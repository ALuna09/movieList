import React from "react";
import data from "./mockData.js";
import Search from "./Search.jsx";
import { useState } from "react";

const App = () => {
    const [movies, setMovies] = useState(data);
    const [searchInput, setSearchInput] = useState('');

    const listOfMovies = movies.map(movie => <li key={movies.indexOf(movie)}>{movie.title}</li>);

    console.log(searchInput);

    return (
        <div>
            <Search 
                setSearchInput={setSearchInput}
            />
            <ul>{listOfMovies}</ul>
        </div>
    );
}


export default App;


// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             searchInput: ''
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(event) {
//         console.log('Poopies', event);
//     }

//     render() {
//         let list = movies.map(movie => <li key={movies.indexOf(movie)}>{movie.title}</li>)


//         return (
//             <div>
//                 <Search 
//                     input={this.state.searchInput}
//                     onChange={this.handleChange}
//                 />
//                 <ul>{list}</ul>
//             </div>
            
//         );
//     }
// }