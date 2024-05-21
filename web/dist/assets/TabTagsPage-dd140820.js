import{g as n,a as d,j as t,d as a}from"./index-65dccdee.js";import{t as r}from"./index-e3e85086.js";import{t as i}from"./formatters-ef2ce1ab.js";import"./index-714914bb.js";const u=n`
  mutation DeleteTabTagMutation($id: String!) {
    deleteTabTag(id: $id) {
      id
    }
  }
`,h=({tabTags:s})=>{const[o]=d.useMutation(u,{onCompleted:()=>{r.toast.success("TabTag deleted")},onError:e=>{r.toast.error(e.message)},refetchQueries:[{query:l}],awaitRefetchQueries:!0}),c=e=>{confirm("Are you sure you want to delete tabTag "+e+"?")&&o({variables:{id:e}})};return t.jsx("div",{className:"rw-segment rw-table-wrapper-responsive",children:t.jsxs("table",{className:"rw-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Id"}),t.jsx("th",{children:"Tab id"}),t.jsx("th",{children:"Tag id"}),t.jsx("th",{children:" "})]})}),t.jsx("tbody",{children:s.map(e=>t.jsxs("tr",{children:[t.jsx("td",{children:i(e.id)}),t.jsx("td",{children:i(e.tabId)}),t.jsx("td",{children:i(e.tagId)}),t.jsx("td",{children:t.jsxs("nav",{className:"rw-table-actions",children:[t.jsx(a.Link,{to:a.routes.tabTag({id:e.id}),title:"Show tabTag "+e.id+" detail",className:"rw-button rw-button-small",children:"Show"}),t.jsx(a.Link,{to:a.routes.editTabTag({id:e.id}),title:"Edit tabTag "+e.id,className:"rw-button rw-button-small rw-button-blue",children:"Edit"}),t.jsx("button",{type:"button",title:"Delete tabTag "+e.id,className:"rw-button rw-button-small rw-button-red",onClick:()=>c(e.id),children:"Delete"})]})})]},e.id))})]})})},l=n`
  query FindTabTags {
    tabTags {
      id
      tabId
      tagId
    }
  }
`,b=()=>t.jsx("div",{children:"Loading..."}),m=()=>t.jsxs("div",{className:"rw-text-center",children:["No tabTags yet. ",t.jsx(a.Link,{to:a.routes.newTabTag(),className:"rw-link",children:"Create one?"})]}),x=({error:s})=>t.jsx("div",{className:"rw-cell-error",children:s==null?void 0:s.message}),T=({tabTags:s})=>t.jsx(h,{tabTags:s}),j=d.createCell({QUERY:l,Loading:b,Empty:m,Failure:x,Success:T,displayName:"TabTagsCell"}),E=()=>t.jsx(j,{});export{E as default};
