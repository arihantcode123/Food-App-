const mongoose=require("mongoose");
const mongoURI="mongodb+srv://arihantjain:aj123@cluster0.5isause.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";
const mongoDB=async()=>{
    await mongoose.connect(mongoURI)
    .then(async()=>{
        console.log("connected");
        const fetched_data=await mongoose.connection.db.collection("food_items");
        const data=await fetched_data.find({}).toArray();
        const fetched_catData=await mongoose.connection.db.collection("foodCategory");
        const catData=await fetched_catData.find({}).toArray();
        global.food_items=data;
        global.foodCategory=catData;
    })
    .catch((err)=>{
        console.log(err)
    });
}

module.exports=mongoDB;

