// @ts-nocheck
import Logo from '../assets/logo.png';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className=" shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://tikguard.vercel.app/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={Logo}
              className="h-12 w-12"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TikGuard
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/#text" className="hover:underline me-4 md:me-6">
                Text API
              </a>
            </li>
            <li>
              <a href="/#image" className="hover:underline me-4 md:me-6">
                Image API
              </a>
            </li>
            <li>
              <a href="/#video" className="hover:underline me-4 md:me-6">
                Video API
              </a>
            </li>
            <li>
              <a href="/#ml" className="hover:underline me-4 md:me-6">
                ML Model
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{' '}
          <a href="https://tikguard.vercel.app/" className="hover:underline">
            TikGuard
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
