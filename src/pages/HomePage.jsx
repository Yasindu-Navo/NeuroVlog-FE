import BlogList from "../components/BlogList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { NewsLetter } from "../components/NewsLetter";

export const HomePage = () => {
    
    return (
        <>
            <NavBar />
            <Header />
            <BlogList />
            <NewsLetter />
            <Footer />
            </>
    );
}