export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/compu.jpg"
              alt="Profile"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
            I'm a passionate web developer dedicated to creating unique and engaging digital experiences. With a focus on innovation and creativity, I strive to combine design and functionality to deliver outstanding web solutions that stand out.
            </p>
            <p className="text-lg text-gray-600">
              With experience in various technologies and a background in economics and administration,
              I bring a unique perspective to every project, combining technical expertise with business acumen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}