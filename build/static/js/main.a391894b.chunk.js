(this["webpackJsonptrivia-numbers"]=this["webpackJsonptrivia-numbers"]||[]).push([[0],{36:function(n,e,t){"use strict";t.r(e);var r,i,c=t(0),s=t(21),o=t.n(s),a=t(15),u=t(9),l=t(5),j=t(3),d=t(2),b=function(n){for(var e=[];e.length<n;){var t=Math.floor(100*Math.random());e.includes(t)||e.push(t)}return e},h=function(n){var e=[];return Object.keys(n).forEach((function(t){e.push(f(t,n[t]))})),e},f=function(n,e){return{question:p(n,e),solution:n,options:m(n)}},p=function(n,e){var t=e.replace(n+" ","");return t[0].toUpperCase()+t.slice(1)},m=function(n){for(var e=[parseInt(n)];e.length<4;){var t=Math.floor(100*Math.random());e.includes(t)||e.push(t)}return e.sort((function(){return Math.random()-.5}))},x=function(){return JSON.parse(localStorage.getItem("questions"))},O=function(){return function(){var n=b(10).join();return fetch("http://numbersapi.com/"+n).then((function(n){return n.json()}))}().then((function(n){return{questions:h(n),index:0,answersList:[]}}))},g=function(n,e,t){var r;r={questions:n,index:e,answersList:t},localStorage.setItem("questions",JSON.stringify(r))},v=t(12),w=t(1),y=j.c.div(r||(r=Object(l.a)(["\n   text-align: center;\n"]))),k=j.c.button(i||(i=Object(l.a)(["\n   background-color: ",";\n   border: none;\n   color: black;\n   padding: 15px 32px;\n   text-align: center;\n   text-decoration: none;\n   font-weight: 800;\n   display: inline-block;\n   font-size: 16px;\n   text-transform: uppercase;\n"])),(function(n){return n.theme.colors.primary}));var q,S,C,z,L=function(){return Object(w.jsxs)(y,{children:[Object(w.jsx)("h3",{children:"Welcome to Trividado number quiz!"}),Object(w.jsx)(v.b,{to:"/trivial",children:Object(w.jsx)(k,{target:"_blank",rel:"noopener noreferrer",children:"Start"})})]})},A=j.c.p(q||(q=Object(l.a)(["\n    font-size: calc(10px + 2vmin);\n    padding: 10px 15px;\n    line-height: 1.5;\n"]))),I=j.c.ul(S||(S=Object(l.a)(["\n    list-style: none;\n    width: 20rem; \n    display: flex;\n    align-item: center;\n    justify-content: space-between;\n    margin: 0 auto;\n    flex-wrap: wrap;\n"]))),N=j.c.li(C||(C=Object(l.a)(["\n    flex-basis: 50%;\n    align-items: center;\n    line-height: 2;\n \n"]))),M=j.c.div(z||(z=Object(l.a)(["\n    border-radius: 50%;\n    display: inline-block;\n    width: 1.3rem;\n    height: 1.3rem;\n    background-color: ",";\n    margin: auto 12px 0;\n    text-align: center;\n    &.selected{\n        background-color:",";\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.secondary}));var G,J,Q=function(n){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(A,{children:n.question.question}),Object(w.jsx)(I,{children:n.question.options.map((function(e,t){return Object(w.jsxs)(N,{onClick:n.saveUserAnswer,children:[Object(w.jsx)(M,{className:parseInt(n.userAnswer)===e?"selected":""}),e]},t)}))})]})},T=j.c.li(G||(G=Object(l.a)(["\n    list-style: none;\n    line-height: 1.5;\n    padding: 10px;\n\n    & .answer {\n        display:flex;\n        justify-content:center;\n        align-items: center;\n        i {\n          margin-right: 8px;\n          font-size: 2em;\n        }\n        & span{\n            display: inline-block;\n            vertical-align: middle;\n            color: ",";\n            font-weight: 100;\n            font-size: 0.7em;\n            margin-left: 3px;\n            }\n        &.error{\n            p,i{\n                color: red;\n            }\n        }\n        &.ok {\n            i,p{\n                color: ",";\n            }\n        }\n    }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.primary})),E=j.c.div(J||(J=Object(l.a)(["\n    border-top: 1px solid #f5f5f5;  \n    padding: 10px;\n"])));var F,U=function(n){var e=n.answersList;return Object(w.jsx)("div",{children:Object(w.jsx)("ul",{children:e.map((function(n,e){return Object(w.jsxs)(T,{children:[Object(w.jsx)(E,{}),Object(w.jsx)("p",{children:n.question}),Object(w.jsxs)("div",{className:"Correct"===n.status?"answer ok":"answer error",children:["Correct"===n.status?Object(w.jsx)("i",{className:"fa fa-check-circle","aria-hidden":"true"}):Object(w.jsx)("i",{className:"fa fa-times-circle","aria-hidden":"true"}),Object(w.jsxs)("p",{children:["Correct"===n.status?"":n.status,"Correct"===n.status?n.solution:Object(w.jsxs)("span",{children:["- Rigth answer was ",n.solution]})]})]})]},n.solution+e)}))})})},B=j.c.button(F||(F=Object(l.a)(["\n   background-color: ",";\n   width: 140px;\n   border: none;\n   color: ",";\n   padding: 15px 19px;\n   text-decoration: none;\n   font-weight: 800;\n   display: inline-block;\n   font-size: 16px;\n   text-transform: uppercase;\n   margin-top: 40px;\n   margin-bottom: 40px;\n   margin-right: 20px;\n\n   &:last-of-type{\n      margin-right: 0;\n}\n"])),(function(n){return n.primary?function(n){return n.theme.colors.primary}:function(n){return n.theme.colors.secondary}}),(function(n){return n.theme.colors.black}));var P,R,W,_=function(n){var e=n.questions.questions,t=Object(c.useState)(n.questions.index),r=Object(u.a)(t,2),i=r[0],s=r[1],o=Object(c.useState)(e[0]),a=Object(u.a)(o,2),l=a[0],j=a[1],d=Object(c.useState)(),b=Object(u.a)(d,2),h=b[0],f=b[1],p=Object(c.useState)(n.questions.answersList),m=Object(u.a)(p,2),x=m[0],O=m[1],g=Object(c.useState)(!1),v=Object(u.a)(g,2),y=v[0],k=v[1],q=function(){if(i<e.length-1){var t=i+1;s(t),j(e[t])}else n.setGameOver(!0)},S=function(){i===e.length-1&&k(!0)};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("h2",{children:["Question ",i+1," of ",e.length]}),Object(w.jsx)("div",{children:!n.gameOver&&l&&Object(w.jsx)(Q,{question:l,saveUserAnswer:function(n){var e=n.currentTarget;f(e.innerText)},userAnswer:h})}),Object(w.jsxs)("div",{children:[!n.gameOver&&Object(w.jsx)(B,{onClick:function(){var t="Correct";h!==l.solution&&(t="Error");var r=x.concat([{question:l.question,status:t,solution:l.solution}]);n.updateQuestions(e,r.length-1,x),O(r),q(),S()},disabled:y,children:"Confirm"}),!n.gameOver&&Object(w.jsx)(B,{onClick:function(){var t=x.concat([{question:l.question,status:"Skipped",solution:l.solution}]);n.updateQuestions(e,t.length-1,x),O(t),q(),S()},disabled:y,primary:!0,children:"Skip"})]}),Object(w.jsx)(U,{answersList:x}),n.gameOver&&Object(w.jsx)(B,{onClick:n.resetGame,primary:!0,children:"Play Again"})]})},D=Object(j.b)(P||(P=Object(l.a)(["\n  *{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: sans-serif;\n  }\n  body{\n    background-color: ",";;\n  }\n"])),(function(n){return n.theme.colors.dark})),H=j.c.main(R||(R=Object(l.a)(["\n  min-height: 100vh;\n  max-width: 1200px;\n  display: flex;\n  flex-direction: column; \n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 1.5vmin);\n  color: ",";\n  line-height: ","rem;\n  text-align: center;\n  margin: 0 auto;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.spacing[2]})),K=j.c.h1(W||(W=Object(l.a)(["\n  text-transform: uppercase;\n  font-size: calc(10px + 6vmin);\n"])));var V=function(){var n=Object(c.useState)(x()),e=Object(u.a)(n,2),t=e[0],r=e[1],i=Object(c.useState)([]),s=Object(u.a)(i,2),o=s[0],l=s[1],j=Object(c.useState)(!1),b=Object(u.a)(j,2),h=b[0],f=b[1];t||O().then((function(n){r(n)}));var p=function(){f(!1),localStorage.removeItem("questions"),window.location="/"},m=function(n,e,t){g(n,e,t)};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(D,{}),Object(w.jsxs)(H,{children:[Object(w.jsx)(K,{children:"Trividado"}),Object(w.jsxs)(d.c,{children:[Object(w.jsx)(d.a,{exact:!0,path:"/",render:function(n){return Object(w.jsx)(L,Object(a.a)({},n))}}),Object(w.jsx)(d.a,{path:"/trivial",render:function(n){return Object(w.jsx)(_,Object(a.a)(Object(a.a)({},n),{},{questions:t,answersList:o,setAnswerList:l,resetGame:p,setGameOver:f,gameOver:h,updateQuestions:m}))}})]})]})]})};o.a.render(Object(w.jsx)(v.a,{children:Object(w.jsx)(j.a,{theme:{colors:{primary:"#70b25e",secondary:"#ccc",dark:"#282c34",white:"#ffffff",black:"#333333"},spacing:[0,4,8,12,16,20]},children:Object(w.jsx)(V,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.a391894b.chunk.js.map