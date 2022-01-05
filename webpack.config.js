// node.js에서 동작

//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export 
module.exports = {
  // parcel index.html
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js', // js파일을 진입점으로 설정한다.
  
  // 결과물(번들)을 반환하는 설정
  output: {
    // path라는 전역모듈이라는 path라는 변수에 할당 후, resolve라는 메소드를 사용 할 수 있고 첫번째인수와 두번째인수에 있는 경로를 합쳐주는 역할이다.
    // __dirname = 현재 파일이 있는 그 경로를 지칭
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true // 기존의 피일을 지워줌
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    }),
  ],

  devServer: {
    host: 'localhost'
  }
}


