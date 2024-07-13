import { Request, Response } from 'express';
import { Coffee } from '../database/models/Coffee';

export const getAllCoffees = async (req: Request, res: Response) => {
  try {
    const coffees = await Coffee.findAll();
    res.json(coffees);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const addCoffee = async (req: Request, res: Response) => {
  try {
    const { name, intensity, region, type } = req.body;
    const coffee = await Coffee.create({ name, intensity, region, type });
    res.status(201).json(coffee);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
