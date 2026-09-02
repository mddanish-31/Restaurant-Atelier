import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { Flame } from 'lucide-react';
import { NAV_LINKS } from '@/data/navigation';
import { FOOD_CATEGORIES } from '@/data/categories';

const DISCOVER_SLUGS = ['italian', 'indian', 'japanese', 'mediterranean', 'asian', 'desserts'];

export function Footer() {
  const prefersReducedMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const discoverCategories = FOOD_CATEGORIES.filter((c) => DISCOVER_SLUGS.includes(c.slug));
  const exploreLinks = NAV_LINKS.filter((l) => l.path !== '/');

  const linkClass =
    'group inline-flex items-center gap-1 text-sm text-muted transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-sm';

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={container}
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <motion.div variants={item} className="max-w-xs">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-display text-xl text-foreground focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-sm"
            >
              <Flame size={20} strokeWidth={1.75} className="text-primary" />
              Ember &amp; Oak
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Good food is closer than you think. We help you find the kitchens worth knowing.
            </p>
          </motion.div>

          <motion.nav variants={item} aria-labelledby="footer-explore">
            <h3
              id="footer-explore"
              className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-foreground/60"
            >
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav variants={item} aria-labelledby="footer-discover">
            <h3
              id="footer-discover"
              className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-foreground/60"
            >
              Discover
            </h3>
            <ul className="mt-4 space-y-3">
              {discoverCategories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/menu?category=${cat.slug}`} className={linkClass}>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div variants={item} aria-labelledby="footer-connect">
            <h3
              id="footer-connect"
              className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-foreground/60"
            >
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/restaurants" className={linkClass}>
                  Find a Table
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© 2026 Ember &amp; Oak</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="transition-colors duration-200 hover:text-primary">
              Privacy
            </Link>
            <span aria-hidden="true" className="text-border">
              ·
            </span>
            <Link to="/terms" className="transition-colors duration-200 hover:text-primary">
              Terms
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}