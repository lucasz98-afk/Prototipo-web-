import { NavItem, VehicleModel, StockVehicle } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Nuestros Modelos', href: '#modelos' },
  { label: 'Furgonetas en Stock', href: '#stock' },
  { label: 'Alquiler y Transportistas', href: '#alquiler' },
  { label: '¿Quiénes Somos?', href: '#about' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

export const MODELS: VehicleModel[] = [
  {
    id: 'haras',
    name: 'AML Haras',
    tagline: 'Excelencia y Prestigio',
    description: 'Modelo de gama alta para profesionales. Manejabilidad, confort, robustez, precio.',
    image: 'https://www.carrosserie-ameline.com/wp-content/uploads/2025/09/aml-haras-2025.jpg',
    features: ['Gama Alta', 'Robustez Superior', 'Diseño Pro']
  },
  {
    id: 'select',
    name: 'AML Select',
    tagline: 'Confort Absoluto',
    description: 'Modelo que ofrece el mejor confort para los caballos. Elegancia, comodidad y robustez.',
    image: 'https://www.carrosserie-ameline.com/wp-content/uploads/2023/11/Plan-de-travail-3.jpg', 
    features: ['Elegancia', 'Máximo Confort', 'Seguridad']
  },
  {
    id: 'ecostar',
    name: 'AML Ecostar',
    tagline: 'Práctico y Eficiente',
    description: 'Nuestro modelo básico. Práctico, robusto y asequible.',
    image: 'https://www.carrosserie-ameline.com/wp-content/uploads/2023/08/Plan-de-travail-1.jpg',
    features: ['Económico', 'Práctico', 'Duradero']
  }
];

export const STOCK_VEHICLES: StockVehicle[] = [
  {
    id: 'st-001',
    title: 'Furgoneta para caballos 3 plazas Renault Master con carnet B',
    price: '64.000,00 €',
    condition: 'Nuevo',
    specs: {
      engine: 'Renault master 170 CV',
      fuel: 'Diesel',
      transmission: 'Manual',
      mileage: '10 km',
      seats: 3
    },
    features: [
      'Sistema de Carplay',
      'Radio – Conexión Bluetooth',
      'Limitador de velocidad',
      'Estado: Nuevo'
    ],
    image: 'https://www.carrosserie-ameline.com/wp-content/uploads/2025/09/Photoroom_20250918_095306-500x375.jpeg' 
  },
  {
    id: 'st-002',
    title: 'Furgoneta para caballos 5 plazas Renault master con carnet B',
    price: '73.000,00 €',
    condition: 'Nuevo',
    specs: {
      engine: 'Renault master 170 CV',
      fuel: 'Diesel',
      transmission: 'Manual',
      mileage: '10 km',
      seats: 5
    },
    features: [
      'Sistema de navegación',
      'Radio – Conexión Bluetooth',
      'Limitador de velocidad',
      'Asiento de cuero sintetico'
    ],
    image: 'https://www.carrosserie-ameline.com/wp-content/uploads/2024/05/Photoroom_20250520_102156.jpeg'
  },
  {
    id: 'st-003',
    title: 'Furgoneta semi nueva para 2 caballos de 3 plazas',
    price: '44.500,00 €',
    condition: 'Segundamano',
    specs: {
      engine: 'Renault master 170 CV',
      fuel: 'Diesel',
      transmission: 'Automatico',
      mileage: '117.000 km',
      seats: 3
    },
    features: [
        'Radio – Conexión Bluetooth',
        'Limitador de velocidad',
        'Asiento de tela',
        'Estado: segundamano'
    ],
    image: 'https://www.carrosserie-ameline.com/wp-content/uploads/2024/11/IMG_3714-scaled.jpg'
  }
];

export const EXPERIENCES = [
  {
    title: 'CONFORT Y SEGURIDAD',
    description: 'La producción se basa en un conjunto profesional de materiales de primera calidad. Seguridad del chasis.'
  },
  {
    title: 'UN EQUIPO TÉCNICO',
    description: 'Realizado exclusivamente por nuestro equipo técnico, así como los diseños altamente cualificados.'
  },
  {
    title: 'RESISTENCIA Y RIGIDEZ',
    description: 'Marcos de rigidez del chasis de seguridad, calidad de soldadura y montajes son imprescindible.'
  }
];

export const DISTRIBUTORS = [
  { name: 'CARROSSERIE AMELINE', country: 'España', address: 'Calle la Bisbal nº14, Polígono industrial de Vilamalla', url: 'https://www.carrosserie-ameline.com/' },
  { name: 'STARTERRE EQUESTRE', country: 'Francia', address: '33 Boulevard Lucien Sampaix, 69190 Saint-Fons', url: 'https://www.starterre-equestre.fr/' },
  { name: 'XTREME CARGO AB', country: 'Suecia', address: 'Sweden', url: 'https://www.xtremecargo.se/' },
];

export const ASSETS = {
  logo: 'https://www.carrosserie-ameline.com/wp-content/uploads/2023/08/carrosserie-ameline-logo-1.png',
  heroVideo: 'https://www.carrosserie-ameline.com/wp-content/uploads/2023/08/video-ameline-carrosserie-home.mp4',
  aboutImage: 'https://www.carrosserie-ameline.com/wp-content/uploads/2023/11/notre-usine-camions-chevaux-e1762379836109.jpg'
};