export interface BlogPost {
    slug: string;       // Identificador único del post
    title: string;      // Título del post
    content: string;    // Contenido del post (puede ser markdown o HTML)
    date: string;       // Fecha de publicación
    excerpt: string;    // Resumen del post
    image: string;      // Imagen destacada
  }
  
  export const blogPosts: BlogPost[] = [
    {
      slug: 'primer-post',
      title: 'Mi Primer Post',
      content: 'Este es el contenido de mi primer post. ¡Bienvenido al blog!',
      date: '2023-10-01',
      excerpt: 'Un resumen corto del primer post.',
      image: '/images/blog/post1.png',
    },
    {
      slug: 'segundo-post',
      title: 'Aprendiendo Next.js',
      content: 'En este post, exploramos las características de Next.js.',
      date: '2023-10-05',
      excerpt: 'Un resumen corto sobre Next.js.',
      image: '/images/blog/post2.jpg',
    },
    {
      slug: 'tercer-post',
      title: 'Testeando en Next.js',
      content: 'En este post, exploramos las características de Next.js.',
      date: '2023-10-05',
      excerpt: 'Un resumen corto sobre Next.js.',
      image: '/images/blog/post2.jpg',
    },
    {
      slug: 'primer-post',
      title: 'Mi Primer Post',
      content: 'Este es el contenido de mi primer post. ¡Bienvenido al blog!',
      date: '2023-10-01',
      excerpt: 'Un resumen corto del primer post.',
      image: '/images/blog/post1.png',
    },
    {
      slug: 'segundo-post',
      title: 'Aprendiendo Next.js',
      content: 'En este post, exploramos las características de Next.js.',
      date: '2023-10-05',
      excerpt: 'Un resumen corto sobre Next.js.',
      image: '/images/blog/post2.jpg',
    },
    {
      slug: 'tercer-post',
      title: 'Testeando en Next.js',
      content: 'En este post, exploramos las características de Next.js.',
      date: '2023-10-05',
      excerpt: 'Un resumen corto sobre Next.js.',
      image: '/images/blog/post2.jpg',
    },
    {
      slug: 'primer-post',
      title: 'Mi Primer Post',
      content: 'Este es el contenido de mi primer post. ¡Bienvenido al blog!',
      date: '2023-10-01',
      excerpt: 'Un resumen corto del primer post.',
      image: '/images/blog/post1.png',
    },
    {
      slug: 'segundo-post',
      title: 'Aprendiendo Next.js',
      content: 'En este post, exploramos las características de Next.js.',
      date: '2023-10-05',
      excerpt: 'Un resumen corto sobre Next.js.',
      image: '/images/blog/post2.jpg',
    },
    {
      slug: 'tercer-post',
      title: 'Testeando en Next.js',
      content: 'En este post, exploramos las características de Next.js.',
      date: '2023-10-05',
      excerpt: 'Un resumen corto sobre Next.js.',
      image: '/images/blog/post2.jpg',
    },
  ];