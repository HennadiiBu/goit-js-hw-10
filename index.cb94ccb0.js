function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var n,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,h=function(){return l.Date.now()};function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function v(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):i.test(t)?NaN:+t}n=function(t,e,n){var o,i,r,a,f,u,c=0,l=!1,s=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,r=i;return o=i=void 0,c=e,a=t.apply(r,n)}function b(t){return c=t,f=setTimeout($,e),l?y(t):a}function j(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=r}function $(){var t=h();if(j(t))return T(t);f=setTimeout($,function(t){var n=e-(t-u);return s?p(n,r-(t-c)):n}(t))}function T(t){return f=void 0,m&&o?y(t):(o=i=void 0,a)}function w(){var t=h(),n=j(t);if(o=arguments,i=this,u=t,n){if(void 0===f)return b(u);if(s)return f=setTimeout($,e),y(u)}return void 0===f&&(f=setTimeout($,e)),a}return e=v(e)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(v(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=i=f=void 0},w.flush=function(){return void 0===f?a:T(h())},w};const m=document.querySelector(".country-list"),y=document.querySelector(".country-info");document.querySelector("#search-box").addEventListener("input",t(n)((function(t){console.log(t.target.value),(e=t.target.value,fetch(`https://restcountries.com/v3.1/name/${e}`).then((t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}))).then((t=>{const e=t.map((t=>t.name.official));if(e.length>2&&e.length<10){const e=t.map((t=>`<li><img src="${t.flags.svg}" alt="${t.name.official} width="50px" height="50px"><h1>${t.name.official}</h1></li>`));m.insertAdjacentHTML("beforeend",e.join(""))}else{e.length=1;{const e=t.map((t=>`<li><img src="${t.flags.svg}" alt="${t.name.official} width="50px" height="50px"><h1>${t.name.official}</h1></li>`)),n=t.map((t=>` <h2>Capital: ${t.capital}</h2>\n                    <h2>Population: ${t.population}</h2>\n                    <h2>Languages: ${t.languages}</h2>`));m.insertAdjacentHTML("beforeend",e.join("")),y.insertAdjacentHTML("beforeend",n.join(""))}}})).catch((t=>console.log(t)));var e}),300));
//# sourceMappingURL=index.cb94ccb0.js.map
