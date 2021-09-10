(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(15),o=t.n(c),a=t(6),i=t(3),u=t(4),s=t.n(u),d="/api/persons",l=function(){return s.a.get(d).then((function(e){return e.data}))},b=function(e){return s.a.post(d,e).then((function(e){return e.data}))},f=function(e){return s.a.delete("".concat(d,"/").concat(e))},j=function(e){return s.a.put("".concat(d,"/").concat(e.id),e).then((function(e){return e.data}))},h=t(0),m=function(e){return Object(h.jsxs)("p",{children:["filter shown with ",Object(h.jsx)("input",{value:e.filterName,onChange:e.handlefilterName})]})},O=function(e){var n=e.person,t=e.handleDelete;return Object(h.jsxs)("p",{children:[n.name," ",n.number,Object(h.jsx)("button",{onClick:t,children:"delete"})]})},g=function(e){return Object(h.jsx)("div",{children:e.filteredPersons.map((function(n){return Object(h.jsx)(O,{person:n,handleDelete:function(){return e.handleDeleteOf(n.id)}},n.name)}))})},p=function(e){var n=e.createNewPerson,t=e.newName,r=e.handleNewName,c=e.newNumber,o=e.handleNewNumber;return Object(h.jsxs)("form",{onSubmit:n,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:t,onChange:r})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:c,onChange:o})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})},w={error:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},success:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},v=function(e){return e.message?Object(h.jsx)("div",{style:e.isError?w.error:w.success,children:e.message}):null},x=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)([]),u=Object(i.a)(o,2),s=u[0],d=u[1],O=Object(r.useState)(""),w=Object(i.a)(O,2),x=w[0],N=w[1],S=Object(r.useState)(""),k=Object(i.a)(S,2),y=k[0],C=k[1],E=Object(r.useState)(""),D=Object(i.a)(E,2),P=D[0],B=D[1],L=Object(r.useState)({}),z=Object(i.a)(L,2),I=z[0],J=z[1];return Object(r.useEffect)((function(){l().then((function(e){c(e),d(e)})).catch((function(e){console.log(e)}))}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(v,{message:I.message,isError:I.isError}),Object(h.jsx)(m,{filterName:P,handlefilterName:function(e){B(e.target.value.toLowerCase()),d(t.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())})))}}),Object(h.jsx)("h2",{children:"add a new"}),Object(h.jsx)(p,{createNewPerson:function(e){var n;(e.preventDefault(),n=x,t.find((function(e){return e.name===n})))?window.confirm("".concat(x," is already added to phonebook, replace the old number with a new one?"))&&function(e){var n=t.find((function(n){return n.name===e})),r=Object(a.a)(Object(a.a)({},n),{},{number:y});j(r).then((function(e){c(t.map((function(n){return n.id!==e.id?n:e}))),d(t.map((function(n){return n.id!==e.id?n:e})))}))}(x):b({name:x,number:y}).then((function(e){J({message:"Added ".concat(e.name),isError:!1}),setTimeout((function(){J({})}),3e3),c(t.concat(e)),d(t.concat(e)),N(""),C("")}))},newName:x,newNumber:y,handleNewName:function(e){N(e.target.value)},handleNewNumber:function(e){C(e.target.value)}}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(g,{filteredPersons:s,handleDeleteOf:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name," ?"))&&f(e).then((function(){c(t.filter((function(n){return n.id!==e}))),d(t.filter((function(n){return n.id!==e})))})).catch((function(){J({message:"Information of ".concat(n.name," has already been removed from server"),isError:!0}),setTimeout((function(){J({})}),3e3)}))}})]})};o.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.ce52d978.chunk.js.map