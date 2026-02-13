
'use client';

import React, { useState } from 'react';
import { Calendar, Users, MessageSquare, Clock, ArrowRight, Search, Filter, Star, TrendingUp, Award, Zap, Gift, Bell, Folder, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.tsx';
import CommunityHero from '../components/communityheader.tsx';
import FloatingChatbot from '../FloatingChatbot.jsx';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationStatus, setNotificationStatus] = useState('default');

  const requestNotificationPermission = async () => {
    if (!('Notification' in globalThis)) {
      alert('This browser does not support notifications');
      return;
    }

    try {
      const permission = await Notification.requestPermission();
      setNotificationStatus(permission);
      
      if (permission === 'granted') {
        new Notification('Notifications Enabled!', {
          body: 'You will now receive updates about community activities.',
          icon: '/images/logo.png'
        });
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  };

const activities = [
  {
    id: 1,
    title: 'Nexus 1.0',
    category: 'hackathon',
    date: '2026-02-06',
    time: 'Registration Open',
    location: 'Tech Innovation Lab',
    participants: 24,
    maxParticipants: 40,
    image: '/images/nx.webp',
    description: 'Build and prototype AI-driven solutions in a 36 hour Online hackathon, post selection.  Participants get an opportunity to win conditioned cash prizes, certificates along with mentorship from industry experts. Join our community to stay updated on the latest news and announcements about Nexus 1.0, including registration details, event schedule, and prize information.',
    organizer: 'Sarah Johnson',
    rating: 4.8,
    featured: true,
    event_link:'/nexus',
    enddate:'2026-03-30'
  },
  {
    id: 3,
    title: 'AI Hackathon Sprint',
    category: 'hackathon',
    date: '2025-11-25',
    time: '9:00 AM',
    location: 'Tech Innovation Lab',
    participants: 24,
    maxParticipants: 40,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop',
    description: 'Build and prototype AI-driven solutions in a 24-hour hackathon.',
    organizer: 'Sarah Johnson',
    rating: 4.8,
    featured: false,
    event_link:'',
    enddate:'2025-02-08'
  },
  
  
];


const stats = [
  { icon: Users, label: 'Members Joined', value: '50+', color: 'from-blue-500 to-teal-500' },
  { icon: Calendar, label: 'Sessions Hosted', value: '4', color: 'from-teal-500 to-cyan-500' },
  { icon: Award, label: 'Ideas Shared', value: '10+', color: 'from-cyan-500 to-blue-500' },
  { icon: Award, label: 'Total Events', value: '2', color: 'from-cyan-500 to-blue-500' },
];


  const categories = [
    { id: 'all', label: 'All Activities', icon: Users },
    { id: 'project', label: 'Projects', icon: Folder },
    { id: 'workshop', label: 'Workshops', icon: MessageSquare },
    { id: 'hackathon', label: 'Hackathon', icon: Calendar }
  ];

  const upcomingHighlights = [
    { title: 'Tech Workshop Series', date: 'Yet to be announced', participants: 85 },
    { title: 'Innovation Summit', date: 'Yet to be announced', participants: 250 }
  ];

  const filteredActivities = activities.filter(activity => {
    const matchesCategory = activeTab === 'all' || activity.category === activeTab;
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <> 
    <Navbar />
    <CommunityHero/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Join 100+ active community members</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Community Activities Hub</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Connect, learn, and grow together with your neighbors through exciting events and activities
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Search and Filter */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search activities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                />
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-5 h-5" />
                <span>Filter</span>
              </button>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                      activeTab === category.id
                        ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Activities Grid */}
            <div className="grid grid-cols-1 gap-8">
              {filteredActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Large Image Section */}
<div className="relative lg:w-2/5 h-[420px] sm:h-[480px] md:h-[520px] lg:h-auto overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r" /> */}
                      {activity.featured && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-1.5 rounded-full text-sm font-bold text-white flex items-center gap-1.5 shadow-lg">
                          <Star className="w-4 h-4 fill-current" />
                          <span>Featured</span>
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 lg:hidden">
                        <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-teal-600 capitalize shadow-md">
                          {activity.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <span className="hidden lg:inline-block bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-2">
                              {activity.category}
                            </span>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors leading-tight">
                              {activity.title}
                            </h3>
                          </div>
                          {/* <div className="flex items-center gap-1.5 bg-yellow-50 px-3 py-1.5 rounded-full">
                            <Star className="w-5 h-5 text-yellow-500 fill-current" />
                            <span className="text-lg font-bold text-gray-900">{activity.rating}</span>
                          </div> */}
                        </div>
                        
                        <p className="text-gray-600 text-base lg:text-lg mb-6 leading-relaxed">{activity.description}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                              <Calendar className="w-5 h-5 text-teal-600" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 uppercase tracking-wide">Date</p>
                              <p className="text-sm font-semibold text-gray-900">{new Date(activity.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                              <Clock className="w-5 h-5 text-cyan-600" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 uppercase tracking-wide">Time</p>
                              <p className="text-sm font-semibold text-gray-900">{activity.time}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-end pt-6 border-t border-gray-100">
                        {new Date() > new Date(activity.enddate) ? (
                          <button 
                            disabled
                            className="flex items-center gap-2 bg-gray-300 text-gray-500 px-6 py-3 rounded-xl font-bold cursor-not-allowed"
                          >
                            <span>Event Ended</span>
                          </button>
                        ) : (
                          <a href={activity.event_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <span>Join Now</span>
                            <ArrowRight className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredActivities.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl">
                <p className="text-gray-500 text-lg">No activities found. Try adjusting your search or filter.</p>
              </div>
            )}
          </div>

          {/* Sidebar - Sticky */}
          <div className="lg:sticky lg:top-25 space-y-6 h-fit">
            {/* Upcoming Highlights */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-teal-600" />
                <h3 className="font-bold text-lg text-gray-900">Upcoming Highlights</h3>
              </div>
              <div className="space-y-4">
                {upcomingHighlights.map((event) => (
                  <div key={event.title} className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">{event.title}</div>
                      <div className="text-sm text-gray-600">{event.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl shadow-md p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-5 h-5" />
                <h3 className="font-bold text-lg">Stay Updated</h3>
              </div>
              <p className="text-sm text-teal-50 mb-4">
                Get notifications about new activities and events in your area.
              </p>
              {notificationStatus === 'granted' ? (
                <div className="w-full  bg-white/20 text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  Notifications Enabled
                </div>
              ) : (
                <button 
                style={
                {"cursor":"pointer"}
                }

                  onClick={requestNotificationPermission}
                  className="w-full bg-white text-teal-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Bell className="w-4 h-4" />
                  {notificationStatus === 'denied' ? 'Notifications Blocked' : 'Enable Notifications'}
                </button>
              )}
            </div>

            {/* Rewards */}
      <div className="bg-white rounded-xl shadow-md p-6">
  <div className="flex items-center gap-2 mb-4">
    <Gift className="w-5 h-5 text-teal-600" />
    <h3 className="font-bold text-lg text-gray-900">Power of Community</h3>
  </div>

  <div className="bg-gradient-to-r from-blue-50 via-teal-50 to-cyan-50 rounded-lg p-5 mb-4">
    <p className="text-gray-800 text-sm leading-relaxed italic text-center">
      “When people come together with a shared purpose,  
      dreams become goals, and goals become reality.  
      A strong community doesn’t just support you —  
      it helps you grow, rise, and succeed.”
    </p>
  </div>


 
</div>

          </div>
        </div>

        <div className="mt-12 mb-12 bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 rounded-2xl p-8 text-white text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-3">Ready to be part of something amazing?</h2>
          <p className="text-blue-100 mb-6">Connect with like-minded learners, share ideas, and grow together!</p>
          <a 
            href="https://whatsapp.com/channel/0029VbAbfJY0gcfP0LGgZC1g" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center gap-2"
          >
            <span>Join the Community</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
          <FloatingChatbot/>
    
    <Footer />
    </>
  );
}