import{j as e}from"./index-c2861d17.js";import{u as l,C as o,P as r}from"./Pagination-fb844f4d.js";import{S as m}from"./SectionTitle-f15338dc.js";const t=[{title:"Decus High School - decus.mx",img:"./imgs/decushome.jpg",p:"A online platform that celebrates the power of inclusive education. In decus.mx believe in creating an environment where every learner is valued, supported, and given the tools they need to succeed.",linkText:"Visit",link:"http://decus.mx/"},{title:"Decus / Learn Managmen System",img:"./imgs/decusplat.jpg",p:"Implemented an online platform powered by Moodle. Through design adjustments, training, and a commitment to inclusive education, we have fostered an environment where every learner is valued, supported, and equipped for success.",linkText:"Visit",link:"http://decus.mx/plataforma/"},{title:"Website for Personal Growth and Mental Well-being",img:"./imgs/psicdamaro.jpg",p:"Psicologa Argelia D'Amaro, providing professional guidance to enhance emotional well-being and personal growth. Offering effective solutions, manage emotions, improve relationships, and achieve your goals through tailored therapy.",linkText:"Visit",link:"https://psicologaargelia.com.mx/"}];function u(){const{getCurrentData:a,handlePageChange:n}=l({initialData:t,itemsPerPage:3});return e.jsxs("div",{className:"relative bg-base-200 w-full mt-12 pb-12 ",children:[e.jsx("div",{className:"skewed bg-base-200 w-full h-64"}),e.jsxs("div",{className:"relative flex flex-col max-w-md md:max-w-xl lg:max-w-4xl py-24 justify-center items-center m-auto gap-12",children:[e.jsx("h2",{children:e.jsx(m,{text:"EXPERIENCE"})}),a().map((i,s)=>e.jsx(o,{title:i.title,img:i.img,p:i.p,linkText:i.linkText,link:i.link,linkGithub:i.linkGithub},`P${s}`)),e.jsx(r,{totalItems:t.length,itemsPerPage:3,onPageChange:n})]})]})}export{u as default};
