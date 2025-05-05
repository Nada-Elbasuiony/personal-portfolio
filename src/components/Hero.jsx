import nadaImage from '../assets/nada.jpeg';

function Hero() {
  return (
    <section className="bg-gradient-to-b from-purple-100 to-white py-10 px-4 text-center">
      <img src={nadaImage} alt="Nada Ashraf" className="mx-auto rounded-full w-40 h-40 object-cover border-4 border-purple-400" />
      <h2 className="text-3xl mt-4 font-bold text-purple-700">Nada Ashraf Ahmed El-Sayed</h2>
      <p className="text-gray-600 mt-2">Web Developer | 4th Year - Faculty of Computers & Information, Damanhour University</p>
      <div className="mt-4 flex justify-center gap-6">
        <a href="https://www.linkedin.com/in/nada-ashraf-347767273" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
        <a href="https://github.com/Nada-Elbasuiony" target="_blank" className="text-gray-800 hover:underline">GitHub</a>
      </div>
      <p className="mt-2 italic text-sm text-gray-500">Former Instructor at Be School</p>
    </section>
  );
}

export default Hero;
