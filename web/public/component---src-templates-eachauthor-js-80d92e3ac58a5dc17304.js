"use strict";(self.webpackChunkspacehub=self.webpackChunkspacehub||[]).push([[226],{8128:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(9).default.div.withConfig({displayName:"PageSpaceStyles",componentId:"sc-sdyjz8-0"})(["padding-top:","px;padding-bottom:","px;"],(function(e){return e.top||100}),(function(e){return e.bottom||100}));var i=function(e){var t=e.children,a=e.top,i=e.bottom;return r.createElement(n,{top:a,bottom:i},t)}},8753:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),n=a(9),i=n.default.div.withConfig({displayName:"BlogGridStyles",componentId:"sc-celut3-0"})(["margin-top:3.5rem;display:grid;gap:5rem;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));@media only screen and (max-width:768px){grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:3rem;}"]),l=a(5444),m=a(6125),o=a(4807),c=n.default.div.withConfig({displayName:"BlogItemStyles",componentId:"sc-giqhg0-0"})(["display:inline-block;border-radius:12px;.img{height:250px;margin-bottom:1.5rem;border-radius:12px;transition:0.3s ease-in-out transform;}.title{margin-bottom:0.5rem;}.publishedAt{margin-bottom:0.3rem;}&:hover{.img{transform:scale(1.05);}}.categoriesText{a{color:var(--gray);&:hover{text-decoration:underline;}}}@media only screen and (max-width:768px){.title{margin-bottom:0.5rem;}}"]),s=a(943),u=a(3078);var g=function(e){var t=e.path,a=e.title,n=e.image,i=e.categories,g=e.publishedAt;return r.createElement(c,null,r.createElement(l.rU,{to:"/blogs/"+t},r.createElement(m.G,{image:n.imageData,alt:n.altText,className:"img"})),r.createElement(l.rU,{to:"/blogs/"+t},r.createElement(u.D,{className:"title"},a)),g&&r.createElement(s.Z,{className:"publishedAt"},(0,o.Z)(new Date(g),"p, MMMM dd, yyyy")),r.createElement(s.Z,{className:"categoriesText"},i.map((function(e,t){return r.createElement("span",{key:e.slug.current},r.createElement(l.rU,{to:"/categories/"+e.slug.current},e.title),t<i.length-1?", ":"")}))))};var d=function(e){var t=e.blogs;return r.createElement(i,null,t&&t.map((function(e){return r.createElement(g,{key:e.id,path:e.slug.current,title:e.title,categories:e.categories,image:{imageData:e.coverImage.asset.gatsbyImageData,altText:e.coverImage.alt},publishedAt:e.publishedAt})})))}},1850:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=a(6125),n=a(7294),i=a(8753),l=a(8503),m=a(8128),o=a(3751),c=a(3078),s=a(9).default.div.withConfig({displayName:"SingleAuthorStyles",componentId:"sc-1k0ttk1-0"})([".author-header{text-align:center;}.profileImage{height:150px;width:150px;margin:0 auto;border-radius:50%;margin-bottom:2rem;}.name{margin-bottom:1rem;}.bio{margin:0 auto;max-width:500px;}.hr{margin:3rem 0;color:var(--gray);}"]);var u=function(e){var t=e.data,a=t.sanityAuthor,u=t.allSanityBlog.nodes;return n.createElement(m.Z,{top:80,bottom:100},n.createElement(o.Z,{title:a.name}),n.createElement("div",{className:"container"},n.createElement(s,null,n.createElement("div",{className:"author-header"},n.createElement(r.G,{image:a.profileImage.asset.gatsbyImageData,alt:a.profileImage.alt,className:"profileImage"}),n.createElement(c.D,{className:"name"},a.name),n.createElement("div",{className:"bio"},n.createElement(l.Z,{value:a._rawBio}))),n.createElement("hr",{className:"hr"}),n.createElement(i.Z,{blogs:u}))))}}}]);
//# sourceMappingURL=component---src-templates-eachauthor-js-80d92e3ac58a5dc17304.js.map