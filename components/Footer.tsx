'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:afridshk33@gmail.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  afridshk33@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/afridali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AfridShaik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
} 