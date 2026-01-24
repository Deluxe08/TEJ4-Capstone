import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const tejRef = useRef(null);
    const hackathonRef = useRef(null);
    const robotRef = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [tejRef.current, hackathonRef.current, robotRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    // Handler for TEJ click
    const handleTejClick = (e) => {
        e.preventDefault();
        navigate('/tej-summative');
    };

    return (
        <div id="projects" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div
                        ref={tejRef}
                        className="first-project-wrapper cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                        onClick={handleTejClick}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleTejClick(e)}
                    >
                        <div className="image-wrapper relative overflow-hidden">
                            <img
                                src="/images/FLL5.png"
                                alt="Tej Summative"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-content">
                            <h2>
                                TEJ Summative project
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                Click here to visit my monthly check ins
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={hackathonRef}>
                            <div className="image-wrapper bg-[#FFE0E9] overflow-hidden">
                                <img
                                    src="/images/project2.png"
                                    alt="International Hackathon"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2>Hosted an international Hackathon</h2>
                        </div>

                        <div className="project" ref={robotRef}>
                            <div className="image-wrapper bg-[#FFE7EB] overflow-hidden">
                                <img
                                    src="/images/qual1.png"
                                    alt="Robotics"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h2>PIDF tuning Robot + Automated aim with Vision</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;