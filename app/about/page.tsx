// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-8">
      <h1 className="text-3xl font-bold mb-4">About Neural Hive</h1>

      <p>
        Neural Hive is the official Machine Learning and AI club of PES
        University, EC Campus. We are a community of builders, researchers, and
        innovators who believe in learning through hands-on projects, open
        collaboration, and real-world impact.
      </p>

      <p>
        Our mission is to empower students with the knowledge, skills, and
        mindset required to build the future of AI. Whether you&apos;re a
        beginner or a seasoned ML enthusiast, Neural Hive provides events,
        workshops, challenges, and a collaborative environment to help you grow.
      </p>

      <section>
        <h2 className="text-xl font-semibold mb-2">What We Do</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Weekly ML Mondays blog posts</li>
          <li>AI &amp; ML workshops and coding sessions</li>
          <li>Research discussions and paper reading groups</li>
          <li>Hackathons and competitions</li>
          <li>Student-led projects &amp; mentorship</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
        <p>
          To build one of the strongest student AI communities in India, where
          innovation, learning, and exploration never stop.
        </p>
      </section>
    </main>
  );
}
