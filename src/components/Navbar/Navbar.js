const Navbar = () => {
    return ( 
        <div className="navbar">
            <nav>
      <div className="logo-area">
        <div className="tooltip">
          <span className="material-icons-outlined hover">menu</span>
          <span className="tooltip-text">Main Menu</span>
        </div>

        <img
          className="gb_uc gb_7d"
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          srcset="
            https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x,
            https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x
          "
          alt=""
          aria-hidden="true"
          style={{width: 40, height: 40}}
        />
        <span className="logo-text">Keep</span>
      </div>

      <div className="search-area">
        <div className="tooltip">
          <span className="material-icons-outlined hover">search</span>
          <span className="tooltip-text">Search</span>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="settings-area">
        <div className="tooltip">
          <span className="material-icons-outlined hover">refresh</span>
          <span className="tooltip-text">Refresh</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover">view_agenda</span>
          <span className="tooltip-text">List View</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover">settings</span>
          <span className="tooltip-text">Settings</span>
        </div>
      </div>
      <div className="profile-actions-area">
        <div className="tooltip">
          <span className="material-icons-outlined hover">apps</span>
          <span className="tooltip-text">Apps</span>
        </div>
        <div className="tooltip">
          <span className="material-icons-outlined hover">account_circle</span>
          <span className="tooltip-text">Account</span>
        </div>
      </div>
    </nav>
        </div>
     );
}
 
export default Navbar;