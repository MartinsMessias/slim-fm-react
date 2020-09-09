(this["webpackJsonplast_fm-react"]=this["webpackJsonplast_fm-react"]||[]).push([[0],{28:function(e,a,t){e.exports=t(63)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},41:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),s=(t(33),t(7)),m=t(1),i=t(10);t(34),t(35);var u=function(){return r.a.createElement("header",null,r.a.createElement("h1",{className:"site-title"},"SlimFM"),r.a.createElement("nav",null,r.a.createElement(s.b,{to:"/",className:"menu-item"},"Pesquisar"),r.a.createElement(s.b,{to:"/search-history",className:"menu-item"},"Hist\xf3rico")))},o=t(8);var h=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(m.e)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement("div",{className:"center"},r.a.createElement("p",{className:"title"},"Digite o nome de um artista ou de um \xe1lbum para pesquisar"),r.a.createElement("input",{name:"artist",type:"text",className:"search-bar-input",placeholder:"Ex: Michael Jackson",autoComplete:"off",onChange:function(e){l(e.target.value)}}),r.a.createElement("div",{className:"search-buttons"},r.a.createElement("a",{id:"search-artist",className:"button-primary",onClick:function(){""!==t?(localStorage.setItem((new Date).getTime().toString(),t),c.push("/search-artist/".concat(t))):c.push("/")}},r.a.createElement("span",{className:"button-primary-text"},"Pesquisar artista"),r.a.createElement("span",{className:"button-primary-child"},r.a.createElement(o.b,null))),r.a.createElement("a",{id:"search-album",className:"button-primary",onClick:function(){""!==t?(localStorage.setItem((new Date).getTime().toString(),t),c.push("/search-album/".concat(t))):c.push("/")}},r.a.createElement("span",{className:"button-primary-text"},"Pesquisar \xe1lbum"),r.a.createElement("span",{className:"button-primary-child"},r.a.createElement(o.b,null))))))};t(41);var E=function(){var e=Object.entries(localStorage),a=Object(m.e)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement("div",{id:"search-history-list",className:"container"},r.a.createElement("div",{className:"search-history-results"},r.a.createElement("div",{className:"search-history-header"},r.a.createElement("h1",{className:"search-history-title"},"Seu hist\xf3rico de pesquisas"),r.a.createElement("button",{className:"search-history-clear-button",onClick:function(){localStorage.clear(),a.push("/search-history")}},"Limpar hist\xf3rico")),r.a.createElement("hr",null),r.a.createElement("ul",{className:"history-list"},e.map((function(e){return r.a.createElement("li",null,new Date(parseInt(e[0])).toLocaleDateString("pt-BR")," -"," ",new Date(parseInt(e[0])).toLocaleTimeString("pt-BR")," -"," ",e[1])}))))))},b=t(27),p=t.n(b).a.create({baseURL:"http://ws.audioscrobbler.com/2.0",params:{api_key:"97867ebe4e4f13cd602fb12a1e347489"}}),d=(t(59),t(60),function(e){var a=e.artist;return r.a.createElement("a",{href:a.url,className:"artist-link"},r.a.createElement("article",{className:"artist-item"},r.a.createElement("img",{className:"artist-item-img",src:a.image[3]["#text"]?a.image[3]["#text"]:"https://via.placeholder.com/64",alt:"Artist img"}),r.a.createElement("div",{className:"artist-item-body"},r.a.createElement("strong",{className:"artirt-item-name"},a.name),r.a.createElement("h6",null,a.listeners," ouvintes")),r.a.createElement("div",{className:"artist-info-icon"},r.a.createElement(o.a,null))))});var f=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1],c=decodeURI(window.location.hash).split("/"),s=c[c.length-1];return Object(n.useEffect)((function(){p.get("?method=artist.search",{params:{artist:s,format:"json"}}).then((function(e){l(e.data.results.artistmatches.artist)})).catch((function(){alert("Erro na busca!")}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement("div",{id:"artist-result",className:"container"},r.a.createElement("div",{className:"artist-block"},r.a.createElement("h2",null,"Resultados encontrados para"," ",r.a.createElement("h1",{className:"artist-name"},s)),r.a.createElement("hr",null),r.a.createElement("main",{className:"artist-list"},t.map((function(e){return r.a.createElement(d,{key:e.name,artist:e})}))))))},N=(t(61),t(62),function(e){var a=e.album;return r.a.createElement("a",{href:a.url,className:"album-link"},r.a.createElement("article",{className:"album-item"},r.a.createElement("img",{className:"album-item-img",src:a.image[3]["#text"]?a.image[3]["#text"]:"https://via.placeholder.com/64",alt:"Album img"}),r.a.createElement("div",{className:"album-item-body"},r.a.createElement("strong",{className:"album-item-name"},a.name),r.a.createElement("h6",null,a.artist)),r.a.createElement("div",{className:"album-info-icon"},r.a.createElement(o.a,null))))});var g=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1],c=decodeURI(window.location.hash).split("/"),s=c[c.length-1];return Object(n.useEffect)((function(){p.get("?method=album.search",{params:{album:s,format:"json"}}).then((function(e){l(e.data.results.albummatches.album)})).catch((function(){alert("Erro na busca!")}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement("div",{id:"album-result",className:"container"},r.a.createElement("div",{className:"album-block"},r.a.createElement("h2",null,"Resultados encontrados para"," ",r.a.createElement("h1",{className:"album-name"},s)),r.a.createElement("hr",null),r.a.createElement("main",{className:"album-list"},t.map((function(e){return r.a.createElement(N,{key:e.url,album:e})}))))))};var v=function(){return r.a.createElement(s.a,null,r.a.createElement(m.a,{path:"/",exact:!0,component:h}),r.a.createElement(m.a,{path:"/search-artist/:artist",component:f}),r.a.createElement(m.a,{path:"/search-album/:album",component:g}),r.a.createElement(m.a,{path:"/search-history",component:E}))};var y=function(){return r.a.createElement(v,null)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.4f764afb.chunk.js.map