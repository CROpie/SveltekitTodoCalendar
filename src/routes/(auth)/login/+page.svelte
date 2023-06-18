<script>
	import { enhance } from '$app/forms';
	export let form;
</script>
<div class="Login">
	<div class="login-box">
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

		margin: 5rem auto;
		width: 50%;
		border: 3px solid lightblue;
		padding: 2rem;
		border-radius: 0.5rem;

	}
	form {



		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	input, button {
		text-shadow: 2px 2px 2px black;
		font-size: 1.5rem;
		color: white;
		background-color: transparent;
		padding: 0.5rem;
		border: 2px solid white;
		border-radius: 0.5rem;
		padding-left: 1rem;

	}
	input:hover, button:hover {
		background-color: rgba(138, 43, 226, 0.7);
	}
	p {
		text-align: center;
	}
	.message {
		font-size: 1rem;
		color: orange;
		text-shadow: 2px 2px 2px black;
		font-weight: 700;
	}
	.error {
		color: red;
		font-size: 0.75rem;
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
