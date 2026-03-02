# 🌿 Apex Regenerative Medicine Website

A **premium, conversion-focused single-clinic website** for a regenerative medicine practice. Built with a "Functional Medicine meets Apple design" aesthetic — cinematic, clean, and conversion-optimized at every scroll depth.

---

## ✅ Completed Features

### Pages Built
| Page | File | Description |
|------|------|-------------|
| **Homepage** | `index.html` | Full 9-section homepage with all CTAs |
| **About** | `about.html` | Doctor profile, credentials, timeline |
| **Treatments** | `treatments.html` | All 4 treatments with sidebars |
| **Conditions** | `conditions.html` | 4 conditions with comparison callouts |
| **Patient Stories** | `patient-stories.html` | Filterable testimonials grid |
| **FAQ** | `faq.html` | Category-filtered accordion FAQ |
| **Contact** | `contact.html` | Booking form with success state |

### Design System
- Premium color palette: Deep Forest Green + Warm Cream + Gold
- Typography: Playfair Display (headings) + Inter (body)
- Scroll-triggered fade-up animations on all sections
- Counter animations (count-up) for stats on viewport entry
- Frosted glass sticky navigation
- Mobile-responsive hamburger menu
- Hover micro-interactions on all cards and buttons

### CTA Architecture
Every section has a targeted CTA:
- Hero → "Book a Free Consultation"
- Problem → "There's Another Way"
- Conditions → "See If You Qualify"
- How It Works → "Start Your Journey — It's Free"
- Doctor → "Meet Dr. Mitchell"
- Testimonials → "Read More Patient Stories"
- Final CTA → "Book Your Free Consultation"

---

## 🗂️ File Structure

```
index.html              → Homepage
about.html              → Doctor profile
treatments.html         → All 4 treatment modalities
conditions.html         → 4 conditions treated
patient-stories.html    → Patient testimonials
faq.html                → FAQ accordion
contact.html            → Booking form

css/
  style.css             → Full design system + all component styles
  pages.css             → Page-specific styles (about, treatments, etc.)

js/
  utils.js              → Shared JS: nav, animations, counters, API helpers
```

---

## 🔗 Page URIs

| URI | Description |
|-----|-------------|
| `/index.html` | Homepage |
| `/about.html` | About the doctor |
| `/treatments.html` | Treatments hub (#prp, #stem-cell, #prolotherapy, #peptides) |
| `/conditions.html` | Conditions (#chronic-pain, #osteoarthritis, #inflammation, #sports-injuries) |
| `/patient-stories.html` | Patient testimonials with filter |
| `/faq.html` | FAQ with category filter |
| `/contact.html` | Booking / contact form |

---

## 📊 Data Models

| Table | Purpose |
|-------|---------|
| `clinic` | Clinic info: name, address, phone, hours |
| `doctor` | Doctor profile: bio, credentials, stats |
| `treatments` | 4 treatment modalities with metadata |
| `conditions` | 4 conditions with symptoms + treatment links |
| `testimonials` | Patient stories with ratings + filter data |
| `faqs` | FAQ entries with category grouping |
| `consultations` | Submitted contact form leads |

---

## 🎨 Design System Reference

### Colors
```css
--green-deep:   #1B4332   /* Primary buttons, headings */
--green-mid:    #2D6A4F   /* Hover states */
--green-sage:   #52B788   /* Accents, labels */
--cream:        #F8F4EF   /* Section backgrounds */
--charcoal:     #1C1C1E   /* Dark sections */
--gold:         #C9A84C   /* Badges, highlights */
```

### Button Classes
- `.btn.btn-primary` — Deep green filled
- `.btn.btn-outline` — Green outlined
- `.btn.btn-ghost-white` — White outlined (dark bg)
- `.btn.btn-white` — White filled (dark bg)
- `.btn.btn-gold` — Gold filled
- `.btn-link` — Text link with arrow

---

## 🔧 Customization for New Clients

To adapt this template for a new clinic, update:

1. **Clinic name + tagline** — Search/replace "Apex Regenerative Medicine"
2. **Doctor name + credentials** — Replace "Dr. Sarah Mitchell" + credentials
3. **Phone + email + address** — In footer, contact page, and hero
4. **City/State** — "Scottsdale, AZ" references
5. **Testimonials** — Update in the `testimonials` table via API
6. **Doctor photo** — Replace placeholder with actual photo
7. **Brand colors** — Update CSS variables in `:root` in `style.css`
8. **Logo** — Replace `.nav-logo-mark` icon or add `<img>` tag

---

## 🚀 Recommended Next Steps

- [ ] Add real doctor photo (replace placeholder icon)
- [ ] Add clinic logo to nav
- [ ] Connect contact form to email/CRM (Mailchimp, HubSpot, etc.)
- [ ] Add Google Maps embed to contact page
- [ ] Add blog/articles section
- [ ] Add "Am I a Candidate?" interactive quiz
- [ ] SEO: Add meta tags, OG images, sitemap.xml
- [ ] Analytics: Add Google Analytics / GTM
- [ ] Performance: Add image optimization + lazy loading
- [ ] Add real patient photos / video testimonials
