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
  description = "Portfolio of Sarath Teja Revu, skilled software engineer specializing in Java, Spring Boot, Angular, Express and React.",
  keywords = "Sarath Teja Revu, Full stack, Software Engineer, Fullstack, Java Developer, Spring Boot, Angular, React, Portfolio, Revus",
  url = "https://sarathtejarevu.vercel.app/",
  image = "/default-image.jpg",
}) => {
  return (
    <Head>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default CustomHead;
