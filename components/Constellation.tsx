import React from 'react';

interface ConstellationProps {
  variant?: 'aries' | 'cassiopeia';
  className?: string;
  color?: string;
}

const Constellation: React.FC<ConstellationProps> = ({ variant = 'aries', className = '', color = '#A78BFA' }) => {
  // Simple path data for constellations
  const paths = {
    aries: {
      points: [
        { x: 10, y: 50 },
        { x: 40, y: 30 },
        { x: 70, y: 40 },
        { x: 90, y: 80 }
      ],
      name: 'Aries'
    },
    cassiopeia: {
      points: [
        { x: 10, y: 20 },
        { x: 30, y: 70 },
        { x: 50, y: 40 },
        { x: 70, y: 60 },
        { x: 90, y: 30 }
      ],
      name: 'Cassiopeia'
    }
  };

  const data = paths[variant];

  return (
    <div className={`relative group w-48 h-48 cursor-default ${className}`}>
      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
        {/* Connection Lines */}
        <path
          d={`M ${data.points.map(p => `${p.x},${p.y}`).join(' L ')}`}
          fill="none"
          stroke={color}
          strokeWidth="0.5"
          className="opacity-30 group-hover:opacity-80 transition-opacity duration-700 ease-in-out"
        />
        
        {/* Stars */}
        {data.points.map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="2"
            fill={color}
            className="animate-pulse group-hover:scale-150 transition-transform duration-300"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>
      
      {/* Label */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color }}>
          {data.name}
        </span>
      </div>
    </div>
  );
};

export default Constellation;