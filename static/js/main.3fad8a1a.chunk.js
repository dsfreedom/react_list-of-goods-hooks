(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,o=n(7),s=n.n(o),i=n(5),r=n(8),a=n(1),u=(n(13),n(14),n(4)),l=n.n(u);!function(t){t.Name="name",t.Length="length",t.None=""}(c||(c={}));var b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=c.Name,d=c.Length;var g=function(){var t=Object(a.useState)(c.None),e=Object(i.a)(t,2),n=e[0],o=e[1],s=Object(a.useState)(!1),u=Object(i.a)(s,2),g=u[0],f=u[1],m=Object(a.useState)(!1),O=Object(i.a)(m,2),p=O[0],N=O[1],v=function(t,e){var n=e.sortField,c=e.isReversed,o=Object(r.a)(t);return n&&o.sort((function(t,e){switch(n){case j:return t.localeCompare(e);case d:return t.length-e.length;default:return 0}})),c&&o.reverse(),o}(h,{sortField:n,isReversed:g});function x(t){o(t),N(!0)}return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",onClick:function(){return x(j)},className:"button is-info ".concat(l()({"is-light":n!==j})),children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:function(){return x(d)},className:"button is-success ".concat(l()({"is-light":n!==d})),children:"Sort by length"}),Object(b.jsx)("button",{type:"button",onClick:function(){var t;(t=g)&&n===c.None?(N(!1),f(!1)):t&&n!==c.None?f(!1):t||n===c.None?t||n!==c.None||(N(!0),f(!0)):f(!0)},className:"button is-warning ".concat(l()({"is-light":!g})),children:"Reverse"}),p&&Object(b.jsx)("button",{type:"button",onClick:function(){o(c.None),f(!1),N(!1)},className:"button is-danger is-light",children:"Reset"})]}),Object(b.jsx)("ul",{children:v.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3fad8a1a.chunk.js.map