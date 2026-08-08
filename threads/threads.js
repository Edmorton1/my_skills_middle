const { Worker } = require("node:worker_threads");

const worker = new Worker("/Users/user/data/projects/Esoft/MySkills/threads/worker.js");

worker.on("message", (msg) => {
  console.log("from worker:", msg);
});

worker.postMessage("start");