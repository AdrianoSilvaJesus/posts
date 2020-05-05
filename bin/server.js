const app = require('../src/app');
const port = process.env.PORT || 3000;

//Tratativa de erros

// Conexão com o servidor
app.listen(port, () => {
    try{
        console.log(`Server running on the port: ${port}`);
    }catch(err){
        console.log(`Server error: ${err}`);       
    }
})