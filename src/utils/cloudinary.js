import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadToCloudinary = async (localfilepath) => {
  try {
    if (!localfilepath) {
      return null;
    }

    const result = await cloudinary.uploader.upload(localfilepath, {
      resource_type: "auto",
      
    });
    console.log(" File is uploaded " + result + "result");

    return result;
  } catch (error) {
    fs.unlinkSync(localfilepath); //remove the file
    return null;
    
  }
};

export default uploadToCloudinary;
