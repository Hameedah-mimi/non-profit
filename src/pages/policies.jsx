import CustomNavbar from "../components/Nav";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";
import "./Styles/Policies.css";

const faqs = [
  {
    question: "What does UnityBridge Foundation do?",
    answer:
      "We support underserved communities through education programs, healthcare outreach, food distribution, youth empowerment, and humanitarian initiatives.",
  },
  {
    question: "How can I become a volunteer?",
    answer:
      "You can apply through our Get Involved page. Our volunteer opportunities are open to students, professionals, and compassionate individuals who want to make a difference.",
  },
  {
    question: "Where do donations go?",
    answer:
      "Every donation directly supports our outreach programs, educational support projects, healthcare campaigns, logistics, and emergency assistance efforts.",
  },
  {
    question: "Do you accept partnerships?",
    answer:
      "Yes. We welcome collaborations with organizations, schools, businesses, and individuals who share our mission.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach out through email, social media, or our contact page.",
  },
];

const policies = [
  {
    title: "Privacy Policy",
    content:
      "We protect all personal information shared with us. Your data is secure and never sold.",
  },
  {
    title: "Donation Transparency",
    content:
      "All donations are used responsibly for community development and outreach programs.",
  },
  {
    title: "Volunteer Conduct",
    content:
      "Volunteers must act with respect, integrity, and professionalism at all times.",
  },
  {
    title: "Community Commitment",
    content: "We promote safety, inclusion, and respect for all individuals.",
  },
];

function Policies() {
  return (
    <div className="policy-page">
      <section className="policy-hero text-center">
        <div className="overlay"></div>
        <div className="hero-content">
          <span>SUPPORT • TRANSPARENCY • TRUST</span>
          <h1>FAQ & Policies</h1>
          <p>
            Learn more about our mission, policies, and answers to common
            questions.
          </p>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="underline"></div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-card">
              <div className="faq-number">{index + 1}</div>
              <div>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="policy-section">
        <h2>Our Policies</h2>
        <div className="underline"></div>

        <div className="policy-grid">
          {policies.map((item, index) => (
            <div key={index} className="policy-card">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="policy-cta">
        <h2>Have More Questions?</h2>
        <p>We are always ready to support and guide you.</p>

        <div className="cta-buttons">
          <Button href="tel:+2349024725100">Contact Us</Button>
          <Button href="/about" className="outline">
            Learn More
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Policies;
