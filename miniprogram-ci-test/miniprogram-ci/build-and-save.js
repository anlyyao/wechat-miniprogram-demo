const ci = require('miniprogram-ci');
const path = require('path');

const { ciProject } = require('./config');

(async () => {
  const project = new ci.Project({
    ...ciProject,
  });

  // zip 文件保存位置
  const saveZipPath = path.join(__dirname, 'compiledResult.zip');

  const compiledResult = await ci.getCompiledResult(
    {
      project,
      desc: 'hello',
      setting: {
        es6: true,
      },
      qrcodeFormat: 'image',
      qrcodeOutputDest: process.cwd() + '/miniprogram-ci/qrcode.jpg',
      //   onProgressUpdate: console.log,
      pagePath: 'pages/index/index', // 预览页面
      // searchQuery: 'a=1&b=2',  // 预览参数 [注意!]这里的`&`字符在命令行中应写成转义字符`\&`
      // scene: 1011, // 场景值
    },
    saveZipPath
  );
})();
