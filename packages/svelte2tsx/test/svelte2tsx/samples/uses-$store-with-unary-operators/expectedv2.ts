///<reference types="svelte" />
;
import { writable } from 'svelte/store';
function render() {

  
  const count = writable(0)/*Ωignore_startΩ*/;let $count = __sveltets_1_store_get(count);/*Ωignore_endΩ*/;
  const handler1 = () => !(__sveltets_1_store_get(count), $count)
  const handler2 = () => +(__sveltets_1_store_get(count), $count)
  const handler3 = () => -(__sveltets_1_store_get(count), $count)
  const handler4 = () => ~(__sveltets_1_store_get(count), $count)
;
async () => {

 { svelteHTML.createElement("button", {  onclick:() => !(__sveltets_1_store_get(count), $count),});  }
 { svelteHTML.createElement("button", {  onclick:() => +(__sveltets_1_store_get(count), $count),});  }
 { svelteHTML.createElement("button", {  onclick:() => -(__sveltets_1_store_get(count), $count),});  }
 { svelteHTML.createElement("button", {  onclick:() => ~(__sveltets_1_store_get(count), $count),});  }};
return { props: {}, slots: {}, getters: {}, events: {} }}

export default class Input__SvelteComponent_ extends __sveltets_1_createSvelte2TsxComponent(__sveltets_1_partial(__sveltets_1_with_any_event(render()))) {
}