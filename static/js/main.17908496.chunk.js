(this.webpackJsonpkeeper=this.webpackJsonpkeeper||[]).push([[0],{54:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(7),j=n.n(r),a=n(39),i=n(22),o=n(35),s=n.n(o),l=n(2);var u=function(){return Object(l.jsx)("header",{children:Object(l.jsxs)("h1",{children:[Object(l.jsx)(s.a,{}),"Keeper"]})})},b=n(37),O=n.n(b);var d=function(e){return Object(l.jsxs)("div",{className:"note",children:[Object(l.jsx)("h1",{children:e.title}),Object(l.jsx)("p",{children:e.content}),Object(l.jsx)("button",{onClick:function(){e.onDelete(e.id)},children:Object(l.jsx)(O.a,{})})]})},h=new Date;var x=function(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("p",{children:["Copywrite from Sherzod ",h.getFullYear()]})})},f=n(26),p=n(34),v=n(38),m=n.n(v),k=n(71),C=n(72);var g=function(e){var t=Object(c.useState)({title:"",content:""}),n=Object(i.a)(t,2),r=n[0],j=n[1],a=Object(c.useState)(!1),o=Object(i.a)(a,2),s=o[0],u=o[1];function b(e){var t=e.target,n=t.name,c=t.value;j((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(f.a)({},n,c))}))}return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{className:"create-note",children:[s?Object(l.jsx)("input",{name:"title",value:r.title,placeholder:"Title",onChange:b}):null,Object(l.jsx)("textarea",{onClick:function(){u(!0)},rows:s?"3":"1",name:"content",value:r.content,placeholder:"Take a note...",onChange:b}),Object(l.jsx)(C.a,{in:s,children:Object(l.jsx)(k.a,{onClick:function(t){e.addNotes(r),t.preventDefault(),j({title:"",content:""})},children:Object(l.jsx)(m.a,{})})})]})})};var w=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];function j(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsx)(g,{addNotes:function(e){r((function(t){return[].concat(Object(a.a)(t),[e])}))}}),n.map((function(e,t){return Object(l.jsx)(d,{id:t,title:e.title,content:e.content,onDelete:j},t)})),Object(l.jsx)(x,{})]})};j.a.render(Object(l.jsx)(w,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.17908496.chunk.js.map