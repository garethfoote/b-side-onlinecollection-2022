(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(5108)}])},26:function(a,b){"use strict";b.Z={src:"/_next/static/media/belinda.175ff838.jpg",height:936,width:750,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAP/2gAMAwEAAhADEAAAAJaF/wD/xAAbEAACAgMBAAAAAAAAAAAAAAABAhESAAQTYf/aAAgBAQABPwBErr3SC/QgjyM//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAIBIXH/2gAIAQIBAT8AV5vT/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAAxEi/9oACAEDAQE/ALalDDNHIn//2Q=="}},1210:function(a,b){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(b,"__esModule",{value:!0}),b.getDomainLocale=c,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},8418:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(4941).Z;c(5753).default,Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var e=c(2648).Z,f=c(7273).Z,g=e(c(7294)),h=c(6273),i=c(2725),j=c(3462),k=c(1018),l=c(7190),m=c(1210),n=c(8684),o=void 0!==g.default.useTransition,p={};function q(a,b,c,d){if(a&&h.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;p[b+"%"+c+(e?"%"+e:"")]=!0}}var r=g.default.forwardRef(function(a,b){var c,e,r=a.href,s=a.as,t=a.children,u=a.prefetch,v=a.passHref,w=a.replace,x=a.soft,y=a.shallow,z=a.scroll,A=a.locale,B=a.onClick,C=a.onMouseEnter,D=a.onTouchStart,E=a.legacyBehavior,F=void 0===E?!0!==Boolean(!1):E,G=f(a,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);c=t,F&&("string"==typeof c||"number"==typeof c)&&(c=g.default.createElement("a",null,c));var H=!1!==u,I=d(o?g.default.useTransition():[],2),J=I[1],K=g.default.useContext(j.RouterContext),L=g.default.useContext(k.AppRouterContext);L&&(K=L);var M=g.default.useMemo(function(){var a=d(h.resolveHref(K,r,!0),2),b=a[0],c=a[1];return{href:b,as:s?h.resolveHref(K,s):c||b}},[K,r,s]),N=M.href,O=M.as,P=g.default.useRef(N),Q=g.default.useRef(O);F&&(e=g.default.Children.only(c));var R=F?e&&"object"==typeof e&&e.ref:b,S=d(l.useIntersection({rootMargin:"200px"}),3),T=S[0],U=S[1],V=S[2],W=g.default.useCallback(function(a){(Q.current!==O||P.current!==N)&&(V(),Q.current=O,P.current=N),T(a),R&&("function"==typeof R?R(a):"object"==typeof R&&(R.current=a))},[O,R,N,V,T]);g.default.useEffect(function(){var a=U&&H&&h.isLocalURL(N),b=void 0!==A?A:K&&K.locale,c=p[N+"%"+O+(b?"%"+b:"")];a&&!c&&q(K,N,O,{locale:b})},[O,N,U,A,H,K]);var X={ref:W,onClick:function(a){F||"function"!=typeof B||B(a),F&&e.props&&"function"==typeof e.props.onClick&&e.props.onClick(a),a.defaultPrevented||function(a,b,c,d,e,f,g,i,j,k){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&h.isLocalURL(c)){a.preventDefault();var l,m,n=function(){"softPush"in b&&"softReplace"in b?b[f?e?"softReplace":"softPush":e?"replace":"push"](c):b[e?"replace":"push"](c,d,{shallow:g,locale:j,scroll:i})};k?k(n):n()}}(a,K,N,O,w,x,y,z,A,L?J:void 0)},onMouseEnter:function(a){F||"function"!=typeof C||C(a),F&&e.props&&"function"==typeof e.props.onMouseEnter&&e.props.onMouseEnter(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})},onTouchStart:function(a){F||"function"!=typeof D||D(a),F&&e.props&&"function"==typeof e.props.onTouchStart&&e.props.onTouchStart(a),h.isLocalURL(N)&&q(K,N,O,{priority:!0})}};if(!F||v||"a"===e.type&&!("href"in e.props)){var Y=void 0!==A?A:K&&K.locale,Z=K&&K.isLocaleDomain&&m.getDomainLocale(O,Y,K.locales,K.domainLocales);X.href=Z||n.addBasePath(i.addLocale(O,Y,K&&K.defaultLocale))}return F?g.default.cloneElement(e,X):g.default.createElement("a",Object.assign({},G,X),c)});b.default=r,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},1018:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.GlobalLayoutRouterContext=b.LayoutRouterContext=b.AppRouterContext=void 0;var d=(0,c(2648).Z)(c(7294)),e=d.default.createContext(null);b.AppRouterContext=e;var f=d.default.createContext(null);b.LayoutRouterContext=f;var g=d.default.createContext(null);b.GlobalLayoutRouterContext=g},5108:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return x}});var d=c(5893),e=c(9008),f=c.n(e),g=c(214),h=c.n(g),i=c(4924),j=c(1664),k=c.n(j),l=c(5675),m=c.n(l),n=c(6579),o=c.n(n),p=c(4184),q=c.n(p),r=function(a){var b,c=a.href,e=a.alignment,f=void 0===e?"left":e,g=a.altText,h=a.img,j=a.title,l=a.description,n=a.linkText,p=a.colour;return(0,d.jsxs)("article",{className:q()(o()[p],o().article,o()[f]),children:[(0,d.jsx)("div",{className:o().image,children:(0,d.jsx)(k(),{href:c,children:(0,d.jsx)("a",{children:(0,d.jsx)("figure",{children:(0,d.jsx)(m(),{layout:"fill",objectFit:"cover",src:h.src,alt:g})})})})}),(0,d.jsxs)("div",{className:o().details,children:[(0,d.jsx)("div",{className:q()((b={},(0,i.Z)(b,o().leftShape,"left"===f),(0,i.Z)(b,o().rightShape,"right"===f),b))}),(0,d.jsx)("h1",{children:j}),(0,d.jsx)("p",{children:l}),(0,d.jsx)(k(),{href:c,children:(0,d.jsx)("a",{children:n})})]})]})},s=r,t=c(26),u={src:"/_next/static/media/ioannis.c39af33d.png",height:675,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAfklEQVR42g2M3QqCMBhA93ZeFFixJmEFs1ltNjcV19yPCh9Bj+3gcODcHIRPuOHNrbzyl3hQxqq6FZzRCknZAfyH3qwLfG0IYf0BTNYhysRT2mx3OBf3LCf7I8nxhRQlUqqPYTGjdS4m65R+TnPUys67WashYcZJfrR3sWbvDTCmMtNMnAxNAAAAAElFTkSuQmCC"},v={src:"/_next/static/media/duncan.cb5f61c9.jpg",height:675,width:1200,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAQT/2gAMAwEAAhADEAAAAIID/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQIDBCEAERL/2gAIAQEAAT8AlTnRJX1tTSaLZNEEZ//EABgRAQEAAwAAAAAAAAAAAAAAAAECACFB/9oACAECAQE/AGka33P/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="},w=function(){return(0,d.jsxs)("div",{className:h().container,children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:"b-side: Online Collection"}),(0,d.jsx)("meta",{name:"description",content:"An online programme of sound and image, part of b-side Festival 2022."})]}),(0,d.jsxs)("header",{children:[(0,d.jsxs)("h1",{children:["B-Side: ",(0,d.jsx)("em",{children:"Online Collection"})]}),(0,d.jsx)("p",{children:"Want to see and hear some more or cant make it to the island? Our online programme of sound and image is available until 18th September. Featuring work by festival artists Duncan Whitley, Belinda Zhawi and Ioannis Panagiotou."})]}),(0,d.jsxs)("main",{className:h().main,children:[(0,d.jsx)(s,{href:"south-x-south-east",img:{src:t.Z},altText:"A photograph of the artist looking over her shoulder.",colour:"orange",alignment:"right",title:"South x South East",description:"Belinda Zhawis sound work South X South East explores migration and identities based on geography and features field recordings and contributions by harpist Marysia Osuchowsk and Caleb Azumah Nelson.",linkText:"Listen to South x South East"}),(0,d.jsx)(s,{href:"kimberlin",img:{src:v},altText:"A mossy covered wall.",alignment:"left",colour:"cyan",title:"Kimberlin",description:"Sit back and enjoy the special online premier of Kimberlin a film about the discovery of an underground cinema on Portland, by film and sound artist Duncan Whitley and featuring a commissioned sound-track by composer Abul Mogard.",linkText:"Watch Kimberlin"}),(0,d.jsx)(s,{href:"umwelt-and-the-memory-passage",img:{src:u},altText:"A man holding a box with a head for a tree.",alignment:"right",colour:"lime",title:"Umwelt and The Memory Passage",description:"Ioannis Panagiotou presents Umwelt and The Memory Passage, featuring Plus Minus Ensemble, Red Note Ensemble and the Edinburgh Film Music Orchestra. Pilgrim's Horses, part 3 of this trilogy, has been commissioned for b-side and can be seen at Sweet Hill Farm.",linkText:"Watch Umwelt and The Memory Passage"})]}),(0,d.jsx)("footer",{className:h().fullProgramme,children:(0,d.jsx)("a",{href:"",children:(0,d.jsx)("div",{children:"Full festival programme"})})})]})},x=w},214:function(a){a.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",fullProgramme:"Home_fullProgramme__V2h9H"}},6579:function(a){a.exports={article:"HomePageItem_article__auw50",right:"HomePageItem_right__vyP9N",image:"HomePageItem_image__QnU4w",orange:"HomePageItem_orange__on8XO",cyan:"HomePageItem_cyan__hZVgY",lime:"HomePageItem_lime__kRFl4",pink:"HomePageItem_pink__h5rMj",details:"HomePageItem_details__7Gd7e",leftShape:"HomePageItem_leftShape__OlM6k",rightShape:"HomePageItem_rightShape__3ENDl"}},1664:function(a,b,c){a.exports=c(8418)}},function(a){a.O(0,[533,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])