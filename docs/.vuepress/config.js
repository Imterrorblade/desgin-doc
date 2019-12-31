const { fs } = require('@vuepress/shared-utils')
const path = require('path')


module.exports = {
  title: 'Fingo Desgin',
  description: 'Fingo Desgin',
  base: '/',
  dest: "dist",
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],
  themeConfig: {
    sidebar: [
      {
        title: '样式',   // 必要的
        path: '/style/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/style/spacing',
          '/style/color',
          '/style/text',
        ]
      }
    ]
  },
  postcss: {
    plugins: [
      require('postcss-propro'),
      require('postcss-flex-alias'),
      require('autoprefixer')
    ]
  },
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@images'] = '@source/.vuepress/public/images'
  }
}


function getSideBar(title, filePath) {
  return [{
    title,
    collapsable: true,
    children: getFileList(filePath)
  }]
}

//自动生成文件目录
function getFileList(filePath) {
  // const excludes = ['.DS_Store','.xml',',png','.jpg','pdf'];
  let targetPubPath = filePath.slice(2);
  const fileList = [];

  fs.readdirSync(path.resolve(__dirname, filePath)).forEach(filename => {
    // if (excludes.indexOf(filename) < 0) {
    if (filename.indexOf('.md') >= 0) {
      if (filename === 'README.md') {
        filename = '';
      } else {
        filename = filename.replace('.md', '');
      }
      let path = targetPubPath + '/' + filename;
      fileList.push(path);
    }
  })
  return fileList.sort();
}
