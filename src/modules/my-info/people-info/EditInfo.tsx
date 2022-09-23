import React, { useContext, useEffect } from 'react';
import useMyContext, { InfoContext } from './useMyContext';

export const EditInfo = () => {
  const { formState } = useContext(InfoContext);
  useEffect(() => {
    console.log('EditInfo ->formState->', formState);
  }, [formState]);
  return <div>{`${formState?.name} - ${formState?.phone}`}</div>;
};
