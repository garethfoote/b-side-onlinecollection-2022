(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2705:function(a,b,c){var d=c(5639).Symbol;a.exports=d},4239:function(a,b,c){var d=c(2705),e=c(9607),f=c(2333),g=d?d.toStringTag:void 0;a.exports=function(a){return null==a?void 0===a?"[object Undefined]":"[object Null]":g&&g in Object(a)?e(a):f(a)}},7561:function(a,b,c){var d=c(7990),e=/^\s+/;a.exports=function(a){return a?a.slice(0,d(a)+1).replace(e,""):a}},1957:function(a,b,c){var d="object"==typeof c.g&&c.g&&c.g.Object===Object&&c.g;a.exports=d},9607:function(a,b,c){var d=c(2705),e=Object.prototype,f=e.hasOwnProperty,g=e.toString,h=d?d.toStringTag:void 0;a.exports=function(a){var b=f.call(a,h),c=a[h];try{a[h]=void 0;var d=!0}catch(e){}var i=g.call(a);return d&&(b?a[h]=c:delete a[h]),i}},2333:function(a){var b=Object.prototype.toString;a.exports=function(a){return b.call(a)}},5639:function(a,b,c){var d=c(1957),e="object"==typeof self&&self&&self.Object===Object&&self,f=d||e||Function("return this")();a.exports=f},7990:function(a){var b=/\s/;a.exports=function(a){for(var c=a.length;c-- &&b.test(a.charAt(c)););return c}},3279:function(a,b,c){var d=c(3218),e=c(7771),f=c(4841),g=Math.max,h=Math.min;a.exports=function(a,b,c){var i,j,k,l,m,n,o=0,p=!1,q=!1,r=!0;if("function"!=typeof a)throw TypeError("Expected a function");function s(b){var c=i,d=j;return i=j=void 0,o=b,l=a.apply(d,c)}function t(a){var c=a-n,d=a-o;return void 0===n||c>=b||c<0||q&&d>=k}function u(){var a,c,d,f,g=e();if(t(g))return v(g);m=setTimeout(u,(c=(a=g)-n,d=a-o,f=b-c,q?h(f,k-d):f))}function v(a){return(m=void 0,r&&i)?s(a):(i=j=void 0,l)}function w(){var a,c=e(),d=t(c);if(i=arguments,j=this,n=c,d){if(void 0===m)return o=a=n,m=setTimeout(u,b),p?s(a):l;if(q)return clearTimeout(m),m=setTimeout(u,b),s(n)}return void 0===m&&(m=setTimeout(u,b)),l}return b=f(b)||0,d(c)&&(p=!!c.leading,q="maxWait"in c,k=q?g(f(c.maxWait)||0,b):k,r="trailing"in c?!!c.trailing:r),w.cancel=function(){void 0!==m&&clearTimeout(m),o=0,i=n=j=m=void 0},w.flush=function(){return void 0===m?l:v(e())},w}},3218:function(a){a.exports=function(a){var b=typeof a;return null!=a&&("object"==b||"function"==b)}},7005:function(a){a.exports=function(a){return null!=a&&"object"==typeof a}},3448:function(a,b,c){var d=c(4239),e=c(7005);a.exports=function(a){return"symbol"==typeof a||e(a)&&"[object Symbol]"==d(a)}},7771:function(a,b,c){var d=c(5639),e=function(){return d.Date.now()};a.exports=e},3493:function(a,b,c){var d=c(3279),e=c(3218);a.exports=function(a,b,c){var f=!0,g=!0;if("function"!=typeof a)throw TypeError("Expected a function");return e(c)&&(f="leading"in c?!!c.leading:f,g="trailing"in c?!!c.trailing:g),d(a,b,{leading:f,maxWait:b,trailing:g})}},4841:function(a,b,c){var d=c(7561),e=c(3218),f=c(3448),g=0/0,h=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,j=/^0o[0-7]+$/i,k=parseInt;a.exports=function(a){if("number"==typeof a)return a;if(f(a))return g;if(e(a)){var b="function"==typeof a.valueOf?a.valueOf():a;a=e(b)?b+"":b}if("string"!=typeof a)return 0===a?a:+a;a=d(a);var c=i.test(a);return c||j.test(a)?k(a.slice(2),c?2:8):h.test(a)?g:+a}},8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(5558)}])},26:function(a,b){"use strict";b.Z={src:"/_next/static/media/belinda.175ff838.jpg",height:936,width:750,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAP/2gAMAwEAAhADEAAAAJaF/wD/xAAbEAACAgMBAAAAAAAAAAAAAAABAhESAAQTYf/aAAgBAQABPwBErr3SC/QgjyM//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAIBIXH/2gAIAQIBAT8AV5vT/8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAAxEi/9oACAEDAQE/ALalDDNHIn//2Q=="}},6877:function(a,b){"use strict";b.Z={src:"/_next/static/media/duncan.cb5f61c9.jpg",height:675,width:1200,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAQT/2gAMAwEAAhADEAAAAIID/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQIDBCEAERL/2gAIAQEAAT8AlTnRJX1tTSaLZNEEZ//EABgRAQEAAwAAAAAAAAAAAAAAAAECACFB/9oACAECAQE/AGka33P/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="}},4240:function(a,b){"use strict";b.Z={src:"/_next/static/media/ioannis.c39af33d.png",height:675,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAfklEQVR42g2M3QqCMBhA93ZeFFixJmEFs1ltNjcV19yPCh9Bj+3gcODcHIRPuOHNrbzyl3hQxqq6FZzRCknZAfyH3qwLfG0IYf0BTNYhysRT2mx3OBf3LCf7I8nxhRQlUqqPYTGjdS4m65R+TnPUys67WashYcZJfrR3sWbvDTCmMtNMnAxNAAAAAElFTkSuQmCC"}},5315:function(a,b,c){"use strict";var d=c(5893);c(7294);var e=c(1664),f=c.n(e),g=c(5675),h=c.n(g),i=c(4184),j=c.n(i),k=c(8825),l=c.n(k),m=function(a){var b=a.condition,c=a.wrapper,e=a.children;return b?c(e):(0,d.jsx)(d.Fragment,{children:e})},n=function(a){var b=a.href,c=void 0===b?"":b,e=a.altText,g=a.img,i=a.colour;return(0,d.jsx)("div",{className:j()(l()[i],l().image),children:(0,d.jsx)(m,{condition:!!c,wrapper:function(a){return(0,d.jsx)(f(),{href:c,children:(0,d.jsx)("a",{children:a})})},children:(0,d.jsx)("figure",{children:(0,d.jsx)(h(),{layout:"fill",objectFit:"cover",src:g.src,alt:e})})})})};b.Z=n},5558:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return E}});var d=c(5893),e=c(9008),f=c.n(e),g=c(214),h=c.n(g),i=c(4924),j=c(1664),k=c.n(j),l=c(6579),m=c.n(l),n=c(5315),o=c(4184),p=c.n(o),q=function(a){var b,c=a.href,e=a.alignment,f=void 0===e?"left":e,g=a.altText,h=a.img,j=a.title,l=a.description,o=a.linkText,q=a.colour;return(0,d.jsxs)("article",{className:p()(m()[q],m().article,m()[f]),children:[(0,d.jsx)("div",{className:m().imageContainer,children:(0,d.jsx)(n.Z,{href:c,img:h,altText:g,colour:q})}),(0,d.jsxs)("div",{className:m().details,children:[(0,d.jsx)("div",{className:p()((b={},(0,i.Z)(b,m().leftShape,"left"===f),(0,i.Z)(b,m().rightShape,"right"===f),b))}),(0,d.jsx)("h1",{children:j}),(0,d.jsx)("p",{children:l}),(0,d.jsx)(k(),{href:c,children:(0,d.jsx)("a",{children:o})})]})]})},r=q,s=c(7840),t=c.n(s),u=c(7294),v=c(3493),w=c.n(v),x=function(a){var b=new Path2D("M500 700.88c-110.76 0-200.87-90.12-200.87-200.88S389.24 299.12 500 299.12 700.88 389.24 700.88 500 610.76 700.88 500 700.88m0-481.29c-154.62 0-280.41 125.79-280.41 280.41S345.38 780.41 500 780.41 780.41 654.62 780.41 500 654.62 219.59 500 219.59");a.fillStyle="#29b8ce",a.fill(b);var c=new Path2D("M500 848.89c-192.38 0-348.89-156.51-348.89-348.89S307.62 151.11 500 151.11 848.89 307.62 848.89 500 692.38 848.89 500 848.89m0-780.41C262.06 68.48 68.48 262.06 68.48 500S262.06 931.52 500 931.52 931.52 737.94 931.52 500 737.94 68.48 500 68.48");a.fillStyle="#fff",a.fill(c);var d=new Path2D("M500 931.52C262.06 931.52 68.48 737.94 68.48 500S262.06 68.48 500 68.48 931.52 262.06 931.52 500 737.94 931.52 500 931.52m353.55-785.07C759.12 52 633.56 0 500 0S240.89 52 146.45 146.45 0 366.45 0 500s52 259.12 146.45 353.55S366.45 1000 500 1000s259.12-52 353.55-146.45S1000 633.55 1000 500s-52-259.12-146.45-353.55");a.fillStyle="#1d1d1b",a.fill(d);var e=new Path2D("M500 780.41c-154.62 0-280.41-125.79-280.41-280.41S345.38 219.59 500 219.59 780.41 345.38 780.41 500 654.62 780.41 500 780.41m0-629.3c-192.38 0-348.89 156.51-348.89 348.89S307.62 848.89 500 848.89 848.89 692.38 848.89 500 692.38 151.11 500 151.11");a.fillStyle="#6d746c",a.fill(e);var f=new Path2D("M500 299.12c-110.76 0-200.87 90.12-200.87 200.88S389.24 700.88 500 700.88 700.88 610.76 700.88 500 610.76 299.12 500 299.12");return a.fillStyle="#4a4a49",a.fill(f),a},y=function(a){var a=null!==a?a:function(a){throw a}(TypeError("Cannot destructure undefined")),b=function(a,b){var c=window.matchMedia("(min-width: 481px)"),d=window.matchMedia("(min-width: 768px)");b.save(),!1==c.matches?b.translate(10,642):!0==c.matches?b.translate(a.width-50,642):!0==d.matches&&b.translate(a.width,642),b.scale(.075,.075),(b=x(b)).restore(),b.save(),b.translate(.05*a.width,780),b.scale(.15,.15),(b=x(b)).restore(),b.save(),b.translate(.675*a.width,-100),b.scale(.15,.15),(b=x(b)).restore()},c=(0,u.useRef)(null),e=(0,u.useState)({width:0,height:0});return e[0],e[1],(0,u.useEffect)(function(){var a=c.current,d=null==a?void 0:a.getContext("2d"),e=w()(function(){console.log(window.innerWidth);var c=window.innerWidth,e=window.innerHeight,f=window.devicePixelRatio||1;a&&(a.width=c*f,a.height=e*f,a.style.width="".concat(c,"px"),a.style.height="".concat(e,"px")),d.imageSmoothingEnabled=!1,d.scale(f,f),console.log(a,a.width),d.clearRect(0,0,a.width,a.height),b(a,d)},1e3);return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),(0,d.jsx)("canvas",{ref:c,className:t().canvas,id:"myCanvas",width:"100%",height:"100%",children:"Your browser does not support the HTML canvas tag."})},z=y,A=c(26),B=c(4240),C=c(6877),D=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(z,{}),(0,d.jsxs)("div",{className:h().container,children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:"b-side: Online Collection"}),(0,d.jsx)("meta",{name:"description",content:"An online programme of sound and image, part of b-side Festival 2022."}),(0,d.jsx)("link",{rel:"icon",href:"https://b-side.org.uk/wp-content/uploads/2022/03/target-header.svg",type:"",sizes:"16x16"}),(0,d.jsx)("link",{rel:"icon",href:"https://b-side.org.uk/wp-content/uploads/2022/03/target-header.svg",type:"",sizes:"32x32"})]}),(0,d.jsxs)("header",{children:[(0,d.jsxs)("h1",{children:["B-Side: ",(0,d.jsx)("em",{children:"Online Collection"})]}),(0,d.jsx)("p",{children:"Want to see and hear some more or can't make it to the island? Our online programme of sound and image is available until 18th September. Featuring work by festival artists Duncan Whitley, Belinda Zhawi and Ioannis Panagiotou."}),(0,d.jsx)("p",{className:"deemphasised",children:"b-side Festival's Online Collection has been made possible with support from the British Council's International Collaboration Grant programme."})]}),(0,d.jsxs)("main",{className:h().main,children:[(0,d.jsx)(r,{href:"south-x-south-east",img:{src:A.Z},altText:"A photograph of the artist looking over her shoulder.",colour:"orange",alignment:"right",title:"South x South East",description:"Belinda Zhawi's sound work South X South East explores migration and identities based on geography and features field recordings and contributions by harpist Marysia Osuchowsk and Caleb Azumah Nelson. ",linkText:"Listen to South x South East"}),(0,d.jsx)(r,{href:"kimberlin",img:{src:C.Z},altText:"A mossy covered wall. Still image from project.",alignment:"left",colour:"cyan",title:"Kimberlin",description:"Kimberlin is a short film, first completed in 2019, with a 2022 cut to be premiered at this year's festival. The film is about the discovery of an underground cinema cavern on the Isle of Portland: the uncanny discovery and subsequent breaking news begin to generate speculation amongst islanders as to who created the cavern and the canisters of film found within it. Kimberlin features a specially commissioned soundtrack by acclaimed electronic musician Abul Mogard.",linkText:"Watch Kimberlin"}),(0,d.jsx)(r,{href:"umwelt-and-the-memory-passage",img:{src:B.Z},altText:"A man holding a box with a head for a tree.",alignment:"right",colour:"lime",title:"Umwelt and The Memory Passage",description:"Ioannis Panagiotou presents 2 films, Umwelt and The Memory Passage, featuring Plus Minus Ensemble, Red Note Ensemble and the Edinburgh Film Music Orchestra. Pilgrim's Horses, part 3 of this trilogy, has been commissioned for b-side and can be seen at Sweet Hill Farm.",linkText:"Watch Umwelt and The Memory Passage"})]}),(0,d.jsx)("footer",{className:h().fullProgramme,children:(0,d.jsx)("a",{href:"https://b-side.org.uk/project/festival-2022/",children:(0,d.jsx)("div",{children:(0,d.jsxs)("span",{children:["Full",(0,d.jsx)("br",{})," festival",(0,d.jsx)("br",{})," programme"]})})})})]})]})},E=D},7840:function(a){a.exports={canvas:"Canvas_canvas__agGl9"}},214:function(a){a.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",fullProgramme:"Home_fullProgramme__V2h9H"}},6579:function(a){a.exports={article:"HomePageItem_article__auw50",imageContainer:"HomePageItem_imageContainer__Nr7JE",right:"HomePageItem_right__vyP9N",orange:"HomePageItem_orange__on8XO",cyan:"HomePageItem_cyan__hZVgY",lime:"HomePageItem_lime__kRFl4",pink:"HomePageItem_pink__h5rMj",details:"HomePageItem_details__7Gd7e",leftShape:"HomePageItem_leftShape__OlM6k",rightShape:"HomePageItem_rightShape__3ENDl"}},8825:function(a){a.exports={image:"ImageCircle_image__7xmlN",orange:"ImageCircle_orange__Zo83_",cyan:"ImageCircle_cyan__NcgMB",lime:"ImageCircle_lime__Y5vYw",pink:"ImageCircle_pink__bKTjS"}}},function(a){a.O(0,[78,774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])