import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Instagram, Facebook, Twitter, MessageCircle, Gift, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'أسطولنا', path: '/fleet' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'احجز الآن', path: '/booking' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-luxury-black/95 py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-serif font-bold gold-text-gradient tracking-tighter">
            إيليت ليموزين
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-widest uppercase transition-colors hover:text-gold ${
                location.pathname === link.path ? 'text-gold' : scrolled ? 'text-white' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/booking" 
            className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-luxury-black transition-all duration-300 text-sm font-bold tracking-widest"
          >
            احجز رحلتك
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-luxury-black border-t border-gold/20 py-10 px-6 md:hidden flex flex-col items-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-serif ${
                  location.pathname === link.path ? 'text-gold' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/booking" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 bg-gold text-luxury-black font-bold tracking-widest"
            >
              احجز الآن
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-luxury-black text-white py-20 px-6 border-t border-gold/10" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-serif gold-text-gradient font-bold">إيليت ليموزين</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            نحن نقدم تجربة ليموزين لا مثيل لها في مصر، حيث نجمع بين الفخامة والراحة والأمان لتلبية كافة احتياجاتكم.
          </p>
          <div className="flex gap-4">
            <Instagram className="text-gold cursor-pointer hover:scale-110 transition-transform" size={20} />
            <Facebook className="text-gold cursor-pointer hover:scale-110 transition-transform" size={20} />
            <Twitter className="text-gold cursor-pointer hover:scale-110 transition-transform" size={20} />
          </div>
        </div>

        <div>
          <h4 className="text-gold font-bold mb-6 tracking-widest uppercase text-xs">روابط سريعة</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-gold transition-colors">الرئيسية</Link></li>
            <li><Link to="/fleet" className="hover:text-gold transition-colors">أسطولنا</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">خدماتنا</Link></li>
            <li><Link to="/booking" className="hover:text-gold transition-colors">احجز الآن</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-bold mb-6 tracking-widest uppercase text-xs">خدماتنا</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>توصيل مطار</li>
            <li>رحلات سياحية</li>
            <li>خدمات رجال الأعمال</li>
            <li>مناسبات خاصة</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-gold font-bold mb-6 tracking-widest uppercase text-xs">اتصل بنا</h4>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <Phone size={18} className="text-gold" />
            <span>+20 155 555 3717</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <MapPin size={18} className="text-gold" />
            <span>القاهرة، مصر</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} إيليت ليموزين. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export const WhatsAppButton = () => {
  const phoneNumber = "+201555553717"; // Updated with user's number
  const message = encodeURIComponent("مرحباً إيليت ليموزين، أريد الاستفسار عن خدماتكم.");
  
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 left-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
    </motion.a>
  );
};

export const PromoModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const promoCode = "TechEdu3rd";

  useEffect(() => {
    const hasSeenPromo = sessionStorage.getItem('hasSeenPromo');
    if (!hasSeenPromo) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const closePromo = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenPromo', 'true');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePromo}
            className="absolute inset-0 bg-luxury-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl"
            dir="rtl"
          >
            <button 
              onClick={closePromo}
              className="absolute top-4 left-4 text-gray-400 hover:text-luxury-black transition-colors z-10"
            >
              <X size={24} />
            </button>
            
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Promo" 
                className="w-full h-full object-cover brightness-75"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              <div className="absolute bottom-0 right-8">
                <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center text-white shadow-lg mb-[-2rem]">
                  <Gift size={32} />
                </div>
              </div>
            </div>

            <div className="p-10 pt-12 text-center">
              <h3 className="text-3xl font-serif mb-4">عرض خاص لفترة محدودة!</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                استخدم البرومو كود التالي للحصول على خصم حصري على رحلتك القادمة مع إيليت ليموزين.
              </p>
              
              <div className="bg-luxury-white p-6 rounded-2xl border-2 border-dashed border-gold/30 flex items-center justify-between gap-4 mb-8">
                <span className="text-2xl font-mono font-bold tracking-wider text-luxury-black">
                  {promoCode}
                </span>
                <button 
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-4 py-2 bg-gold text-luxury-black font-bold text-xs rounded-lg hover:bg-gold-light transition-all"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "تم النسخ" : "نسخ الكود"}
                </button>
              </div>

              <button 
                onClick={closePromo}
                className="w-full py-4 bg-luxury-black text-white font-bold tracking-widest hover:bg-gold hover:text-luxury-black transition-all duration-500 rounded-xl"
              >
                استخدمه الآن
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
