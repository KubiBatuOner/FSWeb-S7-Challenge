import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Switch, Route, useHistory } from "react-router-dom";
import Header from "./Header";
import Form from "./Form";
import Home from "./Home";

const formSchema = Yup.object().shape({
  isim: Yup.string()
    .min(3, "İsminiz en az 3 karakterli olmak zorundadır")
    .required("Lütfen geçerli bir isim giriniz!"),
  adres: Yup.string()
    .min(5, "Adresiniz en az 5 karakterli olmak zorundadır!")
    .max(90, "Adresiniz en fazla 90 karakterli olmak zorundadır!")
    .required("Lütfen geçerli bir adres giriniz!"),
  boyut: Yup.string().required("Lütfen bir boyut seçiniz!"),
  cesit: Yup.mixed()
    .oneOf(
      [
        "Margarita Pizza",
        "Pepperoni Pizza",
        "4 Peynirli Pizza",
        "Supreme Pizza",
        "Barbekü Tavuklu Pizza",
      ],
      "Lütfen çeşit seçiniz!"
    )
    .required(),
  özel: Yup.string(),
  malzeme1: Yup.boolean(),
  malzeme2: Yup.boolean(),
  malzeme3: Yup.boolean(),
  malzeme4: Yup.boolean(),
  malzeme5: Yup.boolean(),
  malzeme6: Yup.boolean(),
  siparisSayisi: Yup.number()
    .positive()
    .min(1, "En az 1 olmak zorundadır!")
    .required("Lütfen geçerli bir sipariş sayısı giriniz!"),
  telefon: Yup.string()
    .min(10, "Eğer telefon numarası girilcekse 10 sayılı olmak zorundadır!")
    .max(10, "Eğer telefon numarası girilcekse 10 sayılı olmak zorundadır!"),
});

const initialData = {
  isim: "",
  adres: "",
  boyut: "",
  cesit: "",
  özel: "",
  malzeme1: false,
  malzeme2: false,
  malzeme3: false,
  malzeme4: false,
  malzeme5: false,
  malzeme6: false,
  siparisSayisi: "",
};

const initialDataError = {
  isim: "Lütfen geçerli bir isim giriniz!",
  adres: "Lütfen geçerli bir adres giriniz!",
  boyut: "Lütfen bir boyut seçiniz!",
  cesit: "Lütfen çeşit seçiniz!",
  özel: "",
  malzeme1: "",
  malzeme2: "",
  malzeme3: "",
  malzeme4: "",
  malzeme5: "",
  malzeme6: "",
  siparisSayisi: "Lütfen geçerli bir sipariş sayısı giriniz!",
};

//yönlendirme
const App = () => {
  let history = useHistory();
  function handleClick() {
    history.push("/pizza");
  }

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState(initialDataError);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [siparis, setSiparis] = useState(null);

  function checkError(name, value) {
    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    let result = value;
    if (type === "checkbox") {
      result = checked;
    }
    checkError(name, result);
    setFormData({
      ...formData,
      [name]: result,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formData)
      .then((response) => {
        setSiparis(response.data);
        console.log("SİPARİŞ TANIMLANDI", response);
        setFormData(initialData);
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    formSchema
      .isValid(formData)
      .then((response) => setButtonDisable(!response));
  }, [formData]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home handleClick={handleClick} />
        </Route>
        <Route path="/pizza">
          <Form
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            buttonDisable={buttonDisable}
            siparis={siparis}
          />
        </Route>
      </Switch>
    </>
  );
};
export default App;
