(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2L//":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"g",(function(){return r})),e.d(t,"f",(function(){return s})),e.d(t,"d",(function(){return c})),e.d(t,"c",(function(){return l})),e.d(t,"i",(function(){return m})),e.d(t,"a",(function(){return d})),e.d(t,"h",(function(){return p})),e.d(t,"e",(function(){return g})),e.d(t,"j",(function(){return f}));var i=e("vOnD"),a=e("bC0J"),o=i.c.div.withConfig({displayName:"post-card-minimalstyle__PostCardWrapper",componentId:"sc-ig61cf-0"})(["\n  position: relative;\n  &:hover {\n    .post_preview {\n      transform: translateY(0);\n    }\n    .post_date {\n      transform: translateY(100%);\n    }\n  }\n"]),r=i.c.div.withConfig({displayName:"post-card-minimalstyle__PostPreview",componentId:"sc-ig61cf-1"})(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  transform: translateY(-100%);\n  transition: 0.35s ease-in-out;\n  img {\n    border-radius: 3px;\n  }\n  @media (max-width: 1024px) {\n    transform: translateY(0);\n  }\n  @media (max-width: 575px) {\n    margin-bottom: 30px;\n    width: auto;\n    height: auto;\n    position: relative;\n    transform: translateY(0);\n  }\n"]),s=i.c.div.withConfig({displayName:"post-card-minimalstyle__PostDetails",componentId:"sc-ig61cf-2"})(["\n  display: flex;\n  @media (max-width: 575px) {\n    flex-direction: column;\n  }\n"]),c=i.c.div.withConfig({displayName:"post-card-minimalstyle__PostDate",componentId:"sc-ig61cf-3"})(["\n  font-size: 90px;\n  font-weight: 700;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  line-height: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n  transition: 0.35s ease-in-out;\n  a {\n    color: ",";\n  }\n  @media (max-width: 1200px) {\n    font-size: 70px;\n  }\n  @media (max-width: 990px) {\n    font-size: 56px;\n  }\n  @media (max-width: 575px) {\n    display: none;\n  }\n\n  > span {\n    font-size: 13px;\n    font-weight: 400;\n    display: block;\n    margin-top: 12px;\n    text-transform: uppercase;\n  }\n"],Object(a.a)("colors.postDate"),Object(a.a)("colors.postDate")),l=i.c.div.withConfig({displayName:"post-card-minimalstyle__PostContent",componentId:"sc-ig61cf-4"})(["\n  align-self: center;\n"]),m=i.c.h2.withConfig({displayName:"post-card-minimalstyle__PostTitle",componentId:"sc-ig61cf-5"})(["\n  font-size: 21px;\n  font-weight: 700;\n  color: ",";\n  line-height: 1.53;\n  margin-bottom: 10px;\n  font-family: 'Fira Sans', sans-serif;\n  a {\n    color: ",";\n  }\n  @media (max-width: 1200px) {\n    font-size: 21px;\n  }\n  @media (max-width: 990px) {\n    font-size: 19px;\n    margin-bottom: 12px;\n  }\n  @media (max-width: 575px) {\n    font-size: 17px;\n    margin-bottom: 10px;\n  }\n"],Object(a.a)("colors.postTitle"),Object(a.a)("colors.postTitle")),d=i.c.p.withConfig({displayName:"post-card-minimalstyle__Excerpt",componentId:"sc-ig61cf-6"})(["\n  font-size: ","px;\n  color: ",";\n  font-weight: 400;\n  line-height: 2;\n  margin-bottom: 0;\n  @media (max-width: 990px) {\n    font-size: 14px;\n  }\n"],Object(a.a)("fontSizes.3"),Object(a.a)("colors.bodyText")),p=i.c.div.withConfig({displayName:"post-card-minimalstyle__PostTags",componentId:"sc-ig61cf-7"})(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 15px;\n\n  a {\n    display: block;\n    margin-right: 30px;\n    font-size: 14px;\n    font-weight: 400;\n    color: ",";\n    transition: 0.15s ease-in-out;\n    &:hover {\n      color: ",";\n    }\n    @media (max-width: 990px) {\n      font-size: 13px;\n      margin-right: 25px;\n    }\n  }\n"],Object(a.a)("colors.primaryLinks"),Object(a.a)("colors.primaryLinksHover")),g=i.c.div.withConfig({displayName:"post-card-minimalstyle__PostDateAndPreview",componentId:"sc-ig61cf-8"})(["\n  position: relative;\n  margin-right: 45px;\n  flex-shrink: 0;\n  overflow: hidden;\n  height: 170px;\n  width: 170px;\n  @media (max-width: 1200px) {\n    margin-right: 35px;\n  }\n  @media (max-width: 990px) {\n    margin-right: 25px;\n  }\n  @media (max-width: 575px) {\n    height: auto;\n    width: auto;\n  }\n"]),f=i.c.div.withConfig({displayName:"post-card-minimalstyle__ReadMore",componentId:"sc-ig61cf-9"})(["\n  margin-top: 16px;\n  a {\n    font-size: 13px;\n    font-weight: 500;\n    color: ",";\n    transition: 0.15s ease-in-out;\n    &:hover {\n      color: ",";\n    }\n  }\n"],Object(a.a)("colors.secondaryLinks"),Object(a.a)("colors.secondaryLinksHover"))},"82nj":function(n,t,e){"use strict";var i=e("zLVn"),a=e("N1om"),o=e.n(a),r=e("q1tI"),s=e("Wbzz"),c=e("9eSz"),l=e.n(c),m=e("2L//"),d=["image","title","description","url","date","tags","className","imageType"],p=function(n){var t=n.image,e=n.title,a=n.description,c=n.url,p=n.date,g=n.tags,f=n.className,u=n.imageType,h=Object(i.a)(n,d),x=["post_card"];return f&&x.push(f),r.createElement(m.b,Object.assign({className:x.join(" ")},h),r.createElement(m.f,{className:"post_details"},r.createElement(m.e,null,p&&r.createElement(m.d,{dangerouslySetInnerHTML:{__html:p},className:"post_date"}),null==t?null:r.createElement(m.g,{className:"post_preview"},r.createElement(s.Link,{to:c},"fluid"===u?r.createElement(l.a,{fluid:t,alt:"post preview"}):r.createElement(l.a,{fixed:t,alt:"post preview"})))),r.createElement(m.c,{className:"post_content"},null==g?null:r.createElement(m.h,{className:"post_tags"},g.map((function(n,t){return r.createElement(s.Link,{key:t,to:"/tags/"+o()(n)+"/"},"#"+n)}))),r.createElement(m.i,{className:"post_title"},r.createElement(s.Link,{to:c},e)),a&&r.createElement(m.a,{dangerouslySetInnerHTML:{__html:a},className:"excerpt"}),r.createElement(m.j,null,r.createElement(s.Link,{to:c},"Read More")))))};p.defaultProps={imageType:"fluid"},t.a=p},K392:function(n,t,e){"use strict";e.r(t);var i=e("q1tI"),a=e.n(i),o=e("82nj"),r=e("YEzi"),s=e("9Dj+"),c=e("H8eV"),l=e("GpQV");t.default=function(n){var t=n.data.allMarkdownRemark.edges,e=n.pageContext,i=e.currentPage,m=e.numPages,d=1===i,p=i===m,g=i-1==1?"/page/1":"/page/"+(i-1).toString(),f="/page/"+(i+1).toString(),u=!d&&g,h=!p&&f;return a.a.createElement(s.a,null,a.a.createElement(c.a,{title:"Page "+i}),a.a.createElement(l.g,null,t.map((function(n){var t=n.node;return a.a.createElement(o.a,{key:t.fields.slug,title:t.frontmatter.title||t.fields.slug,image:t.frontmatter.featuredImg.childImageSharp.fluid,url:t.fields.slug,description:t.frontmatter.description||t.excerpt,date:t.frontmatter.date,tags:t.frontmatter.tags})})),a.a.createElement(r.a,{prevLink:u,nextLink:h,currentPage:""+i,totalPage:""+m})))}},YEzi:function(n,t,e){"use strict";var i=e("zLVn"),a=e("q1tI"),o=e("Wbzz"),r=e("IdFE"),s=e("q6Mt"),c=["prevLink","nextLink","currentPage","totalPage","className"];t.a=function(n){var t=n.prevLink,e=n.nextLink,l=n.currentPage,m=n.totalPage,d=n.className,p=Object(i.a)(n,c);return a.createElement(s.c,Object.assign({},p,{className:d}),a.createElement(s.d,null,t&&a.createElement(o.Link,{to:""+t,"aria-label":"Prev"},a.createElement(r.i,null))),a.createElement(s.b,null,"Page "+l+" Of "+m),a.createElement(s.a,null,e&&a.createElement(o.Link,{to:""+e,"aria-label":"Next"},a.createElement(r.j,null))))}},q6Mt:function(n,t,e){"use strict";e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return r})),e.d(t,"a",(function(){return s})),e.d(t,"b",(function(){return c}));var i=e("vOnD"),a=e("bC0J"),o=i.c.div.withConfig({displayName:"paginationstyle__PaginationWrapper",componentId:"sc-bhh2kv-0"})(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]),r=i.c.div.withConfig({displayName:"paginationstyle__PrevPage",componentId:"sc-bhh2kv-1"})(["\n  min-width: 32px;\n  a {\n    width: 32px;\n    height: 32px;\n    background-color: ",";\n    color: ",";\n    border-radius: 50%;\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: 0.15s ease-in-out;\n    svg {\n      display: block;\n    }\n    &:hover {\n      background-color: ",";\n    }\n  }\n"],Object(a.a)("colors.buttonLinks"),Object(a.a)("colors.buttonLinksText"),Object(a.a)("colors.buttonLinksHover")),s=i.c.div.withConfig({displayName:"paginationstyle__NextPage",componentId:"sc-bhh2kv-2"})(["\n  min-width: 32px;\n  a {\n    width: 32px;\n    height: 32px;\n    background-color: ",";\n    color: ",";\n    border-radius: 50%;\n    font-size: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: 0.15s ease-in-out;\n    svg {\n      display: block;\n    }\n    &:hover {\n      background-color: ",";\n    }\n  }\n"],Object(a.a)("colors.buttonLinks"),Object(a.a)("colors.buttonLinksText"),Object(a.a)("colors.buttonLinksHover")),c=i.c.div.withConfig({displayName:"paginationstyle__PageNumber",componentId:"sc-bhh2kv-3"})(["\n  color: ",";\n"],Object(a.a)("colors.bodyText"))}}]);
//# sourceMappingURL=component---src-templates-blog-list-tsx-2b6cad71433493496b95.js.map