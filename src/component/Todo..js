import React from "react"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useState } from "react"
function Todo({ singleElement, allElement, setAllElement }) {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [editDialog, seteditDialog] = useState({ title: singleElement.title, details: singleElement.details })




    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#3636d1b0", marginBottom: "10px", padding: "20px", width: "100%" }}>
            <div className="info" style={{ width: "60%" }}>
                <h3>{singleElement.title}</h3>
                <p>{singleElement.details}</p>
            </div>
            {
                singleElement.isCompleted ?
                 <div></div> :
                <div className="links" style={{ width: "30%", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                    <Button onClick={taskCompleted} variant="outlined" style={{ border: "2px solid green", padding: "10px", borderRadius: "50%", color: singleElement.isCompleted ? "white" : "green", backgroundColor: singleElement.isCompleted ? "green" : "transparent" }}>
                        <i className="fa-solid fa-check"></i>
                    </Button>


                    <Button variant="outlined" onClick={handleClickOpen2} style={{ border: "2px solid blue", padding: "10px", borderRadius: "50%", color: "blue", backgroundColor: "transparent" }}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                    <Dialog
                        open={open2}
                        onClose={handleClose2}
                        PaperProps={{
                            component: 'form',
                            onSubmit: (event) => {
                                event.preventDefault();
                                handleClose2();
                            },
                        }}
                    >
                        <DialogTitle>ُEdit Dialog</DialogTitle>
                        <DialogContent>
                            <DialogContentText>Are you sure you want to edit dialog</DialogContentText>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                label="Edit Title"
                                fullWidth
                                variant="standard"
                                value={editDialog.title}
                                onChange={editDialogTitle}
                            />
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                label="Edit Details"
                                fullWidth
                                variant="standard"
                                value={editDialog.details}
                                onChange={editDialogDetails}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose2}>Cancel</Button>
                            <Button type="submit" onClick={EditDialog}>Confirm</Button>
                        </DialogActions>
                    </Dialog>


                    <Button variant="outlined" onClick={handleClickOpen1} style={{ border: "2px solid red", padding: "10px", borderRadius: "50%", color: "red", backgroundColor: "transparent" }}>
                        <i className="fa-solid fa-trash"></i>
                    </Button>
                    <Dialog
                        open={open1}
                        onClose={handleClose1}
                        PaperProps={{
                            component: 'form',
                            onSubmit: (event) => {
                                event.preventDefault();
                                handleClose2();
                            },
                        }}
                    >
                        <DialogTitle>Edit Information</DialogTitle>
                        <DialogContent>
                            <DialogContentText>Are You sure you want to delete this task</DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose1}>Cancel</Button>
                            <Button type="submit" onClick={deleteTask}>Confirm</Button>
                        </DialogActions>
                    </Dialog>
                </div>}
        </div>
    )




    function handleClickOpen1() {
        setOpen1(true);
    }
    function handleClose1() {
        setOpen1(false);
    }
    function deleteTask() {
        let update = allElement.filter((element) => {
            return element.id !== singleElement.id
        })
        setAllElement(update)
    }
    function handleClickOpen2() {
        setOpen2(true);
    }
    function handleClose2() {
        setOpen2(false);
    }
    function editDialogTitle(event) {
        seteditDialog({ ...editDialog, title: event.target.value })
    }
    function editDialogDetails(event) {
        seteditDialog({ ...editDialog, details: event.target.value })
    }
    function EditDialog() {
        let update = allElement.map((element) => {
            if (element.id === singleElement.id) {
                return {
                    ...element,
                    title: editDialog.title,
                    details: editDialog.details
                }
            }
            else {
                return element
            }
        })
        setAllElement(update)
    }
    function taskCompleted() {
        let update = allElement.map((element) => {
            if (element.id === singleElement.id) {
                element.isCompleted = !element.isCompleted
                return element
                // return {...element, isCompleted: !element.isCompleted}
            }
            else {
                return element
            }
        })
        setAllElement(update)
    }
}
export default Todo