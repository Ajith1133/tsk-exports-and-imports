"use client";

import { useState } from "react";

const faqs = [
    {
        q: "Are you an Authorised exporter?",
        a: "Yes, we are an authorised exporter registered with Government Of India and you can check the registration under https://www.dgft.gov.in/CP/?opt=view-any-ice and enter IEC: 0416936067 and Name: THASWIKHA EXPORTS AND IMPORTS.",
    },
    {
        q: "How can I get the quote for price details?",
        a: "You need to fill up the required details in the Enquiry Form either in Home Page or Contact Us page and Submit.",
    },
    {
        q: "When can I get the response after I Submit the request?",
        a: "We will get back to you within 24 hours with the complete details.",
    },
    {
        q: "What are Accepted Payment Terms?",
        a: "Accepted payment Terms are 30% Advance and Remaining 70% Against Documents / 100% Irrevokable LC.",
    },
    {
        q: "What are the docs you will provide to us?",
        a: [
            "Bill Of Lading",
            "Commercial Invoice",
            "Packing List",
            "Phytosanitary certificate",
            "Fumigation Certificate",
            "Country Of Origin",
        ],
    },
    {
        q: "How do we make sure rice quality is good?",
        a: "We provide Quality Certificate inspected by SGS India Private Limited during shipment.",
    },
    {
        q: "Where are you located?",
        a: "Our head office is in Chennai, India, with a global export network.",
    },
];

export default function FAQs() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <main className="container">
            <h1 style={{ color: "#7393B3" }}>Frequently Asked Questions</h1>

            <div style={{ marginTop: "2rem" }}>
                {faqs.map((faq, idx) => (
                    <div
                        key={idx}
                        onMouseEnter={() => setHoverIndex(idx)}
                        onMouseLeave={() => setHoverIndex(null)}
                        onClick={() => toggle(idx)}
                        style={{
                            border: "1px solid #e2e8f0",
                            borderRadius: "10px",
                            padding: "16px",
                            marginBottom: "12px",
                            cursor: "pointer",
                            background: "#fff",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                        }}
                    >
                        {/* QUESTION */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <strong style={{ fontSize: "1.05rem" }}>{faq.q}</strong>

                            <span
                                style={{
                                    width: "28px",
                                    height: "28px",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    lineHeight: "1",
                                    color: hoverIndex === idx ? "#fff" : "#7393B3",
                                    background: hoverIndex === idx ? "#7393B3" : "transparent",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                {activeIndex === idx ? "−" : "+"}
                            </span>
                        </div>

                        {/* ANSWER */}
                        {activeIndex === idx && (
                            <div style={{ marginTop: "10px" }}>
                                {Array.isArray(faq.a) ? (
                                    <ul style={{ paddingLeft: "1.2rem" }}>
                                        {faq.a.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{faq.a}</p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
}