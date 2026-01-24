// App.jsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Eagerly load HomePage components (they load immediately)
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

// Lazy load TejSummative page (only loads when navigated to)
const TejSummative = lazy(() => import("./pages/TejSummative"));

// Loading component that matches your design
const LoadingScreen = () => (
    <div className="min-h-screen bg-black-100 flex items-center justify-center relative overflow-hidden">
        {/* Matching background glow effects */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
             style={{ animationDuration: '4s' }} />
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse"
             style={{ animationDuration: '5s', animationDelay: '1s' }} />

        <div className="text-center relative z-10">
            {/* Animated spinner */}
            <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-pink-500/30 blur-xl animate-pulse" />
                <div className="relative w-20 h-20 border-4 border-pink-500/30 border-t-pink-500 rounded-full animate-spin"
                     style={{
                         boxShadow: '0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)'
                     }}
                />
            </div>

            <p className="text-white text-xl font-semibold mb-2">Loading Experience</p>
            <p className="text-white-50">Please wait...</p>
        </div>
    </div>
);

// Home page component
const HomePage = () => (
    <>
        <Navbar />
        <Hero />
        <ShowcaseSection />
        <FeatureCards />
        <Experience />
        <TechStack />
        <Testimonials />
        <Contact />
        <Footer />
    </>
);

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
                path="/tej-summative"
                element={
                    <Suspense fallback={<LoadingScreen />}>
                        <TejSummative />
                    </Suspense>
                }
            />
        </Routes>
    </BrowserRouter>
);

export default App;