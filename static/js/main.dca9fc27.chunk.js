(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(e,t,a){},25:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var s=a(26),n=a.n(s),c=a(7),i=(a(35),a(5)),l=(a(36),a(37),a(13)),o=a(14),r=a(2),m=(a(22),a(38),a(1)),j=Object(i.f)((function(e){var t=e.title,a=e.history,s=e.linkUrl,n=e.match;return Object(m.jsx)("div",{className:"pentagon",onClick:function(){return a.push("".concat(n.url).concat(s))},children:Object(m.jsx)("div",{className:"pentagon__content",children:Object(m.jsx)("h2",{className:"pentagon__title",children:t.toUpperCase()})})})})),b=function(){return Object(m.jsx)("div",{className:"directory-menu",children:[{title:"About Me",id:1,linkUrl:"about"},{title:"Projects",id:2,linkUrl:"projects"},{title:"Skills",id:3,linkUrl:"skills"},{title:"Contact",id:4,linkUrl:"contact"}].map((function(e){var t=e.id,a=Object(o.a)(e,["id"]);return Object(m.jsx)(j,Object(l.a)({},a),t)}))})},d=a(29),h=a.n(d);function u(){return Object(m.jsx)(h.a,{className:"homepage__particles",options:{fpsLimit:30,fullScreen:{enable:!0,zIndex:-1},detectRetina:!0,particles:{color:{value:"#BCBCC8",animation:{enable:!0,speed:60}},links:{enable:!0,color:{value:"#E8C547"}},move:{direction:"bottom",enable:!0,random:!1,speed:1,straight:!1},number:{value:30,density:{enable:!0,value_area:1e3}},opacity:{value:1},shape:{type:"polygon"},size:{value:3}},emitters:{direction:"none",rate:{quantity:1,delay:1},position:{x:50,y:50}}}})}var f=function(){return Object(m.jsxs)("div",{className:"homepage",children:[Object(m.jsx)(u,{}),Object(m.jsxs)("div",{className:"homepage__header",children:[Object(m.jsx)("h1",{className:"homepage__header--title",children:"Hi, I'm Andrea"}),Object(m.jsx)("p",{className:"homepage__header--subtitle",children:"I'm a Sofware Developer that believes in building things for enviromental, social and economic good."})]}),Object(m.jsx)(b,{})]})},p=a(4),O=(a(47),function(e){var t=e.clicked,a=e.handleClicked;return Object(m.jsx)(m.Fragment,{children:t&&Object(m.jsxs)("ul",{className:"sideBar__menu active",children:[Object(m.jsx)("li",{className:"navBar__menu__links",children:Object(m.jsx)(c.b,{to:"/About",onClick:a,children:"About Me"})}),Object(m.jsx)("li",{className:"navBar__menu__links",children:Object(m.jsx)(c.b,{to:"/projects",onClick:a,children:"Projects"})}),Object(m.jsx)("li",{className:"navBar__menu__links",children:Object(m.jsx)(c.b,{to:"/Skills",onClick:a,children:"Skills"})}),Object(m.jsx)("li",{className:"navBar__menu__links",children:Object(m.jsx)(c.b,{to:"/contact",onClick:a,children:"Contact"})})]})})}),_=(a(48),function(){var e=Object(r.useState)(!1),t=Object(p.a)(e,2),a=t[0],s=t[1],n=function(){s(!a)};return Object(m.jsxs)("nav",{className:"navBar",children:[Object(m.jsx)(c.b,{className:"navBar__logo",to:"/",children:"Andrea Simental"}),Object(m.jsx)("div",{className:"navBar__icon",onClick:n,children:Object(m.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(m.jsx)(O,{clicked:a,handleClicked:n}),Object(m.jsxs)("ul",{className:"navBar__menu",children:[Object(m.jsx)("li",{className:"navBar__menu__links",children:Object(m.jsx)(c.b,{to:"/About",children:"About Me"})}),Object(m.jsx)("li",{className:"navBar__menu__links",children:Object(m.jsx)(c.b,{to:"/projects",children:"Projects"})}),Object(m.jsx)("li",{className:"navBar__menu__links",children:Object(m.jsx)(c.b,{to:"/Skills",children:"Skills"})}),Object(m.jsx)("li",{className:"navBar__menu__links",children:Object(m.jsx)(c.b,{to:"/contact",children:"Contact"})})]})]})}),x=a(15),v=a(17),g=(a(25),a(30)),N=Object(i.f)((function(e){var t=e.title,a=e.description,s=e.linkUrl,n=e.gitUrl,c=e.tools;return Object(m.jsxs)("div",{className:"custom-card",children:[Object(m.jsx)("div",{className:"custom-card__header",children:Object(m.jsx)("h1",{className:"custom-card__title",children:t})}),Object(m.jsxs)("div",{className:"custom-card__body",children:[Object(m.jsx)("p",{className:"project__description",children:a}),Object(m.jsx)("hr",{}),Object(m.jsx)("h2",{className:"custom-card__body-title",children:"Tools used"}),Object(m.jsx)("div",{className:"custom-card__tools",children:c.map((function(e,t){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{className:"custom-card__tools-description",children:e.name},t),Object(m.jsx)("i",{className:e.fAwasome})]})}))})]}),Object(m.jsxs)("div",{className:"custom-card__footer",children:[Object(m.jsx)("a",{className:"custom-card__footer-icon",href:n,target:"blank",children:Object(m.jsx)(x.a,{icon:v.a})}),s&&Object(m.jsx)("a",{className:"custom-card__footer-icon",href:s,target:"blank",children:Object(m.jsx)(x.a,{icon:g.a})})]})]})})),w=[{title:"Travel Blog",description:"Built a Fullstack travel blog using React with Javascript for the front end and NodeJs with MongoDB for the backend",imgUrl:"",id:1,gitUrl:"https://github.com/anlsim/travel-blog",tools:[{name:"",fAwasome:"fab fa-react"},{name:"",fAwasome:"fab fa-js-square"},{name:"",fAwasome:"fab fa-node"},{name:"MongoDB",fAwasome:""},{name:"",fAwasome:"fab fa-sass"},{name:"",fAwasome:"fab fa-bootstrap"}],linkUrl:"https://warm-escarpment-05416.herokuapp.com/register"},{title:"Personal Portfolio",description:"Built a web portfolio to show projects, skills, and other relevant information",imgUrl:"../assets/webMarks.png",id:1,gitUrl:"https://github.com/anlsim/anlsim.github.io",tools:[{name:"",fAwasome:"fab fa-react"},{name:"",fAwasome:"fab fa-sass"},{name:"",fAwasome:"fab fa-bootstrap"}],linkUrl:"https://anlsim.github.io/"},{title:"Web Marks",description:"Built a web application that allows people to save and organize web URLs on boards based on specific subjects or collections.",imgUrl:"../assets/webMarks.png",id:2,gitUrl:"https://github.com/anlsim/WebMarks",tools:[{name:"C#",fAwasome:""},{name:"ASP.NET",fAwasome:""},{name:"MVC",fAwasome:""},{name:"",fAwasome:"fab fa-css3-alt"},{name:"",fAwasome:"fab fa-bootstrap"}],linkUrl:""},{title:"Task Tracker",description:"Team project to build a web application to help organize and keep track of tasks. Redesigned the View. Added new features to optimize the project.",imgUrl:"../assets/webMarks.png",id:3,gitUrl:"https://github.com/anlsim/TimeTracker",tools:[{name:"C#",fAwasome:""},{name:"ASP.NET",fAwasome:""},{name:"MVC",fAwasome:""},{name:"",fAwasome:"fab fa-css3-alt"},{name:"",fAwasome:"fab fa-bootstrap"}],linkUrl:""},{title:"Photography Portfolio",description:"Personal photography portfolio. Built with HTML and Bootstrap",imgUrl:"../assets/webMarks.png",id:4,gitUrl:"https://github.com/anlsim/photography_website",tools:[{name:"",fAwasome:"fab fa-html5"},{name:"",fAwasome:"fab fa-css3-alt"},{name:"",fAwasome:"fab fa-bootstrap"}],linkUrl:"https://anlsim.github.io/photography_website/"}];function k(){return Object(m.jsx)("div",{className:"directory-menu",children:w.map((function(e){var t=e.id,a=Object(o.a)(e,["id"]);return Object(m.jsx)(N,Object(l.a)({},a),t)}))})}a(52);var A=function(e){var t=e.title;return Object(m.jsx)("div",{className:"hero",children:Object(m.jsx)("div",{className:"hero__background",children:Object(m.jsx)("h1",{className:"hero__text",children:t})})})},C=(a(53),function(e){var t=e.title;return Object(m.jsxs)("main",{children:[Object(m.jsx)(_,{}),Object(m.jsx)(A,{title:t}),Object(m.jsx)(k,{})]})}),U=(a(54),function(e){var t=e.title;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(_,{}),Object(m.jsx)(A,{title:t}),Object(m.jsxs)("div",{className:"contact",children:[Object(m.jsx)("div",{className:"contact__icon",children:Object(m.jsx)("a",{className:"contact__icon-color",href:"https://github.com/anlsim",target:"blank",children:Object(m.jsx)(x.a,{icon:v.a})})}),Object(m.jsx)("div",{className:"contact__icon",children:Object(m.jsx)("a",{className:"contact__icon-color",href:"https://www.linkedin.com/in/andrea-simental/",target:"blank",children:Object(m.jsx)(x.a,{icon:v.b})})})]})]})}),B=Object(i.f)((function(e){var t=e.title,a=e.skillItem;return Object(m.jsxs)("div",{className:"custom-card",children:[Object(m.jsx)("div",{className:"custom-card__header",children:Object(m.jsx)("h2",{className:"custom-card__title",children:t})}),Object(m.jsx)("div",{className:"custom-card__body",children:a.map((function(e,t){return Object(m.jsxs)("div",{className:"custom-card__tools",children:[Object(m.jsx)("i",{className:e.fAwesome}),e.name]},t)}))})]})})),S=[{id:1,title:"Languages",skillItem:[{name:"",fAwesome:"fab fa-java"},{name:"C#",fAwesome:null},{name:"",fAwesome:"fab fa-js-square"},{name:"SQL",fAwesome:null},{name:"",fAwesome:"fab fa-html5"},{name:"",fAwesome:"fab fa-css3-alt"},{name:"",fAwesome:"fab fa-sass"}]},{id:2,title:"Frameworks",skillItem:[{name:"",fAwesome:"fab fa-bootstrap"},{name:"",fAwesome:"fab fa-react"},{name:"",fAwesome:"fab fa-vuejs"},{name:"",fAwesome:"fab fa-node"},{name:"ASP.NET",fAwesome:null}]},{id:3,title:"Other",skillItem:[{name:"OPP",fAwesome:null},{name:"MVC",fAwesome:null},{name:"",fAwesome:"fab fa-git"},{name:"",fAwesome:"fab fa-github"},{name:"",fAwesome:"fab fa-aws"},{name:"Azure",fAwesome:null},{name:"",fAwesome:"fab fa-figma"}]},{id:4,title:"Adobe",skillItem:[{name:"Photoshop"},{name:"Illustrator"},{name:"Lightroom"},{name:"InDesign"},{name:"Xd"}]}];function y(){return Object(m.jsx)("div",{className:"directory-menu",children:S.map((function(e){var t=e.id,a=Object(o.a)(e,["id"]);return Object(m.jsx)(B,Object(l.a)({},a),t)}))})}var E=function(e){var t=e.title;return Object(m.jsxs)("main",{children:[Object(m.jsx)(_,{}),Object(m.jsx)(A,{title:t}),Object(m.jsx)(y,{})]})},I=(a(55),function(e){var t=e.title;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(_,{}),Object(m.jsx)(A,{title:t}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"about-me",children:[Object(m.jsx)("div",{className:"about-me__img"}),Object(m.jsxs)("div",{className:"about-me__info",children:[Object(m.jsx)("h2",{className:"about-me__info__title",children:"Andrea Simental"}),Object(m.jsx)("p",{className:"about-me__info__description",children:"Collaborative and creative Software Developer with a keen interest in building responsive and scalable web apps to enhance user experience. Fluent in Spanish and English, accustomed to working with cross-cultural, global teams."})]})]}),Object(m.jsx)("h2",{className:"container__title",children:"Experience"}),Object(m.jsxs)("div",{className:"container__main",children:[Object(m.jsx)("h3",{className:"container__subtitle",children:"Junior Developer \u2022 July 2021 - Present"}),Object(m.jsx)("p",{className:"container__subtitle-main",children:"D2 Creative\u2022 Full Time"}),Object(m.jsx)("p",{className:"container__description",children:"Currently developing websites on a variety of platforms, using multiple frameworks and programming languages."})]}),Object(m.jsxs)("div",{className:"container__main",children:[Object(m.jsx)("h3",{className:"container__subtitle",children:"Frontend Developer \u2022 March - July 2021"}),Object(m.jsx)("p",{className:"container__subtitle-main",children:"Impakter \u2022 Internship"}),Object(m.jsxs)("p",{className:"container__description",children:["Design and develop the Frontend of the Certificates Tool application while utilizing reusable code with Vue.js and Bootstrap. to complete projects in the future. Designed UI wireframes using Figma. Developed Frontend with Vue.js and Bootstrap.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"\u2022 Designed UI wireframes using Figma.",Object(m.jsx)("br",{}),"\u2022 Created UI of the certificate tool to detect environmental or social impact for companies.",Object(m.jsx)("br",{}),"\u2022 Transformed business and functional needs into documented technical specifications in collaboration with team members."]})]})]}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h2",{className:"container__title",children:"Education"}),Object(m.jsxs)("div",{className:"container__main",children:[Object(m.jsx)("h3",{className:"container__subtitle",children:"BACHELOR\u2019S OF APPLIED SCIENCE DEGREE \u2022 2019 - 2021"}),Object(m.jsx)("p",{className:"container__subtitle-main",children:"Computing and Software Development \u2022 GPA: 3.71"}),Object(m.jsx)("p",{className:"container__description",children:"Lake Washington Institute of Technology \u2022 Seattle, WA"})]}),Object(m.jsxs)("div",{className:"container__main",children:[Object(m.jsx)("h3",{className:"container__subtitle",children:"ASSOCIATE\u2019S OF APPLIED SCIENCE \u2022 2017 - 2019"}),Object(m.jsx)("p",{className:"container__subtitle-main",children:"Computing and Software Development \u2022 GPA: 3.68"}),Object(m.jsx)("p",{className:"container__description",children:"Lake Washington Institute of Technology \u2022 Seattle, WA"})]}),Object(m.jsxs)("div",{className:"container__main",children:[Object(m.jsx)("h3",{className:"container__subtitle",children:"BACHELOR\u2019S DEGREE \u2022 2007 - 2011"}),Object(m.jsx)("p",{className:"container__subtitle-main",children:"Graphic Design \u2022 GPA: 3.80"}),Object(m.jsx)("p",{className:"container__description",children:"Universidad de Guadalajara - CUAAD \u2022 Guadalajara, MX"})]})]})]})}),P=function(){return Object(m.jsx)(c.a,{children:Object(m.jsxs)(i.c,{children:[Object(m.jsxs)(i.a,{path:"/",exact:!0,children:[" ",Object(m.jsx)(f,{})]}),Object(m.jsxs)(i.a,{path:"/projects",exact:!0,children:[" ",Object(m.jsx)(C,{title:"Projects"})]}),Object(m.jsxs)(i.a,{path:"/contact",exact:!0,children:[" ",Object(m.jsx)(U,{title:"Contact Me"})]}),Object(m.jsxs)(i.a,{path:"/skills",exact:!0,children:[" ",Object(m.jsx)(E,{title:"Skills"})]}),Object(m.jsxs)(i.a,{path:"/about",exact:!0,children:[" ",Object(m.jsx)(I,{title:"About Me"})]})]})})};n.a.render(Object(m.jsx)(c.a,{children:Object(m.jsx)(P,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.dca9fc27.chunk.js.map