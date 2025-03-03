# Hot Module Replacement (HMR) - Custom Implementation

This project is a minimal Hot Module Replacement (HMR) system built from scratch to understand how real-time updates work in modern development environments.

## Features

- ✅ Express-based HTTP server
- ✅ WebSocket server for real-time communication
- ✅ File watcher to detect changes in the `public` directory
- ✅ Automatic update notification to clients

## Installation

```sh
# Clone the repository
git clone <your-repo-url>
cd <your-repo-folder>

# Install dependencies
npm install

# Start the server
npm run dev
```

## How It Works

1. The HTTP server serves static files from the `public` directory.
2. A WebSocket server notifies clients when a file change is detected.
3. The client listens for WebSocket messages and reloads the affected resources dynamically.

## License

This project is licensed under the MIT License.
