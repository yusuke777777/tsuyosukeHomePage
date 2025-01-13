const DownloadSection = () => {
  return (
    <div className="download-section py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">アプリをダウンロード</h2>
        <div className="flex justify-center">
          <a 
            href="https://apps.apple.com/your-app-link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="/app-store-badge.png" 
              alt="App Storeからダウンロード" 
              className="h-16"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;

const SocialLinks = () => {
  return (
    <div className="social-links py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-end space-x-4">
          <a
            href="https://x.com/your-account"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500"
          >
            <svg className="w-6 h-6" /* X(Twitter)のSVGアイコン */ />
            <span className="sr-only">X（Twitter）でフォロー</span>
          </a>
          
          <a
            href="/contact"
            className="text-gray-600 hover:text-blue-500"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;

const ContactPage = () => {
  return (
    <div className="contact-page py-12">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">お名前</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2">メールアドレス</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2">お問い合わせ内容</label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-2 border rounded"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
          >
            送信する
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;