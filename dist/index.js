var e=require("react");module.exports=function(n){var t=n.onClickOutside,r=n.children,c=n.exceptions,u=e.useRef(null);function o(e){var n;!u||u.current.contains(e.target)||(n=e.target,c&&0!==c.length&&c.map(function(e){var t=document.querySelector(e);return n.isEqualNode(t)||t.contains(n)}).some(function(e){return!0===e}))||t(e)}return e.useEffect(function(){return document.addEventListener("touchend",o,!0),document.addEventListener("click",o,!0),document.addEventListener("contextmenu",o,!0),function(){document.removeEventListener("touchend",o,!0),document.removeEventListener("click",o,!0),document.removeEventListener("contextmenu",o,!0)}},[]),e.createElement("div",{ref:u},r)};
//# sourceMappingURL=index.js.map
