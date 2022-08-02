const dbConnect = require('./mongodb')

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insert(
        [
            { name: 'S21', brand: 'samsung', price: 90000, category: 'mobile' },
            { name: 'S8', brand: 'samsung', price: 20000, category: 'mobile' }
        ]
    )

    if(result.acknowledged){
        console.log("data inserted")
    }
}

insert();