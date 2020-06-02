import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
import jwt from "jsonwebtoken";
import cors from "cors";
require("dotenv").config({ path: "variables.env" });
import datasources from "./src/gqlBase/datasources";
import { typeDefs, resolvers } from "./src//gqlBase//schema/";
// connect to database
mongoose
  .connect(process.env.MONGO_URI_DEV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

// initialize server
const app = express();

const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOption));
app.use(async (req, res, next) => {
  try {
    let token = null;
    if (req && req.cookies && req.cookies.token) {
      token = req.cookies.token;
      req.user = await jwt.verify(token, process.env.SECRET, {
        ignoreExpiration: true,
      });
    }
    if (req && req.headers["token"]) {
      token = req.headers["token"];
      if (token !== "null") {
        req.user = await jwt.verify(token, process.env.SECRET, {
          ignoreExpiration: true,
        });
      }
    }
    return token;
  } catch (e) {
    console.log(e);
    // if (e.message.includes('expired')) {
    // 	req.user = { error: "Login expired" }
    // }
  } finally {
    next();
  }
});
const PORT = process.env.PORT || 4444;

// GRAPHQL SERVER
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    req,
    res,
    datasources,
  }),
});

server.applyMiddleware({ app });
app.listen(PORT, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
});
