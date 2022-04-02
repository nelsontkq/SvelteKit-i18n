<script lang="ts">
	import { _, locales, locale } from 'svelte-i18n';
</script>

<!-- locales dropdown -->
<select bind:value={$locale}>
	{#each $locales as locale}
		<option value={locale}>{locale}</option>
	{/each}
</select>
<h1>{$_('home.title')}</h1>
<p>{@html $_('home.welcome-message')}</p>
