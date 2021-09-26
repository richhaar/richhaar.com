"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[89],{6165:function(e,a,t){t.d(a,{Z:function(){return b}});var r=t(3366),l=t(7294),n=t(6010),i=t(7111),s=t(6742),m="sidebar_2ahu",o="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",g="sidebarItem_2UVv",d="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM",p=t(4973);function v(e){var a=e.sidebar;return 0===a.items.length?null:l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},a.title),l.createElement("ul",{className:c},a.items.map((function(e){return l.createElement("li",{key:e.permalink,className:g},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title))}))))}var h=t(571),E=["sidebar","toc","children"];var b=function(e){var a=e.sidebar,t=e.toc,s=e.children,m=(0,r.Z)(e,E),o=a&&a.items.length>0;return l.createElement(i.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(v,{sidebar:a})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),t&&l.createElement("div",{className:"col col--2"},l.createElement(h.Z,{toc:t})))))}},4428:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var r=t(7294),l=t(2263),n=t(6165),i=t(7937),s=t(6742),m=t(4973);var o=function(e){var a=e.metadata,t=a.previousPage,l=a.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},t&&r.createElement(s.Z,{className:"pagination-nav__link",to:t},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.createElement(s.Z,{className:"pagination-nav__link",to:l},r.createElement("div",{className:"pagination-nav__label"},r.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=t(941);var g=function(e){var a=e.metadata,t=e.items,s=e.sidebar,m=(0,l.Z)().siteConfig.title,g=a.blogDescription,d=a.blogTitle,u="/"===a.permalink?m:d;return r.createElement(n.Z,{title:u,description:g,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},t.map((function(e){var a=e.content;return r.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,assets:a.assets,metadata:a.metadata,truncated:a.metadata.truncated},r.createElement(a,null))})),r.createElement(o,{metadata:a}))}},7937:function(e,a,t){t.d(a,{Z:function(){return L}});var r=t(7294),l=t(6010),n=t(3905),i=t(4973),s=t(6742),m=t(4996),o=t(941),c=t(90),g=t(7462),d=t(3366),u="iconEdit_2_ui",p=["className"],v=function(e){var a=e.className,t=(0,d.Z)(e,p);return r.createElement("svg",(0,g.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(u,a),"aria-hidden":"true"},t),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function h(e){var a=e.editUrl;return r.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},r.createElement(v,null),r.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var E="blogPostTitle_GeHD",b="blogPostData_291c",f="blogPostDetailsFull_3kfx",_=t(7211),N="tags_2ga9",Z="tag_11ep";function k(e){var a=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(N,"padding--none","margin-left--sm")},a.map((function(e){var a=e.label,t=e.permalink;return r.createElement("li",{key:t,className:Z},r.createElement(_.Z,{name:a,permalink:t}))}))))}var P="image_1yU8";var T=function(e){var a=e.author,t=a.name,l=a.title,n=a.url,i=a.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:P,src:i,alt:t})),t&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},t))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},w="authorCol_1R69";function M(e){var a=e.authors,t=e.assets;return 0===a.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},a.map((function(e,a){var n;return r.createElement("div",{className:(0,l.Z)("col col--6",w),key:a},r.createElement(T,{author:Object.assign({},e,{imageURL:null!=(n=t.authorsImageUrls[a])?n:e.imageURL})}))})))}var L=function(e){var a,t,g,d,u=(g=(0,o.c2)().selectMessage,function(e){var a=Math.ceil(e);return g(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),p=(0,m.C)().withBaseUrl,v=e.children,_=e.frontMatter,N=e.assets,Z=e.metadata,P=e.truncated,T=e.isBlogPostPage,w=void 0!==T&&T,L=Z.date,U=Z.formattedDate,y=Z.permalink,I=Z.tags,x=Z.readingTime,C=Z.title,R=Z.editUrl,A=Z.authors,B=null!=(a=N.image)?a:_.image;return r.createElement("article",{className:w?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(d=w?"h1":"h2",r.createElement("header",null,r.createElement(d,{className:E,itemProp:"headline"},w?C:r.createElement(s.Z,{itemProp:"url",to:y},C)),r.createElement("div",{className:(0,l.Z)(b,"margin-vert--md")},r.createElement("time",{dateTime:L,itemProp:"datePublished"},U),void 0!==x&&r.createElement(r.Fragment,null," \xb7 ",u(x))),r.createElement(M,{authors:A,assets:N}))),B&&r.createElement("meta",{itemProp:"image",content:p(B,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:c.Z},v)),(I.length>0||P)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(t={},t[f]=w,t))},I.length>0&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":!w})},r.createElement(k,{tags:I})),w&&R&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(h,{editUrl:R})),!w&&P&&r.createElement("div",{className:"col col--3 text--right"},r.createElement(s.Z,{to:Z.permalink,"aria-label":"Read more about "+C},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},7211:function(e,a,t){t.d(a,{Z:function(){return o}});var r=t(7294),l=t(6010),n=t(6742),i="tag_1Okp",s="tagRegular_3MiF",m="tagWithCount_1HU1";var o=function(e){var a,t=e.permalink,o=e.name,c=e.count;return r.createElement(n.Z,{href:t,className:(0,l.Z)(i,(a={},a[s]=!c,a[m]=c,a))},o,c&&r.createElement("span",null,c))}}}]);