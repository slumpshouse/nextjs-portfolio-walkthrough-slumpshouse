import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-12 text-center">About Me</h1>
          
          {/* Profile Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">Your Photo</span>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Hello, I'm Sa'NYa</h2>
                <p className="text-lg text-gray-700 mb-4">
                  I'm a passionate web developer with a love for creating beautiful, functional, and user-friendly websites. 
                  I enjoy solving complex problems and turning ideas into reality through code.
                </p>
                <p className="text-lg text-gray-700">
                  When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
                  or enjoying the outdoors with my camera.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-6">Skills & Technologies</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl mb-2">⚛️</div>
                  <h3 className="font-semibold">React</h3>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl mb-2">📱</div>
                  <h3 className="font-semibold">Next.js</h3>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-3xl mb-2">💻</div>
                  <h3 className="font-semibold">JavaScript</h3>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl mb-2">🎨</div>
                  <h3 className="font-semibold">CSS</h3>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-3xl mb-2">🔧</div>
                  <h3 className="font-semibold">Node.js</h3>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <div className="text-3xl mb-2">🗄️</div>
                  <h3 className="font-semibold">Database</h3>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <div className="text-3xl mb-2">🚀</div>
                  <h3 className="font-semibold">Git</h3>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl mb-2">☁️</div>
                  <h3 className="font-semibold">Cloud</h3>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-6">Experience & Education</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900">Education</h3>
                  <p className="text-gray-600">Launchpad</p>
                  <p className="text-sm text-gray-500">Degree/Program • 2024</p>
                  <p className="text-gray-700 mt-2">Relevant coursework or achievements</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900">Projects & Learning</h3>
                  <p className="text-gray-600">Self-taught Web Development</p>
                  <p className="text-sm text-gray-500">Ongoing</p>
                  <p className="text-gray-700 mt-2">Building projects and learning new technologies</p>
                </div>
              </div>
            </div>
          </section>

          {/* Personal Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Beyond Coding</h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎵</div>
                  <h3 className="font-semibold mb-2">Music</h3>
                  <p className="text-gray-600">Love listening to music</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📚</div>
                  <h3 className="font-semibold mb-2">Playing video games</h3>
                  <p className="text-gray-600">Always learning something new</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🏃</div>
                  <h3 className="font-semibold mb-2">Sports</h3>
                  <p className="text-gray-600">Staying active and healthy</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
