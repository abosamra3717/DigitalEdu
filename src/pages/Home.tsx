import { motion } from 'motion/react';
import { ArrowLeft, Star, Shield, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="overflow-hidden" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2070" 
            alt="Luxury Car" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-transparent to-luxury-black"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 block"
          >
            أهلاً بكم في إيليت ليموزين
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight"
          >
            الفخامة التي <br /> <span className="gold-text-gradient italic">تستحقها</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            نقدم لك تجربة تنقل فاخرة في قلب مصر، حيث تلتقي الراحة المطلقة مع الأمان والاحترافية.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <Link 
              to="/booking" 
              className="px-10 py-5 bg-gold text-luxury-black font-bold tracking-widest hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              احجز رحلتك الآن
              <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
            </Link>
            <Link 
              to="/fleet" 
              className="px-10 py-5 border border-white/30 text-white font-bold tracking-widest hover:bg-white/10 transition-all duration-300"
            >
              استكشف أسطولنا
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-20 bg-gradient-to-b from-gold to-transparent"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">لماذا تختار إيليت؟</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: <Shield size={40} />, title: "أمان مطلق", desc: "سائقون محترفون وسيارات مؤمنة بالكامل لضمان سلامتك." },
              { icon: <Star size={40} />, title: "فخامة استثنائية", desc: "أسطول من أحدث السيارات الفارهة المجهزة بكافة وسائل الراحة." },
              { icon: <Clock size={40} />, title: "دقة في المواعيد", desc: "نحن نقدر وقتك، لذا نلتزم بالوصول في الموعد المحدد دائماً." },
              { icon: <MapPin size={40} />, title: "تغطية شاملة", desc: "نخدم كافة محافظات مصر والمطارات الرئيسية على مدار الساعة." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-luxury-white rounded-full flex items-center justify-center mx-auto mb-8 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-32 bg-luxury-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-gold font-bold tracking-widest uppercase text-xs mb-4 block">أسطولنا الفاخر</span>
              <h2 className="text-4xl md:text-6xl font-serif">اختر سيارتك المفضلة</h2>
            </div>
            <Link to="/fleet" className="text-gold border-b border-gold pb-2 hover:text-gold-light transition-colors">عرض الأسطول بالكامل</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "مرسيدس S-Class", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000" },
              { name: "بي إم دبليو الفئة السابعة", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000" },
              { name: "رينج روفر فوج", img: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=1000" },
            ].map((car, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
              >
                <img 
                  src={car.img} 
                  alt={car.name} 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-8 right-8">
                  <h4 className="text-2xl font-serif mb-2">{car.name}</h4>
                  <div className="w-12 h-1 bg-gold"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2070" 
            alt="Driving" 
            className="w-full h-full object-cover grayscale opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">جاهز لتجربة الفخامة؟</h2>
          <p className="text-xl text-gray-600 mb-12 font-light">احجز رحلتك الآن واستمتع بأعلى معايير الخدمة في مصر.</p>
          <Link 
            to="/booking" 
            className="inline-block px-12 py-6 bg-luxury-black text-white font-bold tracking-widest hover:bg-gold hover:text-luxury-black transition-all duration-500"
          >
            احجز الآن
          </Link>
        </div>
      </section>
    </div>
  );
};
