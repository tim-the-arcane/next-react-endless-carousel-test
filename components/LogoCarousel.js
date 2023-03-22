import { motion } from 'framer-motion';

// https://betterprogramming.pub/how-to-create-react-infinite-slider-22b76cbd7a9

export default function LogoCarousel({ items }) {
  return (
    <div
      className="carousel-wrapper"
      style={{ overflow: 'hidden', width: '100%' }}
    >
      {items?.length > 0 && (
        <motion.div
          className="carousel-grid"
          style={{
            width: '300%',
            display: 'flex',
            background: 'tomato',
          }}
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            duration: 45,
          }}
          drag="x"
        >
          <div
            style={{
              width: '50%',
              display: 'grid',
              gridTemplateColumns: `repeat(${items.length}, 120px)`,
              gap: 10,
              padding: 10,
              background: 'red',
            }}
          >
            {items.map((item) => {
              return (
                <div
                  key={item}
                  style={{
                    padding: 20,
                    textAlign: 'center',
                    background: 'white',
                    borderRadius: 6,
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>

          <div
            style={{
              width: '50%',
              display: 'grid',
              gridTemplateColumns: `repeat(${items.length}, 120px)`,
              gap: 10,
              padding: 10,
              background: 'blue',
            }}
          >
            {items.map((item) => {
              return (
                <div
                  key={item + 2}
                  style={{
                    padding: 20,
                    textAlign: 'center',
                    background: 'white',
                    borderRadius: 6,
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}
