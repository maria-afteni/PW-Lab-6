import React, { useEffect, useRef } from 'react';
import '../styles/Navbar.css'; 
import header from '../images/header.png';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Navbar = () => {
  const menuRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const offsetX = 0.5 - e.pageX / w;
      const offsetY = 0.5 - e.pageY / h;
      const dy = e.pageY - h / 2;
      const dx = e.pageX - w / 2;
      const theta = Math.atan2(dy, dx);
      let angle = theta * 180 / Math.PI - 90;
      const offsetPoster = menuRef.current.dataset.offset;
      const transformPoster = `translate3d(0, ${-offsetX * offsetPoster}px, 0) rotateX(${-offsetY * offsetPoster}deg) rotateY(${offsetX * (offsetPoster * 2)}deg)`;

      if (angle < 0) {
        angle += 360;
      }

      menuRef.current.style.transform = transformPoster;

      itemRefs.current.forEach((item) => {
        const offsetLayer = item.dataset.offset || 0;
        const transformLayer = `translate3d(${offsetX * offsetLayer}px, ${offsetY * offsetLayer}px, 20px)`;
        item.style.transform = transformLayer;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='body'>
        <h2 className='intro'>discover Maria's work</h2>
        
        <div className='container'>
            <div className="Menu-list" ref={menuRef} data-offset="20">
                <div
                    className="Menu-list-item"
                    ref={(el) => itemRefs.current[0] = el}
                    data-offset="5"
                    onClick={() => handleScrollToSection('about')}
                >
                    About
                </div>
                <div
                    className="Menu-list-item"
                    ref={(el) => itemRefs.current[1] = el}
                    data-offset="10"
                    onClick={() => handleScrollToSection('projects')}
                >
                    Projects
                </div>
                <div
                    className="Menu-list-item"
                    ref={(el) => itemRefs.current[2] = el}
                    data-offset="15"
                    onClick={() => handleScrollToSection('contact')}
                >
                    Contact
                </div>
            </div>
            <img  className='header' src={header} alt='me'/>
        </div>
    </div>
  );
};

export default Navbar;
