### How to install:

- Clone or fork this repo
- Install NodeJS and MongoDB
- Run 'mongod'
- Run `sudo npm install`
- run `mongoimport --db teamtow --collection truckData --drop --file ./truck.json` to import sample truck information in MongoDB
- run `mongoimport --db teamtow --collection clientData --drop --file ./client-data.json` to import sample clients information in MongoDB

### How to run: 

- run `node app.js`
- Open a demo client page by going to http://localhost:8000/client.html?clientId=01
- Open 3 or more truck pages from the imported truck profiles on separate tabs 



[01](http://localhost:8000/truck.html?userId=01), 
[02](http://localhost:8000/truck.html?userId=02), 
[03](http://localhost:8000/truck.html?userId=03), 
[04](http://localhost:8000/truck.html?userId=04), 
[05](http://localhost:8000/truck.html?userId=05), 
[06](http://localhost:8000/truck.html?userId=06), 
[07](http://localhost:8000/truck.html?userId=07)