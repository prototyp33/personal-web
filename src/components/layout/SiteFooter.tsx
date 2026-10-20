import { site } from "../../content/site";

export function SiteFooter() {
  return (
    <footer className="socials">
      <h2 className="sr-only">Social links</h2>
      <ul>
        {site.socials.map((social) => (
          <li key={social.label}>
            {social.href ? (
              <a href={social.href} rel="noreferrer" target="_blank">
                {social.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <span className="social-pending">
                {social.label}
                <span className="social-note">Pending</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </footer>
  );
}
