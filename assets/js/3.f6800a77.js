(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{325:function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"a",(function(){return r})),a.d(e,"i",(function(){return s})),a.d(e,"f",(function(){return l})),a.d(e,"g",(function(){return c})),a.d(e,"h",(function(){return u})),a.d(e,"b",(function(){return h})),a.d(e,"e",(function(){return p})),a.d(e,"k",(function(){return d})),a.d(e,"l",(function(){return f})),a.d(e,"c",(function(){return m})),a.d(e,"j",(function(){return v}));a(31),a(67),a(177),a(326),a(182),a(68),a(109),a(110),a(33),a(99),a(178);var n=/#.*$/,i=/\.(md|html)$/,r=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(n,"").replace(i,"")}function l(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;var e=t.match(n),a=e?e[0]:"",i=o(t);return r.test(i)?t:i+".html"+a}function p(t,e){var a=t.hash,i=function(t){var e=t.match(n);if(e)return e[0]}(e);return(!i||a===i)&&o(t.path)===o(e)}function d(t,e,a){if(l(e))return{type:"external",path:e};a&&(e=function(t,e,a){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var i=e.split("/");a&&i[i.length-1]||i.pop();for(var r=t.replace(/^\//,"").split("/"),s=0;s<r.length;s++){var o=r[s];".."===o?i.pop():"."!==o&&i.push(o)}""!==i[0]&&i.unshift("");return i.join("/")}(e,a));for(var n=o(e),i=0;i<t.length;i++)if(o(t[i].regularPath)===n)return Object.assign({},t[i],{type:"page",path:h(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function f(t,e,a,n){var i=a.pages,r=a.themeConfig,s=n&&r.locales&&r.locales[n]||r;if("auto"===(t.frontmatter.sidebar||s.sidebar||r.sidebar))return function(t){var e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=s.sidebar||r.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var a in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(a)))return{base:a,config:e[a]};var n;return{}}(e,o),c=l.base,u=l.config;return u?u.map((function(t){return function t(e,a,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return d(a,e,n);if(Array.isArray(e))return Object.assign(d(a,e[0],n),{title:e[1]});i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var r=e.children||[];return 0===r.length&&e.path?Object.assign(d(a,e.path,n),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:r.map((function(e){return t(e,a,n,i+1)})),collapsable:!1!==e.collapsable}}(t,i,c)})):[]}return[]}function m(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},329:function(t,e,a){},332:function(t,e,a){},336:function(t,e,a){},337:function(t,e,a){},338:function(t,e,a){},339:function(t,e,a){},340:function(t,e,a){},342:function(t,e,a){},343:function(t,e,a){},344:function(t,e,a){},346:function(t,e,a){},347:function(t,e,a){},348:function(t,e,a){},349:function(t,e,a){},350:function(t,e,a){},352:function(t,e,a){"use strict";a.r(e);a(96);var n=a(325),i={name:"SidebarGroup",components:{DropdownTransition:a(353).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=a(352).default},methods:{isActive:n.e}},r=(a(381),a(5)),s=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?a("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[a("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?a("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):a("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[a("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?a("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),a("DropdownTransition",[t.open||!t.collapsable?a("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;a(345),a(68);function o(t,e,a,n,i){var r={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:n,"sidebar-link":!0}};return i>2&&(r.style={"padding-left":i+"rem"}),t("RouterLink",r,a)}function l(t,e,a,i,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||s>r?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(n.e)(i,a+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,a+"#"+e.slug,e.title,c,e.level-1),l(t,e.children,a,i,r,s+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var a=e.parent,i=a.$page,r=(a.$site,a.$route),s=a.$themeConfig,c=a.$themeLocaleConfig,u=e.props,h=u.item,p=u.sidebarDepth,d=Object(n.e)(r,h.path),f="auto"===h.type?d||h.children.some((function(t){return Object(n.e)(r,h.basePath+"#"+t.slug)})):d,m="external"===h.type?function(t,e,a){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[a])}(t,h.path,h.title||h.path):o(t,h.path,h.title||h.path,f),v=[i.frontmatter.sidebarDepth,p,c.sidebarDepth,s.sidebarDepth,1].find((function(t){return void 0!==t})),g=c.displayAllHeaders||s.displayAllHeaders;return"auto"===h.type?[m,l(t,h.children,h.basePath,r,v)]:(f||g)&&h.headers&&!n.d.test(h.path)?[m,l(t,Object(n.c)(h.headers),h.path,r,v)]:m}};a(382);function u(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?u(t,e):"page"===e.type&&Object(n.e)(t,e.path)}))}var h={name:"SidebarLinks",components:{SidebarGroup:s,SidebarLink:Object(r.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var a=0;a<e.length;a++){var n=e[a];if(u(t,n))return a}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(n.e)(this.$route,t.regularPath)}}},p=Object(r.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.items.length?a("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,n){return a("li",{key:n},["group"===e.type?a("SidebarGroup",{attrs:{item:e,open:n===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(n)}}}):a("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=p.exports},353:function(t,e,a){"use strict";var n={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(a(371),a(5)),r=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},358:function(t,e,a){"use strict";a(329)},365:function(t,e,a){"use strict";a(332)},370:function(t,e,a){"use strict";a(336)},371:function(t,e,a){"use strict";a(337)},372:function(t,e,a){"use strict";a(338)},373:function(t,e,a){"use strict";a(339)},374:function(t,e,a){"use strict";a(340)},375:function(t,e,a){"use strict";a(342)},377:function(t,e,a){"use strict";a(343)},378:function(t,e,a){"use strict";a(344)},379:function(t,e,a){"use strict";a(346)},380:function(t,e,a){"use strict";a(347)},381:function(t,e,a){"use strict";a(348)},382:function(t,e,a){"use strict";a(349)},383:function(t,e,a){"use strict";a(350)},388:function(t,e,a){"use strict";a.r(e);a(355),a(96),a(98);var n=a(325),i={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(n.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(n.g)(this.link)||Object(n.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(n.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(n.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction:function(){this.$emit("focusout")}}},r=a(5),s=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isInternal&&this.$page.path.split("/").length<3?a("RouterLink",{staticClass:"nav-link",attrs:{to:t.link},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v(t._s(t.item.text))]):t.isInternal?a("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v(t._s(t.item.text))]):a("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t.item.icon?a("div",{staticClass:"nav-icon"},[a("img",{attrs:{src:t.item.icon}})]):a("div",[t._v(t._s(t.item.text))])])}),[],!1,null,null,null).exports,o={name:"Home",components:{NavLink:s},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(a(358),Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),null!==t.data.tagline?a("p",{staticClass:"description"},[t._v(t._s(t.data.tagline||t.$description||"Welcome to your VuePress site"))]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,(function(e,n){return a("div",{key:n,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),a("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?a("div",{staticClass:"footer"},[t._v(t._s(t.data.footer))]):t._e()],1)}),[],!1,null,null,null).exports),c=(a(359),a(94)),u=(a(11),a(12),a(16),a(100),a(361),a(31),a(67),{name:"AlgoliaSearchBox",props:["options"],data:function(){return{placeholder:void 0}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}},mounted:function(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize:function(t,e){var n=this;Promise.all([Promise.all([a.e(0),a.e(2)]).then(a.t.bind(null,386,7)),Promise.all([a.e(0),a.e(2)]).then(a.t.bind(null,387,7))]).then((function(a){var i=Object(c.a)(a,1)[0];i=i.default;var r=t.algoliaOptions,s=void 0===r?{}:r;i(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:["lang:".concat(e)].concat(s.facetFilters||[])},s),handleSelected:function(t,e,a){var i=new URL(a.url),r=i.pathname,s=i.hash,o=r.replace(n.$site.base,"/");n.$router.push("".concat(o).concat(s))}}))}))},update:function(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}}}),h=(a(365),Object(r.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null).exports),p=a(385),d=(a(370),Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}})}),[],!1,null,null,null).exports),f=a(45),m=(a(68),a(177),a(334),a(183),a(353)),v=a(193),g=a.n(v),b={name:"DropdownLink",components:{NavLink:s,DropdownTransition:m.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return g()(e)===t}}},_=(a(372),{name:"NavLinks",components:{NavLink:s,DropdownLink:Object(r.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[a("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[a("span",{staticClass:"title language"},[t._v(t._s(t.item.text))]),t._v(" "),a("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),a("DropdownTransition",[a("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,n){return a("li",{key:e.link||n,staticClass:"dropdown-item"},["links"===e.type?a("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?a("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(n){return a("li",{key:n.link,staticClass:"dropdown-subitem"},[a("NavLink",{attrs:{item:n},on:{focusout:function(a){t.isLastItemOfArray(n,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):a("NavLink",{attrs:{item:e},on:{focusout:function(a){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var a=this.$page.path,n=this.$router.options.routes,i=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(r){var s,o=e[r],l=i[r]&&i[r].label||o.lang;return o.lang===t.$lang?s=a:(s=a.replace(t.$localeConfig.path,r),n.some((function(t){return t.path===s}))||(s=r)),{text:l,link:s}}))};return[].concat(Object(f.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(n.j)(t),{items:(t.items||[]).map(n.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],a=0;a<e.length;a++){var n=e[a];if(new RegExp(n,"i").test(t))return n}return"Source"}}}}),k=(a(373),Object(r.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return this.userLinks.length||this.repoLink?e("nav",{staticClass:"nav-links"},this._l(this.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),0):this._e()}),[],!1,null,null,null).exports);function C(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var $={name:"Navbar",components:{SidebarButton:d,NavLinks:k,SearchBox:p.a,AlgoliaSearchBox:h},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(C(this.$el,"paddingLeft"))+parseInt(C(this.$el,"paddingRight")),a=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};a(),window.addEventListener("resize",a,!1)}},y=(a(374),Object(r.a)($,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar"},[a("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),a("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?a("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?a("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),a("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[a("NavLinks",{staticClass:"can-hide"}),t._v(" "),t.isAlgoliaSearch?a("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?a("SearchBox"):t._e()],1)],1)}),[],!1,null,null,null).exports),x=a(341),L=a.n(x),O={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=L()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,a=e.repo,n=e.docsDir,i=void 0===n?"":n,r=e.docsBranch,s=void 0===r?"master":r,o=e.docsRepo,l=void 0===o?a:o;return t&&l&&this.$page.relativePath?this.createEditLink(a,l,i,s,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,a,i,r){return/bitbucket.org/.test(t)?(n.i.test(e)?e:t).replace(n.a,"")+"/src"+"/".concat(i,"/")+(a?a.replace(n.a,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(n.i.test(e)?e:"https://github.com/".concat(e)).replace(n.a,"")+"/edit"+"/".concat(i,"/")+(a?a.replace(n.a,"")+"/":"")+r}}},w=(a(375),Object(r.a)(O,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"page-edit"},[t.editLink?a("div",{staticClass:"edit-link"},[a("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),a("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?a("div",{staticClass:"last-updated"},[a("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),S=a(376),T=a.n(S),j={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return I(E.PREV,this)},next:function(){return I(E.NEXT,this)}}};var E={NEXT:{resolveLink:function(t,e){return N(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return N(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function I(t,e){var a=e.$themeConfig,i=e.$page,r=e.$route,s=e.$site,o=e.sidebarItems,l=t.resolveLink,c=t.getThemeLinkConfig,u=t.getPageLinkConfig,h=c(a),p=u(i),d=L()(p)?h:p;return!1===d?void 0:T()(d)?Object(n.k)(s.pages,d,r.path):l(i,o)}function N(t,e,a){var n=[];!function t(e,a){for(var n=0,i=e.length;n<i;n++)"group"===e[n].type?t(e[n].children||[],a):a.push(e[n])}(e,n);for(var i=0;i<n.length;i++){var r=n[i];if("page"===r.type&&r.path===decodeURIComponent(t.path))return n[i+a]}}var P=j,A=(a(377),Object(r.a)(P,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.prev||t.next?a("div",{staticClass:"page-nav"},[a("div",{staticClass:"inner"},[t.prev?a("div",{staticClass:"prev"},["external"===t.prev.type?a("a",{attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.prev.title||t.prev.path))]):a("RouterLink",{attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))])],1):t._e(),t._v(" "),t.next?a("div",{staticClass:"next"},["external"===t.next.type?a("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.next.title||t.next.path))]):a("RouterLink",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))])],1):t._e()])]):t._e()}),[],!1,null,null,null).exports),D={name:"Footer"},R=(a(378),Object(r.a)(D,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-container"},[a("div",{staticClass:"company"},[a("div",{staticClass:"copyright"},[t._v("Terraform labs PTE.LTD")]),t._v(" "),a("div",{staticClass:"subscribe"},[a("div",{staticClass:"subscribe-title"},[t._v("Subscribe to get updates")]),t._v(" "),a("form",{staticClass:"validate",attrs:{action:"https://money.us17.list-manage.com/subscribe/post?u=8eca8dc5c91c2e30d69b1463e&id=1447662093",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",novalidate:""}},[a("input",{staticClass:"email",attrs:{type:"email",value:"",name:"EMAIL",id:"mce-EMAIL",placeholder:"Email address",required:""}}),t._v("\n        real people should not fill this in and expect good things - do not remove this or risk form bot\n        signups\n        "),a("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[a("input",{attrs:{type:"text",name:"b_8eca8dc5c91c2e30d69b1463e_1447662093",tabindex:"-1",value:""}})]),t._v(" "),a("button",{attrs:{type:"submit"}},[t._v("Submit")])])])]),t._v(" "),a("div",{staticClass:"links-container"},[a("ul",{staticClass:"learn"},[a("li",[t._v("Learn")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://terra.money/Terra_White_paper.pdf",target:"_blank"}},[t._v("\n          White\n          Paper\n        ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docsend.com/view/9mvr5qq",target:"_blank"}},[t._v("Decks")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://certik.org/reports/terra.pdf",target:"_blank"}},[t._v("Security Audit")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://agora.terra.money/",target:"_blank"}},[t._v("Agora Discussions")])])]),t._v(" "),a("ul",{staticClass:"developers"},[a("li",[t._v("Tools")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://station.terra.money/",target:"_blank"}},[t._v("Terra Station")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://finder.terra.money/",target:"_blank"}},[t._v("Terra Finder")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://status.terra.money/",target:"_blank"}},[t._v("Status")])])]),t._v(" "),a("ul",{staticClass:"developers"},[a("li",[t._v("Luna")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.terra.money/luna",target:"_blank"}},[t._v("What is Luna?")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.terra.money/integrations.html#exchanges",target:"_blank"}},[t._v("Exchanges")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.terra.money/integrations.html#wallets",target:"_blank"}},[t._v("Wallets")])])]),t._v(" "),a("ul",{staticClass:"developers"},[a("li",[t._v("Foundation")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://terra.money/about.html",target:"_blank"}},[t._v("Team")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://terra.breezy.hr/",target:"_blank"}},[t._v("Careers")])])]),t._v(" "),a("ul",{staticClass:"developers"},[a("li",[t._v("Developers")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/terra-money",target:"_blank"}},[t._v("Github")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.terra.money/",target:"_blank"}},[t._v("Documentation")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.terra.money/#sdks-for-developers",target:"_blank"}},[t._v("SDKs")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/terra-money/TIPs",target:"_blank"}},[t._v("TIPs")])])]),t._v(" "),a("ul",{staticClass:"developers"},[a("li",[t._v("Validators")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.terra.money/validator",target:"_blank"}},[t._v("Validator Guide")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/terra-money/validator-profiles",target:"_blank"}},[t._v("Profiles")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://discord.gg/ZHBuKda",target:"_blank"}},[t._v("Discord Channel")])])])]),t._v(" "),a("div",{staticClass:"sns-container"},[a("div",{staticClass:"logos"},[a("a",{attrs:{href:"https://discord.gg/bYfyhUT",rel:"noopener",target:"_blank"}},[a("img",{attrs:{src:"https://terra.money/static/assets/images/icon_discord.png",alt:"link to Terra discord room"}})]),t._v(" "),a("a",{attrs:{href:"https://medium.com/terra-money",rel:"noopener",target:"_blank"}},[a("img",{attrs:{src:"https://terra.money/static/assets/images/icon_medium.png",alt:"link to Terra medium"}})]),t._v(" "),a("a",{attrs:{href:"https://twitter.com/terra_money",rel:"noopener",target:"_blank"}},[a("img",{attrs:{src:"https://terra.money/static/assets/images/icon_twitter.png",alt:"link to Terra twitter"}})]),t._v(" "),a("a",{attrs:{href:"https://www.youtube.com/channel/UCoV1RXZ9ZBGcuu_PMTTlM0g",rel:"noopener",target:"_blank"}},[a("img",{attrs:{src:"https://terra.money/static/assets/images/icon_youtube.png",alt:"link to Terra youtube"}})]),t._v(" "),a("a",{attrs:{href:"https://t.me/terra_announcements",rel:"noopener",target:"_blank"}},[a("img",{attrs:{src:"https://terra.money/static/assets/images/icon_telegram.png",alt:"link to Terra telegram room"}})])]),t._v(" "),a("a",{staticClass:"terramoney",attrs:{href:"https://terra.money",target:"_blank"}},[t._v("terra.money")])])])}],!1,null,null,null).exports),U=(a(326),a(345),{name:"Breadcrumb",computed:{bread:function(){var t=this.$page.path.split("/");t[t.length-1].length||t.pop();for(var e="",a=[],n=0;n<t.length;n++){e+=t[n];var i=this.$site.pages.find((function(t){return t.path===e||t.path===e+"/"}));e+="/",null!=i&&a.push({path:i.path,title:i.frontmatter.breadcrumb||i.title})}return a}}}),B=(a(379),{components:{PageEdit:w,PageNav:A,Footer:R,Breadcrumb:Object(r.a)(U,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.bread.length>1?a("nav",{staticClass:"breadcrumb-container",attrs:{id:"breadcrumb"}},t._l(t.bread,(function(e){return a("router-link",{key:e.path,staticClass:"breadcrumb",attrs:{to:e.path}},[a("span",[t._v(t._s(e.title))])])})),1):t._e()}),[],!1,null,"5c2bdde3",null).exports},props:["sidebarItems"]}),H=(a(380),Object(r.a)(B,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page"},[t._t("top"),t._v(" "),a("Breadcrumb"),t._v(" "),a("Content",{staticClass:"theme-default-content"}),t._v(" "),a("PageEdit"),t._v(" "),a("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom"),t._v(" "),a("Footer")],2)}),[],!1,null,null,null).exports),W={name:"Sidebar",components:{SidebarLinks:a(352).default,NavLinks:k},props:["items"]},G=(a(383),{name:"Layout",components:{Home:l,Page:H,Sidebar:Object(r.a)(W,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"sidebar"},[a("NavLinks"),t._v(" "),t._t("top"),t._v(" "),a("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom"),t._v(" "),t._m(0)],2)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar_footer"},[a("a",{attrs:{href:"https://terra-money.github.io/terra-sdk-python/",target:"_blank"}},[a("div",{staticClass:"image"},[a("img",{attrs:{src:"https://terra.money/assets/img/terra_sdk.svg"}})]),t._v(" "),a("div",{staticClass:"name"},[a("div",[a("b",[t._v("Terra")]),t._v(" Python SDK\n          "),a("i",{staticClass:"material-icons"},[t._v("transit_enterexit")])])])]),t._v(" "),a("a",{attrs:{href:"https://terra-money.github.io/terra.js/",target:"_blank"}},[a("div",{staticClass:"image"},[a("img",{attrs:{src:"/img/terra_js.svg"}})]),t._v(" "),a("div",{staticClass:"name"},[a("div",[a("b",[t._v("Terra.js")]),t._v(" JS SDK\n          "),a("i",{staticClass:"material-icons"},[t._v("transit_enterexit")])])])])])}],!1,null,null,null).exports,Navbar:y},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(n.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x,this.toggleSidebar(!1))}}}),M=Object(r.a)(G,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=M.exports}}]);