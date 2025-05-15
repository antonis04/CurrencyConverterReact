import styled from 'styled-components';

export const ConverterContainer = styled.div`
  max-width: 600px;
  width: 100%;
  min-height: 400px;
  margin: 30px auto;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  position: relative;
`;

export const Title = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
`;

export const ConverterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 0 15px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 10px 0;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 8px;
  color: #555;
  padding-left: 5px;
  
  @media (min-width: 768px) {
    width: 120px;
    margin-bottom: 0;
  }
`;

export const Input = styled.input`
  padding: 15px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  flex: 1;
  
  &:focus {
    border-color: #4a90e2;
    outline: none;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.3);
  }
`;

export const Select = styled.select`
  padding: 15px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  background-color: white;
  cursor: pointer;
  flex: 1;
  
  &:focus {
    border-color: #4a90e2;
    outline: none;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.3);
  }
`;

export const Button = styled.button`
  padding: 16px;
  margin: 12px 0;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #3a80d2;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const Result = styled.div`
  margin: 25px 0 10px;
  padding: 20px;
  min-height: 60px;
  background-color: #e9f7ef;
  border-radius: 6px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessage = styled.div`
  color: #e74c3c;
  padding: 15px;
  margin: 15px 0;
  background-color: #fadbd8;
  border-radius: 6px;
  text-align: center;
`;

export const SwitchButton = styled.button`
  background-color: transparent;
  border: none;
  color: #4a90e2;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px auto;
  padding: 10px;
  
  &:hover {
    color: #3a80d2;
  }
`;
