import { Writable, writable } from "svelte/store";
import type { Participant } from "./types";

export const modal = writable(null);

export let participants: Writable<Array<Participant>> = writable([]);
