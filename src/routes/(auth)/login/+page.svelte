<script>
	import { enhance } from '$app/forms';
	export let form;
</script>

<h2>LOGIN</h2>
<form action="../login?/login" method="POST" use:enhance>
	<input name="username" type="text" placeholder="username" />
	{#if form?.invalid}
		<p>Please enter a name.</p>
	{/if}
</form>
