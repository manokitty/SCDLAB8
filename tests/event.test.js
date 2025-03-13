const request = require("supertest");
const { app, server } = require("../Server"); // Ensure correct import

afterAll(async () => {
  await mongoose.connection.close(); // Close MongoDB connection
  server.close(); // Close the Express server
});

describe("Event API", () => {
  it("should create an event", async () => {
    const response = await request(app) // Use `app` instead of `server`
      .post("/api/events")
      .set("Authorization", `Bearer ${process.env.TEST_TOKEN}`)
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
