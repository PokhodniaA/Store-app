var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const { response } = require("express");
const { read, write } = require('./helper/readAndWrite');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

const port = 3003;

app.listen(port, function () {
    console.log(`Example app listening on port http://localhost:${port}/`);
});

function verifyUsers({ login, password }, response) {
    read('./models/users.json', (error, data) => {
        const newData = JSON.parse(data);
        const user = newData.filter((user) => {
            if (login == user.login && password == user.password) {
                return user
            }
        })[0];
        if (user) {
            response.status(200).send(user);
        } else {
            response.status(401).send({
                error: 'Unauthorized'
            });
        }
    })
}

function includesInArray(data, user) {
    const userLogin = user.login;
    return data.some((item) => {
        const currentLogin = item.login;
        if (currentLogin == userLogin) {
            return true
        }
    });
}


function registration(user, response) { // Здесь можно сделать чтобы по бэкэнду включалось событие
    const data = read('./models/users.json', (error, data) => {
        const dataJSON = JSON.parse(data);
        if (!includesInArray(dataJSON, user)) {
            user.id = dataJSON.length;
            [].push.call(dataJSON, user);
            write('./models/users.json', dataJSON);
            response.status(200).send(user);
        } else {
            response.status(401).send({
                error: 'Unauthorized'
            });
        }
    });
}



app.post('/auth', (req, res) => {
    verifyUsers(req.body, res);
});

app.post('/registr', (req, res) => {
    registration(req.body, res);
});

app.get('/store', (req, res) => {
    read('./models/product.json', function (error, data) {
        console.log(error, 'error/store');
        res.status(200).send(data);
    });
});