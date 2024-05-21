import{g as T,a as g,d as s,j as a}from"./index-65dccdee.js";import{t}from"./index-e3e85086.js";import{T as m}from"./TabTagForm-3cfe557d.js";import"./index-574b20c6.js";const c=T`
  mutation CreateTabTagMutation($input: CreateTabTagInput!) {
    createTabTag(input: $input) {
      id
    }
  }
`,d=()=>{const[r,{loading:o,error:n}]=g.useMutation(c,{onCompleted:()=>{t.toast.success("TabTag created"),s.navigate(s.routes.tabTags())},onError:e=>{t.toast.error(e.message)}}),i=e=>{r({variables:{input:e}})};return a.jsxs("div",{className:"rw-segment",children:[a.jsx("header",{className:"rw-segment-header",children:a.jsx("h2",{className:"rw-heading rw-heading-secondary",children:"New TabTag"})}),a.jsx("div",{className:"rw-segment-main",children:a.jsx(m,{onSave:i,loading:o,error:n})})]})},x=()=>a.jsx(d,{});export{x as default};
