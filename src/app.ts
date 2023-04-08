import express from "express";
import cors from "cors";
import routes from "./routers";
import connection from "./config/database";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
const port: number = 3000;

connection
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
