(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{370:function(e,t,a){},371:function(e,t,a){},375:function(e,t,a){},376:function(e,t,a){},377:function(e,t,a){},378:function(e,t,a){},379:function(e,t,a){"use strict";a.r(t);var s=a(4),n=a(72),c=a.n(n),i=a(17),l=a(34),o=a(35),r=a(37),m=a(36),j=(a(82),a(12)),b=(a(83),a(84),a(25)),d=a(26),h=(a(40),a(85),a(0)),u=Object(j.f)((function(e){var t=e.title,a=e.history,s=e.linkUrl,n=e.match;return Object(h.jsx)("div",{className:"pentagon",onClick:function(){return a.push("".concat(n.url).concat(s))},children:Object(h.jsx)("div",{className:"pentagon__content",children:Object(h.jsx)("h1",{className:"pentagon__title",children:t.toUpperCase()})})})})),f=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={sections:[{title:"About Me",id:1,linkUrl:"about"},{title:"Projects",id:2,linkUrl:"projects"},{title:"Skills",id:3,linkUrl:"skills"},{title:"Contact",id:4,linkUrl:"contact"}]},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"directory-menu",children:this.state.sections.map((function(e){var t=e.id,a=Object(d.a)(e,["id"]);return Object(h.jsx)(u,Object(b.a)({},a),t)}))})}}]),a}(s.Component),O=a(28),p=a(75),_=a.n(p);function x(){var e;return Object(h.jsx)(_.a,{className:"homepage__particles",options:(e={fpsLimit:30,fullScreen:{enable:!0,zIndex:-1},detectRetina:!0,particles:{color:{value:"#BCBCC8",animation:{enable:!0,speed:60}},links:{enable:!0,color:{value:"#E8C547"}},move:{direction:"bottom",enable:!0,random:!1,speed:1,straight:!1},number:{value:30,density:{enable:!0,value_area:1e3}},opacity:{value:1},shape:{type:"polygon"},size:{value:3}}},Object(O.a)(e,"detectRetina",!0),Object(O.a)(e,"emitters",{direction:"none",rate:{quantity:1,delay:1},position:{x:50,y:50}}),e)})}var v=function(){return Object(h.jsxs)("div",{className:"homepage",children:[Object(h.jsx)(x,{}),Object(h.jsxs)("div",{className:"homepage__header",children:[Object(h.jsx)("h1",{className:"homepage__header--title",children:"Hi, I'm Andrea"}),Object(h.jsx)("p",{className:"homepage__header--subtitle",children:"I'm a Sofware Developer that believes in building things for enviromental, social and economic good."})]}),Object(h.jsx)(f,{})]})},g=a(77);a(370);function N(e){var t=e.clicked,a=e.handleClicked;return Object(h.jsx)(h.Fragment,{children:t&&Object(h.jsxs)("ul",{className:"sideBar__menu active",children:[Object(h.jsx)("li",{className:"navBar__menu__links",children:Object(h.jsx)(i.b,{to:"/About",onClick:a,children:"About Me"})}),Object(h.jsx)("li",{className:"navBar__menu__links",children:Object(h.jsx)(i.b,{to:"/projects",onClick:a,children:"Projects"})}),Object(h.jsx)("li",{className:"navBar__menu__links",children:Object(h.jsx)(i.b,{to:"/Skills",onClick:a,children:"Skills"})}),Object(h.jsx)("li",{className:"navBar__menu__links",children:Object(h.jsx)(i.b,{to:"/contact",onClick:a,children:"Contact"})})]})})}a(371);var w=function(){var e=Object(s.useState)(!1),t=Object(g.a)(e,2),a=t[0],n=t[1],c=function(){n(!a)};return Object(h.jsxs)("nav",{className:"navBar",children:[Object(h.jsx)(i.b,{className:"navBar__logo",to:"/",children:"Andrea Simental"}),Object(h.jsx)("div",{className:"navBar__icon",onClick:c,children:Object(h.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(h.jsx)(N,{clicked:a,handleClicked:c}),Object(h.jsxs)("ul",{className:"navBar__menu",children:[Object(h.jsx)("li",{className:"navBar__menu__links",children:Object(h.jsx)(i.b,{to:"/About",children:"About Me"})}),Object(h.jsx)("li",{className:"navBar__menu__links",children:Object(h.jsx)(i.b,{to:"/projects",children:"Projects"})}),Object(h.jsx)("li",{className:"navBar__menu__links",children:Object(h.jsx)(i.b,{to:"/Skills",children:"Skills"})}),Object(h.jsx)("li",{className:"navBar__menu__links",children:Object(h.jsx)(i.b,{to:"/contact",children:"Contact"})})]})]})},k=a(27),A=a(29),C=(a(71),a(76)),S=Object(j.f)((function(e){var t=e.title,a=e.description,s=e.linkUrl,n=e.gitUrl,c=e.tools;return Object(h.jsxs)("div",{className:"custom-card",children:[Object(h.jsx)("div",{className:"custom-card__header",children:Object(h.jsx)("h1",{className:"custom-card__title",children:t})}),Object(h.jsxs)("div",{className:"custom-card__body",children:[Object(h.jsx)("p",{className:"project__description",children:a}),Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{className:"custom-card__body-title",children:"Tools used"}),Object(h.jsx)("div",{className:"custom-card__tools",children:c.map((function(e,t){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{className:"custom-card__tools-description",children:e.name},t),Object(h.jsx)("i",{className:e.fAwasome})]})}))})]}),Object(h.jsxs)("div",{className:"custom-card__footer",children:[Object(h.jsx)("a",{className:"custom-card__footer-icon",href:n,target:"blank",children:Object(h.jsx)(k.a,{icon:A.a})}),s&&Object(h.jsx)("a",{className:"custom-card__footer-icon",href:s,target:"blank",children:Object(h.jsx)(k.a,{icon:C.a})})]})]})})),U=[{title:"Travel Blog",description:"Built a Fullstack travel blog using React with Javascript for the front end and NodeJs with MongoDB for the backend",imgUrl:"",id:1,gitUrl:"https://github.com/anlsim/travel-blog",tools:[{name:"",fAwasome:"fab fa-react"},{name:"",fAwasome:"fab fa-js-square"},{name:"",fAwasome:"fab fa-node"},{name:"MongoDB",fAwasome:""},{name:"",fAwasome:"fab fa-sass"},{name:"",fAwasome:"fab fa-bootstrap"}],linkUrl:"https://warm-escarpment-05416.herokuapp.com/register"},{title:"Personal Portfolio",description:"Built a web portfolio to show projects, skills, and other relevant information",imgUrl:"../assets/webMarks.png",id:1,gitUrl:"https://github.com/anlsim/anlsim.github.io",tools:[{name:"",fAwasome:"fab fa-react"},{name:"",fAwasome:"fab fa-sass"},{name:"",fAwasome:"fab fa-bootstrap"}],linkUrl:"https://anlsim.github.io/"},{title:"Web Marks",description:"Built a web application that allows people to save and organize web URLs on boards based on specific subjects or collections.",imgUrl:"../assets/webMarks.png",id:2,gitUrl:"https://github.com/anlsim/WebMarks",tools:[{name:"C#",fAwasome:""},{name:"ASP.NET",fAwasome:""},{name:"MVC",fAwasome:""},{name:"",fAwasome:"fab fa-css3-alt"},{name:"",fAwasome:"fab fa-bootstrap"}],linkUrl:""},{title:"Task Tracker",description:"Team project to build a web application to help organize and keep track of tasks. Redesigned the View. Added new features to optimize the project.",imgUrl:"../assets/webMarks.png",id:3,gitUrl:"https://github.com/anlsim/TimeTracker",tools:[{name:"C#",fAwasome:""},{name:"ASP.NET",fAwasome:""},{name:"MVC",fAwasome:""},{name:"",fAwasome:"fab fa-css3-alt"},{name:"",fAwasome:"fab fa-bootstrap"}],linkUrl:""},{title:"Photography Portfolio",description:"Personal photography portfolio. Built with HTML and Bootstrap",imgUrl:"../assets/webMarks.png",id:4,gitUrl:"https://github.com/anlsim/photography_website",tools:[{name:"",fAwasome:"fab fa-html5"},{name:"",fAwasome:"fab fa-css3-alt"},{name:"",fAwasome:"fab fa-bootstrap"}],linkUrl:"https://anlsim.github.io/photography_website/"}];function B(){return Object(h.jsx)("div",{className:"directory-menu",children:U.map((function(e){var t=e.id,a=Object(d.a)(e,["id"]);return Object(h.jsx)(S,Object(b.a)({},a),t)}))})}a(375);var y=function(e){return Object(h.jsx)("div",{className:"hero",children:Object(h.jsx)("div",{className:"hero__background",children:Object(h.jsx)("h1",{className:"hero__text",children:e.title})})})},P=(a(376),function(e){return Object(h.jsxs)("main",{children:[Object(h.jsx)(w,{}),Object(h.jsx)(y,{title:e.title}),Object(h.jsx)(B,{})]})}),E=(a(377),function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(w,{}),Object(h.jsx)(y,{title:e.title}),Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("div",{className:"contact__icon",children:Object(h.jsx)("a",{className:"contact__icon-color",href:"https://github.com/anlsim",target:"blank",children:Object(h.jsx)(k.a,{icon:A.a})})}),Object(h.jsx)("div",{className:"contact__icon",children:Object(h.jsx)("a",{className:"contact__icon-color",href:"https://www.linkedin.com/in/andrea-simental/",target:"blank",children:Object(h.jsx)(k.a,{icon:A.b})})})]})]})}),I=Object(j.f)((function(e){return Object(h.jsxs)("div",{className:"custom-card",children:[Object(h.jsx)("div",{className:"custom-card__header",children:Object(h.jsx)("h1",{className:"custom-card__title",children:e.title})}),Object(h.jsx)("div",{className:"custom-card__body",children:e.skillItem.map((function(e,t){return Object(h.jsxs)("div",{className:"custom-card__tools",children:[Object(h.jsx)("i",{className:e.fAwesome}),e.name]},t)}))})]})})),M=[{id:1,title:"Languages",skillItem:[{name:"",fAwesome:"fab fa-java"},{name:"C#",fAwesome:null},{name:"",fAwesome:"fab fa-js-square"},{name:"SQL",fAwesome:null},{name:"",fAwesome:"fab fa-html5"},{name:"",fAwesome:"fab fa-css3-alt"},{name:"",fAwesome:"fab fa-sass"}]},{id:2,title:"Frameworks",skillItem:[{name:"",fAwesome:"fab fa-bootstrap"},{name:"",fAwesome:"fab fa-react"},{name:"",fAwesome:"fab fa-vuejs"},{name:"",fAwesome:"fab fa-node"},{name:"ASP.NET",fAwesome:null}]},{id:3,title:"Other",skillItem:[{name:"OPP",fAwesome:null},{name:"MVC",fAwesome:null},{name:"",fAwesome:"fab fa-git"},{name:"",fAwesome:"fab fa-github"},{name:"",fAwesome:"fab fa-aws"},{name:"Azure",fAwesome:null},{name:"",fAwesome:"fab fa-figma"}]},{id:4,title:"Adobe",skillItem:[{name:"Photoshop"},{name:"Illustrator"},{name:"Lightroom"},{name:"InDesign"},{name:"Xd"}]}];function D(){return Object(h.jsx)("div",{className:"directory-menu",children:M.map((function(e){var t=e.id,a=Object(d.a)(e,["id"]);return Object(h.jsx)(I,Object(b.a)({},a),t)}))})}var T=function(e){return Object(h.jsxs)("main",{children:[Object(h.jsx)(w,{}),Object(h.jsx)(y,{title:e.title}),Object(h.jsx)(D,{})]})},F=(a(378),function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(w,{}),Object(h.jsx)(y,{title:e.title}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"aboutme",children:[Object(h.jsx)("div",{className:"aboutme__img"}),Object(h.jsxs)("div",{className:"aboutme__info",children:[Object(h.jsx)("h2",{className:"aboutme__info__title",children:"Andrea Simental"}),Object(h.jsx)("p",{className:"aboutme__info__description",children:"Collaborative and creative Software Developer with a keen interest in building responsive and scalable web apps to enhance user experience. Fluent in Spanish and English, accustomed to working with cross-cultural, global teams."})]})]}),Object(h.jsx)("h2",{className:"container__title",children:"Experience"}),Object(h.jsxs)("div",{className:"container__main",children:[Object(h.jsx)("h3",{className:"container__subtitle",children:"Junior Developer \u2022 July 2021 - Present"}),Object(h.jsx)("p",{className:"container__subtitle-main",children:"D2 Creative\u2022 Full Time"}),Object(h.jsx)("p",{className:"container__description",children:"Currently developing websites on a variety of platforms, using multiple frameworks and programing languages."})]}),Object(h.jsxs)("div",{className:"container__main",children:[Object(h.jsx)("h3",{className:"container__subtitle",children:"Frontend Developer \u2022 March - July 2021"}),Object(h.jsx)("p",{className:"container__subtitle-main",children:"Impakter \u2022 Internship"}),Object(h.jsxs)("p",{className:"container__description",children:["Design and develop the frontend of the Certificates Tool application while utilizing reusable code with Vue.js and Bootstrap. to complete projects in the future. Designed UI wireframes using Figma. Developed Frontend with Vue.js and Bootstrap.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"\u2022 Designed UI wireframes using Figma.",Object(h.jsx)("br",{}),"\u2022 Created UI of the certificate tool to detect environmental or social impact for companies.",Object(h.jsx)("br",{}),"\u2022 Transformed business and functional needs into documented technical specifications in collaboration with team members."]})]})]}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h2",{className:"container__title",children:"Education"}),Object(h.jsxs)("div",{className:"container__main",children:[Object(h.jsx)("h3",{className:"container__subtitle",children:"BACHELOR\u2019S OF APPLIED SCIENCE DEGREE \u2022 2019 - 2021"}),Object(h.jsx)("p",{className:"container__subtitle-main",children:"Computing and Software Development \u2022 GPA: 3.71"}),Object(h.jsx)("p",{className:"container__description",children:"Lake Washington Institute of Technology \u2022 Seattle, WA"})]}),Object(h.jsxs)("div",{className:"container__main",children:[Object(h.jsx)("h3",{className:"container__subtitle",children:"ASSOCIATE\u2019S OF APPLIED SCIENCE \u2022 2017 - 2019"}),Object(h.jsx)("p",{className:"container__subtitle-main",children:"Computing and Software Development \u2022 GPA: 3.68"}),Object(h.jsx)("p",{className:"container__description",children:"Lake Washington Institute of Technology \u2022 Seattle, WA"})]}),Object(h.jsxs)("div",{className:"container__main",children:[Object(h.jsx)("h3",{className:"container__subtitle",children:"BACHELOR\u2019S DEGREE \u2022 2007 - 2011"}),Object(h.jsx)("p",{className:"container__subtitle-main",children:"Graphic Design \u2022 GPA: 3.80"}),Object(h.jsx)("p",{className:"container__description",children:"Universidad de Guadalajara - CUAAD \u2022 Guadalajara, MX"})]})]})]})}),L=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={title:"Andrea Simental",headerLinks:[{title:"Home",path:"/"},{title:"About Me",path:"/about"},{title:"Projects",path:"/projecst"},{title:"Resume",path:"/resume"},{title:"Contact Me",path:"/contact"}],home:{title:"Andrea's Portfolio"},about:{title:"About Me"},projects:{title:"Projects"},skills:{title:"Skills"},contact:{title:"Contact Me"}},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(i.a,{children:Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{path:"/",exact:!0,render:function(){return Object(h.jsx)(v,{title:e.state.home.title})}}),Object(h.jsx)(j.a,{path:"/about",render:function(){return Object(h.jsx)(F,{title:e.state.about.title})}}),Object(h.jsx)(j.a,{path:"/skills",render:function(){return Object(h.jsx)(T,{title:e.state.skills.title})}}),Object(h.jsx)(j.a,{path:"/projects",render:function(){return Object(h.jsx)(P,{title:e.state.projects.title})}}),Object(h.jsx)(j.a,{path:"/contact",render:function(){return Object(h.jsx)(E,{title:e.state.contact.title})}})]})}),Object(h.jsx)("div",{})]})}}]),a}(s.Component);c.a.render(Object(h.jsx)(i.a,{children:Object(h.jsx)(L,{})}),document.getElementById("root"))},40:function(e,t,a){},71:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){}},[[379,1,2]]]);
//# sourceMappingURL=main.a89c2601.chunk.js.map