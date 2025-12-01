export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}