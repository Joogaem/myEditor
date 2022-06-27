const { resolve } = require('path');

module.exports = {
    target: "web",                              // 노드가 아니라 웹브라우저가 대상.
    mode: "development",        
    resolve: { // entry app의 변환할 파일명
        extensions: ['.tsx', '.js'],
    },                // 배포용 모드. 
    entry:  { // 리액트 파일이 시작하는 곳
        main: './src/app.tsx'
    },                   // 입력 파일.
    output:{ 
        path: resolve(__dirname, "bin"),        // 출력 파일의 위치. 절대 경로. 오브젝트 타입.
        filename: "bundle.js"                   // 출력 파일.
    },
    module: { // 웹팩이 사용할 플러그인 지정
        rules: [{ // 여러개의 규칙들 (배열)
            test: /\.tsx?/, // 규칙 적용할 대상 확장자 (정규 표현식)
            				// jsx? => js, jsx
            exclude: /node_modules/, // 제외
            loader: 'babel-loader',
            options: {
                presets: [ // plugin 설정들의 모음
                    ['@babel/preset-env', {
                        targets: { // 예전 브라우저 지원
                            browsers: ['> 1% in KR'], 
                        }, // 한국에서 1% 이상 점유율 가진 브라우저
                        debug: true, // 개발용
                    }], 
                    '@babel/preset-react'],
                plugins: [],
            },
        }],
    },
    devServer: {
        static: resolve(__dirname, "public"),
        port: 7777,
    },
    presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'usage', // 필요한 폴리필만 추가
            corejs: 3,
          },
        ],
      ],
      plugins: [
        new webpack.LoaderOptionsPlugin({debug:true}),
    ],
    output: { // 컴파일한 코드를 내놓을 위치 (출력)
        path: path.join(__dirname, 'dist'), // 파일위치할 디렉토리를 절대 경로로 지정
        filename: 'app.tsx' // 저장할 파일명 지정
    },
}