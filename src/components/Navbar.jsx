function Navbar() {
    return (
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-purple-700">Nada Ashraf</h1>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li><a href="#about" className="hover:text-purple-500">About</a></li>
            <li><a href="#skills" className="hover:text-purple-500">Skills</a></li>
            <li><a href="#projects" className="hover:text-purple-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-purple-500">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  