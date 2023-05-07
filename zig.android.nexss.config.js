let languageConfig = Object.assign({}, require("./zig.win32.nexss.config"));

languageConfig.compilers = {
  zig: {
    install: "pkg install -y zig",
    command: "zig",
    args: "run <file> --",
    help: ``,
  },
};

module.exports = languageConfig;
