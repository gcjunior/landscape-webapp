export function Footer() {
  return (
    <footer className="border-t-4 border-[#28A745] bg-[#222222] py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 text-center text-sm text-[#CCCCCC] sm:px-6 md:flex-row md:text-left lg:px-8">
        <p>© {new Date().getFullYear()} Taligado Landscaping. All rights reserved.</p>
        <a href="#home" className="font-medium text-white hover:text-[#1E90FF]">
          Back to top
        </a>
      </div>
    </footer>
  );
}
