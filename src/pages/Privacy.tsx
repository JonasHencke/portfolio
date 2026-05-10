import ReactMarkdown from "react-markdown";
import "./Privacy.css";

const content = `
## Privacy Policy
*Last updated: 10. May 2026*

### Introduction

This page informs visitors regarding policies with the collection, use, and disclosure of Personal Information if anyone decides to use the Keep. Application.

### Information Being Collected

- Purchase history and subscription status (through Apple and RevenueCat).

### How Your Information Is Used

- Process and manage subscriptions (via Apple’s App Store and RevenueCat).

### Subscriptions and Payments
All payments and subscriptions are processed securely by Apple via the App Store. No payment information is accessed or stored. Subscription status and entitlements are managed with the help of RevenueCat. Premium users enjoy additional features and an ad-free experience.

### How Your Information Is Shared
Information is only shared with third parties as described in this Privacy Policy. This includes:

- Apple, for managing subscriptions and purchases.
- RevenueCat, for entitlement and subscription tracking.

Your personal information is not sold.

### Changes to This Privacy Policy
This Privacy Policy may be updated from time to time. You are advised to review this page periodically for any changes. Changes are effective immediately after they are posted on this page.

### Contact Us
If you have any questions or suggestions about this Privacy Policy, do not hesitate to contact us at henckejonas@googlemail.com.
`;

export default function Privacy() {
  return (
    <main className="privacy">
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
}
