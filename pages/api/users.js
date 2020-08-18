const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const bcrypt = require("bcrypt");
const v4 = require("uuid").v4;
const jwt = require("jsonwebtoken");
const jwtSecret = "SUPERSECRETE20220";

const saltRounds = 10;

const client = new MongoClient(
  "mongodb+srv://liargame:Le96uUR0cVXdSZRC@cluster0.jgqhb.mongodb.net/heroku_r0wksrwp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
