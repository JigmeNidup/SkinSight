import { connectToDB } from "@/utils/database";
import Upload from "@/models/uploads";

export const POST = async (req, res) => {
  const { userId, did, image } = await req.json();
  try {
    await connectToDB();
    const newUpload = new Upload({
      uid: userId,
      did,
      image,
    });

    await newUpload.save();
    return new Response(JSON.stringify(newUpload), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create new upload", {
      status: 500,
    });
  }
};
