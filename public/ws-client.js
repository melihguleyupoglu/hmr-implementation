const socket = new WebSocket("ws://localhost:3000");

socket.onopen = () => {
  console.log("WebSocket connected.");
  socket.send("Hello Server!");
};

socket.onmessage = (e) => {
  console.log("Message from server:", e.data);
  if (e.data.includes("updated")) {
    location.reload();
  }
};

socket.onerror = (error) => {
  console.error("WebSocket error:", error);
};

socket.onclose = () => {
  console.log("WebSocket disconnected");
};
