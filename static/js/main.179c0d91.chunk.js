(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),r=n(6),i=n(8),a=n(1),l=(n(13),n(14),n(4)),u=n.n(l);!function(t){t.Name="name",t.Length="length",t.None=""}(c||(c={}));var b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=c.Name,j=c.Length,g=!1;var m=function(){var t=Object(a.useState)(c.None),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(!1),l=Object(r.a)(o,2),m=l[0],f=l[1],p=function(t,e){var n=e.sortField,c=e.isReversed,s=Object(i.a)(t);return n&&(g=!0,s.sort((function(t,e){switch(n){case d:return t.localeCompare(e);case j:return t.length-e.length;default:return 0}}))),c&&(g=!0,s.reverse()),s}(h,{sortField:n,isReversed:m});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",onClick:function(){return s(d)},className:"button is-info ".concat(u()({"is-light":n!==d})),children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:function(){return s(j)},className:"button is-success ".concat(u()({"is-light":n!==j})),children:"Sort by length"}),Object(b.jsx)("button",{type:"button",onClick:function(){return m?(g=!1,f(!1)):f(!0)},className:"button is-warning ".concat(u()({"is-light":!m})),children:"Reverse"}),g&&Object(b.jsx)("button",{type:"button",onClick:function(){s(c.None),f(!1),g=!1},className:"button is-danger is-light",children:"Reset"})]}),Object(b.jsx)("ul",{children:p.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.179c0d91.chunk.js.map