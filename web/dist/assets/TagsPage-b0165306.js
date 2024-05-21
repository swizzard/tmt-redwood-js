import{g as i,a as l,j as e,d as s}from"./index-65dccdee.js";import{t as r}from"./index-e3e85086.js";import{t as n}from"./formatters-ef2ce1ab.js";import"./index-714914bb.js";const m=i`
  mutation DeleteTagMutation($id: String!) {
    deleteTag(id: $id) {
      id
    }
  }
`,h=({tags:a})=>{const[d]=l.useMutation(m,{onCompleted:()=>{r.toast.success("Tag deleted")},onError:t=>{r.toast.error(t.message)},refetchQueries:[{query:o}],awaitRefetchQueries:!0}),c=t=>{confirm("Are you sure you want to delete tag "+t+"?")&&d({variables:{id:t}})},u=t=>n(t,20);return e.jsxs("div",{className:"rw-segment rw-table-wrapper-responsive",children:[e.jsxs("table",{className:"rw-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:" "})]})}),e.jsx("tbody",{children:a.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:n(t.name)}),e.jsx("td",{children:e.jsxs("nav",{className:"rw-table-actions",children:[e.jsx(s.Link,{to:s.routes.taggedTabs({tagId:t.id}),title:`Show tabs tagged with ${u(t.name)}`,className:"rw-button rw-button-small text-lime-500 hover:text-lime-700",children:"Tabs"}),e.jsx(s.Link,{to:s.routes.tag({id:t.id}),title:"Show tag detail",className:"rw-button rw-button-small",children:"Show"}),e.jsx(s.Link,{to:s.routes.editTag({id:t.id}),title:"Edit tag",className:"rw-button rw-button-small rw-button-blue",children:"Edit"}),e.jsx("button",{type:"button",title:"Delete tag",className:"rw-button rw-button-small rw-button-red",onClick:()=>c(t.id),children:"Delete"})]})})]},t.id))})]}),e.jsx("div",{className:"rw-button-group",children:e.jsx(s.Link,{to:s.routes.newTag(),children:e.jsx("button",{className:"rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700",children:"New Tag"})})})]})},o=i`
  query FindTags {
    tags {
      id
      name
      userId
    }
  }
`,x=()=>e.jsx("div",{children:"Loading..."}),g=()=>e.jsxs("div",{className:"rw-text-center",children:["No tags yet. ",e.jsx(s.Link,{to:s.routes.newTag(),className:"rw-link",children:"Create one?"})]}),b=({error:a})=>e.jsx("div",{className:"rw-cell-error",children:a==null?void 0:a.message}),w=({tags:a})=>e.jsx(h,{tags:a}),j=l.createCell({QUERY:o,Loading:x,Empty:g,Failure:b,Success:w,displayName:"TagsCell"}),v=()=>e.jsx(j,{});export{v as default};
