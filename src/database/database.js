const mongoose =  require('mongoose');
const mongoDb = 'mongodb+srv://thiagosousadev:ogaiht2001@posts-ndgcw.mongodb.net/test?retryWrites=true&w=majority';

//Conexão com o banco de dados
const conection = async () => {
    try{
        const connect = await mongoose.connect(mongoDb, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`Database successfully connected`);

    }catch(err){
        console.log(`Error connecting to the database: ${err}`);
    }
}

module.exports = conection()