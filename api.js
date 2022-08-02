const express = require('express')
const dbConnect = require('./mongodb')
const mongodb = require('mongodb')
const app = express();

app.use(express.json());


//GET
app.get('/productlist', async (req, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data)
    console.warn(data)
})

//POST
app.post('/postapi', async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insert(req.body);
    resp.send(result);
})

//PUT
app.put('/updateapi/:name', async (req, resp) => {
    let data = await dbConnect();
    let result = await data.updateOne({ name: req.params.name }, { $set: req.body })
    resp.send({ result: "updated" })
})

//DELETE
app.delete('/deleteapi/:id', async (req, resp) => {
    let data = await dbConnect();
    let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    resp.send({ resullt: "record deleted" })
})

app.listen(5000)