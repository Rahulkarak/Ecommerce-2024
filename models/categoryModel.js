import mongoose from "mongoose";
//import Role from "./model.js";

const CategorySchema=new mongoose.Schema({
    name:{
        type:String,
       // required:true,
       // unique:true,
    },
    slug:{
        type:String,
        lowercase:true,
    },
});

//export default mongoose.model("category",CategorySchema);

const Category = mongoose.model("Category", CategorySchema);

export default Category;