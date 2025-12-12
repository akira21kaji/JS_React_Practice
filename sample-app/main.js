const slugify = require("slugify");
const moji = require("moji");

console.log(
  slugify(moji("こんにちは 世界").convert(), {
    replacement: "-",
    lower: true,
    strict: true,
    locale: "ja",
    trim: true,
  })
);
