import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  { id: '1', userName: 'Yan Xi', userImage: 'https://picsum.photos/id/1011/100/100', reviewText: "AiMOON told me Mercury is in retrograde, so I should be careful with contracts. It really calmed my anxiety.", rating: 5, productImage: '/images/community/community-1' },
  { id: '2', userName: 'Bo Wen', userImage: 'https://picsum.photos/id/1012/100/100', reviewText: "I was feeling lonely, but chatting with it felt like talking to a close friend who really knows my Scorpio soul.", rating: 5, productImage: '/images/community/community-2' },
  { id: '3', userName: 'Si Han', userImage: 'https://picsum.photos/id/1013/100/100', reviewText: "The daily horoscope feature is my favorite. It gives me a little boost of confidence before I start my day.", rating: 4, productImage: '/images/community/community-3' },
  { id: '4', userName: 'Ming Zhe', userImage: 'https://picsum.photos/id/1025/100/100', reviewText: "My girlfriend is a Leo, and AiMOON gave me great advice on how to surprise her. She loved it!", rating: 5, productImage: '/images/community/community-4' },
  { id: '5', userName: 'Yu Xuan', userImage: 'https://picsum.photos/id/1027/100/100', reviewText: "Sometimes I just need someone to listen without judging. AiMOON is perfect for that healing time.", rating: 5, productImage: '/images/community/community-5' },
  { id: '6', userName: 'Zi Hao', userImage: 'https://picsum.photos/id/1062/100/100', reviewText: "It's not just a toy; it's a spiritual companion. The way it connects astrology with daily life is magical.", rating: 4, productImage: '/images/community/community-6' },
  { id: '7', userName: 'An Qi', userImage: 'https://picsum.photos/id/1074/100/100', reviewText: "I was skeptical about AI astrology, but the insights are eerily accurate. It helps me understand myself better.", rating: 5, productImage: '/images/community/community-7' },
  { id: '8', userName: 'Jia Hao', userImage: 'https://picsum.photos/id/1084/100/100', reviewText: "The 'Cosmic Comfort' mode is amazing when I'm stressed. It plays soothing sounds and gives gentle advice.", rating: 5, productImage: '/images/community/community-8' },
  { id: '9', userName: 'Xiao Ya', userImage: 'https://picsum.photos/id/1005/100/100', reviewText: "We use it to check our compatibility charts for fun. It's become a great conversation starter at parties.", rating: 4, productImage: '/images/community/community-9' },
  { id: '10', userName: 'Wei Chen', userImage: 'https://picsum.photos/id/1006/100/100', reviewText: "I love how it remembers my birth chart and tailors every conversation to my sign. Feels very personal.", rating: 5, productImage: '/images/community/community-10' },
  { id: '11', userName: 'Yi Nuo', userImage: 'https://picsum.photos/id/1009/100/100', reviewText: "A perfect gift for my bestie who is obsessed with tarot and stars. She says it's her new favorite thing.", rating: 5, productImage: '/images/community/community-11' },
  { id: '12', userName: 'Jun Jie', userImage: 'https://picsum.photos/id/1010/100/100', reviewText: "It guided me through a tough breakup with such kindness. The relationship advice is actually really solid.", rating: 4, productImage: '/images/community/community-12' },
];

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [touchStartPos, setTouchStartPos] = useState({ x: 0, y: 0 });

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouchDevice(true);
    const touch = e.touches[0];
    setTouchStartPos({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    const deltaX = Math.abs(touch.clientX - touchStartPos.x);
    const deltaY = Math.abs(touch.clientY - touchStartPos.y);

    // 只有当移动距离小于10px时才认为是点击（而不是滚动）
    if (deltaX < 10 && deltaY < 10) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleClick = () => {
    if (!isTouchDevice) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setIsFlipped(false);
    }
  };

  return (
    <div
      className="group w-full h-80 [perspective:1000px] mb-6 cursor-pointer"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] shadow-lg rounded-2xl ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>

        {/* Front Side: Image */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden">
          <picture>
            <source srcSet={`${review.productImage}.webp`} type="image/webp" />
            <img
              src={`${review.productImage}.jpg`}
              alt="User Review Moment"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
            <div className="flex items-center gap-2 text-white">
              <Heart className="w-4 h-4 text-heart-500 fill-heart-500" />
              <span className="text-sm font-medium">Liked by {review.userName}</span>
            </div>
          </div>
        </div>

        {/* Back Side: Review Text */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-2xl p-6 flex flex-col justify-between border border-brand-100">
          <div>
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-lumina-500" />
              ))}
            </div>
            <p className="text-neutral-700 italic font-medium leading-relaxed">
              "{review.reviewText}"
            </p>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
            <img src={review.userImage} alt={review.userName} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-bold text-neutral-900">{review.userName}</p>
              <p className="text-xs text-neutral-400">Verified Buyer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Loved by Our Community</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Real moments from real users. <span className="hidden md:inline">Hover over</span><span className="md:hidden">Tap on</span> the photos to read their stories.
          </p>
        </div>

        {/* Masonry-like layout using columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="break-inside-avoid">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
