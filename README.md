# react-changelogs

## 16.7

### React DOM

-   修复 `React.lazy` 对大量延迟加载组件的性能。([@acdlite](https://github.com/acdlite) in [#14429](https://github.com/facebook/react/pull/14429))

-   卸载时清除字段以避免内存泄漏。([@trueadm](https://github.com/trueadm) in [#14276](https://github.com/facebook/react/pull/14276))

-   当混合`react-dom/server@16.6`并且`react@<16.6`时，修复SSR和上下文的错误。([@gaearon](https://github.com/gaearon) in [#14291](https://github.com/facebook/react/pull/14291))

-  修复分析模式中性能回归。 ([@bvaughn](https://github.com/bvaughn) in [#14383](https://github.com/facebook/react/pull/14383))

### 调度程序（实验）

-   发布到`MessageChannel`而不是`window`。([@acdlite](https://github.com/acdlite) in [#14234](https://github.com/facebook/react/pull/14234))

-   减少序列化开销。([@developit](https://github.com/developit) in [#14249](https://github.com/facebook/react/pull/14249))

-   修复测试环境中`setTimeout`的回退。([@bvaughn](https://github.com/bvaughn) in [#14358](https://github.com/facebook/react/pull/14358))

-   添加调试方法。([@mrkev](https://github.com/mrkev) in [#14053](https://github.com/facebook/react/pull/14053))


[Changelog](https://github.com/facebook/react/blob/master/CHANGELOG.md#1670-december-19-2018)
[Documentation](https://reactjs.org/blog/2018/12/19/react-v-16-7.html)

## 16.6.3 (2018-11-12)

### React DOM

-   修复 `Suspense` 和 `lazy` 中的bugs。([@acdlite](https://github.com/acdlite) in [#14133](https://github.com/facebook/react/pull/14133), [#14157](https://github.com/facebook/react/pull/14157), and [#14164](https://github.com/facebook/react/pull/14164))

-   修复React DevTools中 `React.memo` 更新的突出显示。([@bvaughn](https://github.com/bvaughn) in [#14141](https://github.com/facebook/react/pull/14141))

-   修复 `Suspense` 与 `React Profiler` 的交互。([@bvaughn](https://github.com/bvaughn) in [#14065](https://github.com/facebook/react/pull/14065))

-   修复使用 `Suspense` 时误报警告。([@acdlite](https://github.com/acdlite) in [#14158](https://github.com/facebook/react/pull/14158))

### React DOM Server

-   修复 `renderToNodeStream()` 调用之间不正确的上下文状态共享。([@sebmarkbage](https://github.com/sebmarkbage) in [#14182](https://github.com/facebook/react/pull/14182))

-   添加有关 `context` API使用不正确的警告。([@trueadm](https://github.com/trueadm) in [#14033](https://github.com/facebook/react/pull/14033))


[Changelog](https://github.com/facebook/react/blob/master/CHANGELOG.md#1663-november-12-2018)

[Documentation](https://5c11762d4be4d10008916ab1--reactjs.netlify.com/)

## 16.6.2 (2018-11-12)

此版本是以中断状态发布的，应跳过。

## 16.6.1 (2018-11-06)

### React DOM

-   每次promise resolves 倒退不应该重新挂载。([@acdlite](https://github.com/acdlite) in [#14083](https://github.com/facebook/react/pull/14083)))

-   修复即使在所有内容完成加载后 `Suspense` 仍然显示回退的错误。([@acdlite](https://github.com/acdlite) in [#14083](https://github.com/facebook/react/pull/14083))

-   修复 `lazy` 组件的生命周期方法中未解析的默认 `props`。([@gaearon](https://github.com/gaearon) in [#14112](https://github.com/facebook/react/pull/14112))

-   修复从完成阶段抛出的错误中恢复时的错误。([@gaearon](https://github.com/gaearon) in [#14104](https://github.com/facebook/react/pull/14104))

### 调度程序（实验）

-   从 `deadline` 对象切换到 `shouldYield` API。([@acdlite](https://github.com/acdlite) in [#14025](https://github.com/facebook/react/pull/14025))


## 16.6.0 (2018-10-23)

### React

-   添加 `React.memo()` 作为 `PureComponent` 的替代函数。([@acdlite](https://github.com/acdlite) in [#13748](https://github.com/facebook/react/pull/13748))

-   为代码拆分组件添加 `React.lazy()`。([@acdlite](https://github.com/acdlite) in [#13885](https://github.com/facebook/react/pull/13885))

-   `React.StrictMode` 现在警告遗留上下文API。([@bvaughn](https://github.com/bvaughn) in [#13760](https://github.com/facebook/react/pull/13760))

-   `React.StrictMode` 现在警告`findDOMNode`。([@sebmarkbage](https://github.com/sebmarkbage) in [#13841](https://github.com/facebook/react/pull/13841))

-   将 `unstable_AsyncMode` 重命名为 `unstable_ConcurrentMode`。([@trueadm](https://github.com/trueadm) in [#13732](https://github.com/facebook/react/pull/13732))

-   将 `unstable_Placeholder` 重命名为 `Suspense`，将 `delayMs` 重命名为 `maxDuration`。([@gaearon](https://github.com/gaearon) in [#13799](https://github.com/facebook/react/pull/13799) and [@sebmarkbage](https://github.com/sebmarkbage) in [#13922](https://github.com/facebook/react/pull/13922))

### React DOM

-   添加 `contextType` 作为一种更符合人体工程学的方式来从类订阅上下文。([@bvaughn](https://github.com/bvaughn) in [#13728](https://github.com/facebook/react/pull/13728))

-   添加 `getDerivedStateFromError` 生命周期方法，以便在将来的异步服务器端渲染器中捕获错误。([@bvaughn](https://github.com/bvaughn) in [#13746](https://github.com/facebook/react/pull/13746))

-   使用 `<Context>` 而不是 `<Context.Consumer>` 时发出警告。([@trueadm](https://github.com/trueadm) in [#13829](https://github.com/facebook/react/pull/13829))

-   修复iOS Safari上的灰色叠加层。([@philipp-spiess](https://github.com/philipp-spiess) in [#13778](https://github.com/facebook/react/pull/13778))

-   修复因开发中覆盖 `window.event` 而导致的错误。([@sergei-startsev](https://github.com/sergei-startsev) in [#13697](https://github.com/facebook/react/pull/13697))

### React DOM Server

-   添加对 `React.memo()` 的支持。([@alexmckenley](https://github.com/alexmckenley) in [#13855](https://github.com/facebook/react/pull/13855))

-   添加对 `contextType` 的支持。([@alexmckenley](https://github.com/alexmckenley) and [@sebmarkbage](https://github.com/sebmarkbage) in [#13889](https://github.com/facebook/react/pull/13889))

### 调度程序（实验）

-   将包重命名为`scheduler`。([@gaearon](https://github.com/gaearon) in [#13683](https://github.com/facebook/react/pull/13683))

-   支持优先级，延续和包装回调。([@acdlite](https://github.com/acdlite) in [#13720](https://github.com/facebook/react/pull/13720) and [#13842](https://github.com/facebook/react/pull/13842))

-   改进非DOM环境中的回退机制。([@acdlite](https://github.com/acdlite) in [#13740](https://github.com/facebook/react/pull/13842))

-   提前安排 `requestAnimationFrame`。([@acdlite](https://github.com/acdlite) in [#13785](https://github.com/facebook/react/pull/13785))

-   修复DOM检测更彻底。([@trueadm](https://github.com/trueadm) in [#13731](https://github.com/facebook/react/pull/13731))

-   通过交互跟踪修复错误。([@bvaughn](https://github.com/bvaughn) in [#13590](https://github.com/facebook/react/pull/13590))

-   将 `envify` 转换添加到包中。([@mridgway](https://github.com/mridgway) in [#13766](https://github.com/facebook/react/pull/13766))

## 16.5.2 (2018-09-18)

### React DOM

-   修复了最近的 `<iframe>` 回归。([@JSteunou](https://github.com/JSteunou) in [#13650](https://github.com/facebook/react/pull/13650))

-   修复 `updateWrapper`，以便在数据不变时 `<textarea>` 不再重新渲染。([@joelbarbosa](https://github.com/joelbarbosa) in [#13643](https://github.com/facebook/react/pull/13643))

### 调度程序（实验）

-   将 `tracking` API重命名为 `tracing`。([@bvaughn](https://github.com/bvaughn) in [#13641](https://github.com/facebook/react/pull/13641))

-   添加UMD生产+分析入口点。([@bvaughn](https://github.com/bvaughn) in [#13642](https://github.com/facebook/react/pull/13642))

-   重构 `schedule` 以删除一些 `React-isms` 并提高延迟更新超时的性能。([@acdlite](https://github.com/acdlite) in [#13582](https://github.com/facebook/react/pull/13582))

[Changelog](https://github.com/facebook/react/blob/master/CHANGELOG.md#1652-september-18-2018)

[Documentation](https://5bcf5863c6aed64970d6de5b--reactjs.netlify.com/)


## 16.5.1 (2018-09-13)

### React

-   当 `React.forwardRef` 收到意外数量的参数时，改进警告。([@andresroberto](https://github.com/andresroberto) in [#13636](https://github.com/facebook/react/pull/13636))

### React DOM

-   修复React Native Web使用的不稳定导出中的回归。([@aweary](https://github.com/aweary) in [#13598](https://github.com/facebook/react/pull/13598))

-   修复组件定义名为 `isReactComponent` 的方法时发生崩溃的问题。([@gaearon](https://github.com/gaearon) in [#13608](https://github.com/facebook/react/pull/13608))

-   修复在打印警告时IE9中的开发模式崩溃。([@link-alex](https://github.com/link-alex) in [#13620](https://github.com/facebook/react/pull/13620))

-   在使用 `schedule/tracking` 运行 `react-dom/profiling` 时提供更好的错误消息。([@bvaughn](https://github.com/bvaughn) in [#13605](https://github.com/facebook/react/pull/13605))

-   如果 `ForwardRef` 组件定义了 `displayName`，请在警告中使用它。([@probablyup](https://github.com/probablyup) in [#13615](https://github.com/facebook/react/pull/13615))

### 调度程序（实验）

-   在 `schedule/tracking-profiling` 中添加一个单独的分析入口点。([@bvaughn](https://github.com/bvaughn) in [#13605](https://github.com/facebook/react/pull/13605))

## 16.5.0 (2018-09-05)


## 16.4.2 (2018-08-01)

### React DOM Server

-  修复[攻击者控制属性名称(`CVE-2018-6341`)时潜在的XSS漏洞](https://reactjs.org/blog/2018/08/01/react-v-16-4-2.html)。 最新的 `react-dom@16.4.2` 以及以前受影响的次要版本中提供了此修订：`react-dom@16.0.1`，`react-dom@16.1.2`，`react-dom@16.2.1`和 `react-dom@16.3.3`。([@gaearon](https://github.com/gaearon) in [#13302](https://github.com/facebook/react/pull/13302))

-   在调用属性 `hasOwnProperty` 时修复服务器渲染器中的崩溃。 此修复仅在 `react-dom@16.4.2` 中提供。([@gaearon](https://github.com/gaearon) in [#13303](https://github.com/facebook/react/pull/13303))


[Changelog](https://github.com/facebook/react/blob/master/CHANGELOG.md#1642-august-1-2018)
[Documentation](https://5b90c17ac9659241e7f4c938--reactjs.netlify.com/)

## 16.4.1 (2018-06-13)


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
