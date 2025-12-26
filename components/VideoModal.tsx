import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId?: string;
  bilibiliId?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  youtubeId = 'dQw4w9WgXcQ', // 默认视频ID，请替换
  bilibiliId = 'BV1xx411c7mD' // 默认B站视频ID，请替换
}) => {
  const [region, setRegion] = useState<'cn' | 'global'>('global');
  const [isLoading, setIsLoading] = useState(true);

  // Debug: Log when isOpen changes
  useEffect(() => {
    console.log('VideoModal isOpen changed:', isOpen);
  }, [isOpen]);

  // 检测用户地区
  useEffect(() => {
    const detectRegion = async () => {
      try {
        // 方法1: 通过时区粗略判断
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezone.includes('Asia/Shanghai') || timezone.includes('Asia/Chongqing')) {
          setRegion('cn');
          return;
        }

        // 方法2: 通过语言判断
        const language = navigator.language || (navigator as any).userLanguage;
        if (language === 'zh-CN' || language === 'zh') {
          setRegion('cn');
          return;
        }

        // 方法3: 尝试检测网络(可选 - 需要外部API)
        // 默认为全球
        setRegion('global');
      } catch (error) {
        console.error('Region detection failed:', error);
        setRegion('global');
      }
    };

    detectRegion();
  }, []);

  // 关闭弹窗时重置加载状态
  useEffect(() => {
    if (!isOpen) {
      setIsLoading(true);
    }
  }, [isOpen]);

  // ESC键关闭
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const videoSrc = region === 'cn'
    ? `//player.bilibili.com/player.html?bvid=${bilibiliId}&page=1&autoplay=1&high_quality=1`
    : `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-all hover:scale-110"
          aria-label="Close video"
        >
          <X size={24} />
        </button>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
            <div className="w-12 h-12 border-4 border-brand-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Video Player */}
        <iframe
          src={videoSrc}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
          title="Product Video"
        />

        {/* Region Indicator (Optional - for debugging) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/50 text-white text-xs backdrop-blur-sm">
            {region === 'cn' ? '🇨🇳 Bilibili' : '🌍 YouTube'}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoModal;
