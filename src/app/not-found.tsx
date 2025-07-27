import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found - Andika Dayu Portfolio",
  description:
    "The page you're looking for doesn't exist. Navigate back to Andika Dayu's portfolio homepage.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
            404
          </h1>
          <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist. It might have been moved,
            deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            ← Back to Home
          </Link>

          <div className="flex justify-center space-x-4 text-sm">
            <Link
              href="/#about"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
