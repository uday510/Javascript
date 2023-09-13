const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
app.use(cors());
const redis = require('redis');
const redisClient = redis.createClient(6379, '127.0.0.1');

redisClient.connect();

redisClient.on('connect', function(err) {
    console.log('Connected to redis');
})
const arrayOfObjects = [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}];
const arrayAsJson = JSON.stringify(arrayOfObjects);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/set', async (req, res) => {
const data = await redisClient.set('arrayOfObjects', arrayAsJson)
console.log(data);
res.send(data);
});

app.get('/get', async (req, res) => {
    const data = await redisClient.get('arrayOfObjects')
    res.send(data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})