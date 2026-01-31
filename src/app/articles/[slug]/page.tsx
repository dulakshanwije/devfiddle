import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import PageTitle from "@/components/ui/PageTitle";

type ArticleMeta = {
  cover_image: string;
  title: string;
  slug: string;
  description: string;
  published_date: string;
  author: string;
  tags: string[];
};

type Props = {
  params: {
    slug: string;
  };
};

async function getArticleMeta(slug: string): Promise<ArticleMeta | null> {
  const metaPath = path.join(process.cwd(), "src/data/articles/articles.json");

  try {
    const metaFile = await fs.readFile(metaPath, "utf8");
    const articles: ArticleMeta[] = JSON.parse(metaFile);
    return articles.find((article) => article.slug === slug) || null;
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  const metaPath = path.join(process.cwd(), "src/data/articles/articles.json");

  try {
    const metaFile = await fs.readFile(metaPath, "utf8");
    const articles: ArticleMeta[] = JSON.parse(metaFile);
    return articles.map((article) => ({ slug: article.slug }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const meta = await getArticleMeta(slug);

  if (!meta) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [meta.cover_image],
      type: "article",
      publishedTime: meta.published_date,
      authors: [meta.author],
      tags: meta.tags,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  // Validate slug to prevent path traversal
  if (slug.includes("..") || slug.includes("/") || slug.includes("\\")) {
    notFound();
  }

  // Get article metadata
  const meta = await getArticleMeta(slug);
  if (!meta) {
    notFound();
  }

  const filePath = path.join(
    process.cwd(),
    "src/data/articles/contents",
    `${slug}.html`,
  );

  // Read file with error handling
  let html: string;
  try {
    html = await fs.readFile(filePath, "utf8");
  } catch (error) {
    notFound();
  }

  // Extract body content using regex
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const content = bodyMatch ? bodyMatch[1] : html;

  return (
    <>
      <PageTitle title={meta.title} className="max-w-180 text-center mx-auto" />
      <section
        className="prose max-w-none mb-24"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}
