import { Client } from "@elastic/elasticsearch";
import "dotenv/config";

const client = new Client({
  cloud: {
    id: process.env.CLOUD_ID,
  },
  auth: {
    apiKey: process.env.API_KEY,
  },
});

client
  .ping()
  .then((response) => console.log("You are connected to Elasticsearch"))
  .catch((err) => console.error("Elasticsearch is not connected"));

export default client;
