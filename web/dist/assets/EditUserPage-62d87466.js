import{g as i,a as d,j as s,d as a}from"./index-65dccdee.js";import{t as r}from"./index-e3e85086.js";import{U as u}from"./UserForm-3392ac95.js";import"./index-574b20c6.js";const p=i`
  query EditUserById($id: String!) {
    user: user(id: $id) {
      id
      externalAuthProvider
      externalAuthId
    }
  }
`,U=i`
  mutation UpdateUserMutation($id: String!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      externalAuthProvider
      externalAuthId
    }
  }
`,g=()=>s.jsx("div",{children:"Loading..."}),x=({error:e})=>s.jsx("div",{className:"rw-cell-error",children:e==null?void 0:e.message}),h=({user:e})=>{const[n,{loading:o,error:l}]=d.useMutation(U,{onCompleted:()=>{r.toast.success("User updated"),a.navigate(a.routes.users())},onError:t=>{r.toast.error(t.message)}}),c=(t,m)=>{n({variables:{id:m,input:t}})};return s.jsxs("div",{className:"rw-segment",children:[s.jsx("header",{className:"rw-segment-header",children:s.jsxs("h2",{className:"rw-heading rw-heading-secondary",children:["Edit User ",e==null?void 0:e.id]})}),s.jsx("div",{className:"rw-segment-main",children:s.jsx(u,{user:e,onSave:c,error:l,loading:o})})]})},E=d.createCell({QUERY:p,Loading:g,Failure:x,Success:h,displayName:"EditUserCell"}),A=({id:e})=>s.jsx(E,{id:e});export{A as default};
