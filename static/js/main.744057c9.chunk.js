(this["webpackJsonpsushi-enhance-app"]=this["webpackJsonpsushi-enhance-app"]||[]).push([[0],{27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),c=a(12),n=a.n(c),r=(a(27),a(18)),l=a(22),d=a(7),o=a(9),m=a.n(o),j=a(0);var h=function(e){return Object(i.useEffect)((function(){setTimeout((function(){m()(".modal-item").addClass("active")}),[])}),[]),n.a.createPortal(Object(j.jsx)("div",{className:"full-screen-img",onClick:e.closeModal,children:Object(j.jsx)("div",{className:"modal-item",children:e.children})}),document.getElementById("modal-root"))};var p=function(e){var t=e.data,a=e.counter,s=e.max,c=e.isReachedMax,n=e.setLocalMax,r=e.setShowNote,l=e.firstTimeNote,o=e.setFirstTimeNote,m=Object(i.useState)(0),p=Object(d.a)(m,2),u=p[0],b=p[1],g=Object(i.useState)(!1),x=Object(d.a)(g,2),O=x[0],A=x[1],f=function(e){A(e)};return Object(j.jsxs)("li",{children:[Object(j.jsxs)("div",{className:"list-group-item-title",onClick:function(){return f(!0)},children:[Object(j.jsx)("div",{className:"asset-wrap",style:{backgroundImage:"url("+t.image+")"}}),Object(j.jsx)("p",{children:t.name})]}),Object(j.jsx)("div",{className:"list-group-item-price",children:Object(j.jsxs)("div",{className:"app-info-counter",children:[Object(j.jsx)("div",{className:"counter-item ".concat(0===u?"disable":""),onClick:function(){0!==u&&(b((function(e){return e-a})),n((function(e){return e-a})))},children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",children:Object(j.jsxs)("g",{id:"Group_16354","data-name":"Group 16354",transform:"translate(13132 9556)",children:[Object(j.jsx)("rect",{id:"Rectangle_6076","data-name":"Rectangle 6076",width:"20",height:"20",transform:"translate(-13132 -9556)",fill:"none"}),Object(j.jsx)("path",{id:"Path_8599","data-name":"Path 8599",d:"M12.25,2.25a10,10,0,1,1-10,10A10.011,10.011,0,0,1,12.25,2.25Zm0,18.462A8.462,8.462,0,1,0,3.788,12.25,8.471,8.471,0,0,0,12.25,20.712Z",transform:"translate(-13134.25 -9558.25)",fill:"#212121"}),Object(j.jsx)("path",{id:"Path_8598","data-name":"Path 8598",d:"M15,12.75H9a.75.75,0,0,1,0-1.5h6a.75.75,0,0,1,0,1.5Z",transform:"translate(-13134 -9557.75)",fill:"#212121"})]})})}),Object(j.jsx)("div",{className:"counter-numb",children:u}),Object(j.jsx)("div",{className:"counter-item ".concat(u===s||c?"disable":""),onClick:function(){u===s||c||(b((function(e){return e+a})),n((function(e){return e+a})),l&&(r(!0),setTimeout((function(){r(!1)}),3e3)),o(!1))},children:Object(j.jsxs)("svg",{id:"Group_16352","data-name":"Group 16352",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",children:[Object(j.jsx)("rect",{id:"Rectangle_6077","data-name":"Rectangle 6077",width:"20",height:"20",fill:"none"}),Object(j.jsx)("path",{id:"Path_8598","data-name":"Path 8598",d:"M12.25,2.25a10,10,0,1,1-10,10A10.011,10.011,0,0,1,12.25,2.25Zm0,18.462A8.462,8.462,0,1,0,3.788,12.25,8.471,8.471,0,0,0,12.25,20.712Z",transform:"translate(-2.25 -2.25)",fill:"#212121"}),Object(j.jsx)("path",{id:"Union_21","data-name":"Union 21",d:"M13109,8901.749V8899.5h-2.252a.75.75,0,0,1,0-1.5H13109v-2.252a.749.749,0,1,1,1.5,0V8898h2.251a.75.75,0,0,1,0,1.5h-2.251v2.248a.749.749,0,1,1-1.5,0Z",transform:"translate(-13099.75 -8888.749)",fill:"#212121"})]})})]})}),O?Object(j.jsx)(h,{closeModal:function(){return f(!1)},children:Object(j.jsx)("div",{className:"screen-img",style:{backgroundImage:"url("+t.image+")"}})}):null]})},u=a.p+"static/media/tick-mark.3590b623.png";var b=function(e){var t=e.item,a=Object(i.useState)(!1),s=Object(d.a)(a,2),c=s[0],n=s[1],r=Object(i.useState)(0),l=Object(d.a)(r,2),o=l[0],m=l[1],h=Object(i.useState)(!0),b=Object(d.a)(h,2),g=b[0],x=b[1],O=Object(i.useState)(!1),A=Object(d.a)(O,2),f=A[0],v=A[1];return Object(i.useEffect)((function(){o===t.max?n(!0):n(!1)}),[o,t.max]),Object(j.jsx)("div",{className:"list-group ".concat(f?"show-note":""),children:Object(j.jsxs)("div",{className:"list-group-item ".concat(c?"done":""),children:[Object(j.jsxs)("div",{className:"list-group-item-head",children:[Object(j.jsxs)("div",{className:"list-group-item-head-title",children:[Object(j.jsxs)("strong",{children:[" ",t.name," "]}),Object(j.jsxs)("div",{className:"list-group-head-info",children:[Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB/AAAAfwBl4kA9AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADrSURBVDiNndI/SoQxEAXwX0QRBMHKG4h7BXtR0EbBRs/hSSy1sPEMegGxU+wtRMTddosVFMGxCWz8vmT9MzDkJfPymJeJiNBKJJxgiDMs9Dg/COwgijzqcubMjmFn/9JjzOogd7GPcxzW6imT/h3ztcOU0ip2McAtLiNiUlWotHyAR3yYPt5N02JFYDGvm75PYK0m0JtCRLxn+NopVS3MGuNGgZ8jYvRXge0CXzVZjdkv4c3U/96vHzELbBWXP7HSEmhZGBR4EhHjloPqR8J1gZdTSqcY4SIiHkpitYOIuMMx7jHGehZ46nK/AOWkJq9x8fzAAAAAAElFTkSuQmCC",alt:"info"}),Object(j.jsxs)("span",{children:["Item adds in multiples of ",t.counter," pieces."]})]})]}),Object(j.jsxs)("span",{children:["Select a minimum and maximum ",t.max," pieces."]}),c?Object(j.jsx)("img",{src:u,className:"filled-icon",alt:"filled"}):null]}),Object(j.jsx)("div",{className:"list-group-item-body",children:Object(j.jsx)("ul",{className:"list-group-item-grid",children:t.pieces.map((function(e){return Object(j.jsx)(p,{data:e,counter:t.counter,max:t.max,isReachedMax:c,setLocalMax:m,setShowNote:v,firstTimeNote:g,setFirstTimeNote:x},e.id)}))})})]})})},g=a.p+"static/media/background.13c738c3.png";var x=function(){var e=Object(i.useState)(1),t=Object(d.a)(e,2),a=t[0],s=t[1],c=Object(i.useState)([{id:1,name:"Large Box (30 Pieces)",price:300,data:[{name:"Nigiri Sushi",max:12,counter:4,id:1,pieces:[{id:1,name:"Shrimp",image:"https://image.shutterstock.com/image-photo/sushi-shrimp-260nw-387019609.jpg"},{id:2,name:"Salamon",image:"https://images.deliveryhero.io/image/otlob/menuitems/Sake_Nigiri_637652431297207467.jpg"},{id:3,name:"Tuna",image:"https://img-global.cpcdn.com/recipes/b59a774de67f13dc/1200x630cq70/photo.jpg"},{id:4,name:"Octopus",image:"https://qph.fs.quoracdn.net/main-qimg-8ba1a075b233dca5b4732c5a59c08550-lq"}]},{name:"Ura Maki",max:12,counter:3,id:2,pieces:[{id:1,name:"California",image:"https://www.yummyhealthyeasy.com/wp-content/uploads/2018/04/california-sushi-rolls-square.jpg"},{id:2,name:"Shrimp Tempura",image:"https://www.mashed.com/img/gallery/shrimp-tempura-roll-what-you-should-know-before-ordering/l-intro-1628971551.jpg"},{id:3,name:"Togarashi",image:"https://media-cdn.tripadvisor.com/media/photo-s/0e/97/81/2e/special-sushi.jpg"},{id:4,name:"Spider",image:"https://media-cdn.tripadvisor.com/media/photo-s/14/c9/32/a2/spider-sushi-rolls.jpg"}]},{name:"Ura Temaki",max:6,counter:2,id:3,pieces:[{id:1,name:"Ikura",image:"https://media.istockphoto.com/photos/close-up-ikura-sushi-with-seaweed-picture-id491170760"},{id:2,name:"Tuna Temaki",image:"https://iheartumami.com/wp-content/uploads/2019/09/Temaki-Sushi-Low-Carb-Tuna-Temaki-1-500x500.jpg"},{id:3,name:"Eel Temaki",image:"https://image.shutterstock.com/image-photo/temaki-unagi-sushi-eel-avocado-260nw-1179133216.jpg"}]}]}]),n=Object(d.a)(c,2),o=n[0],h=n[1],p=function(e){m()(e.target).closest(".list-group-wrapper").find(".list-group-wrapper-body").slideToggle(),m()(e.target).closest(".list-group-wrapper").find(".list-group-wrapper-head").toggleClass("active")};return Object(j.jsxs)("div",{className:"app-data-info",children:[Object(j.jsx)("div",{className:"app-info-head",style:{backgroundImage:"url("+g+")"}}),Object(j.jsxs)("div",{className:"app-info-body",children:[Object(j.jsxs)("div",{className:"app-info-main-head",children:[Object(j.jsxs)("div",{className:"app-info-main-title",children:[Object(j.jsx)("strong",{children:"Large Box (30 Pieces)"}),Object(j.jsx)("span",{children:"Please pick your pieces."})]}),Object(j.jsxs)("div",{className:"app-info-counter-wrapper",children:[Object(j.jsxs)("div",{className:"app-info-counter",children:[Object(j.jsx)("div",{className:"counter-item ".concat(1===a?"disable":""),onClick:function(){1!==a&&(s((function(e){return e-1})),o.splice(-1),h(o),1===o.length&&m()(".list-group-wrapper-body").slideDown())},children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",children:Object(j.jsxs)("g",{id:"Group_16354","data-name":"Group 16354",transform:"translate(13132 9556)",children:[Object(j.jsx)("rect",{id:"Rectangle_6076","data-name":"Rectangle 6076",width:"20",height:"20",transform:"translate(-13132 -9556)",fill:"none"}),Object(j.jsx)("path",{id:"Path_8599","data-name":"Path 8599",d:"M12.25,2.25a10,10,0,1,1-10,10A10.011,10.011,0,0,1,12.25,2.25Zm0,18.462A8.462,8.462,0,1,0,3.788,12.25,8.471,8.471,0,0,0,12.25,20.712Z",transform:"translate(-13134.25 -9558.25)",fill:"#212121"}),Object(j.jsx)("path",{id:"Path_8598","data-name":"Path 8598",d:"M15,12.75H9a.75.75,0,0,1,0-1.5h6a.75.75,0,0,1,0,1.5Z",transform:"translate(-13134 -9557.75)",fill:"#212121"})]})})}),Object(j.jsx)("div",{className:"counter-numb",children:a}),Object(j.jsx)("div",{className:"counter-item ".concat(3===a?"disable":""),onClick:function(){3!==a&&(s((function(e){return e+1})),h((function(e){return[].concat(Object(l.a)(e),[Object(r.a)(Object(r.a)({},e[0]),{},{id:a+1})])})))},children:Object(j.jsxs)("svg",{id:"Group_16352","data-name":"Group 16352",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",children:[Object(j.jsx)("rect",{id:"Rectangle_6077","data-name":"Rectangle 6077",width:"20",height:"20",fill:"none"}),Object(j.jsx)("path",{id:"Path_8598","data-name":"Path 8598",d:"M12.25,2.25a10,10,0,1,1-10,10A10.011,10.011,0,0,1,12.25,2.25Zm0,18.462A8.462,8.462,0,1,0,3.788,12.25,8.471,8.471,0,0,0,12.25,20.712Z",transform:"translate(-2.25 -2.25)",fill:"#212121"}),Object(j.jsx)("path",{id:"Union_21","data-name":"Union 21",d:"M13109,8901.749V8899.5h-2.252a.75.75,0,0,1,0-1.5H13109v-2.252a.749.749,0,1,1,1.5,0V8898h2.251a.75.75,0,0,1,0,1.5h-2.251v2.248a.749.749,0,1,1-1.5,0Z",transform:"translate(-13099.75 -8888.749)",fill:"#212121"})]})})]}),Object(j.jsx)("div",{className:"app-info-price",children:Object(j.jsxs)("span",{children:["KWD ",300*o.length]})})]})]}),Object(j.jsx)("div",{className:"app-info-main-body",children:o.map((function(e,t){return Object(j.jsxs)("div",{className:"list-group-wrapper",children:[o.length>1?Object(j.jsxs)("div",{className:"list-group-wrapper-head active",onClick:p,children:[Object(j.jsxs)("div",{className:"list-group-wrapper-head-title",children:[Object(j.jsx)("p",{children:e.name}),Object(j.jsx)("span",{className:"list-group-wrapper-counter",children:t+1})]}),Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABVSURBVDiN7dCxDkBAFETRo9j4RJ3/sxIavk5BoxBhV1DubefOvORR+JUWESHhBPS7exkOmFC/yJPSo/JZnnc5YLwrV4mR7pCvaLDkrp9HovxjC1/ZAN3qDxFwDHgDAAAAAElFTkSuQmCC",alt:"asset",className:"active-icon"})]}):null,Object(j.jsx)("div",{className:"list-group-wrapper-body",children:e.data.map((function(e){return Object(j.jsx)(b,{item:e},e.id)}))})]},e.id)}))})]})]})},O=a(2);function A(){var e=Object(O.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var f=a(16);var v=function(){return Object(j.jsx)("button",{className:"addToCartButton",children:"Add To Cart"})};var w=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(f.a,{children:[Object(j.jsx)(A,{}),Object(j.jsx)("div",{className:"app-contain",children:Object(j.jsxs)("div",{className:"app-wrap",children:[Object(j.jsxs)("div",{className:"app-data",children:[Object(j.jsx)("div",{className:"app-data-head",children:Object(j.jsx)("div",{className:"back-btn",children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[Object(j.jsx)("g",{children:Object(j.jsx)("path",{fill:"rgba(0,119,189,0)",d:"M0 0H24V24H0z"})}),Object(j.jsx)("path",{fill:"#212121",d:"M1598.321-2.738l-6.615-6.615a.843.843 0 0 1-.406-.721.84.84 0 0 1 .113-.422.847.847 0 0 1 .146-.2.859.859 0 0 1 .089-.078l6.672-6.672a.844.844 0 0 1 1.193 0 .844.844 0 0 1 0 1.193l-5.331 5.331h14.273a.844.844 0 0 1 .844.844.844.844 0 0 1-.844.843h-14.242l5.3 5.3a.843.843 0 0 1 0 1.192.842.842 0 0 1-.6.247.841.841 0 0 1-.592-.242z",transform:"translate(-1588.301 22.689)"})]})})}),Object(j.jsx)("div",{className:"app-data-body",children:Object(j.jsx)(O.c,{children:Object(j.jsx)(O.a,{exact:!0,path:"/",component:x})})}),Object(j.jsx)("div",{className:"app-data-foot",children:Object(j.jsx)(v,{})})]}),Object(j.jsx)("div",{className:"app-background",style:{backgroundImage:"url("+g+")"}})]})})]})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),i(e),s(e),c(e),n(e)}))};n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),N()}},[[34,1,2]]]);
//# sourceMappingURL=main.744057c9.chunk.js.map