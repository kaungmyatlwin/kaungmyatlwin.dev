import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SideNavigation from '../components/Navigation/SideNavigation';
import Home from '../components/Home/Home';
import Chat from '../components/Chat/Chat';
import Expertise from '../components/Expertise/Expertise';
import Contact from '../components/Contact/Contact';
// import Image from '../components/image';
import SEO from '../components/seo';

class IndexPage extends PureComponent {
  state = {
    activeNav: 'home',
  }

  componentDidMount() {
    const targets = Object.values(this.refs);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.5) {
          console.log(entry.target.id);
          this.setState({ activeNav: entry.target.id });
        }
      });
    }, {
      threshold: 0.5,
    });

    targets.forEach((target) => observer.observe(target));
  }

  render() {
    return (
    <Layout>
      <SEO title="Home" />
      <SideNavigation activeNav={this.state.activeNav} />
      <Home ref="home"/>
      <Expertise ref="expertise" />
      <Contact ref="contact" />
    </Layout>
    );
  }
}

export default IndexPage;
