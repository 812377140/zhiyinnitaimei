import { createContext, useRef, useState } from 'react';
import { useRefCallback } from '../../../component/hooks';
import { Form } from '@arco-design/web-react';
import produce from 'immer';
import set from 'lodash';
interface PeopleForm {
  name?: string;
  phone?: string;
}

export const InfoContext = createContext<{
  formState?: PeopleForm;
}>({ formState: undefined });

const useMyContext = () => {
  const formRef = Form.useForm()[0];
  const [formState, setFormState] = useState<PeopleForm>({
    name: 'hcx',
    phone: '13207103136',
  });
  const formStateRef = useRef(formState);
  formStateRef.current = formState;

  const submit = useRefCallback(() => {
    formRef.validate(infoErrors => {
      if (infoErrors) {
        return;
      }
    });
  }, []);

  // produce(draft => {
  //   Object.keys(changeValue).forEach(key => {
  //     set(draft, key, changeValue[key]);
  //   });
  // })

  const onFormChange = useRefCallback(changeValue => {
    setFormState(formRef.getFields() as PeopleForm);
  });
  return { formRef, formState, formStateRef, submit, onFormChange };
};

export default useMyContext;
