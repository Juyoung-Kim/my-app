(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,a,t){e.exports=t(44)},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(12),i=t.n(s),c=t(2),m=t.n(c),o=t(13),l=t(14),u=t(15),v=t(18),d=t(17),p=t(16),y=t.n(p);t(42);var g=function(e){e.id;var a=e.year,t=e.title,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"}," ",t," "),r.a.createElement("h5",{className:"movie__year"}," ",a," "),r.a.createElement("ul",{className:"genres"},i.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,140),"...")))},E=(t(43),function(e){Object(v.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(o.a)(m.a.mark((function a(){var t,n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=a.sent,n=t.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1cb224b4.chunk.js.map