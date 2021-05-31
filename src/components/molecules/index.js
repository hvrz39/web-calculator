import styled from 'styled-components';
import LoginForm from './LoginForm';
import Form from './Form';
import NavBar from './NavBar';
import DataGrid from './DataGrid';
import ViewEditDialog from './ViewEditDialog';
import DynamicForm from './DynamicForm';
import ConfirmDialog from './ConfirmDialog';
import ArithmeticOperation from './ArithmeticOperation';

export const DialogTitleContent = styled.div
`
  display:flex;
`
export const ButtonPanel = styled.div
`
  display:flex;
  width: 100%;
`

export const ButtonPaneLeft = styled.div
`
  text-alight: left;
  flex: 1;

`
export const ButtonPaneRight = styled.div
` text-alight: right;  
  flex: 1;
  display: flex;
  justify-content: space-between;  
`
export {
    LoginForm,
    Form,
    NavBar,
    DataGrid,
    ViewEditDialog,
    DynamicForm,
    ConfirmDialog,
    ArithmeticOperation
}