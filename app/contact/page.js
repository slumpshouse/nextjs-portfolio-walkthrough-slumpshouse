import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'd love to hear from you! Whether you have a project in mind, want to collaborate, 
              or just want to say hello, feel free to reach out.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
              
              <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">skina0087@launchpadphilly.org</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/sanya-kinard-00216b319/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                      Click to Connect
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">GitHub</h3>
                    <a href="https://github.com/slumpshouse" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                      github.com/slumpshouse
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (client) */}
            <div suppressHydrationWarning>
              <ContactForm />
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Let's Build Something Amazing Together</h3>
            <p className="text-blue-800 mb-4">
              I'm always open to discussing new opportunities, creative projects, or potential collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Available for Freelance</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Open to Collaboration</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Quick Response Time</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
