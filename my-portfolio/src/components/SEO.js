import { Helmet } from 'react-helmet-async';
import content from '../content.json';

const SEO = () => (
  <Helmet>
    <title>{content.user?.name || "Seye's"} | Portfolio</title>
    <meta name="description" content={content.user?.description || 'Web Developer Portfolio'} />
    <meta name="keywords" content={content.keywords || 'web developer, software engineer'} />
    <meta name="author" content={content.user?.name} />
  </Helmet>
);

export default SEO;
