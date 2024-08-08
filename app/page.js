'use client'

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import './page.css'; // Ensure this path is correct
import Logo from './images/Logo.png'
import SearchNormal from './images/search-normal.png'
import Wishlist from './images/wishlist.png'
import Shopping from './images/shopping-bag.png'
import Profile from './images/profile.png'
import Bag from './images/bag-img.png'
import metta1 from './images/metta-muse-img1.png'
import metta2 from './images/metta-muse-img2.png'
import metta3 from './images/metta-muse-img3.png'
import metta4 from './images/metta-muse-img4.png'
import metta5 from './images/metta-muse-img5.png'
import metta6 from './images/metta-muse-img6.png'
import { useContext, useEffect, useState } from 'react';
import { MenuContext } from './layout';


export default function Home() {
  const router = useRouter();
  const [products, setProducts] = useState([])
  const { setIsShowMenu } = useContext(MenuContext);

  const handleToggleMenu = () => {
    setIsShowMenu(prev => !prev);
  };

  const fetchProducts = () => {
    fetch('https://dummyjson.com/products?limit=18')
      .then(res => res.json())
      .then(res => setProducts(res.products));
  };
  console.log("products", products)
  useEffect(() => {
    fetchProducts()
  }, [])

  const handleRedirect = () => {
    router.push('/demopage');
  };

  return (
    <>
      <header id="header">
        <div className="row">
          <div className="header-wrap">
            <div className="header-top">
              <div className="container">
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor</li>
                </ul>
              </div>
            </div>
            <div className="header-bottom">
              <div className="container">
                <div className="header-bottom-wrap">
                  <div className="logo-wrap">
                    <div className="logo-first">
                      <div className="image-wrap"><Image src={Logo} alt="Logo" /></div>
                    </div>
                    <div className="logo-middle">
                      <p className="logo-name">LOGO</p>
                    </div>
                    <div className="logo-last">
                      <ul>
                        <li><Image src={SearchNormal} alt="Search" height={24} width={24}/></li>
                        <li><Image src={Wishlist} alt="Wishlist" height={24} width={24}/></li>
                        <li><Image src={Shopping} alt="Shopping Bag" height={24} width={24}/></li>
                        <li><Image src={Profile} alt="Profile" height={24} width={24}/></li>
                        <li>ENG</li>
                      </ul>
                    </div>
                  </div>
                  <div className="nav-bar-wrap">
                    <div className="menu">
                      <div className="menu-trigger" onClick={handleToggleMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                      </div>
                      <div>
                        <nav id="desktop-nav" className="menu-act">
                          <div className="close-button" onClick={handleToggleMenu}>
                            <i className="fa fa-times"></i>
                          </div>
                          <ul>
                            <li><Link href="/">SHOP</Link></li>
                            <li><Link href="/">SKILLS</Link></li>
                            <li><Link href="/">STORIES</Link></li>
                            <li><Link href="/">ABOUT</Link></li>
                            <li><Link href="/">CONTACT US</Link></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="discover-section">
        <div className="container">
          <div className="discover-wrap">
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
          </div>
        </div>
      </div>
      <div className="search-section">
        <div className="container">
          <div className="search-wrap">
            <div className="left-search">
              <p className="items-show">3425 Items</p>
            </div>
            <div className="middle-search">
              <p className="hide-filter">FILTER</p>
            </div>
            <div className="right-search">
              <select name="filter-search" id="filter">
                <option value="">RECOMMENDED</option>
                <option value="">Newest first</option>
                <option value="">popular</option>
                <option value="">Price : high to low</option>
                <option value="">Price : low to high</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="product-section">
        <div className="container">
          <div className="product-wrap">
            <div className="product-left-col">
              <ul className="product-left-listing">
                <li>
                  <div className="customizable">
                    <h3>Customizable</h3>
                    <input type="checkbox" />
                  </div>
                </li>
                <li>
                  <h4>IDEAL FOR</h4>
                  <h3>All</h3>
                </li>
                <li>
                  <h4>IDEAL FOR</h4>
                  <h3>All</h3>
                </li>
                <li>
                  <h4>occasion</h4>
                  <h3>All</h3>
                </li>
                <li>
                  <h4>Work</h4>
                  <h3>All</h3>
                </li>
                <li>
                  <h4>Fabric</h4>
                  <h3>All</h3>
                </li>
                <li>
                  <h4>segment</h4>
                  <h3>All</h3>
                </li>
                <li>
                  <h4>suitable for</h4>
                  <h3>All</h3>
                </li>
                <li>
                  <h4>raw materials</h4>
                  <h3>All</h3>
                </li>
                <li>
                  <h4>suitable for</h4>
                  <h3>All</h3>
                </li>
                <li>
                  <h4>Pattern</h4>
                  <h3>All</h3>
                </li>
              </ul>
            </div>
            <div className="product-right-col">
              <ul className="product-listing">
                {products && products.map((product, key) => (
                  <li key={key} className="products">
                    <Image src={product.thumbnail} alt="" width={300} height={462} />
                    <div className="product-content">
                      <h3 className="product-heading">{product.title}</h3>
                      <p className="product-para">{product.description.slice(0, 25)}...</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-bg top">
                <div className="footer-top-left white-text">
                  <div className="be-the-first-wrap">
                    <h2>Be the first to know</h2>
                    <p className="signup">Sign up for updates from mettā muse.</p>
                  </div>
                  <div className="signup-wrap">
                    <form className="tnp-form">
                      <div className="form-field">
                        <input className="tnp-email" placeholder="Enter your e-mail..." type="text"
                          name="sub_email" id="subnewsemail" autoComplete="off" />
                      </div>
                      <div className="sub_buttons">
                        <input className="tnp-submit" type="submit" name="image" id="sidebar_button"
                          value="SUBSCRIBE" />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="footer-top-right">
                  <div className="text-white top">
                    <h2>CONTACT US</h2>
                    <ul className="contact-detail">
                      <li className="phone-no"><a href="tel:+44 221 133 5360">+44 221 133 5360</a></li>
                    <li className="email"><a
                        href="mailto:customercare@mettamuse.com">customercare@mettamuse.com
                      </a></li>
                    </ul>
                  </div>
                  <div className="text-white bottom">
                    <h2>Currency</h2>
                    <div className="country-selector">
                      <label htmlFor="countries">USD</label>
                      {/* <select name="countries" id="countries">
                        <option value="">America</option>
                        <option value="">Austria</option>
                        <option value="">Canada</option>
                        <option value="">Germany</option>
                      </select> */}
                    </div>
                    <p className="country-text">Transactions will be completed in Euros and a currency
                      reference is available on hover.</p>
                  </div>
                </div>
              </div>
              <div className="footer-bg bottom">
                <div className="footer-col-nav">
                  <div className="link" id="desktopnav">
                    <div className="quicklink text-white">
                      <h2>mettā muse</h2>
                      <ul>
                        <li>About Us</li>
                        <li>Stories</li>
                        <li>Artisans</li>
                        <li>Boutiques</li>
                        <li>Contact Us</li>
                        <li>EU Compliances Docs</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-col-ind-add">
                  <div className="contact-details-container">
                    <div className="contact-details-left text-white">
                      <h2>Quick Links</h2>
                      <ul>
                        <li>Orders & Shipping</li>
                        <li>Join/Login as a Seller</li>
                        <li>Payment & Pricing</li>
                        <li>Return & Refunds</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-col-can-add">
                  <div className="contact-details-conatiner">
                    <div className="contact-details-right text-white top">
                      <h2>Follow Us</h2>
                      <ul className="payment">
                        <li className="left-icons igram-left-icon"><a href="https://www.instagram.com/"
                          target="_blank" rel="noopener noreferrer"></a></li>
                        <li className="left-icons linldin-left-icon"><a href="https://in.linkedin.com/"
                          target="_blank" rel="noopener noreferrer"></a></li>
                      </ul>
                    </div>
                    <div className="contact-details-right text-white bottom">
                      <h2>mettā muse Accepts</h2>
                      <ul>
                        <li className="payment-icon "><Image src={metta1} alt="metta1" /></li>
                        <li className="payment-icon "><Image src={metta2} alt="metta2" /></li>
                        <li className="payment-icon "><Image src={metta3} alt="metta3" /></li>
                        <li className="payment-icon blue "><Image src={metta4} alt="metta4" /></li>
                        <li className="payment-icon "><Image src={metta5} alt="metta5" /></li>
                        <li className="payment-icon purple"><Image src={metta6} alt="metta5" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="row">
              <div className="container">
                <div className="copyright-content">
                  <h2>Copyright © 2023 mettamuse. All Rights Reserved.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}