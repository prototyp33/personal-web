import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site } from "../../content/site";
import { SiteFooter } from "../layout/SiteFooter";
import { SiteHeader } from "../layout/SiteHeader";
import { Bloom, PortraitPlate, ProjectPlate } from "./marks";

const [featured, ...otherProjects] = site.projects;

export function HomeBento() {
  if (!featured) {
    return null;
  }

  return (
    <div className="shell">
      <SiteHeader />
      <main id="content" className="bento">
        <section className="hero" aria-labelledby="statement">
          <Bloom className="bloom" />
          <h2 id="statement" className="statement">
            {site.headline.map((line) => (
              <span
                key={line.text}
                className={
                  line.style === "italic" ? "statement-italic" : "statement-bold"
                }
              >
                {line.text}
              </span>
            ))}
          </h2>
        </section>

        <figure className="portrait">
          {site.portrait.src ? (
            <Image
              src={site.portrait.src}
              alt={site.portrait.alt}
              fill
              sizes="(max-width: 860px) 100vw, 320px"
              className="portrait-photo"
              priority
            />
          ) : (
            <PortraitPlate />
          )}
        </figure>

        <section className="projects" id="projects" aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="sr-only">
              Projects
            </h2>
            <ol className="project-list">
              <li className="project-featured">
                <a
                  className="project-link"
                  href={featured.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="project-heading">
                    <h3 className="project-title">{featured.title}</h3>
                    <ArrowUpRight className="project-arrow" aria-hidden="true" size={20} />
                  </div>
                  <p className="project-copy">{featured.description}</p>
                  <div className="project-preview">
                    {featured.preview ? (
                      <Image
                        src={featured.preview}
                        alt={featured.previewAlt}
                        fill
                        sizes="(max-width: 860px) 100vw, 360px"
                      />
                    ) : (
                      <ProjectPlate />
                    )}
                  </div>
                  <span className="sr-only">Opens the GitHub repository</span>
                </a>
              </li>
              {otherProjects.map((project) => (
                <li key={project.slug} className="project-row">
                  <a
                    className="project-link"
                    href={project.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-copy">{project.description}</p>
                    <span className="sr-only">Opens the GitHub repository</span>
                  </a>
                </li>
              ))}
            </ol>
          </section>

        <section className="bio" id="about" aria-labelledby="about-heading">
          <h2 id="about-heading" className="sr-only">
            About
          </h2>
          <Bloom className="bloom-small" />
          <p>{site.bio}</p>
          <p className="bio-place">Based in {site.location}.</p>
        </section>

        <a
          className="contact"
          id="contact"
          href={site.contact.href}
          rel="noreferrer"
          target="_blank"
        >
          <p className="contact-label">{site.contact.label}</p>
          <p className="contact-title">{site.contact.title}</p>
          <ArrowUpRight className="project-arrow" aria-hidden="true" size={22} />
          <span className="sr-only">Opens GitHub, the published contact for now</span>
        </a>
        <SiteFooter />
      </main>
    </div>
  );
}
