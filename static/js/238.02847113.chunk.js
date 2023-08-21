"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[238],{2238:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,i,a,o,s,d,c=t(9434),p=t(2791),l=t(9856),u=t(3634),x=function(n){return n.contacts.items},h=function(n){return n.contacts.isLoading},g=function(n){return n.contacts.error},f=function(n){return n.filters.filter},m=t(4768),b=t(168),j=t(8547),v=j.ZP.ul(r||(r=(0,b.Z)(["\n  padding: 10px;\n"]))),Z=j.ZP.li(i||(i=(0,b.Z)(["\n  margin-bottom: 10px;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n\n  border: solid 1px #787878;\n  border-radius: 5px;\n"]))),w=j.ZP.div(a||(a=(0,b.Z)(["\n  margin-right: 15px;\n  border: 1px solid #787878;\n  border-radius: 4px;\n  width: 27px;\n  height: 27px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n\n  svg {\n    width: 25px;\n    height: 25px;\n  }\n"]))),y=j.ZP.p(o||(o=(0,b.Z)(["\n  font-size: 24px;\n  ::first-letter {\n    color: ",";\n  }\n  span {\n    text-decoration: underline;\n  }\n"])),(function(n){return n.rgb})),C=j.ZP.button(s||(s=(0,b.Z)(["\n  color: black;\n  margin-right: 0;\n  margin-left: auto;\n  border: none;\n  border-radius: 5px;\n  height: 40px;\n  border: none;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n\n  svg {\n    width: 25px;\n    height: 25px;\n  }\n\n  &:hover,\n  &:focus {\n    color: rgb(255, 255, 255);\n    background-color: red;\n    cursor: pointer;\n  }\n"]))),P=t(7481),k=t(184);function z(){var n=(0,c.v9)(x),e=(0,c.v9)(f).toLowerCase(),t=(0,c.I0)(),r=function(n){t((0,u.GK)(n.currentTarget.id))},i=e&&""!==e?n.filter((function(n){return n.name.toLowerCase().includes(e)})):n;return(0,k.jsx)(v,{children:i.map((function(n){return(0,k.jsxs)(Z,{rgb:(0,P.r)(),children:[(0,k.jsx)(w,{children:(0,k.jsx)(m.FJ3,{})}),(0,k.jsxs)(y,{rgb:(0,P.r)(),children:[n.name,": ",(0,k.jsx)("span",{children:n.number})]}),(0,k.jsx)(C,{type:"button",id:n.id,onClick:r,children:(0,k.jsx)(m.bjh,{})})]},n.id)}))})}var _=j.ZP.label(d||(d=(0,b.Z)(["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  padding: 10px;\n  font-size: 25px;\n\n  input {\n    padding: 8px;\n  }\n"]))),A=t(3165);function L(){var n=(0,c.I0)();return(0,k.jsxs)(_,{children:["Find contact by the name",(0,k.jsx)("input",{type:"text",name:"filter",onChange:function(e){n((0,A.l)(e.target.value))}})]})}var F,I,q,J,K,N=t(6182),S=(j.ZP.section(F||(F=(0,b.Z)(["\n  max-width: 540px;\n"]))),j.ZP.form(I||(I=(0,b.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  input {\n    padding: 8px;\n  }\n"])))),Y=j.ZP.ul(q||(q=(0,b.Z)(["\n  padding: 0;\n  display: flex;\n"]))),B=j.ZP.li(J||(J=(0,b.Z)(["\n  margin-right: 10px;\n  p {\n    margin-bottom: 8px;\n    font-size: 25px;\n  }\n"]))),D=j.ZP.button(K||(K=(0,b.Z)(["\n  border-radius: 5px;\n  height: 40px;\n  border: none;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n\n  &:hover,\n  &:focus {\n    color: rgb(255, 255, 255);\n    background-color: green;\n    cursor: pointer;\n  }\n\n  svg {\n    margin-right: 10px;\n    width: 25px;\n    height: 25px;\n  }\n"]))),E=function(){var n=(0,c.I0)(),e=(0,c.v9)(x);return(0,k.jsxs)(S,{onSubmit:function(t){t.preventDefault();var r=t.target,i=r.name.value,a=r.number.value;if(e.find((function(n){return n.name.toLowerCase()===i.toLowerCase()})))return N.Am.warn("".concat(i," is alredy in contacts."));n((0,u.uK)({name:i,number:a})),r.reset()},children:[(0,k.jsxs)(Y,{children:[(0,k.jsxs)(B,{children:[(0,k.jsx)("p",{children:"Name"}),(0,k.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsxs)(B,{children:[(0,k.jsx)("p",{children:"Contact"}),(0,k.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),(0,k.jsxs)(D,{type:"submit",children:[(0,k.jsx)(m.moY,{}),"Add contact"]})]})},G=function(){var n=(0,c.I0)(),e=(0,c.v9)(h),t=(0,c.v9)(g);return(0,p.useEffect)((function(){n((0,u.yF)())}),[n]),(0,k.jsxs)("div",{children:[(0,k.jsx)("h1",{children:"Your phonebook"}),(0,k.jsx)(E,{}),(0,k.jsx)("h2",{children:"Contacts"}),(0,k.jsx)(L,{}),e&&!t&&(0,k.jsx)(l.fe,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"}),(0,k.jsx)(z,{})]})}}}]);
//# sourceMappingURL=238.02847113.chunk.js.map