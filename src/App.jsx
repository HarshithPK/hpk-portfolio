import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="bg-background text-tertiary min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <Timeline />
                <Skills /> {/* Add this component */}
                <Projects />
            </main>
            <Footer />
        </div>
    );
}

export default App;
