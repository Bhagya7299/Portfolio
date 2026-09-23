import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Clock, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export default function ContactAndBooking({ personalInfo, prefillMessage }) {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Freelance Project Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Booking Widget State
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('03:00 PM IST');
  const [bookedSuccess, setBookedSuccess] = useState(false);

  useEffect(() => {
    if (prefillMessage) {
      setFormData((prev) => ({
        ...prev,
        message: prefillMessage
      }));
    }
  }, [prefillMessage]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Freelance Project Inquiry', message: '' });
    }, 4000);
  };

  const handleBookMeeting = () => {
    setBookedSuccess(true);
    setTimeout(() => setBookedSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Get In Touch
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-gray-400 text-base">
            Open for full-time career roles, freelance web projects, and technical consulting.
          </p>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          
          {/* Left Column: Direct Contact Info & Calendar Booking */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Details Card */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="font-heading font-bold text-xl text-white">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm text-gray-300">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center space-x-3.5 p-3.5 rounded-2xl bg-gray-900 border border-white/5 hover:border-indigo-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Direct Email</div>
                    <div className="font-semibold text-white group-hover:text-indigo-300">{personalInfo.email}</div>
                  </div>
                </a>

                <div className="flex items-center space-x-3.5 p-3.5 rounded-2xl bg-gray-900 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Phone / WhatsApp</div>
                    <div className="font-semibold text-white">{personalInfo.phone}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5 p-3.5 rounded-2xl bg-gray-900 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-rose-600/20 text-rose-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Location</div>
                    <div className="font-semibold text-white">{personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>


            {/* SIMULATED CONSULTATION BOOKER */}
            <div className="glass-panel p-8 rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950/30 space-y-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-indigo-400" />
                <h3 className="font-heading font-bold text-lg text-white">
                  Schedule 15-Min Strategy Call
                </h3>
              </div>

              <p className="text-xs text-gray-400">
                Book a quick consultation call to discuss your project scope or job opportunity.
              </p>

              {bookedSuccess ? (
                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold space-y-1 text-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
                  <div>Meeting Scheduled!</div>
                  <div className="text-gray-300 font-normal">Confirmation sent to your email. See you on Google Meet!</div>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Select Date */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Select Date</label>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {['Today', 'Tomorrow', 'Friday'].map((d) => (
                        <button
                          key={d}
                          onClick={() => setSelectedDate(d)}
                          className={`py-2 rounded-lg border font-semibold ${
                            selectedDate === d ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-gray-900 border-white/10 text-gray-400'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Time */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Select Time Slot</label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {['11:00 AM IST', '03:00 PM IST', '06:00 PM IST', '09:00 PM IST'].map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`py-2 rounded-lg border font-semibold ${
                            selectedTime === t ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-gray-900 border-white/10 text-gray-400'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleBookMeeting}
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center space-x-2"
                  >
                    <Clock className="w-4 h-4" />
                    <span>Confirm Call Booking ({selectedDate} @ {selectedTime})</span>
                  </button>
                </div>
              )}

            </div>

          </div>


          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 bg-gray-950/90 shadow-2xl relative">
              
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                Send Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-8">
                Fill out the form below and I'll respond within 12-24 business hours.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce-slow" />
                  <h4 className="font-heading font-bold text-xl text-white">Message Delivered Successfully!</h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Thank you for reaching out, <span className="font-semibold text-white">{formData.name}</span>. I have received your message regarding "{formData.subject}" and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/60 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Category */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Inquiry Purpose</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-gray-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/60 transition-colors"
                    >
                      <option value="Freelance Project Inquiry">Freelance Project / Scope Discussion</option>
                      <option value="Job Opportunity / Hiring">Job Opportunity / Recruitment Inquiry</option>
                      <option value="B2B Strategic Partnership">B2B Strategic Partnership / Consulting</option>
                      <option value="General Question">General Question / Connect</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">Message / Details *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project, timeline, budget, or role details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-gray-900 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/60 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center space-x-2 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
