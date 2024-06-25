import { useState } from "react";
import "./searchbar.css";
import { products } from "../../utils/products";
// import useDebounce from "../../hooks/useDebounce";
const SearchBar = ({ setFilterList }) => {
  const [searchWord, setSearchWord] = useState(null);
  const [isListening, setIsListening] = useState(false);
  
  // const debounceSearchWord = useDebounce(searchWord, 300);

  const handleVoiceSearch = () => {
    // Implement voice search functionality using the Web Speech API
    const recognition = new window.webkitSpeechRecognition();

    recognition.onstart = () => {
      console.log("Listening...");
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const voiceQuery = event.results[0][0].transcript.toLowerCase();
      setSearchWord(voiceQuery);
      console.log("Speech Recognized:", voiceQuery);

    
    };

    recognition.onend = () => {
      console.log("Stopped listening.");
      setIsListening(false);
    };

    
    if (!isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }


  };

  const handelChange = (input) => {
    setSearchWord(input.target.value);
    setFilterList(
      products.filter((item) =>
        item.productName?.toLowerCase().includes(searchWord?.toLowerCase())
      )
    );
  };
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." value={searchWord} onChange={handelChange} />
      <ion-icon name="search-outline" className="search-icon"></ion-icon>
      <button
            className="voice-search-button ml-2"
            onClick={handleVoiceSearch}
            aria-label="Voice Search"
          >
            <ion-icon name={isListening ? 'mic-off' : 'mic'}></ion-icon>
          </button>
    </div>
  );
};

export default SearchBar;
