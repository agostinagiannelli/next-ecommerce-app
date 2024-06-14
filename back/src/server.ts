import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./routes";
import morgan from "morgan";

const app = express();

// const allowedOrigins = [
//   'https://codecraft-agostina.vercel.app',
//   'http://localhost:3000'
// ];

// const corsOptions = {
//   origin: function (origin: any, callback: any) {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };

// app.use(cors(corsOptions));

const allowedOrigins = [
  'https://codecraft-agostina.vercel.app',
  'http://localhost:3000'
];

const corsOptions = {
  origin: function (origin: any, callback: any) {
    // Permitir todos los orígenes durante el desarrollo con ngrok
    if (process.env.NODE_ENV === 'development' || allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

// app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).send({
    statusCode: err.statusCode || 500,
    message: err.message || "Internal Server Error",
  });
});

export default app;
