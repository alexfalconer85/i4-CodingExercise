import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const VesselList = () => {
  // LIST OF VESSELS TO DISPLAY
  const { vessels, removeVessel } = useContext(GlobalContext);
  console.log(vessels);
  return (
    <ListGroup className='mt-4'>
      {/* LOOP THRU VESSELS THEN DISPLAY LIST */}
      {vessels.length > 0 ? (
        <>
          {vessels.map((vessel) => (
            <ListGroupItem className='d-flex' key={vessel.id}>
              <strong>{vessel.vesselId}</strong>
              <strong style={{ paddingLeft: 10 }}>{vessel.vesselName}</strong>
              <div className='ml-auto' style={{ paddingLeft: 250 }}>
                <Link
                  to={`/edit/${vessel.id}`}
                  color='warning'
                  className='btn btn-warning mr-1'>
                  Edit
                </Link>
                <Button onClick={() => removeVessel(vessel.id)} color='danger'>
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className='text-center'>No vessels</h4>
      )}
    </ListGroup>
  );
};
