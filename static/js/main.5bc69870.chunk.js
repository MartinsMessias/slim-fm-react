(this["webpackJsonplast_fm-react"]=this["webpackJsonplast_fm-react"]||[]).push([[0],{28:function(e,a,t){e.exports=t(63)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},41:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),m=(t(33),t(7)),s=t(1),i=t(10);t(34),t(35);var o=function(){return l.a.createElement("header",null,l.a.createElement("h1",{className:"site-title"},"SlimFM"),l.a.createElement("nav",null,l.a.createElement(m.b,{to:"/",className:"menu-item"},"Pesquisar"),l.a.createElement(m.b,{to:"/search-history",className:"menu-item"},"Hist\xf3rico")))},u=t(8);var E=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,null),l.a.createElement("div",{className:"center"},l.a.createElement("p",{className:"title"},"Digite o nome de um artista ou de um \xe1lbum para pesquisar"),l.a.createElement("input",{name:"artist",type:"text",className:"search-bar-input",placeholder:"Ex: Michael Jackson",autoComplete:"off",onChange:function(e){r(e.target.value)}}),l.a.createElement("div",{className:"search-buttons"},l.a.createElement(m.b,{className:"button-primary",to:"search-artist/".concat(t)},l.a.createElement("span",{className:"button-primary-text"},"Pesquisar artista"),l.a.createElement("span",{className:"button-primary-child"},l.a.createElement(u.b,null))),l.a.createElement(m.b,{className:"button-primary",to:"search-album/".concat(t)},l.a.createElement("span",{className:"button-primary-text"},"Pesquisar \xe1lbum"),l.a.createElement("span",{className:"button-primary-child"},l.a.createElement(u.b,null))))))};t(41);var h=function(){var e=Object.entries(localStorage),a=Object(s.e)();return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,null),l.a.createElement("div",{id:"search-history-list",className:"container"},l.a.createElement("div",{className:"search-history-results"},l.a.createElement("div",{className:"search-history-header"},l.a.createElement("h1",{className:"search-history-title"},"Seu hist\xf3rico de pesquisas"),l.a.createElement("button",{className:"search-history-clear-button",onClick:function(){localStorage.clear(),a.push("/search-history")}},"Limpar hist\xf3rico")),l.a.createElement("hr",null),l.a.createElement("ul",{className:"history-list"},e.map((function(e){return console.log(e),l.a.createElement("li",null,new Date(parseInt(e[0])).toLocaleDateString("pt-BR")," -"," ",new Date(parseInt(e[0])).toLocaleTimeString("pt-BR")," -"," ",e[1])}))))))},b=t(27),p=t.n(b),d=Object({NODE_ENV:"production",PUBLIC_URL:"/slim-fm-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_LAST_FM_API_KEY,f=p.a.create({baseURL:"http://ws.audioscrobbler.com/2.0",params:{api_key:d}}),N=(t(59),t(60),function(e){var a=e.artist;return l.a.createElement("a",{href:a.url,className:"artist-link"},l.a.createElement("article",{className:"artist-item"},l.a.createElement("img",{className:"artist-item-img",src:a.image[3]["#text"]?a.image[3]["#text"]:"https://via.placeholder.com/64",alt:"Artist img"}),l.a.createElement("div",{className:"artist-item-body"},l.a.createElement("strong",{className:"artirt-item-name"},a.name),l.a.createElement("h6",null,a.listeners," ouvintes")),l.a.createElement("div",{className:"artist-info-icon"},l.a.createElement(u.a,null))))});var g=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],c=decodeURI(window.location.pathname).split("/"),m=c[c.length-1],s=(new Date).getTime();return Object(n.useEffect)((function(){f.get("?method=artist.search",{params:{artist:m,format:"json"}}).then((function(e){r(e.data.results.artistmatches.artist),localStorage.setItem(s.toString(),m)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(o,null),l.a.createElement("div",{id:"artist-result",className:"container"},l.a.createElement("div",{className:"artist-block"},l.a.createElement("h2",null,"Resultados encontrados para"," ",l.a.createElement("h1",{className:"artist-name"},m)),l.a.createElement("hr",null),l.a.createElement("main",{className:"artist-list"},t.map((function(e){return l.a.createElement(N,{key:e.name,artist:e})}))))))},v=(t(61),t(62),function(e){var a=e.album;return l.a.createElement("a",{href:a.url,className:"album-link"},l.a.createElement("article",{className:"album-item"},l.a.createElement("img",{className:"album-item-img",src:a.image[3]["#text"]?a.image[3]["#text"]:"https://via.placeholder.com/64",alt:"Album img"}),l.a.createElement("div",{className:"album-item-body"},l.a.createElement("strong",{className:"album-item-name"},a.name),l.a.createElement("h6",null,a.artist)),l.a.createElement("div",{className:"album-info-icon"},l.a.createElement(u.a,null))))});var y=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],c=decodeURI(window.location.pathname).split("/"),m=c[c.length-1],s=(new Date).getTime();return Object(n.useEffect)((function(){f.get("?method=album.search",{params:{album:m,format:"json"}}).then((function(e){r(e.data.results.albummatches.album),localStorage.setItem(s.toString(),"\xc1lbum ".concat(m))}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(o,null),l.a.createElement("div",{id:"album-result",className:"container"},l.a.createElement("div",{className:"album-block"},l.a.createElement("h2",null,"Resultados encontrados para"," ",l.a.createElement("h1",{className:"album-name"},m)),l.a.createElement("hr",null),l.a.createElement("main",{className:"album-list"},t.map((function(e){return l.a.createElement(v,{key:e.name,album:e})}))))))};var S=function(){return l.a.createElement(m.a,null,l.a.createElement(s.a,{path:"/",exact:!0,component:E}),l.a.createElement(s.a,{path:"/search-artist/:artist",exact:!0,component:g}),l.a.createElement(s.a,{path:"/search-album/:album",exact:!0,component:y}),l.a.createElement(s.a,{path:"/search-history",component:h}))};var O=function(){return l.a.createElement(S,null)};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.5bc69870.chunk.js.map