import{u,j as r}from"./index-65dccdee.js";import{d as e}from"./index-574b20c6.js";import{f as d,s as w}from"./formatters-ef2ce1ab.js";const x=a=>{var l,s,t;const{currentUser:m}=u(),o=n=>{var i;a.onSave({...n,userId:m.id},(i=a==null?void 0:a.tab)==null?void 0:i.id)};return r.jsx("div",{className:"rw-form-wrapper",children:r.jsxs(e.Form,{onSubmit:o,error:a.error,children:[r.jsx(e.FormError,{error:a.error,wrapperClassName:"rw-form-error-wrapper",titleClassName:"rw-form-error-title",listClassName:"rw-form-error-list"}),r.jsx(e.Label,{name:"url",className:"rw-label",errorClassName:"rw-label rw-label-error",children:"Url"}),r.jsx(e.TextField,{name:"url",defaultValue:(l=a.tab)==null?void 0:l.url,className:"rw-input",errorClassName:"rw-input rw-input-error",validation:{required:!0}}),r.jsx(e.FieldError,{name:"url",className:"rw-field-error"}),r.jsx(e.Label,{name:"notes",className:"rw-label",errorClassName:"rw-label rw-label-error",children:"Notes"}),r.jsx(e.TextAreaField,{name:"notes",defaultValue:(s=a.tab)==null?void 0:s.notes,className:"rw-input",errorClassName:"rw-input rw-input-error"}),r.jsx(e.FieldError,{name:"notes",className:"rw-field-error"}),r.jsx(e.Label,{name:"tags",className:"rw-label",errorClassName:"rw-label rw-label-error",children:"Tags"}),r.jsx(e.TextField,{name:"tags",defaultValue:d((t=a.tab)==null?void 0:t.tags),className:"rw-input",errorClassName:"rw-input rw-input-error",validation:{setValueAs:w}}),r.jsx(e.FieldError,{name:"tags",className:"rw-field-error"}),r.jsx("div",{className:"rw-button-group",children:r.jsx(e.Submit,{disabled:a.loading,className:"rw-button rw-button-blue",children:"Save"})})]})})};export{x as T};