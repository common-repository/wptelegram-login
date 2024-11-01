import{g as k,j as t,_ as s}from"./get-plugin-data-CUiZS_nG.js";const b=e=>k("wptelegram_login",e),m=b("assets"),i=({attributes:e,className:o})=>{const{button_style:a,show_user_photo:u,corner_radius:c}=e;let l;a==="small"?l="100px":a==="medium"&&(l="150px");let r;return a==="small"?r="20px":a==="medium"&&(r="30px"),t.jsxs("div",{className:o,children:[t.jsx("img",{src:m.loginImageUrl,style:{borderRadius:`${c}px`,width:l},alt:""}),u?t.jsx("img",{src:m.loginAvatarUrl,style:{width:r},alt:""}):null]})},B=()=>[{label:s("Large"),value:"large"},{label:s("Medium"),value:"medium"},{label:s("Small"),value:"small"}];var h;const g=((h=window.wptelegram_login)==null?void 0:h.savedSettings)||{},N=({attributes:e,setAttributes:o,className:a})=>{const{button_style:u,show_user_photo:c,corner_radius:l,lang:r,show_if_user_is:y}={...g,...e};wp.element.useEffect(()=>{for(const n in g)n in e||o({[n]:g[n]})},[]);const p=b("uiData"),C=wp.element.useCallback(n=>o({button_style:n}),[o]),f=wp.element.useCallback(n=>o({show_user_photo:n}),[o]),j=wp.element.useCallback(n=>o({corner_radius:n}),[o]),v=wp.element.useCallback(n=>o({show_if_user_is:n}),[o]),S=wp.element.useCallback(n=>o({lang:n}),[o]);return t.jsxs(t.Fragment,{children:[t.jsx(wp.blockEditor.InspectorControls,{children:t.jsx(wp.components.PanelBody,{title:s("Button Settings"),children:t.jsxs(wp.components.Flex,{direction:"column",gap:4,children:[t.jsx(wp.components.RadioControl,{label:s("Button Style"),selected:u,onChange:C,options:B()}),t.jsx(wp.components.ToggleControl,{label:s("Show User Photo"),checked:c,onChange:f,__nextHasNoMarginBottom:!0}),t.jsx(wp.components.TextControl,{label:s("Corner Radius"),value:l||"",onChange:j,type:"number",min:"0",max:"20",__nextHasNoMarginBottom:!0}),t.jsx(wp.components.SelectControl,{label:s("Language"),value:r,onChange:S,options:p.lang,__nextHasNoMarginBottom:!0}),t.jsx(wp.components.SelectControl,{label:s("Show if user is"),value:y,onChange:v,options:p.show_if_user_is,__nextHasNoMarginBottom:!0})]})})}),t.jsx(i,{attributes:e,className:a})]})},D={button_style:{type:"string",default:"large"},show_user_photo:{type:"boolean",default:!0},corner_radius:{type:"string",default:"20"},show_if_user_is:{type:"string",default:"0"}},x={button_style:{type:"string"},show_user_photo:{type:"boolean"},corner_radius:{type:"string"},show_if_user_is:{type:"string"}},_={...x,lang:{type:"string"}};var w;const d=((w=window.wptelegram_login)==null?void 0:w.savedSettings)||{};wp.blocks.registerBlockType("wptelegram/login",{title:s("WP Telegram Login"),icon:"smartphone",category:"wptelegram",attributes:_,edit:N,save(e){return t.jsx(i,{attributes:e.attributes,className:""})},deprecated:[{attributes:D,save(e){return t.jsx(i,{attributes:e.attributes,className:""})}},{attributes:x,migrate(e){return{...d,...e}},save(e){return t.jsx(i,{attributes:e.attributes,className:""})}},{attributes:_,migrate(e){return{...d,...e}},save(e){return t.jsx(i,{attributes:e.attributes,className:""})}}]});
//# sourceMappingURL=blocks-DsQs4ahR.js.map
