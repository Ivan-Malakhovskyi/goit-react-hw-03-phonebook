import styled from 'styled-components'
import { Form, Field, ErrorMessage, Formik } from 'formik';



export const ContactForm = styled(Form)`
  
display: flex;
flex-flow: column;
gap: 16px;
padding: 20px;
border-radius: 4px;
background-color: ${({ theme: { colors } }) => colors.white};
box-shadow: ${({theme: {shadows}}) => shadows.addBoxShadow};


`

export const ErrorMsg = styled(ErrorMessage)`
margin-top: 10px;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.0; /* 100% */
letter-spacing: -0.72px;
color: red`

export const FieldForm = styled(Field)`
display: flex;
padding: 10px;
transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);


`

export const Main = styled(Formik)`
height: 40px;
margin-bottom: 16px;
color: ${({theme: {colors}}) => colors.red};
`

export const LabelForm = styled.label`

color: ${({ theme: { colors } }) => colors.black};
margin: 0;
margin-bottom: 16px
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 1.33; 
letter-spacing: -0.18px;
`

export const LabelContacts = styled.label`
display: flex;
align-items: center;
gap: 20px;
color: ${({theme: {colors}}) => colors.addBlack};
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 1.33; /* 133.333% */
letter-spacing: -0.18px;
text-transform: uppercase;
`
export const ContactsWrapper = styled.div`
margin-bottom: 20px;
margin-top: 20px;`


export const Title = styled.h2`
padding-top: 20px;
padding-bottom: 20px;
`

export const MainTitle = styled.h1`
padding-top: 20px;
padding-bottom: 20px;`

export const Topic = styled.p`

letter-spacing: .02em;
    color: ${({ theme: { colors } }) => colors.black};
    margin-bottom: 16px
`

export const Input = styled.input`display: flex;
border-radius: ${({ theme: { radii } }) => radii.md};
border: none;
  outline: none;

`



export const Buttons = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    padding: 20px 60px;
    margin: 0 auto;
    cursor: pointer;
    color: ${({theme: {colors}}) => colors.black};
    background-color: ${({theme: {colors}}) => colors.white};
    font-family: inherit;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: .04em;
    border-radius: 40px;
    border: 2px solid ${({theme: {colors}}) => colors.borderListColor};
    
    &:hover , &: focus{
        background-color: ${({ theme: { colors } }) => colors.borderListColor};
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    `


export const ResetButtons = styled.button`
  color: white;
  background-color: transparent;
  padding: 8px 16px;
  border-radius: 36px;
  border: none;
  background-color: ${({ theme: {colors} }) => colors.borderListColor};
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
  &:hover, &:focus {
    background-color: ${({ theme: { colors } }) => colors.red};
  }

`

export const Search = styled.input`
  display: flex;
padding: 10px;
`

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 40px;
 
`  
export const ListItem = styled.li`
flex-basis: calc((100% - 40px)/5);
  border: 1px solid ${({ theme: { colors } }) => colors.borderListColor};
   padding: 10px;
   border-radius: 4px; 
   background-color: ${({ theme: { colors } }) => colors.white};
   margin: 10px;


  `

export const ItemButton = styled.button`
  background-color: transparent;
  padding: 8px 16px;
  border-radius: 36px;
  border: none;
  background-color: ${({ theme: {colors} }) => colors.buttonDeleteColor};
  cursor: pointer;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
  &:hover, &:focus {
    background-color: ${({ theme: { colors } }) => colors.red};
  }
  `