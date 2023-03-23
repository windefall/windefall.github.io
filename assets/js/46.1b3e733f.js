(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{375:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"如何根据系统主题自动响应css深色模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何根据系统主题自动响应css深色模式"}},[s._v("#")]),s._v(" 如何根据系统主题自动响应CSS深色模式")]),s._v(" "),t("p",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://cdn.staticaly.com/gh/xugaoyi/image_store/blog/20200427163531.jpg",width:"500"}})]),s._v(" "),t("p",[s._v("很多人喜欢选择APP或网站中的深色模式，也许他们更喜欢这样的外观，或者他们想让自己的眼睛免受疲劳。这篇文章将告诉你如何在网站中实现一个自动的CSS深色模式，根据访客的系统主题来自动响应。")]),s._v(" "),t("h2",{attrs:{id:"css-深色模式-dark-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-深色模式-dark-mode"}},[s._v("#")]),s._v(" CSS 深色模式 (Dark Mode)")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v(":root")]),s._v("根元素中定义变量来设置主题的颜色。我建议你也这样做，因为这样会使这个过程容易得多。我定义的变量如下:")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(":root")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("--bg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #fff"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("--textColor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #004050"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("--borderColor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgba")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(".15"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("blockquote",[t("p",[t("strong",[t("code",[s._v(":root")])]),s._v(" 这个 CSS 伪类匹配文档树的根元素。对于 HTML 来说，"),t("strong",[t("code",[s._v(":root")])]),s._v(" 表示 "),t("code",[s._v("<html>")]),s._v("元素，除了优先级更高之外，与 "),t("code",[s._v("html")]),s._v(" 选择器相同。")])]),s._v(" "),t("p",[s._v("如果希望在样式表中使用这些变量，可以这样做")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("body")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("var")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("--bg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这样，如果你想改变你的主题颜色，所需要做的就是修改你定义的变量，所有使用这个变量的样式都会被更新。")]),s._v(" "),t("p",[s._v("现在我们需要定义一组新的变量，这些变量将在调用CSS深色模式时使用。对我来说，深色模式的变量是这样的:")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 定义深色模式的颜色 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(":root")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("--bg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgb")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("30"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("30"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("34"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("--textColor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgb")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("150"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("150"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("154"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("--borderColor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #2C2C3A"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"添加深色模式自动响应"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加深色模式自动响应"}},[s._v("#")]),s._v(" 添加深色模式自动响应")]),s._v(" "),t("p",[s._v("现在我们定义了两组变量。剩下要做的一件事就是将"),t("code",[s._v("prefers-color-scheme")]),s._v("媒体查询添加到我们的深色模式变量中。")]),s._v(" "),t("p",[s._v("使用您的深色模式变量并在外层添加"),t("code",[s._v("@media")]),s._v("查询")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 根据系统的深色模式响应深色变量 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule"}},[t("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@media")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("prefers-color-scheme")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dark"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(":root")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("--bg")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgb")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("30"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("30"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("34"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("--textColor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgb")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("150"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("150"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("154"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("--borderColor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #2C2C3A"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("blockquote",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("prefers-color-scheme")]),s._v("文档"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("这是真的! 如果有人正在使用一个深色模式的系统主题，并访问你的网站，将自动切换到深色模式。")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你的电脑系统不支持深色模式，可以使用手机测试，先把手机的系统主题调到深色模式，再打开你的网站。")])]),s._v(" "),t("h2",{attrs:{id:"js判断深色模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js判断深色模式"}},[s._v("#")]),s._v(" JS判断深色模式")]),s._v(" "),t("p",[s._v("如果你的需求需要js来判断系统是否处于深色模式，可以这样做：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("window"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("matchMedia")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(prefers-color-scheme: dark)'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("matches"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//深色主题")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("matchMedia")]),t("OutboundLink")],1),s._v("方法返回一个"),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/MediaQueryList",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("MediaQueryList")]),t("OutboundLink")],1),s._v("对象，该对象具有属性"),t("code",[s._v("matches")]),s._v("、"),t("code",[s._v("media")]),s._v("，具有方法"),t("code",[s._v("addListener")]),s._v("、"),t("code",[s._v("removeListener")]),s._v("。")])]),s._v(" "),t("p",[t("code",[s._v("addListener")]),s._v("接收一个"),t("code",[s._v("MediaQueryList")]),s._v("对象作为参数。\n为深色模式添加监听器，以响应系统切换到或切换出深色模式：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" listeners"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("dark")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("mediaQueryList")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mediaQueryList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("matches"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'您切换到深色模式了！'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("light")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("mediaQueryList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mediaQueryList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("matches"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'您切换到浅色模式了！'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nwindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("matchMedia")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(prefers-color-scheme: dark)'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("listeners"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dark"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nwindow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("matchMedia")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(prefers-color-scheme: light)'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("listeners"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("light"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h2",{attrs:{id:"结论"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[s._v("#")]),s._v(" 结论")]),s._v(" "),t("p",[s._v("我们不仅可以在布局方面响应不同尺寸屏幕，还可以按系统主题响应深色模式。我相信你的深夜访客，或者那些喜欢深色模式的人，会感谢你的。")])])}),[],!1,null,null,null);t.default=e.exports}}]);