import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import { CheckIcon } from "./Icons";
import "./PricingPage.css";

// Payment Logos
import easypaisaLogo from "./assets/easypaisa.png";
import visaLogo from "./assets/visa.png";
import paypalLogo from "./assets/paypal.png";
import mastercardLogo from "./assets/mastercard.png";
import moneygramLogo from "./assets/moneygram.png";
import westernUnionLogo from "./assets/westernunion.png";

const PLANS = [
  {
    name: "Basic Plan",
    price: 35,
    popular: false,
    features: [
      "3 Classes per Week",
      "30 Minutes per Class",
      "one-to-one classes",
      "Flexible Timings",
      "Progress Reports",
      "Free Trial Class",
      "English/Urdu/French"
    ],
  },
  {
    name: "Standard Plan",
    price: 40,
    popular: true,
    features: [
      "5 Classes per Week",
      "30 Minutes per Class",
      "one-to-one classes",
      "Flexible Timings",
      "Free Trial Class",
      "Progress Reports",
      "Namaz & Dua",
      "English/Urdu/French"
    ],
  },
  {
    name: "Sat & Sun Plan",
    price: 35,
    popular: false,
    features: [
      "Only Sat & Sun Classes",
      "30 Minutes per Class",
      "one-to-one classes",
      "Flexible Timings",
      "Free Trial Class",
      "Progress Reports",
      "English/Urdu/French"
    ],
  },
];

const WHY_PLANS = [
  "Progress Report via Whatsapp",
  "No Registration Fee",
  "Cancel Anytime",
  "100% Money Back Guarantee",
  "24/7 Teacher Support",
];

const PAYMENT_METHODS = [
  {
    name: "Easypaisa",
    logo: easypaisaLogo,
  },
  {
    name: "MasterCard",
    logo: mastercardLogo,
  },
  {
    name: "PayPal",
    logo: paypalLogo,
  },
  {
    name: "Visa",
    logo: visaLogo,
  },
  {
    name: "MoneyGram",
    logo: moneygramLogo,
  },
  {
    name: "Western Union",
    logo: westernUnionLogo,
  },
];

const WHATSAPP_NUMBER = "923040001148";

export default function PricingPage() {
  const handleChoosePlan = (plan) => {
    const message = `Hello! I'm interested in the ${plan.name} ($${plan.price}/Month). I'd like to know more and get started.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="page">
      <Header />

      <Breadcrumb current="Pricing" />

      <section className="pricing-hero">
        <div className="container pricing-hero-inner">
          <span className="eyebrow eyebrow-center">
            Pricing & Plans
          </span>

          <h1>Simple & Affordable Pricing</h1>

          <p>
            Choose the perfect plan for your family and
            start your Quran learning journey today.
          </p>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container pricing-layout">

          <div className="pricing-cards">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card ${
                  plan.popular ? "popular" : ""
                }`}
              >
                {plan.popular && (
                  <span className="popular-badge">
                    Most Popular
                  </span>
                )}

                <h3>{plan.name}</h3>

                <div className="price">
                  <span className="amount">
                    ${plan.price}
                  </span>

                  <span className="period">
                    /Month
                  </span>
                </div>

                <ul className="plan-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckIcon
                        width={16}
                        height={16}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`btn ${
                    plan.popular
                      ? "btn-primary"
                      : "btn-outline"
                  } full`}
                  onClick={() =>
                    handleChoosePlan(plan)
                  }
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>

          <aside className="pricing-sidebar">
            <h3>Why Choose Our Plans</h3>

            <ul>
              {WHY_PLANS.map((item) => (
                <li key={item}>
                  <span className="why-icon">
                    <CheckIcon
                      width={14}
                      height={14}
                    />
                  </span>

                  {item}
                </li>
              ))}
            </ul>
          </aside>

        </div>

        {/* Payment Methods */}

        <div className="container">
          <div className="payment-strip">

            <span className="payment-label">
              We Accept
            </span>

            <div className="payment-logos">
              {PAYMENT_METHODS.map((payment) => (
                <div
                  key={payment.name}
                  className="payment-pill"
                >
                  <img
                    src={payment.logo}
                    alt={payment.name}
                    className="payment-logo"
                  />

                  <span>{payment.name}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}