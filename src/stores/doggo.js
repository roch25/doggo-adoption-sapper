import { writable } from "svelte/store";

export const doggo = writable({
  name: "",
  info: {
    breed: "",
    gender: "",
    location: "",
  },
  description: "",
  contact: "",
  image: null,
  fostering: {
    status: false,
    duration: "",
  },
});
