import Head from 'next/head';
import LogoCarousel from '../components/LogoCarousel';

const members = [
  {
    name: 'Bechtle',
    logoSrc:
      'https://connect-it.hn/wp-content/uploads/connect-it-bechtle-32011tmm2vrpy0bngkwglm.jpg',
  },
  {
    name: 'Camao',
    logoSrc:
      'https://connect-it.hn/wp-content/uploads/Logo_camao_300x150-3ch3sb5iylpuq9umbxvj7u.png',
  },
  {
    name: 'CAMPUS FOUNDERS gGmbH',
    logoSrc:
      'https://connect-it.hn/wp-content/uploads/campusfounders-3actij0r810yfdq872llvu.jpg',
  },
];

export default function Home() {
  return (
    <div>
      <h1>Endless Logo Carousel Demo</h1>

      <LogoCarousel items={members} />
    </div>
  );
}
