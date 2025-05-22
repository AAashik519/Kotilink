"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronDown, MapPin, Search, Users, Wifi, X, Plus, Minus, Check, Filter } from "lucide-react"

// Sample city data
const cities = [
  { value: "london", label: "London" },
  { value: "manchester", label: "Manchester" },
  { value: "birmingham", label: "Birmingham" },
  { value: "leeds", label: "Leeds" },
  { value: "liverpool", label: "Liverpool" },
  { value: "bristol", label: "Bristol" },
  { value: "newcastle", label: "Newcastle" },
  { value: "edinburgh", label: "Edinburgh" },
  { value: "glasgow", label: "Glasgow" },
  { value: "cardiff", label: "Cardiff" },
]

// Sample filter options
const amenityFilters = [
  { id: "wifi", label: "WiFi" },
  { id: "parking", label: "Parking" },
  { id: "elevator", label: "Elevator" },
  { id: "pets", label: "Pet Friendly" },
  { id: "gym", label: "Gym" },
  { id: "balcony", label: "Balcony" },
  { id: "dishwasher", label: "Dishwasher" },
  { id: "washer", label: "Washer/Dryer" },
]

const availabilityOptions = [
  { id: "available-now", label: "Available Now" },
  { id: "available-soon", label: "Available Soon (30 days)" },
  { id: "available-future", label: "Future Availability" },
  { id: "unavailable", label: "Show All (incl. Unavailable)" },
]

const priceRanges = [
  { id: "0-500", label: "£0 - £500" },
  { id: "500-1000", label: "£500 - £1,000" },
  { id: "1000-1500", label: "£1,000 - £1,500" },
  { id: "1500-2000", label: "£1,500 - £2,000" },
  { id: "2000-3000", label: "£2,000 - £3,000" },
  { id: "3000+", label: "£3,000+" },
]

const datePresets = [
  { id: "next-week", label: "Next Week", days: 7 },
  { id: "next-month", label: "Next Month", days: 30 },
  { id: "next-3-months", label: "Next 3 Months", days: 90 },
  { id: "next-6-months", label: "Next 6 Months", days: 180 },
  { id: "custom", label: "Custom Date", days: 0 },
]

const page = () => {

// State for search inputs
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false)
  const [citySearchTerm, setCitySearchTerm] = useState("")

  const [moveInDate, setMoveInDate] = useState<Date | null>(null)
  const [moveOutDate, setMoveOutDate] = useState<Date | null>(null)
  const [moveInCalendarOpen, setMoveInCalendarOpen] = useState(false)
  const [moveOutCalendarOpen, setMoveOutCalendarOpen] = useState(false)
  const [datePresetOpen, setDatePresetOpen] = useState(false)

  const [guests, setGuests] = useState(1)

  const [filtersOpen, setFiltersOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["parking"])
  const [selectedAvailability, setSelectedAvailability] = useState<string>("available-now")
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null)

  const [sortDropdownOpen, setSortDropdownOpen] = useState(false)
  const [sortOption, setSortOption] = useState("availability")

  // Refs for handling clicks outside dropdowns
  const cityDropdownRef = useRef<HTMLDivElement>(null)
  const moveInCalendarRef = useRef<HTMLDivElement>(null)
  const moveOutCalendarRef = useRef<HTMLDivElement>(null)
  const datePresetRef = useRef<HTMLDivElement>(null)
  const filtersRef = useRef<HTMLDivElement>(null)
  const sortDropdownRef = useRef<HTMLDivElement>(null)

  // Format date for display
  const formatDate = (date: Date | null) => {
    if (!date) return ""
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear()
    return `${day}.${month}.${year}`
  }

  // Filter cities based on search term
  const filteredCities = citySearchTerm
    ? cities.filter((city) => city.label.toLowerCase().includes(citySearchTerm.toLowerCase()))
    : cities

  // Get city label from value
  const getCityLabel = () => {
    if (!selectedCity) return "Select a city"
    const city = cities.find((city) => city.value === selectedCity)
    return city ? city.label : "Select a city"
  }

  // Get availability label
  const getAvailabilityLabel = () => {
    const option = availabilityOptions.find((opt) => opt.id === selectedAvailability)
    return option ? option.label : "Availability"
  }

  // Get price range label
  const getPriceRangeLabel = () => {
    if (!selectedPriceRange) return "Any price"
    const range = priceRanges.find((range) => range.id === selectedPriceRange)
    return range ? range.label : "Any price"
  }

  // Generate calendar days
  const generateCalendarDays = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1 // Adjust for Monday start

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }

    return days
  }

  // Get current month and year for calendars
  const today = new Date()
  const [moveInMonth, setMoveInMonth] = useState(today.getMonth())
  const [moveInYear, setMoveInYear] = useState(today.getFullYear())
  const [moveOutMonth, setMoveOutMonth] = useState(today.getMonth())
  const [moveOutYear, setMoveOutYear] = useState(today.getFullYear())

  // Generate days for both calendars
  const moveInDays = generateCalendarDays(moveInYear, moveInMonth)
  const moveOutDays = generateCalendarDays(moveOutYear, moveOutMonth)

  // Navigate to previous/next month
  const navigateMonth = (calendar: "moveIn" | "moveOut", direction: "prev" | "next") => {
    if (calendar === "moveIn") {
      if (direction === "prev") {
        if (moveInMonth === 0) {
          setMoveInMonth(11)
          setMoveInYear(moveInYear - 1)
        } else {
          setMoveInMonth(moveInMonth - 1)
        }
      } else {
        if (moveInMonth === 11) {
          setMoveInMonth(0)
          setMoveInYear(moveInYear + 1)
        } else {
          setMoveInMonth(moveInMonth + 1)
        }
      }
    } else {
      if (direction === "prev") {
        if (moveOutMonth === 0) {
          setMoveOutMonth(11)
          setMoveOutYear(moveOutYear - 1)
        } else {
          setMoveOutMonth(moveOutMonth - 1)
        }
      } else {
        if (moveOutMonth === 11) {
          setMoveOutMonth(0)
          setMoveOutYear(moveOutYear + 1)
        } else {
          setMoveOutMonth(moveOutMonth + 1)
        }
      }
    }
  }

  // Apply date preset
  const applyDatePreset = (presetId: string) => {
    const preset = datePresets.find((p) => p.id === presetId)
    if (!preset) return

    const startDate = new Date()
    setMoveInDate(startDate)

    if (preset.id === "custom") {
      // For custom, just set the move-in date and let user pick move-out
      setMoveOutDate(null)
    } else {
      // For presets, calculate the end date
      const endDate = new Date()
      endDate.setDate(endDate.getDate() + preset.days)
      setMoveOutDate(endDate)
    }

    setDatePresetOpen(false)
    setMoveInCalendarOpen(false)
    setMoveOutCalendarOpen(false)
  }

  // Check if a date is before another date (for disabling dates in move-out calendar)
  const isDateBefore = (date: Date, compareDate: Date) => {
    return date.getTime() < compareDate.getTime()
  }

  // Toggle a filter
  const toggleFilter = (filterId: string) => {
    if (selectedFilters.includes(filterId)) {
      setSelectedFilters(selectedFilters.filter((id) => id !== filterId))
    } else {
      setSelectedFilters([...selectedFilters, filterId])
    }
  }

  // Remove a filter
  const removeFilter = (filterId: string) => {
    setSelectedFilters(selectedFilters.filter((id) => id !== filterId))
  }

  // Month names for calendar headers
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  // Day names for calendar headers
  const dayNames = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

  // Handle clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target as Node)) {
        setCityDropdownOpen(false)
      }
      if (moveInCalendarRef.current && !moveInCalendarRef.current.contains(event.target as Node)) {
        setMoveInCalendarOpen(false)
      }
      if (moveOutCalendarRef.current && !moveOutCalendarRef.current.contains(event.target as Node)) {
        setMoveOutCalendarOpen(false)
      }
      if (datePresetRef.current && !datePresetRef.current.contains(event.target as Node)) {
        setDatePresetOpen(false)
      }
      if (filtersRef.current && !filtersRef.current.contains(event.target as Node)) {
        setFiltersOpen(false)
      }
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setSortDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div>
 <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="bg-white rounded-full border shadow-md flex flex-wrap md:flex-nowrap items-center overflow-hidden">
          {/* City Selection Dropdown */}
          <div className="w-full md:flex-1 border-r px-4 py-3 relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => {
                setCityDropdownOpen(!cityDropdownOpen)
                setMoveInCalendarOpen(false)
                setMoveOutCalendarOpen(false)
                setDatePresetOpen(false)
              }}
            >
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">{getCityLabel()}</span>
              <ChevronDown className="h-4 w-4 ml-auto text-gray-400" />
            </div>

            {cityDropdownOpen && (
              <div
                ref={cityDropdownRef}
                className="absolute left-0 top-full mt-1 w-64 bg-white border rounded-md shadow-lg z-50"
              >
                <div className="p-2 border-b">
                  <input
                    type="text"
                    placeholder="Search city..."
                    className="w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                    value={citySearchTerm}
                    onChange={(e) => setCitySearchTerm(e.target.value)}
                  />
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {filteredCities.length === 0 ? (
                    <div className="p-3 text-sm text-gray-500 text-center">No cities found</div>
                  ) : (
                    filteredCities.map((city) => (
                      <div
                        key={city.value}
                        className={`p-2 text-sm cursor-pointer hover:bg-gray-100 flex items-center ${
                          selectedCity === city.value ? "bg-gray-100" : ""
                        }`}
                        onClick={() => {
                          setSelectedCity(city.value)
                          setCityDropdownOpen(false)
                          setCitySearchTerm("")
                        }}
                      >
                        {selectedCity === city.value && <Check className="h-4 w-4 mr-2 text-teal-600" />}
                        <span className={selectedCity === city.value ? "ml-0" : "ml-6"}>{city.label}</span>
                      </div>
                    ))
                  )}
                </div>
                {selectedCity && (
                  <div className="p-2 border-t">
                    <button
                      className="w-full p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md flex items-center"
                      onClick={() => {
                        setSelectedCity(null)
                        setCityDropdownOpen(false)
                      }}
                    >
                      <X className="h-4 w-4 mr-2" />
                      Clear selection
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Date Selection */}
          <div className="w-full md:flex-1 border-r px-4 py-3 relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => {
                setDatePresetOpen(!datePresetOpen)
                setCityDropdownOpen(false)
                setMoveInCalendarOpen(false)
                setMoveOutCalendarOpen(false)
              }}
            >
              <Calendar className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">
                {moveInDate && moveOutDate
                  ? `${formatDate(moveInDate)} - ${formatDate(moveOutDate)}`
                  : moveInDate
                    ? `From ${formatDate(moveInDate)}`
                    : "Select dates"}
              </span>
              <ChevronDown className="h-4 w-4 ml-auto text-gray-400" />
            </div>

            {datePresetOpen && (
              <div
                ref={datePresetRef}
                className="absolute left-0 top-full mt-1 w-72 bg-white border rounded-md shadow-lg z-50"
              >
                <div className="p-3 border-b">
                  <h3 className="font-medium text-sm">Quick select</h3>
                </div>
                <div className="p-2">
                  {datePresets.map((preset) => (
                    <div
                      key={preset.id}
                      className="p-2 text-sm cursor-pointer hover:bg-gray-100 rounded-md"
                      onClick={() => applyDatePreset(preset.id)}
                    >
                      {preset.label}
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t flex justify-between">
                  <button
                    className="text-sm text-teal-600 hover:underline"
                    onClick={() => {
                      setMoveInCalendarOpen(true)
                      setDatePresetOpen(false)
                    }}
                  >
                    Set move-in date
                  </button>
                  <button
                    className="text-sm text-teal-600 hover:underline"
                    onClick={() => {
                      setMoveOutCalendarOpen(true)
                      setDatePresetOpen(false)
                    }}
                  >
                    Set move-out date
                  </button>
                </div>
                {(moveInDate || moveOutDate) && (
                  <div className="p-2 border-t">
                    <button
                      className="w-full p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md flex items-center"
                      onClick={() => {
                        setMoveInDate(null)
                        setMoveOutDate(null)
                        setDatePresetOpen(false)
                      }}
                    >
                      <X className="h-4 w-4 mr-2" />
                      Clear dates
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Move-in Calendar */}
            {moveInCalendarOpen && (
              <div
                ref={moveInCalendarRef}
                className="absolute left-0 top-full mt-1 bg-white border rounded-md shadow-lg z-50"
              >
                <div className="p-3 border-b flex justify-between items-center">
                  <button
                    onClick={() => navigateMonth("moveIn", "prev")}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <ChevronDown className="h-4 w-4 transform rotate-90" />
                  </button>
                  <span className="text-sm font-medium">
                    {monthNames[moveInMonth]} {moveInYear}
                  </span>
                  <button
                    onClick={() => navigateMonth("moveIn", "next")}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <ChevronDown className="h-4 w-4 transform -rotate-90" />
                  </button>
                </div>
                <div className="p-2">
                  <div className="grid grid-cols-7 gap-1 mb-1">
                    {dayNames.map((day) => (
                      <div key={day} className="text-center text-xs text-gray-500 py-1">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {moveInDays.map((day, index) => (
                      <div key={index} className="text-center">
                        {day ? (
                          <button
                            className={`w-8 h-8 rounded-full text-sm flex items-center justify-center ${
                              moveInDate &&
                              day.getDate() === moveInDate.getDate() &&
                              day.getMonth() === moveInDate.getMonth() &&
                              day.getFullYear() === moveInDate.getFullYear()
                                ? "bg-teal-700 text-white"
                                : "hover:bg-gray-100"
                            }`}
                            onClick={() => {
                              setMoveInDate(day)
                              setMoveInCalendarOpen(false)
                              // If move-out date is before new move-in date, reset it
                              if (moveOutDate && isDateBefore(moveOutDate, day)) {
                                setMoveOutDate(null)
                              }
                            }}
                          >
                            {day.getDate()}
                          </button>
                        ) : (
                          <div className="w-8 h-8"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-3 border-t flex justify-between">
                  <button className="text-sm text-gray-600" onClick={() => setMoveInCalendarOpen(false)}>
                    Cancel
                  </button>
                  <button
                    className="text-sm text-teal-600 font-medium"
                    onClick={() => {
                      setMoveInCalendarOpen(false)
                      setMoveOutCalendarOpen(true)
                    }}
                  >
                    Set move-out →
                  </button>
                </div>
              </div>
            )}

            {/* Move-out Calendar */}
            {moveOutCalendarOpen && (
              <div
                ref={moveOutCalendarRef}
                className="absolute left-0 top-full mt-1 bg-white border rounded-md shadow-lg z-50"
              >
                <div className="p-3 border-b flex justify-between items-center">
                  <button
                    onClick={() => navigateMonth("moveOut", "prev")}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <ChevronDown className="h-4 w-4 transform rotate-90" />
                  </button>
                  <span className="text-sm font-medium">
                    {monthNames[moveOutMonth]} {moveOutYear}
                  </span>
                  <button
                    onClick={() => navigateMonth("moveOut", "next")}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <ChevronDown className="h-4 w-4 transform -rotate-90" />
                  </button>
                </div>
                <div className="p-2">
                  <div className="grid grid-cols-7 gap-1 mb-1">
                    {dayNames.map((day) => (
                      <div key={day} className="text-center text-xs text-gray-500 py-1">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {moveOutDays.map((day, index) => {
                      // Disable dates before move-in date
                      const isDisabled = moveInDate && day ? isDateBefore(day, moveInDate) : false

                      return (
                        <div key={index} className="text-center">
                          {day ? (
                            <button
                              className={`w-8 h-8 rounded-full text-sm flex items-center justify-center ${
                                isDisabled
                                  ? "text-gray-300 cursor-not-allowed"
                                  : moveOutDate &&
                                      day.getDate() === moveOutDate.getDate() &&
                                      day.getMonth() === moveOutDate.getMonth() &&
                                      day.getFullYear() === moveOutDate.getFullYear()
                                    ? "bg-teal-700 text-white"
                                    : "hover:bg-gray-100"
                              }`}
                              onClick={() => {
                                if (!isDisabled) {
                                  setMoveOutDate(day)
                                  setMoveOutCalendarOpen(false)
                                }
                              }}
                              disabled={isDisabled}
                            >
                              {day.getDate()}
                            </button>
                          ) : (
                            <div className="w-8 h-8"></div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="p-3 border-t flex justify-between">
                  <button className="text-sm text-gray-600" onClick={() => setMoveOutCalendarOpen(false)}>
                    Cancel
                  </button>
                  <button className="text-sm text-teal-600 font-medium" onClick={() => setMoveOutCalendarOpen(false)}>
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Guests Counter */}
          <div className="w-full md:flex-1 border-r px-4 py-3 flex items-center">
            <Users className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600">Guests</span>
            <span className="mx-2">•</span>
            <span className="text-sm">{guests}</span>
            <div className="ml-auto flex items-center space-x-2">
              <button
                className="text-gray-400 hover:text-gray-600 p-1"
                onClick={() => setGuests(Math.max(1, guests - 1))}
                aria-label="Decrease guests"
              >
                <Minus className="h-4 w-4" />
              </button>
              <button
                className="text-gray-400 hover:text-gray-600 p-1"
                onClick={() => setGuests(guests + 1)}
                aria-label="Increase guests"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Search Button */}
          <button className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 flex items-center justify-center">
            <Search className="h-5 w-5 mr-2" />
            <span>Search</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-between items-center mb-6">
        <div className="flex flex-wrap items-center gap-3 mb-4 md:mb-0">
          {/* More Filters Button */}
          <div className="relative">
            <button
              className="bg-teal-700 text-white px-4 py-2 rounded-full flex items-center"
              onClick={() => {
                setFiltersOpen(!filtersOpen)
                setSortDropdownOpen(false)
              }}
            >
              <Filter className="h-4 w-4 mr-2" />
              More filters
              <ChevronDown className="h-4 w-4 ml-2" />
            </button>

            {/* Filters Dropdown */}
            {filtersOpen && (
              <div
                ref={filtersRef}
                className="absolute left-0 top-full mt-2 w-80 bg-white border rounded-lg shadow-lg z-40"
              >
                <div className="p-4 border-b">
                  <h3 className="font-medium">Filters</h3>
                </div>

                {/* Price Range */}
                <div className="p-4 border-b">
                  <h4 className="font-medium text-sm mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <div key={range.id} className="flex items-center">
                        <input
                          type="radio"
                          id={`price-${range.id}`}
                          name="price-range"
                          checked={selectedPriceRange === range.id}
                          onChange={() => setSelectedPriceRange(range.id)}
                          className="mr-2"
                        />
                        <label htmlFor={`price-${range.id}`} className="text-sm">
                          {range.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="p-4 border-b">
                  <h4 className="font-medium text-sm mb-3">Availability</h4>
                  <div className="space-y-2">
                    {availabilityOptions.map((option) => (
                      <div key={option.id} className="flex items-center">
                        <input
                          type="radio"
                          id={`availability-${option.id}`}
                          name="availability"
                          checked={selectedAvailability === option.id}
                          onChange={() => setSelectedAvailability(option.id)}
                          className="mr-2"
                        />
                        <label htmlFor={`availability-${option.id}`} className="text-sm">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="p-4 border-b">
                  <h4 className="font-medium text-sm mb-3">Amenities</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {amenityFilters.map((filter) => (
                      <div key={filter.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`filter-${filter.id}`}
                          checked={selectedFilters.includes(filter.id)}
                          onChange={() => toggleFilter(filter.id)}
                          className="mr-2"
                        />
                        <label htmlFor={`filter-${filter.id}`} className="text-sm">
                          {filter.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply Filters */}
                <div className="p-4 flex justify-between">
                  <button
                    className="text-sm text-gray-600"
                    onClick={() => {
                      setSelectedFilters([])
                      setSelectedPriceRange(null)
                      setSelectedAvailability("available-now")
                    }}
                  >
                    Clear all
                  </button>
                  <button
                    className="bg-teal-700 text-white px-4 py-2 rounded-md text-sm"
                    onClick={() => setFiltersOpen(false)}
                  >
                    Apply filters
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Active Filters */}
          {selectedFilters.map((filterId) => {
            const filter = amenityFilters.find((f) => f.id === filterId)
            if (!filter) return null

            return (
              <div key={filterId} className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
                <span className="mr-2">{filter.label}</span>
                <button onClick={() => removeFilter(filterId)} className="text-gray-500 hover:text-gray-700">
                  <X className="h-4 w-4" />
                </button>
              </div>
            )
          })}

          {/* Price Range Filter Tag */}
          {selectedPriceRange && (
            <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
              <span className="mr-2">{getPriceRangeLabel()}</span>
              <button onClick={() => setSelectedPriceRange(null)} className="text-gray-500 hover:text-gray-700">
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* Availability Filter Tag */}
          <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
            <span className="mr-2">{getAvailabilityLabel()}</span>
            <button
              onClick={() => setSelectedAvailability("available-now")}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">Sort by:</span>
            <button
              className="bg-white border rounded-md px-4 py-2 flex items-center"
              onClick={() => {
                setSortDropdownOpen(!sortDropdownOpen)
                setFiltersOpen(false)
              }}
            >
              {sortOption === "availability"
                ? "Availability"
                : sortOption === "price-low"
                  ? "Price: Low to High"
                  : sortOption === "price-high"
                    ? "Price: High to Low"
                    : "Availability"}
              <ChevronDown className="h-4 w-4 ml-2" />
            </button>
          </div>

          {sortDropdownOpen && (
            <div
              ref={sortDropdownRef}
              className="absolute right-0 top-full mt-1 w-48 bg-white border rounded-md shadow-lg z-40"
            >
              <div
                className="p-2 text-sm cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSortOption("availability")
                  setSortDropdownOpen(false)
                }}
              >
                Availability
              </div>
              <div
                className="p-2 text-sm cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSortOption("price-low")
                  setSortDropdownOpen(false)
                }}
              >
                Price: Low to High
              </div>
              <div
                className="p-2 text-sm cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setSortOption("price-high")
                  setSortDropdownOpen(false)
                }}
              >
                Price: High to Low
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-700">52 results for "1 Bedroom property in West London"</p>
      </div>

      {/* Property Listings */}
      <div className="space-y-4">
        {/* Property 1 */}
        <Link href="/properties/1" className="block">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 h-48 md:h-auto relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Apartment bathroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6 flex-1">
                <h3 className="font-bold text-lg mb-2">Rhoncus suspendisse posuibus mauris, sit non</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    1 bedroom
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    1 bath
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Wifi className="h-4 w-4 mr-1" />
                    WiFi
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">City view</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">3rd floor</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Elevator</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Parking</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="bg-teal-700 text-white text-xs px-3 py-1 rounded-full">Available 28 Nov 2023</div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">from</div>
                    <div className="font-bold">£390 /month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Property 2 */}
        <Link href="/properties/2" className="block">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 h-48 md:h-auto relative">
                <Image src="/placeholder.svg?height=200&width=300" alt="Modern kitchen" fill className="object-cover" />
              </div>
              <div className="p-4 md:p-6 flex-1">
                <h3 className="font-bold text-lg mb-2">Rhoncus suspendisse posuibus mauris, sit non</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    2 bedrooms
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    2 bath
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Wifi className="h-4 w-4 mr-1" />
                    WiFi
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">City view</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">3rd floor</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Elevator</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Parking</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="bg-teal-700 text-white text-xs px-3 py-1 rounded-full">Available 28 Nov 2023</div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">from</div>
                    <div className="font-bold">£390 /month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Property 3 */}
        <Link href="/properties/3" className="block">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 h-48 md:h-auto relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Modern living room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6 flex-1">
                <h3 className="font-bold text-lg mb-2">Rhoncus suspendisse posuibus mauris, sit non</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    1 bedroom
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    1 bath
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Wifi className="h-4 w-4 mr-1" />
                    WiFi
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">City view</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">3rd floor</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Elevator</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Parking</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="bg-teal-700 text-white text-xs px-3 py-1 rounded-full">Available 28 Nov 2023</div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">from</div>
                    <div className="font-bold">£490 /month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div> 
    </div>
  )
}

export default page
