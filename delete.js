const dbConnect = require('./mongodb');

const deleteData = async ()=>{
    const data = await dbConnect();
    //let result = await data.deleteOne({name:'iphone 6'});
    let result = await data.deleteMany({name:'iphone X'});
    if(result.acknowledged){
       console.log('record deleted')
    }
}

deleteData();

