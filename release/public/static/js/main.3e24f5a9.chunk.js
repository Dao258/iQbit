(this["webpackJsonpqbittorrent-webui-react-boilerplate"]=this["webpackJsonpqbittorrent-webui-react-boilerplate"]||[]).push([[1],{105:function(e,t,n){var a={"./ion-icon.entry.js":[181,57]};function l(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],l=t[0];return n.e(t[1]).then((function(){return n(l)}))}l.keys=function(){return Object.keys(a)},l.id=105,e.exports=l},128:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(28),r=n.n(o),i=(n(81),n(3)),c=n(22),s=n(2),u=n(5),d=n.n(u),m=n(12),p=n(36),b=n.n(p),_=window.location.href;"/"!==_.substring(_.length-1)&&(_="".concat(_,"/")),console.log(_);var f="".concat(_,"api/v2/"),g=b.a.create({baseURL:f,withCredentials:!0}),h=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,e.abrupt("return",g.get("auth/login",{params:{username:n,password:a}}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.get("sync/maindata",{params:{rid:t}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",e.abrupt("return",g.get("torrents/resume",{params:{hashes:t}}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",e.abrupt("return",g.get("torrents/pause",{params:{hashes:t}}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n,a=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]&&a[1],e.abrupt("return",g.get("torrents/delete",{params:{hashes:t,deleteFiles:n}}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",e.abrupt("return",g.get("torrents/add",{params:{urls:t}}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.get("app/preferences"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},e.abrupt("return",g.get("app/setPreferences",{params:{json:t}}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S={error:{long:"Some error occurred, applies to paused torrents",short:"Error"},missingFiles:{long:"Torrent data files is missing",short:"Files Missing"},uploading:{long:"Torrent is being seeded and data is being transferred",short:"Seeding"},pausedUP:{long:"Torrent is paused and has finished downloading",short:"Paused / Done"},queuedUP:{long:"Queuing is enabled and torrent is queued for upload",short:"Queued For Seeding"},stalledUP:{long:"Torrent is being seeded, but no connections were made",short:"Available for Seeding"},checkingUP:{long:"Torrent has finished downloading and is being checked",short:"Checking Files"},forcedUP:{long:"Torrent is forced to uploading and ignore queue limit",short:"Force Uploading"},allocating:{long:"Torrent is allocating disk space for download",short:"Allocating Space"},downloading:{long:"Torrent is being downloaded and data is being transferred",short:"Downloading"},metaDL:{long:"Torrent has just started downloading and is fetching metadata",short:"Fetching Metadata"},pausedDL:{long:"Torrent is paused and has NOT finished downloading",short:"Paused"},queuedDL:{long:"Queuing is enabled and torrent is queued for download",short:"Queued for Download"},stalledDL:{long:"Torrent is being downloaded, but no connection were made",short:"Stalled"},checkingDL:{long:"Same as checkingUP, but torrent has NOT finished downloading",short:"Checking Files"},forceDL:{long:"Torrent is forced to downloading to ignore queue limit",short:"Force Downloading"},checkingResumeData:{long:"Checking resume data on qBt startup",short:"Checking Resume"},moving:{long:"Torrent is moving to another location",short:"Moving Location"},unknown:{long:"Unknown status",short:"Unknown"}},N=n(26),x=n.n(N),C=n(21),T=n(8),P=function(e){var t=e.item,n=e.hash,o=t.name,r=e.filter,u=t,d=(u||0).progress,m=(u||0).eta,p=(u||"").state,b=(u||0).num_leechs,_=(u||0).num_seeds,f=(u||0).upspeed,g=(u||0).dlspeed,h=Object(a.useState)(!1),E=Object(i.a)(h,2),y=E[0],j=E[1],O=new Date(0);O.setSeconds(m);var k=m?O.toISOString().substr(11,8):0,N=function(){return!!p.includes("UP")},P=function(){switch(p){case"pausedDL":case"pausedUP":return!0;default:return!1}},I=function(){switch(p){case"downloading":case"metaDL":case"queuedDL":case"stalledDL":case"checkingDL":case"forceDL":case"checkingResumeData":case"allocating":return!0;default:return!1}},B={color:I()?"#0076ff":"#b2b2b2",marginRight:5};return Object(a.useEffect)((function(){y&&setTimeout((function(){j(!1)}),1e3)}),[y]),"downloading"===r&&d<1||"complete"===r&&1===d||"all"===r?l.a.createElement("div",{className:"torrentBox"},l.a.createElement("h3",null,o),l.a.createElement("div",{className:"stats"},l.a.createElement("span",null,(100*d).toFixed(0),"%"),864e4!==m?l.a.createElement("span",null,k):l.a.createElement("span",null,S[p].short)),l.a.createElement(s.ProgressBar,{style:{paddingBottom:10},value:100*d,secondaryValue:100}),l.a.createElement("div",{className:"details"},l.a.createElement("div",{className:"statsRow"},l.a.createElement("span",null,l.a.createElement(C.a,{style:B,icon:N()?T.d:T.c}),l.a.createElement("span",{className:"data"},N()?b:_)),l.a.createElement("span",null,l.a.createElement(C.a,{style:B,icon:T.p}),l.a.createElement("span",{className:"data"},P()||N()?"0":x()(N()?f:g,{round:1})+"/s"))),y?l.a.createElement(c.d,{name:"lines"}):l.a.createElement("div",{className:"buttonsRow"},l.a.createElement("button",{type:"button",onClick:function(){e.openAction(n,u)}},l.a.createElement(s.Icon,{size:30,icon:"ion-ios-more"})),l.a.createElement("button",{className:P()?"active":null,type:"button",disabled:N(),onClick:function(){j(!0),w(n)}},l.a.createElement(s.Icon,{size:30,icon:"ion-ios-pause"})),l.a.createElement("button",{className:I()?"active":null,type:"button",disabled:N(),onClick:function(){j(!0),v(n)}},l.a.createElement(s.Icon,{size:30,icon:"ion-ios-play"}))))):null},I=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n,a=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},new Promise((function(e){localStorage.setItem(t,JSON.stringify(n)),setInterval((function(){void 0!==localStorage.getItem(t)&&e()}),100)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=n(40),D=n.n(B),L=function(){return l.a.createElement("div",{className:"LogoHeader"},l.a.createElement("img",{className:"loginImage",alt:"iQbit logo",src:D.a}),l.a.createElement("span",{className:"iqbit"},"iQbit"),l.a.createElement("span",{className:"poweredBy"},"Powered by qBitTorrent"),l.a.createElement("hr",null))},U=function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e})),Object(a.useEffect)((function(){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}),[t])},A=function(e){return l.a.createElement("div",{className:"infoStatsRowWrapper"},l.a.createElement("div",{className:"infoTitleBox"},l.a.createElement("h3",null,e.title)),l.a.createElement("div",{className:"infoStatsRow"},e.data.map((function(e,t){return l.a.createElement("div",{className:"infoStatBox",key:t},l.a.createElement("h4",{className:"infoStat"},e.value),l.a.createElement("div",null,l.a.createElement(C.a,{className:"infoStatIcon",icon:e.icon}),l.a.createElement("span",{className:"infoStatLabel"},e.label)))}))))},R=function(e){var t=e.item,n=t.name,o=e.hash,r=Object(a.useState)(t),c=Object(i.a)(r,2),u=c[0],d=c[1];console.log(t,o),U((function(){E().then((function(e){d(e.data.torrents[o])}))}),1e3);var m=[{value:"".concat(x()(u.downloaded)," / ").concat(x()(u.size)),icon:T.f,label:"Downloaded"},{value:x()(u.downloaded_session),icon:T.l,label:"Downloaded This Session"},{value:x()(u.uploaded),icon:T.t,label:"Uploaded"},{value:x()(u.uploaded_session),icon:T.m,label:"Uploaded This Session"},{value:u.ratio?u.ratio.toFixed(2):0,icon:T.n,label:"Share Ratio"}],p=new Date(0);p.setSeconds(u.eta);var b=p.toISOString().substr(11,8),_=[{value:"".concat(x()(u.dlspeed),"/s"),icon:u.dlspeed>0?T.q:T.r,label:"Download Speed"},{value:"".concat(x()(u.upspeed),"/s"),icon:u.upspeed>0?T.q:T.r,label:"Download Speed"},{value:864e4!==u.eta?b:0,icon:T.o,label:"Estimate Time Left"}],f=[{value:"".concat(u.num_seeds," (").concat(u.num_complete,")"),icon:T.u,label:"Seeds"},{value:"".concat(u.num_leechs," (").concat(u.num_incomplete,")"),icon:T.v,label:"Leechs"},{value:u.save_path,icon:T.j,label:"Save Path"}],g=[{value:S[u.state].short,icon:T.a,label:S[u.state].long}];return l.a.createElement("div",{className:"torrentInfoCol"},l.a.createElement("div",null,l.a.createElement("h2",null,n),l.a.createElement("div",null,l.a.createElement("span",{className:"ProgressAmount"},(100*u.progress).toFixed(1),"%"),l.a.createElement(s.ProgressBar,{value:100*u.progress,secondaryValue:100}))),l.a.createElement(A,{data:g,title:"CurrentState"}),l.a.createElement(A,{data:f,title:"Metadata"}),l.a.createElement(A,{data:_,title:"Speeds"}),l.a.createElement(A,{data:m,title:"Amounts"}))},K=function(e){var t=Object(a.useContext)(oe),n=t.settings,o=t.updateSettings,r=t.installed,c=t.updateModal,u=Object(a.useState)(null),d=Object(i.a)(u,2),m=d[0],p=d[1],b=Object(a.useState)(void 0),_=Object(i.a)(b,2),f=_[0],g=_[1],v=Object(a.useState)(void 0),w=Object(i.a)(v,2),j=w[0],O=w[1],k=Object(a.useState)({open:!1,options:[{label:"More Info",modifier:null,onclick:function(){return!1}},{label:"Remove Torrent",modifier:"destructive",onclick:function(){return!1}}]}),S=Object(i.a)(k,2),N=S[0],x=S[1],C=Object(a.useState)({open:!1,hash:void 0}),T=Object(i.a)(C,2),B=T[0],D=T[1],A=Object(a.useState)([]),K=Object(i.a)(A,2),F=K[0],q=K[1],M=Object(a.useState)({}),W=Object(i.a)(M,2),z=W[0],H=W[1],Q=Object(a.useState)(0),Y=Object(i.a)(Q,2),J=Y[0],V=Y[1];U((function(){n.loggedin&&E(J).then((function(e){var t=e.data;if(t.full_update)H(t.torrents),q(Object.keys(t.torrents));else if(t.torrents){var n=z;Object.keys(t.torrents).forEach((function(e){void 0===n[e]&&(n[e]={});var a=Object.keys(t.torrents[e]);a.forEach((function(a){n[e][a]=t.torrents[e][a]})),console.log(J,a)})),H(n)}V(J+1)}))}),1e3),Object(a.useEffect)((function(){console.log(z)}),[z]);return l.a.createElement(l.a.Fragment,null,n.loggedin?F.map((function(t){return l.a.createElement(P,{item:z[t],fullData:z,key:t,hash:t,filter:e.segment,openAction:function(e,t){return function(e,t){x({open:!0,options:[{label:"Remove Torrent",modifier:"destructive",onclick:function(){return D({open:!0,hash:e})}},{label:"More Info",modifier:null,onclick:function(){return c({open:!0,content:l.a.createElement(R,{item:t,hash:e})})}}]})}(e,t)}})})):null,n.loggedin?null:l.a.createElement("div",{className:"torrentBox login"},l.a.createElement(L,null),l.a.createElement("h2",{className:"centered"},"Welcome To Your WebUI"),l.a.createElement("div",{className:"inputGroup"},l.a.createElement("label",{htmlFor:"username-input"},l.a.createElement("span",null,"Username"),l.a.createElement("input",{id:"username-input",type:"text",onChange:function(e){return g(e.target.value)},placeholder:"Username"})),l.a.createElement("label",{htmlFor:"password-input"},l.a.createElement("span",null,"Password"),l.a.createElement("input",{id:"password-input",type:"password",onChange:function(e){return O(e.target.value)},placeholder:"Password"}))),m?l.a.createElement("p",{className:"feedback"},m):null,l.a.createElement(s.Button,{modifier:"large--quiet",onClick:function(){h({username:f,password:j}).then((function(e){if("Ok."===e.data){var t={username:f,password:j,loggedin:!0};I("user",t).then((function(){o(t)}))}else p("Login Unauthorized.")})).catch((function(){p("Too many login attempts. This IP is temporarily blocked. You can restart qBitTorrent to reset this.")}))}},"Sign In")),l.a.createElement(s.ActionSheet,{className:r?"installed":null,isOpen:N.open,isCancelable:!0,onCancel:function(){return x({open:!1,options:N.options})}},N.options.map((function(e,t){return l.a.createElement(s.ActionSheetButton,{key:t,modifier:e.modifier,onClick:function(){x({open:!1,options:N.options}),e.onclick()}},e.label)})),l.a.createElement(s.ActionSheetButton,{onClick:function(){return x({open:!1,options:N.options})}},"Cancel")),l.a.createElement(s.AlertDialog,{isOpen:B.open,onCancel:function(){return D({open:!1})},cancelable:!0},l.a.createElement("div",{className:"alert-dialog-title"},"Delete Files"),l.a.createElement("div",{className:"alert-dialog-content"},"Would you also like to delete the files downloaded?"),l.a.createElement("div",{className:"alert-dialog-footer"},l.a.createElement(s.AlertDialogButton,{onClick:function(){D({open:!1}),y(B.hash,!0)},className:"danger"},"Yes, Delete Files"),l.a.createElement(s.AlertDialogButton,{onClick:function(){D({open:!1}),y(B.hash,!1)}},"No, Keep Files"),l.a.createElement(s.AlertDialogButton,{onClick:function(){return D({open:!1})}},"Cancel"))))},F=function(){var e=Object(a.useContext)(oe).settings,t=Object(a.useState)("all"),n=Object(i.a)(t,2),o=n[0],r=n[1],s=function(){return e.loggedin?l.a.createElement("div",{className:"segmentPicker"},l.a.createElement(c.b,{mode:"ios",value:o,onIonChange:function(e){setTimeout((function(){r(e.detail.value)}),200)}},l.a.createElement(c.c,{mode:"ios",value:"all"},l.a.createElement(c.a,null,"All Torrents")),l.a.createElement(c.c,{mode:"ios",value:"complete"},l.a.createElement(c.a,null,"Complete")),l.a.createElement(c.c,{mode:"ios",value:"downloading"},l.a.createElement(c.a,null,"Downloading")))):null};return l.a.createElement("div",{className:"torrentsCol"},l.a.createElement(s,null),l.a.createElement(K,{segment:o}))},q=n(70),M=n.n(q),W=n(41),z=n(71),H=n.n(z),Q=function(e){var t=e.item,n=Object(a.useContext)(oe).updateAlert,o=function(e){return l.a.createElement("span",{className:"infoTorrentAttr"},l.a.createElement(C.a,{className:"infoStatIcon",icon:e.icon,style:{marginRight:e.letter?2:null}}),e.letter?l.a.createElement("span",{className:"infoStatIcon"},e.letter):null,l.a.createElement("span",null,e.value))},r=[{value:t.language,icon:T.e,label:"Language"},{value:t.rating,icon:T.k,label:"Ratings"},{value:t.runtime+" Minutes",icon:T.o,label:"Runtime"},{value:t.genres.join(", "),icon:T.g,label:"Genres"}],c=Object(a.useState)([]),u=Object(i.a)(c,2),d=u[0],m=u[1];return l.a.createElement("div",{className:"torrentInfoCol"},l.a.createElement("div",null,l.a.createElement("h2",null,t.title_long),l.a.createElement("hr",null)),l.a.createElement("div",{className:"infoStatsRowWrapper"},l.a.createElement("div",{className:"infoTitleBox"},l.a.createElement("h3",null,"Torrents")),l.a.createElement("div",{className:"infoStatsRow"},t.torrents.map((function(e,a){return l.a.createElement("div",{className:"infoStatBox flex-row w100",key:a},l.a.createElement("div",{className:"attrBox"},l.a.createElement(o,{icon:T.s,value:e.quality}),l.a.createElement(o,{icon:T.h,value:e.type}),l.a.createElement(o,{icon:T.u,value:e.seeds,letter:"S"}),l.a.createElement(o,{icon:T.w,value:e.peers,letter:"P"}),l.a.createElement(o,{icon:T.b,value:e.size})),d.includes(a)?l.a.createElement(C.a,{className:"downloadStarted",icon:T.i}):l.a.createElement(s.Button,{class:"downloadBtn",onClick:function(){return function(e,t,a){j(encodeURI("magnet:?xt=urn:btih:".concat(e.hash,"&dn=").concat(t,"&udp://open.demonii.com:1337/announce&udp://tracker.openbittorrent.com:80&udp://tracker.coppersurfer.tk:6969&udp://glotorrents.pw:6969/announce&udp://tracker.opentrackr.org:1337/announce&udp://torrent.gresille.org:80/announce&udp://p4p.arenabg.com:1337&udp://tracker.leechers-paradise.org:6969"))).then((function(e){"Ok."===e.data?m([].concat(Object(W.a)(d),[a])):n("Could Not Add Torrent","This address could not be added.")}))}(e,t.title_long,a)}},"Download"))})))),l.a.createElement("div",{className:"infoStatsRowWrapper"},l.a.createElement("div",{className:"infoTitleBox"},l.a.createElement("h3",null,"Description")),l.a.createElement("p",null,t.description_full)),l.a.createElement("div",{className:"infoStatsRowWrapper"},l.a.createElement("div",{className:"infoTitleBox"},l.a.createElement("h3",null,"Other Info")),l.a.createElement("div",{className:"infoStatsRow"},r.map((function(e,t){return l.a.createElement("div",{className:"infoStatBox",key:t},l.a.createElement("h4",{className:"infoStat"},e.value),l.a.createElement("div",null,l.a.createElement(C.a,{className:"infoStatIcon",icon:e.icon}),l.a.createElement("span",{className:"infoStatLabel"},e.label)))})))),""===t.yt_trailer_code?null:l.a.createElement("div",{className:"infoStatsRowWrapper"},l.a.createElement("div",{className:"infoTitleBox"},l.a.createElement("h3",null,"Movie Trailer")),l.a.createElement("iframe",{className:"movieTrailer",title:"Movie Trailer",width:"100%",height:"450",src:"https://www.youtube.com/embed/"+t.yt_trailer_code})))},Y=function(e){var t=Object(a.useContext)(oe).updateModal,n=Object(a.useState)(void 0),o=Object(i.a)(n,2),r=o[0],u=o[1],d=Object(a.useState)(!1),m=Object(i.a)(d,2),p=m[0],_=m[1],f=Object(a.useState)([]),g=Object(i.a)(f,2),h=g[0],E=g[1],v=Object(a.useState)(!1),w=Object(i.a)(v,2),y=w[0],j=w[1],O=function(){_(!0),b.a.get("https://yts.mx/api/v2/list_movies.json",{params:{limit:null,page:null,quality:null,minimum_rating:null,query_term:r,genre:null,sorty_by:null,with_rt_ratings:!0}}).then((function(e){var t=e.data.data.movies;E(t),_(!1),j(!0)}))};return l.a.createElement("div",null,l.a.createElement("div",{className:"searchInputRow"},l.a.createElement(s.SearchInput,{className:"searchInput",style:{height:"100%"},placeholder:"Search ".concat(e.category),onChange:function(e){return u(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?O():null}}),p?l.a.createElement(c.d,{name:"lines"}):l.a.createElement(s.Fab,{modifier:"mini",onClick:function(){return O()}},l.a.createElement(s.Icon,{icon:"ion-ios-search",size:25}))),l.a.createElement("div",{className:"searchResults"},y?h?h.map((function(e,n){return l.a.createElement("div",{role:"button",className:"MoviePoster",key:n,style:{backgroundImage:"url(".concat(e.medium_cover_image,"), url(").concat(H.a,")")},onClick:function(){t({open:!0,content:l.a.createElement(Q,{item:e})})}},l.a.createElement("span",null,e.title))})):l.a.createElement("div",null,"No results were found for that search"):null))},J=function(e){var t=Object(a.useState)([{logo:M.a,name:"YTS",categories:["Movies"],component:function(e){return Y(e)}}]),n=Object(i.a)(t,1)[0],o=Object(a.useState)(0),r=Object(i.a)(o,2),c=r[0],s=r[1],u=Object(a.useState)(0),d=Object(i.a)(u,2),m=d[0],p=d[1];return l.a.createElement("div",Object.assign({className:"searchCol"},e),l.a.createElement("h3",null,"Select Search Provider"),l.a.createElement("p",null,"Warning: Be sure to comply with your country's copyright laws when downloading torrents from any of these search engines."),l.a.createElement("div",{className:"providerRow"},n.map((function(e,t){return l.a.createElement("button",{className:t===c?"providerBox active":"providerBox",key:t,onClick:function(){return s(t)}},l.a.createElement("img",{alt:"YTS Logo",src:e.logo}))}))),n[c].categories.length>1?l.a.createElement("div",{className:"categoriesRow"},n[c].categories.map((function(e,t){return l.a.createElement("button",{className:t===m?"categoryBox active":"providerBox",key:t,onClick:function(){return p(t)}},l.a.createElement("p",null,e))}))):null,n[c].component({category:n[c].categories[m]}))},V=n(72),G=n(14),$=function(e){var t=Object(a.useState)({add_trackers:"",add_trackers_enabled:null,alt_dl_limit:null,alt_up_limit:null,alternative_webui_enabled:null,alternative_webui_path:"",announce_ip:"",announce_to_all_tiers:null,announce_to_all_trackers:null,anonymous_mode:null,async_io_threads:null,auto_delete_mode:null,auto_tmm_enabled:null,autorun_enabled:null,autorun_program:"",banned_IPs:"",bittorrent_protocol:null,bypass_auth_subnet_whitelist:"",bypass_auth_subnet_whitelist_enabled:null,bypass_local_auth:null,category_changed_tmm_enabled:null,checking_memory_use:null,create_subfolder_enabled:null,current_interface_address:"",current_network_interface:"",dht:null,disk_cache:null,disk_cache_ttl:null,dl_limit:null,dont_count_slow_torrents:null,dyndns_domain:"",dyndns_enabled:!1,dyndns_password:"",dyndns_service:null,dyndns_username:"",embedded_tracker_port:null,enable_coalesce_read_write:null,enable_embedded_tracker:null,enable_multi_connections_from_same_ip:null,enable_os_cache:null,enable_piece_extent_affinity:null,enable_upload_suggestions:null,encryption:null,export_dir:"",export_dir_fin:"",file_pool_size:null,incomplete_files_ext:null,ip_filter_enabled:null,ip_filter_path:"",ip_filter_trackers:null,limit_lan_peers:null,limit_tcp_overhead:null,limit_utp_rate:null,listen_port:null,locale:"",lsd:null,mail_notification_auth_enabled:null,mail_notification_email:"",mail_notification_enabled:null,mail_notification_password:"",mail_notification_sender:"",mail_notification_smtp:"",mail_notification_ssl_enabled:!1,mail_notification_username:"",max_active_downloads:null,max_active_torrents:null,max_active_uploads:null,max_connec:null,max_connec_per_torrent:null,max_ratio:null,max_ratio_act:null,max_ratio_enabled:null,max_seeding_time:null,max_seeding_time_enabled:null,max_uploads:null,max_uploads_per_torrent:null,outgoing_ports_max:null,outgoing_ports_min:null,pex:null,preallocate_all:null,proxy_auth_enabled:null,proxy_ip:"",proxy_password:"",proxy_peer_connections:null,proxy_port:null,proxy_torrents_only:null,proxy_type:null,proxy_username:"",queueing_enabled:null,random_port:null,recheck_completed_torrents:null,resolve_peer_countries:null,rss_auto_downloading_enabled:null,rss_download_repack_proper_episodes:null,rss_max_articles_per_feed:null,rss_processing_enabled:null,rss_refresh_interval:null,rss_smart_episode_filters:"",save_path:"",save_path_changed_tmm_enabled:!1,save_resume_data_interval:null,scan_dirs:{},schedule_from_hour:null,schedule_from_min:null,schedule_to_hour:null,schedule_to_min:null,scheduler_days:null,scheduler_enabled:!1,send_buffer_low_watermark:null,send_buffer_watermark:null,send_buffer_watermark_factor:null,slow_torrent_dl_rate_threshold:null,slow_torrent_inactive_timer:null,slow_torrent_ul_rate_threshold:null,socket_backlog_size:null,start_paused_enabled:!1,stop_tracker_timeout:null,temp_path:"",temp_path_enabled:null,torrent_changed_tmm_enabled:null,up_limit:null,upload_choking_algorithm:null,upload_slots_behavior:null,upnp:null,use_https:null,utp_tcp_mixed_mode:null,web_ui_address:"",web_ui_ban_duration:null,web_ui_clickjacking_protection_enabled:null,web_ui_csrf_protection_enabled:null,web_ui_custom_http_headers:"",web_ui_domain_list:"",web_ui_host_header_validation_enabled:null,web_ui_https_cert_path:"",web_ui_https_key_path:"",web_ui_max_auth_fail_count:null,web_ui_port:null,web_ui_secure_cookie_enabled:null,web_ui_session_timeout:null,web_ui_upnp:null,web_ui_use_custom_http_headers_enabled:null,web_ui_username:""}),n=Object(i.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)(!0),u=Object(i.a)(c,2),d=u[0],m=u[1],p=Object(a.useContext)(oe),b=p.settings,_=p.initialLogin,f=p.updateAlert;Object(a.useEffect)((function(){d&&O().then((function(e){r(e.data),m(!1)}))}),[_,d]);var g=function(e){return l.a.createElement(s.ListItem,null,l.a.createElement("div",{className:"center"},l.a.createElement("div",{className:"iconBox",style:{backgroundColor:e.color?e.color:"#636363"}},l.a.createElement(C.a,{icon:e.icon})),e.title),l.a.createElement("div",{className:"right"},console.log(o[e.objKey]),l.a.createElement(s.Switch,{checked:o[e.objKey],onChange:function(){k('{"'.concat(e.objKey,'":').concat(!o[e.objKey],"}")).then((function(){setTimeout((function(){var t=Object(V.a)({},o);t[e.objKey]=!o[e.objKey],r(t)}),350)})).catch((function(){m(!0),f("Settings Update Failed","Settings could not be updated")}))}})),"SubFolders")},h=function(e){return l.a.createElement(s.ListItem,{tappable:!0,onClick:function(){return y({open:!0,label:e.title,objKey:e.objKey})}},l.a.createElement("div",{className:"center"},l.a.createElement("div",{className:"iconBox",style:{backgroundColor:e.color?e.color:"#636363"}},l.a.createElement(C.a,{icon:e.icon})),e.title),l.a.createElement("div",{className:"right"},l.a.createElement(C.a,{icon:G.b})),"SubFolders")},E=Object(a.useState)({open:!1,label:"",objKey:""}),v=Object(i.a)(E,2),w=v[0],y=v[1],j=Object(a.useRef)();return b.loggedin?l.a.createElement("div",{className:"settingsCol"},l.a.createElement(s.List,{modifier:"inset"},l.a.createElement(s.ListHeader,null,"Downloads"),l.a.createElement(g,{title:"Create SubFolders",icon:G.f,objKey:"create_subfolder_enabled",color:"#006ce2"}),l.a.createElement(g,{title:"Start Torrent Paused",icon:G.h,objKey:"start_paused_enabled",color:"#bf0000"})),l.a.createElement(s.List,{modifier:"inset"},l.a.createElement(s.ListHeader,null,"Paths"),l.a.createElement(h,{title:"Default Save Path",icon:G.d,objKey:"save_path",color:"#2ca700"}),l.a.createElement(g,{title:"Temp Folder",icon:G.e,objKey:"temp_path_enabled",color:"#5b00b6"}),l.a.createElement(h,{title:"Default Save Path",icon:G.d,objKey:"save_path",color:"#ea9d00"})),l.a.createElement(s.List,{modifier:"inset"},l.a.createElement(s.ListHeader,null,"Proxy"),l.a.createElement(h,{title:"Host",icon:G.i,objKey:"proxy_ip",color:"#00a799"}),l.a.createElement(h,{title:"Port",icon:G.c,objKey:"proxy_port",color:"#b600a4"}),l.a.createElement(g,{title:"Proxy Peer Connections",icon:G.o,objKey:"proxy_peer_connections",color:"#ea9d00"}),l.a.createElement(g,{title:"Proxy Auth Enabled",icon:G.m,objKey:"proxy_auth_enabled",color:"#b7ea00"}),l.a.createElement(h,{title:"Proxy Username",icon:G.n,objKey:"proxy_username",color:"#ea5200"}),l.a.createElement(h,{title:"Proxy Password",icon:G.g,objKey:"proxy_password",color:"#ea5200"})),l.a.createElement(s.List,{modifier:"inset"},l.a.createElement(s.ListHeader,null,"WebUI"),l.a.createElement(g,{title:"Custom WebUI Enabled",icon:G.k,objKey:"alternative_webui_enabled",color:"#19a700"}),l.a.createElement(h,{title:"WebUI Path",icon:G.a,objKey:"alternative_webui_path",color:"#0086a7"}),l.a.createElement(h,{title:"WebUI IP Address",icon:G.p,objKey:"web_ui_address",color:"#7a00a7"}),l.a.createElement(h,{title:"WebUI Port",icon:G.c,objKey:"web_ui_port",color:"#b60049"}),l.a.createElement(g,{title:"WebUI UPnP Enabled",icon:G.j,objKey:"web_ui_upnp",color:"#ea9d00"}),l.a.createElement(h,{title:"WebUI Username",icon:G.l,objKey:"web_ui_username",color:"#0069ea"}),l.a.createElement(h,{title:"WebUI Password",icon:G.g,objKey:"web_ui_password",color:"#0069ea"})),l.a.createElement(s.Button,{className:"danger",modifier:"large--quiet",onClick:function(){window.location.reload(),I("user",{})}},"Log Out"),l.a.createElement(s.AlertDialog,{className:"settingsAlert",isOpen:w.open,onCancel:function(){return y({open:!1})},modifier:"rowfooter",cancelable:!0},l.a.createElement("div",{className:"alert-dialog-title"},w.label),l.a.createElement("div",{className:"alert-dialog-content"},l.a.createElement("input",{ref:j,defaultValue:o[w.objKey],onChange:function(){return console.log(j)},placeholder:"Enter "+w.label})),l.a.createElement("div",{className:"alert-dialog-footer"},l.a.createElement(s.Button,{onClick:function(){return y({open:!1})},className:"alert-dialog-button"},"Cancel"),l.a.createElement(s.Button,{onClick:function(){k('{"'.concat(e.objKey,'":"').concat(j.current.value,'"}')).then((function(){setTimeout((function(){m(!0)}),300)}))},className:"alert-dialog-button"},"Save")))):l.a.createElement("div",{className:"settingsCol"},l.a.createElement("h2",{style:{textAlign:"center"}},"Settings require login."))},X=function(){var e=Object(a.useState)({open:!1,target:null}),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(a.useContext)(oe),c=r.bigScreen,u=r.updateTorrentList,d=r.updateModal,m=r.updateAlert,p=l.a.createRef(),b=Object(a.useState)(null),_=Object(i.a)(b,2),f=_[0],g=_[1],h=function(){j(f).then((function(e){"Ok."===e.data?u():m("Could Not Add Torrent","This address could not be added.")})).catch((function(){m("Could Not Add Torrent","This address could not be added.")})).finally((function(){o({open:!1,target:n.target})}))},E=function(){return l.a.createElement("div",{className:"modalAddTorrent"},l.a.createElement("h2",null,"Enter Torrent URL"),l.a.createElement("textarea",{onChange:function(e){return g(e.target.value)},placeholder:"URLs or Magnet links",rows:10}),l.a.createElement(s.Button,{modifier:"large--quiet",onClick:function(){return h()}},"Add Torrent"))};return l.a.createElement("div",null,l.a.createElement(s.ToolbarButton,{ref:p,onClick:function(){c?o({open:!0,target:p.current}):d({open:!0,content:l.a.createElement(E,null),top:window.innerHeight/2})}},l.a.createElement(s.Icon,{size:35,icon:"ion-ios-add"})),l.a.createElement(s.Popover,{isOpen:n.open,onCancel:function(){return o({open:!1,target:n.target})},getTarget:function(){return n.target}},l.a.createElement("p",null,"Enter Torrent URL"),l.a.createElement("textarea",{onChange:function(e){return g(e.target.value)},placeholder:"URLs or Magnet links",rows:10}),l.a.createElement(s.Button,{modifier:"large--quiet",onClick:function(){return h()}},"Add Torrent")))},Z=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],o=t[1],r=["Your Torrents","Search","Settings"],c=Object(a.useContext)(oe),u=c.settings,d=c.bigScreen;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.Toolbar,null,l.a.createElement("div",{className:"left"},l.a.createElement("h1",null,r[n])),l.a.createElement("div",{className:"right"},u.loggedin&&!d&&0===n?l.a.createElement(X,null):null)),l.a.createElement(s.Tabbar,{className:"tabWrapper",animation:"none",position:"bottom",onPreChange:function(e){var t=e.index;return o(t)},index:n,renderTabs:function(e){return[{content:l.a.createElement(s.Page,null,l.a.createElement(F,{title:r[0],active:0===e})),tab:l.a.createElement(s.Tab,{label:"Torrents",icon:"ion-ios-download"})},{content:l.a.createElement(s.Page,null,l.a.createElement(J,{title:r[1],active:1===e})),tab:l.a.createElement(s.Tab,{label:"Search",icon:"ion-ios-search"})},{content:l.a.createElement(s.Page,null,l.a.createElement($,{title:r[2],active:1===e})),tab:l.a.createElement(s.Tab,{label:"Settings",icon:"ion-ios-cog"})}]}}))},ee=function(){var e=Object(a.useContext)(oe),t=e.settings,n=e.updateModal;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.Toolbar,null,l.a.createElement("div",{className:"left tabletHeader"},l.a.createElement("div",null,t.loggedin?l.a.createElement("img",{className:"loginImage-small",alt:"iQbit Logo",src:D.a}):null,l.a.createElement("h1",null,"iQbit")),t.loggedin?l.a.createElement(X,null):null),l.a.createElement("div",{className:"right"},l.a.createElement(s.ToolbarButton,{onClick:function(){return n({open:!0,content:l.a.createElement($,null)})}},l.a.createElement(s.Icon,{size:35,icon:"ion-ios-cog"})))),l.a.createElement(s.Page,null,l.a.createElement("div",{className:"tabletView"},l.a.createElement(F,null),l.a.createElement(J,null))))},te=(n(126),n(127),n(128),n(73)),ne=n.n(te);var ae=function(){var e=Object(a.useState)({width:void 0,height:void 0}),t=Object(i.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){function e(){l({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n},le=function(e){var t=ae(),n=e.top||100,o=e.left||0,r=Object(a.useState)(!1),c=Object(i.a)(r,2),s=c[0],u=c[1];Object(a.useEffect)((function(){e.open?u(!0):u(!1)}),[e]);var d={x:0,y:t.height},m={y:n,x:o};return l.a.createElement("div",{className:s?"BottomSheet open":"BottomSheet"},l.a.createElement(ne.a,{axis:"y",handle:".handleArea",defaultPosition:d,position:s?m:d,children:l.a.createElement("div",{className:"modal"},l.a.createElement("span",{className:"handleArea"},l.a.createElement("span",{className:"handle"})),e.children),bounds:{top:n},onStop:function(n){n.pageY>t.height-.25*t.height&&(u(!1),setTimeout((function(){e.onDismiss()}),400))}}))},oe=Object(a.createContext)(null),re=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return JSON.parse(localStorage.getItem(e))}("user"),t=e;null===e&&I("user",t={loggedin:!1,username:null,password:null});var n=window.innerWidth,o=Object(a.useState)(t),r=Object(i.a)(o,2),c=r[0],u=r[1],d=Object(a.useState)(n>768),m=Object(i.a)(d,1)[0],p=Object(a.useState)(window.matchMedia("(display-mode: standalone)").matches),b=Object(i.a)(p,1)[0],_=Object(a.useState)({open:!1,content:null}),f=Object(i.a)(_,2),g=f[0],E=f[1];Object(a.useEffect)((function(){e.loggedin&&h({username:e.username,password:e.password})}),[e.loggedin,e.password,e.username]);var v=Object(a.useState)({open:!1,title:null,message:null}),w=Object(i.a)(v,2),y=w[0],j=w[1],O=function(e){return l.a.createElement(s.AlertDialog,{isOpen:e.open,onCancel:function(){return j({open:!1,title:y.title,message:y.message})},cancelable:!0},l.a.createElement("div",{className:"alert-dialog-title"},e.title),l.a.createElement("div",{className:"alert-dialog-content"},e.message),l.a.createElement("div",{className:"alert-dialog-footer"},l.a.createElement(s.Button,{onClick:function(){return j({open:!1,title:y.title,message:y.message})},className:"alert-dialog-button"},"Ok")))};return l.a.createElement(oe.Provider,{value:{settings:c,updateSettings:function(e){u(e)},bigScreen:m,modal:g,updateModal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{open:!0,content:l.a.createElement("span",null)};E(e)},installed:b,updateAlert:function(e,t){j({open:!0,title:e,message:t})}}},l.a.createElement("div",{className:(c.loggedin?"loggedin ":"login")+(b?"installed":"")},m?l.a.createElement(ee,null):l.a.createElement(Z,null),l.a.createElement(le,{open:g.open,onDismiss:function(){return E({open:!1})},top:g.top?g.top:m?25:85,children:g.content}),l.a.createElement(O,{open:y.open,title:y.title,message:y.message})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,t,n){e.exports=n.p+"static/media/logo_round.651d9c54.png"},70:function(e,t,n){e.exports=n.p+"static/media/logo-YTS.fdd85bfb.svg"},71:function(e,t,n){e.exports=n.p+"static/media/imagemissing.960d2bd1.png"},76:function(e,t,n){e.exports=n(133)},81:function(e,t,n){},83:function(e,t,n){var a={"./ion-action-sheet.entry.js":[135,5],"./ion-alert.entry.js":[136,6],"./ion-app_8.entry.js":[137,7],"./ion-avatar_3.entry.js":[138,18],"./ion-back-button.entry.js":[139,19],"./ion-backdrop.entry.js":[140,43],"./ion-button_2.entry.js":[141,20],"./ion-card_5.entry.js":[142,21],"./ion-checkbox.entry.js":[143,22],"./ion-chip.entry.js":[144,23],"./ion-col_3.entry.js":[145,44],"./ion-datetime_3.entry.js":[146,10],"./ion-fab_3.entry.js":[147,24],"./ion-img.entry.js":[148,45],"./ion-infinite-scroll_2.entry.js":[149,46],"./ion-input.entry.js":[150,25],"./ion-item-option_3.entry.js":[151,26],"./ion-item_8.entry.js":[152,27],"./ion-loading.entry.js":[153,28],"./ion-menu_3.entry.js":[154,29],"./ion-modal.entry.js":[155,8],"./ion-nav_2.entry.js":[156,15],"./ion-popover.entry.js":[157,9],"./ion-progress-bar.entry.js":[158,30],"./ion-radio_2.entry.js":[159,31],"./ion-range.entry.js":[160,32],"./ion-refresher_2.entry.js":[161,11],"./ion-reorder_2.entry.js":[162,17],"./ion-ripple-effect.entry.js":[163,47],"./ion-route_4.entry.js":[164,33],"./ion-searchbar.entry.js":[165,34],"./ion-segment_2.entry.js":[166,35],"./ion-select_3.entry.js":[167,36],"./ion-slide_2.entry.js":[168,48],"./ion-spinner.entry.js":[169,13],"./ion-split-pane.entry.js":[170,49],"./ion-tab-bar_2.entry.js":[171,37],"./ion-tab_2.entry.js":[172,16],"./ion-text.entry.js":[173,38],"./ion-textarea.entry.js":[174,39],"./ion-toast.entry.js":[175,40],"./ion-toggle.entry.js":[176,12],"./ion-virtual-scroll.entry.js":[177,50]};function l(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],l=t[0];return n.e(t[1]).then((function(){return n(l)}))}l.keys=function(){return Object.keys(a)},l.id=83,e.exports=l}},[[76,3,4]]]);
//# sourceMappingURL=main.3e24f5a9.chunk.js.map