export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}