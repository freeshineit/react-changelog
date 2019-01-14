# react-template-typescript


## react-router-config

本项目路由管理使用的是大众喜欢的[react-router](https://reacttraining.com/react-router/web/example/basic)
不过是使用[react-router-config](https://www.npmjs.com/package/react-router-config)这个npm包配置路由的。


## css

>   npm install style-loader css-loader --save-dev

## less

>   npm install less less-loader --save-dev

## postcss

>   npm install postcss-cssnext postcss-loader --save-dev

⚠️注意：使用`postcss` 要在根目录下先建一个`postcss.config.js`文件对其进行配置，可以参考[postcss-loader](https://github.com/postcss/postcss-loader)

## extract-text-webpack-plugin

webpack4 要使用`next`版,`extract-text-webpack-plugin@next`

> npm install extract-text-webpack-plugin@next --save-dev

```js
// loader 配置
    {
        test: /\.css$/,
        loader: "style-loader!css-loader"
    },
    {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ['css-loader', 'postcss-loader', 'less-loader']
        })
    }
```

## images

项目中图片处理使用`file-loader`

⚠️注意： 图片文件声明要在`src/@types/images.d.ts`中说明


## typescript

⚠️ 注意: 如果引入的npm 没有对应的`.d.ts`声明文件，需要手动去创建。

如npm包`react-countup`，您需要在`src/@types`文件下创建一个文件`react-conuntup/index.d.ts`

具体请参照[typescript declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)


## tslint

## create-react-app

如果您不喜欢这个项目，你可以使用react官方的脚手架去创建

>	npm install -g create-react-app

>	create-react-app my-app --scripts-version=react-scripts-ts

[create-react-app](https://github.com/facebook/create-react-app)

[React Typescript](https://zhongsp.gitbooks.io/typescript-handbook/doc/handbook/tutorials/React.html)

## 结语

如果您喜欢这个项目，可以给个🌟 谢谢🙏
