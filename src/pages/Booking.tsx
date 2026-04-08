import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, User, Phone, Mail, Car, Send } from 'lucide-react';

export const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-20 flex items-center justify-center px-6" dir="rtl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-white p-12 rounded-3xl shadow-2xl text-center"
        >
          <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-lg">
            <Send size={40} />
          </div>
          <h2 className="text-4xl font-serif mb-6">تم استلام طلبك بنجاح!</h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            شكراً لاختيارك إيليت ليموزين. سيقوم فريقنا بمراجعة طلبك والتواصل معك خلال دقائق لتأكيد الحجز.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-10 py-4 bg-luxury-black text-white font-bold tracking-widest hover:bg-gold hover:text-luxury-black transition-all duration-500"
          >
            العودة للرئيسية
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-luxury-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gold font-bold tracking-widest uppercase text-xs mb-4 block"
            >
              احجز رحلتك
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-8"
            >
              خطط لرحلتك <br /> <span className="italic gold-text-gradient">القادمة</span>
            </motion.h1>
            <p className="text-gray-600 text-lg mb-12 font-light leading-relaxed">
              املأ النموذج أدناه وسنقوم بترتيب كل شيء لك. سواء كانت رحلة عمل أو مناسبة خاصة، نحن نضمن لك تجربة استثنائية.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Phone size={24} />, title: "اتصل بنا مباشرة", info: "+20 123 456 7890" },
                { icon: <Mail size={24} />, title: "راسلنا عبر البريد", info: "booking@elitelimo.eg" },
                { icon: <MapPin size={24} />, title: "مكتبنا الرئيسي", info: "القاهرة، المعادي، شارع 9" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gold shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-400 uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-xl font-serif">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-gold/10"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <User size={14} className="text-gold" /> الاسم بالكامل
                  </label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-luxury-white border-none p-4 rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all"
                    placeholder="أحمد محمد"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Phone size={14} className="text-gold" /> رقم الهاتف
                  </label>
                  <input 
                    required
                    type="tel" 
                    className="w-full bg-luxury-white border-none p-4 rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all"
                    placeholder="+20 123 456 7890"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <Car size={14} className="text-gold" /> نوع السيارة المفضلة
                </label>
                <select className="w-full bg-luxury-white border-none p-4 rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all appearance-none">
                  <option>مرسيدس S-Class</option>
                  <option>بي إم دبليو الفئة السابعة</option>
                  <option>رينج روفر فوج</option>
                  <option>كاديلاك إسكاليد</option>
                  <option>مرسيدس V-Class</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Calendar size={14} className="text-gold" /> تاريخ الرحلة
                  </label>
                  <input 
                    required
                    type="date" 
                    className="w-full bg-luxury-white border-none p-4 rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                    <Clock size={14} className="text-gold" /> وقت الرحلة
                  </label>
                  <input 
                    required
                    type="time" 
                    className="w-full bg-luxury-white border-none p-4 rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <MapPin size={14} className="text-gold" /> مكان الاستلام
                </label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-luxury-white border-none p-4 rounded-xl focus:ring-2 focus:ring-gold outline-none transition-all"
                  placeholder="مطار القاهرة الدولي"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-6 bg-luxury-black text-white font-bold tracking-widest hover:bg-gold hover:text-luxury-black transition-all duration-500 rounded-xl shadow-xl"
              >
                تأكيد طلب الحجز
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
