import{g as m,a as c,d as r,j as e}from"./index-65dccdee.js";import{t}from"./index-e3e85086.js";import{U as d}from"./UserForm-3392ac95.js";import"./index-574b20c6.js";const u=m`
  mutation CreateUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`,l=()=>{const[a,{loading:o,error:n}]=c.useMutation(u,{onCompleted:()=>{t.toast.success("User created"),r.navigate(r.routes.users())},onError:s=>{t.toast.error(s.message)}}),i=s=>{a({variables:{input:s}})};return e.jsxs("div",{className:"rw-segment",children:[e.jsx("header",{className:"rw-segment-header",children:e.jsx("h2",{className:"rw-heading rw-heading-secondary",children:"New User"})}),e.jsx("div",{className:"rw-segment-main",children:e.jsx(d,{onSave:i,loading:o,error:n})})]})},h=()=>e.jsx(l,{});export{h as default};
