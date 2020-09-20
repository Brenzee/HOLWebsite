require("babel-register");

const router = require("./App").default;
const Sitemap = require("../").default;

new Sitemap(router)
  .build("https://houseoflightwebsite.netlify.app")
  .save("./sitemap.xml");
