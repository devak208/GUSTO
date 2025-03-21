"use client";

import { motion } from "framer-motion";
import { Phone, User } from "lucide-react";
import { Contact, ContactCategory, contacts } from "@/data/Contact";

// Reusable contact card component
const ContactCard = ({
  contact,
  index,
}: {
  contact: Contact;
  index: number;
}) => (
  <motion.div
    key={contact.name}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white/90 dark:bg-black rounded-xl p-6 shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-800"
  >
    <div className="flex flex-col items-center text-center">
      <div className="bg-gray-100 dark:bg-black p-3 rounded-full mb-4">
        <User className="h-6 w-6 text-gray-700 dark:text-gray-300" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
        {contact.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{contact.role}</p>
      <div className="space-y-2 w-full">
        <a
          href={`tel:${contact.phone}`}
          className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        >
          <Phone className="h-4 w-4" />
          <span>{contact.phone}</span>
        </a>
      </div>
    </div>
  </motion.div>
);

// Reusable section component
const ContactCategorySection = ({
  title,
  contacts,
  isLastSection = false,
}: {
  title: string;
  contacts: Contact[];
  isLastSection?: boolean;
}) => (
  <>
    {contacts.length > 0 && (
      <>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-8"
        >
          {title}
        </motion.h3>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ${
            !isLastSection ? "mb-12" : ""
          }`}
        >
          {contacts.map((contact, index) => (
            <ContactCard key={contact.name} contact={contact} index={index} />
          ))}
        </div>
      </>
    )}
  </>
);

export default function ContactSection() {
  // Group contacts by category
  const contactsByCategory = contacts.reduce<
    Record<ContactCategory, Contact[]>
  >(
    (acc, contact) => {
      if (!acc[contact.category]) {
        acc[contact.category] = [];
      }
      acc[contact.category].push(contact);
      return acc;
    },
    { final: [], prefinal: [] }
  );

  return (
    <div id="contact" className="w-full py-20 mb-44">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 relative"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get in touch with our event secretaries for any queries or
            assistance.
          </p>
        </motion.div>

        <ContactCategorySection
          title="Final Year Coordinators"
          contacts={contactsByCategory.final}
        />

        <ContactCategorySection
          title="Prefinal Year Coordinators"
          contacts={contactsByCategory.prefinal}
          isLastSection={true}
        />
      </div>
    </div>
  );
}
