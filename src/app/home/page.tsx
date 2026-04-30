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
        if (Array.isArray(data)) {
          setLessons(data);
        } else if (Array.isArray(data.results)) {
          setLessons(data.results);
        } else {
          setLessons([]);
        }
      })
      .catch(() => setLessons([]))
      .finally(() => setLoading(false));
  }, []);

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "/login";
  };

  return (
    <main className="dashboard-container">
      <aside className="sidebar">
        <div>
          <h2 className="sidebar-logo">Skillvine</h2>

          <nav className="sidebar-nav">
            <Link className="active" href="/home">
              Dashboard
            </Link>
            <Link href="/profile">Profile</Link>
            <Link href="/search">Search</Link>
            <Link href="/lessons">Browse Lessons</Link>
            <Link href="/learning">My Learning</Link>
            <Link href="/wallet">Wallet</Link>
            <Link href="/notifications">Notifications</Link>
            <Link href="/settings">Settings</Link>
          </nav>
        </div>

        <button onClick={logout} className="sidebar-logout">
          Logout
        </button>
      </aside>

      <section className="main-content">
        <div className="topbar">
          <div>
            <h1>Welcome, admin!</h1>
            <p>Manage your learning progress and explore available lessons.</p>
          </div>

          <span className="role-badge">Student</span>
        </div>

        <div className="cards">
          <div className="card">
            <h3>Enrolled Classes</h3>
            <p>0</p>
          </div>

          <div className="card">
            <h3>Available Coins</h3>
            <p>0</p>
          </div>

          <div className="card">
            <h3>Unread Notifications</h3>
            <p>4</p>
          </div>
        </div>

        <section className="dashboard-panel">
          <h2>Student Overview</h2>
          <p>
            Track your learning progress, manage your coins, and stay updated
            with notifications from teachers and the platform.
          </p>
        </section>

        <section className="dashboard-panel">
          <div className="panel-header">
            <div>
              <h2>Browse Lessons</h2>
              <p>Available lessons from Skillvine teachers.</p>
            </div>
          </div>

          {loading && <p className="muted-text">Loading lessons...</p>}

          {!loading && lessons.length === 0 && (
            <p className="muted-text">No lessons found yet.</p>
          )}

          <div className="lesson-grid">
            {lessons.map((lesson) => (
              <article key={lesson.id} className="lesson-card">
                <span className="lesson-category">{lesson.category}</span>

                <h3>{lesson.title}</h3>

                <p>{lesson.description || "No description available."}</p>

                <div className="lesson-card-footer">
                  <strong>{lesson.price_coins ?? 0} coins</strong>
                  <button>View</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="dashboard-panel">
          <h2>Recent Activity</h2>
          <ul className="activity-list">
            <li>You enrolled in a lesson.</li>
            <li>A teacher published a new class.</li>
            <li>Your wallet was updated.</li>
          </ul>
        </section>
      </section>
    </main>
  );
}