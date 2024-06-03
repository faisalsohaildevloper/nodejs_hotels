// function add(a,b){
//   return a + b;
// }

// const { json } = require("express");

// var add = function(a,b) {
//   return a + b;
// }

// var add = (a, b) => {return a + b;}

// var add = (a, b) => a + b;

// var result = add(444,7);
// console.log(result)

// (function(){
//   console.log('faisal is added');
// })();

// callback function

// function callback(){
//   console.log('now adding is successful complete')
// }

// const add = function (a,b, callback){
//   var result = a + b;
//   console.log('result: '+ result); // main function work complete
//   callback();
// }

// // add(2,3, function(){
// //   console.log('add completed');
// // });

// add(2,3, ()=> console.log('add completed') )

// var fs = require('fs');
// var os = require('os')

// var user = os.userInfo();
// console.log(user);
// console.log(user.username)

// fs.appendFile('greeting.txt', 'Hi ' +  user.username + '!\n',
//  () => console.log('file is created'));

// const notes = require('./notes')
// var _ = require('lodash');

// console.log('server file is available')

// var age = notes.age;
// var result = notes.addNumber(age + 18, 10)
// console.log(age);
// console.log('result is now '+ result);
// var data = ["person","person",1,3,1,2, 'name','age','2'];
// var filter = _.uniq(data);
// console.log(filter);

// *convert data string to object and object to string*

// const objectToConvert = {
//   name: "Faisal",
//   age: 25,
// };

// const faisal = JSON.stringify(objectToConvert); //convert object to JSON string
// console.log(faisal);


// app.get('/home', function(req,res){
//   res.send('in summers I prefer to stay at home')
// })

// app.get('/surma', function(req,res){
//   var costomized_surma = {
//     name: 'Surma Abe Zam Zam',
//     quantity: '1 Tola',
//     price : '200 Rs',

//   }
//   res.send(costomized_surma)
// })



// *MAKE A SERVER * 
const express = require('express')
const app = express()
const db = require('./db');

const bodyParser = require('body-parser'); //req.body
app.use(bodyParser.json());  //req.body

app.get('/', function (req, res) {
  res.send('Welcome to our Hotel')
})


// import the router files
const personRoutes = require('./routes/personRoutes');
// const menuRoutes = require('./routes/menuRoutes');

// use the routers
app.use('/person', personRoutes);
// app.use('/menu', menuRoutes);
  
app.listen(3000, ()=>{
  console.log('server is listening on port 3000')
})
