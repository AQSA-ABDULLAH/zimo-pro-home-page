export default function Footer() {
    return (
      <footer className="bg-white text-black">
        <div className="mx-auto px-8 pb-8 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Zimopro Section */}
          <div>
            <h3 className="text-lg font-bold">ZIMOPRO.COM</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Contact</li>
              <li>Help & FAQ</li>
            </ul>
            <div className="mt-4">
              <p className="font-semibold">The luxury network:</p>
              <div className="mt-2">
                <img src="/zima-logo.png" alt="Zima Logo" className="h-6 mb-2" />
                <p className="text-sm">In partnership with:</p>
                <img src="/civica-ces-logo.png" alt="Civica CES Logo" className="h-6" />
              </div>
            </div>
          </div>
  
          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold">CATEGORIES</h3>
            <ul className="space-y-2">
              <li>Real Estate</li>
              <li>Private Islands</li>
              <li>Yachts</li>
              <li>Jets</li>
              <li>Cars</li>
              <li>Watches</li>
              <li>Diamonds</li>
              <li>Travel the World</li>
            </ul>
          </div>
  
          {/* Business / Agents */}
          <div>
            <h3 className="text-lg font-bold">BUSINESS / AGENTS</h3>
            <ul className="space-y-2">
              <li>List with us</li>
              <li>Partner</li>
              <li>Display Advertising</li>
              <li>Investors</li>
            </ul>
          </div>
  
          {/* Sell Your Home */}
          <div>
            <h3 className="text-lg font-bold">SELL YOUR HOME</h3>
            <ul className="space-y-2">
              <li>Find a Zimo Agent</li>
              <li>Gift Card</li>
              <li>Purchase eGift Card</li>
            </ul>
          </div>
  
          {/* Supported Charities */}
          <div>
            <h3 className="text-lg font-bold">SUPPORTED CHARITIES</h3>
            <div className="space-y-2">
              <img src="/unicef-logo.png" alt="Unicef" className="h-6" />
              <img src="/world-vision-logo.png" alt="World Vision" className="h-6" />
              <img src="/save-children-logo.png" alt="Save the Children" className="h-6" />
              <img src="/gosh-logo.png" alt="Great Ormond Street Hospital" className="h-6" />
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className=" py-4 text-center text-sm text-black">
          <div>
            &copy; 2022 Zimo Group. All Rights Reserved.
          </div>
          <div className="mt-2 space-x-4">
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-vimeo"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-pinterest"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
      </footer>
    );
  }
  