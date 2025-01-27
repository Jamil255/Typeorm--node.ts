import express, { Router } from 'express';
import { getAllUser } from '../controllers/manyToMany.js';

// Create a router instance
const router: Router = express.Router();

// Define a route
router.get('/api',getAllUser);

// Export the router
export default router;