"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,u=m["".concat(l,".").concat(h)]||m[h]||f[h]||o;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>f});var r=n(87462),a=(n(67294),n(3905));const o=n.p+"assets/images/jailbreak_research-0f63ed07608ef5aa94f0007fbd2a0f6b.png",i=n.p+"assets/images/injection_leak-ea016770b33c6fb63af120392153f773.png",p=n.p+"assets/images/bing_chat-2839ba85af1f864a3ce64713dbe67f8f.png",l={sidebar_position:2},s="\ud83d\udfe2 Prompt Leaking",c={unversionedId:"prompt_hacking/leaking",id:"prompt_hacking/leaking",title:"\ud83d\udfe2 Prompt Leaking",description:"Prompt leaking is a form of prompt injection in which the model is asked to",source:"@site/docs/prompt_hacking/leaking.md",sourceDirName:"prompt_hacking",slug:"/prompt_hacking/leaking",permalink:"/ru/docs/prompt_hacking/leaking",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/prompt_hacking/leaking.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Prompt Injection",permalink:"/ru/docs/prompt_hacking/injection"},next:{title:"\ud83d\udfe2 Jailbreaking",permalink:"/ru/docs/prompt_hacking/jailbreaking"}},m={},f=[{value:"Microsoft Bing Chat",id:"microsoft-bing-chat",level:3},{value:"Practice",id:"practice",level:2}],h={toc:f},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-prompt-leaking"},"\ud83d\udfe2 Prompt Leaking"),(0,a.kt)("p",null,"Prompt leaking is a form of prompt injection in which the model is asked to\nspit out its ",(0,a.kt)("em",{parentName:"p"},"own prompt"),". "),(0,a.kt)("p",null,"As shown in the example image",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," below, the attacker changes ",(0,a.kt)("inlineCode",{parentName:"p"},"user_input")," to attempt to return the prompt. The intended goal is distinct from goal hijacking (normal prompt injection), where the attacker changes ",(0,a.kt)("inlineCode",{parentName:"p"},"user_input")," to print malicious instructions",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". "),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:o,style:{width:"500px"}})),(0,a.kt)("p",null,"The following image",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", again from the ",(0,a.kt)("inlineCode",{parentName:"p"},"remoteli.io")," example, shows\na Twitter user getting the model to leak its prompt."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:i,style:{width:"300px"}})),(0,a.kt)("p",null,"Well, so what? Why should anyone care about prompt leaking? "),(0,a.kt)("p",null,"Sometimes people want to keep their prompts secret. For example an education company\ncould be using the prompt ",(0,a.kt)("inlineCode",{parentName:"p"},"explain this to me like I am 5")," to explain\ncomplex topics. If the prompt is leaked, then anyone can use it without going\nthrough that company."),(0,a.kt)("h3",{id:"microsoft-bing-chat"},"Microsoft Bing Chat"),(0,a.kt)("p",null,'More notably, Microsoft released a ChatGPT powered search engine known as "the new Bing" on 2/7/23, which was demonstrated to be vulnerable to prompt leaking. The following example by ',(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/kliu128/status/1623472922374574080"},"@kliu128"),' demonstrates how given an earlier version of Bing Search, code-named "Sydney", was susceptible when giving a snippet of its prompt',(0,a.kt)("sup",{parentName:"p",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),". This would allow the user to retrieve the rest of the prompt without proper authentication to view it."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:p,style:{width:"700px"}})),(0,a.kt)("p",null,"With a recent surge in GPT-3 based startups, with much more complicated prompts that can\ntake many hours to develop, this is a real concern."),(0,a.kt)("h2",{id:"practice"},"Practice"),(0,a.kt)("p",null,"Try to leak the following prompt",(0,a.kt)("sup",{parentName:"p",id:"fnref-4"},(0,a.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))," by appending text to it:"),(0,a.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IkVuZ2xpc2g6IEkgd2FudCB0byBnbyB0byB0aGUgcGFyayB0b2RheS5cbkZyZW5jaDogSmUgdmV1eCBhbGxlciBhdSBwYXJjIGF1am91cmQnaHVpLlxuRW5nbGlzaDogSSBsaWtlIHRvIHdlYXIgYSBoYXQgd2hlbiBpdCByYWlucy5cbkZyZW5jaDogSidhaW1lIHBvcnRlciB1biBjaGFwZWF1IHF1YW5kIGl0IHBsZXV0LlxuRW5nbGlzaDogV2hhdCBhcmUgeW91IGRvaW5nIGF0IHNjaG9vbD9cbkZyZW5jaDogUXUnZXN0LWNlIHF1ZSB0byBmYWlzIGEgbCdlY29sZT9cbkVuZ2xpc2g6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Perez, F., & Ribeiro, I. (2022). Ignore Previous Prompt: Attack Techniques For Language Models. arXiv. https://doi.org/10.48550/ARXIV.2211.09527\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Willison, S. (2022). Prompt injection attacks against GPT-3. https://simonwillison.net/2022/Sep/12/prompt-injection/\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},"The entire prompt of Microsoft Bing Chat?! (Hi, Sydney.). (2023). https://twitter.com/kliu128/status/1623472922374574080\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-4"},"Chase, H. (2022). adversarial-prompts. https://github.com/hwchase17/adversarial-prompts\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);