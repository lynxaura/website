import React, { useRef } from 'react';
import { Instagram, Book } from 'lucide-react';
import { KOLImage } from '../types';

const kols: KOLImage[] = [
  {
    id: '0',
    imageUrl: '/images/creators/creator-1.jpeg',
    creatorName: '@saaaaaaara',
    platform: 'RedNote'
  },
  {
    id: '1',
    imageUrl: '/images/creators/creator-2.jpg',
    creatorName: '@Naomiwyh',
    platform: 'Instagram'
  },
  { id: '2', imageUrl: '/images/creators/creator-3.jpg', creatorName: '@lin_xi.official', platform: 'RedNote' },
  { id: '3', imageUrl: '/images/creators/creator-4.png', creatorName: '@its.jia_yi', platform: 'Instagram' },
  { id: '4', imageUrl: '/images/creators/creator-5.png', creatorName: '@hao_ran_vibes', platform: 'RedNote' },
  { id: '5', imageUrl: '/images/creators/creator-6.png', creatorName: '@yu_tong_star', platform: 'RedNote' },
  { id: '6', imageUrl: '/images/creators/creator-7.png', creatorName: '@xin_yi_007', platform: 'Instagram' },
];

const KOLGallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-2">Styled by Creators</h2>
          <p className="text-neutral-500">
            From street style to cozy corners, see how AiMOON fits your vibe.
          </p>
        </div>
        <div className="hidden sm:flex gap-2 text-neutral-400 text-sm">
          Swipe to explore &rarr;
        </div>
      </div>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-4 sm:px-6 lg:px-8 pb-10 hide-scrollbar snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        {kols.map((kol) => (
          <div
            key={kol.id}
            className="flex-none w-72 h-96 relative rounded-2xl overflow-hidden group snap-center cursor-pointer bg-neutral-100 shadow-md"
          >
            <img
              src={kol.imageUrl}
              alt={`Styled by ${kol.creatorName} `}
              // Changed object-cover to object-top to ensure faces aren't cropped in vertical photos
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            // Removed onError to prevent it from hiding the real image if it loads slowly
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {kol.creatorName}
              </span>
              <div className="flex items-center gap-2 text-neutral-300 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {kol.platform === 'Instagram' ? <Instagram size={14} /> : <Book size={14} />}
                {kol.platform}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KOLGallery;