# react-changelogs

## 16.7

### React DOM

-   修复React.lazy对大量延迟加载组件的性能。([@acdlite](https://github.com/acdlite) in [#14429](https://github.com/facebook/react/pull/14429))

-   卸载时清除字段以避免内存泄漏。([@trueadm](https://github.com/trueadm) in [#14276](https://github.com/facebook/react/pull/14276))

-   当混合`react-dom/server@16.6`并且`react@<16.6`时，修复SSR和上下文的错误。([@gaearon](https://github.com/gaearon) in [#14291](https://github.com/facebook/react/pull/14291))

-  修复分析模式中性能回归。 ([@bvaughn](https://github.com/bvaughn) in [#14383](https://github.com/facebook/react/pull/14383))

### 调度程序（实验）

-   发布到`MessageChannel`而不是`window`。([@acdlite](https://github.com/acdlite) in [#14234](https://github.com/facebook/react/pull/14234))

-   减少序列化开销。([@developit](https://github.com/developit) in [#14249](https://github.com/facebook/react/pull/14249))

-   修复测试环境中setTimeout的回退。([@bvaughn](https://github.com/bvaughn) in [#14358](https://github.com/facebook/react/pull/14358))

-   添加调试方法。([@mrkev](https://github.com/mrkev) in [#14053](https://github.com/facebook/react/pull/14053))


[Changelog](https://github.com/facebook/react/blob/master/CHANGELOG.md#1670-december-19-2018)

[Documentation](https://reactjs.org/blog/2018/12/19/react-v-16-7.html)

## 16.6

[Changelog](https://github.com/facebook/react/blob/master/CHANGELOG.md#1660-october-23-2018)
[Documentation](https://5c11762d4be4d10008916ab1--reactjs.netlify.com/)

## 16.5

[Changelog](https://github.com/facebook/react/blob/master/CHANGELOG.md#1650-september-5-2018)
[Documentation](https://5bcf5863c6aed64970d6de5b--reactjs.netlify.com/)

## 16.4.1 (2018-06-13)


[Changelog](https://github.com/facebook/react/blob/master/CHANGELOG.md#1641-June-13-2018)
[Documentation](https://5b90c17ac9659241e7f4c938--reactjs.netlify.com/)

## 16.4.0 (2018-05-23)

### React
-   添加一个新的实验性React.unstable_Profiler组件用来测量性能。 ([@bvaughn](https://github.com/bvaughn) in [#12745](https://github.com/facebook/react/pull/12745))

### React DOM

-   添加对Pointer Events规范的支持。 ([@philipp-spiess](https://github.com/philipp-spiess) in [#12507](https://github.com/facebook/react/pull/12507))

-   不管重新渲染的原因如何，都要正确调用getDerivedStateFromProps()。([@acdlite](https://github.com/acdlite) in [#12600](https://github.com/facebook/react/pull/12600) and [#12802](https://github.com/facebook/react/pull/12802))

-   修复了在某些情况下阻止上下文传播的错误。([@gaearon](https://github.com/gaearon) in [#12708](https://github.com/facebook/react/pull/12708))

-   修复在更深的`setState()`上使用`forwardRef()`组件的重新渲染。([@gaearon](https://github.com/gaearon) in [#12690](https://github.com/facebook/react/pull/12690))

-   修复一些属性错误地从自定义元素节点中删除。([@airamrguez](https://github.com/airamrguez) in [#12702](https://github.com/facebook/react/pull/12702)) 

-   修复如果上面提供的遗留提供者，请不要在新的上下文提供程序上保释。([@gaearon](https://github.com/gaearon) in [#12586](https://github.com/facebook/react/pull/12586))

-   在上下文提供程序组件上添加指定`propTypes`的功能。([@nicolevy](https://github.com/nicolevy) in [#12658](https://github.com/facebook/react/pull/12658))

-   修复在`<StrictMode>`中使用`react-lifecycles-compat`时误报警告。([@bvaughn](https://github.com/bvaughn) in [#12644](https://github.com/facebook/react/pull/12644))

-   当`forwardRef()`渲染函数具有`propTypes`或`defaultProps`时发出警告。([@bvaughn](https://github.com/bvaughn) in [#12644](https://github.com/facebook/react/pull/12644))

-   改进`forwardRef()`和上下文使用者在组件堆栈中的显示方式。([@sophiebits](https://github.com/sophiebits) in [#12777](https://github.com/facebook/react/pull/12777))

-   更改内部事件名称。 这可能会破坏以不受支持的方式依赖React内部的第三方软件包。([@philipp-spiess](https://github.com/philipp-spiess) in [#12629](https://github.com/facebook/react/pull/12629))

### React Test Renderer

-   修复`getDerivedStateFromProps()`支持以匹配新的`React DOM`行为。([@koba04](https://github.com/koba04) in [#12676](https://github.com/facebook/react/pull/12676))

-   修复当父级是片段或其他特殊节点时testInstance.parent崩溃。([@gaearon](https://github.com/gaearon) in [#12813](https://github.com/facebook/react/pull/12813))

-   现在，测试渲染器遍历方法可以发现`forwardRef()`组件。([@gaearon](https://github.com/gaearon) in [#12725](https://github.com/facebook/react/pull/12725))

-   浅渲染器现在忽略返回`null`或`undefined`的`setState()`更新程序。 ([@koba04](https://github.com/koba04) in [#12756](https://github.com/facebook/react/pull/12756))

### React ART

-   修复由`React DOM`管理的树提供的读取上下文。([@acdlite](https://github.com/acdlite) in [#12779](https://github.com/facebook/react/pull/12779))

### React Call Return (实验)

-   此实验已删除，因为它影响了包大小，并且API不够好。 它可能会在未来以某种其他形式回来。([@gaearon](https://github.com/gaearon) in [#12820](https://github.com/facebook/react/pull/12820))

### React Reconciler (实验)

-   The new [host config shape](https://github.com/facebook/react/blob/c601f7a64640290af85c9f0e33c78480656b46bc/packages/react-noop-renderer/src/createReactNoop.js#L82-L285) is flat and doesn't use nested objects.([@gaearon](https://github.com/gaearon) in [#12792](https://github.com/facebook/react/pull/12792))



[Changelog](https://github.com/facebook/react/blob/master/CHANGELOG.md#1640-may-23-2018)

[Documentation](https://5b90c17ac9659241e7f4c938--reactjs.netlify.com/)
