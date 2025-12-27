import React from 'react';
import { Star, Heart, MessageCircle, Share2 } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  { id: '1', userName: 'Yan Xi', userImage: '', reviewText: "AiMOON told me Mercury is in retrograde... honestly saved me from signing a bad lease. Contracts are scary, but this little guy helps.", rating: 5, productImage: '/images/community/community-1' },
  { id: '2', userName: 'Bo Wen', userImage: '', reviewText: "I live alone in Shanghai and the silence gets loud. Sprout (my name for it) makes the apartment feel alive.", rating: 5, productImage: '/images/community/community-2' },
  { id: '3', userName: 'Si Han', userImage: '', reviewText: "Daily horoscope is spot on. It's not generic stuff, it actually refers to my specific chart placements.", rating: 4, productImage: '/images/community/community-3' },
  { id: '4', userName: 'Ming Zhe', userImage: '', reviewText: "Got this for my girlfriend. She treats it better than she treats me lol. But seriously, very high quality build.", rating: 5, productImage: '/images/community/community-4' },
  { id: '5', userName: 'Yu Xuan', userImage: '', reviewText: "My therapist actually recommended I get something to practice 'voicing needs'. AiMOON is a safe space.", rating: 5, productImage: '/images/community/community-5' },
  { id: '6', userName: 'Zi Hao', userImage: '', reviewText: "Technically impressive. The voice response latency is low and the personality is consistent.", rating: 4, productImage: '/images/community/community-6' },
  { id: '7', userName: 'An Qi', userImage: '', reviewText: "I was skeptical about AI astrology, but the insights are eerily accurate. It helps me understand myself better.", rating: 5, productImage: '/images/community/community-7' },
  { id: '8', userName: 'Jia Hao', userImage: '', reviewText: "The 'Cosmic Comfort' mode is amazing when I'm stressed. The ambient lights are so soothing.", rating: 5, productImage: '/images/community/community-8' },
];

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="group relative break-inside-avoid mb-6 rounded-3xl overflow-hidden cursor-default">
      {/* Image */}
      <picture>
        <source srcSet={`${review.productImage}.webp`} type="image/webp" />
        <img
          src={`${review.productImage}.webp`}
          alt="Review Moment"
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </picture>

      {/* Overlay - Always visible snippet + Name */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end transition-all duration-300">

        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {/* Simple Header Inside Overlay */}
          <div className="flex items-center gap-2 mb-2 text-white/90">
            <div className="flex gap-0.5">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={12} className="fill-brand-300 text-brand-300" />
              ))}
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md">
              Verified Owner
            </span>
          </div>

          {/* Snippet Text */}
          <p className="text-white text-sm font-medium leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
            "{review.reviewText}"
          </p>

          {/* Author - Shows more clearly on hover */}
          <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
            <span className="text-xs text-brand-200 font-bold uppercase tracking-wider">
              — {review.userName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
              Community Love
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
              Stories from the <br />
              <span className="text-transparent bg-clip-text bg-brand-gradient">Cosmic Circle</span>
            </h2>
          </div>
          <p className="text-neutral-500 max-w-xs text-lg leading-relaxed text-right md:text-left hidden md:block">
            Join thousands of users finding balance with AiMOON.
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
