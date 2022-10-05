const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "./output", // ** Path of .json file **//
  reportPath: "./html",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "mac",
      version: "Catalina",
    },
  },
});
