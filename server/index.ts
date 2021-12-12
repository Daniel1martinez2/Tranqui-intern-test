import express from 'express';
import users from './routes/users'; 
import bodyParser from 'body-parser';

const app = express();
const port = 3333;

app.use(bodyParser.json());

app.get( "/api", ( req, res ) => {
  return res.json({ version: 0.1 });
});

app.use('/users',users); 

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );