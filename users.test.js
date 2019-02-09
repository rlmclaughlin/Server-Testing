const users = require("./users.js");
const db = require("./data/dbConfig.js");

 describe("User Data", () => {
   it("Inserts new users", async () => {
      const ids = await users.insert({username: "rowValueD"});
      expect(ids.length).toBe(1);
      expect(ids[0]).toBe(1);
   });
});