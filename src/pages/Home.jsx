import React from 'react';
import Hero, { Heroo } from '../components/Hero/Hero';
import Menu from '../components/menu/Menu';
import HorizontalScroll from '../components/HorizontalScroll/HorizontalScroll';
import Footer from './Footer';
import PricingCards from './Pricing';
import   PeopleCards  from './PeopleCards';
import TechStack from './TechPlatforms';
import ServiceCard from '../components/HorizontalScroll/HorizontalScroll';
import AboutSection from './AboutSection';
import ConnectWithUs from './Connect';
import AnimatedHero from './Banner';

const Home = () => {
    return (
        <div className='bg-[#111111]'>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]"
                style={{
                    // backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    opacity: ''
                }}
            >
            {/* Menu is fixed at the top */}
            <Menu />
            {/* Hero Section */}
            <Heroo/>
            {/* <AnimatedHero/> */}
            {/* Horizontal Scroll Section */}
            {/* <AboutSection/> */}
            <ServiceCard/>
            <PeopleCards/>
            <TechStack/>
            <PricingCards />
            <ConnectWithUs/>
            <Footer />
            </div>
        </div>
    );
};

export default Home;