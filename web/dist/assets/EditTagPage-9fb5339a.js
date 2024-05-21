import{g as d,a as n,j as a,d as t}from"./index-65dccdee.js";import{t as i}from"./index-e3e85086.js";import{T as m}from"./TagForm-3f811310.js";import"./index-574b20c6.js";const u=d`
  query EditTagById($id: String!) {
    tag: tag(id: $id) {
      id
      name
      userId
    }
  }
`,p=d`
  mutation UpdateTagMutation($id: String!, $input: UpdateTagInput!) {
    updateTag(id: $id, input: $input) {
      id
      name
      userId
    }
  }
`,T=()=>a.jsx("div",{children:"Loading..."}),x=({error:s})=>a.jsx("div",{className:"rw-cell-error",children:s==null?void 0:s.message}),h=({tag:s})=>{const[r,{loading:o,error:c}]=n.useMutation(p,{onCompleted:()=>{i.toast.success("Tag updated"),t.navigate(t.routes.tags())},onError:e=>{i.toast.error(e.message)}}),l=(e,g)=>{r({variables:{id:g,input:e}})};return a.jsxs("div",{className:"rw-segment",children:[a.jsx("header",{className:"rw-segment-header",children:a.jsxs("h2",{className:"rw-heading rw-heading-secondary",children:["Edit Tag ",s==null?void 0:s.id]})}),a.jsx("div",{className:"rw-segment-main",children:a.jsx(m,{tag:s,onSave:l,error:c,loading:o})})]})},j=n.createCell({QUERY:u,Loading:T,Failure:x,Success:h,displayName:"EditTagCell"}),$=({id:s})=>a.jsx(j,{id:s});export{$ as default};
