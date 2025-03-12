interface Project {
  id: number
  title: string;
  description: string;
  image: string;
  text: string;
}

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  date: string;
  excerpt: string;
  image: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: Category;
}

interface Footer {
  about: string;
  contact: Contact;
  socials: Socials;
  year: number;
}
interface Contact {
  email: string;
  phone: string;
  address: string;
}

interface Socials {
  facebook: string;
  instagram: string;
  linkedin: string;
}

