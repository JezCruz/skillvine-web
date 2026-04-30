"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Lesson = {
  id: number;
  title: string;
  category: string;
  description?: string;
  price_coins?: number;
};

export default function HomePage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const access = localStorage.getItem("access");

    if (!access) {
      window.location.href = "/login";
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/lessons/`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("LESSONS DATA:", data);

        if (Array.isArray(data)) {
          setLessons(data);
        } else if (Array.isArray(data.results)) {
          setLessons(data.results);
        } else {
          setLessons([]);
        }
      })
      .catch((err) => {
        console.error(err);
        setLessons([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "/login";
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Skillvine Dashboard
            </h1>
            <p className="text-gray-600">Browse available lessons</p>
          </div>

          <button
            onClick={logout}
            className="rounded-full bg-red-600 px-5 py-2 font-bold text-white"
          >
            Logout
          </button>
        </div>

        {loading && <p>Loading lessons...</p>}

        {!loading && lessons.length === 0 && (
          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-gray-600">No lessons found yet.</p>
            <Link href="/" className="mt-3 inline-block text-blue-600 underline">
              Back to landing page
            </Link>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {lessons.map((lesson) => (
                <div
                key={lesson.id}
                className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl"
                >
                <h2 className="text-xl font-bold text-gray-900">
                    {lesson.title}
                </h2>

                <span className="inline-block mt-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    {lesson.category}
                </span>

                <p className="mt-4 text-gray-600">
                    {lesson.description || "No description available."}
                </p>

                <div className="mt-5 flex items-center justify-between">
                    <p className="font-bold text-gray-900">
                    {lesson.price_coins ?? 0} coins
                    </p>

                    <button className="rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    View
                    </button>
                </div>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}