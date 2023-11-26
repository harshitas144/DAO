import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x8eE70d92CFe75E246261B4568B2099Fb89A01194", "edition-drop");  // replace here with your edition drop adress 
    await editionDrop.createBatch([
      {
        name: "PeasDAO Membership",
        description: "A NFT for fans of Peas.",
        image: "https://gateway.ipfs.io/ipfs/QmXBSitWTft3Xx3P9oBCuFhMQruEFHS6as9B6WbRVdqNUE",
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
