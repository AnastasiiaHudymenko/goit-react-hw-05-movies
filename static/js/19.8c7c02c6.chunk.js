"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[19],{1019:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var r,a,i,c,s,o,u,l,p,d=t(5861),h=t(9439),v=t(7757),f=t.n(v),x=t(1087),g=t(7689),m=t(2791),_=t(5243),w=t(8790),b=t(168),Z=t(6444),j=(0,Z.ZP)(x.OL)(r||(r=(0,b.Z)(["\n color: black;\n \n   \n}\n  &.active {\n    \n     color: orange;\n  }\n\n\n"]))),k=Z.ZP.div(a||(a=(0,b.Z)(["\n  display: flex;\n  gap: 30px;\n\n  max-width: 1280px;\n  padding-left: 15px;\n  padding-right: 15px;\n"]))),S=Z.ZP.div(i||(i=(0,b.Z)(["\n  width: 50%;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n"]))),M=Z.ZP.ul(c||(c=(0,b.Z)(["\n  display: flex;\n  gap: 8px;\n"]))),y=Z.ZP.button(s||(s=(0,b.Z)(["\n  border: none;\n  padding: 12px;\n  width: 116px;\n  border-radius: 4px;\n  margin-top: 13px;\n  background-color: orange;\n  color: white;\n  font-weight: 700;\n  font-size: 18px;\n  margin-bottom: 10px;\n  margin-left: 20px;\n"]))),E=Z.ZP.ul(o||(o=(0,b.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 10px 0;\n  margin-bottom: 10px;\n"]))),U=Z.ZP.li(u||(u=(0,b.Z)(["\n  font-size: 20px;\n  text-transform: uppercase;\n  font-weight: 500;\n"]))),A=Z.ZP.div(l||(l=(0,b.Z)(["\n   max-width: 1280px;\n    padding-left: 15px;\n    padding-right: 15px;\n\n    margin: 0 auto;\n}\n"]))),P=Z.ZP.div(p||(p=(0,b.Z)(["\n  box-shadow: 11px 9px 17px -9px rgba(0, 0, 0, 0.75);\n"]))),R=t(184),L=function(){var e,n,t=(0,g.UO)().movieId,r=(0,m.useState)([]),a=(0,h.Z)(r,2),i=a[0],c=a[1],s=(0,g.TH)(),o=new w.Z,u=null!==(e=null===(n=s.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";(0,m.useEffect)((function(){l(t)}),[]);var l=function(){var e=(0,d.Z)(f().mark((function e(n){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.getMovieDetalis(n);case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),p=i.title,v=i.image,b=i.overview,Z=i.genres,L=i.userScore;return(0,R.jsxs)("main",{children:[(0,R.jsxs)(k,{children:[v&&(0,R.jsx)("img",{width:250,src:v,alt:p}),(0,R.jsxs)(S,{children:[(0,R.jsx)("h1",{children:p}),(0,R.jsxs)("p",{children:["User score: ",(10*L).toFixed(0),"%"]}),(0,R.jsx)("h2",{children:"Overview"}),(0,R.jsx)("p",{children:b}),(0,R.jsx)("h2",{children:"Genres: "}),(0,R.jsx)(M,{children:Z&&Z.map((function(e){var n=e.name,t=e.id;return(0,R.jsx)("li",{children:n},t)}))})]})]}),(0,R.jsx)(y,{children:(0,R.jsx)(x.rU,{to:u,children:"Go back "})}),(0,R.jsx)(P,{children:(0,R.jsx)(A,{children:(0,R.jsxs)(E,{children:[(0,R.jsx)(U,{children:(0,R.jsx)(j,{to:"cast",state:s.state,children:"See the cast"})}),(0,R.jsx)(U,{children:(0,R.jsx)(j,{to:"reviews",state:s.state,children:"Read reviews"})})]})})}),(0,R.jsx)(m.Suspense,{fallback:(0,R.jsx)("div",{children:(0,R.jsx)(_.VF,{ariaLabel:"mutating-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"}})}),children:(0,R.jsx)(g.j3,{})})]})}},8790:function(e,n,t){var r=t(5861),a=t(3144),i=t(5671),c=t(7757),s=t.n(c),o=t(1243),u=(0,a.Z)((function e(){var n=this;(0,i.Z)(this,e),this.API_KEY="8dbbaf50b58201a2d3381e6f92e0ca1f",this.BASE_URL="https://api.themoviedb.org/3/",this.BASE_URL_IMG="https://image.tmdb.org/t/p/w500",this.getTrendingMovies=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(n.BASE_URL,"trending/movie/day?api_key=").concat(n.API_KEY));case 3:return t=e.sent,e.abrupt("return",n._transformTrendingMovies(t.data.results));case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),this.getMovieDetalis=function(){var e=(0,r.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(n.BASE_URL,"movie/").concat(t,"?api_key=").concat(n.API_KEY,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n._transformMovieDetalis(r.data));case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),this.getCastOrReviewsMovie=function(){var e=(0,r.Z)(s().mark((function e(t,r){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(n.BASE_URL,"movie/").concat(t,"/").concat(r,"?api_key=").concat(n.API_KEY,"&language=en-US"));case 3:if(a=e.sent,"credits"!==r){e.next=6;break}return e.abrupt("return",n._transformCastMovie(a.data.cast));case 6:if("reviews"!==r){e.next=12;break}if(a.data.results.length){e.next=11;break}return e.abrupt("return",null);case 11:return e.abrupt("return",n._transformReviewsMovie(a.data.results));case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n,t){return e.apply(this,arguments)}}(),this.getMovieSearch=function(){var e=(0,r.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(n.BASE_URL,"search/movie?api_key=").concat(n.API_KEY,"&language=en-US&include_adult=false&query=").concat(t));case 3:return r=e.sent,e.abrupt("return",n._transformMovie(r.data.results));case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),this._transformMovie=function(e){return e.map((function(e){var t=e.id,r=e.title,a=e.poster_path;return a?{id:t,title:r,image:"".concat(n.BASE_URL_IMG).concat(a)}:{title:r,image:null,id:t}}))},this._transformMovieDetalis=function(e){var t=e.title,r=e.poster_path,a=e.overview,i=e.genres,c=e.vote_average;return r?{title:t,image:"".concat(n.BASE_URL_IMG).concat(r),overview:a,genres:i,userScore:c}:{title:t,image:null,overview:a,genres:i,userScore:c}},this._transformCastMovie=function(e){return e.map((function(e){var t=e.character,r=e.name,a=e.profile_path,i=e.id;return a?{character:t,name:r,id:i,image:"".concat(n.BASE_URL_IMG).concat(a)}:{character:t,name:r,id:i,image:null}}))},this._transformReviewsMovie=function(e){return e.map((function(e){return{author:e.author,id:e.id,content:e.content}}))},this._transformTrendingMovies=function(e){return e.map((function(e){var t=e.id,r=e.title,a=e.poster_path;return{id:t,title:r,images:"".concat(n.BASE_URL_IMG).concat(a)}}))}}));n.Z=u}}]);
//# sourceMappingURL=19.8c7c02c6.chunk.js.map