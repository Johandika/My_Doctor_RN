// import {useState} from 'react';
// interface useFormProps {
//   initialValue: any;
// }

// export const useForm: React.FC<useFormProps> = initialValue => {
//   const [values, setValues] = useState(initialValue);

//   return [
//     values,
//     (formType: string, formValue: any) => {
//       if (formType === 'reset') {
//         return setValues(initialValue);
//       }
//       return setValues({...values, [formType]: formValue});
//     },
//   ];
// };

import {useState} from 'react';

// Definisikan generic type untuk nilai awal formulir
type FormValues<T> = {
  [key: string]: T;
};

// Definisikan generic type untuk fungsi pengatur formulir
type FormSetter<T> = (formType: string, formValue?: T) => void;

// Definisikan generic type untuk nilai kembalian hook
type UseFormReturn<T> = [FormValues<T>, FormSetter<T>];

// Deklarasikan hook dengan menggunakan generic type
export const useForm = <T>(initialValue: FormValues<T>): UseFormReturn<T> => {
  // Gunakan useState dengan tipe FormValues<T> untuk memastikan nilai-nilai sesuai dengan tipe data yang diberikan
  const [values, setValues] = useState<FormValues<T>>(initialValue);

  // Fungsi untuk mengatur nilai formulir
  const handleFormUpdate: FormSetter<T> = (formType, formValue) => {
    // Jika formType adalah 'reset', kembalikan nilai formulir ke nilai awal
    if (formType === 'reset') {
      return setValues(initialValue);
    }
    // Jika bukan, perbarui nilai formulir dengan nilai baru
    return setValues({...values, [formType]: formValue});
  };

  // Kembalikan pasangan nilai formulir dan fungsi pengatur formulir
  return [values, handleFormUpdate];
};
