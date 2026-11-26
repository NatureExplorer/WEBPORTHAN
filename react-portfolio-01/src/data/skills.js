const devicon = (technology, variant = "original") =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${technology}/${technology}-${variant}.svg`;

export const skills = [
    {
    category: "Technical Skills",
    items: [
        { name: "Python", icon: devicon("python") },
        { name: "SQL", icon: devicon("azuresqldatabase") },
        { name: "R", icon: devicon("rstudio") },
        { name: "Pandas", icon: devicon("pandas") },
        { name: "Numpy", icon: devicon("numpy") },
        { name: "Scikit-learn", icon: devicon("scikitlearn") },
        { name: "Matplotlib", icon: devicon("matplotlib") },
        { name: "Seaborn", icon: devicon("seaborn") }
        
    ]
},
{
    category: "Tools",
    items: [
        { name: "PostgreSQL", icon: devicon("postgresql") },
        { name: "Maria DB", icon: devicon("mariadb") },
        { name: "Apache Airflow", icon: devicon("apacheairflow") },
        { name: "Apache Spark", icon: devicon("apachespark") },
        { name: "Docker", icon: devicon("docker") },
        { name: "Git", icon: devicon("git") },
        { name: "Github", icon: devicon("github") },
        { name: "Visual Studio Code", icon: "../images/productif/vscode.png" },
        { name: "Jupyter Notebook", icon: devicon("jupyter") },
        { name: "Google Colab", icon: devicon("googlecolab") },
        { name: "Hugging Face", icon: devicon("huggingface") },
        { name: "n8n Automation", icon: devicon("n8n") },
        { name: "Power BI", icon: "../images/productif/powerbi.png" },
        { name: "Excel", icon: "../images/productif/excel.png" },
        { name: "Word", icon: "../images/productif/word.png" },
        { name: "LinkedIn", icon: devicon("linkedin") }
    ]
}
];
