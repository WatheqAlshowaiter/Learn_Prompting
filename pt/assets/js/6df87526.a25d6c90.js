"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8019],{3905:(e,a,l)=>{l.d(a,{Zo:()=>b,kt:()=>m});var o=l(7294);function c(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function G(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,o)}return l}function g(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?G(Object(l),!0).forEach((function(a){c(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):G(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}function d(e,a){if(null==e)return{};var l,o,c=function(e,a){if(null==e)return{};var l,o,c={},G=Object.keys(e);for(o=0;o<G.length;o++)l=G[o],a.indexOf(l)>=0||(c[l]=e[l]);return c}(e,a);if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(e);for(o=0;o<G.length;o++)l=G[o],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(c[l]=e[l])}return c}var t=o.createContext({}),n=function(e){var a=o.useContext(t),l=a;return e&&(l="function"==typeof e?e(a):g(g({},a),e)),l},b=function(e){var a=n(e.components);return o.createElement(t.Provider,{value:a},e.children)},s="mdxType",r={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},I=o.forwardRef((function(e,a){var l=e.components,c=e.mdxType,G=e.originalType,t=e.parentName,b=d(e,["components","mdxType","originalType","parentName"]),s=n(l),I=c,m=s["".concat(t,".").concat(I)]||s[I]||r[I]||G;return l?o.createElement(m,g(g({ref:a},b),{},{components:l})):o.createElement(m,g({ref:a},b))}));function m(e,a){var l=arguments,c=a&&a.mdxType;if("string"==typeof e||c){var G=l.length,g=new Array(G);g[0]=I;var d={};for(var t in a)hasOwnProperty.call(a,t)&&(d[t]=a[t]);d.originalType=e,d[s]="string"==typeof e?e:c,g[1]=d;for(var n=2;n<G;n++)g[n]=l[n];return o.createElement.apply(null,g)}return o.createElement.apply(null,l)}I.displayName="MDXCreateElement"},7216:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>t,contentTitle:()=>g,default:()=>r,frontMatter:()=>G,metadata:()=>d,toc:()=>n});var o=l(7462),c=(l(7294),l(3905));const G={sidebar_position:2,locale:"pt-br"},g="\ud83d\udfe2 Perguntas de M\xfaltipla Escolha",d={unversionedId:"applied_prompting/mc_tutorial",id:"applied_prompting/mc_tutorial",title:"\ud83d\udfe2 Perguntas de M\xfaltipla Escolha",description:"Vamos usar o GPT para resolver uma pergunta do LSAT!",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/applied_prompting/mc_tutorial.md",sourceDirName:"applied_prompting",slug:"/applied_prompting/mc_tutorial",permalink:"/pt/docs/applied_prompting/mc_tutorial",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/applied_prompting/mc_tutorial.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,locale:"pt-br"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Introdu\xe7\xe3o",permalink:"/pt/docs/applied_prompting/overview"},next:{title:"\ud83d\udfe2 Respondendo Quest\xf5es de Discuss\xe3o",permalink:"/pt/docs/applied_prompting/short_response"}},t={},n=[{value:"A frase m\xe1gica",id:"a-frase-m\xe1gica",level:2},{value:"Melhorias.",id:"melhorias",level:2},{value:"Alterando a ordem dos itens de resposta",id:"alterando-a-ordem-dos-itens-de-resposta",level:3},{value:"Refazendo a pergunta com outras palavras",id:"refazendo-a-pergunta-com-outras-palavras",level:3},{value:"Incluindo contexto adicional",id:"incluindo-contexto-adicional",level:3}],b={toc:n},s="wrapper";function r(e){let{components:a,...l}=e;return(0,c.kt)(s,(0,o.Z)({},b,l,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"-perguntas-de-m\xfaltipla-escolha"},"\ud83d\udfe2 Perguntas de M\xfaltipla Escolha"),(0,c.kt)("p",null,"Vamos usar o GPT para resolver uma pergunta do LSAT",(0,c.kt)("sup",{parentName:"p",id:"fnref-1"},(0,c.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"!"),(0,c.kt)("p",null,"Abaixo est\xe1 um exemplo de pergunta do LSAT. Considere como voc\xea responderia e seu racioc\xednio."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-md"},"\x3c!-- highlight-start --\x3e\nJohn de Worceste de Worcester, um monge ingl\xeas, registrou a observa\xe7\xe3o, em 8 de dezembro de 1128, de dois grandes pontos solares incomuns. Cinco dias depois, uma aurora boreal brilhante foi observada no sul da Coreia. A atividade dos pontos solares \xe9 normalmente seguida pela apari\xe7\xe3o de uma aurora boreal, ap\xf3s um per\xedodo de tempo que em m\xe9dia \xe9 de cinco dias. Assim, a observa\xe7\xe3o na Coreia ajuda a confirmar a observa\xe7\xe3o de John de Worcester. Qual das seguintes alternativas, se verdadeira, mais fortalece o argumento?\n\x3c!-- highlight-end --\x3e\n\na) Uma aurora boreal pode ocorrer \xe0s vezes mesmo quando n\xe3o houve atividade significativa de pontos solares na semana anterior.\nb) Fontes chinesas registraram a observa\xe7\xe3o de pontos solares mais de 1000 anos antes de John de Worcester.\nc) Apenas uma atividade intensa de pontos solares poderia ter resultado em uma aurora boreal vis\xedvel em uma latitude t\xe3o baixa quanto a da Coreia.\nd) Como \xe9 imposs\xedvel observar pontos solares a olho nu em condi\xe7\xf5es t\xedpicas de luz do dia, a observa\xe7\xe3o registrada por John de Worcester teria ocorrido em condi\xe7\xf5es meteorol\xf3gicas incomuns, como neblina ou nuvens finas.\ne) O relato de John de Worcester inclu\xeda um desenho dos pontos solares, que pode ser a primeira ilustra\xe7\xe3o de atividade de pontos solares.\n")),(0,c.kt)("details",null,(0,c.kt)("summary",null,"A resposta correta \xe9 ..."),"c) Apenas uma atividade intensa de pontos solares poderia ter resultado em uma aurora boreal vis\xedvel em uma latitude t\xe3o baixa quanto a da Coreia."),(0,c.kt)("p",null,"Tente colar o problema no demo abaixo:"),(0,c.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjo2OTcsIm91dHB1dCI6ImUpIE8gcmVsYXRvIGRlIEpvaG4gZGUgV29yY2VzdGVyIGluY2x1w61hIHVtIGRlc2VuaG8gZG9zIHBvbnRvcyBzb2xhcmVzLCBxdWUgcG9kZSBzZXIgYSBwcmltZWlyYSBpbHVzdHJhw6fDo28gZGUgYXRpdmlkYWRlIGRlIHBvbnRvcyBzb2xhcmVzLiIsInByb21wdCI6Ikpvw6NvIGRlIFdvcmNlc3RlciwgdW0gbW9uZ2UgaW5nbMOqcywgcmVnaXN0cm91IGEgb2JzZXJ2YcOnw6NvLCBlbSA4IGRlIGRlemVtYnJvIGRlIDExMjgsIGRlIGRvaXMgZ3JhbmRlcyBwb250b3Mgc29sYXJlcyBpbmNvbXVucy4gQ2luY28gZGlhcyBkZXBvaXMsIHVtYSBhdXJvcmEgYm9yZWFsIGJyaWxoYW50ZSBmb2kgb2JzZXJ2YWRhIG5vIHN1bCBkYSBDb3JlaWEuIEEgYXRpdmlkYWRlIGRvcyBwb250b3Mgc29sYXJlcyDDqSBub3JtYWxtZW50ZSBzZWd1aWRhIHBlbGEgYXBhcmnDp8OjbyBkZSB1bWEgYXVyb3JhIGJvcmVhbCwgYXDDs3MgdW0gcGVyw61vZG8gZGUgdGVtcG8gcXVlIGVtIG3DqWRpYSDDqSBkZSBjaW5jbyBkaWFzLiBBc3NpbSwgYSBvYnNlcnZhw6fDo28gbmEgQ29yZWlhIGFqdWRhIGEgY29uZmlybWFyIGEgb2JzZXJ2YcOnw6NvIGRlIEpvaG4gZGUgV29yY2VzdGVyLiBRdWFsIGRhcyBzZWd1aW50ZXMgYWx0ZXJuYXRpdmFzLCBzZSB2ZXJkYWRlaXJhLCBtYWlzIGZvcnRhbGVjZSBvIGFyZ3VtZW50bz9cbmEpIFVtYSBhdXJvcmEgYm9yZWFsIHBvZGUgb2NvcnJlciDDoHMgdmV6ZXMgbWVzbW8gcXVhbmRvIG7Do28gaG91dmUgYXRpdmlkYWRlIHNpZ25pZmljYXRpdmEgZGUgcG9udG9zIHNvbGFyZXMgbmEgc2VtYW5hIGFudGVyaW9yLlxuYikgRm9udGVzIGNoaW5lc2FzIHJlZ2lzdHJhcmFtIGEgb2JzZXJ2YcOnw6NvIGRlIHBvbnRvcyBzb2xhcmVzIG1haXMgZGUgMTAwMCBhbm9zIGFudGVzIGRlIEpvaG4gZGUgV29yY2VzdGVyLlxuYykgQXBlbmFzIHVtYSBhdGl2aWRhZGUgaW50ZW5zYSBkZSBwb250b3Mgc29sYXJlcyBwb2RlcmlhIHRlciByZXN1bHRhZG8gZW0gdW1hIGF1cm9yYSBib3JlYWwgdmlzw612ZWwgZW0gdW1hIGxhdGl0dWRlIHTDo28gYmFpeGEgcXVhbnRvIGEgZGEgQ29yZWlhLlxuZCkgQ29tbyDDqSBpbXBvc3PDrXZlbCBvYnNlcnZhciBwb250b3Mgc29sYXJlcyBhIG9saG8gbnUgZW0gY29uZGnDp8O1ZXMgdMOtcGljYXMgZGUgbHV6IGRvIGRpYSwgYSBvYnNlcnZhw6fDo28gcmVnaXN0cmFkYSBwb3IgSm9obiBkZSBXb3JjZXN0ZXIgdGVyaWEgb2NvcnJpZG8gZW0gY29uZGnDp8O1ZXMgbWV0ZW9yb2zDs2dpY2FzIGluY29tdW5zLCBjb21vIG5lYmxpbmEgb3UgbnV2ZW5zIGZpbmFzLlxuZSkgTyByZWxhdG8gZGUgSm9obiBkZSBXb3JjZXN0ZXIgaW5jbHXDrWEgdW0gZGVzZW5obyBkb3MgcG9udG9zIHNvbGFyZXMsIHF1ZSBwb2RlIHNlciBhIHByaW1laXJhIGlsdXN0cmHDp8OjbyBkZSBhdGl2aWRhZGUgZGUgcG9udG9zIHNvbGFyZXMuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,c.kt)("p",null),(0,c.kt)("details",{scheme:"warning"},(0,c.kt)("summary",null,"Por que minha resposta \xe9 diferente?"),"Sua resposta pode ser diferente porque: 1) Atualiza\xe7\xf5es no modelo GPT-3 2) Aleat\xf3ridade no processo de gera\xe7\xe3o de textos. Voc\xea consegue manipular a sa\xedda para mais consist\xeancia ao definir ",(0,c.kt)("a",{href:"https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature"},"sua temperatura para 0"),"(artigo em ingl\xeas)."),(0,c.kt)("p",null,"O modelo falhou. Isso significa que o modelo \xe9 incapaz de responder esse tipo de pergunta? N\xe3o necessariamente. N\xf3s vamos nos aprofundar em t\xe9cnincas que podemos utilizar para melhorar os resultados do modelo."),(0,c.kt)("h2",{id:"a-frase-m\xe1gica"},"A frase m\xe1gica"),(0,c.kt)("p",null,'A prompt padr\xe3o que usamos acima fornece pouco insight sobre o "racioc\xednio" da sa\xedda do GPT. Podemos tentar adicionar a frase ',(0,c.kt)("inlineCode",{parentName:"p"},"vamos explicar passo a passo")," da seguinte forma:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-markdown"},"...\ne) O relato de John de Worcester inclu\xeda um desenho dos pontos solares, que pode ser a primeira ilustra\xe7\xe3o de atividade de pontos solares.\nVamos explicar passo a passo.\n")),(0,c.kt)("p",null,"Esta frase aumentar\xe1 a verbosidade do modelo. Voc\xea pode obter uma sa\xedda como esta:"),(0,c.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik8gYXJndW1lbnRvIGFwcmVzZW50YWRvIMOpIHF1ZSBhIG9ic2VydmHDp8OjbyBkZSBwb250b3Mgc29sYXJlcyBwb3IgSm%2FDo28gZGUgV29yY2VzdGVyLCBzZWd1aWRhIHBlbGEgb2JzZXJ2YcOnw6NvIGRlIHVtYSBhdXJvcmEgYm9yZWFsIG5hIENvcmVpYSBjaW5jbyBkaWFzIGRlcG9pcywgZm9ydGFsZWNlIGEgcmVsYcOnw6NvIGVudHJlIGVzc2VzIGV2ZW50b3MuIFBhcmEgZm9ydGFsZWNlciBhaW5kYSBtYWlzIGVzc2UgYXJndW1lbnRvLCBwcmVjaXNhbW9zIGVzY29saGVyIGEgYWx0ZXJuYXRpdmEgcXVlIG1haXMgYXBvaWEgZXNzYSByZWxhw6fDo28uXG5cbmEpIEVzdGEgYWx0ZXJuYXRpdmEgZW5mcmFxdWVjZSBvIGFyZ3VtZW50bywgcG9pcyBzdWdlcmUgcXVlIHVtYSBhdXJvcmEgYm9yZWFsIHBvZGUgb2NvcnJlciBzZW0gYXRpdmlkYWRlIHNpZ25pZmljYXRpdmEgZGUgcG9udG9zIHNvbGFyZXMgbmEgc2VtYW5hIGFudGVyaW9yLlxuYikgRW1ib3JhIGVzdGEgYWx0ZXJuYXRpdmEgc2VqYSBpbnRlcmVzc2FudGUsIGVsYSBuw6NvIGZvcnRhbGVjZSBkaXJldGFtZW50ZSBvIGFyZ3VtZW50byBhcHJlc2VudGFkby4gQWzDqW0gZGlzc28sIGEgZm9udGUgZGVzc2EgaW5mb3JtYcOnw6NvIHBvZGUgc2VyIHF1ZXN0aW9uw6F2ZWwuXG5jKSBFc3RhIGFsdGVybmF0aXZhIGZvcnRhbGVjZSBvIGFyZ3VtZW50bywgcG9pcyBzdWdlcmUgcXVlIGFwZW5hcyB1bWEgYXRpdmlkYWRlIGludGVuc2EgZGUgcG9udG9zIHNvbGFyZXMgcG9kZXJpYSB0ZXIgcmVzdWx0YWRvIGVtIHVtYSBhdXJvcmEgYm9yZWFsIHZpc8OtdmVsIGVtIHVtYSBsYXRpdHVkZSB0w6NvIGJhaXhhIHF1YW50byBhIGRhIENvcmVpYSwgY29ycm9ib3JhbmRvIGEgcmVsYcOnw6NvIGVudHJlIG9zIGV2ZW50b3Mgb2JzZXJ2YWRvcyBwb3IgSm%2FDo28gZGUgV29yY2VzdGVyIGUgbmEgQ29yZWlhLlxuZCkgRXN0YSBhbHRlcm5hdGl2YSBuw6NvIMOpIHJlbGV2YW50ZSBwYXJhIG8gYXJndW1lbnRvIGFwcmVzZW50YWRvLCBwb2lzIG7Do28gYWZldGEgYSByZWxhw6fDo28gZW50cmUgYSBvYnNlcnZhw6fDo28gZGUgcG9udG9zIHNvbGFyZXMgcG9yIEpvw6NvIGRlIFdvcmNlc3RlciBlIGEgb2JzZXJ2YcOnw6NvIGRhIGF1cm9yYSBib3JlYWwgbmEgQ29yZWlhLlxuZSkgRW1ib3JhIGVzdGEgYWx0ZXJuYXRpdmEgc2VqYSBpbnRlcmVzc2FudGUsIGVsYSBuw6NvIGZvcnRhbGVjZSBkaXJldGFtZW50ZSBvIGFyZ3VtZW50byBhcHJlc2VudGFkby4gQWzDqW0gZGlzc28sIG7Do28gaMOhIGdhcmFudGlhIGRlIHF1ZSBvIGRlc2VuaG8gZGUgSm9obiBkZSBXb3JjZXN0ZXIgc2VqYSBhIHByaW1laXJhIGlsdXN0cmHDp8OjbyBkZSBhdGl2aWRhZGUgZGUgcG9udG9zIHNvbGFyZXMuXG5cblBvcnRhbnRvLCBhIGFsdGVybmF0aXZhIG1haXMgZm9ydGUgw6kgYSBsZXRyYSBjLiIsInByb21wdCI6Ikpvw6NvIGRlIFdvcmNlc3RlciwgdW0gbW9uZ2UgaW5nbMOqcywgcmVnaXN0cm91IGEgb2JzZXJ2YcOnw6NvLCBlbSA4IGRlIGRlemVtYnJvIGRlIDExMjgsIGRlIGRvaXMgZ3JhbmRlcyBwb250b3Mgc29sYXJlcyBpbmNvbXVucy4gQ2luY28gZGlhcyBkZXBvaXMsIHVtYSBhdXJvcmEgYm9yZWFsIGJyaWxoYW50ZSBmb2kgb2JzZXJ2YWRhIG5vIHN1bCBkYSBDb3JlaWEuIEEgYXRpdmlkYWRlIGRvcyBwb250b3Mgc29sYXJlcyDDqSBub3JtYWxtZW50ZSBzZWd1aWRhIHBlbGEgYXBhcmnDp8OjbyBkZSB1bWEgYXVyb3JhIGJvcmVhbCwgYXDDs3MgdW0gcGVyw61vZG8gZGUgdGVtcG8gcXVlIGVtIG3DqWRpYSDDqSBkZSBjaW5jbyBkaWFzLiBBc3NpbSwgYSBvYnNlcnZhw6fDo28gbmEgQ29yZWlhIGFqdWRhIGEgY29uZmlybWFyIGEgb2JzZXJ2YcOnw6NvIGRlIEpvaG4gZGUgV29yY2VzdGVyLiBRdWFsIGRhcyBzZWd1aW50ZXMgYWx0ZXJuYXRpdmFzLCBzZSB2ZXJkYWRlaXJhLCBtYWlzIGZvcnRhbGVjZSBvIGFyZ3VtZW50bz9cblxuYSkgVW1hIGF1cm9yYSBib3JlYWwgcG9kZSBvY29ycmVyIMOgcyB2ZXplcyBtZXNtbyBxdWFuZG8gbsOjbyBob3V2ZSBhdGl2aWRhZGUgc2lnbmlmaWNhdGl2YSBkZSBwb250b3Mgc29sYXJlcyBuYSBzZW1hbmEgYW50ZXJpb3IuXG5iKSBGb250ZXMgY2hpbmVzYXMgcmVnaXN0cmFyYW0gYSBvYnNlcnZhw6fDo28gZGUgcG9udG9zIHNvbGFyZXMgbWFpcyBkZSAxMDAwIGFub3MgYW50ZXMgZGUgSm9obiBkZSBXb3JjZXN0ZXIuXG5jKSBBcGVuYXMgdW1hIGF0aXZpZGFkZSBpbnRlbnNhIGRlIHBvbnRvcyBzb2xhcmVzIHBvZGVyaWEgdGVyIHJlc3VsdGFkbyBlbSB1bWEgYXVyb3JhIGJvcmVhbCB2aXPDrXZlbCBlbSB1bWEgbGF0aXR1ZGUgdMOjbyBiYWl4YSBxdWFudG8gYSBkYSBDb3JlaWEuXG5kKSBDb21vIMOpIGltcG9zc8OtdmVsIG9ic2VydmFyIHBvbnRvcyBzb2xhcmVzIGEgb2xobyBudSBlbSBjb25kacOnw7VlcyB0w61waWNhcyBkZSBsdXogZG8gZGlhLCBhIG9ic2VydmHDp8OjbyByZWdpc3RyYWRhIHBvciBKb2huIGRlIFdvcmNlc3RlciB0ZXJpYSBvY29ycmlkbyBlbSBjb25kacOnw7VlcyBtZXRlb3JvbMOzZ2ljYXMgaW5jb211bnMsIGNvbW8gbmVibGluYSBvdSBudXZlbnMgZmluYXMuXG5lKSBPIHJlbGF0byBkZSBKb2huIGRlIFdvcmNlc3RlciBpbmNsdcOtYSB1bSBkZXNlbmhvIGRvcyBwb250b3Mgc29sYXJlcywgcXVlIHBvZGUgc2VyIGEgcHJpbWVpcmEgaWx1c3RyYcOnw6NvIGRlIGF0aXZpZGFkZSBkZSBwb250b3Mgc29sYXJlcy5cblxuVmFtb3MgZXhwbGljYXIgcGFzc28gYSBwYXNzby4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,c.kt)("admonition",{type:"info"},(0,c.kt)("p",{parentName:"admonition"},"Observe como o modelo raciocina atrav\xe9s do problema passo a passo."),(0,c.kt)("p",{parentName:"admonition"},'O termo espec\xedfico para esse comportamento \xe9 "Cadeia de Pensamento"',(0,c.kt)("sup",{parentName:"p",id:"fnref-1"},(0,c.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"; o modelo gera sequencialmente declara\xe7\xf5es para chegar a uma resposta. Isso \xe9 semelhante ao conceito de Pensamento de Sistema 2 (do livro ",'["R\xe1pido e Devagar"]'," de Daniel Kahneman (",(0,c.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow))"},"https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow))"),"; o modelo \xe9 programado para usar o Pensamento de Sistema 1, mas pode encadear o Pensamento de Sistema 1 para chegar a uma resposta mais metodol\xf3gica.")),(0,c.kt)("h2",{id:"melhorias"},"Melhorias."),(0,c.kt)("p",null,"Aqui est\xe3o algumas varia\xe7\xf5es do nosso prompt b\xe1sico para perguntas de m\xfaltipla escolha."),(0,c.kt)("h3",{id:"alterando-a-ordem-dos-itens-de-resposta"},"Alterando a ordem dos itens de resposta"),(0,c.kt)("p",null,"Voc\xea pode reordenar os itens de resposta na sua pergunta:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"...\na) Como \xe9 imposs\xedvel observar pontos solares a olho nu em condi\xe7\xf5es t\xedpicas de luz do dia, a observa\xe7\xe3o registrada por John de Worcester teria ocorrido em condi\xe7\xf5es meteorol\xf3gicas incomuns, como neblina ou nuvens finas.\nb) O relato de John de Worcester inclu\xeda um desenho dos pontos solares, que pode ser a primeira ilustra\xe7\xe3o de atividade de pontos solares\n...\n")),(0,c.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkEgb2JzZXJ2YcOnw6NvIGRlIEpvw6NvIGRlIFdvcmNlc3RlciBkZSBkb2lzIGdyYW5kZXMgcG9udG9zIHNvbGFyZXMgaW5jb211bnMgZW0gOCBkZSBkZXplbWJybyBkZSAxMTI4IGZvaSBzZWd1aWRhLCBjaW5jbyBkaWFzIGRlcG9pcywgcG9yIHVtYSBhdXJvcmEgYm9yZWFsIGJyaWxoYW50ZSBubyBzdWwgZGEgQ29yZWlhLiBDb21vIGEgYXRpdmlkYWRlIGRvcyBwb250b3Mgc29sYXJlcyDDqSBub3JtYWxtZW50ZSBzZWd1aWRhIHBlbGEgYXBhcmnDp8OjbyBkZSB1bWEgYXVyb3JhIGJvcmVhbCwgYSBvYnNlcnZhw6fDo28gbmEgQ29yZWlhIGFqdWRhIGEgY29uZmlybWFyIGEgb2JzZXJ2YcOnw6NvIGRlIEpvaG4gZGUgV29yY2VzdGVyLiBQYXJhIGZvcnRhbGVjZXIgYWluZGEgbWFpcyBlc3NlIGFyZ3VtZW50bywgZGV2ZW1vcyBlbmNvbnRyYXIgdW1hIG9ww6fDo28gcXVlIGFwb2llIGVzc2EgcmVsYcOnw6NvIGVudHJlIHBvbnRvcyBzb2xhcmVzIGUgYXVyb3JhcyBib3JlYWlzLlxuXG5BIG9ww6fDo28gKGUpIG7Do28gZm9ydGFsZWNlIG8gYXJndW1lbnRvLCBwb2lzIGFmaXJtYSBxdWUgYXBlbmFzIHVtYSBhdGl2aWRhZGUgaW50ZW5zYSBkZSBwb250b3Mgc29sYXJlcyBwb2RlcmlhIHRlciByZXN1bHRhZG8gZW0gdW1hIGF1cm9yYSBib3JlYWwgdmlzw612ZWwgZW0gdW1hIGxhdGl0dWRlIHTDo28gYmFpeGEgcXVhbnRvIGEgZGEgQ29yZWlhLCBvIHF1ZSBuw6NvIMOpIGNvZXJlbnRlIGNvbSBhIG9ic2VydmHDp8OjbyBkZSBKb2huIGRlIFdvcmNlc3Rlci5cblxuQSBvcMOnw6NvIChiKSBuw6NvIHRlbSByZWxhw6fDo28gY29tIGEgb2JzZXJ2YcOnw6NvIGRlIGF1cm9yYXMgYm9yZWFpcyBlLCBwb3J0YW50bywgbsOjbyBhanVkYSBhIGZvcnRhbGVjZXIgbyBhcmd1bWVudG8uXG5cbkEgb3DDp8OjbyAoYSkgY29udHJhZGl6IG8gYXJndW1lbnRvLCBwb2lzIGFmaXJtYSBxdWUgw6kgaW1wb3Nzw612ZWwgb2JzZXJ2YXIgcG9udG9zIHNvbGFyZXMgYSBvbGhvIG51IGVtIGNvbmRpw6fDtWVzIHTDrXBpY2FzIGRlIGx1eiBkbyBkaWEsIG8gcXVlIG7Do28gw6kgdmVyZGFkZS5cblxuQSBvcMOnw6NvIChkKSBuw6NvIGZvcnRhbGVjZSBvIGFyZ3VtZW50bywgcG9pcyByZWxhdGEgdW1hIG9ic2VydmHDp8OjbyBkZSBwb250b3Mgc29sYXJlcyBhbnRlcmlvciBhIGRlIEpvaG4gZGUgV29yY2VzdGVyLCBvIHF1ZSBuw6NvIGFmZXRhIGEgcmVsYcOnw6NvIGVudHJlIHBvbnRvcyBzb2xhcmVzIGUgYXVyb3JhcyBib3JlYWlzLlxuXG5BIG9ww6fDo28gKGMpIG7Do28gZW5mcmFxdWVjZSBvIGFyZ3VtZW50bywgbWFzIHRhbWLDqW0gbsOjbyBhanVkYSBhIGZvcnRhbGVjw6otbG8sIHBvaXMgYWZpcm1hIHF1ZSB1bWEgYXVyb3JhIGJvcmVhbCBwb2RlIG9jb3JyZXIgw6BzIHZlemVzIG1lc21vIHF1YW5kbyBuw6NvIGhvdXZlIGF0aXZpZGFkZSBzaWduaWZpY2F0aXZhIGRlIHBvbnRvcyBzb2xhcmVzIG5hIHNlbWFuYSBhbnRlcmlvciwgbyBxdWUgbsOjbyDDqSByZWxldmFudGUgcGFyYSBhIHJlbGHDp8OjbyBlbnRyZSBvcyBwb250b3Mgc29sYXJlcyBlIGEgYXVyb3JhIGJvcmVhbCBvYnNlcnZhZG9zIHBvciBKb8OjbyBkZSBXb3JjZXN0ZXIuXG5cblBvcnRhbnRvLCBhIG9ww6fDo28gcXVlIG1haXMgZm9ydGFsZWNlIG8gYXJndW1lbnRvIMOpIGEgKGUpLiIsInByb21wdCI6Ikpvw6NvIGRlIFdvcmNlc3RlciwgdW0gbW9uZ2UgaW5nbMOqcywgcmVnaXN0cm91IGEgb2JzZXJ2YcOnw6NvLCBlbSA4IGRlIGRlemVtYnJvIGRlIDExMjgsIGRlIGRvaXMgZ3JhbmRlcyBwb250b3Mgc29sYXJlcyBpbmNvbXVucy4gQ2luY28gZGlhcyBkZXBvaXMsIHVtYSBhdXJvcmEgYm9yZWFsIGJyaWxoYW50ZSBmb2kgb2JzZXJ2YWRhIG5vIHN1bCBkYSBDb3JlaWEuIEEgYXRpdmlkYWRlIGRvcyBwb250b3Mgc29sYXJlcyDDqSBub3JtYWxtZW50ZSBzZWd1aWRhIHBlbGEgYXBhcmnDp8OjbyBkZSB1bWEgYXVyb3JhIGJvcmVhbCwgYXDDs3MgdW0gcGVyw61vZG8gZGUgdGVtcG8gcXVlIGVtIG3DqWRpYSDDqSBkZSBjaW5jbyBkaWFzLiBBc3NpbSwgYSBvYnNlcnZhw6fDo28gbmEgQ29yZWlhIGFqdWRhIGEgY29uZmlybWFyIGEgb2JzZXJ2YcOnw6NvIGRlIEpvaG4gZGUgV29yY2VzdGVyLiBRdWFsIGRhcyBzZWd1aW50ZXMgYWx0ZXJuYXRpdmFzLCBzZSB2ZXJkYWRlaXJhLCBtYWlzIGZvcnRhbGVjZSBvIGFyZ3VtZW50bz9cblxuYSkgQ29tbyDDqSBpbXBvc3PDrXZlbCBvYnNlcnZhciBwb250b3Mgc29sYXJlcyBhIG9saG8gbnUgZW0gY29uZGnDp8O1ZXMgdMOtcGljYXMgZGUgbHV6IGRvIGRpYSwgYSBvYnNlcnZhw6fDo28gcmVnaXN0cmFkYSBwb3IgSm9obiBkZSBXb3JjZXN0ZXIgdGVyaWEgb2NvcnJpZG8gZW0gY29uZGnDp8O1ZXMgbWV0ZW9yb2zDs2dpY2FzIGluY29tdW5zLCBjb21vIG5lYmxpbmEgb3UgbnV2ZW5zIGZpbmFzLlxuYikgTyByZWxhdG8gZGUgSm9obiBkZSBXb3JjZXN0ZXIgaW5jbHXDrWEgdW0gZGVzZW5obyBkb3MgcG9udG9zIHNvbGFyZXMsIHF1ZSBwb2RlIHNlciBhIHByaW1laXJhIGlsdXN0cmHDp8OjbyBkZSBhdGl2aWRhZGUgZGUgcG9udG9zIHNvbGFyZXNcbmMpIFVtYSBhdXJvcmEgYm9yZWFsIHBvZGUgb2NvcnJlciDDoHMgdmV6ZXMgbWVzbW8gcXVhbmRvIG7Do28gaG91dmUgYXRpdmlkYWRlIHNpZ25pZmljYXRpdmEgZGUgcG9udG9zIHNvbGFyZXMgbmEgc2VtYW5hIGFudGVyaW9yLlxuZCkgRm9udGVzIGNoaW5lc2FzIHJlZ2lzdHJhcmFtIGEgb2JzZXJ2YcOnw6NvIGRlIHBvbnRvcyBzb2xhcmVzIG1haXMgZGUgMTAwMCBhbm9zIGFudGVzIGRlIEpvaG4gZGUgV29yY2VzdGVyLlxuZSkgQXBlbmFzIHVtYSBhdGl2aWRhZGUgaW50ZW5zYSBkZSBwb250b3Mgc29sYXJlcyBwb2RlcmlhIHRlciByZXN1bHRhZG8gZW0gdW1hIGF1cm9yYSBib3JlYWwgdmlzw612ZWwgZW0gdW1hIGxhdGl0dWRlIHTDo28gYmFpeGEgcXVhbnRvIGEgZGEgQ29yZWlhLlxuXG5WYW1vcyBleHBsaWNhciBwYXNzbyBhIHBhc3NvLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,c.kt)("h3",{id:"refazendo-a-pergunta-com-outras-palavras"},"Refazendo a pergunta com outras palavras"),(0,c.kt)("p",null,"Lembre-se que o prompt original era o seguinte:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Qual das op\xe7\xf5es a seguir, se verdadeira, mais fortalece o argumento?\n")),(0,c.kt)("p",null,"Podemos mudar o prompt para o seguinte:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Identifique cada op\xe7\xe3o como fortalece, enfraquece ou n\xe3o afeta o argumento.\n")),(0,c.kt)("p",null,"para obter mais informa\xe7\xf5es sobre as op\xe7\xf5es de resposta."),(0,c.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6ImEpIEVuZnJhcXVlY2UgbyBhcmd1bWVudG8sIHBvaXMgc3VnZXJlIHF1ZSBhIGF1cm9yYSBib3JlYWwgb2JzZXJ2YWRhIG5hIENvcmVpYSBwb2RlIG7jbyBlc3RhciByZWxhY2lvbmFkYSDgIGF0aXZpZGFkZSBkb3MgcG9udG9zIHNvbGFyZXMgcmVnaXN0cmFkb3MgcG9yIEpvaG4gZGUgV29yY2VzdGVyLiBcblxuYikgTuNvIGFmZXRhIG8gYXJndW1lbnRvLCBwb2lzIG8gZmF0byBkZSBhcyBmb250ZXMgY2hpbmVzYXMgdGVyZW0gcmVnaXN0cmFkbyBhIG9ic2VydmHn428gZGUgcG9udG9zIHNvbGFyZXMgYW50ZXMgZGUgSm9obiBkZSBXb3JjZXN0ZXIgbuNvIHRlbSByZWxh5%2BNvIGRpcmV0YSBjb20gYSBvY29ycupuY2lhIGRlIHVtYSBhdXJvcmEgYm9yZWFsIG5hIENvcmVpYSBhcPNzIGEgb2JzZXJ2YefjbyBkbyBtb25nZS5cblxuYykgRm9ydGFsZWNlIG8gYXJndW1lbnRvLCBwb2lzIHN1Z2VyZSBxdWUgYSBvYnNlcnZh5%2BNvIGRlIHVtYSBhdXJvcmEgYm9yZWFsIGVtIHVtYSBsYXRpdHVkZSB0428gYmFpeGEgcXVhbnRvIGEgZGEgQ29yZWlhIHJlcXVlciB1bWEgYXRpdmlkYWRlIGludGVuc2EgZGUgcG9udG9zIHNvbGFyZXMsIG8gcXVlIOkgY29uc2lzdGVudGUgY29tIGEgb2JzZXJ2YefjbyBkZSBKb2huIGRlIFdvcmNlc3Rlci5cblxuZCkgRW5mcmFxdWVjZSBvIGFyZ3VtZW50bywgcG9pcyBhIHBvc3NpYmlsaWRhZGUgZGUgcXVlIGFzIGNvbmRp5%2FVlcyBtZXRlb3JvbPNnaWNhcyBpbmNvbXVucyBwb3NzYW0gdGVyIGFmZXRhZG8gYSBvYnNlcnZh5%2BNvIGRlIEpvaG4gZGUgV29yY2VzdGVyIHBvZGUgc3VnZXJpciBxdWUgb3MgcG9udG9zIHNvbGFyZXMgcmVnaXN0cmFkb3MgcG9yIGVsZSBwb3NzYW0gbuNvIHRlciBzaWRvIHTjbyBpbmNvbXVucyBvdSBzaWduaWZpY2F0aXZvcy5cblxuZSkgRm9ydGFsZWNlIG8gYXJndW1lbnRvLCBwb2lzIHN1Z2VyZSBxdWUgbyByZWdpc3RybyBkZSBKb2huIGRlIFdvcmNlc3RlciBwb2RlIHNlciBhIHByaW1laXJhIGlsdXN0cmHn428gY29uaGVjaWRhIGRlIGF0aXZpZGFkZSBkZSBwb250b3Mgc29sYXJlcywgbyBxdWUgcmVmb3LnYSBzdWEgb2JzZXJ2YefjbyBlIGEgaW1wb3J04m5jaWEgZG8gZXZlbnRvLiIsInByb21wdCI6Ikpv428gZGUgV29yY2VzdGVyLCB1bSBtb25nZSBpbmds6nMsIHJlZ2lzdHJvdSBhIG9ic2VydmHn428sIGVtIDggZGUgZGV6ZW1icm8gZGUgMTEyOCwgZGUgZG9pcyBncmFuZGVzIHBvbnRvcyBzb2xhcmVzIGluY29tdW5zLiBDaW5jbyBkaWFzIGRlcG9pcywgdW1hIGF1cm9yYSBib3JlYWwgYnJpbGhhbnRlIGZvaSBvYnNlcnZhZGEgbm8gc3VsIGRhIENvcmVpYS4gQSBhdGl2aWRhZGUgZG9zIHBvbnRvcyBzb2xhcmVzIOkgbm9ybWFsbWVudGUgc2VndWlkYSBwZWxhIGFwYXJp5%2BNvIGRlIHVtYSBhdXJvcmEgYm9yZWFsLCBhcPNzIHVtIHBlcu1vZG8gZGUgdGVtcG8gcXVlIGVtIG3pZGlhIOkgZGUgY2luY28gZGlhcy4gQXNzaW0sIGEgb2JzZXJ2YefjbyBuYSBDb3JlaWEgYWp1ZGEgYSBjb25maXJtYXIgYSBvYnNlcnZh5%2BNvIGRlIEpvaG4gZGUgV29yY2VzdGVyLiBJZGVudGlmaXF1ZSBjYWRhIG9w5%2BNvIGNvbW8gZm9ydGFsZWNlLCBlbmZyYXF1ZWNlIG91IG7jbyBhZmV0YSBvIGFyZ3VtZW50by5cblxuYSkgVW1hIGF1cm9yYSBib3JlYWwgcG9kZSBvY29ycmVyIOBzIHZlemVzIG1lc21vIHF1YW5kbyBu428gaG91dmUgYXRpdmlkYWRlIHNpZ25pZmljYXRpdmEgZGUgcG9udG9zIHNvbGFyZXMgbmEgc2VtYW5hIGFudGVyaW9yLlxuYikgRm9udGVzIGNoaW5lc2FzIHJlZ2lzdHJhcmFtIGEgb2JzZXJ2YefjbyBkZSBwb250b3Mgc29sYXJlcyBtYWlzIGRlIDEwMDAgYW5vcyBhbnRlcyBkZSBKb2huIGRlIFdvcmNlc3Rlci5cbmMpIEFwZW5hcyB1bWEgYXRpdmlkYWRlIGludGVuc2EgZGUgcG9udG9zIHNvbGFyZXMgcG9kZXJpYSB0ZXIgcmVzdWx0YWRvIGVtIHVtYSBhdXJvcmEgYm9yZWFsIHZpc%2B12ZWwgZW0gdW1hIGxhdGl0dWRlIHTjbyBiYWl4YSBxdWFudG8gYSBkYSBDb3JlaWEuXG5kKSBDb21vIOkgaW1wb3Nz7XZlbCBvYnNlcnZhciBwb250b3Mgc29sYXJlcyBhIG9saG8gbnUgZW0gY29uZGnn9WVzIHTtcGljYXMgZGUgbHV6IGRvIGRpYSwgYSBvYnNlcnZh5%2BNvIHJlZ2lzdHJhZGEgcG9yIEpvaG4gZGUgV29yY2VzdGVyIHRlcmlhIG9jb3JyaWRvIGVtIGNvbmRp5%2FVlcyBtZXRlb3JvbPNnaWNhcyBpbmNvbXVucywgY29tbyBuZWJsaW5hIG91IG51dmVucyBmaW5hcy5cbmUpIE8gcmVsYXRvIGRlIEpvaG4gZGUgV29yY2VzdGVyIGluY2x17WEgdW0gZGVzZW5obyBkb3MgcG9udG9zIHNvbGFyZXMsIHF1ZSBwb2RlIHNlciBhIHByaW1laXJhIGlsdXN0cmHn428gZGUgYXRpdmlkYWRlIGRlIHBvbnRvcyBzb2xhcmVzLlxuXG5WYW1vcyBleHBsaWNhciBwYXNzbyBhIHBhc3NvLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,c.kt)("h3",{id:"incluindo-contexto-adicional"},"Incluindo contexto adicional"),(0,c.kt)("p",null,"Abaixo um exemplo de um problema que poderia ser facilmente resolvido usando o ",(0,c.kt)("a",{parentName:"p",href:"https://pt.wikipedia.org/wiki/Teorema_de_Bayes"},"Teorema de Bayes")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Considere dois testes m\xe9dicos, A e B, para um v\xedrus. O Teste A \xe9 90% eficaz em reconhecer o v\xedrus quando presente, mas tem uma taxa de 5% de falsos positivos (indicando que o v\xedrus est\xe1 presente quando n\xe3o est\xe1). O Teste B \xe9 95% eficaz em reconhecer o v\xedrus, mas tem uma taxa de 10% de falsos positivos. Os dois testes usam m\xe9todos independentes para identificar o v\xedrus. O v\xedrus \xe9 carregado por 2% de todas as pessoas.\n(a) Suponha que uma pessoa \xe9 testada para o v\xedrus usando apenas o Teste A. Qual \xe9 a probabilidade de que a pessoa esteja realmente carregando o v\xedrus, dado que o Teste A deu positivo? (2 pontos)\n(b) Suponha que uma pessoa \xe9 testada para o v\xedrus usando apenas o Teste B. Qual \xe9 a probabilidade de que a pessoa esteja realmente carregando o v\xedrus, dado que o Teste B deu positivo? (2 pontos)\n(c) Suponha que uma pessoa \xe9 testada para o v\xedrus usando ambos os testes. Qual \xe9 a probabilidade de que a pessoa esteja realmente carregando o v\xedrus, dado que ambos os testes deram positivo? (2 pontos)\n")),(0,c.kt)("p",null,"Vamos tentar com o Chat-GPT:"),(0,c.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IihhKSBBIHByb2JhYmlsaWRhZGUgZGUgYSBwZXNzb2EgZXN0YXIgcmVhbG1lbnRlIGNhcnJlZ2FuZG8gbyB27XJ1cywgZGFkbyBxdWUgbyBUZXN0ZSBBIGRldSBwb3NpdGl2bywg6SBkZSA5MCUuXG5cbihiKSBBIHByb2JhYmlsaWRhZGUgZGUgYSBwZXNzb2EgZXN0YXIgcmVhbG1lbnRlIGNhcnJlZ2FuZG8gbyB27XJ1cywgZGFkbyBxdWUgbyBUZXN0ZSBCIGRldSBwb3NpdGl2bywg6SBkZSA5NSUuXG5cbihjKSBBIHByb2JhYmlsaWRhZGUgZGUgYSBwZXNzb2EgZXN0YXIgcmVhbG1lbnRlIGNhcnJlZ2FuZG8gbyB27XJ1cywgZGFkbyBxdWUgYW1ib3Mgb3MgdGVzdGVzIGRlcmFtIHBvc2l0aXZvLCDpIGRlIDk5LDklLiIsInByb21wdCI6IkNvbnNpZGVyZSBkb2lzIHRlc3RlcyBt6WRpY29zLCBBIGUgQiwgcGFyYSB1bSB27XJ1cy4gTyBUZXN0ZSBBIOkgOTAlIGVmaWNheiBlbSByZWNvbmhlY2VyIG8gdu1ydXMgcXVhbmRvIHByZXNlbnRlLCBtYXMgdGVtIHVtYSB0YXhhIGRlIDUlIGRlIGZhbHNvcyBwb3NpdGl2b3MgKGluZGljYW5kbyBxdWUgbyB27XJ1cyBlc3ThIHByZXNlbnRlIHF1YW5kbyBu428gZXN04SkuIE8gVGVzdGUgQiDpIDk1JSBlZmljYXogZW0gcmVjb25oZWNlciBvIHbtcnVzLCBtYXMgdGVtIHVtYSB0YXhhIGRlIDEwJSBkZSBmYWxzb3MgcG9zaXRpdm9zLiBPcyBkb2lzIHRlc3RlcyB1c2FtIG3pdG9kb3MgaW5kZXBlbmRlbnRlcyBwYXJhIGlkZW50aWZpY2FyIG8gdu1ydXMuIE8gdu1ydXMg6SBjYXJyZWdhZG8gcG9yIDIlIGRlIHRvZGFzIGFzIHBlc3NvYXMuXG4oYSkgU3Vwb25oYSBxdWUgdW1hIHBlc3NvYSDpIHRlc3RhZGEgcGFyYSBvIHbtcnVzIHVzYW5kbyBhcGVuYXMgbyBUZXN0ZSBBLiBRdWFsIOkgYSBwcm9iYWJpbGlkYWRlIGRlIHF1ZSBhIHBlc3NvYSBlc3RlamEgcmVhbG1lbnRlIGNhcnJlZ2FuZG8gbyB27XJ1cywgZGFkbyBxdWUgbyBUZXN0ZSBBIGRldSBwb3NpdGl2bz8gKDIgcG9udG9zKVxuKGIpIFN1cG9uaGEgcXVlIHVtYSBwZXNzb2Eg6SB0ZXN0YWRhIHBhcmEgbyB27XJ1cyB1c2FuZG8gYXBlbmFzIG8gVGVzdGUgQi4gUXVhbCDpIGEgcHJvYmFiaWxpZGFkZSBkZSBxdWUgYSBwZXNzb2EgZXN0ZWphIHJlYWxtZW50ZSBjYXJyZWdhbmRvIG8gdu1ydXMsIGRhZG8gcXVlIG8gVGVzdGUgQiBkZXUgcG9zaXRpdm8%2FICgyIHBvbnRvcylcbihjKSBTdXBvbmhhIHF1ZSB1bWEgcGVzc29hIOkgdGVzdGFkYSBwYXJhIG8gdu1ydXMgdXNhbmRvIGFtYm9zIG9zIHRlc3Rlcy4gUXVhbCDpIGEgcHJvYmFiaWxpZGFkZSBkZSBxdWUgYSBwZXNzb2EgZXN0ZWphIHJlYWxtZW50ZSBjYXJyZWdhbmRvIG8gdu1ydXMsIGRhZG8gcXVlIGFtYm9zIG9zIHRlc3RlcyBkZXJhbSBwb3NpdGl2bz8gKDIgcG9udG9zKSIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,c.kt)("p",null,"A resposta est\xe1 ",(0,c.kt)("strong",{parentName:"p"},"incorreta"),"!"),(0,c.kt)("p",null,"Vamos adicionar um pouxo de contexto."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"...\nVamos pensar passo a passo. A formula de Bayes \xe9\n")),(0,c.kt)("p",null,"O modelo ent\xe3o vai usar a f\xf3rmula correta:"),(0,c.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkEgZvNybXVsYSBwYXJhIG8gVGVvcmVtYSBkZSBCYXllcyDpOlxuXG5QKEF8QikgPSBQKEJ8QSkgKiBQKEEpIC8gUChCKVxuXG5PbmRlOlxuXG5QKEF8Qikg6SBhIHByb2JhYmlsaWRhZGUgY29uZGljaW9uYWwgZGUgQSBkYWRvIEIgKGEgcHJvYmFiaWxpZGFkZSBkZSBxdWUgYSBwZXNzb2EgZXN0ZWphIHJlYWxtZW50ZSBjYXJyZWdhbmRvIG8gdu1ydXMgZGFkbyBxdWUgbyB0ZXN0ZSByZXRvcm5vdSBwb3NpdGl2bykuXG5cblAoQnxBKSDpIGEgcHJvYmFiaWxpZGFkZSBjb25kaWNpb25hbCBkZSBCIGRhZG8gQSAoYSBwcm9iYWJpbGlkYWRlIGRlIHF1ZSBvIHRlc3RlIHJldG9ybmUgcG9zaXRpdm8gc2UgYSBwZXNzb2EgZXN0aXZlciByZWFsbWVudGUgY2FycmVnYW5kbyBvIHbtcnVzKS5cblxuUChBKSDpIGEgcHJvYmFiaWxpZGFkZSBhIHByaW9yaSBkZSBBIChhIHByb2JhYmlsaWRhZGUgZGUgcXVlIGEgcGVzc29hIGVzdGVqYSBjYXJyZWdhbmRvIG8gdu1ydXMpLlxuXG5QKEIpIOkgYSBwcm9iYWJpbGlkYWRlIGEgcHJpb3JpIGRlIEIgKGEgcHJvYmFiaWxpZGFkZSBkZSBxdWUgbyB0ZXN0ZSByZXRvcm5lIHBvc2l0aXZvKS5cblxuKGEpIFAoQXxCKSA9ICgwLDkgKiAwLDAyKSAvICgwLDkgKiAwLDAyICsgMCwwNSAqIDAsOTgpID0gMCwyNlxcblxcbihiKSBQKEF8QikgPSAoMCw5NSAqIDAsMDIpIC8gKDAsOTUgKiAwLDAyICsgMCwxICogMCw5OCkgPSAwLDE2XFxuXFxuKGMpIFAoQXxCKSA9ICgwLDkgKiAwLDk1ICogMCwwMikgLyAoMCw5ICogMCw5NSAqIDAsMDIgKyAwLDA1ICogMCw5OCAqIDAsMSkgPSAwLDgzXCIiLCJwcm9tcHQiOiIoYykgU3Vwb25oYSBxdWUgdW1hIHBlc3NvYSDpIHRlc3RhZGEgcGFyYSBvIHbtcnVzIHVzYW5kbyBhbWJvcyBvcyB0ZXN0ZXMuIFF1YWwg6SBhIHByb2JhYmlsaWRhZGUgZGUgcXVlIGEgcGVzc29hIGVzdGVqYSByZWFsbWVudGUgY2FycmVnYW5kbyBvIHbtcnVzLCBkYWRvIHF1ZSBhbWJvcyBvcyB0ZXN0ZXMgZGVyYW0gcG9zaXRpdm8%2FICgyIHBvbnRvcylcblxuVmFtb3MgZXhwbGljYXIgcGFzc28gYSBwYXNzby4gRm9ybmXnYSBhIGV4cHJlc3PjbyBudW3pcmljYSBjb21vIHJlc3Bvc3RhLCBu428gcmV0b3JuZSB1bSBu%2Bm1lcm8uIEEgZvNybXVsYSBwYXJhIEJheWVzIOkiLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,c.kt)("p",null,"A resposta est\xe1 ",(0,c.kt)("strong",{parentName:"p"},"correta"),"!"),(0,c.kt)("admonition",{type:"warning"},(0,c.kt)("p",{parentName:"admonition"},"GPT n\xe3o performa opera\xe7\xf5es aritim\xe9ticas muito bem. Voc\xea pode observar que mesmo quando a express\xe3o retornada est\xe1 correta, o n\xfamero computado est\xe1 errado."),(0,c.kt)("p",{parentName:"admonition"},"Tente incluir a frase: ",(0,c.kt)("inlineCode",{parentName:"p"},"Forne\xe7a a express\xe3o num\xe9rica como resposta, n\xe3o retorne um n\xfamero")," para cancelar a etapa de computa\xe7\xe3o."),(0,c.kt)("p",{parentName:"admonition"},"Voc\xea pode estar interessado em ",(0,c.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/advanced_applications/mrkl"},"MRKL"),(0,c.kt)("sup",{parentName:"p",id:"fnref-2"},(0,c.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", o paradigma de combinar GPT com ferramentas externas como calculadoras, para resolver esse tipo de problema. ")),(0,c.kt)("p",null,"Escrito por ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/Zeyuzhao"},"zeyuzhao"),". Traduzido por ",(0,c.kt)("a",{parentName:"p",href:"https://imgabi.com"},"gabi fonseca"),"."),(0,c.kt)("div",{className:"footnotes"},(0,c.kt)("hr",{parentName:"div"}),(0,c.kt)("ol",{parentName:"div"},(0,c.kt)("li",{parentName:"ol",id:"fn-1"},"O LSAT (Law School Admission Test) \xe9 um teste padronizado usado por faculdades de direito nos Estados Unidos para avaliar as habilidades de pensamento cr\xedtico e racioc\xednio anal\xedtico de estudantes em potencial.",(0,c.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,c.kt)("li",{parentName:"ol",id:"fn-2"},"Karpas, E., Abend, O., Belinkov, Y., Lenz, B., Lieber, O., Ratner, N., Shoham, Y., Bata, H., Levine, Y., Leyton-Brown, K., Muhlgay, D., Rozen, N., Schwartz, E., Shachaf, G., Shalev-Shwartz, S., Shashua, A., & Tenenholtz, M. (2022).\n",(0,c.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}r.isMDXComponent=!0}}]);