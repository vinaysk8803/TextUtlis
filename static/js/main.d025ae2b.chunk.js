(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(15),l=a.n(n),o=(a(22),a(10)),r=(a(23),a(0));function i(e){var t={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"#042743":"white"};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container",style:t,children:[Object(r.jsx)("h2",{className:"my-3",children:"About Us"}),Object(r.jsxs)("div",{className:"accordion",id:"accordionExample",style:t,children:[Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:t,children:Object(r.jsx)("strong",{children:" Analyz your Text"})})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsx)("div",{className:"accordion-body",style:t,children:"Here we have an extensive set of web-based text processing tools and utilities that will help you automate the recurring tasks of editing and formatting huge chunk of text. Using these text manipulation tools can save you many hours of typing, and will increase your productivity."})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:t,children:Object(r.jsx)("strong",{children:"Free to use"})})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsx)("div",{className:"accordion-body",style:t,children:"You can find a lot of useful text tools here with different functions, from sorting data, converting letter case, cleaning texts, removing unwanted characters, up to advanced replace operations."})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:t,children:Object(r.jsx)("strong",{children:" Browser compatible"})})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsx)("div",{className:"accordion-body",style:t,children:"This handy word counting tool runs in all popular web browsers such as Firefox, Chrome, Opera, Safari, Internet Explorer... This tool is suitable to count words and characters in books, essays, novels, blogs, Twitter, Facebook statuses..."})})]})]})]})})}var d=a(8);function b(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(d.b,{className:"navbar-brand",to:"#",children:e.tittle}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function h(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),s=a[0],n=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(r.jsx)("h2",{children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){n(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#042743":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-2",onClick:function(){var t=s.toUpperCase();n(t),e.showAlert("Converted to upppercase","primary")},children:"Convert to UpperCase"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.toLowerCase();e.showAlert("Converted to Lowercase","primary"),n(t)},children:"Convert to LowerCase"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){n(""),e.showAlert("Text Box has been reset","success")},children:"Clear Text"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.split(/[ ]+/);n(t.join(" ")),e.showAlert("Extra Spaces has been Deleted","success")},children:"Remove Extra Spaces"})]}),Object(r.jsxs)("div",{className:"container my-4",style:{color:"dark"===e.mode?"white":"black"},children:[Object(r.jsx)("h2",{children:"Your text Summary"}),Object(r.jsxs)("p",{children:[s.split(" ").filter((function(e){return 0!==e.length})).length," words, ",s.length," characters"]}),Object(r.jsxs)("p",{children:[.008*s.split(" ").filter((function(e){return 0!==e.length})).length," Minutes for read"]}),Object(r.jsx)("h2",{children:"Preview"}),Object(r.jsx)("p",{children:s.length>0?s:"Nothing to preview"})]})]})}function j(e){return Object(r.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(r.jsx)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show "),role:"alert",children:Object(r.jsx)("strong",{children:e.alert.msg})})})}var m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),l=Object(o.a)(n,2),u=l[0],x=l[1],p=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),2e3)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(b,{tittle:"TextUtils",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#042743",p("Dark Mode enable","success")):(s("light"),document.body.style.backgroundColor="white",p("Light Mode enable","success"))}}),Object(r.jsx)(j,{alert:u}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{exact:!0,path:"/about",children:Object(r.jsx)(i,{mode:a})}),Object(r.jsx)(m.a,{exact:!0,path:"/",children:Object(r.jsx)(h,{showAlert:p,heading:"Enter your Text here",mode:a})})]})})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),c(e),s(e),n(e),l(e)}))};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.d025ae2b.chunk.js.map