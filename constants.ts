import { MenuItemType, SideItemType, DrinkItemType } from './types';

export const SMASH_BURGERS: MenuItemType[] = [
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

export const GOURMET_BURGERS: MenuItemType[] = [
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

export const SIDES: SideItemType[] = [
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

export const DRINKS: DrinkItemType[] = [
    { name: 'Coca-Cola / Zero / Light', price: '2,50 €' },
    { name: 'Fanta Naranja / Limón', price: '2,50 €' },
    { name: 'Agua Mineral', price: '2,00 €' },
    { name: 'Cerveza de Barril', price: '3,00 €' },
    { name: 'Cerveza Artesanal IPA', price: '4,50 €' },
    { name: 'Cerveza Artesanal Stout', price: '4,50 €' },
    { name: 'Vino Tinto de la Casa', price: '3,50 €' },
    { name: 'Limonada Casera', price: '3,50 €' },
];

export const CONTACT_INFO = {
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