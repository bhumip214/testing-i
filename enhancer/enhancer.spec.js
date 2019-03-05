const { success, repair } = require("./enhancer.js");

describe("enhancer.js", () => {
  describe("success()", () => {
    it("increases enchancement by one & updated name", () => {
      const item = {
        name: "Shield",
        type: "Armor",
        durability: 100,
        enhancement: 19,
        displayName: "[+19] Shield"
      };

      const result = success(item);
      expect(result.enhancement).toBe(20);
      expect(result.displayName).toBe("[PEN] Shield");
    });
  });

  describe("repair()", () => {
    it("repairs to full durability", () => {
      const item = {
        name: "Sword",
        type: "Weapon",
        durability: 98,
        enchancement: 15
      };

      expect(repair(item).durability).toBe(100);
    });
  });
});
