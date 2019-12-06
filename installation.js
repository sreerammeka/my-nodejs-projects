//Install Node JS on local machine
check using "node -v" for if Node JS is installed and present

//create a directory and switch to that directory
mkdir express-demo
cd express-demo

//install express
npm install express

//to install any package globally
npm install -g express

//Use Nodemon to reflect the changes on your code instantly after saving
//to install Nodemon globallly
npm install -g nodemon

//run a JS file using nodemon
nodemon app.js

//To define environmental variables on local machine
//on macbook
export PORT=5000
//On windows
set PORT=5000

