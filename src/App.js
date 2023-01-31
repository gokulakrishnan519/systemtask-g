
import React, { useState, useEffect } from 'react';

const TypingGame = () => {
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [paragraph, setParagraph] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor libero libero, vel scelerisque nisi bibendum eu. Sed sollicitudin, purus a congue rutrum, magna nisi commodo purus, ut vehicula erat ipsum et tellus. In hac habitasse platea dictumst. Aliquam bibendum, est vel aliquet scelerisque, nibh velit hendrerit velit, et fringilla magna diam vel quam. Nulla facilisi. Aliquam erat volutpat. Ut eget est risus. Sed varius lorem et risus viverra, a commodo sapien fringilla. Sed non vestibulum mi.');

  useEffect(() => {
    if (!startTime) {
      setStartTime(Date.now());
    }
  }, [startTime]);

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const endTime = Date.now();
    const typingSpeed = Math.round((input.length / 5) / ((endTime - startTime) / 1000 / 60));
    const accuracy = Math.round((input.split('').filter((char, index) => char === paragraph[index]).length / input.length) * 100);
    alert(`Your typing speed is ${typingSpeed} words per minute and your accuracy is ${accuracy}%`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p style={{ whiteSpace: 'pre-wrap' }}>
          {paragraph.split('').map((char, index) => (
            <span style={{ color: input[index] === char ? 'green' : 'red' }} key={index}>
              {char}
            </span>
          ))}
        </p>
        <textarea value={input} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TypingGame;
