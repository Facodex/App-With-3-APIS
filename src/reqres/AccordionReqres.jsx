import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import SpinnerLittle from '../components/SpinnerLittle';
import { useFetchUsers } from '../hooks/useFetchUsers';

function AccordionReqres() {
  const [users, setUsers] = useState(null);
  const [resources, setResources] = useState(null);

  useEffect(() => {
    useFetchUsers('https://reqres.in/api/users?page=2', setUsers);
    useFetchUsers('https://reqres.in/api/products', setResources);
  }, []);

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>REQUEST A LIST OF USERS</Accordion.Header>
        <Accordion.Body>
          {
            users ? users.map(user => {
              return (
                <div key={user.id} className='d-flex justify-content-start align-items-center mb-2'>
                  <img src={user.avatar} className="rounded-circle avatarReqres mx-3" alt="Foto de perfil" />
                  <p className='fw-bold mx-2'>{user.first_name} {user.first_name}</p>
                  <p className='text-primary'>Email: {user.email} </p>
                </div>
              )
            })
              :
              <SpinnerLittle />
          }
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>REQUEST A LIST OF RESOURCES</Accordion.Header>
        <Accordion.Body>
          {
            resources ? resources.map(product => {
              return (
                <div key={product.id} className='d-flex justify-content-start align-items-center mb-2'>
                  <ul className='mx-2'>
                    <li>Name resource: {product.name}</li>
                    <li>Year: {product.year}</li>
                    <li>Pantone value: {product.pantone_value}</li>
                  </ul>
                  <div className="imgReqresResource" style={{backgroundColor: product.color}}>

                  </div>
                </div>
              )
            })
              :
              <SpinnerLittle />
          }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionReqres;
