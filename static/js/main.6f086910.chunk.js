(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.tittle}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h2",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#042743":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.toUpperCase();r(t),e.showAlert("Converted to upppercase","primary")},children:"Convert to UpperCase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.toLowerCase();e.showAlert("Converted to Lowercase","primary"),r(t)},children:"Convert to LowerCase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){r(""),e.showAlert("Text Box has been reset","success")},children:"Clear Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.split(/[ ]+/);r(t.join(" ")),e.showAlert("Extra Spaces has been Deleted","success")},children:"Remove Extra Spaces"})]}),Object(o.jsxs)("div",{className:"container my-4",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h2",{children:"Your text Summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words, ",n.length," characters"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," Minutes for read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter Something in textbox above"})]})]})}function d(e){return e.alert&&Object(o.jsx)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show "),role:"alert",children:Object(o.jsx)("strong",{children:e.alert.msg})})}var h=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),h=s[0],j=s[1],m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{tittle:"TextUtils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743",m("Dark Mode enable","success")):(n("light"),document.body.style.backgroundColor="white",m("Light Mode enable","success"))}}),Object(o.jsx)(d,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(b,{showAlert:m,heading:"Enter your Text here",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.6f086910.chunk.js.map