"use strict";(self.webpackChunkspacehub=self.webpackChunkspacehub||[]).push([[536],{7474:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294);const a=n(9).default.div.withConfig({displayName:"PageHeaderStyles",componentId:"sc-12s58au-0"})(["margin:3rem 0;max-width:400px;"]);var i=n(5296),o=n(5215);var l=function(e){let{title:t,description:n,children:l,className:c}=e;return r.createElement("div",{className:c},r.createElement(a,null,r.createElement(o.N,null,t),r.createElement(i.Z,null,n),l))}},8109:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294);const a=n(9).default.div.withConfig({displayName:"PageSpaceStyles",componentId:"sc-sdyjz8-0"})(["padding-top:","px;padding-bottom:","px;"],(e=>e.top||100),(e=>e.bottom||100));var i=function(e){let{children:t,top:n,bottom:i}=e;return r.createElement(a,{top:n,bottom:i},t)}},4656:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7294),a=n(1082),i=n(5505),o=n(3750);const l=n(9).default.div.withConfig({displayName:"PaginationStyles",componentId:"sc-1yhjubp-0"})(["text-align:center;margin-top:5rem;.icons{display:flex;align-items:center;justify-content:center;gap:1rem;margin-bottom:1rem;a{display:flex;align-items:center;justify-content:center;font-size:1.6rem;background:var(--gray);padding:0.8rem;border-radius:4px;svg{padding:0;margin:0;}&.disabled{opacity:0.2;pointer-events:none;}}}"]);var c=n(5296);var m=function(e){let{baseURL:t,numberOfPages:n,currentPage:m}=e;const s=m-1<=1?"":(m-1).toString(),d=(m+1).toString();return r.createElement("div",{className:"container"},r.createElement(l,null,r.createElement("div",{className:"icons"},r.createElement(a.rU,{to:t+"/"+s,className:(0,i.Z)(m<=1&&"disabled")},r.createElement(o.YFh,null)," Prev"),r.createElement(a.rU,{to:t+"/"+d,className:(0,i.Z)(m>=n&&"disabled")},"Next ",r.createElement(o.Tfp,null))),r.createElement(c.Z,null,"page ",m," of ",n," pages")))}},6909:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(9804),i=n(1082);const o=(0,n(9).default)(i.rU).withConfig({displayName:"ButtonStyles",componentId:"sc-1eldgk6-0"})(["display:inline-block;cursor:pointer;outline:none;border:none;padding:1rem 2rem;border-radius:4px;font-size:1.6rem;background:",";border:",";color:",";@media only screen and (max-width:768px){padding:0.8rem 1.2rem;font-size:1.4rem;}"],(e=>{let{variant:t}=e;return t===a.r.primary?"linear-gradient(135deg, var(--secondary), var(--primary))":t===a.r.secondary?"var(--white-1)":"transparent"}),(e=>{let{variant:t}=e;return t===a.r.outline?"2px solid var(--primary)":"none"}),(e=>{let{variant:t}=e;return t===a.r.secondary?"var(--black-1)":"var(--white)"}));var l=function(e){let{children:t,tag:n,variant:i=a.r.primary,...l}=e;return r.createElement(o,Object.assign({as:n},l,{variant:i}),t)}},9876:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(9);const i=a.default.div.withConfig({displayName:"CategoryGridStyles",componentId:"sc-588vo5-0"})(["display:grid;margin-top:3.5rem;display:grid;gap:5rem;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));@media only screen and (max-width:768px){grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:2rem;}"]),o=a.default.div.withConfig({displayName:"CategoryItemStyles",componentId:"sc-1840ory-0"})(["background:var(--black-1);padding:2rem;border-radius:12px;.title{margin-bottom:1rem;}.text{margin-bottom:2rem;}"]);var l=n(6909),c=n(5215),m=n(1987),s=n(9804);var d=function(e){let{title:t,description:n,slug:a}=e;return r.createElement(o,null,r.createElement(c.D,{className:"title"},t),r.createElement("div",{className:"text"},r.createElement(m.Z,{value:n})),r.createElement(l.Z,{to:"/categories/"+a.current,variant:s.r.outline},"Explore Category"))};var u=function(e){let{category:t}=e;return r.createElement(i,null,t.map((e=>r.createElement(d,{key:e.id,title:e.title,description:e._rawDescription,slug:e.slug}))))}},9804:function(e,t,n){n.d(t,{r:function(){return r}});const r={primary:"primary",secondary:"secondary",outline:"outline"}},1323:function(e,t,n){n.r(t);var r=n(7294),a=n(8109),i=n(262),o=n(7474),l=n(9876),c=n(4656);t.default=function(e){let{data:t,pageContext:n}=e;const{currentPage:m,numberOfPages:s}=n,d=t.allSanityCategory.nodes;return r.createElement(r.Fragment,null,r.createElement(i.Z,{title:"Categories"}),r.createElement(a.Z,{top:80,bottom:100},r.createElement("div",{className:"container"},r.createElement(o.Z,{title:"All Categories"}),r.createElement(l.Z,{category:d}),s>1&&r.createElement(c.Z,{currentPage:m,numberOfPages:s,baseURL:"/categories"}))))}}}]);
//# sourceMappingURL=component---src-templates-category-list-js-15d9fa94b233bc8a6bf5.js.map