<script>
	console.log('/ +layout.svelte');

	import { page } from '$app/stores'

</script>

<div class="header">
	{#if $page.data.userData}
	<p>Welcome,{$page.data.userData.name}!</p>
	<form action="./logout?/logout" method="POST">
		<button type="submit">Log Out</button>
	</form>
	{:else}
	<p>Please log in to continue.</p>
	{/if}
</div>

<div class="main">
	<slot />
</div>

<div class="footer">FOOTER</div>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.header {
		display: flex;
		justify-content: space-between;
		border: 2px solid black;
		font-size: 1.5rem;
	}
	.main {
		border: 2px solid black;
	}
	.footer {
		border: 2px solid black;
	}
</style>
