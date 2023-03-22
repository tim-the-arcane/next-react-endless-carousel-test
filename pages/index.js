import Head from 'next/head';
import LogoCarousel from '../components/LogoCarousel';

const members = ['gravima', 'EF'];

export default function Home() {
  return (
    <div>
      <h1>Endless Logo Carousel Demo</h1>

      <LogoCarousel items={members} />
    </div>
  );
}
