(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(8),s=c.n(n),r=(c(14),c(15),c(9)),i=c(5),l=c(7),d=(c(16),c(2)),o=c.n(d),j=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],h=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],u=c(0),b=function(e,t){return e.find((function(e){return e.id===t}))||null},x=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var t=b(h,e.categoryId)||null,c=b(j,t.ownerId)||null;return Object(l.a)(Object(l.a)({},e),{},{category:t,owner:c})})),m=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),l=Object(i.a)(s,2),d=l[0],b=l[1],m=Object(a.useState)([]),O=Object(i.a)(m,2),f=O[0],p=O[1],y=null!==c?x.filter((function(e){return e.owner.id===c.id})):x,N=""!==d?y.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase().trim())})):y,g=f.length>0?N.filter((function(e){return f.includes(e.category)})):y;return Object(u.jsx)("div",{className:"section",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"title",children:"Product Categories"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsxs)("nav",{className:"panel",children:[Object(u.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(u.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(u.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",className:o()({"is-active":null===c}),onClick:function(){return n(null)},children:"All"}),j.map((function(e){return Object(u.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:o()({"is-active":e.name===(null===c||void 0===c?void 0:c.name)}),onClick:function(){return n(e)},children:e.name},e.id)}))]}),Object(u.jsx)("div",{className:"panel-block",children:Object(u.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:d,onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),!d||Object(u.jsx)("span",{className:"icon is-right",children:Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return b("")}})})]})}),Object(u.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(u.jsx)("a",{href:"#/","data-cy":"AllCategories",className:o()("button is-success mr-6",{"is-outlined":0!==f.length}),onClick:function(){return p([])},children:"All"}),h.map((function(e){return Object(u.jsx)("a",{"data-cy":"Category",className:o()("button mr-2 my-1",{"is-info":f.includes(e)}),href:"#/",onClick:function(){return p((function(t){return[].concat(Object(r.a)(t),[e])}))},children:e.title})}))]}),Object(u.jsx)("div",{className:"panel-block",children:Object(u.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){return n(null),b(""),void p([])},children:"Reset all filters"})})]})}),Object(u.jsx)("div",{className:"box table-container",children:g.length>0?Object(u.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(u.jsx)("a",{href:"#/",children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(u.jsx)("tbody",{children:g.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"Product",children:[Object(u.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(u.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(u.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(e.category.icon," - ").concat(e.category.title)}),Object(u.jsx)("td",{"data-cy":"ProductUser",className:o()({"has-text-link":"m"===e.owner.sex,"has-text-danger":"f"===e.owner.sex}),children:e.owner.name})]},e.id)}))})]}):Object(u.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"})})]})})};s.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6f7e9f21.chunk.js.map