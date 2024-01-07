function Header() {
  return (
    <header>
      <div className="logo" />
      <div className="menu">
        <ul className="menu-items">
          <li>Destination</li>
          <li>Hotels</li>
          <li>Flights</li>
          <li>Bookings</li>
          <li>Login</li>
          <li>Sign Up</li>
          <li>
            EN
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
            >
              <path d="M0.5 0.5L5 5L9.5 0.5" stroke="#212832" />
            </svg>
          </li>
        </ul>
      </div>
    </header>
  );
}
function Banner() {
  return (
    <div className="banner">
      <div className="left-banner">
        <h3 className="tagline">Best Destinations around the world</h3>
        <h2 className="banner-header">
          Travel, <span className="header-span">enjoy</span> and live a new and
          full life
        </h2>
        <p className="banner-decs">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="btn-group">
          <button className="find-btn">Find out more</button>
          <button className="play-btn">
            <div className="play-img"></div>
            Play Demo
          </button>
        </div>
      </div>
      <div className="right-banner">
        <div className="banner-underlay">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="704"
            height="724"
            viewBox="0 0 704 724"
            fill="none"
          >
            <path
              d="M22.3069 222C-18.0931 153.2 5.4736 13.3333 22.3069 -48L701.807 -149L766.307 122.5L727.807 723.5C649.14 724.5 473.707 717 401.307 679C310.807 631.5 351.807 555 276.807 515C201.807 475 244.807 369.5 218.807 329.5C192.807 289.5 72.8069 308 22.3069 222Z"
              fill="#FFF1DA"
            />
          </svg>
          <div className="traveller">
            <div className="plane"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Category() {
  return (
    <div className="category">
      <div className="category-header">
        <div className="category-header-empty"></div>
        <div className="category-header-title">
          <p className="category-subtitle">Category</p>
          <h2 className="category-title">We Offer Best Services</h2>
        </div>
        <div className="category-header-signs">
          <p className="category-signs">
            <span className="category-orange-span">+</span>+++++<br></br>
            ++++++<br></br>
            +++<span className="category-gray-span">+</span>++<br></br>
            +++++<br></br>
            ++++<br></br>
            +++<br></br>
          </p>
        </div>
      </div>
      <div className="category-cards">
        <div className="card" id="card1">
          <div className="card-icon"></div>
          <div className="card-desc">
            <h2 className="card-title">Calculated Weather </h2>
            <p className="card-detl">
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </div>
        </div>
        <div className="card" id="card2">
          <div className="card-icon"></div>
          <div className="card-desc">
            <h2 className="card-title">Best Flights </h2>
            <p className="card-detl">
              Engrossed listening. Park gate sell they west hard for the.
            </p>
          </div>
          <div className="underlay"></div>
        </div>
        <div className="card" id="card3">
          <div className="card-icon"></div>
          <div className="card-desc">
            <h2 className="card-title">Local Events </h2>
            <p className="card-detl">
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.
            </p>
          </div>
        </div>
        <div className="card" id="card4">
          <div className="card-icon"></div>
          <div className="card-desc">
            <h2 className="card-title">Customization</h2>
            <p className="card-detl">
              We deliver outsourced aviation services for military customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Destination() {
  return (
    <div className="destination">
      <div className="destination-title">
        <p className="destination-subtitle">Top Selling</p>
        <h2 className="destination-title">Top Destinations</h2>
      </div>
      <div className="destination-items">
        <div className="item">
          <div className="item-img" id="item"></div>
          <div className="item-desc">
            <div className="upper-desc">
              <p>Rome, Italty</p>
              <p>$5,42k</p>
            </div>
            <div className="lower-desc">
              <img src="assets/images/navigation.svg" alt="navigation" />
              <p>2 days trip</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-img" id="item2"></div>
          <div className="item-desc">
            <div className="upper-desc">
              <p>Rome, Italty</p>
              <p>$5,42k</p>
            </div>
            <div className="lower-desc">
              <img src="assets/images/navigation.svg" alt="navigation" />
              <p>2 days trip</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-img" id="item3"></div>
          <div className="item-desc">
            <div className="upper-desc">
              <p>Rome, Italty</p>
              <p>$5,42k</p>
            </div>
            <div className="lower-desc">
              <img src="assets/images/navigation.svg" alt="navigation" />
              <p>2 days trip</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bookings() {
  return (
    <div className="booking">
      <div className="left-booking">
        <h3 className="booking-subtitle">Easy and Fast</h3>
        <h2 className="booking-title">Book your next trip in 3 easy steps</h2>
        <div className="choose-dest">
          <div className="dest-icon"></div>
          <div className="dest-detl">
            <h4 className="dest-detl-title">Choose Destination</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.
            </p>
          </div>
        </div>
        <div className="airport">
          <div className="airport-icon"></div>
          <div className="airport-detl">
            <h4 className="airport-detl-title">Choose Destination</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.
            </p>
          </div>
        </div>
        <div className="payment">
          <div className="payment-icon"></div>
          <div className="payment-detl">
            <h4 className="payment-detl-title">Choose Destination</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tortor tempus.
            </p>
          </div>
        </div>
      </div>
      <div className="right-booking">
        <div className="booking-img"></div>
        <div className="booking-detl">
          <h3 className="booking-card-header">Trip To Greece</h3>
          <p>14-29 June by Robbin joseph</p>
          <div className="booking-card-icon">
            <div className="leaf-icon"></div>
            <div className="map-icon"></div>
            <div className="send-icon"></div>
          </div>
          <div className="people-count">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M0.266665 15.4667H1.86667V6.66667C1.86667 6.5194 1.98607 6.4 2.13333 6.4H5.86667V0.266667C5.86667 0.1194 5.98607 0 6.13333 0H13.0667C13.2139 0 13.3333 0.1194 13.3333 0.266667V15.4667H15.7333C15.8806 15.4667 16 15.5861 16 15.7333C16 15.8806 15.8806 16 15.7333 16H0.266665C0.119399 16 0 15.8806 0 15.7333C0 15.5861 0.119399 15.4667 0.266665 15.4667ZM10.4 15.4667H11.4667V13.0667C11.4667 12.9194 11.3473 12.8 11.2 12.8H10.6667C10.5194 12.8 10.4 12.9194 10.4 13.0667V15.4667ZM9.33333 6.66667V15.4667H9.86667V13.0667C9.86667 12.6248 10.2248 12.2667 10.6667 12.2667H11.2C11.6418 12.2667 12 12.6248 12 13.0667V15.4667H12.8V0.533333H6.4V6.4H9.06667C9.21393 6.4 9.33333 6.5194 9.33333 6.66667ZM2.4 15.4667H8.8V6.93333H2.4V15.4667Z"
                  fill="#84829A"
                />
                <path
                  d="M7.46658 3.7334H9.06659C9.21385 3.7334 9.33325 3.8528 9.33325 4.00007V5.60007C9.33325 5.74733 9.21385 5.86673 9.06659 5.86673H7.46658C7.31932 5.86673 7.19992 5.74733 7.19992 5.60007V4.00007C7.19992 3.8528 7.31932 3.7334 7.46658 3.7334ZM7.73325 5.3334H8.79992V4.26673H7.73325V5.3334Z"
                  fill="#84829A"
                />
                <path
                  d="M7.46658 1.06665H9.06659C9.21385 1.06665 9.33325 1.18605 9.33325 1.33332V2.93332C9.33325 3.08058 9.21385 3.19998 9.06659 3.19998H7.46658C7.31932 3.19998 7.19992 3.08058 7.19992 2.93332V1.33332C7.19992 1.18605 7.31932 1.06665 7.46658 1.06665ZM7.73325 2.66665H8.79992V1.59998H7.73325V2.66665Z"
                  fill="#84829A"
                />
                <path
                  d="M10.1333 3.7334H11.7333C11.8806 3.7334 12 3.8528 12 4.00007V5.60007C12 5.74733 11.8806 5.86673 11.7333 5.86673H10.1333C9.98607 5.86673 9.86667 5.74733 9.86667 5.60007V4.00007C9.86667 3.8528 9.98607 3.7334 10.1333 3.7334ZM10.4 5.3334H11.4667V4.26673H10.4V5.3334Z"
                  fill="#84829A"
                />
                <path
                  d="M10.1333 1.06665H11.7333C11.8806 1.06665 12 1.18605 12 1.33332V2.93332C12 3.08058 11.8806 3.19998 11.7333 3.19998H10.1333C9.98607 3.19998 9.86667 3.08058 9.86667 2.93332V1.33332C9.86667 1.18605 9.98607 1.06665 10.1333 1.06665ZM10.4 2.66665H11.4667V1.59998H10.4V2.66665Z"
                  fill="#84829A"
                />
                <path
                  d="M10.1333 6.3999H11.7333C11.8806 6.3999 12 6.5193 12 6.66657V8.26657C12 8.41384 11.8806 8.53324 11.7333 8.53324H10.1333C9.98607 8.53324 9.86667 8.41384 9.86667 8.26657V6.66657C9.86667 6.5193 9.98607 6.3999 10.1333 6.3999ZM10.4 7.9999H11.4667V6.93324H10.4V7.9999Z"
                  fill="#84829A"
                />
                <path
                  d="M10.1333 9.06665H11.7333C11.8806 9.06665 12 9.18605 12 9.33332V10.9333C12 11.0806 11.8806 11.2 11.7333 11.2H10.1333C9.98607 11.2 9.86667 11.0806 9.86667 10.9333V9.33332C9.86667 9.18605 9.98607 9.06665 10.1333 9.06665ZM10.4 10.6667H11.4667V9.59998H10.4V10.6667Z"
                  fill="#84829A"
                />
                <path
                  d="M5.06659 12.2666H3.46659C3.31932 12.2666 3.19992 12.1472 3.19992 12V10.4C3.19992 10.2527 3.31932 10.1333 3.46659 10.1333H5.06659C5.21385 10.1333 5.33325 10.2527 5.33325 10.4V12C5.33325 12.1472 5.21385 12.2666 5.06659 12.2666ZM4.79992 10.6666H3.73325V11.7333H4.79992V10.6666Z"
                  fill="#84829A"
                />
                <path
                  d="M5.06659 9.59989H3.46659C3.31932 9.59989 3.19992 9.48049 3.19992 9.33322V7.73322C3.19992 7.58595 3.31932 7.46655 3.46659 7.46655H5.06659C5.21385 7.46655 5.33325 7.58595 5.33325 7.73322V9.33322C5.33325 9.48049 5.21385 9.59989 5.06659 9.59989ZM4.79992 7.99989H3.73325V9.06655H4.79992V7.99989Z"
                  fill="#84829A"
                />
                <path
                  d="M5.06659 14.9334H3.46659C3.31932 14.9334 3.19992 14.814 3.19992 14.6667V13.0667C3.19992 12.9194 3.31932 12.8 3.46659 12.8H5.06659C5.21385 12.8 5.33325 12.9194 5.33325 13.0667V14.6667C5.33325 14.814 5.21385 14.9334 5.06659 14.9334ZM4.79992 13.3334H3.73325V14.4H4.79992V13.3334Z"
                  fill="#84829A"
                />
                <path
                  d="M7.73333 12.2666H6.13333C5.98607 12.2666 5.86667 12.1472 5.86667 12V10.4C5.86667 10.2527 5.98607 10.1333 6.13333 10.1333H7.73333C7.8806 10.1333 8 10.2527 8 10.4V12C8 12.1472 7.8806 12.2666 7.73333 12.2666ZM7.46667 10.6666H6.4V11.7333H7.46667V10.6666Z"
                  fill="#84829A"
                />
                <path
                  d="M7.73333 9.59989H6.13333C5.98607 9.59989 5.86667 9.48049 5.86667 9.33322V7.73322C5.86667 7.58595 5.98607 7.46655 6.13333 7.46655H7.73333C7.8806 7.46655 8 7.58595 8 7.73322V9.33322C8 9.48049 7.8806 9.59989 7.73333 9.59989ZM7.46667 7.99989H6.4V9.06655H7.46667V7.99989Z"
                  fill="#84829A"
                />
                <path
                  d="M7.73333 14.9334H6.13333C5.98607 14.9334 5.86667 14.814 5.86667 14.6667V13.0667C5.86667 12.9194 5.98607 12.8 6.13333 12.8H7.73333C7.8806 12.8 8 12.9194 8 13.0667V14.6667C8 14.814 7.8806 14.9334 7.73333 14.9334ZM7.46667 13.3334H6.4V14.4H7.46667V13.3334Z"
                  fill="#84829A"
                />
              </svg>
              <span className="count">24 people going</span>
            </p>
            <div className="heart"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Testemonial() {
  return (
    <div className="testimonial">
      <div className="left-testimonial">
        <p className="testimonial-subtitle">Testemonial</p>
        <h3 className="testimonial-titles">What people say about Us.</h3>
        <ul className="disc">
          <li className="first-disc"></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="right-testimonial">
        <div className="testimonial-0">
          <div className="testimonial-img"></div>
          <p>
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <div className="testimonial-header">
            <h3 className="testimonial-title">Mike taylor</h3>
            <p>London, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Companies() {
  return (
    <div className="companies">
      <div className="comp"></div>
      <div className="comp2"></div>
      <div className="comp3"></div>
      <div className="comp4"></div>
      <div className="comp5"></div>
    </div>
  );
}

function NewsLetter() {
  return (
    <div className="newsletter">
      <div className="telegram-icon"></div>
      <div className="newsletter-title">
        Subscribe to get information, latest news and other interesting offers
        about Cobham
      </div>
      <div className="input-grp">
        <input type="text" placeholder="Enter Email" />
        <button type="submit">Submit</button>
      </div>
      <p className="testimonial-signs">
        <span className="testimonial-orange-span">+</span>++<br></br>
        +++<br></br>
        ++<span className="testimonial-gray-span">+</span>
        <br></br>
        +++++<br></br>
        +++++<br></br>
        +++++<br></br>
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="upper-footer">
      <div className="footer-logo">
        <h3 className="footer-title">Jadoo.</h3>
        <p>Book your trip in minute, get full Control for much longer.</p>
      </div>
      <div className="company">
        <h4>
          Company
        </h4>
        <p>
          About <br/>
          Career<br/>
          Mobile
        </p>
      </div>
      <div className="contact">
      <h4>
          Contact
        </h4>
        <p>
        Help/FAQ <br/>
          Press<br/>
          Affiliate
        </p>
      </div>
      <div className="more">
      <h4>
          More
        </h4>
        <p>
        AirlineFees <br/>
          Airlines<br/>
          Low fare
        </p>
      </div>
      <div className="social">
        <div className="social-icons">
          <div className="facebook"></div>
          <div className="insta"></div>
          <div className="X"></div>
        </div>
        <p>Discover our app</p>
        <div className="appstore"></div>
      </div>
      </div>
      <div className="rights">All rights reserved@jadoo.co </div>
    </footer>
  );
}
ReactDOM.render(
  <div>
    <Header />
    <Banner />
    <Category />
    <Destination />
    <Bookings />
    <Testemonial />
    <Companies />
    <NewsLetter />
    <Footer/>
  </div>,
  document.getElementById("root")
);
