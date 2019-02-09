const request = require("supertest");
const server = require("./server.js");
const db = require("./data/dbConfig");

 afterEach(async () => {
   await db("users").truncate();
})

describe("Route handlers", () => {
   it("responds with 200", async () => {
      const response = await request(server).get("/");

       expect(response.status).toBe(200);
   });
   it("responds with json", async () => {
      const response = await request(server).get("/");

       expect(response.type).toMatch(/json/i);
   });
   it("sends correct response", async () => {
      const response = await request(server).get("/");

       expect(response.body).toEqual({api: "running"});
   });

    describe("/users endpoint", () => {
      it("responds with 200", async () => {
         const response = await request(server).get("/users");

          expect(response.status).toBe(200);
      });
      it("responds with json", async () => {
         const response = await request(server).get("/users");

          expect(response.type).toMatch(/json/i);
      });
      it("sends correct response", async () => {
         const response = await request(server).get("/users");

          expect(response.body).toEqual([]);
      });
   });

    describe("post /users", () => {
      it("responds with 201 if the body is correct", async () => {
         const body = {username: "rowValueD"}
         const response = await request(server).post("/users").send(body);

          expect(response.status).toBe(201);
      });
      it("responds with 400 if the body is missing", async () => {
         const body = {}
         const response = await request(server).post("/users").send(body);

          expect(response.type).toMatch(/json/i);
      });
   });
});