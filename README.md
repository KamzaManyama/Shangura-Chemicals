# Shangura Chemicals Website

A modern, world-class website for **Shangura Chemicals (Pty) Ltd**, built with **HTML, TailwindCSS, and JavaScript**. The site blends a professional company profile with an e-commerce feel, showcasing products, mission, vision, and career opportunities while delivering a seamless user experience.

---

## Features
- Responsive and modern design with TailwindCSS  
- Dynamic SEO metadata injection via `seo-404.js`  
- About Us page with mission, vision, values, and team  
- Products showcase for chemical categories  
- Careers page with interactive job listings and application form  
- Contact page with form, map, and company details  
- Custom 404 error handling and redirection support  
- Scalable structure for WordPress or CMS integration  

---

## Project Structure
/project-root
├── index.html # Landing page
├── about.html # About us
├── products.html # Product catalogue
├── careers.html # Careers
├── contact.html # Contact page
├── 404.html # Custom error page
│
├── assets/
│ ├── css/ # Tailwind + custom CSS
│ ├── js/
│ │ └── seo-404.js # SEO + 404 handler
│ └── images/ # Logos, product & hero images
│
└── README.md # Documentation

yaml
Copy code

---

## Setup
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/shangura-chemicals-site.git
   cd shangura-chemicals-site
Install Tailwind (if using locally):

bash
Copy code
npm install
npx tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --watch
(Alternatively, you can use the CDN build in HTML.)

Open index.html in a browser, or run:

bash
Copy code
npx serve
Design Guidelines
Colors:

Yellow #FFC000

Black #000000

White #FFFFFF

Style:

Grid & card-based layouts

Bold hero sections with CTAs

Professional typography

Consistent iconography

Recommended Images
Hero sections → chemical labs, industrial plants, professionals

Products → pharmaceutical excipients, metal sulphates, chlorides, phosphates

About Us → teamwork & innovation visuals

Careers → growth, collaboration, modern office culture

Contact → Johannesburg cityscape or map imagery

Contact
Email: info@shangurachemicals.co.za

Phone: +27 11 366 2593

Location: Kempton Park, Johannesburg, South Africa

Roadmap
WordPress/WooCommerce integration

Product search & filters

Blog/news updates

Multi-language support

Analytics integration

License
Proprietary software — © Shangura Chemicals (Pty) Ltd. All rights reserved.

yaml
Copy code

---

👉 Do you also want me to **write an even shorter “one-page README”** (like 15 lines max) so it’s super lightweight for GitHu
