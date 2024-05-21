import{g as m,a as d,d as t,j as a}from"./index-65dccdee.js";import{t as s}from"./index-e3e85086.js";import{T as c}from"./TabForm-75c53846.js";import"./index-574b20c6.js";import"./formatters-ef2ce1ab.js";import"./index-714914bb.js";const u=m`
  mutation CreateTabMutation($input: CreateTabInput!) {
    createTab(input: $input) {
      id
      url
      notes
      tags {
        tag {
          id
          name
        }
      }
    }
  }
`,l=()=>{const[r,{loading:o,error:n}]=d.useMutation(u,{onCompleted:()=>{s.toast.success("Tab created"),t.navigate(t.routes.tabs())},onError:e=>{s.toast.error(e.message)}}),i=e=>{r({variables:{input:e}})};return a.jsxs("div",{className:"rw-segment",children:[a.jsx("header",{className:"rw-segment-header",children:a.jsx("h2",{className:"rw-heading rw-heading-secondary",children:"New Tab"})}),a.jsx("div",{className:"rw-segment-main",children:a.jsx(c,{onSave:i,loading:o,error:n})})]})},j=()=>a.jsx(l,{});export{j as default};
