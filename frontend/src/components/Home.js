import React, { useState } from 'react';
import { Home, Ruler, BarChart, PieChart, LineChart, Send } from 'lucide-react';

function CoolCottage() {
    const [address, setAddress] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult(null);
        setError('');
        try {
            const response = await fetch('/api/calculate-adu-size', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ address }),
            });
            if (!response.ok) {
                throw new Error('Failed to calculate ADU size');
            }
            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while calculating the ADU size. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
            <header className="bg-white shadow">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-bold text-blue-800 flex items-center">
                            <Home className="mr-2" />
                            CoolCottage ADU Calculator
                        </div>
                        <nav>
                            <a href="#about" className="text-blue-800 hover:text-blue-600 px-3 py-2">About ADUs</a>
                            <a href="#calculator" className="text-blue-800 hover:text-blue-600 px-3 py-2">Calculate</a>
                            <a href="#analytics" className="text-blue-800 hover:text-blue-600 px-3 py-2">Analytics</a>
                        </nav>
                    </div>
                </div>
            </header>

            <main>
                <div className="container mx-auto px-6 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-blue-800 mb-6">Discover Your ADU Potential</h1>
                        <p className="text-xl text-gray-600 mb-8">Find out the maximum size Accessory Dwelling Unit (ADU) you can build on your property.</p>
                    </div>
                </div>

                <section id="about" className="bg-white py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">What is an ADU?</h2>
                        <div className="max-w-2xl mx-auto text-gray-600 text-left"> {/* Added text-left here */}
                            <p className="mb-4">An Accessory Dwelling Unit (ADU) is a secondary housing unit on a single-family residential lot. It can be:</p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>A converted portion of the existing house</li>
                                <li>An addition to the existing house</li>
                                <li>A new freestanding structure or a conversion of an existing structure</li>
                            </ul>
                            <p>ADUs are a great way to add additional living space for family members or generate rental income.</p>
                        </div>
                    </div>
                </section>

                <section id="calculator" className="py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Calculate Your ADU Size</h2>
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                            <div className="flex items-center border-b border-blue-500 py-2">
                                <Ruler className="text-blue-500 mr-2" />
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Enter your home address"
                                    required
                                />
                                <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                        {error && (
                            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg max-w-md mx-auto">
                                <p>{error}</p>
                            </div>
                        )}
                        {result && (
                            <div className="mt-8 p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto">
                                <h3 className="text-2xl font-bold text-blue-800 mb-4">Your ADU Potential</h3>
                                <p className="text-gray-600 mb-2">Maximum ADU Size: <span className="font-bold text-blue-600">{result.maxSize} sq ft</span></p>
                                <p className="text-gray-600">Zoning Type: <span className="font-bold">{result.zoningType}</span></p>
                            </div>
                        )}
                    </div>
                </section>

                <section id="analytics" className="bg-white py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Analytics Dashboard</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 p-6 rounded-lg shadow">
                                <h3 className="text-xl font-semibold text-blue-800 mb-4">ADU Size Distribution</h3>
                                <div className="h-64 flex items-center justify-center">
                                    <BarChart className="w-full h-full text-blue-500" />
                                </div>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-lg shadow">
                                <h3 className="text-xl font-semibold text-blue-800 mb-4">Zoning Type Breakdown</h3>
                                <div className="h-64 flex items-center justify-center">
                                    <PieChart className="w-full h-full text-blue-500" />
                                </div>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-lg shadow">
                                <h3 className="text-xl font-semibold text-blue-800 mb-4">ADU Approval Trends</h3>
                                <div className="h-64 flex items-center justify-center">
                                    <LineChart className="w-full h-full text-blue-500" />
                                </div>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-lg shadow">
                                <h3 className="text-xl font-semibold text-blue-800 mb-4">Top ADU Neighborhoods</h3>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Neighborhood A</li>
                                    <li>Neighborhood B</li>
                                    <li>Neighborhood C</li>
                                    <li>Neighborhood D</li>
                                    <li>Neighborhood E</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-blue-800 py-8">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-blue-200">&copy; 2024 CoolCottage ADU Calculator. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default CoolCottage;