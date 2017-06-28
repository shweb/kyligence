/**
 * WordPress inline HTML embed
 *
 * @since 4.4.0
 *
 * This file cannot have ampersands in it. This is to ensure
 * it can be embedded in older versions of WordPress.
 * See https://core.trac.wordpress.org/changeset/35708.
 */
(function ( window, document ) {
	'use strict';

	var supportedBrowser = false,
		loaded = false;

		if ( document.querySelector ) {
			if ( window.addEventListener ) {
				supportedBrowser = true;
			}
		}

	window.wp = window.wp || {};

	if ( !! window.wp.receiveEmbedMessage ) {
		return;
	}

	window.wp.receiveEmbedMessage = function( e ) {
		var data = e.data;
		if ( ! ( data.secret || data.message || data.value ) ) {
			return;
		}

		if ( /[^a-zA-Z0-9]/.test( data.secret ) ) {
			return;
		}

		var iframes = document.querySelectorAll( 'iframe[data-secret="' + data.secret + '"]' ),
			blockquotes = document.querySelectorAll( 'blockquote[data-secret="' + data.secret + '"]' ),
			i, source, height, sourceURL, targetURL;

		for ( i = 0; i < blockquotes.length; i++ ) {
			blockquotes[ i ].style.display = 'none';
		}

		for ( i = 0; i < iframes.length; i++ ) {
			source = iframes[ i ];

			if ( e.source !== source.contentWindow ) {
				continue;
			}

			source.removeAttribute( 'style' );

			/* Resize the iframe on request. */
			if ( 'height' === data.message ) {
				height = parseInt( data.value, 10 );
				if ( height > 1000 ) {
					height = 1000;
				} else if ( ~~height < 200 ) {
					height = 200;
				}

				source.height = height;
			}

			/* Link to a specific URL on request. */
			if ( 'link' === data.message ) {
				sourceURL = document.createElement( 'a' );
				targetURL = document.createElement( 'a' );

				sourceURL.href = source.getAttribute( 'src' );
				targetURL.href = data.value;

				/* Only continue if link hostname matches iframe's hostname. */
				if ( targetURL.host === sourceURL.host ) {
					if ( document.activeElement === source ) {
						window.top.location.href = data.value;
					}
				}
			}
		}
	};

	function onLoad() {
		if ( loaded ) {
			return;
		}

		loaded = true;

		var isIE10 = -1 !== navigator.appVersion.indexOf( 'MSIE 10' ),
			isIE11 = !!navigator.userAgent.match( /Trident.*rv:11\./ ),
			iframes = document.querySelectorAll( 'iframe.wp-embedded-content' ),
			iframeClone, i, source, secret;

		for ( i = 0; i < iframes.length; i++ ) {
			source = iframes[ i ];

			if ( ! source.getAttribute( 'data-secret' ) ) {
				/* Add secret to iframe */
				secret = Math.random().toString( 36 ).substr( 2, 10 );
				source.src += '#?secret=' + secret;
				source.setAttribute( 'data-secret', secret );
			}

			/* Remove security attribute from iframes in IE10 and IE11. */
			if ( ( isIE10 || isIE11 ) ) {
				iframeClone = source.cloneNode( true );
				iframeClone.removeAttribute( 'security' );
				source.parentNode.replaceChild( iframeClone, source );
			}
		}
	}

	if ( supportedBrowser ) {
		window.addEventListener( 'message', window.wp.receiveEmbedMessage, false );
		document.addEventListener( 'DOMContentLoaded', onLoad, false );
		window.addEventListener( 'load', onLoad, false );
	}
})( window, document );
;
"use strict";

var icl_lang = icl_vars.current_language;
var icl_home = icl_vars.icl_home;

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }  
}
;
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
;
// Utility functions for parsing and handling shortcodes in JavaScript.

// Ensure the global `wp` object exists.
window.wp = window.wp || {};

(function(){
	wp.shortcode = {
		// ### Find the next matching shortcode
		//
		// Given a shortcode `tag`, a block of `text`, and an optional starting
		// `index`, returns the next matching shortcode or `undefined`.
		//
		// Shortcodes are formatted as an object that contains the match
		// `content`, the matching `index`, and the parsed `shortcode` object.
		next: function( tag, text, index ) {
			var re = wp.shortcode.regexp( tag ),
				match, result;

			re.lastIndex = index || 0;
			match = re.exec( text );

			if ( ! match ) {
				return;
			}

			// If we matched an escaped shortcode, try again.
			if ( '[' === match[1] && ']' === match[7] ) {
				return wp.shortcode.next( tag, text, re.lastIndex );
			}

			result = {
				index:     match.index,
				content:   match[0],
				shortcode: wp.shortcode.fromMatch( match )
			};

			// If we matched a leading `[`, strip it from the match
			// and increment the index accordingly.
			if ( match[1] ) {
				result.content = result.content.slice( 1 );
				result.index++;
			}

			// If we matched a trailing `]`, strip it from the match.
			if ( match[7] ) {
				result.content = result.content.slice( 0, -1 );
			}

			return result;
		},

		// ### Replace matching shortcodes in a block of text
		//
		// Accepts a shortcode `tag`, content `text` to scan, and a `callback`
		// to process the shortcode matches and return a replacement string.
		// Returns the `text` with all shortcodes replaced.
		//
		// Shortcode matches are objects that contain the shortcode `tag`,
		// a shortcode `attrs` object, the `content` between shortcode tags,
		// and a boolean flag to indicate if the match was a `single` tag.
		replace: function( tag, text, callback ) {
			return text.replace( wp.shortcode.regexp( tag ), function( match, left, tag, attrs, slash, content, closing, right ) {
				// If both extra brackets exist, the shortcode has been
				// properly escaped.
				if ( left === '[' && right === ']' ) {
					return match;
				}

				// Create the match object and pass it through the callback.
				var result = callback( wp.shortcode.fromMatch( arguments ) );

				// Make sure to return any of the extra brackets if they
				// weren't used to escape the shortcode.
				return result ? left + result + right : match;
			});
		},

		// ### Generate a string from shortcode parameters
		//
		// Creates a `wp.shortcode` instance and returns a string.
		//
		// Accepts the same `options` as the `wp.shortcode()` constructor,
		// containing a `tag` string, a string or object of `attrs`, a boolean
		// indicating whether to format the shortcode using a `single` tag, and a
		// `content` string.
		string: function( options ) {
			return new wp.shortcode( options ).string();
		},

		// ### Generate a RegExp to identify a shortcode
		//
		// The base regex is functionally equivalent to the one found in
		// `get_shortcode_regex()` in `wp-includes/shortcodes.php`.
		//
		// Capture groups:
		//
		// 1. An extra `[` to allow for escaping shortcodes with double `[[]]`
		// 2. The shortcode name
		// 3. The shortcode argument list
		// 4. The self closing `/`
		// 5. The content of a shortcode when it wraps some content.
		// 6. The closing tag.
		// 7. An extra `]` to allow for escaping shortcodes with double `[[]]`
		regexp: _.memoize( function( tag ) {
			return new RegExp( '\\[(\\[?)(' + tag + ')(?![\\w-])([^\\]\\/]*(?:\\/(?!\\])[^\\]\\/]*)*?)(?:(\\/)\\]|\\](?:([^\\[]*(?:\\[(?!\\/\\2\\])[^\\[]*)*)(\\[\\/\\2\\]))?)(\\]?)', 'g' );
		}),


		// ### Parse shortcode attributes
		//
		// Shortcodes accept many types of attributes. These can chiefly be
		// divided into named and numeric attributes:
		//
		// Named attributes are assigned on a key/value basis, while numeric
		// attributes are treated as an array.
		//
		// Named attributes can be formatted as either `name="value"`,
		// `name='value'`, or `name=value`. Numeric attributes can be formatted
		// as `"value"` or just `value`.
		attrs: _.memoize( function( text ) {
			var named   = {},
				numeric = [],
				pattern, match;

			// This regular expression is reused from `shortcode_parse_atts()`
			// in `wp-includes/shortcodes.php`.
			//
			// Capture groups:
			//
			// 1. An attribute name, that corresponds to...
			// 2. a value in double quotes.
			// 3. An attribute name, that corresponds to...
			// 4. a value in single quotes.
			// 5. An attribute name, that corresponds to...
			// 6. an unquoted value.
			// 7. A numeric attribute in double quotes.
			// 8. An unquoted numeric attribute.
			pattern = /([\w-]+)\s*=\s*"([^"]*)"(?:\s|$)|([\w-]+)\s*=\s*'([^']*)'(?:\s|$)|([\w-]+)\s*=\s*([^\s'"]+)(?:\s|$)|"([^"]*)"(?:\s|$)|(\S+)(?:\s|$)/g;

			// Map zero-width spaces to actual spaces.
			text = text.replace( /[\u00a0\u200b]/g, ' ' );

			// Match and normalize attributes.
			while ( (match = pattern.exec( text )) ) {
				if ( match[1] ) {
					named[ match[1].toLowerCase() ] = match[2];
				} else if ( match[3] ) {
					named[ match[3].toLowerCase() ] = match[4];
				} else if ( match[5] ) {
					named[ match[5].toLowerCase() ] = match[6];
				} else if ( match[7] ) {
					numeric.push( match[7] );
				} else if ( match[8] ) {
					numeric.push( match[8] );
				}
			}

			return {
				named:   named,
				numeric: numeric
			};
		}),

		// ### Generate a Shortcode Object from a RegExp match
		// Accepts a `match` object from calling `regexp.exec()` on a `RegExp`
		// generated by `wp.shortcode.regexp()`. `match` can also be set to the
		// `arguments` from a callback passed to `regexp.replace()`.
		fromMatch: function( match ) {
			var type;

			if ( match[4] ) {
				type = 'self-closing';
			} else if ( match[6] ) {
				type = 'closed';
			} else {
				type = 'single';
			}

			return new wp.shortcode({
				tag:     match[2],
				attrs:   match[3],
				type:    type,
				content: match[5]
			});
		}
	};


	// Shortcode Objects
	// -----------------
	//
	// Shortcode objects are generated automatically when using the main
	// `wp.shortcode` methods: `next()`, `replace()`, and `string()`.
	//
	// To access a raw representation of a shortcode, pass an `options` object,
	// containing a `tag` string, a string or object of `attrs`, a string
	// indicating the `type` of the shortcode ('single', 'self-closing', or
	// 'closed'), and a `content` string.
	wp.shortcode = _.extend( function( options ) {
		_.extend( this, _.pick( options || {}, 'tag', 'attrs', 'type', 'content' ) );

		var attrs = this.attrs;

		// Ensure we have a correctly formatted `attrs` object.
		this.attrs = {
			named:   {},
			numeric: []
		};

		if ( ! attrs ) {
			return;
		}

		// Parse a string of attributes.
		if ( _.isString( attrs ) ) {
			this.attrs = wp.shortcode.attrs( attrs );

		// Identify a correctly formatted `attrs` object.
		} else if ( _.isEqual( _.keys( attrs ), [ 'named', 'numeric' ] ) ) {
			this.attrs = attrs;

		// Handle a flat object of attributes.
		} else {
			_.each( options.attrs, function( value, key ) {
				this.set( key, value );
			}, this );
		}
	}, wp.shortcode );

	_.extend( wp.shortcode.prototype, {
		// ### Get a shortcode attribute
		//
		// Automatically detects whether `attr` is named or numeric and routes
		// it accordingly.
		get: function( attr ) {
			return this.attrs[ _.isNumber( attr ) ? 'numeric' : 'named' ][ attr ];
		},

		// ### Set a shortcode attribute
		//
		// Automatically detects whether `attr` is named or numeric and routes
		// it accordingly.
		set: function( attr, value ) {
			this.attrs[ _.isNumber( attr ) ? 'numeric' : 'named' ][ attr ] = value;
			return this;
		},

		// ### Transform the shortcode match into a string
		string: function() {
			var text    = '[' + this.tag;

			_.each( this.attrs.numeric, function( value ) {
				if ( /\s/.test( value ) ) {
					text += ' "' + value + '"';
				} else {
					text += ' ' + value;
				}
			});

			_.each( this.attrs.named, function( value, name ) {
				text += ' ' + name + '="' + value + '"';
			});

			// If the tag is marked as `single` or `self-closing`, close the
			// tag and ignore any additional content.
			if ( 'single' === this.type ) {
				return text + ']';
			} else if ( 'self-closing' === this.type ) {
				return text + ' /]';
			}

			// Complete the opening tag.
			text += ']';

			if ( this.content ) {
				text += this.content;
			}

			// Add the closing tag.
			return text + '[/' + this.tag + ']';
		}
	});
}());

// HTML utility functions
// ----------------------
//
// Experimental. These functions may change or be removed in the future.
(function(){
	wp.html = _.extend( wp.html || {}, {
		// ### Parse HTML attributes.
		//
		// Converts `content` to a set of parsed HTML attributes.
		// Utilizes `wp.shortcode.attrs( content )`, which is a valid superset of
		// the HTML attribute specification. Reformats the attributes into an
		// object that contains the `attrs` with `key:value` mapping, and a record
		// of the attributes that were entered using `empty` attribute syntax (i.e.
		// with no value).
		attrs: function( content ) {
			var result, attrs;

			// If `content` ends in a slash, strip it.
			if ( '/' === content[ content.length - 1 ] ) {
				content = content.slice( 0, -1 );
			}

			result = wp.shortcode.attrs( content );
			attrs  = result.named;

			_.each( result.numeric, function( key ) {
				if ( /\s/.test( key ) ) {
					return;
				}

				attrs[ key ] = '';
			});

			return attrs;
		},

		// ### Convert an HTML-representation of an object to a string.
		string: function( options ) {
			var text = '<' + options.tag,
				content = options.content || '';

			_.each( options.attrs, function( value, attr ) {
				text += ' ' + attr;

				// Convert boolean values to strings.
				if ( _.isBoolean( value ) ) {
					value = value ? 'true' : 'false';
				}

				text += '="' + value + '"';
			});

			// Return the result if it is a self-closing tag.
			if ( options.single ) {
				return text + ' />';
			}

			// Complete the opening tag.
			text += '>';

			// If `content` is an object, recursively call this function.
			text += _.isObject( content ) ? wp.html.string( content ) : content;

			return text + '</' + options.tag + '>';
		}
	});
}());
;
/* global userSettings */
/* exported getUserSetting, setUserSetting, deleteUserSetting */
// utility functions

var wpCookies = {
// The following functions are from Cookie.js class in TinyMCE 3, Moxiecode, used under LGPL.

	each: function( obj, cb, scope ) {
		var n, l;

		if ( ! obj ) {
			return 0;
		}

		scope = scope || obj;

		if ( typeof( obj.length ) !== 'undefined' ) {
			for ( n = 0, l = obj.length; n < l; n++ ) {
				if ( cb.call( scope, obj[n], n, obj ) === false ) {
					return 0;
				}
			}
		} else {
			for ( n in obj ) {
				if ( obj.hasOwnProperty(n) ) {
					if ( cb.call( scope, obj[n], n, obj ) === false ) {
						return 0;
					}
				}
			}
		}
		return 1;
	},

	/**
	 * Get a multi-values cookie.
	 * Returns a JS object with the name: 'value' pairs.
	 */
	getHash: function( name ) {
		var cookie = this.get( name ), values;

		if ( cookie ) {
			this.each( cookie.split('&'), function( pair ) {
				pair = pair.split('=');
				values = values || {};
				values[pair[0]] = pair[1];
			});
		}

		return values;
	},

	/**
	 * Set a multi-values cookie.
	 *
	 * 'values_obj' is the JS object that is stored. It is encoded as URI in wpCookies.set().
	 */
	setHash: function( name, values_obj, expires, path, domain, secure ) {
		var str = '';

		this.each( values_obj, function( val, key ) {
			str += ( ! str ? '' : '&' ) + key + '=' + val;
		});

		this.set( name, str, expires, path, domain, secure );
	},

	/**
	 * Get a cookie.
	 */
	get: function( name ) {
		var e, b,
			cookie = document.cookie,
			p = name + '=';

		if ( ! cookie ) {
			return;
		}

		b = cookie.indexOf( '; ' + p );

		if ( b === -1 ) {
			b = cookie.indexOf(p);

			if ( b !== 0 ) {
				return null;
			}
		} else {
			b += 2;
		}

		e = cookie.indexOf( ';', b );

		if ( e === -1 ) {
			e = cookie.length;
		}

		return decodeURIComponent( cookie.substring( b + p.length, e ) );
	},

	/**
	 * Set a cookie.
	 *
	 * The 'expires' arg can be either a JS Date() object set to the expiration date (back-compat)
	 * or the number of seconds until expiration
	 */
	set: function( name, value, expires, path, domain, secure ) {
		var d = new Date();

		if ( typeof( expires ) === 'object' && expires.toGMTString ) {
			expires = expires.toGMTString();
		} else if ( parseInt( expires, 10 ) ) {
			d.setTime( d.getTime() + ( parseInt( expires, 10 ) * 1000 ) ); // time must be in milliseconds
			expires = d.toGMTString();
		} else {
			expires = '';
		}

		document.cookie = name + '=' + encodeURIComponent( value ) +
			( expires ? '; expires=' + expires : '' ) +
			( path    ? '; path=' + path       : '' ) +
			( domain  ? '; domain=' + domain   : '' ) +
			( secure  ? '; secure'             : '' );
	},

	/**
	 * Remove a cookie.
	 *
	 * This is done by setting it to an empty value and setting the expiration time in the past.
	 */
	remove: function( name, path, domain, secure ) {
		this.set( name, '', -1000, path, domain, secure );
	}
};

// Returns the value as string. Second arg or empty string is returned when value is not set.
function getUserSetting( name, def ) {
	var settings = getAllUserSettings();

	if ( settings.hasOwnProperty( name ) ) {
		return settings[name];
	}

	if ( typeof def !== 'undefined' ) {
		return def;
	}

	return '';
}

// Both name and value must be only ASCII letters, numbers or underscore
// and the shorter, the better (cookies can store maximum 4KB). Not suitable to store text.
// The value is converted and stored as string.
function setUserSetting( name, value, _del ) {
	if ( 'object' !== typeof userSettings ) {
		return false;
	}

	var uid = userSettings.uid,
		settings = wpCookies.getHash( 'wp-settings-' + uid ),
		path = userSettings.url,
		secure = !! userSettings.secure;

	name = name.toString().replace( /[^A-Za-z0-9_-]/g, '' );

	if ( typeof value === 'number' ) {
		value = parseInt( value, 10 );
	} else {
		value = value.toString().replace( /[^A-Za-z0-9_-]/g, '' );
	}

	settings = settings || {};

	if ( _del ) {
		delete settings[name];
	} else {
		settings[name] = value;
	}

	wpCookies.setHash( 'wp-settings-' + uid, settings, 31536000, path, '', secure );
	wpCookies.set( 'wp-settings-time-' + uid, userSettings.time, 31536000, path, '', secure );

	return name;
}

function deleteUserSetting( name ) {
	return setUserSetting( name, '', 1 );
}

// Returns all settings as js object.
function getAllUserSettings() {
	if ( 'object' !== typeof userSettings ) {
		return {};
	}

	return wpCookies.getHash( 'wp-settings-' + userSettings.uid ) || {};
}
;
(function(t){var e=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.3.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],o(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],o(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var h=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var o=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return l(t);if(i.isString(t))return function(e){return e.get(t)};return t};var l=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var u=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,h;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(h=i.keys(r);a<h.length;a++){e=f(t,e,h[a],r[h[a]],s)}}else if(r&&c.test(r)){for(h=r.split(c);a<h.length;a++){e=t(e,h[a],n,s)}}else{e=t(e,r,n,s)}return e};u.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};u.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var h=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:h,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,h=r.listening;if(h)h.count++;n.push({callback:i,context:s,ctx:s||a,listening:h})}return t};u.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};u.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var h=n[s[a]];if(!h)break;h.obj.off(e,r,this)}return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var h=n.context,o=n.listeners;if(!e&&!r&&!h){var l=i.keys(o);for(;s<l.length;s++){a=o[l[s]];delete o[a.id];delete a.listeningTo[a.objId]}return}var u=e?[e]:i.keys(t);for(;s<u.length;s++){e=u[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||h&&h!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete o[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}return t};u.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));if(typeof t==="string"&&r==null)e=void 0;return this.on(n,e,r)};u.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};u.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,h);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};u.bind=u.on;u.unbind=u.off;i.extend(e,u);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};var n=i.result(this,"defaults");r=i.defaults(i.extend({},n,r),n);this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,u,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var h=[];var o=this._changing;this._changing=true;if(!o){this._previousAttributes=i.clone(this.attributes);this.changed={}}var l=this.attributes;var u=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(l[f],e))h.push(f);if(!i.isEqual(c[f],e)){u[f]=e}else{delete u[f]}s?delete l[f]:l[f]=e}if(this.idAttribute in n)this.id=this.get(this.idAttribute);if(!a){if(h.length)this._pending=r;for(var d=0;d<h.length;d++){this.trigger("change:"+h[d],this,l[h[d]],r)}}if(o)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};B(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else if(!this._validate(n,r)){return false}var a=this;var h=r.success;var o=this.attributes;r.success=function(t){a.attributes=o;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(h)h.call(r.context,a,t,r);a.trigger("sync",a,t,r)};B(this,r);if(n&&s)this.attributes=i.extend({},o,n);var l=this.isNew()?"create":r.patch?"patch":"update";if(l==="patch"&&!r.attrs)r.attrs=n;var u=this.sync(l,this,r);this.attributes=o;return u},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{B(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};h(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var I=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;var s;for(s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,u,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=this._removeModels(t,e);if(!e.silent&&n.length){e.changes={added:[],merged:[],removed:n};this.trigger("update",this,e)}return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.extend({},w,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n>this.length)n=this.length;if(n<0)n+=this.length+1;var s=[];var a=[];var h=[];var o=[];var l={};var u=e.add;var c=e.merge;var f=e.remove;var d=false;var v=this.comparator&&n==null&&e.sort!==false;var g=i.isString(this.comparator)?this.comparator:null;var p,m;for(m=0;m<t.length;m++){p=t[m];var _=this.get(p);if(_){if(c&&p!==_){var y=this._isModel(p)?p.attributes:p;if(e.parse)y=_.parse(y,e);_.set(y,e);h.push(_);if(v&&!d)d=_.hasChanged(g)}if(!l[_.cid]){l[_.cid]=true;s.push(_)}t[m]=_}else if(u){p=t[m]=this._prepareModel(p,e);if(p){a.push(p);this._addReference(p,e);l[p.cid]=true;s.push(p)}}}if(f){for(m=0;m<this.length;m++){p=this.models[m];if(!l[p.cid])o.push(p)}if(o.length)this._removeModels(o,e)}var b=false;var x=!v&&u&&f;if(s.length&&x){b=this.length!==s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;I(this.models,s,0);this.length=this.models.length}else if(a.length){if(v)d=true;I(this.models,a,n==null?this.length:n);this.length=this.models.length}if(d)this.sort({silent:true});if(!e.silent){for(m=0;m<a.length;m++){if(n!=null)e.index=n+m;p=a[m];p.trigger("add",p,this,e)}if(d||b)this.trigger("sort",this,e);if(a.length||o.length||h.length){e.changes={added:a,removed:o,merged:h};this.trigger("update",this,e)}}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(t.attributes||t)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};B(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;delete this._byId[n.cid];var a=this.modelId(n.attributes);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};h(x,S,"models");var k=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(k.prototype,u,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var h=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(h)return h.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var o=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(o)o.call(n.context,t,e,i)};var l=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,l,n);return l};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,u,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var M=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;N.started=false;i.extend(N.prototype,u,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(M,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");N.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!N.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new N;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);n.prototype=i.create(r.prototype,t);n.prototype.constructor=n;n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=k.extend=N.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var B=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});
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
window.wp = window.wp || {};

(function ($) {
	// Create the WordPress Backbone namespace.
	wp.Backbone = {};


	// wp.Backbone.Subviews
	// --------------------
	//
	// A subview manager.
	wp.Backbone.Subviews = function( view, views ) {
		this.view = view;
		this._views = _.isArray( views ) ? { '': views } : views || {};
	};

	wp.Backbone.Subviews.extend = Backbone.Model.extend;

	_.extend( wp.Backbone.Subviews.prototype, {
		// ### Fetch all of the subviews
		//
		// Returns an array of all subviews.
		all: function() {
			return _.flatten( _.values( this._views ) ); 
		},

		// ### Get a selector's subviews
		//
		// Fetches all subviews that match a given `selector`.
		//
		// If no `selector` is provided, it will grab all subviews attached
		// to the view's root.
		get: function( selector ) {
			selector = selector || '';
			return this._views[ selector ];
		},

		// ### Get a selector's first subview
		//
		// Fetches the first subview that matches a given `selector`.
		//
		// If no `selector` is provided, it will grab the first subview
		// attached to the view's root.
		//
		// Useful when a selector only has one subview at a time.
		first: function( selector ) {
			var views = this.get( selector );
			return views && views.length ? views[0] : null;
		},

		// ### Register subview(s)
		//
		// Registers any number of `views` to a `selector`.
		//
		// When no `selector` is provided, the root selector (the empty string)
		// is used. `views` accepts a `Backbone.View` instance or an array of
		// `Backbone.View` instances.
		//
		// ---
		//
		// Accepts an `options` object, which has a significant effect on the
		// resulting behavior.
		//
		// `options.silent` &ndash; *boolean, `false`*
		// > If `options.silent` is true, no DOM modifications will be made.
		//
		// `options.add` &ndash; *boolean, `false`*
		// > Use `Views.add()` as a shortcut for setting `options.add` to true.
		//
		// > By default, the provided `views` will replace
		// any existing views associated with the selector. If `options.add`
		// is true, the provided `views` will be added to the existing views.
		//
		// `options.at` &ndash; *integer, `undefined`*
		// > When adding, to insert `views` at a specific index, use
		// `options.at`. By default, `views` are added to the end of the array.
		set: function( selector, views, options ) {
			var existing, next;

			if ( ! _.isString( selector ) ) {
				options  = views;
				views    = selector;
				selector = '';
			}

			options  = options || {};
			views    = _.isArray( views ) ? views : [ views ];
			existing = this.get( selector );
			next     = views;

			if ( existing ) {
				if ( options.add ) {
					if ( _.isUndefined( options.at ) ) {
						next = existing.concat( views );
					} else {
						next = existing;
						next.splice.apply( next, [ options.at, 0 ].concat( views ) );
					}
				} else {
					_.each( next, function( view ) {
						view.__detach = true;
					});

					_.each( existing, function( view ) {
						if ( view.__detach )
							view.$el.detach();
						else
							view.remove();
					});

					_.each( next, function( view ) {
						delete view.__detach;
					});
				}
			}

			this._views[ selector ] = next;

			_.each( views, function( subview ) {
				var constructor = subview.Views || wp.Backbone.Subviews,
					subviews = subview.views = subview.views || new constructor( subview );
				subviews.parent   = this.view;
				subviews.selector = selector;
			}, this );

			if ( ! options.silent )
				this._attach( selector, views, _.extend({ ready: this._isReady() }, options ) );

			return this;
		},

		// ### Add subview(s) to existing subviews
		//
		// An alias to `Views.set()`, which defaults `options.add` to true.
		//
		// Adds any number of `views` to a `selector`.
		//
		// When no `selector` is provided, the root selector (the empty string)
		// is used. `views` accepts a `Backbone.View` instance or an array of
		// `Backbone.View` instances.
		//
		// Use `Views.set()` when setting `options.add` to `false`.
		//
		// Accepts an `options` object. By default, provided `views` will be
		// inserted at the end of the array of existing views. To insert
		// `views` at a specific index, use `options.at`. If `options.silent`
		// is true, no DOM modifications will be made.
		//
		// For more information on the `options` object, see `Views.set()`.
		add: function( selector, views, options ) {
			if ( ! _.isString( selector ) ) {
				options  = views;
				views    = selector;
				selector = '';
			}

			return this.set( selector, views, _.extend({ add: true }, options ) );
		},

		// ### Stop tracking subviews
		//
		// Stops tracking `views` registered to a `selector`. If no `views` are
		// set, then all of the `selector`'s subviews will be unregistered and
		// removed.
		//
		// Accepts an `options` object. If `options.silent` is set, `remove`
		// will *not* be triggered on the unregistered views.
		unset: function( selector, views, options ) {
			var existing;

			if ( ! _.isString( selector ) ) {
				options = views;
				views = selector;
				selector = '';
			}

			views = views || [];

			if ( existing = this.get( selector ) ) {
				views = _.isArray( views ) ? views : [ views ];
				this._views[ selector ] = views.length ? _.difference( existing, views ) : [];
			}

			if ( ! options || ! options.silent )
				_.invoke( views, 'remove' );

			return this;
		},

		// ### Detach all subviews
		//
		// Detaches all subviews from the DOM.
		//
		// Helps to preserve all subview events when re-rendering the master
		// view. Used in conjunction with `Views.render()`.
		detach: function() {
			$( _.pluck( this.all(), 'el' ) ).detach();
			return this;
		},

		// ### Render all subviews
		//
		// Renders all subviews. Used in conjunction with `Views.detach()`.
		render: function() {
			var options = {
					ready: this._isReady()
				};

			_.each( this._views, function( views, selector ) {
				this._attach( selector, views, options );
			}, this );

			this.rendered = true;
			return this;
		},

		// ### Remove all subviews
		//
		// Triggers the `remove()` method on all subviews. Detaches the master
		// view from its parent. Resets the internals of the views manager.
		//
		// Accepts an `options` object. If `options.silent` is set, `unset`
		// will *not* be triggered on the master view's parent.
		remove: function( options ) {
			if ( ! options || ! options.silent ) {
				if ( this.parent && this.parent.views )
					this.parent.views.unset( this.selector, this.view, { silent: true });
				delete this.parent;
				delete this.selector;
			}

			_.invoke( this.all(), 'remove' );
			this._views = [];
			return this;
		},

		// ### Replace a selector's subviews
		//
		// By default, sets the `$target` selector's html to the subview `els`.
		//
		// Can be overridden in subclasses.
		replace: function( $target, els ) {
			$target.html( els );
			return this;
		},

		// ### Insert subviews into a selector
		//
		// By default, appends the subview `els` to the end of the `$target`
		// selector. If `options.at` is set, inserts the subview `els` at the
		// provided index.
		//
		// Can be overridden in subclasses.
		insert: function( $target, els, options ) {
			var at = options && options.at,
				$children;

			if ( _.isNumber( at ) && ($children = $target.children()).length > at )
				$children.eq( at ).before( els );
			else
				$target.append( els );

			return this;
		},

		// ### Trigger the ready event
		//
		// **Only use this method if you know what you're doing.**
		// For performance reasons, this method does not check if the view is
		// actually attached to the DOM. It's taking your word for it.
		//
		// Fires the ready event on the current view and all attached subviews.
		ready: function() {
			this.view.trigger('ready');

			// Find all attached subviews, and call ready on them.
			_.chain( this.all() ).map( function( view ) {
				return view.views;
			}).flatten().where({ attached: true }).invoke('ready');
		},

		// #### Internal. Attaches a series of views to a selector.
		//
		// Checks to see if a matching selector exists, renders the views,
		// performs the proper DOM operation, and then checks if the view is
		// attached to the document.
		_attach: function( selector, views, options ) {
			var $selector = selector ? this.view.$( selector ) : this.view.$el,
				managers;

			// Check if we found a location to attach the views.
			if ( ! $selector.length )
				return this;

			managers = _.chain( views ).pluck('views').flatten().value();

			// Render the views if necessary.
			_.each( managers, function( manager ) {
				if ( manager.rendered )
					return;

				manager.view.render();
				manager.rendered = true;
			}, this );

			// Insert or replace the views.
			this[ options.add ? 'insert' : 'replace' ]( $selector, _.pluck( views, 'el' ), options );

			// Set attached and trigger ready if the current view is already
			// attached to the DOM.
			_.each( managers, function( manager ) {
				manager.attached = true;

				if ( options.ready )
					manager.ready();
			}, this );

			return this;
		},

		// #### Internal. Checks if the current view is in the DOM.
		_isReady: function() {
			var node = this.view.el;
			while ( node ) {
				if ( node === document.body )
					return true;
				node = node.parentNode;
			}

			return false;
		}
	});


	// wp.Backbone.View
	// ----------------
	//
	// The base view class.
	wp.Backbone.View = Backbone.View.extend({
		// The constructor for the `Views` manager.
		Subviews: wp.Backbone.Subviews,

		constructor: function( options ) {
			this.views = new this.Subviews( this, this.views );
			this.on( 'ready', this.ready, this );

			this.options = options || {};

			Backbone.View.apply( this, arguments );
		},

		remove: function() {
			var result = Backbone.View.prototype.remove.apply( this, arguments );

			// Recursively remove child views.
			if ( this.views )
				this.views.remove();

			return result;
		},

		render: function() {
			var options;

			if ( this.prepare )
				options = this.prepare();

			this.views.detach();

			if ( this.template ) {
				options = options || {};
				this.trigger( 'prepare', options );
				this.$el.html( this.template( options ) );
			}

			this.views.render();
			return this;
		},

		prepare: function() {
			return this.options;
		},

		ready: function() {}
	});
}(jQuery));
;
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var $ = jQuery,
	Attachment, Attachments, l10n, media;

window.wp = window.wp || {};

/**
 * Create and return a media frame.
 *
 * Handles the default media experience.
 *
 * @param  {object} attributes The properties passed to the main media controller.
 * @return {wp.media.view.MediaFrame} A media workflow.
 */
media = wp.media = function( attributes ) {
	var MediaFrame = media.view.MediaFrame,
		frame;

	if ( ! MediaFrame ) {
		return;
	}

	attributes = _.defaults( attributes || {}, {
		frame: 'select'
	});

	if ( 'select' === attributes.frame && MediaFrame.Select ) {
		frame = new MediaFrame.Select( attributes );
	} else if ( 'post' === attributes.frame && MediaFrame.Post ) {
		frame = new MediaFrame.Post( attributes );
	} else if ( 'manage' === attributes.frame && MediaFrame.Manage ) {
		frame = new MediaFrame.Manage( attributes );
	} else if ( 'image' === attributes.frame && MediaFrame.ImageDetails ) {
		frame = new MediaFrame.ImageDetails( attributes );
	} else if ( 'audio' === attributes.frame && MediaFrame.AudioDetails ) {
		frame = new MediaFrame.AudioDetails( attributes );
	} else if ( 'video' === attributes.frame && MediaFrame.VideoDetails ) {
		frame = new MediaFrame.VideoDetails( attributes );
	} else if ( 'edit-attachments' === attributes.frame && MediaFrame.EditAttachments ) {
		frame = new MediaFrame.EditAttachments( attributes );
	}

	delete attributes.frame;

	media.frame = frame;

	return frame;
};

_.extend( media, { model: {}, view: {}, controller: {}, frames: {} });

// Link any localized strings.
l10n = media.model.l10n = window._wpMediaModelsL10n || {};

// Link any settings.
media.model.settings = l10n.settings || {};
delete l10n.settings;

Attachment = media.model.Attachment = require( './models/attachment.js' );
Attachments = media.model.Attachments = require( './models/attachments.js' );

media.model.Query = require( './models/query.js' );
media.model.PostImage = require( './models/post-image.js' );
media.model.Selection = require( './models/selection.js' );

/**
 * ========================================================================
 * UTILITIES
 * ========================================================================
 */

/**
 * A basic equality comparator for Backbone models.
 *
 * Used to order models within a collection - @see wp.media.model.Attachments.comparator().
 *
 * @param  {mixed}  a  The primary parameter to compare.
 * @param  {mixed}  b  The primary parameter to compare.
 * @param  {string} ac The fallback parameter to compare, a's cid.
 * @param  {string} bc The fallback parameter to compare, b's cid.
 * @return {number}    -1: a should come before b.
 *                      0: a and b are of the same rank.
 *                      1: b should come before a.
 */
media.compare = function( a, b, ac, bc ) {
	if ( _.isEqual( a, b ) ) {
		return ac === bc ? 0 : (ac > bc ? -1 : 1);
	} else {
		return a > b ? -1 : 1;
	}
};

_.extend( media, {
	/**
	 * media.template( id )
	 *
	 * Fetch a JavaScript template for an id, and return a templating function for it.
	 *
	 * See wp.template() in `wp-includes/js/wp-util.js`.
	 *
	 * @borrows wp.template as template
	 */
	template: wp.template,

	/**
	 * media.post( [action], [data] )
	 *
	 * Sends a POST request to WordPress.
	 * See wp.ajax.post() in `wp-includes/js/wp-util.js`.
	 *
	 * @borrows wp.ajax.post as post
	 */
	post: wp.ajax.post,

	/**
	 * media.ajax( [action], [options] )
	 *
	 * Sends an XHR request to WordPress.
	 * See wp.ajax.send() in `wp-includes/js/wp-util.js`.
	 *
	 * @borrows wp.ajax.send as ajax
	 */
	ajax: wp.ajax.send,

	/**
	 * Scales a set of dimensions to fit within bounding dimensions.
	 *
	 * @param {Object} dimensions
	 * @returns {Object}
	 */
	fit: function( dimensions ) {
		var width     = dimensions.width,
			height    = dimensions.height,
			maxWidth  = dimensions.maxWidth,
			maxHeight = dimensions.maxHeight,
			constraint;

		// Compare ratios between the two values to determine which
		// max to constrain by. If a max value doesn't exist, then the
		// opposite side is the constraint.
		if ( ! _.isUndefined( maxWidth ) && ! _.isUndefined( maxHeight ) ) {
			constraint = ( width / height > maxWidth / maxHeight ) ? 'width' : 'height';
		} else if ( _.isUndefined( maxHeight ) ) {
			constraint = 'width';
		} else if (  _.isUndefined( maxWidth ) && height > maxHeight ) {
			constraint = 'height';
		}

		// If the value of the constrained side is larger than the max,
		// then scale the values. Otherwise return the originals; they fit.
		if ( 'width' === constraint && width > maxWidth ) {
			return {
				width : maxWidth,
				height: Math.round( maxWidth * height / width )
			};
		} else if ( 'height' === constraint && height > maxHeight ) {
			return {
				width : Math.round( maxHeight * width / height ),
				height: maxHeight
			};
		} else {
			return {
				width : width,
				height: height
			};
		}
	},
	/**
	 * Truncates a string by injecting an ellipsis into the middle.
	 * Useful for filenames.
	 *
	 * @param {String} string
	 * @param {Number} [length=30]
	 * @param {String} [replacement=&hellip;]
	 * @returns {String} The string, unless length is greater than string.length.
	 */
	truncate: function( string, length, replacement ) {
		length = length || 30;
		replacement = replacement || '&hellip;';

		if ( string.length <= length ) {
			return string;
		}

		return string.substr( 0, length / 2 ) + replacement + string.substr( -1 * length / 2 );
	}
});

/**
 * ========================================================================
 * MODELS
 * ========================================================================
 */
/**
 * wp.media.attachment
 *
 * @static
 * @param {String} id A string used to identify a model.
 * @returns {wp.media.model.Attachment}
 */
media.attachment = function( id ) {
	return Attachment.get( id );
};

/**
 * A collection of all attachments that have been fetched from the server.
 *
 * @static
 * @member {wp.media.model.Attachments}
 */
Attachments.all = new Attachments();

/**
 * wp.media.query
 *
 * Shorthand for creating a new Attachments Query.
 *
 * @param {object} [props]
 * @returns {wp.media.model.Attachments}
 */
media.query = function( props ) {
	return new Attachments( null, {
		props: _.extend( _.defaults( props || {}, { orderby: 'date' } ), { query: true } )
	});
};

// Clean up. Prevents mobile browsers caching
$(window).on('unload', function(){
	window.wp = null;
});

},{"./models/attachment.js":2,"./models/attachments.js":3,"./models/post-image.js":4,"./models/query.js":5,"./models/selection.js":6}],2:[function(require,module,exports){
/**
 * wp.media.model.Attachment
 *
 * @class
 * @augments Backbone.Model
 */
var $ = Backbone.$,
	Attachment;

Attachment = Backbone.Model.extend({
	/**
	 * Triggered when attachment details change
	 * Overrides Backbone.Model.sync
	 *
	 * @param {string} method
	 * @param {wp.media.model.Attachment} model
	 * @param {Object} [options={}]
	 *
	 * @returns {Promise}
	 */
	sync: function( method, model, options ) {
		// If the attachment does not yet have an `id`, return an instantly
		// rejected promise. Otherwise, all of our requests will fail.
		if ( _.isUndefined( this.id ) ) {
			return $.Deferred().rejectWith( this ).promise();
		}

		// Overload the `read` request so Attachment.fetch() functions correctly.
		if ( 'read' === method ) {
			options = options || {};
			options.context = this;
			options.data = _.extend( options.data || {}, {
				action: 'get-attachment',
				id: this.id
			});
			return wp.media.ajax( options );

		// Overload the `update` request so properties can be saved.
		} else if ( 'update' === method ) {
			// If we do not have the necessary nonce, fail immeditately.
			if ( ! this.get('nonces') || ! this.get('nonces').update ) {
				return $.Deferred().rejectWith( this ).promise();
			}

			options = options || {};
			options.context = this;

			// Set the action and ID.
			options.data = _.extend( options.data || {}, {
				action:  'save-attachment',
				id:      this.id,
				nonce:   this.get('nonces').update,
				post_id: wp.media.model.settings.post.id
			});

			// Record the values of the changed attributes.
			if ( model.hasChanged() ) {
				options.data.changes = {};

				_.each( model.changed, function( value, key ) {
					options.data.changes[ key ] = this.get( key );
				}, this );
			}

			return wp.media.ajax( options );

		// Overload the `delete` request so attachments can be removed.
		// This will permanently delete an attachment.
		} else if ( 'delete' === method ) {
			options = options || {};

			if ( ! options.wait ) {
				this.destroyed = true;
			}

			options.context = this;
			options.data = _.extend( options.data || {}, {
				action:   'delete-post',
				id:       this.id,
				_wpnonce: this.get('nonces')['delete']
			});

			return wp.media.ajax( options ).done( function() {
				this.destroyed = true;
			}).fail( function() {
				this.destroyed = false;
			});

		// Otherwise, fall back to `Backbone.sync()`.
		} else {
			/**
			 * Call `sync` directly on Backbone.Model
			 */
			return Backbone.Model.prototype.sync.apply( this, arguments );
		}
	},
	/**
	 * Convert date strings into Date objects.
	 *
	 * @param {Object} resp The raw response object, typically returned by fetch()
	 * @returns {Object} The modified response object, which is the attributes hash
	 *    to be set on the model.
	 */
	parse: function( resp ) {
		if ( ! resp ) {
			return resp;
		}

		resp.date = new Date( resp.date );
		resp.modified = new Date( resp.modified );
		return resp;
	},
	/**
	 * @param {Object} data The properties to be saved.
	 * @param {Object} options Sync options. e.g. patch, wait, success, error.
	 *
	 * @this Backbone.Model
	 *
	 * @returns {Promise}
	 */
	saveCompat: function( data, options ) {
		var model = this;

		// If we do not have the necessary nonce, fail immeditately.
		if ( ! this.get('nonces') || ! this.get('nonces').update ) {
			return $.Deferred().rejectWith( this ).promise();
		}

		return wp.media.post( 'save-attachment-compat', _.defaults({
			id:      this.id,
			nonce:   this.get('nonces').update,
			post_id: wp.media.model.settings.post.id
		}, data ) ).done( function( resp, status, xhr ) {
			model.set( model.parse( resp, xhr ), options );
		});
	}
}, {
	/**
	 * Create a new model on the static 'all' attachments collection and return it.
	 *
	 * @static
	 * @param {Object} attrs
	 * @returns {wp.media.model.Attachment}
	 */
	create: function( attrs ) {
		var Attachments = wp.media.model.Attachments;
		return Attachments.all.push( attrs );
	},
	/**
	 * Create a new model on the static 'all' attachments collection and return it.
	 *
	 * If this function has already been called for the id,
	 * it returns the specified attachment.
	 *
	 * @static
	 * @param {string} id A string used to identify a model.
	 * @param {Backbone.Model|undefined} attachment
	 * @returns {wp.media.model.Attachment}
	 */
	get: _.memoize( function( id, attachment ) {
		var Attachments = wp.media.model.Attachments;
		return Attachments.all.push( attachment || { id: id } );
	})
});

module.exports = Attachment;

},{}],3:[function(require,module,exports){
/**
 * wp.media.model.Attachments
 *
 * A collection of attachments.
 *
 * This collection has no persistence with the server without supplying
 * 'options.props.query = true', which will mirror the collection
 * to an Attachments Query collection - @see wp.media.model.Attachments.mirror().
 *
 * @class
 * @augments Backbone.Collection
 *
 * @param {array}  [models]                Models to initialize with the collection.
 * @param {object} [options]               Options hash for the collection.
 * @param {string} [options.props]         Options hash for the initial query properties.
 * @param {string} [options.props.order]   Initial order (ASC or DESC) for the collection.
 * @param {string} [options.props.orderby] Initial attribute key to order the collection by.
 * @param {string} [options.props.query]   Whether the collection is linked to an attachments query.
 * @param {string} [options.observe]
 * @param {string} [options.filters]
 *
 */
var Attachments = Backbone.Collection.extend({
	/**
	 * @type {wp.media.model.Attachment}
	 */
	model: wp.media.model.Attachment,
	/**
	 * @param {Array} [models=[]] Array of models used to populate the collection.
	 * @param {Object} [options={}]
	 */
	initialize: function( models, options ) {
		options = options || {};

		this.props   = new Backbone.Model();
		this.filters = options.filters || {};

		// Bind default `change` events to the `props` model.
		this.props.on( 'change', this._changeFilteredProps, this );

		this.props.on( 'change:order',   this._changeOrder,   this );
		this.props.on( 'change:orderby', this._changeOrderby, this );
		this.props.on( 'change:query',   this._changeQuery,   this );

		this.props.set( _.defaults( options.props || {} ) );

		if ( options.observe ) {
			this.observe( options.observe );
		}
	},
	/**
	 * Sort the collection when the order attribute changes.
	 *
	 * @access private
	 */
	_changeOrder: function() {
		if ( this.comparator ) {
			this.sort();
		}
	},
	/**
	 * Set the default comparator only when the `orderby` property is set.
	 *
	 * @access private
	 *
	 * @param {Backbone.Model} model
	 * @param {string} orderby
	 */
	_changeOrderby: function( model, orderby ) {
		// If a different comparator is defined, bail.
		if ( this.comparator && this.comparator !== Attachments.comparator ) {
			return;
		}

		if ( orderby && 'post__in' !== orderby ) {
			this.comparator = Attachments.comparator;
		} else {
			delete this.comparator;
		}
	},
	/**
	 * If the `query` property is set to true, query the server using
	 * the `props` values, and sync the results to this collection.
	 *
	 * @access private
	 *
	 * @param {Backbone.Model} model
	 * @param {Boolean} query
	 */
	_changeQuery: function( model, query ) {
		if ( query ) {
			this.props.on( 'change', this._requery, this );
			this._requery();
		} else {
			this.props.off( 'change', this._requery, this );
		}
	},
	/**
	 * @access private
	 *
	 * @param {Backbone.Model} model
	 */
	_changeFilteredProps: function( model ) {
		// If this is a query, updating the collection will be handled by
		// `this._requery()`.
		if ( this.props.get('query') ) {
			return;
		}

		var changed = _.chain( model.changed ).map( function( t, prop ) {
			var filter = Attachments.filters[ prop ],
				term = model.get( prop );

			if ( ! filter ) {
				return;
			}

			if ( term && ! this.filters[ prop ] ) {
				this.filters[ prop ] = filter;
			} else if ( ! term && this.filters[ prop ] === filter ) {
				delete this.filters[ prop ];
			} else {
				return;
			}

			// Record the change.
			return true;
		}, this ).any().value();

		if ( ! changed ) {
			return;
		}

		// If no `Attachments` model is provided to source the searches
		// from, then automatically generate a source from the existing
		// models.
		if ( ! this._source ) {
			this._source = new Attachments( this.models );
		}

		this.reset( this._source.filter( this.validator, this ) );
	},

	validateDestroyed: false,
	/**
	 * Checks whether an attachment is valid.
	 *
	 * @param {wp.media.model.Attachment} attachment
	 * @returns {Boolean}
	 */
	validator: function( attachment ) {
		if ( ! this.validateDestroyed && attachment.destroyed ) {
			return false;
		}
		return _.all( this.filters, function( filter ) {
			return !! filter.call( this, attachment );
		}, this );
	},
	/**
	 * Add or remove an attachment to the collection depending on its validity.
	 *
	 * @param {wp.media.model.Attachment} attachment
	 * @param {Object} options
	 * @returns {wp.media.model.Attachments} Returns itself to allow chaining
	 */
	validate: function( attachment, options ) {
		var valid = this.validator( attachment ),
			hasAttachment = !! this.get( attachment.cid );

		if ( ! valid && hasAttachment ) {
			this.remove( attachment, options );
		} else if ( valid && ! hasAttachment ) {
			this.add( attachment, options );
		}

		return this;
	},

	/**
	 * Add or remove all attachments from another collection depending on each one's validity.
	 *
	 * @param {wp.media.model.Attachments} attachments
	 * @param {object} [options={}]
	 *
	 * @fires wp.media.model.Attachments#reset
	 *
	 * @returns {wp.media.model.Attachments} Returns itself to allow chaining
	 */
	validateAll: function( attachments, options ) {
		options = options || {};

		_.each( attachments.models, function( attachment ) {
			this.validate( attachment, { silent: true });
		}, this );

		if ( ! options.silent ) {
			this.trigger( 'reset', this, options );
		}
		return this;
	},
	/**
	 * Start observing another attachments collection change events
	 * and replicate them on this collection.
	 *
	 * @param {wp.media.model.Attachments} The attachments collection to observe.
	 * @returns {wp.media.model.Attachments} Returns itself to allow chaining.
	 */
	observe: function( attachments ) {
		this.observers = this.observers || [];
		this.observers.push( attachments );

		attachments.on( 'add change remove', this._validateHandler, this );
		attachments.on( 'reset', this._validateAllHandler, this );
		this.validateAll( attachments );
		return this;
	},
	/**
	 * Stop replicating collection change events from another attachments collection.
	 *
	 * @param {wp.media.model.Attachments} The attachments collection to stop observing.
	 * @returns {wp.media.model.Attachments} Returns itself to allow chaining
	 */
	unobserve: function( attachments ) {
		if ( attachments ) {
			attachments.off( null, null, this );
			this.observers = _.without( this.observers, attachments );

		} else {
			_.each( this.observers, function( attachments ) {
				attachments.off( null, null, this );
			}, this );
			delete this.observers;
		}

		return this;
	},
	/**
	 * @access private
	 *
	 * @param {wp.media.model.Attachments} attachment
	 * @param {wp.media.model.Attachments} attachments
	 * @param {Object} options
	 *
	 * @returns {wp.media.model.Attachments} Returns itself to allow chaining
	 */
	_validateHandler: function( attachment, attachments, options ) {
		// If we're not mirroring this `attachments` collection,
		// only retain the `silent` option.
		options = attachments === this.mirroring ? options : {
			silent: options && options.silent
		};

		return this.validate( attachment, options );
	},
	/**
	 * @access private
	 *
	 * @param {wp.media.model.Attachments} attachments
	 * @param {Object} options
	 * @returns {wp.media.model.Attachments} Returns itself to allow chaining
	 */
	_validateAllHandler: function( attachments, options ) {
		return this.validateAll( attachments, options );
	},
	/**
	 * Start mirroring another attachments collection, clearing out any models already
	 * in the collection.
	 *
	 * @param {wp.media.model.Attachments} The attachments collection to mirror.
	 * @returns {wp.media.model.Attachments} Returns itself to allow chaining
	 */
	mirror: function( attachments ) {
		if ( this.mirroring && this.mirroring === attachments ) {
			return this;
		}

		this.unmirror();
		this.mirroring = attachments;

		// Clear the collection silently. A `reset` event will be fired
		// when `observe()` calls `validateAll()`.
		this.reset( [], { silent: true } );
		this.observe( attachments );

		return this;
	},
	/**
	 * Stop mirroring another attachments collection.
	 */
	unmirror: function() {
		if ( ! this.mirroring ) {
			return;
		}

		this.unobserve( this.mirroring );
		delete this.mirroring;
	},
	/**
	 * Retrieve more attachments from the server for the collection.
	 *
	 * Only works if the collection is mirroring a Query Attachments collection,
	 * and forwards to its `more` method. This collection class doesn't have
	 * server persistence by itself.
	 *
	 * @param {object} options
	 * @returns {Promise}
	 */
	more: function( options ) {
		var deferred = jQuery.Deferred(),
			mirroring = this.mirroring,
			attachments = this;

		if ( ! mirroring || ! mirroring.more ) {
			return deferred.resolveWith( this ).promise();
		}
		// If we're mirroring another collection, forward `more` to
		// the mirrored collection. Account for a race condition by
		// checking if we're still mirroring that collection when
		// the request resolves.
		mirroring.more( options ).done( function() {
			if ( this === attachments.mirroring ) {
				deferred.resolveWith( this );
			}
		});

		return deferred.promise();
	},
	/**
	 * Whether there are more attachments that haven't been sync'd from the server
	 * that match the collection's query.
	 *
	 * Only works if the collection is mirroring a Query Attachments collection,
	 * and forwards to its `hasMore` method. This collection class doesn't have
	 * server persistence by itself.
	 *
	 * @returns {boolean}
	 */
	hasMore: function() {
		return this.mirroring ? this.mirroring.hasMore() : false;
	},
	/**
	 * A custom AJAX-response parser.
	 *
	 * See trac ticket #24753
	 *
	 * @param {Object|Array} resp The raw response Object/Array.
	 * @param {Object} xhr
	 * @returns {Array} The array of model attributes to be added to the collection
	 */
	parse: function( resp, xhr ) {
		if ( ! _.isArray( resp ) ) {
			resp = [resp];
		}

		return _.map( resp, function( attrs ) {
			var id, attachment, newAttributes;

			if ( attrs instanceof Backbone.Model ) {
				id = attrs.get( 'id' );
				attrs = attrs.attributes;
			} else {
				id = attrs.id;
			}

			attachment = wp.media.model.Attachment.get( id );
			newAttributes = attachment.parse( attrs, xhr );

			if ( ! _.isEqual( attachment.attributes, newAttributes ) ) {
				attachment.set( newAttributes );
			}

			return attachment;
		});
	},
	/**
	 * If the collection is a query, create and mirror an Attachments Query collection.
	 *
	 * @access private
	 */
	_requery: function( refresh ) {
		var props;
		if ( this.props.get('query') ) {
			props = this.props.toJSON();
			props.cache = ( true !== refresh );
			this.mirror( wp.media.model.Query.get( props ) );
		}
	},
	/**
	 * If this collection is sorted by `menuOrder`, recalculates and saves
	 * the menu order to the database.
	 *
	 * @returns {undefined|Promise}
	 */
	saveMenuOrder: function() {
		if ( 'menuOrder' !== this.props.get('orderby') ) {
			return;
		}

		// Removes any uploading attachments, updates each attachment's
		// menu order, and returns an object with an { id: menuOrder }
		// mapping to pass to the request.
		var attachments = this.chain().filter( function( attachment ) {
			return ! _.isUndefined( attachment.id );
		}).map( function( attachment, index ) {
			// Indices start at 1.
			index = index + 1;
			attachment.set( 'menuOrder', index );
			return [ attachment.id, index ];
		}).object().value();

		if ( _.isEmpty( attachments ) ) {
			return;
		}

		return wp.media.post( 'save-attachment-order', {
			nonce:       wp.media.model.settings.post.nonce,
			post_id:     wp.media.model.settings.post.id,
			attachments: attachments
		});
	}
}, {
	/**
	 * A function to compare two attachment models in an attachments collection.
	 *
	 * Used as the default comparator for instances of wp.media.model.Attachments
	 * and its subclasses. @see wp.media.model.Attachments._changeOrderby().
	 *
	 * @static
	 *
	 * @param {Backbone.Model} a
	 * @param {Backbone.Model} b
	 * @param {Object} options
	 * @returns {Number} -1 if the first model should come before the second,
	 *    0 if they are of the same rank and
	 *    1 if the first model should come after.
	 */
	comparator: function( a, b, options ) {
		var key   = this.props.get('orderby'),
			order = this.props.get('order') || 'DESC',
			ac    = a.cid,
			bc    = b.cid;

		a = a.get( key );
		b = b.get( key );

		if ( 'date' === key || 'modified' === key ) {
			a = a || new Date();
			b = b || new Date();
		}

		// If `options.ties` is set, don't enforce the `cid` tiebreaker.
		if ( options && options.ties ) {
			ac = bc = null;
		}

		return ( 'DESC' === order ) ? wp.media.compare( a, b, ac, bc ) : wp.media.compare( b, a, bc, ac );
	},
	/**
	 * @namespace
	 */
	filters: {
		/**
		 * @static
		 * Note that this client-side searching is *not* equivalent
		 * to our server-side searching.
		 *
		 * @param {wp.media.model.Attachment} attachment
		 *
		 * @this wp.media.model.Attachments
		 *
		 * @returns {Boolean}
		 */
		search: function( attachment ) {
			if ( ! this.props.get('search') ) {
				return true;
			}

			return _.any(['title','filename','description','caption','name'], function( key ) {
				var value = attachment.get( key );
				return value && -1 !== value.search( this.props.get('search') );
			}, this );
		},
		/**
		 * @static
		 * @param {wp.media.model.Attachment} attachment
		 *
		 * @this wp.media.model.Attachments
		 *
		 * @returns {Boolean}
		 */
		type: function( attachment ) {
			var type = this.props.get('type'), atts = attachment.toJSON(), mime, found;

			if ( ! type || ( _.isArray( type ) && ! type.length ) ) {
				return true;
			}

			mime = atts.mime || ( atts.file && atts.file.type ) || '';

			if ( _.isArray( type ) ) {
				found = _.find( type, function (t) {
					return -1 !== mime.indexOf( t );
				} );
			} else {
				found = -1 !== mime.indexOf( type );
			}

			return found;
		},
		/**
		 * @static
		 * @param {wp.media.model.Attachment} attachment
		 *
		 * @this wp.media.model.Attachments
		 *
		 * @returns {Boolean}
		 */
		uploadedTo: function( attachment ) {
			var uploadedTo = this.props.get('uploadedTo');
			if ( _.isUndefined( uploadedTo ) ) {
				return true;
			}

			return uploadedTo === attachment.get('uploadedTo');
		},
		/**
		 * @static
		 * @param {wp.media.model.Attachment} attachment
		 *
		 * @this wp.media.model.Attachments
		 *
		 * @returns {Boolean}
		 */
		status: function( attachment ) {
			var status = this.props.get('status');
			if ( _.isUndefined( status ) ) {
				return true;
			}

			return status === attachment.get('status');
		}
	}
});

module.exports = Attachments;

},{}],4:[function(require,module,exports){
/**
 * wp.media.model.PostImage
 *
 * An instance of an image that's been embedded into a post.
 *
 * Used in the embedded image attachment display settings modal - @see wp.media.view.MediaFrame.ImageDetails.
 *
 * @class
 * @augments Backbone.Model
 *
 * @param {int} [attributes]               Initial model attributes.
 * @param {int} [attributes.attachment_id] ID of the attachment.
 **/
var PostImage = Backbone.Model.extend({

	initialize: function( attributes ) {
		var Attachment = wp.media.model.Attachment;
		this.attachment = false;

		if ( attributes.attachment_id ) {
			this.attachment = Attachment.get( attributes.attachment_id );
			if ( this.attachment.get( 'url' ) ) {
				this.dfd = jQuery.Deferred();
				this.dfd.resolve();
			} else {
				this.dfd = this.attachment.fetch();
			}
			this.bindAttachmentListeners();
		}

		// keep url in sync with changes to the type of link
		this.on( 'change:link', this.updateLinkUrl, this );
		this.on( 'change:size', this.updateSize, this );

		this.setLinkTypeFromUrl();
		this.setAspectRatio();

		this.set( 'originalUrl', attributes.url );
	},

	bindAttachmentListeners: function() {
		this.listenTo( this.attachment, 'sync', this.setLinkTypeFromUrl );
		this.listenTo( this.attachment, 'sync', this.setAspectRatio );
		this.listenTo( this.attachment, 'change', this.updateSize );
	},

	changeAttachment: function( attachment, props ) {
		this.stopListening( this.attachment );
		this.attachment = attachment;
		this.bindAttachmentListeners();

		this.set( 'attachment_id', this.attachment.get( 'id' ) );
		this.set( 'caption', this.attachment.get( 'caption' ) );
		this.set( 'alt', this.attachment.get( 'alt' ) );
		this.set( 'size', props.get( 'size' ) );
		this.set( 'align', props.get( 'align' ) );
		this.set( 'link', props.get( 'link' ) );
		this.updateLinkUrl();
		this.updateSize();
	},

	setLinkTypeFromUrl: function() {
		var linkUrl = this.get( 'linkUrl' ),
			type;

		if ( ! linkUrl ) {
			this.set( 'link', 'none' );
			return;
		}

		// default to custom if there is a linkUrl
		type = 'custom';

		if ( this.attachment ) {
			if ( this.attachment.get( 'url' ) === linkUrl ) {
				type = 'file';
			} else if ( this.attachment.get( 'link' ) === linkUrl ) {
				type = 'post';
			}
		} else {
			if ( this.get( 'url' ) === linkUrl ) {
				type = 'file';
			}
		}

		this.set( 'link', type );
	},

	updateLinkUrl: function() {
		var link = this.get( 'link' ),
			url;

		switch( link ) {
			case 'file':
				if ( this.attachment ) {
					url = this.attachment.get( 'url' );
				} else {
					url = this.get( 'url' );
				}
				this.set( 'linkUrl', url );
				break;
			case 'post':
				this.set( 'linkUrl', this.attachment.get( 'link' ) );
				break;
			case 'none':
				this.set( 'linkUrl', '' );
				break;
		}
	},

	updateSize: function() {
		var size;

		if ( ! this.attachment ) {
			return;
		}

		if ( this.get( 'size' ) === 'custom' ) {
			this.set( 'width', this.get( 'customWidth' ) );
			this.set( 'height', this.get( 'customHeight' ) );
			this.set( 'url', this.get( 'originalUrl' ) );
			return;
		}

		size = this.attachment.get( 'sizes' )[ this.get( 'size' ) ];

		if ( ! size ) {
			return;
		}

		this.set( 'url', size.url );
		this.set( 'width', size.width );
		this.set( 'height', size.height );
	},

	setAspectRatio: function() {
		var full;

		if ( this.attachment && this.attachment.get( 'sizes' ) ) {
			full = this.attachment.get( 'sizes' ).full;

			if ( full ) {
				this.set( 'aspectRatio', full.width / full.height );
				return;
			}
		}

		this.set( 'aspectRatio', this.get( 'customWidth' ) / this.get( 'customHeight' ) );
	}
});

module.exports = PostImage;

},{}],5:[function(require,module,exports){
/**
 * wp.media.model.Query
 *
 * A collection of attachments that match the supplied query arguments.
 *
 * Note: Do NOT change this.args after the query has been initialized.
 *       Things will break.
 *
 * @class
 * @augments wp.media.model.Attachments
 * @augments Backbone.Collection
 *
 * @param {array}  [models]                      Models to initialize with the collection.
 * @param {object} [options]                     Options hash.
 * @param {object} [options.args]                Attachments query arguments.
 * @param {object} [options.args.posts_per_page]
 */
var Attachments = wp.media.model.Attachments,
	Query;

Query = Attachments.extend({
	/**
	 * @global wp.Uploader
	 *
	 * @param {array}  [models=[]]  Array of initial models to populate the collection.
	 * @param {object} [options={}]
	 */
	initialize: function( models, options ) {
		var allowed;

		options = options || {};
		Attachments.prototype.initialize.apply( this, arguments );

		this.args     = options.args;
		this._hasMore = true;
		this.created  = new Date();

		this.filters.order = function( attachment ) {
			var orderby = this.props.get('orderby'),
				order = this.props.get('order');

			if ( ! this.comparator ) {
				return true;
			}

			// We want any items that can be placed before the last
			// item in the set. If we add any items after the last
			// item, then we can't guarantee the set is complete.
			if ( this.length ) {
				return 1 !== this.comparator( attachment, this.last(), { ties: true });

			// Handle the case where there are no items yet and
			// we're sorting for recent items. In that case, we want
			// changes that occurred after we created the query.
			} else if ( 'DESC' === order && ( 'date' === orderby || 'modified' === orderby ) ) {
				return attachment.get( orderby ) >= this.created;

			// If we're sorting by menu order and we have no items,
			// accept any items that have the default menu order (0).
			} else if ( 'ASC' === order && 'menuOrder' === orderby ) {
				return attachment.get( orderby ) === 0;
			}

			// Otherwise, we don't want any items yet.
			return false;
		};

		// Observe the central `wp.Uploader.queue` collection to watch for
		// new matches for the query.
		//
		// Only observe when a limited number of query args are set. There
		// are no filters for other properties, so observing will result in
		// false positives in those queries.
		allowed = [ 's', 'order', 'orderby', 'posts_per_page', 'post_mime_type', 'post_parent' ];
		if ( wp.Uploader && _( this.args ).chain().keys().difference( allowed ).isEmpty().value() ) {
			this.observe( wp.Uploader.queue );
		}
	},
	/**
	 * Whether there are more attachments that haven't been sync'd from the server
	 * that match the collection's query.
	 *
	 * @returns {boolean}
	 */
	hasMore: function() {
		return this._hasMore;
	},
	/**
	 * Fetch more attachments from the server for the collection.
	 *
	 * @param   {object}  [options={}]
	 * @returns {Promise}
	 */
	more: function( options ) {
		var query = this;

		// If there is already a request pending, return early with the Deferred object.
		if ( this._more && 'pending' === this._more.state() ) {
			return this._more;
		}

		if ( ! this.hasMore() ) {
			return jQuery.Deferred().resolveWith( this ).promise();
		}

		options = options || {};
		options.remove = false;

		return this._more = this.fetch( options ).done( function( resp ) {
			if ( _.isEmpty( resp ) || -1 === this.args.posts_per_page || resp.length < this.args.posts_per_page ) {
				query._hasMore = false;
			}
		});
	},
	/**
	 * Overrides Backbone.Collection.sync
	 * Overrides wp.media.model.Attachments.sync
	 *
	 * @param {String} method
	 * @param {Backbone.Model} model
	 * @param {Object} [options={}]
	 * @returns {Promise}
	 */
	sync: function( method, model, options ) {
		var args, fallback;

		// Overload the read method so Attachment.fetch() functions correctly.
		if ( 'read' === method ) {
			options = options || {};
			options.context = this;
			options.data = _.extend( options.data || {}, {
				action:  'query-attachments',
				post_id: wp.media.model.settings.post.id
			});

			// Clone the args so manipulation is non-destructive.
			args = _.clone( this.args );

			// Determine which page to query.
			if ( -1 !== args.posts_per_page ) {
				args.paged = Math.round( this.length / args.posts_per_page ) + 1;
			}

			options.data.query = args;
			return wp.media.ajax( options );

		// Otherwise, fall back to Backbone.sync()
		} else {
			/**
			 * Call wp.media.model.Attachments.sync or Backbone.sync
			 */
			fallback = Attachments.prototype.sync ? Attachments.prototype : Backbone;
			return fallback.sync.apply( this, arguments );
		}
	}
}, {
	/**
	 * @readonly
	 */
	defaultProps: {
		orderby: 'date',
		order:   'DESC'
	},
	/**
	 * @readonly
	 */
	defaultArgs: {
		posts_per_page: 40
	},
	/**
	 * @readonly
	 */
	orderby: {
		allowed:  [ 'name', 'author', 'date', 'title', 'modified', 'uploadedTo', 'id', 'post__in', 'menuOrder' ],
		/**
		 * A map of JavaScript orderby values to their WP_Query equivalents.
		 * @type {Object}
		 */
		valuemap: {
			'id':         'ID',
			'uploadedTo': 'parent',
			'menuOrder':  'menu_order ID'
		}
	},
	/**
	 * A map of JavaScript query properties to their WP_Query equivalents.
	 *
	 * @readonly
	 */
	propmap: {
		'search':    's',
		'type':      'post_mime_type',
		'perPage':   'posts_per_page',
		'menuOrder': 'menu_order',
		'uploadedTo': 'post_parent',
		'status':     'post_status',
		'include':    'post__in',
		'exclude':    'post__not_in'
	},
	/**
	 * Creates and returns an Attachments Query collection given the properties.
	 *
	 * Caches query objects and reuses where possible.
	 *
	 * @static
	 * @method
	 *
	 * @param {object} [props]
	 * @param {Object} [props.cache=true]   Whether to use the query cache or not.
	 * @param {Object} [props.order]
	 * @param {Object} [props.orderby]
	 * @param {Object} [props.include]
	 * @param {Object} [props.exclude]
	 * @param {Object} [props.s]
	 * @param {Object} [props.post_mime_type]
	 * @param {Object} [props.posts_per_page]
	 * @param {Object} [props.menu_order]
	 * @param {Object} [props.post_parent]
	 * @param {Object} [props.post_status]
	 * @param {Object} [options]
	 *
	 * @returns {wp.media.model.Query} A new Attachments Query collection.
	 */
	get: (function(){
		/**
		 * @static
		 * @type Array
		 */
		var queries = [];

		/**
		 * @returns {Query}
		 */
		return function( props, options ) {
			var args     = {},
				orderby  = Query.orderby,
				defaults = Query.defaultProps,
				query,
				cache    = !! props.cache || _.isUndefined( props.cache );

			// Remove the `query` property. This isn't linked to a query,
			// this *is* the query.
			delete props.query;
			delete props.cache;

			// Fill default args.
			_.defaults( props, defaults );

			// Normalize the order.
			props.order = props.order.toUpperCase();
			if ( 'DESC' !== props.order && 'ASC' !== props.order ) {
				props.order = defaults.order.toUpperCase();
			}

			// Ensure we have a valid orderby value.
			if ( ! _.contains( orderby.allowed, props.orderby ) ) {
				props.orderby = defaults.orderby;
			}

			_.each( [ 'include', 'exclude' ], function( prop ) {
				if ( props[ prop ] && ! _.isArray( props[ prop ] ) ) {
					props[ prop ] = [ props[ prop ] ];
				}
			} );

			// Generate the query `args` object.
			// Correct any differing property names.
			_.each( props, function( value, prop ) {
				if ( _.isNull( value ) ) {
					return;
				}

				args[ Query.propmap[ prop ] || prop ] = value;
			});

			// Fill any other default query args.
			_.defaults( args, Query.defaultArgs );

			// `props.orderby` does not always map directly to `args.orderby`.
			// Substitute exceptions specified in orderby.keymap.
			args.orderby = orderby.valuemap[ props.orderby ] || props.orderby;

			// Search the query cache for a matching query.
			if ( cache ) {
				query = _.find( queries, function( query ) {
					return _.isEqual( query.args, args );
				});
			} else {
				queries = [];
			}

			// Otherwise, create a new query and add it to the cache.
			if ( ! query ) {
				query = new Query( [], _.extend( options || {}, {
					props: props,
					args:  args
				} ) );
				queries.push( query );
			}

			return query;
		};
	}())
});

module.exports = Query;

},{}],6:[function(require,module,exports){
/**
 * wp.media.model.Selection
 *
 * A selection of attachments.
 *
 * @class
 * @augments wp.media.model.Attachments
 * @augments Backbone.Collection
 */
var Attachments = wp.media.model.Attachments,
	Selection;

Selection = Attachments.extend({
	/**
	 * Refresh the `single` model whenever the selection changes.
	 * Binds `single` instead of using the context argument to ensure
	 * it receives no parameters.
	 *
	 * @param {Array} [models=[]] Array of models used to populate the collection.
	 * @param {Object} [options={}]
	 */
	initialize: function( models, options ) {
		/**
		 * call 'initialize' directly on the parent class
		 */
		Attachments.prototype.initialize.apply( this, arguments );
		this.multiple = options && options.multiple;

		this.on( 'add remove reset', _.bind( this.single, this, false ) );
	},

	/**
	 * If the workflow does not support multi-select, clear out the selection
	 * before adding a new attachment to it.
	 *
	 * @param {Array} models
	 * @param {Object} options
	 * @returns {wp.media.model.Attachment[]}
	 */
	add: function( models, options ) {
		if ( ! this.multiple ) {
			this.remove( this.models );
		}
		/**
		 * call 'add' directly on the parent class
		 */
		return Attachments.prototype.add.call( this, models, options );
	},

	/**
	 * Fired when toggling (clicking on) an attachment in the modal.
	 *
	 * @param {undefined|boolean|wp.media.model.Attachment} model
	 *
	 * @fires wp.media.model.Selection#selection:single
	 * @fires wp.media.model.Selection#selection:unsingle
	 *
	 * @returns {Backbone.Model}
	 */
	single: function( model ) {
		var previous = this._single;

		// If a `model` is provided, use it as the single model.
		if ( model ) {
			this._single = model;
		}
		// If the single model isn't in the selection, remove it.
		if ( this._single && ! this.get( this._single.cid ) ) {
			delete this._single;
		}

		this._single = this._single || this.last();

		// If single has changed, fire an event.
		if ( this._single !== previous ) {
			if ( previous ) {
				previous.trigger( 'selection:unsingle', previous, this );

				// If the model was already removed, trigger the collection
				// event manually.
				if ( ! this.get( previous.cid ) ) {
					this.trigger( 'selection:unsingle', previous, this );
				}
			}
			if ( this._single ) {
				this._single.trigger( 'selection:single', this._single, this );
			}
		}

		// Return the single model, or the last model as a fallback.
		return this._single;
	}
});

module.exports = Selection;

},{}]},{},[1]);
;
/**
 * mOxie - multi-runtime File API & XMLHttpRequest L2 Polyfill
 * v1.3.4
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 *
 * Date: 2015-07-18
 */
!function(e,t){"use strict";function n(e,t){for(var n,i=[],r=0;r<e.length;++r){if(n=s[e[r]]||o(e[r]),!n)throw"module definition dependecy not found: "+e[r];i.push(n)}t.apply(null,i)}function i(e,i,r){if("string"!=typeof e)throw"invalid module definition, module id must be defined and be a string";if(i===t)throw"invalid module definition, dependencies must be specified";if(r===t)throw"invalid module definition, definition function must be specified";n(i,function(){s[e]=r.apply(null,arguments)})}function r(e){return!!s[e]}function o(t){for(var n=e,i=t.split(/[.\/]/),r=0;r<i.length;++r){if(!n[i[r]])return;n=n[i[r]]}return n}function a(n){for(var i=0;i<n.length;i++){for(var r=e,o=n[i],a=o.split(/[.\/]/),u=0;u<a.length-1;++u)r[a[u]]===t&&(r[a[u]]={}),r=r[a[u]];r[a[a.length-1]]=s[o]}}var s={},u="moxie/core/utils/Basic",c="moxie/core/utils/Env",l="moxie/core/I18n",d="moxie/core/utils/Mime",h="moxie/core/utils/Dom",f="moxie/core/Exceptions",p="moxie/core/EventTarget",m="moxie/runtime/Runtime",g="moxie/runtime/RuntimeClient",v="moxie/file/FileInput",w="moxie/core/utils/Encode",y="moxie/file/Blob",E="moxie/file/File",_="moxie/file/FileDrop",b="moxie/file/FileReader",x="moxie/core/utils/Url",R="moxie/runtime/RuntimeTarget",A="moxie/file/FileReaderSync",I="moxie/xhr/FormData",T="moxie/xhr/XMLHttpRequest",S="moxie/runtime/Transporter",O="moxie/image/Image",D="moxie/runtime/html5/Runtime",N="moxie/core/utils/Events",L="moxie/runtime/html5/file/FileInput",C="moxie/runtime/html5/file/Blob",M="moxie/runtime/html5/file/FileDrop",F="moxie/runtime/html5/file/FileReader",P="moxie/runtime/html5/xhr/XMLHttpRequest",H="moxie/runtime/html5/utils/BinaryReader",B="moxie/runtime/html5/image/JPEGHeaders",k="moxie/runtime/html5/image/ExifParser",U="moxie/runtime/html5/image/JPEG",G="moxie/runtime/html5/image/PNG",z="moxie/runtime/html5/image/ImageInfo",q="moxie/runtime/html5/image/MegaPixel",j="moxie/runtime/html5/image/Image",X="moxie/runtime/flash/Runtime",V="moxie/runtime/flash/file/FileInput",W="moxie/runtime/flash/file/Blob",Y="moxie/runtime/flash/file/FileReader",$="moxie/runtime/flash/file/FileReaderSync",J="moxie/runtime/flash/xhr/XMLHttpRequest",Z="moxie/runtime/flash/runtime/Transporter",K="moxie/runtime/flash/image/Image",Q="moxie/runtime/silverlight/Runtime",ee="moxie/runtime/silverlight/file/FileInput",te="moxie/runtime/silverlight/file/Blob",ne="moxie/runtime/silverlight/file/FileDrop",ie="moxie/runtime/silverlight/file/FileReader",re="moxie/runtime/silverlight/file/FileReaderSync",oe="moxie/runtime/silverlight/xhr/XMLHttpRequest",ae="moxie/runtime/silverlight/runtime/Transporter",se="moxie/runtime/silverlight/image/Image",ue="moxie/runtime/html4/Runtime",ce="moxie/runtime/html4/file/FileInput",le="moxie/runtime/html4/file/FileReader",de="moxie/runtime/html4/xhr/XMLHttpRequest",he="moxie/runtime/html4/image/Image";i(u,[],function(){var e=function(e){var t;return e===t?"undefined":null===e?"null":e.nodeType?"node":{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},t=function(i){var r;return n(arguments,function(o,s){s>0&&n(o,function(n,o){n!==r&&(e(i[o])===e(n)&&~a(e(n),["array","object"])?t(i[o],n):i[o]=n)})}),i},n=function(t,n){var i,r,o,a;if(t)if("number"===e(t.length)){for(o=0,i=t.length;i>o;o++)if(n(t[o],o)===!1)return}else if("object"===e(t))for(r in t)if(t.hasOwnProperty(r)&&n(t[r],r)===!1)return},i=function(t){var n;if(!t||"object"!==e(t))return!0;for(n in t)return!1;return!0},r=function(t,n){function i(r){"function"===e(t[r])&&t[r](function(e){++r<o&&!e?i(r):n(e)})}var r=0,o=t.length;"function"!==e(n)&&(n=function(){}),t&&t.length||n(),i(r)},o=function(e,t){var i=0,r=e.length,o=new Array(r);n(e,function(e,n){e(function(e){if(e)return t(e);var a=[].slice.call(arguments);a.shift(),o[n]=a,i++,i===r&&(o.unshift(null),t.apply(this,o))})})},a=function(e,t){if(t){if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e);for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n}return-1},s=function(t,n){var i=[];"array"!==e(t)&&(t=[t]),"array"!==e(n)&&(n=[n]);for(var r in t)-1===a(t[r],n)&&i.push(t[r]);return i.length?i:!1},u=function(e,t){var i=[];return n(e,function(e){-1!==a(e,t)&&i.push(e)}),i.length?i:null},c=function(e){var t,n=[];for(t=0;t<e.length;t++)n[t]=e[t];return n},l=function(){var e=0;return function(t){var n=(new Date).getTime().toString(32),i;for(i=0;5>i;i++)n+=Math.floor(65535*Math.random()).toString(32);return(t||"o_")+n+(e++).toString(32)}}(),d=function(e){return e?String.prototype.trim?String.prototype.trim.call(e):e.toString().replace(/^\s*/,"").replace(/\s*$/,""):e},h=function(e){if("string"!=typeof e)return e;var t={t:1099511627776,g:1073741824,m:1048576,k:1024},n;return e=/^([0-9\.]+)([tmgk]?)$/.exec(e.toLowerCase().replace(/[^0-9\.tmkg]/g,"")),n=e[2],e=+e[1],t.hasOwnProperty(n)&&(e*=t[n]),Math.floor(e)},f=function(t){var n=[].slice.call(arguments,1);return t.replace(/%[a-z]/g,function(){var t=n.shift();return"undefined"!==e(t)?t:""})};return{guid:l,typeOf:e,extend:t,each:n,isEmptyObj:i,inSeries:r,inParallel:o,inArray:a,arrayDiff:s,arrayIntersect:u,toArray:c,trim:d,sprintf:f,parseSizeStr:h}}),i(c,[u],function(e){function t(e,t,n){var i=0,r=0,o=0,a={dev:-6,alpha:-5,a:-5,beta:-4,b:-4,RC:-3,rc:-3,"#":-2,p:1,pl:1},s=function(e){return e=(""+e).replace(/[_\-+]/g,"."),e=e.replace(/([^.\d]+)/g,".$1.").replace(/\.{2,}/g,"."),e.length?e.split("."):[-8]},u=function(e){return e?isNaN(e)?a[e]||-7:parseInt(e,10):0};for(e=s(e),t=s(t),r=Math.max(e.length,t.length),i=0;r>i;i++)if(e[i]!=t[i]){if(e[i]=u(e[i]),t[i]=u(t[i]),e[i]<t[i]){o=-1;break}if(e[i]>t[i]){o=1;break}}if(!n)return o;switch(n){case">":case"gt":return o>0;case">=":case"ge":return o>=0;case"<=":case"le":return 0>=o;case"==":case"=":case"eq":return 0===o;case"<>":case"!=":case"ne":return 0!==o;case"":case"<":case"lt":return 0>o;default:return null}}var n=function(e){var t="",n="?",i="function",r="undefined",o="object",a="major",s="model",u="name",c="type",l="vendor",d="version",h="architecture",f="console",p="mobile",m="tablet",g={has:function(e,t){return-1!==t.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()}},v={rgx:function(){for(var t,n=0,a,s,u,c,l,d,h=arguments;n<h.length;n+=2){var f=h[n],p=h[n+1];if(typeof t===r){t={};for(u in p)c=p[u],typeof c===o?t[c[0]]=e:t[c]=e}for(a=s=0;a<f.length;a++)if(l=f[a].exec(this.getUA())){for(u=0;u<p.length;u++)d=l[++s],c=p[u],typeof c===o&&c.length>0?2==c.length?typeof c[1]==i?t[c[0]]=c[1].call(this,d):t[c[0]]=c[1]:3==c.length?typeof c[1]!==i||c[1].exec&&c[1].test?t[c[0]]=d?d.replace(c[1],c[2]):e:t[c[0]]=d?c[1].call(this,d,c[2]):e:4==c.length&&(t[c[0]]=d?c[3].call(this,d.replace(c[1],c[2])):e):t[c]=d?d:e;break}if(l)break}return t},str:function(t,i){for(var r in i)if(typeof i[r]===o&&i[r].length>0){for(var a=0;a<i[r].length;a++)if(g.has(i[r][a],t))return r===n?e:r}else if(g.has(i[r],t))return r===n?e:r;return t}},w={browser:{oldsafari:{major:{1:["/8","/1","/3"],2:"/4","?":"/"},version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",RT:"ARM"}}}},y={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[u,d],[/\s(opr)\/([\w\.]+)/i],[[u,"Opera"],d],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi)\/([\w\.-]+)/i],[u,d],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[u,"IE"],d],[/(edge)\/((\d+)?[\w\.]+)/i],[u,d],[/(yabrowser)\/([\w\.]+)/i],[[u,"Yandex"],d],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],d],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i],[u,d],[/(dolfin)\/([\w\.]+)/i],[[u,"Dolphin"],d],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[u,"Chrome"],d],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[d,[u,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[d,[u,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[d,[u,"Facebook"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[d,[u,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[d,u],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[u,[d,v.str,w.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[u,d],[/(navigator|netscape)\/([\w\.-]+)/i],[[u,"Netscape"],d],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[u,d]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[d,[u,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[u,d],[/rv\:([\w\.]+).*(gecko)/i],[d,u]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[u,d],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[u,[d,v.str,w.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[u,"Windows"],[d,v.str,w.os.windows.version]],[/\((bb)(10);/i],[[u,"BlackBerry"],d],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[u,d],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[u,"Symbian"],d],[/\((series40);/i],[u],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[u,"Firefox OS"],d],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[u,d],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[u,"Chromium OS"],d],[/(sunos)\s?([\w\.]+\d)*/i],[[u,"Solaris"],d],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[u,d],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[u,"iOS"],[d,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[u,"Mac OS"],[d,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[u,d]]},E=function(e){var n=e||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:t);this.getBrowser=function(){return v.rgx.apply(this,y.browser)},this.getEngine=function(){return v.rgx.apply(this,y.engine)},this.getOS=function(){return v.rgx.apply(this,y.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this.setUA(n)};return E}(),i=function(){var t={define_property:function(){return!1}(),create_canvas:function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}(),return_response_type:function(t){try{if(-1!==e.inArray(t,["","text","document"]))return!0;if(window.XMLHttpRequest){var n=new XMLHttpRequest;if(n.open("get","/"),"responseType"in n)return n.responseType=t,n.responseType!==t?!1:!0}}catch(i){}return!1},use_data_uri:function(){var e=new Image;return e.onload=function(){t.use_data_uri=1===e.width&&1===e.height},setTimeout(function(){e.src="data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="},1),!1}(),use_data_uri_over32kb:function(){return t.use_data_uri&&("IE"!==o.browser||o.version>=9)},use_data_uri_of:function(e){return t.use_data_uri&&33e3>e||t.use_data_uri_over32kb()},use_fileinput:function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var e=document.createElement("input");return e.setAttribute("type","file"),!e.disabled}};return function(n){var i=[].slice.call(arguments);return i.shift(),"function"===e.typeOf(t[n])?t[n].apply(this,i):!!t[n]}}(),r=(new n).getResult(),o={can:i,uaParser:n,browser:r.browser.name,version:r.browser.version,os:r.os.name,osVersion:r.os.version,verComp:t,swf_url:"../flash/Moxie.swf",xap_url:"../silverlight/Moxie.xap",global_event_dispatcher:"moxie.core.EventTarget.instance.dispatchEvent"};return o.OS=o.os,o}),i(l,[u],function(e){var t={};return{addI18n:function(n){return e.extend(t,n)},translate:function(e){return t[e]||e},_:function(e){return this.translate(e)},sprintf:function(t){var n=[].slice.call(arguments,1);return t.replace(/%[a-z]/g,function(){var t=n.shift();return"undefined"!==e.typeOf(t)?t:""})}}}),i(d,[u,l],function(e,t){var n="application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mp3 mpga mpega mp2,audio/x-wav,wav,audio/x-m4a,m4a,audio/ogg,oga ogg,audio/aiff,aiff aif,audio/flac,flac,audio/aac,aac,audio/ac3,ac3,audio/x-ms-wma,wma,image/bmp,bmp,image/gif,gif,image/jpeg,jpg jpeg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gpp 3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,video/ogg,ogv,video/x-matroska,mkv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe",i={mimes:{},extensions:{},addMimeType:function(e){var t=e.split(/,/),n,i,r;for(n=0;n<t.length;n+=2){for(r=t[n+1].split(/ /),i=0;i<r.length;i++)this.mimes[r[i]]=t[n];this.extensions[t[n]]=r}},extList2mimes:function(t,n){var i=this,r,o,a,s,u=[];for(o=0;o<t.length;o++)for(r=t[o].extensions.split(/\s*,\s*/),a=0;a<r.length;a++){if("*"===r[a])return[];if(s=i.mimes[r[a]],s&&-1===e.inArray(s,u)&&u.push(s),n&&/^\w+$/.test(r[a]))u.push("."+r[a]);else if(!s)return[]}return u},mimes2exts:function(t){var n=this,i=[];return e.each(t,function(t){if("*"===t)return i=[],!1;var r=t.match(/^(\w+)\/(\*|\w+)$/);r&&("*"===r[2]?e.each(n.extensions,function(e,t){new RegExp("^"+r[1]+"/").test(t)&&[].push.apply(i,n.extensions[t])}):n.extensions[t]&&[].push.apply(i,n.extensions[t]))}),i},mimes2extList:function(n){var i=[],r=[];return"string"===e.typeOf(n)&&(n=e.trim(n).split(/\s*,\s*/)),r=this.mimes2exts(n),i.push({title:t.translate("Files"),extensions:r.length?r.join(","):"*"}),i.mimes=n,i},getFileExtension:function(e){var t=e&&e.match(/\.([^.]+)$/);return t?t[1].toLowerCase():""},getFileMime:function(e){return this.mimes[this.getFileExtension(e)]||""}};return i.addMimeType(n),i}),i(h,[c],function(e){var t=function(e){return"string"!=typeof e?e:document.getElementById(e)},n=function(e,t){if(!e.className)return!1;var n=new RegExp("(^|\\s+)"+t+"(\\s+|$)");return n.test(e.className)},i=function(e,t){n(e,t)||(e.className=e.className?e.className.replace(/\s+$/,"")+" "+t:t)},r=function(e,t){if(e.className){var n=new RegExp("(^|\\s+)"+t+"(\\s+|$)");e.className=e.className.replace(n,function(e,t,n){return" "===t&&" "===n?" ":""})}},o=function(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle?window.getComputedStyle(e,null)[t]:void 0},a=function(t,n){function i(e){var t,n,i=0,r=0;return e&&(n=e.getBoundingClientRect(),t="CSS1Compat"===s.compatMode?s.documentElement:s.body,i=n.left+t.scrollLeft,r=n.top+t.scrollTop),{x:i,y:r}}var r=0,o=0,a,s=document,u,c;if(t=t,n=n||s.body,t&&t.getBoundingClientRect&&"IE"===e.browser&&(!s.documentMode||s.documentMode<8))return u=i(t),c=i(n),{x:u.x-c.x,y:u.y-c.y};for(a=t;a&&a!=n&&a.nodeType;)r+=a.offsetLeft||0,o+=a.offsetTop||0,a=a.offsetParent;for(a=t.parentNode;a&&a!=n&&a.nodeType;)r-=a.scrollLeft||0,o-=a.scrollTop||0,a=a.parentNode;return{x:r,y:o}},s=function(e){return{w:e.offsetWidth||e.clientWidth,h:e.offsetHeight||e.clientHeight}};return{get:t,hasClass:n,addClass:i,removeClass:r,getStyle:o,getPos:a,getSize:s}}),i(f,[u],function(e){function t(e,t){var n;for(n in e)if(e[n]===t)return n;return null}return{RuntimeError:function(){function n(e){this.code=e,this.name=t(i,e),this.message=this.name+": RuntimeError "+this.code}var i={NOT_INIT_ERR:1,NOT_SUPPORTED_ERR:9,JS_ERR:4};return e.extend(n,i),n.prototype=Error.prototype,n}(),OperationNotAllowedException:function(){function t(e){this.code=e,this.name="OperationNotAllowedException"}return e.extend(t,{NOT_ALLOWED_ERR:1}),t.prototype=Error.prototype,t}(),ImageError:function(){function n(e){this.code=e,this.name=t(i,e),this.message=this.name+": ImageError "+this.code}var i={WRONG_FORMAT:1,MAX_RESOLUTION_ERR:2,INVALID_META_ERR:3};return e.extend(n,i),n.prototype=Error.prototype,n}(),FileException:function(){function n(e){this.code=e,this.name=t(i,e),this.message=this.name+": FileException "+this.code}var i={NOT_FOUND_ERR:1,SECURITY_ERR:2,ABORT_ERR:3,NOT_READABLE_ERR:4,ENCODING_ERR:5,NO_MODIFICATION_ALLOWED_ERR:6,INVALID_STATE_ERR:7,SYNTAX_ERR:8};return e.extend(n,i),n.prototype=Error.prototype,n}(),DOMException:function(){function n(e){this.code=e,this.name=t(i,e),this.message=this.name+": DOMException "+this.code}var i={INDEX_SIZE_ERR:1,DOMSTRING_SIZE_ERR:2,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,INVALID_CHARACTER_ERR:5,NO_DATA_ALLOWED_ERR:6,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INUSE_ATTRIBUTE_ERR:10,INVALID_STATE_ERR:11,SYNTAX_ERR:12,INVALID_MODIFICATION_ERR:13,NAMESPACE_ERR:14,INVALID_ACCESS_ERR:15,VALIDATION_ERR:16,TYPE_MISMATCH_ERR:17,SECURITY_ERR:18,NETWORK_ERR:19,ABORT_ERR:20,URL_MISMATCH_ERR:21,QUOTA_EXCEEDED_ERR:22,TIMEOUT_ERR:23,INVALID_NODE_TYPE_ERR:24,DATA_CLONE_ERR:25};return e.extend(n,i),n.prototype=Error.prototype,n}(),EventException:function(){function t(e){this.code=e,this.name="EventException"}return e.extend(t,{UNSPECIFIED_EVENT_TYPE_ERR:0}),t.prototype=Error.prototype,t}()}}),i(p,[c,f,u],function(e,t,n){function i(){var e={};n.extend(this,{uid:null,init:function(){this.uid||(this.uid=n.guid("uid_"))},addEventListener:function(t,i,r,o){var a=this,s;return this.hasOwnProperty("uid")||(this.uid=n.guid("uid_")),t=n.trim(t),/\s/.test(t)?void n.each(t.split(/\s+/),function(e){a.addEventListener(e,i,r,o)}):(t=t.toLowerCase(),r=parseInt(r,10)||0,s=e[this.uid]&&e[this.uid][t]||[],s.push({fn:i,priority:r,scope:o||this}),e[this.uid]||(e[this.uid]={}),void(e[this.uid][t]=s))},hasEventListener:function(t){var n=t?e[this.uid]&&e[this.uid][t]:e[this.uid];return n?n:!1},removeEventListener:function(t,i){t=t.toLowerCase();var r=e[this.uid]&&e[this.uid][t],o;if(r){if(i){for(o=r.length-1;o>=0;o--)if(r[o].fn===i){r.splice(o,1);break}}else r=[];r.length||(delete e[this.uid][t],n.isEmptyObj(e[this.uid])&&delete e[this.uid])}},removeAllEventListeners:function(){e[this.uid]&&delete e[this.uid]},dispatchEvent:function(i){var r,o,a,s,u={},c=!0,l;if("string"!==n.typeOf(i)){if(s=i,"string"!==n.typeOf(s.type))throw new t.EventException(t.EventException.UNSPECIFIED_EVENT_TYPE_ERR);i=s.type,s.total!==l&&s.loaded!==l&&(u.total=s.total,u.loaded=s.loaded),u.async=s.async||!1}if(-1!==i.indexOf("::")?!function(e){r=e[0],i=e[1]}(i.split("::")):r=this.uid,i=i.toLowerCase(),o=e[r]&&e[r][i]){o.sort(function(e,t){return t.priority-e.priority}),a=[].slice.call(arguments),a.shift(),u.type=i,a.unshift(u);var d=[];n.each(o,function(e){a[0].target=e.scope,d.push(u.async?function(t){setTimeout(function(){t(e.fn.apply(e.scope,a)===!1)},1)}:function(t){t(e.fn.apply(e.scope,a)===!1)})}),d.length&&n.inSeries(d,function(e){c=!e})}return c},bind:function(){this.addEventListener.apply(this,arguments)},unbind:function(){this.removeEventListener.apply(this,arguments)},unbindAll:function(){this.removeAllEventListeners.apply(this,arguments)},trigger:function(){return this.dispatchEvent.apply(this,arguments)},handleEventProps:function(e){var t=this;this.bind(e.join(" "),function(e){var t="on"+e.type.toLowerCase();"function"===n.typeOf(this[t])&&this[t].apply(this,arguments)}),n.each(e,function(e){e="on"+e.toLowerCase(e),"undefined"===n.typeOf(t[e])&&(t[e]=null)})}})}return i.instance=new i,i}),i(m,[c,u,h,p],function(e,t,n,i){function r(e,i,o,s,u){var c=this,l,d=t.guid(i+"_"),h=u||"browser";e=e||{},a[d]=this,o=t.extend({access_binary:!1,access_image_binary:!1,display_media:!1,do_cors:!1,drag_and_drop:!1,filter_by_extension:!0,resize_image:!1,report_upload_progress:!1,return_response_headers:!1,return_response_type:!1,return_status_code:!0,send_custom_headers:!1,select_file:!1,select_folder:!1,select_multiple:!0,send_binary_string:!1,send_browser_cookies:!0,send_multipart:!0,slice_blob:!1,stream_upload:!1,summon_file_dialog:!1,upload_filesize:!0,use_http_method:!0},o),e.preferred_caps&&(h=r.getMode(s,e.preferred_caps,h)),l=function(){var e={};return{exec:function(t,n,i,r){return l[n]&&(e[t]||(e[t]={context:this,instance:new l[n]}),e[t].instance[i])?e[t].instance[i].apply(this,r):void 0},removeInstance:function(t){delete e[t]},removeAllInstances:function(){var n=this;t.each(e,function(e,i){"function"===t.typeOf(e.instance.destroy)&&e.instance.destroy.call(e.context),n.removeInstance(i)})}}}(),t.extend(this,{initialized:!1,uid:d,type:i,mode:r.getMode(s,e.required_caps,h),shimid:d+"_container",clients:0,options:e,can:function(e,n){var i=arguments[2]||o;if("string"===t.typeOf(e)&&"undefined"===t.typeOf(n)&&(e=r.parseCaps(e)),"object"===t.typeOf(e)){for(var a in e)if(!this.can(a,e[a],i))return!1;return!0}return"function"===t.typeOf(i[e])?i[e].call(this,n):n===i[e]},getShimContainer:function(){var e,i=n.get(this.shimid);return i||(e=this.options.container?n.get(this.options.container):document.body,i=document.createElement("div"),i.id=this.shimid,i.className="moxie-shim moxie-shim-"+this.type,t.extend(i.style,{position:"absolute",top:"0px",left:"0px",width:"1px",height:"1px",overflow:"hidden"}),e.appendChild(i),e=null),i},getShim:function(){return l},shimExec:function(e,t){var n=[].slice.call(arguments,2);return c.getShim().exec.call(this,this.uid,e,t,n)},exec:function(e,t){var n=[].slice.call(arguments,2);return c[e]&&c[e][t]?c[e][t].apply(this,n):c.shimExec.apply(this,arguments)},destroy:function(){if(c){var e=n.get(this.shimid);e&&e.parentNode.removeChild(e),l&&l.removeAllInstances(),this.unbindAll(),delete a[this.uid],this.uid=null,d=c=l=e=null}}}),this.mode&&e.required_caps&&!this.can(e.required_caps)&&(this.mode=!1)}var o={},a={};return r.order="html5,flash,silverlight,html4",r.getRuntime=function(e){return a[e]?a[e]:!1},r.addConstructor=function(e,t){t.prototype=i.instance,o[e]=t},r.getConstructor=function(e){return o[e]||null},r.getInfo=function(e){var t=r.getRuntime(e);return t?{uid:t.uid,type:t.type,mode:t.mode,can:function(){return t.can.apply(t,arguments)}}:null},r.parseCaps=function(e){var n={};return"string"!==t.typeOf(e)?e||{}:(t.each(e.split(","),function(e){n[e]=!0}),n)},r.can=function(e,t){var n,i=r.getConstructor(e),o;return i?(n=new i({required_caps:t}),o=n.mode,n.destroy(),!!o):!1},r.thatCan=function(e,t){var n=(t||r.order).split(/\s*,\s*/);for(var i in n)if(r.can(n[i],e))return n[i];return null},r.getMode=function(e,n,i){var r=null;if("undefined"===t.typeOf(i)&&(i="browser"),n&&!t.isEmptyObj(e)){if(t.each(n,function(n,i){if(e.hasOwnProperty(i)){var o=e[i](n);if("string"==typeof o&&(o=[o]),r){if(!(r=t.arrayIntersect(r,o)))return r=!1}else r=o}}),r)return-1!==t.inArray(i,r)?i:r[0];if(r===!1)return!1}return i},r.capTrue=function(){return!0},r.capFalse=function(){return!1},r.capTest=function(e){return function(){return!!e}},r}),i(g,[c,f,u,m],function(e,t,n,i){return function r(){var e;n.extend(this,{connectRuntime:function(r){function o(n){var s,u;return n.length?(s=n.shift().toLowerCase(),(u=i.getConstructor(s))?(e=new u(r),e.bind("Init",function(){e.initialized=!0,setTimeout(function(){e.clients++,a.trigger("RuntimeInit",e)},1)}),e.bind("Error",function(){e.destroy(),o(n)}),e.mode?void e.init():void e.trigger("Error")):void o(n)):(a.trigger("RuntimeError",new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR)),void(e=null))}var a=this,s;if("string"===n.typeOf(r)?s=r:"string"===n.typeOf(r.ruid)&&(s=r.ruid),s){if(e=i.getRuntime(s))return e.clients++,e;throw new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR)}o((r.runtime_order||i.order).split(/\s*,\s*/))},disconnectRuntime:function(){e&&--e.clients<=0&&e.destroy(),e=null},getRuntime:function(){return e&&e.uid?e:e=null},exec:function(){return e?e.exec.apply(this,arguments):null}})}}),i(v,[u,c,d,h,f,p,l,m,g],function(e,t,n,i,r,o,a,s,u){function c(t){var o=this,c,d,h;if(-1!==e.inArray(e.typeOf(t),["string","node"])&&(t={browse_button:t}),d=i.get(t.browse_button),!d)throw new r.DOMException(r.DOMException.NOT_FOUND_ERR);h={accept:[{title:a.translate("All Files"),extensions:"*"}],name:"file",multiple:!1,required_caps:!1,container:d.parentNode||document.body},t=e.extend({},h,t),"string"==typeof t.required_caps&&(t.required_caps=s.parseCaps(t.required_caps)),"string"==typeof t.accept&&(t.accept=n.mimes2extList(t.accept)),c=i.get(t.container),c||(c=document.body),"static"===i.getStyle(c,"position")&&(c.style.position="relative"),c=d=null,u.call(o),e.extend(o,{uid:e.guid("uid_"),ruid:null,shimid:null,files:null,init:function(){o.bind("RuntimeInit",function(n,r){o.ruid=r.uid,o.shimid=r.shimid,o.bind("Ready",function(){o.trigger("Refresh")},999),o.bind("Refresh",function(){var n,o,a,s;a=i.get(t.browse_button),s=i.get(r.shimid),a&&(n=i.getPos(a,i.get(t.container)),o=i.getSize(a),s&&e.extend(s.style,{top:n.y+"px",left:n.x+"px",width:o.w+"px",height:o.h+"px"})),s=a=null}),r.exec.call(o,"FileInput","init",t)}),o.connectRuntime(e.extend({},t,{required_caps:{select_file:!0}}))},disable:function(t){var n=this.getRuntime();n&&n.exec.call(this,"FileInput","disable","undefined"===e.typeOf(t)?!0:t)},refresh:function(){o.trigger("Refresh")},destroy:function(){var t=this.getRuntime();t&&(t.exec.call(this,"FileInput","destroy"),this.disconnectRuntime()),"array"===e.typeOf(this.files)&&e.each(this.files,function(e){e.destroy()}),this.files=null,this.unbindAll()}}),this.handleEventProps(l)}var l=["ready","change","cancel","mouseenter","mouseleave","mousedown","mouseup"];return c.prototype=o.instance,c}),i(w,[],function(){var e=function(e){return unescape(encodeURIComponent(e))},t=function(e){return decodeURIComponent(escape(e))},n=function(e,n){if("function"==typeof window.atob)return n?t(window.atob(e)):window.atob(e);var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r,o,a,s,u,c,l,d,h=0,f=0,p="",m=[];if(!e)return e;e+="";do s=i.indexOf(e.charAt(h++)),u=i.indexOf(e.charAt(h++)),c=i.indexOf(e.charAt(h++)),l=i.indexOf(e.charAt(h++)),d=s<<18|u<<12|c<<6|l,r=d>>16&255,o=d>>8&255,a=255&d,64==c?m[f++]=String.fromCharCode(r):64==l?m[f++]=String.fromCharCode(r,o):m[f++]=String.fromCharCode(r,o,a);while(h<e.length);return p=m.join(""),n?t(p):p},i=function(t,n){if(n&&(t=e(t)),"function"==typeof window.btoa)return window.btoa(t);var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r,o,a,s,u,c,l,d,h=0,f=0,p="",m=[];if(!t)return t;do r=t.charCodeAt(h++),o=t.charCodeAt(h++),a=t.charCodeAt(h++),d=r<<16|o<<8|a,s=d>>18&63,u=d>>12&63,c=d>>6&63,l=63&d,m[f++]=i.charAt(s)+i.charAt(u)+i.charAt(c)+i.charAt(l);while(h<t.length);p=m.join("");var g=t.length%3;return(g?p.slice(0,g-3):p)+"===".slice(g||3)};return{utf8_encode:e,utf8_decode:t,atob:n,btoa:i}}),i(y,[u,w,g],function(e,t,n){function i(o,a){function s(t,n,o){var a,s=r[this.uid];return"string"===e.typeOf(s)&&s.length?(a=new i(null,{type:o,size:n-t}),a.detach(s.substr(t,a.size)),a):null}n.call(this),o&&this.connectRuntime(o),a?"string"===e.typeOf(a)&&(a={data:a}):a={},e.extend(this,{uid:a.uid||e.guid("uid_"),ruid:o,size:a.size||0,type:a.type||"",slice:function(e,t,n){return this.isDetached()?s.apply(this,arguments):this.getRuntime().exec.call(this,"Blob","slice",this.getSource(),e,t,n)},getSource:function(){return r[this.uid]?r[this.uid]:null},detach:function(e){if(this.ruid&&(this.getRuntime().exec.call(this,"Blob","destroy"),this.disconnectRuntime(),this.ruid=null),e=e||"","data:"==e.substr(0,5)){var n=e.indexOf(";base64,");this.type=e.substring(5,n),e=t.atob(e.substring(n+8))}this.size=e.length,r[this.uid]=e},isDetached:function(){return!this.ruid&&"string"===e.typeOf(r[this.uid])},destroy:function(){this.detach(),delete r[this.uid]}}),a.data?this.detach(a.data):r[this.uid]=a}var r={};return i}),i(E,[u,d,y],function(e,t,n){function i(i,r){r||(r={}),n.apply(this,arguments),this.type||(this.type=t.getFileMime(r.name));var o;if(r.name)o=r.name.replace(/\\/g,"/"),o=o.substr(o.lastIndexOf("/")+1);else if(this.type){var a=this.type.split("/")[0];o=e.guid((""!==a?a:"file")+"_"),t.extensions[this.type]&&(o+="."+t.extensions[this.type][0])}e.extend(this,{name:o||e.guid("file_"),relativePath:"",lastModifiedDate:r.lastModifiedDate||(new Date).toLocaleString()})}return i.prototype=n.prototype,i}),i(_,[l,h,f,u,c,E,g,p,d],function(e,t,n,i,r,o,a,s,u){function c(n){var r=this,o;"string"==typeof n&&(n={drop_zone:n}),o={accept:[{title:e.translate("All Files"),extensions:"*"}],required_caps:{drag_and_drop:!0}},n="object"==typeof n?i.extend({},o,n):o,n.container=t.get(n.drop_zone)||document.body,"static"===t.getStyle(n.container,"position")&&(n.container.style.position="relative"),"string"==typeof n.accept&&(n.accept=u.mimes2extList(n.accept)),a.call(r),i.extend(r,{uid:i.guid("uid_"),ruid:null,files:null,init:function(){r.bind("RuntimeInit",function(e,t){r.ruid=t.uid,t.exec.call(r,"FileDrop","init",n),r.dispatchEvent("ready")}),r.connectRuntime(n)},destroy:function(){var e=this.getRuntime();e&&(e.exec.call(this,"FileDrop","destroy"),this.disconnectRuntime()),this.files=null,this.unbindAll()}}),this.handleEventProps(l)}var l=["ready","dragenter","dragleave","drop","error"];return c.prototype=s.instance,c}),i(b,[u,w,f,p,y,g],function(e,t,n,i,r,o){function a(){function i(e,i){var o=this;if(this.trigger("loadstart"),this.readyState===a.LOADING)return this.trigger("error",new n.DOMException(n.DOMException.INVALID_STATE_ERR)),void this.trigger("loadend");if(!(i instanceof r))return this.trigger("error",new n.DOMException(n.DOMException.NOT_FOUND_ERR)),void this.trigger("loadend");if(this.result=null,this.readyState=a.LOADING,i.isDetached()){var s=i.getSource();switch(e){case"readAsText":case"readAsBinaryString":this.result=s;break;case"readAsDataURL":this.result="data:"+i.type+";base64,"+t.btoa(s)}this.readyState=a.DONE,this.trigger("load"),this.trigger("loadend")}else this.connectRuntime(i.ruid),this.exec("FileReader","read",e,i)}o.call(this),e.extend(this,{uid:e.guid("uid_"),readyState:a.EMPTY,result:null,error:null,readAsBinaryString:function(e){i.call(this,"readAsBinaryString",e)},readAsDataURL:function(e){i.call(this,"readAsDataURL",e)},readAsText:function(e){i.call(this,"readAsText",e);
},abort:function(){this.result=null,-1===e.inArray(this.readyState,[a.EMPTY,a.DONE])&&(this.readyState===a.LOADING&&(this.readyState=a.DONE),this.exec("FileReader","abort"),this.trigger("abort"),this.trigger("loadend"))},destroy:function(){this.abort(),this.exec("FileReader","destroy"),this.disconnectRuntime(),this.unbindAll()}}),this.handleEventProps(s),this.bind("Error",function(e,t){this.readyState=a.DONE,this.error=t},999),this.bind("Load",function(e){this.readyState=a.DONE},999)}var s=["loadstart","progress","load","abort","error","loadend"];return a.EMPTY=0,a.LOADING=1,a.DONE=2,a.prototype=i.instance,a}),i(x,[],function(){var e=function(t,n){for(var i=["source","scheme","authority","userInfo","user","pass","host","port","relative","path","directory","file","query","fragment"],r=i.length,o={http:80,https:443},a={},s=/^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/,u=s.exec(t||"");r--;)u[r]&&(a[i[r]]=u[r]);if(!a.scheme){n&&"string"!=typeof n||(n=e(n||document.location.href)),a.scheme=n.scheme,a.host=n.host,a.port=n.port;var c="";/^[^\/]/.test(a.path)&&(c=n.path,c=/\/[^\/]*\.[^\/]*$/.test(c)?c.replace(/\/[^\/]+$/,"/"):c.replace(/\/?$/,"/")),a.path=c+(a.path||"")}return a.port||(a.port=o[a.scheme]||80),a.port=parseInt(a.port,10),a.path||(a.path="/"),delete a.source,a},t=function(t){var n={http:80,https:443},i="object"==typeof t?t:e(t);return i.scheme+"://"+i.host+(i.port!==n[i.scheme]?":"+i.port:"")+i.path+(i.query?i.query:"")},n=function(t){function n(e){return[e.scheme,e.host,e.port].join("/")}return"string"==typeof t&&(t=e(t)),n(e())===n(t)};return{parseUrl:e,resolveUrl:t,hasSameOrigin:n}}),i(R,[u,g,p],function(e,t,n){function i(){this.uid=e.guid("uid_"),t.call(this),this.destroy=function(){this.disconnectRuntime(),this.unbindAll()}}return i.prototype=n.instance,i}),i(A,[u,g,w],function(e,t,n){return function(){function i(e,t){if(!t.isDetached()){var i=this.connectRuntime(t.ruid).exec.call(this,"FileReaderSync","read",e,t);return this.disconnectRuntime(),i}var r=t.getSource();switch(e){case"readAsBinaryString":return r;case"readAsDataURL":return"data:"+t.type+";base64,"+n.btoa(r);case"readAsText":for(var o="",a=0,s=r.length;s>a;a++)o+=String.fromCharCode(r[a]);return o}}t.call(this),e.extend(this,{uid:e.guid("uid_"),readAsBinaryString:function(e){return i.call(this,"readAsBinaryString",e)},readAsDataURL:function(e){return i.call(this,"readAsDataURL",e)},readAsText:function(e){return i.call(this,"readAsText",e)}})}}),i(I,[f,u,y],function(e,t,n){function i(){var e,i=[];t.extend(this,{append:function(r,o){var a=this,s=t.typeOf(o);o instanceof n?e={name:r,value:o}:"array"===s?(r+="[]",t.each(o,function(e){a.append(r,e)})):"object"===s?t.each(o,function(e,t){a.append(r+"["+t+"]",e)}):"null"===s||"undefined"===s||"number"===s&&isNaN(o)?a.append(r,"false"):i.push({name:r,value:o.toString()})},hasBlob:function(){return!!this.getBlob()},getBlob:function(){return e&&e.value||null},getBlobName:function(){return e&&e.name||null},each:function(n){t.each(i,function(e){n(e.value,e.name)}),e&&n(e.value,e.name)},destroy:function(){e=null,i=[]}})}return i}),i(T,[u,f,p,w,x,m,R,y,A,I,c,d],function(e,t,n,i,r,o,a,s,u,c,l,d){function h(){this.uid=e.guid("uid_")}function f(){function n(e,t){return w.hasOwnProperty(e)?1===arguments.length?l.can("define_property")?w[e]:v[e]:void(l.can("define_property")?w[e]=t:v[e]=t):void 0}function u(t){function i(){B&&(B.destroy(),B=null),s.dispatchEvent("loadend"),s=null}function r(r){B.bind("LoadStart",function(e){n("readyState",f.LOADING),s.dispatchEvent("readystatechange"),s.dispatchEvent(e),O&&s.upload.dispatchEvent(e)}),B.bind("Progress",function(e){n("readyState")!==f.LOADING&&(n("readyState",f.LOADING),s.dispatchEvent("readystatechange")),s.dispatchEvent(e)}),B.bind("UploadProgress",function(e){O&&s.upload.dispatchEvent({type:"progress",lengthComputable:!1,total:e.total,loaded:e.loaded})}),B.bind("Load",function(t){n("readyState",f.DONE),n("status",Number(r.exec.call(B,"XMLHttpRequest","getStatus")||0)),n("statusText",p[n("status")]||""),n("response",r.exec.call(B,"XMLHttpRequest","getResponse",n("responseType"))),~e.inArray(n("responseType"),["text",""])?n("responseText",n("response")):"document"===n("responseType")&&n("responseXML",n("response")),k=r.exec.call(B,"XMLHttpRequest","getAllResponseHeaders"),s.dispatchEvent("readystatechange"),n("status")>0?(O&&s.upload.dispatchEvent(t),s.dispatchEvent(t)):(N=!0,s.dispatchEvent("error")),i()}),B.bind("Abort",function(e){s.dispatchEvent(e),i()}),B.bind("Error",function(e){N=!0,n("readyState",f.DONE),s.dispatchEvent("readystatechange"),D=!0,s.dispatchEvent(e),i()}),r.exec.call(B,"XMLHttpRequest","send",{url:E,method:_,async:y,user:x,password:R,headers:b,mimeType:I,encoding:A,responseType:s.responseType,withCredentials:s.withCredentials,options:H},t)}var s=this;C=(new Date).getTime(),B=new a,"string"==typeof H.required_caps&&(H.required_caps=o.parseCaps(H.required_caps)),H.required_caps=e.extend({},H.required_caps,{return_response_type:s.responseType}),t instanceof c&&(H.required_caps.send_multipart=!0),e.isEmptyObj(b)||(H.required_caps.send_custom_headers=!0),L||(H.required_caps.do_cors=!0),H.ruid?r(B.connectRuntime(H)):(B.bind("RuntimeInit",function(e,t){r(t)}),B.bind("RuntimeError",function(e,t){s.dispatchEvent("RuntimeError",t)}),B.connectRuntime(H))}function g(){n("responseText",""),n("responseXML",null),n("response",null),n("status",0),n("statusText",""),C=M=null}var v=this,w={timeout:0,readyState:f.UNSENT,withCredentials:!1,status:0,statusText:"",responseType:"",responseXML:null,responseText:null,response:null},y=!0,E,_,b={},x,R,A=null,I=null,T=!1,S=!1,O=!1,D=!1,N=!1,L=!1,C,M,F=null,P=null,H={},B,k="",U;e.extend(this,w,{uid:e.guid("uid_"),upload:new h,open:function(o,a,s,u,c){var l;if(!o||!a)throw new t.DOMException(t.DOMException.SYNTAX_ERR);if(/[\u0100-\uffff]/.test(o)||i.utf8_encode(o)!==o)throw new t.DOMException(t.DOMException.SYNTAX_ERR);if(~e.inArray(o.toUpperCase(),["CONNECT","DELETE","GET","HEAD","OPTIONS","POST","PUT","TRACE","TRACK"])&&(_=o.toUpperCase()),~e.inArray(_,["CONNECT","TRACE","TRACK"]))throw new t.DOMException(t.DOMException.SECURITY_ERR);if(a=i.utf8_encode(a),l=r.parseUrl(a),L=r.hasSameOrigin(l),E=r.resolveUrl(a),(u||c)&&!L)throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);if(x=u||l.user,R=c||l.pass,y=s||!0,y===!1&&(n("timeout")||n("withCredentials")||""!==n("responseType")))throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);T=!y,S=!1,b={},g.call(this),n("readyState",f.OPENED),this.dispatchEvent("readystatechange")},setRequestHeader:function(r,o){var a=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","content-transfer-encoding","date","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","user-agent","via"];if(n("readyState")!==f.OPENED||S)throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if(/[\u0100-\uffff]/.test(r)||i.utf8_encode(r)!==r)throw new t.DOMException(t.DOMException.SYNTAX_ERR);return r=e.trim(r).toLowerCase(),~e.inArray(r,a)||/^(proxy\-|sec\-)/.test(r)?!1:(b[r]?b[r]+=", "+o:b[r]=o,!0)},getAllResponseHeaders:function(){return k||""},getResponseHeader:function(t){return t=t.toLowerCase(),N||~e.inArray(t,["set-cookie","set-cookie2"])?null:k&&""!==k&&(U||(U={},e.each(k.split(/\r\n/),function(t){var n=t.split(/:\s+/);2===n.length&&(n[0]=e.trim(n[0]),U[n[0].toLowerCase()]={header:n[0],value:e.trim(n[1])})})),U.hasOwnProperty(t))?U[t].header+": "+U[t].value:null},overrideMimeType:function(i){var r,o;if(~e.inArray(n("readyState"),[f.LOADING,f.DONE]))throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if(i=e.trim(i.toLowerCase()),/;/.test(i)&&(r=i.match(/^([^;]+)(?:;\scharset\=)?(.*)$/))&&(i=r[1],r[2]&&(o=r[2])),!d.mimes[i])throw new t.DOMException(t.DOMException.SYNTAX_ERR);F=i,P=o},send:function(n,r){if(H="string"===e.typeOf(r)?{ruid:r}:r?r:{},this.readyState!==f.OPENED||S)throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if(n instanceof s)H.ruid=n.ruid,I=n.type||"application/octet-stream";else if(n instanceof c){if(n.hasBlob()){var o=n.getBlob();H.ruid=o.ruid,I=o.type||"application/octet-stream"}}else"string"==typeof n&&(A="UTF-8",I="text/plain;charset=UTF-8",n=i.utf8_encode(n));this.withCredentials||(this.withCredentials=H.required_caps&&H.required_caps.send_browser_cookies&&!L),O=!T&&this.upload.hasEventListener(),N=!1,D=!n,T||(S=!0),u.call(this,n)},abort:function(){if(N=!0,T=!1,~e.inArray(n("readyState"),[f.UNSENT,f.OPENED,f.DONE]))n("readyState",f.UNSENT);else{if(n("readyState",f.DONE),S=!1,!B)throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);B.getRuntime().exec.call(B,"XMLHttpRequest","abort",D),D=!0}},destroy:function(){B&&("function"===e.typeOf(B.destroy)&&B.destroy(),B=null),this.unbindAll(),this.upload&&(this.upload.unbindAll(),this.upload=null)}}),this.handleEventProps(m.concat(["readystatechange"])),this.upload.handleEventProps(m)}var p={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Reserved",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",426:"Upgrade Required",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",510:"Not Extended"};h.prototype=n.instance;var m=["loadstart","progress","abort","error","load","timeout","loadend"],g=1,v=2;return f.UNSENT=0,f.OPENED=1,f.HEADERS_RECEIVED=2,f.LOADING=3,f.DONE=4,f.prototype=n.instance,f}),i(S,[u,w,g,p],function(e,t,n,i){function r(){function i(){l=d=0,c=this.result=null}function o(t,n){var i=this;u=n,i.bind("TransportingProgress",function(t){d=t.loaded,l>d&&-1===e.inArray(i.state,[r.IDLE,r.DONE])&&a.call(i)},999),i.bind("TransportingComplete",function(){d=l,i.state=r.DONE,c=null,i.result=u.exec.call(i,"Transporter","getAsBlob",t||"")},999),i.state=r.BUSY,i.trigger("TransportingStarted"),a.call(i)}function a(){var e=this,n,i=l-d;h>i&&(h=i),n=t.btoa(c.substr(d,h)),u.exec.call(e,"Transporter","receive",n,l)}var s,u,c,l,d,h;n.call(this),e.extend(this,{uid:e.guid("uid_"),state:r.IDLE,result:null,transport:function(t,n,r){var a=this;if(r=e.extend({chunk_size:204798},r),(s=r.chunk_size%3)&&(r.chunk_size+=3-s),h=r.chunk_size,i.call(this),c=t,l=t.length,"string"===e.typeOf(r)||r.ruid)o.call(a,n,this.connectRuntime(r));else{var u=function(e,t){a.unbind("RuntimeInit",u),o.call(a,n,t)};this.bind("RuntimeInit",u),this.connectRuntime(r)}},abort:function(){var e=this;e.state=r.IDLE,u&&(u.exec.call(e,"Transporter","clear"),e.trigger("TransportingAborted")),i.call(e)},destroy:function(){this.unbindAll(),u=null,this.disconnectRuntime(),i.call(this)}})}return r.IDLE=0,r.BUSY=1,r.DONE=2,r.prototype=i.instance,r}),i(O,[u,h,f,A,T,m,g,S,c,p,y,E,w],function(e,t,n,i,r,o,a,s,u,c,l,d,h){function f(){function i(e){e||(e=this.exec("Image","getInfo")),this.size=e.size,this.width=e.width,this.height=e.height,this.type=e.type,this.meta=e.meta,""===this.name&&(this.name=e.name)}function c(t){var i=e.typeOf(t);try{if(t instanceof f){if(!t.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);m.apply(this,arguments)}else if(t instanceof l){if(!~e.inArray(t.type,["image/jpeg","image/png"]))throw new n.ImageError(n.ImageError.WRONG_FORMAT);g.apply(this,arguments)}else if(-1!==e.inArray(i,["blob","file"]))c.call(this,new d(null,t),arguments[1]);else if("string"===i)"data:"===t.substr(0,5)?c.call(this,new l(null,{data:t}),arguments[1]):v.apply(this,arguments);else{if("node"!==i||"img"!==t.nodeName.toLowerCase())throw new n.DOMException(n.DOMException.TYPE_MISMATCH_ERR);c.call(this,t.src,arguments[1])}}catch(r){this.trigger("error",r.code)}}function m(t,n){var i=this.connectRuntime(t.ruid);this.ruid=i.uid,i.exec.call(this,"Image","loadFromImage",t,"undefined"===e.typeOf(n)?!0:n)}function g(t,n){function i(e){r.ruid=e.uid,e.exec.call(r,"Image","loadFromBlob",t)}var r=this;r.name=t.name||"",t.isDetached()?(this.bind("RuntimeInit",function(e,t){i(t)}),n&&"string"==typeof n.required_caps&&(n.required_caps=o.parseCaps(n.required_caps)),this.connectRuntime(e.extend({required_caps:{access_image_binary:!0,resize_image:!0}},n))):i(this.connectRuntime(t.ruid))}function v(e,t){var n=this,i;i=new r,i.open("get",e),i.responseType="blob",i.onprogress=function(e){n.trigger(e)},i.onload=function(){g.call(n,i.response,!0)},i.onerror=function(e){n.trigger(e)},i.onloadend=function(){i.destroy()},i.bind("RuntimeError",function(e,t){n.trigger("RuntimeError",t)}),i.send(null,t)}a.call(this),e.extend(this,{uid:e.guid("uid_"),ruid:null,name:"",size:0,width:0,height:0,type:"",meta:{},clone:function(){this.load.apply(this,arguments)},load:function(){c.apply(this,arguments)},downsize:function(t){var i={width:this.width,height:this.height,type:this.type||"image/jpeg",quality:90,crop:!1,preserveHeaders:!0,resample:!1};t="object"==typeof t?e.extend(i,t):e.extend(i,{width:arguments[0],height:arguments[1],crop:arguments[2],preserveHeaders:arguments[3]});try{if(!this.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);if(this.width>f.MAX_RESIZE_WIDTH||this.height>f.MAX_RESIZE_HEIGHT)throw new n.ImageError(n.ImageError.MAX_RESOLUTION_ERR);this.exec("Image","downsize",t.width,t.height,t.crop,t.preserveHeaders)}catch(r){this.trigger("error",r.code)}},crop:function(e,t,n){this.downsize(e,t,!0,n)},getAsCanvas:function(){if(!u.can("create_canvas"))throw new n.RuntimeError(n.RuntimeError.NOT_SUPPORTED_ERR);var e=this.connectRuntime(this.ruid);return e.exec.call(this,"Image","getAsCanvas")},getAsBlob:function(e,t){if(!this.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);return this.exec("Image","getAsBlob",e||"image/jpeg",t||90)},getAsDataURL:function(e,t){if(!this.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);return this.exec("Image","getAsDataURL",e||"image/jpeg",t||90)},getAsBinaryString:function(e,t){var n=this.getAsDataURL(e,t);return h.atob(n.substring(n.indexOf("base64,")+7))},embed:function(i,r){function o(t,r){var o=this;if(u.can("create_canvas")){var l=o.getAsCanvas();if(l)return i.appendChild(l),l=null,o.destroy(),void a.trigger("embedded")}var d=o.getAsDataURL(t,r);if(!d)throw new n.ImageError(n.ImageError.WRONG_FORMAT);if(u.can("use_data_uri_of",d.length))i.innerHTML='<img src="'+d+'" width="'+o.width+'" height="'+o.height+'" />',o.destroy(),a.trigger("embedded");else{var f=new s;f.bind("TransportingComplete",function(){c=a.connectRuntime(this.result.ruid),a.bind("Embedded",function(){e.extend(c.getShimContainer().style,{top:"0px",left:"0px",width:o.width+"px",height:o.height+"px"}),c=null},999),c.exec.call(a,"ImageView","display",this.result.uid,width,height),o.destroy()}),f.transport(h.atob(d.substring(d.indexOf("base64,")+7)),t,{required_caps:{display_media:!0},runtime_order:"flash,silverlight",container:i})}}var a=this,c;r=e.extend({width:this.width,height:this.height,type:this.type||"image/jpeg",quality:90},r||{});try{if(!(i=t.get(i)))throw new n.DOMException(n.DOMException.INVALID_NODE_TYPE_ERR);if(!this.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);this.width>f.MAX_RESIZE_WIDTH||this.height>f.MAX_RESIZE_HEIGHT;var l=new f;return l.bind("Resize",function(){o.call(this,r.type,r.quality)}),l.bind("Load",function(){l.downsize(r)}),this.meta.thumb&&this.meta.thumb.width>=r.width&&this.meta.thumb.height>=r.height?l.load(this.meta.thumb.data):l.clone(this,!1),l}catch(d){this.trigger("error",d.code)}},destroy:function(){this.ruid&&(this.getRuntime().exec.call(this,"Image","destroy"),this.disconnectRuntime()),this.unbindAll()}}),this.handleEventProps(p),this.bind("Load Resize",function(){i.call(this)},999)}var p=["progress","load","error","resize","embedded"];return f.MAX_RESIZE_WIDTH=8192,f.MAX_RESIZE_HEIGHT=8192,f.prototype=c.instance,f}),i(D,[u,f,m,c],function(e,t,n,i){function r(t){var r=this,s=n.capTest,u=n.capTrue,c=e.extend({access_binary:s(window.FileReader||window.File&&window.File.getAsDataURL),access_image_binary:function(){return r.can("access_binary")&&!!a.Image},display_media:s(i.can("create_canvas")||i.can("use_data_uri_over32kb")),do_cors:s(window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest),drag_and_drop:s(function(){var e=document.createElement("div");return("draggable"in e||"ondragstart"in e&&"ondrop"in e)&&("IE"!==i.browser||i.verComp(i.version,9,">"))}()),filter_by_extension:s(function(){return"Chrome"===i.browser&&i.verComp(i.version,28,">=")||"IE"===i.browser&&i.verComp(i.version,10,">=")||"Safari"===i.browser&&i.verComp(i.version,7,">=")}()),return_response_headers:u,return_response_type:function(e){return"json"===e&&window.JSON?!0:i.can("return_response_type",e)},return_status_code:u,report_upload_progress:s(window.XMLHttpRequest&&(new XMLHttpRequest).upload),resize_image:function(){return r.can("access_binary")&&i.can("create_canvas")},select_file:function(){return i.can("use_fileinput")&&window.File},select_folder:function(){return r.can("select_file")&&"Chrome"===i.browser&&i.verComp(i.version,21,">=")},select_multiple:function(){return!(!r.can("select_file")||"Safari"===i.browser&&"Windows"===i.os||"iOS"===i.os&&i.verComp(i.osVersion,"7.0.0",">")&&i.verComp(i.osVersion,"8.0.0","<"))},send_binary_string:s(window.XMLHttpRequest&&((new XMLHttpRequest).sendAsBinary||window.Uint8Array&&window.ArrayBuffer)),send_custom_headers:s(window.XMLHttpRequest),send_multipart:function(){return!!(window.XMLHttpRequest&&(new XMLHttpRequest).upload&&window.FormData)||r.can("send_binary_string")},slice_blob:s(window.File&&(File.prototype.mozSlice||File.prototype.webkitSlice||File.prototype.slice)),stream_upload:function(){return r.can("slice_blob")&&r.can("send_multipart")},summon_file_dialog:function(){return r.can("select_file")&&("Firefox"===i.browser&&i.verComp(i.version,4,">=")||"Opera"===i.browser&&i.verComp(i.version,12,">=")||"IE"===i.browser&&i.verComp(i.version,10,">=")||!!~e.inArray(i.browser,["Chrome","Safari"]))},upload_filesize:u},arguments[2]);n.call(this,t,arguments[1]||o,c),e.extend(this,{init:function(){this.trigger("Init")},destroy:function(e){return function(){e.call(r),e=r=null}}(this.destroy)}),e.extend(this.getShim(),a)}var o="html5",a={};return n.addConstructor(o,r),a}),i(N,[u],function(e){function t(){this.returnValue=!1}function n(){this.cancelBubble=!0}var i={},r="moxie_"+e.guid(),o=function(o,a,s,u){var c,l;a=a.toLowerCase(),o.addEventListener?(c=s,o.addEventListener(a,c,!1)):o.attachEvent&&(c=function(){var e=window.event;e.target||(e.target=e.srcElement),e.preventDefault=t,e.stopPropagation=n,s(e)},o.attachEvent("on"+a,c)),o[r]||(o[r]=e.guid()),i.hasOwnProperty(o[r])||(i[o[r]]={}),l=i[o[r]],l.hasOwnProperty(a)||(l[a]=[]),l[a].push({func:c,orig:s,key:u})},a=function(t,n,o){var a,s;if(n=n.toLowerCase(),t[r]&&i[t[r]]&&i[t[r]][n]){a=i[t[r]][n];for(var u=a.length-1;u>=0&&(a[u].orig!==o&&a[u].key!==o||(t.removeEventListener?t.removeEventListener(n,a[u].func,!1):t.detachEvent&&t.detachEvent("on"+n,a[u].func),a[u].orig=null,a[u].func=null,a.splice(u,1),o===s));u--);if(a.length||delete i[t[r]][n],e.isEmptyObj(i[t[r]])){delete i[t[r]];try{delete t[r]}catch(c){t[r]=s}}}},s=function(t,n){t&&t[r]&&e.each(i[t[r]],function(e,i){a(t,i,n)})};return{addEvent:o,removeEvent:a,removeAllEvents:s}}),i(L,[D,E,u,h,N,d,c],function(e,t,n,i,r,o,a){function s(){var e;n.extend(this,{init:function(s){var u=this,c=u.getRuntime(),l,d,h,f,p,m;e=s,h=e.accept.mimes||o.extList2mimes(e.accept,c.can("filter_by_extension")),d=c.getShimContainer(),d.innerHTML='<input id="'+c.uid+'" type="file" style="font-size:999px;opacity:0;"'+(e.multiple&&c.can("select_multiple")?"multiple":"")+(e.directory&&c.can("select_folder")?"webkitdirectory directory":"")+(h?' accept="'+h.join(",")+'"':"")+" />",l=i.get(c.uid),n.extend(l.style,{position:"absolute",top:0,left:0,width:"100%",height:"100%"}),f=i.get(e.browse_button),c.can("summon_file_dialog")&&("static"===i.getStyle(f,"position")&&(f.style.position="relative"),p=parseInt(i.getStyle(f,"z-index"),10)||1,f.style.zIndex=p,d.style.zIndex=p-1,r.addEvent(f,"click",function(e){var t=i.get(c.uid);t&&!t.disabled&&t.click(),e.preventDefault()},u.uid)),m=c.can("summon_file_dialog")?f:d,r.addEvent(m,"mouseover",function(){u.trigger("mouseenter")},u.uid),r.addEvent(m,"mouseout",function(){u.trigger("mouseleave")},u.uid),r.addEvent(m,"mousedown",function(){u.trigger("mousedown")},u.uid),r.addEvent(i.get(e.container),"mouseup",function(){u.trigger("mouseup")},u.uid),l.onchange=function g(i){if(u.files=[],n.each(this.files,function(n){var i="";return e.directory&&"."==n.name?!0:(n.webkitRelativePath&&(i="/"+n.webkitRelativePath.replace(/^\//,"")),n=new t(c.uid,n),n.relativePath=i,void u.files.push(n))}),"IE"!==a.browser&&"IEMobile"!==a.browser)this.value="";else{var r=this.cloneNode(!0);this.parentNode.replaceChild(r,this),r.onchange=g}u.files.length&&u.trigger("change")},u.trigger({type:"ready",async:!0}),d=null},disable:function(e){var t=this.getRuntime(),n;(n=i.get(t.uid))&&(n.disabled=!!e)},destroy:function(){var t=this.getRuntime(),n=t.getShim(),o=t.getShimContainer();r.removeAllEvents(o,this.uid),r.removeAllEvents(e&&i.get(e.container),this.uid),r.removeAllEvents(e&&i.get(e.browse_button),this.uid),o&&(o.innerHTML=""),n.removeInstance(this.uid),e=o=n=null}})}return e.FileInput=s}),i(C,[D,y],function(e,t){function n(){function e(e,t,n){var i;if(!window.File.prototype.slice)return(i=window.File.prototype.webkitSlice||window.File.prototype.mozSlice)?i.call(e,t,n):null;try{return e.slice(),e.slice(t,n)}catch(r){return e.slice(t,n-t)}}this.slice=function(){return new t(this.getRuntime().uid,e.apply(this,arguments))}}return e.Blob=n}),i(M,[D,E,u,h,N,d],function(e,t,n,i,r,o){function a(){function e(e){if(!e.dataTransfer||!e.dataTransfer.types)return!1;var t=n.toArray(e.dataTransfer.types||[]);return-1!==n.inArray("Files",t)||-1!==n.inArray("public.file-url",t)||-1!==n.inArray("application/x-moz-file",t)}function a(e,n){if(u(e)){var i=new t(g,e);i.relativePath=n||"",f.push(i)}}function s(e){for(var t=[],i=0;i<e.length;i++)[].push.apply(t,e[i].extensions.split(/\s*,\s*/));return-1===n.inArray("*",t)?t:[]}function u(e){if(!p.length)return!0;var t=o.getFileExtension(e.name);return!t||-1!==n.inArray(t,p)}function c(e,t){var i=[];n.each(e,function(e){var t=e.webkitGetAsEntry();t&&(t.isFile?a(e.getAsFile(),t.fullPath):i.push(t))}),i.length?l(i,t):t()}function l(e,t){var i=[];n.each(e,function(e){i.push(function(t){d(e,t)})}),n.inSeries(i,function(){t()})}function d(e,t){e.isFile?e.file(function(n){a(n,e.fullPath),t()},function(){t()}):e.isDirectory?h(e,t):t()}function h(e,t){function n(e){r.readEntries(function(t){t.length?([].push.apply(i,t),n(e)):e()},e)}var i=[],r=e.createReader();n(function(){l(i,t)})}var f=[],p=[],m,g;n.extend(this,{init:function(t){var i=this,o;m=t,g=i.ruid,p=s(m.accept),o=m.container,r.addEvent(o,"dragover",function(t){e(t)&&(t.preventDefault(),t.dataTransfer.dropEffect="copy")},i.uid),r.addEvent(o,"drop",function(t){e(t)&&(t.preventDefault(),f=[],t.dataTransfer.items&&t.dataTransfer.items[0].webkitGetAsEntry?c(t.dataTransfer.items,function(){i.files=f,i.trigger("drop")}):(n.each(t.dataTransfer.files,function(e){a(e)}),i.files=f,i.trigger("drop")))},i.uid),r.addEvent(o,"dragenter",function(e){i.trigger("dragenter")},i.uid),r.addEvent(o,"dragleave",function(e){i.trigger("dragleave")},i.uid)},destroy:function(){r.removeAllEvents(m&&i.get(m.container),this.uid),g=f=p=m=null}})}return e.FileDrop=a}),i(F,[D,w,u],function(e,t,n){function i(){function e(e){return t.atob(e.substring(e.indexOf("base64,")+7))}var i,r=!1;n.extend(this,{read:function(t,o){var a=this;a.result="",i=new window.FileReader,i.addEventListener("progress",function(e){a.trigger(e)}),i.addEventListener("load",function(t){a.result=r?e(i.result):i.result,a.trigger(t)}),i.addEventListener("error",function(e){a.trigger(e,i.error)}),i.addEventListener("loadend",function(e){i=null,a.trigger(e)}),"function"===n.typeOf(i[t])?(r=!1,i[t](o.getSource())):"readAsBinaryString"===t&&(r=!0,i.readAsDataURL(o.getSource()))},abort:function(){i&&i.abort()},destroy:function(){i=null}})}return e.FileReader=i}),i(P,[D,u,d,x,E,y,I,f,c],function(e,t,n,i,r,o,a,s,u){function c(){function e(e,t){var n=this,i,r;i=t.getBlob().getSource(),r=new window.FileReader,r.onload=function(){t.append(t.getBlobName(),new o(null,{type:i.type,data:r.result})),h.send.call(n,e,t)},r.readAsBinaryString(i)}function c(){return!window.XMLHttpRequest||"IE"===u.browser&&u.verComp(u.version,8,"<")?function(){for(var e=["Msxml2.XMLHTTP.6.0","Microsoft.XMLHTTP"],t=0;t<e.length;t++)try{return new ActiveXObject(e[t])}catch(n){}}():new window.XMLHttpRequest}function l(e){var t=e.responseXML,n=e.responseText;return"IE"===u.browser&&n&&t&&!t.documentElement&&/[^\/]+\/[^\+]+\+xml/.test(e.getResponseHeader("Content-Type"))&&(t=new window.ActiveXObject("Microsoft.XMLDOM"),t.async=!1,t.validateOnParse=!1,t.loadXML(n)),t&&("IE"===u.browser&&0!==t.parseError||!t.documentElement||"parsererror"===t.documentElement.tagName)?null:t}function d(e){var t="----moxieboundary"+(new Date).getTime(),n="--",i="\r\n",r="",a=this.getRuntime();if(!a.can("send_binary_string"))throw new s.RuntimeError(s.RuntimeError.NOT_SUPPORTED_ERR);return f.setRequestHeader("Content-Type","multipart/form-data; boundary="+t),e.each(function(e,a){r+=e instanceof o?n+t+i+'Content-Disposition: form-data; name="'+a+'"; filename="'+unescape(encodeURIComponent(e.name||"blob"))+'"'+i+"Content-Type: "+(e.type||"application/octet-stream")+i+i+e.getSource()+i:n+t+i+'Content-Disposition: form-data; name="'+a+'"'+i+i+unescape(encodeURIComponent(e))+i}),r+=n+t+n+i}var h=this,f,p;t.extend(this,{send:function(n,r){var s=this,l="Mozilla"===u.browser&&u.verComp(u.version,4,">=")&&u.verComp(u.version,7,"<"),h="Android Browser"===u.browser,m=!1;if(p=n.url.replace(/^.+?\/([\w\-\.]+)$/,"$1").toLowerCase(),f=c(),f.open(n.method,n.url,n.async,n.user,n.password),r instanceof o)r.isDetached()&&(m=!0),r=r.getSource();else if(r instanceof a){if(r.hasBlob())if(r.getBlob().isDetached())r=d.call(s,r),m=!0;else if((l||h)&&"blob"===t.typeOf(r.getBlob().getSource())&&window.FileReader)return void e.call(s,n,r);if(r instanceof a){var g=new window.FormData;r.each(function(e,t){e instanceof o?g.append(t,e.getSource()):g.append(t,e)}),r=g}}f.upload?(n.withCredentials&&(f.withCredentials=!0),f.addEventListener("load",function(e){s.trigger(e)}),f.addEventListener("error",function(e){s.trigger(e)}),f.addEventListener("progress",function(e){s.trigger(e)}),f.upload.addEventListener("progress",function(e){s.trigger({type:"UploadProgress",loaded:e.loaded,total:e.total})})):f.onreadystatechange=function v(){switch(f.readyState){case 1:break;case 2:break;case 3:var e,t;try{i.hasSameOrigin(n.url)&&(e=f.getResponseHeader("Content-Length")||0),f.responseText&&(t=f.responseText.length)}catch(r){e=t=0}s.trigger({type:"progress",lengthComputable:!!e,total:parseInt(e,10),loaded:t});break;case 4:f.onreadystatechange=function(){},s.trigger(0===f.status?"error":"load")}},t.isEmptyObj(n.headers)||t.each(n.headers,function(e,t){f.setRequestHeader(t,e)}),""!==n.responseType&&"responseType"in f&&("json"!==n.responseType||u.can("return_response_type","json")?f.responseType=n.responseType:f.responseType="text"),m?f.sendAsBinary?f.sendAsBinary(r):!function(){for(var e=new Uint8Array(r.length),t=0;t<r.length;t++)e[t]=255&r.charCodeAt(t);f.send(e.buffer)}():f.send(r),s.trigger("loadstart")},getStatus:function(){try{if(f)return f.status}catch(e){}return 0},getResponse:function(e){var t=this.getRuntime();try{switch(e){case"blob":var i=new r(t.uid,f.response),o=f.getResponseHeader("Content-Disposition");if(o){var a=o.match(/filename=([\'\"'])([^\1]+)\1/);a&&(p=a[2])}return i.name=p,i.type||(i.type=n.getFileMime(p)),i;case"json":return u.can("return_response_type","json")?f.response:200===f.status&&window.JSON?JSON.parse(f.responseText):null;case"document":return l(f);default:return""!==f.responseText?f.responseText:null}}catch(s){return null}},getAllResponseHeaders:function(){try{return f.getAllResponseHeaders()}catch(e){}return""},abort:function(){f&&f.abort()},destroy:function(){h=p=null}})}return e.XMLHttpRequest=c}),i(H,[u],function(e){function t(e){e instanceof ArrayBuffer?n.apply(this,arguments):i.apply(this,arguments)}function n(t){var n=new DataView(t);e.extend(this,{readByteAt:function(e){return n.getUint8(e)},writeByteAt:function(e,t){n.setUint8(e,t)},SEGMENT:function(e,i,r){switch(arguments.length){case 2:return t.slice(e,e+i);case 1:return t.slice(e);case 3:if(null===r&&(r=new ArrayBuffer),r instanceof ArrayBuffer){var o=new Uint8Array(this.length()-i+r.byteLength);e>0&&o.set(new Uint8Array(t.slice(0,e)),0),o.set(new Uint8Array(r),e),o.set(new Uint8Array(t.slice(e+i)),e+r.byteLength),this.clear(),t=o.buffer,n=new DataView(t);break}default:return t}},length:function(){return t?t.byteLength:0},clear:function(){n=t=null}})}function i(t){function n(e,n,i){i=3===arguments.length?i:t.length-n-1,t=t.substr(0,n)+e+t.substr(i+n)}e.extend(this,{readByteAt:function(e){return t.charCodeAt(e)},writeByteAt:function(e,t){n(String.fromCharCode(t),e,1)},SEGMENT:function(e,i,r){switch(arguments.length){case 1:return t.substr(e);case 2:return t.substr(e,i);case 3:n(null!==r?r:"",e,i);break;default:return t}},length:function(){return t?t.length:0},clear:function(){t=null}})}return e.extend(t.prototype,{littleEndian:!1,read:function(e,t){var n,i,r;if(e+t>this.length())throw new Error("You are trying to read outside the source boundaries.");for(i=this.littleEndian?0:-8*(t-1),r=0,n=0;t>r;r++)n|=this.readByteAt(e+r)<<Math.abs(i+8*r);return n},write:function(e,t,n){var i,r,o="";if(e>this.length())throw new Error("You are trying to write outside the source boundaries.");for(i=this.littleEndian?0:-8*(n-1),r=0;n>r;r++)this.writeByteAt(e+r,t>>Math.abs(i+8*r)&255)},BYTE:function(e){return this.read(e,1)},SHORT:function(e){return this.read(e,2)},LONG:function(e){return this.read(e,4)},SLONG:function(e){var t=this.read(e,4);return t>2147483647?t-4294967296:t},CHAR:function(e){return String.fromCharCode(this.read(e,1))},STRING:function(e,t){return this.asArray("CHAR",e,t).join("")},asArray:function(e,t,n){for(var i=[],r=0;n>r;r++)i[r]=this[e](t+r);return i}}),t}),i(B,[H,f],function(e,t){return function n(i){var r=[],o,a,s,u=0;if(o=new e(i),65496!==o.SHORT(0))throw o.clear(),new t.ImageError(t.ImageError.WRONG_FORMAT);for(a=2;a<=o.length();)if(s=o.SHORT(a),s>=65488&&65495>=s)a+=2;else{if(65498===s||65497===s)break;u=o.SHORT(a+2)+2,s>=65505&&65519>=s&&r.push({hex:s,name:"APP"+(15&s),start:a,length:u,segment:o.SEGMENT(a,u)}),a+=u}return o.clear(),{headers:r,restore:function(t){var n,i,o;for(o=new e(t),a=65504==o.SHORT(2)?4+o.SHORT(4):2,i=0,n=r.length;n>i;i++)o.SEGMENT(a,0,r[i].segment),a+=r[i].length;return t=o.SEGMENT(),o.clear(),t},strip:function(t){var i,r,o,a;for(o=new n(t),r=o.headers,o.purge(),i=new e(t),a=r.length;a--;)i.SEGMENT(r[a].start,r[a].length,"");return t=i.SEGMENT(),i.clear(),t},get:function(e){for(var t=[],n=0,i=r.length;i>n;n++)r[n].name===e.toUpperCase()&&t.push(r[n].segment);return t},
set:function(e,t){var n=[],i,o,a;for("string"==typeof t?n.push(t):n=t,i=o=0,a=r.length;a>i&&(r[i].name===e.toUpperCase()&&(r[i].segment=n[o],r[i].length=n[o].length,o++),!(o>=n.length));i++);},purge:function(){this.headers=r=[]}}}}),i(k,[u,H,f],function(e,n,i){function r(o){function a(n,r){var o=this,a,s,u,c,h,f,p,m,g=[],v={},w={1:"BYTE",7:"UNDEFINED",2:"ASCII",3:"SHORT",4:"LONG",5:"RATIONAL",9:"SLONG",10:"SRATIONAL"},y={BYTE:1,UNDEFINED:1,ASCII:1,SHORT:2,LONG:4,RATIONAL:8,SLONG:4,SRATIONAL:8};for(a=o.SHORT(n),s=0;a>s;s++)if(g=[],p=n+2+12*s,u=r[o.SHORT(p)],u!==t){if(c=w[o.SHORT(p+=2)],h=o.LONG(p+=2),f=y[c],!f)throw new i.ImageError(i.ImageError.INVALID_META_ERR);if(p+=4,f*h>4&&(p=o.LONG(p)+d.tiffHeader),p+f*h>=this.length())throw new i.ImageError(i.ImageError.INVALID_META_ERR);"ASCII"!==c?(g=o.asArray(c,p,h),m=1==h?g[0]:g,l.hasOwnProperty(u)&&"object"!=typeof m?v[u]=l[u][m]:v[u]=m):v[u]=e.trim(o.STRING(p,h).replace(/\0$/,""))}return v}function s(e,t,n){var i,r,o,a=0;if("string"==typeof t){var s=c[e.toLowerCase()];for(var u in s)if(s[u]===t){t=u;break}}i=d[e.toLowerCase()+"IFD"],r=this.SHORT(i);for(var l=0;r>l;l++)if(o=i+12*l+2,this.SHORT(o)==t){a=o+8;break}if(!a)return!1;try{this.write(a,n,4)}catch(h){return!1}return!0}var u,c,l,d,h,f;if(n.call(this,o),c={tiff:{274:"Orientation",270:"ImageDescription",271:"Make",272:"Model",305:"Software",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},exif:{36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37386:"FocalLength",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},gps:{0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"},thumb:{513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength"}},l={ColorSpace:{1:"sRGB",0:"Uncalibrated"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 -5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},ExposureMode:{0:"Auto exposure",1:"Manual exposure",2:"Auto bracket"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},GPSLatitudeRef:{N:"North latitude",S:"South latitude"},GPSLongitudeRef:{E:"East longitude",W:"West longitude"}},d={tiffHeader:10},h=d.tiffHeader,u={clear:this.clear},e.extend(this,{read:function(){try{return r.prototype.read.apply(this,arguments)}catch(e){throw new i.ImageError(i.ImageError.INVALID_META_ERR)}},write:function(){try{return r.prototype.write.apply(this,arguments)}catch(e){throw new i.ImageError(i.ImageError.INVALID_META_ERR)}},UNDEFINED:function(){return this.BYTE.apply(this,arguments)},RATIONAL:function(e){return this.LONG(e)/this.LONG(e+4)},SRATIONAL:function(e){return this.SLONG(e)/this.SLONG(e+4)},ASCII:function(e){return this.CHAR(e)},TIFF:function(){return f||null},EXIF:function(){var t=null;if(d.exifIFD){try{t=a.call(this,d.exifIFD,c.exif)}catch(n){return null}if(t.ExifVersion&&"array"===e.typeOf(t.ExifVersion)){for(var i=0,r="";i<t.ExifVersion.length;i++)r+=String.fromCharCode(t.ExifVersion[i]);t.ExifVersion=r}}return t},GPS:function(){var t=null;if(d.gpsIFD){try{t=a.call(this,d.gpsIFD,c.gps)}catch(n){return null}t.GPSVersionID&&"array"===e.typeOf(t.GPSVersionID)&&(t.GPSVersionID=t.GPSVersionID.join("."))}return t},thumb:function(){if(d.IFD1)try{var e=a.call(this,d.IFD1,c.thumb);if("JPEGInterchangeFormat"in e)return this.SEGMENT(d.tiffHeader+e.JPEGInterchangeFormat,e.JPEGInterchangeFormatLength)}catch(t){}return null},setExif:function(e,t){return"PixelXDimension"!==e&&"PixelYDimension"!==e?!1:s.call(this,"exif",e,t)},clear:function(){u.clear(),o=c=l=f=d=u=null}}),65505!==this.SHORT(0)||"EXIF\x00"!==this.STRING(4,5).toUpperCase())throw new i.ImageError(i.ImageError.INVALID_META_ERR);if(this.littleEndian=18761==this.SHORT(h),42!==this.SHORT(h+=2))throw new i.ImageError(i.ImageError.INVALID_META_ERR);d.IFD0=d.tiffHeader+this.LONG(h+=2),f=a.call(this,d.IFD0,c.tiff),"ExifIFDPointer"in f&&(d.exifIFD=d.tiffHeader+f.ExifIFDPointer,delete f.ExifIFDPointer),"GPSInfoIFDPointer"in f&&(d.gpsIFD=d.tiffHeader+f.GPSInfoIFDPointer,delete f.GPSInfoIFDPointer),e.isEmptyObj(f)&&(f=null);var p=this.LONG(d.IFD0+12*this.SHORT(d.IFD0)+2);p&&(d.IFD1=d.tiffHeader+p)}return r.prototype=n.prototype,r}),i(U,[u,f,B,H,k],function(e,t,n,i,r){function o(o){function a(e){var t=0,n,i;for(e||(e=c);t<=e.length();){if(n=e.SHORT(t+=2),n>=65472&&65475>=n)return t+=5,{height:e.SHORT(t),width:e.SHORT(t+=2)};i=e.SHORT(t+=2),t+=i-2}return null}function s(){var e=d.thumb(),t,n;return e&&(t=new i(e),n=a(t),t.clear(),n)?(n.data=e,n):null}function u(){d&&l&&c&&(d.clear(),l.purge(),c.clear(),h=l=d=c=null)}var c,l,d,h;if(c=new i(o),65496!==c.SHORT(0))throw new t.ImageError(t.ImageError.WRONG_FORMAT);l=new n(o);try{d=new r(l.get("app1")[0])}catch(f){}h=a.call(this),e.extend(this,{type:"image/jpeg",size:c.length(),width:h&&h.width||0,height:h&&h.height||0,setExif:function(t,n){return d?("object"===e.typeOf(t)?e.each(t,function(e,t){d.setExif(t,e)}):d.setExif(t,n),void l.set("app1",d.SEGMENT())):!1},writeHeaders:function(){return l.restore(arguments.length?arguments[0]:o)},stripHeaders:function(e){return l.strip(e)},purge:function(){u.call(this)}}),d&&(this.meta={tiff:d.TIFF(),exif:d.EXIF(),gps:d.GPS(),thumb:s()})}return o}),i(G,[f,u,H],function(e,t,n){function i(i){function r(){var e,t;return e=a.call(this,8),"IHDR"==e.type?(t=e.start,{width:s.LONG(t),height:s.LONG(t+=4)}):null}function o(){s&&(s.clear(),i=l=u=c=s=null)}function a(e){var t,n,i,r;return t=s.LONG(e),n=s.STRING(e+=4,4),i=e+=4,r=s.LONG(e+t),{length:t,type:n,start:i,CRC:r}}var s,u,c,l;s=new n(i),function(){var t=0,n=0,i=[35152,20039,3338,6666];for(n=0;n<i.length;n++,t+=2)if(i[n]!=s.SHORT(t))throw new e.ImageError(e.ImageError.WRONG_FORMAT)}(),l=r.call(this),t.extend(this,{type:"image/png",size:s.length(),width:l.width,height:l.height,purge:function(){o.call(this)}}),o.call(this)}return i}),i(z,[u,f,U,G],function(e,t,n,i){return function(r){var o=[n,i],a;a=function(){for(var e=0;e<o.length;e++)try{return new o[e](r)}catch(n){}throw new t.ImageError(t.ImageError.WRONG_FORMAT)}(),e.extend(this,{type:"",size:0,width:0,height:0,setExif:function(){},writeHeaders:function(e){return e},stripHeaders:function(e){return e},purge:function(){r=null}}),e.extend(this,a),this.purge=function(){a.purge(),a=null}}}),i(q,[],function(){function e(e,i,r){var o=e.naturalWidth,a=e.naturalHeight,s=r.width,u=r.height,c=r.x||0,l=r.y||0,d=i.getContext("2d");t(e)&&(o/=2,a/=2);var h=1024,f=document.createElement("canvas");f.width=f.height=h;for(var p=f.getContext("2d"),m=n(e,o,a),g=0;a>g;){for(var v=g+h>a?a-g:h,w=0;o>w;){var y=w+h>o?o-w:h;p.clearRect(0,0,h,h),p.drawImage(e,-w,-g);var E=w*s/o+c<<0,_=Math.ceil(y*s/o),b=g*u/a/m+l<<0,x=Math.ceil(v*u/a/m);d.drawImage(f,0,0,y,v,E,b,_,x),w+=h}g+=h}f=p=null}function t(e){var t=e.naturalWidth,n=e.naturalHeight;if(t*n>1048576){var i=document.createElement("canvas");i.width=i.height=1;var r=i.getContext("2d");return r.drawImage(e,-t+1,0),0===r.getImageData(0,0,1,1).data[3]}return!1}function n(e,t,n){var i=document.createElement("canvas");i.width=1,i.height=n;var r=i.getContext("2d");r.drawImage(e,0,0);for(var o=r.getImageData(0,0,1,n).data,a=0,s=n,u=n;u>a;){var c=o[4*(u-1)+3];0===c?s=u:a=u,u=s+a>>1}i=null;var l=u/n;return 0===l?1:l}return{isSubsampled:t,renderTo:e}}),i(j,[D,u,f,w,y,E,z,q,d,c],function(e,t,n,i,r,o,a,s,u,c){function l(){function e(){if(!_&&!y)throw new n.ImageError(n.DOMException.INVALID_STATE_ERR);return _||y}function l(e){return i.atob(e.substring(e.indexOf("base64,")+7))}function d(e,t){return"data:"+(t||"")+";base64,"+i.btoa(e)}function h(e){var t=this;y=new Image,y.onerror=function(){v.call(this),t.trigger("error",n.ImageError.WRONG_FORMAT)},y.onload=function(){t.trigger("load")},y.src="data:"==e.substr(0,5)?e:d(e,x.type)}function f(e,t){var i=this,r;return window.FileReader?(r=new FileReader,r.onload=function(){t(this.result)},r.onerror=function(){i.trigger("error",n.ImageError.WRONG_FORMAT)},r.readAsDataURL(e),void 0):t(e.getAsDataURL())}function p(n,i,r,o){var a=this,s,u,c=0,l=0,d,h,f,p;if(A=o,p=this.meta&&this.meta.tiff&&this.meta.tiff.Orientation||1,-1!==t.inArray(p,[5,6,7,8])){var v=n;n=i,i=v}return d=e(),r?(n=Math.min(n,d.width),i=Math.min(i,d.height),s=Math.max(n/d.width,i/d.height)):s=Math.min(n/d.width,i/d.height),s>1&&!r&&o?void this.trigger("Resize"):(_||(_=document.createElement("canvas")),h=Math.round(d.width*s),f=Math.round(d.height*s),r?(_.width=n,_.height=i,h>n&&(c=Math.round((h-n)/2)),f>i&&(l=Math.round((f-i)/2))):(_.width=h,_.height=f),A||g(_.width,_.height,p),m.call(this,d,_,-c,-l,h,f),this.width=_.width,this.height=_.height,R=!0,void a.trigger("Resize"))}function m(e,t,n,i,r,o){if("iOS"===c.OS)s.renderTo(e,t,{width:r,height:o,x:n,y:i});else{var a=t.getContext("2d");a.drawImage(e,n,i,r,o)}}function g(e,t,n){switch(n){case 5:case 6:case 7:case 8:_.width=t,_.height=e;break;default:_.width=e,_.height=t}var i=_.getContext("2d");switch(n){case 2:i.translate(e,0),i.scale(-1,1);break;case 3:i.translate(e,t),i.rotate(Math.PI);break;case 4:i.translate(0,t),i.scale(1,-1);break;case 5:i.rotate(.5*Math.PI),i.scale(1,-1);break;case 6:i.rotate(.5*Math.PI),i.translate(0,-t);break;case 7:i.rotate(.5*Math.PI),i.translate(e,-t),i.scale(-1,1);break;case 8:i.rotate(-.5*Math.PI),i.translate(-e,0)}}function v(){E&&(E.purge(),E=null),b=y=_=x=null,R=!1}var w=this,y,E,_,b,x,R=!1,A=!0;t.extend(this,{loadFromBlob:function(e){var t=this,i=t.getRuntime(),r=arguments.length>1?arguments[1]:!0;if(!i.can("access_binary"))throw new n.RuntimeError(n.RuntimeError.NOT_SUPPORTED_ERR);return x=e,e.isDetached()?(b=e.getSource(),void h.call(this,b)):void f.call(this,e.getSource(),function(e){r&&(b=l(e)),h.call(t,e)})},loadFromImage:function(e,t){this.meta=e.meta,x=new o(null,{name:e.name,size:e.size,type:e.type}),h.call(this,t?b=e.getAsBinaryString():e.getAsDataURL())},getInfo:function(){var t=this.getRuntime(),n;return!E&&b&&t.can("access_image_binary")&&(E=new a(b)),n={width:e().width||0,height:e().height||0,type:x.type||u.getFileMime(x.name),size:b&&b.length||x.size||0,name:x.name||"",meta:E&&E.meta||this.meta||{}},!n.meta||!n.meta.thumb||n.meta.thumb.data instanceof r||(n.meta.thumb.data=new r(null,{type:"image/jpeg",data:n.meta.thumb.data})),n},downsize:function(){p.apply(this,arguments)},getAsCanvas:function(){return _&&(_.id=this.uid+"_canvas"),_},getAsBlob:function(e,t){return e!==this.type&&p.call(this,this.width,this.height,!1),new o(null,{name:x.name||"",type:e,data:w.getAsBinaryString.call(this,e,t)})},getAsDataURL:function(e){var t=arguments[1]||90;if(!R)return y.src;if("image/jpeg"!==e)return _.toDataURL("image/png");try{return _.toDataURL("image/jpeg",t/100)}catch(n){return _.toDataURL("image/jpeg")}},getAsBinaryString:function(e,t){if(!R)return b||(b=l(w.getAsDataURL(e,t))),b;if("image/jpeg"!==e)b=l(w.getAsDataURL(e,t));else{var n;t||(t=90);try{n=_.toDataURL("image/jpeg",t/100)}catch(i){n=_.toDataURL("image/jpeg")}b=l(n),E&&(b=E.stripHeaders(b),A&&(E.meta&&E.meta.exif&&E.setExif({PixelXDimension:this.width,PixelYDimension:this.height}),b=E.writeHeaders(b)),E.purge(),E=null)}return R=!1,b},destroy:function(){w=null,v.call(this),this.getRuntime().getShim().removeInstance(this.uid)}})}return e.Image=l}),i(X,[u,c,h,f,m],function(e,t,n,i,r){function o(){var e;try{e=navigator.plugins["Shockwave Flash"],e=e.description}catch(t){try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(n){e="0.0"}}return e=e.match(/\d+/g),parseFloat(e[0]+"."+e[1])}function a(e){var i=n.get(e);i&&"OBJECT"==i.nodeName&&("IE"===t.browser?(i.style.display="none",function r(){4==i.readyState?s(e):setTimeout(r,10)}()):i.parentNode.removeChild(i))}function s(e){var t=n.get(e);if(t){for(var i in t)"function"==typeof t[i]&&(t[i]=null);t.parentNode.removeChild(t)}}function u(s){var u=this,d;s=e.extend({swf_url:t.swf_url},s),r.call(this,s,c,{access_binary:function(e){return e&&"browser"===u.mode},access_image_binary:function(e){return e&&"browser"===u.mode},display_media:r.capTrue,do_cors:r.capTrue,drag_and_drop:!1,report_upload_progress:function(){return"client"===u.mode},resize_image:r.capTrue,return_response_headers:!1,return_response_type:function(t){return"json"===t&&window.JSON?!0:!e.arrayDiff(t,["","text","document"])||"browser"===u.mode},return_status_code:function(t){return"browser"===u.mode||!e.arrayDiff(t,[200,404])},select_file:r.capTrue,select_multiple:r.capTrue,send_binary_string:function(e){return e&&"browser"===u.mode},send_browser_cookies:function(e){return e&&"browser"===u.mode},send_custom_headers:function(e){return e&&"browser"===u.mode},send_multipart:r.capTrue,slice_blob:function(e){return e&&"browser"===u.mode},stream_upload:function(e){return e&&"browser"===u.mode},summon_file_dialog:!1,upload_filesize:function(t){return e.parseSizeStr(t)<=2097152||"client"===u.mode},use_http_method:function(t){return!e.arrayDiff(t,["GET","POST"])}},{access_binary:function(e){return e?"browser":"client"},access_image_binary:function(e){return e?"browser":"client"},report_upload_progress:function(e){return e?"browser":"client"},return_response_type:function(t){return e.arrayDiff(t,["","text","json","document"])?"browser":["client","browser"]},return_status_code:function(t){return e.arrayDiff(t,[200,404])?"browser":["client","browser"]},send_binary_string:function(e){return e?"browser":"client"},send_browser_cookies:function(e){return e?"browser":"client"},send_custom_headers:function(e){return e?"browser":"client"},stream_upload:function(e){return e?"client":"browser"},upload_filesize:function(t){return e.parseSizeStr(t)>=2097152?"client":"browser"}},"client"),o()<10&&(this.mode=!1),e.extend(this,{getShim:function(){return n.get(this.uid)},shimExec:function(e,t){var n=[].slice.call(arguments,2);return u.getShim().exec(this.uid,e,t,n)},init:function(){var n,r,o;o=this.getShimContainer(),e.extend(o.style,{position:"absolute",top:"-8px",left:"-8px",width:"9px",height:"9px",overflow:"hidden"}),n='<object id="'+this.uid+'" type="application/x-shockwave-flash" data="'+s.swf_url+'" ',"IE"===t.browser&&(n+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '),n+='width="100%" height="100%" style="outline:0"><param name="movie" value="'+s.swf_url+'" /><param name="flashvars" value="uid='+escape(this.uid)+"&target="+t.global_event_dispatcher+'" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>',"IE"===t.browser?(r=document.createElement("div"),o.appendChild(r),r.outerHTML=n,r=o=null):o.innerHTML=n,d=setTimeout(function(){u&&!u.initialized&&u.trigger("Error",new i.RuntimeError(i.RuntimeError.NOT_INIT_ERR))},5e3)},destroy:function(e){return function(){a(u.uid),e.call(u),clearTimeout(d),s=d=e=u=null}}(this.destroy)},l)}var c="flash",l={};return r.addConstructor(c,u),l}),i(V,[X,E,u],function(e,t,n){var i={init:function(e){var i=this,r=this.getRuntime();this.bind("Change",function(){var e=r.shimExec.call(i,"FileInput","getFiles");i.files=[],n.each(e,function(e){i.files.push(new t(r.uid,e))})},999),this.getRuntime().shimExec.call(this,"FileInput","init",{name:e.name,accept:e.accept,multiple:e.multiple}),this.trigger("ready")}};return e.FileInput=i}),i(W,[X,y],function(e,t){var n={slice:function(e,n,i,r){var o=this.getRuntime();return 0>n?n=Math.max(e.size+n,0):n>0&&(n=Math.min(n,e.size)),0>i?i=Math.max(e.size+i,0):i>0&&(i=Math.min(i,e.size)),e=o.shimExec.call(this,"Blob","slice",n,i,r||""),e&&(e=new t(o.uid,e)),e}};return e.Blob=n}),i(Y,[X,w],function(e,t){function n(e,n){switch(n){case"readAsText":return t.atob(e,"utf8");case"readAsBinaryString":return t.atob(e);case"readAsDataURL":return e}return null}var i={read:function(e,t){var i=this;return i.result="","readAsDataURL"===e&&(i.result="data:"+(t.type||"")+";base64,"),i.bind("Progress",function(t,r){r&&(i.result+=n(r,e))},999),i.getRuntime().shimExec.call(this,"FileReader","readAsBase64",t.uid)}};return e.FileReader=i}),i($,[X,w],function(e,t){function n(e,n){switch(n){case"readAsText":return t.atob(e,"utf8");case"readAsBinaryString":return t.atob(e);case"readAsDataURL":return e}return null}var i={read:function(e,t){var i,r=this.getRuntime();return(i=r.shimExec.call(this,"FileReaderSync","readAsBase64",t.uid))?("readAsDataURL"===e&&(i="data:"+(t.type||"")+";base64,"+i),n(i,e,t.type)):null}};return e.FileReaderSync=i}),i(J,[X,u,y,E,A,I,S],function(e,t,n,i,r,o,a){var s={send:function(e,i){function r(){e.transport=l.mode,l.shimExec.call(c,"XMLHttpRequest","send",e,i)}function s(e,t){l.shimExec.call(c,"XMLHttpRequest","appendBlob",e,t.uid),i=null,r()}function u(e,t){var n=new a;n.bind("TransportingComplete",function(){t(this.result)}),n.transport(e.getSource(),e.type,{ruid:l.uid})}var c=this,l=c.getRuntime();if(t.isEmptyObj(e.headers)||t.each(e.headers,function(e,t){l.shimExec.call(c,"XMLHttpRequest","setRequestHeader",t,e.toString())}),i instanceof o){var d;if(i.each(function(e,t){e instanceof n?d=t:l.shimExec.call(c,"XMLHttpRequest","append",t,e)}),i.hasBlob()){var h=i.getBlob();h.isDetached()?u(h,function(e){h.destroy(),s(d,e)}):s(d,h)}else i=null,r()}else i instanceof n?i.isDetached()?u(i,function(e){i.destroy(),i=e.uid,r()}):(i=i.uid,r()):r()},getResponse:function(e){var n,o,a=this.getRuntime();if(o=a.shimExec.call(this,"XMLHttpRequest","getResponseAsBlob")){if(o=new i(a.uid,o),"blob"===e)return o;try{if(n=new r,~t.inArray(e,["","text"]))return n.readAsText(o);if("json"===e&&window.JSON)return JSON.parse(n.readAsText(o))}finally{o.destroy()}}return null},abort:function(e){var t=this.getRuntime();t.shimExec.call(this,"XMLHttpRequest","abort"),this.dispatchEvent("readystatechange"),this.dispatchEvent("abort")}};return e.XMLHttpRequest=s}),i(Z,[X,y],function(e,t){var n={getAsBlob:function(e){var n=this.getRuntime(),i=n.shimExec.call(this,"Transporter","getAsBlob",e);return i?new t(n.uid,i):null}};return e.Transporter=n}),i(K,[X,u,S,y,A],function(e,t,n,i,r){var o={loadFromBlob:function(e){function t(e){r.shimExec.call(i,"Image","loadFromBlob",e.uid),i=r=null}var i=this,r=i.getRuntime();if(e.isDetached()){var o=new n;o.bind("TransportingComplete",function(){t(o.result.getSource())}),o.transport(e.getSource(),e.type,{ruid:r.uid})}else t(e.getSource())},loadFromImage:function(e){var t=this.getRuntime();return t.shimExec.call(this,"Image","loadFromImage",e.uid)},getInfo:function(){var e=this.getRuntime(),t=e.shimExec.call(this,"Image","getInfo");return!t.meta||!t.meta.thumb||t.meta.thumb.data instanceof i||(t.meta.thumb.data=new i(e.uid,t.meta.thumb.data)),t},getAsBlob:function(e,t){var n=this.getRuntime(),r=n.shimExec.call(this,"Image","getAsBlob",e,t);return r?new i(n.uid,r):null},getAsDataURL:function(){var e=this.getRuntime(),t=e.Image.getAsBlob.apply(this,arguments),n;return t?(n=new r,n.readAsDataURL(t)):null}};return e.Image=o}),i(Q,[u,c,h,f,m],function(e,t,n,i,r){function o(e){var t=!1,n=null,i,r,o,a,s,u=0;try{try{n=new ActiveXObject("AgControl.AgControl"),n.IsVersionSupported(e)&&(t=!0),n=null}catch(c){var l=navigator.plugins["Silverlight Plug-In"];if(l){for(i=l.description,"1.0.30226.2"===i&&(i="2.0.30226.2"),r=i.split(".");r.length>3;)r.pop();for(;r.length<4;)r.push(0);for(o=e.split(".");o.length>4;)o.pop();do a=parseInt(o[u],10),s=parseInt(r[u],10),u++;while(u<o.length&&a===s);s>=a&&!isNaN(a)&&(t=!0)}}}catch(d){t=!1}return t}function a(a){var c=this,l;a=e.extend({xap_url:t.xap_url},a),r.call(this,a,s,{access_binary:r.capTrue,access_image_binary:r.capTrue,display_media:r.capTrue,do_cors:r.capTrue,drag_and_drop:!1,report_upload_progress:r.capTrue,resize_image:r.capTrue,return_response_headers:function(e){return e&&"client"===c.mode},return_response_type:function(e){return"json"!==e?!0:!!window.JSON},return_status_code:function(t){return"client"===c.mode||!e.arrayDiff(t,[200,404])},select_file:r.capTrue,select_multiple:r.capTrue,send_binary_string:r.capTrue,send_browser_cookies:function(e){return e&&"browser"===c.mode},send_custom_headers:function(e){return e&&"client"===c.mode},send_multipart:r.capTrue,slice_blob:r.capTrue,stream_upload:!0,summon_file_dialog:!1,upload_filesize:r.capTrue,use_http_method:function(t){return"client"===c.mode||!e.arrayDiff(t,["GET","POST"])}},{return_response_headers:function(e){return e?"client":"browser"},return_status_code:function(t){return e.arrayDiff(t,[200,404])?"client":["client","browser"]},send_browser_cookies:function(e){return e?"browser":"client"},send_custom_headers:function(e){return e?"client":"browser"},use_http_method:function(t){return e.arrayDiff(t,["GET","POST"])?"client":["client","browser"]}}),o("2.0.31005.0")&&"Opera"!==t.browser||(this.mode=!1),e.extend(this,{getShim:function(){return n.get(this.uid).content.Moxie},shimExec:function(e,t){var n=[].slice.call(arguments,2);return c.getShim().exec(this.uid,e,t,n)},init:function(){var e;e=this.getShimContainer(),e.innerHTML='<object id="'+this.uid+'" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;"><param name="source" value="'+a.xap_url+'"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="enablehtmlaccess" value="true"/><param name="initParams" value="uid='+this.uid+",target="+t.global_event_dispatcher+'"/></object>',l=setTimeout(function(){c&&!c.initialized&&c.trigger("Error",new i.RuntimeError(i.RuntimeError.NOT_INIT_ERR))},"Windows"!==t.OS?1e4:5e3)},destroy:function(e){return function(){e.call(c),clearTimeout(l),a=l=e=c=null}}(this.destroy)},u)}var s="silverlight",u={};return r.addConstructor(s,a),u}),i(ee,[Q,E,u],function(e,t,n){var i={init:function(e){function i(e){for(var t="",n=0;n<e.length;n++)t+=(""!==t?"|":"")+e[n].title+" | *."+e[n].extensions.replace(/,/g,";*.");return t}var r=this,o=this.getRuntime();this.bind("Change",function(){var e=o.shimExec.call(r,"FileInput","getFiles");r.files=[],n.each(e,function(e){r.files.push(new t(o.uid,e))})},999),this.getRuntime().shimExec.call(this,"FileInput","init",i(e.accept),e.name,e.multiple),this.trigger("ready")}};return e.FileInput=i}),i(te,[Q,u,W],function(e,t,n){return e.Blob=t.extend({},n)}),i(ne,[Q,h,N],function(e,t,n){var i={init:function(){var e=this,i=e.getRuntime(),r;return r=i.getShimContainer(),n.addEvent(r,"dragover",function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy"},e.uid),n.addEvent(r,"dragenter",function(e){e.preventDefault();var n=t.get(i.uid).dragEnter(e);n&&e.stopPropagation()},e.uid),n.addEvent(r,"drop",function(e){e.preventDefault();var n=t.get(i.uid).dragDrop(e);n&&e.stopPropagation()},e.uid),i.shimExec.call(this,"FileDrop","init")}};return e.FileDrop=i}),i(ie,[Q,u,Y],function(e,t,n){return e.FileReader=t.extend({},n)}),i(re,[Q,u,$],function(e,t,n){return e.FileReaderSync=t.extend({},n)}),i(oe,[Q,u,J],function(e,t,n){return e.XMLHttpRequest=t.extend({},n)}),i(ae,[Q,u,Z],function(e,t,n){return e.Transporter=t.extend({},n)}),i(se,[Q,u,y,K],function(e,t,n,i){return e.Image=t.extend({},i,{getInfo:function(){var e=this.getRuntime(),i=["tiff","exif","gps","thumb"],r={meta:{}},o=e.shimExec.call(this,"Image","getInfo");return o.meta&&(t.each(i,function(e){var t=o.meta[e],n,i,a,s;if(t&&t.keys)for(r.meta[e]={},i=0,a=t.keys.length;a>i;i++)n=t.keys[i],s=t[n],s&&(/^(\d|[1-9]\d+)$/.test(s)?s=parseInt(s,10):/^\d*\.\d+$/.test(s)&&(s=parseFloat(s)),r.meta[e][n]=s)}),!r.meta||!r.meta.thumb||r.meta.thumb.data instanceof n||(r.meta.thumb.data=new n(e.uid,r.meta.thumb.data))),r.width=parseInt(o.width,10),r.height=parseInt(o.height,10),r.size=parseInt(o.size,10),r.type=o.type,r.name=o.name,r}})}),i(ue,[u,f,m,c],function(e,t,n,i){function r(t){var r=this,s=n.capTest,u=n.capTrue;n.call(this,t,o,{access_binary:s(window.FileReader||window.File&&File.getAsDataURL),access_image_binary:!1,display_media:s(a.Image&&(i.can("create_canvas")||i.can("use_data_uri_over32kb"))),do_cors:!1,drag_and_drop:!1,filter_by_extension:s(function(){return"Chrome"===i.browser&&i.verComp(i.version,28,">=")||"IE"===i.browser&&i.verComp(i.version,10,">=")||"Safari"===i.browser&&i.verComp(i.version,7,">=")}()),resize_image:function(){return a.Image&&r.can("access_binary")&&i.can("create_canvas")},report_upload_progress:!1,return_response_headers:!1,return_response_type:function(t){return"json"===t&&window.JSON?!0:!!~e.inArray(t,["text","document",""])},return_status_code:function(t){return!e.arrayDiff(t,[200,404])},select_file:function(){return i.can("use_fileinput")},select_multiple:!1,send_binary_string:!1,send_custom_headers:!1,send_multipart:!0,slice_blob:!1,stream_upload:function(){return r.can("select_file")},summon_file_dialog:function(){return r.can("select_file")&&("Firefox"===i.browser&&i.verComp(i.version,4,">=")||"Opera"===i.browser&&i.verComp(i.version,12,">=")||"IE"===i.browser&&i.verComp(i.version,10,">=")||!!~e.inArray(i.browser,["Chrome","Safari"]))},upload_filesize:u,use_http_method:function(t){return!e.arrayDiff(t,["GET","POST"])}}),e.extend(this,{init:function(){this.trigger("Init")},destroy:function(e){return function(){e.call(r),e=r=null}}(this.destroy)}),e.extend(this.getShim(),a)}var o="html4",a={};return n.addConstructor(o,r),a}),i(ce,[ue,E,u,h,N,d,c],function(e,t,n,i,r,o,a){function s(){function e(){var o=this,l=o.getRuntime(),d,h,f,p,m,g;g=n.guid("uid_"),d=l.getShimContainer(),s&&(f=i.get(s+"_form"),f&&n.extend(f.style,{top:"100%"})),p=document.createElement("form"),p.setAttribute("id",g+"_form"),p.setAttribute("method","post"),p.setAttribute("enctype","multipart/form-data"),p.setAttribute("encoding","multipart/form-data"),n.extend(p.style,{overflow:"hidden",position:"absolute",top:0,left:0,width:"100%",height:"100%"}),m=document.createElement("input"),m.setAttribute("id",g),m.setAttribute("type","file"),m.setAttribute("name",c.name||"Filedata"),m.setAttribute("accept",u.join(",")),n.extend(m.style,{fontSize:"999px",opacity:0}),p.appendChild(m),d.appendChild(p),n.extend(m.style,{position:"absolute",top:0,left:0,width:"100%",height:"100%"}),"IE"===a.browser&&a.verComp(a.version,10,"<")&&n.extend(m.style,{filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=0)"}),m.onchange=function(){var n;if(this.value){if(this.files){if(n=this.files[0],0===n.size)return void p.parentNode.removeChild(p)}else n={name:this.value};n=new t(l.uid,n),this.onchange=function(){},e.call(o),o.files=[n],m.setAttribute("id",n.uid),p.setAttribute("id",n.uid+"_form"),o.trigger("change"),m=p=null}},l.can("summon_file_dialog")&&(h=i.get(c.browse_button),r.removeEvent(h,"click",o.uid),r.addEvent(h,"click",function(e){m&&!m.disabled&&m.click(),e.preventDefault()},o.uid)),s=g,d=f=h=null}var s,u=[],c;n.extend(this,{init:function(t){var n=this,a=n.getRuntime(),s;c=t,u=t.accept.mimes||o.extList2mimes(t.accept,a.can("filter_by_extension")),s=a.getShimContainer(),function(){var e,o,u;e=i.get(t.browse_button),a.can("summon_file_dialog")&&("static"===i.getStyle(e,"position")&&(e.style.position="relative"),o=parseInt(i.getStyle(e,"z-index"),10)||1,e.style.zIndex=o,s.style.zIndex=o-1),u=a.can("summon_file_dialog")?e:s,r.addEvent(u,"mouseover",function(){n.trigger("mouseenter")},n.uid),r.addEvent(u,"mouseout",function(){n.trigger("mouseleave")},n.uid),r.addEvent(u,"mousedown",function(){n.trigger("mousedown")},n.uid),r.addEvent(i.get(t.container),"mouseup",function(){n.trigger("mouseup")},n.uid),e=null}(),e.call(this),s=null,n.trigger({type:"ready",async:!0})},disable:function(e){var t;(t=i.get(s))&&(t.disabled=!!e)},destroy:function(){var e=this.getRuntime(),t=e.getShim(),n=e.getShimContainer();r.removeAllEvents(n,this.uid),r.removeAllEvents(c&&i.get(c.container),this.uid),r.removeAllEvents(c&&i.get(c.browse_button),this.uid),n&&(n.innerHTML=""),t.removeInstance(this.uid),s=u=c=n=t=null}})}return e.FileInput=s}),i(le,[ue,F],function(e,t){return e.FileReader=t}),i(de,[ue,u,h,x,f,N,y,I],function(e,t,n,i,r,o,a,s){function u(){function e(e){var t=this,i,r,a,s,u=!1;if(l){if(i=l.id.replace(/_iframe$/,""),r=n.get(i+"_form")){for(a=r.getElementsByTagName("input"),s=a.length;s--;)switch(a[s].getAttribute("type")){case"hidden":a[s].parentNode.removeChild(a[s]);break;case"file":u=!0}a=[],u||r.parentNode.removeChild(r),r=null}setTimeout(function(){o.removeEvent(l,"load",t.uid),l.parentNode&&l.parentNode.removeChild(l);var n=t.getRuntime().getShimContainer();n.children.length||n.parentNode.removeChild(n),n=l=null,e()},1)}}var u,c,l;t.extend(this,{send:function(d,h){function f(){var n=m.getShimContainer()||document.body,r=document.createElement("div");r.innerHTML='<iframe id="'+g+'_iframe" name="'+g+'_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>',l=r.firstChild,n.appendChild(l),o.addEvent(l,"load",function(){var n;try{n=l.contentWindow.document||l.contentDocument||window.frames[l.id].document,/^4(0[0-9]|1[0-7]|2[2346])\s/.test(n.title)?u=n.title.replace(/^(\d+).*$/,"$1"):(u=200,c=t.trim(n.body.innerHTML),p.trigger({type:"progress",loaded:c.length,total:c.length}),y&&p.trigger({type:"uploadprogress",loaded:y.size||1025,total:y.size||1025}))}catch(r){if(!i.hasSameOrigin(d.url))return void e.call(p,function(){p.trigger("error")});u=404}e.call(p,function(){p.trigger("load")})},p.uid)}var p=this,m=p.getRuntime(),g,v,w,y;if(u=c=null,h instanceof s&&h.hasBlob()){if(y=h.getBlob(),g=y.uid,w=n.get(g),v=n.get(g+"_form"),!v)throw new r.DOMException(r.DOMException.NOT_FOUND_ERR)}else g=t.guid("uid_"),v=document.createElement("form"),v.setAttribute("id",g+"_form"),v.setAttribute("method",d.method),v.setAttribute("enctype","multipart/form-data"),v.setAttribute("encoding","multipart/form-data"),m.getShimContainer().appendChild(v);v.setAttribute("target",g+"_iframe"),h instanceof s&&h.each(function(e,n){if(e instanceof a)w&&w.setAttribute("name",n);else{var i=document.createElement("input");t.extend(i,{type:"hidden",name:n,value:e}),w?v.insertBefore(i,w):v.appendChild(i)}}),v.setAttribute("action",d.url),f(),v.submit(),p.trigger("loadstart")},getStatus:function(){return u},getResponse:function(e){if("json"===e&&"string"===t.typeOf(c)&&window.JSON)try{
return JSON.parse(c.replace(/^\s*<pre[^>]*>/,"").replace(/<\/pre>\s*$/,""))}catch(n){return null}return c},abort:function(){var t=this;l&&l.contentWindow&&(l.contentWindow.stop?l.contentWindow.stop():l.contentWindow.document.execCommand?l.contentWindow.document.execCommand("Stop"):l.src="about:blank"),e.call(this,function(){t.dispatchEvent("abort")})}})}return e.XMLHttpRequest=u}),i(he,[ue,j],function(e,t){return e.Image=t}),a([u,c,l,d,h,f,p,m,g,v,w,y,E,_,b,x,R,A,I,T,S,O,N])}(this);;(function(e){"use strict";var t={},n=e.moxie.core.utils.Basic.inArray;return function r(e){var i,s;for(i in e)s=typeof e[i],s==="object"&&!~n(i,["Exceptions","Env","Mime"])?r(e[i]):s==="function"&&(t[i]=e[i])}(e.moxie),t.Env=e.moxie.core.utils.Env,t.Mime=e.moxie.core.utils.Mime,t.Exceptions=e.moxie.core.Exceptions,e.mOxie=t,e.o||(e.o=t),t})(this);
/**
 * Plupload - multi-runtime File Uploader
 * v2.1.8
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 *
 * Date: 2015-07-21
 */
;(function(e,t,n){function s(e){function r(e,t,r){var i={chunks:"slice_blob",jpgresize:"send_binary_string",pngresize:"send_binary_string",progress:"report_upload_progress",multi_selection:"select_multiple",dragdrop:"drag_and_drop",drop_element:"drag_and_drop",headers:"send_custom_headers",urlstream_upload:"send_binary_string",canSendBinary:"send_binary",triggerDialog:"summon_file_dialog"};i[e]?n[i[e]]=t:r||(n[e]=t)}var t=e.required_features,n={};if(typeof t=="string")o.each(t.split(/\s*,\s*/),function(e){r(e,!0)});else if(typeof t=="object")o.each(t,function(e,t){r(t,e)});else if(t===!0){e.chunk_size>0&&(n.slice_blob=!0);if(e.resize.enabled||!e.multipart)n.send_binary_string=!0;o.each(e,function(e,t){r(t,!!e,!0)})}return n}var r=e.setTimeout,i={},o={VERSION:"2.1.8",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,FILE_DUPLICATE_ERROR:-602,IMAGE_FORMAT_ERROR:-700,MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:t.mimes,ua:t.ua,typeOf:t.typeOf,extend:t.extend,guid:t.guid,get:function(n){var r=[],i;t.typeOf(n)!=="array"&&(n=[n]);var s=n.length;while(s--)i=t.get(n[s]),i&&r.push(i);return r.length?r:null},each:t.each,getPos:t.getPos,getSize:t.getSize,xmlEncode:function(e){var t={"<":"lt",">":"gt","&":"amp",'"':"quot","'":"#39"},n=/[<>&\"\']/g;return e?(""+e).replace(n,function(e){return t[e]?"&"+t[e]+";":e}):e},toArray:t.toArray,inArray:t.inArray,addI18n:t.addI18n,translate:t.translate,isEmptyObj:t.isEmptyObj,hasClass:t.hasClass,addClass:t.addClass,removeClass:t.removeClass,getStyle:t.getStyle,addEvent:t.addEvent,removeEvent:t.removeEvent,removeAllEvents:t.removeAllEvents,cleanName:function(e){var t,n;n=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"];for(t=0;t<n.length;t+=2)e=e.replace(n[t],n[t+1]);return e=e.replace(/\s+/g,"_"),e=e.replace(/[^a-z0-9_\-\.]+/gi,""),e},buildUrl:function(e,t){var n="";return o.each(t,function(e,t){n+=(n?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(e)}),n&&(e+=(e.indexOf("?")>0?"&":"?")+n),e},formatSize:function(e){function t(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}if(e===n||/\D/.test(e))return o.translate("N/A");var r=Math.pow(1024,4);return e>r?t(e/r,1)+" "+o.translate("tb"):e>(r/=1024)?t(e/r,1)+" "+o.translate("gb"):e>(r/=1024)?t(e/r,1)+" "+o.translate("mb"):e>1024?Math.round(e/1024)+" "+o.translate("kb"):e+" "+o.translate("b")},parseSize:t.parseSizeStr,predictRuntime:function(e,n){var r,i;return r=new o.Uploader(e),i=t.Runtime.thatCan(r.getOption().required_features,n||e.runtimes),r.destroy(),i},addFileFilter:function(e,t){i[e]=t}};o.addFileFilter("mime_types",function(e,t,n){e.length&&!e.regexp.test(t.name)?(this.trigger("Error",{code:o.FILE_EXTENSION_ERROR,message:o.translate("File extension error."),file:t}),n(!1)):n(!0)}),o.addFileFilter("max_file_size",function(e,t,n){var r;e=o.parseSize(e),t.size!==r&&e&&t.size>e?(this.trigger("Error",{code:o.FILE_SIZE_ERROR,message:o.translate("File size error."),file:t}),n(!1)):n(!0)}),o.addFileFilter("prevent_duplicates",function(e,t,n){if(e){var r=this.files.length;while(r--)if(t.name===this.files[r].name&&t.size===this.files[r].size){this.trigger("Error",{code:o.FILE_DUPLICATE_ERROR,message:o.translate("Duplicate file error."),file:t}),n(!1);return}}n(!0)}),o.Uploader=function(e){function g(){var e,t=0,n;if(this.state==o.STARTED){for(n=0;n<f.length;n++)!e&&f[n].status==o.QUEUED?(e=f[n],this.trigger("BeforeUpload",e)&&(e.status=o.UPLOADING,this.trigger("UploadFile",e))):t++;t==f.length&&(this.state!==o.STOPPED&&(this.state=o.STOPPED,this.trigger("StateChanged")),this.trigger("UploadComplete",f))}}function y(e){e.percent=e.size>0?Math.ceil(e.loaded/e.size*100):100,b()}function b(){var e,t;d.reset();for(e=0;e<f.length;e++)t=f[e],t.size!==n?(d.size+=t.origSize,d.loaded+=t.loaded*t.origSize/t.size):d.size=n,t.status==o.DONE?d.uploaded++:t.status==o.FAILED?d.failed++:d.queued++;d.size===n?d.percent=f.length>0?Math.ceil(d.uploaded/f.length*100):0:(d.bytesPerSec=Math.ceil(d.loaded/((+(new Date)-p||1)/1e3)),d.percent=d.size>0?Math.ceil(d.loaded/d.size*100):0)}function w(){var e=c[0]||h[0];return e?e.getRuntime().uid:!1}function E(e,n){if(e.ruid){var r=t.Runtime.getInfo(e.ruid);if(r)return r.can(n)}return!1}function S(){this.bind("FilesAdded FilesRemoved",function(e){e.trigger("QueueChanged"),e.refresh()}),this.bind("CancelUpload",O),this.bind("BeforeUpload",C),this.bind("UploadFile",k),this.bind("UploadProgress",L),this.bind("StateChanged",A),this.bind("QueueChanged",b),this.bind("Error",_),this.bind("FileUploaded",M),this.bind("Destroy",D)}function x(e,n){var r=this,i=0,s=[],u={runtime_order:e.runtimes,required_caps:e.required_features,preferred_caps:l,swf_url:e.flash_swf_url,xap_url:e.silverlight_xap_url};o.each(e.runtimes.split(/\s*,\s*/),function(t){e[t]&&(u[t]=e[t])}),e.browse_button&&o.each(e.browse_button,function(n){s.push(function(s){var a=new t.FileInput(o.extend({},u,{accept:e.filters.mime_types,name:e.file_data_name,multiple:e.multi_selection,container:e.container,browse_button:n}));a.onready=function(){var e=t.Runtime.getInfo(this.ruid);t.extend(r.features,{chunks:e.can("slice_blob"),multipart:e.can("send_multipart"),multi_selection:e.can("select_multiple")}),i++,c.push(this),s()},a.onchange=function(){r.addFile(this.files)},a.bind("mouseenter mouseleave mousedown mouseup",function(r){v||(e.browse_button_hover&&("mouseenter"===r.type?t.addClass(n,e.browse_button_hover):"mouseleave"===r.type&&t.removeClass(n,e.browse_button_hover)),e.browse_button_active&&("mousedown"===r.type?t.addClass(n,e.browse_button_active):"mouseup"===r.type&&t.removeClass(n,e.browse_button_active)))}),a.bind("mousedown",function(){r.trigger("Browse")}),a.bind("error runtimeerror",function(){a=null,s()}),a.init()})}),e.drop_element&&o.each(e.drop_element,function(e){s.push(function(n){var s=new t.FileDrop(o.extend({},u,{drop_zone:e}));s.onready=function(){var e=t.Runtime.getInfo(this.ruid);r.features.dragdrop=e.can("drag_and_drop"),i++,h.push(this),n()},s.ondrop=function(){r.addFile(this.files)},s.bind("error runtimeerror",function(){s=null,n()}),s.init()})}),t.inSeries(s,function(){typeof n=="function"&&n(i)})}function T(e,r,i){var s=new t.Image;try{s.onload=function(){if(r.width>this.width&&r.height>this.height&&r.quality===n&&r.preserve_headers&&!r.crop)return this.destroy(),i(e);s.downsize(r.width,r.height,r.crop,r.preserve_headers)},s.onresize=function(){i(this.getAsBlob(e.type,r.quality)),this.destroy()},s.onerror=function(){i(e)},s.load(e)}catch(o){i(e)}}function N(e,n,r){function f(e,t,n){var r=a[e];switch(e){case"max_file_size":e==="max_file_size"&&(a.max_file_size=a.filters.max_file_size=t);break;case"chunk_size":if(t=o.parseSize(t))a[e]=t,a.send_file_name=!0;break;case"multipart":a[e]=t,t||(a.send_file_name=!0);break;case"unique_names":a[e]=t,t&&(a.send_file_name=!0);break;case"filters":o.typeOf(t)==="array"&&(t={mime_types:t}),n?o.extend(a.filters,t):a.filters=t,t.mime_types&&(a.filters.mime_types.regexp=function(e){var t=[];return o.each(e,function(e){o.each(e.extensions.split(/,/),function(e){/^\s*\*\s*$/.test(e)?t.push("\\.*"):t.push("\\."+e.replace(new RegExp("["+"/^$.*+?|()[]{}\\".replace(/./g,"\\$&")+"]","g"),"\\$&"))})}),new RegExp("("+t.join("|")+")$","i")}(a.filters.mime_types));break;case"resize":n?o.extend(a.resize,t,{enabled:!0}):a.resize=t;break;case"prevent_duplicates":a.prevent_duplicates=a.filters.prevent_duplicates=!!t;break;case"browse_button":case"drop_element":t=o.get(t);case"container":case"runtimes":case"multi_selection":case"flash_swf_url":case"silverlight_xap_url":a[e]=t,n||(u=!0);break;default:a[e]=t}n||i.trigger("OptionChanged",e,t,r)}var i=this,u=!1;typeof e=="object"?o.each(e,function(e,t){f(t,e,r)}):f(e,n,r),r?(a.required_features=s(o.extend({},a)),l=s(o.extend({},a,{required_features:!0}))):u&&(i.trigger("Destroy"),x.call(i,a,function(e){e?(i.runtime=t.Runtime.getInfo(w()).type,i.trigger("Init",{runtime:i.runtime}),i.trigger("PostInit")):i.trigger("Error",{code:o.INIT_ERROR,message:o.translate("Init error.")})}))}function C(e,t){if(e.settings.unique_names){var n=t.name.match(/\.([^.]+)$/),r="part";n&&(r=n[1]),t.target_name=t.id+"."+r}}function k(e,n){function h(){u-->0?r(p,1e3):(n.loaded=f,e.trigger("Error",{code:o.HTTP_ERROR,message:o.translate("HTTP Error."),file:n,response:m.responseText,status:m.status,responseHeaders:m.getAllResponseHeaders()}))}function p(){var d,v,g={},y;if(n.status!==o.UPLOADING||e.state===o.STOPPED)return;e.settings.send_file_name&&(g.name=n.target_name||n.name),s&&a.chunks&&c.size>s?(y=Math.min(s,c.size-f),d=c.slice(f,f+y)):(y=c.size,d=c),s&&a.chunks&&(e.settings.send_chunk_number?(g.chunk=Math.ceil(f/s),g.chunks=Math.ceil(c.size/s)):(g.offset=f,g.total=c.size)),m=new t.XMLHttpRequest,m.upload&&(m.upload.onprogress=function(t){n.loaded=Math.min(n.size,f+t.loaded),e.trigger("UploadProgress",n)}),m.onload=function(){if(m.status>=400){h();return}u=e.settings.max_retries,y<c.size?(d.destroy(),f+=y,n.loaded=Math.min(f,c.size),e.trigger("ChunkUploaded",n,{offset:n.loaded,total:c.size,response:m.responseText,status:m.status,responseHeaders:m.getAllResponseHeaders()}),t.Env.browser==="Android Browser"&&e.trigger("UploadProgress",n)):n.loaded=n.size,d=v=null,!f||f>=c.size?(n.size!=n.origSize&&(c.destroy(),c=null),e.trigger("UploadProgress",n),n.status=o.DONE,e.trigger("FileUploaded",n,{response:m.responseText,status:m.status,responseHeaders:m.getAllResponseHeaders()})):r(p,1)},m.onerror=function(){h()},m.onloadend=function(){this.destroy(),m=null},e.settings.multipart&&a.multipart?(m.open("post",i,!0),o.each(e.settings.headers,function(e,t){m.setRequestHeader(t,e)}),v=new t.FormData,o.each(o.extend(g,e.settings.multipart_params),function(e,t){v.append(t,e)}),v.append(e.settings.file_data_name,d),m.send(v,{runtime_order:e.settings.runtimes,required_caps:e.settings.required_features,preferred_caps:l,swf_url:e.settings.flash_swf_url,xap_url:e.settings.silverlight_xap_url})):(i=o.buildUrl(e.settings.url,o.extend(g,e.settings.multipart_params)),m.open("post",i,!0),m.setRequestHeader("Content-Type","application/octet-stream"),o.each(e.settings.headers,function(e,t){m.setRequestHeader(t,e)}),m.send(d,{runtime_order:e.settings.runtimes,required_caps:e.settings.required_features,preferred_caps:l,swf_url:e.settings.flash_swf_url,xap_url:e.settings.silverlight_xap_url}))}var i=e.settings.url,s=e.settings.chunk_size,u=e.settings.max_retries,a=e.features,f=0,c;n.loaded&&(f=n.loaded=s?s*Math.floor(n.loaded/s):0),c=n.getSource(),e.settings.resize.enabled&&E(c,"send_binary_string")&&!!~t.inArray(c.type,["image/jpeg","image/png"])?T.call(this,c,e.settings.resize,function(e){c=e,n.size=e.size,p()}):p()}function L(e,t){y(t)}function A(e){if(e.state==o.STARTED)p=+(new Date);else if(e.state==o.STOPPED)for(var t=e.files.length-1;t>=0;t--)e.files[t].status==o.UPLOADING&&(e.files[t].status=o.QUEUED,b())}function O(){m&&m.abort()}function M(e){b(),r(function(){g.call(e)},1)}function _(e,t){t.code===o.INIT_ERROR?e.destroy():t.code===o.HTTP_ERROR&&(t.file.status=o.FAILED,y(t.file),e.state==o.STARTED&&(e.trigger("CancelUpload"),r(function(){g.call(e)},1)))}function D(e){e.stop(),o.each(f,function(e){e.destroy()}),f=[],c.length&&(o.each(c,function(e){e.destroy()}),c=[]),h.length&&(o.each(h,function(e){e.destroy()}),h=[]),l={},v=!1,p=m=null,d.reset()}var u=o.guid(),a,f=[],l={},c=[],h=[],p,d,v=!1,m;a={runtimes:t.Runtime.order,max_retries:0,chunk_size:0,multipart:!0,multi_selection:!0,file_data_name:"file",flash_swf_url:"js/Moxie.swf",silverlight_xap_url:"js/Moxie.xap",filters:{mime_types:[],prevent_duplicates:!1,max_file_size:0},resize:{enabled:!1,preserve_headers:!0,crop:!1},send_file_name:!0,send_chunk_number:!0},N.call(this,e,null,!0),d=new o.QueueProgress,o.extend(this,{id:u,uid:u,state:o.STOPPED,features:{},runtime:null,files:f,settings:a,total:d,init:function(){var e=this;typeof a.preinit=="function"?a.preinit(e):o.each(a.preinit,function(t,n){e.bind(n,t)}),S.call(this);if(!a.browse_button||!a.url){this.trigger("Error",{code:o.INIT_ERROR,message:o.translate("Init error.")});return}x.call(this,a,function(n){typeof a.init=="function"?a.init(e):o.each(a.init,function(t,n){e.bind(n,t)}),n?(e.runtime=t.Runtime.getInfo(w()).type,e.trigger("Init",{runtime:e.runtime}),e.trigger("PostInit")):e.trigger("Error",{code:o.INIT_ERROR,message:o.translate("Init error.")})})},setOption:function(e,t){N.call(this,e,t,!this.runtime)},getOption:function(e){return e?a[e]:a},refresh:function(){c.length&&o.each(c,function(e){e.trigger("Refresh")}),this.trigger("Refresh")},start:function(){this.state!=o.STARTED&&(this.state=o.STARTED,this.trigger("StateChanged"),g.call(this))},stop:function(){this.state!=o.STOPPED&&(this.state=o.STOPPED,this.trigger("StateChanged"),this.trigger("CancelUpload"))},disableBrowse:function(){v=arguments[0]!==n?arguments[0]:!0,c.length&&o.each(c,function(e){e.disable(v)}),this.trigger("DisableBrowse",v)},getFile:function(e){var t;for(t=f.length-1;t>=0;t--)if(f[t].id===e)return f[t]},addFile:function(e,n){function c(e,n){var r=[];t.each(s.settings.filters,function(t,n){i[n]&&r.push(function(r){i[n].call(s,t,e,function(e){r(!e)})})}),t.inSeries(r,n)}function h(e){var i=t.typeOf(e);if(e instanceof t.File){if(!e.ruid&&!e.isDetached()){if(!l)return!1;e.ruid=l,e.connectRuntime(l)}h(new o.File(e))}else e instanceof t.Blob?(h(e.getSource()),e.destroy()):e instanceof o.File?(n&&(e.name=n),u.push(function(t){c(e,function(n){n||(f.push(e),a.push(e),s.trigger("FileFiltered",e)),r(t,1)})})):t.inArray(i,["file","blob"])!==-1?h(new t.File(null,e)):i==="node"&&t.typeOf(e.files)==="filelist"?t.each(e.files,h):i==="array"&&(n=null,t.each(e,h))}var s=this,u=[],a=[],l;l=w(),h(e),u.length&&t.inSeries(u,function(){a.length&&s.trigger("FilesAdded",a)})},removeFile:function(e){var t=typeof e=="string"?e:e.id;for(var n=f.length-1;n>=0;n--)if(f[n].id===t)return this.splice(n,1)[0]},splice:function(e,t){var r=f.splice(e===n?0:e,t===n?f.length:t),i=!1;return this.state==o.STARTED&&(o.each(r,function(e){if(e.status===o.UPLOADING)return i=!0,!1}),i&&this.stop()),this.trigger("FilesRemoved",r),o.each(r,function(e){e.destroy()}),i&&this.start(),r},dispatchEvent:function(e){var t,n,r;e=e.toLowerCase(),t=this.hasEventListener(e);if(t){t.sort(function(e,t){return t.priority-e.priority}),n=[].slice.call(arguments),n.shift(),n.unshift(this);for(var i=0;i<t.length;i++)if(t[i].fn.apply(t[i].scope,n)===!1)return!1}return!0},bind:function(e,t,n,r){o.Uploader.prototype.bind.call(this,e,t,r,n)},destroy:function(){this.trigger("Destroy"),a=d=null,this.unbindAll()}})},o.Uploader.prototype=t.EventTarget.instance,o.File=function(){function n(n){o.extend(this,{id:o.guid(),name:n.name||n.fileName,type:n.type||"",size:n.size||n.fileSize,origSize:n.size||n.fileSize,loaded:0,percent:0,status:o.QUEUED,lastModifiedDate:n.lastModifiedDate||(new Date).toLocaleString(),getNative:function(){var e=this.getSource().getSource();return t.inArray(t.typeOf(e),["blob","file"])!==-1?e:null},getSource:function(){return e[this.id]?e[this.id]:null},destroy:function(){var t=this.getSource();t&&(t.destroy(),delete e[this.id])}}),e[this.id]=n}var e={};return n}(),o.QueueProgress=function(){var e=this;e.size=0,e.loaded=0,e.uploaded=0,e.failed=0,e.queued=0,e.percent=0,e.bytesPerSec=0,e.reset=function(){e.size=e.loaded=e.uploaded=e.failed=e.queued=e.percent=e.bytesPerSec=0}},e.plupload=o})(window,mOxie);;
