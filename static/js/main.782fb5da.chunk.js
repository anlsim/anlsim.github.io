(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{104:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},344:function(e,t,a){},348:function(e,t,a){},349:function(e,t,a){},350:function(e,t,a){},351:function(e,t,a){},352:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a.n(s),c=a(96),i=a.n(c),l=a(14),r=a(23),o=a(24),j=a(26),m=a(25),b=(a(104),a(8)),d=(a(105),a(106),a(32)),h=a(33),u=(a(50),a(107),a(0)),f=Object(b.f)((function(e){var t=e.title,a=e.history,s=e.linkUrl,n=e.match;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"pentagon",onClick:function(){return a.push("".concat(n.url).concat(s))},children:Object(u.jsx)("div",{className:"pentagon__content",children:Object(u.jsx)("h1",{className:"pentagon__title",children:t.toUpperCase()})})})})})),O=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={sections:[{title:"About Me",id:1,linkUrl:"about"},{title:"Projects",id:2,linkUrl:"projects"},{title:"Skills",id:3,linkUrl:"skills"},{title:"Contact",id:4,linkUrl:"contact"}]},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"directory-menu",children:this.state.sections.map((function(e){var t=e.id,a=Object(h.a)(e,["id"]);return Object(u.jsx)(f,Object(d.a)({},a),t)}))})}}]),a}(s.Component),p=a(98),x=a.n(p),_=function(){return Object(u.jsxs)("div",{className:"homepage",children:[Object(u.jsx)(x.a,{className:"homepage__particles",params:{particles:{number:{value:60,density:{enable:!0,value_area:900}},color:{value:"#30323D"},size:{value:5,random:!0,anim:{enable:!0,speed:10}},line_linked:{color:{value:"#E8C547"}}}}}),Object(u.jsxs)("div",{className:"homepage__header",children:[Object(u.jsx)("h1",{className:"homepage__header--title",children:" Hi, I'm Andrea"}),Object(u.jsx)("p",{className:"homepage__header--subtitle",children:"I'm a Sofware Developer that believes in building things for enviromental, social and economic good."})]}),Object(u.jsx)(O,{})]})},v=(a(344),function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)(l.b,{className:"navbar-brand",to:"/",children:"Andrea Simental"}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(u.jsxs)("ul",{className:"navbar-nav",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(l.b,{className:"nav-link",to:"/About",children:"About Me"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(l.b,{className:"nav-link",to:"/projects",children:"Projects"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(l.b,{className:"nav-link",to:"/Skills",children:"Skills"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(l.b,{className:"nav-link",to:"/contact",children:"Contact"})})]})})]})})})}),g=a(34),N=a(36),w=(a(95),a(99)),A=Object(b.f)((function(e){var t=e.title,a=e.description,s=e.linkUrl,n=(e.imgUrl,e.gitUrl),c=e.tools;return Object(u.jsxs)("div",{className:"custom-card",children:[Object(u.jsx)("div",{className:"custom-card__header",children:Object(u.jsx)("h1",{className:"custom-card__title",children:t})}),Object(u.jsxs)("div",{className:"custom-card__body",children:[Object(u.jsx)("p",{className:"project__description",children:a}),Object(u.jsx)("hr",{}),Object(u.jsx)("h2",{className:"custom-card__body-title",children:"Tools used"}),Object(u.jsx)("div",{className:"custom-card__tools",children:c.map((function(e,t){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{className:"custom-card__tools-description",children:[e.name," "]}),Object(u.jsx)("i",{className:e.fAwasome})]})}))})]}),Object(u.jsxs)("div",{className:"custom-card__footer",children:[Object(u.jsx)("a",{className:"custom-card__footer-icon",href:n,target:"blank",children:Object(u.jsx)(g.a,{icon:N.a})}),s&&Object(u.jsx)("a",{className:"custom-card__footer-icon",href:s,target:"blank",children:Object(u.jsx)(g.a,{icon:w.a})})]})]})})),k=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={projects:[{title:"Personal Portfolio",description:"Built a web portfolio to show projects, skills, and other relevant information",imgUrl:"../assets/webMarks.png",id:1,gitUrl:"https://github.com/anlsim/anlsim.github.io",tools:[{name:"",fAwasome:"fab fa-react"},{name:"",fAwasome:"fab fa-sass"},{name:"",fAwasome:"fab fa-bootstrap"}],linkUrl:"https://anlsim.github.io/"},{title:"Web Marks",description:"Built a web application that allows people to save and organize web URLs on boards based on specific subjects or collections.",imgUrl:"../assets/webMarks.png",id:2,gitUrl:"https://github.com/anlsim/WebMarks",tools:[{name:"C#",fAwasome:""},{name:"ASP.NET",fAwasome:""},{name:"MVC",fAwasome:""},{name:"",fAwasome:"fab fa-css3-alt"},{name:"",fAwasome:"fab fa-bootstrap"}],linkUrl:""},{title:"Task Tracker",description:"Team project to build a web application to help organize and keep track of tasks. Redesigned the View. Added new features to optimize the project.",imgUrl:"../assets/webMarks.png",id:3,gitUrl:"https://github.com/anlsim/TimeTracker",tools:[{name:"C#",fAwasome:""},{name:"ASP.NET",fAwasome:""},{name:"MVC",fAwasome:""},{name:"",fAwasome:"fab fa-css3-alt"},{name:"",fAwasome:"fab fa-bootstrap"}],linkUrl:""},{title:"Photography Portfolio",description:"Personal photography portfolio. Built with HTML and Bootstrap",imgUrl:"../assets/webMarks.png",id:4,gitUrl:"https://github.com/anlsim/photography_website",tools:[{name:"",fAwasome:"fab fa-html5"},{name:"",fAwasome:"fab fa-css3-alt"},{name:"",fAwasome:"fab fa-bootstrap"}],linkUrl:"https://anlsim.github.io/photography_website/"}]},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"directory-menu",children:this.state.projects.map((function(e){var t=e.id,a=Object(h.a)(e,["id"]);return Object(u.jsx)(A,Object(d.a)({},a),t)}))})}}]),a}(n.a.Component),C=(a(348),function(e){return Object(u.jsx)("div",{className:"hero",children:Object(u.jsx)("div",{className:"hero__background",children:Object(u.jsx)("h1",{className:"hero__text",children:e.title})})})}),U=(a(349),function(e){return Object(u.jsxs)("main",{children:[Object(u.jsx)(v,{}),Object(u.jsx)(C,{title:e.title}),Object(u.jsx)(k,{})]})}),S=(a(350),function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{}),Object(u.jsx)(C,{title:e.title}),Object(u.jsxs)("div",{className:"contact",children:[Object(u.jsx)("h2",{className:"contact__icon",children:Object(u.jsx)("a",{className:"contact__icon-color",href:"https://github.com/anlsim",target:"blank",children:Object(u.jsx)(g.a,{icon:N.a})})}),Object(u.jsx)("h2",{className:"contact__icon",children:Object(u.jsx)("a",{className:"contact__icon-color",href:"https://www.linkedin.com/in/andrea-simental/",target:"blank",children:Object(u.jsx)(g.a,{icon:N.b})})})]})]})}),y=Object(b.f)((function(e){return Object(u.jsxs)("div",{className:"custom-card",children:[Object(u.jsx)("div",{className:"custom-card__header",children:Object(u.jsx)("h1",{className:"custom-card__title",children:e.title})}),Object(u.jsx)("div",{className:"custom-card__body",children:e.skillItem.map((function(e,t){return Object(u.jsxs)("div",{className:"custom-card__tools",children:[Object(u.jsx)("i",{className:e.fAwesome}),e.name]},t)}))})]})})),P=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={skills:[{id:1,title:"Languages",skillItem:[{name:"",fAwesome:"fab fa-java"},{name:"C#",fAwesome:null},{name:"",fAwesome:"fab fa-js-square"},{name:"SQL",fAwesome:null},{name:"",fAwesome:"fab fa-html5"},{name:"",fAwesome:"fab fa-css3-alt"},{name:"",fAwesome:"fab fa-sass"}]},{id:2,title:"Frameworks",skillItem:[{name:"",fAwesome:"fab fa-bootstrap"},{name:"",fAwesome:"fab fa-react"},{name:"",fAwesome:"fab fa-vuejs"},{name:"",fAwesome:"fab fa-node"},{name:"ASP.NET",fAwesome:null}]},{id:3,title:"Other",skillItem:[{name:"OPP",fAwesome:null},{name:"MVC",fAwesome:null},{name:"",fAwesome:"fab fa-git"},{name:"",fAwesome:"fab fa-github"},{name:"",fAwesome:"fab fa-aws"},{name:"Azure",fAwesome:null},{name:"",fAwesome:"fab fa-figma"}]},{id:4,title:"Adobe",skillItem:[{name:"Photoshop"},{name:"Illustrator"},{name:"Lightroom"},{name:"InDesign"},{name:"Xd"}]}]},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"directory-menu",children:this.state.skills.map((function(e){var t=e.id,a=Object(h.a)(e,["id"]);return Object(u.jsx)(y,Object(d.a)({},a),t)}))})})}}]),a}(n.a.Component),E=function(e){return Object(u.jsxs)("main",{children:[Object(u.jsx)(v,{}),Object(u.jsx)(C,{title:e.title}),Object(u.jsx)(P,{})]})},I=(a(351),function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{}),Object(u.jsx)(C,{title:e.title}),Object(u.jsxs)("div",{className:"aboutme",children:[Object(u.jsx)("div",{className:"aboutme__img"}),Object(u.jsxs)("div",{className:"aboutme__info",children:[Object(u.jsx)("h2",{className:"aboutme__info__title",children:"Andrea Simental"}),Object(u.jsx)("p",{className:"aboutme__info__description",children:"Collaborative and creative Software Developer with a keen interest in building responsive and scalable web apps to enhance user experience. Fluent in Spanish and English, accustomed to working with cross-cultural, global teams."})]})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{className:"container__title",children:"Experience"}),Object(u.jsxs)("div",{className:"container__main",children:[Object(u.jsx)("h3",{className:"container__subtitle",children:"Junior Developer \u2022 July - Present"}),Object(u.jsx)("p",{className:"container__subtitle-main",children:"D2 Creative\u2022 Full Time"}),Object(u.jsx)("p",{className:"container__description",children:"Currently developing websites on a variety of platforms."})]}),Object(u.jsxs)("div",{className:"container__main",children:[Object(u.jsx)("h3",{className:"container__subtitle",children:"Frontend Developer \u2022 March - July 2021"}),Object(u.jsx)("p",{className:"container__subtitle-main",children:"Impakter \u2022 Internship"}),Object(u.jsxs)("p",{className:"container__description",children:["Design and develop the frontend of the Certificate application while utilizing reusable code with Vue.js and Bootstrap. to complete projects in the future. Designed UI wireframes using Figma. Developed Frontend with Vue.js and Bootstrap.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"\u2022 Designed and developed UI wireframes using Figma.",Object(u.jsx)("br",{}),"\u2022 Created UI of the certificate tool to detect environmental or social impact for companies.",Object(u.jsx)("br",{}),"\u2022 Transformed business and functional needs into documented technical specifications in collaboration with team members."]})]})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{className:"container__title",children:"Education"}),Object(u.jsxs)("div",{className:"container__main",children:[Object(u.jsx)("h3",{className:"container__subtitle",children:"BACHELOR\u2019S OF APPLIED SCIENCE DEGREE \u2022 2019 - 2021"}),Object(u.jsx)("p",{className:"container__subtitle-main",children:"Computing and Software Development \u2022 GPA: 3.71"}),Object(u.jsx)("p",{className:"container__description",children:"Lake Washington Institute of Technology \u2022 Seattle, WA"})]}),Object(u.jsxs)("div",{className:"container__main",children:[Object(u.jsx)("h3",{className:"container__subtitle",children:"ASSOCIATE\u2019S OF APPLIED SCIENCE \u2022 2017 - 2019"}),Object(u.jsx)("p",{className:"container__subtitle-main",children:"Computing and Software Development \u2022 GPA: 3.68"}),Object(u.jsx)("p",{className:"container__description",children:"Lake Washington Institute of Technology \u2022 Seattle, WA"})]}),Object(u.jsxs)("div",{className:"container__main",children:[Object(u.jsx)("h3",{className:"container__subtitle",children:"BACHELOR\u2019S DEGREE \u2022 2007 - 2011"}),Object(u.jsx)("p",{className:"container__subtitle-main",children:"Graphic Design \u2022 GPA: 3.80"}),Object(u.jsx)("p",{className:"container__description",children:"Universidad de Guadalajara - CUAAD \u2022 Guadalajara, MX"})]})]})]})}),D=function(e){Object(j.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={title:"Andrea Simental",headerLinks:[{title:"Home",path:"/"},{title:"About Me",path:"/about"},{title:"Projects",path:"/projecst"},{title:"Resume",path:"/resume"},{title:"Contact Me",path:"/contact"}],home:{title:"Andrea's Portfolio"},about:{title:"About Me"},projects:{title:"Projects"},skills:{title:"Skills"},contact:{title:"Contact Me"}},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.a,{children:Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.a,{path:"/",exact:!0,render:function(){return Object(u.jsx)(_,{title:e.state.home.title})}}),Object(u.jsx)(b.a,{path:"/about",render:function(){return Object(u.jsx)(I,{title:e.state.about.title})}}),Object(u.jsx)(b.a,{path:"/skills",render:function(){return Object(u.jsx)(E,{title:e.state.skills.title})}}),Object(u.jsx)(b.a,{path:"/projects",render:function(){return Object(u.jsx)(U,{title:e.state.projects.title})}}),Object(u.jsx)(b.a,{path:"/contact",render:function(){return Object(u.jsx)(S,{title:e.state.contact.title})}})]})}),Object(u.jsx)("div",{})]})}}]),a}(s.Component);i.a.render(Object(u.jsx)(l.a,{children:Object(u.jsx)(D,{})}),document.getElementById("root"))},50:function(e,t,a){},95:function(e,t,a){}},[[352,1,2]]]);
//# sourceMappingURL=main.782fb5da.chunk.js.map