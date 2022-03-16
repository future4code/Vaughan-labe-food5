import { useState } from "react";

 const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChangeForm = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };


  const cleanFields = () => {
   setForm(initialState)
  }

  return { form, onChangeForm, cleanFields };
};

export default useForm; 

export const useInput = (initialState) => {

  const [input, setForm] = useState(initialState)
  
  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setForm({ ...input, [name]: value });
  }

  const clear = () => {
    setForm(initialState);
  }
  
  return { input, onChangeInput, clear };
}




export const useFormPerfil = (initialState) =>{
    const [form, setForm] = useState(initialState)
    
    const handleInputChange = (event) => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }
    
    const clear = () => {
        setForm(initialState)
    }
    
    return [form, handleInputChange, clear]
}

