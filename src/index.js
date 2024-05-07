import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import "./GlobalStyles/glbStyles.css"
import HeaderComponent from './components/Header/HeaderComponent.jsx';
import Home from '../src/page/home/Home.jsx';
import FooterComponent from './components/Footer/FooterComponent.jsx';
import { Layout } from 'antd';
// Tạo component App
function App() {
    return (
        <Layout>
            <HeaderComponent></HeaderComponent>
            <Home></Home>
            <FooterComponent></FooterComponent>
        </Layout>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)