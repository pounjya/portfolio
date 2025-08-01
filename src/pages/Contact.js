const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="min-h-screen bg-[#07080d] py-16 px-4 text-white"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4 text-center">
          تماس با من
        </h2>
        <p className="text-gray-300 text-center max-w-md mx-auto mb-8">
          خوشحال میشم پیامتو بخونم! اگر سوالی داشتی یا خواستی همکاری کنیم، از
          فرم پایین استفاده کن یا از طریق شبکه‌های اجتماعی پیام بده.
        </p>
        <form className="max-w-xl mx-auto grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="نام"
            className="bg-[#0f111d] border border-cyan-400/30 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <input
            type="email"
            placeholder="ایمیل"
            className="bg-[#0f111d] border border-cyan-400/30 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <textarea
            rows="5"
            placeholder="پیام شما"
            className="bg-[#0f111d] border border-cyan-400/30 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <button className="bg-cyan-400 hover:bg-cyan-500 text-[#0f111d] font-bold py-3 rounded-lg transition">
            ارسال پیام
          </button>
        </form>
        <div className="flex justify-center gap-6 mt-8 text-2xl text-gray-400">
          <a href="#" className="hover:text-cyan-400 transition">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            <i className="fab fa-telegram"></i>
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </>
  );
};
export default Contact;
