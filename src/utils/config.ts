import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "WORMHOLE",
  seo: {
    title: "Wormhole",
    description: "Wormhole - Farm-fresh vegetables and snacks delivered to your door in Kurnool",
  },
  // Draws grid behind main container
  backgroundGrid: false,
  logo: "/logo.svg",
  theme: "corporate",
  // Forces theme to be chosen above, no matter what user prefers
  forceTheme: false,
  // Shows switch to toggle between dark and light modes
  showThemeSwitch: true,
  appStoreLink: "https://apps.apple.com/us/app/google/id284815942",
  googlePlayLink:
    "https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox",
  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: false,
      privacyPolicy: true,
    },
    socials: {
      instagram: "https://www.instagram.com/wormhole.store?igsh=cmVja3ZjbDFqajl5",
    },
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#what-we-deliver", title: "What We Deliver" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    cta: "Get the app",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#what-we-deliver", title: "What We Deliver" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Your Kitchen Deserves Better!",
    subtitle:
      "Skip the crowded markets! Get farm-fresh veggies and delicious snacks delivered FREE for your first month. We handpick the best from local Kurnool farms—so you can cook with confidence.",
    screenshots: [
      "/screenshots/1.svg",
      "/screenshots/2.svg",
      "/screenshots/3.svg",
    ],
  },
  home: {
    seo: {
      title: "Mobile App Landing Template",
      description: "Mobile App Landing Template",
    },
    partners: {
      title: "Our Promise to You",
      subtitle:
        "If it's not fresh, we'll make it right. No questions, no hassle—just happy cooking.",
      logos: [
        "/misc/companies/apple.svg",
        "/misc/companies/aws.svg",
        "/misc/companies/google.svg",
        "/misc/companies/tumblr.svg",
      ],
    },
    howItWorks: {
      id: "how-it-works",
      title: "From App to Doorstep",
      subtitle:
        "Four taps. That's all it takes to get fresh groceries headed your way.",
      steps: [
        {
          title: "Grab the App",
          subtitle:
            "Head to Google Play, hit download, and you're halfway to fresher meals. Takes less time than deciding what's for dinner!",
          image: "/download%20the%20app/1.svg",
        },
        {
          title: "Quick Sign-In",
          subtitle:
            "Pop in your phone number, we'll text you a code, and boom—you're in. No passwords to forget, no emails to verify.",
          image: "/stock/02.webp",
          images: [
            "/Sign%20In%20with%20Mobile/1.svg",
            "/Sign%20In%20with%20Mobile/2.svg",
          ],
        },
        {
          title: "Tell Us Your Name",
          subtitle:
            "Just your name—that's it! No lengthy forms or twenty questions. We believe in keeping things simple.",
          image: "/Set%20Up%20Your%20Profile/Sign%20In%20with%20Mobile.svg",
        },
        {
          title: "Pin Your Location",
          subtitle:
            "Drop your delivery pin or type your address. We'll find you! Currently serving Kurnool and nearby areas.",
          image: "/stock/04.webp",
          images: [
            "/Add%20Delivery%20Address/4.svg",
            "/Add%20Delivery%20Address/5.svg",
            "/Add%20Delivery%20Address/6.svg",
          ],
        },
        {
          title: "Shop & Relax",
          subtitle:
            "Browse, tap, pay, done. Track your order in real-time while we rush the freshest picks to your door. Easy peasy!",
          image: "/stock/05.webp",
          images: [
            "/Browse and Order Fresh/7.svg",
            "/Browse and Order Fresh/8.svg",
            "/Browse and Order Fresh/9.svg",
          ],
          imagesRotation: [0, -20, 30],
        },
      ],
    },
    categories: {
      id: "what-we-deliver",
      title: "What's in Your Basket?",
      subtitle: "Everything your kitchen needs, minus the market chaos",
      floatingImage: "/section3deliver/Now serving Kurnool.svg",
      cards: [
        {
          icon: "/section3deliver/vegetables.svg",
          title: "Garden-Fresh Veggies",
          subtitle:
            "Crisp tomatoes, crunchy onions, vibrant greens—straight from farms you can trust. What you see is what you get!",
        },
        {
          icon: "/section3deliver/snacks.svg",
          title: "Snack Attack",
          subtitle:
            "Craving something crunchy? We've got chips, namkeen, biscuits, and energy bars from brands you actually love.",
        },
        {
          icon: "/section3deliver/comingsoon.svg",
          title: "More Coming Soon",
          subtitle:
            "Fruits, dairy, pantry essentials—you asked, we're delivering! Tell us what you want next.",
        },
      ],
    },
    features: {
      id: "features",
      title: "Why Kurnool Loves Us",
      subtitle:
        "No more guessing if those tomatoes are fresh. No more sweating in crowded markets. Just good food, delivered fast.",
      cards: [
        {
          icon: "/section2pictures/Farm-to-Table Freshness.svg",
          title: "Picked This Morning",
          subtitle:
            "We're picky about our produce—so you don't have to be. Every veggie is handpicked from local farms and reaches you within hours. That's freshness you can actually taste!",
        },
        {
          icon: "/section2pictures/Swift & Reliable Delivery.svg",
          title: "Faster Than You Think",
          subtitle:
            "Blink and we're there! Track your order live as our riders zip through Kurnool to bring you the good stuff. Rain or shine, we show up.",
        },
        {
          icon: "/section2pictures/Quality Assured Selection.svg",
          title: "We've Got Your Back",
          subtitle:
            "Something off? We'll fix it instantly—refund or replacement, your call. Every item is weighed right and packed with care. That's our promise.",
        },
        {
          icon: "/section2pictures/Effortless Shopping Experience.svg",
          title: "Shopping Made Simple",
          subtitle:
            "Scroll, tap, done. Reorder your favorites in seconds. Pay however you like—UPI, cards, or cash. Your groceries, your way.",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "Got Questions? We've Got Answers!",
      qa: [
        {
          question: "Where do you deliver?",
          answer:
            "Right now, we're serving Kurnool and nearby areas. Just pop your address in the app to see if we can reach you. Spoiler: we're expanding fast, so keep checking!",
        },
        {
          question: "How fast can you get here?",
          answer:
            "Usually 15-20 minutes! Sometimes a bit longer during rush hours or if the weather's being dramatic. But hey, you can track your rider in real-time—no guessing games.",
        },
        {
          question: "How can I pay?",
          answer:
            "However you like! GPay, PhonePe, Paytm, cards, or good old cash-on-delivery. All digital payments are bank-level secure, so your money's safe with us.",
        },
        {
          question: "What's the deal with free delivery?",
          answer:
            "New here? Your first month of deliveries is on us! Order daily, order weekly—zero delivery charges. It's our way of saying welcome to the Wormhole family.",
        },
        {
          question: "Are the vegetables actually fresh?",
          answer:
            "We don't do 'yesterday's stock.' Our veggies come from local farms within 50km and reach you the same day they're picked. You'll notice the difference in your first bite!",
        },
      ],
    },
    header: {
      headline: "Fresh Veggies & Tasty Snacks—At Your Door in Minutes",
      subtitle:
        "Why fight the market crowds? Get farm-fresh produce delivered fast, priced right, and picked just for you. Kurnool's new favorite way to shop!",
      screenshots: [
        "/screenshots/3.svg",
        "/screenshots/2.svg",
        "/screenshots/1.svg",
      ],
      rewards: ["Now Live in Kurnool", "Try It Free!"],
      headlineMark: [3, 4],
    },
  },
  privacyPolicy: {
    seo: {
      title: "Privacy Policy - Wormhole",
      description: "Wormhole Privacy Policy",
    },
    content: `# Privacy Policy

**Last Updated:** 07 December 2025

## Introduction

This Privacy Policy applies to Wormhole ("Company", "we", "us", or "our"), an India-based technology platform that operates the mobile application Wormhole ("App") and the website https://wormhole.co.in (collectively, the "Platform").

We value your privacy and are committed to protecting the personal information shared with us. This Privacy Policy explains how we collect, use, store, disclose, and protect your information when you use our Platform.

By downloading, installing, registering, or using the Platform, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree, please do not use the Platform.

## 1. Applicability

This Privacy Policy applies to all users of the Platform. It should be read together with our Terms of Use.

## 2. Information We Collect

### 2.1 Personal Information

We may collect the following personal information when you register or use the Platform:
- Full name
- Mobile number
- Email address
- Delivery address(es)

### 2.2 Sensitive Personal Information

We do not store sensitive financial details such as debit card, credit card, or UPI information. Payments are processed securely through third-party payment gateways, and we do not have access to your complete payment credentials.

### 2.3 Transactional Information

When you place orders through the Platform, we may collect:
- Order details and order history
- Product information
- Payment status (success/failure)

### 2.4 Location Information

To enable order delivery services, we may collect:
- Approximate or precise location (with your permission)
- IP address

Location data is collected only when required for delivery-related services. You may disable location access via your device settings, though certain features may not function properly.

### 2.5 Technical & Device Information

We may automatically collect:
- Device type, model, and operating system
- App version
- Unique device identifiers
- Log data and crash reports

### 2.6 Device Permissions

To provide specific features, we may request access to:
- **Notifications:** To send you order updates and OTPs.
- **Location:** To facilitate accurate delivery addresses.

## 3. Use of Firebase & Google Services

Our Platform uses Google Firebase services, including but not limited to:
- **Firebase Authentication:** For secure user login & verification.
- **Firebase Firestore:** For secure cloud data storage.
- **Firebase Cloud Messaging (FCM):** To deliver push notifications.
- **Firebase Analytics:** To monitor app performance and usage patterns.

Data processed through Firebase may be stored on Google's secure servers, including servers located outside India, in accordance with Google's privacy and security standards.

## 4. How We Use Your Information

We use collected information to:
- Create and manage user accounts.
- Process and fulfill orders.
- Assign orders to delivery partners.
- Verify identity via OTP and notifications.
- Send transactional notifications (order updates, delivery status).
- Improve app performance and user experience.
- Ensure platform security and prevent fraud.
- Comply with legal obligations.

## 5. Communication

We may contact you via:
- SMS or WhatsApp (for OTPs and critical order updates).
- Push notifications.
- Email.

You can control notification permissions anytime via your device settings.

## 6. Information Sharing & Disclosure

We do not sell your personal data. We may share limited information with:

### 6.1 Delivery Partners

Name, phone number, and delivery address (strictly for order fulfilment purposes).

### 6.2 Service Providers

- Payment gateways (for processing payments).
- Cloud infrastructure & analytics providers (e.g., Google Firebase).

### 6.3 Legal & Regulatory Authorities

When required to comply with applicable laws, legal processes, or lawful government requests.

## 7. Data Storage & Retention

Your information is stored securely and retained only as long as necessary to:
- Provide our services.
- Meet legal, regulatory, or compliance requirements.

## 8. Account Deletion & User Rights

You have full control over your data. You have the right to:

1. **Access & Update:** You can view and update your profile information within the App.
2. **Request Deletion:** You may request the deletion of your account and associated data at any time. You can do this by:
   - Navigating to the "Delete Account" option within the App settings.
   - Visiting our website at https://wormhole.co.in/support (or contacting us via email).
3. **Withdraw Consent:** You may withdraw consent for location or notification permissions via your device settings.

**Note on Deletion:** When you request account deletion, we will remove your personal data from our active databases. However, we may retain certain transactional data (such as order history) for a limited period solely to comply with legal and tax obligations.

## 9. Security Measures

We use reasonable technical and organisational safeguards to protect your data, including encryption and secure access controls via Firebase Security Rules. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.

## 10. Cookies & Tracking Technologies

Our website and app may use cookies and similar technologies to improve functionality, analytics, and user experience. You may manage cookie settings through your browser.

## 11. Links to Third-Party Sites

The Platform may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those third parties.

## 12. Children's Privacy

Our Platform is not intended for users under 18 years of age. We do not knowingly collect information from minors.

## 13. Updates to This Privacy Policy

We may update this Privacy Policy from time to time. Changes will be posted on the Platform with an updated "Last Updated" date. Continued use of the Platform indicates acceptance of the revised policy.

## 14. Governing Law

This Privacy Policy is governed by and construed in accordance with the laws of India. Courts in Kurnool, Andhra Pradesh shall have exclusive jurisdiction.

## 15. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us:

**Company Name:** WORMHOLE  
**Email:** support@wormhole.co.in  
**Website:** https://wormhole.co.in

**Registered Address:**  
87/1103-F-1-A, Revenue Ward No 87,  
4th Class Employees Colony,  
Kurnool, Andhra Pradesh 518003  
India

© 2025 Wormhole. All rights reserved.
`,
  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy - Mobile App Landing Template",
      description: "Cookies Policy",
    },
    content: `# Cookies Policy

**Effective Date:** [Insert Date]

## Introduction

This Cookies Policy explains how [Your Company Name] ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our app, [Your App Name] (the "App"). It explains what these technologies are and why we use them, as well as your rights to control their use.

## What Are Cookies?

Cookies are small data files that are placed on your device when you visit a website or use an app. Cookies are widely used by online service providers to facilitate and help to make the interaction between users and websites/apps faster and easier, as well as to provide reporting information.

### Types of Cookies We Use

We use the following types of cookies in our App:

1. **Strictly Necessary Cookies:**  
   These cookies are essential for you to use some of the features of our App. Without these cookies, some services cannot be provided.

2. **Performance and Analytics Cookies:**  
   These cookies collect information about how users interact with our App, including which pages are visited most often. We use this information to improve how our App works.

3. **Functionality Cookies:**  
   These cookies allow our App to remember choices you make when you use the App, such as remembering your login details or language preference.

4. **Targeting and Advertising Cookies:**  
   These cookies are used to deliver advertisements that are relevant to you. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.

### Cookies From Third Parties

In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the App and to deliver advertisements on and through the App.

## How We Use Cookies

We use cookies to:

- **Remember your login details and preferences.**
- **Analyze usage patterns and improve the functionality of our App.**
- **Deliver relevant content and advertisements.**
- **Understand your preferences based on previous or current App activity.**

## Your Choices Regarding Cookies

You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting the settings in your browser. Most browsers allow you to:

- **View what cookies are stored on your device and delete them individually.**
- **Block third-party cookies.**
- **Block cookies from particular websites.**
- **Block all cookies from being set.**
- **Delete all cookies when you close your browser.**

Please note that if you block or delete cookies, some features of the App may not function properly.

## Changes to This Cookies Policy

We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Cookies Policy.

## Contact Us

If you have any questions or concerns about our use of cookies, please contact us at:

[Your Company Name]  
[Your Contact Information]  
[Email Address]  
[Phone Number (optional)]
`,
  },
  termsAndConditions: {
    seo: {
      title: "Terms and Conditions - Wormhole",
      description: "Wormhole Terms and Conditions",
    },
    content: `# Terms and Conditions

**Last Updated:** 08 December 2025

## 1. Introduction

Welcome to Wormhole! These Terms and Conditions ("Terms") govern your use of the Wormhole mobile application and website (collectively, the "Platform"), operated by Wormhole ("Company", "we", "us", or "our"), located in Kurnool, Andhra Pradesh, India.

By downloading, installing, or using the Platform, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Platform.

## 2. Eligibility

By using the Platform, you represent that:
- You are at least 18 years old or accessing the Platform under the supervision of a parent or guardian.
- You are legally capable of entering into a binding contract under Indian law.
- All information you provide during registration is accurate and truthful.

## 3. Account Registration & Security

To access certain features (such as placing orders), you must register using your mobile number.

**Authentication:** We verify accounts via One-Time Password (OTP). You agree not to share your OTP with anyone.

**Account Responsibility:** You are solely responsible for all activities that occur under your account. The Company is not liable for any loss or damage arising from your failure to protect your account credentials.

**Termination:** We reserve the right to suspend or terminate your account if we suspect unauthorized use, fraud, or violation of these Terms.

## 4. Services & Orders

**Product Availability:** All products listed on the Platform are subject to availability. We reserve the right to discontinue any product at any time.

**Pricing:** Prices are listed in Indian Rupees (INR) and are subject to change without notice. The price applicable at the time of placing the order shall be final.

**Order Acceptance:** Your receipt of an order confirmation does not signify our acceptance of your order. We reserve the right to accept or decline your order for any reason (e.g., stock unavailability, pricing errors).

## 5. Payments

We use third-party payment gateways to process transactions. We do not store your banking or card details.

You agree to pay for all products and services ordered through your account, including applicable taxes and delivery fees.

If a payment fails but the amount is deducted from your bank, the refund will be processed by the respective payment gateway or bank as per their timelines (usually 5–7 business days).

## 6. Delivery Policy

**Delivery Partners:** We may use third-party independent contractors or delivery agents to fulfill orders.

**Timelines:** Delivery times displayed on the app are estimates and not guarantees. Delays may occur due to traffic, weather, or unforeseen circumstances.

**Delivery Area:** We currently serve specific areas within Kurnool and surrounding regions. If your location is outside our service area, we will be unable to fulfill your order.

## 7. Returns & Refunds

**Returns:** Returns are accepted only if the product delivered is damaged, defective, or incorrect. You must report the issue via the App Support within 24 hours of delivery with photographic proof.

**Refunds:** If your return request is approved, refunds will be processed to the original payment method within 5–7 business days.

**Cancellations:** You may cancel an order before it has been "Confirmed" or "Dispatched" by the seller. Once dispatched, orders cannot be cancelled.

## 8. User Conduct

You agree not to:
- Use the Platform for any unlawful purpose.
- Attempt to reverse-engineer, decompile, or hack the App.
- Harass, abuse, or threaten our customer support agents or delivery partners.
- Place fake or fraudulent orders.

## 9. Limitation of Liability

To the maximum extent permitted by law:
- Wormhole shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Platform.
- Our total liability for any claim arising out of your use of the Platform is limited to the amount you paid for the specific order giving rise to the claim.
- We are not responsible for the quality or safety of products sold by third-party vendors listed on our Platform, although we strive to ensure quality standards.

## 10. Intellectual Property

All content on the Platform, including text, graphics, logos, and software code, is the property of Wormhole and is protected by Indian copyright and trademark laws. You may not copy, distribute, or create derivative works without our written permission.

## 11. Third-Party Services

The Platform uses services from Google (Firebase, Maps) and payment providers. Your use of these services is subject to their respective terms and privacy policies.

## 12. Changes to Terms

We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the Platform. Your continued use of the Platform constitutes acceptance of the modified Terms.

## 13. Governing Law & Jurisdiction

These Terms shall be governed by the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Kurnool, Andhra Pradesh.

## 14. Contact Information

If you have questions regarding these Terms, please contact us at:

**Company Name:** WORMHOLE  
**Email:** support@wormhole.co.in

**Address:**  
87/1103-F-1-A, Revenue Ward No 87,  
4th Class Employees Colony,  
Kurnool, Andhra Pradesh 518003

© 2025 Wormhole. All rights reserved.
`,
  },
};

export default templateConfig;
