import{g as n,a as i,d as a,j as e}from"./index-65dccdee.js";import{t as d}from"./index-e3e85086.js";import"./index-714914bb.js";const c=n`
  mutation DeleteTabTagMutation($id: String!) {
    deleteTabTag(id: $id) {
      id
    }
  }
`,o=({tabTag:t})=>{const[r]=i.useMutation(c,{onCompleted:()=>{d.toast.success("TabTag deleted"),a.navigate(a.routes.tabTags())},onError:s=>{d.toast.error(s.message)}}),l=s=>{confirm("Are you sure you want to delete tabTag "+s+"?")&&r({variables:{id:s}})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"rw-segment",children:[e.jsx("header",{className:"rw-segment-header",children:e.jsxs("h2",{className:"rw-heading rw-heading-secondary",children:["TabTag ",t.id," Detail"]})}),e.jsx("table",{className:"rw-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Id"}),e.jsx("td",{children:t.id})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Tab id"}),e.jsx("td",{children:t.tabId})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Tag id"}),e.jsx("td",{children:t.tagId})]})]})})]}),e.jsxs("nav",{className:"rw-button-group",children:[e.jsx(a.Link,{to:a.routes.editTabTag({id:t.id}),className:"rw-button rw-button-blue",children:"Edit"}),e.jsx("button",{type:"button",className:"rw-button rw-button-red",onClick:()=>l(t.id),children:"Delete"})]})]})},g=n`
  query FindTabTagById($id: String!) {
    tabTag: tabTag(id: $id) {
      id
      tabId
      tagId
    }
  }
`,T=()=>e.jsx("div",{children:"Loading..."}),h=()=>e.jsx("div",{children:"TabTag not found"}),u=({error:t})=>e.jsx("div",{className:"rw-cell-error",children:t==null?void 0:t.message}),x=({tabTag:t})=>e.jsx(o,{tabTag:t}),b=i.createCell({QUERY:g,Loading:T,Empty:h,Failure:u,Success:x,displayName:"TabTagCell"}),p=({id:t})=>e.jsx(b,{id:t});export{p as default};
