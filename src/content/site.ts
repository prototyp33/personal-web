/**
 * Home content. Edit this file to change the name, bio, projects, and links.
 * Leave unknown URLs as null. Do not invent addresses.
 */

export type HeadlineLine = {
  text: string;
  style: "bold" | "italic";
};

export type Portrait = {
  /** Public path, for example "/portrait.jpg". Null shows the abstract stand-in. */
  src: string | null;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Public repository description. Do not add metrics that are not in this sentence. */
  description: string;
  href: string;
  /** Public image path. Null shows the abstract preview. */
  preview: string | null;
  previewAlt: string;
};

export type ContactLink = {
  label: string;
  title: string;
  href: string;
};

export type SocialLink = {
  label: string;
  /** Public URL. Null means the channel is not published yet. */
  href: string | null;
};

export const site = {
  name: "Adrian Javier Iraegui",
  location: "Barcelona",
  headline: [
    { text: "Data & Business Analyst", style: "bold" },
    { text: "bridging data and", style: "italic" },
    { text: "business strategy", style: "bold" },
  ] satisfies HeadlineLine[],
  bio: "Data & Business Analyst. Grad in Management & Tech, skilled in Python, and AI-driven process optimization. Bridging the gap between data and business strategy.",
  portrait: {
    // TODO: drop a photo in /public and set src, for example "/portrait.jpg".
    src: null as string | null,
    alt: "Abstract stand-in for a portrait of Adrian Javier Iraegui",
  } satisfies Portrait,
  projects: [
    {
      slug: "barcelona-housing-demographics-analyzer",
      title: "Barcelona Housing",
      description:
        "Open-source dashboard to analyze the relationship between demographic evolution and housing prices in Barcelona.",
      href: "https://github.com/prototyp33/barcelona-housing-demographics-analyzer",
      // TODO: replace with a real capture, for example "/projects/barcelona-housing.jpg".
      preview: null as string | null,
      previewAlt:
        "Abstract diagram standing in for the Barcelona housing dashboard",
    },
    {
      slug: "OnSpotML",
      title: "OnSpotML",
      description:
        "Machine Learning project for parking prediction in Barcelona.",
      href: "https://github.com/prototyp33/OnSpotML",
      preview: null,
      previewAlt: "",
    },
    {
      slug: "OnSpot-Predictions",
      title: "OnSpot Predictions",
      description:
        "A predictive model for parking occupancy in Barcelona, leveraging advanced machine learning techniques with features like event schedules, traffic density, and nearby attractions.",
      href: "https://github.com/prototyp33/OnSpot-Predictions",
      preview: null,
      previewAlt: "",
    },
  ] satisfies Project[],
  contact: {
    label: "Based in Barcelona",
    title: "Contact me",
    // TODO: when an email is public, point this at mailto:you@domain.
    href: "https://github.com/prototyp33",
  } satisfies ContactLink,
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/prototyp33",
    },
    {
      label: "LinkedIn",
      // TODO: set the public LinkedIn URL. Leave null until then.
      href: null as string | null,
    },
    {
      label: "Email",
      // TODO: set a mailto: URL once the address can be published.
      href: null as string | null,
    },
  ] satisfies SocialLink[],
};
