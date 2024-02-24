import './Footer.css';

const Footer = () => {
    return (
        <div className='footer flex items-center justify-center flex-col'>
            <img className='w-[150px] mx-auto' src="http://localhost:5173/src/assets/images/logo-1024x765.webp" alt="" />

            <div className="flex items-center gap-2">
                <h1 class="text-xl text-center border-r border-white pr-2" style={{ borderRight: '2px solid white' }}>Advertise With Us</h1>
                <h1 class="text-xl text-center border-r border-white pr-2" style={{ borderRight: '2px solid white' }}>Work With Us</h1>
                <h1 class="text-xl text-center border-r border-white pr-2" style={{ borderRight: '2px solid white' }}>Join With Us</h1>
                <h1 class="text-xl text-center border-r border-white pr-2" style={{ borderRight: '2px solid white' }}>About Us</h1>
                <h1 class="text-xl text-center pr-2">Contact Us</h1>
            </div>
            <div className="flex items-center gap-2 mt-4">
            <h1 className="text-xl text-center border-r border-white pr-2" style={{ borderRight: '2px solid white' }}>Terms & Conditions</h1>
                <h1 class="text-xl text-center border-r pr-2">Privacy Policy</h1>
            </div>
        </div>
    );
};

export default Footer;