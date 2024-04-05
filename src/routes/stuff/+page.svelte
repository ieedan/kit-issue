<script lang="ts">
	export let data;
</script>

<ul>
    {#each data.things as thing}
		<li>
            <a href="/stuff/{thing.id}">
                {thing.name}
            </a>
        </li>
	{/each}
</ul>
