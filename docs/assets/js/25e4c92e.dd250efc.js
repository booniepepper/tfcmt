"use strict";(self.webpackChunktfcmt=self.webpackChunktfcmt||[]).push([[963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,d=s["".concat(u,".").concat(f)]||s[f]||c[f]||i;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:300},l="Environment variable",o={unversionedId:"environment-variable",id:"environment-variable",title:"Environment variable",description:"- GITHUB_TOKEN",source:"@site/docs/environment-variable.md",sourceDirName:".",slug:"/environment-variable",permalink:"/tfcmt/environment-variable",draft:!1,editUrl:"https://github.com/suzuki-shunsuke/tfcmt-docs/edit/main/docs/environment-variable.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/tfcmt/config"},next:{title:"Embed metadata in comments",permalink:"/tfcmt/embedded-metadata"}},u={},p=[{value:"Native support of some CI platforms",id:"native-support-of-some-ci-platforms",level:2},{value:"Google Cloud Build Support",id:"google-cloud-build-support",level:2},{value:"Custom Environment Variable Definition",id:"custom-environment-variable-definition",level:2}],m={toc:p},s="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"environment-variable"},"Environment variable"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GITHUB_TOKEN"),(0,a.kt)("li",{parentName:"ul"},"TFCMT_REPO_OWNER"),(0,a.kt)("li",{parentName:"ul"},"TFCMT_REPO_NAME"),(0,a.kt)("li",{parentName:"ul"},"TFCMT_SHA"),(0,a.kt)("li",{parentName:"ul"},"TFCMT_PR_NUMBER"),(0,a.kt)("li",{parentName:"ul"},"TFCMT_CONFIG"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#native-support-of-some-ci-platforms"},"Native support of some CI platforms")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#custom-environment-variable-definition"},"Custom Environment Variable Definition"))),(0,a.kt)("h2",{id:"native-support-of-some-ci-platforms"},"Native support of some CI platforms"),(0,a.kt)("p",null,"Currently, supported CI are here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CircleCI"),(0,a.kt)("li",{parentName:"ul"},"Drone"),(0,a.kt)("li",{parentName:"ul"},"AWS CodeBuild"),(0,a.kt)("li",{parentName:"ul"},"GitHub Actions"),(0,a.kt)("li",{parentName:"ul"},"Google Cloud Build")),(0,a.kt)("p",null,"On the supported CI platform, the following parameters are complemented by the built-in environment variables."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-owner")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-repo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-pr")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-sha")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-build-url"))),(0,a.kt)("p",null,"This feature is implemented by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/go-ci-env"},"go-ci-env"),"."),(0,a.kt)("p",null,"\u26a0\ufe0f You can also use tfcmt on other platform with CLI flags or Custom Environment Variable Definition."),(0,a.kt)("h2",{id:"google-cloud-build-support"},"Google Cloud Build Support"),(0,a.kt)("p",null,"tfcmt >= ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/releases/tag/v3.3.0"},"v3.3.0")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/pull/376"},"#376")),(0,a.kt)("p",null,"Set the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"GOOGLE_CLOUD_BUILD"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"GOOGLE_CLOUD_BUILD=true\n")),(0,a.kt)("p",null,"Set the following environment variables using ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/cloud-build/docs/configuring-builds/substitute-variable-values"},"substitutions"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"COMMIT_SHA")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BUILD_ID")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PROJECT_ID")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_PR_NUMBER")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_REGION"))),(0,a.kt)("p",null,"Specify the repository owner and name in ",(0,a.kt)("inlineCode",{parentName:"p"},"tfcmt.yaml"),"."),(0,a.kt)("p",null,"e.g."),(0,a.kt)("p",null,"tfcmt.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"repo_owner: suzuki-shunsuke\nrepo_name: tfcmt\n")),(0,a.kt)("h2",{id:"custom-environment-variable-definition"},"Custom Environment Variable Definition"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This feature was removed from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/releases/tag/v4.0.0"},"v4.0.0")," for security reason.")))}c.isMDXComponent=!0}}]);