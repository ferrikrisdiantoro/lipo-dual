# LipoDual — Innovation Website (Conrad Challenge)

This repository contains the official innovation website for **LipoDual**, a biotech innovation developed for the **Conrad Challenge – Innovation Stage**.  
The website serves as a **supporting material** to the Innovation Brief and Innovation Video, designed to help judges and potential investors understand the innovation, its impact, and its business potential.

> ⚠️ Note: This website is **not an e-commerce platform** and does not provide medical advice.  
> It is an informational site aligned with the official Innovation Brief submission.

---

## 1. Purpose of the Website

The LipoDual website is built to:

- Present the **innovation story** in a clear and professional manner  
- Support the **Innovation Brief** with visual and structured explanations  
- Showcase the **problem, solution, technology, and market potential**  
- Provide a clean, science-oriented interface suitable for:
  - Conrad Challenge judges  
  - Mentors and advisors  
  - Potential investors (post-competition)

The website follows the official Conrad Challenge guideline, where a website is:
- **Optional** (except for Cyber categories)  
- Used as **supporting material**, not the primary evaluation document  

---

## 2. Technology Stack

### Core Stack
- **Next.js (App Router)**  
- **TypeScript**  
- **Tailwind CSS**  

### Deployment & Infrastructure
- **Vercel** — primary hosting  
- **Hostinger** — domain & DNS  
- **Supabase (Optional)** — contact / interest form backend  

---

## 3. Website Scope

### Included
- Single-page innovation landing website  
- Structured sections aligned with Innovation Brief  
- Embedded Innovation Video (YouTube)  
- Team & advisor section  
- Optional contact / interest form  

### Not Included
- E-commerce or payments  
- User authentication  
- Medical diagnosis or treatment claims  

---

## 4. Content Source of Truth

All website content is derived directly from the **Innovation Brief**, including:

- High-Level Concept & Tagline  
- Problem Statement  
- Existing Alternatives  
- Solution Description  
- Unique Value Proposition  
- Sustainable Advantage  
- Customer Segments & Early Adopters  
- Channels  
- Key Metrics  
- Cost Structure  
- Revenue Streams  

No additional medical claims should be introduced.

---

## 5. Page Structure

Single scrolling page with anchor navigation:

1. Hero / Overview  
2. Problem  
3. Solution  
4. Technology (How It Works)  
5. Unique Value & Sustainability  
6. Market & Impact  
7. Business Model  
8. Team  
9. Media (Video)  
10. Contact (Optional)  

---

## 6. Project Structure

```
src/
 ├── app/
 │   └── page.tsx
 ├── components/
 │   ├── sections/
 │   └── ui/
 ├── content/
 │   └── site.ts
public/
 ├── images/
 └── videos/
```

All text content should be centralized in `src/content/site.ts`.

---

## 7. Optional: Supabase Contact Form

```sql
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text,
  created_at timestamptz not null default now()
);
```

Environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## 8. Deployment Guide

### Local
```bash
npm install
npm run dev
```

### Production (Vercel)
1. Push to GitHub  
2. Import to Vercel  
3. Set environment variables  
4. Deploy  

### Domain (Hostinger → Vercel)
- Buy domain on Hostinger  
- Add domain in Vercel  
- Update DNS  
- Enable HTTPS  

---

## 9. Conrad Challenge Compliance

- Website acts as **supporting documentation**  
- Aligns with Innovation Brief  
- Does not replace official submission documents  

---

## 10. Disclaimer

This website is created for educational and innovation competition purposes only.  
It does not provide medical advice.

© LipoDual Innovation Team
