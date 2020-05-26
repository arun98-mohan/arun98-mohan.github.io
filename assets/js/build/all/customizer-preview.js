!function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}function n(t){return t&&t.Math==Math&&t}function d(t){try{return!!t()}catch(t){return!0}}function o(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}function p(t){return m.call(t).slice(8,-1)}function s(t){if(null==t)throw TypeError("Can't call method on "+t);return t}function l(t){return w(s(t))}function i(t){return"object"==typeof t?null!==t:"function"==typeof t}function a(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}function u(t,e){return y.call(t,e)}function k(t){if(!i(t))throw TypeError(String(t)+" is not an object");return t}function f(e,n){try{A(v,e,n)}catch(t){v[e]=n}return n}var v=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")(),c=!d(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),r={}.propertyIsEnumerable,h=Object.getOwnPropertyDescriptor,g={f:h&&!r.call({1:2},1)?function(t){var e=h(this,t);return!!e&&e.enumerable}:r},m={}.toString,b="".split,w=d(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==p(t)?b.call(t,""):Object(t)}:Object,y={}.hasOwnProperty,x=v.document,S=i(x)&&i(x.createElement),C=!c&&!d(function(){return 7!=Object.defineProperty((t="div",S?x.createElement(t):{}),"a",{get:function(){return 7}}).a;var t}),E=Object.getOwnPropertyDescriptor,P={f:c?E:function(t,e){if(t=l(t),e=a(e,!0),C)try{return E(t,e)}catch(t){}if(u(t,e))return o(!g.f.call(t,e),t[e])}},R=Object.defineProperty,j={f:c?R:function(t,e,n){if(k(t),e=a(e,!0),k(n),C)try{return R(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},A=c?function(t,e,n){return j.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t},O="__core-js_shared__",z=v[O]||f(O,{}),L=Function.toString;"function"!=typeof z.inspectSource&&(z.inspectSource=function(t){return L.call(t)});function I(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++q+G).toString(36)}var T,N,U,F,M=z.inspectSource,W=v.WeakMap,$="function"==typeof W&&/native code/.test(M(W)),H=e(function(t){(t.exports=function(t,e){return z[t]||(z[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})}),q=0,G=Math.random(),Q=H("keys"),D={},B=v.WeakMap;if($){var K=new B,V=K.get,Y=K.has,J=K.set;T=function(t,e){return J.call(K,t,e),e},N=function(t){return V.call(K,t)||{}},U=function(t){return Y.call(K,t)}}else{var X=Q[F="state"]||(Q[F]=I(F));D[X]=!0,T=function(t,e){return A(t,X,e),e},N=function(t){return u(t,X)?t[X]:{}},U=function(t){return u(t,X)}}function Z(t){return"function"==typeof t?t:void 0}function tt(t,e){return arguments.length<2?Z(ht[t])||Z(v[t]):ht[t]&&ht[t][e]||v[t]&&v[t][e]}function et(t){return isNaN(t=+t)?0:(0<t?mt:gt)(t)}function nt(t){return 0<t?bt(et(t),9007199254740991):0}function rt(u){return function(t,e,n){var r,o,i,a=l(t),c=nt(a.length),s=(r=c,(o=et(n))<0?yt(o+r,0):wt(o,r));if(u&&e!=e){for(;s<c;)if((i=a[s++])!=i)return!0}else for(;s<c;s++)if((u||s in a)&&a[s]===e)return u||s||0;return!u&&-1}}function ot(t,e){for(var n=Et(e),r=j.f,o=P.f,i=0;i<n.length;i++){var a=n[i];u(t,a)||r(t,a,o(e,a))}}function it(t,e){var n=jt[Rt(t)];return n==At||n!=kt&&("function"==typeof e?d(e):!!e)}function at(t,e){var n,r,o,i,a,c=t.target,s=t.global,u=t.stat;if(n=s?v:u?v[c]||f(c,{}):(v[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=zt(n,r))&&a.value:n[r],!Ot(s?r:c+(u?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;ot(i,o)}(t.sham||o&&o.sham)&&A(i,"sham",!0),vt(n,r,i,t)}}function ct(t){return Object(s(t))}function st(t,e,n){var r=a(e);r in t?j.f(t,r,o(0,n)):t[r]=n}function ut(t){return u(Nt,t)||(It&&u(Ut,t)?Nt[t]=Ut[t]:Nt[t]=Ft("Symbol."+t)),Nt[t]}function lt(t,e){var n;return Lt(t)&&("function"==typeof(n=t.constructor)&&(n===Array||Lt(n.prototype))||i(n)&&null===(n=n[Mt]))&&(n=void 0),new(void 0===n?Array:n)(0===e?0:e)}var dt,ft,pt={set:T,get:N,has:U,enforce:function(t){return U(t)?N(t):T(t,{})},getterFor:function(n){return function(t){var e;if(!i(t)||(e=N(t)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return e}}},vt=e(function(t){var e=pt.get,c=pt.enforce,s=String(String).split("String");(t.exports=function(t,e,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof e||u(n,"name")||A(n,"name",e),c(n).source=s.join("string"==typeof e?e:"")),t!==v?(o?!a&&t[e]&&(i=!0):delete t[e],i?t[e]=n:A(t,e,n)):i?t[e]=n:f(e,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&e(this).source||M(this)})}),ht=v,gt=Math.ceil,mt=Math.floor,bt=Math.min,yt=Math.max,wt=Math.min,_t={includes:rt(!0),indexOf:rt(!1)}.indexOf,xt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),St={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=l(t),o=0,i=[];for(n in r)!u(D,n)&&u(r,n)&&i.push(n);for(;e.length>o;)u(r,n=e[o++])&&(~_t(i,n)||i.push(n));return i}(t,xt)}},Ct={f:Object.getOwnPropertySymbols},Et=tt("Reflect","ownKeys")||function(t){var e=St.f(k(t)),n=Ct.f;return n?e.concat(n(t)):e},Pt=/#|\.prototype\./,Rt=it.normalize=function(t){return String(t).replace(Pt,".").toLowerCase()},jt=it.data={},kt=it.NATIVE="N",At=it.POLYFILL="P",Ot=it,zt=P.f,Lt=Array.isArray||function(t){return"Array"==p(t)},It=!!Object.getOwnPropertySymbols&&!d(function(){return!String(Symbol())}),Tt=It&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Nt=H("wks"),Ut=v.Symbol,Ft=Tt?Ut:Ut&&Ut.withoutSetter||I,Mt=ut("species"),Wt=tt("navigator","userAgent")||"",$t=v.process,Ht=$t&&$t.versions,qt=Ht&&Ht.v8;qt?ft=(dt=qt.split("."))[0]+dt[1]:Wt&&(!(dt=Wt.match(/Edge\/(\d+)/))||74<=dt[1])&&(dt=Wt.match(/Chrome\/(\d+)/))&&(ft=dt[1]);function Gt(e){return 51<=Dt||!d(function(){var t=[];return(t.constructor={})[Bt]=function(){return{foo:1}},1!==t[e](Boolean).foo})}function Qt(t){if(i(t)){var e=t[Kt];return void 0!==e?!!e:Lt(t)}}var Dt=ft&&+ft,Bt=ut("species"),Kt=ut("isConcatSpreadable"),Vt=9007199254740991,Yt="Maximum allowed index exceeded",Jt=51<=Dt||!d(function(){var t=[];return t[Kt]=!1,t.concat()[0]!==t}),Xt=Gt("concat");at({target:"Array",proto:!0,forced:!Jt||!Xt},{concat:function(t){var e,n,r,o,i,a=ct(this),c=lt(a,0),s=0;for(e=-1,r=arguments.length;e<r;e++)if(Qt(i=-1===e?a:arguments[e])){if(o=nt(i.length),Vt<s+o)throw TypeError(Yt);for(n=0;n<o;n++,s++)n in i&&st(c,s,i[n])}else{if(Vt<=s)throw TypeError(Yt);st(c,s++,i)}return c.length=s,c}});var Zt,te,ee=[].join,ne=w!=Object,re=(Zt=",",!!(te=[]["join"])&&d(function(){te.call(null,Zt||function(){throw 1},1)}));at({target:"Array",proto:!0,forced:ne||!re},{join:function(t){return ee.call(l(this),void 0===t?",":t)}});function oe(r,o,t){if(!function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function")}(r),void 0===o)return r;switch(t){case 0:return function(){return r.call(o)};case 1:return function(t){return r.call(o,t)};case 2:return function(t,e){return r.call(o,t,e)};case 3:return function(t,e,n){return r.call(o,t,e,n)}}return function(){return r.apply(o,arguments)}}function ie(p){var v=1==p,h=2==p,g=3==p,m=4==p,b=6==p,y=5==p||b;return function(t,e,n,r){for(var o,i,a=ct(t),c=w(a),s=oe(e,n,3),u=nt(c.length),l=0,d=r||lt,f=v?d(t,u):h?d(t,0):void 0;l<u;l++)if((y||l in c)&&(i=s(o=c[l],l,a),p))if(v)f[l]=i;else if(i)switch(p){case 3:return!0;case 5:return o;case 6:return l;case 2:ce.call(f,o)}else if(m)return!1;return b?-1:g||m?m:f}}function ae(t){throw t}var ce=[].push,se={forEach:ie(0),map:ie(1),filter:ie(2),some:ie(3),every:ie(4),find:ie(5),findIndex:ie(6)},ue=Object.defineProperty,le={},de=se.map,fe=Gt("map"),pe=function(t,e){if(u(le,t))return le[t];var n=[][t],r=!!u(e=e||{},"ACCESSORS")&&e.ACCESSORS,o=u(e,0)?e[0]:ae,i=u(e,1)?e[1]:void 0;return le[t]=!!n&&!d(function(){if(r&&!c)return 1;var t={length:-1};r?ue(t,1,{enumerable:!0,get:ae}):t[1]=1,n.call(t,o,i)})}("map");at({target:"Array",proto:!0,forced:!fe||!pe},{map:function(t,e){return de(this,t,1<arguments.length?e:void 0)}});var ve="".repeat||function(t){var e=String(s(this)),n="",r=et(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;0<r;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n},he=1..toFixed,ge=Math.floor,me=function(t,e,n){return 0===e?n:e%2==1?me(t,e-1,n*t):me(t*t,e/2,n)};at({target:"Number",proto:!0,forced:he&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d(function(){he.call({})})},{toFixed:function(t){function e(t,e){for(var n=-1,r=e;++n<6;)r+=t*l[n],l[n]=r%1e7,r=ge(r/1e7)}function n(t){for(var e=6,n=0;0<=--e;)n+=l[e],l[e]=ge(n/t),n=n%t*1e7}function r(){for(var t=6,e="";0<=--t;)if(""!==e||0===t||0!==l[t]){var n=String(l[t]);e=""===e?n:e+ve.call("0",7-n.length)+n}return e}var o,i,a,c,s=function(t){if("number"!=typeof t&&"Number"!=p(t))throw TypeError("Incorrect invocation");return+t}(this),u=et(t),l=[0,0,0,0,0,0],d="",f="0";if(u<0||20<u)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||1e21<=s)return String(s);if(s<0&&(d="-",s=-s),1e-21<s)if(i=(o=function(t){for(var e=0,n=t;4096<=n;)e+=12,n/=4096;for(;2<=n;)e+=1,n/=2;return e}(s*me(2,69,1))-69)<0?s*me(2,-o,1):s/me(2,o,1),i*=4503599627370496,0<(o=52-o)){for(e(0,i),a=u;7<=a;)e(1e7,0),a-=7;for(e(me(10,a,1),0),a=o-1;23<=a;)n(1<<23),a-=23;n(1<<a),e(1,1),n(2),f=r()}else e(0,i),e(1<<-o,0),f=r()+ve.call("0",u);return f=0<u?d+((c=f.length)<=u?"0."+ve.call("0",u-c)+f:f.slice(0,c-u)+"."+f.slice(c-u)):d+f}});var be={};be[ut("toStringTag")]="z";var ye="[object z]"===String(be),we=ut("toStringTag"),_e="Arguments"==p(function(){return arguments}()),xe=ye?p:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),we))?n:_e?p(e):"Object"==(r=p(e))&&"function"==typeof e.callee?"Arguments":r},Se=ye?{}.toString:function(){return"[object "+xe(this)+"]"};ye||vt(Object.prototype,"toString",Se,{unsafe:!0});function Ce(){var t=k(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}var Ee="toString",Pe=RegExp.prototype,Re=Pe[Ee],je=d(function(){return"/a/b"!=Re.call({source:"a",flags:"b"})}),ke=Re.name!=Ee;function Ae(t,e){return RegExp(t,e)}(je||ke)&&vt(RegExp.prototype,Ee,function(){var t=k(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in Pe)?Ce.call(t):n)},{unsafe:!0});var Oe,ze,Le={UNSUPPORTED_Y:d(function(){var t=Ae("a","y");return t.lastIndex=2,null!=t.exec("abcd")}),BROKEN_CARET:d(function(){var t=Ae("^r","gy");return t.lastIndex=2,null!=t.exec("str")})},Ie=RegExp.prototype.exec,Te=String.prototype.replace,Ne=Ie,Ue=(Oe=/a/,ze=/b*/g,Ie.call(Oe,"a"),Ie.call(ze,"a"),0!==Oe.lastIndex||0!==ze.lastIndex),Fe=Le.UNSUPPORTED_Y||Le.BROKEN_CARET,Me=void 0!==/()??/.exec("")[1];(Ue||Me||Fe)&&(Ne=function(t){var e,n,r,o,i=this,a=Fe&&i.sticky,c=Ce.call(i),s=i.source,u=0,l=t;return a&&(-1===(c=c.replace("y","")).indexOf("g")&&(c+="g"),l=String(t).slice(i.lastIndex),0<i.lastIndex&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(s="(?: "+s+")",l=" "+l,u++),n=new RegExp("^(?:"+s+")",c)),Me&&(n=new RegExp("^"+s+"$(?!\\s)",c)),Ue&&(e=i.lastIndex),r=Ie.call(a?n:i,l),a?r?(r.input=r.input.slice(u),r[0]=r[0].slice(u),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:Ue&&r&&(i.lastIndex=i.global?r.index+r[0].length:e),Me&&r&&1<r.length&&Te.call(r[0],n,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)}),r});var We=Ne;at({target:"RegExp",proto:!0,forced:/./.exec!==We},{exec:We});function $e(c){return function(t,e){var n,r,o=String(s(t)),i=et(e),a=o.length;return i<0||a<=i?c?"":void 0:(n=o.charCodeAt(i))<55296||56319<n||i+1===a||(r=o.charCodeAt(i+1))<56320||57343<r?c?o.charAt(i):n:c?o.slice(i,i+2):r-56320+(n-55296<<10)+65536}}function He(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==p(t))throw TypeError("RegExp#exec called on incompatible receiver");return We.call(t,e)}var qe=ut("species"),Ge=!d(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),Qe="$0"==="a".replace(/./,"$0"),De=ut("replace"),Be=!!/./[De]&&""===/./[De]("a","$0"),Ke=!d(function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}),Ve={codeAt:$e(!1),charAt:$e(!0)}.charAt,Ye=Math.max,Je=Math.min,Xe=Math.floor,Ze=/\$([$&'`]|\d\d?|<[^>]*>)/g,tn=/\$([$&'`]|\d\d?)/g;!function(n,t,e,r){var o=ut(n),i=!d(function(){var t={};return t[o]=function(){return 7},7!=""[n](t)}),a=i&&!d(function(){var t=!1,e=/a/;return"split"===n&&((e={constructor:{}}).constructor[qe]=function(){return e},e.flags="",e[o]=/./[o]),e.exec=function(){return t=!0,null},e[o](""),!t});if(!i||!a||"replace"===n&&(!Ge||!Qe||Be)||"split"===n&&!Ke){var c=/./[o],s=e(o,""[n],function(t,e,n,r,o){return e.exec===We?i&&!o?{done:!0,value:c.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}},{REPLACE_KEEPS_$0:Qe,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Be}),u=s[0],l=s[1];vt(String.prototype,n,u),vt(RegExp.prototype,o,2==t?function(t,e){return l.call(t,this,e)}:function(t){return l.call(t,this)})}r&&A(RegExp.prototype[o],"sham",!0)}("replace",2,function(o,S,C,t){var E=t.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,P=t.REPLACE_KEEPS_$0,R=E?"$":"$0";return[function(t,e){var n=s(this),r=null==t?void 0:t[o];return void 0!==r?r.call(t,n,e):S.call(String(n),t,e)},function(t,e){if(!E&&P||"string"==typeof e&&-1===e.indexOf(R)){var n=C(S,t,this,e);if(n.done)return n.value}var r=k(t),o=String(this),i="function"==typeof e;i||(e=String(e));var a=r.global;if(a){var c=r.unicode;r.lastIndex=0}for(var s,u,l=[];;){var d=He(r,o);if(null===d)break;if(l.push(d),!a)break;""===String(d[0])&&(r.lastIndex=(s=o,(u=nt(r.lastIndex))+(c?Ve(s,u).length:1)))}for(var f,p="",v=0,h=0;h<l.length;h++){d=l[h];for(var g=String(d[0]),m=Ye(Je(et(d.index),o.length),0),b=[],y=1;y<d.length;y++)b.push(void 0===(f=d[y])?f:String(f));var w=d.groups;if(i){var _=[g].concat(b,m,o);void 0!==w&&_.push(w);var x=String(e.apply(void 0,_))}else x=j(g,o,m,b,w,e);v<=m&&(p+=o.slice(v,m)+x,v=m+g.length)}return p+o.slice(v)}];function j(i,a,c,s,u,t){var l=c+i.length,d=s.length,e=tn;return void 0!==u&&(u=ct(u),e=Ze),S.call(t,e,function(t,e){var n;switch(e.charAt(0)){case"$":return"$";case"&":return i;case"`":return a.slice(0,c);case"'":return a.slice(l);case"<":n=u[e.slice(1,-1)];break;default:var r=+e;if(0==r)return t;if(d<r){var o=Xe(r/10);return 0===o?t:o<=d?void 0===s[o-1]?e.charAt(1):s[o-1]+e.charAt(1):t}n=s[r-1]}return void 0===n?"":n})}});var en,nn=/"/g;function rn(t){return(rn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}at({target:"String",proto:!0,forced:(en="fixed",d(function(){var t=""[en]('"');return t!==t.toLowerCase()||3<t.split('"').length}))},{fixed:function(){return t="tt",n=e="",r=String(s(this)),o="<"+t,""!==e&&(o+=" "+e+'="'+String(n).replace(nn,"&quot;")+'"'),o+">"+r+"</"+t+">";var t,e,n,r,o}});var on,an,cn,sn,un,ln=function(t,e,n){for(var r=e.split(" "),o=t instanceof NodeList?t:[t],i=0;i<o.length;i++)o[i]&&o[i].classList[n].apply(o[i].classList,r)};function dn(t,e){var n=1<arguments.length&&void 0!==e?e:"",r=document.querySelector("#"+t+"-css-style");r||((r=document.createElement("style")).setAttribute("id",t+"-css-style"),r.setAttribute("type","text/css"),document.querySelector("head").appendChild(r)),r.innerHTML=n}window.addEventListener("load",function(){document.addEventListener("header_builder_panel_changed",function(t){return"hfg_header_layout_partial"===t.detail.partial_id?(window.HFG.init(),console.log("Reinitialize HFG with sidebar."),!1):"nav-icon_partial"===t.detail.partial_id?(window.HFG.init(!0),console.log("Reinitialize HFG with skip."),!1):void 0}),document.addEventListener("customize_control_sidebar",function(t){"open"===t.detail&&window.HFG.toggleMenuSidebar(!0),"close"===t.detail&&window.HFG.toggleMenuSidebar(!1)}.bind(this)),document.addEventListener("customize_section_opened",function(t){"header_sidebar"===t.detail&&window.HFG.toggleMenuSidebar(!0)}.bind(this));var w={mobile:"max-width: 576px",tablet:"min-width: 576px",desktop:"min-width: 961px"};_.each(neveCustomizePreview,function(t,y){_.each(t,function(m,b){wp.customize(b,function(t){t.bind(function(r){var e="";switch(y){case"neve_color_control":if(m.additional.partial)return wp.customize.selectiveRefresh.partial(m.additional.partial).refresh(),!1;_.each(m.additional,function(t){if(!t.selector)return!1;r=r||t.fallback,e+="body ".concat(t.selector," {\n                  ").concat(t.prop,": ").concat(r," !important;\n                }")}),dn(b,e);break;case"neve_background_control":if("color"===r.type){!r.colorValue&&m.additional.partial&&wp.customize.selectiveRefresh.partial(m.additional.partial).refresh(),e+="body ".concat(m.selector,"{background-image: none !important;}");var t="undefined"!==r.colorValue?r.colorValue:"inherit";return e+="".concat(m.selector,":before{ content: none !important;}"),e+="body ".concat(m.selector,", body ").concat(m.selector," .primary-menu-ul .sub-menu li {background-color: ").concat(t,"!important;}"),e+="".concat(m.selector," .primary-menu-ul .sub-menu, ").concat(m.selector," .primary-menu-ul .sub-menu li {border-color: ").concat(t,"!important;}"),dn(b,e),!1}r.useFeatured&&neveCustomizePreview.currentFeaturedImage&&(r.imageUrl=neveCustomizePreview.currentFeaturedImage),e+=m.selector+"{",e+=r.imageUrl?'background-image: url("'.concat(r.imageUrl,'") !important;'):"background-image: none !important;",e+=!0===r.fixed?"background-attachment: fixed !important;":"background-attachment: initial !important;",r.focusPoint&&r.focusPoint.x&&r.focusPoint.y&&(e+="background-position:"+(100*r.focusPoint.x).toFixed(2)+"% "+(100*r.focusPoint.y).toFixed(2)+"% !important;"),e+="background-size: cover !important;",document.querySelector(".header-menu-sidebar").classList.contains("dropdown")||(e+="position: absolute;"),e+='top: 0; bottom: 0; width: 100%; content:"";',e+="}";var n=r.overlayColorValue||"unset";e+="body ".concat(m.selector,", body ").concat(m.selector," .primary-menu-ul .sub-menu li {background-color: ").concat(n,"!important;}"),e+="".concat(m.selector," .primary-menu-ul .sub-menu, ").concat(m.selector," .primary-menu-ul .sub-menu li {border-color: ").concat(n,"!important;}"),e+=m.selector+':before { content: "";position: absolute; top: 0; bottom: 0; width: 100%;'+"background-color: ".concat(n,"!important;")+"opacity: "+(r.overlayOpacity||50)/100+"!important;}",e+=m.selector+"{ background-color: transparent !important; }",dn(b,e);break;case"\\Neve\\Customizer\\Controls\\React\\Radio_Buttons":var o=document.querySelectorAll(m.selector);_.each(o,function(t){var e,n;e=t.parentNode,ln(e,"hfg-item-center hfg-item-right hfg-item-left hfg-item-justify","remove"),n=t.parentNode,ln(n,"hfg-item-"+r,"add")});break;case"\\Neve\\Customizer\\Controls\\Radio_Image":break;case"\\Neve\\Customizer\\Controls\\Range":case"\\Neve\\Customizer\\Controls\\React\\Responsive_Range":var i=JSON.parse(r);0<i.mobile?e+="@media (max-width: 576px) { body "+m.selector+"{ "+m.additional.prop+":"+i.mobile+m.additional.unit+";}}":e+="@media (max-width: 576px) { body "+m.selector+"{ "+m.additional.prop+":unset;}}",0<i.tablet?e+="@media (min-width: 576px) { body "+m.selector+"{ "+m.additional.prop+":"+i.tablet+m.additional.unit+";}}":e+="@media (min-width: 576px) { body "+m.selector+"{ "+m.additional.prop+":unset;}}",0<i.desktop?e+="@media (min-width: 961px) { body "+m.selector+"{ "+m.additional.prop+":"+i.desktop+m.additional.unit+";}}":e+="@media (min-width: 961px) { body "+m.selector+"{ "+m.additional.prop+":unset;}}",dn(b,e);break;case"\\Neve\\Customizer\\Controls\\React\\Spacing":for(var a in w){for(var c in e+="@media ("+w[a]+") { body "+m.selector+"{",r[a])""!==r[a][c]?e+=m.additional.prop+"-"+c+":"+r[a][c]+r[a+"-unit"]+";":e+=m.additional.prop+"-"+c+": unset;";e+="}}"}dn(b,e);break;case"\\Neve\\Customizer\\Controls\\React\\Typography":for(var s in e+="html ".concat(m.selector,"{\n\t\t\t\t\t\t\t\t\t\ttext-transform: ").concat(r.textTransform,";\n\t\t\t\t\t\t\t\t\t\tfont-weight: ").concat(r.fontWeight,";\n\t\t\t\t\t\t\t\t\t}"),w)e+="@media (".concat(w[s],") {\n\t\t\t\t\t\t\t\t\t\t\thtml ").concat(m.selector," {\n\t\t\t\t\t\t\t\t\t\t\t\tfont-size:").concat(r.fontSize[s]).concat(r.fontSize.suffix[s],";\n\t\t\t\t\t\t\t\t\t\t\t\tletter-spacing:").concat(r.letterSpacing[s],"px;\n\t\t\t\t\t\t\t\t\t\t\t\tline-height:").concat(r.lineHeight[s]).concat(r.lineHeight.suffix[s]||"",";\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t}");dn(b,e);break;case"\\Neve\\Customizer\\Controls\\React\\Button_Appearance":var u=r.background||"unset",l=r.text||"currentColor",d=r.text||"",f="html ".concat(m.selector),p="html ".concat(m.selector," .icon-bar");m.additional&&m.additional.additional_buttons&&_.each(m.additional.additional_buttons,function(t){f+=",html "+t.button,p+=",html "+t.button+" "+t.text}),e+="".concat(f," {\n\t\t\t\t\t\t\t\t\t\tbackground-color: ").concat(u,";\n\t\t\t\t\t\t\t\t\t\tcolor: ").concat(l,";"),"object"!==rn(r.borderRadius)?e+="border-radius: ".concat(r.borderRadius,"px;"):e+="\n                border-top-left-radius: ".concat(r.borderRadius.top,"px;\n                border-top-right-radius: ").concat(r.borderRadius.right,"px;\n                border-bottom-right-radius: ").concat(r.borderRadius.bottom,"px;\n                border-bottom-left-radius: ").concat(r.borderRadius.left,"px;\n                "),"outline"===r.type&&("object"!==rn(r.borderWidth)?e+="border: ".concat(r.borderWidth,"px solid ").concat(d,";"):e+="\n                  border-style: solid;\n                  border-color: ".concat(d,";\n                  border-top-width: ").concat(r.borderWidth.top,"px;\n                  border-right-width: ").concat(r.borderWidth.right,"px;\n                  border-bottom-width: ").concat(r.borderWidth.bottom,"px;\n                  border-left-width: ").concat(r.borderWidth.left,"px;\n                  ")),"fill"===r.type&&(e+="border: none;"),e+="}",e+="".concat(p," {\n\t\t\t\t\t\t\t\t\t\tbackground-color: ").concat(l,";\n\t\t\t\t\t\t\t\t\t\tcolor: ").concat(l,";\n\t\t\t\t\t\t\t\t\t}"),dn(b,e);break;case"text":var v=document.querySelector(m.selector);if(""===r)return v.parentNode.removeChild(v),!1;if(null===v){var h=document.createElement(m.additional.html_tag);h.classList.add(m.additional.wrap_class),document.querySelector(m.additional.parent).prepend(h)}document.querySelector(m.selector).innerHTML=r;break;case"neve_range_control":case"Neve\\Customizer\\Controls\\React\\Range":if("svg-icon-size"===m.additional.type)return e+="html ".concat(m.selector," {\n\t\t\t\t\t\t\t\t\t\t\twidth: ").concat(r,"px;\n\t\t\t\t\t\t\t\t\t\t\theight: ").concat(r,"px;\n\t\t\t\t\t\t\t\t\t\t}"),dn(b,e),!1;e+="html ".concat(m.selector," {\n\t\t\t\t\t\t\t\t\t\t\t").concat(m.additional.type,": ").concat(r,"px;\n\t\t\t\t\t\t\t\t\t\t}"),dn(b,e);break;case"\\Neve\\Customizer\\Controls\\React\\Color":console.log(r);var g=""===r?"unset":r;e+="html ".concat(m.selector," {\n\t\t\t\t\t\t\t\t\t\t").concat(m.additional.prop,": ").concat(g,";\n\t\t\t\t\t\t\t\t\t}"),dn(b,e)}})})})}),wp.customize.preview.bind("font-selection",function(t){var e=neveCustomizePreview[t.type][t.controlId].selector,n=t.source,r=t.controlId+"_font_family",o=t.inherit?"inherit":'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';if(e=(e=e.split(",")).map(function(t){return"html "+t}).join(","),!1===t.value?dn(t.controlId,e+"{font-family: "+o+";}"):dn(t.controlId,e+"{font-family: "+t.value+" ;}"),"google"===n.toLowerCase()){var i=document.querySelector("#"+r),a="//fonts.googleapis.com/css?family="+t.value.replace(" ","+")+"%3A100%2C200%2C300%2C400%2C500%2C600%2C700%2C800";if(null!==i)return i.setAttribute("href",a),!1;var c=document.createElement("link");c.setAttribute("rel","stylesheet"),c.setAttribute("id",r),c.setAttribute("href",a),c.setAttribute("type","text/css"),c.setAttribute("media","all"),document.querySelector("head").appendChild(c)}})}),(on=jQuery).neveCustomizeUtilities={setLiveCss:function(o,t){var i="",e=on("."+o.styleClass);if("object"!==rn(t))return on(o.selectors).css(o.cssProperty,t.toString()+o.propertyUnit),!1;on.each(t,function(t,e){var n;if("suffix"===t)return!0;var r=o.propertyUnit;switch("object"===rn(o.propertyUnit)&&(r=o.propertyUnit[t]),n=o.selectors+"{ "+o.cssProperty+":"+e+r+"}",t){default:case"mobile":i+=n;break;case"desktop":i+="@media(min-width: 960px) {"+n+"}";break;case"tablet":i+="@media (min-width: 576px){"+n+"}"}}),0<e.length?e.text(i):on("head").append('<style type="text/css" class="'+o.styleClass+'">'+i+"</style>")}},(an=jQuery).neveRangesPreview={init:function(){this.rangesPreview()},ranges:{neve_container_width:{selector:".container",cssProp:"max-width",unit:"px",styleClass:"container-width-css"}},rangesPreview:function(){_.each(this.ranges,function(r,t){wp.customize(t,function(t){t.bind(function(t){var e=JSON.parse(t);if(!e)return!0;"object"===rn(e.suffix)&&(r.unit=e.suffix);var n={selectors:r.selector,cssProperty:r.cssProp,propertyUnit:r.unit?r.unit:"",styleClass:r.styleClass};an.neveCustomizeUtilities.setLiveCss(n,e)})})})}},jQuery.neveRangesPreview.init(),(cn=jQuery).neveLayoutPreview={init:function(){this.contentWidthsPreview(),this.containersLivePreview()},contentWidths:{neve_sitewide_content_width:{content:".neve-main > .container .col",sidebar:".nv-sidebar-wrap"},neve_blog_archive_content_width:{content:".archive-container .nv-index-posts",sidebar:".archive-container .nv-sidebar-wrap"},neve_single_post_content_width:{content:".single-post-container .nv-single-post-wrap",sidebar:".single-post-container .nv-sidebar-wrap"},neve_shop_archive_content_width:{content:".archive.woocommerce .shop-container .nv-shop.col",sidebar:".archive.woocommerce .shop-container .nv-sidebar-wrap"},neve_single_product_content_width:{content:".single-product .shop-container .nv-shop.col",sidebar:".single-product .shop-container .nv-sidebar-wrap"},neve_other_pages_content_width:{content:"body:not(.single):not(.archive):not(.blog):not(.search) .neve-main > .container .col",sidebar:"body:not(.single):not(.archive):not(.blog):not(.search) .nv-sidebar-wrap"}},contentWidthsPreview:function(){cn.each(this.contentWidths,function(n,r){wp.customize(n,function(t){t.bind(function(t){var e=" @media (min-width: 961px) {\n\t\t\t\t\t\t\t".concat(r.content," { max-width: ").concat(t,"% !important; }\n\t\t\t\t\t\t\t").concat(r.sidebar," { max-width: ").concat(100-t,"% !important; }\n\t\t\t\t\t\t}");dn(n+"-css",e)})})})},containersLayoutMap:{neve_default_container_style:".page:not(.woocommerce) .single-page-container",neve_blog_archive_container_style:".archive-container",neve_single_post_container_style:".single-post-container",neve_shop_archive_container_style:".woocommerce-page.post-type-archive .neve-main > div",neve_single_product_container_style:".single-product .neve-main > div"},containersLivePreview:function(){cn.each(this.containersLayoutMap,function(t,e){e+=":not(.set-in-metabox)",wp.customize(t,function(t){t.bind(function(t){if("contained"===t)return cn(e).removeClass("container-fluid").addClass("container"),!1;cn(e).removeClass("container").addClass("container-fluid")})})})}},jQuery.neveLayoutPreview.init(),(sn=jQuery).neveCustomizeUtilities={setLiveCss:function(o,t){var i="",e=sn("."+o.styleClass);if("object"!==rn(t))return sn(o.selectors).css(o.cssProperty,t.toString()+o.propertyUnit),!1;sn.each(t,function(t,e){var n;if("suffix"===t)return!0;var r=o.propertyUnit;switch("object"===rn(o.propertyUnit)&&(r=o.propertyUnit[t]),n=o.selectors+"{ "+o.cssProperty+":"+e+r+"}",t){default:case"mobile":i+=n;break;case"desktop":i+="@media(min-width: 960px) {"+n+"}";break;case"tablet":i+="@media (min-width: 576px){"+n+"}"}}),0<e.length?e.text(i):sn("head").append('<style type="text/css" class="'+o.styleClass+'">'+i+"</style>")}},(un=jQuery).neveLayoutPreview={init:function(){this.contentWidthsPreview(),this.containersLivePreview()},contentWidths:{neve_sitewide_content_width:{content:".neve-main > .container .col, .neve-main > .container-fluid .col",sidebar:".nv-sidebar-wrap"},neve_blog_archive_content_width:{content:".archive-container .nv-index-posts",sidebar:".archive-container .nv-sidebar-wrap"},neve_single_post_content_width:{content:".single-post-container .nv-single-post-wrap",sidebar:".single-post-container .nv-sidebar-wrap"},neve_shop_archive_content_width:{content:".archive.woocommerce .shop-container .nv-shop.col",sidebar:".archive.woocommerce .shop-container .nv-sidebar-wrap"},neve_single_product_content_width:{content:".single-product .shop-container .nv-shop.col",sidebar:".single-product .shop-container .nv-sidebar-wrap"},neve_other_pages_content_width:{content:"body:not(.single):not(.archive):not(.blog):not(.search) .neve-main > .container .col",sidebar:"body:not(.single):not(.archive):not(.blog):not(.search) .nv-sidebar-wrap"}},contentWidthsPreview:function(){un.each(this.contentWidths,function(t,e){wp.customize(t,function(t){t.bind(function(t){jQuery(e.content).css("max-width",t+"%"),jQuery(e.sidebar).css("max-width",100-t+"%")})})})},containersLayoutMap:{neve_default_container_style:".page:not(.woocommerce) .single-page-container",neve_blog_archive_container_style:".archive-container",neve_single_post_container_style:".single-post-container",neve_shop_archive_container_style:".woocommerce-page.post-type-archive .neve-main > div",neve_single_product_container_style:".single-product .neve-main > div"},containersLivePreview:function(){un.each(this.containersLayoutMap,function(t,e){e+=":not(.set-in-metabox)",wp.customize(t,function(t){t.bind(function(t){if("contained"===t)return un(e).removeClass("container-fluid").addClass("container"),!1;un(e).removeClass("container").addClass("container-fluid")})})})}},jQuery.neveLayoutPreview.init()}();
