(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{487:function(t,a,e){"use strict";e.r(a);var s=e(51),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"modal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modal"}},[t._v("#")]),t._v(" Modal")]),t._v(" "),e("p",[t._v("You can customize the initial state of the module from the editor initialization, by passing the following "),e("a",{attrs:{href:"https://github.com/artf/grapesjs/blob/master/src/modal_dialog/config/config.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuration Object"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" editor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grapesjs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n modal"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Once the editor is instantiated you can use its API. Before using these methods you should get the module from the instance")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" modal "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" editor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Modal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"available-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#available-events"}},[t._v("#")]),t._v(" Available Events")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("modal:open")]),t._v(" - Modal is opened")]),t._v(" "),e("li",[e("code",[t._v("modal:close")]),t._v(" - Modal is closed")]),t._v(" "),e("li",[e("code",[t._v("modal")]),t._v(" - Event triggered on any change related to the modal. An object containing all the available data about the triggered event is passed as an argument to the callback.")])]),t._v(" "),e("h2",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#open"}},[t._v("open")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#close"}},[t._v("close")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#isopen"}},[t._v("isOpen")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#settitle"}},[t._v("setTitle")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#gettitle"}},[t._v("getTitle")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#setcontent"}},[t._v("setContent")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#getcontent"}},[t._v("getContent")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#onceclose"}},[t._v("onceClose")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#onceopen"}},[t._v("onceOpen")])])]),t._v(" "),e("h2",{attrs:{id:"open"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#open"}},[t._v("#")]),t._v(" open")]),t._v(" "),e("p",[t._v("Open the modal window")]),t._v(" "),e("h3",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("opts")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1)]),t._v(" Options (optional, default "),e("code",[t._v("{}")]),t._v(")")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("opts.title")]),t._v(" "),e("strong",[t._v("("),e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),e("OutboundLink")],1),t._v(" | "),e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/HTML/Element",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTMLElement"),e("OutboundLink")],1),t._v(")?")]),t._v(" Title to set for the modal")]),t._v(" "),e("li",[e("code",[t._v("opts.content")]),t._v(" "),e("strong",[t._v("("),e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),e("OutboundLink")],1),t._v(" | "),e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/HTML/Element",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTMLElement"),e("OutboundLink")],1),t._v(")?")]),t._v(" Content to set for the modal")]),t._v(" "),e("li",[e("code",[t._v("opts.attributes")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1),t._v("?")]),t._v(" Updates the modal wrapper with custom attributes")])])])]),t._v(" "),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("modal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  content"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My content'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  attributes"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-class'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[t._v("this")])]),t._v(" "),e("h2",{attrs:{id:"close"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#close"}},[t._v("#")]),t._v(" close")]),t._v(" "),e("p",[t._v("Close the modal window")]),t._v(" "),e("h3",{attrs:{id:"examples-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("modal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[t._v("this")])]),t._v(" "),e("h2",{attrs:{id:"onceclose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onceclose"}},[t._v("#")]),t._v(" onceClose")]),t._v(" "),e("p",[t._v("Execute callback when the modal will be closed.\nThe callback will be called one only time")]),t._v(" "),e("h3",{attrs:{id:"parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("clb")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function",target:"_blank",rel:"noopener noreferrer"}},[t._v("Function"),e("OutboundLink")],1)]),t._v(" Callback to call")])]),t._v(" "),e("h3",{attrs:{id:"examples-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("modal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onceClose")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The modal is closed'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[t._v("this")])]),t._v(" "),e("h2",{attrs:{id:"onceopen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onceopen"}},[t._v("#")]),t._v(" onceOpen")]),t._v(" "),e("p",[t._v("Execute callback when the modal will be opened.\nThe callback will be called one only time")]),t._v(" "),e("h3",{attrs:{id:"parameters-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("clb")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function",target:"_blank",rel:"noopener noreferrer"}},[t._v("Function"),e("OutboundLink")],1)]),t._v(" Callback to call")])]),t._v(" "),e("h3",{attrs:{id:"examples-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-4"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("modal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onceOpen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The modal is opened'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[t._v("this")])]),t._v(" "),e("h2",{attrs:{id:"isopen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#isopen"}},[t._v("#")]),t._v(" isOpen")]),t._v(" "),e("p",[t._v("Checks if the modal window is open")]),t._v(" "),e("h3",{attrs:{id:"examples-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-5"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("modal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isOpen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true | false")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",target:"_blank",rel:"noopener noreferrer"}},[t._v("Boolean"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"settitle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#settitle"}},[t._v("#")]),t._v(" setTitle")]),t._v(" "),e("p",[t._v("Set the title to the modal window")]),t._v(" "),e("h3",{attrs:{id:"parameters-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("title")]),t._v(" "),e("strong",[t._v("("),e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),e("OutboundLink")],1),t._v(" | "),e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/HTML/Element",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTMLElement"),e("OutboundLink")],1),t._v(")")]),t._v(" Title")])]),t._v(" "),e("h3",{attrs:{id:"examples-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-6"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pass a string")]),t._v("\nmodal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTitle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Some title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or an HTMLElement")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" el "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'New title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTitle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[t._v("this")])]),t._v(" "),e("h2",{attrs:{id:"gettitle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gettitle"}},[t._v("#")]),t._v(" getTitle")]),t._v(" "),e("p",[t._v("Returns the title of the modal window")]),t._v(" "),e("h3",{attrs:{id:"examples-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-7"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("modal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTitle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[t._v("("),e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),e("OutboundLink")],1),t._v(" | "),e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/HTML/Element",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTMLElement"),e("OutboundLink")],1),t._v(")")])]),t._v(" "),e("h2",{attrs:{id:"setcontent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setcontent"}},[t._v("#")]),t._v(" setContent")]),t._v(" "),e("p",[t._v("Set the content of the modal window")]),t._v(" "),e("h3",{attrs:{id:"parameters-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-5"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("content")]),t._v(" "),e("strong",[t._v("("),e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),e("OutboundLink")],1),t._v(" | "),e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/HTML/Element",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTMLElement"),e("OutboundLink")],1),t._v(")")]),t._v(" Content")])]),t._v(" "),e("h3",{attrs:{id:"examples-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-8"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pass a string")]),t._v("\nmodal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Some content'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or an HTMLElement")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" el "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'New content'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setContent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[t._v("this")])]),t._v(" "),e("h2",{attrs:{id:"getcontent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getcontent"}},[t._v("#")]),t._v(" getContent")]),t._v(" "),e("p",[t._v("Get the content of the modal window")]),t._v(" "),e("h3",{attrs:{id:"examples-9"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-9"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("modal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[t._v("("),e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("string"),e("OutboundLink")],1),t._v(" | "),e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/HTML/Element",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTMLElement"),e("OutboundLink")],1),t._v(")")])])])}),[],!1,null,null,null);a.default=n.exports}}]);