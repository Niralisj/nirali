import { useEffect, useState } from "react";

export default function useTypewriter(segments, speed = 80, start = true) {
  const [currentSegment, setCurrentSegment] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!start || isComplete) return;

    if (currentSegment >= segments.length) {
      setIsComplete(true);
      return;
    }

    const currentText = segments[currentSegment].text;
    
    if (currentChar >= currentText.length) {
      setCurrentSegment(prev => prev + 1);
      setCurrentChar(0);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentChar(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentChar, currentSegment, segments, speed, start, isComplete]);

  return { currentSegment, currentChar, isComplete };
}