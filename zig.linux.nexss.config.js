let languageConfig = Object.assign({}, require("./zig.win32.nexss.config"));
const os = require(`${process.env.NEXSS_SRC_PATH}/node_modules/@nexssp/os/`);
const sudo = os.sudo();
const distName = os.name();
const v = parseInt(os.v());
languageConfig.compilers = {
  zig: {
    install: os.replacePMByDistro(`${sudo}apt install -y zig`),
    command: "zig",
    args: "run <file> --",
    help: ``,
  },
};

switch (distName) {
  case os.distros.UBUNTU:
    // from 20.04 install by snap
    if (v >= 20) {
      languageConfig.compilers.zig.install = `${sudo}snap install zig --classic --edge`;
    }
    break;
  case os.distros.FEDORA:
    languageConfig.compilers.zig.install = os.replacePMByDistro(
      `${sudo}dnf install -y 'dnf-command(copr)'
${sudo}dnf -y copr enable sentry/zig
${sudo}dnf install -y zig zig-doc`
    );
    break;
  default:
    languageConfig.compilers.zig.install = os.replacePMByDistro(
      languageConfig.compilers.zig.install
    );
    break;
}

module.exports = languageConfig;
