import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const AddVessel = () => {
  // DATA HOOKS
  const [vesselName, setVesselName] = useState("");
  const [vesselId, setVesselId] = useState(0);
  // CONTEXT HOOK FOR GLOBAL DATA
  const { addVessel } = useContext(GlobalContext);
  const history = useHistory();

  // EVENT LISTENER FOR SUBMIT
  const onSubmit = (e) => {
    e.preventDefault();
    const newVessel = {
      id: uuid(),
      vesselId: vesselId,
      vesselName: vesselName,
    };
    addVessel(newVessel);
    history.push("/");
  };
  // ON CHANGE FOR INPUT FIELDS
  const onChangeId = (e) => {
    setVesselId(e.target.value);
  };
  const onChangeName = (e) => {
    setVesselName(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Vessel Id</Label>
        <Input
          type='number'
          value={vesselId}
          onChange={onChangeId}
          name='vesselId'
          placeholder='Enter Vessel Id'
          required></Input>
      </FormGroup>
      <FormGroup>
        <Label>Vessel Name</Label>
        <Input
          type='text'
          value={vesselName}
          onChange={onChangeName}
          name='vesselName'
          placeholder='Enter Vessel Name'
          required></Input>
      </FormGroup>
      <Button type='submit'>Submit</Button>
      <Link to='/' className='btn btn-danger ml-2'>
        Cancel
      </Link>
    </Form>
  );
};
