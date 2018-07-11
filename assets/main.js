!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){var a,o;/*! Sortable 1.7.0 - MIT | git://github.com/rubaxa/Sortable.git */!function(i){"use strict";void 0===(o="function"==typeof(a=function(){if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var e,t,n,a,o,i,r,s,l,c,d,u,p,h,f,g,v,m,b,y,k,_={},D=/\s+/g,T=/left|right|inline/,w="Sortable"+(new Date).getTime(),C=window,E=C.document,x=C.parseInt,S=C.setTimeout,j=C.jQuery||C.Zepto,P=C.Polymer,N=!1,A="draggable"in E.createElement("div"),M=!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&((k=E.createElement("x")).style.cssText="pointer-events:auto","auto"===k.style.pointerEvents),L=!1,O=Math.abs,I=Math.min,B=[],Y=[],X=function(){return!1},R=ae(function(e,t,n){if(n&&t.scroll){var a,o,i,r,d,u,p=n[w],h=t.scrollSensitivity,f=t.scrollSpeed,g=e.clientX,v=e.clientY,m=window.innerWidth,y=window.innerHeight;if(l!==n&&(s=t.scroll,l=n,c=t.scrollFn,!0===s)){s=n;do{if(s.offsetWidth<s.scrollWidth||s.offsetHeight<s.scrollHeight)break}while(s=s.parentNode)}s&&(a=s,o=s.getBoundingClientRect(),i=(O(o.right-g)<=h)-(O(o.left-g)<=h),r=(O(o.bottom-v)<=h)-(O(o.top-v)<=h)),i||r||(r=(y-v<=h)-(v<=h),((i=(m-g<=h)-(g<=h))||r)&&(a=C)),_.vx===i&&_.vy===r&&_.el===a||(_.el=a,_.vx=i,_.vy=r,clearInterval(_.pid),a&&(_.pid=setInterval(function(){u=r?r*f:0,d=i?i*f:0,"function"==typeof c&&"continue"!==c.call(p,d,u,e,b,a)||(a===C?C.scrollTo(C.pageXOffset+d,C.pageYOffset+u):(a.scrollTop+=u,a.scrollLeft+=d))},24)))}},30),F=function(e){function t(e,t){return null!=e&&!0!==e||null!=(e=n.name)?"function"==typeof e?e:function(n,a){var o=a.options.group.name;return t?e:e&&(e.join?e.indexOf(o)>-1:o==e)}:X}var n={},a=e.group;a&&"object"==typeof a||(a={name:a}),n.name=a.name,n.checkPull=t(a.pull,!0),n.checkPut=t(a.put),n.revertClone=a.revertClone,e.group=n};try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){N={capture:!1,passive:!1}}}))}catch(e){}function H(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(e);this.el=e,this.options=t=oe({},t),e[w]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(e.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==H.supportPointer};for(var a in n)!(a in t)&&(t[a]=n[a]);for(var o in F(t),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!t.forceFallback&&A,q(e,"mousedown",this._onTapStart),q(e,"touchstart",this._onTapStart),t.supportPointer&&q(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(q(e,"dragover",this),q(e,"dragenter",this)),Y.push(this._onDragOver),t.store&&this.sort(t.store.get(this))}function W(t,n){"clone"!==t.lastPullMode&&(n=!0),a&&a.state!==n&&(z(a,"display",n?"none":""),n||a.state&&(t.options.group.revertClone?(o.insertBefore(a,i),t._animate(e,a)):o.insertBefore(a,e)),a.state=n)}function U(e,t,n){if(e){n=n||E;do{if(">*"===t&&e.parentNode===n||ne(e,t))return e}while(e=(o=(a=e).host)&&o.nodeType?o:a.parentNode)}var a,o;return null}function q(e,t,n){e.addEventListener(t,n,N)}function V(e,t,n){e.removeEventListener(t,n,N)}function $(e,t,n){if(e)if(e.classList)e.classList[n?"add":"remove"](t);else{var a=(" "+e.className+" ").replace(D," ").replace(" "+t+" "," ");e.className=(a+(n?" "+t:"")).replace(D," ")}}function z(e,t,n){var a=e&&e.style;if(a){if(void 0===n)return E.defaultView&&E.defaultView.getComputedStyle?n=E.defaultView.getComputedStyle(e,""):e.currentStyle&&(n=e.currentStyle),void 0===t?n:n[t];t in a||(t="-webkit-"+t),a[t]=n+("string"==typeof n?"":"px")}}function G(e,t,n){if(e){var a=e.getElementsByTagName(t),o=0,i=a.length;if(n)for(;o<i;o++)n(a[o],o);return a}return[]}function Q(e,t,n,o,i,r,s,l,c){e=e||t[w];var d=E.createEvent("Event"),u=e.options,p="on"+n.charAt(0).toUpperCase()+n.substr(1);d.initEvent(n,!0,!0),d.to=i||t,d.from=r||t,d.item=o||t,d.clone=a,d.oldIndex=s,d.newIndex=l,d.originalEvent=c,t.dispatchEvent(d),u[p]&&u[p].call(e,d)}function Z(e,t,n,a,o,i,r,s){var l,c,d=e[w],u=d.options.onMove;return(l=E.createEvent("Event")).initEvent("move",!0,!0),l.to=t,l.from=e,l.dragged=n,l.draggedRect=a,l.related=o||t,l.relatedRect=i||t.getBoundingClientRect(),l.willInsertAfter=s,l.originalEvent=r,e.dispatchEvent(l),u&&(c=u.call(d,l,r)),c}function J(e){e.draggable=!1}function K(){L=!1}function ee(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,n=t.length,a=0;n--;)a+=t.charCodeAt(n);return a.toString(36)}function te(e,t){var n=0;if(!e||!e.parentNode)return-1;for(;e&&(e=e.previousElementSibling);)"TEMPLATE"===e.nodeName.toUpperCase()||">*"!==t&&!ne(e,t)||n++;return n}function ne(e,t){if(e){if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t)}return!1}function ae(e,t){var n,a;return function(){void 0===n&&(n=arguments,a=this,S(function(){1===n.length?e.call(a,n[0]):e.apply(a,n),n=void 0},t))}}function oe(e,t){if(e&&t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function ie(e){return P&&P.dom?P.dom(e).cloneNode(!0):j?j(e).clone(!0)[0]:e.cloneNode(!0)}function re(e){return S(e,0)}function se(e){return clearTimeout(e)}return H.prototype={constructor:H,_onTapStart:function(t){var n,a=this,o=this.el,i=this.options,s=i.preventOnFilter,l=t.type,c=t.touches&&t.touches[0],d=(c||t).target,u=t.target.shadowRoot&&t.path&&t.path[0]||d,p=i.filter;if(function(e){B.length=0;for(var t=e.getElementsByTagName("input"),n=t.length;n--;){var a=t[n];a.checked&&B.push(a)}}(o),!e&&!(/mousedown|pointerdown/.test(l)&&0!==t.button||i.disabled)&&!u.isContentEditable&&(d=U(d,i.draggable,o))&&r!==d){if(n=te(d,i.draggable),"function"==typeof p){if(p.call(this,t,d,this))return Q(a,u,"filter",d,o,o,n),void(s&&t.preventDefault())}else if(p&&(p=p.split(",").some(function(e){if(e=U(u,e.trim(),o))return Q(a,e,"filter",d,o,o,n),!0})))return void(s&&t.preventDefault());i.handle&&!U(u,i.handle,o)||this._prepareDragStart(t,c,d,n)}},_prepareDragStart:function(n,a,s,l){var c,d=this,u=d.el,p=d.options,f=u.ownerDocument;s&&!e&&s.parentNode===u&&(m=n,o=u,t=(e=s).parentNode,i=e.nextSibling,r=s,g=p.group,h=l,this._lastX=(a||n).clientX,this._lastY=(a||n).clientY,e.style["will-change"]="all",c=function(){d._disableDelayedDrag(),e.draggable=d.nativeDraggable,$(e,p.chosenClass,!0),d._triggerDragStart(n,a),Q(d,o,"choose",e,o,o,h)},p.ignore.split(",").forEach(function(t){G(e,t.trim(),J)}),q(f,"mouseup",d._onDrop),q(f,"touchend",d._onDrop),q(f,"touchcancel",d._onDrop),q(f,"selectstart",d),p.supportPointer&&q(f,"pointercancel",d._onDrop),p.delay?(q(f,"mouseup",d._disableDelayedDrag),q(f,"touchend",d._disableDelayedDrag),q(f,"touchcancel",d._disableDelayedDrag),q(f,"mousemove",d._disableDelayedDrag),q(f,"touchmove",d._disableDelayedDrag),p.supportPointer&&q(f,"pointermove",d._disableDelayedDrag),d._dragStartTimer=S(c,p.delay)):c())},_disableDelayedDrag:function(){var e=this.el.ownerDocument;clearTimeout(this._dragStartTimer),V(e,"mouseup",this._disableDelayedDrag),V(e,"touchend",this._disableDelayedDrag),V(e,"touchcancel",this._disableDelayedDrag),V(e,"mousemove",this._disableDelayedDrag),V(e,"touchmove",this._disableDelayedDrag),V(e,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(t,n){(n=n||("touch"==t.pointerType?t:null))?(m={target:e,clientX:n.clientX,clientY:n.clientY},this._onDragStart(m,"touch")):this.nativeDraggable?(q(e,"dragend",this),q(o,"dragstart",this._onDragStart)):this._onDragStart(m,!0);try{E.selection?re(function(){E.selection.empty()}):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(){if(o&&e){var t=this.options;$(e,t.ghostClass,!0),$(e,t.dragClass,!1),H.active=this,Q(this,o,"start",e,o,o,h)}else this._nulling()},_emulateDragOver:function(){if(b){if(this._lastX===b.clientX&&this._lastY===b.clientY)return;this._lastX=b.clientX,this._lastY=b.clientY,M||z(n,"display","none");var e=E.elementFromPoint(b.clientX,b.clientY),t=e,a=Y.length;if(e&&e.shadowRoot&&(t=e=e.shadowRoot.elementFromPoint(b.clientX,b.clientY)),t)do{if(t[w]){for(;a--;)Y[a]({clientX:b.clientX,clientY:b.clientY,target:e,rootEl:t});break}e=t}while(t=t.parentNode);M||z(n,"display","")}},_onTouchMove:function(e){if(m){var t=this.options,a=t.fallbackTolerance,o=t.fallbackOffset,i=e.touches?e.touches[0]:e,r=i.clientX-m.clientX+o.x,s=i.clientY-m.clientY+o.y,l=e.touches?"translate3d("+r+"px,"+s+"px,0)":"translate("+r+"px,"+s+"px)";if(!H.active){if(a&&I(O(i.clientX-this._lastX),O(i.clientY-this._lastY))<a)return;this._dragStarted()}this._appendGhost(),y=!0,b=i,z(n,"webkitTransform",l),z(n,"mozTransform",l),z(n,"msTransform",l),z(n,"transform",l),e.preventDefault()}},_appendGhost:function(){if(!n){var t,a=e.getBoundingClientRect(),i=z(e),r=this.options;$(n=e.cloneNode(!0),r.ghostClass,!1),$(n,r.fallbackClass,!0),$(n,r.dragClass,!0),z(n,"top",a.top-x(i.marginTop,10)),z(n,"left",a.left-x(i.marginLeft,10)),z(n,"width",a.width),z(n,"height",a.height),z(n,"opacity","0.8"),z(n,"position","fixed"),z(n,"zIndex","100000"),z(n,"pointerEvents","none"),r.fallbackOnBody&&E.body.appendChild(n)||o.appendChild(n),t=n.getBoundingClientRect(),z(n,"width",2*a.width-t.width),z(n,"height",2*a.height-t.height)}},_onDragStart:function(t,n){var i=this,r=t.dataTransfer,s=i.options;i._offUpEvents(),g.checkPull(i,i,e,t)&&((a=ie(e)).draggable=!1,a.style["will-change"]="",z(a,"display","none"),$(a,i.options.chosenClass,!1),i._cloneId=re(function(){o.insertBefore(a,e),Q(i,o,"clone",e)})),$(e,s.dragClass,!0),n?("touch"===n?(q(E,"touchmove",i._onTouchMove),q(E,"touchend",i._onDrop),q(E,"touchcancel",i._onDrop),s.supportPointer&&(q(E,"pointermove",i._onTouchMove),q(E,"pointerup",i._onDrop))):(q(E,"mousemove",i._onTouchMove),q(E,"mouseup",i._onDrop)),i._loopId=setInterval(i._emulateDragOver,50)):(r&&(r.effectAllowed="move",s.setData&&s.setData.call(i,r,e)),q(E,"drop",i),i._dragStartId=re(i._dragStarted))},_onDragOver:function(r){var s,l,c,h,f,m,b=this.el,k=this.options,_=k.group,D=H.active,C=g===_,E=!1,x=k.sort;if(void 0!==r.preventDefault&&(r.preventDefault(),!k.dragoverBubble&&r.stopPropagation()),!e.animated&&(y=!0,D&&!k.disabled&&(C?x||(h=!o.contains(e)):v===this||(D.lastPullMode=g.checkPull(this,D,e,r))&&_.checkPut(this,D,e,r))&&(void 0===r.rootEl||r.rootEl===this.el))){if(R(r,k,this.el),L)return;if(s=U(r.target,k.draggable,b),l=e.getBoundingClientRect(),v!==this&&(v=this,E=!0),h)return W(D,!0),t=o,void(a||i?o.insertBefore(e,a||i):x||o.appendChild(e));if(0===b.children.length||b.children[0]===n||b===r.target&&(f=r,m=b.lastElementChild.getBoundingClientRect(),f.clientY-(m.top+m.height)>5||f.clientX-(m.left+m.width)>5)){if(0!==b.children.length&&b.children[0]!==n&&b===r.target&&(s=b.lastElementChild),s){if(s.animated)return;c=s.getBoundingClientRect()}W(D,C),!1!==Z(o,b,e,l,s,c,r)&&(e.contains(b)||(b.appendChild(e),t=b),this._animate(l,e),s&&this._animate(c,s))}else if(s&&!s.animated&&s!==e&&void 0!==s.parentNode[w]){d!==s&&(d=s,u=z(s),p=z(s.parentNode));var j=(c=s.getBoundingClientRect()).right-c.left,P=c.bottom-c.top,N=T.test(u.cssFloat+u.display)||"flex"==p.display&&0===p["flex-direction"].indexOf("row"),A=s.offsetWidth>e.offsetWidth,M=s.offsetHeight>e.offsetHeight,O=(N?(r.clientX-c.left)/j:(r.clientY-c.top)/P)>.5,I=s.nextElementSibling,B=!1;if(N){var Y=e.offsetTop,X=s.offsetTop;B=Y===X?s.previousElementSibling===e&&!A||O&&A:s.previousElementSibling===e||e.previousElementSibling===s?(r.clientY-c.top)/P>.5:X>Y}else E||(B=I!==e&&!M||O&&M);var F=Z(o,b,e,l,s,c,r,B);!1!==F&&(1!==F&&-1!==F||(B=1===F),L=!0,S(K,30),W(D,C),e.contains(b)||(B&&!I?b.appendChild(e):s.parentNode.insertBefore(e,B?I:s)),t=e.parentNode,this._animate(l,e),this._animate(c,s))}}},_animate:function(e,t){var n=this.options.animation;if(n){var a=t.getBoundingClientRect();1===e.nodeType&&(e=e.getBoundingClientRect()),z(t,"transition","none"),z(t,"transform","translate3d("+(e.left-a.left)+"px,"+(e.top-a.top)+"px,0)"),t.offsetWidth,z(t,"transition","all "+n+"ms"),z(t,"transform","translate3d(0,0,0)"),clearTimeout(t.animated),t.animated=S(function(){z(t,"transition",""),z(t,"transform",""),t.animated=!1},n)}},_offUpEvents:function(){var e=this.el.ownerDocument;V(E,"touchmove",this._onTouchMove),V(E,"pointermove",this._onTouchMove),V(e,"mouseup",this._onDrop),V(e,"touchend",this._onDrop),V(e,"pointerup",this._onDrop),V(e,"touchcancel",this._onDrop),V(e,"pointercancel",this._onDrop),V(e,"selectstart",this)},_onDrop:function(r){var s=this.el,l=this.options;clearInterval(this._loopId),clearInterval(_.pid),clearTimeout(this._dragStartTimer),se(this._cloneId),se(this._dragStartId),V(E,"mouseover",this),V(E,"mousemove",this._onTouchMove),this.nativeDraggable&&(V(E,"drop",this),V(s,"dragstart",this._onDragStart)),this._offUpEvents(),r&&(y&&(r.preventDefault(),!l.dropBubble&&r.stopPropagation()),n&&n.parentNode&&n.parentNode.removeChild(n),o!==t&&"clone"===H.active.lastPullMode||a&&a.parentNode&&a.parentNode.removeChild(a),e&&(this.nativeDraggable&&V(e,"dragend",this),J(e),e.style["will-change"]="",$(e,this.options.ghostClass,!1),$(e,this.options.chosenClass,!1),Q(this,o,"unchoose",e,t,o,h,null,r),o!==t?(f=te(e,l.draggable))>=0&&(Q(null,t,"add",e,t,o,h,f,r),Q(this,o,"remove",e,t,o,h,f,r),Q(null,t,"sort",e,t,o,h,f,r),Q(this,o,"sort",e,t,o,h,f,r)):e.nextSibling!==i&&(f=te(e,l.draggable))>=0&&(Q(this,o,"update",e,t,o,h,f,r),Q(this,o,"sort",e,t,o,h,f,r)),H.active&&(null!=f&&-1!==f||(f=h),Q(this,o,"end",e,t,o,h,f,r),this.save()))),this._nulling()},_nulling:function(){o=e=t=n=i=a=r=s=l=m=b=y=f=d=u=v=g=H.active=null,B.forEach(function(e){e.checked=!0}),B.length=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragover":case"dragenter":e&&(this._onDragOver(t),function(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.preventDefault()}(t));break;case"mouseover":this._onDrop(t);break;case"selectstart":t.preventDefault()}},toArray:function(){for(var e,t=[],n=this.el.children,a=0,o=n.length,i=this.options;a<o;a++)U(e=n[a],i.draggable,this.el)&&t.push(e.getAttribute(i.dataIdAttr)||ee(e));return t},sort:function(e){var t={},n=this.el;this.toArray().forEach(function(e,a){var o=n.children[a];U(o,this.options.draggable,n)&&(t[e]=o)},this),e.forEach(function(e){t[e]&&(n.removeChild(t[e]),n.appendChild(t[e]))})},save:function(){var e=this.options.store;e&&e.set(this)},closest:function(e,t){return U(e,t||this.options.draggable,this.el)},option:function(e,t){var n=this.options;if(void 0===t)return n[e];n[e]=t,"group"===e&&F(n)},destroy:function(){var e=this.el;e[w]=null,V(e,"mousedown",this._onTapStart),V(e,"touchstart",this._onTapStart),V(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(V(e,"dragover",this),V(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),Y.splice(Y.indexOf(this._onDragOver),1),this._onDrop(),this.el=e=null}},q(E,"touchmove",function(e){H.active&&e.preventDefault()}),H.utils={on:q,off:V,css:z,find:G,is:function(e,t){return!!U(e,t,e)},extend:oe,throttle:ae,closest:U,toggleClass:$,clone:ie,index:te,nextTick:re,cancelNextTick:se},H.create=function(e,t){return new H(e,t)},H.version="1.7.0",H})?a.call(t,n,t,e):a)||(e.exports=o)}()},function(e,t,n){"use strict";n.r(t);var a=(()=>{const e=e=>document.querySelector(e),t=e=>document.createTextNode(e),n=(e,t)=>{a(e,t),o(e,t.id),r(e,t.classes),i(e,t.text)},a=(e,t)=>{Object.entries(t).forEach(([t,n])=>{"classes"!==t&&"text"!==t&&"id"!==t&&(e[t]=n)})},o=(e,t)=>{t&&(e.id=t)},i=(e,n)=>{n&&e.appendChild(t(n))},r=(e,t)=>{if(t&&Array.isArray(t))e.classList.add(...t);else if(t&&"string"==typeof t){let n=t.split(" ");e.classList.add(...n)}};return{find:e,findAll:e=>document.querySelectorAll(e),findAncestor:(e,t)=>{let n=e;for(;n.parentElement&&!n.classList.contains(t);)n=n.parentElement;return n},createText:t,create:(e,t={id:null,classes:null,text:null})=>{let a=document.createElement(e);return t&&n(a,t),a},attachEvent:(t,n,a="click",o=!1)=>{o?document.addEventListener(a,e=>{e.target&&e.target.classList.contains(t.substring(1,t.length))&&n(e)}):e(t).addEventListener(a,n)}}})();var o=(()=>{const e=e=>{let t=a.find(e);setTimeout(()=>{t.style.display="none"},200),t.classList.add("hidden")},t=()=>{const e=a.find("#priority-value");e.textContent="Normal",e.className="normal-prio-color"},n=()=>{a.find(".task-list").innerHTML=""};return{createProject:e=>{const t=a.find(".sidebar-list"),n=a.create("li"),o=a.create("a",{href:"#",classes:"sidebar-link",text:e.name});o.dataset.id=e.id,n.appendChild(o),t.appendChild(n)},createTask:e=>{const t=a.find(".task-list");let n=["task",(e=>1==e?"low-prio":3==e?"high-prio":"normal-prio")(e.priority)];e.complete&&n.push("complete");const o=a.create("li",{classes:n});o.dataset.task_id=e.id;const i=a.create("div",{classes:"task-header"}),r=a.create("div",{classes:"handle"}),s=a.create("i",{classes:"fas fa-thumbtack"}),l=a.create("div",{classes:"task-header-content"}),c=a.create("h3",{classes:"task-name",text:e.name}),d=a.create("div",{classes:"task-info"}),u=a.create("div",{classes:"task-due-date",text:e.dueDate}),p=a.create("button",{classes:"details-toggler",type:"button"}),h=a.create("div",{classes:"task-body"}),f=a.create("div",{classes:"task-details"}),g=a.create("div",{classes:"task-priority"}),v=a.create("p",{classes:"task-desc",text:e.desc}),m=a.create("div",{classes:"task-actions"}),b=a.create("label",{classes:"completion-indicator",text:"Complete"}),y=a.create("input",{classes:"hidden-checkbox",type:"checkbox",checked:e.complete}),k=a.create("div",{classes:"completion-checkbox"}),_=a.create("i",{classes:"fas fa-check"}),D=a.create("button",{classes:"delete-task-button",type:"button",text:"Delete"});D.dataset.target_task_id=e.id,t.appendChild(o),o.appendChild(i),o.appendChild(h),i.appendChild(r),r.appendChild(s),i.appendChild(l),l.appendChild(c),l.appendChild(d),d.appendChild(u),d.appendChild(p),h.appendChild(f),f.appendChild(g),f.appendChild(v),f.appendChild(m),m.appendChild(b),m.appendChild(D),b.appendChild(y),b.appendChild(k),k.appendChild(_)},destroyTask:e=>{const t=a.find(".task-list"),n=a.find(`[data-task_id='${e}']`);t.removeChild(n)},destroyProject:e=>{const t=a.find(".sidebar-list"),n=a.find(`[data-id='${e}']`).parentElement;t.removeChild(n)},clearProjectPanel:()=>{n(),a.find(".project-name u").textContent="No project"},hideProjectPanel:()=>{a.find(".project").style.display="none",a.findAll(".project button").forEach(e=>e.disabled=!0)},showProjectPanel:()=>{a.find(".project").style.display="block",a.findAll(".project button").forEach(e=>e.disabled=!1)},closeModal:e,openModal:e=>{let t=a.find(e);t.style.display="flex",setTimeout(()=>{t.classList.remove("hidden")},10)},resetProjectModal:()=>{e("#new-project-modal"),a.find("#new-project-form").reset()},resetTaskModal:()=>{e("#new-task-modal"),a.find("#new-task-form").reset(),t()},resetSliderLabel:t,clearTasks:n,closeSidebar:()=>{const e=a.find(".sidebar"),t=a.find(".menu-button");e.classList.add("collapsed"),t.classList.remove("open")},toggleSidebar:()=>{const e=a.find(".sidebar"),t=a.find(".menu-button");e.classList.toggle("collapsed"),t.classList.toggle("open")},updateProjectTitle:e=>{a.find(".project-name u").textContent=e.name,a.findAll(".sidebar-link").forEach(e=>e.classList.remove("active-sidebar-link")),a.find(`[data-id="${e.id}"]`).classList.add("active-sidebar-link")}}})();a.attachEvent(".menu-button",o.toggleSidebar),a.attachEvent(".details-toggler",e=>{a.findAncestor(e.target,"task").classList.toggle("show")},"click",!0),a.attachEvent("#priority-slider",e=>{let t=parseInt(e.target.value)-1,n=["Low","Normal","High"];const o=a.find("#priority-value");o.textContent=n[t],o.className=n[t].toLowerCase()+"-prio-color"},"input"),a.attachEvent("#close-task-modal",e=>{e.preventDefault(),o.closeModal("#new-task-modal")}),a.attachEvent(".new-task-button",e=>o.openModal("#new-task-modal")),a.attachEvent("#close-project-modal",e=>{e.preventDefault(),o.closeModal("#new-project-modal")}),a.attachEvent(".new-project-button",e=>o.openModal("#new-project-modal"));let i=1;var r=(e,t,n,a,o,r=!1)=>{return{id:i++,name:t,desc:n,dueDate:a,priority:o,complete:r,projectId:e}};let s=1;const l=e=>{let t=[];const n=s++,a=e=>{(e=>t.find(t=>t.id==e.id))(e)||(e.projectId=n,t.push(e))};return{id:n,name:e,tasks:t,findTask:e=>t.find(t=>t.id==e),add:a,remove:e=>{const n=t.indexOf(e);-1!==n&&t.splice(n,1)},removeAll:()=>{t.forEach(e=>e.projectId=null),t.length=0},newTask:(e,t,o,i,s)=>{const l=r(n,e,t,o,i,s);return a(l),l}}},c=(()=>{const e=[];const t=t=>e.find(e=>e.id==t),n=n=>{let a;a="string"==typeof n||"number"==typeof n?t(n):n;const o=e.indexOf(a);e.splice(o,1)};return{find:t,destroyActive:()=>{let e=c.active;e.removeAll(),n(e),c.active=null},create:t=>{const n=l(t);return e.push(n),n},active:void 0,get all(){return e}}})();var d=c,u=n(0),p=n.n(u);a.attachEvent("#new-project-form",e=>{e.preventDefault(),f(),o.resetProjectModal()},"submit"),a.attachEvent("#new-task-form",e=>{e.preventDefault(),d.active?(g(),o.resetTaskModal()):alert("No project is loaded. Please create a project first.")},"submit"),a.attachEvent(".sidebar-link",e=>{e.preventDefault(),m(e.target.dataset.id)},"click",!0),a.attachEvent(".hidden-checkbox",e=>{let t=a.findAncestor(e.target,"task"),n=t.dataset.task_id;e.target.checked?(d.active.findTask(n).complete=!0,t.classList.add("complete")):e.target.checked||(d.active.findTask(n).complete=!1,t.classList.remove("complete"))},"change",!0),a.attachEvent(".delete-project-button",e=>{if(d.active&&confirm("Are you sure you want to delete this project and all of its tasks?")){const e=d.active.id;d.destroyActive(),b(),o.destroyProject(e)}}),a.attachEvent(".delete-task-button",e=>{if(confirm("Are you sure you want to delete this task?")){const t=e.target.dataset.target_task_id;d.active.remove(t),o.destroyTask(t)}},"click",!0);p.a.create(a.find(".task-list"),{animation:150,delay:0,draggable:".task",dataIdAttr:"data-task_id",handle:".handle",onSort:e=>h(e)});const h=e=>{let t=d.active.tasks.splice(e.oldIndex,1)[0];d.active.tasks.splice(e.newIndex,0,t)},f=()=>{let e=d.create(document.forms.project.name.value);o.createProject(e),m(e.id)},g=()=>{let e=d.active.newTask(...v());o.createTask(e)},v=()=>{return[document.forms.task.name.value,document.forms.task.description.value,document.forms.task.due_date.value,parseInt(document.forms.task.priority.value)]},m=e=>{let t=d.find(e);d.active=t,o.showProjectPanel(),y(t),o.updateProjectTitle(t),o.closeSidebar()},b=()=>{d.all.length>0?m(d.all[0].id):(o.hideProjectPanel(),o.clearProjectPanel())},y=e=>{o.clearTasks(),e.tasks.forEach(e=>o.createTask(e))};let k=d.create("Default Project");o.createProject(k),d.active=k,k.newTask("Task1","description","later","3",!0),k.newTask("Task1","description","later","3",!0),k.newTask("Task2","description","later","2","false"),k.newTask("Task3","description","yesterday","1",!1),k.newTask("Task4","description","later","3");let _=d.create("Second Project");o.createProject(_),d.active=_,_.newTask("Task5","description","much later","3"),_.newTask("Task6","description","probably never","2"),_.newTask("Task7","description","yesterday","1"),_.newTask("Task8","description","later","3"),m(d.active.id)}]);