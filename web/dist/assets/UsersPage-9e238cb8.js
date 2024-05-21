import{g as l,a as d,j as e,d as r}from"./index-65dccdee.js";import{t as n}from"./index-e3e85086.js";import{t as i}from"./formatters-ef2ce1ab.js";import"./index-714914bb.js";const u=l`
  mutation DeleteUserMutation($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`,h=({users:s})=>{const[o]=d.useMutation(u,{onCompleted:()=>{n.toast.success("User deleted")},onError:t=>{n.toast.error(t.message)},refetchQueries:[{query:a}],awaitRefetchQueries:!0}),c=t=>{confirm("Are you sure you want to delete user "+t+"?")&&o({variables:{id:t}})};return e.jsx("div",{className:"rw-segment rw-table-wrapper-responsive",children:e.jsxs("table",{className:"rw-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Id"}),e.jsx("th",{children:"External auth provider"}),e.jsx("th",{children:"External auth id"}),e.jsx("th",{children:" "})]})}),e.jsx("tbody",{children:s.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:i(t.id)}),e.jsx("td",{children:i(t.externalAuthProvider)}),e.jsx("td",{children:i(t.externalAuthId)}),e.jsx("td",{children:e.jsxs("nav",{className:"rw-table-actions",children:[e.jsx(r.Link,{to:r.routes.user({id:t.id}),title:"Show user "+t.id+" detail",className:"rw-button rw-button-small",children:"Show"}),e.jsx(r.Link,{to:r.routes.editUser({id:t.id}),title:"Edit user "+t.id,className:"rw-button rw-button-small rw-button-blue",children:"Edit"}),e.jsx("button",{type:"button",title:"Delete user "+t.id,className:"rw-button rw-button-small rw-button-red",onClick:()=>c(t.id),children:"Delete"})]})})]},t.id))})]})})},a=l`
  query FindUsers {
    users {
      id
      externalAuthProvider
      externalAuthId
    }
  }
`,x=()=>e.jsx("div",{children:"Loading..."}),m=()=>e.jsxs("div",{className:"rw-text-center",children:["No users yet. ",e.jsx(r.Link,{to:r.routes.newUser(),className:"rw-link",children:"Create one?"})]}),j=({error:s})=>e.jsx("div",{className:"rw-cell-error",children:s==null?void 0:s.message}),w=({users:s})=>e.jsx(h,{users:s}),b=d.createCell({QUERY:a,Loading:x,Empty:m,Failure:j,Success:w,displayName:"UsersCell"}),v=()=>e.jsx(b,{});export{v as default};
