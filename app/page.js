import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sa'Nya Kinard
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Building modern web applications with clean code and creative solutions
            </p>
            
            {/* Removed action button and social icons per user request */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
