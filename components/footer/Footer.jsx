export default function Footer() {
    return (
      <footer className="bg-white text-black uppercase tracking-wider">
        <div className="mx-auto px-8 pb-8 flex flex-col gap-22 md:flex-row flex-wrap justify-between">
          {/* Zimopro Section */}
          <div>
            <h3 className="text-[18px] mb-10 font-semibold">ZIMOPRO.COM</h3>
            <ul className="space-y-5">
              <li>About</li>
              <li>Contact</li>
              <li>Help & FAQ</li>
            </ul>
            
              <div className=" flex flex-col mt-14 gap-14">
                <img src="/assets/Group 3331.png" alt="Zima Logo" className="w-44" />
                <img src="/assets/Group 3075.png" alt="Civica CES Logo" className="w-44" />
              </div>
          </div>
  
          {/* Categories */}
          <div>
            <h3 className="text-[18px] mb-10 font-semibold">CATEGORIES</h3>
            <ul className="space-y-5">
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
            <h3 className="text-[18px] mb-10 font-semibold">BUSINESS / AGENTS</h3>
            <ul className="space-y-5">
              <li>List with us</li>
              <li>Partner</li>
              <li>Display Advertising</li>
              <li>Investors</li>
            </ul>
          </div>
  
          {/* Sell Your Home */}
          <div>
            <h3 className="text-[18px] mb-10 font-semibold">SELL YOUR HOME</h3>
            <ul className="space-y-5">
              <li>Find a Zimo Agent</li>
              <li>Gift Card</li>
              <li>Purchase eGift Card</li>
            </ul>
          </div>
  
          {/* Supported Charities */}
          <div>
            <h3 className="text-[18px] mb-8  font-semibold">SUPPORTED CHARITIES</h3>
            <div className="space-y-8">
              <img src="/assets/Group 3126.png" alt="Unicef"/>
              <img src="/assets/Group 3132.png" alt="World Vision"/>
              <img src="/assets/Group 3133.png" alt="Save the Children"/>
              <img src="/assets/Group 3137.png" alt="Great Ormond Street Hospital"/>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row gap-10 justify-between py-4 px-6 sm:text-center text-[13px] text-black">
          <div className="flex gap-2">
            <img src="/assets/Group 2877.png" alt="logo" className="md:h-5" />
            COPYRIGHT &copy; 2022 Zimo Group. All Rights Reserved.
          </div>
          <div className="space-x-4" >
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
          </div>
          <div className="w-[16rem]">
            <img src="/assets/Group 2666.png" />
          </div>
        </div>
      </footer>
    );
  }
  