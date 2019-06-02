const { success, fail, repair } = require("./enhancer.js");

describe("enhancer.js", () => {
  describe("success()", () => {
    it("increases enchancement by one & updated name", () => {
      // 15
      expect(
        success({
          name: "Shield",
          type: "Armor",
          durability: 100,
          enhancement: 15,
          displayName: "[+15] Shield"
        })
      ).toEqual({
        name: "Shield",
        type: "Armor",
        durability: 100,
        enhancement: 16,
        displayName: "[PRI] Shield"
      });

      // 16
      expect(
        success({
          name: "Shield",
          type: "Armor",
          durability: 100,
          enhancement: 16,
          displayName: "[+16] Shield"
        })
      ).toEqual({
        name: "Shield",
        type: "Armor",
        durability: 100,
        enhancement: 17,
        displayName: "[DUO] Shield"
      });

      //19
      expect(
        success({
          name: "Shield",
          type: "Armor",
          durability: 100,
          enhancement: 19,
          displayName: "[+19] Shield"
        })
      ).toEqual({
        name: "Shield",
        type: "Armor",
        durability: 100,
        enhancement: 20,
        displayName: "[PEN] Shield"
      });
    });
  });

  describe("fail()", () => {
    it("decreasing durability by 5", () => {
      expect(
        fail({
          name: "Dagger",
          type: "Weapon",
          durability: 80,
          enhancement: 8,
          displayName: "[+8] Dagger"
        })
      ).toEqual({
        name: "Dagger",
        type: "Weapon",
        durability: 75,
        enhancement: 8,
        displayName: "[+8] Dagger"
      });
    });
    it("decreasing durability by 10", () => {
      expect(
        fail({
          name: "Dagger",
          type: "Weapon",
          durability: 10,
          enhancement: 15,
          displayName: "[+15] Dagger"
        })
      ).toEqual({
        name: "Dagger",
        type: "Weapon",
        durability: 0,
        enhancement: 15,
        displayName: "[+15] Dagger"
      });
    });

    it("decreasing enhancement by 1 and updated display name", () => {
      expect(
        fail({
          name: "Dagger",
          type: "Weapon",
          durability: 15,
          enhancement: 18,
          displayName: "[TRI] Dagger"
        })
      ).toEqual({
        name: "Dagger",
        type: "Weapon",
        durability: 15,
        enhancement: 17,
        displayName: "[DUO] Dagger"
      });
    });
  });

  describe("repair()", () => {
    it("repairs to full durability", () => {
      const item = {
        name: "Sword",
        type: "Weapon",
        durability: 98,
        enchancement: 15,
        displayName: "[+15] Sword"
      };

      expect(repair(item).durability).toBe(100);
    });
  });
});
