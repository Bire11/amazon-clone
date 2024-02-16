import React from 'react'
import classes from './footer.module.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  const handleClick = () => {
    window.location.href = '/auth'; // Redirect to '/auth' route
  };

  return (
    <>
    <hr/>
       <div className={classes.footer_top} >
        <p>See personalized recommendations</p>
        <button onClick={handleClick}>Sign in</button>
        <div className={classes.one}>New customer? <a href='/auth'>Start here.</a></div> <br/><br/>
        <hr/>
       </div>

        <br/>
       <div className={classes.black}>
          <a href='/'>
               <p>Back to Top</p>
                </a>
       </div>

       <footer className={classes.footer_container}>
        <div>
          {/* col-1 */}
          <div className={classes.title}>Get to know Us</div>
           <ul>
            <li>
              <Link to= "#">Careers</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to= "#">   About Amazon</Link>
            </li>
            <li>
              <Link to="#"> Investor Relations</Link>
            </li>
            <li>
              <Link to= "#">  Amazon Devices</Link>
            </li>
            <li>
              <Link to="#">Amazon Science</Link>
            </li>
           </ul>
          
   
     
        </div>
        <div>
          {/* col-2 */}
          <div className={classes.title}>Make Money with Us</div>
          <ul>
            <li>
              <Link to= "#"> Sell products on Amazon</Link>
            </li>
            <li>
              <Link to="#">Sell on Amazon Business</Link>
            </li>
            <li>
              <Link to= "#">  Sell apps on Amazon</Link>
            </li>
            <li>
              <Link to="#">  Become an Affiliate</Link>
            </li>
            <li>
              <Link to= "#">Advertise Your Products</Link>
            </li>
            <li>
              <Link to="#">Self-Publish with Us</Link>
            </li>
            <li>
              <Link to= "#">  Host an Amazon Hub</Link>
            </li>
            <li>
              <Link to="#"> ›See More Make Money with Us</Link>
            </li>
           </ul>
         
   
         
        </div>
        <div>
          {/* col-3 */}
          <div className={classes.title}>Amazon Payment Products</div>
          <ul>
            <li>
              <Link to= "#"> Amazon Business Card</Link>
            </li>
            <li>
              <Link to="#"> Shop with Points</Link>
            </li>
            <li>
              <Link to= "#">  Reload Your Balance</Link>
            </li>
            <li>
              <Link to="#">Amazon Currency Converter</Link>
            </li>
            
           </ul>
       
    

        </div>
        <div>
          {/* col-4 */}
          <div className={classes.title}>Let Us Help You</div>
          <ul>
            <li>
              <Link to= "#">  Amazon and COVID-19</Link>
            </li>
            <li>
              <Link to="#">   Your Account</Link>
            </li>
            <li>
              <Link to= "#">    Your Orders</Link>
            </li>
            <li>
              <Link to="#"> Shipping Rates & Policies</Link>
            </li>
            <li>
              <Link to= "#">   Returns & Replacements</Link>
            </li>
            <li>
              <Link to="#">  Manage Your Content and Devices</Link>
            </li>
            <li>
              <Link to= "#">   Amazon Assistant</Link>
            </li>
            <li>
              <Link to="#">  Help</Link>
            </li>
            
           </ul>
 
        </div>
        

       </footer>
       <hr/>
        {/* <section className={classes.logo}> */}
          {/* logo */}
      {/* <Link to={'/auth'}>
        <img src='https://pngimg.com/uploads/amazon/amazon_PNG2.png'/>
      </Link> <Link to={'/'}>
      English
      </Link>
      <Link to={'/'}>
       $ USD-U.S Dollar 
      </Link>
      <Link to='#' className={classes.language}>
                    <img src='https://pngimg.com/uploads/flags/flags_PNG14592.png' alt=''/>
                    <section name= '' id= ''>
                        <option value=''>United State</option>
                    </section>
                   

                </Link>

     
       </section> */}
       {/* <div  className="my-apple-wrapper"> 
				More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
			</div>
			<div  className="copyright-wrapper row">
				<div  className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
					Copyright &copy; 2020 Apple Inc. All rights reserved.
				</div>
				<div  className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
					<ul>
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Terms of Use</a></li>
						<li><a href="#">Sales and Refunds</a></li>
						<li><a href="#">Legal</a></li>
						<li><a href="#">Site Map</a></li>
					</ul>
				</div>
				<div  className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
					<div  className="flag-wrapper"><img src=""/></div> <div  className="footer-country-name">United States</div> 
				</div>
			</div> */}
      


    </>
  )
}

export default Footer