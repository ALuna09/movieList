const express = require('express');
const axios = require('axios').default;
const cors = require('cors');
const app = express();

require("dotenv").config();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/movies', (req, res) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

    async function apiRequest() {
        try {
            const response = await axios.get(url);
            // console.log(response.data.results);
            res.json(response.data.results.map(movie => {
                return {
                    title: movie.title,
                    overview: movie.overview
                }
            }));
        } catch (err) {
            console.error(err);
        }
    }

    apiRequest();
})

app.listen(4000, () => {
    console.log('Listening on port 4000');
});