import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import dotenv from "dotenv"

import postRoutes from './routes/posts.js';

// dotenv.config()


const app = express();

app.use(cors());

app.use('/posts',postRoutes);
const url="mongodb+srv://shama_2701:shama2701@cluster0.la7cbba.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
 mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => { console.log("Database Connection Established") })
.catch((error) => { console.log(error); })

app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`);
})







//1/// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';
//      // import dotenv from "dotenv"

// import postRoutes from './routes/posts.js';

//      // dotenv.config()
// //const url='mongodb+srv://shama_2701:shama2701@cluster0.la7cbba.mongodb.net/?retryWrites=true&w=majority';
// const app = express();
  
// app.use(bodyParser.json({ limit: '30mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

// app.use(cors());

// app.use('/posts',postRoutes);

// const  CONNECTION_URL='mongodb+srv://shama_2701:shama2701@cluster0.la7cbba.mongodb.net/?retryWrites=true&w=majority';

// const PORT = process.env.PORT || 5000;
// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//   .catch((error) => console.log(`${error} did not connect`));

// //mongoose.set('useFindAndModify', false);








// // mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// // .then(() => { console.log("Database Connection Established") })
// // .catch((error) => { console.log(error); })

// // app.listen(PORT, () => {
// //     console.log(`Server Running on PORT: ${PORT}`);
// // })





// // import express from 'express';
// // import bodyParser from 'body-parser';
// // import mongoose from 'mongoose';
// // import cors from 'cors';

// //  import postRoutes from './routes/posts.js'

// // const app = express();
// //   //app.use('/posts', postRoutes);

// // // app.use(bodyParser.json({ limit: '30mb', extended: true }))
// // // app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({extended: true}));
// // //app.use(cors());

// // //const CONNECTION_URL='mongodb+srv://shama_2701:shama2701@cluster0.la7cbba.mongodb.net/?retryWrites=true&w=majority';
// // const PORT=5002;

// // // mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// // //   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
// // //   .catch((error) => console.log(`${error} did not connect`));
// // // const connectDB = async() =>{
// // //   try{
// // //    const conn = await mongoose.connect(CONNECTION_URL);

// // //     console.log(`MongoDB Connected: ${conn.connection.host}`)
// // //   }catch(err){
// // //      console.log(`Error: ${err.message}`);
// // //      process.exit();
// // //   }
// // // }
// // //connectDB();
// //   // mongoose.set('strictQuery', false);
// //   // mongoose.set('useFindAndModify', false);
// // app.listen(PORT,()=>{
// //  console.log(`server is running on ${PORT}`)
// // }
// // );