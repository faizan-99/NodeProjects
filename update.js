const dbConnect = require('./mongodb')

const updateData = async()=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name:'S6'},{$set : {name: 'S6',price: 15000}}
    )
    console.log(result);
}

updateData();