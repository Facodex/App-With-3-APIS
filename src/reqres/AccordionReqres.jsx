import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import SpinnerLittle from '../components/SpinnerLittle';

const fetchUsers = async (url, setState) => {
  const request = await fetch(url);
  const response = await request.json();
  setState(response.data);
  return response.data;
};

function AccordionReqres() {
  const [users, setUsers] = useState(null);
  const [resources, setResources] = useState(null);

  useEffect(() => {
    fetchUsers('https://reqres.in/api/users?page=2', setUsers);
    fetchUsers('https://reqres.in/api/unknown', setResources);
  }, []);

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" onClick={fetchUsers}>
        <Accordion.Header>Pide una lista de usuarios</Accordion.Header>
        <Accordion.Body>
          {
            users ? users.map(user => {
              return (
                <div className='d-flex justify-content-around'>
                  <img src={user.avatar} className="rounded w-5 h-5" alt="Foto de perfil" />
                  <p key={user.id}>{user.first_name} - </p>
                </div>
              )
            })
              :
              <SpinnerLittle />
          }
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionReqres;
