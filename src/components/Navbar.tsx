import { useState, useEffect, useCallback, useRef, memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/images/logo.webp";

// Configuration types and constants
type SchoolType =
  | "MPGIN"
  | "School of Engineering"
  | "School of Management"
  | "Vishwabharati Polytechnic Institute";

interface NavItem {
  name: string;
  path: string;
}

const SCHOOLS: SchoolType[] = [
  "MPGIN",
  "School of Engineering",
  "School of Management",
  "Vishwabharati Polytechnic Institute",
];

const MAIN_NAV: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Facilities", path: "/facilities" },
  { name: "Features", path: "/features" },
  { name: "Trainings", path: "/trainings" },
  { name: "Departments", path: "/departments" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const SCHOOL_NAV = (school: SchoolType): NavItem[] => [
  { name: "Home", path: `/${slugify(school)}/home` },
  { name: "Courses", path: `/${slugify(school)}/courses` },
  { name: "Departments", path: `/${slugify(school)}/departments` },
  { name: "Contact", path: `/${slugify(school)}/contact` },
];

const slugify = (text: string) => text.toLowerCase().replace(/ /g, "-");

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Derived state from URL
  const currentSchool =
    SCHOOLS.find((school) => pathname.startsWith(`/${slugify(school)}/`)) ||
    "MPGIN";

  const isSchoolPage = currentSchool !== "MPGIN";

  // Navigation handlers
  const handleSchoolSelect = useCallback(
    (school: SchoolType) => {
      navigate(school === "MPGIN" ? "/" : `/${slugify(school)}/home`);
      setIsMenuOpen(false);
    },
    [navigate]
  );

  const handleLogoClick = useCallback(() => {
    navigate(isSchoolPage ? `/${slugify(currentSchool)}/home` : "/");
  }, [navigate, isSchoolPage, currentSchool]);

  // Scroll handler with throttling
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 100);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close menu on route change
  useEffect(() => setIsMenuOpen(false), [pathname]);

  return (
    <nav
      className={`fixed w-full z-50 shadow-lg transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ backgroundColor: isSchoolPage ? "#001560" : "#b71a34" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and School Selector */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-3 focus:outline-none"
              aria-label="Navigate to homepage"
            >
              <img
                src={logo}
                alt="College Logo"
                className="h-14 w-14 object-contain rounded-full bg-white p-1 transition-transform duration-200 hover:scale-105"
              />
            </button>

            <SchoolDropdown
              currentSchool={currentSchool}
              onSelect={handleSchoolSelect}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {(isSchoolPage ? SCHOOL_NAV(currentSchool) : MAIN_NAV).map(
              (item) => (
                <NavLink key={item.path} item={item} />
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu
          isOpen={isMenuOpen}
          items={isSchoolPage ? SCHOOL_NAV(currentSchool) : MAIN_NAV}
        />
      </div>
    </nav>
  );
};

// Memoized sub-components
const SchoolDropdown = memo(
  ({
    currentSchool,
    onSelect,
  }: {
    currentSchool: SchoolType;
    onSelect: (school: SchoolType) => void;
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Handle outside clicks
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-left text-white flex items-center gap-1 hover:bg-white/10 px-3 py-2 rounded-lg transition-colors"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <p className="font-bold text-lg">{currentSchool}</p>
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
          {currentSchool === "MPGIN" && (
            <p className="text-xs opacity-80 mt-0.5">Nanded</p>
          )}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg mt-2 animate-fade-in">
            {SCHOOLS.map((school) => (
              <button
                key={school}
                onClick={() => {
                  onSelect(school);
                  setIsOpen(false);
                }}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 w-full text-left transition-colors duration-200"
              >
                {school}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);

const NavLink = memo(({ item }: { item: NavItem }) => {
  const { pathname } = useLocation();
  const isActive = pathname === item.path;

  return (
    <Link
      to={item.path}
      className={`px-4 py-2.5 rounded-md transition-all duration-200 font-medium ${
        isActive
          ? "bg-white text-[#b71a34] shadow-lg"
          : "text-white/90 hover:bg-white/20 hover:shadow-sm"
      }`}
    >
      {item.name}
    </Link>
  );
});

const MobileMenu = memo(
  ({ isOpen, items }: { isOpen: boolean; items: NavItem[] }) => {
    const { pathname } = useLocation();
    const menuRef = useRef<HTMLDivElement>(null);

    return (
      <div
        ref={menuRef}
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {items.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`block py-3 px-6 text-lg ${
                isActive
                  ? "bg-[#b71a34] text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              } transition-colors duration-200`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    );
  }
);

export default Navbar;
