function Contact() {
    return (
      <section id="contact" className="py-10 px-4 bg-purple-100 text-center">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Contact Me</h2>
        
        {/* Contact Information */}
        <p className="text-gray-800 mb-2">
          <strong>Email:</strong> nada.ashraf@example.com
        </p>
        <p className="text-gray-800 mb-2">
          <strong>LinkedIn:</strong> <a className="text-purple-600 underline" href="https://www.linkedin.com/in/nada-ashraf-347767273/" target="_blank">Nada Ashraf</a>
        </p>
        <p className="text-gray-800 mb-4">
          <strong>GitHub:</strong> <a className="text-purple-600 underline" href="https://github.com/Nada-Elbasuiony" target="_blank">Nada-Elbasuiony</a>
        </p>

        {/* Contact Form */}
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" name="message" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" rows="4"></textarea>
          </div>

          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">Send Message</button>
        </form>
      </section>
    );
}
  
export default Contact;
