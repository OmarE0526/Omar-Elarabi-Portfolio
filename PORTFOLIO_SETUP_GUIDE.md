# Engineering Portfolio - Setup Guide

## 🎯 Overview

This is a modern, engineering-focused portfolio website designed for mechanical engineering professionals. The site features a clean, analytical aesthetic with structured layouts that reflect engineering precision and technical competence.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Navigation.tsx   # Fixed header with smooth scroll
│   │   ├── ThemeToggle.tsx  # System aesthetics panel
│   │   ├── ScrollToTop.tsx  # Scroll-to-top button
│   │   ├── HeroSection.tsx  # Landing hero with large typography
│   │   ├── ProfessionalFocus.tsx
│   │   ├── DesignPriorities.tsx
│   │   ├── TrajectoryMilestones.tsx
│   │   ├── TechnicalMatrix.tsx
│   │   ├── SelectedWorks.tsx
│   │   └── ContactSection.tsx
│   ├── pages/               # Page components
│   │   ├── Home.tsx         # Main single-page portfolio
│   │   └── ProjectDetail.tsx # Individual project pages
│   ├── data/
│   │   └── portfolio-data.ts # ALL CONTENT - Edit this file!
│   ├── utils/
│   │   └── constants.ts     # CV download URL and links
│   ├── routes.tsx           # React Router configuration
│   └── App.tsx              # Root application component
└── styles/
    ├── fonts.css            # Google Fonts imports
    ├── theme.css            # Theme variables and colors
    └── index.css            # Global styles
```

## 🚀 Quick Start - Populating Your CV Data

### Step 1: Edit `/src/app/data/portfolio-data.ts`

This is the **ONLY** file you need to edit to populate your entire portfolio. All sections automatically update based on this data.

**Replace all `[CV: ...]` placeholders with your actual information.**

Example transformations:
```typescript
// BEFORE:
name: "[CV: Full Name]",

// AFTER:
name: "Jane Smith",
```

### Step 2: Update CV Download Link

Edit `/src/app/utils/constants.ts`:
```typescript
export const CV_DOWNLOAD_URL = "/path/to/your-cv.pdf";
```

### Step 3: Add Projects

In `portfolio-data.ts`, add/edit projects in the `projects` array:
- Each project automatically gets its own detail page
- Use unique `id` values (e.g., "project-1", "thermal-analysis-2024")
- Fill in all technical details, constraints, and results
- Add `thumbnail` URLs if you have project images

### Step 4: Customize Skills

Update the `technicalMatrix` array with your actual skills and proficiency levels:
- **Introduced**: Basic familiarity
- **Proficient**: Comfortable working independently
- **Expert**: Advanced mastery

## 🎨 Theme System

The portfolio includes 3 aesthetic presets:

1. **Clean Professional** (default) - Neutral engineering aesthetic
2. **Sustainable Engineering** - Green/blue tones for energy systems
3. **High-Energy Simulation** - Red accents for thermal/dynamic systems

Users can toggle between themes using the settings button (bottom right).

## 🔧 Key Features

### Navigation
- Fixed header with smooth scroll to sections
- Mobile-responsive
- Dark mode toggle

### Hero Section
- Large typography for immediate impact
- Technical grid background
- Blueprint-style corner elements
- "View Projects" and "Download CV" CTAs

### Professional Focus
- Two-column layout
- Auto-generated from CV data
- Emphasizes technical competence

### Design Priorities & Working Environment
- Numbered priority lists
- Extracted from your experience and projects
- Shows engineering methodology

### Trajectory & Milestones
- Timeline format
- Three columns: Education, Experience, Certifications
- Professional chronology

### Technical Matrix
- Visual proficiency bars
- Categorized skills
- Calibrated levels (Introduced → Proficient → Expert)

### Selected Works
- Grid of project cards
- Click to view detailed project pages
- Category tags and descriptors

### Project Detail Pages
- Structured engineering format:
  - Context
  - Constraints
  - Operating Conditions
  - Project Data
  - Engineering Strategy
  - Performance Metrics
  - Engineering Insight callout

### Contact Section
- "Ready for Impact" statement
- Email, LinkedIn, CV download
- Contact form
- Footer

## 📝 Content Guidelines

When populating your data, follow these principles:

### Tone
- **Analytical**, not promotional
- **Precise**, not vague
- **Quantified**, not qualitative
- **Technical**, not buzzword-heavy

### Project Descriptions
Good: "Reduced thermal resistance by 23% through optimised fin geometry validated against CFD simulation"
Avoid: "Improved performance using innovative design"

### Skills
- Only list tools you've actually used on projects
- Be honest about proficiency levels
- Focus on engineering-specific tools

### Professional Focus
- Emphasize systems thinking
- Highlight computational/analytical approaches
- Connect academic work to real-world applications

## 🎯 Sections Overview

| Section | Purpose | Data Source |
|---------|---------|-------------|
| Hero | First impression, name prominence | `personalInfo` |
| Professional Focus | Engineering philosophy | `professionalFocus` |
| Design Priorities | Technical methodology | `designPriorities` |
| Working Environment | Collaboration style | `workingEnvironment` |
| Trajectory | Academic & professional timeline | `education`, `experience`, `certifications` |
| Technical Matrix | Skills visualization | `technicalMatrix` |
| Selected Works | Project showcase | `projects` |
| Contact | Get in touch | `personalInfo` |

## 🛠️ Customization Options

### Fonts
Current: Montserrat (headings) + Inter (body)

To change, edit `/src/styles/fonts.css` and update CSS variables in `/src/styles/theme.css`:
```css
--font-heading: 'YourHeadingFont', sans-serif;
--font-body: 'YourBodyFont', sans-serif;
```

### Colors
Edit `/src/styles/theme.css` to modify theme colors:
- `:root` - Default theme
- `:root[data-theme="sustainable"]` - Green engineering theme
- `:root[data-theme="simulation"]` - High-energy theme

### Add More Themes
In `/src/styles/theme.css`, add:
```css
:root[data-theme="your-theme"] {
  --engineering-accent: #yourcolor;
  --accent: #youraccent;
}
```

Then update `/src/app/components/ThemeToggle.tsx` to include the new theme option.

## 🚨 Important Notes

### DO:
- ✅ Replace ALL `[CV: ...]` placeholders
- ✅ Use real project data and quantified results
- ✅ Keep content professional and technical
- ✅ Add/remove array items as needed (projects, skills, etc.)

### DON'T:
- ❌ Leave placeholder text in production
- ❌ Invent data or exaggerate skills
- ❌ Use vague or buzzword-heavy language
- ❌ Modify component files unless changing structure

## 📱 Responsive Design

The portfolio is fully responsive:
- Desktop: Full multi-column layouts
- Tablet: Adjusted grids
- Mobile: Single-column stacking

All animations scale appropriately.

## 🔗 Linking Projects

Projects automatically get URLs like:
```
/project/your-project-id
```

The `id` field in your project data determines the URL. Use descriptive IDs like:
- "thermal-battery-analysis"
- "cfd-heat-exchanger"
- "fem-structural-validation"

## 📊 Performance Metrics

For project detail pages, you can display metrics as:

**List format** (currently configured):
```typescript
performanceMetrics: {
  type: "list",
  data: [
    "Reduced pressure drop by 18%",
    "Increased heat transfer coefficient by 2.3x"
  ]
}
```

**Graph format** (for future implementation):
```typescript
performanceMetrics: {
  type: "graph",
  data: { /* chart data */ }
}
```

## 🎓 Example Data Population

See `/src/app/data/portfolio-data.ts` for detailed inline examples of how to transform CV content into structured data.

---

## ⚡ Ready to Deploy

Once you've populated your data:
1. Review all sections for placeholder text
2. Test all project links
3. Verify CV download URL works
4. Check responsive design on mobile
5. Deploy!

**Note**: This portfolio is designed to look like an engineering systems document translated into a digital interface — structured, modular, analytical, calm, and precise.
