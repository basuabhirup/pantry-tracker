# Pantry Tracker App

## Demo

Check out the live application: [Pantry Tracker App](https://pantry-tracker-app-nu.vercel.app)

## Overview

The Pantry Tracker App is a comprehensive tool designed to help users manage their pantry items efficiently. The application allows users to add, remove, and search for items in their pantry. Additionally, it features an AI-based recipe suggestion functionality to provide users with recipe ideas based on the items available in their pantry.

## Features

1. **Add Item**: Users can add items to their pantry. If an item already exists, the item count is incremented.
2. **Remove Item**: Users can remove items from their pantry. If an item's count is 1, the item is deleted from the pantry.
3. **Search Item**: Users can search for items in their pantry using a search bar with a `SearchIcon`.
4. **Update Items**: The pantry items are updated in real-time as changes are made.
5. **AI-based Recipe Suggestion**: Users can get recipe suggestions based on the items available in their pantry using the AI prompt functionality.

## Tech Stack

- **React.js and Next.js**: For building the user interface. Although Next.js is included, we have not implemented any server-side rendering yet.
- **Material UI**: For UI components and styling.
- **Firebase Firestore**: For the real-time database to store pantry items.
- **OpenRouter AI API**: For AI-based recipe suggestions using the open source AI model "meta-llama/llama-3-8b-instruct:free", which is a free, rate-limited version of Llama 3.1 8B Instruct.

## Getting Started

### Prerequisites

- Node.js and npm
- OpenRouter AI API key

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/basuabhirup/pantry-tracker.git
   cd pantry-tracker
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Firebase and OpenRouter API keys:

   ```env
   NEXT_PUBLIC_OPENROUTER_API_KEY=your_openrouter_api_key
   ```

4. Run the development server:

   ```sh
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
