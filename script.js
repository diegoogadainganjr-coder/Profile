// =========================
// LOADING SCREEN
// =========================

const loadingScreen = document.getElementById("loading");
const progressBar = document.getElementById("progress-bar");
const loadingText = document.getElementById("loading-text");

let progress = 0;

const loadingInterval = setInterval(() => {

    progress += 4;

    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }

    if (loadingText) {
        loadingText.textContent = `Loading... ${progress}%`;
    }

    if (progress >= 100) {

        clearInterval(loadingInterval);

        setTimeout(() => {

            if (loadingScreen) {
                loadingScreen.classList.add("fade-out");

                setTimeout(() => {
                    loadingScreen.style.display = "none";
                }, 700);
            }

        }, 300);
    }

}, 60);


// Safety fallback
window.addEventListener("load", () => {

    setTimeout(() => {

        if (
            loadingScreen &&
            !loadingScreen.classList.contains("fade-out")
        ) {

            loadingScreen.classList.add("fade-out");

            setTimeout(() => {
                loadingScreen.style.display = "none";
            }, 700);
        }

    }, 4000);

});


// =========================
// TYPING EFFECT
// =========================

const roles = [
    "ASPIRING FULL-STACK DEVELOPER",
    "UI/UX DESIGN STUDENT",
    "FRONTEND DEVELOPER",
    "WEB DEVELOPER IN TRAINING"
];

let roleIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) {
        return;
    }

    if (charIndex < roles[roleIndex].length) {

        typing.textContent += roles[roleIndex][charIndex];

        charIndex++;

        setTimeout(typeEffect, 80);

    } else {

        setTimeout(() => {

            typing.textContent = "";

            charIndex = 0;

            roleIndex =
                (roleIndex + 1) % roles.length;

            typeEffect();

        }, 1800);
    }
}

typeEffect();


// =========================
// FLOATING PARTICLES
// =========================

setInterval(() => {

    const particle =
        document.createElement("div");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.bottom = "0";

    particle.style.animationDuration =
        5 + Math.random() * 5 + "s";

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 10000);

}, 600);


// =========================
// RESUME GENERATOR
// =========================

const resumeButton =
    document.getElementById("download-resume");

if (resumeButton) {

    resumeButton.addEventListener("click", () => {

        if (!window.jspdf) {

            alert(
                "Resume generator is still loading. Please try again."
            );

            return;
        }

        const { jsPDF } = window.jspdf;

        const doc = new jsPDF();

        const red = [220, 38, 38];
        const dark = [17, 24, 39];
        const gray = [75, 85, 99];
        const lightGray = [229, 231, 235];

        let y = 20;


        // =========================
        // HEADER
        // =========================

        doc.setTextColor(...dark);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);

        doc.text(
            "DIEGO O. GADAINGAN JR.",
            20,
            y
        );

        y += 9;

        doc.setTextColor(...red);
        doc.setFontSize(10);

        doc.text(
            "ASPIRING FULL-STACK DEVELOPER | UI/UX DESIGN STUDENT",
            20,
            y
        );

        y += 7;

        doc.setTextColor(...gray);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);

        doc.text(
            "Philippines | Web Development | UI/UX Design",
            20,
            y
        );

        y += 8;


        // Divider

        doc.setDrawColor(...red);
        doc.setLineWidth(.8);

        doc.line(
            20,
            y,
            190,
            y
        );

        y += 10;


        // =========================
        // PROFILE
        // =========================

        doc.setTextColor(...dark);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);

        doc.text(
            "PROFILE",
            20,
            y
        );

        y += 7;

        doc.setTextColor(...gray);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);

        const profile =
            "Beginner web developer currently studying Full-Stack Development and UI/UX Design. " +
            "Focused on building responsive interfaces, learning frontend and backend development, " +
            "working with databases and APIs, and creating simple, user-friendly digital experiences.";

        const profileLines =
            doc.splitTextToSize(profile, 170);

        doc.text(
            profileLines,
            20,
            y
        );

        y += profileLines.length * 5 + 8;


        // =========================
        // SKILLS
        // =========================

        doc.setTextColor(...dark);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);

        doc.text(
            "TECHNICAL SKILLS",
            20,
            y
        );

        y += 7;

        const skills = [

            "Frontend: HTML5, CSS3, JavaScript, React, Responsive Web Design",

            "Backend: Node.js, Express.js, REST APIs, Authentication Fundamentals",

            "Database: MongoDB, CRUD Operations, Database Fundamentals",

            "Design: UI/UX Design, Wireframing, Layout, Usability",

            "Tools: Git, GitHub, VS Code, Browser Developer Tools"

        ];

        doc.setTextColor(...gray);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);

        skills.forEach(skill => {

            const lines =
                doc.splitTextToSize(
                    "• " + skill,
                    165
                );

            doc.text(
                lines,
                23,
                y
            );

            y += lines.length * 5 + 2;

        });

        y += 5;


        // =========================
        // PROJECTS
        // =========================

        doc.setTextColor(...dark);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);

        doc.text(
            "PROJECTS",
            20,
            y
        );

        y += 7;

        const projects = [

            {
                name: "Student Portal",
                description:
                    "A student-focused web portal designed to organize useful services through a modern and responsive interface."
            },

            {
                name: "Haven Tutor Appointment",
                description:
                    "An online tutor appointment website focused on providing students with a simple and user-friendly booking experience."
            },

            {
                name: "Personal Portfolio",
                description:
                    "A responsive portfolio website showcasing my skills, projects, learning journey, and development goals."
            }

        ];

        projects.forEach(project => {

            doc.setTextColor(...red);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(10);

            doc.text(
                project.name,
                20,
                y
            );

            y += 5;

            doc.setTextColor(...gray);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(9);

            const lines =
                doc.splitTextToSize(
                    project.description,
                    165
                );

            doc.text(
                lines,
                23,
                y
            );

            y += lines.length * 5 + 6;

        });


        // =========================
        // LEARNING
        // =========================

        doc.setTextColor(...dark);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);

        doc.text(
            "CURRENT LEARNING FOCUS",
            20,
            y
        );

        y += 7;

        const learning = [

            "Improving JavaScript and React fundamentals.",

            "Learning backend development with Node.js and Express.js.",

            "Practicing database integration and API development.",

            "Improving UI/UX design and responsive layouts.",

            "Building practical projects to gain development experience."

        ];

        doc.setTextColor(...gray);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);

        learning.forEach(item => {

            doc.text(
                "• " + item,
                23,
                y
            );

            y += 5;

        });

        y += 7;


        // =========================
        // EDUCATION
        // =========================

        doc.setTextColor(...dark);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);

        doc.text(
            "EDUCATION",
            20,
            y
        );

        y += 7;

        doc.setTextColor(...gray);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);

        doc.text(
            "Currently studying Full-Stack Development and UI/UX Design.",
            20,
            y
        );

        y += 10;


        // =========================
        // CAREER OBJECTIVE
        // =========================

        doc.setTextColor(...dark);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);

        doc.text(
            "CAREER OBJECTIVE",
            20,
            y
        );

        y += 7;

        doc.setTextColor(...gray);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);

        const objective =
            "To grow into a skilled Full-Stack Developer and UI/UX Designer by gaining " +
            "real-world experience, building meaningful applications, and continuously " +
            "improving my technical and design abilities.";

        const objectiveLines =
            doc.splitTextToSize(
                objective,
                170
            );

        doc.text(
            objectiveLines,
            20,
            y
        );


        // =========================
        // FOOTER
        // =========================

        doc.setDrawColor(...lightGray);
        doc.setLineWidth(.3);

        doc.line(
            20,
            280,
            190,
            280
        );

        doc.setFontSize(8);
        doc.setTextColor(
            130,
            130,
            130
        );

        doc.text(
            "Diego O. Gadaingan Jr. | Aspiring Full-Stack Developer & UI/UX Designer",
            20,
            287
        );


        // =========================
        // DOWNLOAD
        // =========================

        doc.save(
            "Diego-Gadaingan-Resume.pdf"
        );

    });

}