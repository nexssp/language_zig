let languageConfig = Object.assign({}, require("./zig.win32.nexss.config"));

const sudo = process.sudo;
const distName = process.distro;
const v = parseInt(process.distroVersion);

const zigVersion = "0.8.0";
const foldername = `zig-linux-x86_64-${zigVersion}-dev.2065+bc06e1982`;
const filename = `${foldername}.tar.xz`;

languageConfig.compilers = {
  zig: {
    install: process.replacePMByDistro(`${sudo}apt install -y wget tar xz
if [ ! -f ${process.env.NEXSS_APPS_PATH}/${filename} ];then wget https://ziglang.org/builds/${filename} -P ${process.env.NEXSS_APPS_PATH}/; fi
if [ ! -d "${process.env.NEXSS_APPS_PATH}/zig${zigVersion}" ]; then mkdir ${process.env.NEXSS_APPS_PATH}/zig${zigVersion} ; fi
tar -xf ${process.env.NEXSS_APPS_PATH}/${filename} --strip-components 1 -C ${process.env.NEXSS_APPS_PATH}/zig${zigVersion}
cd ${process.env.NEXSS_APPS_PATH}/zig${zigVersion}
${sudo}ln -s ${process.env.NEXSS_APPS_PATH}/zig${zigVersion}/zig /usr/bin/zig`),
    command: "zig",
    args: "run <file> --",
    help: ``,
  },
};

switch (distName) {
  case process.distros.UBUNTU:
    // from 20.04 install by snap
    if (v >= 20) {
      languageConfig.compilers.zig.install = `${sudo}snap install zig --classic --edge`;
    }
    break;
  case process.distros.FEDORA:
    languageConfig.compilers.zig.install = process.replacePMByDistro(
      `${sudo}dnf install -y 'dnf-command(copr)'
${sudo}dnf -y copr enable sentry/zig
${sudo}dnf install -y zig zig-doc`
    );
    break;
  default:
    languageConfig.compilers.zig.install = process.replacePMByDistro(
      languageConfig.compilers.zig.install
    );
    break;
}

module.exports = languageConfig;
