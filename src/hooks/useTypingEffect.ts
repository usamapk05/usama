import { useState, useEffect } from 'react';

export const useTypingEffect = (
  texts: string[],
  typingSpeed: number = 100,
  deletingSpeed: number = 50,
  pauseDuration: number = 2000
) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (isWaiting) {
      const waitTimeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(waitTimeout);
    }

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        const deleteTimeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(deleteTimeout);
      }
    } else {
      if (displayText === currentText) {
        setIsWaiting(true);
      } else {
        const typeTimeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(typeTimeout);
      }
    }
  }, [displayText, currentIndex, isDeleting, isWaiting, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
};
