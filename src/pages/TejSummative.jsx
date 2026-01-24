import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "../sections/Footer";
import { tejTimelineData } from "../constants/tejConstants";

gsap.registerPlugin(ScrollTrigger);

// Custom Navbar for TEJ page - simplified to only go back to portfolio
const TejNavbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <button
                    onClick={() => navigate('/')}
                    className="logo cursor-pointer bg-transparent border-0"
                >
                    Dilaany Sangar
                </button>

                <nav className="desktop">
                    <ul>
                        <li className="group">
                            <button
                                onClick={() => navigate('/')}
                                className="bg-transparent border-0 cursor-pointer"
                            >
                                <span>← Back to Portfolio</span>
                                <span className="underline" />
                            </button>
                        </li>
                    </ul>
                </nav>

                <button
                    onClick={() => navigate('/')}
                    className="contact-btn group bg-transparent border-0 cursor-pointer"
                />
            </div>
        </header>
    );
};

const TejSummative = () => {
    const navigate = useNavigate();
    const timelineRef = useRef(null);
    const [activeCarousel, setActiveCarousel] = useState({});

    const nextImage = (monthIndex, weekIndex) => {
        const key = `${monthIndex}-${weekIndex}`;
        const currentIndex = activeCarousel[key] || 0;
        const week = tejTimelineData[monthIndex].weeks[weekIndex];
        const nextIndex = (currentIndex + 1) % week.images.length;
        setActiveCarousel({ ...activeCarousel, [key]: nextIndex });
    };

    const prevImage = (monthIndex, weekIndex) => {
        const key = `${monthIndex}-${weekIndex}`;
        const currentIndex = activeCarousel[key] || 0;
        const week = tejTimelineData[monthIndex].weeks[weekIndex];
        const prevIndex = currentIndex === 0 ? week.images.length - 1 : currentIndex - 1;
        setActiveCarousel({ ...activeCarousel, [key]: prevIndex });
    };

    useGSAP(() => {
        gsap.utils.toArray(".timeline-card").forEach((card) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                },
            });
        });

        gsap.utils.toArray(".month-header").forEach((header) => {
            gsap.from(header, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: header,
                    start: "top 85%",
                },
            });
        });

        // Traveling dot that follows scroll
        const timelineSection = timelineRef.current;
        const travelingDot = document.querySelector(".timeline-traveling-dot");

        if (timelineSection && travelingDot) {
            gsap.to(travelingDot, {
                y: () => timelineSection.offsetHeight - 100,
                ease: "none",
                scrollTrigger: {
                    trigger: timelineSection,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0,
                },
            });
        }
    }, []);

    return (
        <>
            <TejNavbar />

            <div className="min-h-screen bg-black-100 relative overflow-hidden">
                {/* Static background glows - only at top of page */}
                <div className="absolute top-0 left-0 right-0 h-screen pointer-events-none overflow-hidden">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
                         style={{ animationDuration: '4s' }} />
                    <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse"
                         style={{ animationDuration: '5s', animationDelay: '1s' }} />
                    <div className="absolute top-60 left-1/3 w-72 h-72 bg-pink-500/8 rounded-full blur-3xl animate-pulse"
                         style={{ animationDuration: '6s', animationDelay: '2s' }} />
                    <div className="absolute top-80 right-1/4 w-64 h-64 bg-purple-500/6 rounded-full blur-3xl animate-pulse"
                         style={{ animationDuration: '5.5s', animationDelay: '0.5s' }} />
                </div>

                {/* Hero Section */}
                <div className="pt-32 pb-16 section-padding relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <button
                            onClick={() => navigate('/')}
                            className="mb-8 text-white-50 hover:text-white flex items-center gap-2 transition-colors group"
                        >
                            <span className="group-hover:-translate-x-1 transition-transform">←</span>
                            <span>Back to Portfolio</span>
                        </button>

                        <div className="mb-12">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                                TEJ4 Capstone Culminating
                            </h1>
                            <p className="text-xl text-white-50 max-w-3xl mb-6">
                                I am coding a FTC robot (Bella) using onbotjava which entails coding an autonomous period, vision based targeting, and precision motion control. This project will be going over a PIDF tuned flywheel launcher, Limelight vision processing for automated aiming, and an arcade drivetrain.
                            </p>
                            <a
                                href="https://github.com/Deluxe08/decode"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all"
                                style={{
                                    boxShadow: '0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)'
                                }}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                                View Code on GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Timeline Section */}
                <div ref={timelineRef} className="section-padding relative z-10">
                    <div className="max-w-7xl mx-auto relative">
                        {/* Connecting line for months - in background */}
                        <div className="absolute left-8 md:left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500/30 via-purple-500/30 to-pink-500/30 z-0"
                             style={{
                                 boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)'
                             }}
                        />

                        {/* Single traveling dot */}
                        <div className="timeline-traveling-dot absolute left-8 md:left-16 -translate-x-1/2 z-20">
                            <div className="relative">
                                {/* Outer glow */}
                                <div className="absolute inset-0 rounded-full bg-pink-500/50 blur-xl scale-[2.5]" />
                                <div className="absolute inset-0 rounded-full bg-pink-500/60 blur-lg scale-[1.8]" />
                                {/* Core dot - no border */}
                                <div className="relative w-5 h-5 rounded-full bg-gradient-to-br from-pink-400 to-purple-500"
                                     style={{
                                         boxShadow: '0 0 20px rgba(236, 72, 153, 1), 0 0 40px rgba(236, 72, 153, 0.6), 0 0 60px rgba(236, 72, 153, 0.3)'
                                     }}
                                />
                            </div>
                        </div>

                        {tejTimelineData.map((monthData, monthIndex) => (
                            <div key={monthIndex} className="mb-24 relative z-10">
                                {/* Month Header */}
                                <div className="month-header mb-12 ml-16 md:ml-24">
                                    <div className="card-border rounded-xl p-8 relative overflow-hidden backdrop-blur-sm"
                                         style={{
                                             background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)',
                                             boxShadow: '0 0 40px rgba(236, 72, 153, 0.2), 0 0 80px rgba(236, 72, 153, 0.1), inset 0 0 40px rgba(236, 72, 153, 0.05)'
                                         }}>
                                        {/* Animated gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-transparent opacity-50 animate-pulse pointer-events-none"
                                             style={{ animationDuration: '3s' }} />

                                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white relative z-10">
                                            {monthData.month}
                                        </h2>
                                        <p className="text-lg text-white-50 relative z-10">
                                            {monthData.summary}
                                        </p>
                                    </div>
                                </div>

                                {/* Weeks */}
                                <div className="space-y-12 ml-16 md:ml-24">
                                    {monthData.weeks.map((week, weekIndex) => {
                                        const carouselKey = `${monthIndex}-${weekIndex}`;
                                        const currentImageIndex = activeCarousel[carouselKey] || 0;

                                        return (
                                            <div
                                                key={weekIndex}
                                                className="timeline-card"
                                            >
                                                <div className="card-border rounded-xl overflow-hidden relative group backdrop-blur-sm"
                                                     style={{
                                                         background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.03) 0%, rgba(168, 85, 247, 0.03) 50%, rgba(236, 72, 153, 0.03) 100%)',
                                                         boxShadow: '0 0 50px rgba(236, 72, 153, 0.15), 0 0 100px rgba(236, 72, 153, 0.08), inset 0 0 50px rgba(236, 72, 153, 0.03)'
                                                     }}>
                                                    {/* Animated glow on hover */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-pink-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                                    <div className="flex flex-col md:flex-row">
                                                        {/* Image Carousel */}
                                                        <div className="md:w-2/5 relative group/carousel">
                                                            <div className="relative h-64 md:h-80 overflow-hidden">
                                                                <img
                                                                    src={week.images[currentImageIndex]}
                                                                    alt={`${week.title} - Image ${currentImageIndex + 1}`}
                                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                                />

                                                                {/* Carousel Controls */}
                                                                <button
                                                                    onClick={() => prevImage(monthIndex, weekIndex)}
                                                                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black-200/60 backdrop-blur-sm hover:bg-pink-500/80 text-white w-10 h-10 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-all flex items-center justify-center z-10"
                                                                    style={{
                                                                        boxShadow: '0 0 25px rgba(236, 72, 153, 0.4)'
                                                                    }}
                                                                >
                                                                    ←
                                                                </button>
                                                                <button
                                                                    onClick={() => nextImage(monthIndex, weekIndex)}
                                                                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black-200/60 backdrop-blur-sm hover:bg-pink-500/80 text-white w-10 h-10 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-all flex items-center justify-center z-10"
                                                                    style={{
                                                                        boxShadow: '0 0 25px rgba(236, 72, 153, 0.4)'
                                                                    }}
                                                                >
                                                                    →
                                                                </button>

                                                                {/* Image Indicators */}
                                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                                                    {week.images.map((_, idx) => (
                                                                        <div
                                                                            key={idx}
                                                                            className={`h-1.5 rounded-full transition-all ${
                                                                                idx === currentImageIndex
                                                                                    ? 'bg-pink-500 w-8'
                                                                                    : 'bg-white/30 w-1.5'
                                                                            }`}
                                                                            style={idx === currentImageIndex ? {
                                                                                boxShadow: '0 0 15px rgba(236, 72, 153, 0.8)'
                                                                            } : {}}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Content */}
                                                        <div className="md:w-3/5 p-6 md:p-8 relative z-10">
                                                            <div className="flex items-center gap-3 mb-3">
                                <span className="card-border px-3 py-1 rounded-lg text-sm text-white-50 backdrop-blur-sm"
                                      style={{
                                          background: 'rgba(236, 72, 153, 0.05)',
                                          boxShadow: '0 0 20px rgba(236, 72, 153, 0.25)'
                                      }}>
                                  {week.week}
                                </span>
                                                                <span className="text-white-50 text-sm">
                                  {week.date}
                                </span>
                                                            </div>

                                                            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                                                                {week.title}
                                                            </h3>

                                                            <p className="text-white-50 text-base md:text-lg leading-relaxed">
                                                                {week.description}
                                                            </p>

                                                            {/* Google Docs button for October Week 2 */}
                                                            {monthIndex === 0 && weekIndex === 1 && (
                                                                <a
                                                                    href="https://docs.google.com/document/d/1-pw4UjV98NsozC3-YwHv7fWdklYBwKDzjerCaJGdgwQ/edit?usp=sharing"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-2 mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all text-sm"
                                                                    style={{
                                                                        boxShadow: '0 0 20px rgba(236, 72, 153, 0.4)'
                                                                    }}
                                                                >
                                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                                                                        <path d="M14 2v6h6M16 13H8m8 4H8m8-8H8"/>
                                                                    </svg>
                                                                    View Teaching Document
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Summary Section */}
                <div className="section-padding pb-20 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="card-border rounded-xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm"
                             style={{
                                 background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%)',
                                 boxShadow: '0 0 60px rgba(236, 72, 153, 0.3), 0 0 120px rgba(236, 72, 153, 0.15), inset 0 0 60px rgba(236, 72, 153, 0.08)'
                             }}>
                            {/* Animated glow effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-pink-500/15 animate-pulse pointer-events-none"
                                 style={{ animationDuration: '4s' }} />

                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative z-10">
                                Thank you
                            </h2>
                            <p className="text-lg md:text-xl text-white-50 mb-8 relative z-10">
                                This project transformed my understanding of robotics from theory to problem solving. I learned that complex algorithms, such as our shooter PIDF and camera systems, only work with trial and error. As a leader, I learned that teaching others actually improves my own skills. By fixing mistakes and managing time better, I realized that building a strong foundation is the key to success.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3 mb-8 relative z-10">
                                {["PID Control", "Computer Vision", "Automated Aiming", "Autonomous Navigation"].map((skill) => (
                                    <span key={skill} className="card-border px-4 py-2 rounded-lg text-white-50 hover:bg-pink-500/15 transition-all backdrop-blur-sm"
                                          style={{
                                              background: 'rgba(236, 72, 153, 0.05)',
                                              boxShadow: '0 0 20px rgba(236, 72, 153, 0.2)'
                                          }}>
                    {skill}
                  </span>
                                ))}
                            </div>
                            <button
                                onClick={() => navigate('/')}
                                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all relative z-10"
                                style={{
                                    boxShadow: '0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)'
                                }}
                            >
                                Return to Portfolio
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default TejSummative;