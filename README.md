# Himanshu Verma - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Software Developer.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Contact Form** - Direct email sending via EmailJS
- **Download Resume** - Easy access to downloadable resume
- **Smooth Scrolling** - Seamless navigation between sections
- **Animated Elements** - Engaging animations and transitions
- **SEO Optimized** - Proper meta tags and structure

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **EmailJS** - Contact form email service
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter font family)

## 📁 Project Structure

```
project/
├── index.html              # Main HTML file
├── styles.css              # CSS styles
├── script.js               # JavaScript functionality
├── README.md               # This file
├── resume.pdf              # Downloadable resume
└── public/                 # Static assets
    └── IMG-20240224-WA0037.jpg  # Profile photo
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation
1. **Clone or download** the project files
2. **Open `index.html`** in your web browser
3. **That's it!** The website is ready to use

### Local Development
If you want to make changes:
1. **Edit the files** using any code editor (VS Code, Sublime Text, etc.)
2. **Refresh your browser** to see changes
3. **No build process required** - it's pure HTML/CSS/JS

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails directly from the website:

1. **Sign up** for EmailJS (free): https://www.emailjs.com/
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template** with variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{title}}` - Message subject
   - `{{message}}` - Message content
4. **Update the JavaScript** in `script.js` with your credentials:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
   ```

## 🎨 Customization

### Colors
Update the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1e40af;
    --secondary-color: #0d9488;
    --accent-color: #f59e0b;
    /* ... other colors */
}
```

### Content
- **Personal Info**: Update in `index.html`
- **Projects**: Add/remove project cards
- **Skills**: Modify skill categories and progress bars
- **Experience**: Update timeline items

### Profile Photo
Replace `public/IMG-20240224-WA0037.jpg` with your own photo

## 📱 Responsive Design

The website is fully responsive and works on:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About Me

**Himanshu Verma**
- **Role**: Software Developer & Tech Enthusiast
- **Education**: B.Tech Computer Science Engineering (AI & ML)
- **Location**: Lucknow, Uttar Pradesh, India
- **Email**: himanshuve.0309@gmail.com
- **Phone**: +91 7459553774

## 🚀 Deployment

### GitHub Pages
1. **Push code** to GitHub repository
2. **Go to Settings** → Pages
3. **Select source branch** (usually `main`)
4. **Your site will be live** at `https://username.github.io/repository-name`

### Netlify
1. **Drag and drop** the project folder to Netlify
2. **Your site is instantly deployed**
3. **Get a custom domain** (optional)

### Vercel
1. **Connect your GitHub repository**
2. **Vercel automatically deploys** your site
3. **Get a custom domain** (optional)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

- **Email**: himanshuve.0309@gmail.com
- **LinkedIn**: [Himanshu Verma](https://linkedin.com/in/himanshu-verma)
- **GitHub**: [Himanshuverma2005](https://github.com/Himanshuverma2005)

---

**Made with ❤️ by Himanshu Verma** 