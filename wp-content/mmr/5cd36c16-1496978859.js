//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
;
window.wp = window.wp || {};

(function( exports, $ ){
	var api = {}, ctor, inherits,
		slice = Array.prototype.slice;

	// Shared empty constructor function to aid in prototype-chain creation.
	ctor = function() {};

	/**
	 * Helper function to correctly set up the prototype chain, for subclasses.
	 * Similar to `goog.inherits`, but uses a hash of prototype properties and
	 * class properties to be extended.
	 *
	 * @param  object parent      Parent class constructor to inherit from.
	 * @param  object protoProps  Properties to apply to the prototype for use as class instance properties.
	 * @param  object staticProps Properties to apply directly to the class constructor.
	 * @return child              The subclassed constructor.
	 */
	inherits = function( parent, protoProps, staticProps ) {
		var child;

		// The constructor function for the new subclass is either defined by you
		// (the "constructor" property in your `extend` definition), or defaulted
		// by us to simply call `super()`.
		if ( protoProps && protoProps.hasOwnProperty( 'constructor' ) ) {
			child = protoProps.constructor;
		} else {
			child = function() {
				// Storing the result `super()` before returning the value
				// prevents a bug in Opera where, if the constructor returns
				// a function, Opera will reject the return value in favor of
				// the original object. This causes all sorts of trouble.
				var result = parent.apply( this, arguments );
				return result;
			};
		}

		// Inherit class (static) properties from parent.
		$.extend( child, parent );

		// Set the prototype chain to inherit from `parent`, without calling
		// `parent`'s constructor function.
		ctor.prototype  = parent.prototype;
		child.prototype = new ctor();

		// Add prototype properties (instance properties) to the subclass,
		// if supplied.
		if ( protoProps )
			$.extend( child.prototype, protoProps );

		// Add static properties to the constructor function, if supplied.
		if ( staticProps )
			$.extend( child, staticProps );

		// Correctly set child's `prototype.constructor`.
		child.prototype.constructor = child;

		// Set a convenience property in case the parent's prototype is needed later.
		child.__super__ = parent.prototype;

		return child;
	};

	/**
	 * Base class for object inheritance.
	 */
	api.Class = function( applicator, argsArray, options ) {
		var magic, args = arguments;

		if ( applicator && argsArray && api.Class.applicator === applicator ) {
			args = argsArray;
			$.extend( this, options || {} );
		}

		magic = this;

		/*
		 * If the class has a method called "instance",
		 * the return value from the class' constructor will be a function that
		 * calls the "instance" method.
		 *
		 * It is also an object that has properties and methods inside it.
		 */
		if ( this.instance ) {
			magic = function() {
				return magic.instance.apply( magic, arguments );
			};

			$.extend( magic, this );
		}

		magic.initialize.apply( magic, args );
		return magic;
	};

	/**
	 * Creates a subclass of the class.
	 *
	 * @param  object protoProps  Properties to apply to the prototype.
	 * @param  object staticProps Properties to apply directly to the class.
	 * @return child              The subclass.
	 */
	api.Class.extend = function( protoProps, classProps ) {
		var child = inherits( this, protoProps, classProps );
		child.extend = this.extend;
		return child;
	};

	api.Class.applicator = {};

	/**
	 * Initialize a class instance.
	 *
	 * Override this function in a subclass as needed.
	 */
	api.Class.prototype.initialize = function() {};

	/*
	 * Checks whether a given instance extended a constructor.
	 *
	 * The magic surrounding the instance parameter causes the instanceof
	 * keyword to return inaccurate results; it defaults to the function's
	 * prototype instead of the constructor chain. Hence this function.
	 */
	api.Class.prototype.extended = function( constructor ) {
		var proto = this;

		while ( typeof proto.constructor !== 'undefined' ) {
			if ( proto.constructor === constructor )
				return true;
			if ( typeof proto.constructor.__super__ === 'undefined' )
				return false;
			proto = proto.constructor.__super__;
		}
		return false;
	};

	/**
	 * An events manager object, offering the ability to bind to and trigger events.
	 *
	 * Used as a mixin.
	 */
	api.Events = {
		trigger: function( id ) {
			if ( this.topics && this.topics[ id ] )
				this.topics[ id ].fireWith( this, slice.call( arguments, 1 ) );
			return this;
		},

		bind: function( id ) {
			this.topics = this.topics || {};
			this.topics[ id ] = this.topics[ id ] || $.Callbacks();
			this.topics[ id ].add.apply( this.topics[ id ], slice.call( arguments, 1 ) );
			return this;
		},

		unbind: function( id ) {
			if ( this.topics && this.topics[ id ] )
				this.topics[ id ].remove.apply( this.topics[ id ], slice.call( arguments, 1 ) );
			return this;
		}
	};

	/**
	 * Observable values that support two-way binding.
	 *
	 * @constructor
	 */
	api.Value = api.Class.extend({
		/**
		 * @param {mixed}  initial The initial value.
		 * @param {object} options
		 */
		initialize: function( initial, options ) {
			this._value = initial; // @todo: potentially change this to a this.set() call.
			this.callbacks = $.Callbacks();
			this._dirty = false;

			$.extend( this, options || {} );

			this.set = $.proxy( this.set, this );
		},

		/*
		 * Magic. Returns a function that will become the instance.
		 * Set to null to prevent the instance from extending a function.
		 */
		instance: function() {
			return arguments.length ? this.set.apply( this, arguments ) : this.get();
		},

		/**
		 * Get the value.
		 *
		 * @return {mixed}
		 */
		get: function() {
			return this._value;
		},

		/**
		 * Set the value and trigger all bound callbacks.
		 *
		 * @param {object} to New value.
		 */
		set: function( to ) {
			var from = this._value;

			to = this._setter.apply( this, arguments );
			to = this.validate( to );

			// Bail if the sanitized value is null or unchanged.
			if ( null === to || _.isEqual( from, to ) ) {
				return this;
			}

			this._value = to;
			this._dirty = true;

			this.callbacks.fireWith( this, [ to, from ] );

			return this;
		},

		_setter: function( to ) {
			return to;
		},

		setter: function( callback ) {
			var from = this.get();
			this._setter = callback;
			// Temporarily clear value so setter can decide if it's valid.
			this._value = null;
			this.set( from );
			return this;
		},

		resetSetter: function() {
			this._setter = this.constructor.prototype._setter;
			this.set( this.get() );
			return this;
		},

		validate: function( value ) {
			return value;
		},

		/**
		 * Bind a function to be invoked whenever the value changes.
		 *
		 * @param {...Function} A function, or multiple functions, to add to the callback stack.
		 */
		bind: function() {
			this.callbacks.add.apply( this.callbacks, arguments );
			return this;
		},

		/**
		 * Unbind a previously bound function.
		 *
		 * @param {...Function} A function, or multiple functions, to remove from the callback stack.
		 */
		unbind: function() {
			this.callbacks.remove.apply( this.callbacks, arguments );
			return this;
		},

		link: function() { // values*
			var set = this.set;
			$.each( arguments, function() {
				this.bind( set );
			});
			return this;
		},

		unlink: function() { // values*
			var set = this.set;
			$.each( arguments, function() {
				this.unbind( set );
			});
			return this;
		},

		sync: function() { // values*
			var that = this;
			$.each( arguments, function() {
				that.link( this );
				this.link( that );
			});
			return this;
		},

		unsync: function() { // values*
			var that = this;
			$.each( arguments, function() {
				that.unlink( this );
				this.unlink( that );
			});
			return this;
		}
	});

	/**
	 * A collection of observable values.
	 *
	 * @constructor
	 * @augments wp.customize.Class
	 * @mixes wp.customize.Events
	 */
	api.Values = api.Class.extend({

		/**
		 * The default constructor for items of the collection.
		 *
		 * @type {object}
		 */
		defaultConstructor: api.Value,

		initialize: function( options ) {
			$.extend( this, options || {} );

			this._value = {};
			this._deferreds = {};
		},

		/**
		 * Get the instance of an item from the collection if only ID is specified.
		 *
		 * If more than one argument is supplied, all are expected to be IDs and
		 * the last to be a function callback that will be invoked when the requested
		 * items are available.
		 *
		 * @see {api.Values.when}
		 *
		 * @param  {string}   id ID of the item.
		 * @param  {...}         Zero or more IDs of items to wait for and a callback
		 *                       function to invoke when they're available. Optional.
		 * @return {mixed}    The item instance if only one ID was supplied.
		 *                    A Deferred Promise object if a callback function is supplied.
		 */
		instance: function( id ) {
			if ( arguments.length === 1 )
				return this.value( id );

			return this.when.apply( this, arguments );
		},

		/**
		 * Get the instance of an item.
		 *
		 * @param  {string} id The ID of the item.
		 * @return {[type]}    [description]
		 */
		value: function( id ) {
			return this._value[ id ];
		},

		/**
		 * Whether the collection has an item with the given ID.
		 *
		 * @param  {string}  id The ID of the item to look for.
		 * @return {Boolean}
		 */
		has: function( id ) {
			return typeof this._value[ id ] !== 'undefined';
		},

		/**
		 * Add an item to the collection.
		 *
		 * @param {string} id    The ID of the item.
		 * @param {mixed}  value The item instance.
		 * @return {mixed} The new item's instance.
		 */
		add: function( id, value ) {
			if ( this.has( id ) )
				return this.value( id );

			this._value[ id ] = value;
			value.parent = this;

			// Propagate a 'change' event on an item up to the collection.
			if ( value.extended( api.Value ) )
				value.bind( this._change );

			this.trigger( 'add', value );

			// If a deferred object exists for this item,
			// resolve it.
			if ( this._deferreds[ id ] )
				this._deferreds[ id ].resolve();

			return this._value[ id ];
		},

		/**
		 * Create a new item of the collection using the collection's default constructor
		 * and store it in the collection.
		 *
		 * @param  {string} id    The ID of the item.
		 * @param  {mixed}  value Any extra arguments are passed into the item's initialize method.
		 * @return {mixed}  The new item's instance.
		 */
		create: function( id ) {
			return this.add( id, new this.defaultConstructor( api.Class.applicator, slice.call( arguments, 1 ) ) );
		},

		/**
		 * Iterate over all items in the collection invoking the provided callback.
		 *
		 * @param  {Function} callback Function to invoke.
		 * @param  {object}   context  Object context to invoke the function with. Optional.
		 */
		each: function( callback, context ) {
			context = typeof context === 'undefined' ? this : context;

			$.each( this._value, function( key, obj ) {
				callback.call( context, obj, key );
			});
		},

		/**
		 * Remove an item from the collection.
		 *
		 * @param  {string} id The ID of the item to remove.
		 */
		remove: function( id ) {
			var value;

			if ( this.has( id ) ) {
				value = this.value( id );
				this.trigger( 'remove', value );
				if ( value.extended( api.Value ) )
					value.unbind( this._change );
				delete value.parent;
			}

			delete this._value[ id ];
			delete this._deferreds[ id ];
		},

		/**
		 * Runs a callback once all requested values exist.
		 *
		 * when( ids*, [callback] );
		 *
		 * For example:
		 *     when( id1, id2, id3, function( value1, value2, value3 ) {} );
		 *
		 * @returns $.Deferred.promise();
		 */
		when: function() {
			var self = this,
				ids  = slice.call( arguments ),
				dfd  = $.Deferred();

			// If the last argument is a callback, bind it to .done()
			if ( $.isFunction( ids[ ids.length - 1 ] ) )
				dfd.done( ids.pop() );

			/*
			 * Create a stack of deferred objects for each item that is not
			 * yet available, and invoke the supplied callback when they are.
			 */
			$.when.apply( $, $.map( ids, function( id ) {
				if ( self.has( id ) )
					return;

				/*
				 * The requested item is not available yet, create a deferred
				 * object to resolve when it becomes available.
				 */
				return self._deferreds[ id ] = self._deferreds[ id ] || $.Deferred();
			})).done( function() {
				var values = $.map( ids, function( id ) {
						return self( id );
					});

				// If a value is missing, we've used at least one expired deferred.
				// Call Values.when again to generate a new deferred.
				if ( values.length !== ids.length ) {
					// ids.push( callback );
					self.when.apply( self, ids ).done( function() {
						dfd.resolveWith( self, values );
					});
					return;
				}

				dfd.resolveWith( self, values );
			});

			return dfd.promise();
		},

		/**
		 * A helper function to propagate a 'change' event from an item
		 * to the collection itself.
		 */
		_change: function() {
			this.parent.trigger( 'change', this );
		}
	});

	// Create a global events bus on the Customizer.
	$.extend( api.Values.prototype, api.Events );


	/**
	 * Cast a string to a jQuery collection if it isn't already.
	 *
	 * @param {string|jQuery collection} element
	 */
	api.ensure = function( element ) {
		return typeof element == 'string' ? $( element ) : element;
	};

	/**
	 * An observable value that syncs with an element.
	 *
	 * Handles inputs, selects, and textareas by default.
	 *
	 * @constructor
	 * @augments wp.customize.Value
	 * @augments wp.customize.Class
	 */
	api.Element = api.Value.extend({
		initialize: function( element, options ) {
			var self = this,
				synchronizer = api.Element.synchronizer.html,
				type, update, refresh;

			this.element = api.ensure( element );
			this.events = '';

			if ( this.element.is('input, select, textarea') ) {
				this.events += 'change';
				synchronizer = api.Element.synchronizer.val;

				if ( this.element.is('input') ) {
					type = this.element.prop('type');
					if ( api.Element.synchronizer[ type ] ) {
						synchronizer = api.Element.synchronizer[ type ];
					}
					if ( 'text' === type || 'password' === type ) {
						this.events += ' keyup';
					} else if ( 'range' === type ) {
						this.events += ' input propertychange';
					}
				} else if ( this.element.is('textarea') ) {
					this.events += ' keyup';
				}
			}

			api.Value.prototype.initialize.call( this, null, $.extend( options || {}, synchronizer ) );
			this._value = this.get();

			update  = this.update;
			refresh = this.refresh;

			this.update = function( to ) {
				if ( to !== refresh.call( self ) )
					update.apply( this, arguments );
			};
			this.refresh = function() {
				self.set( refresh.call( self ) );
			};

			this.bind( this.update );
			this.element.bind( this.events, this.refresh );
		},

		find: function( selector ) {
			return $( selector, this.element );
		},

		refresh: function() {},

		update: function() {}
	});

	api.Element.synchronizer = {};

	$.each( [ 'html', 'val' ], function( index, method ) {
		api.Element.synchronizer[ method ] = {
			update: function( to ) {
				this.element[ method ]( to );
			},
			refresh: function() {
				return this.element[ method ]();
			}
		};
	});

	api.Element.synchronizer.checkbox = {
		update: function( to ) {
			this.element.prop( 'checked', to );
		},
		refresh: function() {
			return this.element.prop( 'checked' );
		}
	};

	api.Element.synchronizer.radio = {
		update: function( to ) {
			this.element.filter( function() {
				return this.value === to;
			}).prop( 'checked', true );
		},
		refresh: function() {
			return this.element.filter( ':checked' ).val();
		}
	};

	$.support.postMessage = !! window.postMessage;

	/**
	 * A communicator for sending data from one window to another over postMessage.
	 *
	 * @constructor
	 * @augments wp.customize.Class
	 * @mixes wp.customize.Events
	 */
	api.Messenger = api.Class.extend({
		/**
		 * Create a new Value.
		 *
		 * @param  {string} key     Unique identifier.
		 * @param  {mixed}  initial Initial value.
		 * @param  {mixed}  options Options hash. Optional.
		 * @return {Value}          Class instance of the Value.
		 */
		add: function( key, initial, options ) {
			return this[ key ] = new api.Value( initial, options );
		},

		/**
		 * Initialize Messenger.
		 *
		 * @param  {object} params - Parameters to configure the messenger.
		 *         {string} params.url - The URL to communicate with.
		 *         {window} params.targetWindow - The window instance to communicate with. Default window.parent.
		 *         {string} params.channel - If provided, will send the channel with each message and only accept messages a matching channel.
		 * @param  {object} options - Extend any instance parameter or method with this object.
		 */
		initialize: function( params, options ) {
			// Target the parent frame by default, but only if a parent frame exists.
			var defaultTarget = window.parent === window ? null : window.parent;

			$.extend( this, options || {} );

			this.add( 'channel', params.channel );
			this.add( 'url', params.url || '' );
			this.add( 'origin', this.url() ).link( this.url ).setter( function( to ) {
				var urlParser = document.createElement( 'a' );
				urlParser.href = to;
				// Port stripping needed by IE since it adds to host but not to event.origin.
				return urlParser.protocol + '//' + urlParser.host.replace( /:80$/, '' );
			});

			// first add with no value
			this.add( 'targetWindow', null );
			// This avoids SecurityErrors when setting a window object in x-origin iframe'd scenarios.
			this.targetWindow.set = function( to ) {
				var from = this._value;

				to = this._setter.apply( this, arguments );
				to = this.validate( to );

				if ( null === to || from === to ) {
					return this;
				}

				this._value = to;
				this._dirty = true;

				this.callbacks.fireWith( this, [ to, from ] );

				return this;
			};
			// now set it
			this.targetWindow( params.targetWindow || defaultTarget );


			// Since we want jQuery to treat the receive function as unique
			// to this instance, we give the function a new guid.
			//
			// This will prevent every Messenger's receive function from being
			// unbound when calling $.off( 'message', this.receive );
			this.receive = $.proxy( this.receive, this );
			this.receive.guid = $.guid++;

			$( window ).on( 'message', this.receive );
		},

		destroy: function() {
			$( window ).off( 'message', this.receive );
		},

		/**
		 * Receive data from the other window.
		 *
		 * @param  {jQuery.Event} event Event with embedded data.
		 */
		receive: function( event ) {
			var message;

			event = event.originalEvent;

			if ( ! this.targetWindow || ! this.targetWindow() ) {
				return;
			}

			// Check to make sure the origin is valid.
			if ( this.origin() && event.origin !== this.origin() )
				return;

			// Ensure we have a string that's JSON.parse-able
			if ( typeof event.data !== 'string' || event.data[0] !== '{' ) {
				return;
			}

			message = JSON.parse( event.data );

			// Check required message properties.
			if ( ! message || ! message.id || typeof message.data === 'undefined' )
				return;

			// Check if channel names match.
			if ( ( message.channel || this.channel() ) && this.channel() !== message.channel )
				return;

			this.trigger( message.id, message.data );
		},

		/**
		 * Send data to the other window.
		 *
		 * @param  {string} id   The event name.
		 * @param  {object} data Data.
		 */
		send: function( id, data ) {
			var message;

			data = typeof data === 'undefined' ? null : data;

			if ( ! this.url() || ! this.targetWindow() )
				return;

			message = { id: id, data: data };
			if ( this.channel() )
				message.channel = this.channel();

			this.targetWindow().postMessage( JSON.stringify( message ), this.origin() );
		}
	});

	// Add the Events mixin to api.Messenger.
	$.extend( api.Messenger.prototype, api.Events );

	/**
	 * Notification.
	 *
	 * @class
	 * @augments wp.customize.Class
	 * @since 4.6.0
	 *
	 * @param {string}  code - The error code.
	 * @param {object}  params - Params.
	 * @param {string}  params.message=null - The error message.
	 * @param {string}  [params.type=error] - The notification type.
	 * @param {boolean} [params.fromServer=false] - Whether the notification was server-sent.
	 * @param {string}  [params.setting=null] - The setting ID that the notification is related to.
	 * @param {*}       [params.data=null] - Any additional data.
	 */
	api.Notification = api.Class.extend({
		initialize: function( code, params ) {
			var _params;
			this.code = code;
			_params = _.extend(
				{
					message: null,
					type: 'error',
					fromServer: false,
					data: null,
					setting: null
				},
				params
			);
			delete _params.code;
			_.extend( this, _params );
		}
	});

	// The main API object is also a collection of all customizer settings.
	api = $.extend( new api.Values(), api );

	/**
	 * Get all customize settings.
	 *
	 * @return {object}
	 */
	api.get = function() {
		var result = {};

		this.each( function( obj, key ) {
			result[ key ] = obj.get();
		});

		return result;
	};

	/**
	 * Utility function namespace
	 */
	api.utils = {};

	/**
	 * Parse query string.
	 *
	 * @since 4.7.0
	 * @access public
	 *
	 * @param {string} queryString Query string.
	 * @returns {object} Parsed query string.
	 */
	api.utils.parseQueryString = function parseQueryString( queryString ) {
		var queryParams = {};
		_.each( queryString.split( '&' ), function( pair ) {
			var parts, key, value;
			parts = pair.split( '=', 2 );
			if ( ! parts[0] ) {
				return;
			}
			key = decodeURIComponent( parts[0].replace( /\+/g, ' ' ) );
			key = key.replace( / /g, '_' ); // What PHP does.
			if ( _.isUndefined( parts[1] ) ) {
				value = null;
			} else {
				value = decodeURIComponent( parts[1].replace( /\+/g, ' ' ) );
			}
			queryParams[ key ] = value;
		} );
		return queryParams;
	};

	// Expose the API publicly on window.wp.customize
	exports.customize = api;
})( wp, jQuery );
;
/*
 * Script run inside a Customizer preview frame.
 */
(function( exports, $ ){
	var api = wp.customize,
		debounce,
		currentHistoryState = {};

	/*
	 * Capture the state that is passed into history.replaceState() and history.pushState()
	 * and also which is returned in the popstate event so that when the changeset_uuid
	 * gets updated when transitioning to a new changeset there the current state will
	 * be supplied in the call to history.replaceState().
	 */
	( function( history ) {
		var injectUrlWithState;

		if ( ! history.replaceState ) {
			return;
		}

		/**
		 * Amend the supplied URL with the customized state.
		 *
		 * @since 4.7.0
		 * @access private
		 *
		 * @param {string} url URL.
		 * @returns {string} URL with customized state.
		 */
		injectUrlWithState = function( url ) {
			var urlParser, oldQueryParams, newQueryParams;
			urlParser = document.createElement( 'a' );
			urlParser.href = url;
			oldQueryParams = api.utils.parseQueryString( location.search.substr( 1 ) );
			newQueryParams = api.utils.parseQueryString( urlParser.search.substr( 1 ) );

			newQueryParams.customize_changeset_uuid = oldQueryParams.customize_changeset_uuid;
			if ( oldQueryParams.customize_theme ) {
				newQueryParams.customize_theme = oldQueryParams.customize_theme;
			}
			if ( oldQueryParams.customize_messenger_channel ) {
				newQueryParams.customize_messenger_channel = oldQueryParams.customize_messenger_channel;
			}
			urlParser.search = $.param( newQueryParams );
			return urlParser.href;
		};

		history.replaceState = ( function( nativeReplaceState ) {
			return function historyReplaceState( data, title, url ) {
				currentHistoryState = data;
				return nativeReplaceState.call( history, data, title, 'string' === typeof url && url.length > 0 ? injectUrlWithState( url ) : url );
			};
		} )( history.replaceState );

		history.pushState = ( function( nativePushState ) {
			return function historyPushState( data, title, url ) {
				currentHistoryState = data;
				return nativePushState.call( history, data, title, 'string' === typeof url && url.length > 0 ? injectUrlWithState( url ) : url );
			};
		} )( history.pushState );

		window.addEventListener( 'popstate', function( event ) {
			currentHistoryState = event.state;
		} );

	}( history ) );

	/**
	 * Returns a debounced version of the function.
	 *
	 * @todo Require Underscore.js for this file and retire this.
	 */
	debounce = function( fn, delay, context ) {
		var timeout;
		return function() {
			var args = arguments;

			context = context || this;

			clearTimeout( timeout );
			timeout = setTimeout( function() {
				timeout = null;
				fn.apply( context, args );
			}, delay );
		};
	};

	/**
	 * @constructor
	 * @augments wp.customize.Messenger
	 * @augments wp.customize.Class
	 * @mixes wp.customize.Events
	 */
	api.Preview = api.Messenger.extend({
		/**
		 * @param {object} params  - Parameters to configure the messenger.
		 * @param {object} options - Extend any instance parameter or method with this object.
		 */
		initialize: function( params, options ) {
			var preview = this, urlParser = document.createElement( 'a' );

			api.Messenger.prototype.initialize.call( preview, params, options );

			urlParser.href = preview.origin();
			preview.add( 'scheme', urlParser.protocol.replace( /:$/, '' ) );

			preview.body = $( document.body );
			preview.window = $( window );

			if ( api.settings.channel ) {

				// If in an iframe, then intercept the link clicks and form submissions.
				preview.body.on( 'click.preview', 'a', function( event ) {
					preview.handleLinkClick( event );
				} );
				preview.body.on( 'submit.preview', 'form', function( event ) {
					preview.handleFormSubmit( event );
				} );

				preview.window.on( 'scroll.preview', debounce( function() {
					preview.send( 'scroll', preview.window.scrollTop() );
				}, 200 ) );

				preview.bind( 'scroll', function( distance ) {
					preview.window.scrollTop( distance );
				});
			}
		},

		/**
		 * Handle link clicks in preview.
		 *
		 * @since 4.7.0
		 * @access public
		 *
		 * @param {jQuery.Event} event Event.
		 */
		handleLinkClick: function( event ) {
			var preview = this, link, isInternalJumpLink;
			link = $( event.target ).closest( 'a' );

			// No-op if the anchor is not a link.
			if ( _.isUndefined( link.attr( 'href' ) ) ) {
				return;
			}

			// Allow internal jump links and JS links to behave normally without preventing default.
			isInternalJumpLink = ( '#' === link.attr( 'href' ).substr( 0, 1 ) );
			if ( isInternalJumpLink || ! /^https?:$/.test( link.prop( 'protocol' ) ) ) {
				return;
			}

			// If the link is not previewable, prevent the browser from navigating to it.
			if ( ! api.isLinkPreviewable( link[0] ) ) {
				wp.a11y.speak( api.settings.l10n.linkUnpreviewable );
				event.preventDefault();
				return;
			}

			// Prevent initiating navigating from click and instead rely on sending url message to pane.
			event.preventDefault();

			/*
			 * Note the shift key is checked so shift+click on widgets or
			 * nav menu items can just result on focusing on the corresponding
			 * control instead of also navigating to the URL linked to.
			 */
			if ( event.shiftKey ) {
				return;
			}

			// Note: It's not relevant to send scroll because sending url message will have the same effect.
			preview.send( 'url', link.prop( 'href' ) );
		},

		/**
		 * Handle form submit.
		 *
		 * @since 4.7.0
		 * @access public
		 *
		 * @param {jQuery.Event} event Event.
		 */
		handleFormSubmit: function( event ) {
			var preview = this, urlParser, form;
			urlParser = document.createElement( 'a' );
			form = $( event.target );
			urlParser.href = form.prop( 'action' );

			// If the link is not previewable, prevent the browser from navigating to it.
			if ( 'GET' !== form.prop( 'method' ).toUpperCase() || ! api.isLinkPreviewable( urlParser ) ) {
				wp.a11y.speak( api.settings.l10n.formUnpreviewable );
				event.preventDefault();
				return;
			}

			/*
			 * If the default wasn't prevented already (in which case the form
			 * submission is already being handled by JS), and if it has a GET
			 * request method, then take the serialized form data and add it as
			 * a query string to the action URL and send this in a url message
			 * to the customizer pane so that it will be loaded. If the form's
			 * action points to a non-previewable URL, the customizer pane's
			 * previewUrl setter will reject it so that the form submission is
			 * a no-op, which is the same behavior as when clicking a link to an
			 * external site in the preview.
			 */
			if ( ! event.isDefaultPrevented() ) {
				if ( urlParser.search.length > 1 ) {
					urlParser.search += '&';
				}
				urlParser.search += form.serialize();
				preview.send( 'url', urlParser.href );
			}

			// Prevent default since navigation should be done via sending url message or via JS submit handler.
			event.preventDefault();
		}
	});

	/**
	 * Inject the changeset UUID into links in the document.
	 *
	 * @since 4.7.0
	 * @access protected
	 *
	 * @access private
	 * @returns {void}
	 */
	api.addLinkPreviewing = function addLinkPreviewing() {
		var linkSelectors = 'a[href], area';

		// Inject links into initial document.
		$( document.body ).find( linkSelectors ).each( function() {
			api.prepareLinkPreview( this );
		} );

		// Inject links for new elements added to the page.
		if ( 'undefined' !== typeof MutationObserver ) {
			api.mutationObserver = new MutationObserver( function( mutations ) {
				_.each( mutations, function( mutation ) {
					$( mutation.target ).find( linkSelectors ).each( function() {
						api.prepareLinkPreview( this );
					} );
				} );
			} );
			api.mutationObserver.observe( document.documentElement, {
				childList: true,
				subtree: true
			} );
		} else {

			// If mutation observers aren't available, fallback to just-in-time injection.
			$( document.documentElement ).on( 'click focus mouseover', linkSelectors, function() {
				api.prepareLinkPreview( this );
			} );
		}
	};

	/**
	 * Should the supplied link is previewable.
	 *
	 * @since 4.7.0
	 * @access public
	 *
	 * @param {HTMLAnchorElement|HTMLAreaElement} element Link element.
	 * @param {string} element.search Query string.
	 * @param {string} element.pathname Path.
	 * @param {string} element.host Host.
	 * @param {object} [options]
	 * @param {object} [options.allowAdminAjax=false] Allow admin-ajax.php requests.
	 * @returns {boolean} Is appropriate for changeset link.
	 */
	api.isLinkPreviewable = function isLinkPreviewable( element, options ) {
		var matchesAllowedUrl, parsedAllowedUrl, args;

		args = _.extend( {}, { allowAdminAjax: false }, options || {} );

		if ( 'javascript:' === element.protocol ) { // jshint ignore:line
			return true;
		}

		// Only web URLs can be previewed.
		if ( 'https:' !== element.protocol && 'http:' !== element.protocol ) {
			return false;
		}

		parsedAllowedUrl = document.createElement( 'a' );
		matchesAllowedUrl = ! _.isUndefined( _.find( api.settings.url.allowed, function( allowedUrl ) {
			parsedAllowedUrl.href = allowedUrl;
			return parsedAllowedUrl.protocol === element.protocol && parsedAllowedUrl.host === element.host && 0 === element.pathname.indexOf( parsedAllowedUrl.pathname.replace( /\/$/, '' ) );
		} ) );
		if ( ! matchesAllowedUrl ) {
			return false;
		}

		// Skip wp login and signup pages.
		if ( /\/wp-(login|signup)\.php$/.test( element.pathname ) ) {
			return false;
		}

		// Allow links to admin ajax as faux frontend URLs.
		if ( /\/wp-admin\/admin-ajax\.php$/.test( element.pathname ) ) {
			return args.allowAdminAjax;
		}

		// Disallow links to admin, includes, and content.
		if ( /\/wp-(admin|includes|content)(\/|$)/.test( element.pathname ) ) {
			return false;
		}

		return true;
	};

	/**
	 * Inject the customize_changeset_uuid query param into links on the frontend.
	 *
	 * @since 4.7.0
	 * @access protected
	 *
	 * @param {HTMLAnchorElement|HTMLAreaElement} element Link element.
	 * @param {string} element.search Query string.
	 * @param {string} element.host Host.
	 * @param {string} element.protocol Protocol.
	 * @returns {void}
	 */
	api.prepareLinkPreview = function prepareLinkPreview( element ) {
		var queryParams;

		// Skip links in admin bar.
		if ( $( element ).closest( '#wpadminbar' ).length ) {
			return;
		}

		// Ignore links with href="#", href="#id", or non-HTTP protocols (e.g. javascript: and mailto:).
		if ( '#' === $( element ).attr( 'href' ).substr( 0, 1 ) || ! /^https?:$/.test( element.protocol ) ) {
			return;
		}

		// Make sure links in preview use HTTPS if parent frame uses HTTPS.
		if ( api.settings.channel && 'https' === api.preview.scheme.get() && 'http:' === element.protocol && -1 !== api.settings.url.allowedHosts.indexOf( element.host ) ) {
			element.protocol = 'https:';
		}

		if ( ! api.isLinkPreviewable( element ) ) {

			// Style link as unpreviewable only if previewing in iframe; if previewing on frontend, links will be allowed to work normally.
			if ( api.settings.channel ) {
				$( element ).addClass( 'customize-unpreviewable' );
			}
			return;
		}
		$( element ).removeClass( 'customize-unpreviewable' );

		queryParams = api.utils.parseQueryString( element.search.substring( 1 ) );
		queryParams.customize_changeset_uuid = api.settings.changeset.uuid;
		if ( ! api.settings.theme.active ) {
			queryParams.customize_theme = api.settings.theme.stylesheet;
		}
		if ( api.settings.channel ) {
			queryParams.customize_messenger_channel = api.settings.channel;
		}
		element.search = $.param( queryParams );

		// Prevent links from breaking out of preview iframe.
		if ( api.settings.channel ) {
			element.target = '_self';
		}
	};

	/**
	 * Inject the changeset UUID into Ajax requests.
	 *
	 * @since 4.7.0
	 * @access protected
	 *
	 * @return {void}
	 */
	api.addRequestPreviewing = function addRequestPreviewing() {

		/**
		 * Rewrite Ajax requests to inject customizer state.
		 *
		 * @param {object} options Options.
		 * @param {string} options.type Type.
		 * @param {string} options.url URL.
		 * @param {object} originalOptions Original options.
		 * @param {XMLHttpRequest} xhr XHR.
		 * @returns {void}
		 */
		var prefilterAjax = function( options, originalOptions, xhr ) {
			var urlParser, queryParams, requestMethod, dirtyValues = {};
			urlParser = document.createElement( 'a' );
			urlParser.href = options.url;

			// Abort if the request is not for this site.
			if ( ! api.isLinkPreviewable( urlParser, { allowAdminAjax: true } ) ) {
				return;
			}
			queryParams = api.utils.parseQueryString( urlParser.search.substring( 1 ) );

			// Note that _dirty flag will be cleared with changeset updates.
			api.each( function( setting ) {
				if ( setting._dirty ) {
					dirtyValues[ setting.id ] = setting.get();
				}
			} );

			if ( ! _.isEmpty( dirtyValues ) ) {
				requestMethod = options.type.toUpperCase();

				// Override underlying request method to ensure unsaved changes to changeset can be included (force Backbone.emulateHTTP).
				if ( 'POST' !== requestMethod ) {
					xhr.setRequestHeader( 'X-HTTP-Method-Override', requestMethod );
					queryParams._method = requestMethod;
					options.type = 'POST';
				}

				// Amend the post data with the customized values.
				if ( options.data ) {
					options.data += '&';
				} else {
					options.data = '';
				}
				options.data += $.param( {
					customized: JSON.stringify( dirtyValues )
				} );
			}

			// Include customized state query params in URL.
			queryParams.customize_changeset_uuid = api.settings.changeset.uuid;
			if ( ! api.settings.theme.active ) {
				queryParams.customize_theme = api.settings.theme.stylesheet;
			}
			urlParser.search = $.param( queryParams );
			options.url = urlParser.href;
		};

		$.ajaxPrefilter( prefilterAjax );
	};

	/**
	 * Inject changeset UUID into forms, allowing preview to persist through submissions.
	 *
	 * @since 4.7.0
	 * @access protected
	 *
	 * @returns {void}
	 */
	api.addFormPreviewing = function addFormPreviewing() {

		// Inject inputs for forms in initial document.
		$( document.body ).find( 'form' ).each( function() {
			api.prepareFormPreview( this );
		} );

		// Inject inputs for new forms added to the page.
		if ( 'undefined' !== typeof MutationObserver ) {
			api.mutationObserver = new MutationObserver( function( mutations ) {
				_.each( mutations, function( mutation ) {
					$( mutation.target ).find( 'form' ).each( function() {
						api.prepareFormPreview( this );
					} );
				} );
			} );
			api.mutationObserver.observe( document.documentElement, {
				childList: true,
				subtree: true
			} );
		}
	};

	/**
	 * Inject changeset into form inputs.
	 *
	 * @since 4.7.0
	 * @access protected
	 *
	 * @param {HTMLFormElement} form Form.
	 * @returns {void}
	 */
	api.prepareFormPreview = function prepareFormPreview( form ) {
		var urlParser, stateParams = {};

		if ( ! form.action ) {
			form.action = location.href;
		}

		urlParser = document.createElement( 'a' );
		urlParser.href = form.action;

		// Make sure forms in preview use HTTPS if parent frame uses HTTPS.
		if ( api.settings.channel && 'https' === api.preview.scheme.get() && 'http:' === urlParser.protocol && -1 !== api.settings.url.allowedHosts.indexOf( urlParser.host ) ) {
			urlParser.protocol = 'https:';
			form.action = urlParser.href;
		}

		if ( 'GET' !== form.method.toUpperCase() || ! api.isLinkPreviewable( urlParser ) ) {

			// Style form as unpreviewable only if previewing in iframe; if previewing on frontend, all forms will be allowed to work normally.
			if ( api.settings.channel ) {
				$( form ).addClass( 'customize-unpreviewable' );
			}
			return;
		}
		$( form ).removeClass( 'customize-unpreviewable' );

		stateParams.customize_changeset_uuid = api.settings.changeset.uuid;
		if ( ! api.settings.theme.active ) {
			stateParams.customize_theme = api.settings.theme.stylesheet;
		}
		if ( api.settings.channel ) {
			stateParams.customize_messenger_channel = api.settings.channel;
		}

		_.each( stateParams, function( value, name ) {
			var input = $( form ).find( 'input[name="' + name + '"]' );
			if ( input.length ) {
				input.val( value );
			} else {
				$( form ).prepend( $( '<input>', {
					type: 'hidden',
					name: name,
					value: value
				} ) );
			}
		} );

		// Prevent links from breaking out of preview iframe.
		if ( api.settings.channel ) {
			form.target = '_self';
		}
	};

	/**
	 * Watch current URL and send keep-alive (heartbeat) messages to the parent.
	 *
	 * Keep the customizer pane notified that the preview is still alive
	 * and that the user hasn't navigated to a non-customized URL.
	 *
	 * @since 4.7.0
	 * @access protected
	 */
	api.keepAliveCurrentUrl = ( function() {
		var previousPathName = location.pathname,
			previousQueryString = location.search.substr( 1 ),
			previousQueryParams = null,
			stateQueryParams = [ 'customize_theme', 'customize_changeset_uuid', 'customize_messenger_channel' ];

		return function keepAliveCurrentUrl() {
			var urlParser, currentQueryParams;

			// Short-circuit with keep-alive if previous URL is identical (as is normal case).
			if ( previousQueryString === location.search.substr( 1 ) && previousPathName === location.pathname ) {
				api.preview.send( 'keep-alive' );
				return;
			}

			urlParser = document.createElement( 'a' );
			if ( null === previousQueryParams ) {
				urlParser.search = previousQueryString;
				previousQueryParams = api.utils.parseQueryString( previousQueryString );
				_.each( stateQueryParams, function( name ) {
					delete previousQueryParams[ name ];
				} );
			}

			// Determine if current URL minus customized state params and URL hash.
			urlParser.href = location.href;
			currentQueryParams = api.utils.parseQueryString( urlParser.search.substr( 1 ) );
			_.each( stateQueryParams, function( name ) {
				delete currentQueryParams[ name ];
			} );

			if ( previousPathName !== location.pathname || ! _.isEqual( previousQueryParams, currentQueryParams ) ) {
				urlParser.search = $.param( currentQueryParams );
				urlParser.hash = '';
				api.settings.url.self = urlParser.href;
				api.preview.send( 'ready', {
					currentUrl: api.settings.url.self,
					activePanels: api.settings.activePanels,
					activeSections: api.settings.activeSections,
					activeControls: api.settings.activeControls,
					settingValidities: api.settings.settingValidities
				} );
			} else {
				api.preview.send( 'keep-alive' );
			}
			previousQueryParams = currentQueryParams;
			previousQueryString = location.search.substr( 1 );
			previousPathName = location.pathname;
		};
	} )();

	api.settingPreviewHandlers = {

		/**
		 * Preview changes to custom logo.
		 *
		 * @param {number} attachmentId Attachment ID for custom logo.
		 * @returns {void}
		 */
		custom_logo: function( attachmentId ) {
			$( 'body' ).toggleClass( 'wp-custom-logo', !! attachmentId );
		},

		/**
		 * Preview changes to custom css.
		 *
		 * @param {string} value Custom CSS..
		 * @returns {void}
		 */
		custom_css: function( value ) {
			$( '#wp-custom-css' ).text( value );
		},

		/**
		 * Preview changes to any of the background settings.
		 *
		 * @returns {void}
		 */
		background: function() {
			var css = '', settings = {};

			_.each( ['color', 'image', 'preset', 'position_x', 'position_y', 'size', 'repeat', 'attachment'], function( prop ) {
				settings[ prop ] = api( 'background_' + prop );
			} );

			/*
			 * The body will support custom backgrounds if either the color or image are set.
			 *
			 * See get_body_class() in /wp-includes/post-template.php
			 */
			$( document.body ).toggleClass( 'custom-background', !! ( settings.color() || settings.image() ) );

			if ( settings.color() ) {
				css += 'background-color: ' + settings.color() + ';';
			}

			if ( settings.image() ) {
				css += 'background-image: url("' + settings.image() + '");';
				css += 'background-size: ' + settings.size() + ';';
				css += 'background-position: ' + settings.position_x() + ' ' + settings.position_y() + ';';
				css += 'background-repeat: ' + settings.repeat() + ';';
				css += 'background-attachment: ' + settings.attachment() + ';';
			}

			$( '#custom-background-css' ).text( 'body.custom-background { ' + css + ' }' );
		}
	};

	$( function() {
		var bg, setValue;

		api.settings = window._wpCustomizeSettings;
		if ( ! api.settings ) {
			return;
		}

		api.preview = new api.Preview({
			url: window.location.href,
			channel: api.settings.channel
		});

		api.addLinkPreviewing();
		api.addRequestPreviewing();
		api.addFormPreviewing();

		/**
		 * Create/update a setting value.
		 *
		 * @param {string}  id            - Setting ID.
		 * @param {*}       value         - Setting value.
		 * @param {boolean} [createDirty] - Whether to create a setting as dirty. Defaults to false.
		 */
		setValue = function( id, value, createDirty ) {
			var setting = api( id );
			if ( setting ) {
				setting.set( value );
			} else {
				createDirty = createDirty || false;
				setting = api.create( id, value, {
					id: id
				} );

				// Mark dynamically-created settings as dirty so they will get posted.
				if ( createDirty ) {
					setting._dirty = true;
				}
			}
		};

		api.preview.bind( 'settings', function( values ) {
			$.each( values, setValue );
		});

		api.preview.trigger( 'settings', api.settings.values );

		$.each( api.settings._dirty, function( i, id ) {
			var setting = api( id );
			if ( setting ) {
				setting._dirty = true;
			}
		} );

		api.preview.bind( 'setting', function( args ) {
			var createDirty = true;
			setValue.apply( null, args.concat( createDirty ) );
		});

		api.preview.bind( 'sync', function( events ) {

			/*
			 * Delete any settings that already exist locally which haven't been
			 * modified in the controls while the preview was loading. This prevents
			 * situations where the JS value being synced from the pane may differ
			 * from the PHP-sanitized JS value in the preview which causes the
			 * non-sanitized JS value to clobber the PHP-sanitized value. This
			 * is particularly important for selective refresh partials that
			 * have a fallback refresh behavior since infinite refreshing would
			 * result.
			 */
			if ( events.settings && events['settings-modified-while-loading'] ) {
				_.each( _.keys( events.settings ), function( syncedSettingId ) {
					if ( api.has( syncedSettingId ) && ! events['settings-modified-while-loading'][ syncedSettingId ] ) {
						delete events.settings[ syncedSettingId ];
					}
				} );
			}

			$.each( events, function( event, args ) {
				api.preview.trigger( event, args );
			});
			api.preview.send( 'synced' );
		});

		api.preview.bind( 'active', function() {
			api.preview.send( 'nonce', api.settings.nonce );

			api.preview.send( 'documentTitle', document.title );

			// Send scroll in case of loading via non-refresh.
			api.preview.send( 'scroll', $( window ).scrollTop() );
		});

		api.preview.bind( 'saved', function( response ) {

			if ( response.next_changeset_uuid ) {
				api.settings.changeset.uuid = response.next_changeset_uuid;

				// Update UUIDs in links and forms.
				$( document.body ).find( 'a[href], area' ).each( function() {
					api.prepareLinkPreview( this );
				} );
				$( document.body ).find( 'form' ).each( function() {
					api.prepareFormPreview( this );
				} );

				/*
				 * Replace the UUID in the URL. Note that the wrapped history.replaceState()
				 * will handle injecting the current api.settings.changeset.uuid into the URL,
				 * so this is merely to trigger that logic.
				 */
				if ( history.replaceState ) {
					history.replaceState( currentHistoryState, '', location.href );
				}
			}

			api.trigger( 'saved', response );
		} );

		/*
		 * Clear dirty flag for settings when saved to changeset so that they
		 * won't be needlessly included in selective refresh or ajax requests.
		 */
		api.preview.bind( 'changeset-saved', function( data ) {
			_.each( data.saved_changeset_values, function( value, settingId ) {
				var setting = api( settingId );
				if ( setting && _.isEqual( setting.get(), value ) ) {
					setting._dirty = false;
				}
			} );
		} );

		api.preview.bind( 'nonce-refresh', function( nonce ) {
			$.extend( api.settings.nonce, nonce );
		} );

		/*
		 * Send a message to the parent customize frame with a list of which
		 * containers and controls are active.
		 */
		api.preview.send( 'ready', {
			currentUrl: api.settings.url.self,
			activePanels: api.settings.activePanels,
			activeSections: api.settings.activeSections,
			activeControls: api.settings.activeControls,
			settingValidities: api.settings.settingValidities
		} );

		// Send ready when URL changes via JS.
		setInterval( api.keepAliveCurrentUrl, api.settings.timeouts.keepAliveSend );

		// Display a loading indicator when preview is reloading, and remove on failure.
		api.preview.bind( 'loading-initiated', function () {
			$( 'body' ).addClass( 'wp-customizer-unloading' );
		});
		api.preview.bind( 'loading-failed', function () {
			$( 'body' ).removeClass( 'wp-customizer-unloading' );
		});

		/* Custom Backgrounds */
		bg = $.map( ['color', 'image', 'preset', 'position_x', 'position_y', 'size', 'repeat', 'attachment'], function( prop ) {
			return 'background_' + prop;
		} );

		api.when.apply( api, bg ).done( function() {
			$.each( arguments, function() {
				this.bind( api.settingPreviewHandlers.background );
			});
		});

		/**
		 * Custom Logo
		 *
		 * Toggle the wp-custom-logo body class when a logo is added or removed.
		 *
		 * @since 4.5.0
		 */
		api( 'custom_logo', function ( setting ) {
			api.settingPreviewHandlers.custom_logo.call( setting, setting.get() );
			setting.bind( api.settingPreviewHandlers.custom_logo );
		} );

		api( 'custom_css[' + api.settings.theme.stylesheet + ']', function( setting ) {
			setting.bind( api.settingPreviewHandlers.custom_css );
		} );

		api.trigger( 'preview-ready' );
	});

})( wp, jQuery );
;
if( typeof LS_Meta === 'object' && LS_Meta.fixGSAP ){
var LS_oldGS=window.GreenSockGlobals,LS_oldGSQueue=window._gsQueue,LS_oldGSDefine=window._gsDefine;window._gsDefine=null,delete window._gsDefine;var LS_GSAP=window.GreenSockGlobals={};
}

/*
 * VERSION: 1.19.0
 * DATE: 2016-07-14
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="1.19.0",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,c){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var d,e,f,i,j,k,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._totalTime,q=this._cycle,r=this._duration,s=this._rawPrevTime;if(a>=n-1e-7?(this._totalTime=n,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=r,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===r&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>s||0>=a&&a>=-1e-7||s===g&&"isPause"!==this.data)&&s!==a&&(c=!0,s>g&&(e="onReverseComplete")),this._rawPrevTime=m=!b||a||s===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==p||0===r&&s>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===r&&(this._initted||!this.vars.lazy||c)&&(s>=0&&(c=!0),this._rawPrevTime=m=!b||a||s===a?a:g)),this._initted||(c=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(i=r+this._repeatDelay,this._cycle=this._totalTime/i>>0,0!==this._cycle&&this._cycle===this._totalTime/i&&a>=p&&this._cycle--,this._time=this._totalTime-this._cycle*i,this._yoyo&&0!==(1&this._cycle)&&(this._time=r-this._time),this._time>r?this._time=r:this._time<0&&(this._time=0)),this._easeType?(j=this._time/r,k=this._easeType,l=this._easePower,(1===k||3===k&&j>=.5)&&(j=1-j),3===k&&(j*=2),1===l?j*=j:2===l?j*=j*j:3===l?j*=j*j*j:4===l&&(j*=j*j*j*j),1===k?this.ratio=1-j:2===k?this.ratio=j:this._time/r<.5?this.ratio=j/2:this.ratio=1-j/2):this.ratio=this._ease.getRatio(this._time/r)),o===this._time&&!c&&q===this._cycle)return void(p!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=o,this._totalTime=p,this._rawPrevTime=s,this._cycle=q,h.lazyTweens.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/r):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&a>=0&&(this._active=!0),0===p&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===r)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,b,c),b||(this._totalTime!==p||e)&&this._callback("onUpdate")),this._cycle!==q&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===r&&this._rawPrevTime===g&&m!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&(e(p,a,q),null!=p.duration&&(b=p.duration,delete p.duration)),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e.call(b[c],c):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.19.0",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g=new d(a),h=g._timeline;for(null==b&&(b=!0),h._remove(g,!0),g._startTime=0,g._rawPrevTime=g._time=g._totalTime=h._time,e=h._first;e;)f=e._next,b&&e instanceof c&&e.target===e.vars.onComplete||g.add(e,e._startTime-e._delay),e=f;return h.add(g,0),g},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>d._startTime+d._totalDuration/d._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._startTime,q=this._timeScale,r=this._paused;if(a>=n-1e-7)this._totalTime=this._time=n,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=n+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==o||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=o)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==o&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==o&&a>0&&(this._active=!0),0===o&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=o)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||n>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused?this.add(e,e._startTime-e._delay):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="1.19.0",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&f._callback("onStart")},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,q=this._time,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(a>=o-1e-7)this._locked||(this._totalTime=o,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=p,a=p+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==q||0===p&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=p||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===p&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=p+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,a=p+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=q)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*p,this._cycle<w?x=!x:this._totalTime+=p,this._time=q,this._rawPrevTime=0===p?u-1e-4:u,this._cycle=w,this._locked=!0,q=x?0:p,this.render(q,b,0===p),b||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),q!==this._time)return;if(y&&(q=x?p+1e-4:-1e-4,this.render(q,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==q&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=q)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=q&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[-1>h?0:1][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,
segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.7",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.19.0",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N=document,O=function(a){return N.createElementNS?N.createElementNS("http://www.w3.org/1999/xhtml",a):N.createElement(a)},P=O("div"),Q=O("img"),R=g._internals={_specialProps:i},S=navigator.userAgent,T=function(){var a=S.indexOf("Android"),b=O("a");return m=-1!==S.indexOf("Safari")&&-1===S.indexOf("Chrome")&&(-1===a||Number(S.substr(a+8,1))>3),o=m&&Number(S.substr(S.indexOf("Version/")+8,1))<6,n=-1!==S.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(S)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(S))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),U=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},V=function(a){window.console&&console.log(a)},W="",X="",Y=function(a,b){b=b||P;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(X=3===d?"ms":c[d],W="-"+X.toLowerCase()+"-",X+a):null},Z=N.defaultView?N.defaultView.getComputedStyle:function(){},$=g.getStyle=function(a,b,c,d,e){var f;return T||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||Z(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):U(a)},_=R.convertToPixels=function(a,c,d,e,f){if("px"===e||!e)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=P.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+$(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||N.body,i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(P),h=parseFloat(P[k?"offsetWidth":"offsetHeight"]),l.removeChild(P),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=_(a,c,d,e,!0))}return o&&(h/=100),n?-h:h},aa=R.calculateOffset=function(a,b,c){if("absolute"!==$(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=$(a,"margin"+d,c);return a["offset"+d]-(_(a,b,parseFloat(e),e.replace(w,""))||0)},ba=function(a,b){var c,d,e,f={};if(b=b||Z(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Ca===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ba===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return T||(f.opacity=U(a)),d=Pa(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Ea&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},ca=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:aa(a,g),void 0!==j[g]&&(h=new ra(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},da={width:["Left","Right"],height:["Top","Bottom"]},ea=["marginLeft","marginRight","marginTop","marginBottom"],fa=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||Z(a))[b]||0;if(a.getBBox&&Ma(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=da[b],f=e.length;for(c=c||Z(a,null);--f>-1;)d-=parseFloat($(a,"padding"+e[f],c,!0))||0,d-=parseFloat($(a,"border"+e[f]+"Width",c,!0))||0;return d},ga=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ga(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ha=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ja=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},ka={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},la=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},ma=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),ka[a])c=ka[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=la(g+1/3,d,e),c[1]=la(g,d,e),c[2]=la(g-1/3,d,e);else c=a.match(s)||ka.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=ka.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},na=function(a,b){var c,d,e,f=a.match(oa)||[],g=0,h=f.length?"":a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=ma(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},oa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in ka)oa+="|"+j+"\\b";oa=new RegExp(oa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+a[1];oa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=na(a[0],b),a[1]=na(a[1],b)),oa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var pa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(oa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(oa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},qa=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},ra=(R._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),sa=(R._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new ra(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new ra(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},R.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof sa||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ta=function(a,b,c,d,e,f){var g=new sa(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},ua=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new sa(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&oa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" "),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,oa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ha(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&oa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&T,p=ma(p,C),u=ma(u,C),y=p.length+u.length>6,y&&!T&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(T||(y=!1),C?h.appendXtra(y?"hsla(":"hsl(",p[0],ha(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ha(u[1],p[1]),"%,",!1).appendXtra("",p[2],ha(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(y?"rgba(":"rgb(",p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),oa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ha(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},va=9;for(j=sa.prototype,j.l=j.pr=0;--va>0;)j["xn"+va]=0,j["xs"+va]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new sa(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var wa=function(a,b){b=b||{},this.p=b.prefix?Y(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||pa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},xa=R._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new wa(f[d],b)},ya=R._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";xa(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(V("Error: "+b+" js file not loaded."),f)}})}};j=wa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return ua(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format($(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){xa(a,{parser:function(a,d,e,f,g,h,i){var j=new sa(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=m||n;var za,Aa="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ba=Y("transform"),Ca=W+"transform",Da=Y("transformOrigin"),Ea=null!==Y("perspective"),Fa=R.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Ea?g.defaultForce3D||"auto":!1},Ga=window.SVGElement,Ha=function(a,b,c){var d,e=N.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ia=N.documentElement,Ja=function(){var a,b,c,d=p||/Android/i.test(S)&&!window.chrome;return N.createElementNS&&!d&&(a=Ha("svg",Ia),b=Ha("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Da]="50% 50%",b.style[Ba]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Ea),Ia.removeChild(a)),d}(),Ka=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Oa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),b=ga(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Na&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},La=function(a){try{return a.getBBox()}catch(a){}},Ma=function(a){return!!(Ga&&a.getBBox&&a.getCTM&&La(a)&&(!a.parentNode||a.parentNode.getBBox&&a.parentNode.getCTM))},Na=[1,0,0,1,0,0],Oa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Fa,j=1e5,k=a.style;if(Ba?d=$(a,Ca,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,c&&Ba&&((h="none"===Z(a).display)||!a.parentNode)&&(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ia.appendChild(a)),d=$(a,Ca,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Ta(k,"display"),g&&Ia.removeChild(a)),(i.svg||a.getBBox&&Ma(a))&&(c&&-1!==(k[Ba]+"").indexOf("matrix")&&(d=k[Ba],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Na;for(e=(d||"").match(s)||[],va=e.length;--va>-1;)f=Number(e[va]),e[va]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Pa=R.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Fa:new Fa,n=m.scaleX<0,o=2e-5,p=1e5,q=Ea?parseFloat($(a,Da,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getBBox||!Ma(a)),m.svg&&(Ka(a,$(a,Da,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),za=g.useSVGTransformAttr||Ja),f=Oa(a),f!==Na){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),x=x*v+B*w,t=y*v+C*w,C=y*-w+C*v,D=z*-w+D*v,y=t),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),m.scaleX=(Math.sqrt(x*x+y*y)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+G*G)*p+.5|0)/p,m.scaleZ=(Math.sqrt(D*D+H*H)*p+.5|0)/p,m.rotationX||m.rotationY?m.skewX=0:(m.skewX=B||C?Math.atan2(B,C)*L+m.rotation:m.skewX||0,Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180))),m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Ea||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,Math.abs(l)>90&&Math.abs(l)<270&&(n?(i*=-1,l+=0>=k?180:-180,k+=0>=k?180:-180):(j*=-1,l+=0>=l?180:-180)),m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Ea&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(za&&a.style[Ba]?b.delayedCall(.001,function(){Ta(a.style,Ba)}):!za&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Qa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),va=0;4>va;va++)z=ea[va],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):_(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>va?-d.ieOffsetX:-d.ieOffsetY:2>va?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===va||2===va?1:B)))+"px"}}},Ra=R.set3DTransformRatio=R.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D;if(((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||za&&L||!Ea)return void(B||z.skewX||L?(B*=K,x=z.skewX*K,y=1e5,b=Math.cos(B)*E,e=Math.sin(B)*E,c=Math.sin(B-x)*-F,f=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(s=Math.tan(x-z.skewY*K),s=Math.sqrt(1+s*s),c*=s,f*=s,z.skewY&&(s=Math.tan(z.skewY*K),s=Math.sqrt(1+s*s),b*=s,e*=s)),L&&(H+=z.xOrigin-(z.xOrigin*b+z.yOrigin*c)+z.xOffset,I+=z.yOrigin-(z.xOrigin*e+z.yOrigin*f)+z.yOffset,za&&(z.xPercent||z.yPercent)&&(p=this.t.getBBox(),H+=.01*z.xPercent*p.width,I+=.01*z.yPercent*p.height),p=1e-6,p>H&&H>-p&&(H=0),p>I&&I>-p&&(I=0)),u=(b*y|0)/y+","+(e*y|0)/y+","+(c*y|0)/y+","+(f*y|0)/y+","+H+","+I+")",L&&za?this.t.setAttribute("transform","matrix("+u):A[Ba]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ba]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(p=1e-4,p>E&&E>-p&&(E=G=2e-5),p>F&&F>-p&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||z.skewX)B*=K,q=b=Math.cos(B),r=e=Math.sin(B),z.skewX&&(B-=z.skewX*K,q=Math.cos(B),r=Math.sin(B),"simple"===z.skewType&&(s=Math.tan((z.skewX-z.skewY)*K),s=Math.sqrt(1+s*s),q*=s,r*=s,z.skewY&&(s=Math.tan(z.skewY*K),s=Math.sqrt(1+s*s),b*=s,e*=s))),c=-r,f=q;else{if(!(D||C||1!==G||M||L))return void(A[Ba]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));b=f=1,c=e=0}j=1,d=g=h=i=k=l=0,m=M?-1/M:0,o=z.zOrigin,p=1e-6,v=",",w="0",B=D*K,B&&(q=Math.cos(B),r=Math.sin(B),h=-r,k=m*-r,d=b*r,g=e*r,j=q,m*=q,b*=q,e*=q),B=C*K,B&&(q=Math.cos(B),r=Math.sin(B),s=c*q+d*r,t=f*q+g*r,i=j*r,l=m*r,d=c*-r+d*q,g=f*-r+g*q,j*=q,m*=q,c=s,f=t),1!==G&&(d*=G,g*=G,j*=G,m*=G),1!==F&&(c*=F,f*=F,i*=F,l*=F),1!==E&&(b*=E,e*=E,h*=E,k*=E),(o||L)&&(o&&(H+=d*-o,I+=g*-o,J+=j*-o+o),L&&(H+=z.xOrigin-(z.xOrigin*b+z.yOrigin*c)+z.xOffset,I+=z.yOrigin-(z.xOrigin*e+z.yOrigin*f)+z.yOffset),p>H&&H>-p&&(H=w),p>I&&I>-p&&(I=w),p>J&&J>-p&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(p>b&&b>-p?w:b)+v+(p>e&&e>-p?w:e)+v+(p>h&&h>-p?w:h),u+=v+(p>k&&k>-p?w:k)+v+(p>c&&c>-p?w:c)+v+(p>f&&f>-p?w:f),C||D||1!==G?(u+=v+(p>i&&i>-p?w:i)+v+(p>l&&l>-p?w:l)+v+(p>d&&d>-p?w:d),u+=v+(p>g&&g>-p?w:g)+v+(p>j&&j>-p?w:j)+v+(p>m&&m>-p?w:m)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ba]=u};j=Fa.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,xa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j;"function"==typeof i[c]&&(j=i[c],i[c]=b);var k,l,m,n,o,p,s,t,u,v=a._gsTransform,w=a.style,x=1e-6,y=Aa.length,z=i,A={},B="transformOrigin",C=Pa(a,e,!0,z.parseTransform),D=z.transform&&("function"==typeof z.transform?z.transform(r,q):z.transform);if(d._transform=C,D&&"string"==typeof D&&Ba)l=P.style,l[Ba]=D,l.display="block",l.position="absolute",N.body.appendChild(P),k=Pa(P,null,!1),C.svg&&(p=C.xOrigin,s=C.yOrigin,k.x-=C.xOffset,k.y-=C.yOffset,(z.transformOrigin||z.svgOrigin)&&(D={},Ka(a,ga(z.transformOrigin),D,z.svgOrigin,z.smoothOrigin,!0),p=D.xOrigin,s=D.yOrigin,k.x-=D.xOffset-C.xOffset,k.y-=D.yOffset-C.yOffset),(p||s)&&(t=Oa(P,!0),k.x-=p-(p*t[0]+s*t[2]),k.y-=s-(p*t[1]+s*t[3]))),N.body.removeChild(P),k.perspective||(k.perspective=C.perspective),null!=z.xPercent&&(k.xPercent=ia(z.xPercent,C.xPercent)),null!=z.yPercent&&(k.yPercent=ia(z.yPercent,C.yPercent));else if("object"==typeof z){if(k={scaleX:ia(null!=z.scaleX?z.scaleX:z.scale,C.scaleX),scaleY:ia(null!=z.scaleY?z.scaleY:z.scale,C.scaleY),scaleZ:ia(z.scaleZ,C.scaleZ),x:ia(z.x,C.x),y:ia(z.y,C.y),z:ia(z.z,C.z),xPercent:ia(z.xPercent,C.xPercent),yPercent:ia(z.yPercent,C.yPercent),perspective:ia(z.transformPerspective,C.perspective)},o=z.directionalRotation,null!=o)if("object"==typeof o)for(l in o)z[l]=o[l];else z.rotation=o;"string"==typeof z.x&&-1!==z.x.indexOf("%")&&(k.x=0,k.xPercent=ia(z.x,C.xPercent)),"string"==typeof z.y&&-1!==z.y.indexOf("%")&&(k.y=0,k.yPercent=ia(z.y,C.yPercent)),k.rotation=ja("rotation"in z?z.rotation:"shortRotation"in z?z.shortRotation+"_short":"rotationZ"in z?z.rotationZ:C.rotation-C.skewY,C.rotation-C.skewY,"rotation",A),Ea&&(k.rotationX=ja("rotationX"in z?z.rotationX:"shortRotationX"in z?z.shortRotationX+"_short":C.rotationX||0,C.rotationX,"rotationX",A),k.rotationY=ja("rotationY"in z?z.rotationY:"shortRotationY"in z?z.shortRotationY+"_short":C.rotationY||0,C.rotationY,"rotationY",A)),k.skewX=ja(z.skewX,C.skewX-C.skewY),(k.skewY=ja(z.skewY,C.skewY))&&(k.skewX+=k.skewY,k.rotation+=k.skewY)}for(Ea&&null!=z.force3D&&(C.force3D=z.force3D,n=!0),C.skewType=z.skewType||C.skewType||g.defaultSkewType,m=C.force3D||C.z||C.rotationX||C.rotationY||k.z||k.rotationX||k.rotationY||k.perspective,m||null==z.scale||(k.scaleZ=1);--y>-1;)u=Aa[y],D=k[u]-C[u],(D>x||-x>D||null!=z[u]||null!=M[u])&&(n=!0,
f=new sa(C,u,C[u],D,f),u in A&&(f.e=A[u]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return D=z.transformOrigin,C.svg&&(D||z.svgOrigin)&&(p=C.xOffset,s=C.yOffset,Ka(a,ga(D),k,z.svgOrigin,z.smoothOrigin),f=ta(C,"xOrigin",(v?C:k).xOrigin,k.xOrigin,f,B),f=ta(C,"yOrigin",(v?C:k).yOrigin,k.yOrigin,f,B),(p!==C.xOffset||s!==C.yOffset)&&(f=ta(C,"xOffset",v?p:C.xOffset,C.xOffset,f,B),f=ta(C,"yOffset",v?s:C.yOffset,C.yOffset,f,B)),D=za?null:"0px 0px"),(D||Ea&&m&&C.zOrigin)&&(Ba?(n=!0,u=Da,D=(D||$(a,u,e,!1,"50% 50%"))+"",f=new sa(w,u,0,0,f,-1,B),f.b=w[u],f.plugin=h,Ea?(l=C.zOrigin,D=D.split(" "),C.zOrigin=(D.length>2&&(0===l||"0px"!==D[2])?parseFloat(D[2]):l)||0,f.xs0=f.e=D[0]+" "+(D[1]||"50%")+" 0px",f=new sa(C,"zOrigin",0,0,f,-1,f.n),f.b=l,f.xs0=f.e=C.zOrigin):f.xs0=f.e=D):ga(D+"",C)),n&&(d._transformType=C.svg&&za||!m&&3!==this._transformType?2:3),j&&(i[c]=j),f},prefix:!0}),xa("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),xa("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Y(y[j])),m=l=$(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=_(a,"borderLeft",o,t),w=_(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=_(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=ua(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:pa("0px 0px 0px 0px",!1,!0)}),xa("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return ua(a.style,c,this.format($(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:pa("0px 0px",!1,!0)}),xa("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||Z(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=$(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),Q.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-Q.width:a.offsetHeight-Q.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ga}),xa("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ga(-1===a.indexOf(" ")?a+" "+a:a)}}),xa("perspective",{defaultValue:"0px",prefix:!0}),xa("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),xa("transformStyle",{prefix:!0}),xa("backfaceVisibility",{prefix:!0}),xa("userSelect",{prefix:!0}),xa("margin",{parser:qa("marginTop,marginRight,marginBottom,marginLeft")}),xa("padding",{parser:qa("paddingTop,paddingRight,paddingBottom,paddingLeft")}),xa("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format($(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),xa("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),xa("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),xa("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=$(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/_(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+$(a,"borderTopStyle",e,!1,"solid")+" "+$(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(oa)||["#000"])[0]}}),xa("borderWidth",{parser:qa("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),xa("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new sa(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Sa=function(a){var b,c=this.t,d=c.filter||$(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!$(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};xa("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat($(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===$(a,"visibility",e)&&0!==b&&(h=0),T?f=new sa(i,"opacity",h,b-h,f):(f=new sa(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Sa),j&&(f=new sa(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Ta=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Ua=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Ta(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};xa("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new sa(a,d,0,0,g,2),g.setRatio=Ua,g.pr=-11,c=!0,g.b=o,k=ba(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=ca(a,k,ba(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Va=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Da:i[c].p),Ta(g,c);e&&(Ta(g,Ba),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(xa("clearProps",{parser:function(a,b,d,e,f){return f=new sa(a,d,0,0,f,2),f.setRatio=Va,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),va=j.length;va--;)ya(j[va]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=Z(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=$(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ba(a,e),A.cssText=t+";"+b,n=ca(a,n,ba(a)).difs,!T&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ba?m&&(l=!0,""===A.zIndex&&(w=$(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new sa(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ba?Ra:Qa,x.data=this._transform||Pa(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b)n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g],h?c=h.parse(a,n,g,this,c,f,b):(m=$(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=ma(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=ua(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=ua(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=fa(a,g,e),o="px"):"left"===g||"top"===g?(j=aa(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&""!==p&&(l||0===l)&&j&&(j=_(a,g,j,o),"%"===p?(j/=_(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=_(a,g,1,p):"px"!==p&&(l=_(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new sa(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):V("invalid "+g+" tween value: "+b[g]):(c=new sa(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))),f&&c&&!c.plugin&&(c.plugin=f);return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Pa(this._target,e,!0),this._transformType=this._transform.svg&&za||!a&&3!==this._transformType?2:3};var Wa=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new sa(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Wa,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Xa=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Xa(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ba(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Xa(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Xa(a,k,m),i.render(c,!0,!0),Xa(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=ca(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){for(;a;)a.f||a.blob||(a.m=Math.round),a=a._next},c=a.prototype;c._onInitAllProps=function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g>-1;)h[f[g]]=Math.round;for(g=f.length;--g>-1;)for(a=f[g],c=e._firstPT;c;)d=c._next,c.pg?c.t._mod(h):c.n===a&&(2===c.f&&c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d&&(d._prev=c._prev),c._prev?c._prev._next=d:e._firstPT===c&&(e._firstPT=d),c._next=c._prev=null,e._propLookup[a]=i)),c=d;return!1},c._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.0",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.0",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},q.config=b.config=function(a){return new b(a)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!d.TweenLite){var e,f,g,h,i,j=function(a){var b,c=a.split("."),e=d;for(b=0;b<c.length;b++)e[c[b]]=e=e[c[b]]||{};return e},k=j("com.greensock"),l=1e-10,m=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},n=function(){},o=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),p={},q=function(e,f,g,h){this.sc=p[e]?p[e].sc:[],p[e]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(k){for(var l,m,n,o,r,s=f.length,t=s;--s>-1;)(l=p[f[s]]||new q(f[s],[])).gsClass?(i[s]=l.gsClass,t--):k&&l.sc.push(this);if(0===t&&g){if(m=("com.greensock."+e).split("."),n=m.pop(),o=j(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(d[n]=c[n]=o,r="undefined"!=typeof module&&module.exports,!r&&"function"==typeof define&&define.amd)define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+e.split(".").pop(),[],function(){return o});else if(r)if(e===b){module.exports=c[b]=o;for(s in c)o[s]=c[s]}else c[b]&&(c[b][n]=o);for(s=0;s<this.sc.length;s++)this.sc[s].check()}},this.check(!0)},r=a._gsDefine=function(a,b,c,d){return new q(a,b,c,d)},s=k._class=function(a,b,c){return b=b||function(){},r(a,[],function(){return b},c),b};r.globals=d;var t=[0,0,1,1],u=s("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?t.concat(b):t},!0),v=u.map={},w=u.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,l=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?s("easing."+f,null,!0):k.easing[f]||{},g=l.length;--g>-1;)h=l[g],v[f+"."+h]=v[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(g=u.prototype,g._calcEnd=!1,g.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},e=["Linear","Quad","Cubic","Quart","Quint,Strong"],f=e.length;--f>-1;)g=e[f]+",Power"+f,w(new u(null,null,1,f),g,"easeOut",!0),w(new u(null,null,2,f),g,"easeIn"+(0===f?",easeNone":"")),w(new u(null,null,3,f),g,"easeInOut");v.linear=k.easing.Linear.easeIn,v.swing=k.easing.Quad.easeInOut;var x=s("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});g=x.prototype,g.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,j=this._listeners[a],k=0;for(this!==h||i||h.wake(),null==j&&(this._listeners[a]=j=[]),g=j.length;--g>-1;)f=j[g],f.c===b&&f.s===c?j.splice(g,1):0===k&&f.pr<e&&(k=g+1);j.splice(k,0,{c:b,s:c,up:d,pr:e})},g.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},g.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var y=a.requestAnimationFrame,z=a.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},B=A();for(e=["ms","moz","webkit","o"],f=e.length;--f>-1&&!y;)y=a[e[f]+"RequestAnimationFrame"],z=a[e[f]+"CancelAnimationFrame"]||a[e[f]+"CancelRequestAnimationFrame"];s("Ticker",function(a,b){var c,d,e,f,g,j=this,k=A(),m=b!==!1&&y?"auto":!1,o=500,p=33,q="tick",r=function(a){var b,h,i=A()-B;i>o&&(k+=i-p),B+=i,j.time=(B-k)/1e3,b=j.time-g,(!c||b>0||a===!0)&&(j.frame++,g+=b+(b>=f?.004:f-b),h=!0),a!==!0&&(e=d(r)),h&&j.dispatchEvent(q)};x.call(j),j.time=j.frame=0,j.tick=function(){r(!0)},j.lagSmoothing=function(a,b){o=a||1/l,p=Math.min(b,o,0)},j.sleep=function(){null!=e&&(m&&z?z(e):clearTimeout(e),d=n,e=null,j===h&&(i=!1))},j.wake=function(a){null!==e?j.sleep():a?k+=-B+(B=A()):j.frame>10&&(B=A()-o+5),d=0===c?n:m&&y?y:function(a){return setTimeout(a,1e3*(g-j.time)+1|0)},j===h&&(i=!0),r(2)},j.fps=function(a){return arguments.length?(c=a,f=1/(c||60),g=this.time+f,void j.wake()):c},j.useRAF=function(a){return arguments.length?(j.sleep(),m=a,void j.fps(c)):m},j.fps(a),setTimeout(function(){"auto"===m&&j.frame<5&&"hidden"!==document.visibilityState&&j.useRAF(!1)},1500)}),g=k.Ticker.prototype=new k.events.EventDispatcher,g.constructor=k.Ticker;var C=s("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,V){i||h.wake();var c=this.vars.useFrames?U:V;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});h=C.ticker=new k.Ticker,g=C.prototype,g._dirty=g._gc=g._initted=g._paused=!1,g._totalTime=g._time=0,g._rawPrevTime=-1,g._next=g._last=g._onUpdate=g._timeline=g.timeline=null,g._paused=!1;var D=function(){i&&A()-B>2e3&&h.wake(),setTimeout(D,2e3)};D(),g.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},g.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},g.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},g.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},g.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},g.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},g.render=function(a,b,c){},g.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},g.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime())>=c&&a<c+this.totalDuration()/this._timeScale},g._enabled=function(a,b){return i||h.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},g._kill=function(a,b){return this._enabled(!1,!1)},g.kill=function(a,b){return this._kill(a,b),this},g._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},g._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},g._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},g.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=o(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},g.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},g.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},g.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},g.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},g.totalTime=function(a,b,c){if(i||h.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(I.length&&X(),this.render(a,b,!1),I.length&&X())}return this},g.progress=g.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},g.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},g.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},g.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||l,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},g.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},g.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(i||a||h.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var E=s("core.SimpleTimeline",function(a){C.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});g=E.prototype=new C,g.constructor=E,g.kill()._gc=!1,g._first=g._last=g._recent=null,g._sortChildren=!1,g.add=g.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},g._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},g.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},g.rawTime=function(){return i||h.wake(),this._totalTime};var F=s("TweenLite",function(b,c,d){if(C.call(this,c,d),this.render=F.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:F.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?T[F.defaultOverwrite]:"number"==typeof i?i>>0:T[i],(h||b instanceof Array||b.push&&o(b))&&"number"!=typeof b[0])for(this._targets=g=m(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(m(f))):(this._siblings[e]=Y(f,this,!1),1===i&&this._siblings[e].length>1&&$(f,this,null,1,this._siblings[e])):(f=g[e--]=F.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=Y(b,this,!1),1===i&&this._siblings.length>1&&$(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-l,this.render(Math.min(0,-this._delay)))},!0),G=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType);
},H=function(a,b){var c,d={};for(c in a)S[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!P[c]||P[c]&&P[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};g=F.prototype=new C,g.constructor=F,g.kill()._gc=!1,g.ratio=0,g._firstPT=g._targets=g._overwrittenProps=g._startAt=null,g._notifyPluginsOfEnabled=g._lazy=!1,F.version="1.19.0",F.defaultEase=g._ease=new u(null,null,1,1),F.defaultOverwrite="auto",F.ticker=h,F.autoSleep=120,F.lagSmoothing=function(a,b){h.lagSmoothing(a,b)},F.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(F.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)};var I=[],J={},K=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},M=function(a,b,c,d){var e,f,g,h,i,j,k,l=[a,b],m=0,n="",o=0;for(l.start=a,c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(K)||[],f=b.match(K)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=L,l},N=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k,l="get"===c?a[b]:c,m=typeof a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:l,f:"function"===m,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-l||0};return"number"!==m&&("function"===m&&"get"===c&&(k=b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),o.s=l=g?a[k](g):a[k]()),"string"==typeof l&&(g||isNaN(l))?(o.fp=g,j=M(l,d,h||F.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):n||(o.s=parseFloat(l),o.c=parseFloat(d)-o.s||0)),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},O=F._internals={isArray:o,isSelector:G,lazyTweens:I,blobDif:M},P=F._plugins={},Q=O.tweenLookup={},R=0,S=O.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},T={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},U=C._rootFramesTimeline=new E,V=C._rootTimeline=new E,W=30,X=O.lazyRender=function(){var a,b=I.length;for(J={};--b>-1;)a=I[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);I.length=0};V._startTime=h.time,U._startTime=h.frame,V._active=U._active=!0,setTimeout(X,1),C._updateRoot=F.render=function(){var a,b,c;if(I.length&&X(),V.render((h.time-V._startTime)*V._timeScale,!1,!1),U.render((h.frame-U._startTime)*U._timeScale,!1,!1),I.length&&X(),h.frame>=W){W=h.frame+(parseInt(F.autoSleep,10)||120);for(c in Q){for(b=Q[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete Q[c]}if(c=V._first,(!c||c._paused)&&F.autoSleep&&!U._first&&1===h._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||h.sleep()}}},h.addEventListener("tick",C._updateRoot);var Y=function(a,b,c){var d,e,f=a._gsTweenID;if(Q[f||(a._gsTweenID=f="t"+R++)]||(Q[f]={target:a,tweens:[]}),b&&(d=Q[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return Q[f].tweens},Z=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=F.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},$=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+l,m=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||_(b,0,o),0===_(h,j,o)&&(m[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(m[n++]=h)));for(f=n;--f>-1;)if(h=m[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!Z(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},_=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*l>f-b?l:(f+=a.totalDuration()/a._timeScale/e)>b+l?0:f-b-l};g._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,this._startAt=F.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)S[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=F.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof u?k:"function"==typeof k?new u(k,g.easeParams):v[k]||F.defaultEase:F.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&F._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},g._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;J[b._gsTweenID]&&X(),this.vars.css||b.style&&b!==a&&b.nodeType&&P.css&&this.vars.autoCSS!==!1&&H(this.vars,b);for(g in this.vars)if(l=this.vars[g],S[g])l&&(l instanceof Array||l.push&&o(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(P[g]&&(j=new P[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=N.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&$(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(J[b._gsTweenID]=!0),i)},g.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===l&&"isPause"!==this.data)&&j!==a&&(c=!0,j>l&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:l);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==l||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:l)),this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,m=this._easeType,n=this._easePower;(1===m||3===m&&k>=.5)&&(k=1-k),3===m&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===m?this.ratio=1-k:2===m?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,I.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===l&&g!==l&&(this._rawPrevTime=0))}},g._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:F.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((o(b)||G(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(F.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!Z(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},g.invalidate=function(){return this._notifyPluginsOfEnabled&&F._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],C.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-l,this.render(Math.min(0,-this._delay))),this},g._enabled=function(a,b){if(i||h.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=Y(d[c],this,!0);else this._siblings=Y(this.target,this,!0)}return C.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?F._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},F.to=function(a,b,c){return new F(a,b,c)},F.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new F(a,b,c)},F.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new F(a,b,d)},F.delayedCall=function(a,b,c,d,e){return new F(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},F.set=function(a,b){return new F(a,0,b)},F.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:F.selector(a)||a;var c,d,e,f;if((o(a)||G(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(F.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else for(d=Y(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d},F.killTweensOf=F.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=F.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var aa=s("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=aa.prototype},!0);if(g=aa.prototype,aa.version="1.19.0",aa.API=2,g._firstPT=null,g._addTween=N,g.setRatio=L,g._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},g._mod=g._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},F._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},aa.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===aa.API&&(P[(new a[b])._propName]=a[b]);return!0},r.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=s("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){aa.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new aa(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,aa.activate([g]),g},e=a._gsQueue){for(f=0;f<e.length;f++)e[f]();for(g in p)p[g].func||a.console.log("GSAP encountered missing dependency: "+g)}i=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");

/*
 * SplitType
 * A javascript utility that splits text into individual lines, words, and characters
 * so they can be animated and styled independently.
 * @updated: 6/6/2016
 * @author: Luke Peavey
 * @version: 1.0
 * @license MIT
 */
!function(a,b){"function"==typeof define&&define.amd?define(b):"undefined"!=typeof exports?module.exports=b():b()}(this,function(){window.SplitType=function(a,b,c){function r(a){return null!==a&&"object"==typeof a}function s(a){return r(a)&&"number"==typeof a.length&&a.length>0}function t(a){return r(a)&&"[object Object]"===Object.prototype.toString.call(a)}function u(a){return r(a)&&/^(1|3|11)$/.test(a.nodeType)}function v(a){return"string"==typeof a}function w(a,b,c){for(var d=Object(a),e=s(d)?d:t(d)?j(d):[d],f=parseInt(e.length)||0,g=0;g<f;g++)b.call(c,e[g],g,d)}function x(a,b){return a=Object(a),b=Object(b),Object.getOwnPropertyNames(a).reduce(function(c,d){return l(c,d,n(b,d)||n(a,d))},{})}function y(a,b,d){var i,h={};return r(a)&&(i=a[e]||(a[e]=++g),h=f[i]||(f[i]={})),d===c?b===c?h:h[b]:b!==c?(h[b]=d,d):void 0}function z(a){var b=a&&a[e];b&&(delete a[b],delete f[b])}function A(a,d){var e=b.createElement(a);return d===c?e:(w(d,function(a){var b=d[a];if(null!==b)switch(a){case"textContent":e.textContent=b;break;case"innerHTML":e.innerHTML=b;break;case"children":w(b,function(a){u(a)&&e.appendChild(a)});break;default:e.setAttribute(a,b)}}),e)}function B(a){var d,e,f,g,h,j,k,c=[];if(v(a)&&(d=a.trim(),e="#"===d[0]&&!/[^\w]/.test(f=d.slice(1)),a=e?b.getElementById(f):b.querySelectorAll(d)),d||u(a))return u(a)?[a]:i.call(a);if(s(a))for(j=0,g=a.length;j<g;j++)if(s(a[j]))for(k=0,h=a[j].length;k<h;k++)u(a[j][k])&&c.push(a[j][k]);else u(a[j])&&c.push(a[j]);return c}function C(b){var f,t,u,v,x,c=this.settings,d=c.tagName,e="B"+1*new Date+"R",g=c.split,j=g.indexOf("lines")!==-1,k=g.indexOf("words")!==-1,l=g.indexOf("chars")!==-1,m="absolute"===c.position||c.absolute===!0,n=A("div"),q=[],r=[],s=[];if(x=j?A("div"):o(),n.innerHTML=b.innerHTML.replace(/<br\s*\/?>/g," "+e+" "),f=n.textContent.replace(/\s+/g," ").trim(),r=f.split(" ").map(function(a){if(a===e)return x.appendChild(A("br")),null;if(l){var b=a.split("").map(function(a){return v=A(d,{class:c.charClass+" "+c.splitClass,style:"display: inline-block;",textContent:a})});h.apply(s,b)}return k||j?(u=A(d,{class:c.wordClass+" "+c.splitClass,style:"display: inline-block; position:"+(k?"relative":"static;"),children:l?b:null,textContent:l?null:a}),x.appendChild(u)):w(b,function(a){x.appendChild(a)}),x.appendChild(p(" ")),u},this).filter(function(a){return a}),b.innerHTML="",b.appendChild(x),h.apply(this.words,r),h.apply(this.chars,s),m||j){var B,C,D,E,F,G,H,I,J,K,L,z=[];H=y(b).nodes=b.getElementsByTagName(d),I=b.parentElement,J=b.nextElementSibling,K=a.getComputedStyle(b),L=K.textAlign,m&&(E={left:x.offsetLeft,top:x.offsetTop,width:x.offsetWidth},G=b.offsetWidth,F=b.offsetHeight,y(b).cssWidth=b.style.width,y(b).cssHeight=b.style.height),w(H,function(a){if(a!==x){var c,b=a.parentElement===x;j&&b&&(c=y(a).top=a.offsetTop,c!==C&&(C=c,z.push(B=[])),B.push(a)),m&&(y(a).top=c||a.offsetTop,y(a).left=a.offsetLeft,y(a).width=a.offsetWidth,y(a).height=D||(D=a.offsetHeight))}}),I.removeChild(b),j&&(x=o(),q=z.map(function(a){return x.appendChild(t=A(d,{class:c.lineClass+" "+c.splitClass,style:"display: block; text-align:"+L+"; width: 100%;"})),m&&(y(t).type="line",y(t).top=y(a[0]).top,y(t).height=D),w(a,function(a){k?t.appendChild(a):l?i.call(a.children).forEach(function(a){t.appendChild(a)}):t.appendChild(p(a.textContent)),t.appendChild(p(" "))}),t}),b.replaceChild(x,b.firstChild),h.apply(this.lines,q)),m&&(b.style.width=b.style.width||G+"px",b.style.height=F+"px",w(H,function(a){var b="line"===y(a).type,c=!b&&"line"===y(a.parentElement).type;a.style.top=c?0:y(a).top+"px",a.style.left=b?E.left+"px":(c?y(a).left-E.left:y(a).left)+"px",a.style.height=y(a).height+"px",a.style.width=b?E.width+"px":y(a).width+"px",a.style.position="absolute"})),J?I.insertBefore(b,J):I.appendChild(b)}}function D(a,b){return this instanceof D?(this.isSplit=!1,this.settings=x(q,b),this.elements=B(a),void(this.elements.length&&(this.originals=this.elements.map(function(a){return y(a).html=y(a).html||a.innerHTML}),this.split()))):new D(a,b)}if(b.addEventListener&&Function.prototype.bind){var e="splitType"+1*new Date,f={},g=0,h=Array.prototype.push,i=Array.prototype.slice,j=Object.keys,l=(Object.prototype.hasOwnProperty,Object.defineProperty),n=(Object.defineProperties,Object.getOwnPropertyDescriptor),o=b.createDocumentFragment.bind(b),p=b.createTextNode.bind(b),q={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",split:"lines, words, chars",position:"relative",absolute:!1,tagName:"div",DEBUG:!1};return l(D,"defaults",{get:function(){return q},set:function(a){q=x(q,a)}}),D.prototype.split=function(b){this.revert(),this.lines=[],this.words=[],this.chars=[],b!==c&&(this.settings=x(this.settings,b)),w(this.elements,function(a){C.call(this,a),y(a).isSplit=!0},this),this.isSplit=!0,w(this.elements,function(a){for(var b=y(a).nodes||[],c=0,d=b.length;c<d;c++)z(b[c])})},D.prototype.revert=function(){this.isSplit&&(this.lines=this.words=this.chars=null),w(this.elements,function(a){y(a).isSplit&&y(a).html&&(a.innerHTML=y(a).html,a.style.height=y(a).cssHeight||"",a.style.width=y(a).cssWidth||"",this.isSplit=!1)},this)},D}}(window,document)});

if( typeof LS_Meta === 'object' && LS_Meta.fixGSAP ){
window.GreenSockGlobals=null,window._gsQueue=null,window._gsDefine=null,delete window.GreenSockGlobals,delete window._gsQueue,delete window._gsDefine,window.GreenSockGlobals=LS_oldGS,window._gsQueue=LS_oldGSQueue,window._gsDefine=LS_oldGSDefine;
};

/*
	* LayerSlider
	*
	* (c) 2011-2017 George Krupa, John Gera & Kreatura Media
	*
	* Plugin web:			https://layerslider.kreaturamedia.com/
	* licenses:				http://codecanyon.net/licenses/standard
*/



;eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('1j.2y={7w:{aN:!1,bC:!1},f3:"2a"!=1t j8&&j8,cr:[],aK:[],9g:[],3e:{},f2:{},cc:2z.cc,eX:5u(\'8c[23*="5c.eW.c5.js"]\')[0],ck:"",7n:!1,iG:S(a,b,c,d){18 f,g,e="5b"==1t a?5u("#"+a).3f():a;2K(b){1g"c5":g="q1 5u iy",f=\'iw iq ip pd p7 5N or eJ p2 oR an oO oN of 7I 5u i4 oG oA 2h 9p 2C 6f eJ oz. cz oy on eJ 9R ov oo 2C 7I oj hL of 9p hI 7K 7I "o3 o0 nY 2C 3D" nT nS 7I nP & nK nJ 6a.\';1A;1g"hx":g="nE 5u iy",f="iw iq ip hs et nz an nv 6p ("+c+") of 7I 5u i4. 9p nm at ng 6p "+d+\' or nf. cz 8i 5u 2C 1.10.x or ne. nd: cz do 59 hg 7I 5u nb 5N on 9R . <a 4G="83://n9.eW.57/n8/4/5c-2h-n6/#7M-13&n4-60">mZ mW mU mS mR mQ 5u by mP mL.</a>\'}5u(\'<1x 2n="ls-h3"><i 2n="ls-h3-mF">!</i><h2>\'+g+"</h2><8h>"+f+"</8h></1x>").mD(e)},h1:S(a){R.f2[a]=2A,2m R.f2[a]},ej:S(a,b){2h(18 c=a.1E("."),d=b.1E("."),e=0;e<c.1m;++e){if(d.1m==e)1K!1;if(1e(c[e])!=1e(d[e]))1K!(1e(c[e])>1e(d[e]))}1K c.1m!=d.1m,!0}},mA.mz.1d=S(a){1K(""+R).1d(a)},S(a){"hg my";1j.6L={},a.fn.4U=S(c,d,e,f){c=c||{};18 g="1.8.0",h=a.fn.c5,i="mw"+1u.2D().ei(36).gQ(2,9);1K 1j.2y.ej(g,h,g)?(1t c).49("5F|2a")?R.3g(S(d){1j.6L[i]=4e b(R,a(R),c,i)}):"T"===c?1j.6L[R.T("7k")]:"4C"===c?1j.6L[R.T("7k")].2u.4C():"mg"===c?1j.6L[R.T("7k")].1l.1h.4m||!1:"79"===c?1j.6L[R.T("7k")].79||!1:"mc"===c?1j.6L[R.T("7k")].o||!1:"ec"===c?1j.6L[R.T("7k")].ec||!1:R.3g(S(b){18 g=1j.6L[a(R).T("7k")];g&&g.2u.8z(c,d,e,f),g=2A}):5q 1j.2y.iG(a(R),"hx",h,g)};18 b=S(b,c,d,e){c.T("7k",e).1M("T-5c-eb",e);18 f=R,g=1j.2y.f3?1j.2y.f3:1j;f.1l={1h:{e9:"|",1R:"lW",3O:["#3k","#21","#2H","#1Q","#8X","#3o","#3o-8X"],4m:{1W:"1V",aJ:"4Y",e8:!0,gz:!0,gy:!0,7p:-1,cB:-1,gu:-1,5B:-1,gt:"aH",e7:2A,b0:!1,aF:"aE",gr:"50% 50%",98:!0,aD:!0,5D:!1,gq:1,5y:"e6",aC:!1,4l:1,bW:lH,5z:-1,e5:!0,aB:!1,7T:!1,7s:cd,4c:"lx",8s:"/5c/e4/",8J:"5O",8N:!1,ge:"no-5U",gd:"2f",gc:"2w",gb:"50% 50%",e2:!0,az:!0,bd:!0,g6:!0,f7:!0,fZ:!0,bj:!1,fY:!1,fX:!0,fV:!1,6l:"1r",bL:"60%",cG:1k,aw:60,dU:35,dT:1k,fL:!0,as:"2w",fI:"kK.kH",dP:40,dO:10,dL:"7P",ft:!1,2Z:!1,fs:"1H: -fr; 1Y: -fr;",dK:!1,fp:"ko",fo:!0,dJ:!1,fk:-1,dH:-1,dG:!0,dF:!1,dE:!0,fb:!1,k0:""}},X:{aj:"9p (jV: "+e+") 71:"},24:{8I:{jU:["T","1L"],1L:["T","1L"],jS:["T","af"],7H:["T","7H"],7J:["T","7J"],jf:["T","jf"],7A:["T","7A"],7u:["T","7u"],jP:["T","ae"],jM:["T","bT"],jK:["T","bT"],jI:["T","bX"],jH:["T","bX"],jG:["T","2X"],jD:["T","2X"],2p:["T","2p"],4y:["T","4y"],4X:["T","4X"],im:["2s","ij"],ih:["2s","6u"],ig:["2s","2c"],ie:["2s","2c"],ic:["2s","2N"],rl:["1o","3u"],ri:["1o","2C"],i6:["1B","1W"],i5:["1B","6W"],i2:["1B","dt"],hX:["1B","31"],hU:["1B","a8"],hP:["1B","aX"],hO:["1B","2c"],hM:["1B","2c"],hr:["1B","87"],hq:["1B","2r"]},4m:{T:{1L:-1,af:0}}},2Q:{8I:{ho:["is"],1V:["is"],6o:["2V"],3B:["2V"],qs:["2V"],8k:["4f"],7L:["4f"],8Z:["4f"],5E:["2R"],3O:["2R"],5M:["2R"],bS:["2R"],2p:["2R"],51:["2R"],a6:["2R"],qr:["2W","4H"],qq:["2W","4H"],qn:["2c","4H"],qk:["3w","4H"],qj:["3v","4H"],qi:["2c","4H"],qh:["3w","4H"],qa:["3v","4H"],q8:["2N","4H"],q5:["4v","4H"],q0:["4B","4H"],pY:["5H","4H"],pP:["5K","4H"],pC:["2X","8S"],pA:["4i","8S"],py:["3P","5S"],pt:["1a","5S"],ps:["1b","5S"],pr:["1o","5S"],3R:["2c","4T"],p0:["3w","4T"],oK:["3v","4T"],2c:["2c","4T"],oI:["3w","4T"],oE:["3v","4T"],2N:["2N","4T"],oB:["4v","4T"],ox:["4B","4T"],ow:["5H","4T"],ou:["5K","4T"],ot:["31","9W"],os:["x","9W"],oq:["y","9W"],ok:["2b","9U"],oi:["2M","in"],og:["2M","in"],od:["2M","in"],ob:["1L","in"],di:["2q","in"],o2:["2q","in"],o1:["1O","in"],nU:["2W","3F"],nR:["2W","3F"],nQ:["2c","3F"],nM:["3w","3F"],nG:["3v","3F"],nF:["2c","3F"],nw:["3w","3F"],nr:["3v","3F"],nq:["2N","3F"],np:["4v","3F"],nl:["4B","3F"],nh:["5H","3F"],nc:["5K","3F"],n3:["2q","8P"],n1:["2q","8P"],mX:["31","8b"],mV:["x","8b"],mT:["y","8b"],mN:["1W","1Z"],mI:["7c","1Z"],mH:["2M","1Z"],mE:["2M","1Z"],mB:["2M","1Z"],mx:["1L","1Z"],mu:["1O","1Z"],mp:["2W","48"],mo:["2W","48"],mm:["2c","48"],ml:["3w","48"],mk:["3v","48"],mi:["2c","48"],mh:["3w","48"],me:["3v","48"],md:["2N","48"],mb:["4v","48"],m7:["4B","48"],m6:["5H","48"],m4:["5K","48"],m2:["2X","8p"],m0:["4i","8p"],lZ:["3P","64"],lY:["1a","64"],lX:["1b","64"],lV:["1o","64"],lT:["31","9F"],lS:["x","9F"],lR:["y","9F"],lQ:["2b","7h"],lP:["b3","1F"],lL:["2M","1F"],lI:["2M","1F"],lE:["1L","1F"],d6:["2q","1F"],lv:["2q","1F"],lu:["1O","1F"],lr:["2W","3s"],lq:["2W","3s"],lp:["2c","3s"],lo:["3w","3s"],ln:["3v","3s"],lf:["2c","3s"],le:["3w","3s"],lc:["3v","3s"],lb:["2N","3s"],l9:["4v","3s"],l8:["4B","3s"],l7:["5H","3s"],l6:["5K","3s"],l4:["2q","3s"],l3:["2q","3s"],l2:["31","8l"],l1:["x","8l"],l0:["y","8l"],kZ:["1W","2t"],kY:["7c","2t"],kX:["2M","2t"],kW:["2M","2t"],kU:["2M","2t"],kN:["1L","2t"],kG:["1O","2t"],kE:["2W","4b"],kC:["2c","4b"],kx:["3w","4b"],kv:["3v","4b"],ku:["2c","4b"],kp:["3w","4b"],kk:["3v","4b"],kg:["2N","4b"],kb:["4v","4b"],k5:["4B","4b"],jW:["5H","4b"],jT:["5K","4b"],jR:["31","68"],jQ:["x","68"],jO:["y","68"],jN:["1o","68"],jL:["2b","9D"],jF:["2M","1v"],jE:["2M","1v"],jC:["1L","1v"],jA:["3l","1v"],jz:["8B","1v"],sn:["8D","1v"],s6:["2q","1v"],s5:["2q","1v"],1v:["1O","1v"],rp:["2W","4k"],ro:["2c","4k"],rm:["3w","4k"],rh:["3v","4k"],re:["2c","4k"],rc:["3w","4k"],rb:["3v","4k"],qZ:["2N","4k"],qY:["4v","4k"],qX:["4B","4k"],qW:["5H","4k"],qV:["5K","4k"],qU:["2X","4k"],qT:["4i","4k"],qR:["5X","1r"],qQ:["5X","1r"],qP:["5X","1r"],qO:["5X","1r"],qN:["6C","1r"],qF:["6C","1r"],qD:["7F","1r"],qC:["7F","1r"],qB:["9A","1r"],pS:["d2","1r"],pu:["x","5A"],p5:["y","5A"],p1:["1o","5A"],oM:["3P","5A"],oH:["3P","5A"],oF:["31","5A"],1r:["1O","1r"],im:["ij","2s"],ih:["6u","2s"],ig:["2c","2s"],ie:["2c","2s"],ic:["2N","2s"],oD:["6s","1B"],i6:["1W","1B"],i5:["6W","1B"],i2:["dt","1B"],hX:["31","1B"],hU:["a8","1B"],hP:["aX","1B"],hO:["2c","1B"],hM:["2c","1B"],hr:["87","1B"],1B:["1O","1B"],oh:["2Q","2r"],oe:["2Q","2r"],oa:["2Q","2r"],o4:["4Q","2r"],nV:["4Q","2r"],nH:["4Q","2r"],nC:["1v","2r"],nB:["1r","2r"],hq:["1B","2r"]},d1:["nj","mC","mt","m1","lJ","lD","lC","lB","ly","ld","l5","kV","kO","kL","kt"],iI:{7e:[1],6A:[2],7d:[3,[1,2,6,7,8]],8K:[4],7f:[5],6j:[6,[1,2,3,4,5]],72:[7],iH:[8],iu:[9],9x:[10],7X:[11,[2,3,4,5,6,7,8,9,10]],8T:[12],cY:[13],5h:[14,[2,3,4,5,6,7,8,9,10,11,12,13]],8Y:[15],he:[16],cW:[17]},5s:{1o:S(){1K{cp:0,gW:1k,gU:1k,gF:0,"cu-3R":0,gB:0,gs:1k,gm:0}}},4m:S(a,b){18 c={is:{5I:!!a.is("3J.ls-bg"),2o:!!a.is(".ls-bg-4t"),gf:!!a.is("3J.ls-2Q"),cF:!1,9i:!1,1V:!0,aQ:b},4S:{},1X:{},2V:{6o:"cV",km:b,9n:b},4f:{8k:0,7L:0},2R:{3O:2A,5E:2A,5M:2A,bS:"aE",2p:2A,51:2A,2o:!1},1n:{7e:0,6A:0,7d:0,8K:0,7f:S(a){1K 1u.41(R.6A,R.8K)},6j:0,72:0,iH:S(a){1K 0===R.72&&a.1v.1O&&("4N"==1t a.1v.2M||a.1v.2M.1d("7d")!==-1&&a.1v.2M.1d("8K")!==-1&&a.1v.2M.1d("7f")!==-1)?(R.6j=f.W.1f.1n.7Q(a,a.1v.2M,"6j"),R.72=a.1v.3l!==-1&&a.1n.6j+(a.1v.5U+1)*a.1v.1L+a.1v.5U*a.1v.8B):f.26&&f.1D.1s("2B","8q.m5",a.4V[0].cT+"."+a.4V.1M("2n")+" [ "+a.4V.55().gQ(0,30)+"... ]"),1u.41(R.6A,R.72)},iu:S(a){1K 1u.41(R.8K,R.72)},9x:S(a){1K 1u.41(R.7f(),R.72)},7X:0,8T:0,cY:S(a){1K 1u.41(R.8T,R.72)},5h:S(a){1K 1u.41(R.9x(),R.8T)},8Y:0,he:S(a){1K 1u.41(R.8Y,R.8T,R.7f())},cW:S(a){1K 1u.41(R.8Y,R.cY(),R.7f())},b9:!1,bb:!1},1T:{in:{1O:!0,8C:{2k:!1,4E:!1,19:{2W:0}},9a:{2k:!1,88:S(){f.W.1f.in.88(a)},4r:S(){f.W.1f.in.4r(a)},19:{3j:"5n",2W:1,2c:0,3w:0,3v:0,4v:1,4B:1,5H:0,5K:0,x:0,y:0}},8F:{2k:!1,4E:!1,19:{}},8t:{2k:!1,19:{}},bp:{2k:!1,4E:!1,19:{}},6D:{2k:!1,19:{}},8o:{31:"50% 50% 0",x:0,y:0},bs:{},bt:{},5Q:{},2M:0,1L:1,2q:"9T"},1Z:{1O:2A,bw:{6m:{},2D:{},2W:0},9V:{2q:"9T",19:{2W:1,2c:0,3w:0,3v:0,4v:1,4B:1,5H:0,5K:0,x:0,y:0}},9f:{6m:{},2D:{},31:"50% 50% 0",x:0,y:0},1E:"",7c:.fy,2M:"6A",1L:1},1F:{1O:!0,8C:{2k:!1,4E:!1,19:{}},9a:{2k:!1,88:S(){f.W.1f.1F.88(a)},4r:S(){f.W.1f.1F.4r(a)},19:{2W:0,2c:0,3w:0,3v:0,4v:1,4B:1,5H:0,5K:0}},8F:{2k:!1,4E:!1,19:{}},8t:{2k:!1,19:{}},bp:{2k:!1,4E:!1,19:{}},6D:{2k:!1,19:{}},8o:{x:0,y:0},bs:{},bt:{},5Q:{},2M:"9Y",1L:1,2q:"9T"},2t:{1O:2A,bw:{4E:!1,6m:{},2W:1},9V:{2q:"9T",4E:!1,6m:{},2D:{},2W:0},9f:{6m:{},2D:{},x:0,y:0},1E:"",2M:"9x",7c:.fy,1L:1},1v:{1O:2A,3u:{2k:!1,4E:!1,19:{}},2C:{2k:!1,19:{}},6D:{2k:!1,4E:!1,19:{}},8o:{31:"50% 50% 0",x:0,y:0},5Q:{},2q:"fm",2M:"7f",8B:0,1L:1,3l:0,8D:!1},1r:{1O:2A,3u:{2k:!1,4E:!1,19:{}},2C:{2k:!1,19:{}},9f:{31:"50% 50% 0"},d2:!0,5X:"9T",7F:.5},1B:{1O:2A},2s:{2N:1.2},2b:{1O:!1,a0:"0 0 0 0",41:"-a1 a1 a1 -a1"},1o:{3b:{1P:{},in:{},1F:{},1v:{},1r:{},9t:{},bI:{},bJ:{},bK:{}},W:{bg:2A,in:2A,1F:2A,1v:2A,1r:2A}},1h:{1N:{2k:!1,4E:!1,19:{3j:"5n"}}},2r:{2Q:6n,4Q:6n,1v:6n,1r:6n},3r:{fh:{2k:!1,19:{2W:1,3j:"3m"}},cS:{2k:!1,19:{x:0,y:0,2c:0,3w:0,3v:0,4v:1,4B:1,5H:0,5K:0,2W:1,3j:"3m"}},cR:{2k:!1,19:{x:0,y:0,2c:0,3w:0,3v:0,4v:1,4B:1,5H:0,5K:0,2W:1}}}}};1K{is:c.is,4S:c.4S,1X:c.1X,2V:c.2V,4f:c.4f,2R:c.2R,2J:c.2J,1n:c.1n,in:c.1T.in,j7:c.1T.in.8C,4H:c.1T.in.8C.19,hf:c.1T.in.8F,8S:c.1T.in.8F.19,h4:c.1T.in.bp,g3:c.1T.in.bp.19,ah:c.1T.in.9a,4T:c.1T.in.9a.19,cP:c.1T.in.8t,bZ:c.1T.in.8t.19,cO:c.1T.in.6D,jl:c.1T.in.6D.19,9U:c.1T.in.5Q,9W:c.1T.in.8o,5S:c.1T.in.bs,al:c.1T.in.bt,1Z:c.1T.1Z,3F:c.1T.1Z.bw,8P:c.1T.1Z.9V,kf:c.1T.1Z.9V.19,8b:c.1T.1Z.9f,1F:c.1T.1F,cN:c.1T.1F.8C,cL:c.1T.1F.8C.19,cK:c.1T.1F.8F,c7:c.1T.1F.8F.19,ar:c.1T.1F.9a,48:c.1T.1F.9a.19,c9:c.1T.1F.8t,8p:c.1T.1F.8t.19,cb:c.1T.1F.6D,cJ:c.1T.1F.6D.19,7h:c.1T.1F.5Q,9F:c.1T.1F.8o,au:c.1T.1F.bs,64:c.1T.1F.bt,2t:c.1T.2t,ce:c.1T.2t.bw,3s:c.1T.2t.9V,8l:c.1T.2t.9f,1v:c.1T.1v,fg:c.1T.1v.3u,cI:c.1T.1v.3u.19,ch:c.1T.1v.2C,4b:c.1T.1v.2C.19,dX:c.1T.1v.6D,h0:c.1T.1v.6D.19,9D:c.1T.1v.5Q,68:c.1T.1v.8o,1r:c.1T.1r,g0:c.1T.1r.3u,dN:c.1T.1r.3u.19,fU:c.1T.1r.2C,4k:c.1T.1r.2C.19,5A:c.1T.1r.9f,1B:c.1T.1B,2s:c.1T.2s,2b:c.1T.2b,1o:c.1T.1o,2r:c.1T.2r,1h:c.1T.1h,3r:c.1T.3r}}}},f.1c={3l:0,3f:{},2H:{},2x:{},1Q:{},1h:S(){if(!2z.3D.7U(b))1K!1;2h(18 d=c.1y("> .ls-2Q, > .ls-24"),e=0,g=f.1l.24.8I,h=0,i=d.1m;h<i;h++){18 j=a(d[h]),k=j[0].1P,l={$4W:!1,1I:-1,T:{af:0,cv:0},1B:{},2s:{2N:1.2},1o:{}};if(f.1c.3l++,j.3N("ls-2Q").27("ls-24").19({1a:f.X.43.aM,1b:f.X.43.cA}).2e(f.X.$7r),j.T("ls"))2h(18 m=j.T("ls").4z().1E(";"),n=0;n<m.1m;n++){18 p,q,o=m[n].1E(":");o[0]=a.3T(o[0]),o[1]=a.3T(o[1]),""!==o[0]&&"2a"!=1t g[o[0]]&&(p="2a"==1t g[o[0]][1]?o[0]:g[o[0]][1],q=f.1J.2O.5s(o[1]),p.4z().1d("1L")===-1&&p.4z().1d("3Z")===-1&&"af"!=p||(q/=3z),l[g[o[0]][0]][p]=q)}j.3M("a.ls-4W").1m&&(l.T.$4W=j.3M("a.ls-4W").3f().19({6Y:5}).1M("T-24-4W",e+1).2e(f.X.$63),f.1f.20.cM(l.T.$4W)),l.T.$2o=j.3M(\'[T-ls*="a6"]\').3f(),l.T.$2o.1m&&(2A!==l.T.$2o.1M("T-ls").1E("a6")[1].1E(";")[0].49(/(ao|1O|on|1)/i)?(l.T.$2o.27("ls-bg-4t").19({1a:"2w",1b:"2w"}).3M("4t, 93, 42").19({1a:"1k%",1b:"1k%"}),l.T.$2o.9r(a(\'<1x 2n="ls-bg-4t-8Z"></1x>\'))):l.T.$2o=!1),j.1y("> .ls-bg").1m&&(l.T.$2g=j.1y("> .ls-bg").3f()),l.T.2p||(j.1y("> .ls-fW").1m?l.T.2p=f.1J.ag(j.1y("> .ls-fW").3f()):j.1y("> .ls-bg").1m?l.T.2p=f.1J.ag(j.1y("> .ls-bg").3f()):l.T.2p=f.o.8s+f.o.4c+"/ll.cQ"),(l.T.7A||l.T.7u)&&"2a"==1t bV&&(2m l.T.7A,2m l.T.7u,f.26&&f.1D.1s("2B","3p.hl",e+1)),"4D"===k.4X&&(l.T.4X="4D"),l.T.2X||(l.T.2X=""===j[0].1P.2X?"5O":j[0].1P.2X),f.1c[++e]={},f.1c[e].T=a.5x(!0,{},f.1l.24.4m.T,l.T),f.1c[e].1B=l.1B,f.1c[e].2s=l.2s,f.1c[e].1o=l.1o,f.1c[e].1I=e,f.1c[e].$1f=a(),f.X.4A.52(l.T.2p),f.1f.1h(j,e)}f.26&&f.1D.8G("3p.1P")},20:{fq:S(){18 a=f.1c;a.2H.1I=a.2x.1I,a.2x.1I=a.1Q.1I,a.1Q.1I=f.1w.2S.9B(f.1w.2G),a.20.cU()},g2:S(a){18 b=f.1c;b.1Q.1I=a,b.20.cU()},cU:S(){18 b=f.1c;b.2H=b.2H.1I!==-1?a.5x(!0,{},b[b.2H.1I]):{},b.2x=b.2x.1I!==-1?a.5x(!0,{},b[b.2x.1I]):{},b.1Q=b.1Q.1I!==-1?a.5x(!0,{},b[b.1Q.1I]):{}},4l:S(){18 a=f.1c;if(a.3f.1I=f.1J.2O.5s(f.o.4l),f.o.7T&&f.1c.3l>2?f.o.aB=!1:f.o.7T=!1,a.3f.1I="2D"==a.3f.1I?1u.3A(1u.2D()*f.1c.3l+1):a.3f.1I,2z.7D.9h)2h(18 b=1;b<a.3l+1;b++)a[b].T.4y==2z.7D.9h.1E("#")[1]&&(a.3f.1I=b);a.3f.1I=a.3f.1I<1||a.3f.1I>f.1c.3l?1:a.3f.1I,f.o.7T&&"2D"!=f.o.4l&&(a.3f.1I=f.o.4l),f.o.5D&&f.1w.20.gj(),f.26&&f.1D.4m.4l&&(a.3f.1I=f.1D.4m.4l)}},2S:{4y:S(a){1K a&&f.1c[a]&&f.1c[a].T&&f.1c[a].T.4y?f.1c[a].T.4y:2A}},24:[]},f.1f={$5f:a(),5Z:S(a,b){1K a.1d("%")!=-1?3q(a)*b:3q(a)},1h:S(c,d){if(!2z.3D.7U(b))1K!1;2h(18 g,e=c.1y(\'.ls-bg, .ls-l, .ls-2Q, *[2n^="ls-s"]\'),i=0,j=e.1m;i<j;i++){18 k=a(e[i]),l=k[0],m=k.3M();if(k.1M("2n").1d("ls-s")!=-1){18 n=k.1M("2n").1E("ls-s")[1].1E(" ")[0];k.3N("ls-s"+n).27("ls-2Q")}2F if(k.4u("ls-l"))k.3N("ls-l").27("ls-2Q");2F if(!k.is(".ls-bg, .ls-2Q")){k.5T();nA}k.is("a")&&1===m.1m&&(k=k.3M().3f(),l=k[0],l.jy("T-ls",l.gZ.ac("T-ls")),l.gZ.kl("T-ls"),k.4p().3N("ls-2Q"),k.27("ls-2Q")),k.T(f.1l.1h.1R,4e f.1l.2Q.4m(k,d)),k.1M("2n").1d("ls-cX-")!==-1&&R.20.h6(k),k.4p().is("a")?(g=k.4p(),R.20.cM(g)):g=k,f.1c[d].$1f=f.1c[d].$1f.1s(g)}},20:{cM:S(b){18 c=b.1M("4G"),d=b.1M("5e");if(d&&d.1d("ls-2f")!==-1&&b.on("53."+e,S(b){b.3V();18 d,e=2z.3D.nu-f.1i.4K;if(c&&""!==c)2K(c){1g"pE":d=0;1A;1g"jx":d=f.1i.hY-f.1i.4K;1A;1g"i1":d=f.X.4g;1A;1g"il":d=f.X.4g+f.X.1b;1A;5k:d=a(c).3f().1m?a(c).3f().6h().1Y:f.X.4g+f.X.1b}2F""===c&&(d=f.X.4g+f.X.1b);d=1u.a0(d,e),d=1u.41(0,d),g.3a.2C("55, 3D",1,{bP:d,2q:g.kJ.bO})}),f.1l.1h.3O.1d(c)!==-1||c.49(/^\\#[0-9]/)){18 h=a.3T(c.4z().1E("#")[1]),i=1e(h);b.on("53."+e,S(a){if(a.3V(),["2H","1Q","3k","21"].1d(h)!==-1)f.2j[h]("kT");2F if("4N"==1t i&&i===i)f.1w.78(i,!0,!0);2F if(!f.X.2v.8A)2K(h){1g"8X":f.2u.8z("8X");1A;1g"3o":f.2u.8z("3o");1A;1g"3o-8X":f.2u.8z("3o",!0)}})}},h6:S(b){2h(18 d=b.1M("2n").1E(" "),g=1,h=0;h<d.1m;h++)d[h].1d("ls-cX-")!=-1&&(g=1e(d[h].1E("ls-cX-")[1]));b.T(f.1l.1h.1R).2V.iM=g,b.19({3n:"lz"}).on("53."+e,S(b){b.3V(),c.4U(a(R).T(f.1l.1h.1R).2V.iM)})},2Y:S(a,b,c){b.is.5I||b.is.2o?(b.1X.$8x=a.3Q(".ls-bg-5C"),b.1X.$bB=a.3Q(".ls-bg-cZ")):(b.1X.$1N=a.3Q(".ls-in-1F"),b.1X.$1N.T(f.1l.1h.1R,{}),b.2V.d0=b.1X.$1N.T(f.1l.1h.1R),b.1X.$8u=a.3Q(".ls-2b"),b.1X.$8u.T(f.1l.1h.1R,{}),b.2V.mv=b.1X.$8u.T(f.1l.1h.1R),b.1X.$7i=a.3Q(".ls-1v"),b.1X.$7i.T(f.1l.1h.1R,{}),b.2V.n5=b.1X.$7i.T(f.1l.1h.1R)),b.1B.1O&&(b.1X.$8g=a.3Q(".ls-1B"),b.1X.$8g.T(f.1l.1h.1R,{1B:{}}),b.2V.jn=b.1X.$8g.T(f.1l.1h.1R),f.W.1f.1B.jo(b.1X.$8g,b.2V.jn.1B,b,c)),b.1r.1O&&f.W.1f.1r.20(a,b),f.70.9y?b.1X.$8e=a.3Q(".ls-z"):b.1X.$8e=b.1B.1O?b.1X.$8g:b.1X.$8x?b.1X.$bB:b.1X.$1N},1P:S(a){18 h,i,j,k,l,m,p,q,r,s,t,u,v,w,x,y,z,A,B,E,F,H,I,b=a[0],c=a.T(f.1l.1h.1R),d=b.1P,e=f.1f,n=0,o=0,D=!1,G=b.pI();if(r=""!==d.6I?e.5Z(d.6I,f.X.43.99):3q(a.19("4n-1H")),t=""!==d.6E?e.5Z(d.6E,f.X.43.99):3q(a.19("4n-3L")),s=""!==d.6B?e.5Z(d.6B,f.X.43.92):3q(a.19("4n-1Y")),u=""!==d.7b?e.5Z(d.7b,f.X.43.92):3q(a.19("4n-1U")),v=""!==d.3K?e.5Z(d.3K,f.X.43.99):3q(a.19("6K-1H")),w=""!==d.5m?e.5Z(d.5m,f.X.43.92):3q(a.19("6K-1Y")),b.1P.6K="0",y=""!==d.6P?3q(d.6P):3q(a.19("6R-1H-1a")),A=""!==d.6S?3q(d.6S):3q(a.19("6R-3L-1a")),z=""!==d.6T?3q(d.6T):3q(a.19("6R-1Y-1a")),B=""!==d.6U?3q(d.6U):3q(a.19("6R-1U-1a")),1===f.1S.$7g.1o(a).1m||a.3M("42").1m){18 J=a.3M(),K=J.1M("1a")?J.1M("1a"):J.1a(),L=J.1M("1b")?J.1M("1b"):J.1b();58===1e(K)&&cs===1e(L)&&(K=rJ,L=s1),""!==b.1P.1a&&"2w"!==b.1P.1a||a.19("1a",K),""!==b.1P.1b&&"2w"!==b.1P.1b||a.19("1b",L),"1k%"===d.1a&&"1k%"===d.1b&&(d.1H="50%",d.1Y="50%",c.2R.6i=!0),D=K/L,J.19({1a:"1k%",1b:"1k%"})}18 M=c.7j;a.is("3J")&&(l=a.T("fi"),m=a.T("fj"),E=l/m,(!d.1a&&!d.1b||"2w"===d.1a&&"2w"===d.1b)&&M&&(M.1a&&M.1b?(M.1a.1d("%")===-1?j=1e(M.1a):(n=1e(M.1a),j=e.5Z(M.1a,f.X.43.99)),M.1b.1d("%")===-1?k=1e(M.1b):(o=1e(M.1b),k=e.5Z(M.1b,f.X.43.92))):M.4q&&(a[0].1P.1a=M.4q+"px",j=M.4q,k=a.1b()))),H=G.1a?G.1a:G.3L-G.1H,I=G.1b?G.1b:G.1U-G.1Y,j||(j=d.1a,d.1a.1d("%")!==-1&&(n=1e(d.1a)),j=""!==j&&"2w"!==j?e.5Z(j,f.X.43.99):H-r-t-y-A,j=j?j:"2w"),k||(k=d.1b,d.1b.1d("%")!==-1&&(o=1e(d.1b)),k=""!==k&&"2w"!==k?e.5Z(k,f.X.43.92):I-s-u-z-B,k=k?k:"2w"),F=D?D:j/k,!a.is("3J")||d.1a||d.1b||M&&(!M||M.1a||M.1b)||l===j&&m===k||(l!==j?(j=l>5?l:j,F=l>5?E:F,k=j/F):m!==k&&(k=m>5?m:k,F=m>5?m:F,j=k*F)),h=3q(a.19("2W")),p=y+r+j+t+A,q=z+s+k+u+B,i=""!==d.2b&&d.2b,d.2b="",x=d.jB||d.1o;18 N=S(a){18 b=a;1K a&&a.1d("px ")!==-1&&(a=a.2l("px","").1E(" "),b=1u.6b(1e(a[0])/j*1k)+"%"),b};c.2T={2b:i,5Q:!1,1H:d.1H?d.1H:"0",1Y:d.1Y?d.1Y:"0",1a:1u.6F(j),1b:1u.6F(k),8n:n,8m:o,4w:p,4F:q,1C:F,6I:r,6B:s,6E:t,7b:u,3K:v,5m:w,6P:y,6T:z,6S:A,6U:B,3P:N(a.19("jX"))+" "+N(a.19("jY"))+" "+N(a.19("k2"))+" "+N(a.19("k4")),6q:3q(a.19("k6-k9")),c0:a.19("fl-1b"),bY:a.19("kh-ki"),4i:a.19("4i"),6Y:1e(a.19("z-1I"))||"2w",1o:x,2X:a.19("2g-4i"),kj:a.1M("T-ls")||"",d3:a.1M("1P")||""},d.6Y="2w",c.1V={1H:d.1H?d.1H:"0",1Y:d.1Y?d.1Y:"0",1a:j,1b:k}},5s:S(b,c,d){18 e=b.T(f.1l.1h.1R);b.T("ls");if(e.is.9i=!b.is("3J")&&!e.is.cF,e.4V=b,b.T("ls"))2h(18 i=f.1l.2Q.8I,j=b.T("ls").1E(";"),k=b.T("ls").4z().1E(";"),l=0;l<k.1m;l++)if(a.3T(k[l])){18 m=k[l].1d(":"),n=[k[l].9m(0,m),k[l].9m(m+1)],o=2A,p=2A,q=2A,r=2A,s=2A;if(o=a.3T(n[0]),""!==o)if(o.2l("1E","4Q"),"2a"!=1t i[o]){if(p=i[o][0],s="8Z"===o?a.3T(j[l].9m(m+1)):f.1J.2O.5s(a.3T(n[1])),n[1]&&n[1].1d("2D")!==-1&&(o.49(/(4Q)/)||(s=f.1J.2O.d4(s,p)),e.4S.8i||(e.4S.8i=!0)),"4N"==1t s&&p.49(/(1L|fu|fv|3Z)/i)&&(s/=3z),o.49(/(fw)(.+)/))2K(s){1g!0:s=0;1A;1g!1:s=1}r=i[o][1],"2a"!=1t r?""!==s?"5F"==1t s?o.49(/(4Q)/)?r.49(/(kn)/i)?e[r][p]=s:e[r].6m[p]=s:(q=f.1J.2O.5s(a.3T(s[0])),f.26&&f.1D.1s("2B","7V.kq",[o,s,q]),"4N"==1t q&&p.49(/(1L|fu|fv|3Z)/i)&&(q/=3z),e[r][p]=q):o.49(/(4Q)/)&&s.ei().1d("2D")!==-1?e[r].2D[p]=s:e[r][p]=s:f.26&&f.1D.1s("2B","7V.kr",o):e[p][o]=s}2F"2b"===o?(e.2T.2b=n[1],e.2T.5Q=!0):f.26&&f.1D.1s("2B","7V.ks",o)}if(f.70.fx&&(e.in.1O=!0,e.1Z.1O=!1,e.2t.1O=!1,e.1Z.1W=2A,e.2t.1W=2A),e.in.1O&&(e.ah.2q=e.cP.2q=e.cO.2q=f.1J.2O.4I(e.in.2q)),"2a"!=1t e.5S.3P&&(e.al.3P=e.2T.3P),"2a"!=1t e.64.3P&&(e.au.3P=e.2T.3P),e.8S.2X&&(e.bZ.2X=e.2T.2X),e.8p.2X&&(e.c7.2X=e.2T.2X),e.8S.4i&&(e.bZ.4i=e.2T.4i),e.8p.4i&&(e.c7.4i=e.2T.4i),"2a"!=1t e.5S.1a&&(e.al.1a=e.2T.1a),"2a"!=1t e.64.1a&&(e.au.1a=e.2T.1a),"2a"!=1t e.5S.1b&&(e.al.1b=e.2T.1b),"2a"!=1t e.64.1b&&(e.au.1b=e.2T.1b),"2a"!=1t e.1F.b3&&0!==e.1F.b3&&(e.1F.2M="6A + "+e.1F.b3),e.1F.2M.1d("9Y")!==-1&&"9Y"!==e.1F.2M&&(e.1F.2M="9Y"),e.1F.1O&&(e.ar.2q=e.c9.2q=e.cb.2q=f.1J.2O.4I(e.1F.2q)),a.7G(e.1v.3l)&&(e.1v.3l>0||e.1v.3l===-1)&&e.1v.1O!==!1?(e.1v.1O=!0,e.ch.2q=e.dX.2q=f.1J.2O.4I(e.1v.2q),e.1v.3l!==-1?e.1v.8D?e.1v.5U=2*e.1v.3l-1:e.1v.5U=e.1v.3l-1:e.1v.5U=-1):e.1v.1O=!1,a.4L(e.4k)||e.1r.1O===!1?e.1r.1O=!1:(e.1r.1O=!0,e.1r.6C||(e.1r.6C=e.1r.5X),e.1r.5X=f.1J.2O.4I(e.1r.5X),e.1r.6C=f.1J.2O.4I(e.1r.6C,!0),e.1r.9A||(e.1r.9A=e.1r.7F),g.3a.20(b[0],{2k:!1,19:{2r:e.5A.2r}})),e.1B.6s&&a.7G(e.1B.6s)&&0!==e.1B.6s&&e.1B.1O!==!1?e.1B.1O=!0:e.1B.1O=!1,e.is.5I){18 u={2N:1,2c:0};if(f.1c[c].2s.6u&&(e.2s=f.1c[c].2s),e.2s.6u){2K(e.2s.3u={},e.2s.2C={},e.2s.6u){1g"1F":e.2s.3u.2N=e.2s.2N||1,e.2s.3u.2c=e.2s.2c||0,e.2s.2C=u;1A;1g"in":e.2s.3u=u,e.2s.2C.2N=e.2s.2N||1,e.2s.2C.2c=e.2s.2c||0}2m e.2s.2N,2m e.2s.2c}2F e.2s.3u=u,e.2s.2C=u;a.4L(f.1c[c].1o)||(f.1c[c].1o.3u&&(e.1o.3b.bJ=f.W.1f.4M.2O(f.1c[c].1o.3u)),f.1c[c].1o.2C&&(e.1o.3b.bK=f.W.1f.4M.2O(f.1c[c].1o.2C)))}if(e.1Z.1W&&f.1l.2Q.d1.1d(e.1Z.1W)===-1&&(f.26&&f.1D.1s("2B","7V.kD",[b[0].cT,e.1Z.1W]),2m e.1Z.1W,2m e.1Z.ns,e.1Z.1O=!1),e.2t.1W&&f.1l.2Q.d1.1d(e.2t.1W)===-1&&(f.26&&f.1D.1s("2B","7V.kF",[b[0].cT,e.2t.1W]),2m e.2t.1W,2m e.2t.ns,e.2t.1O=!1),e.1Z.1W||e.2t.1W){18 v=0;if(e.is.9i?(e.1Z.1W&&(e.1Z.1O=!0,e.8P.2q=f.1J.2O.4I(e.8P.2q),e.1Z.1E=e.1Z.1W.1E("3W")[0],b.3M().1m&&f.26&&(v=1)),e.2t.1W&&(e.2t.1O=!0,e.3s.2q=f.1J.2O.4I(e.3s.2q)),e.2t.1O&&e.2t.1W.1E("3W")[0]!==e.1Z.1E&&(e.1Z.1E+=", "+e.2t.1W.1E("3W")[0],b.3M().1m&&f.26&&(v=1)),e.1Z.1E.1d("kI")!==-1&&e.1Z.1E.1d("d5")===-1&&(e.1Z.1E+=", d5"),e.1Z.1E.1d("d5")!==-1&&e.1Z.1E.1d("fA")===-1&&(e.1Z.1E+=", fA")):(2m e.1Z.1W,2m e.2t.1W,2m e.1Z.ns,2m e.2t.ns,f.26&&(v=2)),f.26&&0!==v&&c&&!d)2K(v){1g 1:f.1D.1s("2B","7V.kM",[b.6v("fC"),c]);1A;1g 2:f.1D.1s("2B","7V.kQ",[c,b.6v("fC")])}}if((e.2T.2b||e.9U.2b||e.7h.2b||e.9D.2b)&&(e.2b.1O=!0),e.in.1O&&e.4T.2N&&(2m e.4T.4v,2m e.4T.4B),e.1F.1O&&e.48.2N&&(2m e.48.4v,2m e.48.4B),e.5S.1o&&(e.1o.3b.in=f.W.1f.4M.2O(e.5S.1o)),e.1o.3b.1P=f.W.1f.4M.2O(e.2T.1o),e.64.1o&&(e.1o.3b.1F=f.W.1f.4M.2O(e.64.1o)),e.68.1o&&(e.1o.3b.1v=f.W.1f.4M.2O(e.68.1o)),e.5A.1o&&(e.1o.3b.1r=f.W.1f.4M.2O(e.5A.1o)),e.in.1O||(e.in.1L=0),e.1Z.1O||(e.1Z.1L=0),e.1v.1O||(e.1v.1L=0),e.2t.1O||(e.2t.1L=0),e.1F.1O||(e.1F.1L=0),b.1M("T-kR",c),"2a"!=1t e.2V.3B&&"3m"!==e.2V.3B){18 w=1e(e.2V.3B);0!==w&&"kS"!==e.2V.3B?(b.1M("T-fH",w),e.2V.9n=w):e.2V.9n=0,e.is.3B=!0,b.1M("T-3B","1")}2F b.1M("T-fH",c);e.2R.51&&(e.2R.51<0?e.2R.51=0:e.2R.51>1k&&(e.2R.51=1k)),e.is.2o&&(f.1S.9E(e,b),e.4f.8Z&&b.1y(".ls-bg-4t-8Z").19({fK:"6y("+e.4f.8Z+")"})),e.4f.8k&&(e.4f.8k=3q(e.4f.8k)),e.4f.7L&&(e.4f.7L=3q(e.4f.7L))}},2S:S(a){18 b=R.$5f;if(a){a=a.4z();18 c="in",d="",e="",g=\':59(".ls-bg")\',h=\':59(".ls-bg-4t")\';a.1d("bF")==-1&&a.1d("a6")==-1||(h="",a=a.2l("bF","").2l("a6","")),a.1d("4t")!=-1&&(e+=", > 4t",a=a.2l("4t","")),a.1d("93")!=-1&&(e+=", > 93",a=a.2l("93","")),a.1d("5i")!=-1&&(e+=", > 4t, > 93",a=a.2l("5i","")),a.1d("3C")!=-1&&(e+=\', > 42[23*="3C-bA.57"], > 42[23*="3C.57"], > 42[23*="bz.be"], > 42[T-23*="3C-bA.57"], > 42[T-23*="3C.57"], > 42[T-23*="bz.be"]\',a=a.2l("3C","")),a.1d("3U")!=-1&&(e+=\', > 42[23*="3E.3U"], > 42[T-23*="3E.3U"]\',a=a.2l("3U","")),","==e.fN(0)&&(e=e.9m(2,e.1m)),a.1d("1F")!=-1&&(c="1F"),a.1d("3J")==-1&&a.1d("54")==-1||(d="3J"),a.1d("bg")==-1&&a.1d("2g")==-1&&a.1d("bq")==-1||(g=""),b=a.1d("2x")!=-1?b.1o(d+"[T-24"+c+\'="\'+f.1c.2x.1I+\'"]\'+g+h):a.1d("1Q")!=-1?b.1o(d+"[T-24"+c+\'="\'+f.1c.1Q.1I+\'"]\'+g+h):b.1o(d+g+h),a.1d("bo")!=-1&&(b=b.1o(".ls-bg, .ls-bg-4t, :4J"),a=a.2l("bo","")),a.1d("3i")!=-1&&(b=b.1o(":4D:59(.ls-bg, .ls-bg-4t)"),a=a.2l("3i","")),a.1d("bl")!=-1&&(b=b.1o(\':59([T-3B="1"])\'),a=a.2l("bl","")),a.1d("3B")!=-1&&(b=b.1o(\'[T-3B="1"]\'),a=a.2l("3B","")),a.1d("bq")!=-1&&(b=b.1o(".ls-bg"),a=a.2l("bq","")),""!==e&&(b=b.1y(e))}1K b},8i:{T:S(b,c,d){18 e,g,h;2K(b fQ 5u||(b=a(b)),d&&b.1M("T-ls",d).T("ls",d),g=b.T(f.1l.1h.1R),e=g.is.aQ,h=g.2T,c){5k:1g"W":g.2V.7t=!1,f.1f.20.5s(b,e,!0);1A;1g"5f":b.T(f.1l.1h.1R,4e f.1l.2Q.4m(b,e)),g=b.T(f.1l.1h.1R),g.2T=h,f.1f.20.5s(b,e,!0),f.1f.20.2Y(b,g,e)}}},5C:S(b,d){if(!f.1c[b].8R&&"fR"!==f.1c[b].8R){f.1c[b].8R="fR";18 e=d?25:0,g=f.1c[b].$1f,h=g.1m;g.3g(S(d,g){f.2E["24-"+b+"-2Q-"+d]=5v(S(){2m f.2E["24-"+b+"-2Q-"+d];18 k,e=a(g),i=e,j="",l=!1,m="";e.4u("ls-3X-6t")&&(m+=" ls-3X-on-6t"),e.4u("ls-3X-6r")&&(m+=" ls-3X-on-6r"),e.4u("ls-3X-b7")&&(m+=" ls-3X-on-b7"),e.3N("ls-3X-6t ls-3X-6r ls-3X-b7"),i.is("a")&&1===i.3M().1m&&(l=!0,e=i.1y(".ls-2Q"));18 n=e.T(f.1l.1h.1R);if(!n)1K!0;if(k=f.X.$63,n.is.2o?k=f.X.$fT:n.is.5I&&(k=f.X.$b6),f.1f.20.1P(e),f.1f.20.5s(e,b),n.1Z.1E){18 o=4e lA(e[0],{1E:n.1Z.1E});n.1Z.1W&&(n.1Z.ns=o[n.1Z.1W.1E("3W")[0]]),n.2t.1W&&(n.2t.ns=o[n.2t.1W.1E("3W")[0]])}n.is.5I||n.is.2o?j=\'<1x 2n="ls-1N ls-bg-cZ"><1x 2n="ls-1N ls-bg-5C"></1x></1x>\':(n.2b.1O&&(j=\'<1x 2n="ls-1N ls-2b"></1x>\'),n.1v.1O&&(j=\'<1x 2n="ls-1N ls-1v">\'+j+"</1x>"),j=\'<1x 2n="ls-1N ls-in-1F">\'+j+"</1x>"),n.1B.1O&&(j=\'<1x 2n="ls-1N ls-1B">\'+j+"</1x>"),f.70.9y&&(j=\'<1x 2n="ls-1N ls-z">\'+j+"</1x>"),""!==j?e.2e(k).5C(j):e.2e(k),l===!0&&i.27("ls-2Q-4W").2e(e.4p());18 p={},q=e.19("d7-d8-d9");q&&"4Y"!==q&&(p["d7-d8-d9"]=q,e.19("d7-d8-d9","4Y")),n.2T.b5=1;18 r=1e(n.2T.6Y);n.is.2o?p={6Y:n.2T.b5}:n.is.5I?p={6Y:n.2T.b5}:(r||(r=d+lF),p.6Y=r,n.2T.b5=r),f.70.9y&&(p.3y="g5("+lK*r+"px )"),f.1f.20.2Y(e,n,b),n.1X.$8e.19(p).27(m),n.is.5I&&n.1X.$8x.19({2X:f.1c[b].T.2X}),f.1f.$5f=f.1f.$5f.1s(e),f.1c[b].$1f=f.1c[b].$1f.59(i),d===h-1&&(c.3M(".ls-24").eq(b-1).lM(),f.1c[b].8R=!0)},e*(d+1))})}}},f.1w={2G:"1Q",lO:0,8H:!0,3G:{4Y:[],aZ:[]},2v:{77:!0,4d:!1,8y:!1,9G:!1,9H:!1},4S:{6k:!1,3k:!1,21:!1},5a:S(){1K R.2v.4d||R.2v.8y||R.2v.9G},1h:S(){1==f.1c.3l&&(f.o.98=!1,f.o.e2=!1,f.o.az=!1,f.o.bd=!1,f.o.5z=-1,f.o.g7=!1,f.o.as=!0,f.o.4l=1,f.o.6l="cE"),f.o.98&&1!=f.1c.3l||f.1J.2P(R,{77:!1,4d:!0}),R.20.5y(),R.20.g8()},20:{5y:S(){f.o.5y=f.o.5y===!0?f.1l.1h.4m.5y:f.o.5y,f.o.5y!==!1&&c.on("76."+e,S(){f.X.2v.6Z||(f.1J.2P(f.1w,{9G:!0}),"e6"!==f.o.5y&&f.W.1f.1n.5j())}).on("6g."+e,S(){18 b=1;f.W.1G&&f.W.1G.1L()>f.W.1f.1n.4a&&(b=f.W.1f.1n.4a/f.W.1G.1L()),f.1J.2P(f.1w,{9G:!1}),a("3D").4u("ls-9I")||"e6"===f.o.5y||f.o.aC&&f.1w.5a()||f.W.1f.1n.7O(),f.W.1G&&f.W.1f.1n.2v.7o&&f.W.1G.3t()<b&&f.1J.2P(f.W.1f.1n,{7o:!1}),f.1w.3k()})},g8:S(){2h(18 b=0;b<f.1c.3l;b++)f.1w.3G.4Y[b]=b+1;f.1w.3G.aZ=f.1J.db(a.mn([],f.1w.3G.4Y))},gj:S(){18 a=f.o.7T?"aZ":"4Y",b=f.1w.3G[a],c=f.1w.3G[a].1m,d=b.1d(f.1c.3f.1I);f.1w.3G.9c=[];2h(18 e=d;e<c;e++)f.1w.3G.9c.52(b[e]);2h(18 g=0;g<d;g++)f.1w.3G.9c.52(b[g])},9J:S(a){2K(a){1g"2H":f.o.aB&&(f.1w.2G="2H"),f.1w.78(f.1w.2S.9B("2H"),!0);1A;1g"1Q":f.1w.2G="1Q",f.1w.78(f.1w.2S.9B("1Q"),!0)}}},2S:{3G:S(){18 a="4Y";1K f.o.5D?a="9c":f.o.7T&&(a="aZ"),a},9B:S(a){18 b=f.1w.3G[R.3G()],c=b.1d(f.1c.2x.1I);2K(a){1g"2H":1K 0===c?b[b.1m-1]:b[c-1];1g"1Q":1K c===b.1m-1?b[0]:b[c+1];5k:1K b[a]}},dc:S(a){1K f.1w.3G[R.3G()].1d(a)}},5z:{20:S(){f.o.5z>0&&(f.1w.cl=1,f.1w.dd=f.1w.2S.dc(f.1c.3f.1I))},6N:S(a){if(f.1w.2S.dc(a)===f.1w.dd)1K++f.1w.cl===f.o.5z+1}},3k:S(a){!R.5a()&&f.W.1G&&f.W.1f.1n.2v.7o&&R.78(f.1c.1Q.1I)},21:S(){f.1J.2P(R,{77:!1,4d:!0})},78:S(d,e,g){if(!2z.3D.7U(b))1K!1;if(!R.8H&&f.2u.46("gp")){18 h=c.4h("gp",f.2u.4C());if(h===!1)1K;a.7G(h)&&(d=1e(h))}1K d>f.1c.3l||d<1?5q(f.26&&(f.1D.1s("7M","1w"),f.1D.1s("2B","1w.mG",[d,f.1c.3l]),f.1D.8G())):5q(f.X.8j()||f.1w.2v.8y&&!e?!f.X.2v.aO&&f.X.2v.8f&&f.W.3x&&(f.1w.4S.6k=!0,f.W.3x.3t(1),f.W.56&&f.W.56.3t(1)):(f.1J.2P(f.W.1f.1n,{7o:!1}),f.1w.4S.6k=!1,f.26&&f.1D.1s("7M","1w"),e?("2H"===f.2j.2G&&f.o.aB&&(f.1w.2G="2H"),f.26&&(f.1D.1s("5g","1w.mY",!1),f.o.aB&&f.1D.1s("5g","1w.n0",f.1w.2G))):f.2j.2G=f.1w.2G,f.W.2i.3o(),f.1S.21(),f.1c.20.g2(d),f.26&&(f.1D.1s("5g","1w.6k",[f.1c.2x.1I,f.1c.1Q.1I,f.1w.2G,f.2j.2G]),f.1D.8G()),f.1J.2P(R,{8y:!1}),f.1J.2P(f.X,{8A:!0}),f.5L.de(f.1c.1Q.1I,S(){f.W.3k()})))},n7:S(){f.2j.21(),a.3g(f.2E,S(a,b){89(f.2E[a])}),f.W.2i.21(),f.W.1G.21(),f.1J.2P(f.W.1f.1n,{9K:!0,77:!1}),c.1y("*").21(!0,!1).ni()},gA:S(){c.1y("*").21(),f.2j.6k(f.1c.2x.1I,f.1w.2G)}},f.1S={nk:{},$7g:a(),7x:"9L:",9M:0,bR:0,1h:S(){2z.7D.4G.1d("83:")!=-1&&(R.7x="83:"),f.1J.2P(f.X,{df:!1,dg:!1}),f.1S.3C.1h(),f.1S.3U.1h(),f.1S.5i.1h()},3C:{1h:S(){18 b=0;R.$84=f.X.$7r.1y(\'42[23*="3C-bA.57"], 42[23*="3C.57"], 42[23*="bz.be"], 42[T-23*="3C-bA.57"], 42[T-23*="3C.57"], 42[T-23*="bz.be"]\').3g(S(){18 c=a(R),d=c.4p(),e=d.T(f.1l.1h.1R),g=(c.1M("23")||c.1M("T-23")).2l("5E=1","5E=0").2l("?","?gG=ao&"),h=g.1d("9L")===-1?f.1S.7x:"",i=g.1d("?")===-1?"?":"&",j="gL=gM&5i=1&nD=1&6p=3",k={$9N:c,9O:h+g+i+j,gP:f.1S.7x+"//3J.3C.57/nI/"+g.1E("nL/")[1].1E("?")[0]+"/"+f.o.fI};c.1M("id","ls-3C-"+ ++b),e.2J={1W:"3C",81:k},f.1S.bG(e),e.is.2o&&f.1S.9E(e,d),e.is.2o||f.1S.bD(d,c,k.9O,k.gP,e)}),f.1S.$7g=f.1S.$7g.1s(R.$84.4p()),R.$84.1m&&(f.2E.dh=1u.3A(bx.bv()/3z),1j.br||a("<8c>").1M({23:"83://o6.3C.57/o9",1W:"4Q/gY"}).2e("9Q"),1j.oc=S(){1j.2y.7w.aN=!0},f.4O.dj=bk(S(){1j.br&&1===1j.br.dk||1j.2y.7w.aN||1u.3A(bx.bv()/3z)-f.2E.dh>3?(9S(f.4O.dj),2m f.4O.dj,2m f.2E.dh,f.1S.3C.$84.4p().3g(S(){18 b=a(R),c=b.T(f.1l.1h.1R),d=c.2J.81;b.on("7R."+e+" 53."+e,".ls-69",S(){f.1S.b4(a(R)),f.1S.b2(b,c),f.1S.b1(b),f.1S.3C.2L(b,d.$9N,d.9O,c)}).on("aY."+e,S(){f.1S.3C.2L(b,d.$9N,d.9O,c)}).on("9X."+e,S(){f.1S.3C.21(b,d.$9N,c)}).on("dl."+e,S(){f.1S.3C.9b(b,d.$9N,d.9O,c,!0)})}),f.1J.2P(f.X,{df:!1})):f.1J.2P(f.X,{df:!0})},25))},9b:S(a,b,c,d,e){18 g=S(){2A!==d.2R.51&&d.2J.3E.h5(d.2R.51),e&&!d.2J.dm||(d.2J.3E.7R(),d.2J.dm=!1)},h=S(b){0===b.T&&(d.is.2o?d.2J.3E.aV(0):f.1S.aU(a,d))};if(2A!==d.2R.5M)2K(d.2R.5M){5k:c.2l("&5M=0","").2l("&5M=1","");1g!0:c+="&5M=1";1A;1g!1:c+="&5M=0"}if(2A!==d.2R.3O)2K(d.2R.3O){5k:c.2l("&3O=0","").2l("&3O=1","");1g!0:c+="&3O=1";1A;1g!1:c+="&3O=0"}b.1M("23",c),d.2J.3E=4e br.oL(b[0],{hd:{oP:g,oS:h}})},2L:S(a,b,c,d){d.2J.3E?d.2J.3E.7R?d.2J.3E.7R():d.2J.dm=!0:R.9b(a,b,c,d)},21:S(a,b,c){c.2J.3E&&(c.2J.3E.oU().aV(0),c.is.2o||f.1S.aT(a.1y(".ls-69")))}},3U:{1h:S(){18 b=R.$84=f.X.$7r.1y(\'42[23*="3E.3U"], 42[T-23*="3E.3U"]\');if(b.1m){f.2E.dn=1u.3A(bx.bv()/3z),f.1S.$7g=f.1S.$7g.1s(b.4p());18 c=0;a("<8c>").1M({23:f.1S.7x+"//f.p3.57/js/p4.a0.js",1W:"4Q/gY"}).2e("9Q"),f.4O.dp=bk(S(){f.1J.2P(f.X,{dg:!0}),(1j.p6||1u.3A(bx.bv()/3z)-f.2E.dn>3)&&(9S(f.4O.dp),2m f.4O.dp,2m f.2E.dn,1j.2y.7w.bC=!0,d())},25);18 d=S(){f.1S.3U.$84.3g(S(){18 b=a(R).1M("id","ls-3U-"+ ++c),d=b.4p(),g=d.T(f.1l.1h.1R),h=(b.1M("23")||b.1M("T-23")).2l("5E=1","5E=0").2l("?","?gG=ao&"),i=h.1d("?")===-1?"?":"&",j=h.1d("9L")===-1?f.1S.7x:"",k="gL=gM&2u=1&p9=ls-3U-"+c,l=f.1S.7x+"//3U.57/2u/pb/4t/"+h.1E("4t/")[1].1E("?")[0]+".pe?pg=?",m=j+h+i+k;g.2J={1W:"3U",81:{}},f.1S.bG(g),g.is.2o&&f.1S.9E(g,d),a.ph(l,S(a){g.is.2o||f.1S.bD(d,b,m,a[0].pm,g)}),d.on("7R."+e+" 53."+e,".ls-69",S(){f.1S.b4(a(R)),f.1S.b2(d,g),f.1S.b1(d),f.1S.3U.2L(d,b,m,g)}).on("aY."+e,S(){f.1S.3U.2L(d,b,m,g)}).on("9X."+e,S(){f.1S.3U.21(d,b,g)}).on("dl."+e,S(){f.1S.3U.9b(d,b,m,g,!0)})}),f.1J.2P(f.X,{dg:!1})}}},9b:S(a,b,c,d,e){if(2A!==d.2R.5M)2K(d.2R.5M){5k:c.2l("&96=0","").2l("&96=1","").2l("&94=0","").2l("&94=1","").2l("&91=0","").2l("&91=1","");1g!0:c.2l("96=0","96=1","").2l("94=0","94=1","").2l("91=0","91=1","");1A;1g!1:c.2l("96=1","96=0","").2l("94=1","94=0","").2l("91=1","91=0","")}b.1M("23",c);18 g=S(){d.is.2o?d.2J.3E.2u("aV",0).2u("2L"):f.1S.aU(a,d)};d.2J.3E=$f(b[0]),d.2J.3E.hi("cy",S(){d.2J.3E.hi("pz",g),2A!==d.2R.51&&d.2J.3E.2u("h5",d.2R.51/1k),e||d.2J.3E.2u("2L")})},2L:S(a,b,c,d){d.2J.3E?d.2J.3E.2u("2L"):R.9b(a,b,c,d)},21:S(a,b,c){c.2J.3E&&(c.2J.3E.2u("5j").2u("aV",0),c.is.2o||f.1S.aT(a.1y(".ls-69")))}},5i:{1h:S(){if(R.$1X=f.X.$7r.1y("4t, 93"),f.1S.$7g=f.1S.$7g.1s(R.$1X.4p()),R.$1X.1m){18 b=0;f.1S.5i.$1X.3g(S(){18 c=a(R).1M("id","ls-5i-"+ ++b),d=a(R).4p(),g=d.T(f.1l.1h.1R);if(g.2J={1W:"5i",81:{}},f.1S.bG(g),g.is.2o&&f.1S.9E(g,d),c.1M("5E")){18 h=c.9e("5E").cq(!0,!0);c.5T(),c=h.2e(d),d.T("ls",d.T("ls")+" 5E: ao;")}g.is.2o||f.1S.bD(d,c,!1,!1,g),c.on("pD."+e,S(){g.is.2o?(c[0].hj=0,c[0].2L()):f.1S.aU(d,g)}),d.on("7R."+e+" 53."+e,".ls-69",S(b){f.1S.b4(a(R)),f.1S.b2(d,g),f.1S.b1(d),f.1S.5i.2L(d,c,g)}).on("aY."+e,S(){f.1S.5i.2L(d,c,g)}).on("9X."+e,S(){f.1S.5i.21(d,c,g)})})}},2L:S(a,b,c){if(c.2J.81.3O)2K(c.2J.81.3O){1g!0:b.6v("3O",!0);1A;1g!1:b.6v("3O",!1)}2F b.6v("3O",c.2R.3O);2A===c.2R.51||c.2J.hk||(b[0].51=c.2R.51/1k,c.2J.hk=!0),b[0].2L()},21:S(a,b,c){b[0].5j(),b[0].hj=0,b.6v("3O",!1),c.is.2o||f.1S.aT(a.1y(".ls-69"))}},9E:S(b,c){if(b.2R={3O:!1,5E:!1,5M:!1,bS:"aE",2p:!1,51:0},c.T("ls")&&c.T("ls").1d("8d:")!==-1&&0==c.3M(".ls-69").1m){18 d=a("<1x>").27("ls-69").2e(c),e=c.T("ls").1E("8d:")[1].1E(";")[0].3T();a("<1x>").2e(d).27("ls-dq").1M({1P:"2g-54: 6y("+e+")"})}},bG:S(a){a.is.cF=!0},bD:S(b,c,d,e,f){18 g=a("<1x>").27("ls-69").2e(b);a("<1x>").2e(g).27("ls-pX"),b.T("ls")&&b.T("ls").1d("8d:")!==-1&&(e=b.T("ls").1E("8d:")[1].1E(";")[0].3T()),c.is("42")?a("<1x>").2e(g).27("ls-dq").1M({1P:"2g-54: 6y("+e+")"}):(c.is("4t")&&(f.2J.81.3O=c.6v("3O"),c.6v("3O",!1)),e||"2a"==1t c.1M("8d")||(e=c.1M("8d"),c.9e("8d")),e&&a("<1x>").2e(g).27("ls-dq").1M({1P:"2g-54: 6y("+e+")"}))},b2:S(a,b){!b.is.3B&&f.o.as&&(f.1J.2P(f.1w,{8y:!0}),"2w"==f.o.as&&R.9M++)},b4:S(a){a.3Z(f.W.1S.1l.3Z).5G(f.W.1S.1l.5G)},aT:S(a){a.5d(f.W.1S.1l.5d)},aU:S(a,b){"2w"!=f.o.as||b.is.2o||(b.is.3B||R.bR++,R.bR==R.9M&&0!==R.9M&&(f.1J.2P(f.1w,{8y:!1}),f.1w.q4=1,f.1w.3k()))},21:S(){18 b=R;f.1f.2S("2x,1F,3C").3g(S(){18 c=a(R),d=c.3Q(".ls-2Q"),e=d.T(f.1l.1h.1R);b.3C.21(d,c,e)}),f.1f.2S("2x,1F,3U").3g(S(){18 c=a(R),d=c.3Q(".ls-2Q"),e=d.T(f.1l.1h.1R);b.3U.21(d,c,e)}),f.1f.2S("2x,1F,5i").3g(S(){18 c=a(R),d=c.3Q(".ls-2Q"),e=d.T(f.1l.1h.1R);b.5i.21(d,c,e)}),R.9M=0,R.bR=0},b1:S(a){f.W.1G.5V(2A,a.3Q(".ls-in-1F")[0])}},f.2Z={1h:S(){f.o.2Z&&(R.$1p=a("<3J>").27("ls-q9").2e(c).1M("1P",f.o.fs).19({6e:"4J",3j:"qg"}).on("47."+e,S(){18 b=f.2Z.$1p?6n:0;f.2E.2Z=5v(S(){2m f.2E.2Z,f.2Z.$1p.T("aM",f.2Z.$1p.1a()),f.2Z.$1p.T("cA",f.2Z.$1p.1b()),"2w"!=f.2Z.$1p.19("1H")&&f.2Z.$1p.T("a2",f.2Z.$1p[0].1P.1H),"2w"!=f.2Z.$1p.19("3L")&&f.2Z.$1p.T("a3",f.2Z.$1p[0].1P.3L),"2w"!=f.2Z.$1p.19("1Y")&&f.2Z.$1p.T("a4",f.2Z.$1p[0].1P.1Y),"2w"!=f.2Z.$1p.19("1U")&&f.2Z.$1p.T("a5",f.2Z.$1p[0].1P.1U),f.o.dK!==!1&&a("<a>").2e(c).1M("4G",f.o.dK).1M("5e",f.o.fp).19({qo:"3m",qp:"3m"}).9r(f.2Z.$1p),f.2Z.$1p.19({3j:"3m",6e:"4D"}),f.2Z.1z()},b)}).1M("23",f.o.2Z))},1z:S(){R.$1p.19({1a:R.$1p.T("aM")*f.1z.1C,1b:R.$1p.T("cA")*f.1z.1C}),R.$1p.5d(58);18 a="2w",b="2w",d="2w",e="2w";a=R.$1p.T("a2")&&R.$1p.T("a2").1d("%")!=-1?c.1a()/1k*1e(R.$1p.T("a2"))-R.$1p.1a()/2+1e(c.19("4n-1H")):1e(R.$1p.T("a2"))*f.1z.1C,b=R.$1p.T("a3")&&R.$1p.T("a3").1d("%")!=-1?c.1a()/1k*1e(R.$1p.T("a3"))-R.$1p.1a()/2+1e(c.19("4n-3L")):1e(R.$1p.T("a3"))*f.1z.1C,d=R.$1p.T("a4")&&R.$1p.T("a4").1d("%")!=-1?c.1b()/1k*1e(R.$1p.T("a4"))-R.$1p.1b()/2+1e(c.19("4n-1Y")):1e(R.$1p.T("a4"))*f.1z.1C,e=R.$1p.T("a5")&&R.$1p.T("a5").1d("%")!=-1?c.1b()/1k*1e(R.$1p.T("a5"))-R.$1p.1b()/2+1e(c.19("4n-1U")):1e(R.$1p.T("a5"))*f.1z.1C,R.$1p.19({1H:a,3L:b,1Y:d,1U:e})}},f.1q={2j:{1h:S(){f.o.e2&&R.9J.1h(),(f.o.az||f.o.bd)&&R.1U.1h()},9J:{1h:S(){a(\'<a 2n="ls-1q-1p ls-3c-2H" 4G="#" />\').on("53."+e,S(a){a.3V(),c.4U("2H")}).2e(c),a(\'<a 2n="ls-1q-1p ls-3c-1Q" 4G="#" />\').on("53."+e,S(a){a.3V(),c.4U("1Q")}).2e(c),f.o.fZ&&R.8L()},8L:S(){c.1y(".ls-3c-2H, .ls-3c-1Q").19({3j:"3m"}),c.on("76."+e,S(){f.1q.2j.dr||c.1y(".ls-3c-2H, .ls-3c-1Q").21(!0,!0).5d(58)}).on("6g."+e,S(){c.1y(".ls-3c-2H, .ls-3c-1Q").21(!0,!0).5G(58)})}},1U:{1h:S(){R.1N=a(\'<1x 2n="ls-1q-1p ls-1U-3c-1N" />\').2e(c),f.o.bd&&"8E"!=f.o.6l&&R.b8.1h(),f.o.az?R.hz():"8E"!=f.o.6l&&R.hG(),f.o.bj&&"8E"!=f.o.6l&&R.8L(),"8E"==f.o.6l&&(R.1N.27("ls-hK-4A"),R.4A.1h())},b8:{1h:S(){18 b=R;a(\'<8h 2n="ls-1U-8v" />\').2e(c.1y(".ls-1U-3c-1N"));2h(18 d=0;d<f.1c.3l;d++){18 g=a(\'<a 4G="#" />\').2e(c.1y(".ls-1U-8v")).T("1I",d+1).on("53."+e,S(b){b.3V(),c.4U(a(R).T("1I"))});"1r"==f.o.6l&&g.on("76."+e,S(){18 d=a(R);c.1y(".ls-2p-1r-3J").19({1H:1e(b.86.19("4n-1H")),1Y:1e(b.86.19("4n-1Y"))}),b.a7.on("47."+e,S(){0===a(R).1a()?b.a7.19({6o:"cV",6K:"0 2w",1H:"2w"}):b.a7.19({6o:"hQ",3K:-a(R).1a()/2,1H:"50%"}),b.a7.19("3j","3m").21(!0,!0).5d(9q)}).1M("23",f.1c[d.T("1I")].T.2p),b.86.19({3j:"5n"}).21().7Z({1H:a(R).6o().1H+(a(R).1a()-b.86.4w())/2},9q),b.ds.19({3j:"3m",6e:"4D"}).21().5d(9q)}).on("6g."+e,S(){b.ds.21().5G(9q,S(){b.86.19({6e:"4J",3j:"5n"})})})}b.20.3i(f.1c.3f.1I),"1r"==f.o.6l&&b.20.1r()},20:{3i:S(a){"2a"==1t a&&(a=f.1c.2x.1I),a--,c.1y(".ls-1U-8v a").3N("ls-3c-3i"),c.1y(".ls-1U-8v a:eq( "+a+" )").27("ls-3c-3i")},1r:S(){18 b=f.1q.2j.1U.b8,d=a(\'<1x 2n="ls-2p-1r"><1x 2n="ls-2p-1r-cD"><1x 2n="ls-2p-1r-bg"></1x><1x 2n="ls-2p-1r-3J"><3J></1x><8h></8h></1x></1x>\').2e(c.1y(".ls-1U-8v"));c.1y(".ls-2p-1r, .ls-2p-1r-3J").19({1a:f.o.cG,1b:f.o.aw}),b.86=c.1y(".ls-2p-1r"),b.a7=b.86.1y("3J").19({1b:f.o.aw}),b.ds=c.1y(".ls-2p-1r-cD").19({6e:"4J",3j:"5n"}),d.2e(c.1y(".ls-1U-8v"))}}},hz:S(){R.a9=a(\'<a 2n="ls-3c-3k" 4G="#" />\').on("53."+e,S(a){a.3V(),c.4U("3k")}).aH(c.1y(".ls-1U-3c-1N")),R.ab=a(\'<a 2n="ls-3c-21" 4G="#" />\').on("53."+e,S(a){a.3V(),c.4U("21")}).2e(c.1y(".ls-1U-3c-1N")),f.o.98?R.9v("3k"):R.9v("21")},9v:S(a){if(f.o.az)2K(a){1g"3k":R.a9.27("ls-3c-3k-3i"),R.ab.3N("ls-3c-21-3i");1A;1g"21":R.a9.3N("ls-3c-3k-3i"),R.ab.27("ls-3c-21-3i")}},hG:S(){a(\'<8h 2n="ls-3c-i7 ls-3c-rf" />\').aH(c.1y(".ls-1U-3c-1N")),a(\'<8h 2n="ls-3c-i7 ls-3c-rg" />\').2e(c.1y(".ls-1U-3c-1N"))},8L:S(){18 a=R;a.1N.19({3j:"3m"}),c.on("76."+e,S(){f.1q.2j.dr||a.1N.21(!0,!0).5d(58)}).on("6g."+e,S(){a.1N.21(!0,!0).5G(58)})},du:S(a){if(f.o.bj&&!c.4u("ls-1r"))2K(a){1g"on":f.1q.2j.1U.4A.1N.19({6e:"4J",3j:"5n"});1A;1g"7S":f.1q.2j.1U.4A.1N.19({6e:"4D",3j:"3m"})}},4A:{1h:S(){18 b=R;R.1N=a(\'<1x 2n="ls-1q-1p ls-2p-1N"></1x>\').2e(c),a(\'<1x 2n="ls-2p"><1x 2n="ls-2p-cD"><1x 2n="ls-2p-24-4P"><1x 2n="ls-2p-24"></1x></1x></1x></1x>\').2e(R.1N),R.$1p=c.1y(".ls-2p-24-4P"),"cm"in 1j?R.$1p.27("ls-rn"):R.$1p.on("76."+e,S(){a(R).27("ls-2p-24-1r")}).on("6g."+e,S(){a(R).3N("ls-2p-24-1r"),f.1q.2j.1U.4A.2f()}).on("8O."+e,S(b){18 c=1e(b.ci-a(R).6h().1H)/a(R).1a()*(a(R).1a()-a(R).1y(".ls-2p-24").1a());a(R).1y(".ls-2p-24").21().19({3K:c})});2h(18 d=0;d<f.1c.3l;d++){18 g=d+1,h=a(\'<a 4G="#" 2n="ls-7q-\'+(d+1)+\'"><3J 23="\'+f.1c[g].T.2p+\'"></a>\');h.T("1I",g).on("53."+e,S(b){b.3V(),c.4U(a(R).T("1I"))}).2e(c.1y(".ls-2p-24")),"cm"in 1j||h.on("76."+e,S(){a(R).3M().21().cf(58,f.o.dU/1k)}).on("6g."+e,S(){a(R).3M().4u("ls-7q-3i")||a(R).3M().21().cf(58,f.o.dT/1k)})}f.1q.2j.1U.a9&&f.1q.2j.1U.ab&&(f.1q.2j.1U.1N=a(\'<1x 2n="ls-1U-3c-1N ls-s2-4A"></1x>\').2e(c),f.1q.2j.1U.a9.cq().on("53."+e,S(a){a.3V(),c.4U("3k")}).2e(f.1q.2j.1U.1N),f.1q.2j.1U.ab.cq().on("53."+e,S(a){a.3V(),c.4U("21")}).2e(f.1q.2j.1U.1N)),f.o.bj&&b.8L()},8L:S(){18 a=R;a.1N.19("3j","3m"),f.1q.2j.1U.1N&&(f.1q.2j.1U.1N="5n"==f.1q.2j.1U.1N.19("3j")?f.1q.2j.1U.1N:c.1y(".ls-hK-4A"),f.1q.2j.1U.1N.19("3j","3m")),c.on("76."+e,S(){c.27("ls-1r"),f.1q.2j.dr||(a.1N.21(!0,!0).5d(58),f.1q.2j.1U.1N&&f.1q.2j.1U.1N.21(!0,!0).5d(58))}).on("6g."+e,S(){c.3N("ls-1r"),a.1N.21(!0,!0).5G(58),f.1q.2j.1U.1N&&f.1q.2j.1U.1N.21(!0,!0).5G(58)})},6k:S(b){18 d=b?b:f.1c.1Q.1I;c.1y(".ls-2p-24 a:59(.ls-7q-"+d+" )").3M().3g(S(){a(R).3N("ls-7q-3i").21().cf(cd,f.o.dT/1k)}),c.1y(".ls-2p-24 a.ls-7q-"+d).3M().27("ls-7q-3i").21().cf(cd,f.o.dU/1k)},2f:S(){if(!c.1y(".ls-2p-24-4P").4u("ls-2p-24-1r")){18 a=!!c.1y(".ls-7q-3i").1m&&c.1y(".ls-7q-3i").4p();if(a){18 b=a.6o().1H+a.1a()/2,d=c.1y(".ls-2p-24-4P").1a()/2-b;d=d<c.1y(".ls-2p-24-4P").1a()-c.1y(".ls-2p-24").1a()?c.1y(".ls-2p-24-4P").1a()-c.1y(".ls-2p-24").1a():d,d=d>0?0:d,c.1y(".ls-2p-24").7Z({3K:d},s3)}}},1z:S(){f.1q.2j.1U.du("on");18 a=f.X.43.1a.1d("%")==-1?1e(f.X.43.aM):c.1a(),b=c.1y(".ls-2p"),d=f.o.bL.1d("%")==-1?1e(f.o.bL):1e(a/1k*1e(f.o.bL));c.1y(".ls-2p-24 a").19({1a:1e(f.o.cG*f.1z.1C),1b:1e(f.o.aw*f.1z.1C)}),c.1y(".ls-2p-24 a:dv").19({6K:0}),c.1y(".ls-2p-24").19({1b:1e(f.o.aw*f.1z.1C)}),b.19({1a:d*1u.3A(1k*f.1z.1C)/1k}),b.1a()>c.1y(".ls-2p-24").1a()&&b.19({1a:c.1y(".ls-2p-24").1a()}),f.1q.2j.1U.du("7S")}}}},4c:{47:S(){c.27("ls-"+f.o.4c);18 g,b=f.o.8s+f.o.4c+"/4c.19",d=a(a("9Q").1m?"9Q":"3D");a(\'4W[4G="\'+b+\'"]\').1m?(g=a(\'4W[4G="\'+b+\'"]\'),f.1q.4c.6w||(f.1q.4c.6w=!0,f.2E.dw=5v(S(){2m f.2E.dw,f.X.1h()},cs))):2z.iz?(2z.iz(b),g=a(\'4W[4G="\'+b+\'"]\')):g=a(\'<4W iE="iF" 4G="\'+b+\'" 1W="4Q/19" />\').2e(d),g.on("47."+e,S(){f.1q.4c.6w||(f.1q.4c.6w=!0,f.2E.dx=5v(S(){2m f.2E.dx,f.X.1h()},cs))}),a(1j).on("47."+e,S(){f.1q.4c.6w||(f.1q.4c.6w=!0,f.2E.dy=5v(S(){2m f.2E.dy,f.X.1h()},cs))}),f.2E.dz=5v(S(){f.1q.4c.6w||(f.1q.4c.6w=!0,2m f.2E.dz,f.X.1h())},3z)}},4j:{1h:S(){R.20(),R.1z()},20:S(){R.$1p=a(\'<1x 2n="ls-1q-1p ls-4j"></1x>\').2e(c),"5n"!=R.$1p.19("3j")||R.$1p.1y("3J").1m||(R.6f=S(){f.1q.4j.$1p.19({3j:"3m",6e:"4D"}).5d(6n,S(){f.1q.4j.6f=!1})},R.54=a("<3J>").1M("23",f.o.8s+f.o.4c+"/4j.cQ").2e(R.$1p),R.iR="4N"==1t 1e(c.19("4n-1U"))?1e(c.19("4n-1U")):0)},1z:S(){R.54&&(R.54.1b()>0?R.iR>0?R.$1p.19({1b:R.54.1b()/2}):R.$1p.19({1b:R.54.1b(),5m:-R.54.1b()/2}):f.2E.iS=5v(S(){2m f.2E.iS,f.1q.4j.1z()},50))}},2i:{1h:S(){f.o.fY&&R.4s.5P(),f.o.fX&&R.3S.5P();18 b=!1;b=f.o.fV?a("<1x>").jJ(c):a(\'[T-2I-2h="\'+c.1M("id")+\'"], [T-2I-2h="\'+e+\'"]\'),b.1m&&(b.27("ls-1q-1p"),R.2I.5P(b))},4s:{5P:S(){R.$1p=a("<1x>").27("ls-1q-1p ls-4s-iY").2e(c)}},3S:{5P:S(){R.$1p=a("<1x>").27("ls-1q-1p ls-3S-iY").2e(c),R.$1p.9r(a(\'<1x 2n="ls-ct-7P"></1x><1x 2n="ls-ct-1H"><1x 2n="ls-ct-3R"><1x 2n="ls-ct-iZ"><1x 2n="ls-ct-j6"></1x></1x></1x></1x><1x 2n="ls-ct-3L"><1x 2n="ls-ct-3R"><1x 2n="ls-ct-iZ"><1x 2n="ls-ct-j6"></1x></1x></1x></1x>\')),R.$1p.T("2T",{2W:R.$1p.19("2W")})}},2I:{$5r:[],$1p:[],$dA:[],$7B:[],$bm:[],dB:[],ai:[],7z:[],5P:S(b){18 g,d=a(2z),h=R,i=S(a,b){g=(a.ci?a.ci:f.1i.jm)-h.$1p[b].6h().1H-h.7z[b]/2,g<0&&(g=0),g>h.ai[b]-h.7z[b]&&(g="dC( 1k% - "+f.1q.2i.2I.7z[b]+"px )"),h.$7B[b].19({1H:g}),f.W.1G&&f.W.1G.3t("5b"==1t g?f.W.1f.1n.3t:g/(h.ai[b]-h.7z[b])*f.W.1f.1n.3t)},j=S(b,c){a(2z).7S("8O."+e),a("3D").6v("9I",!1).3N("ls-9I"),f.o.aC&&!f.1w.2v.77||f.X.5a||!f.W.1G||f.o.5D||(f.W.1f.1n.2v.dD===!0?f.W.1f.1n.7O():f.W.1f.1n.2L())};a.3g(b,S(b,c){h.$5r[b]=a(c).27("ls-2I-4P "+e),h.$1p[b]=a("<1x>").27("ls-2I").2e(h.$5r[b]),h.$dA[b]=a("<1x>").27("ls-jZ").2e(h.$1p[b]),h.$7B[b]=a("<1x>").27("ls-2I-X-4P").2e(h.$5r[b]),h.$bm[b]=a("<1x>").27("ls-2I-X").2e(h.$7B[b]),h.7z[b]=h.$7B[b].1a(),h.$7B[b].19({5m:-h.$bm[b].4F()/2}),h.$5r[b].on("9l."+e,S(a){i(a,b)}),h.$5r[b].on("k1."+e+" f8."+e,S(c){f.W.1f.1n.5j(0),a("3D").6v("9I",!0).27("ls-9I"),a(2z).on("8O."+e,S(a){i(a,b)}),i(c,b)}),d=d.1s(h.$bm[b])}),d.on("k3."+e+"f9."+e,S(b){a(b.5e).3Q(c).1m||(f.W.1G&&f.W.1f.1n.2v.7o&&f.W.1G.3t()!==f.W.1f.1n.3t&&f.1J.2P(f.W.1f.1n,{7o:!1}),j(b))})}}},aW:{1h:S(){R.$1p=a("<1x>").19({3j:"3m"}).27("ls-1q-1p ls-fc-4P").2e(c),a("<1x>").27("ls-fc-k7").2e(R.$1p)},6f:S(){R.$1p.3Z(k8).5d(58)},3X:S(){R.$1p.21(!0,!0).5G(58)}}},f.2j={2G:"1Q",1h:S(){f.1c.3l>1&&(R.20.fd(),R.20.fe())},20:{fd:S(){f.o.g6&&a("3D").on("kc."+e,S(a){f.X.kd||f.X.ke||(37==a.ff?f.2j.2H():39==a.ff&&f.2j.1Q())})},fe:S(){"cm"in 1j&&f.o.f7&&(f.X.$66.on("f8."+e,S(a){18 b=a.67?a.67:a.9d.67;1==b.1m&&(f.1i.aP=f.1i.ak=b[0].dI)}),f.X.$66.on("9l."+e,S(a){18 b=a.67?a.67:a.9d.67;1==b.1m&&(f.1i.ak=b[0].dI),1u.3H(f.1i.aP-f.1i.ak)>45&&a.3V()}),f.X.$66.on("f9."+e,S(a){1u.3H(f.1i.aP-f.1i.ak)>45&&(f.1i.aP-f.1i.ak>0?c.4U("am"):c.4U("ap"))}))}},2H:S(){R.2G="2H",R.cx="2H",f.1w.20.9J("2H")},1Q:S(){R.2G="1Q",R.cx="1Q",f.1w.20.9J("1Q")},3k:S(){f.1J.2P(f.1w,{77:!0,4d:!1}),f.1w.2v.9H===!0&&f.1J.2P(f.1w,{9H:!1}),f.1q.2j.1U.9v("3k"),f.1w.2v.9G||1!==f.W.1G.5l()&&f.W.1f.1n.7O(),f.1w.3k()},21:S(){f.1q.2j.1U.9v("21"),f.o.aC&&f.W.1f.1n.5j(),f.1w.21()}},f.5L={1h:S(){f.X.$7r.1y(".ls-24 3J").3g(S(){18 b=a(R),c=b[0],d={};if(b.is(".ls-2Q, .ls-bg")){if(c.ac("1a")&&(d.1a=c.ac("1a")),c.ac("1b")&&(d.1b=c.ac("1b")),c.co&&(d.co=c.co),c.cn&&f.o.dE){d.cj=c.cn,d.7N=c.dM;18 e=d.cj.1E(",").kw(S(b){1K 1e(a.3T(b).1E(" ")[1])});d.4q=1u.41.st(2A,e)}b.9e("1a").9e("1b").9e("co").9e("cn"),a.4L(d)||(b.T(f.1l.1h.1R).7j=d)}b.T("23")?d.7N&&b.T("23",d.7N):b.T("23",d.7N?d.7N:c.23),b.1M("23","T:54/ky;kz,kA///kB")})},de:S(b,d){if(f.1c[b].8R!==!0){R.7C=b,d?(R.aq=d,f.1J.2P(f.X,{aO:!0}),f.1q.aW.6f()):R.aq=!1,f.X.fz&&c.19({6e:"4D"}),R.6J=[];18 g,h,e=R;f.X.$7r.1y(".ls-24:eq("+(e.7C-1)+") *").3g(S(){g=a(R),h=R;18 b=g.T(f.1l.1h.1R);if(g.is("3J")){g.T("23")&&g.1M("23",g.T("23")),b&&b.7j&&b.7j.cj&&f.o.dE&&(h.cn=b.7j.cj);18 c=h.23,d=!!(b&&b.7j&&b.7j.7N)&&b.7j.7N;d&&c!==d&&g.is(".ls-bg")&&(c=d,f.1c[e.7C].T.$2g.1M("23",c)),f.5L.6J.52([c,g])}2F"3m"!==g.19("2g-54")&&g.19("2g-54").1d("6y")!==-1&&f.5L.6J.52([g.19("2g-54").49(/6y\\((.*)\\)/)[1].2l(/"/gi,""),g])}),f.W.4l&&f.o.8N&&f.5L.6J.52([f.o.8N,a()]),R.fB||R.4A(),0===R.6J.1m?R.4r():R.3k()}2F f.X.c6&&d&&(f.1z.dQ(f.1f.2S("1Q, bg")),f.1z.1f(d))},4A:S(){2h(18 a=f.X.4A.1o(S(a,b,c){1K c.1d(a)==b}),b=a.1m,c=0;c<b;c++){18 d=4e fD;d.23=a[c]}R.fB=!0},3k:S(){f.26&&(f.1D.1s("7M","5L"),f.1D.1s("5g","5L.6X",R.7C)),R.fE=0;2h(18 b,a=R,c=S(){++a.fE==a.6J.1m&&(f.26&&f.1D.8G(),a.4r())},d=S(){f.26&&(b=R.23.9m(R.23.fF("/")+1,R.23.1m),f.1D.1s("5g","5L.fG",b)),R.dR.T("fi",R.1a),R.dR.T("fj",R.1b),c()},e=S(){f.26&&(b=R.23.9m(R.23.fF("/")+1,R.23.1m),f.1D.1s("2B","5L.kP",b)),c()},g=0;g<R.6J.1m;g++){18 h=4e fD;h.c4("71",e,!1),h.c4("47",d,!1),h.23=R.6J[g][0],h.dR=R.6J[g][1]}},4r:S(){18 b=R;R.aq?(f.1f.5C(R.7C),S c(){if(0!==f.1c[b.7C].$1f.1m)f.2E.fJ=5v(c,1k);2F{2m f.2E.fJ,f.1J.2P(f.W.1f.1B,{cy:!0}),a(".ls-2p-1N, .ls-3c-1Q, .ls-3c-2H, .ls-1U-3c-1N").19({6e:"4D"}),f.1c[b.7C].8R=!0;18 d=!(!1j.2y.7w.aN&&f.1f.2S("1Q,in,3C,bF").1m),e=!(!1j.2y.7w.bC&&f.1f.2S("1Q,in,3U,bF").1m),g=S(){f.1q.aW.3X(),f.X.c6?(f.1z.dQ(f.1f.2S("1Q, bg")),f.1z.1f(b.aq)):b.aq()};d&&e?g():f.4O.dS=bk(S(){(d||1j.2y.7w.aN)&&(e||1j.2y.7w.bC)&&(9S(f.4O.dS),2m f.4O.dS,g())},50)}}()):f.1f.5C(R.7C,!0),f.1J.2P(f.X,{aO:!1})}},f.1z={dQ:S(a){R.$av=a.1s(f.1f.2S("3i")),f.1c.1Q.T.$2o.1m&&(R.$av=R.$av.1s(f.1c.1Q.T.$2o))},5f:S(){1K!!2z.3D.7U(b)&&(f.2u.46("fM")&&c.4h("fM",f.2u.4C()),R.X(),R.2j(),R.1f(),R.2Z(),R.4j(),R.2i(),f.W.1f.1n.62&&f.o.dF&&(f.1J.fO(),f.W.1f.1n.5P(!0)),5q(f.2u.46("fP")&&c.4h("fP",f.2u.4C())))},bU:S(){a(1j).bP(1u.6b(f.X.4g)-(f.1i.4K-f.X.1b)/2)},X:S(){if(!2z.3D.7U(b))1K!1;18 h,j,d=f.X.$dV?f.X.$dV:f.1J.fS("1a"),e=f.X.43,g=f.X.$dW?d.1a()/1k*f.X.$dW:d.1a(),i=e.1W,k=0!==e.4q?e.4q:g,l="2w"===e.3K?0:e.3K,m="2w"===e.8W?0:e.8W;if(f.X.2v.6Z?c[0].1P.4q="":0!==e.4q&&(c[0].1P.4q=e.4q+"px"),k.1d("%")!==-1&&(k=g/1k*1e(k)),g-=l+m,g>k&&k>=0&&(g=k),f.o.e8&&("6z"===i||"6i"===i&&"dY"!==f.o.aJ)){18 o=(c.4p(),d.6h().1H),p=1e(d.19("4n-1H"))||0,q=1e(d.19("6R-1H-1a"))||0;c[0].1P.4q="3m",c[0].1P.3K=-(o+p+q)+"px",g=f.1i.7a||a(1j).1a()}2K(g-=e.bn,f.X.2v.6Z&&(g=f.1i.1a),i){1g"1V":f.X.2v.6Z?(f.1i.1C>e.1C?R.1C=f.1i.1b/e.1b:R.1C=f.1i.1a/e.1a,g=1u.6b(e.1a*R.1C),h=1u.6b(e.1b*R.1C)):(R.1C=g/e.1a,h=1u.6b(e.1b*R.1C));1A;1g"6z":g<f.o.7p?(R.1C=g/f.o.7p,h=1u.6b(e.1b*R.1C)):f.X.2v.6Z?f.1i.1C>e.ay/e.1b?(R.1C=f.1i.1b/e.1b,h=f.1i.1b):(R.1C=f.1i.1a/e.ay,h=e.1b*R.1C):(R.1C=1,h=e.1b);1A;1g"6i":2K(f.o.aJ.4z()){1g"4Y":h=f.1i.4K-e.bh;1A;1g"g1":h=f.1i.4K-e.bh,f.X.2v.6Z||(h-=f.X.dZ?f.X.dZ:f.X.4g);1A;1g"dY":g=c.4p().1a()-e.bn,h=c.4p().1b()-e.bh}j=g/h,j<e.1C?R.1C=g/e.ay:R.1C=h/e.e0;1A;1g"g4":1g"e1":R.1C=1,g=e.1a,h=e.1b,f.o.5B=1,b.1P.4q="3m"}R.1C=f.o.5B&&f.o.5B>0&&R.1C>f.o.5B?f.o.5B:R.1C,b.1P.1a=g+"px",b.1P.1b=h+"px",f.X.1a=g,f.X.1b=h,f.1i.6x?f.1i.7a<lg&&f.1i.7a>li?c.3N("ls-1i-is-6t").27("ls-1i-is-6r"):f.1i.7a<lk&&c.3N("ls-1i-is-6r").27("ls-1i-is-6t"):c.3N("ls-1i-is-6t ls-1i-is-6r").27("ls-1i-is-b7")},3P:S(b){2h(18 c=(""+b).1E(" "),d="",e=f.o.5B&&f.o.5B>0&&R.1C>f.o.5B?f.o.5B:R.1C,g=0,h=c.1m;g<h;g++)d+=c[g].1d("%")===-1?1u.6F(1e(c[g])*e)+"px ":c[g]+" ";1K a.3T(d)},1f:S(b){if(R.$av){f.26&&f.1D.1s("7M","1z");18 c=R,d=R.1C,e=R.$av,g=f.X.43,h=f.X.1a,i=f.X.1b,j=h/i,k=[],l=[],m=[],n=[],o=0,p=0,q="1V"===g.1W&&f.o.5B!==-1?g.1a:g.ay,r="1V"===g.1W&&f.o.5B!==-1?g.1b:g.e0;"6i"===g.1W||"6z"===g.1W||"1V"===g.1W?(o=q>0?(h-q*d)/2:0,p=r>0?(i-r*d)/2:0):(o=o<0?0:o,p=p<0?0:p);2h(18 s=0,t=e.1m;s<t;s++){18 y,z,A,u=a(e[s]),w=(e[s],u.T(f.1l.1h.1R)),x=w.2T,B="g4"===w.2V.6o,C=B?0:o,D=B?0:p,E={1a:B&&0!==x.8n?h/1k*x.8n:x.1a*d,1b:B&&0!==x.8m?i/1k*x.8m:x.1b*d,6I:x.6I*d,6B:x.6B*d,6E:x.6E*d,7b:x.7b*d,6P:1u.6F(x.6P*d),6T:1u.6F(x.6T*d),6S:1u.6F(x.6S*d),6U:1u.6F(x.6U*d),3P:R.3P(x.3P)},F={3K:x.3K*d,5m:x.5m*d},G={},H={3P:E.3P};if(B&&(x.8m||x.8n)&&w.is.gf&&(x.8m&&!x.8n&&(E.1a=x.1a*(E.1b/x.1b)),x.8n&&!x.8m&&(E.1b=x.1b*(E.1a/x.1a))),("4N"==1t x.1a&&x.1a<0||"2w"==x.1a)&&f.26&&f.1D.1s("2B","1z.1a",[s+1,x.1a]),("4N"==1t x.1b&&x.1b<0||"2w"==x.1b)&&f.26&&f.1D.1s("2B","1z.1b",[s+1,x.1b]),w.is.9i&&(E.6q=x.6q*d,f.1i.6x&&E.6q<w.4f.7L?E.6q=w.4f.7L:E.6q<w.4f.8k&&(E.6q=w.4f.8k),A=E.6q/x.6q,E.6q+="px","4Y"!==x.c0&&(E.c0=3q(x.c0)*A+"px"),"4Y"!==x.bY&&(E.bY=3q(x.bY)*A+"px")),w.is.5I||w.is.2o)if(w.is.5I){18 I=f.1c[w.is.aQ].T.bT;2K(y="2a"!=1t I&&"lm"!==I?I:f.o.aF,y.2l("1k% 1k%","e3"),y){1g"2w":1A;1g"aE":x.1C<j?(E.1a=h,E.1b=E.1a/x.1C):(E.1b=i,E.1a=E.1b*x.1C);1A;1g"g9":x.1C<j?(E.1b=i,E.1a=E.1b*x.1C):(E.1a=h,E.1b=E.1a/x.1C);1A;1g"e3":E.1a=h,E.1b=i}E.1a=1u.6b(E.1a),E.1b=1u.6b(E.1b);18 J=f.1c[w.is.aQ].T.bX;2K(z="2a"!=1t J?J.1E(" "):f.o.gr.1E(" "),z[0]){1g"1H":E.x=0;1A;1g"7P":E.x=(f.X.1a-E.1a)/2;1A;1g"3L":E.x=f.X.1a-E.1a;1A;5k:z[0].1d("%")!==-1?E.x=(f.X.1a-E.1a)/1k*1e(z[0]):E.x=1e(z[0])}if("2a"!=1t z[1])2K(z[1]){1g"1Y":E.y=0;1A;1g"7P":E.y=(f.X.1b-E.1b)/2;1A;1g"1U":E.y=f.X.1b-E.1b;1A;5k:z[1].1d("%")!==-1?E.y=(f.X.1b-E.1b)/1k*1e(z[1]):E.y=1e(z[1])}E.3y="4R("+E.x+"px) 4Z("+E.y+"px)",E["-ms-3y"]="4R("+E.x+"px) 4Z("+E.y+"px)",E["-5o-3y"]="4R("+E.x+"px) 4Z("+E.y+"px)"}2F w.is.2o&&(x.1C<j?(E.1a=h,E.1b=E.1a/x.1C):(E.1b=i,E.1a=E.1b*x.1C),E.x=(f.X.1a-E.1a)/2,E.y=(f.X.1b-E.1b)/2,E.1a=1u.6b(E.1a),E.1b=1u.6b(E.1b),E.3y="4R("+E.x+"px) 4Z("+E.y+"px)",E["-ms-3y"]="4R("+E.x+"px) 4Z("+E.y+"px)",E["-5o-3y"]="4R("+E.x+"px) 4Z("+E.y+"px)");2F{if(w.2R.6i)2K(w.2R.bS){5k:1g"aE":x.1C<j?(E.1a=h,E.1b=E.1a/x.1C):(E.1b=i,E.1a=E.1b*x.1C);1A;1g"g9":x.1C>j?(E.1a=h,E.1b=E.1a/x.1C):(E.1b=i,E.1a=E.1b*x.1C)}E.4w=E.1a+E.6I+E.6E+E.6P+E.6S,E.4F=E.1b+E.6B+E.7b+E.6T+E.6U,F.1a=G.1a=E.4w,F.1b=G.1b=E.4F,x.1H.1d("%")!=-1?"1k%"===x.1H?0===C?E.1H=f.X.1a/1k*1e(x.1H)-E.4w:E.1H=C+q*d/1k*1e(x.1H)-E.4w:"0%"===x.1H?0===C?E.1H=0:E.1H=C:0===C?E.1H=f.X.1a/1k*1e(x.1H)-E.4w/2:E.1H=C+q*d/1k*1e(x.1H)-E.4w/2:E.1H=C+1e(x.1H)*d,F.1H=E.1H,x.1Y.1d("%")!=-1?"1k%"===x.1Y?0===D?E.1Y=f.X.1b/1k*1e(x.1Y)-E.4F:E.1Y=D+r*d/1k*1e(x.1Y)-E.4F:"0%"===x.1Y?0===D?E.1Y=0:E.1Y=D+0:0===D?E.1Y=f.X.1b/1k*1e(x.1Y)-E.4F/2:E.1Y=D+r*d/1k*1e(x.1Y)-E.4F/2:E.1Y=D+1e(x.1Y)*d,F.1Y=E.1Y}w.1V=E,k[s]=E,w.is.5I||w.is.2o||(w.2V.d0.1V=F,l[s]=F,m[s]=G,n[s]=H)}2h(18 K=0,L=k.1m;K<L;K++){18 M=a(e[K]),N=M.T(f.1l.1h.1R);M.19(k[K]),N.is.5I||N.is.2o?(N.is.5I||N.is.2o)&&(N.1X.$bB.19({1a:f.X.1a,1b:f.X.1b}),N.1X.$8e.19({1a:f.X.1a,1b:f.X.1b})):(M.1y(".1E-lt").19(n[K]),c.2Y(M,N,l[K],m[K]))}"2a"!=1t b&&b(),f.26&&f.1D.8G("1z")}},2Y:S(a,b,c,d){c&&b.1X.$1N.19(c),d&&b.1v.1O&&b.1X.$7i.19(d),g.3a.20(b.1X.$1N[0],{2k:!1,19:{2r:b.2r.2Q*f.1z.1C}}),b.1v.1O&&g.3a.20(b.1X.$7i[0],{2k:!1,19:{2r:b.2r.1v*f.1z.1C}}),b.1r.1O&&g.3a.20(a[0],{2k:!1,19:{2r:b.2r.1r*f.1z.1C}}),b.1Z.5p&&g.3a.20(b.1Z.5p,{2k:!1,19:{2r:b.2r.4Q*f.1z.1C}}),b.2t.5p&&g.3a.20(b.2t.5p,{2k:!1,19:{2r:b.2r.4Q*f.1z.1C}}),b.1B.1O&&g.3a.20(b.1X.$8g[0],{2k:!1,19:{2r:b.2r.1B*f.1z.1C}})},7Y:S(a,b,c,d){if("5F"==1t c.x){2h(18 e=[],g=0;g<c.x.1m;g++)"5b"==1t c.x[g]?e[g]=R.aA(a,c.x[g],"gg"):e[g]=c.x[g]*f.1z.1C;b.6m.x=e}2F"5b"==1t c.x?b.x=R.aA(a,c.x,"gg"):"2a"!=1t c.x&&(b.x=c.x*f.1z.1C);if("5F"==1t c.y){2h(18 h=[],i=0;i<c.y.1m;i++)"5b"==1t c.y[i]?h[i]=R.aA(a,c.y[i],"gh"):h[i]=c.y[i]*f.1z.1C;b.6m.y=h}2F"5b"==1t c.y?b.y=R.aA(a,c.y,"gh"):"2a"!=1t c.y&&(b.y=c.y*f.1z.1C);if(d&&(b=d),"5F"==1t c.31){2h(18 j=[],k=0;k<c.31.1m;k++)j[k]=f.1J.2O.31(c.31[k],a);b.6m.31=j}2F"5b"==1t c.31&&(b.31=f.1J.2O.31(c.31,a))},97:S(b,c){"2a"!=1t c.1a&&(a.7G(c.1a)?b.1a=1e(c.1a)*f.1z.1C:"5b"==1t c.1a&&c.1a.1d("%")!==-1&&(b.1a=f.X.1a/1k*1e(c.1a))),"2a"!=1t c.1b&&(a.7G(c.1b)?b.1b=1e(c.1b)*f.1z.1C:"5b"==1t c.1b&&c.1b.1d("%")!==-1&&(b.1b=f.X.1b/1k*1e(c.1b))),c.3P&&(b.3P=f.1z.3P(c.3P))},2b:S(b,c,d){c=a.3T(c.2l("gk(","").2l(")",""));2h(18 k,e=b.T(f.1l.1h.1R).1V,g=1u.6F(e.4w),h=1u.6F(e.4F),i=c.1d(",")===-1?c.1E(" "):c.1E(","),j="",l=0;l<i.1m;l++)if(i[l].1d("%")!==-1)2K(l){1g 0:j+=1e(h/1k*1e(i[l])*1k)/1k+"px ";1A;1g 1:j+=d?1e(1k*(g-g/1k*1e(i[l])))/1k+"px ":1e(g/1k*1e(i[l])*1k)/1k+"px ";1A;1g 2:j+=d?1e(1k*(h-h/1k*1e(i[l])))/1k+"px ":1e(h/1k*1e(i[l])*1k)/1k+"px ";1A;1g 3:j+=1e(g/1k*1e(i[l])*1k)/1k+"px"}2F 2K(k=1e(i[l])*f.1z.1C,l){1g 0:j+=k+"px ";1A;1g 1:j+=d?g-k+" ":k+"px ";1A;1g 2:j+=d?h-k+"px ":k+"px ";1A;1g 3:j+=k+"px"}1K"gk("+j+")"},aA:S(a,b,c){18 d=0,e=a.T(f.1l.1h.1R),g=e.2T,h=e.1V,i=e.2V.d0.1V;if(g&&h&&i)2K(b){1g"1H":d=g.1H.1d("%")!=-1?"1k%"===g.1H?-h.1H-h.4w-i.3K:-1e(g.1H)/1k*f.X.1a-h.4w/2-i.3K:-h.1H-h.4w-i.3K;1A;1g"3L":d=g.1H.1d("%")!=-1?"1k%"===g.1H?f.X.1a-h.1H-i.3K:(1-1e(g.1H)/1k)*f.X.1a+h.4w/2-i.3K:f.X.1a-h.1H-i.3K;1A;1g"1Y":d=g.1Y.1d("%")!=-1?"1k%"===g.1Y?-h.1Y-h.4F-i.5m:-1e(g.1Y)/1k*f.X.1b-h.4F/2-i.5m:-h.1Y-h.4F-i.5m;1A;1g"1U":d=g.1Y.1d("%")!=-1?"1k%"===g.1Y?f.X.1b-h.1Y-i.5m:(1-1e(g.1Y)/1k)*f.X.1b+h.4F/2-i.5m:f.X.1b-h.1Y-i.5m;1A;1g"1a":d=h.4w;1A;1g"-1a":d=-h.4w;1A;1g"1b":d=h.4F;1A;1g"-1b":d=-h.4F;1A;5k:d=b.1d("%")!==-1?h["cZ"+c]/1k*1e(b):b.1d("gl")!==-1?1e(b.1E("gl")[0])/1k*f.X.1a:b.1d("sh")!==-1?1e(b.1E("lw")[0])/1k*f.X.1b:b.1d("lw")!==-1?h.4w/1k*1e(b.1E("lw")[0]):b.1d("lh")!==-1?h.4F/1k*1e(b.1E("lj")[0]):1e(b)*f.1z.1C}1K d},2j:S(){"8E"==f.o.6l&&f.1q.2j.1U.4A.1z()},4j:S(){f.1q.4j.6f&&f.1q.4j.6f(),f.1q.4j.$1p&&f.1q.4j.1z()},2Z:S(){f.2Z.$1p&&f.2Z.1z()},2i:S(){if(f.1q.2i.2I.$5r.1m>0)2h(18 a=0,b=f.1q.2i.2I.$5r.1m;a<b;a++)f.1q.2i.2I.ai[a]=f.1q.2i.2I.$5r[a].1a(),f.1q.2i.2I.dB[a]=f.1q.2i.2I.$1p[a].1a()}},f.W={4l:!0,3k:S(){1K!!2z.3D.7U(b)&&(f.1i.2f.gn=f.1i.2f.2G,"8E"==f.o.6l&&(f.1q.2j.1U.4A.6k(),"cm"in 1j||f.1q.2j.1U.4A.2f()),R.1f.1F.go(),5q R.24.1h())},24:{$1N:a(),1h:S(){18 b,c;if(f.1J.2P(f.X,{8f:!0}),f.W.1f.1B.3r(),f.X.$63.3M(\'.ls-1B[T-1B="3i"]\').3g(S(){a(R).1y(".ls-2Q").T(f.1l.1h.1R).2V.9n===f.1c.2x.1I&&a(R).1M("T-1B","lG")}),f.W.3h=f.1c.2x,f.W.29=f.1c.1Q,f.W.3x=4e g.6Q({4d:!0,4r:S(){f.W.24.4r()}}),f.W.4l){if("2a"!=1t f.W.29.T.$2g){18 d=f.W.29.T.$2g.T(f.1l.1h.1R),e=d.2s.6u?d.2s.3u.2N:1,h=d.2s.6u?d.2s.3u.2c:0,i=f.W.29.1o.3u||"3m";f.W.3x.20(f.W.29.T.$2g[0],{"-5o-1o":i,1o:i},0),f.W.3x.3Y(f.W.29.T.$2g.3Q(".ls-bg-5C")[0],f.o.bW,{2k:!1,19:{2N:e,2c:h,2W:0,3j:"5n"}},{2k:!1,19:{2W:1}},0)}R.3k(!0)}2F"2a"==1t aG&&"2a"==1t bV?(R.3k(!0),f.26&&f.1D.1s("2B","6V.lN",f.W.29.1I)):"2a"==1t f.W.3h.T.$2g&&"2a"==1t f.W.29.T.$2g&&"5O"==f.W.3h.T.2X&&"5O"==f.W.29.T.2X?R.3k(!0):("x"===f.o.b0?f.1i.$aI.27("ls-gv-4J"):"y"===f.o.b0?f.1i.$aI.27("ls-gw-4J"):f.o.b0===!0&&f.1i.$aI.27("ls-4X-4J"),"2a"!=1t f.W.3h.T.$2g&&(b=f.W.3h.T.$2g.3Q(".ls-bg-5C")[0].gx,c=f.W.3h.T.$2g.T(f.1l.1h.1R),c.1V.1o=f.W.3h.T.$2g[0].1P.1o,c.1V.82="2a"!=1t b?" 3R("+b.2c+"80)":" 3R(lU)",c.1V.7W="2a"!=1t b?" 2N("+b.4v+")":" 2N(1)"),f.W.24.$1N=a("<1x>").27("ls-24-22-1N").19({1a:f.X.1a,1b:f.X.1b}),R.bE.gC())},bE:{gC:S(){f.W.24.4Y.bE.gD()}},3k:S(a){18 b,d=!(!f.1c.2x.1I||!f.1c.2x.T.$2o.1m),e=!(!f.1c.1Q.1I||!f.1c.1Q.T.$2o.1m);if(!f.1w.8H&&f.2u.46("gE")&&c.4h("gE",f.2u.4C()),!a&&("2a"!=1t f.W.29.T.ae&&f.W.3x.1L(f.W.29.T.ae),f.26&&f.1D.4m.ae&&f.W.3x.1L(f.1D.4m.ae),f.W.1f.1n.73>.25)){18 h=f.W.3x.1L()/(.75+f.W.1f.1n.73);h=h<.5?.5:h,f.W.3x.1L(h)}18 l,i=f.W.3x.1L()/f.W.3x.5l(),j=i,k=f.W.29.T.af;k>0?k=0:k<0&&1u.3H(k)>i&&(k=-i),f.W.29.T.cv=k,l=f.W.4l?f.o.bW+.m3:(j+k)*f.W.3x.5l(),(d||e)&&f.W.1S.gH(f.W.4l,!(!d||!e)),f.W.3x.gI(S(){!f.1w.8H&&f.2u.46("gJ")&&c.4h("gJ",f.2u.4C()),f.1w.4S.6k||f.W.1f.1n.gK(),f.1S.21(),f.1c.20.fq(),f.o.fb&&(2z.7D.9h=f.1c[f.1c.2x.1I].T.4y||"m8-4y-m9"),f.1w.3k(),!f.W.4l&&f.1c.2H.1I&&f.1c.2H.T.$2o.1m&&!f.1c.2H.T.$2o.T(f.1l.1h.1R).2J.ed&&(f.1c.2H.T.$2o.5w("9X"),f.1c.2H.T.$2o.T(f.1l.1h.1R).1X.$8x.19({3j:"3m"})),f.1w.4S.6k||f.1c.1Q.T.$2o.1m&&!f.1c.1Q.T.$2o.T(f.1l.1h.1R).2J.ee&&(f.1c.1Q.T.$2o.5w("dl"),f.1c.1Q.T.$2o.T(f.1l.1h.1R).2J.ee=!0),f.W.4l=!1},[],R,l),f.W.3x.2L(),"2a"!=1t f.W.3h.T&&"2a"!=1t f.W.3h.T.$2g&&(b=f.W.3h.T.$2g.T(f.1l.1h.1R),f.2E.gN=5v(S(){2m f.2E.gN,f.W.3h.T.$2g.3Q(".ls-bg-5C").3X(),b.2s.6u&&g.3a.20(f.W.3h.T.$2g[0],{2k:!1,19:b.2s.3u})},5))},4r:S(){18 a;"2a"!=1t f.W.29.T.$2g&&f.W.29.T.$2g.3Q(".ls-bg-5C").6f(),"5O"!==f.W.29.T.2X?f.X.$66.19("2g-4i",f.W.29.T.2X):f.X.$66.19("2g-4i",f.o.8J),f.o.mf||f.1i.$aI.3N("ls-gv-4J ls-gw-4J ls-4X-4J"),R.$1N&&(R.$1N.55("").5T(),R.$1N=!1),f.1q.2j.1U.b8.20.3i(),f.o.5z>0&&(f.1w.5R("dd")?f.1w.5z.6N(f.W.29.1I)&&(f.2j.21(),f.1J.2P(f.1w,{9H:!0}),f.o.e5&&(f.1w.cl=1)):f.1w.5z.20()),f.1J.2P(f.X,{8f:!1,8A:!1}),!f.1w.8H&&f.2u.46("gO")&&c.4h("gO",f.2u.4C()),f.1w.8H=!1,f.1w.4S.6k!==!1&&f.2j.cx?("2a"!=1t f.W.3h.T&&"2a"!=1t f.W.3h.T.$2g&&(a=f.W.3h.T.$2g.T(f.1l.1h.1R),f.W.3h.T.$2g.3Q(".ls-bg-5C").3X(),a.2s.6u&&g.3a.20(f.W.3h.T.$2g[0],{2k:!1,19:a.2s.3u})),f.1w.78(f.1w.2S.9B(f.2j.cx),!0)):f.5L.de(f.1c.1Q.1I)},4Y:{bE:{gD:S(){if(f.o.6V)1K 5q f.W.24.4Y.ef(f.o.6V.1W,f.o.6V.mj);18 a,b,c=!!f.W.29.T.7H&&f.W.29.T.7H.ei().1E(",");f.1i.ap&&f.o.dG?(f.1i.ap=!1,R.22("2d","1")):f.1i.am&&f.o.dG?(f.1i.am=!1,R.22("2d","1")):f.1c.1Q.T.$2g||c&&(!c||c.1d("1")!=-1||c.1d("2")!=-1||c.1d("3")!=-1||c.1d("4")!=-1)?f.70.gR()&&(f.W.29.T.7J||f.W.29.T.7u)?f.W.29.T.7J&&f.W.29.T.7u?(a=1u.3A(2*1u.2D()),b=[["3d",f.W.29.T.7J],["gS",f.W.29.T.7u]],R.22(b[a][0],b[a][1])):f.W.29.T.7J?R.22("3d",f.W.29.T.7J):R.22("gS",f.W.29.T.7u):f.W.29.T.7H&&f.W.29.T.7A?(a=1u.3A(2*1u.2D()),b=[["2d",f.W.29.T.7H],["gT",f.W.29.T.7A]],R.22(b[a][0],b[a][1])):f.W.29.T.7H?R.22("2d",f.W.29.T.7H):f.W.29.T.7A?R.22("gT",f.W.29.T.7A):R.22("2d","1"):R.22("2d","5")},22:S(a,b){f.26&&f.1D.1s("7M","6V.6X"),b+="";18 e,g,c=a.1d("eg")==-1?f.t:f.ct,d="3d";if(a.1d("2d")!=-1&&(d="2d"),b.1d("dv")!=-1)g=c["t"+d].1m-1,e="dv";2F if(b.1d("5f")!=-1)g=1u.3A(1u.2D()*f.1J.gV(c["t"+d])),e="2D 3u 5f";2F{18 h=b.1E(","),i=h.1m;g=1e(h[1u.3A(1u.2D()*i)])-1,e="2D 3u mq"}"2a"==1t c["t"+d][g]&&(f.26&&f.1D.1s("2B","6V.mr",[d.eh()+(a.1d("eg")===-1?"":" (gX)"),g+1]),c=f.t,a=d="2d",g=0),f.26&&f.1D.1s("5g","6V.6X",[d.eh()+(a.1d("eg")===-1?"":" (gX)"),g+1,c["t"+d][g].aL]),f.W.24.4Y.ef(d,c["t"+d][g])}},ef:S(b,c){18 i,j,k,l,d=a.5x(!0,{6O:1,6M:1},c),e=1t d.6O,h=1t d.6M,m=[],n=f.2j.2G,o=0,p=0,q=!!f.W.3h.T.$2g&&f.1J.ag(f.W.3h.T.$2g),r=!!f.W.29.T.$2g&&f.1J.ag(f.W.29.T.$2g),s=f.o.5D&&"9o"===f.1i.2f.2G?"2C":"3u";2K(e){1g"4N":e=d.6O;1A;1g"5b":e=1u.3A(1u.2D()*(1e(d.6O.1E(",")[1])-1e(d.6O.1E(",")[0])+1))+1e(d.6O.1E(",")[0]);1A;5k:e=1u.3A(1u.2D()*(d.6O[1]-d.6O[0]+1))+d.6O[0]}2K(h){1g"4N":h=d.6M;1A;1g"5b":h=1u.3A(1u.2D()*(1e(d.6M.1E(",")[1])-1e(d.6M.1E(",")[0])+1))+1e(d.6M.1E(",")[0]);1A;5k:h=1u.3A(1u.2D()*(d.6M[1]-d.6M[0]+1))+d.6M[0]}if(f.1i.6x&&f.o.fo?(e>=15?e=7:e>=5?e=4:e>=4?e=3:e>2&&(e=2),h>=15?h=7:h>=5?h=4:h>=4?h=3:h>2&&(h=2),h>2&&e>2&&(h=2,e>4&&(e=4))):(e=e>35?35:e,h=h>35?35:h),f.26&&!f.o.6V&&(f.1D.1s("5g","6V.5s",[[e,h],e*h]),f.1D.8G()),i=1u.3A(f.X.1a/e),j=1u.3A(f.X.1b/h),k=f.X.1a-i*e,l=f.X.1b-j*h,"2H"==n){18 t={2D:"2D",8a:"3o",3o:"8a","8M-8a":"8M-3o","8M-3o":"8M-8a"};d.6d&&d.6d.3G&&(d.6d.3G=t[d.6d.3G]),a.3g(["4o","6G","6c"],S(a,b){if(d[b]&&d[b].22){18 c=d[b].22;c.5J&&1u.3H(c.5J)>44&&(c.5J*=-1),c.5Y&&1u.3H(c.5Y)>44&&(c.5Y*=-1),c.3R&&(c.3R*=-1)}})}2h(18 u=0;u<e*h;u++)m.52(u);2K(d.6d.3G){1g"3o":m.3o();1A;1g"8M-8a":m=f.1J.ek(h,e,"8a");1A;1g"8M-3o":m=f.1J.ek(h,e,"3o");1A;1g"2D":m=f.1J.db(m)}if("5O"===f.W.3h.T.2X&&(f.W.3h.T.2X=f.o.8J),"5O"===f.W.29.T.2X&&(f.W.29.T.2X=f.o.8J),"2d"==b){18 v=d.aL.4z().1d("mJ")!=-1,w=d.aL.4z().1d("mK")!=-1;R.$7y=a("<1x>").27("ls-mM").2e(f.W.24.$1N),R.$el=a("<1x>").27("ls-mO").2e(f.W.24.$1N)}2h(18 x=0;x<e*h;x++){18 B,C,D,E,H,I,J,y=(x+1)%e===0?k:0,z=x>(h-1)*e-1?l:0,A=a("<1x>").27("ls-24-22-6d").19({1a:i+y,1b:j+z}).T("1P",{1a:i+y,1b:j+z}).2e(f.W.24.$1N);m[x]==e*h-1&&S(){f.W.24.4r()};if(o=x%e===0?o+1:o,p=x%e===0?1:p+1,"3d"==b){A.27("ls-3d-4P");18 N,O,P,Q,U,V,Y,L=i+y,M=j+z,Z=4e g.6Q;Y=1u.3H(1u.3H(p-e/2-.5)-e/2-.5)*1u.3H(1u.3H(o-h/2-.5)-h/2-.5),A.19({6Y:Y}),N="h7"==d.4o.2G?1u.3H(d.4o.22.5Y)>90&&"h8"!=d.6d.h9?1u.3A(L/7)+y:L:1u.3H(d.4o.22.5J)>90&&"h8"!=d.6d.h9?1u.3A(M/7)+z:M,O=L/2,P=M/2,Q=N/2,R.6H("ls-3d-6a",A,0,0,0,0,-Q,0,0,O+"px "+P+"px hb"),R.6H("ls-3d-hc",A.1y(".ls-3d-6a"),L,M,0,0,Q,0,0),"n2"==d.4o.2G&&1u.3H(d.4o.22.5J)>90?R.6H("ls-3d-aR",A.1y(".ls-3d-6a"),L,M,0,0,-Q,cC,0):R.6H("ls-3d-aR",A.1y(".ls-3d-6a"),L,M,0,0,-Q,0,cC),R.6H("ls-3d-1H",A.1y(".ls-3d-6a"),N,M,-Q,0,0,0,-90),R.6H("ls-3d-3L",A.1y(".ls-3d-6a"),N,M,L-Q,0,0,0,90),R.6H("ls-3d-1Y",A.1y(".ls-3d-6a"),L,N,0,-Q,0,90,0),R.6H("ls-3d-1U",A.1y(".ls-3d-6a"),L,N,0,M-Q,0,-90,0),B=A.1y(".ls-3d-hc"),C="h7"==d.4o.2G?1u.3H(d.4o.22.5Y)>90?A.1y(".ls-3d-aR"):d.4o.22.5Y>0?A.1y(".ls-3d-1H"):A.1y(".ls-3d-3L"):1u.3H(d.4o.22.5J)>90?A.1y(".ls-3d-aR"):d.4o.22.5J>0?A.1y(".ls-3d-1U"):A.1y(".ls-3d-1Y"),U=m[x]*d.6d.3Z,V=f.W.24.$1N.1y(".ls-3d-4P:eq( "+x+" ) .ls-3d-6a"),d.6G&&d.6G.22?(d.6G.22.3Z=d.6G.22.3Z?(d.6G.22.3Z+U)/3z:U/3z,Z.2C(V[0],d.6G.1L/3z,f.1J.2O.22(d.6G.22,d.6G.4I))):d.4o.22.3Z=d.4o.22.3Z?(d.4o.22.3Z+U)/3z:U/3z,Z.2C(V[0],d.4o.1L/3z,f.1J.2O.22(d.4o.22,d.4o.4I)),d.6c&&(d.6c.22||(d.6c.22={}),Z.2C(V[0],d.6c.1L/3z,f.1J.2O.22(d.6c.22,d.6c.4I,"6c"))),f.W.3x.1s(Z,0)}2F{18 ea,fa,ga,ha,ia,ja,ka,la,$="2w",3W="2w",aa="2w",ba="2w",ca=1,da=1,ma={};2K("2D"==d.22.2G?(ea=["1Y","1U","3L","1H"],fa=ea[1u.3A(1u.2D()*ea.1m)]):fa=d.22.2G,d.aL.4z().1d("hh")!=-1&&x%2===0&&(n="2H"==n?"1Q":"2H"),"2H"==n&&(fa={1Y:"1U",1U:"1Y",1H:"3L",3L:"1H",em:"en",eo:"ep",ep:"eo",en:"em"}[fa]),fa){1g"1Y":$=aa=-A.T("1P").1b,3W=ba=0;1A;1g"1U":$=aa=A.T("1P").1b,3W=ba=0;1A;1g"1H":$=aa=0,3W=ba=-A.T("1P").1a;1A;1g"3L":$=aa=0,3W=ba=A.T("1P").1a;1A;1g"em":$=A.T("1P").1b,aa=0,3W=A.T("1P").1a,ba=0;1A;1g"eo":$=A.T("1P").1b,aa=0,3W=-A.T("1P").1a,ba=0;1A;1g"ep":$=-A.T("1P").1b,aa=0,3W=A.T("1P").1a,ba=0;1A;1g"en":$=-A.T("1P").1b,aa=0,3W=-A.T("1P").1a,ba=0}2K(R.8U=d.22.2N?d.22.2N:1,1==v&&1!=R.8U&&($/=2,aa/=2,3W/=2,ba/=2),d.22.1W){1g"fw":$=aa=3W=ba=0,ca=0,da=1;1A;1g"nn":ca=0,da=1,1==R.8U&&(aa=ba=0)}if((d.22.3R||d.22.5J||d.22.5Y||1!=R.8U)&&"24"!=d.22.1W?A.19({4X:"4D"}):A.19({4X:"4J"}),1==v?R.$7y.19({4X:"4D"}):R.$7y.19({4X:"4J"}),w===!0||"24"==d.22.1W||v===!0?(ga=A.2e(R.$7y),ha=A.cq().2e(R.$el),B=a("<1x>").27("ls-hm").2e(ga)):ha=A.2e(R.$el),C=a("<1x>").27("ls-hn").2e(ha),ia=m[x]*d.6d.3Z/3z,ja=d.22.3R?d.22.3R:0,ka=d.22.5J?d.22.5J:0,la=d.22.5Y?d.22.5Y:0,"2H"==n&&(ja=-ja,ka=-ka,la=-la),f.W.3x.3Y(C[0],d.22.1L/3z,{4E:!1,2k:!1,19:{x:-3W,y:-$,3j:"5n",2W:ca,2c:ja,3w:ka,3v:la,2N:R.8U}},{2k:!1,19:{x:0,y:0,2W:da,2c:0,3w:0,3v:0,2N:1},2q:f.1J.2O.4I(d.22.4I)},ia),1==w&&("2a"==1t f.W.29.T.$2g||"2a"!=1t f.W.29.T.$2g&&(f.W.29.T.$2g.1M("23").4z().1d("cQ")!=-1||f.W.29.T.$2g.1a()<f.X.1a||f.W.29.T.$2g.1b()<f.X.1b))&&(ma.2W=0),("24"==d.22.1W||1==v)&&d.aL.4z().1d("hh")==-1){18 na=0;0!==ja&&(na=-ja),ma.x=ba,ma.y=aa,ma.2c=na,ma.2N=R.8U,ma.2W=ca}"2a"!=1t B&&f.W.3x.2C(B[0],d.22.1L/3z,{2k:!1,19:ma,2q:f.1J.2O.4I(d.22.4I)},ia)}D=x%e*i,E=1u.3A(x/e)*j,"2a"!=1t f.W.3h.T.$2g&&(H=f.W.3h.T.$2g.T(f.1l.1h.1R),"3d"===b||"2d"===b&&(w===!0||"24"===d.22.1W||v===!0)?B.9r(a("<3J>").1M("23",q).19({1a:H.1V.1a,1b:H.1V.1b,"-5o-1o":H.1V.1o,1o:H.1V.1o,"-ms-3y":"4R("+(H.1V.x-D)+"px) 4Z("+(H.1V.y-E)+"px)"+H.1V.82+H.1V.7W,"-5o-3y":"4R("+(H.1V.x-D)+"px) 4Z("+(H.1V.y-E)+"px)"+H.1V.82+H.1V.7W,3y:"4R("+(H.1V.x-D)+"px) 4Z("+(H.1V.y-E)+"px)"+H.1V.82+H.1V.7W})):0===R.$7y.3M().1m&&R.$7y.19("2g-4i",f.W.3h.T.2X).9r(a("<3J>").1M("23",q).19({1a:H.1V.1a,1b:H.1V.1b,"-5o-1o":H.1V.1o,1o:H.1V.1o,"-ms-3y":"4R("+H.1V.x+"px) 4Z("+H.1V.y+"px)"+H.1V.82+H.1V.7W,"-5o-3y":"4R("+H.1V.x+"px) 4Z("+H.1V.y+"px)"+H.1V.82+H.1V.7W,3y:"4R("+H.1V.x+"px) 4Z("+H.1V.y+"px)"+H.1V.82+H.1V.7W}))),"5O"===f.W.3h.T.2X||f.W.3h.T.$2o.1m||("3d"===b||"2d"===b&&(w===!0||"24"===d.22.1W||v===!0)?B.19("2g-4i",f.W.3h.T.2X):0===R.$7y.3M().1m&&R.$7y.19("2g-4i",f.W.3h.T.2X)),"2a"!=1t f.W.29.T.$2g&&(I=f.W.29.T.$2g.T(f.1l.1h.1R),J=I.2s[s],C.9r(a("<3J>").1M("23",r).19({1a:I.1V.1a,1b:I.1V.1b,"-5o-1o":f.W.29.1o.3u||"3m",1o:f.W.29.1o.3u||"3m","-ms-3y":"4R("+(I.1V.x-D)+"px) 4Z("+(I.1V.y-E)+"px) 3R("+J.2c+"80) 2N("+J.2N+")","-5o-3y":"4R("+(I.1V.x-D)+"px) 4Z("+(I.1V.y-E)+"px) 3R("+J.2c+"80) 2N("+J.2N+")",3y:"4R("+(I.1V.x-D)+"px) 4Z("+(I.1V.y-E)+"px) 3R("+J.2c+"80) 2N("+J.2N+")"}))),"5O"===f.W.29.T.2X||f.W.29.T.$2o.1m||C.19("2g-4i",f.W.29.T.2X)}f.W.24.$1N.aH(f.X.$63),f.W.24.3k()},6H:S(b,c,d,e,f,g,h,i,j,k){18 l="nt( "+f+"px, "+g+"px, "+h+"px)";0!==i&&(l+="5J( "+i+"80)"),0!==j&&(l+="5Y( "+j+"80)");18 m={1a:d,1b:e,3y:l,"-ms-3y":l,"-5o-3y":l};k&&(m["3y-er"]=k,m["-ms-3y-er"]=k,m["-5o-3y-er"]=k),a("<1x>").27(b).19(m).2e(c)}}},1f:{in:{88:S(a){18 b=a.T(f.1l.1h.1R);b.1r.1O&&f.W.1f.1r.7K(a)},4r:S(a){18 b=a.T(f.1l.1h.1R);b.is.cF&&(f.1i.6x&&(c.4u("ls-1i-is-6t")&&b.1X.$8e.4u("ls-3X-on-6t")||c.4u("ls-1i-is-6r")&&b.1X.$8e.4u("ls-3X-on-6r"))||(2A===b.2R.5E&&f.o.fL||b.2R.5E)&&a.1y(".ls-69").5w("7R"))}},1F:{go:S(){if(f.W.56){if(f.W.1G){18 c,d,b=4e g.6Q({4d:!0,hp:!0}),e=[],i=1k,j=f.1f.2S("2x, in, 3B, 3i").1s(f.1f.2S("2x, 1F, 3B, 3i")),k=f.1f.2S("2x, 1F, bl, 3i"),l=f.1f.2S("2x, 1F, 3i"),m=a().1s(j).1s(k),n=S(a){b.1s(a,i-a.1L()*a.3t())};m.3g(S(){18 b=a(R),g=b.T(f.1l.1h.1R);if(g.1v.3I&&(f.W.1G.5T(g.1v.3I),g.1v.3I.2L()),g.is.3B){c=[g.1X.$1N[0]],g.1X.$8u&&(c=c.es(g.1X.$8u[0])),g.1Z.5p&&(c=c.es(g.1Z.5p));2h(18 h=0;h<c.1m;h++)e=e.es(f.W.1G.nx(c[h],!0));2h(18 i=0;i<e.1m;i++)e[i].1L&&0!==e[i].1L()&&(d=e[i],n(d))}}),l.3g(S(){18 b=a(R),c=b.T(f.1l.1h.1R);c.4S.3r=!0}),b.2L().ny(i),f.W.1G.21().74()}f.W.56.2L()}f.X.$63.1y(".ls-4W").19({3j:"3m"})},88:S(a){},4r:S(a){18 b=a.T(f.1l.1h.1R);(f.X.2v.8A||b.2V.9n!==f.1c.2x.1I)&&f.W.1f.3r(a,b),b.1r.1O&&f.W.1f.1r.ax(a)}},3r:S(a,b){b.1v.3I&&(b.1v.3I.21().74(),2m b.1v.3I,g.3a.20(b.1X.$7i[0],b.3r.cR)),g.3a.20(b.1X.$1N[0],b.3r.cS),g.3a.20(a[0],{"-5o-1o":"3m",1o:"3m"}),b.4S.8i&&(b.3F.2D={},b.3s.2D={},f.1f.8i.T(a)),b.4S.3r=!1},1n:{62:!1,5P:S(b){18 d,e,h,i,j=b?"2x":"1Q";f.W.8Q=j,f.W.1f.1n.62=!1,f.W.1f.1n.ht(),f.W.1G&&(f.W.1G.5j().3t(0).5V().74(!0),f.W.1G=2A),f.W.1G=4e g.6Q({4d:!0,88:S(){f.2u.46("hu")&&c.4h("hu",f.2u.4C())},cw:S(){f.2u.46("hv")&&c.4h("hv",f.2u.4C()),f.W.1f.1n.hw&&(f.W.1f.1n.62=!1,f.W.1G.2L())},7E:S(a){f.2u.46("hy")&&c.4h("hy",a)},7l:["{4V}"]}),R.4a=0,R.3t=1,f.W.56=4e g.6Q({4d:!0,hp:!0}),d=f.1f.2S(j+", in, bo"),e=f.1f.2S(j+", 1F, bl").1s(f.1f.2S(j+", 1F, 3i, 3B")),h=f.1f.2S(j+", in, bq, bo"),i=a().1s(d).1s(e).1s(h),R.c8(d,"in",f.W.1G,f.W.56),R.c8(e,"1F",f.W.1G,f.W.56),f.1c[j].T.1L!==-1&&f.1c[j].T.1L<R.4a?(R.3t=f.1c[j].T.1L/R.4a,f.26&&f.1D.1s("2B","eu.1L",[f.1c[j].T.1L,R.4a])):f.W.1G.1L()>R.4a&&(R.3t=R.4a/f.W.1G.1L()),f.1c[j].T.1L===-1?(f.1c[j].T.1L=R.4a,f.1c[f.1c[j].1I].T.1L=R.4a):R.4a=f.1c[j].T.1L,R.c8(h,"in",f.W.1G,f.W.56),f.W.1f.1n.62===!0&&f.26&&f.1D.1s("2B","eu.gA",f.o.dF?"1O":"cE");2h(18 k=0;k<i.1m;k++)a(i[k]).T(f.1l.1h.1R).1B.1O&&a(i[k]).T(f.1l.1h.1R).1X.$8g.1M("T-1B","3i");f.W.1f.1B.5w(),f.2u.46("hA")&&c.4h("hA",{eu:f.W.1G,nN:i,nO:R.4a}),f.W.2i.5P(),f.W.2i.4s.2U&&f.W.1G.1s(f.W.2i.4s.2U.2L(),0),f.W.2i.3S.2U&&f.W.1G.1s(f.W.2i.3S.2U.2L(),0),f.W.2i.2I.2U&&f.W.1G.1s(f.W.2i.2I.2U.2L(),0),f.W.1G.gI(S(){if(!f.W.1G.hB()){if(f.2u.46("hC")&&!1===c.4h("hC",f.2u.4C()))1K;f.1J.2P(f.W.1f.1n,{7o:!0}),!f.1w.5a()&&f.1w.2v.77?f.1w.78(f.1c.1Q.1I):f.1w.2v.9H&&f.W.2i.3o()}},[],R,f.1c[j].T.1L),f.1c.1Q.T.$4W&&f.1c.1Q.T.$4W.19({3j:"5n"}),(f.o.aD&&"ad"===f.X.5t||!f.o.aD)&&(f.o.aC&&f.1w.5a()&&f.W.1G.5l(0),f.W.1f.1n.2L(),f.o.5D&&"9o"===f.1i.2f.gn&&f.W.1G.3t(1))},gK:S(){f.1c.1Q.T.4X&&"4J"!==f.1c.1Q.T.4X?(f.X.$63.27("ls-4D"),f.X.$b6.27("ls-4D")):(f.X.$63.3N("ls-4D"),f.X.$b6.3N("ls-4D")),R.5P()},7Q:S(b,c,d,e){if("4N"==1t c)1K c;c=c.4z();18 h,i,j,k,l,g=f.1l.2Q.iI,m=0;if(c.1d("*")!==-1&&(l="*"),c.1d("/")!==-1&&(l="/"),c.1d("+")!==-1&&(l="+"),c.1d("-")!==-1&&(l="-"),l)if(k=c.1E(l),h=a.3T(k[0]),j=1e(a.3T(k[1])),g[h]&&g[d][1].1d(g[h][0])!==-1)if(i="4N"==1t b.1n[h]?b.1n[h]:b.1n[h](b),e)m=j/3z;2F 2K(l){1g"*":m=i*j;1A;1g"/":m=i/j;1A;1g"+":m=i+j/3z;1A;1g"-":m=i-j/3z}2F f.26&&(g[h]||f.1D.1s("2B","8q.hD",h),g[d][1].1d(g[h][0])===-1&&f.1D.1s("2B","8q.hE",[h,g[h],d,g[d]])),("+"===l||e)&&(m=j/3z);2F h=a.3T(c),g[h]&&g[d][1].1d(g[h][0])!==-1?m=e?0:"4N"==1t b.1n[h]?b.1n[h]:b.1n[h](b):f.26&&(g[h]?g[d][1].1d(g[h][0])===-1&&f.1D.1s("2B","8q.hE",[h,g[h],d,g[d]]):f.1D.1s("2B","8q.hD",h));1K(m!==m||m<0)&&(f.26&&f.1D.1s("2B","8q.nW",[d,h,m]),m=0),m},c8:S(b,c,d,e){2h(18 h=0,i=b.1m;h<i;h++){18 o,j=a(b[h]),k=j.T(f.1l.1h.1R),l=k.1X.$1N,m=k.1X.$8u,n=k.1X.$7i;if(k.4S.3r&&f.W.1f.3r(j,k),j.4u("ls-bg"))k.2s.6u&&d.3Y(j.3Q(".ls-bg-5C"),f.W.29.T.1L+f.W.29.T.cv,{2k:!1,19:k.2s.3u},{2k:!1,19:k.2s.2C,2q:g.nX.bO},-f.W.29.T.cv),a.4L(k.1o.3b.bJ)&&a.4L(k.1o.3b.bK)||(k.1o.W.bg||(k.1o.W.bg=f.W.1f.4M.5W(k,"bg",k.1o.3b.bJ,k.1o.3b.bK)),d.2C([{p:0},j[0]],f.W.29.T.1L,{p:1,2k:!1,2q:g.nZ.bO,7E:f.W.1f.4M.7Z,7l:["{4V}",k.1o.W.bg]},0));2F 2K(c){1g"in":if(k.in.1O&&(k.2V.7t||("4N"!=1t k.in.2M&&(k.in.2M=0),k.1n.7e=k.in.2M,k.1n.6A=k.1n.7e+k.in.1L),f.1z.7Y(j,k.4H,k.9W),f.1z.97(k.8S,k.5S),f.1z.97(k.bZ,k.al),k.4H.2r=k.2r.2Q*f.1z.1C,k.2b.1O&&(k.2T.2b||(k.2T.2b=k.2b.a0,k.2T.5Q=!0),k.9U.2b?(k.g3.2b=f.1z.2b(j,k.9U.2b,!0),k.jl.2b=f.1z.2b(j,k.2T.2b,k.2T.5Q),d.3Y(m[0],k.in.1L,k.h4,k.cO,k.1n.7e)):g.3a.20(m[0],{2b:f.1z.2b(j,k.2T.2b,k.2T.5Q)}),f.W.1f.1n.62=!0),a.4L(k.1o.3b.in)?a.4L(k.1o.3b.1F)||j.19("1o",k.2T.1o):(k.1o.W.in||(k.1o.W.in=f.W.1f.4M.5W(k,"in",k.1o.3b.in,k.1o.3b.1P)),d.2C([{p:0},j[0]],k.in.1L,{p:1,2k:!1,2q:k.ah.2q,7E:f.W.1f.4M.7Z,7l:["{4V}",k.1o.W.in]},k.1n.7e)),d.3Y(l[0],k.in.1L,k.j7,k.ah,k.1n.7e),d.3Y(j[0],k.in.1L,k.hf,k.cP,k.1n.7e)),k.is.9i&&((k.1Z.1W||k.2t.1W)&&f.W.1f.7m.hF(j,k),k.1Z.1O&&(k.in.1O||d.2C(l[0],0,a.5x(!0,{},k.ah,k.1h.1N),k.1n.7d),k.1Z.5p=f.W.1f.7m.ev(k.1Z.1W.1E("3W"),k.1Z.ns),f.1z.7Y(j,k.3F,k.8b),k.3F.2r=k.2r.4Q*f.1z.1C,a.4L(k.8b.2D)||f.W.1f.7m.9Z(k,k.8b.2D,k.3F),a.4L(k.3F.2D)||f.W.1f.7m.9Z(k,k.3F.2D,k.3F),2m k.3F.2D,k.2V.7t||(k.1n.7d=R.7Q(k,k.1Z.2M,"7d"),k.1n.8K=k.1n.7d+(k.1Z.5p.1m-1)*k.1Z.7c+k.1Z.1L),d.hH(k.1Z.5p,k.1Z.1L,k.3F,k.8P,k.1Z.7c,k.1n.7d,S(a){f.W.1f.in.4r(a)},[j]))),k.is.ho&&f.o.5D&&d.o5(k.1n.7f(),S(){5v(S(){2m f.2E.2f,f.W.1f.1n.73=0,f.1i.2f.95=9q},6n)}),k.1v.1O){18 p=4e g.6Q({5U:k.1v.5U,8B:k.1v.8B,8D:k.1v.8D,4d:!0});k.2V.7t&&!k.is.3B||(k.1n.6j=R.7Q(k,k.1v.2M,"6j"),k.1n.72=k.1v.3l!==-1&&k.1n.6j+(k.1v.5U+1)*k.1v.1L+k.1v.5U*k.1v.8B),k.1v.3I=p,f.1z.7Y(j,k.4b,{x:k.68.x,y:k.68.y}),(k.4b.x&&0!==k.4b.x||k.4b.y&&0!==k.4b.y)&&(f.W.1f.1n.62=!0),k.cI.31=f.1J.2O.31(k.68.31,j),k.cI.2r=k.2r.1v*f.1z.1C,a.4L(k.1o.3b.1v)||(k.1o.W.1v||(k.1o.W.1v=f.W.1f.4M.5W(k,"1v",a.4L(k.1o.3b.9t)?k.1o.3b.1P:k.1o.3b.9t,k.1o.3b.1v)),p.2C([{p:0},j[0]],k.1v.1L,{p:1,2k:!1,2q:k.ch.2q,7E:f.W.1f.4M.7Z,7l:["{4V}",k.1o.W.1v]},0)),p.3Y(n[0],k.1v.1L,k.fg,k.ch,0),k.9D.2b&&(k.h0.2b=f.1z.2b(j,k.9D.2b,!0),p.2C(m[0],k.1v.1L,k.dX,0),f.W.1f.1n.62=!0),k.1v.5U!==-1&&("o7"===f.o.5y||f.1q.2i.2I.$1p||f.o.5D)?(d.1s(p,k.1n.6j),p.2L()):d.o8(S(a){a.2L()},k.1n.6j,[p])}k.is.3B&&(k.1n.b9=k.1n.6A,k.1n.bb="1k%",k.2V.7t||(o=1u.41(k.1n.9x(),0),R.4a=1u.41(R.4a,o)));1A;1g"1F":k.is.9i&&k.2t.1O&&(k.2t.5p=f.W.1f.7m.ev(k.2t.1W.1E("3W"),k.2t.ns),f.1z.7Y(j,k.3s,k.8l,k.ce),k.ce.2r=k.2r.4Q*f.1z.1C,a.4L(k.8l.2D)||f.W.1f.7m.9Z(k,k.8l.2D,k.3s),a.4L(k.3s.2D)||f.W.1f.7m.9Z(k,k.3s.2D,k.3s),2m k.3s.2D,k.2V.7t||(k.1n.7X=R.7Q(k,k.2t.2M,"7X"),k.1n.8T=k.1n.7X+(k.2t.5p.1m-1)*k.2t.7c+k.2t.1L),k.2b.1O&&("2a"==1t k.7h.2b&&d.2C(m[0],0,{4E:!1,19:{2b:f.1z.2b(j,k.2b.41)}},k.1n.7X),f.W.1f.1n.62=!0),d.hH(k.2t.5p,k.2t.1L,k.ce,k.3s,k.2t.7c,k.1n.7X)),f.1z.7Y(j,k.48,k.9F,k.cL),f.1z.97(k.c7,k.au),f.1z.97(k.8p,k.64),k.cL.2r=k.2r.2Q*f.1z.1C,"9Y"!==k.1F.2M?(k.2V.7t&&!k.is.3B||(k.is.3B?(k.1n.b9=0,k.1n.5h=R.7Q(k,k.1F.2M,"5h",!0),k.1n.bb=k.1n.5h):k.1n.5h=1u.41(R.7Q(k,k.1F.2M,"5h"),k.1n.6A),k.1n.8Y=k.1n.5h+k.1F.1L),k.2b.1O&&("2a"==1t k.7h.2b?d.2C(m[0],0,{4E:!1,19:{2b:f.1z.2b(j,k.2b.41)}},k.1n.5h):(k.cJ.2b=f.1z.2b(j,k.7h.2b,!0),d.2C(m[0],k.1F.1L,k.cb,k.1n.5h)),f.W.1f.1n.62=!0),a.4L(k.1o.3b.1F)||(k.1o.W.1F||(k.1o.W.1F=f.W.1f.4M.5W(k,"1F",a.4L(k.1o.3b.bI)?a.4L(k.1o.3b.9t)?k.1o.3b.1P:k.1o.3b.9t:k.1o.3b.bI,k.1o.3b.1F)),d.2C([{p:0},j[0]],k.1F.1L,{p:1,2k:!1,2q:k.ar.2q,7E:f.W.1f.4M.7Z,7l:["{4V}",k.1o.W.1F]},k.1n.5h)),d.3Y(l[0],k.1F.1L,k.cN,k.ar,k.1n.5h),d.3Y(j[0],k.1F.1L,k.cK,k.c9,k.1n.5h),d.3Y(l[0],0,k.1h.1N,k.3r.fh,k.1n.8Y)):(k.1n.b9=0,k.1n.bb="1k%"),(!k.is.3B||k.is.3B&&k.2V.9n===f.1c.1Q.1I)&&(e.3Y(l[0],f.o.7s,k.cN,k.ar,0),e.3Y(j[0],f.o.7s,k.cK,k.c9,0),k.2b.1O&&"2a"!=1t k.7h.2b&&(k.cJ.2b=f.1z.2b(j,k.7h.2b,!0),e.2C(m[0],f.o.7s,k.cb,0))),o=1u.41(k.1n.cW(),0),R.4a=1u.41(R.4a,o),k.2V.7t=!0}}},2L:S(){f.W.1G&&(f.W.1G.2L(),f.1J.2P(R,{dD:!0,77:!0,9K:!1,4d:!1}))},5j:S(b){18 b=a.7G(b)?b:.75;f.W.1G&&(g.3a.2C(f.W.1G,b,{5l:0}),f.1J.2P(R,{4d:!0,9K:!1}))},7O:S(){f.W.1G&&(g.3a.2C(f.W.1G,.75,{5l:1}),f.1J.2P(R,{4d:!1,9K:!1}))},3o:S(){f.W.1G&&f.W.1G.3o()},hJ:S(){if(R.2L(),R.ew(),f.W.1G&&!f.X.8j()&&(0===f.W.1G.4a()||1===f.W.1G.3t())&&"9j"===f.1i.2f.2G){18 a=f.1w.3G.9c,b=a.1d(f.1c.2x.1I);b===a.1m-1?(f.X.5t="ex",f.1i.2f.7K()):f.2j.1Q()}},hN:S(){if(R.3o(),R.ew(),f.W.1G&&!f.X.8j()&&(0===f.W.1G.4a()||0===f.W.1G.3t())&&"9o"===f.1i.2f.2G){18 a=f.1w.3G.9c,b=a.1d(f.1c.2x.1I);0===b?(f.X.5t="ey",f.1i.2f.7K()):f.2j.2H()}},ew:S(){if(f.W.1G){18 a=R;g.3a.2C(f.W.1G,.25,{5l:1+a.73})}},ht:S(){R.2v={dD:!1,77:!1,4d:!1,9K:!1,7o:!1}}},1r:{7K:S(a){a.1M("T-ez","1")},ax:S(a){a.1M("T-ez","0")},20:S(a,b){b.1X.$1N.on("76."+e,S(){f.W.1f.1r.eA(a,b)}),b.1X.$1N.on("6g."+e,S(){f.W.1f.1r.hR(a,b)}),b.1X.$1N.on("8O."+e,S(){f.W.1f.1r.bi(a,b)})},hS:S(a,b){if(b.1r.3I=4e g.6Q({4d:!0,cw:S(a,b){b.1r.3I.ol&&(b.1r.3I.21().74(),2m b.1r.3I)},om:[a,b]}),f.1z.7Y(a,b.4k,b.5A,b.dN),f.1z.97(b.4k,b.5A),b.dN.2r=b.2r.1r*f.1z.1C,b.1r.bf=g.3a.3Y(a[0],b.1r.7F,b.g0,b.fU),b.1r.3I.1s(b.1r.bf,0),b.1r.d2){18 c={6Y:a1};f.70.9y&&(c.3y="g5(op)"),b.1r.3I.2C(b.1X.$8e[0],b.1r.7F,{2k:!1,19:c},0)}b.1r.hT=b.1r.7F/b.1r.9A===1?1:b.1r.7F/b.1r.9A,R.eB(a,b)},eA:S(a,b){"1"===a.1M("T-ez")&&(b.1X.$1N.7S("8O."+e),b.1r.3I?(b.1r.3I.2L().21().3t(0),R.eB(a,b)):R.hS(a,b))},hR:S(a,b){b.1r.3I&&(b.1r.3I.21().3t(1),R.hV(a,b))},bi:S(a,b){R.eA(a,b)},eB:S(a,b){b.1r.bf.hW({2q:b.1r.5X}),b.1r.3I.2L().5l(1)},hV:S(a,b){b.1r.bf.hW({2q:b.1r.6C}),b.1r.3I.3o().5l(b.1r.hT)}},1B:{bc:{1W:"2d",6W:"3n",x:!0,y:!0,2c:10,87:10,a8:1.5,aX:1.2,31:"50% 50% 0",2r:6n},1l:{eC:5,eD:"7P",9P:40,7v:10},2v:{1O:!1,cy:!1},2Y:{3n:{$2d:a(),$3d:a()},2f:{$2d:a(),$3d:a()}},1h:S(){18 b=R;c.on("76."+e,S(){(b.2Y.3n.$2d.1m||b.2Y.3n.$3d.1m)&&b.8w()}),c.on("8O."+e,S(a){(b.2Y.3n.$2d.1m||b.2Y.3n.$3d.1m)&&b.bi(a)}),c.on("6g."+e,S(){(b.2Y.3n.$2d.1m||b.2Y.3n.$3d.1m)&&b.3r()}),f.1i.6x&&f.1i.hZ&&(a(1j).on("oC."+e,S(){b.2v.cy&&b.i0(6W)}),a(1j).on("eE."+e,S(){b.8w()})),a(1j).on("2f.1B"+e+" 9l.1B"+e,S(){(b.2Y.2f.$2d.1m||b.2Y.2f.$3d.1m)&&b.2f()}),b.1l.eC*=f.o.ft?-1:1},jo:S(b,c,d,e){2K(R.2v.1O||(f.1J.2P(R,{1O:!0}),R.1h()),a.5x(!0,c,R.bc,f.1c[e].1B,d.1B),d.2r.1B?c.2r=d.2r.1B:d.2r.1B=c.2r,c.6W.49(/(3n|2f)/)||(c.6W="3n"),c.1W.49(/(2d,3d)/)&&(c.1W="2d"),c.dt){1g"3m":c.x=!1,c.y=!1;1A;1g"x":c.y=!1;1A;1g"y":c.x=!1}R.2Y[c.6W]["$"+c.1W]=R.2Y[c.6W]["$"+c.1W].1s(b)},eF:S(){18 b=f.1q.4j.$1p,c=f.1c.2x&&f.1c.2x.1B?f.1c.2x.1I:f.1c.1Q.1I;if(f.1c[c].T.$2g&&f.1c[c].T.$2g.T(f.1l.1h.1R).1B.1O&&f.1c[c].T.4X&&"4J"!==f.1c[c].T.4X){18 h,d="50% -"+.25*f.X.1b+"px 0",e=f.1c[c].T.$2g.T(f.1l.1h.1R).1B;h="2a"!=1t e.2c?2*e.2c:"2a"!=1t f.1c[c].1B.2c?2*f.1c[c].1B.2c:2*R.bc.2c,b.T(f.1l.1h.1R,{1B:a.5x(!0,{},R.bc,f.1c[c].1B,{6s:e.6s,31:d,2c:h})}),b.1M("T-1B","3i"),g.3a.20(b[0],{31:d,2r:b.T(f.1l.1h.1R).1B.2r*f.1z.1C}),"3d"===f.1c[c].1B.1W||"3d"===e.1W?R.2Y.3n.$3d=R.2Y.3n.$3d.1s(b):R.2Y.3n.$2d=R.2Y.3n.$2d.1s(b)}R.c2=!0},i3:S(){18 a=f.1q.4j.$1p;R.2Y.3n.$2d=R.2Y.3n.$2d.59(a),R.2Y.3n.$3d=R.2Y.3n.$3d.59(a),a.1M("T-1B","cE"),R.c2=!1},8w:S(){18 b=a().1s(R.2Y.3n.$2d).1s(R.2Y.3n.$3d).1s(R.2Y.2f.$2d).1s(R.2Y.2f.$3d);b.3g(S(){18 b=a(R).T(f.1l.1h.1R).1B;g.3a.20(a(R)[0],{31:f.1J.2O.31(b.31,a(R),f.X.$63),2r:b.2r*f.1z.1C})}),R.9C=!0},i0:S(a){if(R.9C){18 c,d,b=1j.oJ;0===b?(c=5*-1e(a.eG)*R.1l.7v*f.1z.1C,d=5*(R.1l.9P-1e(a.eH))*R.1l.7v*f.1z.1C):90===b?(c=5*-1e(a.eH)*R.1l.7v*f.1z.1C,d=5*(1e(a.eG)+R.1l.9P)*R.1l.7v*f.1z.1C):(c=5*1e(a.eH)*R.1l.7v*f.1z.1C,d=5*(R.1l.9P-1e(a.eG))*R.1l.7v*f.1z.1C),R.bN(c,d,"3n"),R.bM(c,d,"3n")}2F R.8w();f.X.2v.8f||R.c2||!f.1q.4j.$1p||R.eF()},5w:S(){a(1j).5w("2f.1B"+e),a(1j).5w("9l.1B"+e)},2f:S(){18 a="1Y"===R.1l.eD?f.1i.61:f.1i.61+(f.1i.4K-f.X.1b)/2,b=(a-f.X.4g)*f.1z.1C*R.1l.eC;f.X.2v.6Z&&(b=0),R.9C||R.8w(),R.bN(0,b,"2f"),R.bM(0,b,"2f")},bi:S(a){if(R.9C){f.X.2v.8f||R.c2||!f.1q.4j.$1p||R.eF();18 c=f.X.9z+f.X.1a/2,d=f.X.4g+f.X.1b/2,e=a.ci-c,g=a.oQ-d;R.bN(e,g,"3n"),R.bM(e,g,"3n")}2F R.8w()},bN:S(b,c,d){R.2Y[d].$2d.3g(S(){18 d=a(R);if("3i"===d.1M("T-1B")){18 e=d.T(f.1l.1h.1R).1B,h=e.x?-b*(e.87/bu)*1e(e.6s):0,i=e.y?-c*(e.87/bu)*1e(e.6s):0;g.3a.2C(d[0],e.a8,{x:h,y:i})}})},bM:S(b,c,d){R.2Y[d].$3d.3g(S(){18 d=a(R);if("3i"===d.1M("T-1B")){18 h,i,j,k,e=d.T(f.1l.1h.1R).1B;e.x?(i=-b/(i8/e.2c),j=-b*(e.87/bu)*1e(e.6s)):(i=0,j=0),e.y?(h=c/(i8/e.2c),k=-c*(e.87/bu)*1e(e.6s)):(h=0,k=0),g.3a.2C(d[0],e.a8,{3w:h,3v:i,x:j,y:k})}})},3r:S(){18 c=a().1s(R.2Y.3n.$2d).1s(R.2Y.3n.$3d);c.3g(S(){18 b=a(R);"3i"===b.1M("T-1B")?g.3a.2C(b[0],a(R).T(f.1l.1h.1R).1B.aX,{x:0,y:0,3w:0,3v:0}):g.3a.20(b[0],{x:0,y:0,3w:0,3v:0})}),f.1q.4j.$1p&&R.i3(),R.9C=!1}},4M:{5W:S(a,b,c,d){18 h,e=4e f.1l.2Q.5s.1o,g={};2h(h in e)2K(b){1g"in":g[h]=[e[h],e[h]],g[h][0]=c.5R(h)?c[h]:d.5R(h)?d[h]:e[h],g[h][1]=d.5R(h)?d[h]:e[h],a.1o.3b.9t[h]=g[h][1];1A;1g"1r":1g"1v":1g"1F":g[h]=[],g[h][0]=c.5R(h)?c[h]:e[h],g[h][1]=d.5R(h)?d[h]:c.5R(h)&&c[h]!==e[h]?c[h]:e[h],"1v"===b&&a.1v.8D!==!0&&a.1v.3l!==-1&&(a.1o.3b.bI[h]=g[h][1]);1A;1g"bg":g[h]=[e[h],e[h]],c.5R(h)&&(g[h][0]=c[h]),d.5R(h)&&(g[h][1]=d[h])}1K g},2O:S(a){a=a.1E(" ");2h(18 c,d,e,b={},f=/(cp|gW|gU|gF|cu-3R|gB|gs|gm)/i,g=0,h=a.1m;g<h;g++)e=a[g].1E("("),c=e[0],c.49(f)&&(d=1e(e[1]),b[c]=d);1K b},7Z:S(a,b){18 d,c=1k*a.5e[0].p;if("5F"==1t b){18 e="";2h(18 f in b)if("5F"==1t b[f]&&2===b[f].1m)2K(f){1g"cp":d=b[f][0]<b[f][1]?b[f][0]+1u.3H(b[f][0]-b[f][1])/1k*c:b[f][0]-1u.3H(b[f][0]-b[f][1])/1k*c,e+=" cp( "+d+"px )";1A;1g"cu-3R":d=b[f][0]<b[f][1]?b[f][0]+1u.3H(b[f][0]-b[f][1])/1k*c:b[f][0]-1u.3H(b[f][0]-b[f][1])/1k*c,e+=" cu-3R( "+d+"80 )";1A;5k:d=b[f][0]<b[f][1]?b[f][0]+1u.3H(b[f][0]-b[f][1])/1k*c:b[f][0]-1u.3H(b[f][0]-b[f][1])/1k*c,e+=" "+f+"( "+d+"% )"}g.3a.20(a.5e,{"-5o-1o":e,1o:e})}}},7m:{ev:S(a,b){18 c=b;if("oT"==a[1])c=b.eI(0).3o();2F if("oV"==a[1])c=b.eI(0).oW(S(){1K.5-1u.2D()});2F if("7P"==a[1]){18 d,e=1u.3A(b.1m/2);2h(c=[b[e]],d=1;d<=e;d++)c.52(b[e-d],b[e+d]);c.1m=b.1m}2F if("oX"==a[1]){18 f,g=1u.3A(b.1m/2);2h(c=[b[0]],f=1;f<=g;f++)c.52(b[b.1m-f],b[f]);c.1m=b.1m}1K c},hF:S(b,c){a(".oY, .oZ, .fl",b).1s(c.1X.$1N).19({3y:"3m",2W:1}).3g(S(){2m R.gx})},9Z:S(a,b,c){2h(18 d in b){2h(18 e=[],g=0,h=a.1Z.5p.1m;g<h;g++)e[g]=f.1J.2O.d4(b[d],d);2m c[d],c.6m[d]=e}b=2A}}},1S:{1l:{3Z:6n,5d:6n,5G:cd},gH:S(a,b){if(f.1c.2x.1I&&f.1c.2x.T.$2o.1m){18 d=f.1c.2x.T.$2o,e=d.T(f.1l.1h.1R).1X.$8x;b&&(d.T(f.1l.1h.1R).2J.ed=!0,e.5G(f.W.1S.1l.5G,S(){d.5w("9X"),d.T(f.1l.1h.1R).2J.ed=!1}))}if(f.1c.1Q.T.$2o.1m){18 g=f.1c.1Q.T.$2o,h=g.T(f.1l.1h.1R).1X.$8x,i=g.T(f.1l.1h.1R).1X.$bB;f.1i.6x&&(c.4u("ls-1i-is-6t")&&i.4u("ls-3X-on-6t")||c.4u("ls-1i-is-6r")&&i.4u("ls-3X-on-6r"))||5v(S(){g.5w("aY")},a?50:0),a||b?h.5d(f.W.1S.1l.5G):h.19({3j:"5n"}),g.T(f.1l.1h.1R).2J.ee=!0}}},2i:{1l:{i9:.35,ib:.3},5P:S(a){R.8Q=a||"1Q",R.3r(),f.1q.2i.4s.$1p&&R.4s.5W(),f.1q.2i.3S.$1p&&R.3S.5W(),f.1q.2i.2I.$1p&&R.2I.5W()},3o:S(){if(f.1c.2x&&f.1c.2x.T&&f.W.1G){18 a=f.W.1G.3t(),b=f.1c.2x.T.1L*a/R.1l.ib;f.1q.2i.4s.$1p&&R.4s.2U&&(f.W.1G.5T(f.W.2i.4s.2U),R.4s.2U.3o().5l(b)),f.1q.2i.3S.$1p&&R.3S.2U&&(f.W.1G.5T(f.W.2i.3S.2U),R.3S.2U.3o().5l(b)),f.1q.2i.2I.$1p&&R.2I.2U&&(f.W.1G.5T(f.W.2i.2I.2U),R.2I.2U.3o().5l(b))}},3r:S(){f.1q.2i.4s.$1p&&R.4s.2U&&R.4s.3r(),f.1q.2i.3S.$1p&&R.3S.2U&&R.3S.3r(),f.1q.2i.2I.$1p&&R.2I.2U&&R.2I.3r()},4s:{3r:S(){R.2U&&(R.2U.5V(),R.2U=!1)},5W:S(){R.2U=g.3a.3Y(f.1q.2i.4s.$1p[0],f.1c[f.W.8Q].T.1L,{2k:!1,4d:!0,19:{1a:0}},{2k:!1,19:{},2q:g.8V.9k,cw:S(){f.W.2i.4s.2U=!1},4r:S(a){a.5e.1P.1a="1k%",a.5e.1P.1a="dC( 1k% - "+f.X.43.bn+"px )"},eK:["{4V}"],7E:S(a){a.5e.1P.1a=1u.a0(f.X.1a,f.X.1a*a.3t())+"px"},7l:["{4V}"]})}},3S:{3r:S(){R.2U&&(f.1q.2i.3S.$1p.21(!0,!0),R.2U.5V(),R.2U=!1)},5W:S(){18 a=f.1q.2i.3S.$1p.1y(".ls-ct-3L .ls-ct-3R")[0],b=f.1q.2i.3S.$1p.1y(".ls-ct-1H .ls-ct-3R")[0],c=f.1c[f.W.8Q].T.1L;R.2U=4e g.6Q({4d:!0}).3Y(f.1q.2i.3S.$1p[0],f.W.2i.1l.i9,{2k:!1,4E:!0,19:{2W:0,3j:"5n"}},{2k:!1,19:{2W:f.1q.2i.3S.$1p.T("2T").2W}}).3Y(a,c/2,{2k:!1,19:{2c:0}},{2k:!1,19:{2c:cC},2q:g.8V.9k},0).3Y(b,c/2,{2k:!1,19:{2c:0}},{2k:!1,19:{2c:cC},2q:g.8V.9k},c/2)}},2I:{3r:S(){R.2U&&(R.2U.5V(),R.2U=!1)},5W:S(){18 b=R;b.2U=4e g.6Q({4d:!0,cw:S(){f.W.2i.2I.2U=!1}}),a.3g(f.1q.2i.2I.$7B,S(a,c){b.2U.1s(g.3a.3Y(f.1q.2i.2I.$7B[a][0],f.1c[f.W.8Q].T.1L,{2k:!1,19:{1H:0}},{2k:!1,19:{},2q:g.8V.9k,4r:S(b){b.5e.1P.1H="dC( 1k% - "+f.1q.2i.2I.7z[a]+"px )"},eK:["{4V}"],7E:S(b){b.5e.1P.1H=(f.1q.2i.2I.ai[a]-f.1q.2i.2I.7z[a])*b.3t()+"px"},7l:["{4V}"]}),0),b.2U.1s(g.3a.3Y(f.1q.2i.2I.$dA[a][0],f.1c[f.W.8Q].T.1L,{2k:!1,19:{1a:0}},{2k:!1,19:{},2q:g.8V.9k,4r:S(a){a.5e.1P.1a="1k%"},eK:["{4V}"],7E:S(b){b.5e.1P.1a=f.1q.2i.2I.dB[a]*b.3t()+"px"},7l:["{4V}"]}),0)})}}}},f.3e={47:S(){if(f.o.3e&&0!==f.o.3e.1m){18 b=f.o.3e[0],c="5F"==1t b?b.eL:b;if(1j.2y.3e[c])f.3e.1h(c,b,!0),f.3e.47();2F if(f.70.eM||"5F"!=1t b)f.70.eM?(1j.4x&&(4x.71(f.1l.X.aj,"p8 47 3e on ii:// 7x."),4x.6X("cz pa 7I 5N eN pc.")),f.o.3e.9w(0,1),f.3e.47()):(1j.4x&&(4x.71(f.1l.X.aj,"ik eN et pf!"),4x.6X(\'ik "\'+c+\'" eO eP pi in X 1h 4m, pj 7I pk eN et 59 pl on hL.\')),f.o.3e.9w(0,1),f.3e.47());2F{if(1j.2y.9g.1d(c)!==-1)1K 5q f.3e.io(c);1j.2y.cr.1d(c)===-1&&1j.2y.aK.1d(c)===-1?(1j.2y.9g.52(c),a.pn({6y:b.js.1d("9L://")===-1&&b.js.1d("83://")===-1?(1j.2y.7n?1j.2y.7n:1j.2y.ck+"/../3e/")+b.js:b.js,po:"8c",fG:S(){f.3e.1h(b.eL,b,!0),1j.2y.cr.52(c)},71:S(a,b,d){1j.4x&&(4x.71(f.1l.X.aj,c,"5N eO 59 eP dk!"),4x.71("pp 71 6X:",d)),1j.2y.aK.52(c)},pq:S(){1j.2y.9g.9w(1j.2y.9g.1d(c),1),f.3e.47()}})):(f[c]||1j.2y.aK.1d(c)!==-1?f.o.3e.9w(0,1):f.3e.1h(c,b),f.3e.47())}}2F f.X.6N.9u()},1h:S(b,d,g){f.9s[b]=4e 1j.2y.3e[b](f,c,e,d.2V),1j.2y.ej(f.9s[b].ir.it,f.5N.6p)?(d.19&&g&&a(\'<4W iE="iF" 4G="\'+(d.19.1d("9L://")===-1&&d.19.1d("83://")===-1?(1j.2y.7n?1j.2y.7n:1j.2y.ck+"/../3e/")+d.19:d.19)+\'">\').2e("9Q"),f.9s[b].1h&&f.9s[b].1h()):1j.4x&&4x.71(f.1l.X.aj,b,"5N eO 59 eP dk! pv 9p 6p:",f.9s[b].ir.it,"(hs pw:",f.5N.6p+")"),f.o.3e.9w(0,1)},io:S(a){f.4O.eQ=bk(S(){1j.2y.cr.1d(a)===-1&&1j.2y.aK.1d(a)===-1||1j.2y.9g.1d(a)!==-1||(9S(f.4O.eQ),2m f.4O.eQ,f.3e.47())},1k)}},f.X={c6:!0,4A:[],2v:{aO:!1,8A:!1,8f:!1},5a:!1,8j:S(){1K R.2v.aO||R.2v.8A||R.2v.8f},47:S(){1K!!2z.3D.7U(b)&&(f.2u.46("iv")&&c.4h("iv"),5q f.X.20.c3())},20:{c3:S(){if(f.ec=c[0].pB,f.79=f.1J.2O.5s(f.1J.2O.ix(d)),f.85={},f.o=a.5x(!0,{},f.1l.1h.4m,f.79),f.o.7s/=3z,f.o.7s=f.o.7s>0?f.o.7s:.75,f.o.bW/=3z,1j.4x&&f.o.eR!==!0&&1j.2y.eR!==!0){1j.2y.eR=!0;18 b=1j.4x.6X?"6X":"5g";4x[b]("9p","v"+f.5N.6p,"9u"),4x[b]("pF pG hI pH @ 83://5c.eW.57/")}18 e={eL:"1D",js:"1D/5c.1D.js",19:"1D/5c.1D.19"};2z.7D.9h.1d("1D")!==-1&&1j.4x&&(2z.7D.9h.1d("6y=")!==-1&&(1j.2y.7n=2z.7D.9h.1E("6y=")[1].1E("&")[0],e.js=1j.2y.7n+"1D/5c.1D.js",e.19=1j.2y.7n+"1D/5c.1D.19"),"5F"==1t f.o.3e?f.o.3e.52(e):f.o.3e=[e]),(1j.2y.cc||1j.2y.eX)&&(1j.2y.ck=(1j.2y.cc||1j.2y.eX).23.2l(/\\\\/g,"/").2l(/\\/[^\\/]*$/,"")),"5F"==1t f.o.3e?f.3e.47():f.X.6N.9u()},d3:S(){18 j,k,l,m,r,s,t,w,x,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,d=f.X,g=c.4p(),h=b.1P,i=1j.iA(b,2A),n=1e(b.pJ),o=1e(b.pK),p=1e(g.1a()),q=1e(g.1b()),u=f.o.cB,v=f.o.gu,A=f.o.1W.4z();2K(f.26&&f.1D.1s("7M","3p.1P"),f.o.1a?j=f.o.1a.1d("%")==-1?1e(f.o.1a):f.o.1a:h.1a?j=h.1a.1d("%")==-1?1e(h.1a):h.1a:u>0?(j=u,f.26&&f.1D.1s("2B","3p.pL",u)):(j=n,f.26&&f.1D.1s("2B","3p.pM",n)),l=j,f.o.1b?k=f.o.1b.1d("%")==-1?1e(f.o.1b):f.o.1b:h.1b?k=h.1b.1d("%")==-1?1e(h.1b):h.1b:v>0?(k=v,f.26&&f.1D.1s("2B","3p.pN",v)):(k=o,f.26&&f.1D.1s("2B","3p.pO",q)),m=k,r=""!==h.4q?h.4q.1d("%")===-1?1e(h.4q):h.4q:0,"2a"==1t f.79.1W&&(u>0&&v>0||"1k%"===j&&"1k%"===k?A="6i":u<=0&&v<=0&&f.o.7p<=0?A="2a"!=1t f.o.1V&&f.o.1V===!1?"e1":"1V":f.o.7p>0&&(A="6z")),A){1g"1V":f.o.7p=-1,j.1d("%")!==-1&&(j=n,f.26&&f.1D.1s("2B","3p.iB",[A,j,n])),k.1d("%")!==-1&&(j=o,f.26&&f.1D.1s("2B","3p.1V",[A,k,o])),f.26&&u>0&&f.1D.1s("2B","3p.pQ",[A,u]),f.26&&v>0&&f.1D.1s("2B","3p.pR",[A,v]);1A;1g"6z":j.1d("%")!==-1&&(f.26&&f.1D.1s("2B","3p.iB",[A,j,n]),j=n),u<=0&&(u=j,f.26&&f.1D.1s("2B","3p.iC",[A,j])),f.o.7p<=0&&(f.o.7p=u,f.26&&f.1D.1s("2B","3p.6z",u)),k.1d("%")!==-1&&(t=q/(1k/1e(k)),f.26&&f.1D.1s("2B","3p.pT",[A,k,t]),k=t),v<=0&&(v=k);1A;1g"6i":j.1d("%")!==-1&&(s=u>0?u:p,f.26&&f.1D.1s("2B","3p.6i",[A,j,s,p,u]),j=s),u<=0&&(u=j,f.26&&f.1D.1s("2B","3p.iC",[A,j])),k.1d("%")!==-1&&(t=v>0?v:a(1j).1b()/(1k/1e(k)),f.26&&f.1D.1s("2B","3p.pU",[A,k,t,a(1j).1b(),v]),k=t),v<=0&&(v=k,f.26&&f.1D.1s("2B","3p.pV",[A,k]));1A;1g"e1":}c.27("ls-4P ls-"+A),c.4p().27("ls-2G-pW"),f.o.gz&&f.o.e8&&("6z"===A||"6i"===A&&"dY"!==f.o.aJ)&&c.iD(":59(3D, 55)").3g(S(){a(R).27("ls-4X-4D")}),f.79.aF||"1V"!==A||!f.79.5R("eS")||f.79.eS||(f.o.aF="2w",f.26&&f.1D.1s("2B","3p.pZ",A)),f.o.aF.2l("1k% 1k%","e3"),w=u>0?u:j,x=v>0?v:k,D=b.1P.3K,"2w"===D?B="2w":""===D?B=1e(i.eT("6K-1H")):(B=1e(b.1P.3K),F=!0),E=b.1P.8W,"2w"===E?C="2w":""===E?C=1e(i.eT("6K-3L")):(C=1e(b.1P.8W),G=!0),B===C&&(""===D&&""===E&&(H=B,B="2w",C="2w"),c.19({3K:"2w",8W:"2w"})),I=""!==h.6I?1e(h.6I):1e(c.19("4n-1H")),K=""!==h.6E?1e(h.6E):1e(c.19("4n-3L")),J=""!==h.6B?1e(h.6B):1e(c.19("4n-1Y")),L=""!==h.7b?1e(h.7b):1e(c.19("4n-1U")),M=""!==h.6P?1e(h.6P):1e(c.19("6R-1H-1a")),O=""!==h.6S?1e(h.6S):1e(c.19("6R-3L-1a")),N=""!==h.6T?1e(h.6T):1e(c.19("6R-1Y-1a")),P=""!==h.6U?1e(h.6U):1e(c.19("6R-1U-1a")),d.43={1W:A,1a:j,1b:k,aM:l,cA:m,99:j/1k,92:k/1k,ay:u,e0:v,1C:w/x,4q:r,3K:B,8W:C,6I:I,6B:J,6E:K,7b:L,6P:M,6T:N,6S:O,6U:P,bn:I+K+M+O,bh:J+L+N+P},f.26&&(f.1D.1s("5g","3p.1P",[j,k,l,m,u,v,1e(w/x*1k)/1k,r>0?r:5q 0,[B,C]]),H&&f.1D.1s("2B","3p.6K",H)),a("55").1M("id")?a("3D").1M("id")||a("3D").1M("id","ls-c3"):a("55").1M("id","ls-c3"),"3B"===h.6o&&"hQ"===h.6o||(b.1P.6o="cV"),f.o.e7&&c[f.o.gt](f.o.e7),f.X.$7r=a(\'<1x 2n="ls-bQ-4P q2 ls-4J" T-5c-eb="\'+e+\'"></1x>\').27(c.1M("2n")).aH("3D"),f.X.$66=a(\'<1x 2n="ls-cD"></1x>\').2e(c),f.X.$63=a(\'<1x 2n="ls-1f"></1x>\').2e(f.X.$66),f.X.$fT=a(\'<1x 2n="ls-2g-84"></1x>\').2e(f.X.$63),f.X.$b6=a(\'<1x 2n="ls-24-q3"></1x>\').2e(f.X.$63),f.o.dJ===!0&&f.1i.6x?(c.27("ls-8r"),c.3Q(".ls-bQ-6z-4P").27("ls-8r"),f.o.98=!1):f.X.6N.eU(),f.o.8N&&f.X.$66.19({fK:"6y( "+f.o.8N+" )",q6:f.o.ge,q7:f.o.gd,bT:f.o.gc,bX:f.o.gb}),f.X.$66.19({2X:f.o.8J}),"5O"==f.o.8J&&f.o.8N===!1&&f.X.$66.19({2g:"3m 5O"})},4m:S(){if(a("55").1y(\'85[eV*="9R"]\').1m&&(f.85.iJ=a("55").1y(\'85[eV*="9R"]\').1M("eV").1E("9R")[1]),a("55").1y(\'8c[23*="5c"]\').1m&&a("55").1y(\'8c[23*="5c"]\').1M("23").1d("?")!=-1&&(f.85.iK=a("55").1y(\'8c[23*="5c"]\').1M("23").1E("?")[1].1E("=")[1]),"2a"!=1t aG&&(f.t=a.5x({},aG)),"2a"!=1t bV&&(f.ct=a.5x({},bV)),f.26&&("2a"!=1t qb?(f.1D.1s("5g","3p.hl",!1),"2a"==1t aG&&f.1D.1s("2B","3p.qc")):"2a"==1t aG&&f.1D.1s("2B","3p.qd")),"4N"==1t f.o.dP&&(f.W.1f.1B.1l.9P=f.o.dP),"4N"==1t f.o.dO&&(f.W.1f.1B.1l.7v=f.o.dO),f.o.dL&&(f.W.1f.1B.1l.eD=f.o.dL),f.o.5D&&(f.o.5z=-1,f.o.aD=!0,f.o.5y=!1,f.o.98=!1),f.o.aD){if(f.X.5t=f.1i.61>f.X.4g-(f.1i.4K-f.X.1b)/2?"ex":"ey",f.o.5D){18 i,j,k,g=!0,h=4*f.o.gq;f.1i.2f.95=9q,f.W.1f.1n.73=0,a(2z).on("qe."+e+" 9l."+e,S(a){f.1i.6x?(i=a.9d.67[0].qf,i>j?f.1i.2f.2G="9o":i<j&&(f.1i.2f.2G="9j"),k=j-i,j=i):(a.9d.iL>0?f.1i.2f.2G="9j":f.1i.2f.2G="9o",k=a.9d.iL),0!==1u.3H(k)&&(f.1i.2f.c1?f.1i.2f.c1!==f.1i.2f.2G&&(f.1i.2f.c1=f.1i.2f.2G,f.W.1f.1n.73=0):f.1i.2f.c1=f.1i.2f.2G,"ad"===f.X.5t&&(f.1z.bU(),k>=0?f.W.1f.1n.hJ():f.W.1f.1n.hN(),g&&(89(f.2E.2f),g=!1,f.W.1f.1n.73=f.W.1f.1n.73<h?f.W.1f.1n.73+.25:h,f.2E.iN=5v(S(){2m f.2E.iN,g=!0,f.1i.2f.95=f.1i.2f.95>50?f.1i.2f.95-50:50},f.1i.2f.95))))})}a(1j).on("2f."+e,S(){f.X.6N.5t()}),f.2E.iO=5v(S(){f.X.6N.5t()},25)}f.X.fz=!0}},6N:{9u:S(){f.26&&f.1D.1s("5g","3p.6X",[f.5N.6p,f.5N.iP,f.79.eS||"n/a or X 6p is ql 6.0.0",c.1M("id"),e,a.fn.c5,f.85.iK,f.85.iJ],!0),f.X.9u||(f.X.9u=!0,R.e4())},e4:S(){f.o.4c&&""!==f.o.4c&&f.o.8s&&""!==f.o.8s?f.1q.4c.47():f.X.1h()},eU:S(){f.1i.6x&&f.o.dJ!==!1||(f.1i.7a<f.o.fk||f.1i.7a>f.o.dH&&f.o.dH>0?f.X.3X():f.X.6f())},5t:S(){if(2m f.2E.iO,f.o.5D){if(f.1i.2f.2G){18 b="9j"===f.1i.2f.2G?f.1i.61:f.X.4g-(f.1i.4K-f.1i.4K)/2,c="9j"===f.1i.2f.2G?f.X.4g-(f.1i.4K-f.1i.4K)/2:f.1i.61;b>c&&("9o"===f.1i.2f.2G&&"ex"===f.X.5t||"9j"===f.1i.2f.2G&&"ey"===f.X.5t)&&(f.X.5t="ad",f.1z.bU(),f.1i.2f.ax())}}2F{18 d=f.1i.61+f.1i.4K/2,g=f.X.4g+f.X.1b/2;(1u.3H(d-g)<f.1i.4K/2||f.1i.61<f.X.4g&&f.1i.61+f.1i.4K>f.X.4g+f.X.1b)&&(f.X.5t="ad",a(1j).7S("2f."+e),f.26&&f.1D.1s("5g","1w.qm",!1),f.W.1G&&f.W.1f.1n.2L())}}},1h:S(){1K 89(f.2E.dw),89(f.2E.dx),89(f.2E.dy),89(f.2E.dz),f.1i.iQ(),f.1i.65.20(),f.X.20.d3(),f.X.20.4m(),f.1c.1h(),f.1S.1h(),f.1q.2i.1h(),f.1q.aW.1h(),f.5L.1h(),f.1q.4j.1h(),f.2j.1h(),f.1w.1h(),f.1c.20.4l(),f.1q.2j.1h(),f.1z.X(),f.2Z.1h(),a(1j).on("1z."+e,S(){f.X.6N.eU(),"ad"===f.X.5t&&f.o.5D&&f.1z.bU(),f.X.c6&&f.1z.5f()}),f.26&&(a(1j).7S(".1D"+e),a(1j).on("1z.1D"+e,S(){f.1D.1s("5g","1z.1j",f.1i.7a,!0)})),a(1j).on("eE."+e,S(){f.1i.eY(),f.1z.5f()}),f.1i.eY(),a(1j).5w("1z"),a(1j).5w("eE"),f.2u.46("iT")&&c.4h("iT",f.2u.4C()),f.1J.2P(f.X,{6w:!0}),f.X.2v.iU?5q f.2u.8z("iV"):5q f.1w.78(f.1c.3f.1I)},3X:S(){c.27("ls-8r"),c.3Q(".ls-bQ-6z-4P").27("ls-8r")},6f:S(){c.3N("ls-8r"),c.3Q(".ls-bQ-6z-4P").3N("ls-8r")}},f.1J={2O:{31:S(b,c,d){18 e=a.3T(b),g=e.1E(" "),h="",i=["qt","qu"],j=[f.X.1a,f.X.1b];e=e.2l("qv","0").2l("qw","1k%").2l("qx","50%").2l("qy","50%").2l("i1","0").2l("il","1k%").2l("1H","0").2l("3L","1k%").2l("7P","50%").2l("qz","50%").2l("1Y","0").2l("1U","1k%").1E(" ");2h(18 k=0;k<e.1m;k++)if(g[k].1d("X")!==-1){f.W.1f.1n.62=!0;18 l=c.T(f.1l.1h.1R).1X.$1N[0].1P;h+=k<2?j[k]/(1k/1e(e[k]))-1e(l[i[k].4z()])-1e(l["6K"+i[k]])+"px ":"hb"}2F{if(k<2&&c&&d)2K(k){1g 0:j=d.1a();1A;1g 1:j=d.1b()}h+=e[k].1d("%")!==-1?k<2&&c&&d?j/(1k/1e(e[k]))+"px ":e[k]+" ":1e(e[k])*f.1z.1C+"px "}1K a.3T(h)},4I:S(a,b){if("5b"==1t a){18 c,d,e;1K a=a.4z(),a.1d("qA")!==-1||a.1d("fm")!==-1?c=g.8V.9k:(d=a.49(/(iW|di|d6)(.+)/)[2],e=g[d.fN(0).eh()+d.eI(1)],a.1d("iW")!==-1?c=e.bO:a.1d("d6")!==-1?c=b?e.5X:e.6C:a.1d("di")!==-1&&(c=b?e.6C:e.5X)),c}1K a},22:S(b,c,d,e){18 g=a.5x({},b),h={3R:"2c",5J:"3w",5Y:"3v"};1K a.3g(h,S(a,b){a in g&&(g[b]=g[a],2m g[a])}),"6c"===d?g.4v=g.4B=g.iX=1:g.eZ!==e&&(g.4v=g.4B=g.iX=g.eZ,2m g.eZ),g.3Z&&(g.3Z="6c"===d?g.3Z/3z:g.3Z),"2a"==1t c&&(c="qE"),g.2q=f.1J.2O.4I(c),g},d4:S(a,b){if(a&&a.1d("(")!==-1&&a.1d(",")!==-1&&a.1d(")")!==-1){18 c=a.1E("(")[1].1E(")")[0].1E(","),d=1;1K c[0]=3q(c[0]),c[1]=3q(c[1]),b.1d("2N")!==-1&&(d=1k,c[0]*=d,c[1]*=d),1u.3A(1u.2D()*(c[1]-c[0]+1)+c[0])/d}1K a},5s:S(a,b){if("5b"==1t a)1K f.1J.2O.f0(a,b);if("5F"==1t a){2h(18 c in a)a[c]=f.1J.2O.f0(a[c],b);1K a}1K a},f0:S(b,c){if("7K"==b||"1O"==b||"ao"==b)1K!0;if("ax"==b||"cE"==b||"qG"==b)1K!1;if("5b"==1t b&&b.1d(f.1l.1h.e9)!==-1){2h(18 d=b.1E(f.1l.1h.e9),e=[],g=0;g<d.1m;g++)e[g]=a.7G(d[g])?3q(a.3T(d[g])):a.3T(d[g]);1K e}1K c?""+1e(b)=="qH"?0:1e(b):a.7G(b)?3q(b):b},ix:S(b){18 c={qI:"4l",qJ:"5z",g7:"e5",qK:"cB",qL:"cB",qM:"7T"};1K a.3g(c,S(a,c){a in b&&(b[c]=b[a],2m b[a])}),b}},fS:S(b){2h(18 g,d=c.iD(),e=d.1m,h=1k,i=0;i<e;i++)if(g=1j.iA(d[i]).eT(b),"2w"!==g){if(g.1d("px")!==-1)1K f.X.$dV=a(d[i]),a(d[i]);g.1d("%")!==-1&&(h=h/1k*1e(g),f.X.$dW=h)}},ek:S(a,b,c){18 d=[];if("8a"==c)2h(18 e=0;e<a;e++)2h(18 f=0;f<b;f++)d.52(e+f*a);2F 2h(18 g=a-1;g>-1;g--)2h(18 h=b-1;h>-1;h--)d.52(g+h*a);1K d},db:S(a){2h(18 c,d,b=a.1m;0!==b;)d=1u.3A(1u.2D()*b),b-=1,c=a[b],a[b]=a[d],a[d]=c;1K a},gV:S(a){18 b=0;2h(18 c in a)a.5R(c)&&++b;1K b},ag:S(a){1K a[0].dM?a[0].dM:a.T("23 ")?a.T("23 "):a.1M("23")},2P:S(a,b,d){if(a&&a.2v){18 e=f.1w.5a();if(d)a.2v[b]=d;2F 2h(18 g in b)a.2v[g]=b[g];18 h=f.1w.5a();a==f.1w&&(f.2u.46("j0")&&c.4h("j0",f.2u.4C()),h!=e&&(h?f.2u.46("j1")&&c.4h("j1",f.2u.4C()):f.2u.46("j2")&&c.4h("j2",f.2u.4C())))}},j3:S(){2h(18 a in f.2E)89(f.2E[a]),2m f.2E[a];2h(18 b in f.4O)9S(f.4O[b]),2m f.4O[b]},j4:S(){f.W.1G&&(f.W.1G.5j().74().5V(),2m f.W.1G),f.W.56&&(f.W.56.5V(),2m f.W.56),f.W.3x&&(f.W.3x.5j().74().5V(),2m f.W.3x),g.3a.qS(c.1y(".ls-bg, .ls-2Q, .ls-1N, .ls-hm, .ls-hn").2S())},fO:S(){f.W.1G&&(f.W.1G.5j().3t(0).74().5V(),2m f.W.1G),f.W.56&&(f.W.56.5j().3t(1).74().5V(),2m f.W.56),c.1y(".ls-2Q:59(.ls-bg-4t)").3g(S(){18 b=a(R).T(f.1l.1h.1R);b.1v.3I&&(b.1v.3I.21().74(),2m b.1v.3I,g.3a.20(b.1X.$7i[0],b.3r.cR)),g.3a.20(b.1X.$1N[0],b.3r.cS)})},j5:S(){a(1j).1s("3D").1s(c).1s(c.1y("*")).1s("."+e).7S("."+e+" .1D"+e+" .1B"+e+" .f1"+e)}},f.1i={$aI:a(a("3D").1m?"3D":"55"),6x:!!bH.cg.49(/(j9|jb|jc|r0|r1|r2|r3|r4 r5|r6|r7 r8|r9 7)/i),hZ:!!1j.ra,2f:{8I:[32,33,34,35,36,37,38,39,40],ax:S(){1j.c4&&1j.c4("jd",R.3V,!1),1j.je=R.rd,1j.aS=2z.aS=R.3V,1j.jg=R.3V,2z.jh=R.ji},7K:S(){1j.jj&&1j.jj("jd",R.3V,!1),1j.aS=2z.aS=2A,1j.je=2A,1j.jg=2A,2z.jh=2A},3V:S(a){a=a||1j.6W,a.3V&&a.3V(),a.rj=!1},ji:S(a){if(f.1i.2f.8I.1d(a.rk)!==-1)1K f.1i.2f.3V(a),!1}},65:{jk:S(){"6i"==f.X.43.1W&&"g1"==f.o.aJ&&(f.X.dZ=f.X.4g),f.1J.2P(f.X,{6Z:!0}),a("3D, 55").27("ls-65"),b.f4(),c.5w("6g")},f5:S(){f.1J.2P(f.X,{6Z:!1}),f.1z.5f(),a("3D, 55").3N("ls-65")},f6:S(){f.1i.65.1p()?(f.1i.65.f5(),2z.cH()):f.1i.65.jk()},20:S(){f.o.gy&&(2z.rq||2z.rr||2z.rs||2z.rt)&&(b.f4=b.f4||b.ru||b.rv||b.rw,2z.cH=2z.cH||2z.rx||2z.ry||2z.rz,a(2z).on("rA."+e+" rB."+e+" rC."+e+" rD."+e,S(){f.1i.65.1p()||f.1i.65.f5()}),c.on("rE."+e,S(){f.1i.65.f6()}))},1p:S(){1K 2z.rF||2z.rG||2z.rH||2z.rI}},eY:S(){R.1a=jp.1a,R.1b=jp.1b,R.7a=a(1j).1a(),R.4K=a(1j).1b(),R.rK=a(2z).1a(),R.hY=a(2z).1b(),R.61=a(1j).bP(),R.1C=R.1a/R.1b,f.X.4g=c.6h().1Y,f.X.9z=c.6h().1H},iQ:S(){18 d,b=R;a(1j).on("1z.f1"+e,S(){b.7a=a(1j).1a(),b.4K=a(1j).1b(),b.1C=b.1a/b.1b,f.X.4g=c.6h().1Y,f.X.9z=c.6h().1H}),a(1j).on("2f.f1"+e,S(){b.61=a(1j).bP(),f.X.4g=c.6h().1Y,f.X.9z=c.6h().1H}),a(1j).on("9l",S(a){b.61=1j.rL,d=a.67?a.67:a.9d.67,1==d.1m&&(b.jm=d[0].dI)})}},f.2u={46:S(c,d){18 e=a.rM(d||b,"hd");1K!(!e||!e[c])},8z:S(a,b,d,g){if(!f.X.8j())if("4N"==1t a)a>0&&a<f.1c.3l+1&&a!=f.1c.2x.1I&&f.1w.78(a,!0,!0);2F 2K(a){1g"ap":f.1i.ap=!0;1g"rN":1g"2H":f.2j.2H();1A;1g"am":f.1i.am=!0;1g"29":1g"1Q":f.2j.1Q();1A;1g"rO":1g"3k":f.2j.3k()}2K(a){1g"rP":b&&f.1f.8i.T(b,d,g);1A;1g"rQ":1g"rR":f.1z.5f();1A;1g"rS":1g"8X":f.W.1G&&(f.W.1G.3t(0),f.W.1G.2L());1A;1g"rT":1g"3o":f.W.1G&&(f.W.1G.hB()?f.W.1G.2L():f.W.1G.3o(),b&&(f.W.1f.1n.hw=!0));1A;1g"rU":1g"21":f.2j.21();1A;1g"rV":1g"5j":f.W.1G&&f.W.1G.21(),f.W.3x&&f.W.3x.21();1A;1g"rW":1g"7O":f.W.1G&&(f.W.1G.5l()<.rX&&f.W.1f.1n.7O(),f.W.1G.2L()),f.W.3x&&f.W.3x.2L();1A;1g"rY":1g"f6":f.X.5a?(c.4U("7O"),f.X.5a=!1):(c.4U("5j"),f.X.5a=!0);1A;1g"3r":1g"rZ":1A;1g"iV":1g"5V":if(f.X.2v.6w){if(f.1J.j3(),f.1J.j4(),f.1J.j5(),f.1f.$5f.s0(),f.2u.46("jq")&&c.4h("jq"),f.X.2v.jr||b){if(f.X.$7r.5T(),f.1q.2i.2I.$5r)2h(18 h=0;h<f.1q.2i.2I.$5r.1m;h++)f.1q.2i.2I.$5r[h]fQ 5u&&f.1q.2i.2I.$5r[h].5T();c.5T(),f.2u.46("jt")&&c.4h("jt")}1j.2y.h1(e)}2F f.1J.2P(f.X,{iU:!0,jr:!!b&&b})}},4C:S(){1K{T:f,s4:f.o,eb:e,5e:b,X:c,2v:f.X.2v,8j:f.X.8j(),2u:S(a){c.4U(a)},1c:{3f:{1I:f.1c.3f.1I,4y:f.1c.2S.4y(f.1c.3f.1I)},2H:{1I:f.1c.2H.1I,4y:f.1c.2S.4y(f.1c.2H.1I)},2x:{1I:f.1c.2x.1I||f.1c.3f.1I,4y:f.1c.2S.4y(f.1c.2x.1I),ju:f.1f.2S("2x,in"),jv:f.1f.2S("2x,1F"),1n:f.W.1G},1Q:{1I:f.1c.1Q.1I,4y:f.1c.2S.4y(f.1c.1Q.1I),ju:f.1f.2S("1Q,in"),jv:f.1f.2S("1Q,1F")},3l:f.1c.3l},s7:f.W.3x,1w:{2v:f.1w.2v,3G:f.1w.3G,2G:f.1w.2G,5a:f.1w.5a()},5z:{41:f.o.5z,2x:f.1w.cl}}}},f.70={9y:!!bH.cg.49(/(j9|jb|jc|s8)/i)&&!bH.cg.49(/(s9|sa|sb)/i),eM:2z.7D.4G.1d("ii://")!==-1,gR:S(){2h(18 b=a("<1x>"),d=!1,e=!1,f=["sc","sd","se","sf","sg"],g=["si","sj","sk","sl","sm"],h=f.1m-1;h>=0;h--)d=d?d:5q 0!==b[0].1P[f[h]];2h(18 i=g.1m-1;i>=0;i--)b.19("3y-1P","jw-3d"),e=e?e:"jw-3d"==b[0].1P[g[i]];1K d&&5q 0!==b[0].1P[f[4]]&&(b.1M("id","ls-so").2e(c),d=3===b[0].sp&&9===b[0].9z,b.5T()),d&&e},fx:bH.cg.1d("sq/5")!==-1},f.9s={},f.2E={},f.4O={},f.1D={4m:{}},f.5N={6p:"6.2.1",iP:"sr. ss. 28."},f.X.47()}}(5u);',62,1766,'|||||||||||||||||||||||||||||||||||||||||||||||||||||this|function|data|||transitions|slider|||||||||||var|css|width|height|slides|indexOf|parseInt|layers|case|init|device|window|100|defaults|length|timeline|filter|element|gui|hover|add|typeof|Math|loop|slideshow|div|find|resize|break|parallax|ratio|debug|split|out|_slideTimeline|left|index|functions|return|duration|attr|wrapper|enabled|style|next|dataKey|media|transitionProperties|bottom|responsive|type|elements|top|textIn|set|stop|transition|src|slide||debugMode|addClass||nextSlide|undefined|clip|rotation||appendTo|scroll|background|for|timers|navigation|autoCSS|replace|delete|class|backgroundVideo|thumbnail|ease|transformPerspective|kenBurns|textOut|api|state|auto|current|_layerSlider|document|null|warn|to|random|timeouts|else|direction|prev|slidebar|mediaProperties|switch|play|startAt|scale|convert|setStates|layer|mediaSettings|get|original|_transition|settings|opacity|backgroundColor|wrappers|yourLogo||transformOrigin|||||||||TweenMax|values|nav||plugins|first|each|curSlide|active|display|start|count|none|cursor|reverse|sliderInit|parseFloat|reset|textOutNodesTo|progress|from|rotationY|rotationX|_slideTransition|transform|1e3|floor|static|youtube|body|player|textInNodesFrom|sequence|abs|_timeline|img|marginLeft|right|children|removeClass|controls|borderRadius|closest|rotate|circle|trim|vimeo|preventDefault|_|hide|fromTo|delay||max|iframe|initial|||hasEvent|load|outLayerToCSS|match|totalDuration|loopToCSS|skin|paused|new|styleSettings|offsetTop|triggerHandler|color|shadow|hoverToCSS|firstSlide|options|padding|animation|parent|maxWidth|onComplete|bar|video|hasClass|scaleX|outerWidth|console|deeplink|toLowerCase|thumbnails|scaleY|eventData|visible|immediateRender|outerHeight|href|inLayerFromCSS|easing|hidden|viewportHeight|isEmptyObject|filters|number|intervals|container|text|translateX|should|inLayerToCSS|layerSlider|self|link|overflow|normal|translateY||volume|push|click|image|html|_forceLayersOut|com|300|not|isPaused|string|layerslider|fadeIn|target|all|log|transitionoutstart|html5|pause|default|timeScale|marginTop|block|webkit|nodes|void|containerElement|properties|positionToViewport|jQuery|setTimeout|trigger|extend|pauseOnHover|cycles|hoverShouldBeConverted|maxRatio|wrap|playByScroll|autoplay|object|fadeOut|skewX|slideBackground|rotateX|skewY|preload|showinfo|plugin|transparent|create|clipShouldBeConverted|hasOwnProperty|inLayerStyleShouldBeConvertedFrom|remove|repeat|kill|createTransition|easeIn|rotateY|getStyle||winScrollTop|shouldRestart|layersWrapper|outLayerStyleShouldBeConvertedTo|fullscreen|innerWrapper|touches|loopLayerShouldBeConverted|vpcontainer|box|round|after|tile|visibility|show|mouseleave|offset|fullsize|loopstart|change|thumbnailNavigation|cycle|500|position|version|fontSize|tablet|level|phone|zoom|prop|isLoaded|isMobile|url|fullwidth|transitioninend|paddingTop|easeOut|clipTo|paddingRight|ceil|before|createCuboids|paddingLeft|preImages|margin|_layerSliders|rows|check|cols|borderLeftWidth|TimelineMax|border|borderRightWidth|borderTopWidth|borderBottomWidth|slideTransition|event|info|zIndex|inFullscreen|browser|error|loopend|timeScaleModifier|clear||mouseenter|running|changeTo|userInitOptions|viewportWidth|paddingBottom|shiftNodes|textinstart|transitioninstart|allinend|allMediaLayers|outClipShouldBeConverted|loopWrapper|attributes|lsSliderUID|onUpdateParams|splitType|pluginsPath|finished|responsiveUnder|thumb|hiddenWrapper|forceLayersOutDuration|timelineIsCalculated|customtransition3d|sensitive|globals|protocol|curTiles|sliderContainerElementWidth|customtransition2d|sliderContainerElement|slideIndex|location|onUpdate|durationIn|isNumeric|transition2d|the|transition3d|enable|minmobilefontsize|group|curSrc|resume|center|getTiming|playVideo|off|shuffleSlideshow|contains|layerInit|kbScale|textoutstart|transformProperties|animate|deg|saved|kbRotation|https|videos|meta|hoverWrapper|distance|onStart|clearTimeout|forward|textInShouldBeConverted|script|poster|outerWrapper|animatingSlides|parallaxWrapper|span|update|isBusy|minfontsize|textOutShouldBeConverted|percentHeight|percentWidth|layerShouldBeConverted|outLayerStyleToCSS|layerTransition|forcehide|skinsPath|layerStyleTo|clipWrapper|slidebuttons|calculateTransformProperties|bgWrapper|pausedByVideo|methods|changingSlides|repeatDelay|layerFrom|yoyo|always|layerStyleFrom|groupEnd|firstStart|keys|globalBGColor|textinend|setHover|col|globalBGImage|mousemove|textInNodesTo|curNext|wrapped|inLayerStyleFromCSS|textoutend|scale2D|Linear|marginRight|replay|transitionoutend|overlay||portrait|percH|audio|byline|timeout|title|styleProperties|autoStart|percW|layerTo|createPlayer|normalized|originalEvent|removeAttr|shouldBeConverted|pluginsBeingLoaded|hash|textLayer|down|easeNone|touchmove|substring|slideOut|up|LayerSlider|250|append|initializedPlugins|afterIn|initialized|setStartStop|splice|allinandloopend|isSafari|offsetLeft|durationOut|slideInSequence|transformPropertiesCalculated|loopClipShouldBeConverted|setBackgroundVideo|outLayerShouldBeConverted|pausedByHover|pausedByLastCycle|unselectable|prevNext|stopped|http|playingInCurSlide|videoElement|videoURL|centerDegree|head|WordPress|clearInterval|easeInOutQuint|inClipShouldBeConverted|nodesTo|inLayerShouldBeConverted|stopBackgroundVideo|slidechangeonly|setRandomProperties|min|9999|originalLeft|originalRight|originalTop|originalBottom|backgroundvideo|hoverImage|durationMove|buttonStart||buttonStop|getAttribute|inside|transitionDuration|timeShift|getURL|inLayerTo|containerElementWidth|errorText|touchEndX|inLayerStyleShouldBeConvertedTo|touchNext||true|touchPrev|onCompleteCallback|outLayerTo|autoPauseSlideshow||outLayerStyleShouldBeConvertedFrom|responsiveLayers|tnHeight|disable|layersWidth|navStartStop|getXY|twoWaySlideshow|pauseLayers|startInViewport|cover|slideBGSize|layerSliderTransitions|prependTo|overflowWrapper|fullSizeMode|pluginsNotLoaded|name|originalWidth|youTubeIsReady|preloadingImages|touchStartX|onSlide|back|onmousewheel|showThumbnail|videoEnded|seekTo|loadingIndicator|durationLeave|playBackgroundVideo|randomized|clipSlideTransition|removeFromTimeline|checkSlideshowState|showUntil|hideThumbnail|customZIndex|slideBGWrapper|desktop|bullets|staticfrom||staticto|defaultProperties|navButtons||_tween||skinHeight|mouseMove|hoverBottomNav|setInterval|notstatic|sliderElement|skinWidth|notactive|clipFrom|bgonly|YT|layerStyleShouldBeConvertedFrom|layerStyleShouldBeConvertedTo|2e3|now|nodesFrom|Date||youtu|nocookie|bgOuterWrapper|vimeoIsReady|setMediaElements|select|bgvideo|setProperties|navigator|afterLoop|bgFrom|bgTo|tnContainerWidth|animate3D|animate2D|easeInOut|scrollTop|wp|endedInCurSlide|fillmode|backgroundSize|viewport|layerSliderCustomTransitions|sliderFadeInDuration|backgroundPosition|letterSpacing|inLayerStyleToCSS|lineHeight|lastDirection|shadowIsChecked|global|addEventListener|jquery|shouldResize|outLayerStyleFromCSS|addLayers|outLayerStyleTo||outClipTo|currentScript|750|textOutNodesFrom|fadeTo|userAgent|loopTo|pageX|srcSet|scriptPath|curCycle|ontouchstart|srcset|sizes|blur|clone|pluginsLoaded|150||hue|calculatedTimeShift|onReverseComplete|forceDirection|ready|Please|originalHeight|layersContainerWidth|180|inner|disabled|mediaLayer|tnWidth|exitFullscreen|loopFromCSS|outClipToCSS|outLayerStyleFrom|outLayerFromCSS|smartLinks|outLayerFrom|inClipTo|inLayerStyleTo|png|loopWrapperOnSlideChange|wrapperOnSlideChange|tagName|slidesData|relative|alloutandloopend|linkto|textoutandloopend|outer|wrapperData|splitTypeKeys|alwaysOnTop|styles|randomProperties|words|easeout|mix|blend|mode||shuffleArray|indexOfSlideInSequence|cycleSlideIndex|imagesOfSlide|waitingForYouTube|waitingForVimeo|loadYouTube|easein|isYouTubeReady|loaded|preloadBackgroundVideo|shouldPlay|loadVimeo||isVimeoReady|videopreview|forceHide|hoverWrapperInner|axis|switchHelper|last|skinLoad1|skinLoad2|skinLoad3|skinLoad4|progressBarElement|elementWidth|calc|started|useSrcset|allowRestartOnResize|slideOnSwipe|hideOver|clientX|hideOnMobile|yourLogoLink|parallaxCenterLayers|currentSrc|hoverFromCSS|parallaxSensitivity|parallaxCenterDegree|setLayers|originalLayer|waitForJSApisLoaded|tnInactiveOpacity|tnActiveOpacity|parentWithNumericWidthValue|parentWithNumericWidthValuePercent|loopClipTo|fitheight|heroTop|layersHeight|fixedsize|navPrevNext|stretch|skins|forceCycles|slideshowOnly|insertSelector|fitScreenWidth|lsDataArraySplitChar||uid|originalMarkup|willBePaused|isPreloaded|setTransition|custom|toUpperCase|toString|checkVersions|sortArray|nextTiles|topleft|bottomright|topright|bottomleft||origin|concat|are|slideTimeline|setNodesSequence|modifyTimeScale|under|over|canhover|mouseEnter|hoverIn|scrollModifier|centerLayers|orientationchange|addShadow|gamma|beta|slice|your|onCompleteParams|namespace|usesFileProtocol|files|has|been|pluginLoaded|hideWelcomeMessage|sliderVersion|getPropertyValue|showHide|content|kreaturamedia|lsScript|getDimensions|scale3d|_properties|setter|slidersList|GSAP|requestFullscreen|exit|toggle|touchNav|touchstart|touchend||hashChange|loading|keyboard|touch|which|loopFrom|wrapperOnTimelineEnd|preloadedWidth|preloadedHeight|hideUnder|line|linear||optimizeForMobile|yourLogoTarget|slideIndexes|10px|yourLogoStyle|parallaxScrollReverse|startat|shift|fade|isOld|05|canShow|lines|thumbnailsAreLoaded|nodeName|Image|preloadedImagesCount|lastIndexOf|success|slideout|youtubePreview|waitForWrap|backgroundImage|autoPlayVideos|sliderWillResize|charAt|resetSlideTimelines|sliderDidResize|instanceof|wrapping|getSliderClosestParentElementWidthNumericValueOfProperty|bgVideosWrapper|hoverTo|showSlideBarTimer|tn|showCircleTimer|showBarTimer|hoverPrevNext|hoverFrom|hero|nextSlideIndex|inClipFromCSS|fixed|translateZ|keybNav|forceLoopNum|sequences|contain||globalBGPosition|globalBGSize|globalBGAttachment|globalBGRepeat|imageLayer|Width|Height||normalizedSequence|rect|sw|sepia|directionAtSlideTransitionStart|forced|slideChangeWillStart|playByScrollSpeed|slideBGPosition|saturate|insertMethod|layersContainerHeight|overflowx|overflowy|_gsTransform|allowFullscreen|preventSliderClip|restart|invert|slideTransitionType|transitionType|slideChangeDidStart|grayscale|smart|changeBackgroundVideo|call|slideChangeWillComplete|prepare|wmode|opaque|applyBG|slideChangeDidComplete|videoThumbnailURL|substr|supports3D|custom3d|custom2d|contrast|countProp|brightness|CUSTOM|javascript|parentNode|loopClipToCSS|removeSlider|strong|notification|inClipFrom|setVolume|linkTo|horizontal|large|depth||0px|front|events|alloutend|inLayerStyleFrom|use|mirror|addEvent|currentTime|volumeIsSet|customTransitions|curtile|nexttile|keyframe|autoRemoveChildren|parallaxtransformperspective|parallaxdistance|you|resetStates|slideTimelineDidStart|slideTimelineDidReverseComplete|shouldReplay|oldjquery|slideTimelineDidUpdate|createStartStop|slideTimelineDidCreate|reversed|slideTimelineDidComplete|timing1|timing3|resetNodes|createSides|staggerFromTo|and|scrollForward|above|page|parallaxrotation|scrollBackwards|parallaxrotate|parallaxdurationleave|absolute|mouseLeave|createTimeline|reverseTimeScale|parallaxdurationmove|hoverOut|updateTo|parallaxtransformorigin|docHeight|supportOrientation|deviceTurn|slidertop|parallaxaxis|removeShadow|library|parallaxevent|parallaxtype|sides|4e3|fadeInDuration||reverseDuration|kenburnsscale||kenburnsrotate||kenburnsrotation|kenburnszoom|file|pan|Plugin|sliderbottom|kenburnspan||checkLoaded|like|looks|pluginData||requiredLSVersion|textinandloopend|sliderWillLoad|It|oldProperties|issue|createStyleSheet|getComputedStyle|percWidth|conWidth|parents|rel|stylesheet|showNotice|transitioninandloopend|timelineHierarchy|wpVersion|lswpVersion|deltaY|linkedToSlide|scroll2|checkPosition|releaseDate|setBasicEvents|btmMod|resizeShadow|sliderDidLoad|shouldBeDestroyed|destroy|easeinout|scaleZ|timer|hider|slideshowStateDidChange|slideshowDidPause|slideshowDidResume|clearTimers|clearTimelines|clearEvents|half|inLayerFrom|LS_GSAP|iPhone||iPod|iPad|DOMMouseScroll|onwheel|transitionorigami|ontouchmove|onkeydown|preventDefaultForScrollKeys|removeEventListener|enter|inClipToCSS|touchX|parallaxWrapperData|addLayer|screen|sliderDidDestroy|sholudBeRemoved||sliderDidRemove|layersIn|layersOut|preserve|pagebottom|setAttribute|looprepeatdelay|loopcount|webkitFilter|loopduration|bgcolor|loopstartat|loopdelay|backgroundcolor|bgposition|backgroundposition|insertAfter|bgsize|loopclip|backgroundsize|loopfilter|loopoffsety|transitionduration|loopoffsetx|looptransformorigin|timeshift|loopskewy|slidedelay|UID|loopskewx|borderTopLeftRadius|borderTopRightRadius|progressbar|staticImage|mousedown|borderBottomRightRadius|mouseup|borderBottomLeftRadius|loopscaley|font|indicator|400|size||loopscalex|keydown|isAnimating|isPreloading|textInNodesToCSS|loopscale|letter|spacing|dataLS|looprotationy|removeAttribute|slideIn|converted|_self|looprotationx|prop1|prop2|prop4|lines_edge|looprotation|looprotatey|map|looprotatex|gif|base64|R0lGODlhAQABAIAAAAAAAP|yH5BAEAAAAALAAAAAABAAEAAAIBRAA7|looprotate|splitType3a|loopopacity|splitType3b|texttransitionout|jpg|chars|Quint|maxresdefault|lines_center|splitType1|textdurationout|lines_rand|fail|splitType2|slidein|forever|clicked|textoutstartat|lines_desc|textstartatout|textdelayout|textshiftout|texttypeout|textoffsetyout|textoffsetxout|texttransformoriginout|texteasingout|texteaseout|lines_asc|textskewyout|textskewxout|textscaleyout|textscalexout||textscaleout|textrotationyout|words_edge|textrotationxout|textrotationout|1025||767||768|nothumb|inherit|textrotateyout|textrotatexout|textrotateout|textopacityout|textfadeout||item|transitionout|easingout||v6|words_center|pointer|SplitType|words_rand|words_desc|words_asc|durationout|101|disbaled|350|outstartat|chars_edge|3e3|startatout|empty|noSlideTransition|nextLoop|showuntil|clipout|offsetyout|offsetxout|transformoriginout|0deg|filterout|_LS|heightout|widthout|radiusout|colorout|chars_center|bgcolorout|01|skewyout|infinite|skewxout|scaleyout|_no|found_||scalexout|sliderInitOptions|scaleout|rotationyout|leaveOverflow|defaultInitOptions|rotationxout|rotationout|obj|rotateyout|rotatexout|rotateout|merge|opacityout|fadeout|specified|customTransition||chars_rand|texttransitionin|clipWrapperData|LS|textdurationin|strict|prototype|Number|textinstartat|chars_desc|insertBefore|textstartatin|logo|invalidSlideIndex|textdelayin|textshiftin|carousel|crossfad|here|curtiles|texttypein|nexttiles|clicking|updating|about|more|textoffsetyin|read|textoffsetxin|can|texttransformoriginin|changedByUser|You|setdir|texteasingin|vertical|texteasein|entry|loopWrapperData|wordpress|forceStop|faq|support||Updater|textskewyin|Important|higher|newer|least|textskewxin|dequeue|chars_asc|errors|textscaleyin|requires|mixed||textscalexin|textscalein|textrotationyin||translate3d|scrollHeight|old|textrotationxin|getTweensOf|seek|using|continue|hovertransformperspective|looptransformperspective|enablejsapi|Old|textrotationin|textrotateyin|texttransformperspectiveout|vi|Settings|Advanced|embed|textrotatexin|layersOnSlideTimeline|slideTimelineDuration|Troubleshooting|textrotatein|textopacityin|within|option|textfadein|texttransformperspectivein|timing2|Quad|includes|Sine|JS|transitionin|easingin|Put|texttransformperspective|addPause|www|looplayers|addCallback|iframe_api|transformperspectiveout|durationin|onYouTubeIframeAPIReady|instartat|transformperspectivein||startatin|transformperspective|delayin|main|clipin|_reversed|onReverseCompleteParams||area|999999px|offsetyin||offsetxin|transformoriginin|skewy|admin|skewx|scaley|navigate|sliders|problems|scalex|deviceorientation|parallaxlevel|rotationy|hovertransformorigin|causing|hoverradius|rotationx|orientation|rotatey|Player|hoverborderradius|copy|extra|onReady|pageY|loads|onStateChange|desc|pauseVideo|rand|sort|edge|char|word|rotatex|hoverfilter|theme|vimeocdn|froogaloop2|hoveroffsety|Froogaloop|another|Cannot|player_id|include|v2|manually|that|json|missing|callback|getJSON|added|but|source|found|thumbnail_large|ajax|dataType|Additional|complete|filterin|heightin|widthin|hoveroffsetx|Required|have||radiusin|finish|colorin|outerHTML|bgcolorin|ended|pagetop|Find|updates|docs|getBoundingClientRect|clientWidth|clientHeight|noWidth|noWidth2|noHeight|noHeight2|skewyin|conWidth2|conHeight2|hoveralwaysontop|fullwidth2|fullsize2|conHeight|fix|playvideo|skewxin|bgCover|scaleyin|Multiple|fitvidsignore|backgrounds|remainingSlideDuration|scalexin|backgroundRepeat|backgroundAttachment|scalein|yourlogo|rotationyin|layerCustomSliderTransitions|slideTransitions|noSlideTransitions|wheel|clientY|bock|rotationxin|rotationin|rotateyin|rotatexin|pre|inviewport|rotatein|textDecoration|outline|opacityin|fadein|mirrortransitions|Left|Top|sliderleft|sliderright|slidercenter|slidermiddle|middle|swing|hoverdurationout|hoverdurationin|hoverduration|easeInOutQuart|hovereasingout|false|NaN|firstLayer|loops|layersContainer|sublayerContainer|randomSlideshow|hovereaseout|hovereasingin|hovereasein|hovereasing|hoverease|killTweensOf|hovercolor|hoverbgcolor|hoverskewy|hoverskewx|hoverscaley|hoverscalex|hoverscale|Android|BlackBerry|BB10|webOS|Windows|Phone|mobi|opera|mini|nexus|DeviceOrientationEvent|hoverrotationy|hoverrotationx|preventdefault|hoverrotation|sideleft|sideright|hoverrotatey|filterto|returnValue|keyCode|filterfrom|hoverrotatex|touchscroll|hoverrotate|hoveropacity|fullscreenEnabled|webkitFullscreenEnabled|mozFullscreenEnabled|msFullscreenEnabled|webkitRequestFullscreen|mozRequestFullscreen|msRequestFullscreen|webkitExitFullscreen|mozCancelFullScreen|msExitFullscreen|fullscreenchange|webkitfullscreenchange|mozfullscreenchange|msfullscreenchange|dblclick|fullscreenElement|webkitFullscreenElement|mozFullscreenElement|msFullscreenElement|640|docWidth|pageYOffset|_data|previousSlide|startSlideshow|updateLayerData|redrawSlider|redraw|replaySlide|reverseSlide|stopSlideshow|pauseSlider|resumeSlider|001|toggleSlider|resetSlider|removeData|360|below|600|userData|loopeasing|loopease|slideChangeTimeline|Safari|Opera|Chrome|Edge|perspective|OPerspective|msPerspective|MozPerspective|WebkitPerspective||transformStyle|OTransformStyle|msTransformStyle|MozTransformStyle|WebkitTransformStyle|loopyoyo|test3d|offsetHeight|rident|2017|03|apply'.split('|'),0,{}));;

/*
	* 2D & 3D Transitions for LayerSlider
	*
	* (c) 2011-2017 George Krupa, John Gera & Kreatura Media
	*
	* Plugin web:			https://layerslider.kreaturamedia.com/
	* Licenses: 			http://codecanyon.net/licenses/
*/



;eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2b 22={2a:[{i:\'Z M G\',d:1,g:1,f:{e:0,j:\'n\'},c:{o:\'V\',b:\'1f\',a:F,h:\'t\'}},{i:\'Z M t\',d:1,g:1,f:{e:0,j:\'n\'},c:{o:\'V\',b:\'1f\',a:F,h:\'G\'}},{i:\'Z M L\',d:1,g:1,f:{e:0,j:\'n\'},c:{o:\'V\',b:\'1f\',a:F,h:\'K\'}},{i:\'Z M K\',d:1,g:1,f:{e:0,j:\'n\'},c:{o:\'V\',b:\'1f\',a:F,h:\'L\'}},{i:\'29\',d:1,g:1,f:{e:0,j:\'n\'},c:{o:\'13\',b:\'1f\',a:F,h:\'t\'}},{i:\'Y P n\',d:[2,4],g:[4,7],f:{e:1j,j:\'n\'},c:{o:\'13\',b:\'y\',a:F,h:\'t\'}},{i:\'Y P D\',d:[2,4],g:[4,7],f:{e:1j,j:\'D\'},c:{o:\'13\',b:\'y\',a:F,h:\'t\'}},{i:\'Y P 1i-n\',d:[2,4],g:[4,7],f:{e:1j,j:\'1i-n\'},c:{o:\'13\',b:\'y\',a:F,h:\'t\'}},{i:\'Y P 1i-D\',d:[2,4],g:[4,7],f:{e:1j,j:\'1i-D\'},c:{o:\'13\',b:\'y\',a:F,h:\'t\'}},{i:\'Y P (k)\',d:[2,4],g:[4,7],f:{e:1j,j:\'k\'},c:{o:\'13\',b:\'y\',a:F,h:\'t\'}},{i:\'1x 1z M G\',d:1,g:1u,f:{e:25,j:\'D\'},c:{o:\'13\',b:\'28\',a:U,h:\'t\'}},{i:\'1x 1z M t\',d:1,g:1u,f:{e:25,j:\'n\'},c:{o:\'13\',b:\'u\',a:U,h:\'t\'}},{i:\'1x 1z M L\',d:1u,g:1,f:{e:25,j:\'1i-D\'},c:{o:\'13\',b:\'u\',a:U,h:\'t\'}},{i:\'1x 1z M K\',d:1u,g:1,f:{e:25,j:\'1i-n\'},c:{o:\'13\',b:\'u\',a:U,h:\'t\'}},{i:\'1x X M G\',d:1,g:25,f:{e:1j,j:\'D\'},c:{o:\'V\',b:\'u\',a:1e,h:\'t\'}},{i:\'1x X M t\',d:1,g:25,f:{e:1j,j:\'n\'},c:{o:\'V\',b:\'u\',a:1e,h:\'G\'}},{i:\'1x 27 M L\',d:25,g:1,f:{e:1j,j:\'1i-D\'},c:{o:\'V\',b:\'u\',a:1e,h:\'K\'}},{i:\'1x X M K\',d:25,g:1,f:{e:1j,j:\'1i-n\'},c:{o:\'V\',b:\'u\',a:1e,h:\'L\'}},{i:\'Z P m G (k)\',d:[2,4],g:[4,7],f:{e:1c,j:\'k\'},c:{o:\'V\',b:\'y\',a:1l,h:\'G\'}},{i:\'Z P m t (k)\',d:[2,4],g:[4,7],f:{e:1c,j:\'k\'},c:{o:\'V\',b:\'y\',a:1l,h:\'t\'}},{i:\'Z P m L (k)\',d:[2,4],g:[4,7],f:{e:1c,j:\'k\'},c:{o:\'V\',b:\'y\',a:1l,h:\'L\'}},{i:\'Z P m K (k)\',d:[2,4],g:[4,7],f:{e:1c,j:\'k\'},c:{o:\'V\',b:\'y\',a:1l,h:\'K\'}},{i:\'Z k P m k 1R\',d:[2,4],g:[4,7],f:{e:1c,j:\'k\'},c:{o:\'V\',b:\'y\',a:1l,h:\'k\'}},{i:\'Z d m G (n)\',d:[7,11],g:1,f:{e:1a,j:\'n\'},c:{o:\'V\',b:\'u\',a:p,h:\'G\'}},{i:\'Z d m G (D)\',d:[7,11],g:1,f:{e:1a,j:\'D\'},c:{o:\'V\',b:\'u\',a:p,h:\'G\'}},{i:\'Z d m G (k)\',d:[7,11],g:1,f:{e:1a,j:\'k\'},c:{o:\'V\',b:\'u\',a:p,h:\'G\'}},{i:\'Z d m t (n)\',d:[7,11],g:1,f:{e:1a,j:\'n\'},c:{o:\'V\',b:\'u\',a:p,h:\'t\'}},{i:\'Z d m t (D)\',d:[7,11],g:1,f:{e:1a,j:\'D\'},c:{o:\'V\',b:\'u\',a:p,h:\'t\'}},{i:\'Z d m t (k)\',d:[7,11],g:1,f:{e:1a,j:\'k\'},c:{o:\'V\',b:\'u\',a:p,h:\'t\'}},{i:\'Z d M K m L (n)\',d:[7,11],g:1,f:{e:1a,j:\'n\'},c:{o:\'V\',b:\'u\',a:p,h:\'L\'}},{i:\'Z d M K m L (k)\',d:[7,11],g:1,f:{e:1a,j:\'k\'},c:{o:\'V\',b:\'u\',a:p,h:\'L\'}},{i:\'Z d M L m K (D)\',d:[7,11],g:1,f:{e:1a,j:\'D\'},c:{o:\'V\',b:\'u\',a:p,h:\'K\'}},{i:\'Z d M L m K (k)\',d:[7,11],g:1,f:{e:1a,j:\'k\'},c:{o:\'V\',b:\'u\',a:p,h:\'K\'}},{i:\'Z O m L (n)\',d:1,g:[12,16],f:{e:q,j:\'n\'},c:{o:\'V\',b:\'u\',a:p,h:\'L\'}},{i:\'Z O m L (D)\',d:1,g:[12,16],f:{e:q,j:\'D\'},c:{o:\'V\',b:\'u\',a:p,h:\'L\'}},{i:\'Z O m L (k)\',d:1,g:[12,16],f:{e:q,j:\'k\'},c:{o:\'V\',b:\'u\',a:p,h:\'L\'}},{i:\'Z O m K (n)\',d:1,g:[12,16],f:{e:q,j:\'n\'},c:{o:\'V\',b:\'u\',a:p,h:\'K\'}},{i:\'Z O m K (D)\',d:1,g:[12,16],f:{e:q,j:\'D\'},c:{o:\'V\',b:\'u\',a:p,h:\'K\'}},{i:\'Z O m K (k)\',d:1,g:[12,16],f:{e:q,j:\'k\'},c:{o:\'V\',b:\'u\',a:p,h:\'K\'}},{i:\'Z O M t m G (n)\',d:1,g:[12,16],f:{e:q,j:\'n\'},c:{o:\'V\',b:\'u\',a:p,h:\'G\'}},{i:\'Z O M t m G (k)\',d:1,g:[12,16],f:{e:q,j:\'k\'},c:{o:\'V\',b:\'u\',a:p,h:\'G\'}},{i:\'Z O M G m t (D)\',d:1,g:[12,16],f:{e:q,j:\'D\'},c:{o:\'V\',b:\'u\',a:p,h:\'t\'}},{i:\'Z O M G m t (k)\',d:1,g:[12,16],f:{e:q,j:\'k\'},c:{o:\'V\',b:\'u\',a:p,h:\'t\'}},{i:\'Y s X P m G (k)\',d:[2,4],g:[4,7],f:{e:1c,j:\'k\'},c:{o:\'Q\',b:\'y\',a:1l,h:\'G\'}},{i:\'Y s X P m t (k)\',d:[2,4],g:[4,7],f:{e:1c,j:\'k\'},c:{o:\'Q\',b:\'y\',a:1l,h:\'t\'}},{i:\'Y s X P m L (k)\',d:[2,4],g:[4,7],f:{e:1c,j:\'k\'},c:{o:\'Q\',b:\'y\',a:1l,h:\'L\'}},{i:\'Y s X P m K (k)\',d:[2,4],g:[4,7],f:{e:1c,j:\'k\'},c:{o:\'Q\',b:\'y\',a:1l,h:\'K\'}},{i:\'Y s X k P m k 1R\',d:[2,4],g:[4,7],f:{e:1c,j:\'k\'},c:{o:\'Q\',b:\'y\',a:1l,h:\'k\'}},{i:\'Y s X P M K-t (n)\',d:[2,4],g:[4,7],f:{e:1c,j:\'n\'},c:{o:\'Q\',b:\'y\',a:1l,h:\'26\'}},{i:\'Y s X P M L-G (D)\',d:[2,4],g:[4,7],f:{e:1c,j:\'D\'},c:{o:\'Q\',b:\'y\',a:1l,h:\'1Y\'}},{i:\'Y s X P M K-G (k)\',d:[2,4],g:[4,7],f:{e:1c,j:\'k\'},c:{o:\'Q\',b:\'y\',a:1l,h:\'1W\'}},{i:\'Y s X P M L-t (k)\',d:[2,4],g:[4,7],f:{e:1c,j:\'k\'},c:{o:\'Q\',b:\'y\',a:1l,h:\'23\'}},{i:\'Y s X d m G (n)\',d:[7,11],g:1,f:{e:1a,j:\'n\'},c:{o:\'Q\',b:\'u\',a:p,h:\'G\'}},{i:\'Y s X d m G (D)\',d:[7,11],g:1,f:{e:1a,j:\'D\'},c:{o:\'Q\',b:\'u\',a:p,h:\'G\'}},{i:\'Y s X d m G (k)\',d:[7,11],g:1,f:{e:1a,j:\'k\'},c:{o:\'Q\',b:\'u\',a:p,h:\'G\'}},{i:\'Y s X d m t (n)\',d:[7,11],g:1,f:{e:1a,j:\'n\'},c:{o:\'Q\',b:\'u\',a:p,h:\'t\'}},{i:\'Y s X d m t (D)\',d:[7,11],g:1,f:{e:1a,j:\'D\'},c:{o:\'Q\',b:\'u\',a:p,h:\'t\'}},{i:\'Y s X d m t (k)\',d:[7,11],g:1,f:{e:1a,j:\'k\'},c:{o:\'Q\',b:\'u\',a:p,h:\'t\'}},{i:\'Y s X d M K m L (n)\',d:[7,11],g:1,f:{e:1a,j:\'n\'},c:{o:\'Q\',b:\'u\',a:p,h:\'L\'}},{i:\'Y s X d M K m L (k)\',d:[7,11],g:1,f:{e:1a,j:\'k\'},c:{o:\'Q\',b:\'u\',a:p,h:\'L\'}},{i:\'Y s X d M L m K (D)\',d:[7,11],g:1,f:{e:1a,j:\'D\'},c:{o:\'Q\',b:\'u\',a:p,h:\'K\'}},{i:\'Y s X d M L m K (k)\',d:[7,11],g:1,f:{e:1a,j:\'k\'},c:{o:\'Q\',b:\'u\',a:p,h:\'K\'}},{i:\'Y s X O m L (n)\',d:1,g:[12,16],f:{e:q,j:\'n\'},c:{o:\'Q\',b:\'u\',a:p,h:\'L\'}},{i:\'Y s X O m L (D)\',d:1,g:[12,16],f:{e:q,j:\'D\'},c:{o:\'Q\',b:\'u\',a:p,h:\'L\'}},{i:\'Y s X O m L (k)\',d:1,g:[12,16],f:{e:q,j:\'k\'},c:{o:\'Q\',b:\'u\',a:p,h:\'L\'}},{i:\'Y s X O m K (n)\',d:1,g:[12,16],f:{e:q,j:\'n\'},c:{o:\'Q\',b:\'u\',a:p,h:\'K\'}},{i:\'Y s X O m K (D)\',d:1,g:[12,16],f:{e:q,j:\'D\'},c:{o:\'Q\',b:\'u\',a:p,h:\'K\'}},{i:\'Y s X O m K (k)\',d:1,g:[12,16],f:{e:q,j:\'k\'},c:{o:\'Q\',b:\'u\',a:p,h:\'K\'}},{i:\'Y s X O M t m G (n)\',d:1,g:[12,16],f:{e:q,j:\'n\'},c:{o:\'Q\',b:\'u\',a:p,h:\'G\'}},{i:\'Y s X O M t m G (k)\',d:1,g:[12,16],f:{e:q,j:\'k\'},c:{o:\'Q\',b:\'u\',a:p,h:\'G\'}},{i:\'Y s X O M G m t (D)\',d:1,g:[12,16],f:{e:q,j:\'D\'},c:{o:\'Q\',b:\'u\',a:p,h:\'t\'}},{i:\'Y s X O M G m t (k)\',d:1,g:[12,16],f:{e:q,j:\'k\'},c:{o:\'Q\',b:\'u\',a:p,h:\'t\'}},{i:\'1v\',d:1,g:1,f:{e:0,j:\'n\'},c:{o:\'Q\',b:\'1f\',a:U,h:\'t\',1g:0.5}},{i:\'1v d\',d:4,g:1,f:{e:1c,j:\'n\'},c:{o:\'Q\',b:\'1f\',a:U,h:\'t\',1g:0.5}},{i:\'1v g\',d:1,g:4,f:{e:1c,j:\'n\'},c:{o:\'Q\',b:\'1f\',a:U,h:\'t\',1g:0.5}},{i:\'1v P z\',d:3,g:4,f:{e:1u,j:\'n\'},c:{o:\'Q\',b:\'1f\',a:U,h:\'t\',1g:0.5,x:v}},{i:\'1v P C\',d:3,g:4,f:{e:1u,j:\'n\'},c:{o:\'Q\',b:\'1f\',a:U,h:\'K\',1g:0.5,w:-v}},{i:\'1v-1H P z\',d:3,g:4,f:{e:15,j:\'n\'},c:{o:\'Q\',b:\'1f\',a:U,h:\'t\',1g:0.5,x:v}},{i:\'1v-1H P C\',d:3,g:4,f:{e:15,j:\'n\'},c:{o:\'Q\',b:\'1f\',a:U,h:\'K\',1g:0.5,w:-v}},{i:\'1v 1H d\',d:4,g:1,f:{e:1c,j:\'n\'},c:{o:\'Q\',b:\'1f\',a:U,h:\'G\',1g:0.5}},{i:\'1v 1H g\',d:1,g:4,f:{e:1c,j:\'n\'},c:{o:\'Q\',b:\'1f\',a:U,h:\'t\',1g:0.5}},{i:\'1d f M t\',d:1,g:1,f:{e:0,j:\'n\'},c:{o:\'V\',b:\'y\',a:U,h:\'G\',x:v}},{i:\'1d f M G\',d:1,g:1,f:{e:0,j:\'n\'},c:{o:\'V\',b:\'y\',a:U,h:\'t\',x:-v}},{i:\'1d f M K\',d:1,g:1,f:{e:0,j:\'n\'},c:{o:\'V\',b:\'y\',a:U,h:\'L\',w:-v}},{i:\'1d f M L\',d:1,g:1,f:{e:0,j:\'n\'},c:{o:\'V\',b:\'y\',a:U,h:\'K\',w:v}},{i:\'1d P M t\',d:[3,4],g:[3,4],f:{e:19,j:\'n\'},c:{o:\'13\',b:\'y\',a:U,h:\'t\',x:v}},{i:\'1d P M G\',d:[3,4],g:[3,4],f:{e:19,j:\'D\'},c:{o:\'13\',b:\'y\',a:U,h:\'t\',x:-v}},{i:\'1d P M K\',d:[3,4],g:[3,4],f:{e:19,j:\'n\'},c:{o:\'13\',b:\'y\',a:U,h:\'t\',w:-v}},{i:\'1d P M L\',d:[3,4],g:[3,4],f:{e:19,j:\'D\'},c:{o:\'13\',b:\'y\',a:U,h:\'t\',w:v}},{i:\'1d d M K\',d:[6,12],g:1,f:{e:19,j:\'n\'},c:{o:\'13\',b:\'y\',a:U,h:\'t\',w:v}},{i:\'1d d M L\',d:[6,12],g:1,f:{e:19,j:\'D\'},c:{o:\'13\',b:\'y\',a:U,h:\'t\',w:-v}},{i:\'1d g M t\',d:1,g:[6,12],f:{e:19,j:\'n\'},c:{o:\'13\',b:\'y\',a:U,h:\'t\',x:-v}},{i:\'1d g M G\',d:1,g:[6,12],f:{e:19,j:\'D\'},c:{o:\'13\',b:\'y\',a:U,h:\'t\',x:v}},{i:\'1w d M t\',d:[3,10],g:1,f:{e:19,j:\'n\'},c:{o:\'13\',b:\'y\',a:U,h:\'t\',x:v}},{i:\'1w d M G\',d:[3,10],g:1,f:{e:19,j:\'D\'},c:{o:\'13\',b:\'y\',a:U,h:\'t\',x:-v}},{i:\'1w g M K\',d:1,g:[3,10],f:{e:19,j:\'n\'},c:{o:\'13\',b:\'y\',a:U,h:\'t\',w:-v}},{i:\'1w g M L\',d:1,g:[3,10],f:{e:19,j:\'D\'},c:{o:\'13\',b:\'y\',a:U,h:\'t\',w:v}},{i:\'1w s 1q f M t\',d:1,g:1,f:{e:q,j:\'n\'},c:{o:\'Q\',b:\'y\',a:U,h:\'G\',1g:0.1,1s:-v,x:v}},{i:\'1w s 1q f M G\',d:1,g:1,f:{e:q,j:\'n\'},c:{o:\'Q\',b:\'y\',a:U,h:\'t\',1g:0.1,1s:v,x:-v}},{i:\'1w s 1q P M t\',d:[3,4],g:[3,4],f:{e:19,j:\'n\'},c:{o:\'Q\',b:\'y\',a:U,h:\'G\',1s:-1r}},{i:\'1w s 1q P M G\',d:[3,4],g:[3,4],f:{e:19,j:\'n\'},c:{o:\'Q\',b:\'y\',a:U,h:\'t\',1s:-1r}},{i:\'1w s 1q P M k\',d:[3,4],g:[3,4],f:{e:19,j:\'k\'},c:{o:\'Q\',b:\'y\',a:U,h:\'k\',1s:-1r}},{i:\'E f 1Q\',d:1,g:1,f:{e:0,j:\'n\'},c:{o:\'13\',b:\'y\',a:18,h:\'t\',1g:0.8}},{i:\'E f M 1L\',d:1,g:1,f:{e:0,j:\'n\'},c:{o:\'13\',b:\'u\',a:18,h:\'t\',1g:1.2}},{i:\'E P k\',d:[3,4],g:[3,4],f:{e:1u,j:\'k\'},c:{o:\'13\',b:\'y\',a:U,h:\'t\',1g:0.1}},{i:\'E P M 1L k\',d:[3,4],g:[3,4],f:{e:1u,j:\'k\'},c:{o:\'13\',b:\'y\',a:U,h:\'t\',1g:2}},{i:\'E 1Q s 1q P k\',d:[3,4],g:[3,4],f:{e:1u,j:\'k\'},c:{o:\'13\',b:\'y\',a:U,h:\'t\',1g:0.1,1s:v}},{i:\'E s 1q P M 1L k\',d:[3,4],g:[3,4],f:{e:1u,j:\'k\'},c:{o:\'13\',b:\'y\',a:U,h:\'t\',1g:2,1s:-v}},{i:\'1F-X P 21\',d:3,g:4,f:{e:15,j:\'n\'},c:{o:\'V\',b:\'u\',a:24,h:\'1W\'}},{i:\'1F-X d z\',d:6,g:1,f:{e:0,j:\'n\'},c:{o:\'Q\',b:\'y\',a:U,h:\'t\'}},{i:\'1F-X d C\',d:6,g:1,f:{e:0,j:\'n\'},c:{o:\'Q\',b:\'y\',a:U,h:\'K\'}},{i:\'1F-X g z\',d:1,g:8,f:{e:0,j:\'n\'},c:{o:\'Q\',b:\'y\',a:U,h:\'t\'}},{i:\'1F-X g C\',d:1,g:8,f:{e:0,j:\'n\'},c:{o:\'Q\',b:\'y\',a:U,h:\'K\'}}],1Z:[{i:\'1b f m G (l°)\',d:1,g:1,f:{e:q,j:\'n\'},r:{c:{x:1J},b:\'1A\',a:F,h:\'z\'},A:{c:{x:l},b:\'y\',a:F,h:\'z\'}},{i:\'1b f m t (l°)\',d:1,g:1,f:{e:q,j:\'n\'},r:{c:{x:-1J},b:\'1A\',a:F,h:\'z\'},A:{c:{x:-l},b:\'y\',a:F,h:\'z\'}},{i:\'1b f m L (l°)\',d:1,g:1,f:{e:q,j:\'n\'},r:{c:{w:-1J},b:\'1A\',a:1y,h:\'C\'},A:{c:{w:-l},b:\'y\',a:1y,h:\'C\'}},{i:\'1b f m K (l°)\',d:1,g:1,f:{e:q,j:\'n\'},r:{c:{w:1J},b:\'1A\',a:1y,h:\'C\'},A:{c:{w:l},b:\'y\',a:1y,h:\'C\'}},{i:\'1b P m G (l°)\',d:[2,4],g:[4,7],f:{e:q,j:\'n\'},r:{c:{x:l},b:\'u\',a:F,h:\'z\'}},{i:\'1b P m t (l°)\',d:[2,4],g:[4,7],f:{e:q,j:\'D\'},r:{c:{x:-l},b:\'u\',a:F,h:\'z\'}},{i:\'1b P m L (l°)\',d:[2,4],g:[4,7],f:{e:q,j:\'1i-n\'},r:{c:{w:-l},b:\'u\',a:F,h:\'C\'}},{i:\'1b P m K (l°)\',d:[2,4],g:[4,7],f:{e:q,j:\'1i-D\'},r:{c:{w:l},b:\'u\',a:F,h:\'C\'}},{i:\'1G S P k (l°)\',d:[2,4],g:[4,7],f:{e:q,j:\'k\'},r:{c:{x:l},b:\'u\',a:1K,h:\'z\'}},{i:\'1E S P k (l°)\',d:[2,4],g:[4,7],f:{e:q,j:\'k\'},r:{c:{w:l},b:\'u\',a:1K,h:\'C\'}},{i:\'E s S P m G (l°)\',d:[2,4],g:[4,7],f:{e:q,j:\'n\'},I:{c:{B:0.1D},a:1n,b:\'14\'},r:{c:{x:l},b:\'H\',a:F,h:\'z\'},A:{a:1e,b:\'H\'}},{i:\'E s S P m t (l°)\',d:[2,4],g:[4,7],f:{e:q,j:\'D\'},I:{c:{B:0.1D},a:1n,b:\'14\'},r:{c:{x:-l},b:\'H\',a:F,h:\'z\'},A:{a:1e,b:\'H\'}},{i:\'E s S P m L (l°)\',d:[2,4],g:[4,7],f:{e:q,j:\'1i-n\'},I:{c:{B:0.1D},a:1n,b:\'14\'},r:{c:{w:-l},b:\'H\',a:F,h:\'C\'},A:{a:1e,b:\'H\'}},{i:\'E s S P m K (l°)\',d:[2,4],g:[4,7],f:{e:q,j:\'1i-D\'},I:{c:{B:0.1D},a:1n,b:\'14\'},r:{c:{w:l},b:\'H\',a:F,h:\'C\'},A:{a:1e,b:\'H\'}},{i:\'E s z S P k (l°)\',d:[2,4],g:[4,7],f:{e:q,j:\'k\'},I:{c:{B:0.1D,w:1j},a:1n,b:\'14\'},r:{c:{x:l,w:-1j},b:\'H\',a:1K,h:\'z\'},A:{c:{w:0},a:1e,b:\'H\'}},{i:\'E s C S P k (l°)\',d:[2,4],g:[4,7],f:{e:q,j:\'k\'},I:{c:{B:0.1D,x:-15},a:1n,b:\'14\'},r:{c:{w:l,x:15},b:\'H\',a:1K,h:\'C\'},A:{c:{x:0},a:1e,b:\'H\'}},{i:\'1b d m G (l°)\',d:[5,9],g:1,f:{e:q,j:\'n\'},r:{c:{x:l},b:\'u\',a:18,h:\'z\'}},{i:\'1b d m t (l°)\',d:[5,9],g:1,f:{e:q,j:\'n\'},r:{c:{x:-l},b:\'u\',a:18,h:\'z\'}},{i:\'1b d m L (l°)\',d:[5,9],g:1,f:{e:q,j:\'n\'},r:{c:{w:-l},b:\'u\',a:F,h:\'C\'}},{i:\'1b d m K (l°)\',d:[5,9],g:1,f:{e:q,j:\'D\'},r:{c:{w:l},b:\'u\',a:F,h:\'C\'}},{i:\'1G S d k (l°)\',d:[5,9],g:1,f:{e:q,j:\'k\'},r:{c:{x:l},b:\'u\',a:18,h:\'z\'}},{i:\'1E S d k (l°)\',d:[5,9],g:1,f:{e:q,j:\'k\'},r:{c:{w:-l},b:\'u\',a:18,h:\'C\'}},{i:\'1E S d k (1C°)\',d:[3,7],g:1,f:{e:1N,j:\'k\'},r:{c:{w:-1C},b:\'u\',a:1O,h:\'C\'}},{i:\'E s S d m G (l°)\',d:[5,9],g:1,f:{e:19,j:\'n\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:l},b:\'H\',a:1m,h:\'z\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s S d m t (l°)\',d:[5,9],g:1,f:{e:19,j:\'D\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:-l},b:\'H\',a:1m,h:\'z\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s S d m L (l°)\',d:[5,9],g:1,f:{e:19,j:\'n\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:-l},b:\'u\',a:p,h:\'C\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s S d m K (l°)\',d:[5,9],g:1,f:{e:19,j:\'D\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:l},b:\'u\',a:p,h:\'C\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s z S d k (l°)\',d:[5,9],g:1,f:{e:19,j:\'k\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:l},b:\'H\',a:1m,h:\'z\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s C S d k (l°)\',d:[5,9],g:1,f:{e:19,j:\'k\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:-l},b:\'H\',a:p,h:\'C\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'1b O m G (l°)\',d:1,g:[5,9],f:{e:q,j:\'n\'},r:{c:{x:l},b:\'u\',a:18,h:\'z\'}},{i:\'1b O m t (l°)\',d:1,g:[5,9],f:{e:q,j:\'n\'},r:{c:{x:-l},b:\'u\',a:18,h:\'z\'}},{i:\'1b O m L (l°)\',d:1,g:[5,9],f:{e:q,j:\'n\'},r:{c:{w:-l},b:\'u\',a:F,h:\'C\'}},{i:\'1b O m K (l°)\',d:1,g:[5,9],f:{e:q,j:\'D\'},r:{c:{w:l},b:\'u\',a:F,h:\'C\'}},{i:\'1G S O k (l°)\',d:1,g:[5,9],f:{e:q,j:\'k\'},r:{c:{x:l},b:\'u\',a:18,h:\'z\'}},{i:\'1E S O k (l°)\',d:1,g:[5,9],f:{e:q,j:\'k\'},r:{c:{w:-l},b:\'u\',a:18,h:\'C\'}},{i:\'1G S O k (1C°)\',d:1,g:[4,9],f:{e:1N,j:\'k\'},r:{c:{x:1C},b:\'u\',a:1O,h:\'z\'}},{i:\'E s S O m G (l°)\',d:1,g:[7,11],f:{e:19,j:\'n\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:l},b:\'u\',a:p,h:\'z\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s S O m t (l°)\',d:1,g:[7,11],f:{e:19,j:\'D\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:-l},b:\'u\',a:p,h:\'z\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s S O m L (l°)\',d:1,g:[7,11],f:{e:19,j:\'n\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:-l},b:\'H\',a:1m,h:\'C\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s S O m K (l°)\',d:1,g:[7,11],f:{e:q,j:\'D\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:l},b:\'H\',a:1m,h:\'C\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s z S O k (l°)\',d:1,g:[7,11],f:{e:q,j:\'k\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:l},b:\'H\',a:p,h:\'z\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s C S O k (l°)\',d:1,g:[7,11],f:{e:q,j:\'k\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:-l},b:\'H\',a:1m,h:\'C\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'1T 1U 1V s S m G (l°)\',d:1,g:[7,11],f:{e:q,j:\'n\'},I:{c:{B:0.N,w:-1j},a:p,b:\'y\'},r:{c:{w:-1j,x:l},b:\'u\',a:F,h:\'z\'},A:{c:{w:0,e:W},b:\'y\',a:p}},{i:\'1T 1U 1V s S m t (l°)\',d:1,g:[7,11],f:{e:q,j:\'D\'},I:{c:{B:0.N,w:-1j},a:p,b:\'y\'},r:{c:{w:1j,x:-l},b:\'u\',a:F,h:\'z\'},A:{c:{w:0,e:W},b:\'y\',a:p}},{i:\'1d 1t m G (v°)\',d:1,g:1,f:{e:q,j:\'n\'},r:{c:{x:v},b:\'u\',a:18,h:\'z\'}},{i:\'1d 1t m t (v°)\',d:1,g:1,f:{e:q,j:\'n\'},r:{c:{x:-v},b:\'u\',a:18,h:\'z\'}},{i:\'1d 1t m L (v°)\',d:1,g:1,f:{e:q,j:\'n\'},r:{c:{w:-v},b:\'u\',a:18,h:\'C\'}},{i:\'1d 1t m K (v°)\',d:1,g:1,f:{e:q,j:\'n\'},r:{c:{w:v},b:\'u\',a:18,h:\'C\'}},{i:\'E s 17 1t m G (v°)\',d:1,g:1,f:{e:q,j:\'k\'},r:{c:{B:0.8,1s:7,w:10,x:1r},b:\'1f\',a:1y,h:\'z\'},A:{c:{1s:0,w:0,x:v},a:1y,b:\'1f\'}},{i:\'E s 17 1t m t (v°)\',d:1,g:1,f:{e:q,j:\'k\'},r:{c:{B:0.8,1s:-7,w:10,x:-1r},b:\'1f\',a:1y,h:\'z\'},A:{c:{1s:0,w:0,x:-v},a:1y,b:\'1f\'}},{i:\'E s 17 1k m G (v°)\',d:[2,4],g:[4,7],f:{e:q,j:\'n\'},I:{c:{B:0.N},a:1n,b:\'14\'},r:{c:{x:v},b:\'H\',a:F,h:\'z\'},A:{a:1e,b:\'H\'}},{i:\'E s 17 1k m t (v°)\',d:[2,4],g:[4,7],f:{e:q,j:\'D\'},I:{c:{B:0.N},a:1n,b:\'14\'},r:{c:{x:-v},b:\'H\',a:F,h:\'z\'},A:{a:1e,b:\'H\'}},{i:\'E s 17 1k m L (v°)\',d:[2,4],g:[4,7],f:{e:q,j:\'1i-n\'},I:{c:{B:0.N},a:1n,b:\'14\'},r:{c:{w:-v},b:\'H\',a:F,h:\'C\'},A:{a:1e,b:\'H\'}},{i:\'E s 17 1k m K (v°)\',d:[2,4],g:[4,7],f:{e:q,j:\'1i-D\'},I:{c:{B:0.N},a:1n,b:\'14\'},r:{c:{w:v},b:\'H\',a:F,h:\'C\'},A:{a:1e,b:\'H\'}},{i:\'E s z 17 1k k (v°)\',d:[2,4],g:[4,7],f:{e:q,j:\'k\'},I:{c:{B:0.q,w:-15},a:1p,b:\'14\'},r:{c:{x:q,w:15},b:\'H\',a:1p,h:\'z\'},A:{c:{x:v,w:0},a:1p,b:\'H\'}},{i:\'E s C 17 1k k (v°)\',d:[2,4],g:[4,7],f:{e:q,j:\'k\'},I:{c:{B:0.q,x:15},a:1p,b:\'14\'},r:{c:{w:q,x:-15},b:\'H\',a:1p,h:\'C\'},A:{c:{w:v,x:0},a:1p,b:\'H\'}},{i:\'1d d m G (v°)\',d:[5,9],g:1,f:{e:q,j:\'n\'},r:{c:{x:v},b:\'u\',a:18,h:\'z\'}},{i:\'1d d m t (v°)\',d:[5,9],g:1,f:{e:q,j:\'n\'},r:{c:{x:-v},b:\'u\',a:18,h:\'z\'}},{i:\'1G 17 d k (v°)\',d:[5,9],g:1,f:{e:q,j:\'k\'},r:{c:{x:v},b:\'u\',a:18,h:\'z\'}},{i:\'E s 17 d m G (v°)\',d:[5,9],g:1,f:{e:q,j:\'n\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:20},b:\'H\',a:F,h:\'z\'},A:{c:{e:W,x:v},b:\'J\',a:p}},{i:\'E s 17 d m t (v°)\',d:[5,9],g:1,f:{e:q,j:\'D\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:-v},b:\'H\',a:F,h:\'z\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s 17 d m L (v°)\',d:[5,9],g:1,f:{e:q,j:\'n\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:-v},b:\'H\',a:F,h:\'C\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s 17 d m K (v°)\',d:[5,9],g:1,f:{e:q,j:\'D\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:v},b:\'H\',a:F,h:\'C\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s z 17 d k (v°)\',d:[5,9],g:1,f:{e:q,j:\'k\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:v},b:\'H\',a:F,h:\'z\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s C 17 d k (v°)\',d:[5,9],g:1,f:{e:q,j:\'k\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:-v},b:\'H\',a:F,h:\'C\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s z 17 1I d m G (v°)\',d:[7,11],g:1,f:{e:q,j:\'n\'},r:{c:{B:0.N,x:1r},b:\'14\',a:F,h:\'z\'},A:{c:{x:v},b:\'14\',a:F}},{i:\'E s z 17 1I d m t (v°)\',d:[7,11],g:1,f:{e:q,j:\'D\'},r:{c:{B:0.N,x:-1r},b:\'14\',a:F,h:\'z\'},A:{c:{x:-v},b:\'14\',a:F}},{i:\'1d O m L (v°)\',d:1,g:[5,9],f:{e:q,j:\'n\'},r:{c:{w:-v},b:\'u\',a:F,h:\'C\'}},{i:\'1d O m K (v°)\',d:1,g:[5,9],f:{e:q,j:\'D\'},r:{c:{w:v},b:\'u\',a:F,h:\'C\'}},{i:\'1E 17 O k (v°)\',d:1,g:[5,9],f:{e:q,j:\'k\'},r:{c:{w:-v},b:\'u\',a:F,h:\'C\'}},{i:\'E s 17 O m L (v°)\',d:1,g:[7,11],f:{e:q,j:\'n\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:-v},b:\'H\',a:F,h:\'C\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s 17 O m K (v°)\',d:1,g:[7,11],f:{e:q,j:\'D\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:v},b:\'H\',a:F,h:\'C\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s 17 O m G (v°)\',d:1,g:[7,11],f:{e:q,j:\'n\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:v},b:\'H\',a:F,h:\'z\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s 17 O m t (v°)\',d:1,g:[7,11],f:{e:q,j:\'D\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:-v},b:\'H\',a:F,h:\'z\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s z 17 O k (v°)\',d:1,g:[7,11],f:{e:q,j:\'k\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:v},b:\'H\',a:F,h:\'z\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s C 17 O k (v°)\',d:1,g:[7,11],f:{e:q,j:\'k\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:-v},b:\'H\',a:F,h:\'C\'},A:{c:{e:W},b:\'J\',a:p}},{i:\'E s C 17 1I O m G (v°)\',d:1,g:[7,11],f:{e:q,j:\'n\'},r:{c:{B:0.N,w:1r},b:\'14\',a:F,h:\'C\'},A:{c:{w:v},b:\'14\',a:F}},{i:\'E s C 17 1I O m t (v°)\',d:1,g:[7,11],f:{e:q,j:\'D\'},r:{c:{B:0.N,w:-1r},b:\'14\',a:F,h:\'C\'},A:{c:{w:-v},b:\'14\',a:F}},{i:\'1b 1t m G (l°, R T)\',d:1,g:1,f:{e:q,j:\'n\',T:\'R\'},r:{c:{x:l},b:\'u\',a:18,h:\'z\'}},{i:\'1b 1t m t (l°, R T)\',d:1,g:1,f:{e:q,j:\'n\',T:\'R\'},r:{c:{x:-l},b:\'u\',a:18,h:\'z\'}},{i:\'1b 1t m L (l°, R T)\',d:1,g:1,f:{e:q,j:\'n\',T:\'R\'},r:{c:{w:-l},b:\'u\',a:18,h:\'C\'}},{i:\'1b 1t m K (l°, R T)\',d:1,g:1,f:{e:q,j:\'n\',T:\'R\'},r:{c:{w:l},b:\'u\',a:18,h:\'C\'}},{i:\'E s S 1k m G (l°, R T)\',d:[2,4],g:[4,7],f:{e:q,j:\'n\',T:\'R\'},I:{c:{B:0.N},a:1n,b:\'14\'},r:{c:{x:l},b:\'H\',a:F,h:\'z\'},A:{a:1e,b:\'H\'}},{i:\'E s S 1k m t (l°, R T)\',d:[2,4],g:[4,7],f:{e:q,j:\'D\',T:\'R\'},I:{c:{B:0.N},a:1n,b:\'14\'},r:{c:{x:-l},b:\'H\',a:F,h:\'z\'},A:{a:1e,b:\'H\'}},{i:\'E s S 1k m L (l°, R T)\',d:[2,4],g:[4,7],f:{e:q,j:\'1i-n\',T:\'R\'},I:{c:{B:0.N},a:1n,b:\'14\'},r:{c:{w:-l},b:\'H\',a:F,h:\'C\'},A:{a:1e,b:\'H\'}},{i:\'E s S 1k m K (l°, R T)\',d:[2,4],g:[4,7],f:{e:q,j:\'1i-D\',T:\'R\'},I:{c:{B:0.N},a:1n,b:\'14\'},r:{c:{w:l},b:\'H\',a:F,h:\'C\'},A:{a:1e,b:\'H\'}},{i:\'E s z S 1k k (l°, R T)\',d:[2,4],g:[4,7],f:{e:q,j:\'k\',T:\'R\'},I:{c:{B:0.1h},a:1p,b:\'14\'},r:{c:{x:l},b:\'H\',a:1p,h:\'z\'},A:{a:1p,b:\'H\'}},{i:\'E s C S 1k k (l°, R T)\',d:[2,4],g:[4,7],f:{e:q,j:\'k\',T:\'R\'},I:{c:{B:0.1h},a:1p,b:\'14\'},r:{c:{w:l},b:\'H\',a:1p,h:\'C\'},A:{a:1p,b:\'H\'}},{i:\'E s S d m G (l°, R T)\',d:[5,9],g:1,f:{e:1h,j:\'n\',T:\'R\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:l},b:\'u\',a:1m,h:\'z\'},A:{c:{e:W},b:\'y\',a:1o}},{i:\'E s S d m t (l°, R T)\',d:[5,9],g:1,f:{e:1h,j:\'D\',T:\'R\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:-l},b:\'u\',a:1m,h:\'z\'},A:{c:{e:W},b:\'y\',a:1o}},{i:\'E s S d m L (l°, R T)\',d:[5,9],g:1,f:{e:1h,j:\'n\',T:\'R\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:-l},b:\'H\',a:F,h:\'C\'},A:{c:{e:W},b:\'y\',a:1o}},{i:\'E s S d m K (l°, R T)\',d:[5,9],g:1,f:{e:1h,j:\'D\',T:\'R\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:l},b:\'H\',a:F,h:\'C\'},A:{c:{e:W},b:\'y\',a:1o}},{i:\'E s z S d k (l°, R T)\',d:[5,9],g:1,f:{e:1h,j:\'k\',T:\'R\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:l},b:\'u\',a:1m,h:\'z\'},A:{c:{e:W},b:\'y\',a:1o}},{i:\'E s C S d k (l°, R T)\',d:[5,9],g:1,f:{e:1h,j:\'k\',T:\'R\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:-l},b:\'H\',a:F,h:\'C\'},A:{c:{e:W},b:\'y\',a:1o}},{i:\'E s S O m L (l°, R T)\',d:1,g:[7,11],f:{e:1h,j:\'n\',T:\'R\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:-l},b:\'u\',a:1m,h:\'C\'},A:{c:{e:W},b:\'y\',a:1o}},{i:\'E s S O m K (l°, R T)\',d:1,g:[7,11],f:{e:1h,j:\'D\',T:\'R\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:l},b:\'u\',a:1m,h:\'C\'},A:{c:{e:W},b:\'y\',a:1o}},{i:\'E s S O m G (l°, R T)\',d:1,g:[7,11],f:{e:1h,j:\'n\',T:\'R\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:l},b:\'H\',a:F,h:\'z\'},A:{c:{e:W},b:\'y\',a:1o}},{i:\'E s S O m t (l°, R T)\',d:1,g:[7,11],f:{e:1h,j:\'D\',T:\'R\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:-l},b:\'H\',a:F,h:\'z\'},A:{c:{e:W},b:\'y\',a:1o}},{i:\'E s z S O k (l°, R T)\',d:1,g:[7,11],f:{e:1h,j:\'k\',T:\'R\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{x:l},b:\'H\',a:F,h:\'z\'},A:{c:{e:W},b:\'y\',a:1o}},{i:\'E s C S O k (l°, R T)\',d:1,g:[7,11],f:{e:1h,j:\'k\',T:\'R\'},I:{c:{B:0.N},a:p,b:\'J\'},r:{c:{w:-l},b:\'u\',a:1m,h:\'C\'},A:{c:{e:W},b:\'y\',a:1o}},{i:\'1S 1q s 1z 1M\',d:1,g:1,f:{e:1,j:\'n\',T:\'R\'},I:{c:{B:0.1h,x:-1P,1B:0},a:18,b:\'1A\'},r:{c:{B:1,x:-1C,1B:1},b:\'y\',a:18,h:\'z\'}},{i:\'1X 1q s 1z 1M\',d:1,g:1,f:{e:1,j:\'n\',T:\'R\'},I:{c:{B:0.1h,w:-1P,1B:0},a:18,b:\'1A\'},r:{c:{B:1,w:-1C,1B:1},b:\'y\',a:18,h:\'C\'}},{i:\'1S 1q s 1z 1k\',d:[2,3],g:[3,5],f:{e:1c,j:\'k\'},I:{c:{B:0.q,1B:0},a:1e,b:\'1A\'},r:{c:{x:-1r,w:l},b:\'u\',a:1,h:\'C\'},A:{c:{x:0,1B:1},b:\'y\',a:1m}},{i:\'1X 1q s 1z 1k\',d:[2,3],g:[3,5],f:{e:1c,j:\'k\'},I:{c:{B:0.q,1B:0},a:1e,b:\'1A\'},r:{c:{w:-1r,x:l},b:\'u\',a:1,h:\'z\'},A:{c:{w:0,1B:1},b:\'y\',a:1m}}]};',62,136,'||||||||||duration|easing|transition|rows|delay|tile|cols|direction|name|sequence|random|180|to|forward|type|600|75|animation|and|left|easeInOutQuart|90|rotateX|rotateY|easeOutQuart|horizontal|after|scale3d|vertical|reverse|Scaling|1000|right|easeInOutBack|before|easeOutBack|top|bottom|from|85|columns|tiles|mixed|large|spinning|depth|750|slide|200|sliding|Fading|Sliding||||fade|easeInOutQuint|||turning|1500|55|100|Spinning|50|Turning|350|easeInOutQuad|scale|65|col|30|cuboids|500|1200|450|400|700|rotating|45|rotate|cuboid|35|Carousel|Flying|Smooth|800|fading|easeInQuart|opacity|540|95|Vertical|Mirror|Horizontal|mirror|drunk|91|1300|out|cube|150|2000|270|in|directions|Horizontally|Drunk|colums|scaling|topright|Vertically|bottomright|t3d|87|diagonal|layerSliderTransitions|bottomleft|850||topleft|sliging|linear|Crossfading|t2d|var'.split('|'),0,{}));;
/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 27.02.2015
*********************************************/


/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 1.6.9
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.skinkers.com/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/



(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var y="1.6.9",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipetp=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipetp")}}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}return G};f.fn.swipetp.version=y;f.fn.swipetp.defaults=n;f.fn.swipetp.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipetp.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipetp.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipetp.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipetp.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a5,aw){var aA=(a||d||!aw.fallbackToMouseEvents),K=aA?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",az=aA?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=aA?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=aA?null:"mouseleave",aE=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ah=0,aQ=null,ac=0,a2=0,a0=0,H=1,ar=0,aK=0,N=null;var aS=f(a5);var aa="start";var X=0;var aR=null;var U=0,a3=0,a6=0,ae=0,O=0;var aX=null,ag=null;try{aS.bind(K,aO);aS.bind(aE,ba)}catch(al){f.error("events not supported "+K+","+aE+" on jQuery.swipetp")}this.enable=function(){aS.bind(K,aO);aS.bind(aE,ba);return aS};this.disable=function(){aL();return aS};this.destroy=function(){aL();aS.data(C,null);aS=null};this.option=function(bd,bc){if(aw[bd]!==undefined){if(bc===undefined){return aw[bd]}else{aw[bd]=bc}}else{f.error("Option "+bd+" does not exist on jQuery.swipetp.options")}return null};function aO(be){if(aC()){return}if(f(be.target).closest(aw.excludedElements,aS).length>0){return}var bf=be.originalEvent?be.originalEvent:be;var bd,bg=bf.touches,bc=bg?bg[0]:bf;aa=g;if(bg){X=bg.length}else{be.preventDefault()}ah=0;aQ=null;aK=null;ac=0;a2=0;a0=0;H=1;ar=0;aR=ak();N=ab();S();if(!bg||(X===aw.fingers||aw.fingers===i)||aY()){aj(0,bc);U=au();if(X==2){aj(1,bg[1]);a2=a0=av(aR[0].start,aR[1].start)}if(aw.swipeStatus||aw.pinchStatus){bd=P(bf,aa)}}else{bd=false}if(bd===false){aa=q;P(bf,aa);return bd}else{if(aw.hold){ag=setTimeout(f.proxy(function(){aS.trigger("hold",[bf.target]);if(aw.hold){bd=aw.hold.call(aS,bf,bf.target)}},this),aw.longTapThreshold)}ap(true)}return null}function a4(bf){var bi=bf.originalEvent?bf.originalEvent:bf;if(aa===h||aa===q||an()){return}var be,bj=bi.touches,bd=bj?bj[0]:bi;var bg=aI(bd);a3=au();if(bj){X=bj.length}if(aw.hold){clearTimeout(ag)}aa=k;if(X==2){if(a2==0){aj(1,bj[1]);a2=a0=av(aR[0].start,aR[1].start)}else{aI(bj[1]);a0=av(aR[0].end,aR[1].end);aK=at(aR[0].end,aR[1].end)}H=a8(a2,a0);ar=Math.abs(a2-a0)}if((X===aw.fingers||aw.fingers===i)||!bj||aY()){aQ=aM(bg.start,bg.end);am(bf,aQ);ah=aT(bg.start,bg.end);ac=aN();aJ(aQ,ah);if(aw.swipeStatus||aw.pinchStatus){be=P(bi,aa)}if(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave){var bc=true;if(aw.triggerOnTouchLeave){var bh=aZ(this);bc=F(bg.end,bh)}if(!aw.triggerOnTouchEnd&&bc){aa=aD(k)}else{if(aw.triggerOnTouchLeave&&!bc){aa=aD(h)}}if(aa==q||aa==h){P(bi,aa)}}}else{aa=q;P(bi,aa)}if(be===false){aa=q;P(bi,aa)}}function M(bc){var bd=bc.originalEvent?bc.originalEvent:bc,be=bd.touches;if(be){if(be.length){G();return true}}if(an()){X=ae}a3=au();ac=aN();if(bb()||!ao()){aa=q;P(bd,aa)}else{if(aw.triggerOnTouchEnd||(aw.triggerOnTouchEnd==false&&aa===k)){bc.preventDefault();aa=h;P(bd,aa)}else{if(!aw.triggerOnTouchEnd&&a7()){aa=h;aG(bd,aa,B)}else{if(aa===k){aa=q;P(bd,aa)}}}}ap(false);return null}function ba(){X=0;a3=0;U=0;a2=0;a0=0;H=1;S();ap(false)}function L(bc){var bd=bc.originalEvent?bc.originalEvent:bc;if(aw.triggerOnTouchLeave){aa=aD(h);P(bd,aa)}}function aL(){aS.unbind(K,aO);aS.unbind(aE,ba);aS.unbind(az,a4);aS.unbind(V,M);if(T){aS.unbind(T,L)}ap(false)}function aD(bg){var bf=bg;var be=aB();var bd=ao();var bc=bb();if(!be||bc){bf=q}else{if(bd&&bg==k&&(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave)){bf=h}else{if(!bd&&bg==h&&aw.triggerOnTouchLeave){bf=q}}}return bf}function P(be,bc){var bd,bf=be.touches;if((J()||W())||(Q()||aY())){if(J()||W()){bd=aG(be,bc,l)}if((Q()||aY())&&bd!==false){bd=aG(be,bc,t)}}else{if(aH()&&bd!==false){bd=aG(be,bc,j)}else{if(aq()&&bd!==false){bd=aG(be,bc,b)}else{if(ai()&&bd!==false){bd=aG(be,bc,B)}}}}if(bc===q){ba(be)}if(bc===h){if(bf){if(!bf.length){ba(be)}}else{ba(be)}}return bd}function aG(bf,bc,be){var bd;if(be==l){aS.trigger("swipeStatus",[bc,aQ||null,ah||0,ac||0,X,aR]);if(aw.swipeStatus){bd=aw.swipeStatus.call(aS,bf,bc,aQ||null,ah||0,ac||0,X,aR);if(bd===false){return false}}if(bc==h&&aW()){aS.trigger("swipe",[aQ,ah,ac,X,aR]);if(aw.swipe){bd=aw.swipe.call(aS,bf,aQ,ah,ac,X,aR);if(bd===false){return false}}switch(aQ){case p:aS.trigger("swipeLeft",[aQ,ah,ac,X,aR]);if(aw.swipeLeft){bd=aw.swipeLeft.call(aS,bf,aQ,ah,ac,X,aR)}break;case o:aS.trigger("swipeRight",[aQ,ah,ac,X,aR]);if(aw.swipeRight){bd=aw.swipeRight.call(aS,bf,aQ,ah,ac,X,aR)}break;case e:aS.trigger("swipeUp",[aQ,ah,ac,X,aR]);if(aw.swipeUp){bd=aw.swipeUp.call(aS,bf,aQ,ah,ac,X,aR)}break;case x:aS.trigger("swipeDown",[aQ,ah,ac,X,aR]);if(aw.swipeDown){bd=aw.swipeDown.call(aS,bf,aQ,ah,ac,X,aR)}break}}}if(be==t){aS.trigger("pinchStatus",[bc,aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchStatus){bd=aw.pinchStatus.call(aS,bf,bc,aK||null,ar||0,ac||0,X,H,aR);if(bd===false){return false}}if(bc==h&&a9()){switch(aK){case c:aS.trigger("pinchIn",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchIn){bd=aw.pinchIn.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break;case A:aS.trigger("pinchOut",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchOut){bd=aw.pinchOut.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break}}}if(be==B){if(bc===q||bc===h){clearTimeout(aX);clearTimeout(ag);if(Z()&&!I()){O=au();aX=setTimeout(f.proxy(function(){O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}},this),aw.doubleTapThreshold)}else{O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}}}}else{if(be==j){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("doubletap",[bf.target]);if(aw.doubleTap){bd=aw.doubleTap.call(aS,bf,bf.target)}}}else{if(be==b){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("longtap",[bf.target]);if(aw.longTap){bd=aw.longTap.call(aS,bf,bf.target)}}}}}return bd}function ao(){var bc=true;if(aw.threshold!==null){bc=ah>=aw.threshold}return bc}function bb(){var bc=false;if(aw.cancelThreshold!==null&&aQ!==null){bc=(aU(aQ)-ah)>=aw.cancelThreshold}return bc}function af(){if(aw.pinchThreshold!==null){return ar>=aw.pinchThreshold}return true}function aB(){var bc;if(aw.maxTimeThreshold){if(ac>=aw.maxTimeThreshold){bc=false}else{bc=true}}else{bc=true}return bc}function am(bc,bd){if(aw.preventDefaultEvents===false){return}if(aw.allowPageScroll===m){bc.preventDefault()}else{var be=aw.allowPageScroll===s;switch(bd){case p:if((aw.swipeLeft&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case o:if((aw.swipeRight&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case e:if((aw.swipeUp&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break;case x:if((aw.swipeDown&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break}}}function a9(){var bd=aP();var bc=Y();var be=af();return bd&&bc&&be}function aY(){return !!(aw.pinchStatus||aw.pinchIn||aw.pinchOut)}function Q(){return !!(a9()&&aY())}function aW(){var bf=aB();var bh=ao();var be=aP();var bc=Y();var bd=bb();var bg=!bd&&bc&&be&&bh&&bf;return bg}function W(){return !!(aw.swipe||aw.swipeStatus||aw.swipeLeft||aw.swipeRight||aw.swipeUp||aw.swipeDown)}function J(){return !!(aW()&&W())}function aP(){return((X===aw.fingers||aw.fingers===i)||!a)}function Y(){return aR[0].end.x!==0}function a7(){return !!(aw.tap)}function Z(){return !!(aw.doubleTap)}function aV(){return !!(aw.longTap)}function R(){if(O==null){return false}var bc=au();return(Z()&&((bc-O)<=aw.doubleTapThreshold))}function I(){return R()}function ay(){return((X===1||!a)&&(isNaN(ah)||ah<aw.threshold))}function a1(){return((ac>aw.longTapThreshold)&&(ah<r))}function ai(){return !!(ay()&&a7())}function aH(){return !!(R()&&Z())}function aq(){return !!(a1()&&aV())}function G(){a6=au();ae=event.touches.length+1}function S(){a6=0;ae=0}function an(){var bc=false;if(a6){var bd=au()-a6;if(bd<=aw.fingerReleaseThreshold){bc=true}}return bc}function aC(){return !!(aS.data(C+"_intouch")===true)}function ap(bc){if(bc===true){aS.bind(az,a4);aS.bind(V,M);if(T){aS.bind(T,L)}}else{aS.unbind(az,a4,false);aS.unbind(V,M,false);if(T){aS.unbind(T,L,false)}}aS.data(C+"_intouch",bc===true)}function aj(bd,bc){var be=bc.identifier!==undefined?bc.identifier:0;aR[bd].identifier=be;aR[bd].start.x=aR[bd].end.x=bc.pageX||bc.clientX;aR[bd].start.y=aR[bd].end.y=bc.pageY||bc.clientY;return aR[bd]}function aI(bc){var be=bc.identifier!==undefined?bc.identifier:0;var bd=ad(be);bd.end.x=bc.pageX||bc.clientX;bd.end.y=bc.pageY||bc.clientY;return bd}function ad(bd){for(var bc=0;bc<aR.length;bc++){if(aR[bc].identifier==bd){return aR[bc]}}}function ak(){var bc=[];for(var bd=0;bd<=5;bd++){bc.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bc}function aJ(bc,bd){bd=Math.max(bd,aU(bc));N[bc].distance=bd}function aU(bc){if(N[bc]){return N[bc].distance}return undefined}function ab(){var bc={};bc[p]=ax(p);bc[o]=ax(o);bc[e]=ax(e);bc[x]=ax(x);return bc}function ax(bc){return{direction:bc,distance:0}}function aN(){return a3-U}function av(bf,be){var bd=Math.abs(bf.x-be.x);var bc=Math.abs(bf.y-be.y);return Math.round(Math.sqrt(bd*bd+bc*bc))}function a8(bc,bd){var be=(bd/bc)*1;return be.toFixed(2)}function at(){if(H<1){return A}else{return c}}function aT(bd,bc){return Math.round(Math.sqrt(Math.pow(bc.x-bd.x,2)+Math.pow(bc.y-bd.y,2)))}function aF(bf,bd){var bc=bf.x-bd.x;var bh=bd.y-bf.y;var be=Math.atan2(bh,bc);var bg=Math.round(be*180/Math.PI);if(bg<0){bg=360-Math.abs(bg)}return bg}function aM(bd,bc){var be=aF(bd,bc);if((be<=45)&&(be>=0)){return p}else{if((be<=360)&&(be>=315)){return p}else{if((be>=135)&&(be<=225)){return o}else{if((be>45)&&(be<135)){return x}else{return e}}}}}function au(){var bc=new Date();return bc.getTime()}function aZ(bc){bc=f(bc);var be=bc.offset();var bd={left:be.left,right:be.left+bc.outerWidth(),top:be.top,bottom:be.top+bc.outerHeight()};return bd}function F(bc,bd){return(bc.x>bd.left&&bc.x<bd.right&&bc.y>bd.top&&bc.y<bd.bottom)}}}));

if(typeof(console) === 'undefined') {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
}

if (window.tplogs==true)
	try {
		console.groupCollapsed("ThemePunch GreenSocks Logs");
	} catch(e) { }


var oldgs = window.GreenSockGlobals;
	oldgs_queue = window._gsQueue;
	
var punchgs = window.GreenSockGlobals = {};

if (window.tplogs==true)
	try {
		console.info("Build GreenSock SandBox for ThemePunch Plugins");
		console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
	} catch(e) {}


/* TWEEN LITE */
/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
!function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!e.TweenLite){var f,g,h,i,j,k=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},l=k("com.greensock"),m=1e-10,n=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},o=function(){},p=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),q={},r=function(d,f,g,h){this.sc=q[d]?q[d].sc:[],q[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var l,m,n,o,p,s=f.length,t=s;--s>-1;)(l=q[f[s]]||new r(f[s],[])).gsClass?(i[s]=l.gsClass,t--):j&&l.sc.push(this);if(0===t&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=k(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,p="undefined"!=typeof module&&module.exports,!p&&"function"==typeof define&&define.amd)define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});else if(p)if(d===b){module.exports=c[b]=o;for(s in c)o[s]=c[s]}else c[b]&&(c[b][n]=o);for(s=0;s<this.sc.length;s++)this.sc[s].check()}},this.check(!0)},s=a._gsDefine=function(a,b,c,d){return new r(a,b,c,d)},t=l._class=function(a,b,c){return b=b||function(){},s(a,[],function(){return b},c),b};s.globals=e;var u=[0,0,1,1],v=t("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?u.concat(b):u},!0),w=v.map={},x=v.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?t("easing."+f,null,!0):l.easing[f]||{},g=k.length;--g>-1;)h=k[g],w[f+"."+h]=w[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(h=v.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,x(new v(null,null,1,g),h,"easeOut",!0),x(new v(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),x(new v(null,null,3,g),h,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=t("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=y.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],k=0;for(this!==i||j||i.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===k&&f.pr<e&&(k=g+1);h.splice(k,0,{c:b,s:c,up:d,pr:e})},h.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},h.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var z=a.requestAnimationFrame,A=a.cancelAnimationFrame,B=Date.now||function(){return(new Date).getTime()},C=B();for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!z;)z=a[f[g]+"RequestAnimationFrame"],A=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];t("Ticker",function(a,b){var c,e,f,g,h,k=this,l=B(),n=b!==!1&&z?"auto":!1,p=500,q=33,r="tick",s=function(a){var b,d,i=B()-C;i>p&&(l+=i-q),C+=i,k.time=(C-l)/1e3,b=k.time-h,(!c||b>0||a===!0)&&(k.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&k.dispatchEvent(r)};y.call(k),k.time=k.frame=0,k.tick=function(){s(!0)},k.lagSmoothing=function(a,b){p=a||1/m,q=Math.min(b,p,0)},k.sleep=function(){null!=f&&(n&&A?A(f):clearTimeout(f),e=o,f=null,k===i&&(j=!1))},k.wake=function(a){null!==f?k.sleep():a?l+=-C+(C=B()):k.frame>10&&(C=B()-p+5),e=0===c?o:n&&z?z:function(a){return setTimeout(a,1e3*(h-k.time)+1|0)},k===i&&(j=!0),s(2)},k.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void k.wake()):c},k.useRAF=function(a){return arguments.length?(k.sleep(),n=a,void k.fps(c)):n},k.fps(a),setTimeout(function(){"auto"===n&&k.frame<5&&"hidden"!==d.visibilityState&&k.useRAF(!1)},1500)}),h=l.Ticker.prototype=new l.events.EventDispatcher,h.constructor=l.Ticker;var D=t("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,W){j||i.wake();var c=this.vars.useFrames?V:W;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=D.ticker=new l.Ticker,h=D.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1;var E=function(){j&&B()-C>2e3&&i.wake(),setTimeout(E,2e3)};E(),h.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(a,b,c){},h.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},h.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(a,b){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},h._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},h.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=p(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(J.length&&Y(),this.render(a,b,!1),J.length&&Y())}return this},h.progress=h.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},h.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||m,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(j||a||i.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var F=t("core.SimpleTimeline",function(a){D.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=F.prototype=new D,h.constructor=F,h.kill()._gc=!1,h._first=h._last=h._recent=null,h._sortChildren=!1,h.add=h.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},h.rawTime=function(){return j||i.wake(),this._totalTime};var G=t("TweenLite",function(b,c,d){if(D.call(this,c,d),this.render=G.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:G.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?U[G.defaultOverwrite]:"number"==typeof i?i>>0:U[i],(h||b instanceof Array||b.push&&p(b))&&"number"!=typeof b[0])for(this._targets=g=n(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(n(f))):(this._siblings[e]=Z(f,this,!1),1===i&&this._siblings[e].length>1&&_(f,this,null,1,this._siblings[e])):(f=g[e--]=G.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=Z(b,this,!1),1===i&&this._siblings.length>1&&_(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-m,this.render(Math.min(0,-this._delay)))},!0),H=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},I=function(a,b){var c,d={};for(c in a)T[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!Q[c]||Q[c]&&Q[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};h=G.prototype=new D,h.constructor=G,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=h._lazy=!1,G.version="1.19.1",G.defaultEase=h._ease=new v(null,null,1,1),G.defaultOverwrite="auto",G.ticker=i,G.autoSleep=120,G.lagSmoothing=function(a,b){i.lagSmoothing(a,b)},G.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(G.selector=c,c(b)):"undefined"==typeof d?b:d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b)};var J=[],K={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},N=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(L)||[],f=b.match(L)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=M,l},O=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=N(m,n?o.s+o.c:d,h||G.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},P=G._internals={isArray:p,isSelector:H,lazyTweens:J,blobDif:N},Q=G._plugins={},R=P.tweenLookup={},S=0,T=P.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},U={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},V=D._rootFramesTimeline=new F,W=D._rootTimeline=new F,X=30,Y=P.lazyRender=function(){var a,b=J.length;for(K={};--b>-1;)a=J[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);J.length=0};W._startTime=i.time,V._startTime=i.frame,W._active=V._active=!0,setTimeout(Y,1),D._updateRoot=G.render=function(){var a,b,c;if(J.length&&Y(),W.render((i.time-W._startTime)*W._timeScale,!1,!1),V.render((i.frame-V._startTime)*V._timeScale,!1,!1),J.length&&Y(),i.frame>=X){X=i.frame+(parseInt(G.autoSleep,10)||120);for(c in R){for(b=R[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete R[c]}if(c=W._first,(!c||c._paused)&&G.autoSleep&&!V._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",D._updateRoot);var Z=function(a,b,c){var d,e,f=a._gsTweenID;if(R[f||(a._gsTweenID=f="t"+S++)]||(R[f]={target:a,tweens:[]}),b&&(d=R[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return R[f].tweens},$=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=G.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},_=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+m,l=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||aa(b,0,o),0===aa(h,j,o)&&(l[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[n++]=h)));for(f=n;--f>-1;)if(h=l[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!$(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},aa=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*m>f-b?m:(f+=a.totalDuration()/a._timeScale/e)>b+m?0:f-b-m};h._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,this._startAt=G.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)T[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=G.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof v?k:"function"==typeof k?new v(k,g.easeParams):w[k]||G.defaultEase:G.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&G._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},h._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;K[b._gsTweenID]&&Y(),this.vars.css||b.style&&b!==a&&b.nodeType&&Q.css&&this.vars.autoCSS!==!1&&I(this.vars,b);for(g in this.vars)if(l=this.vars[g],T[g])l&&(l instanceof Array||l.push&&p(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(Q[g]&&(j=new Q[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=O.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&_(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(K[b._gsTweenID]=!0),i)},h.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===m&&"isPause"!==this.data)&&j!==a&&(c=!0,j>m&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:m);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==m||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:m)),this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,n=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,J.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===m&&g!==m&&(this._rawPrevTime=0))}},h._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:G.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((p(b)||H(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(G.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!$(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},h.invalidate=function(){return this._notifyPluginsOfEnabled&&G._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-m,this.render(Math.min(0,-this._delay))),this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=Z(d[c],this,!0);else this._siblings=Z(this.target,this,!0)}return D.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?G._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},G.to=function(a,b,c){return new G(a,b,c)},G.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new G(a,b,c)},G.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new G(a,b,d)},G.delayedCall=function(a,b,c,d,e){return new G(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},G.set=function(a,b){return new G(a,0,b)},G.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:G.selector(a)||a;var c,d,e,f;if((p(a)||H(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(G.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else for(d=Z(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d},G.killTweensOf=G.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=G.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ba=t("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ba.prototype},!0);if(h=ba.prototype,ba.version="1.19.0",ba.API=2,h._firstPT=null,h._addTween=O,h.setRatio=M,h._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},h._mod=h._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},G._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ba.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ba.API&&(Q[(new a[b])._propName]=a[b]);return!0},s.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=t("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ba.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ba(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ba.activate([g]),g},f=a._gsQueue){for(g=0;g<f.length;g++)f[g]();for(h in q)q[h].func||a.console.log("GSAP encountered missing dependency: "+h)}j=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");
/* TIME LINE LITE */
/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],h(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));h(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,h=n.isArray,l=n.lazyTweens,_=n.lazyRender,u=[],f=_gsScope._gsDefine.globals,c=function(t){var e,i={};for(e in t)i[e]=t[e];return i},p=a.pauseCallback=function(t,e,i,s){var n,a=t._timeline,o=a._totalTime,h=t._startTime,l=0>t._rawPrevTime||0===t._rawPrevTime&&a._reversed,_=l?0:r,f=l?r:0;if(e||!this._forcingPlayhead){for(a.pause(h),n=t._prev;n&&n._startTime===h;)n._rawPrevTime=f,n=n._prev;for(n=t._next;n&&n._startTime===h;)n._rawPrevTime=_,n=n._next;e&&e.apply(s||a.vars.callbackScope||a,i||u),(this._forcingPlayhead||!a._paused)&&a.seek(o)}},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.17.0",d.constructor=s,d.kill()._gc=d._forcingPlayhead=!1,d.to=function(t,e,s,r){var n=s.repeat&&f.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&f.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&f.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,h,l,_){var u,f=new s({onComplete:h,onCompleteParams:l,callbackScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=c(r.startAt)),f.to(t[u],e,c(r),u*n);return this.add(f,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var l,_,u,f,c,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&h(r)){for(a=a||"normal",o=o||0,l=n,_=r.length,u=0;_>u;u++)h(f=r[u])&&(f=new s({tweens:f})),this.add(f,l),"string"!=typeof f&&"function"!=typeof f&&("sequence"===a?l=f._startTime+f.totalDuration()/f._timeScale:"start"===a&&(f._startTime-=f.delay())),l+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,p=c.rawTime()>r._startTime;c._timeline;)p&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},d.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&h(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,p,["{self}",e,s,r],this);return n.data="isPause",this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&h(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,u=this._dirty?this.totalDuration():this._totalDuration,f=this._time,c=this._startTime,p=this._timeScale,m=this._paused;if(t>=u)this._totalTime=this._time=u,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",h=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=u+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==f||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(h=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(h=!0)}else this._totalTime=this._time=this._rawPrevTime=t;if(this._time!==f&&this._first||i||h){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==f&&t>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._time&&(e||this._callback("onStart")),this._time>=f)for(s=this._first;s&&(a=s._next,!this._paused||m);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||m);)(s._active||f>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(l.length&&_(),this._callback("onUpdate"))),o&&(this._gc||(c===this._startTime||p!==this._timeScale)&&(0===this._time||u>=this.totalDuration())&&(n&&(l.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e())}("TimelineLite");


/* EASING PLUGIN*/
/*!
 * VERSION: 1.15.5
 * DATE: 2016-07-08
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},q.config=b.config=function(a){return new b(a)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(){"use strict";var a=function(){return _gsScope.GreenSockGlobals||_gsScope};"function"==typeof define&&define.amd?define(["TweenLite"],a):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=a())}();


/* CSS PLUGIN */
/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.19.1",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=O.defaultView?O.defaultView.getComputedStyle:function(){},_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h=f.length?"":a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" "),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(y?"hsla(":"hsl(",p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(y?"rgba(":"rgb(",p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!(Ha&&a.getCTM&&Na(a))||a.parentNode&&!a.ownerSVGElement)},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,c&&Ca&&((h="none"===$(a).display)||!a.parentNode)&&(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),x=x*v+B*w,t=y*v+C*w,C=y*-w+C*v,D=z*-w+D*v,y=t),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),m.scaleX=(Math.sqrt(x*x+y*y)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+G*G)*p+.5|0)/p,m.scaleZ=(Math.sqrt(D*D+H*H)*p+.5|0)/p,m.rotationX||m.rotationY?m.skewX=0:(m.skewX=B||C?Math.atan2(B,C)*L+m.rotation:m.skewX||0,Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180))),m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,Math.abs(l)>90&&Math.abs(l)<270&&(n?(i*=-1,l+=0>=k?180:-180,k+=0>=k?180:-180):(j*=-1,l+=0>=l?180:-180)),m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(d._transform=D,E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",O.body.appendChild(Q),l=Ra(Q,null,!1),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":"rotationZ"in A?A.rotationZ:D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),D.skewType=A.skewType||D.skewType||g.defaultSkewType,n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",
b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b)n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g],h?c=h.parse(a,n,g,this,c,f,b):(m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&""!==p&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))),f&&c&&!c.plugin&&(c.plugin=f);return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=b())}("CSSPlugin");


/* SPLIT TEXT UTIL */
/*!
 * VERSION: 0.5.6
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(a){"use strict";var b=a.GreenSockGlobals||a,c=function(a){var c,d=a.split("."),e=b;for(c=0;c<d.length;c++)e[d[c]]=e=e[d[c]]||{};return e},d=c("com.greensock.utils"),e=function(a){var b=a.nodeType,c="";if(1===b||9===b||11===b){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===b||4===b)return a.nodeValue;return c},f=document,g=f.defaultView?f.defaultView.getComputedStyle:function(){},h=/([A-Z])/g,i=function(a,b,c,d){var e;return(c=c||g(a,null))?(a=c.getPropertyValue(b.replace(h,"-$1").toLowerCase()),e=a||c.length?a:c[b]):a.currentStyle&&(c=a.currentStyle,e=c[b]),d?e:parseInt(e,10)||0},j=function(a){return a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},k=function(a){var b,c,d,e=[],f=a.length;for(b=0;f>b;b++)if(c=a[b],j(c))for(d=c.length,d=0;d<c.length;d++)e.push(c[d]);else e.push(c);return e},l=/(?:\r|\n|\t\t)/g,m=/(?:\s\s+)/g,n=55296,o=56319,p=56320,q=127462,r=127487,s=127995,t=127999,u=function(a){return(a.charCodeAt(0)-n<<10)+(a.charCodeAt(1)-p)+65536},v=f.all&&!f.addEventListener,w=" style='position:relative;display:inline-block;"+(v?"*display:inline;*zoom:1;'":"'"),x=function(a,b){a=a||"";var c=-1!==a.indexOf("++"),d=1;return c&&(a=a.split("++").join("")),function(){return"<"+b+w+(a?" class='"+a+(c?d++:"")+"'>":">")}},y=d.SplitText=b.SplitText=function(a,b){if("string"==typeof a&&(a=y.selector(a)),!a)throw"cannot split a null element.";this.elements=j(a)?k(a):[a],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=b||{},this.split(b)},z=function(a,b,c){var d=a.nodeType;if(1===d||9===d||11===d)for(a=a.firstChild;a;a=a.nextSibling)z(a,b,c);else(3===d||4===d)&&(a.nodeValue=a.nodeValue.split(b).join(c))},A=function(a,b){for(var c=b.length;--c>-1;)a.push(b[c])},B=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},C=function(a,b,c){for(var d;a&&a!==b;){if(d=a._next||a.nextSibling)return d.textContent.charAt(0)===c;a=a.parentNode||a._parent}return!1},D=function(a){var b,c,d=B(a.childNodes),e=d.length;for(b=0;e>b;b++)c=d[b],c._isSplit?D(c):(b&&3===c.previousSibling.nodeType?c.previousSibling.nodeValue+=3===c.nodeType?c.nodeValue:c.firstChild.nodeValue:3!==c.nodeType&&a.insertBefore(c.firstChild,c),a.removeChild(c))},E=function(a,b,c,d,e,h,j){var k,l,m,n,o,p,q,r,s,t,u,v,w=g(a),x=i(a,"paddingLeft",w),y=-999,B=i(a,"borderBottomWidth",w)+i(a,"borderTopWidth",w),E=i(a,"borderLeftWidth",w)+i(a,"borderRightWidth",w),F=i(a,"paddingTop",w)+i(a,"paddingBottom",w),G=i(a,"paddingLeft",w)+i(a,"paddingRight",w),H=.2*i(a,"fontSize"),I=i(a,"textAlign",w,!0),J=[],K=[],L=[],M=b.wordDelimiter||" ",N=b.span?"span":"div",O=b.type||b.split||"chars,words,lines",P=e&&-1!==O.indexOf("lines")?[]:null,Q=-1!==O.indexOf("words"),R=-1!==O.indexOf("chars"),S="absolute"===b.position||b.absolute===!0,T=b.linesClass,U=-1!==(T||"").indexOf("++"),V=[];for(P&&1===a.children.length&&a.children[0]._isSplit&&(a=a.children[0]),U&&(T=T.split("++").join("")),l=a.getElementsByTagName("*"),m=l.length,o=[],k=0;m>k;k++)o[k]=l[k];if(P||S)for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,(p||S||R&&!Q)&&(v=n.offsetTop,P&&p&&Math.abs(v-y)>H&&"BR"!==n.nodeName&&(q=[],P.push(q),y=v),S&&(n._x=n.offsetLeft,n._y=v,n._w=n.offsetWidth,n._h=n.offsetHeight),P&&((n._isSplit&&p||!R&&p||Q&&p||!Q&&n.parentNode.parentNode===a&&!n.parentNode._isSplit)&&(q.push(n),n._x-=x,C(n,a,M)&&(n._wordEnd=!0)),"BR"===n.nodeName&&n.nextSibling&&"BR"===n.nextSibling.nodeName&&P.push([])));for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,"BR"!==n.nodeName?(S&&(s=n.style,Q||p||(n._x+=n.parentNode._x,n._y+=n.parentNode._y),s.left=n._x+"px",s.top=n._y+"px",s.position="absolute",s.display="block",s.width=n._w+1+"px",s.height=n._h+"px"),!Q&&R?n._isSplit?(n._next=n.nextSibling,n.parentNode.appendChild(n)):n.parentNode._isSplit?(n._parent=n.parentNode,!n.previousSibling&&n.firstChild&&(n.firstChild._isFirst=!0),n.nextSibling&&" "===n.nextSibling.textContent&&!n.nextSibling.nextSibling&&V.push(n.nextSibling),n._next=n.nextSibling&&n.nextSibling._isFirst?null:n.nextSibling,n.parentNode.removeChild(n),o.splice(k--,1),m--):p||(v=!n.nextSibling&&C(n.parentNode,a,M),n.parentNode._parent&&n.parentNode._parent.appendChild(n),v&&n.parentNode.appendChild(f.createTextNode(" ")),b.span&&(n.style.display="inline"),J.push(n)):n.parentNode._isSplit&&!n._isSplit&&""!==n.innerHTML?K.push(n):R&&!n._isSplit&&(b.span&&(n.style.display="inline"),J.push(n))):P||S?(n.parentNode&&n.parentNode.removeChild(n),o.splice(k--,1),m--):Q||a.appendChild(n);for(k=V.length;--k>-1;)V[k].parentNode.removeChild(V[k]);if(P){for(S&&(t=f.createElement(N),a.appendChild(t),u=t.offsetWidth+"px",v=t.offsetParent===a?0:a.offsetLeft,a.removeChild(t)),s=a.style.cssText,a.style.cssText="display:none;";a.firstChild;)a.removeChild(a.firstChild);for(r=" "===M&&(!S||!Q&&!R),k=0;k<P.length;k++){for(q=P[k],t=f.createElement(N),t.style.cssText="display:block;text-align:"+I+";position:"+(S?"absolute;":"relative;"),T&&(t.className=T+(U?k+1:"")),L.push(t),m=q.length,l=0;m>l;l++)"BR"!==q[l].nodeName&&(n=q[l],t.appendChild(n),r&&n._wordEnd&&t.appendChild(f.createTextNode(" ")),S&&(0===l&&(t.style.top=n._y+"px",t.style.left=x+v+"px"),n.style.top="0px",v&&(n.style.left=n._x-v+"px")));0===m?t.innerHTML="&nbsp;":Q||R||(D(t),z(t,String.fromCharCode(160)," ")),S&&(t.style.width=u,t.style.height=n._h+"px"),a.appendChild(t)}a.style.cssText=s}S&&(j>a.clientHeight&&(a.style.height=j-F+"px",a.clientHeight<j&&(a.style.height=j+B+"px")),h>a.clientWidth&&(a.style.width=h-G+"px",a.clientWidth<h&&(a.style.width=h+E+"px"))),A(c,J),A(d,K),A(e,L)},F=function(a,b,c,d){var g,h,i,j,k,p,v,w,x,y=b.span?"span":"div",A=b.type||b.split||"chars,words,lines",B=(-1!==A.indexOf("words"),-1!==A.indexOf("chars")),C="absolute"===b.position||b.absolute===!0,D=b.wordDelimiter||" ",E=" "!==D?"":C?"&#173; ":" ",F=b.span?"</span>":"</div>",G=!0,H=f.createElement("div"),I=a.parentNode;for(I.insertBefore(H,a),H.textContent=a.nodeValue,I.removeChild(a),a=H,g=e(a),v=-1!==g.indexOf("<"),b.reduceWhiteSpace!==!1&&(g=g.replace(m," ").replace(l,"")),v&&(g=g.split("<").join("{{LT}}")),k=g.length,h=(" "===g.charAt(0)?E:"")+c(),i=0;k>i;i++)if(p=g.charAt(i),p===D&&g.charAt(i-1)!==D&&i){for(h+=G?F:"",G=!1;g.charAt(i+1)===D;)h+=E,i++;i===k-1?h+=E:")"!==g.charAt(i+1)&&(h+=E+c(),G=!0)}else"{"===p&&"{{LT}}"===g.substr(i,6)?(h+=B?d()+"{{LT}}</"+y+">":"{{LT}}",i+=5):p.charCodeAt(0)>=n&&p.charCodeAt(0)<=o||g.charCodeAt(i+1)>=65024&&g.charCodeAt(i+1)<=65039?(w=u(g.substr(i,2)),x=u(g.substr(i+2,2)),j=w>=q&&r>=w&&x>=q&&r>=x||x>=s&&t>=x?4:2,h+=B&&" "!==p?d()+g.substr(i,j)+"</"+y+">":g.substr(i,j),i+=j-1):h+=B&&" "!==p?d()+p+"</"+y+">":p;a.outerHTML=h+(G?F:""),v&&z(I,"{{LT}}","<")},G=function(a,b,c,d){var e,f,g=B(a.childNodes),h=g.length,j="absolute"===b.position||b.absolute===!0;if(3!==a.nodeType||h>1){for(b.absolute=!1,e=0;h>e;e++)f=g[e],(3!==f.nodeType||/\S+/.test(f.nodeValue))&&(j&&3!==f.nodeType&&"inline"===i(f,"display",null,!0)&&(f.style.display="inline-block",f.style.position="relative"),f._isSplit=!0,G(f,b,c,d));return b.absolute=j,void(a._isSplit=!0)}F(a,b,c,d)},H=y.prototype;H.split=function(a){this.isSplit&&this.revert(),this.vars=a=a||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var b,c,d,e=this.elements.length,f=a.span?"span":"div",g=("absolute"===a.position||a.absolute===!0,x(a.wordsClass,f)),h=x(a.charsClass,f);--e>-1;)d=this.elements[e],this._originals[e]=d.innerHTML,b=d.clientHeight,c=d.clientWidth,G(d,a,g,h),E(d,a,this.chars,this.words,this.lines,c,b);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},H.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var a=this._originals.length;--a>-1;)this.elements[a].innerHTML=this._originals[a];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},y.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(y.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)},y.version="0.5.6"}(_gsScope),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define([],b):"undefined"!=typeof module&&module.exports&&(module.exports=b())}("SplitText");


try{
	window.GreenSockGlobals = null;
	window._gsQueue = null;
	window._gsDefine = null;

	delete(window.GreenSockGlobals);
	delete(window._gsQueue);
	delete(window._gsDefine);	
   } catch(e) {}

try{
	window.GreenSockGlobals = oldgs;
	window._gsQueue = oldgs_queue;
	} catch(e) {}

if (window.tplogs==true)
	try {
		console.groupEnd();
	} catch(e) {}

(function(e,t){
		e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};		
})(jQuery)
;
/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 5.4.3 (20.04.2017)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/
!function(jQuery,undefined){"use strict";var version={core:"5.4.3","revolution.extensions.actions.min.js":"2.0.4","revolution.extensions.carousel.min.js":"1.2.1","revolution.extensions.kenburn.min.js":"1.2.0","revolution.extensions.layeranimation.min.js":"3.6.1","revolution.extensions.navigation.min.js":"1.3.3","revolution.extensions.parallax.min.js":"2.2.0","revolution.extensions.slideanims.min.js":"1.7","revolution.extensions.video.min.js":"2.1.1"};jQuery.fn.extend({revolution:function(a){var b={delay:9e3,responsiveLevels:4064,visibilityLevels:[2048,1024,778,480],gridwidth:960,gridheight:500,minHeight:0,autoHeight:"off",sliderType:"standard",sliderLayout:"auto",fullScreenAutoWidth:"off",fullScreenAlignForce:"off",fullScreenOffsetContainer:"",fullScreenOffset:"0",hideCaptionAtLimit:0,hideAllCaptionAtLimit:0,hideSliderAtLimit:0,disableProgressBar:"off",stopAtSlide:-1,stopAfterLoops:-1,shadow:0,dottedOverlay:"none",startDelay:0,lazyType:"smart",spinner:"spinner0",shuffle:"off",viewPort:{enable:!1,outof:"wait",visible_area:"60%",presize:!1},fallbacks:{isJoomla:!1,panZoomDisableOnMobile:"off",simplifyAll:"on",nextSlideOnWindowFocus:"off",disableFocusListener:!0,ignoreHeightChanges:"off",ignoreHeightChangesSize:0,allowHTML5AutoPlayOnAndroid:!0},parallax:{type:"off",levels:[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],origo:"enterpoint",speed:400,bgparallax:"off",opacity:"on",disable_onmobile:"off",ddd_shadow:"on",ddd_bgfreeze:"off",ddd_overflow:"visible",ddd_layer_overflow:"visible",ddd_z_correction:65,ddd_path:"mouse"},scrolleffect:{fade:"off",blur:"off",scale:"off",grayscale:"off",maxblur:10,on_layers:"off",on_slidebg:"off",on_static_layers:"off",on_parallax_layers:"off",on_parallax_static_layers:"off",direction:"both",multiplicator:1.35,multiplicator_layers:.5,tilt:30,disable_on_mobile:"on"},carousel:{easing:punchgs.Power3.easeInOut,speed:800,showLayersAllTime:"off",horizontal_align:"center",vertical_align:"center",infinity:"on",space:0,maxVisibleItems:3,stretch:"off",fadeout:"on",maxRotation:0,minScale:0,vary_fade:"off",vary_rotation:"on",vary_scale:"off",border_radius:"0px",padding_top:0,padding_bottom:0},navigation:{keyboardNavigation:"off",keyboard_direction:"horizontal",mouseScrollNavigation:"off",onHoverStop:"on",touch:{touchenabled:"off",touchOnDesktop:"off",swipe_treshold:75,swipe_min_touches:1,drag_block_vertical:!1,swipe_direction:"horizontal"},arrows:{style:"",enable:!1,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,tmp:"",rtl:!1,left:{h_align:"left",v_align:"center",h_offset:20,v_offset:0,container:"slider"},right:{h_align:"right",v_align:"center",h_offset:20,v_offset:0,container:"slider"}},bullets:{container:"slider",rtl:!1,style:"",enable:!1,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",h_align:"left",v_align:"center",space:0,h_offset:20,v_offset:0,tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'},thumbnails:{container:"slider",rtl:!1,style:"",enable:!1,width:100,height:50,min_width:100,wrapper_padding:2,wrapper_color:"#f5f5f5",wrapper_opacity:1,tmp:'<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,position:"inner",space:2,h_align:"left",v_align:"center",h_offset:20,v_offset:0},tabs:{container:"slider",rtl:!1,style:"",enable:!1,width:100,min_width:100,height:50,wrapper_padding:10,wrapper_color:"#f5f5f5",wrapper_opacity:1,tmp:'<span class="tp-tab-image"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,space:0,position:"inner",h_align:"left",v_align:"center",h_offset:20,v_offset:0}},extensions:"extensions/",extensions_suffix:".min.js",debugMode:!1};return a=jQuery.extend(!0,{},b,a),this.each(function(){var b=jQuery(this);a.minHeight=a.minHeight!=undefined?parseInt(a.minHeight,0):a.minHeight,a.scrolleffect.on="on"===a.scrolleffect.fade||"on"===a.scrolleffect.scale||"on"===a.scrolleffect.blur||"on"===a.scrolleffect.grayscale,"hero"==a.sliderType&&b.find(">ul>li").each(function(a){a>0&&jQuery(this).remove()}),a.jsFileLocation=a.jsFileLocation||getScriptLocation("themepunch.revolution.min.js"),a.jsFileLocation=a.jsFileLocation+a.extensions,a.scriptsneeded=getNeededScripts(a,b),a.curWinRange=0,a.rtl=!0,a.navigation!=undefined&&a.navigation.touch!=undefined&&(a.navigation.touch.swipe_min_touches=a.navigation.touch.swipe_min_touches>5?1:a.navigation.touch.swipe_min_touches),jQuery(this).on("scriptsloaded",function(){if(a.modulesfailing)return b.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.'+a.errorm+"</div>").show(),!1;_R.migration!=undefined&&(a=_R.migration(b,a)),punchgs.force3D=!0,"on"!==a.simplifyAll&&punchgs.TweenLite.lagSmoothing(1e3,16),prepareOptions(b,a),initSlider(b,a)}),b[0].opt=a,waitForScripts(b,a)})},getRSVersion:function(a){if(!0===a)return jQuery("body").data("tp_rs_version");var b=jQuery("body").data("tp_rs_version"),c="";c+="---------------------------------------------------------\n",c+="    Currently Loaded Slider Revolution & SR Modules :\n",c+="---------------------------------------------------------\n";for(var d in b)c+=b[d].alias+": "+b[d].ver+"\n";return c+="---------------------------------------------------------\n"},revremoveslide:function(a){return this.each(function(){var b=jQuery(this),c=b[0].opt;if(!(a<0||a>c.slideamount)&&b!=undefined&&b.length>0&&jQuery("body").find("#"+b.attr("id")).length>0&&c&&c.li.length>0&&(a>0||a<=c.li.length)){var d=jQuery(c.li[a]),e=d.data("index"),f=!1;c.slideamount=c.slideamount-1,c.realslideamount=c.realslideamount-1,removeNavWithLiref(".tp-bullet",e,c),removeNavWithLiref(".tp-tab",e,c),removeNavWithLiref(".tp-thumb",e,c),d.hasClass("active-revslide")&&(f=!0),d.remove(),c.li=removeArray(c.li,a),c.carousel&&c.carousel.slides&&(c.carousel.slides=removeArray(c.carousel.slides,a)),c.thumbs=removeArray(c.thumbs,a),_R.updateNavIndexes&&_R.updateNavIndexes(c),f&&b.revnext(),punchgs.TweenLite.set(c.li,{minWidth:"99%"}),punchgs.TweenLite.set(c.li,{minWidth:"100%"})}})},revaddcallback:function(a){return this.each(function(){this.opt&&(this.opt.callBackArray===undefined&&(this.opt.callBackArray=new Array),this.opt.callBackArray.push(a))})},revgetparallaxproc:function(){return jQuery(this)[0].opt.scrollproc},revdebugmode:function(){return this.each(function(){var a=jQuery(this);a[0].opt.debugMode=!0,containerResized(a,a[0].opt)})},revscroll:function(a){return this.each(function(){var b=jQuery(this);jQuery("body,html").animate({scrollTop:b.offset().top+b.height()-a+"px"},{duration:400})})},revredraw:function(a){return this.each(function(){var a=jQuery(this);containerResized(a,a[0].opt)})},revkill:function(a){var b=this,c=jQuery(this);if(punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements),c!=undefined&&c.length>0&&jQuery("body").find("#"+c.attr("id")).length>0){c.data("conthover",1),c.data("conthover-changed",1),c.trigger("revolution.slide.onpause");var d=c.parent().find(".tp-bannertimer"),e=c[0].opt;e.tonpause=!0,c.trigger("stoptimer");var f="resize.revslider-"+c.attr("id");jQuery(window).unbind(f),punchgs.TweenLite.killTweensOf(c.find("*"),!1),punchgs.TweenLite.killTweensOf(c,!1),c.unbind("hover, mouseover, mouseenter,mouseleave, resize");var f="resize.revslider-"+c.attr("id");jQuery(window).off(f),c.find("*").each(function(){var a=jQuery(this);a.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"),a.off("on, hover, mouseenter,mouseleave,mouseover, resize"),a.data("mySplitText",null),a.data("ctl",null),a.data("tween")!=undefined&&a.data("tween").kill(),a.data("kenburn")!=undefined&&a.data("kenburn").kill(),a.data("timeline_out")!=undefined&&a.data("timeline_out").kill(),a.data("timeline")!=undefined&&a.data("timeline").kill(),a.remove(),a.empty(),a=null}),punchgs.TweenLite.killTweensOf(c.find("*"),!1),punchgs.TweenLite.killTweensOf(c,!1),d.remove();try{c.closest(".forcefullwidth_wrapper_tp_banner").remove()}catch(a){}try{c.closest(".rev_slider_wrapper").remove()}catch(a){}try{c.remove()}catch(a){}return c.empty(),c.html(),c=null,e=null,delete b.c,delete b.opt,delete b.container,!0}return!1},revpause:function(){return this.each(function(){var a=jQuery(this);a!=undefined&&a.length>0&&jQuery("body").find("#"+a.attr("id")).length>0&&(a.data("conthover",1),a.data("conthover-changed",1),a.trigger("revolution.slide.onpause"),a[0].opt.tonpause=!0,a.trigger("stoptimer"))})},revresume:function(){return this.each(function(){var a=jQuery(this);a!=undefined&&a.length>0&&jQuery("body").find("#"+a.attr("id")).length>0&&(a.data("conthover",0),a.data("conthover-changed",1),a.trigger("revolution.slide.onresume"),a[0].opt.tonpause=!1,a.trigger("starttimer"))})},revstart:function(){var a=jQuery(this);if(a!=undefined&&a.length>0&&jQuery("body").find("#"+a.attr("id")).length>0&&a[0].opt!==undefined)return a[0].opt.sliderisrunning?(console.log("Slider Is Running Already"),!1):(runSlider(a,a[0].opt),!0)},revnext:function(){return this.each(function(){var a=jQuery(this);a!=undefined&&a.length>0&&jQuery("body").find("#"+a.attr("id")).length>0&&_R.callingNewSlide(a,1)})},revprev:function(){return this.each(function(){var a=jQuery(this);a!=undefined&&a.length>0&&jQuery("body").find("#"+a.attr("id")).length>0&&_R.callingNewSlide(a,-1)})},revmaxslide:function(){return jQuery(this).find(".tp-revslider-mainul >li").length},revcurrentslide:function(){var a=jQuery(this);if(a!=undefined&&a.length>0&&jQuery("body").find("#"+a.attr("id")).length>0)return parseInt(a[0].opt.act,0)+1},revlastslide:function(){return jQuery(this).find(".tp-revslider-mainul >li").length},revshowslide:function(a){return this.each(function(){var b=jQuery(this);b!=undefined&&b.length>0&&jQuery("body").find("#"+b.attr("id")).length>0&&_R.callingNewSlide(b,"to"+(a-1))})},revcallslidewithid:function(a){return this.each(function(){var b=jQuery(this);b!=undefined&&b.length>0&&jQuery("body").find("#"+b.attr("id")).length>0&&_R.callingNewSlide(b,a)})}});var _R=jQuery.fn.revolution;jQuery.extend(!0,_R,{getversion:function(){return version},compare_version:function(a){var b=jQuery("body").data("tp_rs_version");return b=b===undefined?new Object:b,b.Core===undefined&&(b.Core=new Object,b.Core.alias="Slider Revolution Core",b.Core.name="jquery.themepunch.revolution.min.js",b.Core.ver=_R.getversion().core),"stop"!=a.check&&(_R.getversion().core<a.min_core?(a.check===undefined&&(console.log("%cSlider Revolution Warning (Core:"+_R.getversion().core+")","color:#c0392b;font-weight:bold;"),console.log("%c     Core is older than expected ("+a.min_core+") from "+a.alias,"color:#333"),console.log("%c     Please update Slider Revolution to the latest version.","color:#333"),console.log("%c     It might be required to purge and clear Server/Client side Caches.","color:#333")),a.check="stop"):_R.getversion()[a.name]!=undefined&&a.version<_R.getversion()[a.name]&&(a.check===undefined&&(console.log("%cSlider Revolution Warning (Core:"+_R.getversion().core+")","color:#c0392b;font-weight:bold;"),console.log("%c     "+a.alias+" ("+a.version+") is older than requiered ("+_R.getversion()[a.name]+")","color:#333"),console.log("%c     Please update Slider Revolution to the latest version.","color:#333"),console.log("%c     It might be required to purge and clear Server/Client side Caches.","color:#333")),a.check="stop")),b[a.alias]===undefined&&(b[a.alias]=new Object,b[a.alias].alias=a.alias,b[a.alias].ver=a.version,b[a.alias].name=a.name),jQuery("body").data("tp_rs_version",b),a},currentSlideIndex:function(a){var b=a.c.find(".active-revslide").index();return b=-1==b?0:b},simp:function(a,b,c){var d=Math.abs(a)-Math.floor(Math.abs(a/b))*b;return c?d:a<0?-1*d:d},iOSVersion:function(){var a=!1;return navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)?navigator.userAgent.match(/OS 4_\d like Mac OS X/i)&&(a=!0):a=!1,a},isIE:function(a,b){var c=jQuery('<div style="display:none;"/>').appendTo(jQuery("body"));c.html("\x3c!--[if "+(b||"")+" IE "+(a||"")+"]><a>&nbsp;</a><![endif]--\x3e");var d=c.find("a").length;return c.remove(),d},is_mobile:function(){var a=["android","webos","iphone","ipad","blackberry","Android","webos",,"iPod","iPhone","iPad","Blackberry","BlackBerry"],b=!1;for(var c in a)navigator.userAgent.split(a[c]).length>1&&(b=!0);return b},is_android:function(){var a=["android","Android"],b=!1;for(var c in a)navigator.userAgent.split(a[c]).length>1&&(b=!0);return b},callBackHandling:function(a,b,c){try{a.callBackArray&&jQuery.each(a.callBackArray,function(a,d){d&&d.inmodule&&d.inmodule===b&&d.atposition&&d.atposition===c&&d.callback&&d.callback.call()})}catch(a){console.log("Call Back Failed")}},get_browser:function(){var c,a=navigator.appName,b=navigator.userAgent,d=b.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return d&&null!=(c=b.match(/version\/([\.\d]+)/i))&&(d[2]=c[1]),d=d?[d[1],d[2]]:[a,navigator.appVersion,"-?"],d[0]},get_browser_version:function(){var c,a=navigator.appName,b=navigator.userAgent,d=b.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return d&&null!=(c=b.match(/version\/([\.\d]+)/i))&&(d[2]=c[1]),d=d?[d[1],d[2]]:[a,navigator.appVersion,"-?"],d[1]},getHorizontalOffset:function(a,b){var c=gWiderOut(a,".outer-left"),d=gWiderOut(a,".outer-right");switch(b){case"left":return c;case"right":return d;case"both":return c+d}},callingNewSlide:function(a,b){var c=a.find(".next-revslide").length>0?a.find(".next-revslide").index():a.find(".processing-revslide").length>0?a.find(".processing-revslide").index():a.find(".active-revslide").index(),d=0,e=a[0].opt;a.find(".next-revslide").removeClass("next-revslide"),a.find(".active-revslide").hasClass("tp-invisible-slide")&&(c=e.last_shown_slide),b&&jQuery.isNumeric(b)||b.match(/to/g)?(1===b||-1===b?(d=c+b,d=d<0?e.slideamount-1:d>=e.slideamount?0:d):(b=jQuery.isNumeric(b)?b:parseInt(b.split("to")[1],0),d=b<0?0:b>e.slideamount-1?e.slideamount-1:b),a.find(".tp-revslider-slidesli:eq("+d+")").addClass("next-revslide")):b&&a.find(".tp-revslider-slidesli").each(function(){var a=jQuery(this);a.data("index")===b&&a.addClass("next-revslide")}),d=a.find(".next-revslide").index(),a.trigger("revolution.nextslide.waiting"),c===d&&c===e.last_shown_slide||d!==c&&-1!=d?swapSlide(a):a.find(".next-revslide").removeClass("next-revslide")},slotSize:function(a,b){b.slotw=Math.ceil(b.width/b.slots),"fullscreen"==b.sliderLayout?b.sloth=Math.ceil(jQuery(window).height()/b.slots):b.sloth=Math.ceil(b.height/b.slots),"on"==b.autoHeight&&a!==undefined&&""!==a&&(b.sloth=Math.ceil(a.height()/b.slots))},setSize:function(a){var b=(a.top_outer||0)+(a.bottom_outer||0),c=parseInt(a.carousel.padding_top||0,0),d=parseInt(a.carousel.padding_bottom||0,0),e=a.gridheight[a.curWinRange],f=0,g=-1===a.nextSlide||a.nextSlide===undefined?0:a.nextSlide;if(a.paddings=a.paddings===undefined?{top:parseInt(a.c.parent().css("paddingTop"),0)||0,bottom:parseInt(a.c.parent().css("paddingBottom"),0)||0}:a.paddings,a.rowzones&&a.rowzones.length>0)for(var h=0;h<a.rowzones[g].length;h++)f+=a.rowzones[g][h][0].offsetHeight;if(e=e<a.minHeight?a.minHeight:e,e=e<f?f:e,"fullwidth"==a.sliderLayout&&"off"==a.autoHeight&&punchgs.TweenLite.set(a.c,{maxHeight:e+"px"}),a.c.css({marginTop:c,marginBottom:d}),a.width=a.ul.width(),a.height=a.ul.height(),setScale(a),a.height=Math.round(a.gridheight[a.curWinRange]*(a.width/a.gridwidth[a.curWinRange])),a.height>a.gridheight[a.curWinRange]&&"on"!=a.autoHeight&&(a.height=a.gridheight[a.curWinRange]),"fullscreen"==a.sliderLayout||a.infullscreenmode){a.height=a.bw*a.gridheight[a.curWinRange];var j=(a.c.parent().width(),jQuery(window).height());if(a.fullScreenOffsetContainer!=undefined){try{var k=a.fullScreenOffsetContainer.split(",");k&&jQuery.each(k,function(a,b){j=jQuery(b).length>0?j-jQuery(b).outerHeight(!0):j})}catch(a){}try{a.fullScreenOffset.split("%").length>1&&a.fullScreenOffset!=undefined&&a.fullScreenOffset.length>0?j-=jQuery(window).height()*parseInt(a.fullScreenOffset,0)/100:a.fullScreenOffset!=undefined&&a.fullScreenOffset.length>0&&(j-=parseInt(a.fullScreenOffset,0))}catch(a){}}j=j<a.minHeight?a.minHeight:j,j-=b,a.c.parent().height(j),a.c.closest(".rev_slider_wrapper").height(j),a.c.css({height:"100%"}),a.height=j,a.minHeight!=undefined&&a.height<a.minHeight&&(a.height=a.minHeight),a.height=parseInt(f,0)>parseInt(a.height,0)?f:a.height}else a.minHeight!=undefined&&a.height<a.minHeight&&(a.height=a.minHeight),a.height=parseInt(f,0)>parseInt(a.height,0)?f:a.height,a.c.height(a.height);var l={height:c+d+b+a.height+a.paddings.top+a.paddings.bottom};a.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(l),a.c.closest(".rev_slider_wrapper").css(l),setScale(a)},enterInViewPort:function(a){a.waitForCountDown&&(countDown(a.c,a),a.waitForCountDown=!1),a.waitForFirstSlide&&(swapSlide(a.c),a.waitForFirstSlide=!1,setTimeout(function(){a.c.removeClass("tp-waitforfirststart")},500)),"playing"!=a.sliderlaststatus&&a.sliderlaststatus!=undefined||a.c.trigger("starttimer"),a.lastplayedvideos!=undefined&&a.lastplayedvideos.length>0&&jQuery.each(a.lastplayedvideos,function(b,c){_R.playVideo(c,a)})},leaveViewPort:function(a){a.sliderlaststatus=a.sliderstatus,a.c.trigger("stoptimer"),a.playingvideos!=undefined&&a.playingvideos.length>0&&(a.lastplayedvideos=jQuery.extend(!0,[],a.playingvideos),a.playingvideos&&jQuery.each(a.playingvideos,function(b,c){a.leaveViewPortBasedStop=!0,_R.stopVideo&&_R.stopVideo(c,a)}))},unToggleState:function(a){a!=undefined&&a.length>0&&jQuery.each(a,function(a,b){b.removeClass("rs-toggle-content-active")})},toggleState:function(a){a!=undefined&&a.length>0&&jQuery.each(a,function(a,b){b.addClass("rs-toggle-content-active")})},swaptoggleState:function(a){a!=undefined&&a.length>0&&jQuery.each(a,function(a,b){jQuery(b).hasClass("rs-toggle-content-active")?jQuery(b).removeClass("rs-toggle-content-active"):jQuery(b).addClass("rs-toggle-content-active")})},lastToggleState:function(a){var b=0;return a!=undefined&&a.length>0&&jQuery.each(a,function(a,c){b=c.hasClass("rs-toggle-content-active")}),b}});var _ISM=_R.is_mobile(),_ANDROID=_R.is_android(),checkIDS=function(a,b){if(a.anyid=a.anyid===undefined?[]:a.anyid,-1!=jQuery.inArray(b.attr("id"),a.anyid)){var d=b.attr("id")+"_"+Math.round(9999*Math.random());b.attr("id",d)}a.anyid.push(b.attr("id"))},removeArray=function(a,b){var c=[];return jQuery.each(a,function(a,d){a!=b&&c.push(d)}),c},removeNavWithLiref=function(a,b,c){c.c.find(a).each(function(){var a=jQuery(this);a.data("liref")===b&&a.remove()})},lAjax=function(a,b){return!jQuery("body").data(a)&&(b.filesystem?(b.errorm===undefined&&(b.errorm="<br>Local Filesystem Detected !<br>Put this to your header:"),console.warn("Local Filesystem detected !"),b.errorm=b.errorm+'<br>&lt;script type="text/javascript" src="'+b.jsFileLocation+a+b.extensions_suffix+'"&gt;&lt;/script&gt;',console.warn(b.jsFileLocation+a+b.extensions_suffix+" could not be loaded !"),console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."),console.log(" "),b.modulesfailing=!0,!1):(jQuery.ajax({url:b.jsFileLocation+a+b.extensions_suffix+"?version="+version.core,dataType:"script",cache:!0,error:function(c){console.warn("Slider Revolution 5.0 Error !"),console.error("Failure at Loading:"+a+b.extensions_suffix+" on Path:"+b.jsFileLocation),console.info(c)}}),void jQuery("body").data(a,!0)))},getNeededScripts=function(a,b){var c=new Object,d=a.navigation;return c.kenburns=!1,c.parallax=!1,c.carousel=!1,c.navigation=!1,c.videos=!1,c.actions=!1,c.layeranim=!1,c.migration=!1,b.data("version")&&b.data("version").toString().match(/5./gi)?(b.find("img").each(function(){"on"==jQuery(this).data("kenburns")&&(c.kenburns=!0)}),("carousel"==a.sliderType||"on"==d.keyboardNavigation||"on"==d.mouseScrollNavigation||"on"==d.touch.touchenabled||d.arrows.enable||d.bullets.enable||d.thumbnails.enable||d.tabs.enable)&&(c.navigation=!0),b.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function(){var a=jQuery(this);(a.data("ytid")!=undefined||a.find("iframe").length>0&&a.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&(c.videos=!0),(a.data("vimeoid")!=undefined||a.find("iframe").length>0&&a.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&(c.videos=!0),a.data("actions")!==undefined&&(c.actions=!0),c.layeranim=!0}),b.find("li").each(function(){jQuery(this).data("link")&&jQuery(this).data("link")!=undefined&&(c.layeranim=!0,c.actions=!0)}),!c.videos&&(b.find(".rs-background-video-layer").length>0||b.find(".tp-videolayer").length>0||b.find(".tp-audiolayer").length>0||b.find("iframe").length>0||b.find("video").length>0)&&(c.videos=!0),"carousel"==a.sliderType&&(c.carousel=!0),("off"!==a.parallax.type||a.viewPort.enable||"true"==a.viewPort.enable||"true"===a.scrolleffect.on||a.scrolleffect.on)&&(c.parallax=!0)):(c.kenburns=!0,c.parallax=!0,c.carousel=!1,c.navigation=!0,c.videos=!0,c.actions=!0,c.layeranim=!0,c.migration=!0),"hero"==a.sliderType&&(c.carousel=!1,c.navigation=!1),window.location.href.match(/file:/gi)&&(c.filesystem=!0,a.filesystem=!0),c.videos&&void 0===_R.isVideoPlaying&&lAjax("revolution.extension.video",a),c.carousel&&void 0===_R.prepareCarousel&&lAjax("revolution.extension.carousel",a),c.carousel||void 0!==_R.animateSlide||lAjax("revolution.extension.slideanims",a),c.actions&&void 0===_R.checkActions&&lAjax("revolution.extension.actions",a),c.layeranim&&void 0===_R.handleStaticLayers&&lAjax("revolution.extension.layeranimation",a),c.kenburns&&void 0===_R.stopKenBurn&&lAjax("revolution.extension.kenburn",a),c.navigation&&void 0===_R.createNavigation&&lAjax("revolution.extension.navigation",a),c.migration&&void 0===_R.migration&&lAjax("revolution.extension.migration",a),c.parallax&&void 0===_R.checkForParallax&&lAjax("revolution.extension.parallax",a),a.addons!=undefined&&a.addons.length>0&&jQuery.each(a.addons,function(b,c){"object"==typeof c&&c.fileprefix!=undefined&&lAjax(c.fileprefix,a)}),c},waitForScripts=function(a,b){var c=!0,d=b.scriptsneeded;b.addons!=undefined&&b.addons.length>0&&jQuery.each(b.addons,function(a,b){"object"==typeof b&&b.init!=undefined&&_R[b.init]===undefined&&(c=!1)}),d.filesystem||"undefined"!=typeof punchgs&&c&&(!d.kenburns||d.kenburns&&void 0!==_R.stopKenBurn)&&(!d.navigation||d.navigation&&void 0!==_R.createNavigation)&&(!d.carousel||d.carousel&&void 0!==_R.prepareCarousel)&&(!d.videos||d.videos&&void 0!==_R.resetVideo)&&(!d.actions||d.actions&&void 0!==_R.checkActions)&&(!d.layeranim||d.layeranim&&void 0!==_R.handleStaticLayers)&&(!d.migration||d.migration&&void 0!==_R.migration)&&(!d.parallax||d.parallax&&void 0!==_R.checkForParallax)&&(d.carousel||!d.carousel&&void 0!==_R.animateSlide)?a.trigger("scriptsloaded"):setTimeout(function(){waitForScripts(a,b)},50)},getScriptLocation=function(a){var b=new RegExp("themepunch.revolution.min.js","gi"),c="";return jQuery("script").each(function(){var a=jQuery(this).attr("src");a&&a.match(b)&&(c=a)}),c=c.replace("jquery.themepunch.revolution.min.js",""),c=c.replace("jquery.themepunch.revolution.js",""),c=c.split("?")[0]},setCurWinRange=function(a,b){var d=9999,e=0,f=0,g=0,h=jQuery(window).width(),i=b&&9999==a.responsiveLevels?a.visibilityLevels:a.responsiveLevels;i&&i.length&&jQuery.each(i,function(a,b){h<b&&(0==e||e>b)&&(d=b,g=a,e=b),h>b&&e<b&&(e=b,f=a)}),e<d&&(g=f),b?a.forcedWinRange=g:a.curWinRange=g},prepareOptions=function(a,b){b.carousel.maxVisibleItems=b.carousel.maxVisibleItems<1?999:b.carousel.maxVisibleItems,b.carousel.vertical_align="top"===b.carousel.vertical_align?"0%":"bottom"===b.carousel.vertical_align?"100%":"50%"},gWiderOut=function(a,b){var c=0;return a.find(b).each(function(){var a=jQuery(this);!a.hasClass("tp-forcenotvisible")&&c<a.outerWidth()&&(c=a.outerWidth())}),c},initSlider=function(container,opt){if(container==undefined)return!1;container.data("aimg")!=undefined&&("enabled"==container.data("aie8")&&_R.isIE(8)||"enabled"==container.data("amobile")&&_ISM)&&container.html('<img class="tp-slider-alternative-image" src="'+container.data("aimg")+'">'),container.find(">ul").addClass("tp-revslider-mainul"),opt.c=container,opt.ul=container.find(".tp-revslider-mainul"),opt.ul.find(">li").each(function(a){var b=jQuery(this);"on"==b.data("hideslideonmobile")&&_ISM&&b.remove(),(b.data("invisible")||!0===b.data("invisible"))&&(b.addClass("tp-invisible-slide"),b.appendTo(opt.ul))}),opt.addons!=undefined&&opt.addons.length>0&&jQuery.each(opt.addons,function(i,obj){"object"==typeof obj&&obj.init!=undefined&&_R[obj.init](eval(obj.params))}),opt.cid=container.attr("id"),opt.ul.css({visibility:"visible"}),opt.slideamount=opt.ul.find(">li").not(".tp-invisible-slide").length,opt.realslideamount=opt.ul.find(">li").length,opt.slayers=container.find(".tp-static-layers"),opt.slayers.data("index","staticlayers"),1!=opt.waitForInit&&(container[0].opt=opt,runSlider(container,opt))},onFullScreenChange=function(){jQuery("body").data("rs-fullScreenMode",!jQuery("body").data("rs-fullScreenMode")),jQuery("body").data("rs-fullScreenMode")&&setTimeout(function(){jQuery(window).trigger("resize")},200)},runSlider=function(a,b){if(b.sliderisrunning=!0,b.ul.find(">li").each(function(a){jQuery(this).data("originalindex",a)}),b.allli=b.ul.find(">li"),jQuery.each(b.allli,function(a,b){var b=jQuery(b);b.data("origindex",b.index())}),b.li=b.ul.find(">li").not(".tp-invisible-slide"),"on"==b.shuffle){var c=new Object,d=b.ul.find(">li:first-child");c.fstransition=d.data("fstransition"),c.fsmasterspeed=d.data("fsmasterspeed"),c.fsslotamount=d.data("fsslotamount");for(var e=0;e<b.slideamount;e++){var f=Math.round(Math.random()*b.slideamount);b.ul.find(">li:eq("+f+")").prependTo(b.ul)}var g=b.ul.find(">li:first-child");g.data("fstransition",c.fstransition),g.data("fsmasterspeed",c.fsmasterspeed),g.data("fsslotamount",c.fsslotamount),b.allli=b.ul.find(">li"),b.li=b.ul.find(">li").not(".tp-invisible-slide")}if(b.inli=b.ul.find(">li.tp-invisible-slide"),b.thumbs=new Array,b.slots=4,b.act=-1,b.firststart=1,b.loadqueue=new Array,b.syncload=0,b.conw=a.width(),b.conh=a.height(),b.responsiveLevels.length>1?b.responsiveLevels[0]=9999:b.responsiveLevels=9999,jQuery.each(b.allli,function(a,c){var c=jQuery(c),d=c.find(".rev-slidebg")||c.find("img").first(),e=0;c.addClass("tp-revslider-slidesli"),c.data("index")===undefined&&c.data("index","rs-"+Math.round(999999*Math.random()));var f=new Object;f.params=new Array,f.id=c.data("index"),f.src=c.data("thumb")!==undefined?c.data("thumb"):d.data("lazyload")!==undefined?d.data("lazyload"):d.attr("src"),c.data("title")!==undefined&&f.params.push({from:RegExp("\\{\\{title\\}\\}","g"),to:c.data("title")}),c.data("description")!==undefined&&f.params.push({from:RegExp("\\{\\{description\\}\\}","g"),to:c.data("description")});for(var e=1;e<=10;e++)c.data("param"+e)!==undefined&&f.params.push({from:RegExp("\\{\\{param"+e+"\\}\\}","g"),to:c.data("param"+e)});if(b.thumbs.push(f),c.data("link")!=undefined){var g=c.data("link"),h=c.data("target")||"_self",i="back"===c.data("slideindex")?0:60,j=c.data("linktoslide"),k=j;j!=undefined&&"next"!=j&&"prev"!=j&&b.allli.each(function(){var a=jQuery(this);a.data("origindex")+1==k&&(j=a.data("index"))}),"slide"!=g&&(j="no");var l='<div class="tp-caption slidelink" style="cursor:pointer;width:100%;height:100%;z-index:'+i+';" data-x="center" data-y="center" data-basealign="slide" ',m="scroll_under"===j?'[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]':"prev"===j?'[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]':"next"===j?'[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]':'[{"event":"click","action":"jumptoslide","slide":"'+j+'","delay":"0.2"}]',n=' data-frames=\'[{"delay":0,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]\'';l="no"==j?l+n+" >":l+"data-actions='"+m+"'"+n+" >",l+='<a style="width:100%;height:100%;display:block"',l="slide"!=g?l+' target="'+h+'" href="'+g+'"':l,l+='><span style="width:100%;height:100%;display:block"></span></a></div>',c.append(l)}}),b.rle=b.responsiveLevels.length||1,b.gridwidth=cArray(b.gridwidth,b.rle),b.gridheight=cArray(b.gridheight,b.rle),"on"==b.simplifyAll&&(_R.isIE(8)||_R.iOSVersion())&&(a.find(".tp-caption").each(function(){var a=jQuery(this);a.removeClass("customin customout").addClass("fadein fadeout"),a.data("splitin",""),a.data("speed",400)}),b.allli.each(function(){var a=jQuery(this);a.data("transition","fade"),a.data("masterspeed",500),a.data("slotamount",1),(a.find(".rev-slidebg")||a.find(">img").first()).data("kenburns","off")})),b.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),b.autoHeight="fullscreen"==b.sliderLayout?"on":b.autoHeight,"fullwidth"==b.sliderLayout&&"off"==b.autoHeight&&a.css({maxHeight:b.gridheight[b.curWinRange]+"px"}),"auto"!=b.sliderLayout&&0==a.closest(".forcefullwidth_wrapper_tp_banner").length&&("fullscreen"!==b.sliderLayout||"on"!=b.fullScreenAutoWidth)){var h=a.parent(),i=h.css("marginBottom"),j=h.css("marginTop"),k=a.attr("id")+"_forcefullwidth";i=i===undefined?0:i,j=j===undefined?0:j,h.wrap('<div class="forcefullwidth_wrapper_tp_banner" id="'+k+'" style="position:relative;width:100%;height:auto;margin-top:'+j+";margin-bottom:"+i+'"></div>'),a.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+a.height()+'px"></div>'),a.parent().css({marginTop:"0px",marginBottom:"0px"}),a.parent().css({position:"absolute"})}if(b.shadow!==undefined&&b.shadow>0&&(a.parent().addClass("tp-shadow"+b.shadow),a.parent().append('<div class="tp-shadowcover"></div>'),a.parent().find(".tp-shadowcover").css({backgroundColor:a.parent().css("backgroundColor"),backgroundImage:a.parent().css("backgroundImage")})),setCurWinRange(b),setCurWinRange(b,!0),!a.hasClass("revslider-initialised")){a.addClass("revslider-initialised"),a.addClass("tp-simpleresponsive"),a.attr("id")==undefined&&a.attr("id","revslider-"+Math.round(1e3*Math.random()+5)),checkIDS(b,a),b.firefox13=!1,b.ie=!jQuery.support.opacity,b.ie9=9==document.documentMode,b.origcd=b.delay;var l=jQuery.fn.jquery.split("."),m=parseFloat(l[0]),n=parseFloat(l[1]);parseFloat(l[2]||"0");1==m&&n<7&&a.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+l+" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"),m>1&&(b.ie=!1);var p=new Object;p.addedyt=0,p.addedvim=0,p.addedvid=0,b.scrolleffect.on&&(b.scrolleffect.layers=new Array),a.find(".tp-caption, .rs-background-video-layer").each(function(a){var c=jQuery(this),d=c.data(),e=d.autoplayonlyfirsttime,f=d.autoplay,g=d.videomp4!==undefined||d.videowebm!==undefined||d.videoogv!==undefined,h=c.hasClass("tp-audiolayer"),i=d.videoloop,j=!0,k=!1;d.startclasses=c.attr("class"),d.isparallaxlayer=d.startclasses.indexOf("rs-parallax")>=0,c.hasClass("tp-static-layer")&&_R.handleStaticLayers&&(_R.handleStaticLayers(c,b),b.scrolleffect.on&&("on"===b.scrolleffect.on_parallax_static_layers&&d.isparallaxlayer||"on"===b.scrolleffect.on_static_layers&&!d.isparallaxlayer)&&(k=!0),j=!1);var l=c.data("noposteronmobile")||c.data("noPosterOnMobile")||c.data("posteronmobile")||c.data("posterOnMobile")||c.data("posterOnMObile");c.data("noposteronmobile",l);var m=0;if(c.find("iframe").each(function(){punchgs.TweenLite.set(jQuery(this),{autoAlpha:0}),m++}),m>0&&c.data("iframes",!0),c.hasClass("tp-caption")){var n=c.hasClass("slidelink")?"width:100% !important;height:100% !important;":"",o=c.data(),q="",r=o.type,s="row"===r||"column"===r?"relative":"absolute",t="";"row"===r?(c.addClass("rev_row").removeClass("tp-resizeme"),t="rev_row_wrap"):"column"===r?(q=o.verticalalign===undefined?" vertical-align:bottom;":" vertical-align:"+o.verticalalign+";",t="rev_column",c.addClass("rev_column_inner").removeClass("tp-resizeme"),c.data("width","auto"),punchgs.TweenLite.set(c,{width:"auto"})):"group"===r&&c.removeClass("tp-resizeme");var u="",v="";"row"!==r&&"group"!==r&&"column"!==r?(u="display:"+c.css("display")+";",c.closest(".rev_column").length>0?(c.addClass("rev_layer_in_column"),j=!1):c.closest(".rev_group").length>0&&(c.addClass("rev_layer_in_group"),j=!1)):"column"===r&&(j=!1),o.wrapper_class!==undefined&&(t=t+" "+o.wrapper_class),o.wrapper_id!==undefined&&(v='id="'+o.wrapper_id+'"'),c.wrap("<div "+v+' class="tp-parallax-wrap '+t+'" style="'+q+" "+n+"position:"+s+";"+u+';visibility:hidden"><div class="tp-loop-wrap" style="'+n+"position:"+s+";"+u+';"><div class="tp-mask-wrap" style="'+n+"position:"+s+";"+u+';" ></div></div></div>'),j&&b.scrolleffect.on&&("on"===b.scrolleffect.on_parallax_layers&&d.isparallaxlayer||"on"===b.scrolleffect.on_layers&&!d.isparallaxlayer)&&b.scrolleffect.layers.push(c.parent()),k&&b.scrolleffect.layers.push(c.parent()),"column"===r&&(c.append('<div class="rev_column_bg rev_column_bg_man_sized" style="visibility:hidden"></div>'),c.closest(".tp-parallax-wrap").append('<div class="rev_column_bg rev_column_bg_auto_sized"></div>'));var w=["pendulum","rotate","slideloop","pulse","wave"],x=c.closest(".tp-loop-wrap");jQuery.each(w,function(a,b){var d=c.find(".rs-"+b),e=d.data()||"";""!=e&&(x.data(e),x.addClass("rs-"+b),d.children(0).unwrap(),c.data("loopanimation","on"))}),c.attr("id")===undefined&&c.attr("id","layer-"+Math.round(999999999*Math.random())),checkIDS(b,c),punchgs.TweenLite.set(c,{visibility:"hidden"})}var y=c.data("actions");y!==undefined&&_R.checkActions(c,b,y),checkHoverDependencies(c,b),_R.checkVideoApis&&(p=_R.checkVideoApis(c,b,p)),!_ISM||b.fallbacks.allowHTML5AutoPlayOnAndroid&&g||(1!=e&&"true"!=e||(d.autoplayonlyfirsttime=!1,e=!1),1!=f&&"true"!=f&&"on"!=f&&"1sttime"!=f||(d.autoplay="off",f="off")),h||1!=e&&"true"!=e&&"1sttime"!=f||"loopandnoslidestop"==i||c.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"),h||1!=f&&"true"!=f&&"on"!=f&&"no1sttime"!=f||"loopandnoslidestop"==i||c.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")}),a[0].addEventListener("mouseenter",function(){a.trigger("tp-mouseenter"),b.overcontainer=!0},{passive:!0}),a[0].addEventListener("mouseover",function(){a.trigger("tp-mouseover"),b.overcontainer=!0},{passive:!0}),a[0].addEventListener("mouseleave",function(){a.trigger("tp-mouseleft"),b.overcontainer=!1},{passive:!0}),a.find(".tp-caption video").each(function(a){var b=jQuery(this);b.removeClass("video-js vjs-default-skin"),b.attr("preload",""),b.css({display:"none"})}),"standard"!==b.sliderType&&(b.lazyType="all"),loadImages(a.find(".tp-static-layers"),b,0,!0),waitForCurrentImages(a.find(".tp-static-layers"),b,function(){a.find(".tp-static-layers img").each(function(){var a=jQuery(this),c=a.data("lazyload")!=undefined?a.data("lazyload"):a.attr("src"),d=getLoadObj(b,c);a.attr("src",d.src)})}),b.rowzones=[],b.allli.each(function(a){var c=jQuery(this);b.rowzones[a]=[],c.find(".rev_row_zone").each(function(){b.rowzones[a].push(jQuery(this))}),"all"!=b.lazyType&&("smart"!=b.lazyType||0!=a&&1!=a&&a!=b.slideamount&&a!=b.slideamount-1)||(loadImages(c,b,a),waitForCurrentImages(c,b,function(){}))});var q=getUrlVars("#")[0];if(q.length<9&&q.split("slide").length>1){var r=parseInt(q.split("slide")[1],0);r<1&&(r=1),r>b.slideamount&&(r=b.slideamount),b.startWithSlide=r-1}a.append('<div class="tp-loader '+b.spinner+'"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'),b.loader=a.find(".tp-loader"),0===a.find(".tp-bannertimer").length&&a.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'),a.find(".tp-bannertimer").css({width:"0%"}),b.ul.css({display:"block"}),prepareSlides(a,b),("off"!==b.parallax.type||b.scrolleffect.on)&&_R.checkForParallax&&_R.checkForParallax(a,b),_R.setSize(b),"hero"!==b.sliderType&&_R.createNavigation&&_R.createNavigation(a,b),_R.resizeThumbsTabs&&_R.resizeThumbsTabs&&_R.resizeThumbsTabs(b),contWidthManager(b);var s=b.viewPort;b.inviewport=!1,s!=undefined&&s.enable&&(jQuery.isNumeric(s.visible_area)||-1!==s.visible_area.indexOf("%")&&(s.visible_area=parseInt(s.visible_area)/100),_R.scrollTicker&&_R.scrollTicker(b,a)),"carousel"===b.sliderType&&_R.prepareCarousel&&(punchgs.TweenLite.set(b.ul,{opacity:0}),_R.prepareCarousel(b,new punchgs.TimelineLite,undefined,0),b.onlyPreparedSlide=!0),setTimeout(function(){if(!s.enable||s.enable&&b.inviewport||s.enable&&!b.inviewport&&"wait"==!s.outof)swapSlide(a);else if(b.c.addClass("tp-waitforfirststart"),b.waitForFirstSlide=!0,s.presize){var c=jQuery(b.li[0]);loadImages(c,b,0,!0),waitForCurrentImages(c.find(".tp-layers"),b,function(){_R.animateTheCaptions({slide:c,opt:b,preset:!0})})}_R.manageNavigation&&_R.manageNavigation(b),b.slideamount>1&&(!s.enable||s.enable&&b.inviewport?countDown(a,b):b.waitForCountDown=!0),setTimeout(function(){a.trigger("revolution.slide.onloaded")},100)},b.startDelay),b.startDelay=0,jQuery("body").data("rs-fullScreenMode",!1),window.addEventListener("fullscreenchange",onFullScreenChange,{passive:!0}),window.addEventListener("mozfullscreenchange",onFullScreenChange,{passive:!0}),window.addEventListener("webkitfullscreenchange",onFullScreenChange,{passive:!0});var t="resize.revslider-"+a.attr("id");jQuery(window).on(t,function(){if(a==undefined)return!1;0!=jQuery("body").find(a)&&contWidthManager(b);var c=!1;if("fullscreen"==b.sliderLayout){var d=jQuery(window).height();"mobile"==b.fallbacks.ignoreHeightChanges&&_ISM||"always"==b.fallbacks.ignoreHeightChanges?(b.fallbacks.ignoreHeightChangesSize=b.fallbacks.ignoreHeightChangesSize==undefined?0:b.fallbacks.ignoreHeightChangesSize,c=d!=b.lastwindowheight&&Math.abs(d-b.lastwindowheight)>b.fallbacks.ignoreHeightChangesSize):c=d!=b.lastwindowheight}(a.outerWidth(!0)!=b.width||a.is(":hidden")||c)&&(b.lastwindowheight=jQuery(window).height(),containerResized(a,b))}),hideSliderUnder(a,b),contWidthManager(b),b.fallbacks.disableFocusListener||"true"==b.fallbacks.disableFocusListener||!0===b.fallbacks.disableFocusListener||(a.addClass("rev_redraw_on_blurfocus"),tabBlurringCheck())}},cArray=function(a,b){if(!jQuery.isArray(a)){var c=a;a=new Array,a.push(c)}if(a.length<b)for(var c=a[a.length-1],d=0;d<b-a.length+2;d++)a.push(c);return a},checkHoverDependencies=function(a,b){var c=a.data();("sliderenter"===c.start||c.frames!==undefined&&c.frames[0]!=undefined&&"sliderenter"===c.frames[0].delay)&&(b.layersonhover===undefined&&(b.c.on("tp-mouseenter",function(){b.layersonhover&&jQuery.each(b.layersonhover,function(a,c){var d=c.data("closestli")||c.closest(".tp-revslider-slidesli"),e=c.data("staticli")||c.closest(".tp-static-layers");c.data("closestli")===undefined&&(c.data("closestli",d),c.data("staticli",e)),(d.length>0&&d.hasClass("active-revslide")||d.hasClass("processing-revslide")||e.length>0)&&(c.data("animdirection","in"),_R.playAnimationFrame&&_R.playAnimationFrame({caption:c,opt:b,frame:"frame_0",triggerdirection:"in",triggerframein:"frame_0",triggerframeout:"frame_999"}),c.data("triggerstate","on"))})}),b.c.on("tp-mouseleft",function(){b.layersonhover&&jQuery.each(b.layersonhover,function(a,c){c.data("animdirection","out"),c.data("triggered",!0),c.data("triggerstate","off"),_R.stopVideo&&_R.stopVideo(c,b),_R.playAnimationFrame&&_R.playAnimationFrame({caption:c,opt:b,frame:"frame_999",triggerdirection:"out",triggerframein:"frame_0",triggerframeout:"frame_999"})})}),b.layersonhover=new Array),b.layersonhover.push(a))},contWidthManager=function(a){var b=_R.getHorizontalOffset(a.c,"left");if("auto"==a.sliderLayout||"fullscreen"===a.sliderLayout&&"on"==a.fullScreenAutoWidth)"fullscreen"==a.sliderLayout&&"on"==a.fullScreenAutoWidth?punchgs.TweenLite.set(a.ul,{left:0,width:a.c.width()}):punchgs.TweenLite.set(a.ul,{left:b,width:a.c.width()-_R.getHorizontalOffset(a.c,"both")});else{var c=Math.ceil(a.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left-b);punchgs.TweenLite.set(a.c.parent(),{left:0-c+"px",width:jQuery(window).width()-_R.getHorizontalOffset(a.c,"both")})}a.slayers&&"fullwidth"!=a.sliderLayout&&"fullscreen"!=a.sliderLayout&&punchgs.TweenLite.set(a.slayers,{left:b})},cv=function(a,b){return a===undefined?b:a},hideSliderUnder=function(a,b,c){var d=a.parent();jQuery(window).width()<b.hideSliderAtLimit?(a.trigger("stoptimer"),"none"!=d.css("display")&&d.data("olddisplay",d.css("display")),d.css({display:"none"})):a.is(":hidden")&&c&&(d.data("olddisplay")!=undefined&&"undefined"!=d.data("olddisplay")&&"none"!=d.data("olddisplay")?d.css({display:d.data("olddisplay")}):d.css({display:"block"}),a.trigger("restarttimer"),setTimeout(function(){containerResized(a,b)},150)),_R.hideUnHideNav&&_R.hideUnHideNav(b)},containerResized=function(a,b){if(a.trigger("revolution.slide.beforeredraw"),1==b.infullscreenmode&&(b.minHeight=jQuery(window).height()),setCurWinRange(b),setCurWinRange(b,!0),!_R.resizeThumbsTabs||!0===_R.resizeThumbsTabs(b)){if(hideSliderUnder(a,b,!0),contWidthManager(b),"carousel"==b.sliderType&&_R.prepareCarousel(b,!0),a===undefined)return!1;_R.setSize(b),b.conw=b.c.width(),b.conh=b.infullscreenmode?b.minHeight:b.c.height();var c=a.find(".active-revslide .slotholder"),d=a.find(".processing-revslide .slotholder");removeSlots(a,b,a,2),"standard"===b.sliderType&&(punchgs.TweenLite.set(d.find(".defaultimg"),{opacity:0}),c.find(".defaultimg").css({opacity:1})),"carousel"===b.sliderType&&b.lastconw!=b.conw&&(clearTimeout(b.pcartimer),b.pcartimer=setTimeout(function(){_R.prepareCarousel(b,!0),"carousel"==b.sliderType&&"on"===b.carousel.showLayersAllTime&&jQuery.each(b.li,function(a){_R.animateTheCaptions({slide:jQuery(b.li[a]),opt:b,recall:!0})})},100),b.lastconw=b.conw),_R.manageNavigation&&_R.manageNavigation(b),_R.animateTheCaptions&&a.find(".active-revslide").length>0&&_R.animateTheCaptions({slide:a.find(".active-revslide"),opt:b,recall:!0}),"on"==d.data("kenburns")&&_R.startKenBurn(d,b,d.data("kbtl").progress()),"on"==c.data("kenburns")&&_R.startKenBurn(c,b,c.data("kbtl").progress()),_R.animateTheCaptions&&a.find(".processing-revslide").length>0&&_R.animateTheCaptions({slide:a.find(".processing-revslide"),opt:b,recall:!0}),_R.manageNavigation&&_R.manageNavigation(b)}a.trigger("revolution.slide.afterdraw")},setScale=function(a){a.bw=a.width/a.gridwidth[a.curWinRange],a.bh=a.height/a.gridheight[a.curWinRange],a.bh>a.bw?a.bh=a.bw:a.bw=a.bh,(a.bh>1||a.bw>1)&&(a.bw=1,a.bh=1)},prepareSlides=function(a,b){if(a.find(".tp-caption").each(function(){var a=jQuery(this);a.data("transition")!==undefined&&a.addClass(a.data("transition"))}),b.ul.css({overflow:"hidden",width:"100%",height:"100%",maxHeight:a.parent().css("maxHeight")}),"on"==b.autoHeight&&(b.ul.css({overflow:"hidden",width:"100%",height:"100%",maxHeight:"none"}),a.css({maxHeight:"none"}),a.parent().css({maxHeight:"none"})),b.allli.each(function(a){var c=jQuery(this),d=c.data("originalindex");(b.startWithSlide!=undefined&&d==b.startWithSlide||b.startWithSlide===undefined&&0==a)&&c.addClass("next-revslide"),c.css({width:"100%",height:"100%",overflow:"hidden"})}),"carousel"===b.sliderType){b.ul.css({overflow:"visible"}).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');var c='<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';b.c.parent().prepend(c),b.c.parent().append(c),_R.prepareCarousel(b)}a.parent().css({overflow:"visible"}),b.allli.find(">img").each(function(a){var c=jQuery(this),d=c.closest("li"),e=d.find(".rs-background-video-layer");e.addClass("defaultvid").css({zIndex:30}),c.addClass("defaultimg"),"on"==b.fallbacks.panZoomDisableOnMobile&&_ISM&&(c.data("kenburns","off"),c.data("bgfit","cover"));var f=d.data("mediafilter");f="none"===f||f===undefined?"":f,c.wrap('<div class="slotholder" style="position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;"></div>'),e.appendTo(d.find(".slotholder"));var g=c.data();c.closest(".slotholder").data(g),e.length>0&&g.bgparallax!=undefined&&(e.data("bgparallax",g.bgparallax),e.data("showcoveronpause","on")),"none"!=b.dottedOverlay&&b.dottedOverlay!=undefined&&c.closest(".slotholder").append('<div class="tp-dottedoverlay '+b.dottedOverlay+'"></div>');var h=c.attr("src");g.src=h,g.bgfit=g.bgfit||"cover",g.bgrepeat=g.bgrepeat||"no-repeat",g.bgposition=g.bgposition||"center center";var j=(c.closest(".slotholder"),c.data("bgcolor")),k="";k=j!==undefined&&j.indexOf("gradient")>=0?'"background:'+j+';width:100%;height:100%;"':'"background-color:'+j+";background-repeat:"+g.bgrepeat+";background-image:url("+h+");background-size:"+g.bgfit+";background-position:"+g.bgposition+';width:100%;height:100%;"';var l=jQuery('<div class="tp-bgimg defaultimg '+f+'" data-bgcolor="'+j+'" style='+k+"></div>");c.parent().append(l),c.data("mediafilter",f);var m=document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - "+c.get(0).outerHTML);c.replaceWith(m),l.data(g),l.attr("src",h),"standard"!==b.sliderType&&"undefined"!==b.sliderType||l.css({opacity:0})}),b.scrolleffect.on&&"on"===b.scrolleffect.on_slidebg&&(b.allslotholder=new Array,b.allli.find(".slotholder").each(function(){jQuery(this).wrap('<div style="display:block;position:absolute;top:0px;left:0px;width:100%;height:100%" class="slotholder_fadeoutwrap"></div>')}),b.allslotholder=b.c.find(".slotholder_fadeoutwrap"))},removeSlots=function(a,b,c,d){b.removePrepare=b.removePrepare+d,c.find(".slot, .slot-circle-wrapper").each(function(){jQuery(this).remove()}),b.transition=0,b.removePrepare=0},cutParams=function(a){var b=a;return a!=undefined&&a.length>0&&(b=a.split("?")[0]),b},relativeRedir=function(a){return location.pathname.replace(/(.*)\/[^\/]*/,"$1/"+a)},abstorel=function(a,b){var c=a.split("/"),d=b.split("/");c.pop();for(var e=0;e<d.length;e++)"."!=d[e]&&(".."==d[e]?c.pop():c.push(d[e]));return c.join("/")},imgLoaded=function(a,b,c){b.syncload--,b.loadqueue&&jQuery.each(b.loadqueue,function(b,d){var e=d.src.replace(/\.\.\/\.\.\//gi,""),f=self.location.href,g=document.location.origin,h=f.substring(0,f.length-1)+"/"+e,i=g+"/"+e,j=abstorel(self.location.href,d.src);f=f.substring(0,f.length-1)+e,g+=e,(cutParams(g)===cutParams(decodeURIComponent(a.src))||cutParams(f)===cutParams(decodeURIComponent(a.src))||cutParams(j)===cutParams(decodeURIComponent(a.src))||cutParams(i)===cutParams(decodeURIComponent(a.src))||cutParams(h)===cutParams(decodeURIComponent(a.src))||cutParams(d.src)===cutParams(decodeURIComponent(a.src))||cutParams(d.src).replace(/^.*\/\/[^\/]+/,"")===cutParams(decodeURIComponent(a.src)).replace(/^.*\/\/[^\/]+/,"")||"file://"===window.location.origin&&cutParams(a.src).match(new RegExp(e)))&&(d.progress=c,d.width=a.width,d.height=a.height)}),progressImageLoad(b)},progressImageLoad=function(a){3!=a.syncload&&a.loadqueue&&jQuery.each(a.loadqueue,function(b,c){if(c.progress.match(/prepared/g)&&a.syncload<=3){if(a.syncload++,"img"==c.type){var d=new Image;d.onload=function(){imgLoaded(this,a,"loaded"),c.error=!1},d.onerror=function(){imgLoaded(this,a,"failed"),c.error=!0},d.src=c.src}else jQuery.get(c.src,function(b){c.innerHTML=(new XMLSerializer).serializeToString(b.documentElement),c.progress="loaded",a.syncload--,progressImageLoad(a)}).fail(function(){c.progress="failed",a.syncload--,progressImageLoad(a)});c.progress="inload"}})},addToLoadQueue=function(a,b,c,d,e){var f=!1;if(b.loadqueue&&jQuery.each(b.loadqueue,function(b,c){c.src===a&&(f=!0)}),!f){var g=new Object;g.src=a,g.starttoload=jQuery.now(),g.type=d||"img",g.prio=c,g.progress="prepared",g.static=e,b.loadqueue.push(g)}},loadImages=function(a,b,c,d){a.find("img,.defaultimg, .tp-svg-layer").each(function(){var a=jQuery(this),e=a.data("lazyload")!==undefined&&"undefined"!==a.data("lazyload")?a.data("lazyload"):a.data("svg_src")!=undefined?a.data("svg_src"):a.attr("src"),f=a.data("svg_src")!=undefined?"svg":"img";a.data("start-to-load",jQuery.now()),addToLoadQueue(e,b,c,f,d)}),progressImageLoad(b)},getLoadObj=function(a,b){var c=new Object;return a.loadqueue&&jQuery.each(a.loadqueue,function(a,d){d.src==b&&(c=d)}),c},waitForCurrentImages=function(a,b,c){var d=!1;a.find("img,.defaultimg, .tp-svg-layer").each(function(){var c=jQuery(this),e=c.data("lazyload")!=undefined?c.data("lazyload"):c.data("svg_src")!=undefined?c.data("svg_src"):c.attr("src"),f=getLoadObj(b,e);if(c.data("loaded")===undefined&&f!==undefined&&f.progress&&f.progress.match(/loaded/g)){if(c.attr("src",f.src),"img"==f.type)if(c.hasClass("defaultimg"))_R.isIE(8)?defimg.attr("src",f.src):-1==f.src.indexOf("images/transparent.png")||c.data("bgcolor")===undefined?c.css({backgroundImage:'url("'+f.src+'")'}):c.data("bgcolor")!==undefined&&c.css({background:c.data("bgcolor")}),a.data("owidth",f.width),a.data("oheight",f.height),a.find(".slotholder").data("owidth",f.width),a.find(".slotholder").data("oheight",f.height);else{var g=c.data("ww"),h=c.data("hh");c.data("owidth",f.width),c.data("oheight",f.height),g=g==undefined||"auto"==g||""==g?f.width:g,h=h==undefined||"auto"==h||""==h?f.height:h,!jQuery.isNumeric(g)&&g.indexOf("%")>0&&(h=g),c.data("ww",g),c.data("hh",h)}else"svg"==f.type&&"loaded"==f.progress&&(c.append('<div class="tp-svg-innercontainer"></div>'),c.find(".tp-svg-innercontainer").append(f.innerHTML));c.data("loaded",!0)}if(f&&f.progress&&f.progress.match(/inprogress|inload|prepared/g)&&(!f.error&&jQuery.now()-c.data("start-to-load")<5e3?d=!0:(f.progress="failed",f.reported_img||(f.reported_img=!0,console.warn(e+"  Could not be loaded !")))),1==b.youtubeapineeded&&(!window.YT||YT.Player==undefined)&&(d=!0,jQuery.now()-b.youtubestarttime>5e3&&1!=b.youtubewarning)){b.youtubewarning=!0;var i="YouTube Api Could not be loaded !";"https:"===location.protocol&&(i+=" Please Check and Renew SSL Certificate !"),console.error(i),b.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+i+"</strong></div>")}if(1==b.vimeoapineeded&&!window.Froogaloop&&(d=!0,jQuery.now()-b.vimeostarttime>5e3&&1!=b.vimeowarning)){b.vimeowarning=!0;var i="Vimeo Froogaloop Api Could not be loaded !";"https:"===location.protocol&&(i+=" Please Check and Renew SSL Certificate !"),console.error(i),b.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+i+"</strong></div>")}}),!_ISM&&b.audioqueue&&b.audioqueue.length>0&&jQuery.each(b.audioqueue,function(a,b){b.status&&"prepared"===b.status&&jQuery.now()-b.start<b.waittime&&(d=!0)}),jQuery.each(b.loadqueue,function(a,b){!0!==b.static||"loaded"==b.progress&&"failed"!==b.progress||("failed"==b.progress?b.reported||(b.reported=!0,console.warn("Static Image "+b.src+"  Could not be loaded in time. Error Exists:"+b.error)):!b.error&&jQuery.now()-b.starttoload<5e3?d=!0:b.reported||(b.reported=!0,console.warn("Static Image "+b.src+"  Could not be loaded within 5s! Error Exists:"+b.error)))}),d?punchgs.TweenLite.delayedCall(.18,waitForCurrentImages,[a,b,c]):punchgs.TweenLite.delayedCall(.18,c)},swapSlide=function(a){var b=a[0].opt;if(clearTimeout(b.waitWithSwapSlide),a.find(".processing-revslide").length>0)return b.waitWithSwapSlide=setTimeout(function(){swapSlide(a)},150),!1;var c=a.find(".active-revslide"),d=a.find(".next-revslide"),e=d.find(".defaultimg");if("carousel"!==b.sliderType||b.carousel.fadein||(punchgs.TweenLite.to(b.ul,1,{opacity:1}),b.carousel.fadein=!0),d.index()===c.index()&&!0!==b.onlyPreparedSlide)return d.removeClass("next-revslide"),!1;!0===b.onlyPreparedSlide&&(b.onlyPreparedSlide=!1,jQuery(b.li[0]).addClass("processing-revslide")),d.removeClass("next-revslide").addClass("processing-revslide"),-1===d.index()&&"carousel"===b.sliderType&&(d=jQuery(b.li[0])),d.data("slide_on_focus_amount",d.data("slide_on_focus_amount")+1||1),"on"==b.stopLoop&&d.index()==b.lastslidetoshow-1&&(a.find(".tp-bannertimer").css({visibility:"hidden"}),a.trigger("revolution.slide.onstop"),b.noloopanymore=1),d.index()===b.slideamount-1&&(b.looptogo=b.looptogo-1,b.looptogo<=0&&(b.stopLoop="on")),b.tonpause=!0,a.trigger("stoptimer"),b.cd=0,"off"===b.spinner&&(b.loader!==undefined?b.loader.css({display:"none"}):b.loadertimer=setTimeout(function(){b.loader!==undefined&&b.loader.css({display:"block"})},50)),loadImages(d,b,1),_R.preLoadAudio&&_R.preLoadAudio(d,b,1),waitForCurrentImages(d,b,function(){d.find(".rs-background-video-layer").each(function(){var a=jQuery(this);a.hasClass("HasListener")||(a.data("bgvideo",1),_R.manageVideoLayer&&_R.manageVideoLayer(a,b)),0==a.find(".rs-fullvideo-cover").length&&a.append('<div class="rs-fullvideo-cover"></div>')}),swapSlideProgress(e,a)})},swapSlideProgress=function(a,b){var c=b.find(".active-revslide"),d=b.find(".processing-revslide"),e=c.find(".slotholder"),f=d.find(".slotholder"),g=b[0].opt;g.tonpause=!1,g.cd=0,clearTimeout(g.loadertimer),g.loader!==undefined&&g.loader.css({display:"none"}),_R.setSize(g),_R.slotSize(a,g),_R.manageNavigation&&_R.manageNavigation(g);var h={};h.nextslide=d,h.currentslide=c,b.trigger("revolution.slide.onbeforeswap",h),g.transition=1,g.videoplaying=!1,d.data("delay")!=undefined?(g.cd=0,g.delay=d.data("delay")):g.delay=g.origcd,"true"==d.data("ssop")||!0===d.data("ssop")?g.ssop=!0:g.ssop=!1,b.trigger("nulltimer");var i=c.index(),j=d.index();g.sdir=j<i?1:0,"arrow"==g.sc_indicator&&(0==i&&j==g.slideamount-1&&(g.sdir=1),i==g.slideamount-1&&0==j&&(g.sdir=0)),g.lsdir=g.lsdir===undefined?g.sdir:g.lsdir,g.dirc=g.lsdir!=g.sdir,g.lsdir=g.sdir,c.index()!=d.index()&&1!=g.firststart&&_R.removeTheCaptions&&_R.removeTheCaptions(c,g),d.hasClass("rs-pause-timer-once")||d.hasClass("rs-pause-timer-always")?g.videoplaying=!0:b.trigger("restarttimer"),d.removeClass("rs-pause-timer-once");var k,m;if(g.currentSlide=c.index(),g.nextSlide=d.index(),"carousel"==g.sliderType)m=new punchgs.TimelineLite,_R.prepareCarousel(g,m),letItFree(b,f,e,d,c,m),g.transition=0,g.firststart=0;else{m=new punchgs.TimelineLite({onComplete:function(){letItFree(b,f,e,d,c,m)}}),m.add(punchgs.TweenLite.set(f.find(".defaultimg"),{opacity:0})),m.pause(),_R.animateTheCaptions&&_R.animateTheCaptions({slide:d,opt:g,preset:!0}),1==g.firststart&&(punchgs.TweenLite.set(c,{autoAlpha:0}),g.firststart=0),punchgs.TweenLite.set(c,{zIndex:18}),punchgs.TweenLite.set(d,{autoAlpha:0,zIndex:20}),"prepared"==d.data("differentissplayed")&&(d.data("differentissplayed","done"),d.data("transition",d.data("savedtransition")),d.data("slotamount",d.data("savedslotamount")),d.data("masterspeed",d.data("savedmasterspeed"))),d.data("fstransition")!=undefined&&"done"!=d.data("differentissplayed")&&(d.data("savedtransition",d.data("transition")),d.data("savedslotamount",d.data("slotamount")),d.data("savedmasterspeed",d.data("masterspeed")),d.data("transition",d.data("fstransition")),d.data("slotamount",d.data("fsslotamount")),d.data("masterspeed",d.data("fsmasterspeed")),d.data("differentissplayed","prepared")),d.data("transition")==undefined&&d.data("transition","random"),k=0;var n=d.data("transition")!==undefined?d.data("transition").split(","):"fade",o=d.data("nexttransid")==undefined?-1:d.data("nexttransid");"on"==d.data("randomtransition")?o=Math.round(Math.random()*n.length):o+=1,o==n.length&&(o=0),d.data("nexttransid",o);var p=n[o];g.ie&&("boxfade"==p&&(p="boxslide"),"slotfade-vertical"==p&&(p="slotzoom-vertical"),"slotfade-horizontal"==p&&(p="slotzoom-horizontal")),_R.isIE(8)&&(p=11),m=_R.animateSlide(k,p,b,d,c,f,e,m),"on"==f.data("kenburns")&&(_R.startKenBurn(f,g),m.add(punchgs.TweenLite.set(f,{autoAlpha:0}))),m.pause()}_R.scrollHandling&&(_R.scrollHandling(g,!0),m.eventCallback("onUpdate",function(){_R.scrollHandling(g,!0)})),"off"!=g.parallax.type&&g.parallax.firstgo==undefined&&_R.scrollHandling&&(g.parallax.firstgo=!0,g.lastscrolltop=-999,_R.scrollHandling(g,!0),setTimeout(function(){g.lastscrolltop=-999,_R.scrollHandling(g,!0)},210),setTimeout(function(){g.lastscrolltop=-999,_R.scrollHandling(g,!0)},420)),_R.animateTheCaptions?"carousel"===g.sliderType&&"on"===g.carousel.showLayersAllTime?(jQuery.each(g.li,function(a){g.carousel.allLayersStarted?_R.animateTheCaptions({slide:jQuery(g.li[a]),opt:g,recall:!0}):g.li[a]===d?_R.animateTheCaptions({slide:jQuery(g.li[a]),maintimeline:m,opt:g,startslideanimat:0}):_R.animateTheCaptions({slide:jQuery(g.li[a]),opt:g,startslideanimat:0})}),g.carousel.allLayersStarted=!0):_R.animateTheCaptions({slide:d,opt:g,maintimeline:m,startslideanimat:0}):m!=undefined&&setTimeout(function(){m.resume()},30),punchgs.TweenLite.to(d,.001,{autoAlpha:1})},letItFree=function(a,b,c,d,e,f){var g=a[0].opt;"carousel"===g.sliderType||(g.removePrepare=0,punchgs.TweenLite.to(b.find(".defaultimg"),.001,{zIndex:20,autoAlpha:1,onComplete:function(){removeSlots(a,g,d,1)}}),d.index()!=e.index()&&punchgs.TweenLite.to(e,.2,{zIndex:18,autoAlpha:0,onComplete:function(){removeSlots(a,g,e,1)}})),a.find(".active-revslide").removeClass("active-revslide"),a.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"),g.act=d.index(),g.c.attr("data-slideactive",a.find(".active-revslide").data("index")),"scroll"!=g.parallax.type&&"scroll+mouse"!=g.parallax.type&&"mouse+scroll"!=g.parallax.type||(g.lastscrolltop=-999,_R.scrollHandling(g)),f.clear(),c.data("kbtl")!=undefined&&(c.data("kbtl").reverse(),c.data("kbtl").timeScale(25)),"on"==b.data("kenburns")&&(b.data("kbtl")!=undefined?(b.data("kbtl").timeScale(1),b.data("kbtl").play()):_R.startKenBurn(b,g)),d.find(".rs-background-video-layer").each(function(a){if(_ISM&&!g.fallbacks.allowHTML5AutoPlayOnAndroid)return!1;var b=jQuery(this);_R.resetVideo(b,g),punchgs.TweenLite.fromTo(b,1,{autoAlpha:0},{autoAlpha:1,ease:punchgs.Power3.easeInOut,delay:.2,onComplete:function(){_R.animcompleted&&_R.animcompleted(b,g)}})}),e.find(".rs-background-video-layer").each(function(a){if(_ISM)return!1;var b=jQuery(this);_R.stopVideo&&(_R.resetVideo(b,g),_R.stopVideo(b,g)),punchgs.TweenLite.to(b,1,{autoAlpha:0,ease:punchgs.Power3.easeInOut,delay:.2})});var h={};h.slideIndex=d.index()+1,h.slideLIIndex=d.index(),h.slide=d,h.currentslide=d,h.prevslide=e,g.last_shown_slide=e.index(),a.trigger("revolution.slide.onchange",h),a.trigger("revolution.slide.onafterswap",h),g.startWithSlide!==undefined&&"done"!==g.startWithSlide&&(_R.callingNewSlide(g.c,g.startWithSlide),g.startWithSlide="done"),g.duringslidechange=!1;var i=e.data("slide_on_focus_amount"),j=e.data("hideafterloop");0!=j&&j<=i&&g.c.revremoveslide(e.index());var k=-1===g.nextSlide||g.nextSlide===undefined?0:g.nextSlide;g.rowzones!=undefined&&(k=k>g.rowzones.length?g.rowzones.length:k),g.rowzones!=undefined&&g.rowzones.length>0&&g.rowzones[k]!=undefined&&k>=0&&k<=g.rowzones.length&&g.rowzones[k].length>0&&_R.setSize(g)},removeAllListeners=function(a,b){a.children().each(function(){try{jQuery(this).die("click")}catch(a){}try{jQuery(this).die("mouseenter")}catch(a){}try{jQuery(this).die("mouseleave")}catch(a){}try{jQuery(this).unbind("hover")}catch(a){}});try{a.die("click","mouseenter","mouseleave")}catch(a){}clearInterval(b.cdint),a=null},countDown=function(a,b){b.cd=0,b.loop=0,b.stopAfterLoops!=undefined&&b.stopAfterLoops>-1?b.looptogo=b.stopAfterLoops:b.looptogo=9999999,b.stopAtSlide!=undefined&&b.stopAtSlide>-1?b.lastslidetoshow=b.stopAtSlide:b.lastslidetoshow=999,b.stopLoop="off",0==b.looptogo&&(b.stopLoop="on");var c=a.find(".tp-bannertimer");a.on("stoptimer",function(){var a=jQuery(this).find(".tp-bannertimer");a[0].tween.pause(),"on"==b.disableProgressBar&&a.css({visibility:"hidden"}),b.sliderstatus="paused",_R.unToggleState(b.slidertoggledby)}),a.on("starttimer",function(){b.forcepause_viatoggle||(1!=b.conthover&&1!=b.videoplaying&&b.width>b.hideSliderAtLimit&&1!=b.tonpause&&1!=b.overnav&&1!=b.ssop&&(1===b.noloopanymore||b.viewPort.enable&&!b.inviewport||(c.css({visibility:"visible"}),c[0].tween.resume(),b.sliderstatus="playing")),"on"==b.disableProgressBar&&c.css({visibility:"hidden"}),_R.toggleState(b.slidertoggledby))}),a.on("restarttimer",function(){if(!b.forcepause_viatoggle){var a=jQuery(this).find(".tp-bannertimer");if(b.mouseoncontainer&&"on"==b.navigation.onHoverStop&&!_ISM)return!1;1===b.noloopanymore||b.viewPort.enable&&!b.inviewport||1==b.ssop||(a.css({visibility:"visible"}),a[0].tween.kill(),a[0].tween=punchgs.TweenLite.fromTo(a,b.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:d,delay:1}),b.sliderstatus="playing"),"on"==b.disableProgressBar&&a.css({visibility:"hidden"}),_R.toggleState(b.slidertoggledby)}}),a.on("nulltimer",function(){c[0].tween.kill(),c[0].tween=punchgs.TweenLite.fromTo(c,b.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:d,delay:1}),c[0].tween.pause(0),"on"==b.disableProgressBar&&c.css({visibility:"hidden"}),b.sliderstatus="paused"});var d=function(){0==jQuery("body").find(a).length&&(removeAllListeners(a,b),clearInterval(b.cdint)),a.trigger("revolution.slide.slideatend"),1==a.data("conthover-changed")&&(b.conthover=a.data("conthover"),a.data("conthover-changed",0)),_R.callingNewSlide(a,1)};c[0].tween=punchgs.TweenLite.fromTo(c,b.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:d,delay:1}),b.slideamount>1&&(0!=b.stopAfterLoops||1!=b.stopAtSlide)?a.trigger("starttimer"):(b.noloopanymore=1,a.trigger("nulltimer")),a.on("tp-mouseenter",function(){b.mouseoncontainer=!0,"on"!=b.navigation.onHoverStop||_ISM||(a.trigger("stoptimer"),a.trigger("revolution.slide.onpause"))}),a.on("tp-mouseleft",function(){b.mouseoncontainer=!1,1!=a.data("conthover")&&"on"==b.navigation.onHoverStop&&(1==b.viewPort.enable&&b.inviewport||0==b.viewPort.enable)&&(a.trigger("revolution.slide.onresume"),a.trigger("starttimer"))})},vis=function(){var a,b,c={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(a in c)if(a in document){b=c[a];break}return function(c){return c&&document.addEventListener(b,c,{pasive:!0}),!document[a]}}(),restartOnFocus=function(){jQuery(".rev_redraw_on_blurfocus").each(function(){var a=jQuery(this)[0].opt;if(a==undefined||a.c==undefined||0===a.c.length)return!1;1!=a.windowfocused&&(a.windowfocused=!0,punchgs.TweenLite.delayedCall(.3,function(){"on"==a.fallbacks.nextSlideOnWindowFocus&&a.c.revnext(),a.c.revredraw(),"playing"==a.lastsliderstatus&&a.c.revresume()}))})},lastStatBlur=function(){jQuery(".rev_redraw_on_blurfocus").each(function(){var a=jQuery(this)[0].opt;a.windowfocused=!1,a.lastsliderstatus=a.sliderstatus,a.c.revpause();var b=a.c.find(".active-revslide .slotholder"),c=a.c.find(".processing-revslide .slotholder");"on"==c.data("kenburns")&&_R.stopKenBurn(c,a),"on"==b.data("kenburns")&&_R.stopKenBurn(b,a)})},tabBlurringCheck=function(){var a=document.documentMode===undefined,b=window.chrome;1!==jQuery("body").data("revslider_focus_blur_listener")&&(jQuery("body").data("revslider_focus_blur_listener",1),a&&!b?jQuery(window).on("focusin",function(){restartOnFocus()}).on("focusout",function(){lastStatBlur()}):window.addEventListener?(window.addEventListener("focus",function(a){restartOnFocus()},{capture:!1,passive:!0}),window.addEventListener("blur",function(a){lastStatBlur()},{capture:!1,passive:!0})):(window.attachEvent("focus",function(a){restartOnFocus()}),window.attachEvent("blur",function(a){lastStatBlur()})))},getUrlVars=function(a){for(var c,b=[],d=window.location.href.slice(window.location.href.indexOf(a)+1).split("_"),e=0;e<d.length;e++)d[e]=d[e].replace("%3D","="),c=d[e].split("="),b.push(c[0]),b[c[0]]=c[1];return b}}(jQuery);;
/**
* @preserve Sticky Anything 2.0.1 | @senff | GPL2 Licensed
*/

console.error('PLEASE NOTE: this is just a notification that the Sticky Menu (or Anything!) plugin is now working in Debug Mode.');
console.error('Even though this mode will not impact any functionality, do NOT use this mode in production environments!');

(function ($) {

  $.fn.stickThis = function(options) {

    var settings = $.extend({
      // Default
      top: 0,
      minscreenwidth: 0, 
      maxscreenwidth: 99999, 
      zindex: 1, 
      legacymode: false,
      dynamicmode: false,
      debugmode: false,
      pushup: '',
      adminbar: false
      }, options );

    var numElements = $(this).length;
    var numPushElements = $(settings.pushup).length;

    if (numPushElements < 1) {
      // There are no elements on the page with the called selector for the Push-up Element.
      if((settings.debugmode == true) && (settings.pushup)) {
        console.error('STICKY ANYTHING DEBUG: There are no elements with the selector/class/ID you selected for the Push-up element ("'+settings.pushup+'").');
      }
      // Resetting it to NOTHING.
      settings.pushup = '';
    } else if (numPushElements > 1) {
      // You can't use more than one element to push up the sticky element.
      // Make sure that you use a selector that applies to only ONE SINGLE element on the page.
      // Want to find out quickly where all the elements are that you targeted? Uncomment the next line to debug.
      // $(settings.pushup).css('border','solid 3px #ff0000');
      if(settings.debugmode == true) {
        console.error('STICKY ANYTHING DEBUG: There are '+numPushElements+' elements on the page with the selector/class/ID you selected for the push-up element ("'+settings.pushup+'"). You can select only ONE element to push the sticky element up.');
      }  
      // Resetting it to NOTHING.
      settings.pushup = '';
    } 

    if (numElements < 1) {
      // There are no elements on the page with the called selector.
      if(settings.debugmode == true) {
        console.error('STICKY ANYTHING DEBUG: There are no elements with the selector/class/ID you selected for the sticky element ("'+this.selector+'").');
      }
    } else if (numElements > 1) {
      // This is not going to work either. You can't make more than one element sticky. They will only get in eachother's way.
      // Make sure that you use a selector that applies to only ONE SINGLE element on the page.
      // Want to find out quickly where all the elements are that you targeted? Uncomment the next line to debug.
      // $(this).css('border','solid 3px #00ff00');
      if(settings.debugmode == true) {
        console.error('STICKY ANYTHING DEBUG: There There are '+numPushElements+' elements with the selector/class/ID you selected for the sticky element ("'+this.selector+'"). You can only make ONE element sticky.');
      }  
    } else {

      if(settings.legacymode == true) {

        // LEGACY MODE
        $(this).addClass('sticky-element-original');
        if(settings.dynamicmode != true) {
          // Create a clone of the menu, right next to original (in the DOM) on initial page load
          createClone(settings.top,settings.zindex,settings.adminbar);
        }
        checkElement = setInterval(function(){stickItLegacy(settings.top,settings.minscreenwidth,settings.maxscreenwidth,settings.zindex,settings.pushup,settings.dynamicmode,settings.adminbar)},10);

      } else {

        // MODERN MODE
        $(this).addClass('sticky-element-original');
        orgAssignedStyles = cssStyles($(this)); // All original element styles, assigned by CSS.
        orgInlineStyles = $('.sticky-element-original').attr('style');
        if (orgInlineStyles == null) {
            orgInlineStyles = '';
        }
        createPlaceholder();

        checkElement = setInterval(function(){stickIt(settings.top,settings.minscreenwidth,settings.maxscreenwidth,settings.zindex,settings.pushup,settings.adminbar,orgAssignedStyles,orgInlineStyles)},10);
      }
    }

    return this;
  };


  // The new StickIt function
  function stickIt(stickyTop,minwidth,maxwidth,stickyZindex,pushup,adminbar,originalAssignedStyles,originalInlineStyles) {

    // We need to check the position of the ACTIVE element.
    // This is the original one when it's not sticky, but when it's sticky, it's the placeholder.
    $listenerElement = $('.sticky-element-active');

    var orgElementPos = $listenerElement.offset();
    orgElementTop = orgElementPos.top;

    if(pushup) {
      var pushElementPos = $(pushup).offset();
      pushElementTop = pushElementPos.top;    
    } 

    // Calculating actual viewport width
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
      a = 'client';
      e = document.documentElement || document.body;
    }
    viewport = e[ a+'Width' ];

    if ((adminbar) && $('body').hasClass('admin-bar') && (viewport > 600)) {
      // below 600, the adminbar is not fixed
      adminBarHeight = $('#wpadminbar').height();
    } else {
      adminBarHeight = 0;
    }

    if (($(window).scrollTop() >= (orgElementTop - stickyTop - adminBarHeight)) && (viewport >= minwidth) && (viewport <= maxwidth)) {

      // We've scrolled PAST the original position; this is where we need to make the element sticky.

      // Placeholder element should always have same left position as original element (see comment below).     
      // The sticky element will NOT have a TOP or the LEFT margin. This is because the left/top reference point of the original
      // element does not consider the margin. So, we're checking the left/top point of the actual original element and then 
      // use that position for the sticky element.

      // LEFT POSITION
          coordsOrgElement = $listenerElement.offset();
          leftOrgElement = coordsOrgElement.left;  // This is the position REGARDLESS of the margin.

      // WIDTH/HEIGHT
      // The placeholder needs to have the width and height of the original element, WITHOUT the margins but WITH the padding and borders
      // Whatever margins the original has, the placeholder needs to have that too.

          widthPlaceholder = $listenerElement[0].getBoundingClientRect().width;
          if (!widthPlaceholder) {
            widthPlaceholder = $listenerElement.css('width');  // FALLBACK for subpixels
          }
          heightPlaceholder = $listenerElement[0].getBoundingClientRect().height;
          if (!heightPlaceholder) {
            heightPlaceholder = $listenerElement.css('height');  // FALLBACK for subpixels
          }

      // WIDTH/HEIGHT OF STICKY ELEMENT
      // The original element though, needs to have the inner width and height of the original (non-sticky) element
      // No padding, no borders, because that will be applied later anyway, regardless of box-sizing
          widthSticky = $('.sticky-element-original').css('width');
          if(widthSticky == '0px') {
            widthSticky = ($('.sticky-element-original')[0].getBoundingClientRect().width);
          }
          heightSticky = $('.sticky-element-original').height();

      // PADDING
      // If padding is percentages, convert to pixels when it becomes sticky
      // Just a leftover from the old method. We will not use padding for the placeholder
          paddingOrgElement = [$('.sticky-element-original').css('padding-top'), $('.sticky-element-original').css('padding-right'), $('.sticky-element-original').css('padding-bottom'),$('.sticky-element-original').css('padding-left')];
          paddingSticky = paddingOrgElement[0] + ' ' + paddingOrgElement[1] + ' ' + paddingOrgElement[2] + ' ' + paddingOrgElement[3];

      // MARGIN
          marginOrgElement = [$listenerElement.css('margin-top'), $listenerElement.css('margin-right'), $listenerElement.css('margin-bottom'),$listenerElement.css('margin-left')];
          marginPlaceholder = marginOrgElement[0] + ' ' + marginOrgElement[1] + ' ' + marginOrgElement[2] + ' ' + marginOrgElement[3];

      // OTHER ELEMENTS
      // if original has float, display, etc., we need to assign that to the placeholder
      // Though not as important as the width/height/margin/padding

          assignedStyles = '';
          for (var importantStyle in originalAssignedStyles) {
            if (originalAssignedStyles[importantStyle] == 'inline') {
              assignedStyles += importantStyle+':inline-block; '; 
            } else {
              assignedStyles += importantStyle+':'+originalAssignedStyles[importantStyle]+'; '; 
            }
          }

      // Fixes bug where height of original element returns zero
      // Is this still needed for the post-2.0 mode??
      elementHeight = 0;
      if (heightPlaceholder < 1) {
        elementHeight = $('.sticky-element-cloned').outerHeight();
      } else {
        elementHeight = $('.sticky-element-original').outerHeight();
      }

      // If scrolled position = pushup-element (top coordinate) - space between top and element - element height - admin bar
      // In other words, if the pushup element hits the bottom of the sticky element
      if (pushup && ($(window).scrollTop() > (pushElementTop-stickyTop-elementHeight-adminBarHeight))) {
        stickyTopMargin = (pushElementTop-stickyTop-elementHeight-$(window).scrollTop());
      } else {
        stickyTopMargin = adminBarHeight;
      }
      
      assignedStyles += 'width:'+widthPlaceholder+'px; height:'+heightPlaceholder+'px; margin:'+marginPlaceholder+';';

      $('.sticky-element-original').removeClass('sticky-element-active').css('position','fixed').css('left',leftOrgElement+'px').css('top',stickyTop+'px').css('width',widthSticky).css('margin-left',0).css('padding',paddingSticky).css('margin-top',stickyTopMargin).css('z-index',stickyZindex);
      if(!$('.sticky-element-placeholder').hasClass('sticky-element-active')) {
        $('.sticky-element-placeholder').addClass('sticky-element-active').attr('style',assignedStyles);
      }

    } else {
      // not scrolled past the menu; only show the original element.
      $('.sticky-element-original').addClass('sticky-element-active').attr('style',originalInlineStyles);
      if($('.sticky-element-placeholder').hasClass('sticky-element-active')) {
        $('.sticky-element-placeholder').removeClass('sticky-element-active').removeAttr('style').css('width','0').css('height','0').css('margin','0').css('padding','0');
      }
    }

  }

  function createPlaceholder() {
    $('.sticky-element-original').addClass('sticky-element-active').before('<div class="sticky-element-placeholder" style="width:0; height:0; margin:0; padding:0; visibility:hidden;"></div>');
  }

  // Helper function: get the important CSS rules from an element
  function cssStyles(el) {
    o = {};
    
    o['display'] = el.css('display');
    o['float'] = el.css('float');
    o['flex'] = el.css('flex');
    o['box-sizing'] = el.css('box-sizing');
    o['clear'] = el.css('clear');
    o['overflow'] = el.css('overflow');
    o['transform'] = el.css('transform');

    // For some reason, this original loop doesn't work with some themes/plugins.
    // importantStyles = ['display','float','flex','box-sizing','clear','overflow','transform'];
    // for(var styleProp in importantStyles) {
    //   o[importantStyles[styleProp]] = el.css(importantStyles[styleProp]);
    // }
    
    return o;
  }

  // The old StickIt function
  function stickItLegacy(stickyTop,minwidth,maxwidth,stickyZindex,pushup,dynamic,adminbar) {

    var orgElementPos = $('.sticky-element-original').offset();
    orgElementTop = orgElementPos.top;               

    if(pushup) {
      var pushElementPos = $(pushup).offset();
      pushElementTop = pushElementPos.top;    
    } 

    // Calculating actual viewport width
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
      a = 'client';
      e = document.documentElement || document.body;
    }
    viewport = e[ a+'Width' ];

    if ((adminbar) && $('body').hasClass('admin-bar') && (viewport > 600)) {
      adminBarHeight = $('#wpadminbar').height();
    } else {
      adminBarHeight = 0;
    }

    if (($(window).scrollTop() >= (orgElementTop - stickyTop - adminBarHeight)) && (viewport >= minwidth) && (viewport <= maxwidth)) {

      // scrolled past the original position; now only show the cloned, sticky element.

      // Cloned element should always have same left position and width as original element.     
      orgElement = $('.sticky-element-original');
      coordsOrgElement = orgElement.offset();
      leftOrgElement = coordsOrgElement.left;  
      widthOrgElement = orgElement[0].getBoundingClientRect().width;
      if (!widthOrgElement) {
        widthOrgElement = orgElement.css('width');  // FALLBACK for subpixels
      }
      heightOrgElement = orgElement.outerHeight();

      // If padding is percentages, convert to pixels
      paddingOrgElement = [orgElement.css('padding-top'), orgElement.css('padding-right'), orgElement.css('padding-bottom'), orgElement.css('padding-left')];
      paddingCloned = paddingOrgElement[0] + ' ' + paddingOrgElement[1] + ' ' + paddingOrgElement[2] + ' ' + paddingOrgElement[3];

      if( (dynamic == true) && ($('.sticky-element-cloned').length < 1)     ) {
        // DYNAMIC MODE: if there is no clone present, create it right now
        createClone(stickyTop,stickyZindex);
      }

      // Fixes bug where height of original element returns zero
      elementHeight = 0;
      if (heightOrgElement < 1) {
        elementHeight = $('.sticky-element-cloned').outerHeight();
      } else {
        elementHeight = $('.sticky-element-original').outerHeight();
      }

      // If scrolled position = pushup-element (top coordinate) - space between top and element - element height - admin bar
      // In other words, if the pushup element hits the bottom of the sticky element
      if (pushup && ($(window).scrollTop() > (pushElementTop-stickyTop-elementHeight-adminBarHeight))) {
        stickyTopMargin = (pushElementTop-stickyTop-elementHeight-$(window).scrollTop());
      } else {
        stickyTopMargin = adminBarHeight;
      }

      $('.sticky-element-cloned').css('left',leftOrgElement+'px').css('top',stickyTop+'px').css('width',widthOrgElement).css('margin-top',stickyTopMargin).css('padding',paddingCloned).show();
      $('.sticky-element-original').css('visibility','hidden');
    } else {
      // not scrolled past the menu; only show the original menu.
      if(dynamic == true) {
        $('.sticky-element-cloned').remove();
      } else {
        $('.sticky-element-cloned').hide();
      }
      $('.sticky-element-original').css('visibility','visible');
    }
  }

  function createClone(cloneTop,cloneZindex) {
    $('.sticky-element-original').clone().insertAfter($('.sticky-element-original')).addClass('sticky-element-cloned').css('position','fixed').css('top',cloneTop+'px').css('margin-left','0').css('z-index',cloneZindex).removeClass('sticky-element-original').hide();
  }

}(jQuery));
;
/* global _wpUtilSettings */
window.wp = window.wp || {};

(function ($) {
	// Check for the utility settings.
	var settings = typeof _wpUtilSettings === 'undefined' ? {} : _wpUtilSettings;

	/**
	 * wp.template( id )
	 *
	 * Fetch a JavaScript template for an id, and return a templating function for it.
	 *
	 * @param  {string} id   A string that corresponds to a DOM element with an id prefixed with "tmpl-".
	 *                       For example, "attachment" maps to "tmpl-attachment".
	 * @return {function}    A function that lazily-compiles the template requested.
	 */
	wp.template = _.memoize(function ( id ) {
		var compiled,
			/*
			 * Underscore's default ERB-style templates are incompatible with PHP
			 * when asp_tags is enabled, so WordPress uses Mustache-inspired templating syntax.
			 *
			 * @see trac ticket #22344.
			 */
			options = {
				evaluate:    /<#([\s\S]+?)#>/g,
				interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
				escape:      /\{\{([^\}]+?)\}\}(?!\})/g,
				variable:    'data'
			};

		return function ( data ) {
			compiled = compiled || _.template( $( '#tmpl-' + id ).html(),  options );
			return compiled( data );
		};
	});

	// wp.ajax
	// ------
	//
	// Tools for sending ajax requests with JSON responses and built in error handling.
	// Mirrors and wraps jQuery's ajax APIs.
	wp.ajax = {
		settings: settings.ajax || {},

		/**
		 * wp.ajax.post( [action], [data] )
		 *
		 * Sends a POST request to WordPress.
		 *
		 * @param  {(string|object)} action  The slug of the action to fire in WordPress or options passed
		 *                                   to jQuery.ajax.
		 * @param  {object=}         data    Optional. The data to populate $_POST with.
		 * @return {$.promise}     A jQuery promise that represents the request,
		 *                         decorated with an abort() method.
		 */
		post: function( action, data ) {
			return wp.ajax.send({
				data: _.isObject( action ) ? action : _.extend( data || {}, { action: action })
			});
		},

		/**
		 * wp.ajax.send( [action], [options] )
		 *
		 * Sends a POST request to WordPress.
		 *
		 * @param  {(string|object)} action  The slug of the action to fire in WordPress or options passed
		 *                                   to jQuery.ajax.
		 * @param  {object=}         options Optional. The options passed to jQuery.ajax.
		 * @return {$.promise}      A jQuery promise that represents the request,
		 *                          decorated with an abort() method.
		 */
		send: function( action, options ) {
			var promise, deferred;
			if ( _.isObject( action ) ) {
				options = action;
			} else {
				options = options || {};
				options.data = _.extend( options.data || {}, { action: action });
			}

			options = _.defaults( options || {}, {
				type:    'POST',
				url:     wp.ajax.settings.url,
				context: this
			});

			deferred = $.Deferred( function( deferred ) {
				// Transfer success/error callbacks.
				if ( options.success )
					deferred.done( options.success );
				if ( options.error )
					deferred.fail( options.error );

				delete options.success;
				delete options.error;

				// Use with PHP's wp_send_json_success() and wp_send_json_error()
				deferred.jqXHR = $.ajax( options ).done( function( response ) {
					// Treat a response of 1 as successful for backward compatibility with existing handlers.
					if ( response === '1' || response === 1 )
						response = { success: true };

					if ( _.isObject( response ) && ! _.isUndefined( response.success ) )
						deferred[ response.success ? 'resolveWith' : 'rejectWith' ]( this, [response.data] );
					else
						deferred.rejectWith( this, [response] );
				}).fail( function() {
					deferred.rejectWith( this, arguments );
				});
			});

			promise = deferred.promise();
			promise.abort = function() {
				deferred.jqXHR.abort();
				return this;
			};

			return promise;
		}
	};

}(jQuery));
;
/* global jQuery, JSON, _customizePartialRefreshExports, console */

wp.customize.selectiveRefresh = ( function( $, api ) {
	'use strict';
	var self, Partial, Placement;

	self = {
		ready: $.Deferred(),
		editShortcutVisibility: new api.Value(),
		data: {
			partials: {},
			renderQueryVar: '',
			l10n: {
				shiftClickToEdit: ''
			}
		},
		currentRequest: null
	};

	_.extend( self, api.Events );

	/**
	 * A Customizer Partial.
	 *
	 * A partial provides a rendering of one or more settings according to a template.
	 *
	 * @see PHP class WP_Customize_Partial.
	 *
	 * @class
	 * @augments wp.customize.Class
	 * @since 4.5.0
	 *
	 * @param {string} id                              Unique identifier for the control instance.
	 * @param {object} options                         Options hash for the control instance.
	 * @param {object} options.params
	 * @param {string} options.params.type             Type of partial (e.g. nav_menu, widget, etc)
	 * @param {string} options.params.selector         jQuery selector to find the container element in the page.
	 * @param {array}  options.params.settings         The IDs for the settings the partial relates to.
	 * @param {string} options.params.primarySetting   The ID for the primary setting the partial renders.
	 * @param {bool}   options.params.fallbackRefresh  Whether to refresh the entire preview in case of a partial refresh failure.
	 */
	Partial = self.Partial = api.Class.extend({

		id: null,

		/**
		 * Constructor.
		 *
		 * @since 4.5.0
		 *
		 * @param {string} id - Partial ID.
		 * @param {Object} options
		 * @param {Object} options.params
		 */
		initialize: function( id, options ) {
			var partial = this;
			options = options || {};
			partial.id = id;

			partial.params = _.extend(
				{
					selector: null,
					settings: [],
					primarySetting: null,
					containerInclusive: false,
					fallbackRefresh: true // Note this needs to be false in a front-end editing context.
				},
				options.params || {}
			);

			partial.deferred = {};
			partial.deferred.ready = $.Deferred();

			partial.deferred.ready.done( function() {
				partial.ready();
			} );
		},

		/**
		 * Set up the partial.
		 *
		 * @since 4.5.0
		 */
		ready: function() {
			var partial = this;
			_.each( partial.placements(), function( placement ) {
				$( placement.container ).attr( 'title', self.data.l10n.shiftClickToEdit );
				partial.createEditShortcutForPlacement( placement );
			} );
			$( document ).on( 'click', partial.params.selector, function( e ) {
				if ( ! e.shiftKey ) {
					return;
				}
				e.preventDefault();
				_.each( partial.placements(), function( placement ) {
					if ( $( placement.container ).is( e.currentTarget ) ) {
						partial.showControl();
					}
				} );
			} );
		},

		/**
		 * Create and show the edit shortcut for a given partial placement container.
		 *
		 * @since 4.7.0
		 * @access public
		 *
		 * @param {Placement} placement The placement container element.
		 * @returns {void}
		 */
		createEditShortcutForPlacement: function( placement ) {
			var partial = this, $shortcut, $placementContainer, illegalAncestorSelector, illegalContainerSelector;
			if ( ! placement.container ) {
				return;
			}
			$placementContainer = $( placement.container );
			illegalAncestorSelector = 'head';
			illegalContainerSelector = 'area, audio, base, bdi, bdo, br, button, canvas, col, colgroup, command, datalist, embed, head, hr, html, iframe, img, input, keygen, label, link, map, math, menu, meta, noscript, object, optgroup, option, param, progress, rp, rt, ruby, script, select, source, style, svg, table, tbody, textarea, tfoot, thead, title, tr, track, video, wbr';
			if ( ! $placementContainer.length || $placementContainer.is( illegalContainerSelector ) || $placementContainer.closest( illegalAncestorSelector ).length ) {
				return;
			}
			$shortcut = partial.createEditShortcut();
			$shortcut.on( 'click', function( event ) {
				event.preventDefault();
				event.stopPropagation();
				partial.showControl();
			} );
			partial.addEditShortcutToPlacement( placement, $shortcut );
		},

		/**
		 * Add an edit shortcut to the placement container.
		 *
		 * @since 4.7.0
		 * @access public
		 *
		 * @param {Placement} placement The placement for the partial.
		 * @param {jQuery} $editShortcut The shortcut element as a jQuery object.
		 * @returns {void}
		 */
		addEditShortcutToPlacement: function( placement, $editShortcut ) {
			var $placementContainer = $( placement.container );
			$placementContainer.prepend( $editShortcut );
			if ( ! $placementContainer.is( ':visible' ) || 'none' === $placementContainer.css( 'display' ) ) {
				$editShortcut.addClass( 'customize-partial-edit-shortcut-hidden' );
			}
		},

		/**
		 * Return the unique class name for the edit shortcut button for this partial.
		 *
		 * @since 4.7.0
		 * @access public
		 *
		 * @return {string} Partial ID converted into a class name for use in shortcut.
		 */
		getEditShortcutClassName: function() {
			var partial = this, cleanId;
			cleanId = partial.id.replace( /]/g, '' ).replace( /\[/g, '-' );
			return 'customize-partial-edit-shortcut-' + cleanId;
		},

		/**
		 * Return the appropriate translated string for the edit shortcut button.
		 *
		 * @since 4.7.0
		 * @access public
		 *
		 * @return {string} Tooltip for edit shortcut.
		 */
		getEditShortcutTitle: function() {
			var partial = this, l10n = self.data.l10n;
			switch ( partial.getType() ) {
				case 'widget':
					return l10n.clickEditWidget;
				case 'blogname':
					return l10n.clickEditTitle;
				case 'blogdescription':
					return l10n.clickEditTitle;
				case 'nav_menu':
					return l10n.clickEditMenu;
				default:
					return l10n.clickEditMisc;
			}
		},

		/**
		 * Return the type of this partial
		 *
		 * Will use `params.type` if set, but otherwise will try to infer type from settingId.
		 *
		 * @since 4.7.0
		 * @access public
		 *
		 * @return {string} Type of partial derived from type param or the related setting ID.
		 */
		getType: function() {
			var partial = this, settingId;
			settingId = partial.params.primarySetting || _.first( partial.settings() ) || 'unknown';
			if ( partial.params.type ) {
				return partial.params.type;
			}
			if ( settingId.match( /^nav_menu_instance\[/ ) ) {
				return 'nav_menu';
			}
			if ( settingId.match( /^widget_.+\[\d+]$/ ) ) {
				return 'widget';
			}
			return settingId;
		},

		/**
		 * Create an edit shortcut button for this partial.
		 *
		 * @since 4.7.0
		 * @access public
		 *
		 * @return {jQuery} The edit shortcut button element.
		 */
		createEditShortcut: function() {
			var partial = this, shortcutTitle, $buttonContainer, $button, $image;
			shortcutTitle = partial.getEditShortcutTitle();
			$buttonContainer = $( '<span>', {
				'class': 'customize-partial-edit-shortcut ' + partial.getEditShortcutClassName()
			} );
			$button = $( '<button>', {
				'aria-label': shortcutTitle,
				'title': shortcutTitle,
				'class': 'customize-partial-edit-shortcut-button'
			} );
			$image = $( '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61 1.11 1.11 5.54-5.65zm-2.97 8.23l5.58-5.6-1.07-1.08-5.59 5.6z"/></svg>' );
			$button.append( $image );
			$buttonContainer.append( $button );
			return $buttonContainer;
		},

		/**
		 * Find all placements for this partial int he document.
		 *
		 * @since 4.5.0
		 *
		 * @return {Array.<Placement>}
		 */
		placements: function() {
			var partial = this, selector;

			selector = partial.params.selector || '';
			if ( selector ) {
				selector += ', ';
			}
			selector += '[data-customize-partial-id="' + partial.id + '"]'; // @todo Consider injecting customize-partial-id-${id} classnames instead.

			return $( selector ).map( function() {
				var container = $( this ), context;

				context = container.data( 'customize-partial-placement-context' );
				if ( _.isString( context ) && '{' === context.substr( 0, 1 ) ) {
					throw new Error( 'context JSON parse error' );
				}

				return new Placement( {
					partial: partial,
					container: container,
					context: context
				} );
			} ).get();
		},

		/**
		 * Get list of setting IDs related to this partial.
		 *
		 * @since 4.5.0
		 *
		 * @return {String[]}
		 */
		settings: function() {
			var partial = this;
			if ( partial.params.settings && 0 !== partial.params.settings.length ) {
				return partial.params.settings;
			} else if ( partial.params.primarySetting ) {
				return [ partial.params.primarySetting ];
			} else {
				return [ partial.id ];
			}
		},

		/**
		 * Return whether the setting is related to the partial.
		 *
		 * @since 4.5.0
		 *
		 * @param {wp.customize.Value|string} setting  ID or object for setting.
		 * @return {boolean} Whether the setting is related to the partial.
		 */
		isRelatedSetting: function( setting /*... newValue, oldValue */ ) {
			var partial = this;
			if ( _.isString( setting ) ) {
				setting = api( setting );
			}
			if ( ! setting ) {
				return false;
			}
			return -1 !== _.indexOf( partial.settings(), setting.id );
		},

		/**
		 * Show the control to modify this partial's setting(s).
		 *
		 * This may be overridden for inline editing.
		 *
		 * @since 4.5.0
		 */
		showControl: function() {
			var partial = this, settingId = partial.params.primarySetting;
			if ( ! settingId ) {
				settingId = _.first( partial.settings() );
			}
			if ( partial.getType() === 'nav_menu' ) {
				if ( partial.params.navMenuArgs.theme_location ) {
					settingId = 'nav_menu_locations[' + partial.params.navMenuArgs.theme_location + ']';
				} else if ( partial.params.navMenuArgs.menu )   {
					settingId = 'nav_menu[' + String( partial.params.navMenuArgs.menu ) + ']';
				}
			}
			api.preview.send( 'focus-control-for-setting', settingId );
		},

		/**
		 * Prepare container for selective refresh.
		 *
		 * @since 4.5.0
		 *
		 * @param {Placement} placement
		 */
		preparePlacement: function( placement ) {
			$( placement.container ).addClass( 'customize-partial-refreshing' );
		},

		/**
		 * Reference to the pending promise returned from self.requestPartial().
		 *
		 * @since 4.5.0
		 * @private
		 */
		_pendingRefreshPromise: null,

		/**
		 * Request the new partial and render it into the placements.
		 *
		 * @since 4.5.0
		 *
		 * @this {wp.customize.selectiveRefresh.Partial}
		 * @return {jQuery.Promise}
		 */
		refresh: function() {
			var partial = this, refreshPromise;

			refreshPromise = self.requestPartial( partial );

			if ( ! partial._pendingRefreshPromise ) {
				_.each( partial.placements(), function( placement ) {
					partial.preparePlacement( placement );
				} );

				refreshPromise.done( function( placements ) {
					_.each( placements, function( placement ) {
						partial.renderContent( placement );
					} );
				} );

				refreshPromise.fail( function( data, placements ) {
					partial.fallback( data, placements );
				} );

				// Allow new request when this one finishes.
				partial._pendingRefreshPromise = refreshPromise;
				refreshPromise.always( function() {
					partial._pendingRefreshPromise = null;
				} );
			}

			return refreshPromise;
		},

		/**
		 * Apply the addedContent in the placement to the document.
		 *
		 * Note the placement object will have its container and removedNodes
		 * properties updated.
		 *
		 * @since 4.5.0
		 *
		 * @param {Placement}             placement
		 * @param {Element|jQuery}        [placement.container]  - This param will be empty if there was no element matching the selector.
		 * @param {string|object|boolean} placement.addedContent - Rendered HTML content, a data object for JS templates to render, or false if no render.
		 * @param {object}                [placement.context]    - Optional context information about the container.
		 * @returns {boolean} Whether the rendering was successful and the fallback was not invoked.
		 */
		renderContent: function( placement ) {
			var partial = this, content, newContainerElement;
			if ( ! placement.container ) {
				partial.fallback( new Error( 'no_container' ), [ placement ] );
				return false;
			}
			placement.container = $( placement.container );
			if ( false === placement.addedContent ) {
				partial.fallback( new Error( 'missing_render' ), [ placement ] );
				return false;
			}

			// Currently a subclass needs to override renderContent to handle partials returning data object.
			if ( ! _.isString( placement.addedContent ) ) {
				partial.fallback( new Error( 'non_string_content' ), [ placement ] );
				return false;
			}

			/* jshint ignore:start */
			self.orginalDocumentWrite = document.write;
			document.write = function() {
				throw new Error( self.data.l10n.badDocumentWrite );
			};
			/* jshint ignore:end */
			try {
				content = placement.addedContent;
				if ( wp.emoji && wp.emoji.parse && ! $.contains( document.head, placement.container[0] ) ) {
					content = wp.emoji.parse( content );
				}

				if ( partial.params.containerInclusive ) {

					// Note that content may be an empty string, and in this case jQuery will just remove the oldContainer
					newContainerElement = $( content );

					// Merge the new context on top of the old context.
					placement.context = _.extend(
						placement.context,
						newContainerElement.data( 'customize-partial-placement-context' ) || {}
					);
					newContainerElement.data( 'customize-partial-placement-context', placement.context );

					placement.removedNodes = placement.container;
					placement.container = newContainerElement;
					placement.removedNodes.replaceWith( placement.container );
					placement.container.attr( 'title', self.data.l10n.shiftClickToEdit );
				} else {
					placement.removedNodes = document.createDocumentFragment();
					while ( placement.container[0].firstChild ) {
						placement.removedNodes.appendChild( placement.container[0].firstChild );
					}

					placement.container.html( content );
				}

				placement.container.removeClass( 'customize-render-content-error' );
			} catch ( error ) {
				if ( 'undefined' !== typeof console && console.error ) {
					console.error( partial.id, error );
				}
			}
			/* jshint ignore:start */
			document.write = self.orginalDocumentWrite;
			self.orginalDocumentWrite = null;
			/* jshint ignore:end */

			partial.createEditShortcutForPlacement( placement );
			placement.container.removeClass( 'customize-partial-refreshing' );

			// Prevent placement container from being being re-triggered as being rendered among nested partials.
			placement.container.data( 'customize-partial-content-rendered', true );

			/**
			 * Announce when a partial's placement has been rendered so that dynamic elements can be re-built.
			 */
			self.trigger( 'partial-content-rendered', placement );
			return true;
		},

		/**
		 * Handle fail to render partial.
		 *
		 * The first argument is either the failing jqXHR or an Error object, and the second argument is the array of containers.
		 *
		 * @since 4.5.0
		 */
		fallback: function() {
			var partial = this;
			if ( partial.params.fallbackRefresh ) {
				self.requestFullRefresh();
			}
		}
	} );

	/**
	 * A Placement for a Partial.
	 *
	 * A partial placement is the actual physical representation of a partial for a given context.
	 * It also may have information in relation to how a placement may have just changed.
	 * The placement is conceptually similar to a DOM Range or MutationRecord.
	 *
	 * @class
	 * @augments wp.customize.Class
	 * @since 4.5.0
	 */
	self.Placement = Placement = api.Class.extend({

		/**
		 * The partial with which the container is associated.
		 *
		 * @param {wp.customize.selectiveRefresh.Partial}
		 */
		partial: null,

		/**
		 * DOM element which contains the placement's contents.
		 *
		 * This will be null if the startNode and endNode do not point to the same
		 * DOM element, such as in the case of a sidebar partial.
		 * This container element itself will be replaced for partials that
		 * have containerInclusive param defined as true.
		 */
		container: null,

		/**
		 * DOM node for the initial boundary of the placement.
		 *
		 * This will normally be the same as endNode since most placements appear as elements.
		 * This is primarily useful for widget sidebars which do not have intrinsic containers, but
		 * for which an HTML comment is output before to mark the starting position.
		 */
		startNode: null,

		/**
		 * DOM node for the terminal boundary of the placement.
		 *
		 * This will normally be the same as startNode since most placements appear as elements.
		 * This is primarily useful for widget sidebars which do not have intrinsic containers, but
		 * for which an HTML comment is output before to mark the ending position.
		 */
		endNode: null,

		/**
		 * Context data.
		 *
		 * This provides information about the placement which is included in the request
		 * in order to render the partial properly.
		 *
		 * @param {object}
		 */
		context: null,

		/**
		 * The content for the partial when refreshed.
		 *
		 * @param {string}
		 */
		addedContent: null,

		/**
		 * DOM node(s) removed when the partial is refreshed.
		 *
		 * If the partial is containerInclusive, then the removedNodes will be
		 * the single Element that was the partial's former placement. If the
		 * partial is not containerInclusive, then the removedNodes will be a
		 * documentFragment containing the nodes removed.
		 *
		 * @param {Element|DocumentFragment}
		 */
		removedNodes: null,

		/**
		 * Constructor.
		 *
		 * @since 4.5.0
		 *
		 * @param {object}                   args
		 * @param {Partial}                  args.partial
		 * @param {jQuery|Element}           [args.container]
		 * @param {Node}                     [args.startNode]
		 * @param {Node}                     [args.endNode]
		 * @param {object}                   [args.context]
		 * @param {string}                   [args.addedContent]
		 * @param {jQuery|DocumentFragment}  [args.removedNodes]
		 */
		initialize: function( args ) {
			var placement = this;

			args = _.extend( {}, args || {} );
			if ( ! args.partial || ! args.partial.extended( Partial ) ) {
				throw new Error( 'Missing partial' );
			}
			args.context = args.context || {};
			if ( args.container ) {
				args.container = $( args.container );
			}

			_.extend( placement, args );
		}

	});

	/**
	 * Mapping of type names to Partial constructor subclasses.
	 *
	 * @since 4.5.0
	 *
	 * @type {Object.<string, wp.customize.selectiveRefresh.Partial>}
	 */
	self.partialConstructor = {};

	self.partial = new api.Values({ defaultConstructor: Partial });

	/**
	 * Get the POST vars for a Customizer preview request.
	 *
	 * @since 4.5.0
	 * @see wp.customize.previewer.query()
	 *
	 * @return {object}
	 */
	self.getCustomizeQuery = function() {
		var dirtyCustomized = {};
		api.each( function( value, key ) {
			if ( value._dirty ) {
				dirtyCustomized[ key ] = value();
			}
		} );

		return {
			wp_customize: 'on',
			nonce: api.settings.nonce.preview,
			customize_theme: api.settings.theme.stylesheet,
			customized: JSON.stringify( dirtyCustomized ),
			customize_changeset_uuid: api.settings.changeset.uuid
		};
	};

	/**
	 * Currently-requested partials and their associated deferreds.
	 *
	 * @since 4.5.0
	 * @type {Object<string, { deferred: jQuery.Promise, partial: wp.customize.selectiveRefresh.Partial }>}
	 */
	self._pendingPartialRequests = {};

	/**
	 * Timeout ID for the current requesr, or null if no request is current.
	 *
	 * @since 4.5.0
	 * @type {number|null}
	 * @private
	 */
	self._debouncedTimeoutId = null;

	/**
	 * Current jqXHR for the request to the partials.
	 *
	 * @since 4.5.0
	 * @type {jQuery.jqXHR|null}
	 * @private
	 */
	self._currentRequest = null;

	/**
	 * Request full page refresh.
	 *
	 * When selective refresh is embedded in the context of front-end editing, this request
	 * must fail or else changes will be lost, unless transactions are implemented.
	 *
	 * @since 4.5.0
	 */
	self.requestFullRefresh = function() {
		api.preview.send( 'refresh' );
	};

	/**
	 * Request a re-rendering of a partial.
	 *
	 * @since 4.5.0
	 *
	 * @param {wp.customize.selectiveRefresh.Partial} partial
	 * @return {jQuery.Promise}
	 */
	self.requestPartial = function( partial ) {
		var partialRequest;

		if ( self._debouncedTimeoutId ) {
			clearTimeout( self._debouncedTimeoutId );
			self._debouncedTimeoutId = null;
		}
		if ( self._currentRequest ) {
			self._currentRequest.abort();
			self._currentRequest = null;
		}

		partialRequest = self._pendingPartialRequests[ partial.id ];
		if ( ! partialRequest || 'pending' !== partialRequest.deferred.state() ) {
			partialRequest = {
				deferred: $.Deferred(),
				partial: partial
			};
			self._pendingPartialRequests[ partial.id ] = partialRequest;
		}

		// Prevent leaking partial into debounced timeout callback.
		partial = null;

		self._debouncedTimeoutId = setTimeout(
			function() {
				var data, partialPlacementContexts, partialsPlacements, request;

				self._debouncedTimeoutId = null;
				data = self.getCustomizeQuery();

				/*
				 * It is key that the containers be fetched exactly at the point of the request being
				 * made, because the containers need to be mapped to responses by array indices.
				 */
				partialsPlacements = {};

				partialPlacementContexts = {};

				_.each( self._pendingPartialRequests, function( pending, partialId ) {
					partialsPlacements[ partialId ] = pending.partial.placements();
					if ( ! self.partial.has( partialId ) ) {
						pending.deferred.rejectWith( pending.partial, [ new Error( 'partial_removed' ), partialsPlacements[ partialId ] ] );
					} else {
						/*
						 * Note that this may in fact be an empty array. In that case, it is the responsibility
						 * of the Partial subclass instance to know where to inject the response, or else to
						 * just issue a refresh (default behavior). The data being returned with each container
						 * is the context information that may be needed to render certain partials, such as
						 * the contained sidebar for rendering widgets or what the nav menu args are for a menu.
						 */
						partialPlacementContexts[ partialId ] = _.map( partialsPlacements[ partialId ], function( placement ) {
							return placement.context || {};
						} );
					}
				} );

				data.partials = JSON.stringify( partialPlacementContexts );
				data[ self.data.renderQueryVar ] = '1';

				request = self._currentRequest = wp.ajax.send( null, {
					data: data,
					url: api.settings.url.self
				} );

				request.done( function( data ) {

					/**
					 * Announce the data returned from a request to render partials.
					 *
					 * The data is filtered on the server via customize_render_partials_response
					 * so plugins can inject data from the server to be utilized
					 * on the client via this event. Plugins may use this filter
					 * to communicate script and style dependencies that need to get
					 * injected into the page to support the rendered partials.
					 * This is similar to the 'saved' event.
					 */
					self.trigger( 'render-partials-response', data );

					// Relay errors (warnings) captured during rendering and relay to console.
					if ( data.errors && 'undefined' !== typeof console && console.warn ) {
						_.each( data.errors, function( error ) {
							console.warn( error );
						} );
					}

					/*
					 * Note that data is an array of items that correspond to the array of
					 * containers that were submitted in the request. So we zip up the
					 * array of containers with the array of contents for those containers,
					 * and send them into .
					 */
					_.each( self._pendingPartialRequests, function( pending, partialId ) {
						var placementsContents;
						if ( ! _.isArray( data.contents[ partialId ] ) ) {
							pending.deferred.rejectWith( pending.partial, [ new Error( 'unrecognized_partial' ), partialsPlacements[ partialId ] ] );
						} else {
							placementsContents = _.map( data.contents[ partialId ], function( content, i ) {
								var partialPlacement = partialsPlacements[ partialId ][ i ];
								if ( partialPlacement ) {
									partialPlacement.addedContent = content;
								} else {
									partialPlacement = new Placement( {
										partial: pending.partial,
										addedContent: content
									} );
								}
								return partialPlacement;
							} );
							pending.deferred.resolveWith( pending.partial, [ placementsContents ] );
						}
					} );
					self._pendingPartialRequests = {};
				} );

				request.fail( function( data, statusText ) {

					/*
					 * Ignore failures caused by partial.currentRequest.abort()
					 * The pending deferreds will remain in self._pendingPartialRequests
					 * for re-use with the next request.
					 */
					if ( 'abort' === statusText ) {
						return;
					}

					_.each( self._pendingPartialRequests, function( pending, partialId ) {
						pending.deferred.rejectWith( pending.partial, [ data, partialsPlacements[ partialId ] ] );
					} );
					self._pendingPartialRequests = {};
				} );
			},
			api.settings.timeouts.selectiveRefresh
		);

		return partialRequest.deferred.promise();
	};

	/**
	 * Add partials for any nav menu container elements in the document.
	 *
	 * This method may be called multiple times. Containers that already have been
	 * seen will be skipped.
	 *
	 * @since 4.5.0
	 *
	 * @param {jQuery|HTMLElement} [rootElement]
	 * @param {object}             [options]
	 * @param {boolean=true}       [options.triggerRendered]
	 */
	self.addPartials = function( rootElement, options ) {
		var containerElements;
		if ( ! rootElement ) {
			rootElement = document.documentElement;
		}
		rootElement = $( rootElement );
		options = _.extend(
			{
				triggerRendered: true
			},
			options || {}
		);

		containerElements = rootElement.find( '[data-customize-partial-id]' );
		if ( rootElement.is( '[data-customize-partial-id]' ) ) {
			containerElements = containerElements.add( rootElement );
		}
		containerElements.each( function() {
			var containerElement = $( this ), partial, placement, id, Constructor, partialOptions, containerContext;
			id = containerElement.data( 'customize-partial-id' );
			if ( ! id ) {
				return;
			}
			containerContext = containerElement.data( 'customize-partial-placement-context' ) || {};

			partial = self.partial( id );
			if ( ! partial ) {
				partialOptions = containerElement.data( 'customize-partial-options' ) || {};
				partialOptions.constructingContainerContext = containerElement.data( 'customize-partial-placement-context' ) || {};
				Constructor = self.partialConstructor[ containerElement.data( 'customize-partial-type' ) ] || self.Partial;
				partial = new Constructor( id, partialOptions );
				self.partial.add( partial.id, partial );
			}

			/*
			 * Only trigger renders on (nested) partials that have been not been
			 * handled yet. An example where this would apply is a nav menu
			 * embedded inside of a custom menu widget. When the widget's title
			 * is updated, the entire widget will re-render and then the event
			 * will be triggered for the nested nav menu to do any initialization.
			 */
			if ( options.triggerRendered && ! containerElement.data( 'customize-partial-content-rendered' ) ) {

				placement = new Placement( {
					partial: partial,
					context: containerContext,
					container: containerElement
				} );

				$( placement.container ).attr( 'title', self.data.l10n.shiftClickToEdit );
				partial.createEditShortcutForPlacement( placement );

				/**
				 * Announce when a partial's nested placement has been re-rendered.
				 */
				self.trigger( 'partial-content-rendered', placement );
			}
			containerElement.data( 'customize-partial-content-rendered', true );
		} );
	};

	api.bind( 'preview-ready', function() {
		var handleSettingChange, watchSettingChange, unwatchSettingChange;

		_.extend( self.data, _customizePartialRefreshExports );

		// Create the partial JS models.
		_.each( self.data.partials, function( data, id ) {
			var Constructor, partial = self.partial( id );
			if ( ! partial ) {
				Constructor = self.partialConstructor[ data.type ] || self.Partial;
				partial = new Constructor( id, { params: data } );
				self.partial.add( id, partial );
			} else {
				_.extend( partial.params, data );
			}
		} );

		/**
		 * Handle change to a setting.
		 *
		 * Note this is largely needed because adding a 'change' event handler to wp.customize
		 * will only include the changed setting object as an argument, not including the
		 * new value or the old value.
		 *
		 * @since 4.5.0
		 * @this {wp.customize.Setting}
		 *
		 * @param {*|null} newValue New value, or null if the setting was just removed.
		 * @param {*|null} oldValue Old value, or null if the setting was just added.
		 */
		handleSettingChange = function( newValue, oldValue ) {
			var setting = this;
			self.partial.each( function( partial ) {
				if ( partial.isRelatedSetting( setting, newValue, oldValue ) ) {
					partial.refresh();
				}
			} );
		};

		/**
		 * Trigger the initial change for the added setting, and watch for changes.
		 *
		 * @since 4.5.0
		 * @this {wp.customize.Values}
		 *
		 * @param {wp.customize.Setting} setting
		 */
		watchSettingChange = function( setting ) {
			handleSettingChange.call( setting, setting(), null );
			setting.bind( handleSettingChange );
		};

		/**
		 * Trigger the final change for the removed setting, and unwatch for changes.
		 *
		 * @since 4.5.0
		 * @this {wp.customize.Values}
		 *
		 * @param {wp.customize.Setting} setting
		 */
		unwatchSettingChange = function( setting ) {
			handleSettingChange.call( setting, null, setting() );
			setting.unbind( handleSettingChange );
		};

		api.bind( 'add', watchSettingChange );
		api.bind( 'remove', unwatchSettingChange );
		api.each( function( setting ) {
			setting.bind( handleSettingChange );
		} );

		// Add (dynamic) initial partials that are declared via data-* attributes.
		self.addPartials( document.documentElement, {
			triggerRendered: false
		} );

		// Add new dynamic partials when the document changes.
		if ( 'undefined' !== typeof MutationObserver ) {
			self.mutationObserver = new MutationObserver( function( mutations ) {
				_.each( mutations, function( mutation ) {
					self.addPartials( $( mutation.target ) );
				} );
			} );
			self.mutationObserver.observe( document.documentElement, {
				childList: true,
				subtree: true
			} );
		}

		/**
		 * Handle rendering of partials.
		 *
		 * @param {api.selectiveRefresh.Placement} placement
		 */
		api.selectiveRefresh.bind( 'partial-content-rendered', function( placement ) {
			if ( placement.container ) {
				self.addPartials( placement.container );
			}
		} );

		/**
		 * Handle setting validities in partial refresh response.
		 *
		 * @param {object} data Response data.
		 * @param {object} data.setting_validities Setting validities.
		 */
		api.selectiveRefresh.bind( 'render-partials-response', function handleSettingValiditiesResponse( data ) {
			if ( data.setting_validities ) {
				api.preview.send( 'selective-refresh-setting-validities', data.setting_validities );
			}
		} );

		api.preview.bind( 'edit-shortcut-visibility', function( visibility ) {
			api.selectiveRefresh.editShortcutVisibility.set( visibility );
		} );
		api.selectiveRefresh.editShortcutVisibility.bind( function( visibility ) {
			var body = $( document.body ), shouldAnimateHide;

			shouldAnimateHide = ( 'hidden' === visibility && body.hasClass( 'customize-partial-edit-shortcuts-shown' ) && ! body.hasClass( 'customize-partial-edit-shortcuts-hidden' ) );
			body.toggleClass( 'customize-partial-edit-shortcuts-hidden', shouldAnimateHide );
			body.toggleClass( 'customize-partial-edit-shortcuts-shown', 'visible' === visibility );
		} );

		api.preview.bind( 'active', function() {

			// Make all partials ready.
			self.partial.each( function( partial ) {
				partial.deferred.ready.resolve();
			} );

			// Make all partials added henceforth as ready upon add.
			self.partial.bind( 'add', function( partial ) {
				partial.deferred.ready.resolve();
			} );
		} );

	} );

	return self;
}( jQuery, wp.customize ) );
;
/* global _wpWidgetCustomizerPreviewSettings */
wp.customize.widgetsPreview = wp.customize.WidgetCustomizerPreview = (function( $, _, wp, api ) {

	var self;

	self = {
		renderedSidebars: {},
		renderedWidgets: {},
		registeredSidebars: [],
		registeredWidgets: {},
		widgetSelectors: [],
		preview: null,
		l10n: {
			widgetTooltip: ''
		},
		selectiveRefreshableWidgets: {}
	};

	/**
	 * Init widgets preview.
	 *
	 * @since 4.5.0
	 */
	self.init = function() {
		var self = this;

		self.preview = api.preview;
		if ( ! _.isEmpty( self.selectiveRefreshableWidgets ) ) {
			self.addPartials();
		}

		self.buildWidgetSelectors();
		self.highlightControls();

		self.preview.bind( 'highlight-widget', self.highlightWidget );

		api.preview.bind( 'active', function() {
			self.highlightControls();
		} );
	};

	/**
	 * Partial representing a widget instance.
	 *
	 * @class
	 * @augments wp.customize.selectiveRefresh.Partial
	 * @since 4.5.0
	 */
	self.WidgetPartial = api.selectiveRefresh.Partial.extend({

		/**
		 * Constructor.
		 *
		 * @since 4.5.0
		 * @param {string} id - Partial ID.
		 * @param {Object} options
		 * @param {Object} options.params
		 */
		initialize: function( id, options ) {
			var partial = this, matches;
			matches = id.match( /^widget\[(.+)]$/ );
			if ( ! matches ) {
				throw new Error( 'Illegal id for widget partial.' );
			}

			partial.widgetId = matches[1];
			partial.widgetIdParts = self.parseWidgetId( partial.widgetId );
			options = options || {};
			options.params = _.extend(
				{
					settings: [ self.getWidgetSettingId( partial.widgetId ) ],
					containerInclusive: true
				},
				options.params || {}
			);

			api.selectiveRefresh.Partial.prototype.initialize.call( partial, id, options );
		},

		/**
		 * Refresh widget partial.
		 *
		 * @returns {Promise}
		 */
		refresh: function() {
			var partial = this, refreshDeferred;
			if ( ! self.selectiveRefreshableWidgets[ partial.widgetIdParts.idBase ] ) {
				refreshDeferred = $.Deferred();
				refreshDeferred.reject();
				partial.fallback();
				return refreshDeferred.promise();
			} else {
				return api.selectiveRefresh.Partial.prototype.refresh.call( partial );
			}
		},

		/**
		 * Send widget-updated message to parent so spinner will get removed from widget control.
		 *
		 * @inheritdoc
		 * @param {wp.customize.selectiveRefresh.Placement} placement
		 */
		renderContent: function( placement ) {
			var partial = this;
			if ( api.selectiveRefresh.Partial.prototype.renderContent.call( partial, placement ) ) {
				api.preview.send( 'widget-updated', partial.widgetId );
				api.selectiveRefresh.trigger( 'widget-updated', partial );
			}
		}
	});

	/**
	 * Partial representing a widget area.
	 *
	 * @class
	 * @augments wp.customize.selectiveRefresh.Partial
	 * @since 4.5.0
	 */
	self.SidebarPartial = api.selectiveRefresh.Partial.extend({

		/**
		 * Constructor.
		 *
		 * @since 4.5.0
		 * @param {string} id - Partial ID.
		 * @param {Object} options
		 * @param {Object} options.params
		 */
		initialize: function( id, options ) {
			var partial = this, matches;
			matches = id.match( /^sidebar\[(.+)]$/ );
			if ( ! matches ) {
				throw new Error( 'Illegal id for sidebar partial.' );
			}
			partial.sidebarId = matches[1];

			options = options || {};
			options.params = _.extend(
				{
					settings: [ 'sidebars_widgets[' + partial.sidebarId + ']' ]
				},
				options.params || {}
			);

			api.selectiveRefresh.Partial.prototype.initialize.call( partial, id, options );

			if ( ! partial.params.sidebarArgs ) {
				throw new Error( 'The sidebarArgs param was not provided.' );
			}
			if ( partial.params.settings.length > 1 ) {
				throw new Error( 'Expected SidebarPartial to only have one associated setting' );
			}
		},

		/**
		 * Set up the partial.
		 *
		 * @since 4.5.0
		 */
		ready: function() {
			var sidebarPartial = this;

			// Watch for changes to the sidebar_widgets setting.
			_.each( sidebarPartial.settings(), function( settingId ) {
				api( settingId ).bind( _.bind( sidebarPartial.handleSettingChange, sidebarPartial ) );
			} );

			// Trigger an event for this sidebar being updated whenever a widget inside is rendered.
			api.selectiveRefresh.bind( 'partial-content-rendered', function( placement ) {
				var isAssignedWidgetPartial = (
					placement.partial.extended( self.WidgetPartial ) &&
					( -1 !== _.indexOf( sidebarPartial.getWidgetIds(), placement.partial.widgetId ) )
				);
				if ( isAssignedWidgetPartial ) {
					api.selectiveRefresh.trigger( 'sidebar-updated', sidebarPartial );
				}
			} );

			// Make sure that a widget partial has a container in the DOM prior to a refresh.
			api.bind( 'change', function( widgetSetting ) {
				var widgetId, parsedId;
				parsedId = self.parseWidgetSettingId( widgetSetting.id );
				if ( ! parsedId ) {
					return;
				}
				widgetId = parsedId.idBase;
				if ( parsedId.number ) {
					widgetId += '-' + String( parsedId.number );
				}
				if ( -1 !== _.indexOf( sidebarPartial.getWidgetIds(), widgetId ) ) {
					sidebarPartial.ensureWidgetPlacementContainers( widgetId );
				}
			} );
		},

		/**
		 * Get the before/after boundary nodes for all instances of this sidebar (usually one).
		 *
		 * Note that TreeWalker is not implemented in IE8.
		 *
		 * @since 4.5.0
		 * @returns {Array.<{before: Comment, after: Comment, instanceNumber: number}>}
		 */
		findDynamicSidebarBoundaryNodes: function() {
			var partial = this, regExp, boundaryNodes = {}, recursiveCommentTraversal;
			regExp = /^(dynamic_sidebar_before|dynamic_sidebar_after):(.+):(\d+)$/;
			recursiveCommentTraversal = function( childNodes ) {
				_.each( childNodes, function( node ) {
					var matches;
					if ( 8 === node.nodeType ) {
						matches = node.nodeValue.match( regExp );
						if ( ! matches || matches[2] !== partial.sidebarId ) {
							return;
						}
						if ( _.isUndefined( boundaryNodes[ matches[3] ] ) ) {
							boundaryNodes[ matches[3] ] = {
								before: null,
								after: null,
								instanceNumber: parseInt( matches[3], 10 )
							};
						}
						if ( 'dynamic_sidebar_before' === matches[1] ) {
							boundaryNodes[ matches[3] ].before = node;
						} else {
							boundaryNodes[ matches[3] ].after = node;
						}
					} else if ( 1 === node.nodeType ) {
						recursiveCommentTraversal( node.childNodes );
					}
				} );
			};

			recursiveCommentTraversal( document.body.childNodes );
			return _.values( boundaryNodes );
		},

		/**
		 * Get the placements for this partial.
		 *
		 * @since 4.5.0
		 * @returns {Array}
		 */
		placements: function() {
			var partial = this;
			return _.map( partial.findDynamicSidebarBoundaryNodes(), function( boundaryNodes ) {
				return new api.selectiveRefresh.Placement( {
					partial: partial,
					container: null,
					startNode: boundaryNodes.before,
					endNode: boundaryNodes.after,
					context: {
						instanceNumber: boundaryNodes.instanceNumber
					}
				} );
			} );
		},

		/**
		 * Get the list of widget IDs associated with this widget area.
		 *
		 * @since 4.5.0
		 *
		 * @returns {Array}
		 */
		getWidgetIds: function() {
			var sidebarPartial = this, settingId, widgetIds;
			settingId = sidebarPartial.settings()[0];
			if ( ! settingId ) {
				throw new Error( 'Missing associated setting.' );
			}
			if ( ! api.has( settingId ) ) {
				throw new Error( 'Setting does not exist.' );
			}
			widgetIds = api( settingId ).get();
			if ( ! _.isArray( widgetIds ) ) {
				throw new Error( 'Expected setting to be array of widget IDs' );
			}
			return widgetIds.slice( 0 );
		},

		/**
		 * Reflow widgets in the sidebar, ensuring they have the proper position in the DOM.
		 *
		 * @since 4.5.0
		 *
		 * @return {Array.<wp.customize.selectiveRefresh.Placement>} List of placements that were reflowed.
		 */
		reflowWidgets: function() {
			var sidebarPartial = this, sidebarPlacements, widgetIds, widgetPartials, sortedSidebarContainers = [];
			widgetIds = sidebarPartial.getWidgetIds();
			sidebarPlacements = sidebarPartial.placements();

			widgetPartials = {};
			_.each( widgetIds, function( widgetId ) {
				var widgetPartial = api.selectiveRefresh.partial( 'widget[' + widgetId + ']' );
				if ( widgetPartial ) {
					widgetPartials[ widgetId ] = widgetPartial;
				}
			} );

			_.each( sidebarPlacements, function( sidebarPlacement ) {
				var sidebarWidgets = [], needsSort = false, thisPosition, lastPosition = -1;

				// Gather list of widget partial containers in this sidebar, and determine if a sort is needed.
				_.each( widgetPartials, function( widgetPartial ) {
					_.each( widgetPartial.placements(), function( widgetPlacement ) {

						if ( sidebarPlacement.context.instanceNumber === widgetPlacement.context.sidebar_instance_number ) {
							thisPosition = widgetPlacement.container.index();
							sidebarWidgets.push( {
								partial: widgetPartial,
								placement: widgetPlacement,
								position: thisPosition
							} );
							if ( thisPosition < lastPosition ) {
								needsSort = true;
							}
							lastPosition = thisPosition;
						}
					} );
				} );

				if ( needsSort ) {
					_.each( sidebarWidgets, function( sidebarWidget ) {
						sidebarPlacement.endNode.parentNode.insertBefore(
							sidebarWidget.placement.container[0],
							sidebarPlacement.endNode
						);

						// @todo Rename partial-placement-moved?
						api.selectiveRefresh.trigger( 'partial-content-moved', sidebarWidget.placement );
					} );

					sortedSidebarContainers.push( sidebarPlacement );
				}
			} );

			if ( sortedSidebarContainers.length > 0 ) {
				api.selectiveRefresh.trigger( 'sidebar-updated', sidebarPartial );
			}

			return sortedSidebarContainers;
		},

		/**
		 * Make sure there is a widget instance container in this sidebar for the given widget ID.
		 *
		 * @since 4.5.0
		 *
		 * @param {string} widgetId
		 * @returns {wp.customize.selectiveRefresh.Partial} Widget instance partial.
		 */
		ensureWidgetPlacementContainers: function( widgetId ) {
			var sidebarPartial = this, widgetPartial, wasInserted = false, partialId = 'widget[' + widgetId + ']';
			widgetPartial = api.selectiveRefresh.partial( partialId );
			if ( ! widgetPartial ) {
				widgetPartial = new self.WidgetPartial( partialId, {
					params: {}
				} );
			}

			// Make sure that there is a container element for the widget in the sidebar, if at least a placeholder.
			_.each( sidebarPartial.placements(), function( sidebarPlacement ) {
				var foundWidgetPlacement, widgetContainerElement;

				foundWidgetPlacement = _.find( widgetPartial.placements(), function( widgetPlacement ) {
					return ( widgetPlacement.context.sidebar_instance_number === sidebarPlacement.context.instanceNumber );
				} );
				if ( foundWidgetPlacement ) {
					return;
				}

				widgetContainerElement = $(
					sidebarPartial.params.sidebarArgs.before_widget.replace( /%1\$s/g, widgetId ).replace( /%2\$s/g, 'widget' ) +
					sidebarPartial.params.sidebarArgs.after_widget
				);

				// Handle rare case where before_widget and after_widget are empty.
				if ( ! widgetContainerElement[0] ) {
					return;
				}

				widgetContainerElement.attr( 'data-customize-partial-id', widgetPartial.id );
				widgetContainerElement.attr( 'data-customize-partial-type', 'widget' );
				widgetContainerElement.attr( 'data-customize-widget-id', widgetId );

				/*
				 * Make sure the widget container element has the customize-container context data.
				 * The sidebar_instance_number is used to disambiguate multiple instances of the
				 * same sidebar are rendered onto the template, and so the same widget is embedded
				 * multiple times.
				 */
				widgetContainerElement.data( 'customize-partial-placement-context', {
					'sidebar_id': sidebarPartial.sidebarId,
					'sidebar_instance_number': sidebarPlacement.context.instanceNumber
				} );

				sidebarPlacement.endNode.parentNode.insertBefore( widgetContainerElement[0], sidebarPlacement.endNode );
				wasInserted = true;
			} );

			api.selectiveRefresh.partial.add( widgetPartial.id, widgetPartial );

			if ( wasInserted ) {
				sidebarPartial.reflowWidgets();
			}

			return widgetPartial;
		},

		/**
		 * Handle change to the sidebars_widgets[] setting.
		 *
		 * @since 4.5.0
		 *
		 * @param {Array} newWidgetIds New widget ids.
		 * @param {Array} oldWidgetIds Old widget ids.
		 */
		handleSettingChange: function( newWidgetIds, oldWidgetIds ) {
			var sidebarPartial = this, needsRefresh, widgetsRemoved, widgetsAdded, addedWidgetPartials = [];

			needsRefresh = (
				( oldWidgetIds.length > 0 && 0 === newWidgetIds.length ) ||
				( newWidgetIds.length > 0 && 0 === oldWidgetIds.length )
			);
			if ( needsRefresh ) {
				sidebarPartial.fallback();
				return;
			}

			// Handle removal of widgets.
			widgetsRemoved = _.difference( oldWidgetIds, newWidgetIds );
			_.each( widgetsRemoved, function( removedWidgetId ) {
				var widgetPartial = api.selectiveRefresh.partial( 'widget[' + removedWidgetId + ']' );
				if ( widgetPartial ) {
					_.each( widgetPartial.placements(), function( placement ) {
						var isRemoved = (
							placement.context.sidebar_id === sidebarPartial.sidebarId ||
							( placement.context.sidebar_args && placement.context.sidebar_args.id === sidebarPartial.sidebarId )
						);
						if ( isRemoved ) {
							placement.container.remove();
						}
					} );
				}
			} );

			// Handle insertion of widgets.
			widgetsAdded = _.difference( newWidgetIds, oldWidgetIds );
			_.each( widgetsAdded, function( addedWidgetId ) {
				var widgetPartial = sidebarPartial.ensureWidgetPlacementContainers( addedWidgetId );
				addedWidgetPartials.push( widgetPartial );
			} );

			_.each( addedWidgetPartials, function( widgetPartial ) {
				widgetPartial.refresh();
			} );

			api.selectiveRefresh.trigger( 'sidebar-updated', sidebarPartial );
		},

		/**
		 * Note that the meat is handled in handleSettingChange because it has the context of which widgets were removed.
		 *
		 * @since 4.5.0
		 */
		refresh: function() {
			var partial = this, deferred = $.Deferred();

			deferred.fail( function() {
				partial.fallback();
			} );

			if ( 0 === partial.placements().length ) {
				deferred.reject();
			} else {
				_.each( partial.reflowWidgets(), function( sidebarPlacement ) {
					api.selectiveRefresh.trigger( 'partial-content-rendered', sidebarPlacement );
				} );
				deferred.resolve();
			}

			return deferred.promise();
		}
	});

	api.selectiveRefresh.partialConstructor.sidebar = self.SidebarPartial;
	api.selectiveRefresh.partialConstructor.widget = self.WidgetPartial;

	/**
	 * Add partials for the registered widget areas (sidebars).
	 *
	 * @since 4.5.0
	 */
	self.addPartials = function() {
		_.each( self.registeredSidebars, function( registeredSidebar ) {
			var partial, partialId = 'sidebar[' + registeredSidebar.id + ']';
			partial = api.selectiveRefresh.partial( partialId );
			if ( ! partial ) {
				partial = new self.SidebarPartial( partialId, {
					params: {
						sidebarArgs: registeredSidebar
					}
				} );
				api.selectiveRefresh.partial.add( partial.id, partial );
			}
		} );
	};

	/**
	 * Calculate the selector for the sidebar's widgets based on the registered sidebar's info.
	 *
	 * @since 3.9.0
	 */
	self.buildWidgetSelectors = function() {
		var self = this;

		$.each( self.registeredSidebars, function( i, sidebar ) {
			var widgetTpl = [
					sidebar.before_widget,
					sidebar.before_title,
					sidebar.after_title,
					sidebar.after_widget
				].join( '' ),
				emptyWidget,
				widgetSelector,
				widgetClasses;

			emptyWidget = $( widgetTpl );
			widgetSelector = emptyWidget.prop( 'tagName' ) || '';
			widgetClasses = emptyWidget.prop( 'className' ) || '';

			// Prevent a rare case when before_widget, before_title, after_title and after_widget is empty.
			if ( ! widgetClasses ) {
				return;
			}

			// Remove class names that incorporate the string formatting placeholders %1$s and %2$s.
			widgetClasses = widgetClasses.replace( /\S*%[12]\$s\S*/g, '' );
			widgetClasses = widgetClasses.replace( /^\s+|\s+$/g, '' );
			if ( widgetClasses ) {
				widgetSelector += '.' + widgetClasses.split( /\s+/ ).join( '.' );
			}
			self.widgetSelectors.push( widgetSelector );
		});
	};

	/**
	 * Highlight the widget on widget updates or widget control mouse overs.
	 *
	 * @since 3.9.0
	 * @param  {string} widgetId ID of the widget.
	 */
	self.highlightWidget = function( widgetId ) {
		var $body = $( document.body ),
			$widget = $( '#' + widgetId );

		$body.find( '.widget-customizer-highlighted-widget' ).removeClass( 'widget-customizer-highlighted-widget' );

		$widget.addClass( 'widget-customizer-highlighted-widget' );
		setTimeout( function() {
			$widget.removeClass( 'widget-customizer-highlighted-widget' );
		}, 500 );
	};

	/**
	 * Show a title and highlight widgets on hover. On shift+clicking
	 * focus the widget control.
	 *
	 * @since 3.9.0
	 */
	self.highlightControls = function() {
		var self = this,
			selector = this.widgetSelectors.join( ',' );

		// Skip adding highlights if not in the customizer preview iframe.
		if ( ! api.settings.channel ) {
			return;
		}

		$( selector ).attr( 'title', this.l10n.widgetTooltip );

		$( document ).on( 'mouseenter', selector, function() {
			self.preview.send( 'highlight-widget-control', $( this ).prop( 'id' ) );
		});

		// Open expand the widget control when shift+clicking the widget element
		$( document ).on( 'click', selector, function( e ) {
			if ( ! e.shiftKey ) {
				return;
			}
			e.preventDefault();

			self.preview.send( 'focus-widget-control', $( this ).prop( 'id' ) );
		});
	};

	/**
	 * Parse a widget ID.
	 *
	 * @since 4.5.0
	 *
	 * @param {string} widgetId Widget ID.
	 * @returns {{idBase: string, number: number|null}}
	 */
	self.parseWidgetId = function( widgetId ) {
		var matches, parsed = {
			idBase: '',
			number: null
		};

		matches = widgetId.match( /^(.+)-(\d+)$/ );
		if ( matches ) {
			parsed.idBase = matches[1];
			parsed.number = parseInt( matches[2], 10 );
		} else {
			parsed.idBase = widgetId; // Likely an old single widget.
		}

		return parsed;
	};

	/**
	 * Parse a widget setting ID.
	 *
	 * @since 4.5.0
	 *
	 * @param {string} settingId Widget setting ID.
	 * @returns {{idBase: string, number: number|null}|null}
	 */
	self.parseWidgetSettingId = function( settingId ) {
		var matches, parsed = {
			idBase: '',
			number: null
		};

		matches = settingId.match( /^widget_([^\[]+?)(?:\[(\d+)])?$/ );
		if ( ! matches ) {
			return null;
		}
		parsed.idBase = matches[1];
		if ( matches[2] ) {
			parsed.number = parseInt( matches[2], 10 );
		}
		return parsed;
	};

	/**
	 * Convert a widget ID into a Customizer setting ID.
	 *
	 * @since 4.5.0
	 *
	 * @param {string} widgetId Widget ID.
	 * @returns {string} settingId Setting ID.
	 */
	self.getWidgetSettingId = function( widgetId ) {
		var parsed = this.parseWidgetId( widgetId ), settingId;

		settingId = 'widget_' + parsed.idBase;
		if ( parsed.number ) {
			settingId += '[' + String( parsed.number ) + ']';
		}

		return settingId;
	};

	api.bind( 'preview-ready', function() {
		$.extend( self, _wpWidgetCustomizerPreviewSettings );
		self.init();
	});

	return self;
})( jQuery, _, wp, wp.customize );
;
/* global _wpCustomizePreviewNavMenusExports */
wp.customize.navMenusPreview = wp.customize.MenusCustomizerPreview = ( function( $, _, wp, api ) {
	'use strict';

	var self = {
		data: {
			navMenuInstanceArgs: {}
		}
	};
	if ( 'undefined' !== typeof _wpCustomizePreviewNavMenusExports ) {
		_.extend( self.data, _wpCustomizePreviewNavMenusExports );
	}

	/**
	 * Initialize nav menus preview.
	 */
	self.init = function() {
		var self = this, synced = false;

		/*
		 * Keep track of whether we synced to determine whether or not bindSettingListener
		 * should also initially fire the listener. This initial firing needs to wait until
		 * after all of the settings have been synced from the pane in order to prevent
		 * an infinite selective fallback-refresh. Note that this sync handler will be
		 * added after the sync handler in customize-preview.js, so it will be triggered
		 * after all of the settings are added.
		 */
		api.preview.bind( 'sync', function() {
			synced = true;
		} );

		if ( api.selectiveRefresh ) {
			// Listen for changes to settings related to nav menus.
			api.each( function( setting ) {
				self.bindSettingListener( setting );
			} );
			api.bind( 'add', function( setting ) {

				/*
				 * Handle case where an invalid nav menu item (one for which its associated object has been deleted)
				 * is synced from the controls into the preview. Since invalid nav menu items are filtered out from
				 * being exported to the frontend by the _is_valid_nav_menu_item filter in wp_get_nav_menu_items(),
				 * the customizer controls will have a nav_menu_item setting where the preview will have none, and
				 * this can trigger an infinite fallback refresh when the nav menu item lacks any valid items.
				 */
				if ( setting.get() && ! setting.get()._invalid ) {
					self.bindSettingListener( setting, { fire: synced } );
				}
			} );
			api.bind( 'remove', function( setting ) {
				self.unbindSettingListener( setting );
			} );

			/*
			 * Ensure that wp_nav_menu() instances nested inside of other partials
			 * will be recognized as being present on the page.
			 */
			api.selectiveRefresh.bind( 'render-partials-response', function( response ) {
				if ( response.nav_menu_instance_args ) {
					_.extend( self.data.navMenuInstanceArgs, response.nav_menu_instance_args );
				}
			} );
		}

		api.preview.bind( 'active', function() {
			self.highlightControls();
		} );
	};

	if ( api.selectiveRefresh ) {

		/**
		 * Partial representing an invocation of wp_nav_menu().
		 *
		 * @class
		 * @augments wp.customize.selectiveRefresh.Partial
		 * @since 4.5.0
		 */
		self.NavMenuInstancePartial = api.selectiveRefresh.Partial.extend({

			/**
			 * Constructor.
			 *
			 * @since 4.5.0
			 * @param {string} id - Partial ID.
			 * @param {Object} options
			 * @param {Object} options.params
			 * @param {Object} options.params.navMenuArgs
			 * @param {string} options.params.navMenuArgs.args_hmac
			 * @param {string} [options.params.navMenuArgs.theme_location]
			 * @param {number} [options.params.navMenuArgs.menu]
			 * @param {object} [options.constructingContainerContext]
			 */
			initialize: function( id, options ) {
				var partial = this, matches, argsHmac;
				matches = id.match( /^nav_menu_instance\[([0-9a-f]{32})]$/ );
				if ( ! matches ) {
					throw new Error( 'Illegal id for nav_menu_instance partial. The key corresponds with the args HMAC.' );
				}
				argsHmac = matches[1];

				options = options || {};
				options.params = _.extend(
					{
						selector: '[data-customize-partial-id="' + id + '"]',
						navMenuArgs: options.constructingContainerContext || {},
						containerInclusive: true
					},
					options.params || {}
				);
				api.selectiveRefresh.Partial.prototype.initialize.call( partial, id, options );

				if ( ! _.isObject( partial.params.navMenuArgs ) ) {
					throw new Error( 'Missing navMenuArgs' );
				}
				if ( partial.params.navMenuArgs.args_hmac !== argsHmac ) {
					throw new Error( 'args_hmac mismatch with id' );
				}
			},

			/**
			 * Return whether the setting is related to this partial.
			 *
			 * @since 4.5.0
			 * @param {wp.customize.Value|string} setting  - Object or ID.
			 * @param {number|object|false|null}  newValue - New value, or null if the setting was just removed.
			 * @param {number|object|false|null}  oldValue - Old value, or null if the setting was just added.
			 * @returns {boolean}
			 */
			isRelatedSetting: function( setting, newValue, oldValue ) {
				var partial = this, navMenuLocationSetting, navMenuId, isNavMenuItemSetting, _newValue, _oldValue, urlParser;
				if ( _.isString( setting ) ) {
					setting = api( setting );
				}

				/*
				 * Prevent nav_menu_item changes only containing type_label differences triggering a refresh.
				 * These settings in the preview do not include type_label property, and so if one of these
				 * nav_menu_item settings is dirty, after a refresh the nav menu instance would do a selective
				 * refresh immediately because the setting from the pane would have the type_label whereas
				 * the setting in the preview would not, thus triggering a change event. The following
				 * condition short-circuits this unnecessary selective refresh and also prevents an infinite
				 * loop in the case where a nav_menu_instance partial had done a fallback refresh.
				 * @todo Nav menu item settings should not include a type_label property to begin with.
				 */
				isNavMenuItemSetting = /^nav_menu_item\[/.test( setting.id );
				if ( isNavMenuItemSetting && _.isObject( newValue ) && _.isObject( oldValue ) ) {
					_newValue = _.clone( newValue );
					_oldValue = _.clone( oldValue );
					delete _newValue.type_label;
					delete _oldValue.type_label;

					// Normalize URL scheme when parent frame is HTTPS to prevent selective refresh upon initial page load.
					if ( 'https' === api.preview.scheme.get() ) {
						urlParser = document.createElement( 'a' );
						urlParser.href = _newValue.url;
						urlParser.protocol = 'https:';
						_newValue.url = urlParser.href;
						urlParser.href = _oldValue.url;
						urlParser.protocol = 'https:';
						_oldValue.url = urlParser.href;
					}

					// Prevent original_title differences from causing refreshes if title is present.
					if ( newValue.title ) {
						delete _oldValue.original_title;
						delete _newValue.original_title;
					}

					if ( _.isEqual( _oldValue, _newValue ) ) {
						return false;
					}
				}

				if ( partial.params.navMenuArgs.theme_location ) {
					if ( 'nav_menu_locations[' + partial.params.navMenuArgs.theme_location + ']' === setting.id ) {
						return true;
					}
					navMenuLocationSetting = api( 'nav_menu_locations[' + partial.params.navMenuArgs.theme_location + ']' );
				}

				navMenuId = partial.params.navMenuArgs.menu;
				if ( ! navMenuId && navMenuLocationSetting ) {
					navMenuId = navMenuLocationSetting();
				}

				if ( ! navMenuId ) {
					return false;
				}
				return (
					( 'nav_menu[' + navMenuId + ']' === setting.id ) ||
					( isNavMenuItemSetting && (
						( newValue && newValue.nav_menu_term_id === navMenuId ) ||
						( oldValue && oldValue.nav_menu_term_id === navMenuId )
					) )
				);
			},

			/**
			 * Make sure that partial fallback behavior is invoked if there is no associated menu.
			 *
			 * @since 4.5.0
			 *
			 * @returns {Promise}
			 */
			refresh: function() {
				var partial = this, menuId, deferred = $.Deferred();

				// Make sure the fallback behavior is invoked when the partial is no longer associated with a menu.
				if ( _.isNumber( partial.params.navMenuArgs.menu ) ) {
					menuId = partial.params.navMenuArgs.menu;
				} else if ( partial.params.navMenuArgs.theme_location && api.has( 'nav_menu_locations[' + partial.params.navMenuArgs.theme_location + ']' ) ) {
					menuId = api( 'nav_menu_locations[' + partial.params.navMenuArgs.theme_location + ']' ).get();
				}
				if ( ! menuId ) {
					partial.fallback();
					deferred.reject();
					return deferred.promise();
				}

				return api.selectiveRefresh.Partial.prototype.refresh.call( partial );
			},

			/**
			 * Render content.
			 *
			 * @inheritdoc
			 * @param {wp.customize.selectiveRefresh.Placement} placement
			 */
			renderContent: function( placement ) {
				var partial = this, previousContainer = placement.container;

				// Do fallback behavior to refresh preview if menu is now empty.
				if ( '' === placement.addedContent ) {
					placement.partial.fallback();
				}

				if ( api.selectiveRefresh.Partial.prototype.renderContent.call( partial, placement ) ) {

					// Trigger deprecated event.
					$( document ).trigger( 'customize-preview-menu-refreshed', [ {
						instanceNumber: null, // @deprecated
						wpNavArgs: placement.context, // @deprecated
						wpNavMenuArgs: placement.context,
						oldContainer: previousContainer,
						newContainer: placement.container
					} ] );
				}
			}
		});

		api.selectiveRefresh.partialConstructor.nav_menu_instance = self.NavMenuInstancePartial;

		/**
		 * Request full refresh if there are nav menu instances that lack partials which also match the supplied args.
		 *
		 * @param {object} navMenuInstanceArgs
		 */
		self.handleUnplacedNavMenuInstances = function( navMenuInstanceArgs ) {
			var unplacedNavMenuInstances;
			unplacedNavMenuInstances = _.filter( _.values( self.data.navMenuInstanceArgs ), function( args ) {
				return ! api.selectiveRefresh.partial.has( 'nav_menu_instance[' + args.args_hmac + ']' );
			} );
			if ( _.findWhere( unplacedNavMenuInstances, navMenuInstanceArgs ) ) {
				api.selectiveRefresh.requestFullRefresh();
				return true;
			}
			return false;
		};

		/**
		 * Add change listener for a nav_menu[], nav_menu_item[], or nav_menu_locations[] setting.
		 *
		 * @since 4.5.0
		 *
		 * @param {wp.customize.Value} setting
		 * @param {object}             [options]
		 * @param {boolean}            options.fire Whether to invoke the callback after binding.
		 *                                          This is used when a dynamic setting is added.
		 * @return {boolean} Whether the setting was bound.
		 */
		self.bindSettingListener = function( setting, options ) {
			var matches;
			options = options || {};

			matches = setting.id.match( /^nav_menu\[(-?\d+)]$/ );
			if ( matches ) {
				setting._navMenuId = parseInt( matches[1], 10 );
				setting.bind( this.onChangeNavMenuSetting );
				if ( options.fire ) {
					this.onChangeNavMenuSetting.call( setting, setting(), false );
				}
				return true;
			}

			matches = setting.id.match( /^nav_menu_item\[(-?\d+)]$/ );
			if ( matches ) {
				setting._navMenuItemId = parseInt( matches[1], 10 );
				setting.bind( this.onChangeNavMenuItemSetting );
				if ( options.fire ) {
					this.onChangeNavMenuItemSetting.call( setting, setting(), false );
				}
				return true;
			}

			matches = setting.id.match( /^nav_menu_locations\[(.+?)]/ );
			if ( matches ) {
				setting._navMenuThemeLocation = matches[1];
				setting.bind( this.onChangeNavMenuLocationsSetting );
				if ( options.fire ) {
					this.onChangeNavMenuLocationsSetting.call( setting, setting(), false );
				}
				return true;
			}

			return false;
		};

		/**
		 * Remove change listeners for nav_menu[], nav_menu_item[], or nav_menu_locations[] setting.
		 *
		 * @since 4.5.0
		 *
		 * @param {wp.customize.Value} setting
		 */
		self.unbindSettingListener = function( setting ) {
			setting.unbind( this.onChangeNavMenuSetting );
			setting.unbind( this.onChangeNavMenuItemSetting );
			setting.unbind( this.onChangeNavMenuLocationsSetting );
		};

		/**
		 * Handle change for nav_menu[] setting for nav menu instances lacking partials.
		 *
		 * @since 4.5.0
		 *
		 * @this {wp.customize.Value}
		 */
		self.onChangeNavMenuSetting = function() {
			var setting = this;

			self.handleUnplacedNavMenuInstances( {
				menu: setting._navMenuId
			} );

			// Ensure all nav menu instances with a theme_location assigned to this menu are handled.
			api.each( function( otherSetting ) {
				if ( ! otherSetting._navMenuThemeLocation ) {
					return;
				}
				if ( setting._navMenuId === otherSetting() ) {
					self.handleUnplacedNavMenuInstances( {
						theme_location: otherSetting._navMenuThemeLocation
					} );
				}
			} );
		};

		/**
		 * Handle change for nav_menu_item[] setting for nav menu instances lacking partials.
		 *
		 * @since 4.5.0
		 *
		 * @param {object} newItem New value for nav_menu_item[] setting.
		 * @param {object} oldItem Old value for nav_menu_item[] setting.
		 * @this {wp.customize.Value}
		 */
		self.onChangeNavMenuItemSetting = function( newItem, oldItem ) {
			var item = newItem || oldItem, navMenuSetting;
			navMenuSetting = api( 'nav_menu[' + String( item.nav_menu_term_id ) + ']' );
			if ( navMenuSetting ) {
				self.onChangeNavMenuSetting.call( navMenuSetting );
			}
		};

		/**
		 * Handle change for nav_menu_locations[] setting for nav menu instances lacking partials.
		 *
		 * @since 4.5.0
		 *
		 * @this {wp.customize.Value}
		 */
		self.onChangeNavMenuLocationsSetting = function() {
			var setting = this, hasNavMenuInstance;
			self.handleUnplacedNavMenuInstances( {
				theme_location: setting._navMenuThemeLocation
			} );

			// If there are no wp_nav_menu() instances that refer to the theme location, do full refresh.
			hasNavMenuInstance = !! _.findWhere( _.values( self.data.navMenuInstanceArgs ), {
				theme_location: setting._navMenuThemeLocation
			} );
			if ( ! hasNavMenuInstance ) {
				api.selectiveRefresh.requestFullRefresh();
			}
		};
	}

	/**
	 * Connect nav menu items with their corresponding controls in the pane.
	 *
	 * Setup shift-click on nav menu items which are more granular than the nav menu partial itself.
	 * Also this applies even if a nav menu is not partial-refreshable.
	 *
	 * @since 4.5.0
	 */
	self.highlightControls = function() {
		var selector = '.menu-item';

		// Skip adding highlights if not in the customizer preview iframe.
		if ( ! api.settings.channel ) {
			return;
		}

		// Focus on the menu item control when shift+clicking the menu item.
		$( document ).on( 'click', selector, function( e ) {
			var navMenuItemParts;
			if ( ! e.shiftKey ) {
				return;
			}

			navMenuItemParts = $( this ).attr( 'class' ).match( /(?:^|\s)menu-item-(-?\d+)(?:\s|$)/ );
			if ( navMenuItemParts ) {
				e.preventDefault();
				e.stopPropagation(); // Make sure a sub-nav menu item will get focused instead of parent items.
				api.preview.send( 'focus-nav-menu-item-control', parseInt( navMenuItemParts[1], 10 ) );
			}
		});
	};

	api.bind( 'preview-ready', function() {
		self.init();
	} );

	return self;

}( jQuery, _, wp, wp.customize ) );
;
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function raw(s) {
        return s;
    }

    function decoded(s) {
        return decodeURIComponent(s.replace(pluses, ' '));
    }

    function converted(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            return config.json ? JSON.parse(s) : s;
        } catch(er) {}
    }

    var config = $.cookie = function (key, value, options) {

        // write
        if (value !== undefined) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = config.json ? JSON.stringify(value) : String(value);

            return (document.cookie = [
                config.raw ? key : encodeURIComponent(key),
                '=',
                config.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // read
        var decode = config.raw ? raw : decoded;
        var cookies = document.cookie.split('; ');
        var result = key ? undefined : {};
        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = decode(parts.join('='));

            if (key && key === name) {
                result = converted(cookie);
                break;
            }

            if (!key) {
                result[name] = converted(cookie);
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) !== undefined) {
            // Must not alter options, thus extending a fresh object...
            $.cookie(key, '', $.extend({}, options, { expires: -1 }));
            return true;
        }
        return false;
    };

}));;
/*globals wpml_browser_redirect_params, jQuery, ajaxurl, window */

/** @namespace wpml_browser_redirect_params.pageLanguage */
/** @namespace wpml_browser_redirect_params.expiration */
/** @namespace wpml_browser_redirect_params.languageUrls */
/** @namespace navigator.browserLanguage */

var WPMLBrowserRedirect = function () {
	"use strict";

	var self = this;

	self.getExpirationDate = function () {
		var date = new Date();
		var currentTime = date.getTime();
		date.setTime(currentTime + (wpml_browser_redirect_params.cookie.expiration * 60 * 60 * 1000));
		return date;
	};

    self.getRedirectUrl = function (browserLanguage) {
        var redirectUrl = false;
        var languageUrls = wpml_browser_redirect_params.languageUrls;
        var languageFirstPart = browserLanguage.substr(0, 2);
        var languageLastPart = browserLanguage.substr(3, 2);

        if (languageUrls[browserLanguage] === undefined) {
            if (languageUrls[languageLastPart] !== undefined) {
                redirectUrl = languageUrls[languageLastPart];
            } else if (languageUrls[languageFirstPart] !== undefined) {
                redirectUrl = languageUrls[languageFirstPart];
            }
        } else {
            redirectUrl = languageUrls[browserLanguage];
        }
        if ( window.location.href === redirectUrl ) {
            return false;
        } else {
            return redirectUrl;
        }
    };

	self.init = function () {

		if (self.cookiesAreEnabled() && !self.cookieExists()) {
            self.getBrowserLanguage(function (browserLanguages) {
				var redirectUrl;
				var pageLanguage;
                var browserLanguage;

				pageLanguage = wpml_browser_redirect_params.pageLanguage.toLowerCase();

                var browserLanguagesLength = browserLanguages.length;
                for (var i = 0; i < browserLanguagesLength; i++) {
                    browserLanguage = browserLanguages[i];

					if ( pageLanguage === browserLanguage ) {
						self.setCookie(browserLanguage);
						break;
					} else {
						redirectUrl = self.getRedirectUrl(browserLanguage);
						if (false !== redirectUrl) {
							self.setCookie(browserLanguage);
							window.location = redirectUrl;
							break;
						}
					}
                }

            });
		}
	};

	self.cookieExists = function () {
		var cookieParams = wpml_browser_redirect_params.cookie;
		var cookieName = cookieParams.name;
		return jQuery.cookie(cookieName);
	};

	self.setCookie = function (browserLanguage) {
		var cookieOptions;
		var cookieParams = wpml_browser_redirect_params.cookie;
		var cookieName = cookieParams.name;
		var path = '/';
		var domain = '';

		if (cookieParams.path) {
			path = cookieParams.path;
		}

		if (cookieParams.domain) {
			domain = cookieParams.domain;
		}

		cookieOptions = {
			expires: self.getExpirationDate(),
			path:    path,
			domain:  domain
		};
		jQuery.cookie(cookieName, browserLanguage, cookieOptions);
	};

	self.getBrowserLanguage = function (success) {
        var browserLanguages = [];

        if (navigator.languages) {
            browserLanguages = navigator.languages;
        }
        if (0 === browserLanguages.length && (navigator.language || navigator.userLanguage)) {
            browserLanguages.push(navigator.language || navigator.userLanguage);
        }
        if (0 === browserLanguages.length && (navigator.browserLanguage || navigator.systemLanguage)) {
            browserLanguages.push(navigator.browserLanguage || navigator.systemLanguage);
		}

        if (0 === browserLanguages.length) {
            jQuery.ajax({
                data: {
                    icl_ajx_action: 'get_browser_language'
                },
                success: function (response) {
                    if (response.success) {
                        browserLanguages = response.data;
                        if (success && "function" === typeof success) {
							browserLanguages = browserLanguages.join('|').toLowerCase().split('|');
                            success(browserLanguages);
                        }
                    }
                }
            });
        } else {
			browserLanguages = browserLanguages.join('|').toLowerCase().split('|');
            success(browserLanguages);
        }
	};

	self.cookiesAreEnabled = function () {
		var result = (undefined !== jQuery.cookie);
		if (result) {
			jQuery.cookie('wpml_browser_redirect_test', 1);
			result = '1' === jQuery.cookie('wpml_browser_redirect_test');
			jQuery.cookie('wpml_browser_redirect_test', 0);
		}
		return result;
	};
};

jQuery(document).ready(function () {
	"use strict";

	var wpmlBrowserRedirect = new WPMLBrowserRedirect();
	wpmlBrowserRedirect.init();

});;
