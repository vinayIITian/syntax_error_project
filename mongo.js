const session = require('express-session');
const express = require('express');
const app = express();

app.use(session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false
    })
)

app.use((req, res, next)=>{
    if (req.session.userID === undefined) {
        console.log('Not logged in!');
        res.locals.username = 'Guest';
        res.locals.isLoggedIn = false;
    } else{
        console.log('logged in!');
        res.locals.username = req.session.username;
        res.locals.isLoggedIn = true;
    }
})

app.post('/login', (req, res)=>{
    if (req.body.password = person.password) {
        req.session.userID = person.id;
        req.session.username = person.Name;
    } else{

    }
});


app.get('/login', (req, res)=>{

});

app.get('/logout', (req, res)=>{
    req.session.destroy((error)=>{
        if (error) {
            console.log(error);
        } else{
            res.redirect('/');
        }
    });
});



