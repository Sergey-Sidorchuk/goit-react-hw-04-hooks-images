(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__BmWUq",Modal:"Modal_Modal__3VU9r"}},23:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__taMKl","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__uupxE"}},24:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__26mFs"}},25:function(e,t,a){e.exports={Button:"Button_Button__1ZqwD"}},27:function(e,t,a){e.exports={App:"App_App__FYrsZ"}},32:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3KzpC",SearchForm:"Searchbar_SearchForm__2pqsR",SearchForm_button:"Searchbar_SearchForm_button__3HJeS",SearchForm_button_label:"Searchbar_SearchForm_button_label__3rGjm",SearchForm_input:"Searchbar_SearchForm_input__3rLwm"}},73:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(7),o=a.n(c),s=(a(32),a(13)),i=a(4),u=a(10),l=a.n(u),m=a(22),b=a(11),h=a.n(b);h.a.defaults.baseURL="https://pixabay.com/api/";var j={fetchImages:function(){var e=Object(m.a)(l.a.mark((function e(t){var a,r,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.searchQuery,r=void 0===a?"":a,n=t.currentPage,c=void 0===n?1:n,e.abrupt("return",h.a.get("?q=".concat(r,"&page=").concat(c,"&key=").concat("21876236-bdbf7791a65fc64e58b34d487","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=a(5),g=a.n(f),p=a(1);function d(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(i.a)(a,2),c=n[0],o=n[1];return Object(p.jsx)("header",{className:g.a.Searchbar,children:Object(p.jsxs)("form",{className:g.a.SearchForm,onSubmit:function(e){if(e.preventDefault(),""===c.trim())return alert("Enter a value to search.",{});t(c),o("")},children:[Object(p.jsx)("button",{type:"submit",className:g.a.SearchForm_button,children:Object(p.jsx)("span",{className:g.a.SearchForm_button_label,children:" Search"})}),Object(p.jsx)("input",{className:g.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.currentTarget.value)}})]})})}var _=a(23),O=a.n(_),S=function(e){var t=e.webformatURL,a=e.largeImageURL,r=e.tags,n=e.onClick;return Object(p.jsx)("li",{className:O.a.ImageGalleryItem,children:Object(p.jsx)("img",{onClick:function(){return n({largeImageURL:a,tags:r})},src:t,alt:r,className:"ImageGalleryItem-image"})})},v=a(24),y=a.n(v),x=function(e){var t=e.pictures,a=e.onClick;return Object(p.jsx)("ul",{className:y.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.tags,n=e.webformatURL,c=e.largeImageURL;return Object(p.jsx)(S,{tags:r,webformatURL:n,largeImageURL:c,onClick:a},t)}))})},I=a(25),w=a.n(I),F=function(e){var t=e.onClick;return Object(p.jsx)("button",{type:"button",className:w.a.Button,onClick:t,children:"Load more"})},k=a(12),C=a.n(k),G=document.querySelector("#modal-root");function L(e){var t=e.onClose,a=e.children;Object(r.useEffect)((function(){return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}));var n=function(e){"Escape"===e.code&&t()};return Object(c.createPortal)(Object(p.jsx)("div",{className:C.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(p.jsxs)("div",{className:C.a.Modal,children:[" ",a]})}),G)}var N=a(26),U=a.n(N),R=a(27),E=a.n(R);function B(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(1),o=Object(i.a)(c,2),u=o[0],l=o[1],m=Object(r.useState)(""),b=Object(i.a)(m,2),h=b[0],f=b[1],g=Object(r.useState)(!1),_=Object(i.a)(g,2),O=_[0],S=_[1],v=Object(r.useState)(!1),y=Object(i.a)(v,2),I=y[0],w=y[1],k=Object(r.useState)(""),C=Object(i.a)(k,2),G=C[0],N=C[1],R=Object(r.useState)(""),B=Object(i.a)(R,2),M=B[0],q=B[1];Object(r.useEffect)((function(){h&&A()}),[h]);var T=function(){w(!I)},A=function(){S(!0);var e={searchQuery:h,currentPage:u};j.fetchImages(e).then((function(e){0===e.length&&alert.info("Try again!"),n([].concat(Object(s.a)(a),Object(s.a)(e))),l(u+1)})).then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(){alert.info("Try again!")})).finally((function(){return S(!1)}))},P=a.length>0&&!O;return Object(p.jsxs)("div",{className:E.a.App,children:[Object(p.jsx)(d,{onSubmit:function(e){f(e),l(1),n([])}}),Object(p.jsx)(x,{pictures:a,onClick:function(e){var t=e.largeImageURL,a=e.tags;N(t),q(a),T()}}),P&&Object(p.jsx)(F,{onClick:A}),O&&Object(p.jsx)(U.a,{type:"Puff",color:"#00BFFF",height:100,width:100}),I&&Object(p.jsx)(L,{onClose:T,children:Object(p.jsx)("img",{src:G,alt:M})})]})}o.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.508bba7b.chunk.js.map