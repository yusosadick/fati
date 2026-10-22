# FATI ENTERPRISE — COMPANY IDENTITY, ABOUT US & DESIGN SYSTEM EXPANSION

## CRITICAL DIRECTIVE: PRESERVE THE EXISTING PRODUCT

You are working inside an existing, actively developed FATI ENTERPRISE application.

**The landing page and dashboard are already designed. Their visual design is approved and must be preserved exactly.**

This is NOT a redesign, rebranding, dashboard reconstruction, or landing-page rebuild.

Your task is to build an exceptional About Us experience and any necessary supporting company-information pages using the established FATI design system.

### Absolute modification boundaries

**EXISTING LANDING PAGE**
- You MAY improve, correct, and align existing textual content with FATI's verified company identity.
- You MUST preserve every existing layout, component structure, section arrangement, color, font, spacing, animation, image placement, button style, and responsive behavior.
- Do not add, remove, reorder, resize, or redesign sections.
- Do not change existing CTAs, destinations, or interactions.
- Text replacements must fit existing visual constraints. Keep approximately the same text lengths where necessary to prevent wrapping, overflow, or layout shifts.

**EXISTING DASHBOARD**
- You MAY correct or improve static explanatory text, headings, descriptions, onboarding copy, and other non-functional marketing content where genuinely necessary.
- You MUST NOT alter dashboard layout, navigation, sidebar, widgets, charts, cards, tables, typography, spacing, colors, interactions, or responsive behavior.
- Do not change functional labels, permissions, statuses, metrics, business data, or operational terminology unless explicitly authorized.
- Never change data bindings, calculations, API responses, authentication, or business logic.
- Do not introduce company marketing content into operational screens unnecessarily.

**NEW PAGES**
- You MAY create new pages, components, layouts, animations, and visual storytelling experiences.
- Every new design must follow the visual identity, component conventions, UX patterns, spacing logic, typography, color palette, and interaction principles already established in FATI's landing page and dashboard.
- New pages may be creatively composed, but they must feel like a natural extension of the existing product.

**GLOBAL STYLING**
- Do not modify existing global CSS, Tailwind configuration, theme tokens, root layouts, shared component styles, or design-system behavior.
- Do not introduce global selectors or CSS overrides that could affect existing pages.
- Scope new styling and animations to newly created pages and components.
- Reuse existing components without changing their implementation. If customization is required, create a new isolated variant.

---

## PHASE 1 — UNDERSTAND FATI ENTERPRISE

FATI ENTERPRISE is the organization behind FATI's digital business management ecosystem.

The company is developing a multi-tenant, subscription-based business management and CRM platform intended to help entrepreneurs, business owners, and companies organize and manage their operations.

The platform aims to bring business processes together in one centralized digital environment, reducing fragmented workflows and improving visibility, collaboration, and operational efficiency.

### Two primary customer categories

**1. Business Owners**

Individual entrepreneurs and business operators who need practical tools for organizing daily operations, managing customers, overseeing business activity, and supporting growth.

**2. Companies**

Organizations with more complex requirements, including multiple branches, employees, departments, role-based access, configurable permissions, and centralized operational oversight.

### Platform capabilities and direction

The product architecture includes or plans to include:

- Multi-tenant business workspaces
- Centralized business management
- Customer relationship management
- Business Owner and Company account types
- Multi-branch management
- Employee and staff management
- Roles and permissions
- Configurable business modules
- Subscription-based access
- Financial and operational management
- Business reporting and oversight
- Scalable workflows for growing organizations

Inspect the actual codebase to determine which features are implemented, partially implemented, or planned.

Never advertise planned functionality as already available.

### Company identity distinction

FATI ENTERPRISE is the company.

The FATI business management platform is a product or service within that company.

Do not assume FATI ENTERPRISE operates exclusively in software unless verified company information confirms it.

Do not invent other industries, business divisions, products, legal registrations, founding dates, leadership information, customer numbers, partnerships, certifications, or company achievements.

---

## PHASE 2 — AUDIT THE EXISTING DESIGN SYSTEM

Before writing or modifying code, carefully inspect:

1. Existing landing-page structure and sections.
2. Dashboard architecture and UI components.
3. Typography families, weights, scales, and hierarchy.
4. Primary, secondary, neutral, and accent colors.
5. Container widths, spacing, grid systems, and breakpoints.
6. Button styles, cards, borders, shadows, and radii.
7. Navigation and interaction patterns.
8. Animations, transitions, hover states, and scroll behavior.
9. Existing icon libraries, imagery, illustrations, and branding.
10. Reusable components, routing conventions, and project architecture.

Extract the existing design rules into an internal implementation reference.

**The current UI is the source of truth. Do not introduce a competing design system.**

Use the landing page as the main visual reference for public-facing pages and the dashboard as a reference for consistent product identity, UI craftsmanship, and interaction quality.

Do not use a generic SaaS template or introduce unrelated styling trends.

---

## PHASE 3 — BUILD THE ABOUT US PAGE

Create a dedicated `/about` route.

The page must communicate FATI ENTERPRISE's identity, purpose, product ecosystem, values, and ambitions.

### Section 1 — Premium Company Introduction

Create a distinctive hero section introducing FATI ENTERPRISE.

Suggested headline:

**Building Smarter Ways to Do Business.**

Suggested supporting copy:

"At FATI ENTERPRISE, we believe businesses deserve modern solutions that simplify operations, strengthen organization, and create opportunities for sustainable growth."

Refine the copy to align with the existing company's brand voice.

The hero should establish credibility, clarity, and a strong corporate identity without relying on invented statistics.

### Section 2 — Who We Are

Introduce FATI ENTERPRISE as a forward-looking organization building practical solutions for modern business operations.

Explain the connection between the company and its business management ecosystem.

Present the company's purpose in a confident, professional tone.

### Section 3 — The Problems We Aim to Solve

Explain challenges such as:

- Fragmented business processes
- Limited operational visibility
- Manual administration
- Disconnected customer information
- Difficulties coordinating staff and branches
- Complexity as organizations grow

Use an engaging, visual storytelling layout that fits FATI's established design language.

### Section 4 — Our Mission & Vision

Develop compelling proposed mission and vision statements.

Mission direction:

Make modern business management more accessible, organized, and effective for entrepreneurs and organizations.

Vision direction:

Contribute to a future where businesses can grow confidently through connected, scalable digital solutions.

Treat these as proposed brand messaging until officially approved.

### Section 5 — What We Do

Explain FATI's business management platform and its value.

Use verified product capabilities from the existing application.

Organize the information into meaningful categories instead of producing a generic feature list.

Clearly distinguish current capabilities from planned functionality.

### Section 6 — Who We Serve

Introduce FATI's intended customer groups:

- Entrepreneurs
- Independent business owners
- Small and medium-sized businesses
- Growing companies
- Multi-branch organizations

Explain the different operational needs these groups may have and how the platform is intended to support them.

### Section 7 — Our Values

Develop professional company messaging around:

- Innovation
- Reliability
- Simplicity
- Transparency
- Security
- Customer success
- Sustainable growth

Use the existing brand style for visual presentation.

Do not invent official company policies, guarantees, or certifications.

### Section 8 — Why FATI

Explain the value of a centralized, scalable business management ecosystem.

Focus on practical outcomes such as improved organization, clearer oversight, reduced fragmentation, and better collaboration.

Avoid unsupported claims of guaranteed performance or financial results.

### Section 9 — Our Future

Communicate the company's ambition to develop accessible and scalable solutions for modern enterprises.

Present a credible long-term direction without inventing product roadmaps or expansion commitments.

### Section 10 — Final Call to Action

Create a polished CTA encouraging visitors to explore FATI's platform, discover its services, or contact the company.

Reuse existing working routes, approved contact details, and established button styles.

---

## PHASE 4 — SUPPORTING PAGES AND CONTENT CONSISTENCY

Inspect the existing navigation and company-information routes.

If supporting company pages already exist, bring their content and visual presentation into alignment with the verified FATI identity while preserving any approved designs.

If additional pages are genuinely necessary, propose them first rather than expanding the scope automatically.

Any new supporting page must use the established FATI design language and reusable component architecture.

### Existing landing and dashboard content

Review company-related copy for factual consistency.

You may update static text only where the existing wording is inaccurate, misleading, outdated, or inconsistent with verified FATI information.

Do not rewrite text simply for stylistic preference.

Maintain existing content hierarchy, section count, button dimensions, text density, and visual balance.

If a proposed text replacement would change the layout, shorten or refine the copy rather than changing the design.

---

## PHASE 5 — UI/UX QUALITY STANDARDS

The About Us page must be production-grade.

Requirements:

- Excellent visual hierarchy
- Refined typography
- Consistent spacing and alignment
- Cohesive visual storytelling
- Responsive mobile, tablet, and desktop layouts
- Accessible color contrast
- Keyboard-friendly interactions
- Semantic HTML
- Appropriate ARIA labels
- Reduced-motion support
- Smooth but restrained animations
- Optimized imagery and assets
- Fast loading and minimal layout shifts
- Strong consistency with existing FATI components

Avoid excessive animations, generic card grids, unrelated gradients, unnecessary dependencies, and decorative elements that weaken clarity.

Do not present stock photographs as actual FATI employees, offices, or facilities.

---

## PHASE 6 — ENGINEERING AND CHANGE ISOLATION

Follow the existing project stack, architecture, and coding conventions.

Prefer page-local components and isolated styles.

Do not introduce new frameworks or UI libraries unless already used or genuinely necessary.

Preserve:

- Existing application routes
- Landing-page structure
- Dashboard structure
- Authentication
- APIs
- Database integrations
- Subscription logic
- Business logic
- Existing user workflows
- Existing deployment configuration

Only make the minimum integration changes required for the new `/about` route.

Do not modify unrelated files.

If routing requires touching an existing shared file, keep the change minimal and verify it does not affect other routes.

---

## PHASE 7 — MANDATORY REGRESSION PROTECTION

Before implementation:

1. Identify the exact files that implement the landing page and dashboard.
2. Capture baseline screenshots of both pages at desktop and mobile sizes.
3. Record their current routes, layouts, interactions, and visual states.
4. Identify existing tests and build checks.
5. Create a safe checkpoint using the project's existing version-control workflow.

After implementation:

1. Run the application build and relevant tests.
2. Verify the new About Us page.
3. Compare the landing page against its baseline screenshots.
4. Compare the dashboard against its baseline screenshots.
5. Check for CSS leakage, layout shifts, typography changes, navigation changes, and responsive regressions.
6. Verify that existing functional workflows remain intact.
7. Inspect the final code diff for unrelated modifications.

**Acceptance criteria:**

- Landing-page design remains visually unchanged.
- Dashboard design remains visually unchanged.
- Existing functionality remains intact.
- Only approved static text changes appear on those two pages.
- New pages follow the established FATI UI/UX system.
- No unintended global styling changes occur.
- The About Us page works across supported screen sizes.

If any existing page changes visually because of this work, correct the regression before completion.

If baseline screenshots or visual testing cannot be performed, report that limitation rather than claiming pixel-perfect preservation.

---

## PHASE 8 — FINAL REPORT

Provide a concise implementation report covering:

1. Newly created pages and routes.
2. New components and their relationship to the existing design system.
3. Exact landing-page text changes, if any.
4. Exact dashboard text changes, if any.
5. Files modified and why.
6. Verified company facts and proposed marketing copy.
7. Missing company information requiring approval.
8. Build, accessibility, responsiveness, and regression test results.
9. Deployment status and any remaining issues.

Do not claim the landing page or dashboard is unchanged without actually checking.

## FINAL NON-NEGOTIABLE INSTRUCTION

**PRESERVE WHAT ALREADY EXISTS. EXTEND THE PRODUCT, DON'T REDESIGN IT.**

The landing page and dashboard are established design references.

Their design is locked.

Only carefully controlled static text corrections are permitted within those existing pages.

Every new page must inherit the same design DNA, component standards, and UX/UI principles while delivering its own polished, professional experience.

The result should feel like one cohesive FATI ENTERPRISE product, built by the same design team, with no visual regressions or broken functionality.

Implement, verify, and follow the existing deployment workflow.