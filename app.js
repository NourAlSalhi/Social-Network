import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes.js';

const app = express();
const PORT = 3000;

// mongoose connection 
mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/CRMdb',{
    useNewUrlParser: true,
})

//body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
  res.send('Hello!');
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})