(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{193:function(t,e,r){"use strict";r.r(e);var a=r(0),i=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("此书是 "),r("a",{attrs:{href:"https://github.com/basarat/typescript-book/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《TypeScript Deep Dive》"),r("OutboundLink")],1),t._v(" 的中文翻译版，感谢作者 "),r("a",{attrs:{href:"https://github.com/basarat",target:"_blank",rel:"noopener noreferrer"}},[t._v("Basarat"),r("OutboundLink")],1),t._v(" 的付出。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("blockquote",[r("p",[t._v("数据来源："),r("a",{attrs:{href:"https://npm-stat.com/charts.html?package=typescript&from=2016-01-01&to=2018-07-31",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm 包下载量"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("如你所见，TypeScript 发展至今，已经成为大型项目的标配，其提供的静态类型系统，大大增强了代码的可读性以及可维护性；同时，它提供最新和不断发展的 JavaScript 特性，能让我们建立更健壮的组件。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/basarat/typescript-book/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《TypeScript Deep Dive》"),r("OutboundLink")],1),t._v(" 是一本很好的开源书，从基础到深入，很全面的阐述了 TypeScript 的各种魔法，不管你是新手，还是老鸟，它都将适应你。此外，它不同于 TypeScript 官方给出的文档（当然 TypeScript 给出的文档是很好的），在此书中，结合实际应用下的场景用例，你将能更深入的理解 TypeScript。")]),t._v(" "),r("p",[t._v("如今社区已经存在部分翻译，但都似乎已经停止更新。")]),t._v(" "),r("p",[t._v("于是在某天的某个冲动之下，这个 RP 就诞生了。")]),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("《TypeScript Deep Dive》 书中包含一部分 JavaScript Future 和一些其他的内容，在这里，我们并不打算翻译它，如果你有兴趣，可以查看原书中 "),r("a",{attrs:{href:"https://basarat.gitbooks.io/typescript/content/docs/future-javascript.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript Future"),r("OutboundLink")],1),t._v(" 的有关章节。")]),t._v(" "),r("p",[t._v("由于 TypeScript 更新频繁，在此书中，我也将加入一些原书中并没有涉及到的知识点，希望和大家相互学习，一起进步。")]),t._v(" "),r("p",[t._v("此外，在不违背原作者本意前提下，为了更直观的表达，部分内容将采用意译，而非直译。")]),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("你可以：")]),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("希望你在翻译或者 PR 之前，阅读"),r("a",{attrs:{href:"https://github.com/mzlogin/chinese-copywriting-guidelines",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文文章排版指北"),r("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("如果你和我一样对 TypeScript 充满兴趣，可以订阅（star）本项目，及时收到有关于此项目的更新。")]),t._v(" "),r("p",[t._v("如果你对文章有任何疑问，欢迎提交 "),r("a",{attrs:{href:"https://github.com/jkchao/typescript-book-chinese/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("issues"),r("OutboundLink")],1),t._v(" 和我交流。")]),t._v(" "),r("p",[t._v("如果你认为有些地方翻译不够准确，或者你想补充一些文中没提到但是非常有意思的知识点，欢迎 "),r("a",{attrs:{href:"https://github.com/jkchao/typescript-book-chinese/pulls",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR"),r("OutboundLink")],1),t._v("。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"深入理解-typescript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深入理解-typescript","aria-hidden":"true"}},[this._v("#")]),this._v(" 深入理解 TypeScript")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"why"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why","aria-hidden":"true"}},[this._v("#")]),this._v(" Why")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://ovshyp9zv.bkt.clouddn.com/typescript-downloads.jpeg",alt:"downloads"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"翻译内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#翻译内容","aria-hidden":"true"}},[this._v("#")]),this._v(" 翻译内容")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"how-to-contribute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-contribute","aria-hidden":"true"}},[this._v("#")]),this._v(" How to contribute")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("通过 PR 修改错别字，或者错误的格式；")]),this._v(" "),e("li",[this._v("发 issue 讨论文章中出现的一些不合理地方；")]),this._v(" "),e("li",[this._v("翻译 TODO 文件夹下的文章，并顺手 Email 我。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后","aria-hidden":"true"}},[this._v("#")]),this._v(" 最后")])}],!1,null,null,null);i.options.__file="README.md";e.default=i.exports}}]);