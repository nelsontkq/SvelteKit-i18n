<script lang="ts" context="module">
	import '$lib/i18n';
	import { waitLocale } from 'svelte-i18n';

	export async function load(args) {
		await waitLocale();
		return args;
	}
</script>

<slot />
