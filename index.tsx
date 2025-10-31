import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// --- TYPES (from types.ts) ---
interface MenuItemType {
  name: string;
  description: string;
  price: string;
  image: string;
  special?: boolean;
  type: 'SMASH' | 'GOURMET';
}

interface SideItemType {
    name: string;
    price: string;
}

interface DrinkItemType {
    name: string;
    price: string;
}

// --- CONSTANTS (from constants.ts) ---
const SMASH_BURGERS: MenuItemType[] = [
  {
    name: 'La Clásica Fundida',
    description: 'Doble carne, doble queso americano, pepinillos encurtidos, cebolla fresca, y salsa de la casa.',
    price: '8,90 €',
    image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'SMASH',
  },
  {
    name: 'La Bacon Jam Ahumada',
    description: 'Doble carne, queso cheddar, crujiente bacon y nuestra mermelada de bacon ahumada.',
    price: '10,50 €',
    image: 'https://images.pexels.com/photos/13999402/pexels-photo-13999402.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'SMASH',
  },
  {
    name: 'La Picante Diablo',
    description: 'Doble carne, queso Pepper Jack, jalapeños en rodajas, cebolla caramelizada y salsa Sriracha-mayo.',
    price: '9,90 €',
    image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'SMASH',
  },
  {
    name: 'La Americana Cerveza',
    description: 'Doble carne, doble queso cheddar, mostaza antigua, pepinillos y un glaseado de reducción de cerveza negra.',
    price: '10,90 €',
    image: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'SMASH',
  },
  {
    name: 'La EduSmash',
    description: 'Doble carne, queso gouda añejo, cebolla frita en juliana y nuestra exclusiva salsa de pimientos ahumados.',
    price: '11,50 €',
    image: 'https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=800',
    special: true,
    type: 'SMASH',
  },
];

const GOURMET_BURGERS: MenuItemType[] = [
  {
    name: 'La Trufa Deluxe',
    description: 'Patty 180g, queso provolone, champiñones salteados y una suave mayonesa de trufa negra.',
    price: '12,90 €',
    image: 'https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'GOURMET',
  },
  {
    name: 'La Ajo Negro Gourmet',
    description: 'Patty 180g, queso de cabra, rúcula fresca y mayonesa de ajo negro fermentado.',
    price: '11,90 €',
    image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'GOURMET',
  },
  {
    name: 'La Tex-Mex BBQ',
    description: 'Patty 180g, queso Monterey Jack, aros de cebolla crujientes y salsa BBQ dulce y picante.',
    price: '10,50 €',
    image: 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'GOURMET',
  },
  {
    name: 'La Cítrica de Limón',
    description: 'Patty 180g, queso suizo, un toque de ralladura de limón, cebolla roja y salsa de albahaca fresca.',
    price: '11,20 €',
    image: 'https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'GOURMET',
  },
  {
    name: 'La Vegetariana',
    description: 'Patty de lentejas y setas, queso vegano, lechuga, tomate y salsa tártara de aguacate.',
    price: '9,50 €',
    image: 'https://images.pexels.com/photos/1484674/pexels-photo-1484674.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'GOURMET',
  },
];

const SIDES: SideItemType[] = [
    { name: 'Patatas Fritas Clásicas', price: '3,50 €' },
    { name: 'Patatas Gajo con Piel', price: '4,00 €' },
    { name: 'Batatas Fritas', price: '4,50 €' },
    { name: 'Aros de Cebolla Crujientes', price: '5,00 €' },
    { name: 'Tequeños de Queso (5ud)', price: '6,50 €' },
    { name: 'Alitas de Pollo BBQ', price: '7,00 €' },
    { name: 'Nachos con Queso y Jalapeños', price: '8,50 €' },
    { name: 'Ensalada Coleslaw', price: '3,00 €' },
    { name: 'Mazorca de Maíz a la Parrilla', price: '4,00 €' },
    { name: 'Pimientos de Padrón', price: '5,50 €' },
];

const DRINKS: DrinkItemType[] = [
    { name: 'Coca-Cola / Zero / Light', price: '2,50 €' },
    { name: 'Fanta Naranja / Limón', price: '2,50 €' },
    { name: 'Agua Mineral', price: '2,00 €' },
    { name: 'Cerveza de Barril', price: '3,00 €' },
    { name: 'Cerveza Artesanal IPA', price: '4,50 €' },
    { name: 'Cerveza Artesanal Stout', price: '4,50 €' },
    { name: 'Vino Tinto de la Casa', price: '3,50 €' },
    { name: 'Limonada Casera', price: '3,50 €' },
];

const CONTACT_INFO = {
    address: 'C/ del Fuego, 15, 25001 Lleida',
    phone: '627300599',
    phone_formatted: '+34627300599',
    whatsapp_link: 'https://wa.me/34627300599',
    opening_hours: [
        { day: 'Lunes', hours: 'Cerrado' },
        { day: 'Martes - Jueves', hours: '19:00 - 23:00' },
        { day: 'Viernes - Sábado', hours: '13:00 - 16:00, 19:00 - 00:00' },
        { day: 'Domingo', hours: '13:00 - 16:00, 19:00 - 23:00' },
    ],
};


// --- COMPONENTS (from components/*.tsx) ---

// Button.tsx
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  className?: string;
  [x: string]: any; 
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold font-anton tracking-wider uppercase rounded-md transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black';
  const sizeStyles = { md: 'px-6 py-2 text-sm', lg: 'px-10 py-4 text-base' };
  const variantStyles = {
    primary: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    secondary: 'bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
  };
  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  if (href) {
    return <a href={href} className={combinedClasses} {...props}>{children}</a>;
  }
  return <button type={type} onClick={onClick} className={combinedClasses} {...props}>{children}</button>;
};

// MenuItem.tsx
interface MenuItemProps {
  item: MenuItemType;
}
const CrownIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 2a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L10 13.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.192L2.14 8.124a.75.75 0 01.416-1.28l4.21-.612L8.327 2.42A.75.75 0 0110 2z" />
    </svg>
);
const MenuItem: React.FC<MenuItemProps> = ({ item }) => (
    <div className="bg-gray-900/50 border border-gray-700 rounded-lg flex flex-col hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-xl font-bold text-white pr-4">{item.name}</h4>
            <span className="text-xl font-anton text-yellow-400 flex-shrink-0">{item.price}</span>
          </div>
          {item.special && (
            <div className="flex items-center gap-2 mb-3 text-yellow-400 font-bold">
                <CrownIcon />
                <span>Nuestra Especialidad</span>
            </div>
          )}
          <p className="text-gray-400 flex-grow mb-4">{item.description}</p>
          <div className="mt-auto">
            <span className={`text-xs font-bold py-1 px-2 rounded-full ${item.type === 'SMASH' ? 'bg-red-700/50 text-red-200' : 'bg-blue-700/50 text-blue-200'}`}>
                {item.type}
            </span>
          </div>
      </div>
    </div>
);

// Header.tsx
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 10); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-3xl font-anton text-yellow-400 tracking-wider">EduSmash</a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">Menú</a>
            <a href="#contact" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">Local</a>
            <a href="#order" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">Reservas</a>
          </nav>
          <div className="flex items-center">
            <Button href={CONTACT_INFO.whatsapp_link} target="_blank" rel="noopener noreferrer">¡Pide Ya!</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero.tsx
const Hero: React.FC = () => (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black z-0">
        <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Juicy EduSmash burger" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-anton mb-4 tracking-wide text-shadow">EduSmash: <span className="text-yellow-400">La Costra</span> es el Secreto.</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200">Experimenta la caramelización perfecta en cada bocado. Sabor intenso, carne jugosa y la costra que lo cambia todo.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#menu" variant="secondary" size="lg">Ver Menú</Button>
          <Button href={CONTACT_INFO.whatsapp_link} size="lg" target="_blank" rel="noopener noreferrer">¡Pide Ya!</Button>
        </div>
      </div>
    </section>
);

// Menu.tsx
const MenuSectionHeader: React.FC<{ title: string, subtitle: string }> = ({ title, subtitle }) => (
    <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-anton text-yellow-400">{title}</h2>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">{subtitle}</p>
    </div>
);
const Menu: React.FC = () => (
    <section id="menu" className="py-20 md:py-28 bg-[#111111] bg-cover bg-center" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-denim-3.png')"}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MenuSectionHeader title="5 Smash Épicas" subtitle="La magia está en la costra. Doble carne de 80g cada una, aplastada en la plancha para una caramelización y sabor inigualables." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SMASH_BURGERS.map((item: MenuItemType) => <MenuItem key={item.name} item={item} />)}
        </div>
        <MenuSectionHeader title="5 Hamburguesas Gourmet" subtitle="Para los paladares más exigentes. Un generoso patty de 180g de carne premium, cocinado con mimo al punto que tú elijas." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {GOURMET_BURGERS.map((item: MenuItemType) => <MenuItem key={item.name} item={item} />)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div>
                <h3 className="text-3xl font-anton text-center mb-8 text-yellow-400">Para Picar</h3>
                <ul className="space-y-4">
                    {SIDES.map(side => (<li key={side.name} className="flex justify-between border-b border-dashed border-gray-600 pb-2"><span className="text-gray-200">{side.name}</span><span className="font-bold text-yellow-400">{side.price}</span></li>))}
                </ul>
            </div>
            <div>
                <h3 className="text-3xl font-anton text-center mb-8 text-yellow-400">Bebidas</h3>
                <ul className="space-y-4">
                    {DRINKS.map(drink => (<li key={drink.name} className="flex justify-between border-b border-dashed border-gray-600 pb-2"><span className="text-gray-200">{drink.name}</span><span className="font-bold text-yellow-400">{drink.price}</span></li>))}
                </ul>
            </div>
        </div>
      </div>
    </section>
);

// Contact.tsx
const Contact: React.FC = () => (
    <section id="contact" className="py-20 md:py-28 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-anton text-yellow-400">Encuéntranos</h2>
            <p className="text-gray-300 mt-2">Ven a por tu smash. Te esperamos.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">EduSmash Lleida</h3>
                <div className="space-y-4 text-lg">
                    <div className="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg><span>{CONTACT_INFO.address}</span></div>
                    <div className="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><a href={`tel:${CONTACT_INFO.phone_formatted}`} className="hover:text-yellow-400 transition-colors">{CONTACT_INFO.phone}</a></div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-700">
                    <h4 className="text-xl font-bold mb-4 text-white">Horario</h4>
                    <ul className="space-y-2">{CONTACT_INFO.opening_hours.map(item => (<li key={item.day} className="flex justify-between"><span className="text-gray-300">{item.day}</span><span className="font-semibold text-gray-100">{item.hours}</span></li>))}</ul>
                </div>
            </div>
            <div className="h-96 lg:h-full rounded-lg overflow-hidden border-2 border-gray-700">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.291102917781!2d0.6213903154388048!3d41.61568597924294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a6e0934c9c1e7d%3A0x6b2b7123a105527a!2sCarrer%20Major%2C%2025007%20Lleida!5e0!3m2!1ses!2ses!4v1678886400000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación de EduSmash"></iframe>
            </div>
        </div>
      </div>
    </section>
);

// Order.tsx
const Order: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', guests: '2', date: '', time: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Reservation Data:', formData);
    setSubmitted(true);
  };
  return (
    <section id="order" className="relative py-20 md:py-28 bg-cover bg-center bg-fixed" style={{backgroundImage: "url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}>
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-anton text-yellow-400">Pedidos y Reservas</h2>
            <p className="text-gray-200 mt-2 max-w-2xl mx-auto">¿Listo para la experiencia EduSmash? Pide para llevar o asegura tu mesa.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 text-center h-full flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-white">Pide para llevar</h3>
                <p className="text-gray-300 mb-8 text-lg">Haz tu pedido directamente por WhatsApp. Rápido, fácil y sin complicaciones. ¡Te lo preparamos al momento!</p>
                <Button href={CONTACT_INFO.whatsapp_link} size="lg" className="w-full" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H17z" /></svg>Pedir por WhatsApp</Button>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
                <h3 className="text-3xl font-bold mb-6 text-center text-white">Reserva tu mesa</h3>
                {submitted ? (
                  <div className="text-center py-10">
                    <h4 className="text-2xl font-bold text-yellow-400">¡Gracias!</h4>
                    <p className="text-gray-200 mt-2">Hemos recibido tu solicitud de reserva. Te contactaremos pronto para confirmar.</p>
                     <button onClick={() => setSubmitted(false)} className="mt-6 text-yellow-400 hover:underline">Hacer otra reserva</button>
                  </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div><label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nombre</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-yellow-400 focus:border-yellow-400" /></div>
                    <div><label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Teléfono</label><input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-yellow-400 focus:border-yellow-400" /></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <div><label htmlFor="guests" className="block text-sm font-medium text-gray-300 mb-1">Personas</label><select id="guests" name="guests" value={formData.guests} onChange={handleChange} className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-yellow-400 focus:border-yellow-400">{[...Array(8)].map((_, i) => <option key={i+1} value={i+1}>{i+1} persona{i > 0 ? 's' : ''}</option>)}</select></div>
                        <div><label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">Fecha</label><input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-yellow-400 focus:border-yellow-400" /></div>
                    </div>
                     <div><label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-1">Hora</label><input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-yellow-400 focus:border-yellow-400" /></div>
                    <Button type="submit" className="w-full" variant="secondary">Reservar Mesa</Button>
                </form>
                 )}
            </div>
        </div>
      </div>
    </section>
  );
};

// Footer.tsx
const Footer: React.FC = () => (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} EduSmash Burger Co. Todos los derechos reservados.</p>
        <p className="text-sm mt-1">Diseñado con pasión por el Smash.</p>
      </div>
    </footer>
);


// --- APP (from App.tsx) ---
const App: React.FC = () => (
    <div className="bg-[#111111] min-h-screen">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Contact />
        <Order />
      </main>
      <Footer />
    </div>
);

// --- RENDER LOGIC (from original index.tsx) ---
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
