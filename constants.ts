import { BrandProfile, CalendarDay, ShoppingItem } from './types';

export const BRAND_PROFILES: BrandProfile[] = [
  {
    name: "Isabella Noir",
    tagline: "Elegancia que susurra, no grita.",
    description: "Una mujer de mundo, culta y misteriosa. Disfruta del arte, el vino tinto y la lencería de seda. Su atractivo radica en lo que oculta, no en lo que muestra.",
    colors: ["#0f0f12 (Negro Profundo)", "#d4af37 (Oro Viejo)", "#4a0404 (Vino Tinto)"],
    vibe: ["Sofisticada", "Misteriosa", "Cultivada", "Sensual"]
  },
  {
    name: "Elena Silk",
    tagline: "Tu secreto mejor guardado.",
    description: "La confidente perfecta. Una presencia suave, maternal pero profundamente seductora. Transmite calma, lujo y una intimidad exclusiva.",
    colors: ["#2d2424 (Chocolate Oscuro)", "#e8dcca (Champagne)", "#b76e79 (Rosa Antiguo)"],
    vibe: ["Suave", "Íntima", "Lujosa", "Cálida"]
  },
  {
    name: "Victoria Velvet",
    tagline: "Clase atemporal.",
    description: "Empoderada, segura de su cuerpo y su edad. Muestra la belleza de la madurez con orgullo y una mirada desafiante pero invitadora.",
    colors: ["#1a237e (Azul Noche)", "#c0c0c0 (Plata)", "#000000 (Negro)"],
    vibe: ["Segura", "Poderosa", "Directa", "Elegante"]
  }
];

export const CALENDAR_DATA: CalendarDay[] = [
  { day: 1, title: "La Silueta", type: "Gratis", description: "Foto a contraluz frente a una ventana. Solo se ve la forma del cuerpo.", copy: "Algunas historias se cuentan mejor en sombras..." },
  { day: 2, title: "Detalle de Encaje", type: "Premium", description: "Close-up a la textura de lencería sobre la piel (hombro o muslo).", copy: "La suavidad que mereces tocar." },
  { day: 3, title: "Hora del Café", type: "Gratis", description: "Bata de seda, taza de café, piernas cruzadas sutilmente.", copy: "Buenos días. ¿Cómo tomas tu café?" },
  { day: 4, title: "La Mirada", type: "Gratis", description: "Selfie de rostro, maquillaje impecable, mirada intensa a cámara.", copy: "Sé que me estás mirando." },
  { day: 5, title: "Viernes de Vino", type: "Premium", description: "Video corto (5s) sirviendo vino, escote sugerido pero elegante.", copy: "Brindemos por los secretos que compartimos." },
  { day: 6, title: "Lectura Nocturna", type: "Gratis", description: "Foto leyendo un libro en la cama, cubrida con sábana.", copy: "Mi plan de sábado. ¿Te unes?" },
  { day: 7, title: "Spa Day", type: "Premium", description: "En la bañera, mucha espuma, solo hombros y piernas visibles.", copy: "Relajación total. Ojalá estuvieras aquí." },
  { day: 8, title: "Lunes de Poder", type: "Gratis", description: "Outfit de oficina (blazer) pero con lencería asomando sutilmente.", copy: "Quién dice que los lunes son aburridos?" },
  { day: 9, title: "El Accesorio", type: "Gratis", description: "Foto poniéndose un collar o pendientes. Foco en el cuello.", copy: "Los detalles importan." },
  { day: 10, title: "Teaser de Video", type: "Gratis", description: "GIF borroso o cortado de un video exclusivo.", copy: "Lo que te espera en el VIP..." },
  { day: 11, title: "Lencería Roja", type: "Premium", description: "Set completo rojo, pose clásica en sillón.", copy: "El color de la pasión nunca pasa de moda." },
  { day: 12, title: "Pregunta", type: "Gratis", description: "Foto casual sonriendo. Pregunta para interacción.", copy: "¿Qué es lo primero que notas en una mujer?" },
  { day: 13, title: "Tacones Altos", type: "Gratis", description: "Foto a nivel de suelo de zapatos de tacón y tobillos.", copy: "Caminando hacia ti." },
  { day: 14, title: "En el Espejo", type: "Premium", description: "Foto de reflejo en el espejo, cuerpo entero, pose elegante.", copy: "Tu vista favorita." },
  { day: 15, title: "Mitad de Mes", type: "Gratis", description: "Agradecimiento a los fans con una foto tirando un beso.", copy: "Gracias por estar aquí, mis amores." },
  { day: 16, title: "Cena Romántica", type: "Gratis", description: "Foto de dos copas y ambiente, POV (Point of View) cita.", copy: "Tu asiento está reservado." },
  { day: 17, title: "Desabrochando", type: "Premium", description: "Video loop (3s) bajando un tirante o desabrochando un botón.", copy: "La anticipación es la mejor parte." },
  { day: 18, title: "Piernas", type: "Gratis", description: "Foto de piernas con medias de red o lisas.", copy: "Un clásico." },
  { day: 19, title: "Labios Rojos", type: "Gratis", description: "Extreme close-up a los labios.", copy: "Shhh..." },
  { day: 20, title: "Sábanas Blancas", type: "Premium", description: "Foto artística entre sábanas blancas, piel contrastante.", copy: "Pureza y tentación." },
  { day: 21, title: "Throwback", type: "Gratis", description: "Foto de juventud o de un viaje elegante.", copy: "Recordando París..." },
  { day: 22, title: "La Espalda", type: "Gratis", description: "Vestido con espalda descubierta.", copy: "A veces hay que dar la espalda para que te sigan." },
  { day: 23, title: "Voz Suave", type: "Premium", description: "Nota de voz deseando buenas noches (Audio).", copy: "Cierra los ojos y escucha." },
  { day: 24, title: "Negro Total", type: "Gratis", description: "Outfit completamente negro, elegante.", copy: "Black is the new black." },
  { day: 25, title: "Bailando", type: "Premium", description: "Video bailando lento una canción de jazz.", copy: "Baila conmigo." },
  { day: 26, title: "Manos", type: "Gratis", description: "Foto de las manos con manicura perfecta sobre la piel.", copy: "El tacto lo es todo." },
  { day: 27, title: "Luz de Vela", type: "Gratis", description: "Iluminación solo con velas.", copy: "Ambiente creado." },
  { day: 28, title: "Transparencias", type: "Premium", description: "Blusa con transparencia sutil, nada explícito.", copy: "Veo que me ves." },
  { day: 29, title: "Q&A", type: "Gratis", description: "Foto invitando a preguntas en comentarios.", copy: "Soy un libro abierto... en ciertas páginas." },
  { day: 30, title: "La Gran Final", type: "Premium", description: "La mejor foto del mes, producción completa.", copy: "Guardé lo mejor para el final." },
];

export const SHOPPING_LIST: ShoppingItem[] = [
  {
    category: "Iluminación (Lo más importante)",
    items: [
      { name: "Aro de luz (Ring Light) 18 pulgadas", price: "$30 - $50", tip: "Esencial para suavizar arrugas y dar brillo a los ojos." },
      { name: "Lámpara Sunset (Atardecer)", price: "$10 - $15", tip: "Crea una atmósfera dorada y cálida instantánea en cualquier pared blanca." },
      { name: "Velas LED recargables", price: "$15", tip: "Seguridad y ambiente romántico sin riesgo de incendio." }
    ]
  },
  {
    category: "Ropa y Accesorios",
    items: [
      { name: "Bata de satén (Seda sintética)", price: "$15 - $20", tip: "Busca colores como esmeralda, rubí o negro. Se ve muy caro en cámara." },
      { name: "Juego de lencería de encaje (Negro)", price: "$20 - $30", tip: "El negro es elegante y adelgaza visualmente." },
      { name: "Collar de perlas (Fantasía)", price: "$5 - $10", tip: "Añade sofisticación instantánea a cualquier foto desnuda o semidesnuda." },
      { name: "Camisa blanca de hombre (Oversize)", price: "$15", tip: "Clásico fetiche, sugiere que te quedaste a dormir." }
    ]
  },
  {
    category: "Escenografía Casera",
    items: [
      { name: "Sábanas blancas lisas", price: "$20", tip: "Funcionan como reflector natural y dan look de hotel." },
      { name: "Espejo de cuerpo entero", price: "$20 - $40", tip: "Limpialo siempre antes de fotos. Básico para selfies." },
      { name: "Copa de vino grande", price: "$5", tip: "Utilería perfecta para ocupar las manos." }
    ]
  }
];