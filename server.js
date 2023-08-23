const express = require('express');
require('dotenv').config();
const axios = require('axios');
const app = express();


app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render('index', { weather: null, error: null });
})

//app.post("/")

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey= process.env.apiKey
    //openweatherApi URl
    const APIurl = process.env.APIurl
    let weather;
    let error = null
    try {
        const response = await axios.get(APIurl);
        weather = response.data;
        console.log(weather);
        res.render("index", { weather, error });
    } catch (error) {
        weather = null;
        console.error(error);
    }
    

});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is running on ${port}`);

})