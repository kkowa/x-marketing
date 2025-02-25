Folder architecture

front/
├── public/ # Static assets (images, fonts, etc.)
│ └── images/ # Store images here
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Next.js pages (auto-routed)
│ │ ├── api/ # API routes (optional)
│ │ ├── index.js # Homepage
│ │ ├── about.js # About page
│ │ └── blog/ # Blog section
│ │ ├── index.js # Blog listing page
│ │ └── [slug].js # Dynamic blog post page
│ ├── styles/ # Global and modular styles
│ │ ├── globals.scss # Global styles
│ │ └── Home.module.scss # Modular styles for the homepage
│ ├── utils/ # Utility functions
│ └── data/ # Mock data (optional)
├── next.config.js # Next.js configuration
├── package.json # Project dependencies
└── README.md # Project documentation

Folder/File Namings Convenction

src/
├── components/ # Lowercase (folder)
│ └── Navbar/ # PascalCase (folder for a specific component)
│ ├── Navbar.tsx # PascalCase (component file)
│ └── Navbar.module.scss # Lowercase (styles file)
├── pages/ # Lowercase (folder)
│ ├── index.tsx # Lowercase (page file)
│ └── about.tsx # Lowercase (page file)
