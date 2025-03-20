const mongoose = require("mongoose");
const request = require("supertest");
const { app, server } = require("../Server");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.close();
});

describe("Event API", () => {
  it("should create an event", async () => {
    const response = await request(app)
      .post("/api/events")
      .set("Authorization", `Bearer ${process.env.TEST_TOKEN || "dummyToken"}`)
      .send({
        name: "Team Meeting",
        description: "Project discussion",
        date: "2025-03-15",
        time: "10:00 AM",
      });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe("Team Meeting");
  });
});
