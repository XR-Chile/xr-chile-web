export interface Footer {
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

const contact: Contact = {
    email: 'example@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA'
}
const socials: Socials = {
    facebook: 'https://www.facebook.com/example',
    instagram: 'https://www.instagram.com/example',
    linkedin: 'https://www.linkedin.com/in/example'
}
export const footer: Footer = {
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum nibh, lacinia vel velit vitae, lacinia eleifend nulla. Donec massa metus, facilisis sed diam eget, fermentum porttitor felis. Donec pretium hendrerit placerat. Vivamus mollis libero at ligula luctus pharetra. Morbi ac purus lorem. Curabitur vel egestas leo. Ut placerat non magna ut venenatis. Cras id blandit odio. Integer a varius nibh, id rhoncus sem. Cras ultrices lorem quis egestas ultrices. Sed non ullamcorper leo. Fusce non justo lorem. Nam justo odio, malesuada ac ante ultricies, lobortis tincidunt sem. Etiam congue eget lacus quis posuere. Aenean in enim sed tellus eleifend mollis ut in elit.',
    contact,
    socials,
    year: 2024
}