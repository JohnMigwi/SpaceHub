"use strict";(self.webpackChunkspacehub=self.webpackChunkspacehub||[]).push([[213],{8503:function(e,n,r){r.d(n,{Z:function(){return ee}});var t=r(7294),l=r(5785);function i(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var t=0,l=function(){};return{s:l,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw i}}}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var c=Object.defineProperty,a=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,y=function(e,n,r){return n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r},m=function(e,n){for(var r in n||(n={}))s.call(n,r)&&y(e,r,n[r]);if(f){var t,l=i(f(n));try{for(l.s();!(t=l.n()).done;){r=t.value;d.call(n,r)&&y(e,r,n[r])}}catch(o){l.e(o)}finally{l.f()}}return e};function p(e){return"span"===e._type&&"text"in e&&"string"==typeof e.text&&(void 0===e.marks||Array.isArray(e.marks)&&e.marks.every((function(e){return"string"==typeof e})))}function v(e){return"string"==typeof e._type&&"@"!==e._type[0]&&(!("markDefs"in e)||Array.isArray(e.markDefs)&&e.markDefs.every((function(e){return"string"==typeof e._key})))&&"children"in e&&Array.isArray(e.children)&&e.children.every((function(e){return"object"==typeof e&&"_type"in e}))}function h(e){return v(e)&&"listItem"in e&&"string"==typeof e.listItem&&(void 0===e.level||"number"==typeof e.level)}function k(e){return"@list"===e._type}function b(e){return"@span"===e._type}function I(e){return"@text"===e._type}var g=["strong","em","code","underline","strike-through"];function E(e,n,r){if(!p(e)||!e.marks)return[];if(!e.marks.length)return[];var t=e.marks.slice(),l={};return t.forEach((function(e){l[e]=1;for(var t=n+1;t<r.length;t++){var i=r[t];if(!p(i)||!Array.isArray(i.marks)||-1===i.marks.indexOf(e))break;l[e]++}})),t.sort((function(e,n){return function(e,n,r){var t=e[n],l=e[r];if(t!==l)return l-t;var i=g.indexOf(n),o=g.indexOf(r);if(i!==o)return i-o;return n.localeCompare(r)}(l,e,n)}))}function w(e,n){return(e.level||1)===n.level&&e.listItem===n.listItem}function _(e,n,r){return{_type:"@list",_key:"".concat(e._key||"".concat(n),"-parent"),mode:r,level:e.level||1,listItem:e.listItem,children:[e]}}function x(e,n){var r=n.level||1,t=n.listItem||"normal",l="string"==typeof n.listItem;if(k(e)&&(e.level||1)===r&&l&&(e.listItem||"normal")===t)return e;if("children"in e){var i=e.children[e.children.length-1];return i&&!p(i)?x(i,n):void 0}}function O(e){var n="";return e.children.forEach((function(e){I(e)?n+=e.text:b(e)&&(n+=O(e))})),n}function A(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"==typeof e)return j(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,n)}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var t=0,l=function(){};return{s:l,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw i}}}}function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var S=Object.defineProperty,N=Object.defineProperties,T=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,C=function(e,n,r){return n in e?S(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r},L=function(e,n){for(var r in n||(n={}))D.call(n,r)&&C(e,r,n[r]);if(P){var t,l=A(P(n));try{for(l.s();!(t=l.n()).done;){r=t.value;M.call(n,r)&&C(e,r,n[r])}}catch(i){l.e(i)}finally{l.f()}}return e},B=function(e,n){return N(e,T(n))},K=function(e,n){var r={};for(var t in e)D.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&P){var l,i=A(P(e));try{for(i.s();!(l=i.n()).done;){t=l.value;n.indexOf(t)<0&&M.call(e,t)&&(r[t]=e[t])}}catch(o){i.e(o)}finally{i.f()}}return r};function U(e,n){var r=n,t=(r.block,r.list,r.listItem,r.marks,r.types,K(r,["block","list","listItem","marks","types"]));return L(B(L({},e),{block:Z(e,n,"block"),list:Z(e,n,"list"),listItem:Z(e,n,"listItem"),marks:Z(e,n,"marks"),types:Z(e,n,"types")}),t)}function Z(e,n,r){var t=n[r],l=e[r];return"function"==typeof t||t&&"function"==typeof l?t:t?L(L({},l),t):l}var q={textDecoration:"underline"},$=function(e,n){return"Unknown ".concat(e,", specify a component for it in the `components.").concat(n,"` prop")},F=function(e){return $('block type "'.concat(e,'"'),"types")};function z(e){console.warn(e)}var G={display:"none"},H={types:{},block:{normal:function(e){var n=e.children;return t.createElement("p",null,n)},blockquote:function(e){var n=e.children;return t.createElement("blockquote",null,n)},h1:function(e){var n=e.children;return t.createElement("h1",null,n)},h2:function(e){var n=e.children;return t.createElement("h2",null,n)},h3:function(e){var n=e.children;return t.createElement("h3",null,n)},h4:function(e){var n=e.children;return t.createElement("h4",null,n)},h5:function(e){var n=e.children;return t.createElement("h5",null,n)},h6:function(e){var n=e.children;return t.createElement("h6",null,n)}},marks:{em:function(e){var n=e.children;return t.createElement("em",null,n)},strong:function(e){var n=e.children;return t.createElement("strong",null,n)},code:function(e){var n=e.children;return t.createElement("code",null,n)},underline:function(e){var n=e.children;return t.createElement("span",{style:q},n)},"strike-through":function(e){var n=e.children;return t.createElement("del",null,n)},link:function(e){var n=e.children,r=e.value;return t.createElement("a",{href:null==r?void 0:r.href},n)}},list:{number:function(e){var n=e.children;return t.createElement("ol",null,n)},bullet:function(e){var n=e.children;return t.createElement("ul",null,n)}},listItem:function(e){var n=e.children;return t.createElement("li",null,n)},hardBreak:function(){return t.createElement("br",null)},unknownType:function(e){var n=e.value,r=e.isInline,l=F(n._type);return r?t.createElement("span",{style:G},l):t.createElement("div",{style:G},l)},unknownMark:function(e){var n=e.markType,r=e.children;return t.createElement("span",{className:"unknown__pt__mark__".concat(n)},r)},unknownList:function(e){var n=e.children;return t.createElement("ul",null,n)},unknownListItem:function(e){var n=e.children;return t.createElement("li",null,n)},unknownBlockStyle:function(e){var n=e.children;return t.createElement("p",null,n)}},J=(0,t.createContext)(H);function Q(e){var n=e.value,r=e.components,i=e.listNestingMode,o=e.onMissingComponent,c=(void 0===o?z:o)||W,f=function(e,n){for(var r,t,i,o=[],c=0;c<e.length;c++){var f=e[c];if(h(f))if(r)if(w(f,r))r.children.push(f);else if((f.level||1)>r.level){var s=_(f,c,n);if("html"===n){var d=r.children[r.children.length-1],y=(t=m({},d),i={children:[].concat((0,l.Z)(d.children),[s])},a(t,u(i)));r.children[r.children.length-1]=y}else r.children.push(s);r=s}else if((f.level||1)<r.level){var p=x(o[o.length-1],f);if(p){(r=p).children.push(f);continue}r=_(f,c,n),o.push(r)}else if(f.listItem===r.listItem)console.warn("Unknown state encountered for block",f),o.push(f);else{var v=x(o[o.length-1],{level:f.level||1});if(v&&v.listItem===f.listItem){(r=v).children.push(f);continue}r=_(f,c,n),o.push(r)}else r=_(f,c,n),o.push(r);else o.push(f),r=void 0}return o}(Array.isArray(n)?n:[n],i||"html"),s=(0,t.useContext)(J),d=(0,t.useMemo)((function(){return r?U(s,r):s}),[s,r]),y=(0,t.useMemo)((function(){return R(d,c)}),[d,c]),p=f.map((function(e,n){return y({node:e,index:n,isInline:!1,renderNode:y})}));return r?t.createElement(J.Provider,{value:d},p):t.createElement(t.Fragment,null,p)}var R=function(e,n){function r(l){var i=l.node,o=l.index,c=l.isInline,a=i._key||"node-".concat(o);return k(i)?function(l,i,o){var c=l.children.map((function(e,n){return r({node:e._key?e:B(L({},e),{_key:"li-".concat(i,"-").concat(n)}),index:i,isInline:!1,renderNode:r})})),a=e.list,u=("function"==typeof a?a:a[l.listItem])||e.unknownList;if(u===e.unknownList){var f=l.listItem||"bullet";n($('list style "'.concat(f,'"'),"list"),{nodeType:"listStyle",type:f})}return t.createElement(u,{key:o,value:l,index:i,isInline:!1,renderNode:r},c)}(i,o,a):h(i)?function(l,i,o){var c=V({node:l,index:i,isInline:!1,renderNode:r}),a=e.listItem,u=("function"==typeof a?a:a[l.listItem])||e.unknownListItem;if(u===e.unknownListItem){var f=l.listItem||"bullet";n($('list item style "'.concat(f,'"'),"listItem"),{type:f,nodeType:"listItemStyle"})}var s=c.children;if(l.style&&"normal"!==l.style){var d=l;d.listItem;s=r({node:K(d,["listItem"]),index:i,isInline:!1,renderNode:r})}return t.createElement(u,{key:o,value:l,index:i,isInline:!1,renderNode:r},s)}(i,o,a):b(i)?function(l,i,o){var c=l.markDef,a=l.markType,u=l.markKey,f=e.marks[a]||e.unknownMark,s=l.children.map((function(e,n){return r({node:e,index:n,isInline:!0,renderNode:r})}));f===e.unknownMark&&n(function(e){return $('mark type "'.concat(e,'"'),"marks")}(a),{nodeType:"mark",type:a});return t.createElement(f,{key:o,text:O(l),value:c,markType:a,markKey:u,renderNode:r},s)}(i,0,a):v(i)?function(l,i,o,c){var a=V({node:l,index:i,isInline:c,renderNode:r}),u=(a._key,K(a,["_key"])),f=u.node.style||"normal",s=("function"==typeof e.block?e.block:e.block[f])||e.unknownBlockStyle;s===e.unknownBlockStyle&&n($('block style "'.concat(f,'"'),"block"),{nodeType:"blockStyle",type:f});return t.createElement(s,B(L({key:o},u),{value:u.node,renderNode:r}))}(i,o,a,c):I(i)?function(n,r){if("\n"===n.text){var l=e.hardBreak;return l?t.createElement(l,{key:r}):"\n"}return n.text}(i,a):function(l,i,o,c){var a=e.types[l._type],u={value:l,isInline:c,index:i,renderNode:r};if(a)return t.createElement(a,L({key:o},u));n(F(l._type),{nodeType:"block",type:l._type});var f=e.unknownType;return t.createElement(f,L({key:o},u))}(i,o,a,c)}return r};function V(e){var n=e.node,r=e.index,t=e.isInline,l=e.renderNode,o=function(e){var n=e.children,r=e.markDefs,t=void 0===r?[]:r;if(!n||!n.length)return[];for(var l=n.map(E),o={_type:"@span",children:[],markType:"<unknown>"},c=[o],a=0;a<n.length;a++){var u=n[a],f=l[a],s=1;if(c.length>1)for(;s<c.length;s++){var d=c[s].markKey||"",y=f.indexOf(d);if(-1===y)break;f.splice(y,1)}var m,v=(c=c.slice(0,s))[c.length-1],h=i(f);try{var k=function(){var e=m.value,n=t.find((function(n){return n._key===e})),r=n?n._type:e,l={_type:"@span",_key:u._key,children:[],markDef:n,markType:r,markKey:e};v.children.push(l),c.push(l),v=l};for(h.s();!(m=h.n()).done;)k()}catch(g){h.e(g)}finally{h.f()}if(p(u)){for(var b=u.text.split("\n"),I=b.length;I-- >1;)b.splice(I,0,"\n");v.children=v.children.concat(b.map((function(e){return{_type:"@text",text:e}})))}else v.children=v.children.concat(u)}return o.children}(n),c=o.map((function(e,n){return l({node:e,isInline:!0,index:n,renderNode:l})}));return{_key:n._key||"block-".concat(r),children:c,index:r,isInline:t,node:n}}function W(){}var X=r(943),Y={block:{normal:function(e){var n=e.children;return t.createElement(X.Z,null,n)}}};var ee=function(e){var n=e.value;return t.createElement(Q,{value:n,components:Y})}}}]);
//# sourceMappingURL=542fbc162cb9e104cdcce011d4342e6e640c1b3b-841144e472b4bff03142.js.map