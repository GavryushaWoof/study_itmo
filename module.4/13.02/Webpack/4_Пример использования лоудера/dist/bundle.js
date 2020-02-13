var myLib=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports.sayHelloUser=function(){var e=(0,n(1).sayHello)("User!");document.getElementsByTagName("body")[0].innerHTML=e}},function(e,t,n){var r=n(2),o="<h1>Hello <i>{{name}}</i></h1>";r.parse(o),e.exports.sayHello=function(e){return r.render(o,{name:e})}},function(e,t,n){var r,o,i,s;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
s=function(e){var t=Object.prototype.toString,n=Array.isArray||function(e){return"[object Array]"===t.call(e)};function r(e){return"function"==typeof e}function o(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function i(e,t){return null!=e&&"object"===a(e)&&t in e}var s=RegExp.prototype.test,u=/\S/;function c(e){return!function(e,t){return s.call(e,t)}(u,e)}var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},p=/\s*/,f=/\s+/,h=/\s*=/,y=/\s*\}/,d=/#|\^|\/|>|\{|&|=|!/;function v(e){this.string=e,this.tail=e,this.pos=0}function g(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function b(){this.cache={}}v.prototype.eos=function(){return""===this.tail},v.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},v.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},g.prototype.push=function(e){return new g(e,this)},g.prototype.lookup=function(e){var t,n,o,s=this.cache;if(s.hasOwnProperty(e))t=s[e];else{for(var u,c,l,p=this,f=!1;p;){if(e.indexOf(".")>0)for(u=p.view,c=e.split("."),l=0;null!=u&&l<c.length;)l===c.length-1&&(f=i(u,c[l])||(n=u,o=c[l],null!=n&&"object"!==a(n)&&n.hasOwnProperty&&n.hasOwnProperty(o))),u=u[c[l++]];else u=p.view[e],f=i(p.view,e);if(f){t=u;break}p=p.parent}s[e]=t}return r(t)&&(t=t.call(this.view)),t},b.prototype.clearCache=function(){this.cache={}},b.prototype.parse=function(t,r){var i=this.cache,s=t+":"+(r||e.tags).join(":"),a=i[s];return null==a&&(a=i[s]=function(t,r){if(!t)return[];var i,s,a,u=[],l=[],g=[],b=!1,w=!1;function m(){if(b&&!w)for(;g.length;)delete l[g.pop()];else g=[];b=!1,w=!1}function x(e){if("string"==typeof e&&(e=e.split(f,2)),!n(e)||2!==e.length)throw new Error("Invalid tags: "+e);i=new RegExp(o(e[0])+"\\s*"),s=new RegExp("\\s*"+o(e[1])),a=new RegExp("\\s*"+o("}"+e[1]))}x(r||e.tags);for(var k,S,j,T,U,E,O=new v(t);!O.eos();){if(k=O.pos,j=O.scanUntil(i))for(var P=0,_=j.length;P<_;++P)c(T=j.charAt(P))?g.push(l.length):w=!0,l.push(["text",T,k,k+1]),k+=1,"\n"===T&&m();if(!O.scan(i))break;if(b=!0,S=O.scan(d)||"name",O.scan(p),"="===S?(j=O.scanUntil(h),O.scan(h),O.scanUntil(s)):"{"===S?(j=O.scanUntil(a),O.scan(y),O.scanUntil(s),S="&"):j=O.scanUntil(s),!O.scan(s))throw new Error("Unclosed tag at "+O.pos);if(U=[S,j,k,O.pos],l.push(U),"#"===S||"^"===S)u.push(U);else if("/"===S){if(!(E=u.pop()))throw new Error('Unopened section "'+j+'" at '+k);if(E[1]!==j)throw new Error('Unclosed section "'+E[1]+'" at '+k)}else"name"===S||"{"===S||"&"===S?w=!0:"="===S&&x(j)}if(E=u.pop())throw new Error('Unclosed section "'+E[1]+'" at '+O.pos);return function(e){for(var t,n=[],r=n,o=[],i=0,s=e.length;i<s;++i)switch((t=e[i])[0]){case"#":case"^":r.push(t),o.push(t),r=t[4]=[];break;case"/":o.pop()[5]=t[2],r=o.length>0?o[o.length-1][4]:n;break;default:r.push(t)}return n}(function(e){for(var t,n,r=[],o=0,i=e.length;o<i;++o)(t=e[o])&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}(l))}(t,r)),a},b.prototype.render=function(e,t,n,r){var o=this.parse(e,r),i=t instanceof g?t:new g(t);return this.renderTokens(o,i,n,e,r)},b.prototype.renderTokens=function(e,t,n,r,o){for(var i,s,a,u="",c=0,l=e.length;c<l;++c)a=void 0,"#"===(s=(i=e[c])[0])?a=this.renderSection(i,t,n,r):"^"===s?a=this.renderInverted(i,t,n,r):">"===s?a=this.renderPartial(i,t,n,o):"&"===s?a=this.unescapedValue(i,t):"name"===s?a=this.escapedValue(i,t):"text"===s&&(a=this.rawValue(i)),void 0!==a&&(u+=a);return u},b.prototype.renderSection=function(e,t,o,i){var s=this,u="",c=t.lookup(e[1]);if(c){if(n(c))for(var l=0,p=c.length;l<p;++l)u+=this.renderTokens(e[4],t.push(c[l]),o,i);else if("object"===a(c)||"string"==typeof c||"number"==typeof c)u+=this.renderTokens(e[4],t.push(c),o,i);else if(r(c)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");null!=(c=c.call(t.view,i.slice(e[3],e[5]),function(e){return s.render(e,t,o)}))&&(u+=c)}else u+=this.renderTokens(e[4],t,o,i);return u}},b.prototype.renderInverted=function(e,t,r,o){var i=t.lookup(e[1]);if(!i||n(i)&&0===i.length)return this.renderTokens(e[4],t,r,o)},b.prototype.renderPartial=function(e,t,n,o){if(n){var i=r(n)?n(e[1]):n[e[1]];return null!=i?this.renderTokens(this.parse(i,o),t,n,i):void 0}},b.prototype.unescapedValue=function(e,t){var n=t.lookup(e[1]);if(null!=n)return n},b.prototype.escapedValue=function(t,n){var r=n.lookup(t[1]);if(null!=r)return e.escape(r)},b.prototype.rawValue=function(e){return e[1]},e.name="mustache.js",e.version="3.0.1",e.tags=["{{","}}"];var w=new b;return e.clearCache=function(){return w.clearCache()},e.parse=function(e,t){return w.parse(e,t)},e.render=function(e,t,r,o){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(n(i=e)?"array":a(i))+'" was given as the first argument for mustache#render(template, view, partials)');var i;return w.render(e,t,r,o)},e.to_html=function(t,n,o,i){var s=e.render(t,n,o);if(!r(i))return s;i(s)},e.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,function(e){return l[e]})},e.Scanner=v,e.Context=g,e.Writer=b,e},"object"===a(t)&&t&&"string"!=typeof t.nodeName?s(t):(o=[t],void 0===(i="function"==typeof(r=s)?r.apply(t,o):r)||(e.exports=i))}]);