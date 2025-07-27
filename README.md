# SQWARE Documentation

[![MkDocs](https://img.shields.io/badge/MkDocs-Material-blue)](https://squidfunk.github.io/mkdocs-material/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)](https://docs.sqware.pro)

> **Building the future of community-owned gaming** - where players become stakeholders with real influence over the games and communities they love.

This repository contains the official documentation for SQWARE, a community-owned gaming platform that demonstrates merit-based governance and sustainable community economics through Game servers.

## 🌟 Features

- **Modern Documentation**: Built with MkDocs Material theme for a clean, professional experience
- **Dark Theme**: Optimized dark mode interface for comfortable reading
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Interactive Elements**: Grid cards, buttons, and enhanced navigation
- **Search Functionality**: Fast, client-side search across all documentation
- **Community Focus**: Documentation reflecting our community-owned platform vision

## 🚀 Quick Start

### Prerequisites

- Python 3.7 or higher
- pip (Python package installer)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/sq-ware/Documentation.git
   cd Documentation
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install mkdocs mkdocs-material
   ```

4. **Start the development server**
   ```bash
   mkdocs serve
   ```

5. **View the documentation**
   Open your browser to `http://localhost:8000`

### Building for Production

```bash
mkdocs build
```

The built site will be available in the `site/` directory.

## 📁 Project Structure

```
├── docs/                   # Documentation source files
│   ├── games/             # Community platform pages
│   ├── servers/           # Minecraft server documentation
│   ├── images/            # Images and assets
│   ├── javascripts/       # Custom JavaScript
│   ├── stylesheets/       # Custom CSS
│   └── index.md           # Homepage
├── overrides/             # Theme customizations
├── site/                  # Built documentation (generated)
├── mkdocs.yml            # MkDocs configuration
└── README.md             # This file
```

## 🎮 What is SQWARE?

SQWARE is pioneering a new model of community-owned gaming platforms where:

- **Merit Over Money**: Recognition through contribution, not financial investment
- **Player Governance**: Community members make real decisions about platform development
- **Sustainable Economics**: Fair reward systems that benefit active contributors

Our current implementation showcases these principles through Game servers, demonstrating that community-owned gaming platforms can work, grow, and thrive.

## 📖 Documentation Sections

- **[Community Platform](docs/games/index.md)**: Overview of our current Minecraft implementation
- **[Minecraft Servers](docs/servers/overview.md)**: Detailed server information and rules
- **[Recognition System](docs/rewards.md)**: How merit-based recognition works
- **[Community Store](docs/store.md)**: Platform economy and rewards
- **[Partnership Program](docs/partners.md)**: Collaboration opportunities
- **[Bug Bounty Program](docs/bugs.md)**: Community-powered security

## 🛠 Technologies Used

- **[MkDocs](https://www.mkdocs.org/)**: Static site generator
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)**: Modern documentation theme
- **[Python Markdown](https://python-markdown.github.io/)**: Content processing
- **Custom CSS/JS**: Enhanced styling and functionality

## 🤝 Contributing

We welcome contributions to improve our documentation! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes** to the documentation
4. **Test locally**: Run `mkdocs serve` to preview changes
5. **Commit your changes**: `git commit -m "Add your descriptive commit message"`
6. **Push to your branch**: `git push origin feature/your-feature-name`
7. **Submit a pull request**

### Writing Guidelines

- Use clear, concise language
- Follow Markdown best practices
- Include proper heading hierarchy
- Add internal links where relevant
- Test all changes locally before submitting

## 🔗 Links

- **Live Documentation**: [docs.sqware.pro](https://docs.sqware.pro)
- **Minecraft Server**: `mc.sqware.pro`
- **Discord Community**: [discord.sqware.pro](https://discord.sqware.pro)
- **Main Website**: [sqware.pro](https://sqware.pro)

## 📞 Support

- **Documentation Issues**: [GitHub Issues](https://github.com/your-org/sqware-docs/issues)
- **Community Support**: [Discord server](https://discord.sqware.pro)
- **Platform Questions**: Contact our community team

---

*Building the future of gaming, one block at a time. Join us in proving that community-owned platforms are the future of digital entertainment.* 