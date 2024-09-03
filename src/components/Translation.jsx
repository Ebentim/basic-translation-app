import { useState } from "react";
import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit";
const from = [
  { value: "auto", option: "Automatic" },
  { value: "af", option: "Afrikaans" },
  { value: "sq", option: "Albanian" },
  { value: "am", option: "Amharic" },
  { value: "ar", option: "Arabic" },
  { value: "hy", option: "Armenian" },
  { value: "az", option: "Azerbaijani" },
  { value: "eu", option: "Basque" },
  { value: "be", option: "Belarusian" },
  { value: "bn", option: "Bengali" },
  { value: "bs", option: "Bosnian" },
  { value: "bg", option: "Bulgarian" },
  { value: "ca", option: "Catalan" },
  { value: "ceb", option: "Cebuano" },
  { value: "ny", option: "Chichewa" },
  { value: "zh-cn", option: "Chinese Simplified" },
  { value: "zh-tw", option: "Chinese Traditional" },
  { value: "co", option: "Corsican" },
  { value: "hr", option: "Croatian" },
  { value: "cs", option: "Czech" },
  { value: "da", option: "Danish" },
  { value: "nl", option: "Dutch" },
  { value: "en", option: "English" },
  { value: "eo", option: "Esperanto" },
  { value: "et", option: "Estonian" },
  { value: "tl", option: "Filipino" },
  { value: "fi", option: "Finnish" },
  { value: "fr", option: "French" },
  { value: "fy", option: "Frisian" },
  { value: "gl", option: "Galician" },
  { value: "ka", option: "Georgian" },
  { value: "de", option: "German" },
  { value: "el", option: "Greek" },
  { value: "gu", option: "Gujarati" },
  { value: "ht", option: "Haitian Creole" },
  { value: "ha", option: "Hausa" },
  { value: "haw", option: "Hawaiian" },
  { value: "iw", option: "Hebrew" },
  { value: "hi", option: "Hindi" },
  { value: "hmn", option: "Hmong" },
  { value: "hu", option: "Hungarian" },
  { value: "is", option: "Icelandic" },
  { value: "ig", option: "Igbo" },
  { value: "id", option: "Indonesian" },
  { value: "ga", option: "Irish" },
  { value: "it", option: "Italian" },
  { value: "ja", option: "Japanese" },
  { value: "jw", option: "Javanese" },
  { value: "kn", option: "Kannada" },
  { value: "kk", option: "Kazakh" },
  { value: "km", option: "Khmer" },
  { value: "ko", option: "Korean" },
  { value: "ku", option: "Kurdish (Kurmanji)" },
  { value: "ky", option: "Kyrgyz" },
  { value: "lo", option: "Lao" },
  { value: "la", option: "Latin" },
  { value: "lv", option: "Latvian" },
  { value: "lt", option: "Lithuanian" },
  { value: "lb", option: "Luxembourgish" },
  { value: "mk", option: "Macedonian" },
  { value: "mg", option: "Malagasy" },
  { value: "ms", option: "Malay" },
  { value: "ml", option: "Malayalam" },
  { value: "mt", option: "Maltese" },
  { value: "mi", option: "Maori" },
  { value: "mr", option: "Marathi" },
  { value: "mn", option: "Mongolian" },
  { value: "my", option: "Myanmar (Burmese)" },
  { value: "ne", option: "Nepali" },
  { value: "no", option: "Norwegian" },
  { value: "ps", option: "Pashto" },
  { value: "fa", option: "Persian" },
  { value: "pl", option: "Polish" },
  { value: "pt", option: "Portuguese" },
  { value: "ma", option: "Punjabi" },
  { value: "ro", option: "Romanian" },
  { value: "ru", option: "Russian" },
  { value: "sm", option: "Samoan" },
  { value: "gd", option: "Scots Gaelic" },
  { value: "sr", option: "Serbian" },
  { value: "st", option: "Sesotho" },
  { value: "sn", option: "Shona" },
  { value: "sd", option: "Sindhi" },
  { value: "si", option: "Sinhala" },
  { value: "sk", option: "Slovak" },
  { value: "sl", option: "Slovenian" },
  { value: "so", option: "Somali" },
  { value: "es", option: "Spanish" },
  { value: "su", option: "Sundanese" },
  { value: "sw", option: "Swahili" },
  { value: "sv", option: "Swedish" },
  { value: "tg", option: "Tajik" },
  { value: "ta", option: "Tamil" },
  { value: "te", option: "Telugu" },
  { value: "th", option: "Thai" },
  { value: "tr", option: "Turkish" },
  { value: "uk", option: "Ukrainian" },
  { value: "ur", option: "Urdu" },
  { value: "uz", option: "Uzbek" },
  { value: "vi", option: "Vietvalue:se" },
  { value: "cy", option: "Welsh" },
  { value: "xh", option: "Xhosa" },
  { value: "yi", option: "Yiddish" },
  { value: "yo", option: "Yoruba" },
  { value: "zu", option: "Zulu" },
];
const to = [
  { value: "af", option: "Afrikaans" },
  { value: "sq", option: "Albanian" },
  { value: "am", option: "Amharic" },
  { value: "ar", option: "Arabic" },
  { value: "hy", option: "Armenian" },
  { value: "az", option: "Azerbaijani" },
  { value: "eu", option: "Basque" },
  { value: "be", option: "Belarusian" },
  { value: "bn", option: "Bengali" },
  { value: "bs", option: "Bosnian" },
  { value: "bg", option: "Bulgarian" },
  { value: "ca", option: "Catalan" },
  { value: "ceb", option: "Cebuano" },
  { value: "ny", option: "Chichewa" },
  { value: "zh-cn", option: "Chinese Simplified" },
  { value: "zh-tw", option: "Chinese Traditional" },
  { value: "co", option: "Corsican" },
  { value: "hr", option: "Croatian" },
  { value: "cs", option: "Czech" },
  { value: "da", option: "Danish" },
  { value: "nl", option: "Dutch" },
  { value: "en", option: "English" },
  { value: "eo", option: "Esperanto" },
  { value: "et", option: "Estonian" },
  { value: "tl", option: "Filipino" },
  { value: "fi", option: "Finnish" },
  { value: "fr", option: "French" },
  { value: "fy", option: "Frisian" },
  { value: "gl", option: "Galician" },
  { value: "ka", option: "Georgian" },
  { value: "de", option: "German" },
  { value: "el", option: "Greek" },
  { value: "gu", option: "Gujarati" },
  { value: "ht", option: "Haitian Creole" },
  { value: "ha", option: "Hausa" },
  { value: "haw", option: "Hawaiian" },
  { value: "iw", option: "Hebrew" },
  { value: "hi", option: "Hindi" },
  { value: "hmn", option: "Hmong" },
  { value: "hu", option: "Hungarian" },
  { value: "is", option: "Icelandic" },
  { value: "ig", option: "Igbo" },
  { value: "id", option: "Indonesian" },
  { value: "ga", option: "Irish" },
  { value: "it", option: "Italian" },
  { value: "ja", option: "Japanese" },
  { value: "jw", option: "Javanese" },
  { value: "kn", option: "Kannada" },
  { value: "kk", option: "Kazakh" },
  { value: "km", option: "Khmer" },
  { value: "ko", option: "Korean" },
  { value: "ku", option: "Kurdish (Kurmanji)" },
  { value: "ky", option: "Kyrgyz" },
  { value: "lo", option: "Lao" },
  { value: "la", option: "Latin" },
  { value: "lv", option: "Latvian" },
  { value: "lt", option: "Lithuanian" },
  { value: "lb", option: "Luxembourgish" },
  { value: "mk", option: "Macedonian" },
  { value: "mg", option: "Malagasy" },
  { value: "ms", option: "Malay" },
  { value: "ml", option: "Malayalam" },
  { value: "mt", option: "Maltese" },
  { value: "mi", option: "Maori" },
  { value: "mr", option: "Marathi" },
  { value: "mn", option: "Mongolian" },
  { value: "my", option: "Myanmar (Burmese)" },
  { value: "ne", option: "Nepali" },
  { value: "no", option: "Norwegian" },
  { value: "ps", option: "Pashto" },
  { value: "fa", option: "Persian" },
  { value: "pl", option: "Polish" },
  { value: "pt", option: "Portuguese" },
  { value: "ma", option: "Punjabi" },
  { value: "ro", option: "Romanian" },
  { value: "ru", option: "Russian" },
  { value: "sm", option: "Samoan" },
  { value: "gd", option: "Scots Gaelic" },
  { value: "sr", option: "Serbian" },
  { value: "st", option: "Sesotho" },
  { value: "sn", option: "Shona" },
  { value: "sd", option: "Sindhi" },
  { value: "si", option: "Sinhala" },
  { value: "sk", option: "Slovak" },
  { value: "sl", option: "Slovenian" },
  { value: "so", option: "Somali" },
  { value: "es", option: "Spanish" },
  { value: "su", option: "Sundanese" },
  { value: "sw", option: "Swahili" },
  { value: "sv", option: "Swedish" },
  { value: "tg", option: "Tajik" },
  { value: "ta", option: "Tamil" },
  { value: "te", option: "Telugu" },
  { value: "th", option: "Thai" },
  { value: "tr", option: "Turkish" },
  { value: "uk", option: "Ukrainian" },
  { value: "ur", option: "Urdu" },
  { value: "uz", option: "Uzbek" },
  { value: "vi", option: "Vietvalue:se" },
  { value: "cy", option: "Welsh" },
  { value: "xh", option: "Xhosa" },
  { value: "yi", option: "Yiddish" },
  { value: "yo", option: "Yoruba" },
  { value: "zu", option: "Zulu" },
];
const Translation = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("auto");
  const [targetLang, setTargetLang] = useState("en");
  const [error, setError] = useState(null);

  const { speak } = useSpeechSynthesis();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => setInputText(result),
  });

  const translateText = async () => {
    try {
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(
          inputText
        )}`
      );
      const data = await response.json();
      setTranslatedText(data[0][0][0]);
      setError(null);
    } catch (error) {
      setError("Error translating text");
      console.error(error);
    }
  };

  const speakText = (text, lang) => {
    speak({ text, lang });
  };

  return (
    <div className="w-11/12 md:max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Translation App</h1>
      <textarea
        className="w-full h-32 p-3 border border-gray-300 rounded mb-4"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
        <div className="flex-1 mb-4 sm:mb-0">
          <label className="block mb-2 font-bold">Source Language:</label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
          >
            {from.map((item) => (
              <option key={item} value={item.value}>
                {item.option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block mb-2 font-bold">Target Language:</label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
          >
            {to.map((item) => (
              <option key={item} value={item.value}>
                {item.option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
        <button
          className="md:w-2/4 sm:w-11/12 sm:mx-auto mb-2 sm:mb-0 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={translateText}
        >
          Translate
        </button>
        <button
          className="md:w-2/4 sm:w-11/12 sm:mx-auto bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          onClick={() => {
            if (listening) {
              stop();
            } else {
              listen({ language: sourceLang });
            }
          }}
        >
          {listening ? "Stop Listening" : "Start Listening"}
        </button>
      </div>
      <h2 className="text-xl font-bold mb-2">Translated Text:</h2>
      <p className="text-lg mb-4">{translatedText}</p>
      {translatedText && (
        <button
          className="w-11/12 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
          onClick={() => speakText(translatedText, targetLang)}
        >
          Listen
        </button>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default Translation;
