// import blog, { ga, redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";
import blog, { ga, redirects } from "./packages/deno_blog/blog.tsx";

blog({
  title: "Web wandering",
  author: "Cédric Bazureau",
  avatar: "./identite.375.jpg",
  avatarClass: "full",
  lang: 'fr',
  dateFormat: date => new Intl.DateTimeFormat('fr-FR', { weekday: "long", year: "numeric", month: "long", day: "numeric"}).format(date),
  links: [
    { title: "Website", url: "https://cedric.bazureau.com" },
    { title: "GitHub", url: "https://github.com/cbazureau" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/cbazureau" },
  ],
  background: "#fff",
});
