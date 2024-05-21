import{g,a as m,d as s,j as a}from"./index-65dccdee.js";import{t}from"./index-e3e85086.js";import{T as c}from"./TagForm-3f811310.js";import"./index-574b20c6.js";const d=g`
  mutation CreateTagMutation($input: CreateTagInput!) {
    createTag(input: $input) {
      id
    }
  }
`,u=()=>{const[r,{loading:o,error:n}]=m.useMutation(d,{onCompleted:()=>{t.toast.success("Tag created"),s.navigate(s.routes.tags())},onError:e=>{t.toast.error(e.message)}}),i=e=>{r({variables:{input:e}})};return a.jsxs("div",{className:"rw-segment",children:[a.jsx("header",{className:"rw-segment-header",children:a.jsx("h2",{className:"rw-heading rw-heading-secondary",children:"New Tag"})}),a.jsx("div",{className:"rw-segment-main",children:a.jsx(c,{onSave:i,loading:o,error:n})})]})},h=()=>a.jsx(u,{});export{h as default};
