# Sadia Ghani Malik - Portfolio Website

A modern, responsive, and fully functional single-page portfolio website for Sadia Ghani Malik, a .NET Developer specializing in financial applications.

## Features

### 📱 Responsive Design
- Mobile-first approach
- Works seamlessly on all devices (desktop, tablet, mobile)
- Adaptive navigation with hamburger menu on mobile
- Touch-friendly interface

### 🎨 Modern UI/UX
- Clean and professional design
- Smooth animations and transitions
- Interactive elements with hover effects
- Gradient backgrounds and modern color scheme
- Accessible typography and color contrasts

### 📑 Sections Included

1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **About Me** - Personal introduction and statistics
3. **Work Experience** - Timeline view of professional journey
4. **Skills & Expertise** - Categorized technical skills
5. **Projects** - Showcase of mobile applications (BAHL, BankCorp, DebitCredit, ScanNPay)
6. **Certifications** - Professional credentials
7. **Research & Publications** - Contributions and articles
8. **Personal Interests** - Passions and hobbies
9. **Contact** - Multiple ways to connect
10. **Footer** - Quick links and copyright

### ✨ Interactive Features

- **Mobile Menu Toggle** - Hamburger menu for smaller screens
- **Smooth Scrolling** - Navigation links smoothly scroll to sections
- **Project Slider** - Image slider for each project
- **Scroll Animations** - Elements fade in as they come into view
- **Stats Counter** - Animated numbers in the About section
- **Active Navigation** - Highlights current section in navigation
- **Back to Top Button** - Floating button for easy navigation
- **Parallax Effect** - Subtle parallax scrolling on hero section

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid, Flexbox, and animations
- **jQuery 3.6.0** - Interactive functionality
- **Font Awesome 6.0** - Icon library
- **Google Fonts** - Typography

## File Structure

```
SadiaPortfolio/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # jQuery functionality
├── README.md           # This file
├── cv/                 # Resume PDF
│   └── Net Developer-Sadia-Ghani-Malik-Resume.pdf
└── portfolioImages/    # Project images
    ├── profilepic.jpg
    ├── BAHL/
    ├── BankCorp/
    ├── DebitCredit/
    └── ScanNPay/
```

## Installation & Setup

### Option 1: Local File System
1. Download/clone all files
2. Open `index.html` in your web browser
3. That's it! No server required for basic functionality

### Option 2: Local Web Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with live-server)
npm install -g live-server
live-server

# Using VS Code Live Server Extension
# Install the extension and click "Go Live"
```

Then open `http://localhost:8000` (or your server's port) in your browser.

## Customization Guide

### Update Personal Information
Edit `index.html` and update:
- Name and title in the logo section
- Hero section text
- About me section content
- Contact email and LinkedIn URL

### Modify Colors
Edit `:root` variables in `styles.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... other colors ... */
}
```

### Add Project Images
1. Place project images in the respective folders under `portfolioImages/`
2. Update the `projectImages` object in `script.js`
3. Update image references in `index.html`

### Update Work Experience
Modify the timeline items in the Experience section of `index.html`:
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3>Your Position</h3>
        <p class="company">Your Company</p>
        <!-- ... -->
    </div>
</div>
```

### Add Skills
Update the skills-grid in `index.html`:
```html
<div class="skill-category">
    <h3>Your Category</h3>
    <div class="skill-list">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

### Add Certifications
Add new certification cards in the Certifications section:
```html
<div class="cert-card">
    <div class="cert-icon">
        <i class="fas fa-certificate"></i>
    </div>
    <h3>Certification Name</h3>
    <p class="cert-issuer">Issuer</p>
    <p class="cert-date">Year</p>
</div>
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Lazy loading for images
- Optimized animations
- Minified assets ready for production
- Fast page load times

## SEO Optimization

- Semantic HTML markup
- Meta tags for search engines
- Structured content
- Mobile-friendly design

## Accessibility Features

- ARIA labels
- Keyboard navigation support
- High contrast colors
- Readable font sizes
- Semantic HTML elements

## Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## jQuery Features

### Mobile Menu
- Click hamburger icon to toggle menu
- Auto-close when link is clicked
- Close with ESC key

### Scroll Navigation
- Active link highlighting based on scroll position
- Smooth scroll to sections
- 1-second animation duration

### Project Slider
- Navigate through project images
- Next/Previous buttons
- Fade transition between images

### Animations
- Fade-in effects on scroll
- Stats counter animation
- Hover effects on interactive elements

### Back to Top
- Appears after scrolling 300px down
- Smooth scroll animation
- Fixed position on right side

## Future Enhancements

- [ ] Add contact form with email validation
- [ ] Implement dark mode toggle
- [ ] Add blog section
- [ ] Add testimonials section
- [ ] Implement search functionality
- [ ] Add multi-language support
- [ ] Create API for dynamic content
- [ ] Add CMS integration

## Browser DevTools Tips

### Test Responsive Design
1. Press F12 to open DevTools
2. Click the device toggle button (Ctrl+Shift+M)
3. Select different device sizes

### Performance Analysis
1. Open DevTools
2. Go to Lighthouse tab
3. Run audit for performance metrics

## Troubleshooting

### Images not showing
- Verify image file paths are correct
- Check that images exist in the specified directories
- Use browser DevTools to check for 404 errors

### Scripts not working
- Ensure jQuery is loaded before script.js
- Check browser console for JavaScript errors
- Verify CDN links are accessible

### Styling issues
- Clear browser cache (Ctrl+Shift+Delete)
- Try a different browser
- Check for CSS syntax errors in DevTools

## Support & Maintenance

For updates or modifications:
1. Review code comments for guidance
2. Test on multiple devices
3. Use browser DevTools for debugging
4. Keep libraries updated

## License

This portfolio is personal and for demonstration purposes. Feel free to use it as a template for your own portfolio.

## Contact

- Email: sadiagmalik.m@gmail.com
- LinkedIn: https://www.linkedin.com/in/sadiaghanimalik/

---

**Last Updated**: November 2025
**Version**: 1.0

Enjoy showcasing your work! 🚀
