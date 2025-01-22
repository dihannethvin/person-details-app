const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require("@elastic/elasticsearch");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const client = new Client({ node: "http://localhost:9200" });

app.post("/addPerson", async (req, res) => {
  const { name, age, email } = req.body;
  try {
    const response = await client.index({
      index: "people",
      document: { name, age, email },
    });
    res.status(200).json({ message: "Person added", response });
  } catch (err) {
    res.status(500).json({ message: "Error adding person", error: err });
  }
});

app.get("/getPeople", async (req, res) => {
  try {
    const result = await client.search({
      index: "people",
      query: { match_all: {} },
    });
    const people = result.hits.hits.map(hit => hit._source);
    res.status(200).json(people);
  } catch (err) {
    res.status(500).json({ message: "Error fetching people", error: err });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
