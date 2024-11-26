import React from 'react'
import logo from '../../images/icons/logo.png'
import search from '../../images/icons/search-icon.png'
import cart from '../../images/icons/cart.png'
import HeaderLink from './HeaderLink/HeaderLink';

 function Header() {
  return (
    <div>
      <header className="header-wrapper">
        <div className="internal-wrapper">
          <div className="header-link-wrapper">
            <ul>
              <li className="logo-link">
                <a href="logo-link ">
                  <img src={logo} />
                </a>
              </li>

              {/* <li><a href={this.props.linkUrl}>
                {this.props.linkName}
              </a></li> */}

              <HeaderLink linkUrl="/mac" linkName="Mac" />
              <HeaderLink linkUrl="/iphone" linkName="Iphone" />
              <HeaderLink linkUrl="ipad" linkName="Ipad" />
              <HeaderLink linkUrl="/watch" linkName="Watch" />
              <HeaderLink linkUrl="/tv" linkName="Tv" />
              <HeaderLink linkUrl="/music" linkName="Music" />
              <HeaderLink linkUrl="/support" linkName="Support" />

              {/* <li>
                <a href="Mac">Mac</a>
              </li>
              <li>
                <a href="iphone">iphone</a>
              </li>
              <li>
                <a href="ipad">ipad</a>
              </li>
              <li>
                <a href="watch">watch</a>
              </li>
              <li>
                <a href="tv">tv</a>
              </li>
              <li>
                <a href="Music">Music</a>
              </li>
              <li>
                <a href="support">support</a>
              </li> */}
              <li className="search-link">
                <a href="/search/">
                  <img src={search} />
                </a>
              </li>
              <li className="cart-link">
                <a href="/cart/">
                  <img src={cart} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
