import StoryblokClient from "storyblok-js-client";
 
const Storyblok = new StoryblokClient({
  accessToken: "YcLJGw0w3kudpgGZM3NrQgtt",
  cache: {
    clear: "auto",
    type: "memory",
  },
});