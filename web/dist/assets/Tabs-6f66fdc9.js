import{g as l,a as d,j as t,d as a}from"./index-65dccdee.js";import{t as n}from"./index-e3e85086.js";import{t as o}from"./formatters-ef2ce1ab.js";const c=l`
  query FindTabs {
    tabs {
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
`,u=()=>t.jsx("div",{children:"Loading..."}),h=()=>t.jsxs("div",{className:"rw-text-center",children:["No tabs yet. ",t.jsx(a.Link,{to:a.routes.newTab(),className:"rw-link",children:"Create one?"})]}),x=({error:s})=>t.jsx("div",{className:"rw-cell-error",children:s==null?void 0:s.message}),j=({tabs:s})=>t.jsx(m,{tabs:s}),L=d.createCell({QUERY:c,Loading:u,Empty:h,Failure:x,Success:j,displayName:"TabsCell"}),b=l`
  mutation DeleteTabMutation($id: String!) {
    deleteTab(id: $id) {
      id
    }
  }
`,m=({tabs:s})=>{const[i]=d.useMutation(b,{onCompleted:()=>{n.toast.success("Tab deleted")},onError:e=>{n.toast.error(e.message)},refetchQueries:[{query:c}],awaitRefetchQueries:!0}),r=e=>{confirm("Are you sure you want to delete tab "+e+"?")&&i({variables:{id:e}})};return t.jsx("div",{className:"rw-segment rw-table-wrapper-responsive",children:t.jsxs("table",{className:"rw-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"URL"}),t.jsx("th",{children:"Notes"}),t.jsx("th",{children:"Tags"}),t.jsx("th",{children:" "})]})}),t.jsx("tbody",{children:s.map(e=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx(a.Link,{to:a.routes.tab({id:e.id}),title:"Show tab detail",children:e.url})}),t.jsx("td",{children:o(e.notes)}),t.jsx("td",{children:t.jsx(g,{tags:e.tags})}),t.jsx("td",{children:t.jsxs("nav",{className:"rw-table-actions",children:[t.jsx(a.Link,{to:a.routes.tab({id:e.id}),title:"Show tab detail",className:"rw-button rw-button-small",children:"Show"}),t.jsx(a.Link,{to:a.routes.editTab({id:e.id}),title:"Edit tab "+e.id,className:"rw-button rw-button-small rw-button-blue",children:"Edit"}),t.jsx("button",{type:"button",title:"Delete tab "+e.id,className:"rw-button rw-button-small rw-button-red",onClick:()=>r(e.id),children:"Delete"})]})})]},e.id))})]})})},g=({tags:s})=>t.jsx("ul",{children:s.map(i=>t.jsx(w,{tag:i.tag}))}),w=({tag:{name:s,id:i}})=>{const r=o(s,20);return t.jsx("li",{children:t.jsx(a.Link,{to:a.routes.taggedTabs({tagId:i}),title:`Tabs tagged "${s}"`,children:r})},i)};export{m as T,L as a};
