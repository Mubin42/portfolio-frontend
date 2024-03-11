import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IconType } from 'react-icons';

export type NavIconsType = {
	title: string;
	icon: IconType;
	href: string;
};

export const navIcons: NavIconsType[] = [
	{ title: 'Github', icon: FaGithub, href: 'https://github.com/Mubin42' },
	{ title: 'Linkedin', icon: FaLinkedin, href: 'https://www.linkedin.com/in/kazi-mubin/' },
	{ title: 'Facebook', icon: FaFacebook, href: 'https://www.facebook.com/kaziehsanul.mubin.56/' },
	{ title: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/kaazi_mubin/' },
];
