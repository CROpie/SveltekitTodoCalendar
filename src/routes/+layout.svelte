<script>
	console.log('/ +layout.svelte');
	import { page } from '$app/stores';
	console.log($page);
</script>

<div class="header">
	HEADER
	<form action="logout?/logout" method="POST">
		<button type="submit">Log Out</button>
	</form>
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
