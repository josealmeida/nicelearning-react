import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  // limit requests to api using a timer
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        process.env.REACT_APP_GOOGLE_TRANSLATE_API_URL,
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]);

  return <div>{translated}</div>;
};

export default Convert;
