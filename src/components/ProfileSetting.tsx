import React, { useState, FormEvent } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

function ProfileSetting() {
  const [lgShow, setLgShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newProfile, setNewProfile] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    about: "",
  });

  const params = useParams();

  const deleteProfile = async () => {
    try {
      const response = await fetch(
        `http://localhost:4002/profile/${params.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );

      if (response.ok) {
        alert("Profile deleted");
        navigate("/");
      } else {
        alert("Error deleting profile");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const editProfile = async () => {
    try {
      const response = await fetch(
        `http://localhost:4002/profile/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
          body: JSON.stringify(newProfile),
        }
      );

      if (response.ok) {
        alert("Profile updated");
        navigate("/");
      } else {
        alert("Error updating profile");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const handleEdit = (e: FormEvent) => {
    e.preventDefault();
    editProfile();
  };
  const handleDelete = (e: FormEvent) => {
    e.preventDefault();
    deleteProfile();
  };
  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setNewProfile({ ...newProfile, [name]: value });
  };
  const handleEditMode = () => {
    setEditMode(true);
  };
  const handleCancel = () => {
    setEditMode(false);
  };
  const handleClose = () => {
    setLgShow(false);
  };
  const handleShow = () => {
    setLgShow(true);
  };

  const editJob = async () => {
    setLgShow(true);
    setEditMode(true);
    try {
      let response = await fetch(
        "https://http://localhost:4002/profile/",

        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setNewProfile({
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          address: data.address,
          city: data.city,
          state: data.state,
          zip: data.zip,
          country: data.country,
          about: data.about,
        });
      } else {
        alert("something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>ProfileSetting</div>;
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => {
          setEditMode(false);
          setLgShow(false);
          setNewProfile({
            firstName: "",
            lastName: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            country: "",
            about: "",
          });
        }}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-add-new-ex">
            {editMode ? "Edit Profile" : "Add Profile"}
          </Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="firstNameValue">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={newProfile.firstName}
                onChange={(e) =>
                  setNewProfile({ ...newProfile, firstName: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastNameValue">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={newProfile.lastName}
                onChange={(e) =>
                  setNewProfile({
                    ...newProfile,
                    lastName: e.target.value,
                  })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phoneValue">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your phone number"
                value={newProfile.phone}
                onChange={(e) =>
                  setNewProfile({
                    ...newProfile,
                    phone: e.target.value,
                  })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="addressValue">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex. London"
                value={newProfile.address}
                onChange={(e) =>
                  setNewProfile({ ...newProfile, address: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-inline-block martin-width-45"
              controlId="cityValue"
            >
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={newProfile.city}
                onChange={(e) =>
                  setNewProfile({
                    ...newProfile,
                    city: e.target.value,
                  })
                }
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3 float-right d-inline-block  martin-width-45"
              controlId="aboutValue"
            >
              <Form.Label>About</Form.Label>
              <Form.Control
                type="text"
                value={newProfile.about}
                onChange={(e) =>
                  setNewProfile({
                    ...newProfile,
                    about: e.target.value,
                  })
                }
              />
            </Form.Group>
            {editMode && (
              <Form.Group controlId="formUploadProfilePic" className="mb-3">
                <Form.Label>Upload file</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            )}
          </Modal.Body>
          <Modal.Footer>
            {editMode ? (
              <>
                <Button
                  variant="link"
                  type="button"
                  onClick={() => deleteProfile()}
                >
                  <i className="bi bi-trash3"></i> Delete Profile
                </Button>
                <Button
                  variant="primary"
                  type="button"
                  className="profile-main-btn mb-2 mb-lg-0"
                >
                  Edit Profile
                </Button>
              </>
            ) : (
              <Button
                variant="primary"
                type="submit"
                className="profile-main-btn mb-2 mb-lg-0"
              >
                Save
              </Button>
            )}
          </Modal.Footer>
        </Form>
      </Modal>
      ;
    </>
  );
}

export default ProfileSetting;
