"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Car } from "lucide-react";
import Carousel from "./components/Carousel";


export default function Home() {
  const router = useRouter();
  const images = [
    "https://tskexportsandimports.com/web/wp-content/uploads/2023/05/wp3069346-paddy-wallpapers-1920x476.jpg",
    "https://tskexportsandimports.com/web/wp-content/uploads/2023/05/wp3069320-paddy-wallpapers-1-scaled-1920x476.jpg",
    "/ExportImportImg.png"
  ];

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

    const aboutRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const submissionData = {
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        message: form.message,
      };
      await axiosInstance.post("/tsk-contact-us", submissionData);
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Form submit error:", error);
      alert("Unable to submit form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <> 
        <div>
          <Carousel images={images} />
        </div>

      {/* About us and products sections */}
      <div>
        <section
          style={{
            position: "relative",
            paddingTop: "6rem",
            paddingBottom: "4rem",
            background: "#CDEF7F",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-1px",
              left: 0,
              width: "100%",
              overflow: "hidden",
              lineHeight: 0,
            }}
          >
            <svg
              viewBox="0 0 1440 175"
              style={{ display: "block", width: "100%", height: "100px" }}
              preserveAspectRatio="none"
            >
              <path
                d="M0,0 C480,150 960,150 1440,0 L1440,0 L0,0 Z"
                fill="#ffffff"
              />
            </svg>
          </div>


          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              justifyContent: "space-between",
              minHeight: "500px",
              gap: "2rem",
              width: "100%",
            }}
          >
            {/* <div
              style={{
                flex: "1",
                minHeight: "500px",
                
              }}
            >
              <img
                src="https://tskexportsandimports.com/web/wp-content/uploads/2023/05/wp3069346-paddy-wallpapers-1920x476.jpg"
                alt="paddy fields"
                style={{
                  width: "80%",
                  height: "100%",
                  objectFit: "cover",
                  marginLeft: "4rem",
                  padding: "2rem",
                }}
              />
            </div> */}

            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: ".5rem",
                padding: "2rem",
              }}
            >
              <h2
                style={{
                  fontSize: "3.5rem",
                  marginBottom: "1rem",
                  color: "#161306",
                  letterSpacing: "1px",
                  fontWeight: "400",
                }}
              >
                About Us
              </h2>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#070b12",
                  marginBottom: "1rem",
                  width: "70%",
                }}
              >
                "Thaswikha Exports and Imports" was established in the year 2016 in Chennai, Tamilnadu,
                India and with primary focus of reaching the international market to meet the supply
                and demand. We are a leading exporter of all varieties of Non-Basmati Rice with superior
                quality of international standards. We believe in Quality of product is the primary
                aspect of any business especially in exports and Imports. We trust on
                "No Quality – No Business".
              </p>

              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#070b12",
                  marginBottom: "1rem",
                  width: "70%",
                }}
              >
                India is the world's largest producer of Rice. It contributes 21.5 percent of global
                rice production. Within the country, rice occupies one-quarter of the total cropped
                area and it contributes about 40 to 43 percent of total food grain production and
                It continues to play vital role in the national exports.
              </p>

              <div>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    router.push('/about-us');
                  }}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#0c77a1",
                    color: "#fff",
                    padding: "12px 30px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    textDecoration: "none",
                    borderRadius: "5px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    border: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#234c72"
                    e.currentTarget.style.borderColor = "#201c6f"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#0c77a1"; // Back to original
                    e.currentTarget.style.borderColor = "#073c51"; // Back to original
                  }}
                >
                  READ MORE
                </a>
              </div>
            </div>

          </div>
        </section>

        <section
          style={{
            padding: "4rem 1rem",
            background: "#f8fafc",
          }}
        >
          <div
            style={{
              maxWidth: "80rem",
              margin: "0 auto",
            }}
          >
            {/* HEADER */}
            <div
              style={{
                textAlign: "left",
                marginBottom: "3rem",
              }}
            >
              <h2
                style={{
                  fontSize: "3rem",
                  marginBottom: "0.5rem",
                  color: "#1E2D3B",
                }}
              >
                Our Products
              </h2>
            </div>

            {/* GRID */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "18px",
              }}
            >
              {/* CARD 1 */}
              <div
                onClick={() => {
                  window.location.href = `/products/${encodeURIComponent("IR64 Long Grain White Rice (Non Basmati)")}`;
                }}
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <img
                  src="/ir64_non_basmathi.png"
                  alt="Rice"
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "16px" }}>
                  <h3 style={{ margin: "6px 0", color: "#1E2D3B" }}>IR64 Long Grain White Rice (Non Basmati)</h3>
                  <p style={{ color: "#6b7280", margin: 0 }}>
                    Basmati & Non-Basmati — ~25 varieties to match diverse market needs.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div
                onClick={() => {
                  window.location.href = `/products/${encodeURIComponent("IR64 Long Grain Parboiled Rice")}`;
                }}
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <img
                  src="/ir64_parboiled_rice.png"
                  alt="Parboiled Rice"
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "16px" }}>
                  <h3 style={{ margin: "6px 0", color: "#1E2D3B" }}>IR64 Long Grain Parboiled Rice</h3>
                  <p style={{ color: "#6b7280", margin: 0 }}>
                    High-quality refined sugar sourced and shipped at competitive prices.
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div
                onClick={() => {
                  window.location.href = `/products/${encodeURIComponent("Swarna Parboiled Rice")}`;
                }}
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <img
                  src="/swarna_rice.png"
                  alt="Flour"
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "16px" }}>
                  <h3 style={{ margin: "6px 0", color: "#1E2D3B" }}>Swarna Parboiled Rice</h3>
                  <p style={{ color: "#6b7280", margin: 0 }}>
                    Consistent texture and quality for retail and HORECA clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section
          style={{
            padding: "4rem 1rem",
            background: "#f8fafc",
          }}
        >
          <div
            style={{
              maxWidth: "80rem",
              margin: "0 auto",
            }}
          >
            {/* HEADER */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              <h2
                style={{
                  fontSize: "3rem",
                  marginBottom: "0.5rem",
                  color: "#1E2D3B",
                }}
              >
                Certifications & Memberships
              </h2>

              <span
                style={{
                  color: "#6b7280",
                  fontSize: "1rem",
                }}
              >
                ISO (3), APEDA, FASSAI, MSME
              </span>
            </div>

            {/* LOGO GRID */}
            <div
              style={{
                background: "#fff",
                padding: "50px",
                borderRadius: "10px",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "32px",
                alignItems: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              }}
            >
              <img src="/iso.svg" alt="ISO" style={{ width: "100%", height: "100px", objectFit: "contain" }} />
              <img src="/apeda.svg" alt="APEDA" style={{ width: "100%", height: "100px", objectFit: "contain" }} />
              <img src="/fssai.png" alt="FASSAI" style={{ width: "100%", height: "100px", objectFit: "contain" }} />
              <img src="/msme.svg" alt="MSME" style={{ width: "100%", height: "100px", objectFit: "contain" }} />
            </div>
          </div>
        </section>


<section className="home-contact-section">
          <div className="contact-card">
            <h2>Quick Inquiry</h2>
            <p>Share your details and we’ll connect with you shortly.</p>
            {success && (
              <div className="contact-success">
                Your message has been sent successfully.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-grid">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />

              <button type="submit" className="contact-submit" disabled={loading}>
                {loading ? "Submitting..." : "Send Message"}
              </button>
            </form>
          </div>
        </section>

      </div>
    </>
  );
}