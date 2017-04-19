/**
 * @file 添加头部的 webpack 插件
 * @author 何文林
 * @date 2017/7/20
 */
function AddFilesWebpackPlugin (options) {
  'use strict';
  this.options = options;
}
AddFilesWebpackPlugin.prototype.apply = function (compiler) {
  var option = this.options;
  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
      htmlPluginData.html = htmlPluginData.html.replace('</head>',
        '<script type="text/javascript" src="' + option.path + '"></script></head>')
      callback(null, htmlPluginData);
    });
  });
};
module.exports = AddFilesWebpackPlugin;
