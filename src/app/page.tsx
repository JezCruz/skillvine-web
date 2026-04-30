import Link from "next/link";
import Image from "next/image";

const slides = [
  "teaching_online.jpeg",
  "kids_listening.jpeg",
  "female_teaching_guitar.jpeg",
  "male_teaching_guitar.jpeg",
  "female_teaching_fitness.jpeg",
  "male_teaching_fitness.jpeg",
  "female_teaching_piano.jpeg",
  "male_teaching_piano.jpeg",
  "male_teaching_programming.jpeg",
  "teaching(female).jpeg",
  "teacher_1.jpeg",
  "joinnow.jpeg",
  "banner_skillvine.jpeg",
];

export default function Home() {
  return (
    <>

      {/* ABOUT POPUP */}
      <div id="about-tab" className="tab-popup">
        <div className="tab-content">
          <span className="close-tab">&times;</span>
          <h2>About Skillvine</h2>
          <p>
            Skillvine connects students with verified teachers to help them learn
            new skills online. Our platform is secure, reliable, and fun. We value
            learning, growth, and building trusted teacher-student relationships.
          </p>
        </div>
      </div>

      {/* SERVICES POPUP */}
      <div id="services-tab" className="tab-popup">
        <div className="tab-content">
          <span className="close-tab">&times;</span>
          <h2>Our Services</h2>
          <ul>
            <li>Verified Teachers for different subjects</li>
            <li>Coins System to pay securely for sessions</li>
            <li>Automatic Ratings for teacher credibility</li>
            <li>Online lessons for kids and adults</li>
          </ul>
        </div>
      </div>

      {/* CONTACT POPUP */}
      <div id="contact-tab" className="tab-popup">
        <div className="tab-content">
          <span className="close-tab">&times;</span>
          <h2>Contact Us</h2>
          <p id="contact-text">
            For collaborations, support, or inquiries, reach out to us:
          </p>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:skillvine.tech@gmail.com">
                skillvine.tech@gmail.com
              </a>
            </li>
            <li>Phone: +63</li>
            <li>Address: 1850, San Mateo, Rizal, Philippines</li>
          </ul>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 id="first-h1-styling">Skillvine</h1>
          <h1 id="h1-font-style">
            Learn New Skills with Our Trusted Teachers, Let&apos;s Grow with Skillvine
          </h1>
          <p id="p-font-style">
            From languages to music to school support, connect with verified
            educators, gain real skills, and explore exciting opportunities — all
            in one vibrant learning community.
          </p>
          <a href="#features" className="btn hero-btn">Get Started</a>
        </div>
      </section>

      {/* SLIDER */}
      <section className="image-slider">
        <div className="slider">
          <div className="slides">
            {slides.map((img, index) => (
              <Image
                key={img}
                src={`/images/${img}`}
                alt={`Skillvine slide ${index + 1}`}
                width={1200}
                height={600}
              />
            ))}
          </div>

          <div className="slider-caption">
            <h1>Discover the Joy of Learning with Skillvine</h1>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="signup">
          <Link className="text-signup" href="/signup">Sign Up Now</Link>
        </div>

        <h2 className="features-title">Why Choose Skillvine?</h2>

        <div className="feature-container">
          <div className="feature-card">
            <h4>✅ Verified Teachers</h4>
            <p>Learn from experienced teachers who are verified with valid IDs.</p>
          </div>

          <div className="feature-card">
            <h4>💰 Coins System</h4>
            <p>Buy credits and pay for sessions securely within the platform.</p>
          </div>

          <div className="feature-card">
            <h4>⭐ Automatic Ratings</h4>
            <p>Students rate teachers after sessions to build reputation and trust.</p>
          </div>
        </div>
      </section>

    </>
  );
}