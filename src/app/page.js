"use client";
import Head from 'next/head';
import Link from 'next/link';
import {useState} from 'react'

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  // Function to toggle FAQ items
  const toggleFaq = index => {
    setOpenFaq(openFaq === index ? null : index);
  };
  
  return (
    <div>
      <Head>
        <title>Our SaaS Product</title>
        <meta name="description" content="Revolutionizing Your Experience" />
      </Head>

      {/* Header Section */}
      <header className="sticky top-0 bg-gray-900 text-white p-4">
        <nav className="flex justify-between items-center">
          <img src="https://via.placeholder.com/50" alt="Company Logo" className="h-8"/>
          <div>
            <Link href="/" className="p-2">Home</Link>
            <Link href="#about" className="p-2">About</Link>
            <Link href="#features" className="p-2">Features</Link>
            <Link href="#pricing" className="p-2">Pricing</Link>
            <Link href="#contact" className="p-2">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center p-4 sm:p-8 md:p-12 bg-cover bg-hero-pattern">
        <h2 className="text-5xl font-bold mb-6">Introducing Our SaaS Product</h2>
        <p className="text-xl mb-6">Transforming your workflow with ease and efficiency.</p>
        <img src="https://via.placeholder.com/350" alt="Hero Image" className="mx-auto mb-6"/>
        <Link href="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-black mt-20 text-black bg-white pt-8">
        <h2 className="text-5xl font-bold mb-6 text-center text-black">Features</h2>
        <p className="text-xl mb-6 text-center">Our tool is packed with amazing features. It is very well crafted by closely.</p>
        <div className="flex flex-col sm:flex-row justify-around p-4 sm:p-8 md:p-12">
        <div className="text-center p-4">
          <img src="https://via.placeholder.com/250" alt="Feature 1" className="mx-auto mb-2"/>
          <h4 className="font-bold">Feature One</h4>
          <p>Short description of the feature.</p>
        </div>
        <div className="text-center p-4">
          <img src="https://via.placeholder.com/250" alt="Feature 2" className="mx-auto mb-2"/>
          <h4 className="font-bold">Feature Two</h4>
          <p>Short description of the feature.</p>
        </div>
        <div className="text-center p-4">
          <img src="https://via.placeholder.com/250" alt="Feature 3" className="mx-auto mb-2"/>
          <h4 className="font-bold">Feature Three</h4>
          <p>Short description of the feature.</p>
        </div>
        </div>
      </section>

            {/* Pricing Section */}
      <section id="pricing" className="p-4 sm:p-8 md:p-12 bg-gray-900 text-white h-screen align-middle">
        <h3 className="text-4xl font-bold mb-4 text-center text-[#007BFF]">Our Pricing Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 border border-blue-200 rounded-lg shadow">
            <h4 className="font-bold text-lg">Basic</h4>
            <p className="text-gray-600">Ideal for individuals</p>
            <p className="text-2xl font-bold">$0/month</p>
            <ul className="text-left">
              <li>Basic features</li>
              <li>Up to 5 demos per month</li>
            </ul>
            <Link href="/signup" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </Link>
          </div>
          <div className="p-4 border border-blue-200 rounded-lg shadow">
            <h4 className="font-bold text-lg">Pro</h4>
            <p className="text-gray-600">For small businesses</p>
            <p className="text-2xl font-bold">$50/month</p>
            <ul className="text-left">
              <li>Advanced features</li>
              <li>Unlimited demos</li>
              <li>Priority support</li>
            </ul>
            <Link href="/signup" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </Link>
          </div>
          <div className="p-4 border border-blue-200 rounded-lg shadow">
            <h4 className="font-bold text-lg">Premium</h4>
            <p className="text-gray-600">Best for large organizations</p>
            <p className="text-2xl font-bold">Contact for pricing</p>
            <ul className="text-left">
              <li>Full feature suite</li>
              <li>Dedicated support</li>
              <li>Custom integrations</li>
            </ul>
            <Link href="/contact" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
    <section id="testimonials" className="p-4 sm:p-8 md:p-12 bg-white text-black">
        <h3 className="text-4xl font-bold mb-4 text-center text-black pd-8">What Our Customers Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <img src="https://via.placeholder.com/120" alt="Customer 1" className="mx-auto rounded-full my-8"/>
            <blockquote className="text-center">"Amazing product, transformed our workflow!"</blockquote>
            <cite>- Jane Doe, CEO of ABC Corp</cite>
          </div>
          <div className="text-center">
            <img src="https://via.placeholder.com/120" alt="Customer 2" className="mx-auto rounded-full my-8"/>
            <blockquote className="text-center">"Incredible support and easy to use."</blockquote>
            <cite>- John Smith, CTO of XYZ Inc</cite>
          </div>
          <div className="text-center">
            <img src="https://via.placeholder.com/120" alt="Customer 3" className="mx-auto rounded-full my-8"/>
            <blockquote className="text-center">"Very intuitive and efficient."</blockquote>
            <cite>- Emily Johnson, Product Manager</cite>
          </div>
        </div>
      </section>



      {/* FAQ Section
        <section id="faq" className="p-4 sm:p-8 md:p-12 bg-black">
          <h3 className="text-4xl font-bold mb-4 text-center text-[#007BFF]">Frequently Asked Questions</h3>
        <div className="accordion">
          <div className={`faq-item ${openFaq === 0 ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}>
            <h4 className="font-bold text-lg">How easy is it to set up a demo?</h4>
            <p className={`content ${openFaq === 0 ? 'visible' : ''}`}>Setting up is quick and intuitive with our user-friendly interface.</p>
          </div>
          <div className={`faq-item ${openFaq === 1 ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}>
            <h4 className="font-bold text-lg">Can I customize the demos?</h4>
            <p className={`content ${openFaq === 1 ? 'visible' : ''}`}>Yes, customization is a key feature of our product, allowing you to tailor demos to your audience.</p>
          </div>
          <div className={`faq-item ${openFaq === 2 ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}>
            <h4 className="font-bold text-lg">What kind of support do you offer?</h4>
            <p className={`content ${openFaq === 2 ? 'visible' : ''}`}>We offer 24/7 customer support for all our users, with dedicated support for premium clients.</p>
          </div>
        </div>
      </section> */}

      {/* Footer */}
       <footer className="bg-gray-900 text-white p-4 sm:p-6 md:p-8 text-center">
        <p>Follow us on social media</p>
        <p>Privacy Policy | Terms of Service | Contact Email</p>
      </footer>
    </div>
  );
}
