import styled from 'styled-components';
import { Form } from 'formik';


const FormField = styled(Form)`
text-align: center;
 width: 100%;
width: 384px;
height: 404px;
margin: 0 auto;
border: 1px solid black;
padding:20px;
border-radius: 10px;
display:flex;
flex-direction:column;
gap:10px;
/* background-color: rgba(0, 0, 0, 0.3); */
`
const FormViews = styled.form`
text-align: start;
width:384px;
height: 404px;
/* border: 1px solid black; */
margin-left:20px;
padding:20px;
border-radius: 10px;
display:flex;
flex-direction:column;
gap:20px;
/* background-color: rgba(0, 0, 0, 0.3); */
`


const Button = styled.button`
  background-color: var(--color-blue);
  width: 100%;
  height: 44px;
  padding: 10px 30px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: #F5FFFA;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;

  
`;
const ButtonSign = styled.button`
color: var(--color-blue);
font-size: 16px;
`


const Div = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
align-items: center;
/* text-align: center; */
color: #F5FFFA;
margin-left: auto;
margin-right: auto;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  `
const P = styled.p`
background-color: rgba(0, 0, 0, 0.3);
font-weight: 500;
max-width: 200px; 
border-radius: 10px;
padding: 5px;
text-align: center;
border:1px solid black;
&:hover{
color: #e9d362;
}`

const H2 = styled.h2`
font-weight: 400;
font-size: 26px;
margin: 10px 0;
color: var(--color-black);


  `

const Input = styled.input`
 font-size: 16px;
width:100%;
height:44px;
border-radius: 6px;
border: 1px solid var(--color-light-blue);
outline:none;

&::placeholder{
  color:var(--color-blue-secondary);
}
 `
const Span = styled.span`
 margin-top: 15px;
 font-weight: 500;
 
 &:hover{

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
color: #e9d362;
}`

const Error = styled.div`
  color: #fc8181;
  font-size: 0.75rem;
  text-align: left;
  margin-top: 0.25rem;

 `

export { Div, Button, FormViews, Input, H2, P, Span, Error, FormField, ButtonSign }