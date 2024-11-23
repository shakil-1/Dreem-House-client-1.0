import logo  from '../../assets/logo.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
         <img className='h-16' src={logo} alt="" />
          <p>
         <span className='text-3xl font-bold text-orange-500'> Dream House</span>
            <br />
          <span className='font-medium'> Gulshan, Dhaka</span>
          </p>
        </aside>
        <nav>
          <header className="footer-title">Bookings</header>
          <a className="link link-hover">Single room</a>
          <a className="link link-hover">Double room</a>
          <a className="link link-hover">Family room</a>
        </nav>
        <nav>
          <header className="footer-title">Contact</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact us</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
