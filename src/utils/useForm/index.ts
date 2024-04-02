import {useState} from 'react';
interface useFormProps {
  initialValue: any;
}

export const useForm: React.FC<useFormProps> = initialValue => {
  const [values, setValues] = useState(initialValue);

  return [
    values,
    (formType: string, formValue: any) => {
      if (formType === 'reset') {
        return setValues(initialValue);
      }
      return setValues({...values, [formType]: formValue});
    },
  ];
};
