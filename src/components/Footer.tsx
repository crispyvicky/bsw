export default function Footer() {
  return (
    <footer id="contact" className="py-24 bg-white border-t border-gray-50 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start md:col-span-2">
            <a className="flex items-center gap-4 text-3xl font-display font-medium text-gray-900 tracking-tight mb-8" href="#">
              <img src="/logo.png" alt="BSW Logo" className="w-12 h-12 object-contain" />
              Badigar Space Works
            </a>
            <p className="text-gray-400 text-lg font-light max-w-sm leading-relaxed mb-8">
              Architecting <span className="text-gray-900 font-medium">Imaginary Design</span> experiences since 1996. Rooted in the divine craftsmanship of Hyderabad's heritage.
              The Legacy of Vishwakarma lives on.
            </p>
            <div className="text-[10px] text-blue-600 font-bold uppercase tracking-[0.3em] bg-blue-50 px-6 py-2.5 rounded-full inline-block">
              Beyond Architecture
            </div>
          </div>
          <div className="text-gray-500">
            <h4 className="font-bold text-gray-900 mb-8 text-xs uppercase tracking-[0.3em]">The Studio</h4>
            <p className="text-lg font-light leading-relaxed">
              Mahankali Nagar, <br />
              Hyderabad, Telangana
            </p>
            <p className="text-lg mt-6 text-blue-600 font-medium">hello@badigar.space</p>
            <p className="text-lg mt-1">+91 99999 88888</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h4 className="font-bold text-gray-900 mb-8 text-xs uppercase tracking-[0.3em]">Digital Presence</h4>
            <div className="flex space-x-6">
              <a className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-100 text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300" href="#" aria-label="Facebook">
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
              <a className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-100 text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300" href="#" aria-label="Instagram">
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    clipRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-10.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-24 pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-xs font-bold tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Badigar Space Works.</p>
          <p>Since 1996 • Hyderabad • India</p>
        </div>
      </div>
    </footer>
  );
}
