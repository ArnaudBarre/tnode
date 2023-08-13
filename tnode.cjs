#!/usr/bin/env node
const { spawn } = require("node:child_process");

spawn(
  process.execPath,
  [
    "--require",
    require.resolve("./preflight.cjs"),
    "--loader",
    require.resolve("./loader.js"),
    ...process.argv.slice(2),
  ],
  {
    stdio: [
      "inherit", // stdin
      "inherit", // stdout
      "inherit", // stderr
      "ipc", // parent-child communication
    ],
  }
).on('exit', (code) => {
  if (code) process.exit(code)
});
