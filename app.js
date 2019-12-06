 //Mention which module to use, here Express JS module
//  const express = require('/Documents/express-demo/node_modules/express');

//  import express from '/Documents/express-demo/node_modules/express.js';//ES6 format to use express JS module
 
// import express from 'express';

const express = require('express')
const app = express();


 app.get('/', (req, res) =>{
    res.send('Player 1');
    
 } );

 app.get('/api/courses', (req, res) =>{
    // res.send('Player 1');
    res.send([1, 2, 4, 5, 7, 9, 10, 12, 15]);
 } );

 app.get('/api/courses/:id', (req, res) =>{
    // res.send('Player 1');
    //print the API endpoint on the screen
    //http://localhost:8080/api/courses/7 print 7 on the screen 
    res.send(req.params.id);
 } );

 app.get('/api/courses/:year/:month', (req, res) =>{
    // http://localhost:8080/api/courses/2018 prints 2018  
    // res.send(req.params.year);//prints the year taking the input from the endpoint
 
    // http://localhost:8080/api/courses/2018/1 prints 2018  
    // res.send(req.params);//prints the year and month taking the input from the endpoints, output is {"year":"2018","month":"Jan"}

    http://localhost:8080/api/courses/2018/1?sortBy=name prints   
    res.send(req.query); //prints the optional query parameters as a list, output is {"sortBy":"name"}
} );

 //Listen on local host port 8080 and print the message on console

 const port = process.env.PORT || 8080 //using environmental variable to store a port number
 app.listen(port, () => console.log(`App started listening on port ${port}`));

 

//  app.post

//  app.put

//  app.delete