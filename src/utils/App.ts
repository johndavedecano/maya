import express, { NextFunction, Request, Response } from "express";
import { IAppSettings, IRoute, IRoutesOptions, IRoutes } from "../interfaces";
import { Callback } from "../types";
import { Injector } from "./Injector";

export function App(settings: IAppSettings): <T extends new (...args: Array<{}>) => any>(target: T) => void {
  const { port = 3333, cors = false, logs = "", database, databases = [] } = settings;

  return (target: any): void => {
    target.routes = settings.routes;
    target.port = !isNaN(port) ? port : 3333;
    target.cors = cors;
    target.logs = logs;
    target.database = database;
    target.databases = databases;
  };
}
