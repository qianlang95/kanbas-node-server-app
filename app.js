
import express from 'express';
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from './assignments/routes.js';
import QuizesRoutes from './quizes/routes.js';
import "dotenv/config";
import session from "express-session";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'


// const CONNECTION_STRING = "mongodb+srv://qianlang95:,Echo995108@cluster0.bhoxyjk.mongodb.net/?retryWrites=true&w=majority";
console.log('you are connect to db: '+CONNECTION_STRING,"@@@@@@@@@@@@@@@#########################")
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors(
    {
        credentials: true,
        origin: "http://localhost:3003",
     
    }
));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  app.use(
    session(sessionOptions)
  );
  
app.use(express.json());

Hello(app)
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);
// QuizesRoutes(app);



app.listen(process.env.PORT || 4000)