(this.webpackJsonpreact_study_movie_app=this.webpackJsonpreact_study_movie_app||[]).push([[0],{56:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(29),r=a.n(c),i=a(8),o=a(2),l=a(17),j=a.n(l),m=a(30),u=a(11),d=a(12),b=a(14),v=a(13),h=a(31),p=a.n(h),O=(a(56),a(1));var x=function(e){var t=e.id,a=e.year,n=e.title,s=e.summary,c=e.poster,r=e.genres;return Object(O.jsx)("div",{className:"movie",children:Object(O.jsxs)(i.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:s,poster:c,genres:r}},children:[Object(O.jsx)("img",{src:c,alt:n,title:n}),Object(O.jsxs)("div",{className:"movie__data",children:[Object(O.jsx)("h3",{className:"movie__title",children:n}),Object(O.jsx)("h5",{className:"movie__year",children:a}),Object(O.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(O.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie__summary",children:[s.slice(0,180),"..."]})]})]})})},f=(a(63),function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(j.a.mark((function t(){var a,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(O.jsx)("div",{className:"movies",children:a.map((function(e){return Object(O.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),a}(s.a.Component));a(64);var _=function(e){return console.log(e),Object(O.jsxs)("div",{className:"about__container",children:[Object(O.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(O.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},y=function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(O.jsxs)("span",{children:[" ",e.state.title]}):null}}]),a}(s.a.Component);a(65);var g=function(){return Object(O.jsx)("nav",{className:"navbar",children:Object(O.jsxs)("ul",{className:"navbar_menu",children:[Object(O.jsx)(i.b,{to:"/",className:"nav_links",children:"Home"}),Object(O.jsx)(i.b,{to:"/about",className:"nav_links",children:"About"})]})})};a(66);var N=function(){return Object(O.jsxs)(i.a,{children:[Object(O.jsx)(g,{}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(O.jsx)(o.a,{path:"/about",component:_}),Object(O.jsx)(o.a,{path:"/movie/:id",component:y})]})};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.e8bf6f1a.chunk.js.map