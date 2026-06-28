import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import reservationImage from "../assets/images/reservation.jpg";

import {
  FiUser,
  FiMail,
  FiPhone,
  FiUsers,
  FiCalendar,
  FiClock,
  FiMessageSquare,
} from "react-icons/fi";

function Reservation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.guests ||
      !form.date ||
      !form.time
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setSuccess(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      guests: "",
      date: "",
      time: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section id="reservation" className="bg-[#111111] py-28">
      <div className="mx-auto max-w-7xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle subtitle="Reservation" title="Reserve Your Table" />
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-3xl"
          >
            <img
              src={reservationImage}
              alt="Restaurant"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/10 bg-[#1a1a1a] p-10"
          >
            <span className="rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-orange-500">
              Fine Dining
            </span>

            <h3 className="mt-6 text-3xl font-bold text-white">Book a Table</h3>

            <p className="mb-8 mt-3 text-gray-400">
              Reserve your seat and enjoy an unforgettable Italian dining
              experience.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {" "}
              {/* Name */}
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-white/10 bg-[#222] py-4 pl-12 pr-5 text-white outline-none transition duration-300 focus:border-orange-500 focus:shadow-[0_0_15px_rgba(249,115,22,.25)]"
                />
              </div>
              {/* Email */}
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full rounded-xl border border-white/10 bg-[#222] py-4 pl-12 pr-5 text-white outline-none transition duration-300 focus:border-orange-500 focus:shadow-[0_0_15px_rgba(249,115,22,.25)]"
                />
              </div>
              {/* Phone */}
              <div className="relative">
                <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full rounded-xl border border-white/10 bg-[#222] py-4 pl-12 pr-5 text-white outline-none transition duration-300 focus:border-orange-500 focus:shadow-[0_0_15px_rgba(249,115,22,.25)]"
                />
              </div>
              {/* Guests */}
              <div className="relative">
                <FiUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="number"
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  placeholder="Guests"
                  className="w-full rounded-xl border border-white/10 bg-[#222] py-4 pl-12 pr-5 text-white outline-none transition duration-300 focus:border-orange-500 focus:shadow-[0_0_15px_rgba(249,115,22,.25)]"
                />
              </div>
              {/* Date */}
              <div className="relative">
                <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#222] py-4 pl-12 pr-5 text-white outline-none transition duration-300 focus:border-orange-500 focus:shadow-[0_0_15px_rgba(249,115,22,.25)]"
                />
              </div>
              {/* Time */}
              <div className="relative">
                <FiClock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#222] py-4 pl-12 pr-5 text-white outline-none transition duration-300 focus:border-orange-500 focus:shadow-[0_0_15px_rgba(249,115,22,.25)]"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative mt-5">
              <FiMessageSquare className="absolute left-4 top-5 text-gray-500" />

              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Special Requests"
                className="w-full rounded-xl border border-white/10 bg-[#222] py-4 pl-12 pr-5 text-white outline-none transition duration-300 focus:border-orange-500 focus:shadow-[0_0_15px_rgba(249,115,22,.25)]"
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-orange-500 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,.45)]"
            >
              Reserve Now
            </button>

            {success && (
              <p className="mt-5 text-center font-medium text-green-400">
                Reservation request sent successfully!
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
