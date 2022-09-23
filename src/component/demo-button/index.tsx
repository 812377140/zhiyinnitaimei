import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@arco-design/web-react';

let countPage = 0;
const DemoButton = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const childRef = useRef(null);
  const currentCount = useRef(count1);
  const prevCount1 = useRef(1);

  prevCount1.current = count1;

  // currentCount.current = count1;
  const buttonClick = () => {
    setCount(count + 1);
  };
  countPage += 1; // 会执行两次，避免side effect
  console.log('countPage值变化了->', countPage);

  useEffect(() => {
    console.log('值变化了', count);
  }, [count]);

  const add = () => {
    setTimeout(() => {
      setCount1(prevCount1.current + 1);
    }, 3000);
  };
  return (
    <>
      <p>{count1}</p>
      <Button type="primary" onClick={buttonClick} ref={childRef}>
        click me
      </Button>

      <Button onClick={() => setCount1(e => e + 1)} ref={childRef}>
        add count1
      </Button>
      <Button onClick={add} ref={childRef}>
        add count1 delay
      </Button>
      {count}
    </>
  );
};
export default DemoButton;
