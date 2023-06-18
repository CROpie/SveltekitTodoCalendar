import { c as create_ssr_component, b as subscribe, d as add_attribute, e as escape } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const beerBear = "/_app/immutable/assets/BearbeerCrop.c0fee640.png";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-1vbboch{margin:0;padding:0;box-sizing:border-box}.container.svelte-1vbboch{font-family:Arial}.header.svelte-1vbboch{height:4rem;display:flex;justify-content:space-between;align-items:center;border:2px solid white;font-size:1.5rem}.padding.svelte-1vbboch{margin-left:2rem}img.svelte-1vbboch{height:4rem}h2.svelte-1vbboch{color:white;text-align:center;text-shadow:2px 2px 2px black}h3.svelte-1vbboch{visibility:hidden;margin-right:2rem}button.svelte-1vbboch{font-family:Arial;border:2px solid lightblue;background-color:transparent;color:white;border-radius:0.5rem;outline:none;padding:1rem;margin-right:2rem}button.svelte-1vbboch:hover{background-color:white;color:black}button.svelte-1vbboch:active{background-color:black;color:white}.main.svelte-1vbboch{height:100%}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log("/ +layout.svelte");
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="container svelte-1vbboch"><div class="header svelte-1vbboch"><div class="padding svelte-1vbboch"><img${add_attribute("src", beerBear, 0)} alt="Beer Bear" class="svelte-1vbboch"></div>
		${$page.data.userData ? `<h2 class="svelte-1vbboch">Welcome, ${escape($page.data.userData.name)}!</h2>
		<form action="./logout?/logout" method="POST" class="svelte-1vbboch"><button type="submit" class="svelte-1vbboch">Log Out</button></form>` : `<h2 class="svelte-1vbboch">Please log in to continue.</h2>
		<h3 class="padding2 svelte-1vbboch">.</h3>`}</div>

	<div class="main svelte-1vbboch">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
export {
  Layout as default
};
