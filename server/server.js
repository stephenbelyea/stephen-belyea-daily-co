require('dotenv').config({ path: '../.env' });
const axios = require("axios");
const express = require('express');
const cors = require('cors')

const API_KEY = process.env.DAILY_API_KEY;
const BASE_URL = process.env.DAILY_API_BASE_URL;
const PORT = process.env.PORT;

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 
    Authorization: `Bearer ${API_KEY}` 
  }
});

const apiHelper = async (method, url, data = {}) => {
  try {
    const response = await api.request({ 
      method, 
      url, 
      data 
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const app = express();
app.use(express.json());
app.use(cors());

app.get("/info", async (_, response) => {
  try {
    const data = await apiHelper("get", "/");
    response.json(data);
  } catch (e) {
    response.status(500).json({ 
      error: e.message 
    });
  }
});

app.get("/meetings", async (_, response) => {
  try {
    const data = await apiHelper("get", "/meetings");
    response.json(data);
  } catch (e) {
    response.status(500).json({ 
      error: e.message 
    });
  }
});

app.post("/rooms", async (request, response) => {
  try {
    const data = await apiHelper("post", "/rooms", request.body);
    response.json(data);
  } catch (e) {
    response.status(500).json({ 
      error: e.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
});

