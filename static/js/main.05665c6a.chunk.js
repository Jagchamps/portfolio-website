(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],{12:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),i=a(4),c=a.n(i),r=(a(17),a(18),a(9)),o=a(11),s=a(1),m=a(2),h=a(5),g=a(6),u=a(10),d=a(8),E=Object(l.createContext)(),p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLightTheme:!0,light:{syntax:"#333333",highlight:{primary:"#7A3E9D",secondary:"#AA3731",tertiary:"#4B69C6"},ui:"#8f8f8f33",bg:"#f2f2f2"},dark:{syntax:"#d4d4d4",highlight:{primary:"#569CD6",secondary:"#CE9178",tertiary:"#4EC9B0"},ui:"#cccccc33",bg:"#1e1e1e"}},e.toggleTheme=function(){e.setState({isLightTheme:!e.state.isLightTheme})},e}return Object(g.a)(a,[{key:"render",value:function(){return n.a.createElement(E.Provider,{value:Object(m.a)(Object(m.a)({},this.state),{},{toggleTheme:this.toggleTheme})},this.props.children)}}]),a}(l.Component),b={hidden:{opacity:0},visible:{opacity:1,transition:{delay:.5,duration:.5,when:"beforeChildren",staggerChildren:1}},exit:{x:"-100vw",transition:{ease:"easeInOut"}}},y={hidden:{opacity:0},visible:{opacity:1,transition:{duration:1.5}}},f=function(){var e=Object(l.useContext)(E),t=e.isLightTheme,a=e.light,i=e.dark,c=t?a:i,m=Object(s.b)(),h=Object(o.a)({threshold:.1}),g=Object(r.a)(h,3),u=g[0],d=g[1];g[2];return Object(l.useEffect)((function(){d?m.start("visible"):m.start("hidden")}),[m,d]),n.a.createElement(s.a.section,{id:"intro",className:"intro section-container",ref:u,variants:b,initial:"hidden",animate:m},n.a.createElement("div",{className:"into-inner"},n.a.createElement(s.a.h1,{className:"intro-text col col-xs-12",style:{color:c.syntax},variants:y},"Hello. I am ",n.a.createElement("span",{style:{color:c.highlight.secondary}},"Jonathan Champion")),n.a.createElement(s.a.h1,{className:"intro-text col col-xs-12",style:{color:c.syntax},variants:y},"Software Developer")))},v=a(7),k=a.n(v),x=function(){var e=Object(l.useContext)(E),t=e.isLightTheme,a=e.light,i=e.dark,c=t?a:i;return n.a.createElement("section",{id:"about",className:"about section-container"},n.a.createElement("div",{className:"section-inner"},n.a.createElement("h2",{className:"col col-xs-12"},n.a.createElement("span",{style:{color:c.highlight.secondary}},"About")," me"),n.a.createElement("div",{className:"col col-xs-12 about-section"},n.a.createElement("div",{className:"col col-xs-12 col-md-6 about-section-second-item"},n.a.createElement("img",{src:k.a,className:"about-photo show-on-scroll",style:{border:"solid 2px",borderColor:c.syntax}})),n.a.createElement("div",{className:"col col-xs-12 col-md-6 about-section-first-item"},n.a.createElement("div",{className:"about-text"},n.a.createElement("h3",null,"UK based software engineer with experience in full-stack development, front-end automation testing and performance testing"),n.a.createElement("p",null,"I enjoy and creating solutions to technical problems and designing responsive, elegant and intuitive web applications"),n.a.createElement("p",null,"In my spare time I go climbing, watch artsy films and attend gigs in the fine city of Norwich"))))))};var N=function(e){var t=e.id,a=e.item,i=Object(l.useContext)(E),c=i.isLightTheme,r=i.light,o=i.dark,s=c?r:o;return n.a.createElement("li",{key:t,style:{backgroundColor:s.highlight.primary,color:"#f2f2f2"}},a)},w=a(22),C=function(){var e=Object(l.useContext)(E),t=e.isLightTheme,a=e.light,i=e.dark,c=t?a:i;return n.a.createElement("section",{id:"skills",className:"skills section-container"},n.a.createElement("div",{className:"section-inner"},n.a.createElement("h2",{className:"col col-xs-12"},n.a.createElement("span",{style:{color:c.highlight.secondary}},"Skills")," I know"),n.a.createElement("div",{className:"col col-xs-12 skills-section"},n.a.createElement("p",null,"Here a few skills that I am competent in, and I'm constantly adding more to the list."),n.a.createElement("ul",{className:"col skills-list"},["Java (Spring)","RxJava","PostgreSQL","Docker","AWS","GIT","HTML","CSS","React","SASS (SCSS)","Selenium","JMeter"].map((function(e){return n.a.createElement(N,{id:w.a,item:e})}))))))},j=function(){var e=Object(l.useContext)(E),t=(e.isLightTheme,e.light,e.dark,e.toggleTheme);return n.a.createElement("label",{className:"themeSwitch"},n.a.createElement("input",{type:"checkbox",onClick:t}),n.a.createElement("span",{class:"slider round"}))},O=function(){var e=Object(l.useContext)(E),t=e.isLightTheme,a=e.light,i=e.dark,c=t?a:i;return n.a.createElement("header",null,n.a.createElement("div",{className:"header-inner",style:{backgroundColor:c.ui,color:c.highlight.primary}},n.a.createElement("div",{className:"header-right col-md-5 col-lg-4 col-xl-3"},n.a.createElement("p",{className:"header-logo"},"Jonathan Champion")),n.a.createElement("nav",{className:"navbar col-xs-12 col-sm-8 col-md-5 col-lg-4 col-xl-3"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{className:"link-line",href:"#about",style:{color:c.highlight.primary}},"About")),n.a.createElement("li",null,n.a.createElement("a",{className:"link-line",href:"#skills",style:{color:c.highlight.primary}},"Skills")),n.a.createElement("li",null,n.a.createElement("a",{className:"link-line",href:"#contact",style:{color:c.highlight.primary}},"Contact")),n.a.createElement("li",null,n.a.createElement(j,null))))))},T=function(){var e=Object(l.useContext)(E),t=e.isLightTheme,a=e.light,i=e.dark,c=t?a:i;return n.a.createElement("section",{id:"contact",className:"section-container contact"},n.a.createElement("div",{className:"section-inner"},n.a.createElement("h2",{className:"col-xs-12"},n.a.createElement("span",{style:{color:c.highlight.secondary}},"Contact")," me"),n.a.createElement("div",{className:"col-xs-8 col-sm-12 section-container contact-list-container"},n.a.createElement("ul",null,n.a.createElement("li",{className:"col col-xs-6 col-sm-3"},n.a.createElement("a",{className:"link-line",style:{color:c.highlight.primary},href:"mailto:jonathan.ag.champion@gmail.com"},"Mail")),n.a.createElement("li",{className:"col col-xs-6 col-sm-3"},n.a.createElement("a",{className:"link-line",style:{color:c.highlight.primary},href:"https://www.linkedin.com/in/jonathan-champion-39281993",rel:"noreferrer",target:"_blank"},"LinkedIn")),n.a.createElement("li",{className:"col col-xs-6 col-sm-3"},n.a.createElement("a",{className:"link-line",style:{color:c.highlight.primary},href:"https://twitter.com/JagChamps",rel:"noreferrer",target:"_blank"},"Twitter")),n.a.createElement("li",{className:"col col-xs-6 col-sm-3"},n.a.createElement("a",{className:"link-line",style:{color:c.highlight.primary},href:"https://github.com/Jagchamps",rel:"noreferrer",target:"_blank"},"Github"))))))},S=function(){var e=Object(l.useContext)(E),t=e.isLightTheme,a=e.light,i=e.dark,c=t?a:i;return n.a.createElement("div",{className:"profile",style:{backgroundColor:c.bg,color:c.syntax}},n.a.createElement(O,null),n.a.createElement(f,null),n.a.createElement(x,null),n.a.createElement(C,null),n.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(p,null,n.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,a){e.exports=a.p+"static/media/profile.07a6cb67.jpg"}},[[12,1,2]]]);
//# sourceMappingURL=main.05665c6a.chunk.js.map