("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire039d.register("6gwVL",(function(n,e){"use strict";function t(n){n.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:n.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},n.hooks.add("after-tokenize",(function(n){if("graphql"===n.language)for(var e=n.tokens.filter((function(n){return"string"!=typeof n&&"comment"!==n.type&&"scalar"!==n.type})),t=0;t<e.length;){var a=e[t++];if("keyword"===a.type&&"mutation"===a.content){var i=[];if(f(["definition-mutation","punctuation"])&&"("===p(1).content){t+=2;var r=c(/^\($/,/^\)$/);if(-1===r)continue;for(;t<r;t++){var o=p(0);"variable"===o.type&&(d(o,"variable-input"),i.push(o.content))}t=r+1}if(f(["punctuation","property-query"])&&"{"===p(0).content&&(t++,d(p(0),"property-mutation"),i.length>0)){var s=c(/^\{$/,/^\}$/);if(-1===s)continue;for(var u=t;u<s;u++){var l=e[u];"variable"===l.type&&i.indexOf(l.content)>=0&&d(l,"variable-input")}}}}function p(n){return e[t+n]}function f(n,e){e=e||0;for(var t=0;t<n.length;t++){var a=p(t+e);if(!a||a.type!==n[t])return!1}return!0}function c(n,a){for(var i=1,r=t;r<e.length;r++){var o=e[r],s=o.content;if("punctuation"===o.type&&"string"==typeof s)if(n.test(s))i++;else if(a.test(s)&&0==--i)return r}return-1}function d(n,e){var t=n.alias;t?Array.isArray(t)||(n.alias=t=[t]):n.alias=t=[],t.push(e)}}))}n.exports=t,t.displayName="graphql",t.aliases=[]}));