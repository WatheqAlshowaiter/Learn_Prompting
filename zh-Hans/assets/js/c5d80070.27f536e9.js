"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[3940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={sidebar_position:30},r="\ud83d\udfe2 Study Buddy",s={unversionedId:"basic_applications/study_tool",id:"basic_applications/study_tool",title:"\ud83d\udfe2 Study Buddy",description:"One of our favorite ways to use LLMs is as a study tool! In particular, it is useful for explaining confusing terms as well as quizzing you on test content.",source:"@site/docs/basic_applications/study_tool.md",sourceDirName:"basic_applications",slug:"/basic_applications/study_tool",permalink:"/zh-Hans/docs/basic_applications/study_tool",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basic_applications/study_tool.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Blogs",permalink:"/zh-Hans/docs/basic_applications/blog_generation"},next:{title:"\ud83d\udfe1 \u4ee3\u7801\u8f85\u52a9",permalink:"/zh-Hans/docs/basic_applications/coding_assistance"}},l={},c=[{value:"Explaining Terms",id:"explaining-terms",level:2},{value:"Quizzing Yourself",id:"quizzing-yourself",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-study-buddy"},"\ud83d\udfe2 Study Buddy"),(0,a.kt)("p",null,"One of our favorite ways to use LLMs is as a study tool! In particular, it is useful for explaining confusing terms as well as quizzing you on test content."),(0,a.kt)("h2",{id:"explaining-terms"},"Explaining Terms"),(0,a.kt)("p",null,"I was recently reading a textbook about Cacti",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", and saw this passage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Because of adaptations to xeric conditions and the presence of **less derived woods** in Pereskioideae, the Cactaceae is one of the most interesting families both anatomically and morphologically. \n")),(0,a.kt)("p",null,"I had no idea what ",(0,a.kt)("strong",{parentName:"p"},"less derived woods")," meant, and Google only showed research articles on it. I decided to use ChatGPT to find out what it meant. I gave it the following prompt, which is simple the passage from the book and my question."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'Because of adaptations to xeric conditions and the presence of less derived woods in Pereskioideae, the Cactaceae is one of the most interesting families both anatomically and morphologically. \n\nWhat do less derived woods mean?\n\n// highlight-start\nIn this context, "less derived woods" refers to the ancestral or primitive form of wood found in the early evolution of plants. These woods lack specialized structures and features that evolved later in more derived or advanced plants. In the Pereskioideae subfamily of the Cactaceae family, the wood is less derived compared to other subfamilies and is more similar to the wood found in non-cactus plants. The less derived wood in Pereskioideae is thought to be an adaptation to the more humid and less xeric environments in which these plants grow compared to other cacti.\n//highlight-end\n')),(0,a.kt)("p",null,"The model was able to answer my question quickly and I was able to continue with my reading."),(0,a.kt)("h2",{id:"quizzing-yourself"},"Quizzing Yourself"),(0,a.kt)("p",null,"Another way to use LLMs as a study tool is to quiz yourself. If you have an upcoming calculus test, you could simply ask:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Generate 5 calculus I quiz questions for me:\n\n// highlight-start\n1. What is the derivative of y = x3?\n2. Evaluate the indefinite integral of x3 + 5x2 + 7x + 4.\n3. What is the product rule for derivatives?\n4. Find the equation of the line tangent to y = x2 at the point (4, 16).\n5. What is the second derivative of y = x4?\n//highlight-end\n")),(0,a.kt)("p",null,"If you are studying a more specific topic, you may need to give the model additional information, for example your class notes!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"3/20/2020 2:30 PM\n\nMarketing Class Notes\n\n- Discussed 4 P's of marketing: Product, Price, Place, Promotion\n- Difference between B2C and B2B: B2C is direct consumer market, B2B is business to business\n- Different types of market research: Quantitative and Qualitative, such as surveys and focus groups\n- Pricing Strategies: Skimming, Penetration, Competition, and Value\n- Segmentation: segmenting customer base by age, income, etc.\n- 4 types of segmentation: Demographic, Geographic, Psychographic, and Behavioral\n- Discussed different promotional tools: Advertising, Personal Selling, Public Relations, Direct Marketing, and Sales Promotions\n\nGenerate 5 marketing quiz questions for me based on my notes:\n\n// highlight-start\n1. What are the 4 P's of marketing?\n2. What is the difference between B2C and B2B?\n3. What are two types of market research?\n4. What are 4 types of segmentation?\n5. Name 5 promotional tools.\n//highlight-end\n")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"There are probably other ways to use LLMs to study. Many learning companies like Duolingo and Quizlet are implementing LLMs into their products."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Nobel, P. S., & others. (2002). Cacti: biology and uses. Univ of California Press.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);