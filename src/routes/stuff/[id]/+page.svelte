<script lang="ts">
	export let data;

	let name = data.thing?.name;
</script>

<h1>{data.thing?.name}</h1>
<h1>Name State: {name}</h1>
<ul>
	{#each data.things as thing (thing.id)}
		<li>
			<a href="/stuff/{thing.id}">
				{thing.name}
			</a>
		</li>
	{/each}
</ul>
