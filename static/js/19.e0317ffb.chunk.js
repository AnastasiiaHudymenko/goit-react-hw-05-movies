"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[19],{1019:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r,a,i,c,s,o,u,p,l,d=n(5861),h=n(9439),f=n(7757),v=n.n(f),x=n(1087),g=n(7689),m=n(2791),_=n(5243),w=n(8790),b=n(168),Z=n(6444),j=(0,Z.ZP)(x.OL)(r||(r=(0,b.Z)(["\n color: black;\n \n   \n}\n  &.active {\n    \n     color: orange;\n  }\n\n\n"]))),k=Z.ZP.div(a||(a=(0,b.Z)(["\n  display: flex;\n  gap: 30px;\n\n  max-width: 1280px;\n  padding-left: 15px;\n  padding-right: 15px;\n"]))),S=Z.ZP.div(i||(i=(0,b.Z)(["\n  width: 50%;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n"]))),M=Z.ZP.ul(c||(c=(0,b.Z)(["\n  display: flex;\n  gap: 8px;\n"]))),y=Z.ZP.button(s||(s=(0,b.Z)(["\n  border: none;\n  padding: 12px;\n  width: 116px;\n  border-radius: 4px;\n  margin-top: 13px;\n  background-color: orange;\n  color: white;\n  font-weight: 700;\n  font-size: 18px;\n  margin-bottom: 10px;\n  margin-left: 20px;\n"]))),E=Z.ZP.ul(o||(o=(0,b.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 10px 0;\n  margin-bottom: 10px;\n"]))),U=Z.ZP.li(u||(u=(0,b.Z)(["\n  font-size: 20px;\n  text-transform: uppercase;\n  font-weight: 500;\n"]))),A=Z.ZP.div(p||(p=(0,b.Z)(["\n   max-width: 1280px;\n    padding-left: 15px;\n    padding-right: 15px;\n\n    margin: 0 auto;\n}\n"]))),P=Z.ZP.div(l||(l=(0,b.Z)(["\n  box-shadow: 11px 9px 17px -9px rgba(0, 0, 0, 0.75);\n"]))),R=n(184);function L(e){if(e)return e.toString().slice(0,2)}var I=function(){var e=(0,g.UO)().movieId,t=(0,m.useState)([]),n=(0,h.Z)(t,2),r=n[0],a=n[1],i=(0,g.TH)(),c=new w.Z;(0,m.useEffect)((function(){s(e)}),[]);var s=function(){var e=(0,d.Z)(v().mark((function e(t){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.getMovieDetalis(t);case 3:n=e.sent,a(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),o=r.title,u=r.image,p=r.overview,l=r.genres,f=r.userScore;return(0,R.jsxs)("main",{children:[(0,R.jsxs)(k,{children:[u&&(0,R.jsx)("img",{width:250,src:u,alt:o}),(0,R.jsxs)(S,{children:[(0,R.jsx)("h1",{children:o}),(0,R.jsxs)("p",{children:["User score: ",L(f),"%"]}),(0,R.jsx)("h2",{children:"Overview"}),(0,R.jsx)("p",{children:p}),(0,R.jsx)("h2",{children:"Genres: "}),(0,R.jsx)(M,{children:l&&l.map((function(e){var t=e.name,n=e.id;return(0,R.jsx)("li",{children:t},n)}))})]})]}),(0,R.jsx)(y,{children:(0,R.jsxs)(x.rU,{to:i.state.from,state:{from:i},children:["Go back"," "]})}),(0,R.jsx)(P,{children:(0,R.jsx)(A,{children:(0,R.jsxs)(E,{children:[(0,R.jsx)(U,{children:(0,R.jsx)(j,{to:"cast",state:i.state,children:"Read about our cast"})}),(0,R.jsx)(U,{children:(0,R.jsx)(j,{to:"reviews",state:i.state,children:"Get to know the reviews"})})]})})}),(0,R.jsx)(m.Suspense,{fallback:(0,R.jsx)("div",{children:(0,R.jsx)(_.VF,{ariaLabel:"mutating-dots-loading",wrapperStyle:{display:"flex",justifyContent:"center"}})}),children:(0,R.jsx)(g.j3,{})})]})}},8790:function(e,t,n){var r=n(5861),a=n(3144),i=n(5671),c=n(7757),s=n.n(c),o=n(1243),u=(0,a.Z)((function e(){var t=this;(0,i.Z)(this,e),this.API_KEY="8dbbaf50b58201a2d3381e6f92e0ca1f",this.BASE_URL="https://api.themoviedb.org/3/",this.BASE_URL_IMG="https://image.tmdb.org/t/p/w500",this.getTrendingMovies=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(t.BASE_URL,"trending/movie/day?api_key=").concat(t.API_KEY));case 3:return n=e.sent,e.abrupt("return",t._transformTrendingMovies(n.data.results));case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),this.getMovieDetalis=function(){var e=(0,r.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(t.BASE_URL,"movie/").concat(n,"?api_key=").concat(t.API_KEY,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",t._transformMovieDetalis(r.data));case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),this.getCastOrReviewsMovie=function(){var e=(0,r.Z)(s().mark((function e(n,r){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(t.BASE_URL,"movie/").concat(n,"/").concat(r,"?api_key=").concat(t.API_KEY,"&language=en-US"));case 3:if(a=e.sent,"credits"!==r){e.next=6;break}return e.abrupt("return",t._transformCastMovie(a.data.cast));case 6:if("reviews"!==r){e.next=12;break}if(a.data.results.length){e.next=11;break}return e.abrupt("return",null);case 11:return e.abrupt("return",t._transformReviewsMovie(a.data.results));case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n){return e.apply(this,arguments)}}(),this.getMovieSearch=function(){var e=(0,r.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(t.BASE_URL,"search/movie?api_key=").concat(t.API_KEY,"&language=en-US&include_adult=false&query=").concat(n));case 3:return r=e.sent,e.abrupt("return",t._transformMovie(r.data.results));case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),this._transformMovie=function(e){return e.map((function(e){var n=e.id,r=e.title,a=e.poster_path;return a?{id:n,title:r,image:"".concat(t.BASE_URL_IMG).concat(a)}:{title:r,image:null,id:n}}))},this._transformMovieDetalis=function(e){var n=e.title,r=e.poster_path,a=e.overview,i=e.genres,c=e.popularity;return r?{title:n,image:"".concat(t.BASE_URL_IMG).concat(r),overview:a,genres:i,userScore:c}:{title:n,image:null,overview:a,genres:i,userScore:c}},this._transformCastMovie=function(e){return e.map((function(e){var n=e.character,r=e.name,a=e.profile_path,i=e.id;return a?{character:n,name:r,id:i,image:"".concat(t.BASE_URL_IMG).concat(a)}:{character:n,name:r,id:i,image:null}}))},this._transformReviewsMovie=function(e){return e.map((function(e){return{author:e.author,id:e.id,content:e.content}}))},this._transformTrendingMovies=function(e){return e.map((function(e){var n=e.id,r=e.title,a=e.poster_path;return{id:n,title:r,images:"".concat(t.BASE_URL_IMG).concat(a)}}))}}));t.Z=u}}]);
//# sourceMappingURL=19.e0317ffb.chunk.js.map