let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Zig";
languageConfig.description =
  "Zig is a general-purpose programming language and toolchain for maintaining robust, optimal, and reusable software.";
languageConfig.url = "https://ziglang.org";
languageConfig.founders = ["Andrew Kelley"];
languageConfig.developers = ["Andrew Kelley"];
languageConfig.years = ["2017"];
languageConfig.extensions = [".zig"];
languageConfig.executeCommandLine = "";
languageConfig.printCommandLine = "";
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "zig";
languageConfig.builders = {
  // pkg: {
  //   install: "npm install -g pkg",
  //   command: "pkg",
  //   //build: "pkg --output <destinationFile> --out-path <destinationPath> <file>",
  //   build: "pkg",
  //   args: "--target host --output <destinationFile> <file>",
  //   help: ``,
  // },
};
languageConfig.compilers = {
  zig: {
    install: "scoop install ziglang",
    command: "zig",
    args: "run <file> --",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.zig.errors");
languageConfig.languagePackageManagers = {};

module.exports = languageConfig;
// console.log(languageConfig.get(`errors`));
// console.log(languageConfig.get("author"));
// console.log(Object.keys(languageConfig.get("osPackageManagers")));
// console.log(Object.keys(languageConfig.get("languagePackageManagers")));
