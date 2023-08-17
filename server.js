const express = require("express");
const app = express();
const PORT = 3004;

app.get("/", (req, res) => {
  res.send(`
    <h2>99 Bottles of soda on the wall.</h2>
    <h2><a href="/98">Take one down, pass it around.</a></h2>
    `);
});

app.get("/:number_of_bottles", (req, res) => {
  const currentBottles = req.params.number_of_bottles;
  const leftoverBottles = currentBottles - 1;

  // const passItAround = (currentBottles == 0) ?
  // `<h2><a href="/">Start Over!</a></h2>`:
  // `<h2><a href="/${leftoverBottles}">Take one down, pass it around.</a></h2>`;

  let passItAround = `<h2><a href="/${leftoverBottles}">Take one down, pass it around.</a></h2>`;
  if (currentBottles == 0) {
    passItAround = `<h2><a href="/">Start Over!</a></h2>`;
  }

  res.send(`
    <h2>${currentBottles} Bottles of soda on the wall.</h2>
    ${passItAround}
    `);
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
