import { useState, useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>{}[]';

export function useTextScramble(finalText, { speed = 35, delay = 0, trigger = true } = {}) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (!trigger) {
      setText('');
      return;
    }

    let frame = 0;
    const length = finalText.length;
    let interval;

    const timeout = setTimeout(() => {
      setText(
        Array.from({ length }, (_, i) =>
          finalText[i] === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]
        ).join('')
      );

      interval = setInterval(() => {
        frame++;
        let result = '';

        for (let i = 0; i < length; i++) {
          if (finalText[i] === ' ') {
            result += ' ';
          } else if (i < frame) {
            result += finalText[i];
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }

        setText(result);

        if (frame > length) {
          clearInterval(interval);
          setText(finalText);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [finalText, speed, delay, trigger]);

  return text;
}
