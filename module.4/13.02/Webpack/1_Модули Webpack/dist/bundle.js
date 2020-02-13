!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){window.addEventListener("load",()=>{const e=(0,n(1).sayHello)("Browser!");document.getElementsByTagName("body")[0].innerHTML=e})},function(e,t,n){const r=n(2),o="<h1>Hello <i>{{name}}</i></h1>";r.parse(o),e.exports.sayHello=(e=>r.render(o,{name:e}))},function(e,t,n){var r,o,i,s;
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
s=function(e){var t=Object.prototype.toString,n=Array.isArray||function(e){return"[object Array]"===t.call(e)};function r(e){return"function"==typeof e}function o(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function i(e,t){return null!=e&&"object"==typeof e&&t in e}var s=RegExp.prototype.test,a=/\S/;function u(e){return!function(e,t){return s.call(e,t)}(a,e)}var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},l=/\s*/,p=/\s+/,f=/\s*=/,h=/\s*\}/,d=/#|\^|\/|>|\{|&|=|!/;function y(e){this.string=e,this.tail=e,this.pos=0}function v(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function g(){this.cache={}}y.prototype.eos=function(){return""===this.tail},y.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},y.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},v.prototype.push=function(e){return new v(e,this)},v.prototype.lookup=function(e){var t,n,o,s=this.cache;if(s.hasOwnProperty(e))t=s[e];else{for(var a,u,c,l=this,p=!1;l;){if(e.indexOf(".")>0)for(a=l.view,u=e.split("."),c=0;null!=a&&c<u.length;)c===u.length-1&&(p=i(a,u[c])||(n=a,o=u[c],null!=n&&"object"!=typeof n&&n.hasOwnProperty&&n.hasOwnProperty(o))),a=a[u[c++]];else a=l.view[e],p=i(l.view,e);if(p){t=a;break}l=l.parent}s[e]=t}return r(t)&&(t=t.call(this.view)),t},g.prototype.clearCache=function(){this.cache={}},g.prototype.parse=function(t,r){var i=this.cache,s=t+":"+(r||e.tags).join(":"),a=i[s];return null==a&&(a=i[s]=function(t,r){if(!t)return[];var i,s,a,c=[],v=[],g=[],w=!1,b=!1;function m(){if(w&&!b)for(;g.length;)delete v[g.pop()];else g=[];w=!1,b=!1}function x(e){if("string"==typeof e&&(e=e.split(p,2)),!n(e)||2!==e.length)throw new Error("Invalid tags: "+e);i=new RegExp(o(e[0])+"\\s*"),s=new RegExp("\\s*"+o(e[1])),a=new RegExp("\\s*"+o("}"+e[1]))}x(r||e.tags);for(var k,j,E,T,O,S,U=new y(t);!U.eos();){if(k=U.pos,E=U.scanUntil(i))for(var P=0,_=E.length;P<_;++P)u(T=E.charAt(P))?g.push(v.length):b=!0,v.push(["text",T,k,k+1]),k+=1,"\n"===T&&m();if(!U.scan(i))break;if(w=!0,j=U.scan(d)||"name",U.scan(l),"="===j?(E=U.scanUntil(f),U.scan(f),U.scanUntil(s)):"{"===j?(E=U.scanUntil(a),U.scan(h),U.scanUntil(s),j="&"):E=U.scanUntil(s),!U.scan(s))throw new Error("Unclosed tag at "+U.pos);if(O=[j,E,k,U.pos],v.push(O),"#"===j||"^"===j)c.push(O);else if("/"===j){if(!(S=c.pop()))throw new Error('Unopened section "'+E+'" at '+k);if(S[1]!==E)throw new Error('Unclosed section "'+S[1]+'" at '+k)}else"name"===j||"{"===j||"&"===j?b=!0:"="===j&&x(E)}if(S=c.pop())throw new Error('Unclosed section "'+S[1]+'" at '+U.pos);return function(e){for(var t,n=[],r=n,o=[],i=0,s=e.length;i<s;++i)switch((t=e[i])[0]){case"#":case"^":r.push(t),o.push(t),r=t[4]=[];break;case"/":o.pop()[5]=t[2],r=o.length>0?o[o.length-1][4]:n;break;default:r.push(t)}return n}(function(e){for(var t,n,r=[],o=0,i=e.length;o<i;++o)(t=e[o])&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}(v))}(t,r)),a},g.prototype.render=function(e,t,n,r){var o=this.parse(e,r),i=t instanceof v?t:new v(t);return this.renderTokens(o,i,n,e,r)},g.prototype.renderTokens=function(e,t,n,r,o){for(var i,s,a,u="",c=0,l=e.length;c<l;++c)a=void 0,"#"===(s=(i=e[c])[0])?a=this.renderSection(i,t,n,r):"^"===s?a=this.renderInverted(i,t,n,r):">"===s?a=this.renderPartial(i,t,n,o):"&"===s?a=this.unescapedValue(i,t):"name"===s?a=this.escapedValue(i,t):"text"===s&&(a=this.rawValue(i)),void 0!==a&&(u+=a);return u},g.prototype.renderSection=function(e,t,o,i){var s=this,a="",u=t.lookup(e[1]);if(u){if(n(u))for(var c=0,l=u.length;c<l;++c)a+=this.renderTokens(e[4],t.push(u[c]),o,i);else if("object"==typeof u||"string"==typeof u||"number"==typeof u)a+=this.renderTokens(e[4],t.push(u),o,i);else if(r(u)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");null!=(u=u.call(t.view,i.slice(e[3],e[5]),function(e){return s.render(e,t,o)}))&&(a+=u)}else a+=this.renderTokens(e[4],t,o,i);return a}},g.prototype.renderInverted=function(e,t,r,o){var i=t.lookup(e[1]);if(!i||n(i)&&0===i.length)return this.renderTokens(e[4],t,r,o)},g.prototype.renderPartial=function(e,t,n,o){if(n){var i=r(n)?n(e[1]):n[e[1]];return null!=i?this.renderTokens(this.parse(i,o),t,n,i):void 0}},g.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},g.prototype.escapedValue=function(t,n){var r=n.lookup(t[1]);if(null!=r)return e.escape(r)},g.prototype.rawValue=function(e){return e[1]},e.name="mustache.js",e.version="3.0.1",e.tags=["{{","}}"];var w=new g;return e.clearCache=function(){return w.clearCache()},e.parse=function(e,t){return w.parse(e,t)},e.render=function(e,t,r,o){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(n(i=e)?"array":typeof i)+'" was given as the first argument for mustache#render(template, view, partials)');var i;return w.render(e,t,r,o)},e.to_html=function(t,n,o,i){var s=e.render(t,n,o);if(!r(i))return s;i(s)},e.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,function(e){return c[e]})},e.Scanner=y,e.Context=v,e.Writer=g,e},t&&"string"!=typeof t.nodeName?s(t):(o=[t],void 0===(i="function"==typeof(r=s)?r.apply(t,o):r)||(e.exports=i))}]);