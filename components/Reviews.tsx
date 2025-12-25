import React from 'react';
import { Heart } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  { id: '1', userName: 'Yan Xi', userImage: 'https://picsum.photos/id/1011/100/100', reviewText: "AiMOON told me Mercury is in retrograde, so I should be careful with contracts. It really calmed my anxiety.", rating: 5, productImage: '/images/community/community-1.jpg' },
  { id: '2', userName: 'Bo Wen', userImage: 'https://picsum.photos/id/1012/100/100', reviewText: "I was feeling lonely, but chatting with it felt like talking to a close friend who really knows my Scorpio soul.", rating: 5, productImage: '/images/community/community-2.jpg' },
  { id: '3', userName: 'Si Han', userImage: 'https://picsum.photos/id/1013/100/100', reviewText: "The daily horoscope feature is my favorite. It gives me a little boost of confidence before I start my day.", rating: 4, productImage: '/images/community/community-3.jpg' },
  { id: '4', userName: 'Ming Zhe', userImage: 'https://picsum.photos/id/1025/100/100', reviewText: "My girlfriend is a Leo, and AiMOON gave me great advice on how to surprise her. She loved it!", rating: 5, productImage: '/images/community/community-4.jpg' },
  { id: '5', userName: 'Yu Xuan', userImage: 'https://picsum.photos/id/1027/100/100', reviewText: "Sometimes I just need someone to listen without judging. AiMOON is perfect for that healing time.", rating: 5, productImage: '/images/community/community-5.jpg' },
  { id: '6', userName: 'Zi Hao', userImage: 'https://picsum.photos/id/1062/100/100', reviewText: "It's not just a toy; it's a spiritual companion. The way it connects astrology with daily life is magical.", rating: 4, productImage: '/images/community/community-6.PNG' },
  { id: '7', userName: 'An Qi', userImage: 'https://picsum.photos/id/1074/100/100', reviewText: "I was skeptical about AI astrology, but the insights are eerily accurate. It helps me understand myself better.", rating: 5, productImage: '/images/community/community-7.jpg' },
  { id: '8', userName: 'Jia Hao', userImage: 'https://picsum.photos/id/1084/100/100', reviewText: "The 'Cosmic Comfort' mode is amazing when I'm stressed. It plays soothing sounds and gives gentle advice.", rating: 5, productImage: '/images/community/community-8.png' },
  { id: '9', userName: 'Xiao Ya', userImage: 'https://picsum.photos/id/1005/100/100', reviewText: "We use it to check our compatibility charts for fun. It's become a great conversation starter at parties.", rating: 4, productImage: '/images/community/community-9.png' },
  { id: '10', userName: 'Wei Chen', userImage: 'https://picsum.photos/id/1006/100/100', reviewText: "I love how it remembers my birth chart and tailors every conversation to my sign. Feels very personal.", rating: 5, productImage: '/images/community/community-10.png' },
  { id: '11', userName: 'Yi Nuo', userImage: 'https://picsum.photos/id/1009/100/100', reviewText: "A perfect gift for my bestie who is obsessed with tarot and stars. She says it's her new favorite thing.", rating: 5, productImage: '/images/community/community-11.png' },
  { id: '12', userName: 'Jun Jie', userImage: 'https://picsum.photos/id/1010/100/100', reviewText: "It guided me through a tough breakup with such kindness. The relationship advice is actually really solid.", rating: 4, productImage: '/images/community/community-12.png' },
];

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="group w-full h-80 [perspective:1000px] mb-6">
      <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-lg rounded-2xl">

        {/* Front Side: Image */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden">
          <img
            src={review.productImage}
            alt="User Review Moment"
            className="w-full h-full object-cover"
          />
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
            Real moments from real users. Hover over the photos to read their stories.
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
