import form from "./form";

const renderForm = ()=>{
    let formElement = document.createElement('form');
    formElement.className = 'form-line';
    formElement.innerHTML=form();
    document.querySelector('.card-body').appendChild(formElement);
}
export default renderForm;