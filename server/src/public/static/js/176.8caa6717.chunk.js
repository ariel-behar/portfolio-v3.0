"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[176],{6531:function(e,t,n){var r=n(4261),o=n(4554),i=n(533),a=n(3767),c=n(890),s=n(184);t.Z=function(e){var t=e.project,n=e.projectCategory,l=e.hideTitle;return(0,s.jsxs)(a.Z,{children:[!l&&(0,s.jsx)(c.Z,{variant:"h5",component:"h5",textAlign:"center",color:"text.secondary",children:null===t||void 0===t?void 0:t.title}),(0,s.jsx)(c.Z,{mt:2,variant:"h6",component:"h6",color:"text.secondary",children:"Project Description:"}),(0,s.jsx)(c.Z,{variant:"body1",component:"p",color:"text.tertiary",textAlign:"justify",children:null===t||void 0===t?void 0:t.description}),"real"===n&&(null===t||void 0===t?void 0:t.notes)&&(null===t||void 0===t?void 0:t.notes.map((function(e){return(0,s.jsxs)(c.Z,{variant:"body1",component:"p",color:"text.muted.main",mt:0,children:["*",e.note]},(0,r.Z)())}))),(0,s.jsx)(c.Z,{mt:2,variant:"h6",component:"h6",color:"text.secondary",children:"My Role in the Project:"}),(0,s.jsx)(c.Z,{variant:"body1",component:"p",color:"text.tertiary",textAlign:"justify",children:null===t||void 0===t?void 0:t.myRole}),(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(c.Z,{mt:2,variant:"h6",component:"h6",color:"text.secondary",children:"Technologies Used:"}),(null===t||void 0===t?void 0:t.technologies)&&(null===t||void 0===t?void 0:t.technologies.map((function(e){return(0,s.jsxs)(c.Z,{variant:"body1",component:"p",color:"text.tertiary",display:"inline-block",children:["\u2022\xa0",e,"\xa0"]},(0,r.Z)())})))]}),(0,s.jsx)(c.Z,{mt:1,variant:"h6",component:"h6",color:"text.secondary",children:"Project Launched in:"}),(0,s.jsxs)(c.Z,{variant:"body1",component:"p",color:"text.tertiary",children:[null===t||void 0===t?void 0:t.month," ",null===t||void 0===t?void 0:t.year]}),(0,s.jsxs)(c.Z,{mt:2,variant:"h6",component:"h6",color:"text.secondary",children:["Visit site:\xa0",(0,s.jsx)(i.Z,{href:null===t||void 0===t?void 0:t.url,target:"_blank",children:null===t||void 0===t?void 0:t.title})]}),"mockup"===n&&(null===t||void 0===t?void 0:t.notes)&&(null===t||void 0===t?void 0:t.notes.map((function(e){return(0,s.jsxs)(c.Z,{variant:"body1",component:"p",color:"text.muted.main",mt:1,children:["*",e.note,"\xa0",e.hasLink&&(0,s.jsx)(i.Z,{href:e.hasLink,target:"_blank",children:"here"})]},(0,r.Z)())})))]})}},8176:function(e,t,n){n.r(t);var r,o,i,a,c=n(885),s=n(168),l=n(2791),d=n(6934),m=n(4554),u=n(5527),p=n(9164),g=n(1889),h=n(890),f=n(6969),x=n(184),j=(0,d.ZP)(m.Z)(r||(r=(0,s.Z)(["\n    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/backgrounds/chalkboard.jpg');\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: cover;\n    background-color: #b6d5f6;\n    border-top: 3px solid ",";\n    border-bottom: 3px solid ",";\n\n    .document-box {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-shadow: 1px 1px 5px #245485;\n        \n        padding: 20px 0;\n        border-radius: 20px;\n\n        img {\n            margin-top: 20px;\n            transition: 1.5s ease;\n            cursor: pointer;\n\n            width: 90%;\n            height: auto;\n            box-shadow: -50px 50px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22);\n\n            &:hover {\n                transform: rotateX(0) rotateY(0) scale(1);\n                box-shadow: 10px 10px 24px 0 rgba(0, 0, 0, 0.2), -10px -10px 24px 0 rgba(0, 0, 0, 0.2);\n            }\n        }\n    }\n\n    @media (max-width: 1199px) {\n        img {\n            transform: none!important;\n            box-shadow: 10px 10px 24px 0 rgba(0, 0, 0, 0.2), -10px -10px 24px 0 rgba(0, 0, 0, 0.2)!important;\n            &:hover {\n                transform: none;\n              \n            }\n        }\n    }\n"])),(function(e){return e.theme.palette.custom.black.main}),(function(e){return e.theme.palette.custom.black.main})),v=(0,d.ZP)(u.Z)(o||(o=(0,s.Z)(["\n    background: rgb(135,219,135);\n    background: linear-gradient(45deg, rgba(135,219,135,1) 0%, rgba(92,184,92,1) 100%);\n\n    img {\n        transform: rotateX(15deg) rotateY(15deg) scale(0.8);\n    }\n"]))),b=(0,d.ZP)(u.Z)(i||(i=(0,s.Z)(["\nbackground: rgb(116, 185, 255);\n    background: linear-gradient(-45deg, rgb(148, 202, 250) 0%, rgba(64,150,238,1) 100%);\n\n    img {\n        transform: scale(0.73);\n    }\n"]))),y=(0,d.ZP)(u.Z)(a||(a=(0,s.Z)(["\n    background: rgb(251,202,133);\n    background: linear-gradient(-45deg, rgba(251,202,133,1) 0%, rgba(240,173,78,1) 100%);\n\n    img {\n        transform: rotateX(15deg) rotateY(-15deg) scale(0.8);\n    }\n"])));t.default=function(e){var t=e.loadSectionHandler,n=(0,l.useState)(!1),r=(0,c.Z)(n,2),o=r[0],i=r[1],a=(0,l.useState)(null),s=(0,c.Z)(a,2),d=s[0],m=s[1];(0,l.useEffect)((function(){t(8)}),[t]);var u=function(e){m(e),i(!0)};return(0,x.jsxs)(x.Fragment,{children:[o&&d&&(0,x.jsx)(f.Z,{documentCategory:d,showModal:!0,handleCloseModal:function(){m(null),i(!1)}}),(0,x.jsx)(j,{component:"section",id:"sixth-section",pb:5,children:(0,x.jsxs)(p.Z,{children:[(0,x.jsx)(h.Z,{variant:"h2",component:"h3",color:"text.secondary",my:3,children:"Some Reading Material"}),(0,x.jsxs)(g.ZP,{container:!0,px:{xs:3},spacing:{xs:2,sm:2},children:[(0,x.jsx)(g.ZP,{item:!0,sm:4,children:(0,x.jsxs)(v,{elevation:10,className:"document-box",children:[(0,x.jsx)(h.Z,{variant:"h4",component:"h4",color:"text.secondary",children:"R\xe9sum\xe9"}),(0,x.jsx)("img",{onClick:function(){return u("resume")},src:"https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/documents/resume/resume.jpg",alt:"Resume"})]})}),(0,x.jsx)(g.ZP,{item:!0,sm:4,children:(0,x.jsxs)(b,{elevation:10,className:"document-box",children:[(0,x.jsx)(h.Z,{variant:"h4",component:"h4",color:"text.secondary",children:"References"}),(0,x.jsx)("img",{onClick:function(){return u("reference")},src:"https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/documents/reference/recommendation-letter-visual-edge.jpg",alt:"Reference"})]})}),(0,x.jsx)(g.ZP,{item:!0,sm:4,children:(0,x.jsxs)(y,{elevation:10,className:"document-box",children:[(0,x.jsx)(h.Z,{variant:"h4",component:"h4",color:"text.secondary",children:"Certificates"}),(0,x.jsx)("img",{onClick:function(){return u("certificate")},src:"https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/documents/certificate/softuni-react.jpg",alt:"Reference"})]})})]})]})})]})}},6969:function(e,t,n){n.d(t,{Z:function(){return A}});var r,o=n(168),i=n(1413),a=n(2791),c=n(6934),s=n(9818),l=n(7123),d=n(5931),m=n(6151),u=n(890),p=n(9823),g=n(6531),h=n(195),f=n(1691),x=n(184),j=(0,c.ZP)(h.Z)(r||(r=(0,o.Z)(["\n    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/dark-pattern.jpg');\n    background-repeat: repeat;\n\n    padding: 0;\n\n    img {\n        width: 100%;\n        height: auto;\n        border-bottom: 1px solid white;\n    }\n"])));var v=function(e){var t=e.project;return(0,x.jsxs)(j,{children:[(0,x.jsx)("img",{src:"https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/mockup-projects/".concat(t.image),alt:t.title}),(0,x.jsx)(f.Z,{id:"alert-dialog-description",p:3,px:5,children:(0,x.jsx)(g.Z,{project:t,hideTitle:!0,projectCategory:"mockup"})})]})},b=JSON.parse('{"resume":[{"_id":1,"title":"R\xe9sum\xe9 - Ariel Behar","image":"resume.jpg","category":"resume","firm":"","creator":"Ariel Behar"}],"reference":[{"_id":1,"title":"Recommendation Letter - MSC 2","image":"recommendation-letter-msc2.jpg","category":"reference","firm":"MSC","creator":"Liran Neduva"},{"_id":2,"title":"Recommendation Letter - Visual Edge Design","image":"recommendation-letter-visual-edge.jpg","category":"reference","firm":"Visual Edge Design","creator":"Siouxie Boshoff"},{"_id":3,"title":"Recommendation Letter - Bovsi Studios","image":"recommendation-letter-bovsi.jpg","category":"reference","firm":"Bovsi Studios","creator":"Matthew A Parks"},{"_id":4,"title":"Recommendation Letter - MSC 1","image":"recommendation-letter-msc1.jpg","category":"reference","firm":"Mano Security","creator":"Tomer Mazuz"},{"_id":5,"title":"Recommendation Letter - The Venus Project","image":"recommendation-letter-tvp.jpg","category":"reference","firm":"The Venus Project","creator":"Michal Ziaja"},{"_id":6,"title":"Recommendation Letter - eType","image":"recommendation-letter-etype.jpg","category":"reference","firm":"eType Omnitech","creator":"Hilla Erez"}],"certificate":[{"_id":1,"title":"Three JS Journey - WEBGL development with Three.js and R3F","image":"threejs-journey.jpg","category":"certificate","firm":"THREE JS Journey","creator":"Bruno Simon"},{"_id":2,"title":"Modis Certificate - Full-Stack React, Express and Typescript Academy","image":"modis-full-stack.jpg","category":"certificate","firm":"Modis","creator":"Phillippe Rouvrais"},{"_id":3,"title":"SoftUni Certificate - React","image":"softuni-react.jpg","category":"certificate","firm":"Software University","creator":"Svetlin Nakov"},{"_id":4,"title":"SoftUni Certificate - JS Back-End","image":"softuni-js-backend.jpg","category":"certificate","firm":"Software University","creator":"Svetlin Nakov"},{"_id":5,"title":"SoftUni Certificate - JS Applications","image":"softuni-js-applications.jpg","category":"certificate","firm":"Software University","creator":"Svetlin Nakov"},{"_id":6,"title":"SoftUni Certificate - JS Advanced","image":"softuni-js-advanced.jpg","category":"certificate","firm":"Software University","creator":"Svetlin Nakov"},{"_id":7,"title":"SoftUni Certificate - Programming Fundamentals with JS","image":"softuni-programming-fundamentals.jpg","category":"certificate","firm":"Software University","creator":"Svetlin Nakov"},{"_id":8,"title":"SoftUni Certificate - HTML & CSS","image":"softuni-html-css.jpg","category":"certificate","firm":"Software University","creator":"Svetlin Nakov"},{"_id":9,"title":"SoftUni Honorable Mention - Programming Basics","image":"softuni-programming-basics.jpg","category":"certificate","firm":"Software University","creator":"Svetlin Nakov"}]}'),y=n(4261),Z=n(533),k=n(3767);var S=function(e){var t=e.documentCategory,n=e.filteredDocuments;return(0,x.jsxs)(x.Fragment,{children:[n.map((function(e){return(0,x.jsx)("img",{src:"https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/documents/".concat(t,"/").concat(e.image),alt:e.title},(0,y.Z)())})),"resume"===t&&(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(k.Z,{id:"alert-dialog-description",p:3,px:5,textAlign:"center",children:[(0,x.jsx)(u.Z,{variant:"h5",component:"h5",color:"text.secondary",mb:2,children:"Download My R\xe9sum\xe9"}),(0,x.jsx)(Z.Z,{href:"https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/content/resume.pdf",target:"_blank",children:(0,x.jsx)("img",{style:{height:"118px",width:"auto",border:"none"},src:"https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/icons/pdf.png",alt:"PDF icon"})})]})})]})},w=n(1889);var C,P=function(e){var t=e.filteredDocuments;return(0,x.jsx)(w.ZP,{container:!0,spacing:2,p:2,children:t.map((function(e,n){return(0,x.jsx)(w.ZP,{item:!0,xs:0===n||1==n||n===t.length-1?12:6,display:"flex",flexDirection:"column",justifyContent:"center",children:(0,x.jsx)("img",{className:"certificate-image",src:"https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/documents/certificate/".concat(e.image),alt:e.title})},(0,y.Z)())}))})},R=(0,c.ZP)(h.Z)(C||(C=(0,o.Z)(["\n    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/dark-pattern.jpg');\n    background-repeat: repeat;\n\n    padding: 0;\n\n    img {\n        width: 100%;\n        height: auto;\n        border-bottom: 1px solid white;\n\n\t\t&.certificate-image {\n\t\t\tborder-bottom: none;\n\t\t}\n    }\n"])));var M,_,z=function(e){var t=e.documentCategory,n=b[t].filter((function(e){return e.category===t}));return(0,x.jsx)(R,{children:"certificate"!==t?(0,x.jsx)(S,{documentCategory:t,filteredDocuments:n}):(0,x.jsx)(P,{filteredDocuments:n})})},U=n(4554),N=(0,a.forwardRef)((function(e,t){return(0,x.jsx)(d.Z,(0,i.Z)({direction:"up",ref:t},e))})),T=(0,c.ZP)(U.Z)(M||(M=(0,o.Z)(["\n    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/dark-pattern.jpg');\n    background-repeat: repeat;\n\n    padding: 16px 24px;\n    position: relative;\n    text-align: center;\n    border-bottom: 1px solid white;\n\n    color: ",";\n\n    .close-icon {\n        position: absolute;\n        color: ",";\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        right: 20px;\n        cursor: pointer;\n        &:hover {\n            color: ",";\n        }\n    }\n"])),(function(e){return e.theme.palette.text.secondary}),(function(e){return e.theme.palette.text.muted.main}),(function(e){return e.theme.palette.text.muted.light})),L=(0,c.ZP)(l.Z)(_||(_=(0,o.Z)(["\n    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/dark-pattern.jpg');\n    background-repeat: repeat;\n\n    border-top: 1px solid white;\n    padding: 20px;\n"])));var A=function(e){var t,n=e.project,r=e.documentCategory,o=e.showModal,i=e.handleCloseModal;return(0,x.jsxs)(s.Z,{maxWidth:"md",open:o,onClose:i,TransitionComponent:N,keepMounted:!0,scroll:"body","aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,x.jsxs)(T,{id:"alert-dialog-title",children:[(0,x.jsx)(p.Z,{className:"close-icon",onClick:function(){return i()}}),n&&(0,x.jsx)(u.Z,{variant:"h5",children:null===n||void 0===n?void 0:n.title}),r&&(0,x.jsx)(u.Z,{variant:"h5",children:(t=r,"resume"===t?"R\xe9sum\xe9":"reference"===t?"References":"certificate"===t?"Certificates":"")})]}),n&&(0,x.jsx)(v,{project:n}),r&&(0,x.jsx)(z,{documentCategory:r}),(0,x.jsx)(L,{children:(0,x.jsx)(m.Z,{variant:"contained",size:"large",sx:{backgroundColor:"custom.blue.main",marginLeft:"auto"},onClick:i,children:"Close"})})]})}}}]);
//# sourceMappingURL=176.8caa6717.chunk.js.map