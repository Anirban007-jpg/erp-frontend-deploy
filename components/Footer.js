import React from 'react'
import { API_NAME } from '../config'
import {FaFacebookF, FaTwitterSquare, FaGooglePlusSquare,FaLinkedin,FaChevronRight} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-200">
        <footer>
            <div className="p-10 bg-gray-800 text-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">{API_NAME}</h4><br/><br/>
                            <p className="text-gray-500">
                                4/20 Nandalal Bithi<br/>
                                City Centre<br/>
                                Durgapur-713216<br/>
                                West Bengal<br/>
                                India<br/>
                                <strong>Phone:</strong>+91 8250 359 959 <br/>
                                <strong>Email:</strong>info@example.com<br/>
                            </p>
                        </div>
                        <div className="mb-5">
                            <h4>Useful Links</h4><br/>
                            <ul className="text-gray-500">
                                <li className="pb-4 flex flex-row"><FaChevronRight size={15} style={{"marginTop":"6px", "marginRight":"4px"}} color="orange"/>Company</li>
                                <li className="pb-4 flex flex-row"><FaChevronRight size={15} style={{"marginTop":"6px", "marginRight":"4px"}} color="orange"/>Services</li>
                                <li className="pb-4 flex flex-row"><FaChevronRight size={15} style={{"marginTop":"6px", "marginRight":"4px"}} color="orange"/>Terms and Conditions</li>
                            </ul>
                        </div>
                        <div className="mb-5">
                            <h4>Our Services</h4><br/>
                            <ul className="text-gray-500">
                                <li className="pb-4 flex flex-row"><FaChevronRight size={15} style={{"marginTop":"6px", "marginRight":"4px"}} color="orange"/>About Company</li>
                                <li className="pb-4 flex flex-row"><FaChevronRight size={15} style={{"marginTop":"6px", "marginRight":"4px"}} color="orange"/>Services</li>
                                <li className="pb-4 flex flex-row"><FaChevronRight size={15} style={{"marginTop":"6px", "marginRight":"4px"}} color="orange"/>Terms and Conditions</li>
                            </ul>
                        </div>
                        <div className="mb-5">
                            <h4>Social Media Links</h4><br/>
                            <ul>
                                <li><FaFacebookF size={20}/></li><br/>
                                <li><FaTwitterSquare size={25}/></li><br/>
                                <li><FaGooglePlusSquare size={25}/></li><br/>
                                <li><FaLinkedin size={25}/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-900 text-gray-500 px-10">
                <div className="max-w-7xl flex flex-col sm:flex-row py-4">
                    <div className="text-center">
                        <div>
                            Copyright <strong><span>{API_NAME}</span></strong>, All Rights Reserved  
                        </div>
                        <div>
                            Deigned by <a href="#" className="text-yellow-500"><strong>Anirban Banerjee</strong></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer