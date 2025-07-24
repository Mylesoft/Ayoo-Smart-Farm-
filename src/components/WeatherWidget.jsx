import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  CloudSnow, 
  Wind, 
  Droplets, 
  Thermometer, 
  Eye,
  Sunrise,
  Sunset,
  MapPin,
  RefreshCw
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const WeatherWidget = ({ location = "Siaya, Kenya" }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Mock weather data (in a real app, this would come from a weather API)
  const mockWeatherData = {
    current: {
      temperature: 24,
      condition: "partly-cloudy",
      description: "Partly Cloudy",
      humidity: 68,
      windSpeed: 12,
      windDirection: "NE",
      visibility: 10,
      uvIndex: 6,
      pressure: 1013,
      feelsLike: 26
    },
    forecast: [
      {
        day: "Today",
        high: 28,
        low: 18,
        condition: "partly-cloudy",
        precipitation: 20
      },
      {
        day: "Tomorrow",
        high: 30,
        low: 20,
        condition: "sunny",
        precipitation: 5
      },
      {
        day: "Wednesday",
        high: 26,
        low: 19,
        condition: "rainy",
        precipitation: 80
      },
      {
        day: "Thursday",
        high: 25,
        low: 17,
        condition: "cloudy",
        precipitation: 40
      }
    ],
    alerts: [
      {
        type: "info",
        message: "Optimal conditions for irrigation today"
      }
    ]
  };

  const getWeatherIcon = (condition, size = "h-8 w-8") => {
    switch (condition) {
      case 'sunny':
        return <Sun className={`${size} text-yellow-500`} />;
      case 'partly-cloudy':
        return <Cloud className={`${size} text-gray-500`} />;
      case 'cloudy':
        return <Cloud className={`${size} text-gray-600`} />;
      case 'rainy':
        return <CloudRain className={`${size} text-blue-500`} />;
      case 'snowy':
        return <CloudSnow className={`${size} text-blue-300`} />;
      default:
        return <Sun className={`${size} text-yellow-500`} />;
    }
  };

  const getConditionGradient = (condition) => {
    switch (condition) {
      case 'sunny':
        return 'from-yellow-400 to-orange-500';
      case 'partly-cloudy':
        return 'from-blue-400 to-gray-500';
      case 'cloudy':
        return 'from-gray-400 to-gray-600';
      case 'rainy':
        return 'from-blue-500 to-blue-700';
      case 'snowy':
        return 'from-blue-300 to-blue-500';
      default:
        return 'from-blue-400 to-blue-600';
    }
  };

  const fetchWeather = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setWeather(mockWeatherData);
      setLastUpdated(new Date());
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchWeather();
    // Auto-refresh every 10 minutes
    const interval = setInterval(fetchWeather, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (!weather) {
    return (
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md overflow-hidden">
      <CardHeader className={`bg-gradient-to-r ${getConditionGradient(weather.current.condition)} text-white`}>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </CardTitle>
            <p className="text-sm opacity-90">
              {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={fetchWeather}
            disabled={loading}
            className="text-white hover:bg-white/20"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {/* Current Weather */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {getWeatherIcon(weather.current.condition, "h-12 w-12")}
            </motion.div>
            <div>
              <div className="text-3xl font-bold">{weather.current.temperature}°C</div>
              <div className="text-sm text-gray-600">{weather.current.description}</div>
              <div className="text-xs text-gray-500">
                Feels like {weather.current.feelsLike}°C
              </div>
            </div>
          </div>
        </div>

        {/* Weather Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Droplets className="h-4 w-4 text-blue-500" />
            <div>
              <div className="text-xs text-gray-600">Humidity</div>
              <div className="font-semibold">{weather.current.humidity}%</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Wind className="h-4 w-4 text-gray-500" />
            <div>
              <div className="text-xs text-gray-600">Wind</div>
              <div className="font-semibold">{weather.current.windSpeed} km/h {weather.current.windDirection}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Eye className="h-4 w-4 text-purple-500" />
            <div>
              <div className="text-xs text-gray-600">Visibility</div>
              <div className="font-semibold">{weather.current.visibility} km</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Thermometer className="h-4 w-4 text-red-500" />
            <div>
              <div className="text-xs text-gray-600">Pressure</div>
              <div className="font-semibold">{weather.current.pressure} mb</div>
            </div>
          </div>
        </div>

        {/* UV Index */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">UV Index</span>
            <Badge variant={weather.current.uvIndex > 7 ? "destructive" : weather.current.uvIndex > 5 ? "default" : "secondary"}>
              {weather.current.uvIndex} - {weather.current.uvIndex > 7 ? "High" : weather.current.uvIndex > 5 ? "Moderate" : "Low"}
            </Badge>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(weather.current.uvIndex / 11) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Forecast */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3">4-Day Forecast</h4>
          <div className="space-y-2">
            {weather.forecast.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  {getWeatherIcon(day.condition, "h-5 w-5")}
                  <span className="text-sm font-medium">{day.day}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-xs text-blue-500">{day.precipitation}%</div>
                  <div className="text-sm">
                    <span className="font-semibold">{day.high}°</span>
                    <span className="text-gray-500 ml-1">{day.low}°</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        {weather.alerts && weather.alerts.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2">Farm Alerts</h4>
            {weather.alerts.map((alert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800"
              >
                {alert.message}
              </motion.div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;

