// components/CustomHead.tsx
import Head from "next/head";

interface CustomHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

const CustomHead: React.FC<CustomHeadProps> = ({
  title = "Revus",
  description = "Default description",
  keywords = "default, keywords",
  url = "https://sarathtejarevu.vercel.app/",
  image = "/default-image.jpg",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default CustomHead;
