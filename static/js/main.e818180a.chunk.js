(this["webpackJsonpreact-movie"]=this["webpackJsonpreact-movie"]||[]).push([[0],{50:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d}));var a=n(25),c=n(15),r=n(37),i=n(36),s=n(0),o=n(54),l=n(52),h=n(53),j=n(5),u=e.local.REACT_APP_API_KEY,d=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],loading:!0},e.searchFilm=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("http://www.omdbapi.com/?apikey=".concat(u,"&s=").concat(t).concat("all"!==n?"&type=".concat(n):"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://www.omdbapi.com/?apikey=".concat(u,"&s=avengers")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,n=e.loading;return Object(j.jsxs)("main",{className:"container content",children:[Object(j.jsx)(h.a,{searchFilm:this.searchFilm}),n?Object(j.jsx)(l.a,{}):Object(j.jsx)(o.a,{movies:t})]})}}]),n}(s.Component)}).call(this,n(76))},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(0);var a=n(57),c=n(80),r=n(5);function i(){return Object(r.jsx)("div",{children:Object(r.jsx)(a.a,{component:"div",children:Object(r.jsx)(c.a,{})},"1")})}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(25),c=n(15),r=n(37),i=n(36),s=n(0),o=n(81),l=n(79),h=n(42),j=n(41),u=n(83),d=n(5),b=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={search:"",type:"all"},e.handleEnter=function(t){13===t.keyCode&&e.props.searchFilm(e.state.search,e.state.type)},e.handleClick=function(t){e.props.searchFilm(e.state.search,e.state.type)},e.handleChange=function(t){e.setState({type:t.target.value},(function(){e.props.searchFilm(e.state.search,e.state.type)}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"searching",children:[Object(d.jsx)(o.a,{className:"search",id:"standard-basic",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleEnter}),Object(d.jsx)(l.a,{variant:"contained",onClick:this.handleClick,children:"Search"}),Object(d.jsx)("div",{className:"types",children:Object(d.jsxs)(u.a,{row:!0,"aria-label":"position",name:"position",defaultValue:"top",children:[Object(d.jsx)(j.a,{value:"all",control:Object(d.jsx)(h.a,{color:"primary"}),label:"All",onChange:this.handleChange,checked:"all"===this.state.type}),Object(d.jsx)(j.a,{value:"movie",control:Object(d.jsx)(h.a,{color:"primary"}),label:"Movies only",onChange:this.handleChange,checked:"movie"===this.state.type}),Object(d.jsx)(j.a,{value:"series",control:Object(d.jsx)(h.a,{color:"primary"}),label:"Series only",onChange:this.handleChange,checked:"series"===this.state.type})]})})]})}}]),n}(s.Component)},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(51),c=(n(0),n(118)),r=n(125),i=n(126),s=n(129),o=n(128),l=n(127),h=n(57),j=n(5),u=Object(c.a)({root:{maxWidth:300},media:{height:330}});function d(e){var t=u(),n=e.Title,a=e.Year,c=e.Type,d=e.Poster;return Object(j.jsxs)(r.a,{className:t.root,children:[Object(j.jsxs)(i.a,{children:[Object(j.jsx)(l.a,{className:t.media,image:"N/A"!==d?d:n}),Object(j.jsx)(o.a,{children:Object(j.jsx)(h.a,{gutterBottom:!0,variant:"h5",component:"h2",children:n})})]}),Object(j.jsxs)(s.a,{className:"bottomInfo",children:[Object(j.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"p",children:a}),Object(j.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"p",children:c})]})]})}function b(e){var t=e.movies,n=void 0===t?[]:t;return Object(j.jsx)("div",{className:"movies",children:n.length?n.map((function(e){return Object(j.jsx)(d,Object(a.a)({},e),e.imdbID)})):Object(j.jsx)("h2",{children:"Movies aren't found"})})}},70:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),s=(n(70),n(118)),o=n(121),l=n(123),h=n(57),j=n(79),u=n(124),d=n(5),b=Object(s.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function m(){var e=b();return Object(d.jsx)("div",{children:Object(d.jsx)(o.a,{position:"static",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(u.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"}),Object(d.jsx)(h.a,{variant:"h6",className:e.title,children:"Movies"}),Object(d.jsx)(j.a,{color:"inherit",children:"Login"})]})})})}var v=Object(s.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function O(){var e=v();return Object(d.jsx)("div",{children:Object(d.jsx)(o.a,{position:"static",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(u.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"}),Object(d.jsxs)(h.a,{variant:"h6",className:e.title,children:["\xa9 ",(new Date).getFullYear()," Copyright"]})]})})})}var p=n(50);var x=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{}),Object(d.jsx)(p.a,{}),Object(d.jsx)(O,{})]})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.e818180a.chunk.js.map