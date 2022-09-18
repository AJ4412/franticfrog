import nc from "next-connect";
import cors from "cors";

const handler = nc()
  // use connect based middleware
  .use(cors())
  .get(async (res) => {
    const response = await fetch('https://ux16dx58qa.execute-api.us-east-1.amazonaws.com/proof2/0x5DE064024c5b898C016059B5d4c94Fc42cc8579b');

    res.json(response);
    console.log("this is examplejs response"+response);
  });

//export default handler;