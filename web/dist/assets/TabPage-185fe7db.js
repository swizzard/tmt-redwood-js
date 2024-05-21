import{g as r,a as i,d as t,j as e}from"./index-65dccdee.js";import{t as n}from"./index-e3e85086.js";import{f as o}from"./formatters-ef2ce1ab.js";import"./index-714914bb.js";const c=r`
  mutation DeleteTabMutation($id: String!) {
    deleteTab(id: $id) {
      id
    }
  }
`,u=({tab:s})=>{const[d]=i.useMutation(c,{onCompleted:()=>{n.toast.success("Tab deleted"),t.navigate(t.routes.tabs())},onError:a=>{n.toast.error(a.message)}}),l=a=>{confirm("Are you sure you want to delete tab "+a+"?")&&d({variables:{id:a}})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"rw-segment",children:[e.jsx("header",{className:"rw-segment-header",children:e.jsx("h2",{className:"rw-heading rw-heading-secondary",children:"Tab Details"})}),e.jsx("table",{className:"rw-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"URL"}),e.jsx("td",{children:e.jsx(t.Link,{to:s.url,target:"_blank",title:"Visit URL",children:s.url})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Notes"}),e.jsx("td",{children:s.notes})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Tags"}),e.jsx("td",{children:o(s.tags)})]})]})})]}),e.jsxs("nav",{className:"rw-button-group",children:[e.jsx(t.Link,{to:t.routes.editTab({id:s.id}),className:"rw-button rw-button-blue",children:"Edit"}),e.jsx("button",{type:"button",className:"rw-button rw-button-red",onClick:()=>l(s.id),children:"Delete"})]})]})},h=r`
  query FindTabById($id: String!) {
    tab: tab(id: $id) {
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
`,m=()=>e.jsx("div",{children:"Loading..."}),x=()=>e.jsx("div",{children:"Tab not found"}),j=({error:s})=>e.jsx("div",{className:"rw-cell-error",children:s==null?void 0:s.message}),b=({tab:s})=>e.jsx(u,{tab:s}),g=i.createCell({QUERY:h,Loading:m,Empty:x,Failure:j,Success:b,displayName:"TabCell"}),f=({id:s})=>e.jsx(g,{id:s});export{f as default};
