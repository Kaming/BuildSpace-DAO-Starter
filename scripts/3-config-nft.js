import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x2414bFccd5724E5e8b41dbe29c5Eb003Fd48fc23",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Balloon Cat",
        description: "This NFT will give you access to ATHDAO!",
        image: readFileSync("scripts/assets/cat.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()