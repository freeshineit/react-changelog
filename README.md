# react-changelogs

## 16.8.1 (2019-01-06) 

## 16.8.0 (2019-01-06)

## 16.7.0 (2018-12-19)

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

### React

-   添加了一个警告如果 `React.forwardRef` 渲染函数不能准确地使用两个参数。([@bvaughn](https://github.com/bvaughn) in [#13168](https://github.com/facebook/react/pull/13168))

-   改进了错误消息当错误地将元素传递给createElement时。([@DCtheTall](https://github.com/DCtheTall) in [#13131](https://github.com/facebook/react/pull/13131))

-   不要在突变之后调用探测器 `onRender`。([@bvaughn](https://github.com/bvaughn) in [#13572](https://github.com/facebook/react/pull/13572))

### React DOM

-   添加对React DevTools Profiler的支持 ([@bvaughn](https://github.com/bvaughn) in [#13058](https://github.com/facebook/react/pull/13058))

-   为生产中的分析添加 `react-dom/profiling` 入口点别名。([@bvaughn](https://github.com/bvaughn) in [#13570](https://github.com/facebook/react/pull/13570))

-   为支持 `onAuxClick` 事件的浏览器添加了该事件。([@jquense](https://github.com/jquense) in [#11571](https://github.com/facebook/react/pull/11571))

-   将 `movingX` 和 `movementY` 字段添加到鼠标事件中。([@jasonwilliams](https://github.com/jasonwilliams) in [#9018](https://github.com/facebook/react/pull/9018))

-   将 `tangentialPressure` 和 `twist` 字段添加到`pointer`事件。([@motiz88](https://github.com/motiz88) in [#13374](https://github.com/facebook/react/pull/13374))

-   在选择事件处理中最小化支持 `iframe`（嵌套浏览上下文）。([@acusti](https://github.com/acusti) in [#12037](https://github.com/facebook/react/pull/12037))

-   支持将布尔值传递给SVG的 `focusable` 属性。([@gaearon](https://github.com/gaearon) in [#13339](https://github.com/facebook/react/pull/13339))

-   在合成阶段忽略客户端上的 `<noscript>` 。([@Ephem](https://github.com/Ephem) in [#13537](https://github.com/facebook/react/pull/13537))

-   修复`gridArea`被作为无单位CSS属性。([@mgol](https://github.com/mgol) in [#13550](https://github.com/facebook/react/pull/13550))

-   修复在IE11上键入韩语时 `compositionend` 事件中的错误数据。([@crux153](https://github.com/crux153) in [#12563](https://github.com/facebook/react/pull/12563))

-   修复在 `<option>` 标签中使用动态子项时崩溃。([@Slowyn](https://github.com/Slowyn) in [#13261](https://github.com/facebook/react/pull/13261), [@gaearon](https://github.com/gaearon) in [#13465](https://github.com/facebook/react/pull/13465))

-   修复`checked`属性最初未在`input`上设置。 ([@dilidili](https://github.com/dilidili) in [#13114](https://github.com/facebook/react/pull/13465))

-   当 `__html` 不是字符串时，修复`dangerouslySetInnerHTML`的合成期间。([@gaearon](https://github.com/gaearon) in [#13353](https://github.com/facebook/react/pull/13353))

-   修复关于缺少受控 `onChange` 的警告，以便对伪造的值进行触发。([@nicolevy](https://github.com/nicolevy) in [#12628](https://github.com/facebook/react/pull/12628))

-   修复 `submit` 和 `reset` 按钮获取空标签。([@ellsclytn](https://github.com/ellsclytn) in [#12780](https://github.com/facebook/react/pull/12780))

-   修复拖放后未触发的 `onSelect` 事件。([@gaearon](https://github.com/gaearon) in [#13422](https://github.com/facebook/react/pull/13422))

-   修复onClick事件在iOS上的门户网站内无法正常工作。([@aweary](https://github.com/aweary) in [#11927](https://github.com/facebook/react/pull/11927))

-   解决在重新渲染数千个根时性能问题。([@gaearon](https://github.com/gaearon) in [#13335](https://github.com/facebook/react/pull/13335))

-   修复一个性能回归，这种回归也会导致 `onChange` 在某些情况下不会触发。([@gaearon](https://github.com/gaearon) in [#13423](https://github.com/facebook/react/pull/13423))

-   更优雅地处理更多edge案例中的错误。([@gaearon](https://github.com/gaearon) in [#13237](https://github.com/facebook/react/pull/13237) and [@acdlite](https://github.com/acdlite) in [#13269](https://github.com/facebook/react/pull/13269))

-   不要在开发中使用代理来处理合成事件。([@gaearon](https://github.com/gaearon) in [#12171](https://github.com/facebook/react/pull/12171))

-   当"false"或"true"是布尔DOM prop的值时发出警告。 ([@motiz88](https://github.com/motiz88) in [#13372](https://github.com/facebook/react/pull/13372))

-   当 `this.state` 初始化为 `props` 时发出警告。([@veekas](https://github.com/veekas) in [#11658](https://github.com/facebook/react/pull/11658))

-   由于嘈杂的误报不要在合成期间比较 `style` 在IE中。([@mgol](https://github.com/mgol) in [#13534](https://github.com/facebook/react/pull/13534))

-   在组件堆栈中包含 `StrictMode` 。 ([@gaearon](https://github.com/gaearon) in [#13240](https://github.com/facebook/react/pull/13240))

-   不要在IE中覆盖 `window.event`。([@ConradIrwin](https://github.com/ConradIrwin) in [#11696](https://github.com/facebook/react/pull/11696))

-   改进 `folder/index.js` 命名约定的组件堆栈。([@gaearon](https://github.com/gaearon) in [#12059](https://github.com/facebook/react/pull/12059))

-   改进使用没有初始化状态的getDerivedStateFromProps时警告。([@flxwu](https://github.com/flxwu) in [#13317](https://github.com/facebook/react/pull/13317))

-   改进有关无效textarea使用的警告。([@raunofreiberg](https://github.com/raunofreiberg) in [#13361](https://github.com/facebook/react/pull/13361))

-   更一致地处理无效的符号和函数值。 ([@raunofreiberg](https://github.com/raunofreiberg) in [#13362](https://github.com/facebook/react/pull/13362) and [#13389](https://github.com/facebook/react/pull/13389))

-   在没有警告的情况下允许`Electron` `<webview>`标签。([@philipp-spiess](https://github.com/philipp-spiess) in [#13301](https://github.com/facebook/react/pull/13301))

-   如果调用e.preventDefault（），请不要显示未捕获的错误附录。([@gaearon](https://github.com/gaearon) in [#13384](https://github.com/facebook/react/pull/13384))

-   关于渲染生成器的警告。([@gaearon](https://github.com/gaearon) in [#13312](https://github.com/facebook/react/pull/13312))

-   从警告中删除遗留方法的无关建议。([@zx6658](https://github.com/zx6658) in [#13169](https://github.com/facebook/react/pull/13169))

-   从 `schedule` 中删除 `unstable_deferredUpdates` 以支持 `unstable_scheduleWork`。([@gaearon](https://github.com/gaearon) in [#13488](https://github.com/facebook/react/pull/13488))

-   修复不稳定的异步模式，使其在更新时间过长时执行不必要的工作。([@acdlite](https://github.com/acdlite) in [#13503](https://github.com/facebook/react/pull/13503))

### React DOM Server

-   在选定的 `<option>` 中使用 `dangerouslySetInnerHtml` 时，修复与nullish子进程崩溃的问题。([@mridgway](https://github.com/mridgway) in [#13078](https://github.com/facebook/react/pull/13078))

-   缺少setTimeout时修复崩溃。([@dustinsoftware](https://github.com/dustinsoftware) in [#13088](https://github.com/facebook/react/pull/13088))

### React Test Renderer and Test Utils

-   在浅层渲染器的功能组件中修复 `this` 为 `undefined`。([@koba04](https://github.com/koba04) in [#13144](https://github.com/facebook/react/pull/13144))

-   弃用特定于特定的 `ReactTestUtils.mockComponent()` 帮助器。([@bvaughn](https://github.com/bvaughn) in [#13193](https://github.com/facebook/react/pull/13193))

-   警告测试渲染器中的ReactDOM.createPortal用法。([@bvaughn](https://github.com/bvaughn) in [#12895](https://github.com/facebook/react/pull/12895))

-   改善令人困惑的错误消息。([@gaearon](https://github.com/gaearon) in [#13351](https://github.com/facebook/react/pull/13351))

### React ART

-   添加对DevTools的支持。([@yunchancho](https://github.com/yunchancho) in [#13173](https://github.com/facebook/react/pull/13173))

### 调度程序（实验）

-   用于在浏览器环境中协同调度工作的新程序包。 它在内部由React使用，但其公共API尚未最终确定。([@flarnie](https://github.com/flarnie) in [#12624](https://github.com/facebook/react/pull/12624))


## 16.4.2 (2018-08-01)

### React DOM Server

-  修复[攻击者控制属性名称(`CVE-2018-6341`)时潜在的XSS漏洞](https://reactjs.org/blog/2018/08/01/react-v-16-4-2.html)。 最新的 `react-dom@16.4.2` 以及以前受影响的次要版本中提供了此修订：`react-dom@16.0.1`，`react-dom@16.1.2`，`react-dom@16.2.1`和 `react-dom@16.3.3`。([@gaearon](https://github.com/gaearon) in [#13302](https://github.com/facebook/react/pull/13302))

-   在调用属性 `hasOwnProperty` 时修复服务器渲染器中的崩溃。 此修复仅在 `react-dom@16.4.2` 中提供。([@gaearon](https://github.com/gaearon) in [#13303](https://github.com/facebook/react/pull/13303))


[Changelog](https://github.com/facebook/react/blob/master/CHANGELOG.md#1642-august-1-2018)
[Documentation](https://5b90c17ac9659241e7f4c938--reactjs.netlify.com/)

## 16.4.1 (2018-06-13)

### React

-   您现在可以将 `propTypes` 分配给 `React.ForwardRef` 返回的组件。([@bvaughn](https://github.com/bvaughn) in [#12911](https://github.com/facebook/react/pull/12911))

### React DOM

-   修复输入类型从其他类型更改为 `text` 时崩溃的问题。([@spirosikmd](https://github.com/spirosikmd) in [#12135](https://github.com/facebook/react/pull/12135))

-   修复了将焦点恢复到SVG元素时IE11中的崩溃问题。([@ThaddeusJiang](https://github.com/ThaddeusJiang) in [#12996](https://github.com/facebook/react/pull/12996))

-   在某些情况下修复`range input`未更新。([@Illu](https://github.com/Illu) in [#12939](https://github.com/facebook/react/pull/12939))

-   修复Firefox中不必要地触发输入验证的问题。([@nhunzaker](https://github.com/nhunzaker) in [#12925](https://github.com/facebook/react/pull/12925))

-   修复IE9中 `onChange` 事件的错误 `event.target` 值。([@nhunzaker](https://github.com/nhunzaker) in [#12976](https://github.com/facebook/react/pull/12976))

-   修复从组件返回空 `<React.Fragment />` 时误报错误。([@philipp-spiess](https://github.com/philipp-spiess) in [#12966](https://github.com/facebook/react/pull/12966))

### React DOM Server

-   修复新的`context` API提供的错误值。([@ericsoderberghp](https://github.com/ericsoderberghp) in [#12985](https://github.com/facebook/react/pull/12985), [@gaearon](https://github.com/gaearon) in [#13019](https://github.com/facebook/react/pull/13019))

### React Test Renderer

-   在测试渲染器遍历API中允许多个根子元素。([@gaearon](https://github.com/gaearon) in [#13017](https://github.com/facebook/react/pull/13017))

-   修复浅渲染器中的 `getDerivedStateFromProps()` 以不丢弃挂起状态。([@fatfisz](https://github.com/fatfisz) in [#13030](https://github.com/facebook/react/pull/13030))

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
