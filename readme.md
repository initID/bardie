# Bardie

Bardie is a simple Express.js application that interacts with the Bard Chat API to generate responses to user questions. It provides an endpoint `/bard` that accepts a POST request with a JSON payload containing a `question` field. The application sends the question to the Bard Chat API and returns the generated response.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/initID/bardie.git
   ```

2. Install the dependencies:

   ```bash
   cd bardie
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

   The application will be running at `http://localhost:3000`.

## Usage

Send a POST request to the `/bard` endpoint with the following JSON payload:

```json
{
  "question": "Is Komodo Dragon a dragon even though they can't fly?"
}
```

The server will respond with the generated response from the Bard Chat API.

## Configuration

The application uses environment variables for configuration. The following environment variables can be set:

- `PORT` (default: 3000): The port on which the server listens.
- `SECURE1PSID`: The secure 1PSID value for authentication with the Bard Chat API.
- `AT_KEY`: The AT key for authentication with the Bard Chat API.

These environment variables can be set in a `.env` file in the project root directory. For more information about obtaining your `AT_KEY` and `SECURE1PSID`, refer to the project's [configuration.md](configuration.md).

## Deploy it in 7 seconds: 
[![Deploy to Cyclic](https://deploy.cyclic.app/button.svg)](https://app.cyclic.sh/#/join/sepTN)
