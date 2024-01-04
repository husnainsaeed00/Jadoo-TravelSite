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
        </div>
        <div className="card" id="card3">
          <div className="card-icon"></div>
          <div className="card-desc"></div>
        </div>
        <div className="card" id="card4">
          <div className="card-icon"></div>
          <div className="card-desc"></div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(
  <div>
    <Header />
    <Banner />
    <Category />
  </div>,
  document.getElementById("root")
);
