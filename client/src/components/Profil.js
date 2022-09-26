import React, { useState, useEffect } from "react";
import "./Profile.css";
import { useSelector, useDispatch } from "react-redux";

const Profil = () => {
  const dispatch = useDispatch();
  const client = useSelector((state) => state.client.client);
  console.log(client);
  return (
    <div style={{ marginTop: 150 }}>
      <div className="row" style={{ width: 1148, marginLeft: 48 }}>
        <div className="col-md-12">
          <ol className="breadcrumb">
            <h6 style={{ fontWeight: "bolder", fontSize: 24 }}>
              Informations Personnelles
            </h6>
          </ol>
        </div>
      </div>
      {client ? (
        <div className="container" style={{ marginTop: 110 }}>
          <div className="main-body" style={{ margin: 20 }}>
            {/* /Breadcrumb */}
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3" style={{ marginTop: 20 }}>
                <div
                  className="card"
                  style={{
                    marginLeft: -100,
                    marginTop: -120,
                    width: 400,
                    height: 350,
                  }}
                >
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src="data:image/png;base64,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"
                        alt="user"
                        class="rounded-circle p-1 bg-light"
                        width="120"
                        height="130"
                      />
                      <div className="mt-3">
                        <h4>
                          {client.name} {client.lastName}
                        </h4>
                        <p className="text-secondary mb-1">
                          Full Stack Developer
                        </p>
                        <p className="text-muted font-size-sm"></p>

                        {/* <button className="btn btn-primary">Changer votre photo</button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div
                  className="card mb-3"
                  style={{ marginLeft: -10, marginTop: -100, width: 665 }}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0" style={{ color: "blue" }}>
                          Prénom
                        </h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          class="form-control"
                          type="name"
                          name="name"
                          value={client.name}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0" style={{ color: "blue" }}>
                          Nom
                        </h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          class="form-control"
                          value={client.lastName}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0" style={{ color: "blue" }}>
                          Email
                        </h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          class="form-control"
                          value={client.email}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0" style={{ color: "blue" }}>
                          Téléphone
                        </h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          class="form-control"
                          value={client.telephone}
                        />
                      </div>
                    </div>
                    <hr />
                    {/*  <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Address</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            Bay Area, San Francisco, CA
                          </div>
                        </div>
                        <hr /> */}
                    <div className="row">
                      <div className="col-sm-12">
                        {/* <button variant="primary" onClick={()=> {dispatch(editUser(user._id,{name,lastName,email,password,imageUrl,isAdmin,phone})); alert("Votre profile est modifié")}}> Enregistrer </button> */}
                        {/*   <EditProfile user={user} /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 style={{ marginTop: 150, marginLeft: 600 }}> </h2>
      )}

      {/*Reservation List */}
    </div>
  );
};

export default Profil;
