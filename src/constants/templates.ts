export const templates = [{
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
},
{
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
        <h1>Software Development Proposal</h1>
        <p><strong>Prepared For:</strong> [Client Name]</p>
        <p><strong>Prepared By:</strong> [Your Name or Company]</p>
        <p><strong>Date:</strong> [DD/MM/YYYY]</p>

        <h2>Project Overview</h2>
        <p>[Brief description of the software and its purpose]</p>

        <h2>Objectives</h2>
        <ul>
        <li>Objective 1</li>
        <li>Objective 2</li>
        <li>Objective 3</li>
        </ul>

        <h2>Scope of Work</h2>
        <p>[Describe the features, technologies, and limitations]</p>

        <h2>Timeline</h2>
        <p><strong>Phase 1:</strong> [Description] - [Timeline]</p>
        <p><strong>Phase 2:</strong> [Description] - [Timeline]</p>

        <h2>Budget</h2>
        <p>[Estimated Cost and Payment Terms]</p>

        <h2>Contact Information</h2>
        <p>Email: your.email@example.com<br>Phone: +91-XXXXXXXXXX</p>

    `
},
{
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
        <h1>Project Proposal</h1>
        <p><strong>Project Title:</strong> [Project Name]</p>
        <p><strong>Prepared By:</strong> [Your Name]</p>
        <p><strong>Date:</strong> [DD/MM/YYYY]</p>

        <h2>Executive Summary</h2>
        <p>[A brief summary of the project goals and impact]</p>

        <h2>Background</h2>
        <p>[Context or background that led to the project idea]</p>

        <h2>Objectives</h2>
        <ul>
        <li>Goal 1</li>
        <li>Goal 2</li>
        <li>Goal 3</li>
        </ul>

        <h2>Methodology</h2>
        <p>[How the project will be executed and managed]</p>

        <h2>Timeline</h2>
        <p>[Milestones and expected completion dates]</p>

        <h2>Budget</h2>
        <p>[Estimated cost and funding source]</p>

    `
},
{
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
        <p>[Your Name]<br>
        [Your Address]<br>
        [City, State ZIP Code]<br>
        [Email Address]<br>
        [Phone Number]</p>

        <p>[Date]</p>

        <p>[Recipient Name]<br>
        [Title/Position]<br>
        [Company Name]<br>
        [Address Line 1]<br>
        [City, State ZIP Code]</p>

        <p>Dear [Recipient Name],</p>

        <p>[Start with a formal greeting and state the purpose of the letter. Include necessary information in the body paragraphs. Conclude with a polite closing statement.]</p>

        <p>Sincerely,<br>[Your Name]</p>

    `
},
{
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
        <h1>[Your Full Name]</h1>
        <p>Email: your.email@example.com | Phone: +91-XXXXXXXXXX | LinkedIn: [link]</p>

        <h2>Professional Summary</h2>
        <p>[Brief overview of your experience and career goals]</p>

        <h2>Skills</h2>
        <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
        </ul>

        <h2>Experience</h2>
        <p><strong>[Job Title]</strong> — [Company Name]</p>
        <p>[Month YYYY] - [Month YYYY]</p>
        <ul>
        <li>[Responsibility or achievement]</li>
        </ul>

        <h2>Education</h2>
        <p><strong>[Degree]</strong> — [Institution]</p>
        <p>[Month YYYY] - [Month YYYY]</p>

        <h2>Projects</h2>
        <p><strong>[Project Name]</strong><br>
        [Brief description of the project and your role]</p>

    `
},
{
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
        <p>[Your Name]<br>
        [Your Address]<br>
        [City, State ZIP Code]<br>
        [Email Address] | [Phone Number]</p>

        <p>[Date]</p>

        <p>[Hiring Manager's Name]<br>
        [Company Name]<br>
        [Company Address Line 1]<br>
        [City, State ZIP Code]</p>

        <p>Dear [Hiring Manager's Name],</p>

        <p>I am writing to express my interest in the [Job Title] position at [Company Name]. I believe my background in [relevant skill or industry] and experience with [specific experience] make me a strong candidate for this role.</p>

        <p>[Expand on your qualifications, achievements, and enthusiasm for the company]</p>

        <p>Thank you for considering my application. I look forward to the opportunity to contribute to your team.</p>

        <p>Sincerely,<br>[Your Name]</p>

    `
},
{
    id: "letter",
    label: "Letter",
    imageUrl: "letter.svg",
    initialContent: `
        <p>[Your Name]<br>
        [Your Address]<br>
        [Email Address] | [Phone Number]</p>

        <p>[Date]</p>

        <p>Dear [Recipient's Name],</p>

        <p>[Start with a friendly greeting and the purpose of the letter. You can use this template for informal, formal, or thank-you letters depending on tone and content.]</p>

        <p>[Add more details in the body. Use separate paragraphs if needed.]</p>

        <p>Warm regards,<br>[Your Name]</p>

    `
},
];