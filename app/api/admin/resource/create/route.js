import { connectToDB } from "@/utils/database";
import Disease from "@/models/diseases";

export const POST = async (req, res) => {
  const {
    name,
    image,
    des,
    symptoms,
    treatment,
    prevents,
    causes,
    medicine,
    remark,
  } = await req.json();
  try {
    await connectToDB();
    const newDisease = new Disease({
      name,
      image,
      des,
      symptoms,
      treatment,
      prevents,
      causes,
      medicine,
      remark,
    });

    await newDisease.save();
    return new Response(JSON.stringify(newDisease), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create new disease resource", {
      status: 500,
    });
  }
};
