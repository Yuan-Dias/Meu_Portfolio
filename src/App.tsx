import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Lock, Terminal, Database, Layout, Server, CheckCircle2, X, PlayCircle, Eye } from 'lucide-react';

// ==========================================
// 1. IMPORTAÇÃO DAS IMAGENS (O SEGREDO ESTÁ AQUI)
// ==========================================
// Você precisa criar essa pasta e colocar as imagens lá.
// Ajuste os caminhos abaixo conforme a estrutura do seu projeto!
//
// Exemplo se as imagens estiverem em src/assets/images:
// import imgCultivaMais from './assets/images/cultivamais.png';
// import imgAppMobile from './assets/images/app-mobile.png';
import imgDeliciasThai from './images/delicias-da-thai.png';
// import imgMatricula from './assets/images/matricula.png';

// COMO VOCÊ AINDA PODE ESTAR AJUSTANDO AS PASTAS, VOU USAR IMAGENS
// DE EXEMPLO ONLINE PARA VOCÊ VER A TELA FUNCIONANDO.
// DEPOIS, TROQUE PARA OS SEUS IMPORTS LOCAIS ACIMA!
const imgCultivaMais = "https://images.unsplash.com/photo-1592982537447-6f2a6a0c5cdd?q=80&w=800&auto=format&fit=crop";
const imgAppMobile = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop";
const imgMatricula = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop";


// --- TIPAGENS ---
interface SocialLinks {
    github: string;
    linkedin: string;
    email: string;
}

interface PersonalInfo {
    name: string;
    title: string;
    description: string;
    about: string;
    social: SocialLinks;
}

interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    isPrivate: boolean;
    repoLink: string | null;
    demoLink: string | null;
    image: string; // Agora vamos passar a variável importada aqui
    video?: string;
}

// --- FUNÇÃO AUXILIAR PARA YOUTUBE ---
const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11)
        ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&controls=1&rel=0`
        : null;
};

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const personalInfo: PersonalInfo = {
        name: "Yuan Dias",
        title: "Desenvolvedor Full Stack | Java & Web",
        description: "Focado em transformar necessidades de negócio em software robusto. Experiência em desenvolvimento de APIs seguras com Spring Boot e interfaces modernas.",
        about: "Desenvolvedor apaixonado por backend e sistemas distribuídos. Meu foco é entregar código que não apenas funcione, mas que seja manutenível e escalável.",
        social: {
            github: "https://github.com/Yuan-Dias",
            linkedin: "https://linkedin.com/in/yuan-barbosa-dias-3433802a5",
            email: "mailto:yuanbdias692@email.com"
        }
    };

    const skills = [
        { name: "Java / Spring Boot", icon: <Server size={14} /> },
        { name: "React / Next.js", icon: <Layout size={14} /> },
        { name: "MySQL / PostgreSQL", icon: <Database size={14} /> },
        { name: "API REST / Docker", icon: <Terminal size={14} /> },
    ];

    const workStyle = [
        "Código limpo e documentado (Clean Code)",
        "Testes automatizados e QA",
        "Comunicação clara com o time"
    ];

    // ==========================================
    // 2. USANDO AS IMAGENS IMPORTADAS NO ARRAY
    // ==========================================
    const projects: Project[] = [
        {
            id: 4,
            title: "Cultiva+ Gestão Agrícola",
            description: "Plataforma SaaS para o agronegócio. Implementei segurança com JWT e controle de acesso baseado em papéis (RBAC) para proteger dados sensíveis. O sistema conta com relatórios dinâmicos e painéis de controle em tempo real.",
            tech: ["Java", "Spring Security", "PostgreSQL", "React"],
            isPrivate: true,
            repoLink: null,
            demoLink: null,
            image: imgCultivaMais,
            video: "https://youtu.be/VloBlVQl58w"
        },
        {
            id: 3,
            title: "Aplicação Mobile Social",
            description: "App baseado em geolocalização. Desenvolvi a arquitetura serverless no Google Cloud, garantindo latência mínima para interações em tempo real.",
            tech: ["React Native", "Firebase", "TypeScript", "Google Cloud"],
            isPrivate: true,
            repoLink: null,
            demoLink: null,
            image: imgAppMobile
        },
        {
            id: 2,
            title: "Delícias da Thai",
            description: "Catálogo digital (PWA) com painel administrativo seguro. Permite à loja gerenciar o cardápio em tempo real e redireciona os pedidos dos clientes direto para o WhatsApp.",
            tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
            isPrivate: false,
            repoLink: "https://github.com/Yuan-Dias/Delicias_da_Thai.git",
            demoLink: "https://deliciasdathai.vercel.app",
            image: imgDeliciasThai,
            video: "https://youtu.be/Uj-6o7bNdF0"
        },
        {
            id: 1,
            title: "Sistema de Matrícula Acadêmica",
            description: "Plataforma de gestão acadêmica com diferentes níveis de acesso (RBAC). O sistema orquestra o fluxo completo de uma instituição: administradores estruturam cursos e disciplinas, professores gerenciam notas, e alunos realizam matrículas. Destaque para a modelagem relacional criada para suportar essas regras de negócio de forma segura.",
            tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
            isPrivate: false,
            repoLink: "https://github.com/Yuan-Dias/Matricula.git",
            demoLink: null,
            image: imgMatricula
        }
    ];

    React.useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    return (
        <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            </div>

            <div className="relative z-10">
                <header className="max-w-5xl mx-auto px-6 py-20 md:py-28">
                    <div className="flex flex-col-reverse md:flex-row gap-12 items-center justify-between animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="max-w-2xl text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/30 text-cyan-400 text-xs font-semibold tracking-wide mb-6 mx-auto md:mx-0">
                                <span className="relative flex h-2 w-2">
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 animate-pulse"></span>
                                </span>
                                DISPONÍVEL PARA PROJETOS
                            </div>

                            <h1 className="text-4xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight tracking-tight">
                                Olá, sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">{personalInfo.name}</span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                                {personalInfo.description}
                            </p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
                                {skills.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 border border-slate-800 rounded-md text-slate-300 text-sm hover:border-cyan-500/30 transition-colors cursor-default">
                                        {skill.icon}
                                        {skill.name}
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center md:justify-start gap-4">
                                <SocialButton icon={<Github size={20} />} href={personalInfo.social.github} label="GitHub" />
                                <SocialButton icon={<Linkedin size={20} />} href={personalInfo.social.linkedin} label="LinkedIn" />
                                <SocialButton icon={<Mail size={20} />} href={personalInfo.social.email} label="Email" primary />
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="w-40 h-40 md:w-64 md:h-64 rounded-full md:rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl shadow-cyan-900/20 bg-slate-800 relative z-10">
                                <img
                                    src="https://github.com/Yuan-Dias.png"
                                    alt="Yuan Dias"
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                                        e.currentTarget.parentElement!.innerHTML = '<span class="text-4xl">👨‍💻</span>';
                                    }}
                                />
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-2xl -z-10 rounded-full opacity-70" />
                        </div>
                    </div>
                </header>

                <section className="max-w-5xl mx-auto px-6 pb-24">
                    <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Terminal size={20} className="text-cyan-500"/> Sobre o meu trabalho
                        </h3>
                        <div className="flex flex-col md:flex-row gap-8 md:items-start">
                            <p className="text-slate-400 leading-relaxed flex-1">
                                {personalInfo.about} <br/><br/>
                                Atuo principalmente no ecossistema <strong>Java e Spring Boot</strong>, mas tenho facilidade em transitar pelo Frontend com React quando necessário. Busco oportunidades onde possa resolver problemas reais de arquitetura.
                            </p>

                            <div className="flex-1 bg-slate-950/50 rounded-xl p-6 border border-slate-800">
                                <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Como eu atuo</h4>
                                <ul className="space-y-3">
                                    {workStyle.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm text-slate-400">
                                            <CheckCircle2 size={16} className="text-cyan-500 mt-0.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <main className="max-w-6xl mx-auto px-6 pb-32">
                    <div className="flex items-end justify-between mb-12 border-b border-slate-800 pb-4">
                        <h2 className="text-3xl font-bold text-slate-100">
                            Projetos Selecionados <span className="text-cyan-500">.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </div>
                </main>

                <footer className="border-t border-slate-900 bg-slate-950/50 backdrop-blur-sm py-12 text-center flex flex-col items-center gap-4">
                    <p className="text-slate-200 font-medium">{personalInfo.name}</p>
                    <p className="text-slate-600 text-sm">Engenharia de Software · {new Date().getFullYear()}</p>
                </footer>
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
}

// ==========================================
// COMPONENTES (Card e Modal)
// Eu tirei a parte que escondia o erro,
// agora você VAI ver a imagem, nem que seja quebrada,
// para facilitar o debug se precisar no futuro.
// ==========================================

function ProjectCard({ project, onClick }: { project: Project, onClick: () => void }) {
    return (
        <div
            onClick={onClick}
            className="group relative bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col h-full overflow-hidden hover:shadow-2xl hover:shadow-cyan-900/20 cursor-pointer"
        >
            <div className="h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center">
                {/* AQUI ESTÁ A IMAGEM DO CARD */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover absolute inset-0 z-10 opacity-70 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                    // Removi o onError que escondia a imagem para você poder ver se ela quebrar de novo
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-100 z-10" />

                <div className="absolute z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                    {project.video ? (
                        <div className="bg-cyan-500/20 text-cyan-400 p-4 rounded-full backdrop-blur-md border border-cyan-500/50">
                            <PlayCircle size={36} fill="currentColor" className="text-cyan-900" />
                        </div>
                    ) : (
                        <div className="bg-slate-500/20 text-slate-300 p-4 rounded-full backdrop-blur-md border border-slate-500/50">
                            <Eye size={36} />
                        </div>
                    )}
                </div>

                <div className="absolute top-4 right-4 z-20 pointer-events-none">
                    {project.isPrivate ? (
                        <div className="flex items-center gap-1.5 bg-slate-950/90 backdrop-blur-md text-amber-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-amber-500/30 shadow-lg">
                            <Lock size={10} /> Privado
                        </div>
                    ) : (
                        <div className="flex items-center gap-1.5 bg-slate-950/90 backdrop-blur-md text-cyan-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-cyan-500/30 shadow-lg">
                            <Code2 size={12} /> Open Source
                        </div>
                    )}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1 relative">
                <div className="absolute -top-6 left-6 bg-slate-800 border-4 border-slate-900 rounded-xl p-2.5 text-cyan-400 shadow-lg z-20">
                    {project.isPrivate ? <Database size={24} /> : <Layout size={24} />}
                </div>

                <div className="mt-4">
                    <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                        {project.description}
                    </p>
                </div>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-[11px] font-medium text-slate-300 bg-slate-800/50 px-2 py-1 rounded border border-slate-700/50">
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > 3 && (
                            <span className="text-[11px] font-medium text-slate-400 bg-slate-800/20 px-2 py-1 rounded">
                                +{project.tech.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectModal({ project, onClose }: { project: Project, onClose: () => void }) {
    const embedUrl = project.video ? getYouTubeEmbedUrl(project.video) : null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />

            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 shadow-2xl rounded-2xl animate-in zoom-in-95 fade-in duration-300 custom-scrollbar">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 bg-slate-950/50 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors backdrop-blur-md"
                >
                    <X size={20} />
                </button>

                <div className="w-full aspect-video bg-slate-950 relative border-b border-slate-800 flex items-center justify-center overflow-hidden">
                    {embedUrl ? (
                        <iframe
                            width="100%"
                            height="100%"
                            src={embedUrl}
                            title={`Demonstração do projeto ${project.title}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 z-10"
                        ></iframe>
                    ) : (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-80"
                        />
                    )}
                </div>

                <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
                        {project.isPrivate ? (
                            <span className="flex items-center gap-1.5 bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider border border-amber-500/30">
                                <Lock size={12} /> Comercial (Privado)
                            </span>
                        ) : (
                            <span className="flex items-center gap-1.5 bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider border border-cyan-500/30">
                                <Code2 size={12} /> Open Source
                            </span>
                        )}
                    </div>

                    <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
                        {project.description}
                    </p>

                    <div className="mb-8">
                        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Tecnologias Utilizadas</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span key={tech} className="text-sm font-medium text-cyan-100 bg-cyan-950/50 px-3 py-1.5 rounded-md border border-cyan-800/50">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 border-t border-slate-800 pt-8 mt-auto">
                        {project.isPrivate ? (
                            <div className="w-full bg-slate-800/30 p-4 rounded-xl border border-slate-800 border-dashed text-center">
                                <p className="text-sm text-amber-500/80 uppercase tracking-wider font-semibold mb-1">
                                    Projeto Fechado (NDA)
                                </p>
                                <p className="text-sm text-slate-500">
                                    O código fonte deste projeto não é público por razões contratuais.
                                </p>
                            </div>
                        ) : (
                            <>
                                {project.repoLink && (
                                    <a href={project.repoLink} target="_blank" rel="noreferrer" className="flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl text-sm font-medium transition-all border border-slate-700 hover:border-slate-600">
                                        <Github size={18} /> Acessar Repositório
                                    </a>
                                )}
                                {project.demoLink && (
                                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex-1 min-w-[200px] flex items-center justify-center gap-2 bg-cyan-600/10 hover:bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/60 py-3 rounded-xl text-sm font-medium transition-all">
                                        <ExternalLink size={18} /> Ver Deploy em Produção
                                    </a>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function SocialButton({ icon, href, label, primary = false }: { icon: React.ReactNode, href: string, label: string, primary?: boolean }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className={`p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                primary
                    ? "bg-cyan-600 text-white shadow-lg shadow-cyan-900/20 hover:bg-cyan-500"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800"
            }`}
        >
            {icon}
        </a>
    );
}