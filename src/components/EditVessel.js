import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const EditVessel = (props) => {
  const { editVessel, vessels } = useContext(GlobalContext);
  // HOOK FOR SELECTED VESSEL
  const [selectedVessel, setSelectedVessel] = useState({
    id: "",
    vesselId: "",
    vesselName: "",
  });
  const history = useHistory();
  const currentVesselId = props.match.params.id;

  useEffect(() => {
    const vesselId = currentVesselId;
    // GO FIND ANY VESSELS THAT MATCH THE SELECTED VESSEL by ID
    const selectedVessel = vessels.find((Vessel) => Vessel.id === vesselId);
    // KEEP SELECTED VESSEL FOR LATER
    setSelectedVessel(selectedVessel);
  }, [currentVesselId, vessels]);

  // CHANGE INPUT EVENT FOR ID
  const onChangeId = (e) => {
    setSelectedVessel({
      ...selectedVessel,
      vesselId: e.target.value,
    });
  };
  // CHANGE INPUT EVENT FOR NAME
  const onChangeName = (e) => {
    setSelectedVessel({
      ...selectedVessel,
      vesselName: e.target.value,
    });
  };
  // SUBMIT HANDLING WITH NEW SELECTED VESSEL
  const onSubmit = (e) => {
    e.preventDefault();
    editVessel(selectedVessel);
    history.push("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Vessel Id</Label>
        <Input
          type='text'
          value={selectedVessel.vesselId}
          onChange={onChangeId}
          name='vesselId'
          placeholder='Enter Vessel ID'
          required></Input>
      </FormGroup>
      <FormGroup>
        <Label>Vessel Name</Label>
        <Input
          type='text'
          value={selectedVessel.vesselName}
          onChange={onChangeName}
          name='vesselName'
          placeholder='Enter Vessel Name'
          required></Input>
      </FormGroup>
      <Button type='submit'>Submit Vessel</Button>
      <Link to='/' className='btn btn-danger ml-2'>
        Cancel
      </Link>
    </Form>
  );
};
