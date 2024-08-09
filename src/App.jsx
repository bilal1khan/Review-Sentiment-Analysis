import React from "react";
import ReviewsList from "./components/ReviewsList";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <header className="bg-blue-900 text-white text-center p-4">
        <h1 className="text-3xl">Reviews</h1>
      </header>
      <main>
        <ReviewsList />
      </main>
    </div>
  );
}

export default App;
