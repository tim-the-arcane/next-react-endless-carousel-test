import { useState } from 'react';
import { motion } from 'framer-motion';

const Logo = ({ logoSrc }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      style={{
        overflow: 'hidden',
        textAlign: 'center',
        background: 'white',
        borderRadius: 6,
        boxShadow: '1px 1px 16px -2px rgba(0,0,0,.3)',
        position: 'relative',
        //filter: `grayscale(${isHover ? 0 : 1})`,
        transition: '0.5s',
      }}
      onPointerOver={() => setIsHover(true)}
      onPointerLeave={() => setIsHover(false)}
    >
      <img
        src={logoSrc}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

const LogoCarouselGrid = ({ children }) => (
  <div
    style={{
      width: '50%',
      display: 'grid',
      gridTemplateColumns: `repeat(${children.length}, 1fr)`,
      gap: 10,
    }}
  >
    {children}
  </div>
);

const marqueeVariants = {
  animate: {
    x: ['0%', '-50%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear',
      },
    },
  },
};

export default function LogoCarousel({ items }) {
  const [animate, setAnimate] = useState(true);

  return (
    <div
      className="carousel-wrapper"
      style={{
        overflow: 'hidden',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      {items?.length > 0 && (
        <motion.div
          className="carousel-grid"
          style={{
            width: '200%',
            display: 'flex',
            gap: 10,
          }}
          variants={marqueeVariants}
          animate={'animate'}
        >
          <LogoCarouselGrid>
            {items.map((item) => {
              return <Logo key={item.name} logoSrc={item.logoSrc} />;
            })}
          </LogoCarouselGrid>

          <LogoCarouselGrid>
            {items.map((item) => {
              return <Logo key={item.name + 2} logoSrc={item.logoSrc} />;
            })}
          </LogoCarouselGrid>
        </motion.div>
      )}
    </div>
  );
}
