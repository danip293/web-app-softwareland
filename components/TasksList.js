import React, { useEffect } from 'react';
import { Table, Container, Row, Col, Button } from 'reactstrap';

const del = (id) =>
  fetch(`https://api-softwareland-sigma.vercel.app/tasks/${id}`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(() => console.log('deleted'))
    .catch((err) => console.log(err));

const TaskList = ({ tasks }) => {
  console.log(tasks);

  return (
    <section className="section" id="tasklist">
      <Container>
        <Row>
          <Col>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">Lista de tareas</span>
              </h3>
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Status</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr>
                      <th scope="row">{task._id}</th>
                      <td>{task.name}</td>
                      <td>{task.status}</td>
                      <td>
                        <Button
                          color="danger"
                          onClick={(e) => {
                            del(task._id);
                          }}
                        >
                          Borrar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TaskList;
