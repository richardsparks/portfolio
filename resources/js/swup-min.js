(function e(t,n){if(typeof exports==="object"&&typeof module==="object")module.exports=n();else if(typeof define==="function"&&define.amd)define([],n);else if(typeof exports==="object")exports["Swup"]=n();else t["Swup"]=n()})(window,function(){return function(e){var t={};function n(r){if(t[r]){return t[r].exports}var i=t[r]={i:r,l:false,exports:{}};e[r].call(i.exports,i,i.exports,n);i.l=true;return i.exports}n.m=e;n.c=t;n.d=function(e,t,r){if(!n.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};n.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};n.t=function(e,t){if(t&1)e=n(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var r=Object.create(null);n.r(r);Object.defineProperty(r,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r};n.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="";return n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.query=r;t.queryAll=i;function r(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document;if(typeof e!=="string"){return e}return t.querySelector(e)}function i(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document;if(typeof e!=="string"){return e}return Array.prototype.slice.call(t.querySelectorAll(e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function i(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var o=function(){function e(){i(this,e);this.link=document.createElement("a")}r(e,[{key:"setPath",value:function e(t){this.link.href=t}},{key:"getPath",value:function e(){var t=this.link.pathname;if(t[0]!="/"){t="/"+t}return t}},{key:"getAddress",value:function e(){var t=this.link.pathname+this.link.search;if(t[0]!="/"){t="/"+t}return t}},{key:"getHash",value:function e(){return this.link.hash}}]);return e}();t.default=o},function(e,t,n){"use strict";var r=n(3);var i=o(r);function o(e){return e&&e.__esModule?e:{default:e}}e.exports=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var o=n(4);var s=G(o);var a=n(6);var l=G(a);var u=n(1);var c=G(u);var d=n(7);var f=G(d);var h=n(8);var p=G(h);var g=n(9);var m=G(g);var v=n(10);var w=G(v);var y=n(11);var E=G(y);var b=n(12);var P=G(b);var S=n(13);var T=G(S);var k=n(14);var L=G(k);var x=n(15);var A=G(x);var H=n(16);var C=G(H);var M=n(17);var O=G(M);var _=n(18);var R=G(_);var j=n(19);var q=G(j);var U=n(20);var D=G(U);var F=n(21);var I=G(F);var B=n(22);var N=G(B);var K=n(23);var W=G(K);var V=n(24);var z=G(V);var X=n(25);var Y=G(X);function G(e){return e&&e.__esModule?e:{default:e}}function $(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var J=function(){function e(t){$(this,e);var n={cache:true,animationSelector:'[class*="transition-"]',elements:["#swup"],pageClassPrefix:"",debugMode:false,scroll:true,doScrollingRightAway:false,animateScroll:true,scrollFriction:.3,scrollAcceleration:.04,preload:true,support:true,plugins:[],skipPopStateHandling:function e(t){if(t.state&&t.state.source=="swup"){return false}return true},animateHistoryBrowsing:false,LINK_SELECTOR:'a[href^="'+window.location.origin+'"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',FORM_SELECTOR:"form[data-swup-form]"};this.transition={};var i=r({},n,t);this._handlers={animationInDone:[],animationInStart:[],animationOutDone:[],animationOutStart:[],animationSkipped:[],clickLink:[],contentReplaced:[],disabled:[],enabled:[],hoverLink:[],openPageInNewTab:[],pageLoaded:[],pagePreloaded:[],pageRetrievedFromCache:[],pageView:[],popState:[],samePage:[],samePageWithHash:[],scrollDone:[],scrollStart:[],serverError:[],submitForm:[],willReplaceContent:[]};this.scrollToElement=null;this.preloadPromise=null;this.options=i;this.plugins=[];this.getUrl=L.default;this.cache=new l.default;this.link=new c.default;this.transitionEndEvent=(0,f.default)();this.getDataFromHtml=m.default;this.getPage=p.default;this.scrollTo=A.default;this.loadPage=w.default;this.renderPage=E.default;this.createState=P.default;this.triggerEvent=T.default;this.classify=C.default;this.doScrolling=O.default;this.markSwupElements=R.default;this.on=q.default;this.off=D.default;this.updateTransition=I.default;this.preloadPage=N.default;this.preloadPages=W.default;this.usePlugin=z.default;this.log=Y.default;this.enable=this.enable;this.destroy=this.destroy;if(this.options.debugMode){window.swup=this}this.getUrl();this.enable()}i(e,[{key:"enable",value:function e(){var t=this;if(this.options.support){if(!("pushState"in window.history)){console.warn("pushState is not supported");return}if((0,f.default)()){this.transitionEndEvent=(0,f.default)()}else{console.warn("transitionEnd detection is not supported");return}if(typeof Promise==="undefined"||Promise.toString().indexOf("[native code]")===-1){console.warn("Promise is not supported");return}}this.delegatedListeners={};this.delegatedListeners.click=(0,s.default)(document,this.options.LINK_SELECTOR,"click",this.linkClickHandler.bind(this));this.delegatedListeners.mouseover=(0,s.default)(document.body,this.options.LINK_SELECTOR,"mouseover",this.linkMouseoverHandler.bind(this));this.delegatedListeners.formSubmit=(0,s.default)(document,this.options.FORM_SELECTOR,"submit",this.formSubmitHandler.bind(this));window.addEventListener("popstate",this.popStateHandler.bind(this));var n=this.getDataFromHtml(document.documentElement.outerHTML);n.url=this.currentUrl;if(this.options.cache){this.cache.cacheUrl(n,this.options.debugMode)}this.markSwupElements(document.documentElement);this.options.plugins.forEach(function(e){return t.usePlugin(e)});window.history.replaceState(Object.assign({},window.history.state,{url:window.location.href,random:Math.random(),source:"swup"}),document.title,window.location.href);if(this.options.animateHistoryBrowsing){window.history.scrollRestoration="manual"}this.triggerEvent("enabled");document.documentElement.classList.add("swup-enabled");this.triggerEvent("pageView");this.preloadPages()}},{key:"destroy",value:function e(){this.delegatedListeners.click.destroy();this.delegatedListeners.mouseover.destroy();window.removeEventListener("popstate",this.popStateHandler.bind(this));this.cache.empty();document.querySelectorAll("[data-swup]").forEach(function(e){delete e.dataset.swup});this.off();this.triggerEvent("disabled");document.documentElement.classList.remove("swup-enabled")}},{key:"linkClickHandler",value:function e(t){if(!t.metaKey){if(t.button===0){this.triggerEvent("clickLink",t);var n=new c.default;t.preventDefault();n.setPath(t.delegateTarget.href);if(n.getAddress()==this.currentUrl||n.getAddress()==""){if(n.getHash()!=""){this.triggerEvent("samePageWithHash",t);var r=document.querySelector(n.getHash());if(r!=null){if(this.options.scroll){var i=r.getBoundingClientRect().top+window.pageYOffset;this.scrollTo(document.body,i)}history.replaceState({url:n.getAddress()+n.getHash(),random:Math.random(),source:"swup"},document.title,n.getAddress()+n.getHash())}else{console.warn("Element for offset not found ("+n.getHash()+")")}}else{this.triggerEvent("samePage",t);if(this.options.scroll){this.scrollTo(document.body,0,1)}}}else{if(n.getHash()!=""){this.scrollToElement=n.getHash()}var o=t.delegateTarget.dataset.swupTransition;this.loadPage({url:n.getAddress(),customTransition:o},false)}}}else{this.triggerEvent("openPageInNewTab",t)}}},{key:"linkMouseoverHandler",value:function e(t){var n=this;this.triggerEvent("hoverLink",t);if(this.options.preload){var r=new c.default;r.setPath(t.delegateTarget.href);if(r.getAddress()!=this.currentUrl&&!this.cache.exists(r.getAddress())&&this.preloadPromise==null){this.preloadPromise=new Promise(function(e,i){n.getPage({url:r.getAddress()},function(o,s){if(s.status===500){n.triggerEvent("serverError",t);i(r.getAddress());return}else{var a=n.getDataFromHtml(o,s);if(a!=null){a.url=r.getAddress();n.cache.cacheUrl(a,n.options.debugMode);n.triggerEvent("pagePreloaded",t)}else{i(r.getAddress());return}}e();n.preloadPromise=null})});this.preloadPromise.route=r.getAddress()}}}},{key:"formSubmitHandler",value:function e(t){if(!t.metaKey){this.triggerEvent("submitForm",t);t.preventDefault();var n=t.target;var r=new FormData(n);var i=new c.default;i.setPath(n.action);if(i.getHash()!=""){this.scrollToElement=i.getHash()}if(n.method.toLowerCase()!="get"){this.cache.remove(i.getAddress());this.loadPage({url:i.getAddress(),method:n.method,data:r})}else{var o=i.getAddress()||window.location.href;var s=n.querySelectorAll("input, select");if(o.indexOf("?")==-1){o+="?"}else{o+="&"}s.forEach(function(e){if(e.type=="checkbox"||e.type=="radio"){if(e.checked){o+=encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)+"&"}}else{o+=encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)+"&"}});o=o.slice(0,-1);this.cache.remove(o);this.loadPage({url:o})}}else{this.triggerEvent("openFormSubmitInNewTab",t)}}},{key:"popStateHandler",value:function e(t){var n=new c.default;if(this.options.skipPopStateHandling(t))return;n.setPath(t.state?t.state.url:window.location.pathname);if(n.getHash()!=""){this.scrollToElement=n.getHash()}else{t.preventDefault()}this.triggerEvent("popState",t);this.loadPage({url:n.getAddress()},t)}}]);return e}();t.default=J},function(e,t,n){var r=n(5);function i(e,t,n,r,i){var s=o.apply(this,arguments);e.addEventListener(n,s,i);return{destroy:function(){e.removeEventListener(n,s,i)}}}function o(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t);if(n.delegateTarget){i.call(e,n)}}}e.exports=i},function(e,t){var n=9;if(typeof Element!=="undefined"&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}function i(e,t){while(e&&e.nodeType!==n){if(typeof e.matches==="function"&&e.matches(t)){return e}e=e.parentNode}}e.exports=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function i(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var o=function(){function e(){i(this,e);this.pages={};this.count=0;this.last=null}r(e,[{key:"cacheUrl",value:function e(t,n){this.count++;if(t.url in this.pages===false){this.pages[t.url]=t}this.last=this.pages[t.url];if(n){this.displayCache()}}},{key:"getPage",value:function e(t){return this.pages[t]}},{key:"displayCache",value:function e(){console.groupCollapsed("Cache ("+Object.keys(this.pages).length+")");for(var t in this.pages){console.log(this.pages[t])}console.groupEnd()}},{key:"exists",value:function e(t){if(t in this.pages)return true;return false}},{key:"empty",value:function e(t){this.pages={};this.count=0;this.last=null;if(t){console.log("Cache cleared")}}},{key:"remove",value:function e(t){delete this.pages[t]}}]);return e}();t.default=o},function(e,t,n){"use strict";e.exports=function e(){var t=document.createElement("div");var n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var r in n){if(t.style[r]!==undefined){return n[r]}}return false}},function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n){if(Object.prototype.hasOwnProperty.call(n,r)){e[r]=n[r]}}}return e};e.exports=function(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var n={url:window.location.pathname+window.location.search,method:"GET",data:null};var i=r({},n,e);var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===4){if(o.status!==500){t(o.responseText,o)}else{t(null,o)}}};o.open(i.method,i.url,true);o.setRequestHeader("X-Requested-With","swup");o.send(i.data);return o}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){var n=this;var i=e.replace("<body",'<div id="swupBody"').replace("</body>","</div>");var o=document.createElement("div");o.innerHTML=i;var s=[];for(var a=0;a<this.options.elements.length;a++){if(o.querySelector(this.options.elements[a])==null){console.warn("Element "+this.options.elements[a]+" is not found in cached page.");return null}else{(0,r.queryAll)(this.options.elements[a]).forEach(function(e,t){(0,r.queryAll)(n.options.elements[a],o)[t].dataset.swup=s.length;s.push((0,r.queryAll)(n.options.elements[a],o)[t].outerHTML)})}}var l={title:o.querySelector("title").innerText,pageClass:o.querySelector("#swupBody").className,originalContent:e,blocks:s,responseURL:t!=null?t.responseURL:window.location.href};return l}},function(e,t,n){"use strict";var r=n(0);var i=Array.prototype.forEach;e.exports=function(e,t){var n=this;if(this.options.doScrollingRightAway&&!this.scrollToElement){this.doScrolling(t)}var o=[];if(e.customTransition!=null){this.updateTransition(window.location.pathname,e.url,e.customTransition);document.documentElement.classList.add("to-"+this.classify(e.customTransition))}else{this.updateTransition(window.location.pathname,e.url)}if(!t||this.options.animateHistoryBrowsing){this.triggerEvent("animationOutStart");document.documentElement.classList.add("is-changing");document.documentElement.classList.add("is-leaving");document.documentElement.classList.add("is-animating");if(t){document.documentElement.classList.add("is-popstate")}document.documentElement.classList.add("to-"+this.classify(e.url));var s=(0,r.queryAll)(this.options.animationSelector);i.call(s,function(e){var t=new Promise(function(t){e.addEventListener(n.transitionEndEvent,function(n){if(e==n.target){t()}})});o.push(t)});Promise.all(o).then(function(){n.triggerEvent("animationOutDone")});if(this.scrollToElement!=null){var a=e.url+this.scrollToElement}else{var a=e.url}if(!t)this.createState(a)}else{this.triggerEvent("animationSkipped")}if(this.cache.exists(e.url)){var l=new Promise(function(e){e()});this.triggerEvent("pageRetrievedFromCache")}else{if(!this.preloadPromise||this.preloadPromise.route!=e.url){var l=new Promise(function(t,r){n.getPage(e,function(i,o){if(o.status===500){n.triggerEvent("serverError");r(e.url);return}else{var s=n.getDataFromHtml(i,o);if(s!=null){s.url=e.url}else{r(e.url);return}n.cache.cacheUrl(s,n.options.debugMode);n.triggerEvent("pageLoaded")}t()})})}else{var l=this.preloadPromise}}Promise.all(o.concat([l])).then(function(){n.renderPage(n.cache.getPage(e.url),t);n.preloadPromise=null}).catch(function(e){n.options.skipPopStateHandling=function(){window.location=e;return true};window.history.go(-1)})}},function(e,t,n){"use strict";var r=n(0);var i=n(1);var o=s(i);function s(e){return e&&e.__esModule?e:{default:e}}var a=Array.prototype.forEach;e.exports=function(e,t){var n=this;document.documentElement.classList.remove("is-leaving");var i=new o.default;i.setPath(e.responseURL);if(window.location.pathname!==i.getPath()){window.history.replaceState({url:i.getPath(),random:Math.random(),source:"swup"},document.title,i.getPath())}if(!t||this.options.animateHistoryBrowsing){document.documentElement.classList.add("is-rendering")}this.triggerEvent("willReplaceContent");for(var s=0;s<e.blocks.length;s++){document.body.querySelector('[data-swup="'+s+'"]').outerHTML=e.blocks[s]}document.title=e.title;if(this.options.pageClassPrefix!==false){document.body.className.split(" ").forEach(function(e){if(e!=""&&e.includes(n.options.pageClassPrefix)){document.body.classList.remove(e)}})}if(e.pageClass!=""){e.pageClass.split(" ").forEach(function(e){if(e!=""&&e.includes(n.options.pageClassPrefix)){document.body.classList.add(e)}})}this.triggerEvent("contentReplaced");this.triggerEvent("pageView");if(!this.options.cache){this.cache.empty(this.options.debugMode)}setTimeout(function(){if(!t||n.options.animateHistoryBrowsing){n.triggerEvent("animationInStart");document.documentElement.classList.remove("is-animating")}},10);if(!this.options.doScrollingRightAway||this.scrollToElement){this.doScrolling(t)}var l=(0,r.queryAll)(this.options.animationSelector);var u=[];a.call(l,function(e){var t=new Promise(function(t){e.addEventListener(n.transitionEndEvent,function(n){if(e==n.target){t()}})});u.push(t)});this.preloadPages();if(!t||this.options.animateHistoryBrowsing){Promise.all(u).then(function(){n.triggerEvent("animationInDone");document.documentElement.className.split(" ").forEach(function(e){if(new RegExp("^to-").test(e)||e==="is-changing"||e==="is-rendering"||e==="is-popstate"){document.documentElement.classList.remove(e)}})})}this.getUrl();this.scrollToElement=null}},function(e,t,n){"use strict";e.exports=function(e){window.history.pushState({url:e||window.location.href.split(window.location.hostname)[1],random:Math.random(),source:"swup"},document.getElementsByTagName("title")[0].innerText,e||window.location.href.split(window.location.hostname)[1])}},function(e,t,n){"use strict";e.exports=function(e,t){if(this.options.debugMode&&t){console.groupCollapsed("%cswup:"+"%c"+e,"color: #343434","color: #009ACD");console.log(t);console.groupEnd()}else if(this.options.debugMode){console.log("%cswup:"+"%c"+e,"color: #343434","color: #009ACD")}this._handlers[e].forEach(function(e){try{e(t)}catch(e){console.error(e)}});var n=new CustomEvent("swup:"+e,{detail:e});document.dispatchEvent(n)}},function(e,t,n){"use strict";e.exports=function(){this.currentUrl=window.location.pathname+window.location.search}},function(e,t,n){"use strict";e.exports=function(e,t){var n=this;var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:this.options.animateScroll;var i=1-this.options.scrollFriction;var o=this.options.scrollAcceleration;var s=0;var a=0;var l=0;var u=0;var c=0;var d=null;function f(){return document.body.scrollTop||document.documentElement.scrollTop}var h=function e(){var t=p();m();if(c===1&&l>s||c===-1&&l<s){d=requestAnimationFrame(e)}else{window.scrollTo(0,l);n.triggerEvent("scrollDone")}};function p(){var e=u-s;var t=e*o;g(t);a*=i;s+=a;return e}var g=function e(t){a+=t};var m=function e(){window.scrollTo(0,s)};window.addEventListener("mousewheel",function(e){if(d){cancelAnimationFrame(d);d=null}},{passive:true});var v=function e(t,r){s=f();c=s>t?-1:1;u=t+c;l=t;a=0;if(s!=l){h()}else{n.triggerEvent("scrollDone")}};this.triggerEvent("scrollStart");if(r==0){window.scrollTo(0,t);this.triggerEvent("scrollDone")}else{v(t)}}},function(e,t,n){"use strict";e.exports=function(e){var t=e.toString().toLowerCase().replace(/\s+/g,"-").replace(/\//g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");if(t[0]=="/")t=t.splice(1);if(t=="")t="homepage";return t}},function(e,t,n){"use strict";e.exports=function(e){if(this.options.scroll&&(!e||this.options.animateHistoryBrowsing)){if(this.scrollToElement!=null){var t=document.querySelector(this.scrollToElement);if(t!=null){var n=t.getBoundingClientRect().top+window.pageYOffset;this.scrollTo(document.body,n)}else{console.warn("Element for offset not found ("+this.scrollToElement+")")}this.scrollToElement=null}else{this.scrollTo(document.body,0)}}}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e){var t=this;var n=0;for(var i=0;i<this.options.elements.length;i++){if(e.querySelector(this.options.elements[i])==null){console.warn("Element "+this.options.elements[i]+" is not in current page.")}else{(0,r.queryAll)(this.options.elements[i]).forEach(function(o,s){(0,r.queryAll)(t.options.elements[i],e)[s].dataset.swup=n;n++})}}}},function(e,t,n){"use strict";e.exports=function e(t,n){if(this._handlers[t]){this._handlers[t].push(n)}else{console.warn("Unsupported event "+t+".")}}},function(e,t,n){"use strict";e.exports=function e(t,n){var r=this;if(t!=null){if(n!=null){if(this._handlers[t]&&this._handlers[t].filter(function(e){return e===n}).length){var i=this._handlers[t].filter(function(e){return e===n})[0];var o=this._handlers[t].indexOf(i);if(o>-1){this._handlers[t].splice(o,1)}}else{console.warn("Handler for event '"+t+"' no found.")}}else{this._handlers[t]=[]}}else{Object.keys(this._handlers).forEach(function(e){r._handlers[e]=[]})}}},function(e,t,n){"use strict";e.exports=function(e,t,n){if(e=="/"){e="/homepage"}if(t=="/"){t="/homepage"}this.transition={from:e.replace("/",""),to:t.replace("/","")};if(n){this.transition.custom=n}}},function(e,t,n){"use strict";var r=n(1);var i=o(r);function o(e){return e&&e.__esModule?e:{default:e}}e.exports=function(e){var t=this;var n=new i.default;n.setPath(e);if(n.getAddress()!=this.currentUrl&&!this.cache.exists(n.getAddress())&&this.preloadPromise==null){this.getPage({url:n.getAddress()},function(e,r){if(r.status===500){t.triggerEvent("serverError");return}else{var i=t.getDataFromHtml(e,r);if(i!=null){i.url=n.getAddress();t.cache.cacheUrl(i,t.options.debugMode);t.triggerEvent("pagePreloaded")}}})}}},function(e,t,n){"use strict";var r=n(0);e.exports=function(){var e=this;if(this.options.preload){(0,r.queryAll)("[data-swup-preload]").forEach(function(t){e.preloadPage(t.href)})}}},function(e,t,n){"use strict";e.exports=function(e,t){var n=this;t=Object.assign({},e.options,t);e.options=t;var r=function e(){var t=n.cache.getPage(window.location.pathname+window.location.search);var r=document.createElement("html");r.innerHTML=t.originalContent;return r};this.plugins.push(e);e.exec(t,this,r);return this.plugins}},function(e,t,n){"use strict";e.exports=function(e){if(this.options.debugMode){console.log(e+"%c","color: #009ACD")}}}])});