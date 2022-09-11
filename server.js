const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

// var fs = require('fs');
// var https = require('https');
// var privateKey = fs.readFileSync(path.join('/var/www/html/ssl/privkey1.pem'), 'utf8');
// var certificate = fs.readFileSync(path.join('/var/www/html/ssl/fullchain1.pem'), 'utf8');
// var credentials = {key: privateKey, cert: certificate};

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(express.static(path.join(__dirname, './build')));

app.get("/", (req, res) => {
    res.sendFile(path.join('/index.html'));
})

// var httpsServer = https.createServer(credentials, app);

// httpsServer.listen(5055, ()=>{
//     console.log(`server running on port 5055`);
// });

app.listen(5055, ()=>{
    console.log(`server running on port 5055`);
});