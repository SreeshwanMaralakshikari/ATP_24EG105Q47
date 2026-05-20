import exp from 'express';
import {UserModel} from '../models/UserModel.js';
import {hash,compare} from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {config} from 'dotenv';
import { verifyToken } from '../middlewares/VerifyToken.js';

export const adminApp=exp.Router();

