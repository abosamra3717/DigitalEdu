import { motion } from 'motion/react';
import { Shield, Star, Users, Briefcase, Plane, Heart } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Plane size={40} />,
      title: "توصيل المطار",
      desc: "خدمة استقبال وتوديع في كافة مطارات مصر. نراقب رحلتك لضمان وجودنا في انتظارك فور وصولك.",
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <Briefcase size={40} />,
      title: "خدمات رجال الأعمال",
      desc: "حلول تنقل احترافية للشركات والمديرين التنفيذيين. سيارات مجهزة لتكون مكتبك المتنقل.",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <Star size={40} />,
      title: "رحلات سياحية",
      desc: "استكشف معالم مصر السياحية بخصوصية تامة وراحة مطلقة مع سائقين على دراية بكافة الطرق.",
      img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <Heart size={40} />,
      title: "مناسبات خاصة",
      desc: "اجعل يوم زفافك أو مناسبتك الخاصة ذكرى لا تنسى مع أسطولنا من السيارات الفارهة.",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <Users size={40} />,
      title: "تنقل المجموعات",
      desc: "نوفر حافلات وسيارات فان فاخرة للمجموعات الكبيرة مع ضمان نفس مستوى الفخامة.",
      img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000"
    },
    {
      icon: <Shield size={40} />,
      title: "حراسة خاصة",
      desc: "خدمات تنقل مع حراسة أمنية مدربة للشخصيات الهامة لضمان أقصى درجات الأمان.",
      img: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-luxury-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            ماذا نقدم
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            خدماتنا <span className="italic gold-text-gradient">الفاخرة</span>
          </motion.h1>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-luxury-black/40 group-hover:bg-luxury-black/20 transition-colors"></div>
                <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center text-gold shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
                <button className="mt-8 text-gold font-bold text-sm tracking-widest uppercase border-b border-transparent hover:border-gold transition-all">
                  اعرف المزيد
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
