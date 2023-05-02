import React from "react";
import movies from "./mockData.js";
import Search from "./Search.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {

    }

    render() {
        let list = []

        for (let i = 0; i < movies.length; i++) {
            let movie = movies[i].title

            list.push(<li>{movie}</li>);
        }

        return (
            <div>
                <Search input={this.state.searchInput}/>
                <ul>{list}</ul>
            </div>
            
        );
    }
}

export default App;