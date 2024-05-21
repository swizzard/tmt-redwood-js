import{g as i,a as d,d as a,j as e}from"./index-65dccdee.js";import{t as n}from"./index-e3e85086.js";import"./index-714914bb.js";const o=i`
  mutation DeleteTagMutation($id: String!) {
    deleteTag(id: $id) {
      id
    }
  }
`,c=({tag:t})=>{const[r]=d.useMutation(o,{onCompleted:()=>{n.toast.success("Tag deleted"),a.navigate(a.routes.tags())},onError:s=>{n.toast.error(s.message)}}),l=s=>{confirm("Are you sure you want to delete tag "+s+"?")&&r({variables:{id:s}})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"rw-segment",children:[e.jsx("header",{className:"rw-segment-header",children:e.jsx("h2",{className:"rw-heading rw-heading-secondary",children:"Tag Detail"})}),e.jsx("table",{className:"rw-table",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("td",{children:t.name})]})})})]}),e.jsxs("nav",{className:"rw-button-group",children:[e.jsx(a.Link,{to:a.routes.editTag({id:t.id}),className:"rw-button rw-button-blue",children:"Edit"}),e.jsx("button",{type:"button",className:"rw-button rw-button-red",onClick:()=>l(t.id),children:"Delete"})]})]})},g=i`
  query FindTagById($id: String!) {
    tag: tag(id: $id) {
      id
      name
      userId
    }
  }
`,u=()=>e.jsx("div",{children:"Loading..."}),m=()=>e.jsx("div",{children:"Tag not found"}),h=({error:t})=>e.jsx("div",{className:"rw-cell-error",children:t==null?void 0:t.message}),x=({tag:t})=>e.jsx(c,{tag:t}),j=d.createCell({QUERY:g,Loading:u,Empty:m,Failure:h,Success:x,displayName:"TagCell"}),p=({id:t})=>e.jsx(j,{id:t});export{p as default};
