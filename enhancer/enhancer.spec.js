const { repair } = require("./enhancer.js");

it("repairs to full durability", () => {
  const item = {
    name: "Sword",
    type: "Weapon",
    durability: 98,
    enchancement: 15
  };

  expect(repair(item).durability).toBe(100);
});
