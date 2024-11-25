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
text-align: center;
width:384px;
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
  background-color: #333333;
  margin: 10px;
  padding: 10px 25px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: #F5FFFA;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;

  &:hover {
    background-color:#e9d362;
    color: #333333;
    text-decoration: none;
  }
`;

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
margin: 10px 0;
color: #F5FFFA;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);

  `

const Input = styled.input`
 font-size: 10px;
width:200px;
height:20px;
border-radius: 5px;
border: none;
outline:none;

/* &:hover {
  background-color: #e9d362;
    color: #333333;
  } */
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

export { Div, Button, FormViews, Input, H2, P, Span, Error, FormField }