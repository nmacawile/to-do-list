!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){var a,o;/*! Sortable 1.7.0 - MIT | git://github.com/rubaxa/Sortable.git */!function(i){"use strict";void 0===(o="function"==typeof(a=function(){if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var e,t,n,a,o,i,r,s,l,c,d,u,p,h,f,g,v,m,b,y,k,_={},D=/\s+/g,w=/left|right|inline/,T="Sortable"+(new Date).getTime(),C=window,S=C.document,E=C.parseInt,x=C.setTimeout,L=C.jQuery||C.Zepto,P=C.Polymer,j=!1,N="draggable"in S.createElement("div"),M=!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&((k=S.createElement("x")).style.cssText="pointer-events:auto","auto"===k.style.pointerEvents),O=!1,A=Math.abs,B=Math.min,I=[],Y=[],X=function(){return!1},R=ae(function(e,t,n){if(n&&t.scroll){var a,o,i,r,d,u,p=n[T],h=t.scrollSensitivity,f=t.scrollSpeed,g=e.clientX,v=e.clientY,m=window.innerWidth,y=window.innerHeight;if(l!==n&&(s=t.scroll,l=n,c=t.scrollFn,!0===s)){s=n;do{if(s.offsetWidth<s.scrollWidth||s.offsetHeight<s.scrollHeight)break}while(s=s.parentNode)}s&&(a=s,o=s.getBoundingClientRect(),i=(A(o.right-g)<=h)-(A(o.left-g)<=h),r=(A(o.bottom-v)<=h)-(A(o.top-v)<=h)),i||r||(r=(y-v<=h)-(v<=h),((i=(m-g<=h)-(g<=h))||r)&&(a=C)),_.vx===i&&_.vy===r&&_.el===a||(_.el=a,_.vx=i,_.vy=r,clearInterval(_.pid),a&&(_.pid=setInterval(function(){u=r?r*f:0,d=i?i*f:0,"function"==typeof c&&"continue"!==c.call(p,d,u,e,b,a)||(a===C?C.scrollTo(C.pageXOffset+d,C.pageYOffset+u):(a.scrollTop+=u,a.scrollLeft+=d))},24)))}},30),q=function(e){function t(e,t){return null!=e&&!0!==e||null!=(e=n.name)?"function"==typeof e?e:function(n,a){var o=a.options.group.name;return t?e:e&&(e.join?e.indexOf(o)>-1:o==e)}:X}var n={},a=e.group;a&&"object"==typeof a||(a={name:a}),n.name=a.name,n.checkPull=t(a.pull,!0),n.checkPut=t(a.put),n.revertClone=a.revertClone,e.group=n};try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){j={capture:!1,passive:!1}}}))}catch(e){}function F(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(e);this.el=e,this.options=t=oe({},t),e[T]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(e.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==F.supportPointer};for(var a in n)!(a in t)&&(t[a]=n[a]);for(var o in q(t),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!t.forceFallback&&N,U(e,"mousedown",this._onTapStart),U(e,"touchstart",this._onTapStart),t.supportPointer&&U(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(U(e,"dragover",this),U(e,"dragenter",this)),Y.push(this._onDragOver),t.store&&this.sort(t.store.get(this))}function H(t,n){"clone"!==t.lastPullMode&&(n=!0),a&&a.state!==n&&(G(a,"display",n?"none":""),n||a.state&&(t.options.group.revertClone?(o.insertBefore(a,i),t._animate(e,a)):o.insertBefore(a,e)),a.state=n)}function W(e,t,n){if(e){n=n||S;do{if(">*"===t&&e.parentNode===n||ne(e,t))return e}while(e=(o=(a=e).host)&&o.nodeType?o:a.parentNode)}var a,o;return null}function U(e,t,n){e.addEventListener(t,n,j)}function V(e,t,n){e.removeEventListener(t,n,j)}function z(e,t,n){if(e)if(e.classList)e.classList[n?"add":"remove"](t);else{var a=(" "+e.className+" ").replace(D," ").replace(" "+t+" "," ");e.className=(a+(n?" "+t:"")).replace(D," ")}}function G(e,t,n){var a=e&&e.style;if(a){if(void 0===n)return S.defaultView&&S.defaultView.getComputedStyle?n=S.defaultView.getComputedStyle(e,""):e.currentStyle&&(n=e.currentStyle),void 0===t?n:n[t];t in a||(t="-webkit-"+t),a[t]=n+("string"==typeof n?"":"px")}}function Q(e,t,n){if(e){var a=e.getElementsByTagName(t),o=0,i=a.length;if(n)for(;o<i;o++)n(a[o],o);return a}return[]}function Z(e,t,n,o,i,r,s,l,c){e=e||t[T];var d=S.createEvent("Event"),u=e.options,p="on"+n.charAt(0).toUpperCase()+n.substr(1);d.initEvent(n,!0,!0),d.to=i||t,d.from=r||t,d.item=o||t,d.clone=a,d.oldIndex=s,d.newIndex=l,d.originalEvent=c,t.dispatchEvent(d),u[p]&&u[p].call(e,d)}function $(e,t,n,a,o,i,r,s){var l,c,d=e[T],u=d.options.onMove;return(l=S.createEvent("Event")).initEvent("move",!0,!0),l.to=t,l.from=e,l.dragged=n,l.draggedRect=a,l.related=o||t,l.relatedRect=i||t.getBoundingClientRect(),l.willInsertAfter=s,l.originalEvent=r,e.dispatchEvent(l),u&&(c=u.call(d,l,r)),c}function J(e){e.draggable=!1}function K(){O=!1}function ee(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,n=t.length,a=0;n--;)a+=t.charCodeAt(n);return a.toString(36)}function te(e,t){var n=0;if(!e||!e.parentNode)return-1;for(;e&&(e=e.previousElementSibling);)"TEMPLATE"===e.nodeName.toUpperCase()||">*"!==t&&!ne(e,t)||n++;return n}function ne(e,t){if(e){if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t)}return!1}function ae(e,t){var n,a;return function(){void 0===n&&(n=arguments,a=this,x(function(){1===n.length?e.call(a,n[0]):e.apply(a,n),n=void 0},t))}}function oe(e,t){if(e&&t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function ie(e){return P&&P.dom?P.dom(e).cloneNode(!0):L?L(e).clone(!0)[0]:e.cloneNode(!0)}function re(e){return x(e,0)}function se(e){return clearTimeout(e)}return F.prototype={constructor:F,_onTapStart:function(t){var n,a=this,o=this.el,i=this.options,s=i.preventOnFilter,l=t.type,c=t.touches&&t.touches[0],d=(c||t).target,u=t.target.shadowRoot&&t.path&&t.path[0]||d,p=i.filter;if(function(e){I.length=0;for(var t=e.getElementsByTagName("input"),n=t.length;n--;){var a=t[n];a.checked&&I.push(a)}}(o),!e&&!(/mousedown|pointerdown/.test(l)&&0!==t.button||i.disabled)&&!u.isContentEditable&&(d=W(d,i.draggable,o))&&r!==d){if(n=te(d,i.draggable),"function"==typeof p){if(p.call(this,t,d,this))return Z(a,u,"filter",d,o,o,n),void(s&&t.preventDefault())}else if(p&&(p=p.split(",").some(function(e){if(e=W(u,e.trim(),o))return Z(a,e,"filter",d,o,o,n),!0})))return void(s&&t.preventDefault());i.handle&&!W(u,i.handle,o)||this._prepareDragStart(t,c,d,n)}},_prepareDragStart:function(n,a,s,l){var c,d=this,u=d.el,p=d.options,f=u.ownerDocument;s&&!e&&s.parentNode===u&&(m=n,o=u,t=(e=s).parentNode,i=e.nextSibling,r=s,g=p.group,h=l,this._lastX=(a||n).clientX,this._lastY=(a||n).clientY,e.style["will-change"]="all",c=function(){d._disableDelayedDrag(),e.draggable=d.nativeDraggable,z(e,p.chosenClass,!0),d._triggerDragStart(n,a),Z(d,o,"choose",e,o,o,h)},p.ignore.split(",").forEach(function(t){Q(e,t.trim(),J)}),U(f,"mouseup",d._onDrop),U(f,"touchend",d._onDrop),U(f,"touchcancel",d._onDrop),U(f,"selectstart",d),p.supportPointer&&U(f,"pointercancel",d._onDrop),p.delay?(U(f,"mouseup",d._disableDelayedDrag),U(f,"touchend",d._disableDelayedDrag),U(f,"touchcancel",d._disableDelayedDrag),U(f,"mousemove",d._disableDelayedDrag),U(f,"touchmove",d._disableDelayedDrag),p.supportPointer&&U(f,"pointermove",d._disableDelayedDrag),d._dragStartTimer=x(c,p.delay)):c())},_disableDelayedDrag:function(){var e=this.el.ownerDocument;clearTimeout(this._dragStartTimer),V(e,"mouseup",this._disableDelayedDrag),V(e,"touchend",this._disableDelayedDrag),V(e,"touchcancel",this._disableDelayedDrag),V(e,"mousemove",this._disableDelayedDrag),V(e,"touchmove",this._disableDelayedDrag),V(e,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(t,n){(n=n||("touch"==t.pointerType?t:null))?(m={target:e,clientX:n.clientX,clientY:n.clientY},this._onDragStart(m,"touch")):this.nativeDraggable?(U(e,"dragend",this),U(o,"dragstart",this._onDragStart)):this._onDragStart(m,!0);try{S.selection?re(function(){S.selection.empty()}):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(){if(o&&e){var t=this.options;z(e,t.ghostClass,!0),z(e,t.dragClass,!1),F.active=this,Z(this,o,"start",e,o,o,h)}else this._nulling()},_emulateDragOver:function(){if(b){if(this._lastX===b.clientX&&this._lastY===b.clientY)return;this._lastX=b.clientX,this._lastY=b.clientY,M||G(n,"display","none");var e=S.elementFromPoint(b.clientX,b.clientY),t=e,a=Y.length;if(e&&e.shadowRoot&&(t=e=e.shadowRoot.elementFromPoint(b.clientX,b.clientY)),t)do{if(t[T]){for(;a--;)Y[a]({clientX:b.clientX,clientY:b.clientY,target:e,rootEl:t});break}e=t}while(t=t.parentNode);M||G(n,"display","")}},_onTouchMove:function(e){if(m){var t=this.options,a=t.fallbackTolerance,o=t.fallbackOffset,i=e.touches?e.touches[0]:e,r=i.clientX-m.clientX+o.x,s=i.clientY-m.clientY+o.y,l=e.touches?"translate3d("+r+"px,"+s+"px,0)":"translate("+r+"px,"+s+"px)";if(!F.active){if(a&&B(A(i.clientX-this._lastX),A(i.clientY-this._lastY))<a)return;this._dragStarted()}this._appendGhost(),y=!0,b=i,G(n,"webkitTransform",l),G(n,"mozTransform",l),G(n,"msTransform",l),G(n,"transform",l),e.preventDefault()}},_appendGhost:function(){if(!n){var t,a=e.getBoundingClientRect(),i=G(e),r=this.options;z(n=e.cloneNode(!0),r.ghostClass,!1),z(n,r.fallbackClass,!0),z(n,r.dragClass,!0),G(n,"top",a.top-E(i.marginTop,10)),G(n,"left",a.left-E(i.marginLeft,10)),G(n,"width",a.width),G(n,"height",a.height),G(n,"opacity","0.8"),G(n,"position","fixed"),G(n,"zIndex","100000"),G(n,"pointerEvents","none"),r.fallbackOnBody&&S.body.appendChild(n)||o.appendChild(n),t=n.getBoundingClientRect(),G(n,"width",2*a.width-t.width),G(n,"height",2*a.height-t.height)}},_onDragStart:function(t,n){var i=this,r=t.dataTransfer,s=i.options;i._offUpEvents(),g.checkPull(i,i,e,t)&&((a=ie(e)).draggable=!1,a.style["will-change"]="",G(a,"display","none"),z(a,i.options.chosenClass,!1),i._cloneId=re(function(){o.insertBefore(a,e),Z(i,o,"clone",e)})),z(e,s.dragClass,!0),n?("touch"===n?(U(S,"touchmove",i._onTouchMove),U(S,"touchend",i._onDrop),U(S,"touchcancel",i._onDrop),s.supportPointer&&(U(S,"pointermove",i._onTouchMove),U(S,"pointerup",i._onDrop))):(U(S,"mousemove",i._onTouchMove),U(S,"mouseup",i._onDrop)),i._loopId=setInterval(i._emulateDragOver,50)):(r&&(r.effectAllowed="move",s.setData&&s.setData.call(i,r,e)),U(S,"drop",i),i._dragStartId=re(i._dragStarted))},_onDragOver:function(r){var s,l,c,h,f,m,b=this.el,k=this.options,_=k.group,D=F.active,C=g===_,S=!1,E=k.sort;if(void 0!==r.preventDefault&&(r.preventDefault(),!k.dragoverBubble&&r.stopPropagation()),!e.animated&&(y=!0,D&&!k.disabled&&(C?E||(h=!o.contains(e)):v===this||(D.lastPullMode=g.checkPull(this,D,e,r))&&_.checkPut(this,D,e,r))&&(void 0===r.rootEl||r.rootEl===this.el))){if(R(r,k,this.el),O)return;if(s=W(r.target,k.draggable,b),l=e.getBoundingClientRect(),v!==this&&(v=this,S=!0),h)return H(D,!0),t=o,void(a||i?o.insertBefore(e,a||i):E||o.appendChild(e));if(0===b.children.length||b.children[0]===n||b===r.target&&(f=r,m=b.lastElementChild.getBoundingClientRect(),f.clientY-(m.top+m.height)>5||f.clientX-(m.left+m.width)>5)){if(0!==b.children.length&&b.children[0]!==n&&b===r.target&&(s=b.lastElementChild),s){if(s.animated)return;c=s.getBoundingClientRect()}H(D,C),!1!==$(o,b,e,l,s,c,r)&&(e.contains(b)||(b.appendChild(e),t=b),this._animate(l,e),s&&this._animate(c,s))}else if(s&&!s.animated&&s!==e&&void 0!==s.parentNode[T]){d!==s&&(d=s,u=G(s),p=G(s.parentNode));var L=(c=s.getBoundingClientRect()).right-c.left,P=c.bottom-c.top,j=w.test(u.cssFloat+u.display)||"flex"==p.display&&0===p["flex-direction"].indexOf("row"),N=s.offsetWidth>e.offsetWidth,M=s.offsetHeight>e.offsetHeight,A=(j?(r.clientX-c.left)/L:(r.clientY-c.top)/P)>.5,B=s.nextElementSibling,I=!1;if(j){var Y=e.offsetTop,X=s.offsetTop;I=Y===X?s.previousElementSibling===e&&!N||A&&N:s.previousElementSibling===e||e.previousElementSibling===s?(r.clientY-c.top)/P>.5:X>Y}else S||(I=B!==e&&!M||A&&M);var q=$(o,b,e,l,s,c,r,I);!1!==q&&(1!==q&&-1!==q||(I=1===q),O=!0,x(K,30),H(D,C),e.contains(b)||(I&&!B?b.appendChild(e):s.parentNode.insertBefore(e,I?B:s)),t=e.parentNode,this._animate(l,e),this._animate(c,s))}}},_animate:function(e,t){var n=this.options.animation;if(n){var a=t.getBoundingClientRect();1===e.nodeType&&(e=e.getBoundingClientRect()),G(t,"transition","none"),G(t,"transform","translate3d("+(e.left-a.left)+"px,"+(e.top-a.top)+"px,0)"),t.offsetWidth,G(t,"transition","all "+n+"ms"),G(t,"transform","translate3d(0,0,0)"),clearTimeout(t.animated),t.animated=x(function(){G(t,"transition",""),G(t,"transform",""),t.animated=!1},n)}},_offUpEvents:function(){var e=this.el.ownerDocument;V(S,"touchmove",this._onTouchMove),V(S,"pointermove",this._onTouchMove),V(e,"mouseup",this._onDrop),V(e,"touchend",this._onDrop),V(e,"pointerup",this._onDrop),V(e,"touchcancel",this._onDrop),V(e,"pointercancel",this._onDrop),V(e,"selectstart",this)},_onDrop:function(r){var s=this.el,l=this.options;clearInterval(this._loopId),clearInterval(_.pid),clearTimeout(this._dragStartTimer),se(this._cloneId),se(this._dragStartId),V(S,"mouseover",this),V(S,"mousemove",this._onTouchMove),this.nativeDraggable&&(V(S,"drop",this),V(s,"dragstart",this._onDragStart)),this._offUpEvents(),r&&(y&&(r.preventDefault(),!l.dropBubble&&r.stopPropagation()),n&&n.parentNode&&n.parentNode.removeChild(n),o!==t&&"clone"===F.active.lastPullMode||a&&a.parentNode&&a.parentNode.removeChild(a),e&&(this.nativeDraggable&&V(e,"dragend",this),J(e),e.style["will-change"]="",z(e,this.options.ghostClass,!1),z(e,this.options.chosenClass,!1),Z(this,o,"unchoose",e,t,o,h,null,r),o!==t?(f=te(e,l.draggable))>=0&&(Z(null,t,"add",e,t,o,h,f,r),Z(this,o,"remove",e,t,o,h,f,r),Z(null,t,"sort",e,t,o,h,f,r),Z(this,o,"sort",e,t,o,h,f,r)):e.nextSibling!==i&&(f=te(e,l.draggable))>=0&&(Z(this,o,"update",e,t,o,h,f,r),Z(this,o,"sort",e,t,o,h,f,r)),F.active&&(null!=f&&-1!==f||(f=h),Z(this,o,"end",e,t,o,h,f,r),this.save()))),this._nulling()},_nulling:function(){o=e=t=n=i=a=r=s=l=m=b=y=f=d=u=v=g=F.active=null,I.forEach(function(e){e.checked=!0}),I.length=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragover":case"dragenter":e&&(this._onDragOver(t),function(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.preventDefault()}(t));break;case"mouseover":this._onDrop(t);break;case"selectstart":t.preventDefault()}},toArray:function(){for(var e,t=[],n=this.el.children,a=0,o=n.length,i=this.options;a<o;a++)W(e=n[a],i.draggable,this.el)&&t.push(e.getAttribute(i.dataIdAttr)||ee(e));return t},sort:function(e){var t={},n=this.el;this.toArray().forEach(function(e,a){var o=n.children[a];W(o,this.options.draggable,n)&&(t[e]=o)},this),e.forEach(function(e){t[e]&&(n.removeChild(t[e]),n.appendChild(t[e]))})},save:function(){var e=this.options.store;e&&e.set(this)},closest:function(e,t){return W(e,t||this.options.draggable,this.el)},option:function(e,t){var n=this.options;if(void 0===t)return n[e];n[e]=t,"group"===e&&q(n)},destroy:function(){var e=this.el;e[T]=null,V(e,"mousedown",this._onTapStart),V(e,"touchstart",this._onTapStart),V(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(V(e,"dragover",this),V(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),Y.splice(Y.indexOf(this._onDragOver),1),this._onDrop(),this.el=e=null}},U(S,"touchmove",function(e){F.active&&e.preventDefault()}),F.utils={on:U,off:V,css:G,find:Q,is:function(e,t){return!!W(e,t,e)},extend:oe,throttle:ae,closest:W,toggleClass:z,clone:ie,index:te,nextTick:re,cancelNextTick:se},F.create=function(e,t){return new F(e,t)},F.version="1.7.0",F})?a.call(t,n,t,e):a)||(e.exports=o)}()},function(e,t,n){"use strict";n.r(t);var a=(()=>{const e=e=>document.querySelector(e),t=e=>document.createTextNode(e),n=(e,t)=>{a(e,t),o(e,t.id),r(e,t.classes),i(e,t.text)},a=(e,t)=>{Object.entries(t).forEach(([t,n])=>{"classes"!==t&&"text"!==t&&"id"!==t&&(e[t]=n)})},o=(e,t)=>{t&&(e.id=t)},i=(e,n)=>{n&&e.appendChild(t(n))},r=(e,t)=>{if(t&&Array.isArray(t))e.classList.add(...t);else if(t&&"string"==typeof t){let n=t.split(" ");e.classList.add(...n)}};return{find:e,findAll:e=>document.querySelectorAll(e),findAncestor:(e,t)=>{let n=e;for(;n.parentElement&&!n.classList.contains(t);)n=n.parentElement;return n},createText:t,create:(e,t={id:null,classes:null,text:null})=>{let a=document.createElement(e);return t&&n(a,t),a},attachEvent:(t,n,a="click",o=!1)=>{o?document.addEventListener(a,e=>{e.target&&e.target.classList.contains(t.substring(1,t.length))&&n(e)}):e(t).addEventListener(a,n)}}})();var o={createProject:e=>{const t=a.find(".sidebar-list"),n=a.create("li"),o=a.create("a",{href:"#",classes:"sidebar-link",text:e.name});o.dataset.id=e.id,n.appendChild(o),t.appendChild(n)},createTask:e=>{const t=a.find(".task-list");let n=["task",(e=>1==e?"low-prio":3==e?"high-prio":"normal-prio")(e.priority)];e.complete&&n.push("complete");const o=a.create("li",{classes:n});o.dataset.task_id=e.id;const i=a.create("div",{classes:"task-header"}),r=a.create("div",{classes:"handle"}),s=a.create("i",{classes:"fas fa-thumbtack"}),l=a.create("div",{classes:"task-header-content"}),c=a.create("h3",{classes:"task-name",text:e.name}),d=a.create("div",{classes:"task-info"}),u=a.create("div",{classes:"task-due-date",text:e.dueDate}),p=a.create("button",{classes:"details-toggler",type:"button"}),h=a.create("div",{classes:"task-body"}),f=a.create("div",{classes:"task-details"}),g=a.create("div",{classes:"task-priority"}),v=a.create("p",{classes:"task-desc",text:e.desc}),m=a.create("div",{classes:"task-actions"}),b=a.create("label",{classes:"completion-indicator",text:"Complete"}),y=a.create("input",{classes:"hidden-checkbox",type:"checkbox",checked:e.complete}),k=a.create("div",{classes:"completion-checkbox"}),_=a.create("i",{classes:"fas fa-check"}),D=a.create("button",{classes:"delete-button",type:"button",text:"Delete"});t.appendChild(o),o.appendChild(i),o.appendChild(h),i.appendChild(r),r.appendChild(s),i.appendChild(l),l.appendChild(c),l.appendChild(d),d.appendChild(u),d.appendChild(p),h.appendChild(f),f.appendChild(g),f.appendChild(v),f.appendChild(m),m.appendChild(b),m.appendChild(D),b.appendChild(y),b.appendChild(k),k.appendChild(_)},closeModal:e=>{let t=a.find(e);setTimeout(()=>{t.style.display="none"},200),t.classList.add("hidden")},openModal:e=>{let t=a.find(e);t.style.display="flex",setTimeout(()=>{t.classList.remove("hidden")},10)},resetSliderLabel:()=>{const e=a.find("#priority-value");e.textContent="Normal",e.className="normal-prio-color"},clearTasks:()=>{a.find(".task-list").innerHTML=""},closeSidebar:()=>{const e=a.find(".sidebar"),t=a.find(".menu-button");e.classList.add("collapsed"),t.classList.remove("open")},toggleSidebar:()=>{const e=a.find(".sidebar"),t=a.find(".menu-button");e.classList.toggle("collapsed"),t.classList.toggle("open")},updateProjectTitle:e=>{a.find(".project-name u").textContent=e.name,a.findAll(".sidebar-link").forEach(e=>e.classList.remove("active-sidebar-link")),a.find(`[data-id="${e.id}"]`).classList.add("active-sidebar-link")}},i=n(0),r=n.n(i);document.querySelector(".menu-button").addEventListener("click",e=>{o.toggleSidebar()});r.a.create(document.querySelector(".task-list"),{animation:150,draggable:".task",handle:".handle"});document.addEventListener("click",e=>{if(e.target&&e.target.classList.contains("details-toggler")){e.target.parentElement.parentElement.parentElement.parentElement.classList.toggle("show")}});const s=document.querySelector("#priority-slider"),l=document.querySelector("#priority-value");s.addEventListener("change",e=>{let t=parseInt(s.value)-1,n=["Low","Normal","High"];l.textContent=n[t],l.className=n[t].toLowerCase()+"-prio-color"});const c=document.querySelector("#close-task-modal"),d=document.querySelector(".new-task-button");c.addEventListener("click",e=>{e.preventDefault(),o.closeModal("#new-task-modal")}),d.addEventListener("click",e=>{o.openModal("#new-task-modal")});const u=document.querySelector("#close-project-modal"),p=document.querySelector(".new-project-button");u.addEventListener("click",e=>{e.preventDefault(),o.closeModal("#new-project-modal")}),p.addEventListener("click",e=>{o.openModal("#new-project-modal")});let h=1;const f=(e,t,n,a,o=null,i=!1)=>{return{id:h++,name:e,desc:t,dueDate:n,priority:a,projectId:o,complete:i}};var g=(()=>{const e=[];return{build:(e,t,n,a,o,i)=>f(e,t,n,a,o,i),create:(t,n,a,o,i,r)=>{const s=f(t,n,a,o,i,r);return e.push(s),s},find:t=>e.find(e=>e.id==t),get all(){return e}}})();let v=1;const m=e=>{const t=[],n=v++,a=e=>{(e=>t.find(t=>t.id===e.id))(e)||(e.projectId=n,t.push(e))};return{id:n,name:e,tasks:t,add:a,newTask:(e,t,o,i,r)=>{const s=g.create(e,t,o,i,n,r);return a(s),s}}};var b=(()=>{const e=[];return{find:t=>e.find(e=>e.id==t),build:e=>m(e),create:t=>{const n=m(t);return e.push(n),n},active:void 0,get all(){return e}}})();a.attachEvent("#new-project-form",e=>{e.preventDefault(),_(),y()},"submit"),a.attachEvent("#new-task-form",e=>{e.preventDefault(),D(),k()},"submit");const y=()=>{o.closeModal("#new-project-modal"),a.find("#new-project-form").reset()},k=()=>{o.closeModal("#new-task-modal"),a.find("#new-task-form").reset(),o.resetSliderLabel()};a.attachEvent(".sidebar-link",e=>T(e.target.dataset.id),"click",!0),a.attachEvent(".hidden-checkbox",e=>{let t=a.findAncestor(e.target,"task"),n=t.dataset.task_id;e.target.checked?(g.find(n).complete=!0,t.classList.add("complete")):e.target.checked||(g.find(n).complete=!1,t.classList.remove("complete"))},"change",!0);const _=()=>{let e=b.create(document.forms.project.name.value);o.createProject(e),T(e.id)},D=()=>{let e=b.active.newTask(...w());o.createTask(e)},w=()=>{return[document.forms.task.name.value,document.forms.task.description.value,document.forms.task.due_date.value,document.forms.task.priority.value]},T=e=>{let t=b.find(e);b.active=t,C(t),o.updateProjectTitle(t),o.closeSidebar()},C=e=>{o.clearTasks(),e.tasks.forEach(e=>o.createTask(e))};let S=b.create("Default Project");o.createProject(S),b.active=S,S.newTask("Task1","description","later","3",!0),S.newTask("Task1","description","later","3",!0),S.newTask("Task2","description","later","2","false"),S.newTask("Task3","description","yesterday","1",!1),S.newTask("Task4","description","later","3");let E=b.create("Second Project");o.createProject(E),b.active=E,E.newTask("Task5","description","much later","3"),E.newTask("Task6","description","probably never","2"),E.newTask("Task7","description","yesterday","1"),E.newTask("Task8","description","later","3"),T(b.active.id)}]);