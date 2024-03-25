import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>

<footer className="bg-gray-900 text-white py-8 mt-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
                <h4 className="text-lg font-semibold mb-4">Explore</h4>
                <ul>
                    <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                    <li><Link to="/menu" className="hover:text-gray-400">Menu</Link></li>
                    <li><Link to="/cart" className="hover:text-gray-400">Cart</Link></li>
                    <li><Link to="/account" className="hover:text-gray-400">Account</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-semibold mb-4">Information</h4>
                <ul>
                    <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
                    <li><Link to="/faqs" className="hover:text-gray-400">FAQs</Link></li>
                    <li><Link to="/terms" className="hover:text-gray-400">Terms of Service</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <ul>
                    <li><Link to="#" className="hover:text-gray-400">Facebook</Link></li>
                    <li><Link to="#" className="hover:text-gray-400">Instagram</Link></li>
                    <li><Link to="#" className="hover:text-gray-400">Twitter</Link></li>
                    <li><Link to="#" className="hover:text-gray-400">LinkedIn</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul>
                    <li><Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link></li>
                    <li><Link to="/cookies" className="hover:text-gray-400">Cookie Policy</Link></li>
                    <li><Link to="/copyright" className="hover:text-gray-400">Copyright</Link></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer

