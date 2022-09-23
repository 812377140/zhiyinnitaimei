import React from 'react';
import useMyContext, { InfoContext } from './useMyContext';
import { EditInfo } from './EditInfo';
import { Button, Form, Input } from '@arco-design/web-react';
import styled from 'styled-components';
const FormWrapper = styled.div`
  
  width: 400px;
  input {
    // width: 100px;
  }
  button {
    tex
  }
`;
const FormFoot = styled.div`
  text-align: right;
`;

export const CreatePeople = () => {
  const { formRef, formState, submit, onFormChange } = useMyContext();

  return (
    <InfoContext.Provider value={{ formState }}>
      <FormWrapper>
        <Form size="default" form={formRef} onChange={onFormChange}>
          <Form.Item field="name" label="姓名">
            <Input />
          </Form.Item>

          <Form.Item field="phone" label="电话">
            <Input />
          </Form.Item>
        </Form>
        <FormFoot>
          <Button type="primary" onClick={submit}>
            Submit
          </Button>
        </FormFoot>
        <EditInfo></EditInfo>
      </FormWrapper>
    </InfoContext.Provider>
  );
};
