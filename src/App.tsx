import React, {useEffect} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Planned from "./components/Planned";
import Roadmap from "./components/Roadmap";
import Introducing from "./components/Introducing";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Faq from "./components/FAQ";
import Joining from "./components/Joining";
import useAuth from "./hooks/useAuth";
import Alert from "./components/Alert";

function App() {

    const {login} = useAuth()


    useEffect(() => {
        login()
    }, [])
    return (
        <>
            <Alert/>
            <Header />
            <Main/>
            <Planned/>
            <section className="border-bg"/>
            <Roadmap/>
            <Introducing/>
            <Team/>
            <Faq/>
            <Joining/>
            <Footer/>
        </>
    );
}

export default App;
