(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,function(e,t,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",s=c(1);t.a=()=>Object(s.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error"})},function(e,t,c){"use strict";var a=c(1);t.a=()=>Object(a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(a.jsx)("g",{transform:"translate(80,50)",children:Object(a.jsx)("g",{transform:"rotate(0)",children:Object(a.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(a.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(a.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(a.jsx)("g",{transform:"rotate(45)",children:Object(a.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(a.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(a.jsx)("g",{transform:"translate(50,80)",children:Object(a.jsx)("g",{transform:"rotate(90)",children:Object(a.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(a.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(a.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(a.jsx)("g",{transform:"rotate(135)",children:Object(a.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(a.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(a.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(a.jsx)("g",{transform:"rotate(180)",children:Object(a.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(a.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(a.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(a.jsx)("g",{transform:"rotate(225)",children:Object(a.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(a.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(a.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(a.jsx)("g",{transform:"rotate(270)",children:Object(a.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(a.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(a.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(a.jsx)("g",{transform:"rotate(315)",children:Object(a.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(a.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},function(e,t,c){"use strict";var a=c(0);t.a=()=>{const e="https://gateway.marvel.com:443/v1/public/",t="apikey=95c456a7ea2c5345495bb580c088c93e",{loading:c,error:s,request:n}=(()=>{const[e,t]=Object(a.useState)(!1),[c,s]=Object(a.useState)(!1);return{loading:e,error:c,request:Object(a.useCallback)((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};s(null),t(!0);try{const c=await fetch(e,{method:a,body:n,headers:r});if(!c.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(c.status));const s=await c.json();return t(!1),s}catch(c){throw t(!1),s(c),c}}),[])}})(),r=e=>({id:e.id,name:e.name,description:e.description,thumbnail:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),i=e=>{var t;return{id:e.id,title:e.title,description:e.description||"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0438\u043a\u0441\u0430 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",thumbnail:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",pages:e.pageCount?"".concat(e.pageCount," pages"):"\u041d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430",url:e.urls[0].url}};return{loading:c,error:s,getAllCharacters:async function(){let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:210;const s=await n("".concat(e,"characters?limit=").concat(c,"&offset=").concat(a,"&").concat(t));return s.data.results.map(r)},getCharacter:async c=>{const a=await n("".concat(e,"characters/").concat(c,"?").concat(t));return r(a.data.results[0])},getAllComics:async function(){let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;const s=await n("".concat(e,"comics?limit=").concat(a,"&offset=").concat(c,"&").concat(t));return s.data.results.map((e=>i(e)))},getComic:async c=>{const a=await n("".concat(e,"comics/").concat(c,"?").concat(t));return i(a.data.results[0])},getCharacterByName:async c=>{const a=await n("".concat(e,"characters?name=").concat(c,"&").concat(t));return 0!==a.data.results.length&&r(a.data.results[0])}}}},,,,function(e,t,c){"use strict";var a=c(0),s=c(6),n=c(1);class r extends a.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,t){console.log(e,t),this.setState({error:!0})}render(){return this.state.error?Object(n.jsx)(s.a,{}):this.props.children}}t.a=r},,,,,,,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(9),n=c.n(s),r=c(5),i=c(3),l=(c(31),c(1));var j=()=>Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("header",{className:"app__header",children:[Object(l.jsx)("h1",{className:"app__title",children:Object(l.jsxs)(r.b,{to:"/",children:[Object(l.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(l.jsx)("nav",{className:"app__menu",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.c,{to:"/",end:!0,style:e=>{let{isActive:t}=e;return{color:t?"#9f0013":"inherit"}},children:"Characters"})}),"/",Object(l.jsx)("li",{children:Object(l.jsx)(r.c,{to:"/comics",style:e=>{let{isActive:t}=e;return{color:t?"#9f0013":"inherit"}},children:"Comics"})})]})})]}),Object(l.jsx)("main",{children:Object(l.jsx)(i.a,{})})]}),o=c(12),b=(c(33),c.p+"static/media/mjolnir.61f31e18.png"),m=c(8);var d=(e,t)=>0===e.length?"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043c\u044b \u0435\u0449\u0451 \u043d\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043b\u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430 :)":e.length<t?e:e.slice(0,t-3)+"...",h=c(7),u=c(6);const O=e=>{let{char:t}=e;const{name:c,description:a,thumbnail:s,homepage:n,wiki:r}=t;let i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s&&(i={objectFit:"contain"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:s,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ".concat(c),className:"randomchar__img",style:i}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:a}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:r,className:"button button__secondary",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})};var x=()=>{const[e,t]=Object(a.useState)({}),{loading:c,error:s,getCharacter:n}=Object(m.a)();Object(a.useEffect)((()=>{i()}),[]);const r=e=>{t({...e,description:d(e.description,230)})},i=()=>{const e=Math.floor(400*Math.random()+1011e3);n(e).then(r).catch((e=>console.log(e)))},j=s?Object(l.jsx)(u.a,{}):null,o=c?Object(l.jsx)(h.a,{}):null,x=s||c?null:Object(l.jsx)(O,{char:e});return Object(l.jsxs)("div",{className:"randomchar",children:[o,j,x,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{className:"button button__main",onClick:i,children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:b,alt:"mjolnir",className:"randomchar__decoration"})]})]})},p=c(46),_=c(47);c(34);var g=e=>{const[t,c]=Object(a.useState)([]),[s,n]=Object(a.useState)(null),[r,i]=Object(a.useState)(210),[j,o]=Object(a.useState)(!1),[b,d]=Object(a.useState)(!1),{loading:O,error:x,getAllCharacters:g}=Object(m.a)(),f=()=>{g(9,r).then((e=>(e=>{let t=!1;1564-r<=9&&(t=!0),c((t=>[...t,...e])),i((e=>e+9)),o(t),d(!0)})(e))).catch((e=>console.log(e)))},v=(t,c)=>{e.onUpdateSelectedChar(t),n(t.id),c.focus()};Object(a.useEffect)((()=>{f()}),[]);const N=O&&!b?Object(l.jsx)(h.a,{}):null,y=x?Object(l.jsx)(u.a,{}):null,C=(e=>{const t=e.map((e=>{let t={objectFit:"cover"};const c=s===e.id?"char__item char__item_selected":"char__item";return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail&&(t={objectFit:"unset"}),Object(l.jsx)(p.a,{timeout:300,classNames:"char__item",children:Object(l.jsxs)("li",{className:c,onClick:t=>{v(e,t.target)},onKeyDown:t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),v(e,t.target))},tabIndex:0,children:[Object(l.jsx)("img",{src:e.thumbnail,alt:e.name,style:t}),Object(l.jsx)("div",{className:"char__name",children:e.name})]})},e.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:Object(l.jsx)(_.a,{component:null,children:t})})})(t);return Object(l.jsxs)("div",{className:"char__list",children:[N,y,C,Object(l.jsx)("button",{className:"button button__main button__long",onClick:e=>f(),style:{display:j?"none":"block"},disabled:O,children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})};c(35);var f=()=>Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]});c(36);var v=e=>{const t=e=>Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),0===e.length?Object(l.jsx)("div",{children:"\u041a\u043e\u043c\u0438\u043a\u0441\u043e\u0432 \u0441 \u044d\u0442\u0438\u043c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0435\u043c \u043d\u0435\u0442"}):null,Object(l.jsx)("ul",{className:"char__comics-list",children:e.map(((e,t)=>{if(t>8)return null;const c=e.resourceURI.replace("http://gateway.marvel.com/v1/public/comics/","");return Object(l.jsx)(r.b,{className:"char__comics-item",to:"/comics/".concat(c),children:e.name},t)}))})]}),{selectedChar:c}=e,a=c?(e=>{const{name:c,description:a,thumbnail:s,homepage:n,wiki:r,comics:i}=e,j="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===s?{objectFit:"unset"}:{objectFit:"cover"};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:s,alt:c,style:j}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:r,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:a}),t(i)]})})(c):Object(l.jsx)(f,{});return Object(l.jsx)("div",{className:"char__info",children:a})},N=(c(37),c(16));const y=e=>{const t={};return e.charName||(t.charName="This field is required"),t},C=e=>{let{foundChar:t}=e;return Object(l.jsx)("div",{className:"searchChar__message-block",children:t?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{className:"searchChar__message",children:["There is! Visit ",t.name," page?"]}),Object(l.jsx)(r.b,{to:"/char/".concat(t.id),className:"searchChar__message-btn button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"TO PAGE"})})]}):Object(l.jsx)("p",{className:"searchChar__message searchChar__message_error",children:"The character was not found. Check the name and try again"})})};var k=()=>{const[e,t]=Object(a.useState)(null),{getCharacterByName:c,loading:s,error:n}=Object(m.a)();return Object(l.jsxs)("div",{className:"searchChar",children:[Object(l.jsx)("h2",{className:"searchChar__title",children:"Or find a character by name:"}),Object(l.jsx)(N.d,{initialValues:{charName:""},validate:y,onSubmit:e=>{let{charName:a}=e;c(a).then((e=>{t(e||!1)})).catch((e=>console.log(e)))},children:Object(l.jsxs)(N.c,{children:[Object(l.jsxs)("div",{className:"searchChar__search-wrapper",children:[Object(l.jsx)(N.b,{className:"searchChar__input",name:"charName",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),Object(l.jsx)("button",{className:"searchChar__btn-search button button__main",type:"submit",disabled:s,children:Object(l.jsx)("div",{className:"inner",children:"FIND"})})]}),Object(l.jsx)("div",{className:"searchChar__message-block",children:Object(l.jsx)(N.a,{name:"charName",component:"div",className:"searchChar__message searchChar__message_error"})})]})}),null==e||n?null:Object(l.jsx)(C,{foundChar:e}),n?Object(l.jsx)(u.a,{}):null]})},T=c.p+"static/media/vision.067d4ae1.png";var w=()=>{const[e,t]=Object(a.useState)(null);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{children:Object(l.jsx)(x,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(o.a,{children:Object(l.jsx)(g,{onUpdateSelectedChar:e=>{t(e)}})}),Object(l.jsx)(o.a,{children:Object(l.jsxs)("div",{className:"char-block",children:[Object(l.jsx)(v,{selectedChar:e}),Object(l.jsx)(k,{})]})})]}),Object(l.jsx)("img",{className:"bg-decoration",src:T,alt:"vision"})]})};c(41);var S=()=>{const[e,t]=Object(a.useState)([]),[c,s]=Object(a.useState)(0),[n,i]=Object(a.useState)(!1),[j,o]=Object(a.useState)(!1),{getAllComics:b,loading:d,error:O}=Object(m.a)();Object(a.useEffect)((()=>{x()}),[]);const x=()=>{b(c).then((e=>(e=>{c>=59331&&i(!0),t((t=>[...t,...e])),s((e=>e+8)),o(!0)})(e))).catch((e=>console.log(e)))},p=(e=>{const t=e.map(((e,t)=>{const c=0===e.price?"NOT AVAILABLE":"".concat(e.price,"$");return Object(l.jsx)("li",{className:"comics__item",children:Object(l.jsxs)(r.b,{to:"".concat(e.id),children:[Object(l.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),Object(l.jsx)("div",{className:"comics__item-name",children:e.title}),Object(l.jsx)("div",{className:"comics__item-price",children:c})]})},t)}));return Object(l.jsx)("ul",{className:"comics__grid",children:t})})(e),_=d&&!j?Object(l.jsx)(h.a,{}):null,g=O?Object(l.jsx)(u.a,{}):null;return Object(l.jsxs)("div",{className:"comics__list",children:[_,g,p,Object(l.jsx)("button",{className:"button button__main button__long",onClick:x,style:{display:n?"none":"block"},disabled:d,children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})};var F=()=>Object(l.jsx)(o.a,{children:Object(l.jsx)(S,{})});c(42);const A=e=>{let{char:t}=e;const{thumbnail:c,title:a,description:s}=t;return Object(l.jsxs)("div",{className:"single-comic",children:[Object(l.jsx)("img",{src:c,alt:a,className:"single-comic__img"}),Object(l.jsxs)("div",{className:"single-comic__info",children:[Object(l.jsx)("h2",{className:"single-comic__name",children:a}),Object(l.jsx)("p",{className:"single-comic__descr",children:s.length>0?s:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"})]})]})};var E=()=>{const[e,t]=Object(a.useState)(null),{charId:c}=Object(i.r)(),{getCharacter:s,loading:n,error:r}=Object(m.a)();Object(a.useEffect)((()=>{o(c)}),[c]);const j=e=>{t(e)},o=e=>{s(e).then(j).catch((e=>console.log(e)))},b=r?Object(l.jsx)(u.a,{}):null,d=n?Object(l.jsx)(h.a,{}):null,O=r||n||!e?null:Object(l.jsx)(A,{char:e});return Object(l.jsxs)(l.Fragment,{children:[b,d,O]})};var I=()=>Object(l.jsx)(o.a,{children:Object(l.jsx)(E,{})});const B=Object(a.lazy)((()=>c.e(4).then(c.bind(null,49)))),D=Object(a.lazy)((()=>c.e(3).then(c.bind(null,50))));var M=()=>Object(l.jsx)(a.Suspense,{fallback:Object(l.jsx)(h.a,{}),children:Object(l.jsx)(r.a,{children:Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(i.d,{children:Object(l.jsxs)(i.b,{path:"/",element:Object(l.jsx)(j,{}),children:[Object(l.jsx)(i.b,{index:!0,element:Object(l.jsx)(w,{})}),Object(l.jsxs)(i.b,{path:"/comics",children:[Object(l.jsx)(i.b,{index:!0,element:Object(l.jsx)(F,{})}),Object(l.jsx)(i.b,{path:":comicId",element:Object(l.jsx)(D,{})})]}),Object(l.jsxs)(i.b,{path:"/char",children:[Object(l.jsx)(i.b,{index:!0,element:Object(l.jsx)(w,{})}),Object(l.jsx)(i.b,{path:":charId",element:Object(l.jsx)(I,{})})]}),Object(l.jsx)(i.b,{path:"*",element:Object(l.jsx)(B,{})})]})})})})});c(43);n.a.render(Object(l.jsx)(M,{}),document.getElementById("root"))}],[[44,1,2]]]);
//# sourceMappingURL=main.2b1836c6.chunk.js.map