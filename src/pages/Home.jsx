import React from 'react';
import Hero from '../components/Hero/Hero';
import Menu from '../components/menu/Menu';
import HorizontalScroll from '../components/HorizontalScroll/HorizontalScroll';
import Footer from './Footer';
import PricingCards from './Pricing';
import   PeopleCards  from './PeopleCards';
import TechStack from './TechPlatforms';

const Home = () => {
    return (
        <div className='bg-[#111111]'>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]"
                style={{
                    backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    opacity: 0.1
                }}
            />
            {/* Menu is fixed at the top */}
            {/* <Menu /> */}
            {/* Hero Section */}
            {/* <Hero /> */}
            {/* Horizontal Scroll Section */}
            {/* <HorizontalScroll /> */}
            <PeopleCards/>
            <TechStack/>
            <PricingCards />
            <Footer />
        </div>
    );
};

export default Home;
