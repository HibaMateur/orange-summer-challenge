import Items from '../models/Items.js';
export const getItems = async (req, res) => {
    try {   
  
      const ite = await Items.find();    
      res.status(200).json(ite);
  } catch (error) {
   
      res.status(404).json({ message: error.message });
  }}
  export const getItemsById = async (req, res) => {
    try {   
  
      const ite = await Items.findById(req.params.id);    
      res.status(200).json(ite);
  } catch (error) {
   
      res.status(404).json({ message: error.message });
  }}
  