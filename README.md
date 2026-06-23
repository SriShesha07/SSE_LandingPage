# Sri Shakthi Enterprises Website

Professional React.js website for Sri Shakthi Enterprises featuring a modern red/maroon theme.

## Features

- Modern, responsive design with red/maroon color scheme
- Smooth animations and transitions
- Complete service showcase
- Materials trading catalog
- Contact form
- SEO optimized

## Contact Form Setup

The contact form submits through Formspree. To connect it to your email:

1. Create or sign in to a Formspree account at https://formspree.io.
2. Create a new form and set its notification email to `srishakthi1976@gmail.com`.
3. Copy the form endpoint. It will look like `https://formspree.io/f/xxxxxxxx`.
4. Copy `.env.example` to a new file named `.env`.
5. Replace `your-form-id` in `.env` with the endpoint from Formspree.
6. Restart the development server after changing `.env`.
7. For production hosting, add `VITE_FORMSPREE_ENDPOINT` as an environment variable and redeploy.
8. Send one test enquiry and complete Formspree's email verification if requested.

Do not commit the local `.env` file. The form keeps the visitor's entries when a submission fails and only clears them after Formspree confirms success.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The website will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
website/
├── public/
│   └── images/          # Images extracted from company catalogue
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/          # Page components
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles and design system
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## Technologies Used

- React 18
- Vite
- React Router
- Framer Motion (animations)
- React Icons

## Company Information

**Sri Shakthi Enterprises**  
Excellence and Innovation Built Into Every Design

Contact: Sripathi R  
Mobile: 9600082704  
Email: srishakthi1976@gmail.com  
Address: No.133, Aadhavan nagar, Thirumazhisai, Chennai-124
