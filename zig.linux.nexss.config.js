let languageConfig = Object.assign({}, require("./zig.win32.nexss.config"));
const os = require("@nexssp/os");
const distName = os.name();
languageConfig.compilers = {
  zig: {
    install: os.replacePMByDistro("apt install -y ziglang"),
    command: "zig",
    args: "run <file> --",
    help: ``,
  },
};

switch (distName) {
  case os.distros.ORACLE:
    languageConfig.compilers.zig.install = os.replacePMByDistro(
      languageConfig.compilers.zig.install
    );
    break;
  default:
    break;
}

module.exports = languageConfig;
