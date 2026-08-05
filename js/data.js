const images = {
  hero:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop&q=80",

  about:
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&auto=format&fit=crop&q=80",

  coding:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",

  networking:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",

  culture:
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=80",

  family:
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop&q=80",

  hiking:
    "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop&q=80",

  photography:
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=80",

  yoga:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80",

  coffee:
    "https://plus.unsplash.com/premium_photo-1661627099253-78092bb3fba9?w=800&auto=format&fit=crop&q=80",

  city1:
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&auto=format&fit=crop&q=80",

  city2:
    "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop&q=80",

  story1:
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=80",

  story2:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80"
};
const events = [
  {
    title: "Twin Cities Coding Night",
    group: "Minnesota Developers",
    date: "July 28 • 6:00 PM",
    location: "Minneapolis",
    category: "Technology",
    image: images.coding
  },

  {
    title: "Startup Networking",
    group: "Launch Minnesota",
    date: "August 4 • 6:30 PM",
    location: "Minneapolis",
    category: "Business",
    image: images.networking
  },

  {
    title: "Coffee & Career",
    group: "Young Professionals",
    date: "August 6 • 7:00 PM",
    location: "St Paul",
    category: "Career",
    image: images.coffee
  },

  {
    title: "Somali Culture Evening",
    group: "Culture Hub",
    date: "July 30 • 5:00 PM",
    location: "Bloomington",
    category: "Culture",
    image: images.culture
  },

  {
    title: "Family Picnic",
    group: "Parents Network",
    date: "August 3 • 1:00 PM",
    location: "Brooklyn Park",
    category: "Family",
    image: images.family
  },

  {
    title: "Weekend Hiking Club",
    group: "North Trails",
    date: "August 1 • 8:00 AM",
    location: "Rochester",
    category: "Outdoors",
    image: images.hiking
  },

  {
    title: "Photography Walk",
    group: "MPLS Creatives",
    date: "August 2 • 9:00 AM",
    location: "Minneapolis",
    category: "Photography",
    image: images.photography
  },

  {
    title: "Outdoor Yoga",
    group: "Healthy Living",
    date: "August 5 • 7:00 AM",
    location: "St Paul",
    category: "Wellness",
    image: images.yoga
  }
];
const onlineEvents = [
  {
    title: "Remote JavaScript Workshop",
    group: "Kulan Tech",
    date: "August 15 • Online",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop&q=80"
  },

  {
    title: "Career Coaching Live",
    group: "Career Connect",
    date: "August 18 • Online",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80"
  },

  {
    title: "Startup Pitch Webinar",
    group: "Launch Minnesota",
    date: "August 20 • Online",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&auto=format&fit=crop&q=80"
  }
];
const stories = [
  {
    name: "Sarah",
    text: "I met amazing friends through Kulan. I found a coding group and made lifelong friends.",
    image: images.story1
  },

  {
    name: "Ahmed",
    text: "Joining Kulan helped me connect with local entrepreneurs and grow my professional network.",
    image: images.story2
  }
];

const cities = [
  {
    name: "Minneapolis",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Saint Paul",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Rochester",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Bloomington",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Brooklyn Park",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80"
  }
];
const heroImage = images.hero;

const steps = [
  {
    number: "1",
    title: "Discover Events",
    text: "Search thousands of local and online events across Minnesota."
  },
  {
    number: "2",
    title: "Join a Community",
    text: "Click Join Event and become part of a group that matches your interests."
  },
  {
    number: "3",
    title: "Meet & Connect",
    text: "Attend events, make friends, and grow your personal or professional network."
  }
];