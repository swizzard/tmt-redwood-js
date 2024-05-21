import{g as i,a as n,j as s,d as e}from"./index-65dccdee.js";import{t as d}from"./index-e3e85086.js";import{T}from"./TabTagForm-3cfe557d.js";import"./index-574b20c6.js";const m=i`
  query EditTabTagById($id: String!) {
    tabTag: tabTag(id: $id) {
      id
      tabId
      tagId
    }
  }
`,u=i`
  mutation UpdateTabTagMutation($id: String!, $input: UpdateTabTagInput!) {
    updateTabTag(id: $id, input: $input) {
      id
      tabId
      tagId
    }
  }
`,p=()=>s.jsx("div",{children:"Loading..."}),b=({error:a})=>s.jsx("div",{className:"rw-cell-error",children:a==null?void 0:a.message}),x=({tabTag:a})=>{const[r,{loading:o,error:c}]=n.useMutation(u,{onCompleted:()=>{d.toast.success("TabTag updated"),e.navigate(e.routes.tabTags())},onError:t=>{d.toast.error(t.message)}}),g=(t,l)=>{r({variables:{id:l,input:t}})};return s.jsxs("div",{className:"rw-segment",children:[s.jsx("header",{className:"rw-segment-header",children:s.jsxs("h2",{className:"rw-heading rw-heading-secondary",children:["Edit TabTag ",a==null?void 0:a.id]})}),s.jsx("div",{className:"rw-segment-main",children:s.jsx(T,{tabTag:a,onSave:g,error:c,loading:o})})]})},h=n.createCell({QUERY:m,Loading:p,Failure:b,Success:x,displayName:"EditTabTagCell"}),N=({id:a})=>s.jsx(h,{id:a});export{N as default};
