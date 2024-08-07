import { app } from "@forsaken/api";

app.listen(3001, (server) => {
    console.log(
        `Server listening on port ${Bun.env.NODE_ENV === "production" ? "https" : "http"}://${server.hostname}:${server.port}`,
    );
});
