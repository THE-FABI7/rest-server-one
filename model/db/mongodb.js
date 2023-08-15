// packes
const mongoose = require('mongoose');
const config = require('config');

//user : fabian1701927053
//pasword: RQkm4M3j2IwaCkSf

const mongodbInfo = config.get('db_connections.mongodb');
 
const conectionStrin =  `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`


/* Una función que se conecta a la base de datos. */
module.exports = () => {
    mongoose.connect(conectionStrin, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    });
  
    mongoose.connection.on("connected", () => {
      console.log("Connected to mongodb");
    });
  
    mongoose.connection.on("error", (err) => {
      console.log(err);
    });
  
    mongoose.connection.on("disconnected", () => {
      console.log("Disconnected from MongoDB");
    });
  
    mongoose.connection.on("SIGINT", () => {
      mongoose.connection.close(() => {
        console.log(
          "Mongoose default connection disconnected through app termination"
        );
      });
    });
  };
  