export const tejTimelineData = [
    {
        month: "October",
        summary: "This month I focused on prototyping our robot design and started mentoring Alina in Java programming. I researched flywheel designs from FUN Network FTC and decided to prioritize our outtake system. I also began teaching programming fundamentals and introducing her to FTC resources and coding concepts.",
        weeks: [
            {
                week: "Week 1",
                date: "Oct 1-7",
                title: "Robot Design & Flywheel Research",
                description: "This week I started designing our robot based on a flywheel shooter I saw on FUN Network FTC. The design looked super consistent in their practice matches. I decided to focus on the outtake system since that seemed like the most reliable part. We planned to use human player for early game so we could put all our effort into perfecting the shooter. I'm hoping this strategy will give us an edge in competitions.",
                images: ["/images/robot-design1.jpg", "/images/robot-design2.jpg"]
            },
            {
                week: "Week 2",
                date: "Oct 8-14",
                title: "Teaching Java Basics",
                description: "I started teaching Alina the basics of Java programming this week. We covered if statements, booleans, and the difference between public and private variables. I also explained LinearOpMode vs OpMode and static variables. I gave her homework assignments and showed her useful resources like FTC Sim, GM0, and REV's website. We shared this document to track her progress: https://docs.google.com/document/d/1-pw4UjV98NsozC3-YwHv7fWdklYBwKDzjerCaJGdgwQ/edit?usp=sharing. We also watched YouTube videos on programming hardware maps and how to configure the robot. She's picking things up pretty quickly.",
                images: ["/images/teach1.png", "/images/teach2.png"]
            },
            {
                week: "Week 3",
                date: "Oct 15-21",
                title: "Gamepad Programming and FTC Fundamentals",
                description: "This week I continued mentoring Alina on Java programming. We focused on understanding gamepad buttons and different ways to use them. I taught her how to code hold functions by adding else statements. We also worked on double tap detection using booleans. I showed her how to set up hardware maps properly. She practiced coding different button configurations for the controller. Beyond programming, I taught her essential FTC knowledge like the game rules and how to connect the driver hub to the control hub. We covered network management between the robot and hub, and the differences between encoder wires and data wires. She learned how to set up the control hub to expansion hub connection. I also explained the key differences between DC motors and servos, and introduced her to OnBotJava for coding directly on the robot.",
                images: ["/images/teach4.png", "/images/teach3.png"]
            },
            {
                week: "Week 4",
                date: "Oct 22-28",
                title: "Understanding Java Classes",
                description: "I started teaching Alina about classes this week, which she hadn't seen before. In Java, a class is the fundamental building block of object oriented programming. It serves as a blueprint or template for creating objects. The class defines the structure and behavior that all objects of that class will have. I explained how a class acts as a template, defining variables called fields or attributes and methods which are the actions or behaviors. An object is an instance of a class. When an object is created or instantiated, memory is allocated for its fields and it can perform the actions defined by its methods. Classes and objects are the core of OOP, which helps model real world entities and organize code in a structured modular way. A Java class can contain several building blocks. Fields or variables store the state or data of an object. For example, a Car class might have brand, model, and color fields. Methods define the operations or behaviors that an object can perform, like a setColor method. Constructors are special methods called when an object is created using the new keyword, and they initialize the object's fields. We also reviewed everything we learned in the past few weeks. I gave her more homework to practice these new concepts. She's doing a good job keeping up with the material.",
                images: ["/images/teach5.png", "/images/teach6.png"]
            }
        ]
    },
    {
        month: "November",
        summary: "November was all about programming our robot systems and competing in our first qualifier. I researched new libraries, programmed a dual PIDF controller for our flywheel, and troubleshot drivetrain issues. We competed at the Mississauga qualifier on November 29th, which taught us a lot about what we need to improve.",
        weeks: [
            {
                week: "Week 1",
                date: "Nov 1-7",
                title: "Library Research, Dashboard Testing, and Fall Fiesta",
                description: "I spent time researching new libraries like Solvers, FTC Next, and Sloth from Acme Robotics. I tested different dashboard interfaces because I wanted to find the best one for live tuning. I usually use Acme's dashboard, but I tried Panels since people said it works well with Pedro Pathing and Limelight. Panels had issues with live tuning the flywheel values, so I decided to stick with Acme's dashboard. I liked how Panels graphed the live info, but it wasn't as responsive when feeding new values. Our team BearBella hosted a Fall Fiesta FTC scrimmage with over 30 FTC teams from TDSB. I was the host announcer which gave me valuable experience in public speaking. I was also drive coaching and directing drive strategies for my team Bearbella. This was my first time hosting an in person event for over 60 people, which was a big leadership moment for me. I also helped other teams with their code, like DataByte, to make sure they could participate to their fullest potential. The scrimmage gave us great practice for how competitions work and what to expect on game day.",
                images: ["/images/panels.png", "/images/teach8.png", "/images/teach7.png", "/images/fiesta.png", "/images/fiesta2.png"]
            },
            {
                week: "Week 2",
                date: "Nov 8-14",
                title: "Dual PIDF Controller Programming",
                description: "I programmed our flywheel using two PIDF controllers this week. One controller is for quick acceleration (boost mode) and the other is for stable velocity. The boost controller kicks in when the error is large (over 100 RPM). The stable controller has higher gains for precise control when we're close to the target speed. I set up two preset velocities, 1240 RPM for close shots and 1400 RPM for far shots. I also added a distance to RPM formula so we can shoot from any position on the field. The code updates continuously and clamps motor power to prevent overheating.",
                images: ["/images/code.png", "/images/code2.png"]
            },
            {
                week: "Week 3",
                date: "Nov 15-21",
                title: "Drivetrain Troubleshooting",
                description: "Our drivetrain was acting weird this week, it kept turning slightly left and the belts were clicking and skipping. I tried different drivetrain codes to fix it. I switched to code that uses IMU orientation and motor power instead of what we had before. I reached out to other teams internationally for help figuring out if it was a technical or software issue. Through troubleshooting, I learned more about how belted drivetrains work. I'm still trying to understand how the software connects to the hardware.",
                images: ["/images/robot5.png", "/images/robot4.png"]
            },
            {
                week: "Week 4",
                date: "Nov 22-28",
                title: "First Qualifier Competition",
                description: "We had our first Mississauga qualifier on November 29th, and it was a huge learning experience for the whole team. As co-captain, I made sure to keep team morale high even when things got tough during our matches. Our preparation really paid off in judging, we got exemplary across the board for our technical questions and outreach presentation. The judges and other teams kept complimenting our robot's aesthetics, especially our custom drivetrain and CNC aluminum parts. We arrived early and set up our pit quickly, which gave us time to fix issues before matches started. Our pit judging went smoothly because the juniors practiced answering questions and weren't intimidated like last year. The formal judging was amazing, the judges complimented us and even the juniors got to answer questions confidently. Our programming team had to adapt on the fly because the build team removed the odometry wheels and Limelight. We switched to using motor encoders and still managed to get a LEAVE autonomous for the movement ranking point. However, our drivetrain issues really hurt us during matches because we couldn't strafe properly and the voltage kept dropping. The inner roller kept getting stuck, and our set screws kept coming loose, which caused belts to fall off during matches. Despite these challenges, I was proud of how the team handled the pressure and stayed professional throughout the competition.",
                images: ["/images/qual3.png", "/images/match2.png", "/images/qual2.png"]
            }
        ]
    },
    {
        month: "December",
        summary: "After our qualifier, I focused on team reflection and setting new goals. I taught FLL workshops at Cherish and Timberbank, which was really rewarding. I also worked as drive coach with Lillian and tried a new approach to flywheel tuning using REV's built in velocity control instead of custom PID loops.",
        weeks: [
            {
                week: "Week 1",
                date: "Dec 1-7",
                title: "Team Reflection Meeting",
                description: "This week we had a long team reflection meeting to talk about everything that happened at the qualifier. We went through what worked well and what we absolutely need to fix before the next competition. I realized that prioritizing the shooter and intake systems before finishing the drivetrain was a huge mistake. The drivetrain is the most vital part of the robot, and working backwards from other systems caused so many problems. I had to be honest with myself, as co-captain and programmer, I should have been more strict about deadlines with the build team. I decided to create both soft and hard deadlines for every component so there's actual accountability. We talked about how the juniors needed too much hand-holding during the competition and lacked initiative for tasks like pit setup. I need to stress the importance of gracious professionalism because some members were badmouthing other teams, which isn't okay. The wire routing issues caused us to disconnect when robots bumped into us, which we could have prevented with better planning. Some juniors fell asleep during the competition from fatigue, so I'm implementing a rule about getting 10 hours of sleep the night before and no caffeine. We also discussed ordering new motors because REV motors aren't compatible with belted drivetrains, which explains the strafing issues. Overall, this reflection made us realize we have clear goals moving forward: finish the drivetrain weeks before competition, give Lillian more driving practice, and prepare better technical demonstrations for judges.",
                images: ["/images/qual4.png", "/images/match3.png", "/images/qual1.png"]
            },
            {
                week: "Week 2",
                date: "Dec 8-14",
                title: "FLL Workshop Training",
                description: "I spent this week training juniors for FLL at Cherish workshops and Timberbank workshop. We taught kids the basics of FLL drivetrains and how to use block code for turning. We also helped them make dancing robots, which was really fun. Being able to help children with disabilities learn robotics was amazing. Many of these kids wouldn't normally get this opportunity. Visiting Timberbank brought back memories and made me wish I had learned FLL in elementary school. It felt great to make a real difference.",
                images: ["/images/FLL.png", "/images/FLL2.png", "/images/FLL3.png", "/images/FLL4.png", "/images/FLL5.png", "/images/FLL6.png", "/images/FLL7.png"]
            },
            {
                week: "Week 3",
                date: "Dec 15-21",
                title: "BearBeauty Website Launch and Drive Coaching",
                description: "I launched BearBeauty this week and helped create the Shopify website from scratch. I handled the logistics from building the website to linking e transfer payments. I designed earring packaging concepts aimed at marketing towards teenagers. I helped sell our 3D printed earrings and beauty products during lunch, which earned our team 200 dollars. I learned how to negotiate prices and pitch products to customers. Mr Lu's daughter Audrey helped create the media content for the website. I also worked as drive coach this week, helping Lillian learn to drive the robot. We figured out her preferences for the controls and adjusted them. I studied game mechanics, fouls, and penalties more deeply. I planned out our autonomous path for at least 6 balls for the next qualifier. I used PedroPathing, a vector programming website, to visualize the path. It's really helpful to see everything mapped out before we code it.",
                images: ["/images/match1.png", "/images/pedroPathing.png", "/images/bearbeauty.png", "/images/bearbeauty2.png"]
            },
            {
                week: "Week 4",
                date: "Dec 22-28",
                title: "Flywheel Tuning Method Change",
                description: "I tried a different method for tuning the flywheel this week. Instead of custom PID loops, I used the REV motor controller's built in velocity control. I set up multiple preset velocities for different shooting scenarios, 970 RPM for close shots, 1375 RPM for far shots, and 975 RPM for mid range. I also added a reverse mode at negative 1200 RPM for human intake. This approach is simpler and easier for drivers to understand. The presets were determined through trial and error testing. It's less flexible than the distance based system but more straightforward.",
                images: ["/images/robot2.png", "/images/robot3.png", "/images/robot.png"]
            }
        ]
    },
    {
        month: "January",
        summary: "January focused on troubleshooting and advanced programming. I discovered our drivetrain issues were caused by controller stick drift, not hardware problems. I also programmed a sophisticated turret system with PID control that uses Limelight vision data and can predict target positions when they leave the camera view.",
        weeks: [
            {
                week: "Week 1",
                date: "Jan 1-7",
                title: "Drivetrain Stick Drift Discovery, Servo Limiter and Winter Fiesta",
                description: "Our drivetrain had issues again this week, so I used encoders to check the ticks per revolution. I noticed one motor was slower than the other and thought it was a hardware problem. I replaced the motor but nothing changed. Then I realized, if it's not software or hardware, what else could it be? I checked the joystick telemetry values and discovered it was stick drift. We found the root cause and can fix it now. We were also missing a prong on our control hub that was replaced generously by Mr Lu. The builders added a servo limiter to the robot this week. The first prototype failed due to the print's infill and less torque and surface area on the artifact. The second design succeeded with two servos from Gobuila that had enough torque to limit the ball in its place. However, it has a chance of going inside the artifact's hole which makes it difficult to remove or outtake from the robot. We were able to test this during the winter fiesta FTC scrimmage hosted by our team, Bearbella. We had difficulties with our robot getting stuck frequently. For each cycle it gets stuck around the 5th time which really affects our match time during the Winter Fiesta. From this we were able to improve our limiter by having one beam connecting both servos.",
                images: ["/images/qual1.png", "/images/limiter.png", "/images/code5.png", "/images/robot.png"]
            },
            {
                week: "Week 2",
                date: "Jan 8-14",
                title: "Turret Vision System Programming",
                description: "This week I worked on understanding turret logic using Limelight vision. I learned how to use TX and TY values to calculate distance from AprilTags. I studied the math behind derivatives and how the turret's deadzone works when it can't detect tags. The turret uses a PID controller with dual mode operation, vision mode when it sees the target and prediction mode when it doesn't. The system smooths noisy camera data and can track targets even when they leave the camera's view. It uses field centric tracking to compensate for robot rotation. The controller has safety features like velocity limiting and a deadzone to prevent oscillation.",
                images: ["/images/limelight.png", "/images/code4.png", "/images/limelight2.png", "/images/code3.png", "/images/field.png"]
            },
            {
                week: "Week 3",
                date: "Jan 15-21",
                title: "In Progress",
                description: "Work in progress for this week.",
                images: ["/images/bella.png", "/images/robot2.png", "/images/robot3.png"]
            }
        ]
    }
];