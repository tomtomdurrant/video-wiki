import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://video-wiki.pages.dev",
  integrations: [
    starlight({
      title: "Video Design",
      social: {
        discord: "https://discord.gg/PcpKkPpW2m",
        // github: "https://github.com/withastro/starlight",
      },
      editLink: {
        baseUrl: "https://github.com/tomtomdurrant/video-wiki/edit/main",
      },
      lastUpdated: true,

      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
