import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {

  const rssItems = await pagesGlobToRssItems(
    import.meta.glob('./posts/*.{md,mdx}'),
  )

  const posts = import.meta.glob('./posts/*.{md,mdx}', { eager: true });

  const enclosures = Object.values(posts).map((post) => {
    const { frontmatter } = post;

    if (frontmatter.image.src === null) {
      return {
        title: frontmatter.title,
        show: frontmatter.show,
      };
    }

    return {
      title: frontmatter.title,
      show: frontmatter.show,
      enclosure: frontmatter.image ? {
        url: frontmatter.image.src,
        length: 100,
        type: frontmatter.image.src.endsWith(".png") ? "image/png" : "image/jpeg",
      } : undefined,
    };
  });

  const result = rssItems
    .map(item => {
      const enclosure = enclosures.find(enc => enc.title === item.title);
      return enclosure && enclosure.show ? { ...item, enclosure: enclosure.enclosure } : null;
    })
    .filter(Boolean);

  return rss({
    title: "PeithonKing's Thoughts",
    description: "PeithonKing's Personal Blog space.",
    site: context.site,
    items: result,
    stylesheet: './rss/styles.xsl',
    customData: `<language>en-us</language>`,
  });
}
