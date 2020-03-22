import React, { PureComponent } from 'react';

import Layout from '../components/layout';
// import SideNavigation from '../components/Navigation/SideNavigation';
import Home from '../components/Home/Home';
// import Chat from '../components/Chat/Chat';
import Expertise from '../components/Expertise/Expertise';
import Contact from '../components/Contact/Contact';
// import Image from '../components/image';
import SEO from '../components/seo';
import Experience from '../components/Experience/Experience';

const date = new Date();
const currentYear = date.getFullYear();

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
      <SEO />
      {/* <SideNavigation activeNav={this.state.activeNav} /> */}
      <Home ref="home"/>
      <Expertise ref="expertise" />
      <Experience />
      <Contact ref="contact" />
      <div className="container footer">
        <div className="row">
          <footer className="col-12 justify-content-center">
            <small>&copy; Copyright {currentYear}, kaungmyatlwin.dev. <b>All Rights Reserved.</b></small>
          </footer>
        </div>
      </div>
    </Layout>
    );
  }
}

export default IndexPage;
