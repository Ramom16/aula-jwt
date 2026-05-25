import { Router} from "express";
import authController from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const authRoutes = Router();

authRoutes.post('/register', authController.criar);
authRoutes.post('/login', authController.login);

// Rota protegida, exige autenticação
authRoutes.get('/users', authMiddleware, authController.users);


export default authRoutes;