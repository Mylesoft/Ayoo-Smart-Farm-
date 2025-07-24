import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Thermometer, Droplets, Wind, Sun, Leaf, Users, Tractor } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const InteractiveFarmMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const farmLocations = [
    {
      id: 1,
      name: "Main Farm - Siaya",
      coordinates: { x: 45, y: 35 },
      type: "headquarters",
      area: "120 acres",
      crops: ["Maize", "Beans", "Vegetables"],
      sensors: 24,
      status: "active",
      temperature: "24°C",
      humidity: "68%",
      soilMoisture: "72%",
      lastUpdate: "2 mins ago",
      farmers: 8,
      equipment: ["IoT Sensors", "Drone", "Smart Irrigation"]
    },
    {
      id: 2,
      name: "Demo Plot - Bondo",
      coordinates: { x: 25, y: 50 },
      type: "demo",
      area: "15 acres",
      crops: ["Tomatoes", "Kale", "Spinach"],
      sensors: 8,
      status: "active",
      temperature: "26°C",
      humidity: "65%",
      soilMoisture: "78%",
      lastUpdate: "5 mins ago",
      farmers: 3,
      equipment: ["Weather Station", "Soil Sensors"]
    },
    {
      id: 3,
      name: "Training Center - Ugunja",
      coordinates: { x: 65, y: 45 },
      type: "training",
      area: "8 acres",
      crops: ["Mixed Vegetables", "Herbs"],
      sensors: 12,
      status: "active",
      temperature: "25°C",
      humidity: "70%",
      soilMoisture: "65%",
      lastUpdate: "1 min ago",
      farmers: 15,
      equipment: ["Learning Lab", "Demo Equipment"]
    },
    {
      id: 4,
      name: "Research Plot - Yala",
      coordinates: { x: 75, y: 25 },
      type: "research",
      area: "25 acres",
      crops: ["Experimental Varieties", "Test Crops"],
      sensors: 16,
      status: "monitoring",
      temperature: "23°C",
      humidity: "72%",
      soilMoisture: "68%",
      lastUpdate: "3 mins ago",
      farmers: 5,
      equipment: ["Advanced Sensors", "Research Tools"]
    }
  ];

  const getLocationIcon = (type) => {
    switch (type) {
      case 'headquarters':
        return <Tractor className="h-4 w-4" />;
      case 'demo':
        return <Leaf className="h-4 w-4" />;
      case 'training':
        return <Users className="h-4 w-4" />;
      case 'research':
        return <Sun className="h-4 w-4" />;
      default:
        return <MapPin className="h-4 w-4" />;
    }
  };

  const getLocationColor = (type) => {
    switch (type) {
      case 'headquarters':
        return 'bg-blue-500 border-blue-600';
      case 'demo':
        return 'bg-green-500 border-green-600';
      case 'training':
        return 'bg-purple-500 border-purple-600';
      case 'research':
        return 'bg-orange-500 border-orange-600';
      default:
        return 'bg-gray-500 border-gray-600';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'monitoring':
        return 'bg-yellow-100 text-yellow-800';
      case 'offline':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Ayoo Smart Farm Locations - Siaya County</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-96 bg-gradient-to-br from-green-100 via-green-50 to-blue-50 rounded-lg border-2 border-green-200 overflow-hidden">
                {/* Background pattern to simulate map */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" className="text-green-300">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* County label */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  Siaya County, Kenya
                </div>

                {/* Farm locations */}
                {farmLocations.map((location) => (
                  <motion.div
                    key={location.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
                    style={{
                      left: `${location.coordinates.x}%`,
                      top: `${location.coordinates.y}%`
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={() => setHoveredLocation(location)}
                    onMouseLeave={() => setHoveredLocation(null)}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <div className={`w-8 h-8 rounded-full border-2 ${getLocationColor(location.type)} text-white flex items-center justify-center shadow-lg`}>
                      {getLocationIcon(location.type)}
                    </div>
                    
                    {/* Pulse animation for active locations */}
                    {location.status === 'active' && (
                      <motion.div
                        className={`absolute inset-0 rounded-full ${getLocationColor(location.type)} opacity-30`}
                        animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}

                    {/* Hover tooltip */}
                    <AnimatePresence>
                      {hoveredLocation?.id === location.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 min-w-48 z-10"
                        >
                          <div className="text-sm font-semibold text-gray-900">{location.name}</div>
                          <div className="text-xs text-gray-600">{location.area} • {location.sensors} sensors</div>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className={getStatusColor(location.status)}>
                              {location.status}
                            </Badge>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                {/* Legend */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs">
                  <div className="font-semibold mb-2">Location Types</div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span>Headquarters</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>Demo Plot</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span>Training Center</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      <span>Research Plot</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Details Panel */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Location Details</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedLocation ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">{selectedLocation.name}</h3>
                    <p className="text-sm text-gray-600">{selectedLocation.area}</p>
                    <Badge className={getStatusColor(selectedLocation.status)}>
                      {selectedLocation.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Thermometer className="h-4 w-4 text-red-500" />
                      <div>
                        <div className="text-xs text-gray-600">Temperature</div>
                        <div className="font-semibold">{selectedLocation.temperature}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <div>
                        <div className="text-xs text-gray-600">Humidity</div>
                        <div className="font-semibold">{selectedLocation.humidity}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Leaf className="h-4 w-4 text-green-500" />
                      <div>
                        <div className="text-xs text-gray-600">Soil Moisture</div>
                        <div className="font-semibold">{selectedLocation.soilMoisture}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-purple-500" />
                      <div>
                        <div className="text-xs text-gray-600">Farmers</div>
                        <div className="font-semibold">{selectedLocation.farmers}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium mb-2">Crops</div>
                    <div className="flex flex-wrap gap-1">
                      {selectedLocation.crops.map((crop, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {crop}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium mb-2">Equipment</div>
                    <div className="flex flex-wrap gap-1">
                      {selectedLocation.equipment.map((item, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-gray-500">
                    Last updated: {selectedLocation.lastUpdate}
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Click on a location marker to view details</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Network Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Locations</span>
                  <span className="font-semibold">{farmLocations.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Active Sensors</span>
                  <span className="font-semibold">{farmLocations.reduce((sum, loc) => sum + loc.sensors, 0)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Area</span>
                  <span className="font-semibold">168 acres</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Active Farmers</span>
                  <span className="font-semibold">{farmLocations.reduce((sum, loc) => sum + loc.farmers, 0)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFarmMap;

