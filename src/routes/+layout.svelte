<script>
	console.log('/ +layout.svelte');

	import { page } from '$app/stores'

</script>

<div class="container">
	<div class="header">
		<div class="padding">.</div>
		{#if $page.data.userData}
		<h2>Welcome, {$page.data.userData.name}!</h2>
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
</div>
<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.container {
		font-family: Arial;
		display: flex;
		flex-direction: column;
	}
	.header {
		background-color: black;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 2px solid black;
		font-size: 1.5rem;
	}
	.main {
		flex: 1;
		border: 2px solid black;
		background-color: grey;
	}
	.padding {
		visibility: hidden;
	}
	h2 {
		color: white;
		text-align: center;
	}
	button {
		font-family: Arial;
		border: 2px solid lightblue;
		background-color: transparent;
		color: white;
		border-radius: 0.5rem;
		outline: none;
		padding: 1rem;
	}
	button:hover {
		background-color: white;
		color: black;
	}
	button:active {
		background-color: black;
		color: white;
	}
</style>
