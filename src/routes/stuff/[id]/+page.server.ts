import { data } from "$lib/data";

export function load({ params }) {
    return {
        thing: data.find(a => a.id === parseInt(params.id))
    }
}