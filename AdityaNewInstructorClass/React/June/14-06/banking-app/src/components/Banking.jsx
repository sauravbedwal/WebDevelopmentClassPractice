import { Button, Input, Flex } from "@mantine/core";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

//Action Creators
const createDeposit = (amount) => {
  return {
    type: "DEPOSIT",
    amount: Number(amount),
  }; 
};

const createWithdraw = (amount) => {
  return {
    type: "WITHDRAW",
    amount: Number(amount),
  }; 
};

const createCollectInterest = (amount) => {
  return {
    type: "COLLECT_INTEREST",
  };
};

const createDeleteAccount = (amount) => {
  return {
    type: "DELETE_ACCOUNT",
  };
};


const Banking = () => {

const inputRef = useRef(null); 
const dispatch = useDispatch();        //called useDispatch() hook that returns dispatch function

const handleDeposit = () => {
  dispatch(createDeposit(inputRef.current.value));
  // console.log(createDeposit(inputRef.current.value));
};

const handleWithdraw = () => {
  dispatch(createWithdraw(inputRef.current.value));
};

const handleCollectInterest = () => {
  dispatch(createCollectInterest(inputRef.current.value));
};

const handleDeleteAccount = () => {
  dispatch(createDeleteAccount(inputRef.current.value));
};


//Instead of this we created a function outside of Banking comp bcoz we dont need any of these values.
// const handleDeposit = () => {
//   // console.log(inputRef.current);
//   // console.log(inputRef.current.value);
//   const actionObject = {
//     type: "DEPOSIT",
//     amount: Number(inputRef.current.value),                    //parseInt(inputRef.current.value),
//   };
//   console.log(actionObject);
// };

  return (
    <div>
      <div>
        <Input ref={inputRef} style={{ width: "50%" }} />
      </div>

      <Flex 
      mih={50}
      gap="xl"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
      style={{ marginTop: "2rem" }}
    >
      <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} onClick={handleDeposit}>Deposit</Button>
      <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} onClick={handleWithdraw}>Withdraw</Button>
      <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }} onClick={handleCollectInterest}>Collect Interest</Button>
      <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }} onClick={handleDeleteAccount}>Delete Account</Button>
    </Flex>
    </div>
  )
}

export default Banking;