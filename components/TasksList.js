import React, { useEffect } from 'react';
import { Table, Container, Row, Col, Button } from 'reactstrap';



const TaskList = ({ tasks }) => {
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
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task) => (
                    <tr>
                      <th scope="row">{task._id}</th>
                      <td>{task.name}</td>
                      <td>{task.status}</td>
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
