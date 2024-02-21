import './Footer.css';

const Footer = () => {
    return (
        <div className='footer flex items-center justify-center flex-col'>
            <img className='w-[150px] mx-auto' src="http://localhost:5173/src/assets/images/logo-1024x765.webp" alt="" />

            <div className="">
                <h1 className="text-xl text-center">Adverties With US | Work with US | Join US | About US | Contact US | </h1>
                <h1 className="text-xl text-center">Tearms & Conditions | Privacy Policy</h1>
            </div>
        </div>
    );
};

export default Footer;