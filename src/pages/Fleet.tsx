import { motion } from 'motion/react';
import { Fuel, Settings, Shield, Star } from 'lucide-react';

export const Fleet = () => {
  const cars = [
    {
      name: "مرسيدس S-Class",
      category: "Luxury Sedan",
      img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1000",
      features: ["3 ركاب", "2 حقيبة كبيرة", "واي فاي مجاني", "شاشات خلفية"]
    },
    {
      name: "بي إم دبليو الفئة السابعة",
      category: "Executive Sedan",
      img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000",
      features: ["3 ركاب", "2 حقيبة كبيرة", "مقاعد تدليك", "تحكم ذكي"]
    },
    {
      name: "رينج روفر فوج",
      category: "Luxury SUV",
      img: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=1000",
      features: ["4 ركاب", "4 حقائب كبيرة", "دفع رباعي", "سقف بانوراما"]
    },
    {
      name: "كاديلاك إسكاليد",
      category: "Premium SUV",
      img: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=1000",
      features: ["6 ركاب", "5 حقائب كبيرة", "نظام صوتي Bose", "مساحة واسعة"]
    },
    {
      name: "أودي A8 L",
      category: "Luxury Sedan",
      img: "https://images.unsplash.com/photo-1606148632363-06d3374a46a4?auto=format&fit=crop&q=80&w=1000",
      features: ["3 ركاب", "2 حقيبة كبيرة", "إضاءة محيطية", "هدوء تام"]
    },
    {
      name: "مرسيدس V-Class",
      category: "Luxury Van",
      img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000",
      features: ["7 ركاب", "7 حقائب كبيرة", "طاولة اجتماعات", "مقاعد جلدية"]
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-luxury-black text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            اختر رحلتك
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            أسطولنا <span className="italic gold-text-gradient">المتميز</span>
          </motion.h1>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cars.map((car, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-gold/50 transition-colors group"
            >
              <div className="md:w-1/2 overflow-hidden">
                <img 
                  src={car.img} 
                  alt={car.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-gold text-xs font-bold tracking-widest uppercase mb-2 block">{car.category}</span>
                  <h3 className="text-3xl font-serif mb-6">{car.name}</h3>
                  <ul className="space-y-3 mb-8">
                    {car.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 py-4 bg-gold text-luxury-black font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">
                    احجز الآن
                  </button>
                  <button className="px-6 py-4 border border-white/20 hover:bg-white/10 transition-colors">
                    <Settings size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
