import express from "express";
import compression from "compression";
import proxy from "express-http-proxy";
import { fileURLToPath } from "url";
import path from "path";
import { WebSocketServer } from "ws";
import WebSocket from "ws";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const app = express();
const PORT = process.env.PROXY_PORT || 3001;
const TARGET_URL = "https://design.penpot.app";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(compression());

// Proxy API requests to target backend
app.use("/api", proxy(TARGET_URL, {
  proxyReqPathResolver: (req) => {
    return req.originalUrl;
  },
}));

// Proxy RPC requests to target backend
app.use("/rpc", proxy(TARGET_URL, {
  proxyReqPathResolver: (req) => {
    return req.originalUrl;
  },
}));

// Serve static files from resources/public
const staticPath = path.resolve(__dirname, "../resources/public");
app.use(express.static(staticPath));

// WebSocket proxy support
const server = app.listen(PORT, () => {
  console.log(`Proxy server listening at http://0.0.0.0:${PORT}`);
  console.log(`Static files served from: ${staticPath}`);
  console.log(`Proxied to backend: ${TARGET_URL}`);
});

const wss = new WebSocketServer({ noServer: true });

wss.on("connection", (ws, request) => {
  const targetUrl = new URL(request.url, TARGET_URL);
  targetUrl.protocol = targetUrl.protocol === "https:" ? "wss:" : "ws:";

  const headers = { ...request.headers };
  delete headers["host"];

  const client = new WebSocket(targetUrl.href, {
    headers,
  });

  client.on("message", (data) => {
    if (ws.readyState === 1) {
      ws.send(data);
    }
  });

  ws.on("message", (data) => {
    if (client.readyState === 1) {
      client.send(data);
    }
  });

  client.on("close", () => ws.close());
  ws.on("close", () => client.close());

  client.on("error", (err) => {
    console.error("WebSocket client error:", err.message);
  });

  ws.on("error", (err) => {
    console.error("WebSocket server error:", err.message);
  });
});

server.on("upgrade", (request, socket, head) => {
  const pathname = new URL(request.url, `http://${request.headers.host}`).pathname;

  if (pathname.startsWith("/ws")) {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit("connection", ws, request);
    });
  } else {
    socket.destroy();
  }
});