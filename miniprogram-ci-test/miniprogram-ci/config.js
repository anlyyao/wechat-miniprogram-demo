const { appid } = require('../project.config.json');
const { version, description } = require('../package.json');
const privateKeyPath = process.cwd() + `/miniprogram-ci/private.${appid}.key`;

const ciProject = {
  appid,
  type: 'miniProgram',
  projectPath: process.cwd(),
  privateKeyPath,
  ignores: ['node_modules/**/*'],
};

module.exports = {
  wxVersion: version,
  wxDescription: description,
  wxAppId: appid,
  wxPrivateKeyPath: privateKeyPath,
  ciProject,
};
