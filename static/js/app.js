(()=>{"use strict";var e,t={378:(e,t,n)=>{var r=n(294),c=n(745);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=window.navigator.userAgent.toUpperCase().search("MOBILE")>=0;const a=r.createContext(null),i=n.p+"static/images_icons/0f83914cca1adc9454d1bdceb17610b0.svg",s=n.p+"static/images_icons/8b57a6b108c1b8ae82931a39b10f96a2.svg",l=n.p+"static/images_icons/476e90a9646a87bb3645d2f09f4f7fba.svg",u=n.p+"static/images_icons/3b1a5d7eb0b2f1fd3e955865ec04d9ed.svg",m=n.p+"static/images_icons/f4d7eee84cf50913d73967948d97d63a.svg";function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p="scissors",v="paper",y="rock",g="lizard",h="spock",_={paper:{src:s,border:"#5570F5"},rock:{src:l,border:"#DD3F5D"},scissors:{src:u,border:"#ECA71D"}},E=d(d({lizard:{src:i,border:"#8A5BDD"}},_),{},{spock:{src:m,border:"#4ABAD0"}}),O=["scissors","paper","rock","lizard","spock"],w=["scissors","paper","rock"],j={scissors:new Set([v]),paper:new Set([y]),rock:new Set([p])},P={scissors:new Set([v,g]),paper:new Set([y,h]),rock:new Set([p,g]),lizard:new Set([v,h]),spock:new Set([y,p])},k=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=e?E:_,n=e?O:w,r=(e?[y,v,p,h,g]:[v,p,y]).join("\n");return{icons_obj:t,icon_name_arr:n,game_name:r}};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(){var e,t,n=(e=r.useState({is_bonus:!0,icon_name_arr:[],icons_obj:{},game_name:"",change_score:0,score:0}),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,c,o=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){i=!0,c=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw c}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=n[0],o=n[1];r.useEffect((function(){a()}),[]);var a=function(){o((function(e){return A(A({},e),k(e.is_bonus))}))};return A(A({},c),{},{changeIsBonus:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];o((function(t){return A(A(A({},t),k(e)),{},{is_bonus:e})}))},handlePick:function(e){o((function(t){return A(A({},t),{},{icon_name:e})})),setTimeout((function(){o((function(e){var t=e.icon_name_arr,n=t[Math.round(Math.random()*(t.length-1))],r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&!arguments[2]?j:P,r=n[t],c=n[e],o=r.has(e),a=c.has(t);return o?1:a?-1:0}(n,e.icon_name,e.is_bonus),c=e.score+r;return A(A({},e),{},{house_icon:n,change_score:r,score:c>=0?c:0})}))}),500)},playAgain:function(){o((function(e){return A(A(A(A({},e),{is_bonus:!0,icon_name_arr:[],icons_obj:{},game_name:"",change_score:0}),k(e.is_bonus)),{},{is_bonus:e.is_bonus,house_icon:void 0,icon_name:void 0})}))}})}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const B=function(e){var t=e.children,n=x();return r.createElement(a.Provider,{value:D({},n)},t)},U=function(e){var t=e.border,n=e.src;return r.createElement("div",{className:"IconItem flex justify-center items-center wh-100per brs-50per",style:{borderColor:t}},r.createElement("img",{className:"IconItem_img",src:n,alt:""}))};function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const L=function(e){var t,n,c=e.icon_name,a=e.src,i=e.border,s=e.handlePick,l=(t=r.useState(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,c,o=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){i=!0,c=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw c}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=l[0],m=l[1],f=function(){m(!0)},d=function(){m(!1)};return r.createElement("div",{className:"ChoiceItem cursor-pointer ".concat(u?"ChoiceItem-press":"ChoiceItem-normal"),onClick:function(){s(c)},style:{boxShadow:u?"0 0 transparent":"0 6px 0 0 #0000002b, 0 ".concat(o?4:6,"px 0 0 ").concat(i)},onMouseDown:f,onMouseUp:d,onTouchStart:f,onTouchEnd:d},r.createElement(U,{border:i,src:a}))},R=n.p+"static/images_icons/1ad6d36532b75eb7d82cabe6e8d92aef.svg",z=n.p+"static/images_icons/77c6ca418d3751d8f71789234314a8b9.svg";function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}const $=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=r.useContext(a),n=t.icons_obj,c=t.icon_name_arr,o=t.is_bonus,i=t.handlePick,s=5===c.length?R:z;return r.createElement("div",{className:"Choices pos-rel wh-100per",style:{backgroundImage:"url(".concat(s,")")}},c.map((function(e,t){var a=o?360*t/c.length:[-40,40,180][t],s="translate(-50%, -50%)";return r.createElement("div",{key:e,className:"Choices_item",style:{transform:"".concat(s," rotate(").concat(a,"deg)"),height:o?void 0:2==t?"80%":"130%"}},r.createElement("div",{style:{transform:"".concat(s," rotate(-").concat(a,"deg)")}},r.createElement(L,W({icon_name:e},n[e],{handlePick:i}))))})))},F=function(e){var t=e.change_score,n=e.playAgain;return r.createElement("div",{className:"Result flex justify-center text-center"},r.createElement("div",{className:"Result_win"},"YOU"," ",1===t?"WIN":-1===t?"LOSE":"NOT WIN"),r.createElement("div",null,r.createElement("button",{className:"Result_btn cursor-pointer",type:"button",onClick:n},"PLAY AGAIN")))},Y=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=r.useContext(a),n=t.icons_obj,c=t.house_icon,i=t.icon_name,s=t.change_score,l=t.playAgain;return r.createElement("div",{className:"Picked"},r.createElement("div",{className:"Picked_row flex"},r.createElement("div",{className:"Picked_col"},r.createElement("div",{className:"Picked_title text-center"},"YOU PICKED"),r.createElement("div",{className:"flex justify-center items-center"},r.createElement("div",{className:"Picked_icon ".concat(1===s?"Picked_icon-win":"")},r.createElement(U,n[i])))),!c||o?null:r.createElement("div",{className:"Picked_result"},r.createElement(F,{change_score:s,playAgain:l})),r.createElement("div",{className:"Picked_col"},r.createElement("div",{className:"Picked_title text-center"},"THE HOUSE PICKED"),r.createElement("div",{className:"Picked_house_bot flex justify-center items-center"},c?r.createElement("div",{className:"Picked_house_picked Picked_icon ".concat(-1===s?"Picked_icon-win":"")},r.createElement(U,n[c])):r.createElement("div",{className:"Picked_house_picking brs-50per"})))),c&&o?r.createElement("div",{className:"Picked_result"},r.createElement(F,{change_score:s,playAgain:l})):null)},H=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),r.useContext(a).icon_name?r.createElement(Y,null):r.createElement("div",{className:"Pages_choices"},r.createElement($,null))},K=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=r.useContext(a),n=t.game_name,c=t.score;return r.createElement("div",{className:"Score flex"},r.createElement("div",{className:"Score_name"},n.split("\n").map((function(e){return r.createElement("div",{key:e},e)}))),r.createElement("div",{className:"Score_right"},r.createElement("div",{className:"Score_title"},"SCORE"),r.createElement("div",{className:"Score_num"},c)))};var G=n(935);const q=function(e){var t=e.children;return G.createPortal(t,document.getElementsByTagName("body")[0])},J=n.p+"static/images_icons/513320fbf32ba9e4a81fba903a77b85f.svg",Q=n.p+"static/images_icons/258b753fb6284dc8ae00c5b2fa7938c0.svg",V=n.p+"static/images_icons/bde602ecd1a4e55e0c27137ed651e027.svg";function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const Z=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t,n,c=r.useContext(a),i=c.icon_name,s=c.is_bonus,l=c.changeIsBonus,u=(t=r.useState(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,c,o=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){i=!0,c=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw c}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=u[0],f=u[1],d=function(){f(!1)};return r.createElement("div",{className:"Actions"},i?null:r.createElement(r.Fragment,null,r.createElement("button",{type:"button",className:"Actions_btn ".concat(s?"Actions_btn-active":""),onClick:function(){l()}},"Bonus"),r.createElement("button",{type:"button",className:"Actions_btn ".concat(s?"":"Actions_btn-active"),onClick:function(){l(!1)}},"Normal")),r.createElement("button",{type:"button",className:"Actions_btn",onClick:function(){f(!0)}},"Rules"),m?r.createElement(q,null,r.createElement("div",{className:"Actions_rules"},o?null:r.createElement("div",{className:"Actions_rules_bg",onClick:d}),r.createElement("div",{className:"Actions_rules_contain"},o?r.createElement("div",{className:"Actions_rules_tile"},"RULES"):null,r.createElement("img",{src:s?J:Q,alt:""})),r.createElement("div",{className:"Actions_rules_close"},r.createElement("img",{src:V,alt:"",onClick:d})))):null)},ee=n.p+"static/images_icons/5dee31a24405fe21ea46c4d7f6e20d46.jpg",te=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),r.useLayoutEffect((function(){o&&document.getElementsByTagName("body")[0].classList.add("device-mobile")}),[]),r.createElement(B,null,r.createElement("div",{className:"App"},r.createElement("div",{className:"App_score"},r.createElement(K,null)),r.createElement("div",{className:"flex justify-center"},r.createElement(H,null)),r.createElement("div",null,r.createElement(Z,null)),r.createElement("img",{style:{display:"none"},src:ee,alt:""})))};(0,c.s)(document.getElementById("root")).render(r.createElement(te,null)),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))}},n={};function r(e){var c=n[e];if(void 0!==c)return c.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,c,o)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,c,o]=e[u],i=!0,s=0;s<n.length;s++)(!1&o||a>=o)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(i=!1,o<a&&(a=o));if(i){e.splice(u--,1);var l=c();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,c,o]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.p="/",(()=>{var e={143:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var c,o,[a,i,s]=n,l=0;if(a.some((t=>0!==e[t]))){for(c in i)r.o(i,c)&&(r.m[c]=i[c]);if(s)var u=s(r)}for(t&&t(n);l<a.length;l++)o=a[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self.webpackChunkrock_paper_scissors_master=self.webpackChunkrock_paper_scissors_master||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var c=r.O(void 0,[745],(()=>r(378)));c=r.O(c)})();
//# sourceMappingURL=app.js.map