import React, { useEffect, useState, useRef } from 'react';
import { Wrapper } from './styled';
import { Button, Input } from '@arco-design/web-react';
import { useSearchParams } from 'react-router-dom';
import { CreatePeople } from './people-info';

let timer: NodeJS.Timeout | null;
const MyInfo = () => {
  const [button, setButton] = useState('点击发送短息');
  const [buttonDisable, setButtonDisable] = useState(false);
  const [count, setCount] = useState(60);
  const countRef = useRef(count);
  const [searchParams, setSearchParams] = useSearchParams();
  countRef.current = count;
  useEffect(() => {
    if (timer) {
      setButton(`${count}s后重试`);
      if (countRef.current <= 0) {
        clearInterval(timer);
        timer = null;
        setButton('点击发送短息');
        setButtonDisable(false);
      }
    }
  }, [count]);
  const onButtonClick = () => {
    setButtonDisable(true);
    setCount(60);
    timer && clearInterval(timer);
    timer = setInterval(() => {
      setButton(`${count}s后重试`);
      setCount(count => --count);
    }, 1000);
    console.log(searchParams.getAll('hcx'));
  };

  return (
    <Wrapper>
      <Input className="my-input"></Input>
      <Button disabled={buttonDisable} onClick={onButtonClick}>
        {button}
      </Button>
      <h1>hello world</h1>
      <CreatePeople />
    </Wrapper>
  );
};

export default MyInfo;
