(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9739],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8999:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],s={sidebar_label:"Actualizar Cursos",sidebar_position:1},c="Actualizar Cursos",u={unversionedId:"gestion-cursos/actualizar-cursos",id:"gestion-cursos/actualizar-cursos",isDocsHomePage:!1,title:"Actualizar Cursos",description:"Este enlace ayuda a la creacion de certificados digitales, para ello se debera usar el siguiente endpoint al que se le debera enviar datos en id que representara el registro del curso en el que se amtriculo el profesor.",source:"@site/docs/gestion-cursos/actualizar-cursos.md",sourceDirName:"gestion-cursos",slug:"/gestion-cursos/actualizar-cursos",permalink:"/repo-back-cd/docs/gestion-cursos/actualizar-cursos",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/gestion-cursos/actualizar-cursos.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Actualizar Cursos",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Envio de certificados digitales",permalink:"/repo-back-cd/docs/certificado-digital/envio-certificados"},next:{title:"Consultar curso",permalink:"/repo-back-cd/docs/gestion-cursos/consultar-curso"}},l=[],p={toc:l};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"actualizar-cursos"},"Actualizar Cursos"),(0,a.kt)("p",null,"Este enlace ayuda a la creacion de certificados digitales, para ello se debera usar el siguiente ",(0,a.kt)("strong",{parentName:"p"},"endpoint")," al que se le debera enviar datos en ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"id"))," que representara el registro del curso en el que se amtriculo el profesor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"http://127.0.0.1:5000/certificado/id=xxxxxxxx\n")))}d.isMDXComponent=!0}}]);