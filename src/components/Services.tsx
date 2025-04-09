// src/components/Services.tsx
export default function Services() {
    return (
      <section id="services" className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-10">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow-sm">
            <h4 className="font-bold mb-2">IT Infrastructure</h4>
            <p>Secure networking, setup, and maintenance tailored to your business needs.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h4 className="font-bold mb-2">Digitalization</h4>
            <p>Consulting on modern tools, workflows, and efficiency upgrades.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h4 className="font-bold mb-2">AI Integration</h4>
            <p>Discover how AI can transform your workflow. Custom recommendations included.</p>
          </div>
        </div>
      </section>
    );
  }
  