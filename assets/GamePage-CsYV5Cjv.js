import{u,a as f,j as i,L as j,B as l}from"./index-Cav1mM8g.js";import{u as g}from"./queries-C6OnTrcb.js";const b=()=>{var t,r,c,n,a;const o=u(),m=()=>{o(-1)},{id:x}=f(),{data:s,isLoading:d,isError:h}=g(x||"");return d?i.jsx("div",{className:"flex min-h-screen w-[1200px] justify-center items-center",children:i.jsx(j,{})}):h?i.jsxs("div",{className:"min-h-screen w-[1200px]",children:[i.jsx("h3",{className:"mt-1 flex items-start w-full scroll-m-20 text-2xl font-semibold tracking-tight",children:"Error fetching game"}),i.jsx(l,{onClick:()=>window.location.reload(),className:"mt-10",children:"Reload"})]}):s?i.jsxs("article",{className:"min-h-screen mb-10 w-[1200px] overflow-x-hidden",children:[i.jsx(l,{className:"mb-10",onClick:m,children:"Back"}),i.jsx("h2",{className:"scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",children:s==null?void 0:s.title}),i.jsx("p",{className:"mb-5 leading-7 [&:not(:first-child)]:mt-6",children:s==null?void 0:s.short_description}),i.jsx("img",{src:s==null?void 0:s.thumbnail,alt:s==null?void 0:s.title}),i.jsx("p",{className:"mb-5 leading-7 [&:not(:first-child)]:mt-6",children:s==null?void 0:s.description}),i.jsx("h4",{className:"scroll-m-20 text-xl font-semibold tracking-tight",children:"Minimum System Requirements:"}),i.jsxs("ul",{className:"mb-5 my-6 ml-6 list-disc [&>li]:mt-2",children:[i.jsxs("li",{children:["OS: ",((t=s.minimum_system_requirements)==null?void 0:t.os)||"Not specified"]}),i.jsxs("li",{children:["Processor:"," ",((r=s.minimum_system_requirements)==null?void 0:r.processor)||"Not specified"]}),i.jsxs("li",{children:["Memory: ",((c=s.minimum_system_requirements)==null?void 0:c.memory)||"Not specified"]}),i.jsxs("li",{children:["Graphics:"," ",((n=s.minimum_system_requirements)==null?void 0:n.graphics)||"Not specified"]}),i.jsxs("li",{children:["Storage:"," ",((a=s.minimum_system_requirements)==null?void 0:a.storage)||"Not specified"]})]}),i.jsx("h4",{className:"scroll-m-20 text-xl font-semibold tracking-tight",children:"Screenshots:"}),i.jsx("div",{className:"flex gap-1",children:s!=null&&s.screenshots&&s.screenshots.length>0?s.screenshots.map(e=>i.jsx("img",{width:"450px",src:e==null?void 0:e.image,alt:`Screenshot ${e==null?void 0:e.id}`},e==null?void 0:e.id)):i.jsx("p",{children:"No screenshots available"})})]}):i.jsxs("div",{className:"min-h-screen w-[1200px]",children:[i.jsx(l,{className:"mb-10",onClick:m,children:"Back"}),i.jsx("h3",{className:"mt-1 flex items-start w-full scroll-m-20 text-2xl font-semibold tracking-tight",children:"No data available"})]})};export{b as default};