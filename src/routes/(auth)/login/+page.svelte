<script>
	import { enhance } from '$app/forms';
	export let form;
</script>
<div class="Login">
	<div class="login-box">
		<h3>Please log in to continue.</h3>
		<form action="?/login" method="POST" use:enhance>
			<input name="username" type="text" placeholder="username" autocomplete="off"/>
			<input name="password" type="password" placeholder="password"/>
			<button type="submit">Submit</button>
			{#if form?.invalid}
				<p class="error">Error: Please fill out all fields.</p>
			{/if}
			{#if form?.credentials}
				<p class="error">Error: Please check your credentials.</p>
			{/if}
			<p class="message">*Enter default (no pass) to generate a default set of data..</p>
		</form>

	</div>
	<footer>
		<a href="http://www.freepik.com">Background image designed by Freepik</a>
	</footer>
</div>

<style>
	.login-box {
		flex: auto;
		background-color: white;
		margin: 5rem auto;
		width: 50%;
		border: 3px solid lightblue;
		padding: 2rem;
		border-radius: 0.5rem;
		font-family: Arial;
	}
	form {

		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	input {
		border-radius: 0.5rem;
		padding-left: 1rem;
	}
	p {
		text-align: center;
	}
	.message {
		font-size: 0.75rem;
	}
	.error {
		color: red;
		font-size: 0.75rem;
	}
	button {
		background-color: transparent;
	}
	button:hover {
		background-color: lightblue;
	}
	footer {
		text-align: center;
		height: 1rem;
		color: white;
	}
	a {
		color: white;
		font-size: 0.75rem;
	}
</style>
