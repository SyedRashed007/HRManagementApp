import React from "react";
import {
  Progress,
  Table,
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";

function ReactStrap() {
  return (
    <div>
      <u>
        <p className="typography">Progress </p>
      </u>
      <div>
        <div className="text-center">1 of 5</div>
        <Progress max="5" value="1" />
        <div className="text-center">50 of 135</div>
        <Progress max="135" value={50} />
        <div className="text-center">75 of 111</div>
        <Progress max={111} value={75} />
        <div className="text-center">463 of 500</div>
        <Progress max={500} value="463" />
        <div className="text-center">Various (40) of 55</div>
        <Progress multi>
          <Progress bar max={55} value="5">
            5
          </Progress>
          <Progress bar color="success" max={55} value="15">
            15
          </Progress>
          <Progress bar color="warning" max={55} value="10">
            10
          </Progress>
          <Progress bar color="danger" max={55} value="10">
            10
          </Progress>
        </Progress>
      </div>
      <u>
        <p className="typography">Table </p>
      </u>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <u>
        <p className="typography">Popover </p>
      </u>
      <div className="text-center">
        <Button id="ScheduleUpdateButton" type="button">
          Open Popover
        </Button>
        <UncontrolledPopover
          placement="bottom"
          target="ScheduleUpdateButton"
          trigger="click"
          color="black"
        >
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </PopoverBody>
        </UncontrolledPopover>
      </div>
    </div>
  );
}

export default ReactStrap;
