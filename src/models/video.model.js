import { Schema, model } from "mongoose";
import mongooseaggregatepagination from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //CLOUDINARY URL
      required: true,
    },
    thumbnail: {
      type: String, //CLOUDINARY URL
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: Number, //CLOUDINARY URL
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    ispublished: {
      type: Boolean,
      default: true,
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    }
  },
  { timestamps: true },
);


videoSchema.plugin(mongooseaggregatepagination);


export default Video = model("Video", videoSchema);
