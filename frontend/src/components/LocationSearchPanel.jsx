 import React from 'react';

const LocationSearchPanel = ({
  suggestions = [],
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField
}) => {
  const fallbackSuggestions = [
    "23A, 1 Krishnapuri, road no- 5b, chutia, ranchi",
    "24B, 2 Krishnapuri, road no- 5b, chutia, ranchi",
    "25C, 3 Krishnapuri, road no- 5b, chutia, ranchi",
    "26D, 4 Krishnapuri, road no- 5b, chutia, ranchi",
  ];

  const suggestionsToRender = suggestions.length > 0 ? suggestions : fallbackSuggestions;

  const handleSuggestionClick = (suggestion) => {
    if (activeField === 'pickup') {
      setPickup(suggestion);
    } else if (activeField === 'destination') {
      setDestination(suggestion);
    }
    setVehiclePanel(true);
    setPanelOpen(false);
  };

  return (
    <div>
      {suggestionsToRender.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(elem)}
          className='flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-2 justify-start'
        >
          <h2 className='bg-[#eee] h-6 flex items-center justify-center w-10 rounded-full'>
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className='font-medium'>{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
