import{g as d,a as i,d as r,j as e}from"./index-65dccdee.js";import{t as n}from"./index-e3e85086.js";import"./index-714914bb.js";const o=d`
  mutation DeleteUserMutation($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`,c=({user:s})=>{const[a]=i.useMutation(o,{onCompleted:()=>{n.toast.success("User deleted"),r.navigate(r.routes.users())},onError:t=>{n.toast.error(t.message)}}),l=t=>{confirm("Are you sure you want to delete user "+t+"?")&&a({variables:{id:t}})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"rw-segment",children:[e.jsx("header",{className:"rw-segment-header",children:e.jsxs("h2",{className:"rw-heading rw-heading-secondary",children:["User ",s.id," Detail"]})}),e.jsx("table",{className:"rw-table",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Id"}),e.jsx("td",{children:s.id})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"External auth provider"}),e.jsx("td",{children:s.externalAuthProvider})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"External auth id"}),e.jsx("td",{children:s.externalAuthId})]})]})})]}),e.jsxs("nav",{className:"rw-button-group",children:[e.jsx(r.Link,{to:r.routes.editUser({id:s.id}),className:"rw-button rw-button-blue",children:"Edit"}),e.jsx("button",{type:"button",className:"rw-button rw-button-red",onClick:()=>l(s.id),children:"Delete"})]})]})},h=d`
  query FindUserById($id: String!) {
    user: user(id: $id) {
      id
      externalAuthProvider
      externalAuthId
    }
  }
`,u=()=>e.jsx("div",{children:"Loading..."}),x=()=>e.jsx("div",{children:"User not found"}),j=({error:s})=>e.jsx("div",{className:"rw-cell-error",children:s==null?void 0:s.message}),m=({user:s})=>e.jsx(c,{user:s}),g=i.createCell({QUERY:h,Loading:u,Empty:x,Failure:j,Success:m,displayName:"UserCell"}),w=({id:s})=>e.jsx(g,{id:s});export{w as default};
