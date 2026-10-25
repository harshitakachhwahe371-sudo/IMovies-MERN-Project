import mongoose from 'mongoose';
const schema=new mongoose.Schema({title:{type:String,required:true,trim:true},description:{type:String,required:true},genre:[String],language:{type:String,default:'Hindi'},durationMins:{type:Number,min:1,default:140},rating:{type:Number,min:0,max:10,default:0},posterUrl:{type:String,default:''},releaseDate:Date,isActive:{type:Boolean,default:true}},{timestamps:true});
schema.index({title:'text',description:'text'},{default_language: 'none', language_override: 'lang'});schema.index({genre:1,language:1,isActive:1});export default mongoose.model('Movie',schema);
