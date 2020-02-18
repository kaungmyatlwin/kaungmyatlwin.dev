import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SideNavigation from '../components/Navigation/SideNavigation';
import Home from '../components/Home/Home';
import Chat from '../components/Chat/Chat';
import Expertise from '../components/Expertise/Expertise';
// import Image from '../components/image';
import SEO from '../components/seo';

class IndexPage extends PureComponent {
  state = {
    activeNav: 'home',
  }

  componentDidMount() {
    const targets = Object.values(this.refs);
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) return;
        this.setState({ activeNav: entries[0].target.id });
    }, { threshold: 0.65 });

    targets.forEach((target) => observer.observe(target));
  }

  render() {
    return (
    <Layout>
      <SEO title="Home" />
      <SideNavigation activeNav={this.state.activeNav} />
      <Home ref="home"/>
      <Expertise ref="expertise" />
    </Layout>
    );
  }
}

// const IndexPage = () => (

// );

export default IndexPage;
