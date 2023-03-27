import{j as n,a as t,F as c}from"./index-18994478.js";function i({children:d,...e}){return n("button",{className:"p-2 bg-blue-500 rounded-md not-prose",...e,children:d})}function o(d){const e=Object.assign({h1:"h1",p:"p",code:"code",a:"a"},d.components);return t(c,{children:[n(e.h1,{children:"You did it!"}),`
`,n(e.p,{children:"You've found the next Slide!"}),`
`,t(e.p,{children:["To add a new slide, add ",n(e.code,{children:"myslide.mdx"})," to ",n(e.code,{children:"src/slides"})," and then add ",n(e.code,{children:"myslide"})," to ",n(e.code,{children:"order"})," in ",n(e.code,{children:"config.js"}),`.
Your typography will be formatted by `,n(e.a,{href:"https://tailwindcss.com/docs/typography-plugin",children:"@tailwindcss/typography"}),"."]}),`
`,n(e.p,{children:"Because this is MDX, you can also add react components, like this Button:"}),`
`,n(i,{onClick:()=>{alert("you clicked me!!!")},children:n(e.p,{children:"Click me"})})]})}function s(d={}){const{wrapper:e}=d.components||{};return e?n(e,Object.assign({},d,{children:n(o,d)})):o(d)}export{s as default};
