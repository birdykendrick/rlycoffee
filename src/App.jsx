import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-gray-900 p-8 shadow-lg">
        <h1 className="text-3xl font-bold">Hello Kendrick 👋</h1>
        <p className="mt-2 text-gray-300">
          Vite + React + Tailwind is running.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="rounded-xl bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-500 active:scale-[0.99]"
          >
            Count: {count}
          </button>

          <button
            onClick={() => setCount(0)}
            className="rounded-xl border border-gray-700 px-4 py-2 font-semibold hover:bg-gray-800"
          >
            Reset
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Edit <code className="rounded bg-gray-800 px-2 py-1">src/App.jsx</code>{" "}
          and save to test HMR.
        </p>
      </div>
    </div>
  );
}