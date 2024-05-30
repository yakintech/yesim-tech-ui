import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import YTextField from '../../../../components/core-components/input';
import YButton from '../../../../components/core-components/button';
import { Checkbox, FormControlLabel, Switch } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { BaseService } from '../../../../api/service/base/baseService';
import { ProductService } from '../../../../api/service/product/ProductService';


interface IFormInput {
  name: string;
  price: number;
  isActive: boolean;
  categories: string[];
  addDate: dayjs.Dayjs;
  supplierId: string;
  name2: string;
}

function Add() {

  var newDate = dayjs(new Date())

  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const categoriesData = ["Electronic", "Sport", "Camp", "Phone"];

  const { control, handleSubmit, setValue, getValues } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      price: 0,
      isActive: false,
      categories: [],
      addDate: newDate,
      supplierId: "",
    }
  });

  const addProduct: SubmitHandler<IFormInput> = (data: IFormInput) => {
    if (!checked) {
      data.price = 0;
    }

    var productService = new ProductService()


    console.log(" data.addDate",  data.addDate)

    let newProduct = {
      name: data.name,
      price: data.price,
      isActive: data.isActive,
      categories: data.categories,
      addDate: data.addDate.toDate(),
      supplierId: data.supplierId,
    }


    console.log("newProduct", newProduct)

    productService.create(newProduct)
      .then((response) => {
        alert("Product added successfully")
      })



  };

  return (
    <form onSubmit={handleSubmit(addProduct)}>
      <div>
        <Controller
          name='addDate'
          control={control}
          render={({ field }) => {
            return <>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    name={field.name}
                    value={field.value}
                    label="Basic date picker"
                    onChange={(e) => field.onChange(e)}
                    format='DD/MM/YYYY'
                  />
                </DemoContainer>
              </LocalizationProvider>
            </>
          }}
        />
      </div>

      <div>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <YTextField {...field} />
          }
        />
      </div>
      {checked && (
        <div>
          <Controller
            name="price"
            control={control}
            render={({ field }) => <YTextField {...field} />
            }
          />
        </div>
      )}
      <div>
        <Controller
          name="isActive"
          control={control}
          render={({ field }) => (
            <Switch
              {...field}
              onChange={(e) => field.onChange(e.target.checked)}
              checked={field.value}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          )}
        />
      </div>
      <div>
        {categoriesData.map((category, index) => (
          <div key={index}>
            <Controller
              name="categories"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value.includes(category)}
                      onChange={(e) => {
                        const newCategories = e.target.checked
                          ? [...value, category]
                          : value.filter((c: string) => c !== category);
                        onChange(newCategories);
                      }}
                      value={category}
                    />
                  }
                  label={category}
                />
              )}
            />
          </div>
        ))}
      </div>

      <YButton type="submit" variant="contained" color="primary">Submit</YButton>
    </form>
  );
}

export default Add;
