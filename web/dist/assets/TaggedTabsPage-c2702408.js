import{g as d,a as t,j as s}from"./index-65dccdee.js";import{T as g}from"./Tabs-6f66fdc9.js";import"./index-e3e85086.js";import"./formatters-ef2ce1ab.js";import"./index-714914bb.js";const i=d`
  query TaggedTabsQuery($tagId: String!) {
    tag(id: $tagId) {
      name
    }
    taggedTabs(id: $tagId) {
      id
      url
      notes
      userId
      tags {
        tag {
          id
          name
        }
      }
    }
  }
`,n=()=>s.jsx("div",{children:"Loading..."}),r=()=>s.jsx("div",{children:"Empty"}),l=({error:a})=>s.jsxs("div",{style:{color:"red"},children:["Error: ",a==null?void 0:a.message]}),o=({tag:a,taggedTabs:e})=>s.jsxs("div",{children:[s.jsxs("h1",{children:['Tabs tagged "',a.name,'"']}),s.jsx(g,{tabs:e})]}),c=t.createCell({QUERY:i,Loading:n,Empty:r,Failure:l,Success:o,displayName:"TaggedTabsCell"}),b=({tagId:a})=>s.jsxs(s.Fragment,{children:[s.jsx(t.Metadata,{title:"Tagged Tabs",description:"Tagged Tabs"}),s.jsx(c,{tagId:a})]});export{b as default};
