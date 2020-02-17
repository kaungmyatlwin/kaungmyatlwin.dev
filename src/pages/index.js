import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Home from '../components/Home/Home';
import Chat from '../components/Chat/Chat';
// import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <Chat />
  </Layout>
);

export default IndexPage;
