import logo from '../assets/logo.png';

const footerGroups = [
    {
        title: 'Product',
        links: [
            { label: 'Home', href: '#home' },
            { label: 'Technologies', href: '#technologies' },
            { label: 'Projects', href: '#projects' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
            { label: 'Careers', href: '#careers' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { label: 'Privacy Policy', href: '#privacy' },
            { label: 'Terms of Service', href: '#terms' },
        ],
    },
];

const socialLinks = [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
];

export const Footer = () => {
    return (
        <footer className="mt-8 border-t border-slate-200 bg-white sm:mt-16" aria-label="Footer">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 py-7 text-center sm:grid-cols-4 sm:gap-10 sm:px-8 sm:py-12 sm:text-left lg:px-10">
                <div className="mx-auto max-w-xs sm:mx-0">
                    <a href="#home" className="inline-flex" aria-label="DevStack home">
                        <img src={logo} alt="DevStack" className="h-10 w-auto shrink-0" />
                    </a>
                    <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-slate-500 sm:mt-3 sm:text-sm sm:leading-6">
                        Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>
                    <ul className="mt-3 flex list-inside list-disc justify-center gap-4 text-xs font-semibold text-slate-800 sm:list-none sm:justify-start">
                        {socialLinks.map((link, index) => (
                            <li key={link.label} className={index === 0 ? 'list-none' : undefined}>
                                <a href={link.href} target="_blank" className="transition-colors hover:text-orange-500">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {footerGroups.map((group) => (
                    <div key={group.title} className="hidden text-left sm:block">
                        <h2 className="text-xs font-extrabold uppercase tracking-wide text-slate-900">{group.title}</h2>
                        <ul className="mt-4 space-y-3">
                            {group.links.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-slate-500 transition-colors hover:text-orange-500">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="border-t border-slate-100 p-5 sm:p-8">
                <div className="mx-auto flex max-w-7xl flex-row items-center justify-between gap-3 px-4 py-3 text-left text-[11px] text-slate-400 sm:px-8 sm:py-4 sm:text-xs lg:px-10">
                    <p>&copy; 2026 DevStack. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#privacy" className="transition-colors hover:text-orange-500">Privacy</a>
                        <a href="#terms" className="transition-colors hover:text-orange-500">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
