import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Manufacturing } from './components/Manufacturing';
import { Conclusion } from './components/Conclusion';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Hero />
      <Features />
      <Manufacturing />
      <Conclusion />
    </div>
  );
}
