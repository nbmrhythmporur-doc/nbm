export default function robots() {
  const baseUrl = "https://www.nbmrhythm.com/"; // TODO: Change to your actual domain

  return {
    rules: {
      userAgent: "*", // Applies to all search engine bots (Google, Bing, etc.)
      allow: "/",
      disallow: ["/api/", "/admin/"], // Hides backend routes or private folders from Google
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Points search engines to the sitemap you just created
  };
}