import{g as d,a as n,j as s,d as e}from"./index-65dccdee.js";import{t as i}from"./index-e3e85086.js";import{T as u}from"./TabForm-75c53846.js";import"./index-574b20c6.js";import"./formatters-ef2ce1ab.js";import"./index-714914bb.js";const g=d`
  query EditTabById($id: String!) {
    tab: tab(id: $id) {
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
`,p=d`
  mutation UpdateTabMutation($id: String!, $input: UpdateTabInput!) {
    updateTab(id: $id, input: $input) {
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
`,T=()=>s.jsx("div",{children:"Loading..."}),x=({error:a})=>s.jsx("div",{className:"rw-cell-error",children:a==null?void 0:a.message}),h=({tab:a})=>{const[r,{loading:o,error:l}]=n.useMutation(p,{onCompleted:()=>{i.toast.success("Tab updated"),e.navigate(e.routes.tabs())},onError:t=>{i.toast.error(t.message)}}),c=(t,m)=>{r({variables:{id:m,input:t}})};return s.jsxs("div",{className:"rw-segment",children:[s.jsx("header",{className:"rw-segment-header",children:s.jsxs("h2",{className:"rw-heading rw-heading-secondary",children:["Edit Tab ",a==null?void 0:a.id]})}),s.jsx("div",{className:"rw-segment-main",children:s.jsx(u,{tab:a,onSave:c,error:l,loading:o})})]})},b=n.createCell({QUERY:g,Loading:T,Failure:x,Success:h,displayName:"EditTabCell"}),U=({id:a})=>s.jsx(b,{id:a});export{U as default};
