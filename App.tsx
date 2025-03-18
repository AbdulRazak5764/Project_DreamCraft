import { useState } from 'react';
import { 
  Sparkles, 
  Palette, 
  ShoppingBag, 
  Heart, 
  ArrowRight, 
  Star, 
  Users, 
  Calendar, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const giftCategories: { id: string; name: string }[] = [
    { id: 'all', name: 'All Gifts' },
    { id: 'art', name: 'Custom Art' },
    { id: 'jewelry', name: 'Jewelry' },
    { id: 'books', name: 'Books & Stories' },
    { id: 'music', name: 'Music' },
    { id: 'fragrance', name: 'Fragrances' }
  ];

  const featuredGifts: { id: number; title: string; category: string; description: string; price: string; image: string }[] = [
    {
      id: 1,
      title: "Custom Portrait",
      category: "art",
      description: "Hand-painted portrait based on personality and preferences",
      price: "$149",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Personalized Story Book",
      category: "books",
      description: "Custom short story inspired by recipient's life and interests",
      price: "$89",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Signature Melody",
      category: "music",
      description: "Original composition created based on personality traits",
      price: "$129",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Custom Jewelry Piece",
      category: "jewelry",
      description: "Handcrafted jewelry inspired by recipient's favorite things",
      price: "$199",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      title: "Personalized Fragrance",
      category: "fragrance",
      description: "Custom scent created based on personality and preferences",
      price: "$119",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      title: "AI-Generated Artwork",
      category: "art",
      description: "Digital masterpiece created from recipient's interests",
      price: "$99",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const filteredGifts = activeTab === 'all' 
    ? featuredGifts 
    : featuredGifts.filter(gift => gift.category === activeTab);

  const testimonials: { id: number; name: string; role: string; quote: string; avatar: string }[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Birthday Gift Buyer",
      quote: "The custom portrait I ordered for my sister was absolutely perfect. DreamCraft captured her personality in ways I couldn't have imagined!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Anniversary Gift Buyer",
      quote: "My wife was moved to tears by the personalized story book. It incorporated so many special moments from our relationship.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Holiday Gift Buyer",
      quote: "The custom melody created for my parents' 50th anniversary was hauntingly beautiful and perfectly captured their journey together.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Sparkles className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">DreamCraft</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  How It Works
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Gift Gallery
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  For Artists
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  About Us
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Get Started
              </button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#" className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                Home
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                How It Works
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                Gift Gallery
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                For Artists
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                About Us
              </a>
              <div className="mt-4 pl-3">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">AI-Powered</span>{' '}
                  <span className="block text-indigo-600 xl:inline">Personalized Gifts</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Create hyper-personalized, one-of-a-kind gifts that capture the essence of your loved ones. Our AI analyzes their personality and preferences to design truly meaningful creations.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Create a Gift
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      How It Works
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="AI-generated personalized gift"
          />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How DreamCraft Works
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              From understanding your recipient to delivering a one-of-a-kind creation, our AI-powered platform makes gift-giving magical.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Users className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">1. Share Information</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Tell us about your recipient's personality, interests, and preferences. Optionally connect their social media for deeper insights.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Sparkles className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">2. AI Analysis</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our advanced AI analyzes the data to understand their unique traits and suggests personalized gift ideas.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Palette className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">3. Artistic Creation</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our network of talented artists, writers, and craftsmen bring the personalized concept to life.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <ShoppingBag className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">4. Preview & Purchase</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Preview the creation using our AR technology and make any adjustments before finalizing your purchase.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Calendar className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">5. Timely Delivery</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We ensure your one-of-a-kind gift arrives on time for the special occasion with beautiful packaging.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <Heart className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">6. Social Impact</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  A portion of every purchase supports art education programs and environmental causes of your choice.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Featured Gifts Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Gift Gallery</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Explore Our Personalized Creations
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Browse through our collection of AI-powered personalized gifts created for recipients with unique personalities.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              {giftCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`
                    ${activeTab === category.id ? 'bg-indigo-100 text-indigo-700' : 'bg-white text-gray-700 hover:bg-gray-50'} 
                    relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium
                    ${category.id === 'all' ? 'rounded-l-md' : ''}
                    ${category.id === 'fragrance' ? 'rounded-r-md' : ''}
                  `}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Gift Grid */}
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredGifts.map((gift) => (
              <div key={gift.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="relative h-48">
                  <img className="w-full h-full object-cover" src={gift.image} alt={gift.title} />
                  <div className="absolute top-0 right-0 m-2 px-2 py-1 bg-indigo-600 text-white text-xs font-bold rounded">
                    {gift.price}
                  </div>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">{gift.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{gift.description}</p>
                  <div className="mt-4">
                    <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium flex items-center">
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              View All Gifts <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Customers Say
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to create something special?</span>
            <span className="block text-indigo-200">Start crafting a personalized gift today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Get Started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Products</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Custom Art</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Personalized Books</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Custom Music</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Gift Subscriptions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">For Artists</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Join Our Network</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Artist Resources</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Success Stories</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2025 DreamCraft, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
