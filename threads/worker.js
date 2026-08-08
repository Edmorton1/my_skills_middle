const { parentPort } = require("node:worker_threads");

parentPort.on("message", (msg) => {
  console.log("worker got:", msg);

  parentPort.postMessage("done");
});