import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";


export const successAdd = () => toast.success("Contact successfully added!");
export const successDelete = () =>
  toast.success("Contact successfully deleted!");
export const errorNotification = () =>
  toast.error("Oops, something went wrong");




export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, number });
      successAdd();
      return response.data;
    } catch (e) {
      errorNotification();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      successDelete();
      return response.data;
    } catch (e) {
      errorNotification();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);