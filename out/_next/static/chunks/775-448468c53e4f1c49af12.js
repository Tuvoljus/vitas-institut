(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[775],{9983:function(e,n,t){var r=t(9720).w_;e.exports.Z=function(e){return r({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L9.293 8 3.646 2.354a.5.5 0 010-.708z",clipRule:"evenodd"}},{tag:"path",attr:{fillRule:"evenodd",d:"M7.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L13.293 8 7.646 2.354a.5.5 0 010-.708z",clipRule:"evenodd"}}]})(e)}},9720:function(e,n,t){"use strict";t.d(n,{w_:function(){return l}});var r=t(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},s=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};function c(e){return e&&e.map((function(e,n){return r.createElement(e.tag,a({key:n},e.attr),c(e.child))}))}function l(e){return function(n){return r.createElement(u,a({attr:a({},e.attr)},n),c(e.child))}}function u(e){var n=function(n){var t,o=e.attr,i=e.size,c=e.title,l=s(e,["attr","size","title"]),u=i||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,l,{className:t,style:a(a({color:e.color||n.color},n.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return n(e)})):n(o)}},4184:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var a=o.apply(null,t);a&&e.push(a)}}else if("object"===i)if(t.toString===Object.prototype.toString)for(var s in t)r.call(t,s)&&t[s]&&e.push(s);else e.push(t.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(e.exports=t)}()},3830:function(e,n,t){"use strict";t.d(n,{Z:function(){return We}});var r=t(4184),o=t.n(r),i=t(7294);var a=function(e){var n=(0,i.useRef)(e);return(0,i.useEffect)((function(){n.current=e}),[e]),n};function s(e){var n=a(e);return(0,i.useCallback)((function(){return n.current&&n.current.apply(n,arguments)}),[n])}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function l(e){return e&&e.ownerDocument||document}function u(e){void 0===e&&(e=l());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(t){return e.body}}function d(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}var f=!("undefined"===typeof window||!window.document||!window.document.createElement),p=!1,v=!1;try{var h={get passive(){return p=!0},get once(){return v=p=!0}};f&&(window.addEventListener("test",h,h),window.removeEventListener("test",h,!0))}catch(Ke){}var m=function(e,n,t,r){if(r&&"boolean"!==typeof r&&!v){var o=r.once,i=r.capture,a=t;!v&&o&&(a=t.__once||function e(r){this.removeEventListener(n,e,i),t.call(this,r)},t.__once=a),e.addEventListener(n,a,p?r:i)}e.addEventListener(n,t,r)};var E=function(e,n,t,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(n,t,o),t.__once&&e.removeEventListener(n,t.__once,o)};var g=function(e,n,t,r){return m(e,n,t,r),function(){E(e,n,t,r)}},x=t(5697),b=t.n(x),y=t(3935);function w(e){var n=function(e){var n=(0,i.useRef)(e);return n.current=e,n}(e);(0,i.useEffect)((function(){return function(){return n.current()}}),[])}function C(e,n){e.classList?e.classList.add(n):function(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}(e,n)||("string"===typeof e.className?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function k(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function N(e,n){e.classList?e.classList.remove(n):"string"===typeof e.className?e.className=k(e.className,n):e.setAttribute("class",k(e.className&&e.className.baseVal||"",n))}function O(e,n){return function(e){var n=l(e);return n&&n.defaultView||window}(e).getComputedStyle(e,n)}var S=/([A-Z])/g;var R=/^ms-/;function T(e){return function(e){return e.replace(S,"-$1").toLowerCase()}(e).replace(R,"-ms-")}var j=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var F,L=function(e,n){var t="",r="";if("string"===typeof n)return e.style.getPropertyValue(T(n))||O(e).getPropertyValue(T(n));Object.keys(n).forEach((function(o){var i=n[o];i||0===i?!function(e){return!(!e||!j.test(e))}(o)?t+=T(o)+": "+i+";":r+=o+"("+i+") ":e.style.removeProperty(T(o))})),r&&(t+="transform: "+r+";"),e.style.cssText+=";"+t};function P(e){if((!F&&0!==F||e)&&f){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),F=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return F}function D(e){return"window"in e&&e.window===e?e:"nodeType"in(n=e)&&n.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var n}function M(e){var n;return D(e)||(n=e)&&"body"===n.tagName.toLowerCase()?function(e){var n=D(e)?l():l(e),t=D(e)||n.defaultView;return n.body.clientWidth<t.innerWidth}(e):e.scrollHeight>e.clientHeight}var _=["template","script","style"],H=function(e,n,t){[].forEach.call(e.children,(function(e){-1===n.indexOf(e)&&function(e){var n=e.nodeType,t=e.tagName;return 1===n&&-1===_.indexOf(t.toLowerCase())}(e)&&t(e)}))};function B(e,n){n&&(e?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden"))}var A,$=function(){function e(e){var n=void 0===e?{}:e,t=n.hideSiblingNodes,r=void 0===t||t,o=n.handleContainerOverflow,i=void 0===o||o;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=r,this.handleContainerOverflow=i,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=P()}var n=e.prototype;return n.isContainerOverflowing=function(e){var n=this.data[this.containerIndexFromModal(e)];return n&&n.overflowing},n.containerIndexFromModal=function(e){return function(e,n){var t=-1;return e.some((function(e,r){return!!n(e,r)&&(t=r,!0)})),t}(this.data,(function(n){return-1!==n.modals.indexOf(e)}))},n.setContainerStyle=function(e,n){var t={overflow:"hidden"};e.style={overflow:n.style.overflow,paddingRight:n.style.paddingRight},e.overflowing&&(t.paddingRight=parseInt(L(n,"paddingRight")||"0",10)+this.scrollbarSize+"px"),L(n,t)},n.removeContainerStyle=function(e,n){Object.assign(n.style,e.style)},n.add=function(e,n,t){var r=this.modals.indexOf(e),o=this.containers.indexOf(n);if(-1!==r)return r;if(r=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,n){var t=n.dialog,r=n.backdrop;H(e,[t,r],(function(e){return B(!0,e)}))}(n,e),-1!==o)return this.data[o].modals.push(e),r;var i={modals:[e],classes:t?t.split(/\s+/):[],overflowing:M(n)};return this.handleContainerOverflow&&this.setContainerStyle(i,n),i.classes.forEach(C.bind(null,n)),this.containers.push(n),this.data.push(i),r},n.remove=function(e){var n=this.modals.indexOf(e);if(-1!==n){var t=this.containerIndexFromModal(e),r=this.data[t],o=this.containers[t];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(n,1),0===r.modals.length)r.classes.forEach(N.bind(null,o)),this.handleContainerOverflow&&this.removeContainerStyle(r,o),this.hideSiblingNodes&&function(e,n){var t=n.dialog,r=n.backdrop;H(e,[t,r],(function(e){return B(!1,e)}))}(o,e),this.containers.splice(t,1),this.data.splice(t,1);else if(this.hideSiblingNodes){var i=r.modals[r.modals.length-1],a=i.backdrop;B(!1,i.dialog),B(!1,a)}}},n.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),I=function(e){var n;return"undefined"===typeof document?null:null==e?l().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(n=e)&&n.nodeType&&e||null)};function z(e){var n=e||(A||(A=new $),A),t=(0,i.useRef)({dialog:null,backdrop:null});return Object.assign(t.current,{add:function(e,r){return n.add(t.current,e,r)},remove:function(){return n.remove(t.current)},isTopModal:function(){return n.isTopModal(t.current)},setDialogRef:(0,i.useCallback)((function(e){t.current.dialog=e}),[]),setBackdropRef:(0,i.useCallback)((function(e){t.current.backdrop=e}),[])})}var V=(0,i.forwardRef)((function(e,n){var t=e.show,r=void 0!==t&&t,o=e.role,a=void 0===o?"dialog":o,l=e.className,p=e.style,v=e.children,h=e.backdrop,m=void 0===h||h,E=e.keyboard,x=void 0===E||E,b=e.onBackdropClick,C=e.onEscapeKeyDown,k=e.transition,N=e.backdropTransition,O=e.autoFocus,S=void 0===O||O,R=e.enforceFocus,T=void 0===R||R,j=e.restoreFocus,F=void 0===j||j,L=e.restoreFocusOptions,P=e.renderDialog,D=e.renderBackdrop,M=void 0===D?function(e){return i.createElement("div",e)}:D,_=e.manager,H=e.container,B=e.containerClassName,A=e.onShow,$=e.onHide,V=void 0===$?function(){}:$,U=e.onExit,W=e.onExited,K=e.onExiting,X=e.onEnter,Z=e.onEntering,G=e.onEntered,Y=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),q=function(e,n){var t=(0,i.useState)((function(){return I(e)})),r=t[0],o=t[1];if(!r){var a=I(e);a&&o(a)}return(0,i.useEffect)((function(){n&&r&&n(r)}),[n,r]),(0,i.useEffect)((function(){var n=I(e);n!==r&&o(n)}),[e,r]),r}(H),J=z(_),Q=function(){var e=(0,i.useRef)(!0),n=(0,i.useRef)((function(){return e.current}));return(0,i.useEffect)((function(){return function(){e.current=!1}}),[]),n.current}(),ee=function(e){var n=(0,i.useRef)(null);return(0,i.useEffect)((function(){n.current=e})),n.current}(r),ne=(0,i.useState)(!r),te=ne[0],re=ne[1],oe=(0,i.useRef)(null);(0,i.useImperativeHandle)(n,(function(){return J}),[J]),f&&!ee&&r&&(oe.current=u()),k||r||te?r&&te&&re(!1):re(!0);var ie=s((function(){if(J.add(q,B),de.current=g(document,"keydown",le),ue.current=g(document,"focus",(function(){return setTimeout(se)}),!0),A&&A(),S){var e=u(document);J.dialog&&e&&!d(J.dialog,e)&&(oe.current=e,J.dialog.focus())}})),ae=s((function(){var e;(J.remove(),null==de.current||de.current(),null==ue.current||ue.current(),F)&&(null==(e=oe.current)||null==e.focus||e.focus(L),oe.current=null)}));(0,i.useEffect)((function(){r&&q&&ie()}),[r,q,ie]),(0,i.useEffect)((function(){te&&ae()}),[te,ae]),w((function(){ae()}));var se=s((function(){if(T&&Q()&&J.isTopModal()){var e=u();J.dialog&&e&&!d(J.dialog,e)&&J.dialog.focus()}})),ce=s((function(e){e.target===e.currentTarget&&(null==b||b(e),!0===m&&V())})),le=s((function(e){x&&27===e.keyCode&&J.isTopModal()&&(null==C||C(e),e.defaultPrevented||V())})),ue=(0,i.useRef)(),de=(0,i.useRef)(),fe=k;if(!q||!(r||fe&&!te))return null;var pe=c({role:a,ref:J.setDialogRef,"aria-modal":"dialog"===a||void 0},Y,{style:p,className:l,tabIndex:-1}),ve=P?P(pe):i.createElement("div",pe,i.cloneElement(v,{role:"document"}));fe&&(ve=i.createElement(fe,{appear:!0,unmountOnExit:!0,in:!!r,onExit:U,onExiting:K,onExited:function(){re(!0);for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];null==W||W.apply(void 0,n)},onEnter:X,onEntering:Z,onEntered:G},ve));var he=null;if(m){var me=N;he=M({ref:J.setBackdropRef,onClick:ce}),me&&(he=i.createElement(me,{appear:!0,in:!!r},he))}return i.createElement(i.Fragment,null,y.createPortal(i.createElement(i.Fragment,null,he,ve),q))})),U={show:b().bool,container:b().any,onShow:b().func,onHide:b().func,backdrop:b().oneOfType([b().bool,b().oneOf(["static"])]),renderDialog:b().func,renderBackdrop:b().func,onEscapeKeyDown:b().func,onBackdropClick:b().func,containerClassName:b().string,keyboard:b().bool,transition:b().elementType,backdropTransition:b().elementType,autoFocus:b().bool,enforceFocus:b().bool,restoreFocus:b().bool,restoreFocusOptions:b().shape({preventScroll:b().bool}),onEnter:b().func,onEntering:b().func,onEntered:b().func,onExit:b().func,onExiting:b().func,onExited:b().func,manager:b().instanceOf($)};V.displayName="Modal",V.propTypes=U;var W=Object.assign(V,{Manager:$});var K=!1,X=i.createContext(null),Z="unmounted",G="exited",Y="entering",q="entered",J="exiting",Q=function(e){var n,t;function r(n,t){var r;r=e.call(this,n,t)||this;var o,i=t&&!t.isMounting?n.enter:n.appear;return r.appearStatus=null,n.in?i?(o=G,r.appearStatus=Y):o=q:o=n.unmountOnExit||n.mountOnEnter?Z:G,r.state={status:o},r.nextCallback=null,r}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,r.getDerivedStateFromProps=function(e,n){return e.in&&n.status===Z?{status:G}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var n=null;if(e!==this.props){var t=this.state.status;this.props.in?t!==Y&&t!==q&&(n=Y):t!==Y&&t!==q||(n=J)}this.updateStatus(!1,n)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e,n,t,r=this.props.timeout;return e=n=t=r,null!=r&&"number"!==typeof r&&(e=r.exit,n=r.enter,t=void 0!==r.appear?r.appear:n),{exit:e,enter:n,appear:t}},o.updateStatus=function(e,n){void 0===e&&(e=!1),null!==n?(this.cancelNextCallback(),n===Y?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===G&&this.setState({status:Z})},o.performEnter=function(e){var n=this,t=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[y.findDOMNode(this),r],i=o[0],a=o[1],s=this.getTimeouts(),c=r?s.appear:s.enter;!e&&!t||K?this.safeSetState({status:q},(function(){n.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:Y},(function(){n.props.onEntering(i,a),n.onTransitionEnd(c,(function(){n.safeSetState({status:q},(function(){n.props.onEntered(i,a)}))}))})))},o.performExit=function(){var e=this,n=this.props.exit,t=this.getTimeouts(),r=this.props.nodeRef?void 0:y.findDOMNode(this);n&&!K?(this.props.onExit(r),this.safeSetState({status:J},(function(){e.props.onExiting(r),e.onTransitionEnd(t.exit,(function(){e.safeSetState({status:G},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:G},(function(){e.props.onExited(r)}))},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,n){n=this.setNextCallback(n),this.setState(e,n)},o.setNextCallback=function(e){var n=this,t=!0;return this.nextCallback=function(r){t&&(t=!1,n.nextCallback=null,e(r))},this.nextCallback.cancel=function(){t=!1},this.nextCallback},o.onTransitionEnd=function(e,n){this.setNextCallback(n);var t=this.props.nodeRef?this.props.nodeRef.current:y.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(t&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[t,this.nextCallback],i=o[0],a=o[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},o.render=function(){var e=this.state.status;if(e===Z)return null;var n=this.props,t=n.children,r=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(X.Provider,{value:null},"function"===typeof t?t(e,r):i.cloneElement(i.Children.only(t),r))},r}(i.Component);function ee(){}Q.contextType=X,Q.propTypes={},Q.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ee,onEntering:ee,onEntered:ee,onExit:ee,onExiting:ee,onExited:ee},Q.UNMOUNTED=Z,Q.EXITED=G,Q.ENTERING=Y,Q.ENTERED=q,Q.EXITING=J;var ne=Q;function te(e,n,t){void 0===t&&(t=5);var r=!1,o=setTimeout((function(){r||function(e,n,t,r){if(void 0===t&&(t=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(n,t,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),n+t),i=g(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),i()}}function re(e,n,t,r){null==t&&(t=function(e){var n=L(e,"transitionDuration")||"",t=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*t}(e)||0);var o=te(e,t,r),i=g(e,"transitionend",n);return function(){o(),i()}}function oe(e,n){const t=L(e,n)||"",r=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*r}function ie(e,n){const t=oe(e,"transitionDuration"),r=oe(e,"transitionDelay"),o=re(e,(t=>{t.target===e&&(o(),n(t))}),t+r)}var ae=function(e){return e&&"function"!==typeof e?function(n){e.current=n}:e};var se=function(e,n){return(0,i.useMemo)((function(){return function(e,n){var t=ae(e),r=ae(n);return function(e){t&&t(e),r&&r(e)}}(e,n)}),[e,n])},ce=t(5893);var le=i.forwardRef((({onEnter:e,onEntering:n,onEntered:t,onExit:r,onExiting:o,onExited:a,addEndListener:s,children:c,childRef:l,...u},d)=>{const f=(0,i.useRef)(null),p=se(f,l),v=e=>{var n;p((n=e)&&"setState"in n?y.findDOMNode(n):null!=n?n:null)},h=e=>n=>{e&&f.current&&e(f.current,n)},m=(0,i.useCallback)(h(e),[e]),E=(0,i.useCallback)(h(n),[n]),g=(0,i.useCallback)(h(t),[t]),x=(0,i.useCallback)(h(r),[r]),b=(0,i.useCallback)(h(o),[o]),w=(0,i.useCallback)(h(a),[a]),C=(0,i.useCallback)(h(s),[s]);return(0,ce.jsx)(ne,{ref:d,...u,onEnter:m,onEntered:g,onEntering:E,onExit:x,onExited:w,onExiting:b,addEndListener:C,nodeRef:f,children:"function"===typeof c?(e,n)=>c(e,{...n,ref:v}):i.cloneElement(c,{ref:v})})}));const ue={[Y]:"show",[q]:"show"},de=i.forwardRef((({className:e,children:n,...t},r)=>{const a=(0,i.useCallback)((e=>{!function(e){e.offsetHeight}(e),null==t.onEnter||t.onEnter(e)}),[t]);return(0,ce.jsx)(le,{ref:r,addEndListener:ie,...t,onEnter:a,childRef:n.ref,children:(t,r)=>i.cloneElement(n,{...r,className:o()("fade",e,n.props.className,ue[t])})})}));de.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},de.displayName="Fade";var fe=de,pe=/-(.)/g;const ve=i.createContext({prefixes:{}}),{Consumer:he,Provider:me}=ve;function Ee(e,n){const{prefixes:t}=(0,i.useContext)(ve);return e||t[n]||n}const ge=e=>{return e[0].toUpperCase()+(n=e,n.replace(pe,(function(e,n){return n.toUpperCase()}))).slice(1);var n};function xe(e,{displayName:n=ge(e),Component:t,defaultProps:r}={}){const a=i.forwardRef((({className:n,bsPrefix:r,as:i=t||"div",...a},s)=>{const c=Ee(r,e);return(0,ce.jsx)(i,{ref:s,className:o()(n,c),...a})}));return a.defaultProps=r,a.displayName=n,a}var be=xe("offcanvas-body");const ye={[Y]:"show",[q]:"show"},we=i.forwardRef((({bsPrefix:e,className:n,children:t,...r},a)=>(e=Ee(e,"offcanvas"),(0,ce.jsx)(le,{ref:a,addEndListener:ie,...r,childRef:t.ref,children:(r,a)=>i.cloneElement(t,{...a,className:o()(n,t.props.className,(r===Y||r===J)&&`${e}-toggling`,ye[r])})}))));we.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},we.displayName="OffcanvasToggling";var Ce=we;var ke=i.createContext({onHide(){}});const Ne={"aria-label":b().string,onClick:b().func,variant:b().oneOf(["white"])},Oe=i.forwardRef((({className:e,variant:n,...t},r)=>(0,ce.jsx)("button",{ref:r,type:"button",className:o()("btn-close",n&&`btn-close-${n}`,e),...t})));Oe.displayName="CloseButton",Oe.propTypes=Ne,Oe.defaultProps={"aria-label":"Close"};var Se=Oe;const Re=i.forwardRef((({closeLabel:e,closeVariant:n,closeButton:t,onHide:r,children:o,...a},c)=>{const l=(0,i.useContext)(ke),u=s((()=>{null==l||l.onHide(),null==r||r()}));return(0,ce.jsxs)("div",{ref:c,...a,children:[o,t&&(0,ce.jsx)(Se,{"aria-label":e,variant:n,onClick:u})]})}));Re.defaultProps={closeLabel:"Close",closeButton:!1};var Te=Re;const je=i.forwardRef((({bsPrefix:e,className:n,...t},r)=>(e=Ee(e,"offcanvas-header"),(0,ce.jsx)(Te,{ref:r,...t,className:o()(n,e)}))));je.displayName="OffcanvasHeader",je.defaultProps={closeLabel:"Close",closeButton:!1};var Fe=je;var Le,Pe=xe("offcanvas-title",{Component:(Le="h5",i.forwardRef(((e,n)=>(0,ce.jsx)("div",{...e,ref:n,className:o()(e.className,Le)}))))}),De=Function.prototype.bind.call(Function.prototype.call,[].slice);function Me(e,n){return De(e.querySelectorAll(n))}const _e=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",He=".sticky-top",Be=".navbar-toggler";class Ae extends ${adjustAndStore(e,n,t){const r=n.style[e];n.dataset[e]=r,L(n,{[e]:`${parseFloat(L(n,e))+t}px`})}restore(e,n){const t=n.dataset[e];void 0!==t&&(delete n.dataset[e],L(n,{[e]:t}))}setContainerStyle(e,n){if(super.setContainerStyle(e,n),!e.overflowing)return;const t=P();Me(n,_e).forEach((e=>this.adjustAndStore("paddingRight",e,t))),Me(n,He).forEach((e=>this.adjustAndStore("marginRight",e,-t))),Me(n,Be).forEach((e=>this.adjustAndStore("marginRight",e,t)))}removeContainerStyle(e,n){super.removeContainerStyle(e,n),Me(n,_e).forEach((e=>this.restore("paddingRight",e))),Me(n,He).forEach((e=>this.restore("marginRight",e))),Me(n,Be).forEach((e=>this.restore("marginRight",e)))}}let $e;var Ie=Ae;function ze(e){return(0,ce.jsx)(Ce,{...e})}function Ve(e){return(0,ce.jsx)(fe,{...e})}const Ue=i.forwardRef((({bsPrefix:e,className:n,children:t,"aria-labelledby":r,placement:a,show:c,backdrop:l,keyboard:u,scroll:d,onEscapeKeyDown:f,onShow:p,onHide:v,container:h,autoFocus:m,enforceFocus:E,restoreFocus:g,restoreFocusOptions:x,onEntered:b,onExit:y,onExiting:w,onEnter:C,onEntering:k,onExited:N,backdropClassName:O,manager:S,...R},T)=>{const j=(0,i.useRef)(),F=s(v);e=Ee(e,"offcanvas");const L=Ee(void 0,"modal"),P=(0,i.useMemo)((()=>({onHide:F})),[F]);const D=(0,i.useCallback)((e=>(0,ce.jsx)("div",{...e,className:o()(`${L}-backdrop`,O)})),[O,L]);return(0,ce.jsx)(ke.Provider,{value:P,children:(0,ce.jsx)(W,{show:c,ref:T,backdrop:l,container:h,keyboard:u,autoFocus:m,enforceFocus:E&&!d,restoreFocus:g,restoreFocusOptions:x,onEscapeKeyDown:f,onShow:p,onHide:v,onEnter:(e,...n)=>{e&&(e.style.visibility="visible"),null==C||C(e,...n)},onEntering:k,onEntered:b,onExit:y,onExiting:w,onExited:(e,...n)=>{e&&(e.style.visibility=""),null==N||N(...n)},manager:S||(d?(j.current||(j.current=new Ie({handleContainerOverflow:!1})),j.current):($e||($e=new Ae),$e)),containerClassName:`${e}-open`,transition:ze,backdropTransition:Ve,renderBackdrop:D,renderDialog:i=>(0,ce.jsx)("div",{role:"dialog",...i,...R,className:o()(n,e,`${e}-${a}`),"aria-labelledby":r,children:t})})})}));Ue.displayName="Offcanvas",Ue.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start"};var We=Object.assign(Ue,{Body:be,Header:Fe,Title:Pe})}}]);