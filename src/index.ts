import { PeerServer } from "peer";

const PORT = (process.env.PORT as unknown as number) ?? 9002;

const peerServer = PeerServer({
  port: PORT,
  key: "demodemo",
  path: "/myapp",
  allow_discovery: true,
});

peerServer.on("connection", (client) => {
  console.log("Connection ID:", client.getId());
});

peerServer.on("disconnect", (client) => {
  console.log("Disconnect ID:", client.getId());
});

console.log(`PeerJS Server is running on port ${PORT}`);
