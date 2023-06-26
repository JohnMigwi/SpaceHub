"use strict";(self.webpackChunkspacehub=self.webpackChunkspacehub||[]).push([[678],{8753:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(7294),n=a(9),i=n.default.div.withConfig({displayName:"BlogGridStyles",componentId:"sc-celut3-0"})(["margin-top:3.5rem;display:grid;gap:5rem;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));@media only screen and (max-width:768px){grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:3rem;}"]),A=a(5444),l=a(6125),o=a(4807),c=n.default.div.withConfig({displayName:"BlogItemStyles",componentId:"sc-giqhg0-0"})(["display:inline-block;border-radius:12px;.img{height:250px;margin-bottom:1.5rem;border-radius:12px;transition:0.3s ease-in-out transform;}.title{margin-bottom:0.5rem;}.publishedAt{margin-bottom:0.3rem;}&:hover{.img{transform:scale(1.05);}}.categoriesText{a{color:var(--gray);&:hover{text-decoration:underline;}}}@media only screen and (max-width:768px){.title{margin-bottom:0.5rem;}}"]),m=a(943),s=a(3078);var d=function(e){var t=e.path,a=e.title,n=e.image,i=e.categories,d=e.publishedAt;return r.createElement(c,null,r.createElement(A.rU,{to:"/blogs/"+t},r.createElement(l.G,{image:n.imageData,alt:n.altText,className:"img"})),r.createElement(A.rU,{to:"/blogs/"+t},r.createElement(s.D,{className:"title"},a)),d&&r.createElement(m.Z,{className:"publishedAt"},(0,o.Z)(new Date(d),"p, MMMM dd, yyyy")),r.createElement(m.Z,{className:"categoriesText"},i.map((function(e,t){return r.createElement("span",{key:e.slug.current},r.createElement(A.rU,{to:"/categories/"+e.slug.current},e.title),t<i.length-1?", ":"")}))))};var g=function(e){var t=e.blogs;return r.createElement(i,null,t&&t.map((function(e){return r.createElement(d,{key:e.id,path:e.slug.current,title:e.title,categories:e.categories,image:{imageData:e.coverImage.asset.gatsbyImageData,altText:e.coverImage.alt},publishedAt:e.publishedAt})})))}},7910:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(3366),n=a(7294),i=a(6308),A=a(5444),l=(0,a(9).default)(A.rU).withConfig({displayName:"ButtonStyles",componentId:"sc-1eldgk6-0"})(["display:inline-block;cursor:pointer;outline:none;border:none;padding:1rem 2rem;border-radius:4px;font-size:1.6rem;background:",";border:",";color:",";@media only screen and (max-width:768px){padding:0.8rem 1.2rem;font-size:1.4rem;}"],(function(e){var t=e.variant;return t===i.r.primary?"linear-gradient(135deg, var(--secondary), var(--primary))":t===i.r.secondary?"var(--white-1)":"transparent"}),(function(e){return e.variant===i.r.outline?"2px solid var(--primary)":"none"}),(function(e){return e.variant===i.r.secondary?"var(--black-1)":"var(--white)"})),o=["children","tag","variant"];var c=function(e){var t=e.children,a=e.tag,A=e.variant,c=void 0===A?i.r.primary:A,m=(0,r.Z)(e,o);return n.createElement(l,Object.assign({as:a},m,{variant:c}),t)}},262:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),n=a(9),i=n.default.div.withConfig({displayName:"CategoryGridStyles",componentId:"sc-588vo5-0"})(["display:grid;margin-top:3.5rem;display:grid;gap:5rem;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));@media only screen and (max-width:768px){grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:2rem;}"]),A=n.default.div.withConfig({displayName:"CategoryItemStyles",componentId:"sc-1840ory-0"})(["background:var(--black-1);padding:2rem;border-radius:12px;.title{margin-bottom:1rem;}.text{margin-bottom:2rem;}"]),l=a(7910),o=a(3078),c=a(8503),m=a(6308);var s=function(e){var t=e.title,a=e.description,n=e.slug;return r.createElement(A,null,r.createElement(o.D,{className:"title"},t),r.createElement("div",{className:"text"},r.createElement(c.Z,{value:a})),r.createElement(l.Z,{to:"/categories/"+n.current,variant:m.r.outline},"Explore Category"))};var d=function(e){var t=e.category;return r.createElement(i,null,t.map((function(e){return r.createElement(s,{key:e.id,title:e.title,description:e._rawDescription,slug:e.slug})})))}},6308:function(e,t,a){a.d(t,{r:function(){return r}});var r={primary:"primary",secondary:"secondary",outline:"outline"}},3577:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var r=a(7294),n=a(5444),i=a(6125),A=a(9),l=A.default.div.withConfig({displayName:"HeroSectionStyles",componentId:"sc-1rflem6-0"})(["min-height:80vh;display:flex;align-items:center;justify-content:center;position:relative;.container{height:100%;}.hero__wrapper{width:100%;height:100%;&::after{content:'';position:absolute;top:0;left:0;width:50%;height:100%;background:linear-gradient(135deg,#030213,#08011c);z-index:-1;}.left{width:50%;padding:50px 0;.hero__heading{max-width:450px;font-size:4rem;font-family:'Poppins',sans-serif;font-weight:'700';margin:0.2rem 0;}.hero__text{max-width:350px;}.hero__button{margin-top:1.5rem;}}.right{position:absolute;right:0;top:0;width:50%;height:100%;.hero__image{width:100%;height:100%;}}}@media only screen and (max-width:768px){.hero__wrapper{height:100%;display:flex;align-items:flex-start;justify-content:center;flex-direction:column-reverse;padding-top:80px;padding-bottom:80px;&::after{width:100%;}.right{position:initial;display:flex;align-items:center;justify-content:center;width:100%;.hero__image{height:300px;margin:0 auto;}}.left{width:100%;margin-top:1rem;padding:0;.hero__heading{max-width:330px;font-size:3rem;}}}}"]),o=a(943),c=a(7910);var m=function(){return r.createElement(l,null,r.createElement("div",{className:"container"},r.createElement("div",{className:"hero__wrapper"},r.createElement("div",{className:"left"},r.createElement("h1",{className:"hero__heading"},"Explore Space World"),r.createElement(o.Z,{className:"hero__text"},"Get Some Coffee !"),r.createElement(c.Z,{to:"/blogs",tag:n.rU,className:"hero__button"},"All Blogs")),r.createElement("div",{className:"right"},r.createElement(i.S,{className:"hero__image",src:"../../images/vr-guy.jpg",alt:"vr guy",placeholder:"blurred",objectPosition:"50% 30%",__imageData:a(1015)})))))},s=a(3751),d=A.default.div.withConfig({displayName:"FeaturedBlogsStyles",componentId:"sc-jhpuyt-0"})(["padding:5rem 0;.featuredBlogs__text{max-width:450px;}"]),g=a(3078),u=a(8753);var p=function(){var e=(0,n.K2)("3585505477").allSanityFeatured.nodes[0].blogs;return r.createElement(d,null,r.createElement(g.N,null,"FeaturedBlogs"),r.createElement(o.Z,{className:"featuredBlogs__text"},"as opposed to using 'Content here, content here', making it look like readable"),r.createElement(u.Z,{blogs:e}))},f=A.default.div.withConfig({displayName:"TopCategoriesStyles",componentId:"sc-lqmtmu-0"})(["padding:5rem 0;.info{max-width:400px;}"]),h=a(262);var E=function(){var e=(0,n.K2)("1082062562").allSanityFeatured.nodes[0].categories;return r.createElement(f,null,r.createElement(g.N,null,"Top Categories"),r.createElement(o.Z,{className:"info"},"All about Top categories"),r.createElement(h.Z,{category:e}))},b=function(){return r.createElement(r.Fragment,null,r.createElement(s.Z,null),r.createElement(m,null),r.createElement("div",{className:"container"},r.createElement(p,null),r.createElement(E,null)))}},1015:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAXAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAHkrqXdoygmqNr0M0QEf//EABsQAAIDAAMAAAAAAAAAAAAAAAABAgMREiAh/9oACAEBAAEFAt8tezJcCDwk02aO2T6f/8QAFhEAAwAAAAAAAAAAAAAAAAAAEiBh/9oACAEDAQE/AQqf/8QAGBEBAQADAAAAAAAAAAAAAAAAAAERElH/2gAIAQIBAT8BvGEbV//EABsQAAEEAwAAAAAAAAAAAAAAAAEAESAhAhAS/9oACAEBAAY/AgDbQfhXg27h/8QAGxABAQADAQEBAAAAAAAAAAAAAREAEDFRIWH/2gAIAQEAAT8huN4ZWe6cJPuDYu8xTFeDMq9wdrcTqF/TRx1//9oADAMBAAIAAwAAABBD/o7/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEh/9oACAEDAQE/EM8QSW4csL//xAAZEQEBAAMBAAAAAAAAAAAAAAABABEhYXH/2gAIAQIBAT8Qedr1JW6X/8QAHhABAAICAgMBAAAAAAAAAAAAAREhADEQYUFRoXH/2gAIAQEAAT8QnFhbbCdfmI+7RM1184c+mkss8SZd0ASs+4xaQo+MWKpn3l4UJrKj0EitEHjrgr1nH//Z"},"images":{"fallback":{"src":"/static/24b5381f82b4825922252f6eb564f10d/8311f/vr-guy.jpg","srcSet":"/static/24b5381f82b4825922252f6eb564f10d/a2c5c/vr-guy.jpg 478w,\\n/static/24b5381f82b4825922252f6eb564f10d/9b8f2/vr-guy.jpg 956w,\\n/static/24b5381f82b4825922252f6eb564f10d/8311f/vr-guy.jpg 1912w","sizes":"(min-width: 1912px) 1912px, 100vw"},"sources":[{"srcSet":"/static/24b5381f82b4825922252f6eb564f10d/7e8db/vr-guy.webp 478w,\\n/static/24b5381f82b4825922252f6eb564f10d/302fe/vr-guy.webp 956w,\\n/static/24b5381f82b4825922252f6eb564f10d/a6849/vr-guy.webp 1912w","type":"image/webp","sizes":"(min-width: 1912px) 1912px, 100vw"}]},"width":1912,"height":2868}')}}]);
//# sourceMappingURL=component---src-pages-index-js-9c0ed7235bf9608f87ca.js.map