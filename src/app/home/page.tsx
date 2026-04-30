"use client";

import { useEffect, useState } from "react";

type Lesson = {
  id: number;
  title: string;
  category: string;
  description?: string;
  price_coins?: number;
};

export default function HomePage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    const access = localStorage.getItem("access");

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/lessons/`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setLessons(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Skillvine Home</h1>

      <div className="grid gap-4">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-bold">{lesson.title}</h2>
            <p>{lesson.category}</p>
            <p>{lesson.description}</p>
            <p>{lesson.price_coins} coins</p>
          </div>
        ))}
      </div>
    </main>
  );
}