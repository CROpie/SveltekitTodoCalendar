import { c as create_ssr_component } from "../../../../chunks/index2.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".login-box.svelte-z5jk0f{flex:auto;margin:5rem auto;width:50%;border:3px solid lightblue;padding:2rem;border-radius:0.5rem}form.svelte-z5jk0f{display:flex;flex-direction:column;gap:0.5rem}input.svelte-z5jk0f,button.svelte-z5jk0f{text-shadow:2px 2px 2px black;font-size:1.5rem;color:white;background-color:transparent;padding:0.5rem;border:2px solid white;border-radius:0.5rem;padding-left:1rem}input.svelte-z5jk0f:hover,button.svelte-z5jk0f:hover{background-color:rgba(138, 43, 226, 0.7)}p.svelte-z5jk0f{text-align:center}.message.svelte-z5jk0f{font-size:1rem;color:orange;text-shadow:2px 2px 2px black;font-weight:700}.error.svelte-z5jk0f{color:red;font-size:0.75rem}footer.svelte-z5jk0f{text-align:center;height:1rem;color:white}a.svelte-z5jk0f{color:white;font-size:0.75rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="Login"><div class="login-box svelte-z5jk0f"><form action="?/login" method="POST" class="svelte-z5jk0f"><input name="username" type="text" placeholder="username" autocomplete="off" class="svelte-z5jk0f">
			<input name="password" type="password" placeholder="password" class="svelte-z5jk0f">
			<button type="submit" class="svelte-z5jk0f">Submit</button>
			${form?.invalid ? `<p class="error svelte-z5jk0f">Error: Please fill out all fields.</p>` : ``}
			${form?.credentials ? `<p class="error svelte-z5jk0f">Error: Please check your credentials.</p>` : ``}
			<p class="message svelte-z5jk0f">*Enter default (no pass) to generate a default set of data..</p></form></div>
	<footer class="svelte-z5jk0f"><a href="http://www.freepik.com" class="svelte-z5jk0f">Background image designed by Freepik</a></footer>
</div>`;
});
export {
  Page as default
};
