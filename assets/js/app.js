/**
 * Portfolio app — React 18 + htm (JSX-like tagged templates, no build step).
 * Content comes from window.CV_CONTENT (assets/js/content.en.js or assets/js/content.es.js).
 */
(function () {
	"use strict";

	const h = React.createElement;
	const html = htm.bind(h);
	const useState = React.useState;
	const useEffect = React.useEffect;

	const C = window.CV_CONTENT;
	const SECTIONS = ["about", "skills", "experience", "education", "certifications", "contact"];

	/* ---------- Icons (inline SVG, stroke-based) ---------- */

	const ICONS = {
		mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/>',
		download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
		github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
		linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
		sun: '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>',
		moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
		menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
		close: '<path d="M18 6 6 18M6 6l12 12"/>',
		pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
		globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
		arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
		chevron: '<path d="m6 9 6 6 6-6"/>',
		cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
		pipeline: '<circle cx="6" cy="18" r="3"/><circle cx="18" cy="6" r="3"/><path d="M6 3v12"/><path d="M18 9a9 9 0 0 1-9 9"/>',
		zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
		users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
		award: '<circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/>',
		book: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'
	};

	function Icon(props) {
		return h("svg", {
			className: "icon " + (props.className || ""),
			viewBox: "0 0 24 24",
			width: props.size || 20,
			height: props.size || 20,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: 2,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			"aria-hidden": "true",
			dangerouslySetInnerHTML: { __html: ICONS[props.name] }
		});
	}

	/* ---------- Hooks ---------- */

	function readStoredTheme() {
		try { return localStorage.getItem("theme"); } catch (e) { return null; }
	}

	function useTheme() {
		const systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
		const initial = readStoredTheme() || (systemDark ? "dark" : "light");
		const state = useState(initial);
		const theme = state[0];

		useEffect(function () {
			document.documentElement.setAttribute("data-theme", theme);
		}, [theme]);

		function toggle() {
			const next = theme === "dark" ? "light" : "dark";
			try { localStorage.setItem("theme", next); } catch (e) { /* storage unavailable */ }
			state[1](next);
		}

		return [theme, toggle];
	}

	function useActiveSection(ids) {
		const state = useState(ids[0]);

		useEffect(function () {
			if (!("IntersectionObserver" in window)) return;
			const observer = new IntersectionObserver(function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) state[1](entry.target.id);
				});
			}, { rootMargin: "-40% 0px -55% 0px" });

			ids.forEach(function (id) {
				const el = document.getElementById(id);
				if (el) observer.observe(el);
			});
			return function () { observer.disconnect(); };
		}, []);

		return state[0];
	}

	function useReveal() {
		useEffect(function () {
			const nodes = document.querySelectorAll(".reveal");
			if (!("IntersectionObserver" in window)) {
				nodes.forEach(function (n) { n.classList.add("is-visible"); });
				return;
			}
			const observer = new IntersectionObserver(function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						observer.unobserve(entry.target);
					}
				});
			}, { threshold: 0.12 });
			nodes.forEach(function (n) { observer.observe(n); });
			return function () { observer.disconnect(); };
		}, []);
	}

	/* ---------- Layout ---------- */

	function Header(props) {
		const menu = useState(false);
		const open = menu[0];
		const setOpen = menu[1];
		const ui = C.ui;

		useEffect(function () {
			document.body.classList.toggle("menu-open", open);
		}, [open]);

		return html`
			<header className="site-header">
				<div className="container header-inner">
					<a className="brand" href="#top" aria-label=${C.profile.name}>
						<span className="brand-mark">LO</span>
						<span className="brand-name">${C.profile.name}</span>
					</a>

					<nav className=${"main-nav" + (open ? " is-open" : "")} aria-label="Main">
						<ul>
							${SECTIONS.map(function (id) {
								return html`
									<li key=${id}>
										<a href=${"#" + id}
										   className=${props.active === id ? "is-active" : ""}
										   aria-current=${props.active === id ? "true" : undefined}
										   onClick=${function () { setOpen(false); }}>
											${ui.nav[id]}
										</a>
									</li>`;
							})}
						</ul>
					</nav>

					<div className="header-actions">
						<a className="icon-btn lang-btn" href=${ui.switchLang.href} title=${ui.switchLang.title} hrefLang=${C.lang === "en" ? "es" : "en"}>
							<${Icon} name="globe" size=${18} />
							<span>${ui.switchLang.label}</span>
						</a>
						<button type="button" className="icon-btn" onClick=${props.onToggleTheme}
								aria-label=${props.theme === "dark" ? ui.themeToLight : ui.themeToDark}
								title=${props.theme === "dark" ? ui.themeToLight : ui.themeToDark}>
							<${Icon} name=${props.theme === "dark" ? "sun" : "moon"} size=${18} />
						</button>
						<button type="button" className="icon-btn menu-btn" onClick=${function () { setOpen(!open); }}
								aria-expanded=${open} aria-label=${open ? ui.closeMenu : ui.openMenu}>
							<${Icon} name=${open ? "close" : "menu"} size=${20} />
						</button>
					</div>
				</div>
			</header>`;
	}

	function SectionHead(props) {
		return html`
			<div className="section-head reveal">
				${props.kicker && html`<p className="kicker">${props.kicker}</p>`}
				<h2>${props.title}</h2>
			</div>`;
	}

	/* ---------- Sections ---------- */

	// Hero visual: a hand-highlighted PHP snippet. Each line is a list of
	// [tokenType, text] pairs; built with h() so indentation is preserved.
	const CODE_LINES = [
		[["kw", "final class "], ["cls", "LauraOrtuno "], ["kw", "extends "], ["cls", "Engineer"]],
		[["", "{"]],
		[["", "    "], ["kw", "public "], ["type", "string "], ["var", "$role"], ["", " = "], ["str", "'Tech Lead'"], ["", ";"]],
		[["", "    "], ["kw", "public "], ["type", "string "], ["var", "$city"], ["", " = "], ["str", "'Madrid'"], ["", ";"]],
		[["", "    "], ["kw", "public "], ["type", "array  "], ["var", "$stack"], ["", " = ["]],
		[["", "        "], ["str", "'PHP 8.4'"], ["", ", "], ["str", "'Symfony 7'"], ["", ","]],
		[["", "        "], ["str", "'Azure'"], ["", ", "], ["str", "'Terraform'"], ["", ","]],
		[["", "    ];"]],
		[["", ""]],
		[["", "    "], ["kw", "public function "], ["fn", "deliver"], ["", "(): "], ["cls", "Platform"]],
		[["", "    {"]],
		[["", "        "], ["kw", "return "], ["var", "$this"], ["", "->"], ["fn", "architect"], ["", "()"]],
		[["", "            ->"], ["fn", "test"], ["", "()"]],
		[["", "            ->"], ["fn", "ship"], ["", "()"]],
		[["", "            ->"], ["fn", "scale"], ["", "();"]],
		[["", "    }"]],
		[["", "}"]]
	];

	function CodeCard() {
		const lines = CODE_LINES.map(function (tokens, i) {
			return h("span", {key: i, className: "code-line"}, tokens.map(function (t, j) {
				return t[0] ? h("span", {key: j, className: "tk-" + t[0]}, t[1]) : t[1];
			}));
		});
		return html`
			<figure className="code-card reveal" aria-hidden="true">
				<div className="code-bar">
					<span className="dot"></span><span className="dot"></span><span className="dot"></span>
					<span className="code-file">src/Engineer/LauraOrtuno.php</span>
				</div>
				<pre><code>${lines}</code></pre>
			</figure>`;
	}

	function Hero() {
		const p = C.profile;
		const ui = C.ui;
		return html`
			<section className="hero" id="about">
				<div className="container hero-grid">
					<div className="hero-copy reveal">
						<p className="status"><span className="pulse"></span>${ui.available}</p>
						<h1>${p.name}</h1>
						<p className="hero-role">${p.role}</p>
						<p className="hero-intro">${p.intro}</p>
						<p className="hero-summary">${p.summary}</p>
						<div className="hero-cta">
							<a className="btn btn-primary" href="#contact">
								<${Icon} name="mail" size=${18} /> ${ui.contactMe}
							</a>
							<a className="btn btn-ghost" href=${p.cv} target="_blank" rel="noopener" download>
								<${Icon} name="download" size=${18} /> ${ui.downloadCv}
							</a>
						</div>
						<ul className="hero-social">
							<li><a href=${p.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><${Icon} name="linkedin" /></a></li>
							<li><a href=${p.github} target="_blank" rel="noopener" aria-label="GitHub"><${Icon} name="github" /></a></li>
							<li><a href=${"mailto:" + p.email} aria-label="Email"><${Icon} name="mail" /></a></li>
							<li className="hero-location"><${Icon} name="pin" size=${16} /> ${p.location}</li>
						</ul>
					</div>
					<${CodeCard} />
				</div>

				<div className="container">
					<ul className="stats">
						${C.stats.map(function (s, i) {
							return html`
								<li key=${i} className="stat reveal" style=${{ transitionDelay: i * 70 + "ms" }}>
									<strong>${s.value}</strong>
									<span>${s.label}</span>
								</li>`;
						})}
					</ul>
				</div>
			</section>`;
	}

	function Highlights() {
		const s = C.ui.sections.highlights;
		return html`
			<section className="section" id="highlights" aria-labelledby="highlights-title">
				<div className="container">
					<${SectionHead} kicker=${s.kicker} title=${s.title} />
					<div className="highlight-grid">
						${C.highlights.map(function (item, i) {
							return html`
								<article key=${i} className="card highlight reveal" style=${{ transitionDelay: i * 80 + "ms" }}>
									<span className="highlight-icon"><${Icon} name=${item.icon} size=${22} /></span>
									<h3>${item.title}</h3>
									<p>${item.text}</p>
								</article>`;
						})}
					</div>
				</div>
			</section>`;
	}

	function Skills() {
		const s = C.ui.sections.skills;
		return html`
			<section className="section section-alt" id="skills">
				<div className="container">
					<${SectionHead} kicker=${s.kicker} title=${s.title} />
					<div className="skills-grid">
						${C.skills.map(function (group, i) {
							return html`
								<div key=${i} className="card skill-card reveal">
									<h3>${group.group}</h3>
									<ul className="chips">
										${group.items.map(function (item) {
											return html`<li key=${item} className="chip">${item}</li>`;
										})}
									</ul>
								</div>`;
						})}
					</div>
				</div>
			</section>`;
	}

	const VISIBLE_BULLETS = 4;

	function Role(props) {
		const role = props.role;
		const expanded = useState(false);
		const isOpen = expanded[0];
		const hidden = role.bullets.length - VISIBLE_BULLETS;
		const bullets = isOpen ? role.bullets : role.bullets.slice(0, VISIBLE_BULLETS);
		const ui = C.ui;

		return html`
			<div className=${"role" + (role.end ? "" : " is-current")}>
				<div className="role-head">
					<h4>${role.title}</h4>
					<p className="role-meta">
						<time>${role.start} – ${role.end || ui.present}</time>
						<span aria-hidden="true">·</span>
						<span>${role.location}</span>
					</p>
				</div>
				<ul className="role-bullets">
					${bullets.map(function (b, i) { return html`<li key=${i}>${b}</li>`; })}
				</ul>
				${hidden > 0 && html`
					<button type="button" className="link-btn" aria-expanded=${isOpen}
							onClick=${function () { expanded[1](!isOpen); }}>
						${isOpen ? ui.showLess : ui.showMore(hidden)}
						<${Icon} name="chevron" size=${16} className=${isOpen ? "rot" : ""} />
					</button>`}
				<ul className="chips chips-sm">
					${role.stack.map(function (t) { return html`<li key=${t} className="chip">${t}</li>`; })}
				</ul>
			</div>`;
	}

	function Experience() {
		const s = C.ui.sections;
		return html`
			<section className="section" id="experience">
				<div className="container">
					<${SectionHead} kicker=${s.experience.kicker} title=${s.experience.title} />
					<ol className="timeline">
						${C.experience.map(function (job) {
							return html`
								<li key=${job.company} className="timeline-item reveal">
									<div className="timeline-marker" aria-hidden="true"></div>
									<article className="card job">
										<header className="job-head">
											<h3>${job.company}</h3>
											<span className="job-context">${job.context}</span>
										</header>
										${job.roles.map(function (role) {
											return html`<${Role} key=${role.title} role=${role} />`;
										})}
									</article>
								</li>`;
						})}
					</ol>

					<h3 className="subhead reveal">${s.earlier.title}</h3>
					<div className="earlier-grid">
						${C.earlier.map(function (e) {
							return html`
								<article key=${e.company} className="card earlier reveal">
									<p className="earlier-period">${e.period}</p>
									<h4>${e.company}</h4>
									<p className="earlier-role">${e.role}</p>
									<p>${e.text}</p>
								</article>`;
						})}
					</div>
				</div>
			</section>`;
	}

	function Education() {
		const s = C.ui.sections;
		return html`
			<section className="section section-alt" id="education">
				<div className="container">
					<${SectionHead} kicker=${s.education.kicker} title=${s.education.title} />
					<div className="edu-grid">
						<div className="edu-list">
							${C.education.map(function (e) {
								return html`
									<article key=${e.title} className="card edu reveal">
										<span className="highlight-icon"><${Icon} name="book" size=${22} /></span>
										<div>
											<h3>${e.title}</h3>
											<p>${e.school}</p>
											<p className="muted">${e.period}</p>
										</div>
									</article>`;
							})}
						</div>
						<div className="card languages reveal">
							<h3>${s.languages}</h3>
							<ul>
								${C.languages.map(function (l) {
									return html`
										<li key=${l.name}>
											<div className="lang-row"><strong>${l.name}</strong><span>${l.level}</span></div>
											<div className="meter" role="presentation"><span style=${{ width: l.value + "%" }}></span></div>
										</li>`;
								})}
							</ul>
						</div>
					</div>
				</div>
			</section>`;
	}

	function Certifications() {
		const s = C.ui.sections.certifications;
		return html`
			<section className="section" id="certifications">
				<div className="container">
					<${SectionHead} kicker=${s.kicker} title=${s.title} />
					<ul className="cert-grid">
						${C.certifications.map(function (c) {
							return html`
								<li key=${c.title} className="cert reveal">
									<${Icon} name="award" size=${20} />
									<div>
										<p className="cert-title">${c.title}</p>
										<p className="cert-meta">${c.issuer} · <time>${c.date}</time></p>
									</div>
								</li>`;
						})}
					</ul>
				</div>
			</section>`;
	}

	function Contact() {
		const s = C.ui.sections.contact;
		const p = C.profile;
		const links = [
			{ icon: "mail", label: "Email", value: p.email, href: "mailto:" + p.email },
			{ icon: "linkedin", label: "LinkedIn", value: "in/lauraortunolopez", href: p.linkedin },
			{ icon: "github", label: "GitHub", value: "github.com/lortuno", href: p.github },
			{ icon: "download", label: "CV (PDF)", value: C.ui.downloadCv, href: p.cv }
		];
		return html`
			<section className="section contact" id="contact">
				<div className="container">
					<div className="contact-panel reveal">
						<div>
							<p className="kicker">${s.kicker}</p>
							<h2>${s.title}</h2>
							<p className="contact-text">${s.text}</p>
						</div>
						<ul className="contact-links">
							${links.map(function (l) {
								const external = l.href.indexOf("http") === 0;
								return html`
									<li key=${l.label}>
										<a href=${l.href} target=${external ? "_blank" : undefined} rel=${external ? "noopener" : undefined}
										   download=${l.icon === "download" ? true : undefined}>
											<span className="contact-icon"><${Icon} name=${l.icon} /></span>
											<span className="contact-label">
												<small>${l.label}</small>
												<span>${l.value}</span>
											</span>
											<${Icon} name="arrow" size=${18} className="contact-arrow" />
										</a>
									</li>`;
							})}
						</ul>
					</div>
				</div>
			</section>`;
	}

	function Footer() {
		return html`
			<footer className="site-footer">
				<div className="container footer-inner">
					<p>© ${new Date().getFullYear()} ${C.profile.name}</p>
					<p className="muted">${C.ui.footer}</p>
				</div>
			</footer>`;
	}

	function App() {
		const themeState = useTheme();
		const active = useActiveSection(SECTIONS);
		useReveal();

		return html`
			<${React.Fragment}>
				<a className="skip-link" href="#main">${C.ui.skip}</a>
				<${Header} theme=${themeState[0]} onToggleTheme=${themeState[1]} active=${active} />
				<main id="main">
					<${Hero} />
					<${Highlights} />
					<${Skills} />
					<${Experience} />
					<${Education} />
					<${Certifications} />
					<${Contact} />
				</main>
				<${Footer} />
			<//>`;
	}

	ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
