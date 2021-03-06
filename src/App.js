import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';



function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Fiasal Hotaky" scroll>
            <Navigation>
                <Link to="/landingPage">Main</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                
            </Navigation>
        </Header>
        <Drawer title="Portfolio">
            <Navigation>
                <Link to="/landingPage">Main</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
       <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
    
</div>



  );
}

export default App;
