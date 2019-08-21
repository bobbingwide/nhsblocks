!function(e){var t={};function n(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){var l=n(5),a=n(4),r=n(3);e.exports=function(e,t){return l(e)||a(e,t)||r()}},function(e,t,n){"use strict";n.r(t);var l=n(0),a=wp.blocks.registerBlockType,r=(wp.element.Fragment,wp.components),c=(r.PanelBody,r.SelectControl,r.BaseControl,r.IconButton,wp.editor.InnerBlocks),s=wp.i18n,o=s.__;s._x;a("nhsblocks/section",{title:o("Section","nhsblocks"),description:o("Add a section that separates content, and put any other block into it.","nhsblocks"),category:"nhsblocks",icon:"welcome-widgets-menus",supports:{align:["wide","full"],anchor:!0},attributes:{},edit:function(e){var t=e.attributes;e.setAttributes,t.colorScheme,t.contentMaxWidth,t.attachmentId,t.attachmentUrl;return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-panel-group nhsuk-grid-column-full"},Object(l.createElement)(c,null)))},save:function(e){var t=e.attributes;t.colorScheme,t.contentMaxWidth,t.attachmentId;return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-panel-group nhsuk-grid-column-full"},Object(l.createElement)(c.Content,null)))}});var i=wp.i18n.__,u=wp.blocks.registerBlockType,m=wp.editor,h=m.RichText,b=m.InnerBlocks;u("nhsblocks/dodont",{title:i("Do and Don't List","nhsblocks"),category:"nhsblocks",icon:"yes-alt",attributes:{panelTitle:{type:"string",source:"html",selector:"h3"}},edit:function(e){var t=e.attributes.panelTitle,n=(e.className,e.setAttributes);return Object(l.createElement)("div",{className:"nhsuk-do-dont-list"},Object(l.createElement)("h3",{className:"nhsuk-do-dont-list__label"},Object(l.createElement)(h,{placeholder:i("Panel Title","nhsblocks"),value:t,onChange:function(e){n({panelTitle:e})}})),Object(l.createElement)("ul",{className:"nhsuk-list nhsuk-list--cross"},Object(l.createElement)(b,{allowedBlocks:[]})))},save:function(e){var t=e.attributes,n=t.panelTitle;t.panelText;return Object(l.createElement)("div",{className:"nhsuk-do-dont-list"},Object(l.createElement)("h3",{className:"nhsuk-do-dont-list__label"},Object(l.createElement)(h.Content,{value:n})),Object(l.createElement)("ul",{className:"nhsuk-list nhsuk-list--cross"},Object(l.createElement)(b.Content,null)))}}),u("nhsblocks/doitem",{title:i("List Item with Tick","nhsblocks"),category:"nhsblocks",icon:"yes",parent:["nhsblocks/dodont"],attributes:{panelText:{type:"string",source:"html",selector:"span"}},edit:function(e){var t=e.attributes.panelText,n=e.setAttributes;return Object(l.createElement)("li",null,Object(l.createElement)("svg",{class:"nhsuk-icon nhsuk-icon__tick",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},Object(l.createElement)("path",{"stroke-width":"4","stroke-linecap":"round",d:"M18.4 7.8l-8.5 8.4L5.6 12"})),Object(l.createElement)("span",null,Object(l.createElement)(h,{placeholder:i("Text","nhsblocks"),value:t,onChange:function(e){n({panelText:e})}})))},save:function(e){var t=e.attributes.panelText;return Object(l.createElement)("li",null,Object(l.createElement)("svg",{class:"nhsuk-icon nhsuk-icon__tick",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},Object(l.createElement)("path",{"stroke-width":"4","stroke-linecap":"round",d:"M18.4 7.8l-8.5 8.4L5.6 12"})),Object(l.createElement)("span",null,Object(l.createElement)(h.Content,{value:t})))}}),u("nhsblocks/dontitem",{title:i("List Item with Cross","nhsblocks"),category:"nhsblocks",icon:"no-alt",parent:["nhsblocks/dodont"],attributes:{panelText:{type:"string",source:"html",selector:"span"}},edit:function(e){var t=e.attributes.panelText,n=e.setAttributes;return Object(l.createElement)("li",null,Object(l.createElement)("svg",{class:"nhsuk-icon nhsuk-icon__cross",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},Object(l.createElement)("path",{d:"M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"}),Object(l.createElement)("path",{d:"M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"})),Object(l.createElement)("span",null,Object(l.createElement)(h,{placeholder:i("Text","nhsblocks"),value:t,onChange:function(e){n({panelText:e})}})))},save:function(e){var t=e.attributes.panelText;return Object(l.createElement)("li",null,Object(l.createElement)("svg",{class:"nhsuk-icon nhsuk-icon__cross",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},Object(l.createElement)("path",{d:"M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"}),Object(l.createElement)("path",{d:"M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"})),Object(l.createElement)("span",null,Object(l.createElement)(h.Content,{value:t})))}});var p=wp.i18n.__,d=wp.blocks.registerBlockType,k=wp.editor,g=k.RichText,O=k.URLInputButton;d("nhsblocks/nhsbutton",{title:p("Button","nhsblocks"),category:"nhsblocks",icon:"admin-links",styles:[{name:"green",label:p("Standard (Green)"),isDefault:!0},{name:"secondary",label:p("Secondary (Grey)")},{name:"reverse",label:p("Reverse (White)")}],supports:{align:!0},attributes:{buttonLabel:{type:"string",source:"html",selector:".nhsuk-button"},buttonLink:{type:"string",source:"attribute",selector:"a.nhsuk-button",attribute:"href"}},edit:function(e){var t=e.attributes,n=t.buttonLabel,a=t.buttonLink,r=e.className,c=e.setAttributes;return Object(l.createElement)("a",{href:"#0",className:"".concat(r," nhsuk-button")},Object(l.createElement)(g,{placeholder:p("Button Label","nhsblocks"),value:n,onChange:function(e){c({buttonLabel:e})}}),Object(l.createElement)(O,{className:"nhsblocks-dropdown__input",label:p("Button URL","nhsblocks"),onChange:function(e){c({buttonLink:e})},url:a}))},save:function(e){var t=e.attributes,n=t.buttonLabel,a=t.buttonLink;return Object(l.createElement)("a",{href:a,className:"nhsuk-button"},Object(l.createElement)(g.Content,{value:n}))}});var v=wp.i18n.__,E=wp.blocks.registerBlockType,j=wp.editor.RichText;E("nhsblocks/reveal1",{title:v("Simple Reveal","nhsblocks"),category:"nhsblocks",icon:"plus-alt",styles:[{name:"downarrow",label:v("Down Arrow"),isDefault:!0},{name:"expander",label:v("Plus Icon")}],attributes:{revealTitle:{type:"string",source:"html",selector:".nhsuk-details__summary-text"},revealText:{type:"string",source:"html",selector:".nhsuk-details__text"},expanderBox:{type:"string"}},edit:function(e){var t=e.attributes,n=t.revealTitle,a=t.revealText,r=e.className,c=e.setAttributes;return Object(l.createElement)("details",{className:"".concat(r," nhsuk-details newstyle"),open:!0},Object(l.createElement)("summary",{className:"nhsuk-details__summary",role:"button","aria-controls":"details-content-","aria-expanded":"true"},Object(l.createElement)("span",{className:"nhsuk-details__summary-text"},Object(l.createElement)(j,{placeholder:v("Reveal Title","nhsblocks"),value:n,onChange:function(e){c({revealTitle:e})}}))),Object(l.createElement)("div",{className:"nhsuk-details__text",id:"details-content-","aria-hidden":"false"},Object(l.createElement)(j,{multiline:"p",placeholder:v("Reveal Contents","nhsblocks"),onChange:function(e){c({revealText:e})},value:a})))},save:function(e){var t=e.attributes,n=t.revealTitle,a=t.revealText;return Object(l.createElement)("details",{className:"nhsuk-details"},Object(l.createElement)("summary",{className:"nhsuk-details__summary",role:"button","aria-controls":"details-content-","aria-expanded":"false"},Object(l.createElement)("span",{className:"nhsuk-details__summary-text"},Object(l.createElement)(j.Content,{value:n}))),Object(l.createElement)("div",{className:"nhsuk-details__text",id:"details-content-","aria-hidden":"false"},Object(l.createElement)(j.Content,{multiline:"p",value:a})))}});var w=wp.i18n.__,_=wp.blocks.registerBlockType,f=wp.editor,y=f.RichText,x=f.InnerBlocks,T=[["core/paragraph",{placeholder:"Panel Text"}],["nhsblocks/nhsbutton",{align:"right"}]];_("nhsblocks/panel1",{title:w("Panel Region","nhsblocks"),description:w("By default this block includes a title, block of text and button link. You can remove the button if you wish by clicking it then clicking three dots on the navigation bar at the top of the page then the bin","nhsblocks"),icon:"feedback",category:"nhsblocks",styles:[{name:"default",label:w("Plain white panel"),isDefault:!0},{name:"panel-grey",label:w("Grey")},{name:"panel-with-label",label:w("With Label")}],attributes:{panelTitle:{type:"string",source:"html",selector:"h3"}},edit:function(e){var t=e.attributes.panelTitle,n=e.className,a=e.setAttributes;return Object(l.createElement)("div",{className:"".concat(n," nhsuk-panel")},Object(l.createElement)("h3",null,Object(l.createElement)(y,{placeholder:w("Panel Title","nhsblocks"),value:t,onChange:function(e){a({panelTitle:e})}})),Object(l.createElement)("div",{className:"paneltext"},Object(l.createElement)(x,{template:T})))},save:function(e){var t=e.attributes.panelTitle;return Object(l.createElement)("div",{className:"nhsuk-panel"},Object(l.createElement)("h3",null,Object(l.createElement)(y.Content,{value:t})),Object(l.createElement)("div",{className:"paneltext"},Object(l.createElement)(x.Content,null)))}});var N=wp.i18n.__,C=wp.blocks.registerBlockType,B=wp.editor.RichText,L=wp.data.withSelect;C("nhsblocks/latestnews",{title:N("Latest Posts / News","nhsblocks"),category:"nhsblocks",edit:L(function(e){return{posts:e("core").getEntityRecords("postType","post",{per_page:6})}})(function(e){var t=e.posts;e.className;if(!t)return"Loading...";if(t&&0===t.length)return"No posts";var n=t[0];console.info(n);return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-'.$width.' nhsuk-panel-group__item"},Object(l.createElement)("div",{className:"nhsuk-panel"},Object(l.createElement)("h3",null,Object(l.createElement)(B.Content,{value:n.title.rendered})),Object(l.createElement)("img",{src:function(e){return e||""}(n.featured_image_nhsblocksFeatImg_url),alt:"{post.title.rendered}"}),Object(l.createElement)(B.Content,{value:n.excerpt.rendered}),Object(l.createElement)("a",{href:n.link},"Read More Link")))}),save:function(e){return null}});var q=wp.i18n.__,S=wp.blocks.registerBlockType,I=wp.editor,R=I.URLInputButton,P=I.RichText,A=I.InnerBlocks;I.MediaUpload,I.InspectorControls;S("nhsblocks/promo1",{title:q("Promo Region","nhsblocks"),category:"nhsblocks",icon:"megaphone",styles:[{name:"default",label:q("Standard"),isDefault:!0},{name:"promo-small",label:q("Smaller Text")}],attributes:{promoTitle:{type:"string",source:"html",selector:".nhsuk-promo__heading"},promoText:{type:"string",source:"html",selector:".nhsuk-promo__description"},promoLink:{type:"string",source:"attribute",selector:".nhsuk-promo a",attribute:"href"}},edit:function(e){var t=e.attributes,n=t.promoTitle,a=t.promoText,r=t.promoLink,c=e.className,s=e.setAttributes;return Object(l.createElement)("div",{className:"".concat(c," nhsuk-promo")},Object(l.createElement)("div",{class:"nhsuk-promo__content"},Object(l.createElement)(R,{className:"nhsblocks-dropdown__input",label:q("Panel Link","nhsblocks"),onChange:function(e){s({promoLink:e})},url:r}),Object(l.createElement)(A,{allowedBlocks:["core/image"]}),Object(l.createElement)("h3",{class:"nhsuk-promo__heading"},Object(l.createElement)(P,{placeholder:q("Promo Title","nhsblocks"),value:n,onChange:function(e){s({promoTitle:e})}})),Object(l.createElement)("div",{className:"nhsuk-promo__description"},Object(l.createElement)(P,{multiline:"p",placeholder:q("Promo Contents","nhsblocks"),onChange:function(e){s({promoText:e})},value:a}))))},save:function(e){var t=e.attributes,n=t.promoTitle,a=t.promoText,r=t.promoLink;return Object(l.createElement)("div",{className:"nhsuk-promo"},Object(l.createElement)("a",{href:r,className:"nhsuk-promo__link-wrapper"},Object(l.createElement)("div",{class:"nhsuk-promo__content"},Object(l.createElement)(A.Content,null),Object(l.createElement)("h3",{class:"nhsuk-promo__heading"},Object(l.createElement)(P.Content,{value:n})),Object(l.createElement)("div",{className:"nhsuk-promo__description"},Object(l.createElement)(P.Content,{multiline:"p",value:a})))))}});var W=wp.i18n.__,Q=wp.blocks.registerBlockType,M=wp.editor,U=M.URLInputButton,D=M.RichText,z=M.InnerBlocks,G=M.MediaUpload,H=M.InspectorControls,F=(M.BlockControls,wp.components),J=F.SelectControl,Y=F.PanelBody;Q("nhsblocks/promogroup",{title:W("Promo Group","nhsblocks"),description:W("Add your promo items in here - as many as you like. Just remember if you set widths on them, the total of each row should add up to a full width","nhsblocks"),category:"nhsblocks",edit:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-grid-column-full"},Object(l.createElement)("div",{className:"nhsuk-grid-row nhsuk-promo-group"},Object(l.createElement)(z,{allowedBlocks:[]}))))},save:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-grid-column-full"},Object(l.createElement)("div",{className:"nhsuk-grid-row nhsuk-promo-group"},Object(l.createElement)(z.Content,null))))}}),Q("nhsblocks/promo2",{title:W("Promo Region","nhsblocks"),category:"nhsblocks",parent:["nhsblocks/promogroup"],attributes:{promoTitle:{type:"string",source:"html",selector:".nhsuk-promo__heading"},promoText:{type:"string",source:"html",selector:".nhsuk-promo__description"},promoLink:{type:"string",source:"attribute",selector:".nhsuk-promo a",attribute:"href"},promoImg:{type:"string",source:"html",selector:".nhsuk-promo-img"},columnWidth:{type:"string",default:"nhsuk-grid-column-full nhsuk-promo-group__item"}},edit:function(e){var t=e.attributes,n=t.promoTitle,a=t.promoText,r=t.promoLink,c=t.columnWidth,s=e.className,o=e.setAttributes;return[Object(l.createElement)(H,null,Object(l.createElement)(Y,{title:"Column Width",icon:"welcome-widgets-menus",initialOpen:!0},Object(l.createElement)(J,{label:"Column Width",value:c,options:[{label:"Full Width",value:"nhsuk-grid-column-full nhsuk-promo-group__item"},{label:"Half Width",value:"nhsuk-grid-column-one-half nhsuk-promo-group__item"},{label:"One Third Width",value:"nhsuk-grid-column-one-third nhsuk-promo-group__item"},{label:"Two Thirds Width",value:"nhsuk-grid-column-two-thirds nhsuk-promo-group__item"}],onChange:function(e){o({columnWidth:e})}}))),Object(l.createElement)("div",{className:"".concat(s," ").concat(c),style:{float:"inherit",display:"inline-block"}},Object(l.createElement)("div",{className:"nhsuk-promo"},Object(l.createElement)("div",{class:"nhsuk-promo__content"},Object(l.createElement)(U,{className:"nhsblocks-dropdown__input",label:W("Panel Link","nhsblocks"),onChange:function(e){o({promoLink:e})},url:r}),Object(l.createElement)(z,{allowedBlocks:[]}),Object(l.createElement)("h3",{class:"nhsuk-promo__heading"},Object(l.createElement)(D,{placeholder:W("Promo Title","nhsblocks"),value:n,onChange:function(e){o({promoTitle:e})}})),Object(l.createElement)("div",{className:"nhsuk-promo__description"},Object(l.createElement)(D,{multiline:"p",placeholder:W("Promo Contents","nhsblocks"),onChange:function(e){o({promoText:e})},value:a})))))]},save:function(e){var t=e.attributes,n=t.promoTitle,a=t.promoText,r=t.promoLink,c=t.columnWidth,s=e.className;e.setAttributes;return Object(l.createElement)("div",{className:"".concat(s," ").concat(c)},Object(l.createElement)("div",{className:"nhsuk-promo"},Object(l.createElement)("a",{href:r,className:"nhsuk-promo__link-wrapper"},Object(l.createElement)("div",{class:"nhsuk-promo__content"},Object(l.createElement)(z.Content,null),Object(l.createElement)("h3",{className:"nhsuk-promo__heading"},Object(l.createElement)(D.Content,{value:n})),Object(l.createElement)("div",{className:"nhsuk-promo__description"},Object(l.createElement)(D.Content,{multiline:"p",value:a}))))))}}),Q("nhsblocks/promoimage2",{title:W("Promo Image","nhsblocks"),parent:["nhsblocks/promo2"],category:"nhsblocks",attributes:{imgUrl:{type:"string",default:null}},edit:function(e){var t=e.attributes.imgUrl,n=(e.className,e.setAttributes);return[Object(l.createElement)(H,null,Object(l.createElement)("div",null,Object(l.createElement)("strong",null,"Select a panel image:"),Object(l.createElement)("br",null),Object(l.createElement)(G,{onSelect:function(e){n({imgUrl:e.sizes.full.url})},type:"image",value:t,render:function(e){var t=e.open;return Object(l.createElement)("button",{className:"nhsuk-button",onClick:t},"Upload Image!")}}))),Object(l.createElement)("div",{className:"imagewrapper"},Object(l.createElement)("img",{className:"nhsuk-promo__img",src:t}))]},save:function(e){var t=e.attributes.imgUrl;e.className,e.setAttributes;return Object(l.createElement)("img",{className:"nhsuk-promo__img",src:t})}});var $=wp.i18n.__,K=wp.blocks.registerBlockType,V=wp.editor.RichText;K("nhsblocks/quote1",{title:$("Simple Quote","nhsblocks"),category:"nhsblocks",icon:"format-quote",styles:[{name:"standard",label:$("Standard"),isDefault:!0},{name:"quote-reverse",label:$("Inverse")}],attributes:{quoteName:{type:"string",source:"html",selector:".nhsuk-inset-text__quote-attribution"},quoteText:{type:"array",source:"children",multiline:"p",selector:".nhsuk-inset-text__quote"}},edit:function(e){var t=e.attributes,n=t.quoteName,a=t.quoteText,r=e.className,c=e.setAttributes;return Object(l.createElement)("div",{className:"".concat(r," nhsuk-inset-text")},Object(l.createElement)("span",{className:"nhsuk-u-visually-hidden"},"Quote / Testimonial: "),Object(l.createElement)("div",{className:"nhsuk-inset-text__quote"},Object(l.createElement)(V,{multiline:"p",placeholder:$("Quote","nhsblocks"),onChange:function(e){c({quoteText:e})},value:a})),Object(l.createElement)("span",{className:"nhsuk-inset-text__quote-attribution"},Object(l.createElement)(V,{placeholder:$("Quote Name","nhsblocks"),value:n,onChange:function(e){c({quoteName:e})}})))},save:function(e){var t=e.attributes,n=t.quoteName,a=t.quoteText;return Object(l.createElement)("div",{className:"nhsuk-inset-text"},Object(l.createElement)("span",{className:"nhsuk-u-visually-hidden"},"Quote / Testimonial: "),Object(l.createElement)("div",{className:"nhsuk-inset-text__quote"},Object(l.createElement)(V.Content,{multiline:"p",value:a})),Object(l.createElement)("span",{className:"nhsuk-inset-text__quote-attribution"},Object(l.createElement)(V.Content,{value:n})))}});var X=wp.i18n.__,Z=wp.blocks.registerBlockType,ee=wp.editor.RichText;Z("nhsblocks/card1",{title:X("Card Region","nhsblocks"),category:"nhsblocks",attributes:{cardTitle:{type:"string",source:"html",selector:".nhsuk-care-card__heading-text"},cardText:{type:"array",source:"children",multiline:"p",selector:".nhsuk-care-card__content"}},edit:function(e){var t=e.attributes,n=t.cardTitle,a=t.cardText,r=e.className,c=e.setAttributes;return Object(l.createElement)("div",{className:"".concat(r," nhsuk-care-card")},Object(l.createElement)("div",{className:"nhsuk-care-card__heading-container"},Object(l.createElement)("h3",{className:"nhsuk-care-card__heading"},Object(l.createElement)("span",{role:"text"},Object(l.createElement)("span",{className:"nhsuk-u-visually-hidden"},"Non-urgent advice: "),Object(l.createElement)("span",{className:"nhsuk-care-card__heading-text"},Object(l.createElement)(ee,{placeholder:X("Card Title","nhsblocks"),value:n,onChange:function(e){c({cardTitle:e})}})))),Object(l.createElement)("span",{className:"nhsuk-care-card__arrow","aria-hidden":"true"})),Object(l.createElement)("div",{className:"nhsuk-care-card__content"},Object(l.createElement)(ee,{multiline:"p",placeholder:X("Card Contents","nhsblocks"),onChange:function(e){c({cardText:e})},value:a})))},save:function(e){var t=e.attributes,n=t.cardTitle,a=t.cardText;return Object(l.createElement)("div",{className:"nhsuk-grid-column-width nhsuk-care-card nhsuk-care-card--type"},Object(l.createElement)("div",{className:"nhsuk-care-card__heading-container"},Object(l.createElement)("h3",{className:"nhsuk-care-card__heading"},Object(l.createElement)("span",{role:"text"},Object(l.createElement)("span",{className:"nhsuk-u-visually-hidden"},"Non-urgent advice: "),Object(l.createElement)("span",{className:"nhsuk-care-card__heading-text"},Object(l.createElement)(ee.Content,{value:n})))),Object(l.createElement)("span",{className:"nhsuk-care-card__arrow","aria-hidden":"true"})),Object(l.createElement)("div",{className:"nhsuk-care-card__content"},Object(l.createElement)(ee.Content,{multiline:"p",value:a})))}}),wp.blocks.registerBlockStyle("nhsblocks/card1",{name:"default",label:"Standard Blue",isDefault:!0}),wp.blocks.registerBlockStyle("nhsblocks/card1",{name:"urgent",label:"Urgent (Red)"}),wp.blocks.registerBlockStyle("nhsblocks/card1",{name:"immediate",label:"Immediate (Red and Black)"});var te=n(1),ne=n.n(te),le=wp.element,ae=le.useState,re=(le.setState,wp.i18n.__),ce=wp.blocks.registerBlockType,se=wp.blockEditor.InnerBlocks,oe=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"31.000",y:"0.000",width:"29.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"29.000",height:"30"})),ie=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"41.000",y:"0.000",width:"19.000",height:"30"}),wp.element.createElement("rect",{x:"21.000",y:"0.000",width:"19.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"19.000",height:"30"})),ue=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"21.000",y:"0.000",width:"39.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"19.000",height:"30"})),me=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"41.000",y:"0.000",width:"19.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"39.000",height:"30"})),he=wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"46.000",y:"0.000",width:"14.000",height:"30"}),wp.element.createElement("rect",{x:"31.000",y:"0.000",width:"14.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"29.000",height:"30"})),be=[{title:"Two Columns",icon:oe,template:[["nhsblocks/onehalf"],["nhsblocks/onehalf"]]},{title:"Three Columns",icon:ie,template:[["nhsblocks/onethird"],["nhsblocks/onethird"],["nhsblocks/onethird"]]},{title:"One Third / Two Thirds Columns",icon:ue,template:[["nhsblocks/onethird"],["nhsblocks/twothirds"]]},{title:"Two Thirds / One Third Columns",icon:me,template:[["nhsblocks/twothirds"],["nhsblocks/onethird"]]},{title:"One Quarter / One Half / One Quarter Columns",icon:wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"46.000",y:"0.000",width:"14.000",height:"30"}),wp.element.createElement("rect",{x:"16.000",y:"0.000",width:"29.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"14.000",height:"30"})),template:[["nhsblocks/onequarter"],["nhsblocks/onehalf"],["nhsblocks/onequarter"]]},{title:"One Quarter / One Quarter / One Half Columns",icon:wp.element.createElement("svg",{width:60,height:30},wp.element.createElement("rect",{x:"31.000",y:"0.000",width:"29.000",height:"30"}),wp.element.createElement("rect",{x:"16.000",y:"0.000",width:"14.000",height:"30"}),wp.element.createElement("rect",{x:"0.000",y:"0.000",width:"14.000",height:"30"})),template:[["nhsblocks/onequarter"],["nhsblocks/onequarter"],["nhsblocks/onehalf"]]},{title:"One Half / One Quarter / One Quarter Columns",icon:he,template:[["nhsblocks/onehalf"],["nhsblocks/onequarter"],["nhsblocks/onequarter"]]}],pe=[{title:"Panel",icon:"feedback",template:[["nhsblocks/panel1"]]},{title:"Promo",icon:"megaphone",template:[["nhsblocks/promo1"]]},{title:"Quote / Testimonial",icon:"format-quote",template:[["nhsblocks/quote1"]]}];ce("nhsblock/rowgroup",{title:re("Grouped Items","nhsblocks"),category:"nhsblocks",icon:"layout",edit:function(e){var t=ae(a),n=ne()(t,2),a=n[0],r=n[1],c=null===a||!a;return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-panel-group nhsuk-grid-column-full"},Object(l.createElement)(se,{template:c?null:a,__experimentalTemplateOptions:be,__experimentalOnSelectTemplateOption:function(e){void 0===e&&(e="'nhsblocks/onehalf','nhsblocks/onehalf'"),r(e)}})))},save:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-panel-group nhsuk-grid-column-full"},Object(l.createElement)(se.Content,null)))}}),ce("nhsblocks/onehalf",{title:re("One Half Width","nhsblocks"),category:"nhsblocks",parent:["nhsblock/rowgroup"],edit:function(e){var t=ae(null),n=ne()(t,2),a=n[0],r=n[1];return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-half"},Object(l.createElement)(se,{template:a,__experimentalTemplateOptions:pe,__experimentalOnSelectTemplateOption:r}))},save:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-half"},Object(l.createElement)(se.Content,null))}}),ce("nhsblocks/onethird",{title:re("One Third Width","nhsblocks"),category:"nhsblocks",parent:["nhsblock/rowgroup"],edit:function(e){var t=ae(null),n=ne()(t,2),a=n[0],r=n[1];return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-third"},Object(l.createElement)(se,{template:a,__experimentalTemplateOptions:pe,__experimentalOnSelectTemplateOption:r}))},save:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-third"},Object(l.createElement)(se.Content,null))}}),ce("nhsblocks/onequarter",{title:re("One Quarter Width","nhsblocks"),category:"nhsblocks",parent:["nhsblock/rowgroup"],edit:function(e){var t=ae(null),n=ne()(t,2),a=n[0],r=n[1];return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-quarter"},Object(l.createElement)(se,{template:a,__experimentalTemplateOptions:pe,__experimentalOnSelectTemplateOption:r}))},save:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-quarter"},Object(l.createElement)(se.Content,null))}}),ce("nhsblocks/twothirds",{title:re("Two Thirds Width","nhsblocks"),category:"nhsblocks",parent:["nhsblock/rowgroup"],edit:function(e){var t=ae(null),n=ne()(t,2),a=n[0],r=n[1];return Object(l.createElement)("div",{className:"nhsuk-grid-column-two-thirds"},Object(l.createElement)(se,{template:a,__experimentalTemplateOptions:pe,__experimentalOnSelectTemplateOption:r}))},save:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-column-two-thirds"},Object(l.createElement)(se.Content,null))}}),ce("nhsblocks/threequarters",{title:re("Three Quarter Width","nhsblocks"),category:"nhsblocks",parent:["nhsblock/rowgroup"],edit:function(e){var t=ae(null),n=ne()(t,2),a=n[0],r=n[1];return Object(l.createElement)("div",{className:"nhsuk-grid-column-three-quarters"},Object(l.createElement)(se,{template:a,__experimentalTemplateOptions:pe,__experimentalOnSelectTemplateOption:r}))},save:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-column-three-quarters"},Object(l.createElement)(se.Content,null))}})},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t){e.exports=function(e,t){var n=[],l=!0,a=!1,r=void 0;try{for(var c,s=e[Symbol.iterator]();!(l=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);l=!0);}catch(e){a=!0,r=e}finally{try{l||null==s.return||s.return()}finally{if(a)throw r}}return n}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}}]);