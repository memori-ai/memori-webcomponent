("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire039d.register("dIDrm",(function(e,n){"use strict";function a(e){!function(e){var n="(?:"+[/[a-zA-Z_\x80-\uFFFF][\w\x80-\uFFFF]*/.source,/-?(?:\.\d+|\d+(?:\.\d*)?)/.source,/"[^"\\]*(?:\\[\s\S][^"\\]*)*"/.source,/<(?:[^<>]|(?!<!--)<(?:[^<>"']|"[^"]*"|'[^']*')+>|<!--(?:[^-]|-(?!->))*-->)*>/.source].join("|")+")",a={markup:{pattern:/(^<)[\s\S]+(?=>$)/,lookbehind:!0,alias:["language-markup","language-html","language-xml"],inside:e.languages.markup}};function r(e,a){return RegExp(e.replace(/<ID>/g,(function(){return n})),a)}e.languages.dot={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\/|^#.*/m,greedy:!0},"graph-name":{pattern:r(/(\b(?:digraph|graph|subgraph)[ \t\r\n]+)<ID>/.source,"i"),lookbehind:!0,greedy:!0,alias:"class-name",inside:a},"attr-value":{pattern:r(/(=[ \t\r\n]*)<ID>/.source),lookbehind:!0,greedy:!0,inside:a},"attr-name":{pattern:r(/([\[;, \t\r\n])<ID>(?=[ \t\r\n]*=)/.source),lookbehind:!0,greedy:!0,inside:a},keyword:/\b(?:digraph|edge|graph|node|strict|subgraph)\b/i,"compass-point":{pattern:/(:[ \t\r\n]*)(?:[ewc_]|[ns][ew]?)(?![\w\x80-\uFFFF])/,lookbehind:!0,alias:"builtin"},node:{pattern:r(/(^|[^-.\w\x80-\uFFFF\\])<ID>/.source),lookbehind:!0,greedy:!0,inside:a},operator:/[=:]|-[->]/,punctuation:/[\[\]{};,]/},e.languages.gv=e.languages.dot}(e)}e.exports=a,a.displayName="dot",a.aliases=["gv"]}));